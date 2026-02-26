import Link from 'next/link';
import { procedures } from '@/lib/procedures';

export default function ProceduresPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">All Procedures</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {procedures.map((proc) => (
          <Link
            key={proc.slug}
            href={`/procedures/${proc.slug}/`}
            className="border rounded-lg p-4 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{proc.name}</h2>
            <p className="text-gray-600 mt-2">{proc.shortDescription}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
