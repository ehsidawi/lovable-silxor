import { useReducedMotion } from "framer-motion";

const nodes = [
  { id: "arch", x: 60, y: 46, label: "ARCH" },
  { id: "build", x: 210, y: 30, label: "BUILD" },
  { id: "cloud", x: 348, y: 78, label: "CLOUD" },
  { id: "sec", x: 78, y: 176, label: "SEC" },
  { id: "ai", x: 214, y: 148, label: "AI" },
  { id: "ops", x: 340, y: 214, label: "OPS" },
  { id: "id", x: 150, y: 262, label: "ID" },
];

const edges: [string, string][] = [
  ["arch", "build"],
  ["build", "cloud"],
  ["arch", "sec"],
  ["build", "ai"],
  ["cloud", "ops"],
  ["ai", "ops"],
  ["sec", "id"],
  ["id", "ai"],
  ["ai", "cloud"],
];

const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

/**
 * Static-first architecture topology used as the hero visual.
 * Pure inline SVG: no images, no layout shift, motion respects user settings.
 */
const TopologyDiagram = () => {
  const reduce = useReducedMotion();

  return (
    <div
      className="relative"
      style={{
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 32,
        background: "#191B1F",
        padding: 18,
      }}
    >
      <div className="flex items-center justify-between" style={{ marginBottom: 10 }}>
        <span
          className="font-mono uppercase"
          style={{ fontSize: 10, letterSpacing: "0.22em", color: "#8E949B" }}
        >
          Delivery System
        </span>
        <span
          className="font-mono uppercase"
          style={{ fontSize: 10, letterSpacing: "0.22em", color: "#8E949B" }}
        >
          One Owner
        </span>
      </div>

      <svg
        viewBox="0 0 410 300"
        role="img"
        aria-label="Diagram showing architecture, build, cloud, security, AI, identity, and operations connected as one delivery system"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        {edges.map(([a, b]) => {
          const na = byId[a];
          const nb = byId[b];
          return (
            <line
              key={`${a}-${b}`}
              x1={na.x}
              y1={na.y}
              x2={nb.x}
              y2={nb.y}
              stroke="rgba(240,241,243,0.16)"
              strokeWidth={1}
            />
          );
        })}

        {!reduce &&
          edges.slice(0, 4).map(([a, b], i) => {
            const na = byId[a];
            const nb = byId[b];
            return (
              <circle key={`p-${a}-${b}`} r={2.2} fill="#F0F1F3" opacity={0.85}>
                <animateMotion
                  dur={`${4 + i * 0.9}s`}
                  repeatCount="indefinite"
                  path={`M${na.x},${na.y} L${nb.x},${nb.y}`}
                />
              </circle>
            );
          })}

        {nodes.map((n) => (
          <g key={n.id}>
            <circle
              cx={n.x}
              cy={n.y}
              r={22}
              fill="rgba(240,241,243,0.05)"
              stroke="rgba(240,241,243,0.28)"
              strokeWidth={1}
            />
            <text
              x={n.x}
              y={n.y + 3.5}
              textAnchor="middle"
              fontFamily="'JetBrains Mono', monospace"
              fontSize={9}
              letterSpacing="0.08em"
              fill="#F0F1F3"
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default TopologyDiagram;
