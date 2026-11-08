import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { Question } from "@/data/site";
export default function QuestionList({ questions }: { questions: Question[] }) {
 return <Accordion type="single" collapsible>{questions.map((f,i) => <AccordionItem key={f.q} value={`question-${i}`}><AccordionTrigger className="py-6 text-left text-base hover:no-underline">{f.q}</AccordionTrigger><AccordionContent className="max-w-3xl text-base leading-relaxed text-muted-foreground">{f.a}</AccordionContent></AccordionItem>)}</Accordion>;
}
