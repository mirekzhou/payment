import Link from 'next/link';

export default function Page() {
    return (
        <div className='relative w-screen h-screen'>
            <p>Register Page</p>

            <Link 
                href="/login"
                className="absolute bottom-4 h-8 w-72 left-1/2 -ml-36 border border-slate-300 hover:border-indigo-300 bg-white rounded-lg flex items-center justify-center text-black">
                <span>Go Login</span>
            </Link>
        </div>
    );
}