import * as React from "react";

function IconKey(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M7.68 6.6h.12m6.819 2.782l6.689 6.689a1 1 0 01.292.707V20.6a1 1 0 01-1 1h-2.49v-2.618H15.49v-2.618l-3.224-3.037a6.11 6.11 0 112.352-4.818v.873z"
        stroke="#F8DE22"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoIconKey = React.memo(IconKey);
export default MemoIconKey;
