const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.use(express.json());
app.use(express.static("public"));

/* ================= JWT ================= */
app.get("/api/jwt", async (req, res) => {
  const { uid, password } = req.query;
  const api = `https://jwt-gen-api-v2.onrender.com/token?uid=${uid}&password=${password}`;
  const r = await fetch(api);
  res.json(await r.json());
});

/* ================= PLAYER INFO ================= */
app.get("/api/info", async (req, res) => {
  const { uid, region } = req.query;
  const api = `https://free-fire-api--tsandesh756.replit.app/get_player_personal_show?server=${region}&uid=${uid}`;
  const r = await fetch(api);
  res.json(await r.json());
});

/* ================= STATS ================= */
app.get("/api/stats", async (req, res) => {
  const { uid, match, game } = req.query;
  const api = `https://free-fire-api--tsandesh756.replit.app/get_player_stats?server=bd&uid=${uid}&matchmode=${match}&gamemode=${game}`;
  const r = await fetch(api);
  res.json(await r.json());
});

/* ================= LIKE ================= */
app.get("/api/like", async (req, res) => {
  const { uid, region } = req.query;
  const api = `https://b8dedc14-540e-4739-9ed4-d87ec537d563-00-174p1hjh20yqn.sisko.replit.dev/like?uid=${uid}&server_name=${region}`;
  const r = await fetch(api);
  res.json(await r.json());
});

/* ================= VISITS ================= */
app.get("/api/visit", async (req, res) => {
  const { uid, region, type } = req.query;
  const api =
    type === "1k"
      ? `https://visit-api-by-ajay-for-all-server.vercel.app/${region}/${uid}`
      : `https://b8dedc14-540e-4739-9ed4-d87ec537d563-00-174p1hjh20yqn.sisko.replit.dev/${region}/${uid}`;
  const r = await fetch(api);
  res.json({ status: "sent", response: await r.text() });
});

app.listen(3000, () => console.log("🔥 Website running on port 3000"));