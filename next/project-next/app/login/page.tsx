import { loginAction } from "@/app/actions/loginAction";

export default function Login(){
  return (
    <form action={loginAction} className="card max-w-sm mx-auto space-y-4">
      <h1 className="text-xl font-bold">Login</h1>

      <input className="input" name="username" placeholder="Username" required />
      <input className="input" name="password" type="password" placeholder="Senha" required />

      <button className="button-primary w-full">Entrar</button>
    </form>
  );
}
