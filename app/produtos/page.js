import Link from "next/link"

export default function Produtos() {
    return (
        <div>
            <h1>Pagina produto</h1>
            <ul>

                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/produtos/pants/bluepants">bluePants</Link>
                </li>
                <li>
                    <Link href="/produtos/pants/redpants">RedPants</Link>
                </li>
            </ul>
            
        </div>
    )
}