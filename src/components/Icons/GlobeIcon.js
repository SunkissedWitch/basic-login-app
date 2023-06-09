export const GlobeIcon = (props) => {
  return (
    <svg
      {...props}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width || 28}
      height={props?.height || 28}
      stroke={props?.stroke || "currentColor"}
    >
      <path
        d="M14 24.5C19.799 24.5 24.5 19.799 24.5 14C24.5 8.20101 19.799 3.5 14 3.5C8.20101 3.5 3.5 8.20101 3.5 14C3.5 19.799 8.20101 24.5 14 24.5Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 14H24.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 24.2157C16.4162 24.2157 18.375 19.642 18.375 14C18.375 8.35811 16.4162 3.78442 14 3.78442C11.5838 3.78442 9.625 8.35811 9.625 14C9.625 19.642 11.5838 24.2157 14 24.2157Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
