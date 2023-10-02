
import { redirect } from "next/navigation";
import HomePage from "./home";
import { cookies } from "next/headers";

export const metadata = {
  title: 'Dashboard',
}

export default function Home() {
  const cookiesList = cookies()
  const hasCookie = cookiesList.has('users')
  if (!hasCookie) {
    redirect("/login")
  }
  return <>
    <HomePage></HomePage>
  </>;
}
