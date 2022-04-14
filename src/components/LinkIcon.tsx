import { FC, HTMLProps } from 'react';

const LinkIcon: FC<HTMLProps<HTMLAnchorElement>> = ({ children, ...rest }) => {
  return (
    <a
      {...rest}
      className="linkIcon text-gray-500 hover:text-gray-700 cursor-pointer"
      rel="noopener noreferer"
      target="_blank"
    >
      {children}
      <style jsx>
        {`
          .linkIcon:not(:last-child) {
            margin-right: 0.75rem;
          }
          .linkIcon :global(svg) {
            fill: currentColor;
            width: 1.25rem;
            height: 1.25rem;
          }
        `}
      </style>
    </a>
  );
};

export { LinkIcon };
