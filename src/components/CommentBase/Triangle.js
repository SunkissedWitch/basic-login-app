export const Triangle = (props) => {
  return (
    <svg
      {...props}
      viewBox="0 1 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width || 24}
      height={props?.height || 22}
    >
      <path
        d="M12.9025 20.7918C12.5176 21.4585 11.5554 21.4585 11.1705 20.7918L0.601095 2.48506C0.216195 1.81839 0.69732 0.985059 1.46712 0.98506L22.6059 0.985061C23.3757 0.985061 23.8569 1.81839 23.472 2.48506L12.9025 20.7918Z"
        fill={"currentColor"}
      />
    </svg>
  );
};
