"use client";

import { useEffect, useRef, useState } from "react";
import type { TriangleNode } from "@/lib/case-studies-data";

const VIEWBOX_W = 640;
const VIEWBOX_H = 200;
const NODE_W = 160;
const NODE_H = 76;
const NODE_Y = (VIEWBOX_H - NODE_H) / 2;
const GAP = (VIEWBOX_W - NODE_W * 3) / 2;

const nodeXs = [0, NODE_W + GAP, (NODE_W + GAP) * 2];
const lineLength = GAP;

export function TriangleOfTruth({ nodes }: { nodes: TriangleNode[] }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setInView(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full overflow-x-auto">
      <svg
        viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
        className="w-full min-w-[480px]"
        role="img"
        aria-label="Diagram: input flows to logic, logic flows to visibility"
      >
        {/* Connectors */}
        {[0, 1].map((i) => {
          const x1 = nodeXs[i] + NODE_W;
          const x2 = nodeXs[i + 1];
          const y = VIEWBOX_H / 2;
          return (
            <g key={i}>
              <line
                x1={x1}
                y1={y}
                x2={x2}
                y2={y}
                stroke="var(--unify-blue)"
                strokeWidth={2}
                strokeDasharray={lineLength}
                strokeDashoffset={inView ? 0 : lineLength}
                style={{
                  transition: `stroke-dashoffset 0.8s ease-out ${0.3 + i * 0.3}s`,
                }}
              />
              {/* Arrowhead */}
              <polygon
                points={`${x2},${y} ${x2 - 8},${y - 5} ${x2 - 8},${y + 5}`}
                fill="var(--unify-blue)"
                opacity={inView ? 1 : 0}
                style={{
                  transition: `opacity 0.3s ease-out ${1.1 + i * 0.3}s`,
                }}
              />
            </g>
          );
        })}

        {/* Nodes */}
        {nodes.slice(0, 3).map((node, i) => (
          <g
            key={node.label}
            style={{
              transformOrigin: `${nodeXs[i] + NODE_W / 2}px ${VIEWBOX_H / 2}px`,
              transform: inView ? "scale(1)" : "scale(0.92)",
              opacity: inView ? 1 : 0,
              transition: `opacity 0.5s ease-out ${i * 0.2}s, transform 0.5s ease-out ${i * 0.2}s`,
            }}
          >
            <rect
              x={nodeXs[i]}
              y={NODE_Y}
              width={NODE_W}
              height={NODE_H}
              rx={12}
              fill="var(--cs-bg-2)"
              stroke="var(--unify-blue)"
              strokeWidth={1.5}
            />
            <text
              x={nodeXs[i] + NODE_W / 2}
              y={VIEWBOX_H / 2 - 6}
              textAnchor="middle"
              fill="var(--cs-text)"
              fontSize="15"
              fontWeight="600"
            >
              {node.label}
            </text>
            <text
              x={nodeXs[i] + NODE_W / 2}
              y={VIEWBOX_H / 2 + 16}
              textAnchor="middle"
              fill="var(--cs-text-mut)"
              fontSize="12"
            >
              {node.sub}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
