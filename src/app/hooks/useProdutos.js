import { useState, useEffect } from 'react';

export const useProdutos = () => {
  const [produtos, setProdutos] = useState([]);

  const fetchProdutos = async () => {
    const response = await fetch('/api/produtos');
    const data = await response.json();
    setProdutos(data);
  };

  useEffect(() => {
    fetchProdutos();
  }, []);

  return [produtos, fetchProdutos];
};
