// src/pages/api/produtos.js
import produtosData from '../../data/base.json'; // ou a forma como você armazena os produtos

let produtos = produtosData; // Para fins de exemplo, você pode querer conectar a um banco de dados

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Retorna todos os produtos
    res.status(200).json(produtos);
  } else if (req.method === 'POST') {
    // Adiciona um novo produto
    const novoProduto = req.body;

    // Gera um ID para o novo produto
    novoProduto.id = produtos.length + 1;
    produtos.push(novoProduto);

    // Aqui você poderia adicionar lógica para salvar em um banco de dados

    res.status(201).json(novoProduto);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
