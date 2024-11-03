'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const CadastroProduto = () => {
  const [marca, setMarca] = useState('');
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    const novoProduto = {
      marca,
      nome,
      descricao,
      preco: parseFloat(preco), // Converte para número
    };

    try {
      const response = await fetch('/api/produtos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoProduto),
      });

      if (response.ok) {
        // Redireciona para a página de produtos após o cadastro
        router.push('/produtos');
      } else {
        // Log da resposta em texto para ajudar a diagnosticar o erro
        const errorText = await response.text(); // Obtém o corpo da resposta como texto
        console.error('Erro ao cadastrar o produto:', errorText); // Log do texto
        const errorData = await response.json(); // Tente converter para JSON se for possível
        console.error('Dados do erro:', errorData);
      }
    } catch (error) {
      // Verifica se o erro é uma instância de Error
      if (error instanceof Error) {
        console.error('Erro na requisição:', error.message);
      } else {
        console.error('Erro na requisição:', error);
      }
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Cadastrar Produto</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label className="block text-gray-700">Marca</label>
          <input
            type="text"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Nome</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Descrição</label>
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Preço</label>
          <input
            type="number"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
            step="0.01"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default CadastroProduto;
