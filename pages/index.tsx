import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl">Home</h1>
      <p className="text-gray-500">Welcome to Next.js!</p>

      <Link href="/">Home</Link>
    </div>
  )
}