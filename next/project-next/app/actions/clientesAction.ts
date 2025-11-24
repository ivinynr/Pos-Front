"use server";

import { getAccessToken } from "@/lib/session";
import { revalidatePath } from "next/cache";

const API = "https://aula-angular.bcorp.tec.br/api";

export async function getClientes(){
  const token = getAccessToken();

  const res = await fetch(`${API}/clientes`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store"
  });

  return await res.json();
}

export async function getClienteById(id:string){
  const token = getAccessToken();
  const res = await fetch(`${API}/clientes/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store"
  });
  return await res.json();
}

export async function createCliente(formData: FormData){
  const token = getAccessToken();

  await fetch(`${API}/clientes`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      nome: formData.get("nome"),
      email: formData.get("email"),
      telefone: formData.get("telefone")
    })
  });

  revalidatePath("/clientes");
}

export async function updateCliente(id:string, formData: FormData){
  const token = getAccessToken();

  await fetch(`${API}/clientes/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      nome: formData.get("nome"),
      email: formData.get("email"),
      telefone: formData.get("telefone")
    })
  });

  revalidatePath("/clientes");
}

export async function deleteCliente(id:string){
  const token = getAccessToken();

  await fetch(`${API}/clientes/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` }
  });

  revalidatePath("/clientes");
}
