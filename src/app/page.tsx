import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col h-screen"
      style={{
        backgroundImage: "url('background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-80">

        <div className="lg:mx-40 m-10">
          <h1 className="text-3xl font-bold mb-6 text-center">Bienvenue !</h1>
          <h2 className="text-xl mb-6 text-center">Evaluation des haies du Contrat Vert et Bleu du Parc Naturel Régional du Pilat</h2>
          <div className="flex flex-col items-center space-y-4 mx-auto mt-8">
            <a href="/Poster_Sallier.pdf" target="_blank" rel="noopener noreferrer" download>
              <Button
                className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors w-full sm:w-auto"
                variant="link"
              >
                Télécharger le poster
              </Button>
            </a>
            <Link href="/quiz">
              <Button
                className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors w-full sm:w-auto"
                variant="link"
              >
                Aller au quiz immersif
              </Button>
            </Link>
          </div>
        </div>
      </div >
    </div >
  );
}
