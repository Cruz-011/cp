
import Carrossel from '../components/carrossel';

export default function Home() {
  return (
    <div className="text-white">
      <section className="bg-gray-900 text-center py-10">
        <h1 className="text-4xl font-bold">Promoção Especial!</h1>
        <p>Descontos em produtos exclusivos da Marvel, DC Comics e Animes!</p>
      </section>
      
      <Carrossel />
    </div>
  );
}
