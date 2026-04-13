'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';

const phases = [
  { id: 1, title: 'Define', description: 'Understand the objective', angle: 0 },
  { id: 2, title: 'Structure', description: 'Plan the work', angle: 45 },
  { id: 3, title: 'Design', description: 'Define the solution', angle: 90 },
  { id: 4, title: 'Deliver', description: 'Execute with control', angle: 135 },
  { id: 5, title: 'Validate', description: 'Ensure quality', angle: 180 },
  { id: 6, title: 'Deploy', description: 'Go live with confidence', angle: 225 },
  { id: 7, title: 'Stabilise', description: 'Resolve and optimise', angle: 270 },
  { id: 8, title: 'Close', description: 'Complete and learn', angle: 315 },
];

export default function DeliveryModelCircle() {
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null);

  return (
    <section className="bg-[#0F1113] py-[160px] overflow-hidden">
      <div className="container-custom max-w-6xl">
        <AnimatedSection>
          {/* Header */}
          <div className="text-center mb-20">
            <div className="mb-6 flex justify-center">
              <SectionLabel light>APPROACH</SectionLabel>
            </div>
            <h2 className="font-display text-[48px] text-white mb-4 leading-[1.2]">
              Our Delivery Model
            </h2>
            <p className="text-[18px] text-[#A89F91] max-w-2xl mx-auto">
              A clear, structured approach from start to finish.
            </p>
          </div>

          {/* Phases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {phases.map((phase, index) => (
              <div
                key={phase.id}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredPhase(phase.id)}
                onMouseLeave={() => setHoveredPhase(null)}
              >
                <div
                  className={`
                    bg-[#1A1A1A] border border-[#2F5D62] p-6 transition-all duration-300
                    ${hoveredPhase === phase.id ? 'bg-[#2F5D62] border-[#2F5D62] transform scale-105' : ''}
                    ${hoveredPhase !== null && hoveredPhase !== phase.id ? 'opacity-50' : ''}
                  `}
                >
                  {/* Phase Number */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`
                        inline-flex items-center justify-center w-10 h-10 rounded-full 
                        border-2 text-sm font-medium transition-colors duration-300
                        ${hoveredPhase === phase.id 
                          ? 'border-white text-white' 
                          : 'border-[#2F5D62] text-[#2F5D62]'
                        }
                      `}
                    >
                      {String(phase.id).padStart(2, '0')}
                    </span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className={`transition-all duration-300 ${
                        hoveredPhase === phase.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                      }`}
                    >
                      <path
                        d="M7 3L14 10L7 17"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* Phase Title */}
                  <h3
                    className={`
                      font-display text-[24px] mb-2 transition-colors duration-300
                      ${hoveredPhase === phase.id ? 'text-white' : 'text-white'}
                    `}
                  >
                    {phase.title}
                  </h3>

                  {/* Phase Description */}
                  <p
                    className={`
                      text-[14px] leading-[1.6] transition-colors duration-300
                      ${hoveredPhase === phase.id ? 'text-white opacity-90' : 'text-[#A89F91]'}
                    `}
                  >
                    {phase.description}
                  </p>

                  {/* Connector Arrow (except for last item in row) */}
                  {index % 4 !== 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M9 6L15 12L9 18"
                          stroke="#2F5D62"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Flow Indicator */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <div
                  key={num}
                  className={`
                    w-2 h-2 rounded-full transition-all duration-300
                    ${hoveredPhase === num ? 'bg-[#2F5D62] w-8' : 'bg-[#2F5D62] opacity-40'}
                  `}
                />
              ))}
            </div>
          </div>

          {/* Bottom Text */}
          <div className="text-center">
            <p className="text-[15px] text-[#A89F91] italic">
              Every phase is controlled. Nothing is left unclear.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
