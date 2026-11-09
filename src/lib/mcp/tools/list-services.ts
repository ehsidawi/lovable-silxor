import { defineTool } from '@lovable.dev/mcp-js';
import { services } from '../../../data/services';
import { SITE } from '../../../data/site';

export default defineTool({
  name: 'list_services',
  title: 'Silxor services',
  description: 'Read the public Silxor service catalog and links to service pages.',
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({ content: [{ type: 'text', text: services.map(s => `${s.name}: ${s.outcome}\n${SITE}${s.path}`).join('\n\n') }] }),
});