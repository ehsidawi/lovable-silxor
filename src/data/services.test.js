import { describe, expect, it } from "bun:test";
import { getService, servicePillars, services } from "./services.ts";

describe("enterprise service destinations", () => {
  it("preserves all existing service destinations", () => {
    for (const slug of ["product-team", "advisory", "cloud", "cybersecurity", "managed-services", "private-ai", "identity"]) {
      expect(getService(slug)?.path).toBe(`/services/${slug}`);
    }
  });
  it("resolves each primary pillar to its existing or new detail page", () => {
    expect(servicePillars.map(s => s.slug)).toEqual(["advisory", "cloud", "managed-services", "cybersecurity", "identity", "software-engineering", "hardware-engineering"]);
    for (const pillar of servicePillars) expect(getService(pillar.slug)?.path).toBe(pillar.path);
    expect(new Set(services.map(s => s.path)).size).toBe(services.length);
  });
  it("provides distinct anchor destinations for every requested identity discipline", () => {
    const blocks = getService("identity")?.blocks ?? [];
    for (const id of ["iam", "ciam", "pam", "pim", "nhi", "iga"]) {
      expect(blocks.filter(b => b.id === id).length).toBe(1);
    }
  });
});
