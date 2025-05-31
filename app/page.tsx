import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black p-8">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-bold">Multicultural Greek Council at WMU</h1>
        <p className="mt-2 text-lg text-gray-600">Unity Through Diversity</p>
      </header>

      <section className="text-center">
        <p className="text-xl mb-4">Discover our events, organizations, and impact on campus.</p>
        <a href="/community" className="inline-block bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">
          Learn More
        </a>
      </section>
    </main>
  );
}
