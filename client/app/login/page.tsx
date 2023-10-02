import { cookies } from "next/headers";
import LoginForm from "./form"
import { redirect } from "next/navigation";

export const metadata = {
  title: 'Sign-In',
}

export default async function Page() {
  if (cookies().has("users")) redirect("/");
  return (
    <> 
      <LoginForm ></LoginForm>
    </>
  );
}
