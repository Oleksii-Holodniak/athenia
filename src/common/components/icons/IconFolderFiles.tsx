import { SVGProps, memo } from "react";

const IconFolderFiles = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} fill="none" {...props}>
    <path
      d="M16.316 8.737V6.202a.833.833 0 00-.833-.834H9.924a.833.833 0 01-.59-.244L8.14 3.928a.833.833 0 00-.59-.244H2.834A.833.833 0 002 4.518v10.965c0 .46.373.833.833.833h.98m12.503-7.58H7.63a.833.833 0 00-.78.542l-2.278 6.075a.713.713 0 00-.046.25c0 .394-.319.713-.713.713m12.503-7.58h.528c.569 0 .97.558.79 1.098l-1.97 5.912a.833.833 0 01-.79.57H3.813m10.353-7.708v-.667a1 1 0 00-1-1H5.333a1 1 0 00-1 1v8.167"
      stroke="#475467"
      strokeLinecap="round"
    />
  </svg>
);

export default memo(IconFolderFiles);
