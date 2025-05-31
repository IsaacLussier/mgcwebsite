import Link from "next/link";

const orgs = [
  { name: "Alpha", slug: "alpha" },
  { name: "Beta", slug: "beta" },
  { name: "Gamma", slug: "gamma" },
  { name: "Delta", slug: "delta" },
  { name: "Epsilon", slug: "epsilon" },
  { name: "Zeta", slug: "zeta" },
  { name: "Eta", slug: "eta" },
  { name: "Theta", slug: "theta" },
];

export default function OrgsLandingPage() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-6">Our Member Organizations</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {orgs.map((org) => (
          <Link
            key={org.slug}
            href={`/orgs/${org.slug}`}
            className="border p-4 rounded hover:bg-purple-50"
          >
            <h2 className="text-xl font-semibold">{org.name}</h2>
            <p className="text-gray-600">Click to learn more about {org.name}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}