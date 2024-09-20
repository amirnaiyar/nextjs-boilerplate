const ReloadIcon: React.FunctionComponent<{
  className?: string;
  width?: string;
  height?: string;
  fill?: string;
  disabled?: boolean;
}> = ({
  className = '',
  width = '21',
  height = '20',
  fill = 'none',
  disabled = false,
}) => (
  <svg
    className={className}
    width={width}
    opacity={disabled ? 0.5 : 1}
    height={height}
    viewBox="0 0 21 20"
    fill={'none'}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.46654 13.3068H4.34022V17.4331M11.7676 6.70469H15.8939V2.57837M3.99609 7.53256C4.45881 6.3873 5.23352 5.39482 6.23218 4.66792C7.23084 3.94102 8.41374 3.50887 9.64577 3.42056C10.8778 3.33224 12.1097 3.5913 13.2019 4.16833C14.294 4.74537 15.2018 5.61722 15.8231 6.68477M16.2385 12.4789C15.7758 13.6242 15.0011 14.6166 14.0024 15.3435C13.0038 16.0704 11.8214 16.5026 10.5893 16.5909C9.3573 16.6793 8.12493 16.4202 7.0328 15.8431C5.94068 15.2661 5.03247 14.3943 4.41114 13.3267"
      stroke={fill}
      strokeWidth="1.80057"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ReloadIcon;
