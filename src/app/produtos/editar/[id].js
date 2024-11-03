'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useProdutos } from '../../../hooks/useProdutos';

export default function EditarProduto({ params }) {
  const router = useRouter();
  const [form, setForm] = useState({ marca: '', nome: '', descricao: '', preco: 0, imagem: '' });
  const [produtos, fetchProdutos] = useProdutos();
  const { id } = params;

  useEffect(() => {
    const produto = produtos.find((p) => p.id === parseInt(id));
    if (produto) {
      setForm(produto);
    }
  }, [produtos, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch(`/api/produtos?id=${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      await fetchProdutos();
      router.push('/produtos');
    } else {
      alert('Erro ao editar produto. Tente novamente.');
    }
  };

  return (
    <div className="p-6 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold">Editar Produto</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" value={form.marca} required onChange={(e) => setForm({ ...form, marca: e.target.value })} className="p-2 bg-gray-700 text-white" />
        <input type="text" value={form.nome} required onChange={(e) => setForm({ ...form, nome: e.target.value })} className="p-2 bg-gray-700 text-white" />
        <textarea value={form.descricao} required onChange={(e) => setForm({ ...form, descricao: e.target.value })} className="p-2 bg-gray-700 text-white"></textarea>
        <input type="number" value={form.preco} required onChange={(e) => setForm({ ...form, preco: +e.target.value })} className="p-2 bg-gray-700 text-white" />
        <input type="text" value={form.imagem} readOnly className="p-2 bg-gray-700 text-white" />
        <button type="submit" className="bg-blue-500 text-white py-2">Salvar</button>
      </form>
    </div>
  );
}
