import Link from 'next/link';
import { Button } from '@components/ui/button';


export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center">
            <h2 className="text-3xl font-bold mb-6">Erreur : page non trouvée</h2>
            <p>La page demandée n&apos;existe pas</p>
            <Link href="/">
                <Button
                    className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors w-full sm:w-auto mt-10"
                    variant="link"
                >
                    Retourner à l&apos;accueil
                </Button>
            </Link>
        </div>
    )
}