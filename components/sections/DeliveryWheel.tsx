'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';

const phases = [
  { 
    id: 1, 
    number: '01',
    title: 'Define', 
    description: 'Clarify the objective\nand success.',
    startAngle: -90,
  },
  { 
    id: 2, 
    number: '02',
    title: 'Structure', 
    description: 'Create a clear and\ncontrolled plan.',
    startAngle: -45,
  },
  { 
    id: 3, 
    number: '03',
    title: 'Design', 
    description: 'Define the solution\nand how it works.',
    startAngle: 0,
  },
  { 
    id: 4, 
    number: '04',
    title: 'Deliver', 
    description: 'Execute with structure\nand control.',
    startAngle: 45,
  },
  { 
    id: 5, 
    number: '05',
    title: 'Validate', 
    description: 'Ensure quality and\ncompleteness.',
    startAngle: 90,
  },
  { 
    id: 6, 
    number: '06',
    title: 'Deploy', 
    description: 'Go live with\nconfidence.',
    startAngle: 135,
  },
  { 
    id: 7, 
    number: '07',
    title: 'Stabilise', 
    description: 'Resolve issues and\noptimise performance.',
    startAngle: 180,
  },
  { 
    id: 8, 
    number: '08',
    title: 'Close', 
    description: 'Complete the work\nand capture learning.',
    startAngle: 225,
  },
];

