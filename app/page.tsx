// import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/fetch";
import { postQuery } from "@/sanity/lib/queries";


export default function Home() {
  return (
    <main className=" min-h-screen items-center justify-between p-24">
      <div className="text-5xl text-center font-semibold"> My Blog</div>
    </main>
  );
}
