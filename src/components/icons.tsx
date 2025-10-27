import type { SVGProps } from 'react';

export const Icons = {
  logo: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14.5 9.5c.4-1.3.8-2.6.8-4" />
      <path d="M11.5 9.5a5.1 5.1 0 0 1-5 5" />
      <path d="M4 11h16" />
      <path d="M14.5 13.5c0 2.2-1.8 4-4 4h-3a4 4 0 0 1-4-4V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2.5" />
      <path d="M21.5 5.5l-1-1" />
      <path d="M18 3h2" />
      <path d="M21.5 2.5l-1 1" />
    </svg>
  ),
};
