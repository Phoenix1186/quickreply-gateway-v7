# QuickReply Gateway v8

Fixes Railway startup crash:
- Uses Node `createRequire()` for Baileys, because `import default from "@whiskeysockets/baileys"` returns only the socket function in Node ESM and does not expose `BufferJSON` / `initAuthCreds`.
- Pins `@whiskeysockets/baileys` to `6.7.9` so deploys do not silently change import behavior.
- Keeps Postgres-backed auth storage, QR pairing, phone-number pairing code, inbound webhook, and outbound test send.

## Env
DATABASE_URL=postgres://...
GATEWAY_API_KEY=...
WEBHOOK_URL=https://smart-biz-responder.lovable.app/api/wa/incoming
WEBHOOK_SECRET=...
PORT=3000

## Run
npm install
npm start
