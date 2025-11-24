"use server";

import { cookies } from "next/headers";

export async function setTokens(access:string, refresh:string){
  cookies().set("access_token", access, { httpOnly:true, path:"/" });
  cookies().set("refresh_token", refresh, { httpOnly:true, path:"/" });
}

export async function clearTokens(){
  cookies().delete("access_token");
  cookies().delete("refresh_token");
}
