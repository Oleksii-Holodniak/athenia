import * as React from "react";

function IconCopyRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M20 13.125V6a3 3 0 00-3-3H9.875M14 21H7.25A2.25 2.25 0 015 18.75V9a2.25 2.25 0 012.25-2.25H14A2.25 2.25 0 0116.25 9v9.75A2.25 2.25 0 0114 21z"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
}

const MemoIconCopyRight = React.memo(IconCopyRight);
export default MemoIconCopyRight;
