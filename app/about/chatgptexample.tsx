export default function AboutPage() {
  return (
    <main className="px-8 py-12 max-w-5xl mx-auto space-y-20">
      <section id="mission">
        <h2 className="text-3xl font-bold mb-4">Mission</h2>
        <p>
          The Multicultural Greek Council at Western Michigan University aims to foster unity, promote academic excellence, and celebrate cultural diversity through service, leadership, and advocacy. Our mission is to provide a supportive and inclusive environment for all members.
        </p>
      </section>

      <section id="history">
        <h2 className="text-3xl font-bold mb-4">History</h2>
        <p>
          Established in [Year], the MGC began as a collaborative effort among multicultural fraternities and sororities to gain greater visibility and support on campus. Over the years, it has grown into a strong, inclusive council representing a wide range of cultural backgrounds.
        </p>
      </section>

      <section id="executive-board">
        <h2 className="text-3xl font-bold mb-4">Executive Board</h2>
        <ul className="space-y-2">
          <li><strong>President:</strong> [Name]</li>
          <li><strong>Vice President:</strong> [Name]</li>
          <li><strong>Secretary:</strong> [Name]</li>
          <li><strong>Treasurer:</strong> [Name]</li>
          {/* You can fetch this from a CMS or DB later */}
        </ul>
      </section>

      <section id="socials">
        <h2 className="text-3xl font-bold mb-4">Socials</h2>
        <p>
          Stay connected with us on social media to see our latest events, achievements, and community involvement.
        </p>
        <ul className="list-disc pl-6">
          <li><a href="https://instagram.com/yourmgc" className="text-blue-600 hover:underline">Instagram</a></li>
          <li><a href="https://facebook.com/yourmgc" className="text-blue-600 hover:underline">Facebook</a></li>
          <li><a href="mailto:mgc@wmich.edu" className="text-blue-600 hover:underline">Email Us</a></li>
        </ul>
      </section>
    </main>
  );
}