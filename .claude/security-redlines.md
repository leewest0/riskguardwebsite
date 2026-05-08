# SECURITY-REDLINES.md
# AI Coding Assistant — Non-Negotiable Safety Policy

## Scope

This document governs **all code produced or modified with AI assistance** in this
codebase. It applies to every session, every file, and every environment — development,
staging, and production alike.

These rules are non-negotiable. Violating any redline is treated as a critical security
or compliance failure and must be escalated immediately.

---

## How the AI Must Behave When a Redline Applies

Before generating any code that touches a redline area, the AI must:

1. **Stop.** Do not generate the unsafe code, even partially.
2. **State the redline.** Call out which rule applies by section number and name.
3. **Explain the risk.** One sentence on why this would be unsafe.
4. **Propose a compliant alternative.** Suggest the safe approach instead.
5. **Wait for explicit approval** before proceeding if the operation is destructive
   or irreversible (see Sections 4 and 11).

The AI must never silently comply with a request that breaches a redline, even if the
user insists. Pushback is required — not optional.

---

## 1. Input Handling & Injection Prevention

- **No unvalidated inputs.** All AI-generated code that handles user or external input
  must include explicit sanitisation and validation. Code lacking this will be rejected
  at review.
- **No raw string concatenation in queries.** SQL queries must use parameterised
  statements or prepared statements exclusively. String interpolation of user input into
  queries is never acceptable, regardless of context.
- **No unbounded write or delete operations.** Every `DELETE` or `UPDATE` statement must
  include a specific, explicit `WHERE` clause. AI must not generate any write operation
  that could affect an unintended range of rows.
- **No path traversal vulnerabilities.** File path construction must never use raw
  user input. All file operations must validate and sanitise paths — resolve to an
  absolute path and confirm it stays within the intended directory before use.
- **No XML External Entity (XXE) vulnerabilities.** XML parsers must be configured
  to disable external entity resolution and DTD processing. AI must not generate XML
  parsing code that uses default/permissive parser settings.
- **No Server-Side Template Injection (SSTI).** User input must never be passed
  directly into a template rendering call. Templates must use variable interpolation
  through the engine's safe context binding — never string concatenation or `eval`.
- **No LDAP or command injection.** LDAP queries and shell commands must never
  incorporate unsanitised user input. Use parameterised LDAP libraries and avoid
  shell execution (`exec`, `system`, `subprocess` with `shell=True`) wherever possible.

---

## 2. Secrets & Credentials

- **No hardcoded secrets.** API keys, passwords, tokens, connection strings, and
  certificates must never appear in source code, prompts, or commit history. Use
  environment variables or an approved secrets manager exclusively.
- **No sensitive data in prompts.** Never include PII, credentials, trade secrets,
  or unreleased proprietary logic in prompts sent to any AI model — particularly
  public or unaudited ones.

---

## 3. Cryptography & Authentication

- **No custom cryptographic implementations.** AI must not generate custom encryption,
  hashing, or key-derivation logic. Use approved, well-vetted libraries only
  (e.g., `bcrypt`, `argon2`, `libsodium`).
- **No weak algorithm configurations.** MD5, SHA-1, and ECB-mode encryption are
  prohibited for any security-sensitive purpose. If an AI suggests one of these,
  it must self-correct and flag the issue before the response is complete.
- **No insecure token storage.** JWTs and session tokens must not be stored in
  `localStorage` or `sessionStorage` — use `httpOnly`, `Secure`, `SameSite=Strict`
  cookies. AI must not generate client-side token storage in browser-accessible
  storage without flagging the risk.
- **No weak JWT configurations.** JWTs must use a strong signing algorithm (`RS256`
  or `ES256` preferred; `HS256` only with a secret of sufficient entropy). The `alg: none`
  attack vector must be explicitly rejected — never trust the algorithm field from
  an incoming token.
- **No missing token expiry or invalidation.** Auth tokens must have a defined
  expiry. AI must not generate authentication flows that lack logout-side token
  invalidation or refresh token rotation.

---

## 4. Database & Schema Safety

- **No destructive schema operations without approval.** AI must not generate or
  execute `DROP`, `TRUNCATE`, `ALTER`, or bulk `DELETE`/`UPDATE` statements in any
  environment without a manual migration audit and explicit human approval.
- **No `SELECT *` in production code.** AI-generated queries must explicitly name
  required columns. Wildcard selects are prohibited due to performance and data
  exposure risk.
- **No ORM bypasses without justification.** If the project uses an ORM (Prisma,
  Sequelize, SQLAlchemy, etc.), raw SQL must not be suggested unless standard ORM
  methods are demonstrably insufficient. Any exception must include a comment in
  the code documenting the justification.

---

## 5. Access Control & Authorisation

- **No missing authorisation checks.** Every route, endpoint, or function that
  accesses protected resources must explicitly verify the caller's identity and
  permissions before proceeding. AI must not generate handlers that assume
  authentication implies authorisation.
- **No mass assignment vulnerabilities.** Model or object creation must never
  bind request input directly without an explicit allowlist of permitted fields
  (e.g. no `User.create(req.body)`, no `model.fill(request.all())`). AI must
  always generate field-level allowlists.
