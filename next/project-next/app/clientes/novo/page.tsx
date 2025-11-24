import RequireAuth from "@/components/RequireAuth";
import ClientForm from "@/components/ClientForm";

export default function Novo(){
  return <RequireAuth><ClientForm/></RequireAuth>;
}
