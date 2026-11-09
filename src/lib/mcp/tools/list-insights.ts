import { defineTool } from '@lovable.dev/mcp-js';
import { insights, insightPath } from '../../../data/insights';
import { SITE } from '../../../data/site';

export default defineTool({
  name: 'list_insights',
  title: 'Silxor insights',
  description: 'Read titles, summaries and links for public Silxor educational articles.',
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({ content: [{ type: 'text', text: insights.map(a => `${a.title}: ${a.description}\n${SITE}${insightPath(a)}`).join('\n\n') }] }),
});