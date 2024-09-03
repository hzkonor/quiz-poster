import { Button } from "@components/ui/button";
import Link from 'next/link';
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <div className="flex flex-col h-screen"
      style={{
        backgroundImage: "url('images/background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <div className="flex flex-col items-center justify-center min-h-screen bg-base-100 bg-opacity-80 text-base-content">

        <div className="lg:mx-40 m-10">
          <h1 className="text-3xl font-bold mb-6 text-center">Bienvenue !</h1>
          <h2 className="text-xl mb-6 text-center">Evaluation des haies du Contrat Vert et Bleu du Parc Naturel Régional du Pilat</h2>
          <div className="flex flex-col items-center space-y-4 mx-auto mt-8">
            <a href="/Poster_Sallier.pdf" target="_blank" rel="noopener noreferrer" download>
              <button className="btn ">Télécharger le poster</button>
            </a>
            <Link href="/quiz">
            <button className="btn">Aller au quiz immersif</button>
            </Link>

            <Analytics />
          </div>
        </div>
      </div >
    </div >
  );
}
