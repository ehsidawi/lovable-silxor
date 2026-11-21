import { useId, useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { technologyGroups, technologyAnchor } from "@/data/technologyGroups";
import { filterTechnologies } from "@/lib/technologyDirectory";
import { vendorMarks } from "@/data/vendorMarks";
import SmartLink from "@/components/SmartLink";
const destinations: Record<string, string> = {
  cloud: "/services/cloud",
  identity: "/services/identity",
  "privileged-access": "/services/identity#pam",
  security: "/services/cybersecurity",
  network: "/services/cloud",
  devops: "/services/software-engineering",
  itsm: "/services/managed-services",
  "enterprise-apps": "/services/software-engineering",
};
export default function TechnologyDirectory() {
  const id = useId();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const results = filterTechnologies(query, category);
  return (
    <div className="ed-directory">
      <div className="ed-directory-controls">
        <div>
          <label htmlFor={`${id}-search`}>Search technologies</label>
          <div className="ed-search">
            <Search aria-hidden="true" />
            <Input
              id={`${id}-search`}
              type="search"
              placeholder="Name or capability"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label htmlFor={`${id}-category`}>Category</label>
          <select
            id={`${id}-category`}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All categories</option>
            {technologyGroups.map((g) => (
              <option value={g.id} key={g.id}>
                {g.label}
              </option>
            ))}
          </select>
        </div>
        {(query || category !== "all") && (
          <Button
            variant="ghost"
            size="icon"
            aria-label="Clear filters"
            title="Clear filters"
            onClick={() => {
              setQuery("");
              setCategory("all");
            }}
          >
            <X aria-hidden="true" />
          </Button>
        )}
      </div>
      <p role="status" className="ed-directory-count">
        {results.length} technologies
        {category !== "all"
          ? ` in ${technologyGroups.find((g) => g.id === category)?.label}`
          : ""}
      </p>
      <ul className="ed-directory-list">
        {results.map((name) => (
          <li id={technologyAnchor(name)} key={name}>
            <div className="ed-directory-name">
              {vendorMarks[name] && (
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="ed-vendor-mark"
                >
                  <path d={vendorMarks[name].path} />
                </svg>
              )}
              <h3>{name}</h3>
            </div>
            <div className="ed-directory-categories">
              {technologyGroups
                .filter((g) => g.names.includes(name))
                .map((g) => (
                  <SmartLink key={g.id} to={destinations[g.id]}>
                    {g.label}
                    <span className="sr-only"> services for {name}</span>
                  </SmartLink>
                ))}
            </div>
          </li>
        ))}
      </ul>
      {!results.length && (
        <div className="ed-empty">
          <h3>No matching technologies</h3>
          <p>Try a different name or choose another category.</p>
          <Button
            variant="outline"
            onClick={() => {
              setQuery("");
              setCategory("all");
            }}
          >
            Clear filters
          </Button>
        </div>
      )}
    </div>
  );
}
