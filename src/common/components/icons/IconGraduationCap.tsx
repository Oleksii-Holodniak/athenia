import * as React from "react";

function IconGraduationCap(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M5.431 11.968l5.934 3.537a1 1 0 001.024 0l9.584-5.712a.5.5 0 000-.859l-9.584-5.711a1 1 0 00-1.024 0L1.781 8.934a.5.5 0 000 .859l3.65 2.175zm0 0v6.244a1 1 0 00.464.843l4.947 3.146a2 2 0 002.09.034l5.392-3.184a1 1 0 00.492-.861v-6.222"
        stroke="#F8DE22"
        strokeWidth={1.5}
      />
    </svg>
  );
}

const MemoIconGraduationCap = React.memo(IconGraduationCap);
export default MemoIconGraduationCap;
