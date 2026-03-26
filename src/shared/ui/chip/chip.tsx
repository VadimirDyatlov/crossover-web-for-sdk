import clsx from 'clsx';
import styles from './chip.module.css';
import type { FC } from 'react';

interface ChipProps {
  label?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Chip: FC<ChipProps> = ({
  label,
  icon,
  onClick,
  disabled = false,
  className = '',
  children,
}) => {
  const isClickable = onClick && !disabled;
  const content = children || label;

  return (
    <div
      className={clsx(
        styles.chip,
        isClickable && styles.clickable,
        disabled && styles.disabled,
        className,
      )}
      onClick={onClick}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {content}
    </div>
  );
};
