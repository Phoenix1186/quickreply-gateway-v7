import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const baileys = require("@whiskeysockets/baileys");
const required = ["BufferJSON", "initAuthCreds", "proto", "fetchLatestBaileysVersion", "DisconnectReason"];
for (const key of required) {
  if (!baileys[key]) throw new Error(`Missing Baileys export: ${key}`);
}
if (!baileys.default && !baileys.makeWASocket) throw new Error("Missing makeWASocket export");
console.log(JSON.stringify({ ok: true, checked: required }));
