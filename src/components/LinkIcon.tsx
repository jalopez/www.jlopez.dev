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
            @apply mr-3;
          }
          .linkIcon :global(svg) {
            @apply fill-current w-5 h-5;
          }
        `}
      </style>
    </a>
  );
};

export { LinkIcon };
