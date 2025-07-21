import { ButtonProps } from '@/interfaces';
import { ReactNode } from 'react';

// Define allowed size values
export type ButtonSize = 'small' | 'medium' | 'large';

// Define allowed shape values
export type ButtonShape = 'rounded-sm' | 'rounded-md' | 'rounded-full';

// Extend ButtonProps with proper types
interface ButtonComponentProps extends Omit<ButtonProps, 'size' | 'shape'>, React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: ButtonSize;
  shape?: ButtonShape;
  className?: string;
}

export default function Button({
  children,
  size = 'medium',
  shape = 'rounded-md',
  className = '',
  ...props
}: ButtonComponentProps) {
  const sizeClasses: Record<ButtonSize, string> = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-sm',
    large: 'px-6 py-3 text-base',
  };

  const shapeClasses: Record<ButtonShape, string> = {
    'rounded-sm': 'rounded-sm',
    'rounded-md': 'rounded-md',
    'rounded-full': 'rounded-full',
  };

  return (
    <button
      className={`inline-flex items-center justify-center font-medium transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
        sizeClasses[size] || sizeClasses.medium
      } ${shapeClasses[shape] || shapeClasses['rounded-md']} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

