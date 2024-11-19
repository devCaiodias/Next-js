import Link from "next/link";

export default function Home() {
  return (
        <div>
          <h1 className="bg-red-600">Hello Word!</h1>
          <ul>
            <li>
              <Link href="/produtos"> Produtos </Link>
            </li>
          </ul>
        </div>
  );
}