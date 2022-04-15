import cn from 'classnames';
import { HTMLProps } from 'react';

export function Main({
  children,
  className,
  ...props
}: HTMLProps<HTMLDivElement>) {
  const classNames = cn('p-6 sm:px-6 lg:px-8 flex-1', className);
  return (
    <main {...props} className={classNames}>
      {children}
    </main>
  );
}
