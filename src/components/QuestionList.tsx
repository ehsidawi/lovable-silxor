import { ChevronDown } from "lucide-react";
import type { Question } from "@/data/site";
/** Native disclosure keeps answers readable and usable without JavaScript. */
export default function QuestionList({ questions }: { questions: Question[] }) {
 return <div>{questions.map(f=><details key={f.q} className="group border-b border-border"><summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-5 py-6 text-base font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring [&::-webkit-details-marker]:hidden">{f.q}<ChevronDown className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" /></summary><p className="max-w-3xl pb-6 text-base leading-relaxed text-muted-foreground">{f.a}</p></details>)}</div>;
}
