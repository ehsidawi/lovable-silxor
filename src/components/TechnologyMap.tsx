import { useId, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { technologyGroups, technologyAnchor } from "@/data/technologyGroups";
import { technologies } from "@/data/technologies";
import { vendorMarks } from "@/data/vendorMarks";
import { Button } from "@/components/ui/button";

function TechnologyMark({ name }: { name: string }) {
  const mark = vendorMarks[name];
  return mark ? <svg aria-hidden="true" viewBox="0 0 24 24" className="technology-mark"><path d={mark.path} /></svg> : <span className="technology-monogram" aria-hidden="true">{name.slice(0, 2)}</span>;
}

export default function TechnologyMap() {
  const id = useId();
  const [groupId, setGroupId] = useState("cloud");
  const [platform, setPlatform] = useState<string | null>(null);
  const group = technologyGroups.find(item => item.id === groupId) ?? technologyGroups[0];
  if (!group) return null;
  const related = platform ? technologyGroups.filter(item => item.names.includes(platform)) : [];
  const selectGroup = (value: string) => { setGroupId(value); setPlatform(null); };
  return <div className="technology-explorer">
    <h3 id={`${id}-heading`} className="font-display text-2xl font-semibold">Technology capability map</h3>
    <div className="technology-browser">
      <div className="technology-categories" role="group" aria-label="Technology categories">
        {technologyGroups.map((item, index) => <Button key={item.id} id={`technology-${item.id}`} variant="ghost" className="diagram-choice" aria-pressed={item.id === group.id} aria-controls={`${id}-panel`} onClick={() => selectGroup(item.id)}><span className="diagram-choice-index">{String(index + 1).padStart(2, "0")}</span><span>{item.label}</span></Button>)}
      </div>
      <div id={`${id}-panel`} className="technology-panel">
        <div className="technology-panel-heading" aria-live="polite" aria-atomic="true"><span className="diagram-selection-index">{String(technologyGroups.indexOf(group) + 1).padStart(2, "0")}</span><div><h4>{group.label}</h4><p>{group.description}</p></div></div>
        <div className="technology-options" role="group" aria-label={`${group.label} technologies`}>
          {group.names.map(name => <Button key={name} variant="ghost" className="technology-option" aria-pressed={platform === name} onClick={() => setPlatform(name)}><TechnologyMark name={name} /><span>{name}</span></Button>)}
        </div>
        <div className="technology-related" aria-live="polite" aria-atomic="true">
          {platform ? <><p>{platform}</p><div className="flex flex-wrap gap-x-3">{related.map(item => <Button key={item.id} variant="ghost" className="diagram-connection" onClick={() => selectGroup(item.id)}><ArrowUpRight aria-hidden="true" /><span>{item.label}</span></Button>)}</div></> : <p>{group.description}</p>}
        </div>
      </div>
    </div>
    <details className="technology-directory"><summary>Technologies and platforms we work with <span>{technologies.length}</span></summary>
      <ul className="technology-directory-list">{technologies.map(name => <li id={technologyAnchor(name)} key={name}><TechnologyMark name={name} /><span>{name}</span><div>{technologyGroups.filter(item => item.names.includes(name)).map(item => <Button key={item.id} variant="ghost" className="diagram-connection" onClick={() => selectGroup(item.id)}>{item.label}</Button>)}</div></li>)}</ul>
    </details>
  </div>;
}
