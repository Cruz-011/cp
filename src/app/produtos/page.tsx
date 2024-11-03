'use client'
import Link from 'next/link';

const ProdutosPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Produtos</h1>
      <Link href="/produtos/cadastro" className="text-blue-500">
        Cadastrar Novo Produto
      </Link>
      <table className="min-w-full mt-4 bg-gray-800 text-white">
        {/* Exiba seus produtos aqui */}
      </table>
    </div>
  );
};

export default ProdutosPage;
