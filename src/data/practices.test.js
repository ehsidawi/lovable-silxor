import { expect, test } from "bun:test";
import { practices, inquiryPreset, inquiryHref, practiceForService } from "./practices.ts";
import { serviceAreaIds } from "../../supabase/functions/submit-consultation/options.ts";
import { services } from "./services.ts";

test("four practices get equal billing in a fixed order", () => {
  expect(practices.map(p => p.name)).toEqual(["Information Technology", "Cybersecurity", "Information Security", "Recruitment"]);
});
test("every practice service exists and is an accepted request area", () => {
  for (const p of practices) for (const s of p.services) { expect(services.some(x => x.slug === s)).toBe(true); expect(serviceAreaIds).toContain(s); }
});
test("every service belongs to exactly one practice", () => {
  for (const s of services) expect(practices.filter(p => p.services.includes(s.slug)).length).toBe(1);
});
test("recruitment inquiry preselects employer hiring", () => {
  expect(inquiryHref("recruitment")).toBe("/book?practice=recruitment");
  expect(inquiryPreset("recruitment")).toMatchObject({ engagement_type: "Talent Acquisition", service_areas: ["talent-acquisition"] });
});
test("cyber defense and information governance preselect different services", () => {
  expect(inquiryPreset("cybersecurity").service_areas).toEqual(["cybersecurity"]);
  expect(inquiryPreset("information-security").service_areas).toEqual(["information-security"]);
  expect(practiceForService("identity").id).toBe("cybersecurity");
});
test("a service outside the practice falls back to the practice default", () => {
  expect(inquiryPreset("information-technology", "talent-acquisition").service_areas).toEqual(["advisory"]);
  expect(inquiryPreset("unknown")).toBeNull();
});
