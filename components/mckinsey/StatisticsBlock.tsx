'use client';

interface Statistic {
  value: string;
  label: string;
  description?: string;
}

interface StatisticsBlockProps {
  statistics: Statistic[];
  columns?: 2 | 3 | 4;
}

export default function StatisticsBlock({ statistics, columns = 3 }: StatisticsBlockProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  };

  return (
    <div className="bg-white py-4xl">
      <div className="max-w-container mx-auto px-md">
        <div className={`grid grid-cols-1 ${gridCols[columns]} gap-xl divide-y md:divide-y-0 md:divide-x divide-gray-200`}>
          {statistics.map((stat, index) => (
            <div key={index} className="text-center pt-xl md:pt-0 first:pt-0">
              <p className="font-display text-[72px] text-navy font-bold mb-sm leading-none">
                {stat.value}
              </p>
              <p className="text-label text-steel uppercase mb-sm">
                {stat.label}
              </p>
              {stat.description && (
                <p className="text-body-sm text-steel mt-md">
                  {stat.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
