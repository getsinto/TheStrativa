'use client';

import Link from 'next/link';

interface ContentCardProps {
  category?: string;
  title: string;
  excerpt: string;
  href: string;
  image?: string;
}

export default function ContentCard({ category, title, excerpt, href, image }: ContentCardProps) {
  return (
    <article className="bg-white border border-gray-200 overflow-hidden hover:shadow-card-hover hover:border-navy transition-all duration-200 group">
      {/* Image */}
      {image ? (
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      ) : (
        <div className="bg-gradient-to-br from-navy/5 to-navy/10 h-48" />
      )}
      
      {/* Content */}
      <div className="p-lg">
        {category && (
          <p className="text-label text-steel uppercase mb-sm">
            {category}
          </p>
        )}
        
        <h3 className="font-display text-h3 text-navy mb-md group-hover:text-teal transition-colors">
          {title}
        </h3>
        
        <p className="text-body-sm text-steel mb-md line-clamp-3">
          {excerpt}
        </p>
        
        <Link 
          href={href}
          className="inline-flex items-center gap-2 text-body-sm text-navy hover:text-teal transition-colors group"
        >
          Read more
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
