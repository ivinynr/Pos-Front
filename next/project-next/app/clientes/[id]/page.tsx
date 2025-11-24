import RequireAuth from "@/components/RequireAuth";
import ClientForm from "@/components/ClientForm";
import { getClienteById } from "@/app/actions/clientesAction";

export default async function Edit({params}:{params:{id:string}}){
  const cliente = await getClienteById(params.id);
  return <RequireAuth><ClientForm cliente={cliente}/></RequireAuth>;
}
