import * as React from "react";

const IconClose = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={25} fill="none" {...props}>
    <path
      d="M18 6.5l-12 12m12 0L6 6.5"
      stroke="#6A7482"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
);

export default React.memo(IconClose);
