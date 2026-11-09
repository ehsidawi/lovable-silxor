import { test, expect } from 'bun:test';
import { readFileSync } from 'node:fs';

test('MCP provides public access without login', () => {
  const manifest = JSON.parse(readFileSync('.lovable/mcp/manifest.json', 'utf8'));
  expect(manifest.auth.type).toBe('none');
});

test('MCP exposes only the three read only public website capabilities', () => {
  const manifest = JSON.parse(readFileSync('.lovable/mcp/manifest.json', 'utf8'));
  expect(manifest.mcp.tools.map(t => t.name).sort()).toEqual(['get_contact', 'list_insights', 'list_services']);
  for (const tool of manifest.mcp.tools) expect(tool.annotations.readOnlyHint).toBe(true);
});