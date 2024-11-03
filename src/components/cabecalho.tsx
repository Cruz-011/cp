// src/components/cabecalho.tsx
import Link from 'next/link';

export default function Cabecalho() {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Loja Futurista
        </Link>
        <nav className="flex space-x-6">
          <Link href="/" className="hover:text-gray-400 transition">
            Home
          </Link>
          <Link href="/produtos" className="hover:text-gray-400 transition">
            Produtos
          </Link>
          <Link href="/produtos/cadastro" className="hover:text-gray-400 transition">
            Cadastro de Produtos
          </Link>
        </nav>
      </div>
    </header>
  );
}
