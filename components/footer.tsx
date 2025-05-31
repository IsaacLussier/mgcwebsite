export default function Footer() {
  return (
    <footer className="bg-gray-100 text-sm text-gray-600 mt-8">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} WMU Multicultural Greek Council</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="/about" className="hover:text-black transition-colors">About</a>
          <a href="/events" className="hover:text-black transition-colors">Events</a>
          <a href="/community" className="hover:text-black transition-colors">Community</a>
        </div>
      </div>
    </footer>
  );
}