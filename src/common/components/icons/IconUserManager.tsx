import * as React from "react";

function IconUserManager(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M17 15l.85 1.83 2.003.243-1.478 1.374.388 1.98L17 19.446l-1.764.981.388-1.98-1.478-1.374 2.004-.243L17 15z"
        stroke="#ebb402"
        strokeWidth={1.2}
        strokeLinejoin="round"
      />
      <path
        d="M2.4 21.6V18A3.6 3.6 0 016 14.4h7.2M14.4 6a3.6 3.6 0 11-7.2 0 3.6 3.6 0 017.2 0z"
        stroke="#ebb402"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoIconUserManager = React.memo(IconUserManager);
export default MemoIconUserManager;
