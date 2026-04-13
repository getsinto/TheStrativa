'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';

const phases = [
  { id: 1, title: 'Define', description: 'Understand the objective', icon: '🎯' },
  { id: 2, title: 'Structure', description: 'Plan the work', icon: '📋' },
  { id: 3, title: 'Design', description: 'Define the solution', icon: '✏️' },
  { id: 4, title: 'Deliver', description: 'Execute with control', icon: '⚙️' },
  { id: 5, title: 'Validate', description: 'Ensure quality', icon: '✓' },
  { id: 6, title: 'Deploy', description: 'Go live with confidence', icon: '🚀' },
  { id: 7, title: 'Stabilise', description: 'Resolve and optimise', icon: '📈' },
  { id: 8, title: 'Close', description: 'Complete and learn', icon: '✔' },
];

export default function DeliveryModelCircle() {
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null);

  return (
    <section className="bg-[#0F1113] py-[160px] overflow-hidden">
      <div className="container-custom">
        <AnimatedSection>
          <div className="mb-12 text-center">
            <div className="flex justify-center">
              <SectionLabel light>OUR DELIVERY MODEL</SectionLabel>
            </div>
          </div>

          {/* Circular Diagram */}
          <div className="relative max-w-4xl mx-auto">
            {/* SVG Circle */}
            <svg
              viewBox="0 0 800 800"
              className="w-full h-auto"
              style={{ filter: 'drop-shadow(0 0 40px rgba(47, 93, 98, 0.3))' }}
            >
              <defs>
                {/* Gradient for the circle */}
                <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2F5D62" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#2F5D62" stopOpacity="0.4" />
                </linearGradient>
              </defs>

              {/* Outer circle */}
              <circle
                cx="400"
                cy="400"
                r="320"
                fill="none"
                stroke="url(#circleGradient)"
                strokeWidth="2"
                opacity="0.6"
              />

              {/* Inner circle */}
              <circle
                cx="400"
                cy="400"
                r="200"
                fill="none"
                stroke="#2F5D62"
                strokeWidth="1"
                opacity="0.3"
              />

              {/* Segment dividers */}
              {phases.map((_, index) => {
                const angle = (index * 360) / 8 - 90;
                const radian = (angle * Math.PI) / 180;
                const x1 = 400 + 200 * Math.cos(radian);
                const y1 = 400 + 200 * Math.sin(radian);
                const x2 = 400 + 320 * Math.cos(radian);
                const y2 = 400 + 320 * Math.sin(radian);

                return (
                  <line
                    key={index}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#2F5D62"
                    strokeWidth="1"
                    opacity="0.4"
                  />
                );
              })}

              {/* Phase dots on outer circle */}
              {phases.map((phase, index) => {
                const angle = (index * 360) / 8 - 90;
                const radian = (angle * Math.PI) / 180;
                const x = 400 + 320 * Math.cos(radian);
                const y = 400 + 320 * Math.sin(radian);

                return (
                  <circle
                    key={phase.id}
                    cx={x}
                    cy={y}
                    r="8"
                    fill="#2F5D62"
                    opacity={hoveredPhase === phase.id ? 1 : 0.7}
                    style={{ transition: 'all 0.3s ease' }}
                  />
                );
              })}

              {/* Center text */}
              <text
                x="400"
                y="390"
                textAnchor="middle"
                fill="white"
                fontSize="32"
                fontFamily="Playfair Display, serif"
                fontWeight="500"
              >
                Our Delivery Model
              </text>
              <text
                x="400"
                y="425"
                textAnchor="middle"
                fill="#A89F91"
                fontSize="14"
                fontFamily="Inter, sans-serif"
              >
                A clear, structured approach
              </text>
              <text
                x="400"
                y="445"
                textAnchor="middle"
                fill="#A89F91"
                fontSize="14"
                fontFamily="Inter, sans-serif"
              >
                from start to finish.
              </text>
            </svg>

            {/* Phase labels positioned around the circle */}
            <div className="absolute inset-0">
              {phases.map((phase, index) => {
                const angle = (index * 360) / 8 - 90;
                const radian = (angle * Math.PI) / 180;
                
                // Position labels outside the circle
                const distance = 380;
                const x = 50 + (distance * Math.cos(radian) + 400) / 8;
                const y = 50 + (distance * Math.sin(radian) + 400) / 8;

                return (
                  <div
                    key={phase.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 text-center cursor-pointer transition-all duration-300"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      opacity: hoveredPhase === null || hoveredPhase === phase.id ? 1 : 0.5,
                    }}
                    onMouseEnter={() => setHoveredPhase(phase.id)}
                    onMouseLeave={() => setHoveredPhase(null)}
                  >
                    <div className="mb-2">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#2F5D62] text-white text-xs font-medium">
                        {String(phase.id).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="font-display text-[18px] text-white mb-1">
                      {phase.title}
                    </h3>
                    <p className="text-[13px] text-[#A89F91] max-w-[120px] mx-auto">
                      {phase.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom text */}
          <div className="text-center mt-20">
            <p className="text-[15px] text-[#A89F91] italic">
              Every phase is controlled. Nothing is left unclear.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
