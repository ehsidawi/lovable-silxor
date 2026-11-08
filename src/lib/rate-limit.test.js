import { describe, expect, it } from 'bun:test';
import { connectionBucket, limiterHash } from '../../supabase/functions/submit-consultation/rate-limit.ts';
describe('private consultation rate limit keys',()=>{
 it('matches normalized email without storing its value',async()=>{const key=await limiterHash('test-only-key','email',' Person@Example.com ');expect(key).toBe(await limiterHash('test-only-key','email','person@example.com'));expect(key).toMatch(/^[a-f0-9]{64}$/);expect(key).not.toContain('example');});
 it('separates IP and email key namespaces',async()=>expect(await limiterHash('test-only-key','ip','same')).not.toBe(await limiterHash('test-only-key','email','same')));
 it('uses a shared fallback when connection metadata is unavailable',()=>expect(connectionBucket(new Headers())).toBe('unknown-connection'));
 it('does not use caller supplied first forwarding entry',()=>expect(connectionBucket(new Headers({'x-forwarded-for':'1.1.1.1, 2.2.2.2'}))).toBe('2.2.2.2'));
});