interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}

export default function SectionLabel({ children, light = false, className = '' }: SectionLabelProps) {
  const color = light ? '#A89F91' : '#2F5D62';
  
  return (
    <div className={`inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.15em] ${className}`} style={{ color }}>
      <span className="block w-8 h-[1px]" style={{ backgroundColor: color }}></span>
      <span>{children}</span>
    </div>
  );
}
