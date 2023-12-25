import * as React from "react";

function IconPlus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={34} height={34} fill="none" {...props}>
      <path
        d="M28.314 17H5.686M17 28.314V5.686"
        stroke="#1D2939"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
}

const MemoIconPlus = React.memo(IconPlus);
export default MemoIconPlus;
