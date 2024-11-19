import Navbar from "@/components/Navbar"
import Link from "next/link"

export default function Produtos() {
    return (
        <div>
            <ul >
                <Navbar />
                <li className="bg-red-600">
                    <Link href="/produtos/pants/bluepants">bluePants</Link>
                </li>
                <li className="bg-red-600">
                    <Link href="/produtos/pants/redpants">RedPants</Link>
                </li>
            </ul>
            
            <h1>Pagina produto</h1>
            
        </div>
    )
}