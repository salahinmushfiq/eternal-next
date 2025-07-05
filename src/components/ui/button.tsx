// src/components/ui/button.tsx
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
}

export const Button: React.FC<ButtonProps> = ({ className, variant = 'primary', ...props }) => {
  const base = 'rounded px-4 py-2 text-sm font-medium transition';
  const variants = {
    primary: 'bg-[#7f6d5f] text-white hover:bg-[#b59f90]',
    outline: 'border border-[#7f6d5f] text-[#7f6d5f] hover:bg-[#f4f1ed]',
  };

  return (
    <button
      className={cn(base, variants[variant], className)}
      {...props}
    />
  );
};
