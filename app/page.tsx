// export default function Home() {
//   return <h1>Главная страница</h1>;
// }
"use client";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/deliveries");
}
