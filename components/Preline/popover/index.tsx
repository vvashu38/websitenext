import React, { FC } from 'react';
import { clsx } from 'clsx';
import { Floating, FloatingProps } from './floating';

export type PopoverProps = FloatingProps;
export const Popover: FC<PopoverProps> = ({ className, ...restProps }) => {
  return (
    <Floating
      {...restProps}
      className={clsx(
        'rounded-md border bg-white px-4 py-3 text-sm text-gray-600 shadow-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400',
        className,
      )}
    />
  );
};