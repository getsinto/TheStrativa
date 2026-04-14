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
  // McKinsey-inspired button styles
  const baseStyles = 'inline-flex items-center justify-center px-8 py-4 text-[16px] font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F5D62] focus-visible:ring-offset-2 border-0';
  
  const variantStyles = {
    primary: 'bg-[#2F5D62] text-white hover:bg-[#1E3D40] shadow-sm hover:shadow-md',
    secondary: 'bg-transparent border-2 border-[#2F5D62] text-[#2F5D62] hover:bg-[#2F5D62] hover:text-white',
    ghost: 'bg-transparent border-none text-[#2F5D62] hover:text-[#1E3D40] px-0 py-0 relative group',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  const content = variant === 'ghost' ? (
    <>
      <span className="relative z-10">{children}</span>
      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#2F5D62] transition-all duration-300 group-hover:w-full"></span>
    </>
  ) : (
    children
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
