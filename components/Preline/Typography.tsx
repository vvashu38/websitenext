import React from 'react';
import clsx from 'clsx';
interface TypographyProps {
  text?: string;
  variant?: 'display-h1' | 'display-h2' | 'display-xl' | 'display-lg' | 'display-md' | 'display-md1' | 'display-sm' | 'display-xs' | 'text-xl' | 'text-lg' | 'text-md' | 'text-sm' | 'text-xs';
  className?: string;
  fontWeight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold';
}

const TypographyComponent: React.FC<TypographyProps> = ({
  text,
  variant = 'text-md',
  className = '',
  fontWeight = 'regular',
}) => {
  const baseClasses = 'text-gray-900';

  const fontWeights = {
    light: 'font-light',
    regular: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  const variants = {
    'display-h1': 'text-[72px]',
    'display-h2': 'text-[60px]',
    'display-xl': 'text-[48px]',
    'display-lg': 'text-[42px]',
    'display-md': 'text-[36px]',
    'display-md1': 'text-[30px]',
    'display-sm': 'text-[26px]',
    'display-xs': 'text-[24px]',
    'text-xl': 'text-[20px]',
    'text-lg': 'text-[18px]',
    'text-md': 'text-[16px]',
    'text-sm': 'text-[14px]',
    'text-xs': 'text-[12px]',
  };

  const Component = variant.startsWith('display') ? 'div' : 'p';

  return (
    <Component className={clsx(`${baseClasses} ${variants[variant]} ${fontWeights[fontWeight]} ${className}`)}>
      {text}
    </Component>
  );
};

export default TypographyComponent;
