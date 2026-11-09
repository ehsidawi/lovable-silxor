import { defineTool } from '@lovable.dev/mcp-js';
import { business, SITE } from '../../../data/site';

export default defineTool({
  name: 'get_contact',
  title: 'Silxor contact information',
  description: 'Read public contact details and the consultation page URL. Does not submit or read requests.',
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({ content: [{ type: 'text', text: `${business.name}\nEmail: ${business.email}\nPhone: ${business.telephone}\nConsultation: ${SITE}/book\nSubmit requests through the website form. Do not include sensitive production data.` }] }),
});