import Link from 'next/link'

interface LogoLockupProps {
  inverted?: boolean
  onLinkClick?: () => void
}

export function LogoLockup({ inverted = false, onLinkClick }: LogoLockupProps) {
  return (
    <Link
      href="/"
      onClick={onLinkClick}
      className="flex items-center gap-[14px] no-underline"
      style={{
        color: inverted ? 'var(--color-white)' : 'var(--color-editorial-ink)',
      }}
    >
      {/* SVG icon — inlined from src/assets/logo_v3.svg with currentColor */}
      <svg
        width="44"
        height="44"
        viewBox="0 0 802 802"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <circle
          cx="401"
          cy="401"
          r="377.412"
          stroke="currentColor"
          strokeWidth="47.1765"
        />
        <path
          d="M392.776 617.676C352.625 617.676 317.492 608.843 287.378 591.176C257.666 573.108 234.579 548.013 218.117 515.892C201.654 483.771 193.423 446.229 193.423 403.267C193.423 359.903 201.855 321.558 218.719 288.232C235.984 254.906 260.677 228.808 292.799 209.936C324.92 191.065 363.265 181.629 407.833 181.629C458.023 181.629 499.58 193.675 532.504 217.766C565.83 241.857 587.311 275.183 596.947 317.743H496.368C490.345 300.88 479.705 287.831 464.447 278.596C449.591 269.361 430.519 264.743 407.231 264.743C380.731 264.743 358.447 270.565 340.378 282.209C322.31 293.452 308.659 309.512 299.424 330.391C290.189 350.869 285.571 375.16 285.571 403.267C285.571 432.176 290.189 456.668 299.424 476.744C308.659 496.82 322.109 512.077 339.776 522.517C357.443 532.555 378.322 537.574 402.413 537.574C436.943 537.574 463.042 528.54 480.708 510.471C498.777 492.403 509.818 469.717 513.833 442.414H415.663V374.96H604.175V610.449H521.061L513.833 561.665C505.402 573.71 495.364 583.949 483.72 592.381C472.477 600.813 459.227 607.036 443.97 611.051C429.113 615.468 412.049 617.676 392.776 617.676Z"
          fill="currentColor"
        />
      </svg>

      {/* Name block */}
      <div className="flex flex-col">
        <span
          className="font-display text-[17px] leading-[1.1] font-[700] tracking-[0.01em]"
          style={{
            color: inverted
              ? 'var(--color-white)'
              : 'var(--color-editorial-ink)',
          }}
        >
          Guilherme FT
        </span>
        <span
          className="mt-[3px] hidden text-[9.5px] leading-[1] font-[400] tracking-[0.18em] uppercase md:block"
          style={{
            color: inverted
              ? 'var(--color-gray-mid)'
              : 'var(--color-editorial-muted)',
          }}
        >
          SOFTWARE DEVELOPER
        </span>
      </div>
    </Link>
  )
}
