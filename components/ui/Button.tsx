import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  href,
  onClick,
  children,
  variant = 'primary',
  className = '',
  type = 'button',
}: ButtonProps) {
  // Premium button styles with enhanced design
  const baseStyles = 'inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg transition-all duration-normal ease-premium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-teal focus-visible:ring-offset-3 relative overflow-hidden group';
  
  const variantStyles = {
    primary: 'text-white shadow-md hover:shadow-lg hover:-translate-y-1 active:translate-y-0',
    secondary: 'bg-transparent border-2 border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white hover:shadow-md hover:-translate-y-1 active:translate-y-0',
    ghost: 'bg-transparent border-none text-primary-teal hover:text-primary-navy px-6 py-3',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {variant === 'primary' && (
        <>
          {/* Premium gradient background */}
          <span className="absolute inset-0 bg-gradient-to-br from-primary-navy via-[#003366] to-primary-teal"></span>
          {/* Shimmer effect on hover */}
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
        </>
      )}
      {variant === 'secondary' && (
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-primary-navy/10 to-transparent"></span>
      )}
      {variant === 'ghost' && (
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-normal group-hover:w-full"></span>
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName}>
      {content}
    </button>
  );
}
