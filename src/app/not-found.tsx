import Link from 'next/link';
import { Button } from '@components/ui/button';


export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-base text-center">
            <h2 className="text-3xl font-bold mb-6">Erreur : page non trouvée</h2>
            <p>La page demandée n&apos;existe pas</p>
            <Link href="/">
            <button className='btn btn-accent mt-10'>Retourner à l&apos;accueil</button>
            </Link>
        </div>
    )
}