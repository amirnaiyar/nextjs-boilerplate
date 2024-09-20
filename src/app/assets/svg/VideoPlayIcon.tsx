const VideoPlayIcon: React.FunctionComponent<{
  className?: string;
  width?: string;
  height?: string;
  fill?: string;
}> = ({ className = '', width = '118', height = '118' }) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 118 118"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_4113_33315)">
      <g filter="url(#filter1_i_4113_33315)">
        <circle cx="59" cy="54" r="20" fill="#FFBD00" />
        <circle
          cx="59"
          cy="54"
          r="20"
          fill="url(#paint0_radial_4113_33315)"
          fillOpacity="0.9"
        />
      </g>
      <circle
        cx="59"
        cy="54"
        r="21.5"
        stroke="url(#paint1_linear_4113_33315)"
        strokeWidth="3"
      />
      <circle
        cx="59"
        cy="54"
        r="21.5"
        stroke="#F8F8F8"
        strokeOpacity="0.81"
        strokeWidth="3"
      />
      <g clipPath="url(#clip0_4113_33315)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M53.7236 47.9674C53.7459 47.7781 53.8121 47.5967 53.917 47.4375C54.0218 47.2783 54.1624 47.1458 54.3275 47.0505C54.4926 46.9553 54.6777 46.8999 54.868 46.8888C55.0582 46.8777 55.2485 46.9112 55.4236 46.9866C56.3086 47.3649 58.2919 48.2641 60.8086 49.7166C63.3261 51.1699 65.0969 52.4391 65.8661 53.0149C66.5227 53.5074 66.5244 54.4841 65.8669 54.9782C65.1052 55.5507 63.3561 56.8032 60.8086 58.2749C58.2586 59.7466 56.2986 60.6349 55.4219 61.0082C54.6669 61.3307 53.8219 60.8416 53.7236 60.0274C53.6086 59.0757 53.3936 56.9149 53.3936 53.9966C53.3936 51.0799 53.6077 48.9199 53.7236 47.9674Z"
          fill="#2B2668"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_d_4113_33315"
        x="0.125"
        y="0.125"
        width="117.75"
        height="117.75"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="5" />
        <feGaussianBlur stdDeviation="17.9375" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.71 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_4113_33315"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_4113_33315"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_i_4113_33315"
        x="36"
        y="28"
        width="51"
        height="49"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="5" dy="-3" />
        <feGaussianBlur stdDeviation="6" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_4113_33315"
        />
      </filter>
      <radialGradient
        id="paint0_radial_4113_33315"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(84.0913 31.1034) rotate(125.285) scale(47.7367 55.2722)"
      >
        <stop stopColor="#FFF72C" />
        <stop offset="1" stopColor="#FF7A00" stopOpacity="0" />
      </radialGradient>
      <linearGradient
        id="paint1_linear_4113_33315"
        x1="63.9438"
        y1="34"
        x2="63.9438"
        y2="74"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF9A61" />
        <stop offset="0.461872" stopColor="#D8A449" stopOpacity="0.538128" />
        <stop offset="1" stopColor="#969234" stopOpacity="0" />
      </linearGradient>
      <clipPath id="clip0_4113_33315">
        <rect
          width="20"
          height="20"
          fill="white"
          transform="translate(49 44)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default VideoPlayIcon;
