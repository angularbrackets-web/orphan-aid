// AnimatedGridPattern — ported from magicui/animated-grid-pattern (21st.dev)
// Uses framer-motion (already bundled via testimonial-v2.tsx).
// SVG grid with randomly positioned squares that fade in/out continuously.

import { useEffect, useId, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface Props {
  width?: number
  height?: number
  x?: number
  y?: number
  strokeDasharray?: number
  numSquares?: number
  maxOpacity?: number
  duration?: number
  repeatDelay?: number
  color?: string
  style?: React.CSSProperties
}

export function AnimatedGridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 50,
  maxOpacity = 0.15,
  duration = 4,
  repeatDelay = 0.5,
  color = '#C4952A',
  style,
}: Props) {
  const id = useId()
  const containerRef = useRef<SVGSVGElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [squares, setSquares] = useState<Array<{ id: number; pos: [number, number] }>>([])

  function getPos(dims: { width: number; height: number }): [number, number] {
    return [
      Math.floor((Math.random() * dims.width) / width),
      Math.floor((Math.random() * dims.height) / height),
    ]
  }

  function generateSquares(count: number, dims: { width: number; height: number }) {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      pos: getPos(dims),
    }))
  }

  function updateSquarePosition(squareId: number) {
    setSquares((current) =>
      current.map((sq) =>
        sq.id === squareId ? { ...sq, pos: getPos(dimensions) } : sq
      )
    )
  }

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const dims = {
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        }
        setDimensions(dims)
        setSquares(generateSquares(numSquares, dims))
      }
    })
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [numSquares])

  // Respect prefers-reduced-motion
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        ...style,
      }}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            stroke={color}
            strokeOpacity={0.08}
            strokeDasharray={strokeDasharray || undefined}
          />
        </pattern>
      </defs>

      {/* Grid lines */}
      <rect width="100%" height="100%" fill={`url(#${id})`} />

      {/* Animated squares */}
      {!prefersReducedMotion && (
        <svg x={x} y={y} style={{ overflow: 'visible' }}>
          {squares.map(({ pos: [sqX, sqY], id: squareId }, i) => (
            <motion.rect
              key={`${squareId}-${sqX}-${sqY}`}
              width={width - 1}
              height={height - 1}
              x={sqX * width + 1}
              y={sqY * height + 1}
              fill={color}
              strokeWidth={0}
              initial={{ opacity: 0 }}
              animate={{ opacity: maxOpacity }}
              transition={{
                duration,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
                delay: i * 0.08,
                repeatDelay,
              }}
              onAnimationComplete={() => updateSquarePosition(squareId)}
            />
          ))}
        </svg>
      )}
    </svg>
  )
}

export default AnimatedGridPattern
