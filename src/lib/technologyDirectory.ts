import { technologies } from "@/data/technologies";
import { technologyGroups } from "@/data/technologyGroups";
export function filterTechnologies(query: string, category: string) {
  const group = technologyGroups.find((g) => g.id === category);
  const term = query.trim().toLocaleLowerCase("en");
  return technologies.filter(
    (name) =>
      (!group || group.names.includes(name)) &&
      (name.toLocaleLowerCase("en").includes(term) ||
        technologyGroups.some(
          (g) =>
            g.names.includes(name) &&
            `${g.label} ${g.description}`
              .toLocaleLowerCase("en")
              .includes(term),
        )),
  );
}
