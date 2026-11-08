# Security policy

Report suspected vulnerabilities privately to **hello@silxor.com**, with the affected URL, impact and reproduction steps. Redact credentials and personal information. Do not open public issues containing sensitive details.

The public reporting policy is at https://silxor.com/security and the machine readable contact is at https://silxor.com/.well-known/security.txt. No response deadline, reward or permission for intrusive testing is promised.

## Consultation protection

The public submission function validates input, rejects honeypot submissions and reserves hourly rate limits atomically. Visitors cannot directly read or write consultation tables. Keyed hashes protect limiter metadata; hosted connection-header sanitation is not documented, so strict trustworthy IP enforcement is not established.

## Credentials

Never commit private keys, tokens, passwords, customer data or internal contracts. Browser configuration is public; private credentials must remain in server secrets. Never log form contents.
