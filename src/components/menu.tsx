// src/components/menu.tsx
export default function Menu() {
    return (
      <nav className="p-4 bg-gray-700 flex justify-center space-x-4">
        <a href="/" className="hover:text-gray-400">Home</a>
        <a href="/produtos" className="hover:text-gray-400">Produtos</a>
      </nav>
    );
  }
  