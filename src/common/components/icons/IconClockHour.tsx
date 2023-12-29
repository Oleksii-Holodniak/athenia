import * as React from "react";

function IconClockHour(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M12 21a9 9 0 100-18 9 9 0 000 18zM12 12l3 2M12 7v5"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoIconClockHour = React.memo(IconClockHour);
export default MemoIconClockHour;
