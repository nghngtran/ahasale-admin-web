import React, { FC, memo, ReactNode } from 'react';
import { CircularProgress } from '@material-ui/core';
import { CircularProgressProps } from '@material-ui/core/CircularProgress';
import clsx from 'clsx';
import useStyles from './styles';

export const SpinComponent: FC<SpinProps> = ({
  children,
  className,
  color = 'secondary',
  loading,
  wrapperClassName,
  ...props
}) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      <div
        className={clsx(classes.childrenWrapper, wrapperClassName, {
          [classes.loading]: loading,
        })}>
        {children}
      </div>
      <div
        className={clsx(classes.progressWrapper, {
          [classes.loading]: loading,
        })}>
        <CircularProgress {...props} color={color} />
      </div>
    </div>
  );
};

const Spin = memo(SpinComponent);
Spin.displayName = 'Spin';
export default Spin;

export interface SpinProps extends CircularProgressProps {
  loading?: boolean;
  wrapperClassName?: string;
  children?: ReactNode;
}
