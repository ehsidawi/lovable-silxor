import type { ArchitectureDiagram } from "@/data/diagrams";

export type Point = { x: number; y: number };

const sequences: Record<string, string[]> = {
  "software-lifecycle": ["discover", "design", "build", "validate", "release", "improve"],
  "iot-flow": ["device", "gateway", "ingest", "processing", "apps", "updates"],
  "engagement-flow": ["assess", "design", "build", "migrate", "operate", "improve"],
};

export function diagramLayout(data: ArchitectureDiagram) {
  const sequence = sequences[data.id];
  const nodes = sequence
    ? sequence.flatMap(id => data.nodes.filter(node => node.id === id))
    : data.nodes;
  const positions = new Map<string, Point>();
  nodes.forEach((node, index) => {
    let point: Point;
    if (data.id === "it-estate") {
      const estate: Record<string, Point> = {
        strategy: { x: 300, y: 48 }, operations: { x: 300, y: 282 },
        infrastructure: { x: 80, y: 105 }, cloud: { x: 300, y: 125 }, security: { x: 520, y: 105 },
        identity: { x: 80, y: 220 }, software: { x: 300, y: 205 }, hardware: { x: 520, y: 220 },
      };
      point = estate[node.id] ?? { x: 300, y: 165 };
    } else if (data.id === "zero-trust" || data.id === "iot-flow") {
      const angle = -Math.PI / 2 + index * Math.PI * 2 / nodes.length;
      point = { x: 300 + Math.cos(angle) * 220, y: 165 + Math.sin(angle) * 115 };
    } else if (sequence) {
      point = { x: 80 + (index < 3 ? index : 5 - index) * 220, y: index < 3 ? 80 : 250 };
    } else {
      point = { x: 80 + node.column * 220, y: 65 + node.row * (data.id === "identity-landscape" ? 100 : 195) };
    }
    positions.set(node.id, point);
  });
  return { nodes, positions };
}