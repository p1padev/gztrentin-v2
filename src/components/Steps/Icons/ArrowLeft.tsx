import type { SVGProps } from 'react';

export function ArrowLeft(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="m11.828 12l2.829 2.829l-1.414 1.414L9 12.001l4.243-4.243l1.414 1.414z"
      ></path>
    </svg>
  );
}
