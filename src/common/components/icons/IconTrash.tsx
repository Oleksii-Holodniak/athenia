import * as React from "react";

function IconTrash(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M4 6.176h16M9 3h6m-5 13.765v-6.353m4 6.353v-6.353M15.5 21h-7c-1.105 0-2-.948-2-2.118L6.043 7.28c-.023-.601.43-1.103 1-1.103h9.915c.568 0 1.022.502.999 1.103L17.5 18.882c0 1.17-.895 2.118-2 2.118z"
        stroke="#D92D20"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoIconTrash = React.memo(IconTrash);
export default MemoIconTrash;
