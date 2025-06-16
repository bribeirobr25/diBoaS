import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-primary text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          diBoaS
        </Link>
        <div className="space-x-4">
          <Link href="/docs">Docs</Link>
          <Link href="/learn">Learn</Link>
          <Link href="/app" className="bg-white text-primary px-4 py-2 rounded">
            Join Waitlist
          </Link>
        </div>
      </nav>
    </header>
  );
}
