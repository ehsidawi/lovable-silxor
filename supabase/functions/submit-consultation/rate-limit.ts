/** Forwarding metadata is supplementary. A global bucket also prevents changing it from bypassing all limits. */
export function connectionBucket(headers: Headers): string {
 const candidate = headers.get('x-real-ip')?.trim() || headers.get('x-forwarded-for')?.split(',').at(-1)?.trim();
 return candidate && candidate.length <= 64 && /^[0-9a-fA-F:.]+$/.test(candidate) ? candidate.toLowerCase() : 'unknown-connection';
}
export async function limiterHash(secret: string, kind: 'ip' | 'email', value: string): Promise<string> {
 const encoder = new TextEncoder();
 const key = await crypto.subtle.importKey('raw',encoder.encode(secret),{name:'HMAC',hash:'SHA-256'},false,['sign']);
 const signature = await crypto.subtle.sign('HMAC',key,encoder.encode(`${kind}:${value.trim().toLowerCase()}`));
 return Array.from(new Uint8Array(signature),b=>b.toString(16).padStart(2,'0')).join('');
}