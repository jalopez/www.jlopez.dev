import cn from 'classnames';
import { HTMLProps } from 'react';

export function SectionTitle({
  children,
  className,
  ...props
}: HTMLProps<HTMLHeadingElement>) {
  const classNames = cn('text-2xl mt-6 pb-1 border-b font-semibold', className);
  return (
    <h2 {...props} className={classNames}>
      {children}
    </h2>
  );
}
