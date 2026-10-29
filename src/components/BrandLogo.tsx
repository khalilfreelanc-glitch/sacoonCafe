'use client';

import React from 'react';
import Image from 'next/image';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
}) => {
  const sizeMap = {
    sm: { dimension: 40, textSize: 'text-base', subSize: 'text-xs' },
    md: { dimension: 50, textSize: 'text-xl', subSize: 'text-xs' },
    lg: { dimension: 70, textSize: 'text-2xl', subSize: 'text-sm' },
    xl: { dimension: 100, textSize: 'text-3xl', subSize: 'text-base' },
  };

  const current = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Visual Badge */}
      <div
        className="relative rounded-full p-1 bg-gradient-to-br from-cafe-gold via-amber-500 to-amber-700 shadow-lg shadow-amber-500/20 flex-shrink-0 flex items-center justify-center transition-transform hover:scale-105 duration-300"
        style={{ width: current.dimension, height: current.dimension }}
      >
        <div className="w-full h-full rounded-full bg-cafe-950 border border-amber-400/40 flex items-center justify-center overflow-hidden p-0.5 relative">
          <Image
            src="/images/logo_circle.jpg"
            alt="Sacoon Cafe Logo"
            width={current.dimension}
            height={current.dimension}
            className="w-full h-full object-cover rounded-full"
          />
          <div className="absolute inset-0 bg-radial from-transparent to-black/30 pointer-events-none rounded-full" />
        </div>
      </div>

      {showText && (
        <div className="flex flex-col leading-tight select-none">
          <div className="flex items-center gap-2">
            <span className={`font-extrabold tracking-tight text-white ${current.textSize}`}>
              Sacoon <span className="text-cafe-gold">Cafe</span>
            </span>
          </div>
          <span className={`text-zinc-400 font-medium ${current.subSize}`}>
            Specialty Coffee & Equipment • Est. 2023
          </span>
        </div>
      )}
    </div>
  );
};
