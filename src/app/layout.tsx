// src/app/layout.tsx
import '/src/app/globals.css';
import Cabecalho from '../components/cabecalho';
import Rodape from '../components/rodape';

export const metadata = {
  title: 'Loja Futurista',
  description: 'Uma loja elegante e futurista',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className="bg-gray-900 text-white">
        <Cabecalho />
        <main>{children}</main>
        <Rodape />
      </body>
    </html>
  );
}
