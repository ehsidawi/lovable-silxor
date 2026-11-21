/** Engineered blueprint of the Silxor model: advisory above, technology and talent beside one accountable core. */
const tech = ["Infrastructure", "Cybersecurity", "Identity", "Software", "Private AI", "Operations"];
const talent = ["Executive search", "Assessment", "Specialists", "Contract teams"];

const SystemBlueprint = () => (
  <svg className="px-blueprint" viewBox="0 0 560 460" role="img" aria-labelledby="bp-title bp-desc">
    <title id="bp-title">Silxor operating model</title>
    <desc id="bp-desc">C-level advisory sits above a single accountable core. Technology practices connect on the left and talent practices on the right.</desc>
    <defs>
      <pattern id="bp-grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" className="bp-gridline" /></pattern>
      <marker id="bp-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L8 4L0 8z" className="bp-arrowhead" /></marker>
    </defs>
    <rect width="560" height="460" fill="url(#bp-grid)" />
    <text x="14" y="22" className="bp-mono">SILXOR / OPERATING MODEL</text>
    <text x="546" y="22" textAnchor="end" className="bp-mono">REV 2027</text>

    <g>
      <rect x="170" y="44" width="220" height="56" className="bp-node bp-node--accent" />
      <text x="182" y="64" className="bp-mono">03 / ADVISORY</text>
      <text x="182" y="88" className="bp-label">Board &amp; C-level counsel</text>
    </g>
    <path d="M280 100V168" className="bp-flow" markerEnd="url(#bp-arrow)" />
    <text x="288" y="140" className="bp-mono">DIRECTION</text>

    <g>
      <rect x="196" y="172" width="168" height="92" className="bp-core" />
      <text x="208" y="194" className="bp-mono">CORE</text>
      <text x="208" y="222" className="bp-label">Senior</text>
      <text x="208" y="244" className="bp-label">accountability</text>
    </g>

    <text x="14" y="160" className="bp-mono">01 / TECHNOLOGY</text>
    {tech.map((t, i) => {
      const y = 174 + i * 42;
      return <g key={t}>
        <rect x="14" y={y} width="132" height="30" className="bp-node" />
        <text x="24" y={y + 19} className="bp-small">{t}</text>
        <path d={`M146 ${y + 15}H170V218H196`} className="bp-link" />
      </g>;
    })}

    <text x="546" y="160" textAnchor="end" className="bp-mono">02 / TALENT</text>
    {talent.map((t, i) => {
      const y = 174 + i * 52;
      return <g key={t}>
        <rect x="414" y={y} width="132" height="34" className="bp-node" />
        <text x="424" y={y + 21} className="bp-small">{t}</text>
        <path d={`M414 ${y + 17}H390V218H364`} className="bp-link" />
      </g>;
    })}

    <path d="M280 264V330" className="bp-flow" markerEnd="url(#bp-arrow)" />
    <g>
      <rect x="196" y="334" width="168" height="44" className="bp-node" />
      <text x="208" y="361" className="bp-label">Outcomes owned</text>
    </g>
    <text x="14" y="446" className="bp-mono">ASSESS · DESIGN · BUILD · PLACE · OPERATE</text>
    <circle cx="280" cy="218" r="4" className="bp-pulse" />
  </svg>
);
export default SystemBlueprint;

/** Compact schematic for narrow screens: same model, fewer and larger labels. */
export const SystemBlueprintCompact = () => (
  <svg className="px-blueprint px-blueprint--compact" viewBox="0 0 320 210" role="img" aria-labelledby="bpc-title">
    <title id="bpc-title">Silxor operating model: advisory above one accountable core, technology and talent beside it</title>
    <rect x="80" y="8" width="160" height="38" className="bp-node bp-node--accent" />
    <text x="160" y="32" textAnchor="middle" className="bp-small">C-level advisory</text>
    <path d="M160 46V74" className="bp-flow" markerEnd="url(#bpc-arrow)" />
    <defs><marker id="bpc-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L8 4L0 8z" className="bp-arrowhead" /></marker></defs>
    <rect x="95" y="78" width="130" height="54" className="bp-core" />
    <text x="160" y="101" textAnchor="middle" className="bp-small">Senior</text>
    <text x="160" y="119" textAnchor="middle" className="bp-small">accountability</text>
    {["Technology", "Security", "Operations"].map((t, i) => <g key={t}>
      <rect x="4" y={70 + i * 26} width="78" height="22" className="bp-node" />
      <text x="43" y={85 + i * 26} textAnchor="middle" className="bp-tiny">{t}</text>
      <path d={`M82 ${81 + i * 26}H95`} className="bp-link" />
    </g>)}
    {["Search", "Assessment", "Teams"].map((t, i) => <g key={t}>
      <rect x="238" y={70 + i * 26} width="78" height="22" className="bp-node" />
      <text x="277" y={85 + i * 26} textAnchor="middle" className="bp-tiny">{t}</text>
      <path d={`M238 ${81 + i * 26}H225`} className="bp-link" />
    </g>)}
    <path d="M160 132V160" className="bp-flow" markerEnd="url(#bpc-arrow)" />
    <rect x="95" y="164" width="130" height="34" className="bp-node" />
    <text x="160" y="186" textAnchor="middle" className="bp-small">Outcomes owned</text>
  </svg>
);
