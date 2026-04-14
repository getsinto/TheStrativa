'use client';

interface StatementBlockProps {
  children: React.ReactNode;
  accent?: boolean;
  attribution?: string;
}

export default function StatementBlock({ children, accent = false, attribution }: StatementBlockProps) {
  return (
    <div className="bg-gray-100 py-4xl">
      <div className="max-w-wide mx-auto px-md">
        <div className="border-l-4 border-navy pl-xl">
          <blockquote className={`font-display text-h1 ${accent ? 'text-navy italic' : 'text-charcoal'} leading-tight`}>
            {children}
          </blockquote>
          {attribution && (
            <p className="text-body text-steel mt-lg">
              — {attribution}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
