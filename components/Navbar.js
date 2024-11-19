import Link from "next/link"

export default function Navbar() {
    return(
        <div className="block">
            <ul className="bg-blue-600 px-7 py-7">
            <li>
              <Link className="px-4" href="/produtos"> Produtos </Link>
              <Link className="px-4" href="/"> Home </Link>
            </li>

          </ul>
        </div>
    )
}