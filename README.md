# QuickReply Gateway v7

Fixes:
- "Cannot read properties of undefined (reading 'reviver')" — Baileys is CJS, so we now destructure BufferJSON / initAuthCreds from the default export.
- Same fix applied to makeWASocket / DisconnectReason.

## Env
DATABASE_URL=postgres://...
GATEWAY_API_KEY=...
WEBHOOK_URL=https://smart-biz-responder.lovable.app/api/wa/incoming
WEBHOOK_SECRET=...
PORT=3000

## Run
npm install
npm start
