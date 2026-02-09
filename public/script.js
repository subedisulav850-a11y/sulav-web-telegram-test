function run() {
  const tool = document.getElementById("tool").value;
  const uid = uid.value;
  const region = region.value;
  const password = password.value;
  const match = match.value;
  const game = game.value;
  const visitType = visitType.value;

  let url = "";

  if (tool === "jwt") url = `/api/jwt?uid=${uid}&password=${password}`;
  if (tool === "info") url = `/api/info?uid=${uid}&region=${region}`;
  if (tool === "stats") url = `/api/stats?uid=${uid}&match=${match}&game=${game}`;
  if (tool === "like") url = `/api/like?uid=${uid}&region=${region}`;
  if (tool === "visit") url = `/api/visit?uid=${uid}&region=${region}&type=${visitType}`;

  fetch(url)
    .then(r => r.json())
    .then(d => {
      document.getElementById("result").textContent =
        JSON.stringify(d, null, 2);
      download(d);
    });
}

function download(data) {
  const blob = new Blob([JSON.stringify(data, null, 2)]);
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "result.json";
  a.click();
}