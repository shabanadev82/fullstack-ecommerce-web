import Products from "@/components/hero/Products";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <Link href='/dashboard'>Admin</Link>
      <Products />
    </main>
  );
}
