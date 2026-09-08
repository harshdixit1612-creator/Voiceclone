import React from 'react';
import { clsx } from 'clsx';

interface SectionLayoutProps {
  id: string;
  title: string;
  sectionNumber?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export const SectionLayout: React.FC<SectionLayoutProps> = ({ 
  id, 
  title,
  sectionNumber,
  subtitle, 
  children, 
  className,
  containerClassName 
}) => {
  return (
    <section id={id} className={clsx("py-24", className)}>
      <div className={clsx("container mx-auto px-4 md:px-6 max-w-7xl", containerClassName)}>
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-4">
            {sectionNumber && (
              <span className="text-xl md:text-2xl font-mono text-accent">
                {sectionNumber} /
              </span>
            )}
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text font-serif uppercase">
              {title}
            </h2>
          </div>
          
          <div className="h-px w-full bg-border mb-6"></div>

          {subtitle && (
            <p className="text-lg text-text-secondary max-w-3xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};
