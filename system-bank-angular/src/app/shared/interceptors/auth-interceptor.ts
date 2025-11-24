import { HttpContextToken, HttpErrorResponse, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';
import { AuthService } from '../services/auth/auth-service';
import { catchError, switchMap, throwError } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

const RETRY_FLAG = new HttpContextToken<boolean>(() => false);

// Helper: adiciona o header Authorization se existir token
function withAuth(req: HttpRequest<any>, token: string | null) {
  return token ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }) : req;
}

function isAuthRoute(url: string) {
  return url.includes('/token/');
}

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  const platformId = inject(PLATFORM_ID);

  const isBrowser = isPlatformBrowser(platformId);

  // Não intercepta login/refresh
  if (isAuthRoute(req.url)) return next(req);

  // 1. Envia token atual (SE estivermos no browser)
  const reqWithToken = withAuth(req, isBrowser ? auth.getToken() : null);

  return next(reqWithToken).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status !== 401) return throwError(() => error);

      const alreadyTried = req.context.get(RETRY_FLAG);
      if (alreadyTried || !isBrowser) {
        auth.logout();
        return throwError(() => error);
      }

      const refresh = isBrowser ? localStorage.getItem('refresh_token') : null;
      if (!refresh) {
        auth.logout();
        return throwError(() => error);
      }

      return auth.refreshToken(refresh).pipe(
        switchMap((resp: any) => {
          const newAccess = resp?.access;
          if (!newAccess || !isBrowser) {
            auth.logout();
            return throwError(() => error);
          }

          localStorage.setItem('access_token', newAccess);

          const retried = withAuth(
            req.clone({ context: req.context.set(RETRY_FLAG, true) }),
            newAccess
          );

          return next(retried);
        }),

        catchError((err) => {
          auth.logout();
          return throwError(() => err);
        })
      );
    })
  );
};
