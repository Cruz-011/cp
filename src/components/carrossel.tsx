// src/components/carrossel.tsx
import products from '../data/base.json';

export default function Carrossel() {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id} className="bg-gray-800 p-4 rounded-lg shadow-md">
          <div className="h-48 flex items-center justify-center">
            <img 
              src={product.imagem} 
              alt={product.nome} 
              className="max-h-full max-w-full object-contain" // Ajusta para caber no contêiner
            />
          </div>
          <h3 className="mt-2 font-bold text-lg">{product.nome}</h3>
          <p className="text-sm text-gray-300">{product.descricao}</p>
          <p className="text-lg font-semibold mt-2">R$ {product.preco.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}
