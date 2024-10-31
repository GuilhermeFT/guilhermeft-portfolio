'use client'

import { motion, Variants } from 'framer-motion'

export const Logo = ({ className }: { className?: string }) => {
  const pathVariants: Variants = {
    hidden: {
      stroke: '#1c4ed9',
      strokeWidth: 2,
      pathLength: 0,
      fillOpacity: 0,
    },
    visible: {
      pathLength: 1,
      fillOpacity: 1,
      transition: {
        duration: 4,
        ease: 'circInOut',
      },
    },
  }

  const path2Variants: Variants = {
    hidden: {
      stroke: '#fff',
      strokeWidth: 2,
      pathLength: 0,
      fillOpacity: 0,
    },
    visible: {
      pathLength: 1,
      fillOpacity: 1,
      transition: {
        duration: 4,
        ease: 'circInOut',
      },
    },
  }

  return (
    <svg
      width="269"
      height="307"
      viewBox="0 0 269 307"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <motion.path
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M168.579 304.56C163.854 305.22 159.095 303.846 155.283 300.977L7.6726 189.911C2.99734 186.394 0.196845 180.918 0.126579 175.068C0.0421931 168.042 0 160.804 0 153.356C0 139.376 0.142661 126.108 0.427983 113.554C1.56927 89.3015 7.56104 68.7583 18.4033 51.9243C29.2455 35.0903 44.5103 22.2508 64.1975 13.4058C83.8848 4.56081 106.996 0.138306 133.531 0.138306C154.93 0.138306 173.904 2.84887 190.453 8.26999C207.001 13.4058 220.839 20.3962 231.967 29.2412C243.38 38.0862 251.94 47.7871 257.646 58.3441C263.638 68.901 266.776 79.3152 267.062 89.5868C267.347 92.1547 266.491 94.2947 264.494 96.0066C262.782 97.7185 260.642 98.5745 258.074 98.5745H195.588C193.465 98.5745 191.668 98.3786 190.197 97.9867C188.904 97.6421 187.752 96.8997 186.847 95.9134C185.993 94.9813 185.197 93.871 184.461 92.5827C182.464 88.3029 179.468 83.8804 175.473 79.3152C171.764 74.4648 166.486 70.3276 159.638 66.9037C153.075 63.4799 144.373 61.7679 133.531 61.7679C117.267 61.7679 104.428 66.0478 95.0123 74.6074C85.882 83.1671 80.8889 96.8626 80.0329 115.694C79.1769 140.232 79.1769 165.055 80.0329 190.163C80.8889 210.136 86.1673 224.544 95.8683 233.389C105.569 242.234 118.409 246.657 134.387 246.657C145.229 246.657 154.787 244.802 163.062 241.093C171.621 237.384 178.326 231.677 183.177 223.974C188.027 215.985 190.453 205.856 190.453 193.587V193.587C190.453 189.096 186.812 185.455 182.321 185.455H150.222C147.084 185.455 144.373 184.457 142.09 182.459C140.093 180.177 139.095 177.466 139.095 174.328V142.657C139.095 139.518 140.093 136.95 142.09 134.953C144.373 132.671 147.084 131.529 150.222 131.529H258.074C261.213 131.529 263.78 132.671 265.778 134.953C267.775 136.95 268.774 139.518 268.774 142.657V191.447C268.774 215.985 263.21 236.956 252.082 254.36C240.955 271.765 225.119 285.175 204.576 294.591C193.447 299.607 181.542 302.748 168.579 304.56Z"
        fill="url(#paint0_linear_1173_236)"
      />
      <g filter="url(#filter0_b_1173_236)">
        <motion.path
          variants={path2Variants}
          initial="hidden"
          animate="visible"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32.54 217.64C19.659 207.934 2.08658 217.786 7.21804 233.076C9.92247 241.135 13.3657 248.612 17.5476 255.506C28.3898 272.625 43.5119 285.75 62.9138 294.881C82.6011 303.726 106.853 306.5 133.959 306.5V306.5C139.391 306.5 141.511 299.756 137.173 296.487L32.54 217.64Z"
          fill="url(#paint1_linear_1173_236)"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_1173_236"
          x="-9.69604"
          y="197.776"
          width="165.191"
          height="124.724"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="8" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1173_236"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1173_236"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1173_236"
          x1="268.774"
          y1="18.0279"
          x2="-7.5968e-06"
          y2="286.833"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1D4ED9" />
          <stop offset="1" stopColor="#1942B6" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1173_236"
          x1="30.6762"
          y1="306.5"
          x2="110.281"
          y2="191.138"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#E1E1E1" stopOpacity="0.6" />
        </linearGradient>
      </defs>
    </svg>
  )
}
