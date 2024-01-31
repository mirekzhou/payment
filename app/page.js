import Link from 'next/link';

const links = [
    { name: 'Login', href: '/login' },
    { name: 'Register', href: '/register' },
    { name: 'Dashboard', href: '/dashboard' },
];

export default function App() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-0">
            {links.map((link) => {

                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
                    >
                        <p>{link.name}</p>
                    </Link>
                );
            })}
        </main>
    )
};