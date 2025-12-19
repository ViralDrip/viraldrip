import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  withArrow?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  withArrow = false,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-display font-bold transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 overflow-hidden group";

  const sizeStyles = {
    sm: "px-5 py-2.5 text-sm rounded-xl",
    md: "px-7 py-3.5 text-base rounded-2xl",
    lg: "px-10 py-5 text-lg rounded-2xl",
  };

  const variants = {
    primary: `
      bg-gradient-to-r from-orange-500 via-orange-500 to-amber-500
      hover:from-orange-600 hover:via-orange-600 hover:to-amber-600
      text-white
      shadow-brand hover:shadow-brand-lg
      hover:-translate-y-0.5 hover:scale-[1.02]
      focus:ring-orange-500
      active:scale-[0.98]
    `,
    secondary: `
      bg-slate-900 hover:bg-slate-800
      text-white
      shadow-lg shadow-slate-900/20 hover:shadow-xl hover:shadow-slate-900/30
      hover:-translate-y-0.5
      focus:ring-slate-900
      active:scale-[0.98]
    `,
    outline: `
      border-2 border-slate-200 hover:border-orange-400
      text-slate-700 hover:text-orange-600
      bg-transparent hover:bg-orange-50/50
      focus:ring-orange-500
    `,
    ghost: `
      text-slate-600 hover:text-orange-600
      bg-transparent hover:bg-orange-50
      focus:ring-orange-500
    `,
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {/* Shimmer effect on hover for primary variant */}
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-out" />
      )}

      <span className="relative z-10 flex items-center gap-2">
        {children}
        {withArrow && (
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        )}
      </span>
    </button>
  );
};

export default Button;
