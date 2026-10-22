import http from "node:http";

const port = Number(process.env.PORT ?? 8080);
const version = process.env.APP_VERSION ?? "dev";

const server = http.createServer((req, res) => {
  if (req.url === "/healthz") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("ok\n");
    return;
  }
  res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  res.end(`<p><strong>hi there.</strong><br />version: ${version}</p>\n`);
});

server.listen(port, () => console.log(`listening on :${port} (version ${version})`));

for (const sig of ["SIGTERM", "SIGINT"]) {
  process.on(sig, () => server.close(() => process.exit(0)));
}
