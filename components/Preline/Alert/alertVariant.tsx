// src/components/alertVariants.tsx
import React, { FC } from 'react';
import { Alert, AlertProps } from './alert';
import {
  BsCheckCircleFill,
  BsExclamationTriangleFill,
  BsInfoCircle,
  BsInfoCircleFill,
  BsXCircleFill,
} from 'react-icons/bs';

export const AlertInfo: FC<AlertProps> = (props) => {
  return <Alert {...props} type='info' icon={<BsInfoCircleFill />} />;
};

export const AlertSuccess: FC<AlertProps> = (props) => {
  return <Alert {...props} type='success' icon={<BsCheckCircleFill />} />;
};

export const AlertWarn: FC<AlertProps> = (props) => {
  return <Alert {...props} type='warn' icon={<BsExclamationTriangleFill />} />;
};

export const AlertTip: FC<AlertProps> = (props) => {
  return <Alert {...props} type='tip' icon={<BsInfoCircle />} />;
};

export const AlertError: FC<AlertProps> = (props) => {
  return <Alert {...props} type='error' icon={<BsXCircleFill />} />;
};

export const AlertDark: FC<AlertProps> = (props) => {
  return <Alert {...props} type='dark' icon={<BsInfoCircle />} />;
};
