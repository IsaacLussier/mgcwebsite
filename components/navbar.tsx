// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow px-4 py-3 flex justify-between items-center">
      <Link href="/" className="text-lg font-semibold">
        WMU MGC
      </Link>
      <div className="space-x-4">
        <Link href="/about">About</Link>
        <Link href="/events">Events</Link>
        <Link href="/community">Community</Link>
        <Link href="/orgs">Orgs</Link>
      </div>
    </nav>
  );
}