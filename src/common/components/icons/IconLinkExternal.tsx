import * as React from "react";

function IconLinkExternal(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} fill="none" {...props}>
      <path
        d="M7.25 2h-3A2.25 2.25 0 002 4.25v7.5A2.25 2.25 0 004.25 14h7.5A2.25 2.25 0 0014 11.75v-3M10.25 2H14m0 0v3.375M14 2L7.624 8.375"
        stroke="#1D2939"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoIconLinkExternal = React.memo(IconLinkExternal);
export default MemoIconLinkExternal;
