import Link from "next/link"

export default function Navbar() {
    return(
        <div>
            <ul className="bg-blue-600">
            <li>
              <Link href="/produtos"> Produtos </Link>
            </li>
            <li>
              <Link href="/"> Home </Link>
            </li>
          </ul>
        </div>
    )
}