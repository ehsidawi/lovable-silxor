import { describe, expect, it } from "bun:test";
import { filterTechnologies } from "./technologyDirectory.ts";
describe("technology directory filtering", () => {
  it("preserves all 30 public technologies", () =>
    expect(filterTechnologies("", "all")).toHaveLength(30));
  it("combines name search with category", () => {
    expect(filterTechnologies("  CYBERARK ", "privileged-access")).toEqual([
      "CyberArk",
    ]);
    expect(filterTechnologies("CyberArk", "cloud")).toEqual([]);
  });
  it("finds capability terms and has a real empty state", () => {
    expect(filterTechnologies("credentials", "all")).toEqual([
      "CyberArk",
      "BeyondTrust",
      "Delinea",
      "HashiCorp",
    ]);
    expect(filterTechnologies("nonexistent", "all")).toEqual([]);
  });
});
