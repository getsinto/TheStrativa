interface DividerProps {
  margin?: number;
  className?: string;
}

export default function Divider({ margin, className = '' }: DividerProps) {
  const style = margin ? { marginTop: `${margin}px`, marginBottom: `${margin}px` } : undefined;
  
  return (
    <hr 
      className={`w-full h-[1px] border-0 bg-[#E8E6E1] ${className}`}
      style={style}
    />
  );
}
