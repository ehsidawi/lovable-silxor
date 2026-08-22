import { useReducedMotion } from "framer-motion";

const rows = [
  { k: "Architecture", v: "D-Modular" },
  { k: "Integrity", v: "99.98%" },
  { k: "Latency", v: "14ms" },
  { k: "Standard", v: "ISO 27001" },
];

/**
 * Technical status / spec sheet preview card.
 * Reuses the established SILXOR engineering-log visual language.
 */
const SpecSheetCard = () => {
  const reduce = useReducedMotion();

  return (
    <div
      className="flex flex-col gap-4 w-full"
      style={{
        backgroundColor: "#25282C",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 20,
        padding: "clamp(16px, 3vw, 24px)",
      }}
    >
      <div className="flex justify-between items-center gap-3">
        <span
          className="font-mono font-[700] uppercase"
          style={{ fontSize: 11, letterSpacing: "0.22em", color: "#F0F1F3" }}
        >
          SILXOR
        </span>
        <span
          className="font-mono uppercase"
          style={{ fontSize: 10, letterSpacing: "0.2em", color: "#8E949B" }}
        >
          SLXR // 2026
        </span>
      </div>

      <div className="flex justify-between items-center font-mono" style={{ fontSize: 10, color: "#8E949B" }}>
        <span className="uppercase" style={{ letterSpacing: "0.18em" }}>
          Engineering Logs
        </span>
        <span className={reduce ? undefined : "animate-pulse"} style={{ color: "#F0F1F3" }}>
          REC ●
        </span>
      </div>

      <div className="flex flex-col gap-3">
        {rows.map((row) => (
          <div
            key={row.v}
            className="flex justify-between items-end gap-3"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.10)", paddingBottom: 5 }}
          >
            <span
              className="uppercase font-[700]"
              style={{ fontSize: 11, color: "#8E949B", letterSpacing: "0.1em" }}
            >
              {row.k}
            </span>
            <span className="font-mono" style={{ fontSize: 13, color: "#FFFFFF" }}>
              {row.v}
            </span>
          </div>
        ))}
      </div>

      <span
        className="font-mono uppercase"
        style={{ fontSize: 10, letterSpacing: "0.2em", color: "#8E949B" }}
      >
        Status: Operational // Build
      </span>
    </div>
  );
};

export default SpecSheetCard;
