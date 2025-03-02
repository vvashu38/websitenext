import clsx from "clsx";
import { isUndefined } from "lodash-es";
import { BsChevronDown } from 'react-icons/bs';
import React, { useState, useEffect, useMemo } from "react";
import { Input } from "../input/input";

// Dropdown component
function Dropdown({ items, className } : any) {
  return (
    <ul className={clsx('dropdown-menu', className)}>
      {items.map((item : any) => (
        <li
          key={item.key}
          onClick={item.onClick}
          className="cursor-pointer px-4 py-2 hover:bg-gray-100"
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
}

// Select
export function Select<V>({ options, value, valueRender, onChange, className }: SelectProps<V>) {
  const [v, setV] = useState(value);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setV(value);
  }, [value]);

  const items = useMemo(
    () =>
      options.map((opt) => ({
        className: opt.className,
        style: opt.style,
        onClick: () => {
          setV(opt.value);
          onChange?.(opt.value);
          setIsOpen(false); 
        },
        label: opt.label,
        key: isUndefined(opt.key) ? opt.value : opt.key,
      })),
    [options, onChange]
  );

  return (
    <div className={clsx('relative', className)}>  
      <Input
        className="mt-1 block w-full px-3 py-3 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-primary"
        state="none"          
        size="xsmall"
        value={valueRender ? valueRender(v) : v?.toString() || ''}
        onClick={() => setIsOpen(!isOpen)} 
        readOnly
      />
      <BsChevronDown
        className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}  
      />
      {isOpen && (
        <Dropdown className="absolute w-full mt-1 border border-gray-300 bg-white rounded-md shadow-lg z-10" items={items} />
      )}
    </div>
  );
}

// Define the SelectProps interface
interface Option<V> {
  value: V;
  label: string;
  key?: string | number;
  className?: string;
  style?: React.CSSProperties;
}

interface SelectProps<V> {
  options: Option<V>[];
  value: V;
  onChange?: (value: V) => void;
  valueRender?: (value: V) => string;
  className?: string;  // Add this line to include className
}
