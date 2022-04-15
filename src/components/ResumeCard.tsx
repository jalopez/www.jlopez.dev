import { PropsWithChildren } from 'react';

export type ResumeCardProps = PropsWithChildren<{
  subtitle: string;
  subtitleRight?: string;
  title: string;
  titleRight?: string;
}>;

export function ResumeCard({
  title,
  titleRight,
  subtitle,
  subtitleRight,
  children,
}: ResumeCardProps) {
  return (
    <li className="pt-2">
      <p className="flex justify-between text-sm">
        <strong className="text-base">{title}</strong>
        {titleRight}
      </p>
      <p className="flex justify-between text-base">
        {subtitle}
        {subtitleRight && <small>{subtitleRight}</small>}
      </p>
      <p className="text-justify text-xs">{children}</p>
    </li>
  );
}
