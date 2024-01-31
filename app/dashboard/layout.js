import Link from 'next/link';
import {
    HomeIcon,
    DocumentDuplicateIcon,
    UserIcon
} from '@heroicons/react/24/outline';

const links = [
    { name: 'Home', href: '/dashboard/home', icon: HomeIcon },
    { name: 'Transactions', href: '/dashboard/transactions', icon: DocumentDuplicateIcon },
    { name: 'Mine', href: '/dashboard/mine', icon: UserIcon },
];

export default function Layout({ children }) {
    return (
        <div className="relative h-screen w-screen">
            <div className="fixed top-0 bottom-12 left-0 w-full">{children}</div>

            <div className="fixed bottom-0 left-0 w-full h-12 flex flex-row  overflow-hidden justify-center items-center bg-blue-500">
                {links.map((link) => {
                    const LinkIcon = link.icon;

                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="flex flex-col flex-1 items-center justify-center text-xs font-xs text-white transition-colors hover:bg-blue-400 md:text-base"
                        >
                            <LinkIcon className="w-6 mr-1" />
                            <p>{link.name}</p>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};