import cn from 'classnames';
import { HTMLProps } from 'react';

export interface MainProps extends HTMLProps<HTMLDivElement> {
  sectionClassName?: string;
}

export function Main({
  children,
  className,
  sectionClassName,
  ...props
}: MainProps) {
  const classNames = cn('flex p-6 sm:px-6 lg:px-8 flex-1', className);
  const sectionClassNames = cn(
    'flex-1 flex flex-col p-4 mx-auto my-4 max-w-5xl',
    sectionClassName,
  );
  return (
    <main {...props} className={classNames}>
      <section className={sectionClassNames}>{children}</section>
    </main>
  );
}
