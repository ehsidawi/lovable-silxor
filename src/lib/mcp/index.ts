import { defineMcp } from '@lovable.dev/mcp-js';
import listServices from './tools/list-services';
import listInsights from './tools/list-insights';
import getContact from './tools/get-contact';

export default defineMcp({
  name: 'silxor-com',
  title: 'silxor com',
  version: '1.0.0',
  instructions: 'Read intentionally public Silxor website services, educational article summaries and contact information. No account access, private consultation records, submission actions or external AI calls are available.',
  tools: [listServices, listInsights, getContact],
});