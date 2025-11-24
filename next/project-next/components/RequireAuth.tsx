import { getAccessToken } from "@/lib/session";
import { redirect } from "next/navigation";

export default function RequireAuth({children}:{children:React.ReactNode}){
  console.log(getAccessToken())
  if(!getAccessToken()) redirect("/login");
  return children;
}
