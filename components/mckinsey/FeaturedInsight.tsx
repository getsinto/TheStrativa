'use client';

import Link from 'next/link';

interface FeaturedInsightProps {
  category: string;
  title: string;
  excerpt: string;
  href: string;
  image?: string;
  imagePosition?: 'left' | 'right';
}

export default function FeaturedInsight({ 
  category, 
  title, 
  excerpt, 
  href, 
  image,
  imagePosition = 'left' 
}: FeaturedInsightProps) {
  return (
    <div className={`bg-white border border-gray-200 grid grid-cols-1 lg:grid-cols-2 overflow-hidden hover:shadow-card-hover transition-shadow ${imagePosition === 'right' ? 'lg:grid-flow-dense' : ''}`}>
      {/* Image */}
      <div className={`bg-gradient-to-br from-navy/5 to-navy/10 h-64 lg:h-auto relative ${imagePosition === 'right' ? 'lg:col-start-2' : ''}`}>
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 border-2 border-navy/20 rounded-full" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-2xl flex flex-col justify-center">
        <p className="text-label text-steel uppercase mb-md">
          {category}
        </p>
        
        <h3 className="font-display text-h2 text-navy mb-lg">
          {title}
        </h3>
        
        <p className="text-body text-charcoal mb-xl">
          {excerpt}
        </p>
        
        <Link 
          href={href}
          className="inline-flex items-center gap-2 text-body text-navy hover:text-teal transition-colors group"
        >
          Read full story
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
