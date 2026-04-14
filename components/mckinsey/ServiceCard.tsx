'use client';

interface ServiceCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  href?: string;
}

export default function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  const CardContent = () => (
    <>
      {icon && (
        <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center mb-lg">
          {icon}
        </div>
      )}
      
      <h3 className="font-display text-h3 text-navy mb-md">
        {title}
      </h3>
      
      <p className="text-body text-steel">
        {description}
      </p>
      
      {href && (
        <div className="mt-lg">
          <span className="inline-flex items-center gap-2 text-body-sm text-navy group-hover:text-teal transition-colors">
            Learn more
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      )}
    </>
  );

  const baseClasses = "bg-white border border-gray-200 p-xl hover:shadow-card-hover hover:border-navy transition-all duration-200 group";

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        <CardContent />
      </a>
    );
  }

  return (
    <div className={baseClasses}>
      <CardContent />
    </div>
  );
}
