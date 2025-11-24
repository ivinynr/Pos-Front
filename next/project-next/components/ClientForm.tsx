import { createCliente, updateCliente } from "@/app/actions/clientesAction";

export default function ClientForm({cliente}:{cliente?:any}){
  const action = cliente
    ? (fd)=>updateCliente(cliente.id, fd)
    : createCliente;

  return (
    <form action={action} className="card space-y-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold">{cliente ? "Editar" : "Cadastrar"} Cliente</h1>

      <input className="input" name="nome" defaultValue={cliente?.nome} placeholder="Nome" required />
      <input className="input" name="email" defaultValue={cliente?.email} placeholder="Email" required />
      <input className="input" name="telefone" defaultValue={cliente?.telefone} placeholder="Telefone" required />

      <button className="button-primary w-full">Salvar</button>
    </form>
  );
}