- **No insecure direct object references (IDOR).** When fetching or modifying
  a resource by ID, AI must generate ownership or permission checks — never
  assume that possession of an ID grants access to the associated record.
- **No privilege escalation paths.** AI must not generate code where a lower-
  privileged user can modify their own role, permissions, or account status
  without a higher-privileged approval step.

---

## 6. Session Management

- **No insecure session configuration.** Session cookies must be set with
  `httpOnly`, `Secure`, and `SameSite=Strict` (or `Lax` where `Strict` breaks
  legitimate flows). AI must not generate session setup code that omits these flags.
- **No session fixation vulnerabilities.** A new session ID must be issued on
  every successful login. AI must not generate authentication flows that reuse
  the pre-login session identifier.
- **No missing session expiry.** Sessions must have both an idle timeout and an
  absolute maximum lifetime. AI must not generate session configuration without
  explicit expiry values.
- **No missing CSRF protection.** State-changing requests (POST, PUT, PATCH,
  DELETE) on session-authenticated endpoints must include CSRF token validation.
  AI must flag any state-changing endpoint that lacks this.

---

## 7. Insecure Deserialisation

- **No deserialisation of untrusted data without validation.** AI must not generate
  code that deserialises objects from user-supplied input (JSON, XML, binary formats)
  without schema validation against a strict, explicit structure.
- **No use of unsafe deserialisation methods.** Functions with known arbitrary code
  execution risk (e.g. Python's `pickle.loads`, PHP's `unserialize`, Ruby's
  `Marshal.load`) must never be used on untrusted input. AI must flag any use of
  these and propose a safe alternative.

---

## 8. Rate Limiting & Abuse Prevention

- **No unthrottled authentication endpoints.** Login, password reset, OTP
  verification, and account creation endpoints must implement rate limiting and
  lockout or CAPTCHA after repeated failures. AI must not generate these endpoints
  without throttling.
- **No unthrottled sensitive operations.** Any endpoint that triggers an expensive
  operation, sends a communication, or exposes enumerable data must include rate
  limiting. AI must flag the absence of this and suggest an appropriate mechanism.

---

## 9. Subresource Integrity & Supply Chain

- **No external scripts or stylesheets without integrity checks.** Any `<script>`
  or `<link>` tag loading from a CDN or third-party origin must include a valid
  `integrity` attribute (`SRI hash`) and `crossorigin="anonymous"`. AI must not
  generate markup that loads external assets without these attributes.

---

## 10. Audit Logging

- **Sensitive operations must produce audit trails.** Authentication events (login,
  logout, failed attempts), privilege changes, data exports, and admin actions must
  be logged with sufficient context (who, what, when, from where). AI must generate
  this logging as part of the feature — it is not optional to add later.

---

## 11. Network Access & Agentic Behaviour

- **No unsupervised agentic actions.** AI must not trigger outbound API calls,
  webhooks, file system writes, commits, or deployments to staging or production
  without explicit human review and approval at each step. All irreversible actions
  must be isolated behind a human-in-the-loop gate before execution in any
  non-sandboxed environment.
- **No permissive CORS configuration.** AI must not generate `Access-Control-Allow-Origin: *`
  or equivalent wildcard CORS policies in production code. Allowed origins must be
  explicitly enumerated. If a wildcard is requested for local development, it must be
  clearly commented as dev-only and must not appear in any environment config file
  that could reach production.
- **No missing security headers.** Responses from web-facing endpoints must include
  appropriate security headers (`Content-Security-Policy`, `X-Content-Type-Options`,
  `X-Frame-Options`, `Strict-Transport-Security`). AI must not generate endpoint
  handlers that omit these without flagging it.

---

## 12. Error Handling & Logging

- **No verbose errors exposed to the client.** AI must not generate code that returns
  stack traces, internal file paths, database error messages, or framework internals
  in HTTP responses. Error responses must be generic to the client; full details go
  to server-side logs only.
- **No sensitive data in logs.** Logging statements must never include passwords,
  tokens, full credit card numbers, national ID numbers, or other PII. If a logging
  call would capture a request or object that contains sensitive fields, those fields
  must be explicitly masked or omitted.

---

## 13. Third-Party Dependencies

- **No unverified packages.** Every library or package suggested by AI must be
  verified against its official registry (npm, PyPI, Maven, etc.) before use.
  AI models can hallucinate package names — treat all suggestions as unverified
  until confirmed.
- **No packages with known CVEs.** Before merging any AI-suggested dependency,
  check it against a vulnerability database (e.g., Snyk, OWASP Dependency-Check,
  `npm audit`).

---

## 14. Code Review Obligations

All AI-generated code must pass human review before merge. Reviewers are responsible
for confirming that none of the above redlines have been breached — "the AI wrote it"
is not a defence.

When a reviewer identifies a redline breach:
1. Reject the PR immediately — do not merge with a fix applied on top.
2. Flag it to the team lead or security owner within 24 hours.
3. If the breach reached any non-local environment, treat it as a security incident
   and follow the incident response process.

---

*Last reviewed: April 2025 — review annually or following any significant security incident.*
