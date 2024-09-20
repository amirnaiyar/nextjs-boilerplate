const Cross: React.FunctionComponent<{
  className?: string;
  color?: string;
  height?: number;
  width?: number;
}> = ({ className, color = 'white', width = 20, height = 20 }) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.0003 9.52548L20.6628 0.862976L23.1373 3.33748L14.4748 12L23.1373 20.6625L20.6628 23.137L12.0003 14.4745L3.33778 23.137L0.863281 20.6625L9.52578 12L0.863281 3.33748L3.33778 0.862976L12.0003 9.52548Z"
      fill={color}
    />
  </svg>
);

export default Cross;
