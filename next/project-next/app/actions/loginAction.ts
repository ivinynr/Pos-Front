"use server";


import { redirect } from "next/navigation";
import { setTokens } from "./authActions";

const API = "https://aula-angular.bcorp.tec.br/api";

export async function loginAction(formData: FormData){
  const username = formData.get("username");
  const password = formData.get("password");

  const res = await fetch(`${API}/token/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  if(!res.ok) throw new Error("Login inválido");

  const data = await res.json();
  console.log(data)
  await setTokens(data.access, data.refresh);
  
  redirect("/clientes");
}
