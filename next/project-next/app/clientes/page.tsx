import RequireAuth from "@/components/RequireAuth";
import { getClientes, deleteCliente } from "@/app/actions/clientesAction";

export default async function ClientesPage(){
  const clientes = await getClientes();

  return (
    <RequireAuth>
      <div className="card space-y-4">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold">Clientes</h1>
          <a href="/clientes/novo" className="button-primary">Novo</a>
        </div>

        <table className="w-full">
          <thead><tr><th>Nome</th><th>Email</th><th>Telefone</th><th>Ações</th></tr></thead>
          <tbody>
            {Array.isArray(clientes) && clientes.map((c:any)=>(
              <tr key={c.id} className="border-t">
                <td>{c.nome}</td><td>{c.email}</td><td>{c.telefone}</td>
                <td className="space-x-2">
                  <a href={`/clientes/${c.id}`} className="text-blue-600 underline">Editar</a>
                  <form action={async()=>{ "use server"; await deleteCliente(c.id); }} className="inline">
                    <button className="button-danger">Excluir</button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </RequireAuth>
  );
}
