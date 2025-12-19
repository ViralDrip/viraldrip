import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  withArrow?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  withArrow = false,
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-display font-bold transition-all duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    // Updated to Solid Orange with soft glow and subtle scale
    primary: "bg-orange-500 hover:bg-orange-500 text-white shadow-md shadow-orange-200/40 hover:shadow-lg hover:shadow-orange-200/50 hover:scale-[1.02] focus:ring-orange-500 border border-transparent",
    secondary: "bg-slate-900 hover:bg-slate-800 text-white shadow-md focus:ring-slate-900",
    // Updated outline hover to match orange brand
    outline: "border-2 border-slate-200 hover:border-orange-500 hover:text-orange-600 text-slate-600 bg-transparent"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
      {withArrow && <ArrowRight className="ml-2 w-5 h-5" />}
    </button>
  );
};

export default Button;