export default function DeliveryWheel() {
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null);

  // Helper function to create SVG path for pie segment
  const createSegmentPath = (startAngle: number, endAngle: number, outerRadius: number, innerRadius: number) => {
    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;
    
    const x1 = 500 + outerRadius * Math.cos(startRad);
    const y1 = 500 + outerRadius * Math.sin(startRad);
    const x2 = 500 + outerRadius * Math.cos(endRad);
    const y2 = 500 + outerRadius * Math.sin(endRad);
    
    const x3 = 500 + innerRadius * Math.cos(endRad);
    const y3 = 500 + innerRadius * Math.sin(endRad);
    const x4 = 500 + innerRadius * Math.cos(startRad);
    const y4 = 500 + innerRadius * Math.sin(startRad);
    
    return `M ${x1} ${y1} A ${outerRadius} ${outerRadius} 0 0 1 ${x2} ${y2} L ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 0 0 ${x4} ${y4} Z`;
  };

  return (
    <section className="relative bg-[#F8F9FA] py-[140px] overflow-hidden">
      {/* Subtle radial gradient background - professional and clean */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F9FA] via-[#EEEFF1] to-[#F8F9FA]" />
        {/* Soft glow effect behind wheel area */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2F5D62] opacity-[0.03] rounded-full blur-3xl" />
        {/* Subtle corner accents */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-[#2F5D62]/5 to-transparent rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#2F5D62]/5 to-transparent rounded-full blur-2xl" />
      </div>
      
      <div className="container-custom max-w-6xl relative z-10">
        <AnimatedSection>
          {/* Header */}
          <div className="text-center mb-16">
            <div className="mb-6 flex justify-center">
              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#2F5D62]">
                Approach
              </p>
            </div>
            <h2 className="font-display text-[clamp(36px,5vw,52px)] text-[#0F1113] mb-6 leading-[1.1] font-semibold">
              A clear, structured approach to delivery.
            </h2>
            <p className="text-[18px] text-[#6B7280]">
              Eight phases. Fully controlled from start to finish.
            </p>
          </div>

          {/* Circular Wheel */}
          <div className="relative max-w-4xl mx-auto mb-16">
            <svg
              viewBox="0 0 1000 1000"
              className="w-full h-auto"
              style={{ filter: 'drop-shadow(0 0 80px rgba(47, 93, 98, 0.6))' }}
            >
              <defs>
                <linearGradient id="segmentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1a2a2e" />
                  <stop offset="100%" stopColor="#0d1416" />
                </linearGradient>
              </defs>

              {/* Draw pie segments */}
              {phases.map((phase, index) => {
                const endAngle = phase.startAngle + 45;
                const path = createSegmentPath(phase.startAngle, endAngle, 420, 240);
                
                return (
                  <path
                    key={`segment-${phase.id}`}
                    d={path}
                    fill="url(#segmentGradient)"
                    stroke="#2F5D62"
                    strokeWidth="2"
                    opacity={hoveredPhase === null || hoveredPhase === phase.id ? 1 : 0.5}
                    style={{ transition: 'opacity 0.3s ease' }}
                    className="cursor-pointer"
                    onMouseEnter={() => setHoveredPhase(phase.id)}
                    onMouseLeave={() => setHoveredPhase(null)}
                  />
                );
              })}

              {/* Outer circle border */}
              <circle
                cx="500"
                cy="500"
                r="420"
                fill="none"
                stroke="#2F5D62"
                strokeWidth="3"
              />

              {/* Inner circle border */}
              <circle
                cx="500"
                cy="500"
                r="240"
                fill="#0F1113"
                stroke="#2F5D62"
                strokeWidth="2"
              />

              {/* Phase numbers on outer edge */}
              {phases.map((phase) => {
                const angle = phase.startAngle + 22.5;
                const radian = (angle * Math.PI) / 180;
                const numX = 500 + 460 * Math.cos(radian);
                const numY = 500 + 460 * Math.sin(radian);

                return (
                  <g key={`num-${phase.id}`}>
                    <circle
                      cx={numX}
                      cy={numY}
                      r="32"
                      fill="#0F1113"
                      stroke="#2F5D62"
                      strokeWidth="3"
                    />
                    <text
                      x={numX}
                      y={numY + 8}
                      textAnchor="middle"
                      fill="#2F5D62"
                      fontSize="22"
                      fontWeight="700"
                      fontFamily="Inter, sans-serif"
                    >
                      {phase.number}
                    </text>
                  </g>
                );
              })}

              {/* Phase titles and descriptions in segments */}
              {phases.map((phase) => {
                const angle = phase.startAngle + 22.5;
                const radian = (angle * Math.PI) / 180;
                const textX = 500 + 330 * Math.cos(radian);
                const textY = 500 + 330 * Math.sin(radian);
                
                const lines = phase.description.split('\n');

                return (
                  <g key={`text-${phase.id}`}>
                    {/* Phase title */}
                    <text
                      x={textX}
                      y={textY - 20}
                      textAnchor="middle"
                      fill="white"
                      fontSize="26"
                      fontWeight="500"
                      fontFamily="Playfair Display, serif"
                    >
                      {phase.title}
                    </text>
                    
                    {/* Phase description - line 1 */}
                    <text
                      x={textX}
                      y={textY + 10}
                      textAnchor="middle"
                      fill="#A89F91"
                      fontSize="13"
                      fontFamily="Inter, sans-serif"
                    >
                      {lines[0]}
                    </text>
                    
                    {/* Phase description - line 2 */}
                    {lines[1] && (
                      <text
                        x={textX}
                        y={textY + 28}
                        textAnchor="middle"
                        fill="#A89F91"
                        fontSize="13"
                        fontFamily="Inter, sans-serif"
                      >
                        {lines[1]}
                      </text>
                    )}
                  </g>
                );
              })}

              {/* Center content */}
              <text
                x="500"
                y="440"
                textAnchor="middle"
                fill="white"
                fontSize="52"
                fontWeight="500"
                fontFamily="Playfair Display, serif"
              >
                Our
              </text>
              <text
                x="500"
                y="505"
                textAnchor="middle"
                fill="white"
                fontSize="52"
                fontWeight="500"
                fontFamily="Playfair Display, serif"
              >
                Delivery Model
              </text>
              
              {/* Divider line */}
              <line
                x1="360"
                y1="530"
                x2="640"
                y2="530"
                stroke="#2F5D62"
                strokeWidth="1"
                opacity="0.6"
              />
              
              {/* Subtitle */}
              <text
                x="500"
                y="560"
                textAnchor="middle"
                fill="#A89F91"
                fontSize="15"
                fontFamily="Inter, sans-serif"
              >
                A clear, structured approach
              </text>
              <text
                x="500"
                y="582"
                textAnchor="middle"
                fill="#A89F91"
                fontSize="15"
                fontFamily="Inter, sans-serif"
              >
                from start to finish.
              </text>
              
              {/* Number 8 */}
              <text
                x="500"
                y="635"
                textAnchor="middle"
                fill="#2F5D62"
                fontSize="48"
                fontWeight="300"
                fontFamily="Playfair Display, serif"
              >
                8
              </text>
              
              {/* Brand name */}
              <text
                x="500"
                y="670"
                textAnchor="middle"
                fill="#2F5D62"
                fontSize="16"
                fontWeight="600"
                fontFamily="Inter, sans-serif"
                letterSpacing="3"
              >
                STRATORA
              </text>
              <text
                x="500"
                y="690"
                textAnchor="middle"
                fill="#2F5D62"
                fontSize="13"
                fontWeight="400"
                fontFamily="Inter, sans-serif"
                letterSpacing="2"
              >
                CONSULTING
              </text>
            </svg>
          </div>

          {/* Bottom statement */}
          <div className="text-center">
            <p className="text-[17px] text-[#0F1113] font-semibold">
              Every phase is controlled. Nothing is left to chance.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
