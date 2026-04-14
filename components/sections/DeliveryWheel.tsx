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
    description: 'Clarify the objective and success',
    angle: -90 
  },
  { 
    id: 2, 
    number: '02',
    title: 'Structure', 
    description: 'Create a clear and controlled plan',
    angle: -45 
  },
  { 
    id: 3, 
    number: '03',
    title: 'Design', 
    description: 'Define the solution and how it works',
    angle: 0 
  },
  { 
    id: 4, 
    number: '04',
    title: 'Deliver', 
    description: 'Execute with structure and control',
    angle: 45 
  },
  { 
    id: 5, 
    number: '05',
    title: 'Validate', 
    description: 'Ensure quality and completeness',
    angle: 90 
  },
  { 
    id: 6, 
    number: '06',
    title: 'Deploy', 
    description: 'Go live with confidence',
    angle: 135 
  },
  { 
    id: 7, 
    number: '07',
    title: 'Stabilise', 
    description: 'Resolve issues and optimise performance',
    angle: 180 
  },
  { 
    id: 8, 
    number: '08',
    title: 'Close', 
    description: 'Complete the work and capture learning',
    angle: 225 
  },
];

export default function DeliveryWheel() {
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null);

  return (
    <section className="bg-[#0F1113] py-[140px] overflow-hidden">
      <div className="container-custom max-w-6xl">
        <AnimatedSection>
          {/* Header */}
          <div className="text-center mb-16">
            <div className="mb-6 flex justify-center">
              <SectionLabel light>APPROACH</SectionLabel>
            </div>
            <h2 className="font-display text-[52px] text-white mb-6 leading-[1.1]">
              A clear, structured approach to delivery.
            </h2>
            <p className="text-[18px] text-[#A89F91]">
              Eight phases. Fully controlled from start to finish.
            </p>
          </div>

          {/* Circular Wheel */}
          <div className="relative max-w-4xl mx-auto mb-16">
            <svg
              viewBox="0 0 800 800"
              className="w-full h-auto"
              style={{ filter: 'drop-shadow(0 0 60px rgba(47, 93, 98, 0.4))' }}
            >
              <defs>
                <linearGradient id="wheelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2F5D62" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#2F5D62" stopOpacity="0.3" />
                </linearGradient>
              </defs>

              {/* Outer circle */}
              <circle
                cx="400"
                cy="400"
                r="340"
                fill="none"
                stroke="#2F5D62"
                strokeWidth="2"
                opacity="0.8"
              />

              {/* Inner circle */}
              <circle
                cx="400"
                cy="400"
                r="220"
                fill="none"
                stroke="#2F5D62"
                strokeWidth="1"
                opacity="0.4"
              />

              {/* Segment dividers and phase sections */}
              {phases.map((phase, index) => {
                const angle = phase.angle;
                const nextAngle = phases[(index + 1) % 8].angle;
                const radian = (angle * Math.PI) / 180;
                
                // Divider lines
                const x1 = 400 + 220 * Math.cos(radian);
                const y1 = 400 + 220 * Math.sin(radian);
                const x2 = 400 + 340 * Math.cos(radian);
                const y2 = 400 + 340 * Math.sin(radian);

                // Calculate position for phase number (on outer circle)
                const midAngle = angle + 22.5;
                const midRadian = (midAngle * Math.PI) / 180;
                const numX = 400 + 360 * Math.cos(midRadian);
                const numY = 400 + 360 * Math.sin(midRadian);

                return (
                  <g key={phase.id}>
                    {/* Divider line */}
                    <line
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#2F5D62"
                      strokeWidth="1"
                      opacity="0.5"
                    />
                    
                    {/* Phase number circle */}
                    <circle
                      cx={numX}
                      cy={numY}
                      r="22"
                      fill="#0F1113"
                      stroke="#2F5D62"
                      strokeWidth="2"
                      opacity={hoveredPhase === phase.id ? 1 : 0.8}
                      style={{ transition: 'all 0.3s ease' }}
                    />
                    <text
                      x={numX}
                      y={numY + 6}
                      textAnchor="middle"
                      fill="#2F5D62"
                      fontSize="16"
                      fontWeight="600"
                      fontFamily="Inter, sans-serif"
                    >
                      {phase.number}
                    </text>
                  </g>
                );
              })}

              {/* Center content */}
              <text
                x="400"
                y="370"
                textAnchor="middle"
                fill="white"
                fontSize="42"
                fontFamily="Playfair Display, serif"
                fontWeight="500"
              >
                Our
              </text>
              <text
                x="400"
                y="420"
                textAnchor="middle"
                fill="white"
                fontSize="42"
                fontFamily="Playfair Display, serif"
                fontWeight="500"
              >
                Delivery Model
              </text>
              <text
                x="400"
                y="460"
                textAnchor="middle"
                fill="#A89F91"
                fontSize="14"
                fontFamily="Inter, sans-serif"
              >
                A clear, structured approach
              </text>
              <text
                x="400"
                y="480"
                textAnchor="middle"
                fill="#A89F91"
                fontSize="14"
                fontFamily="Inter, sans-serif"
              >
                from start to finish.
              </text>
            </svg>

            {/* Phase labels positioned around the wheel */}
            <div className="absolute inset-0 pointer-events-none">
              {phases.map((phase) => {
                const angle = phase.angle + 22.5;
                const radian = (angle * Math.PI) / 180;
                
                // Position labels between the circles
                const distance = 280;
                const x = 50 + ((400 + distance * Math.cos(radian)) / 800) * 100;
                const y = 50 + ((400 + distance * Math.sin(radian)) / 800) * 100;

                return (
                  <div
                    key={phase.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-auto cursor-pointer transition-all duration-300"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      opacity: hoveredPhase === null || hoveredPhase === phase.id ? 1 : 0.4,
                    }}
                    onMouseEnter={() => setHoveredPhase(phase.id)}
                    onMouseLeave={() => setHoveredPhase(null)}
                  >
                    <h3 className="font-display text-[20px] text-white mb-2 font-medium">
                      {phase.title}
                    </h3>
                    <p className="text-[13px] text-[#A89F91] leading-[1.4] max-w-[140px] mx-auto">
                      {phase.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom statement */}
          <div className="text-center mb-12">
            <p className="text-[17px] text-white font-medium mb-8">
              Every phase is controlled. Nothing is left to chance.
            </p>
            <div className="flex flex-col items-center gap-4">
              <Button href="/contact" variant="primary">
                Start a Conversation
              </Button>
              <p className="text-[14px] text-[#A89F91]">
                Or email us at{' '}
                <a
                  href="mailto:hello@stratoraconsulting.com"
                  className="hover:text-[#2F5D62] transition-colors"
                >
                  hello@stratoraconsulting.com
                </a>
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
