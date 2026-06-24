import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";

const host = process.env.HOST || "127.0.0.1";
const port = Number(process.env.PORT || 8080);
const root = resolve(process.env.SITE_DIR || "site");

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".gz": "application/gzip",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".xml": "application/xml; charset=utf-8",
};

function resolvePath(urlPath) {
  const decodedPath = decodeURIComponent(urlPath.split("?")[0]);
  const normalizedPath = normalize(decodedPath).replace(/^(\.\.[/\\])+/, "");
  const requestedPath = resolve(join(root, normalizedPath));

  if (!requestedPath.startsWith(root)) {
    return null;
  }

  if (existsSync(requestedPath) && statSync(requestedPath).isDirectory()) {
    return join(requestedPath, "index.html");
  }

  return requestedPath;
}

createServer((request, response) => {
  const filePath = resolvePath(request.url || "/");
  const fallbackPath = join(root, "404.html");

  if (!filePath) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  const resolvedPath = existsSync(filePath) ? filePath : fallbackPath;
  const statusCode = resolvedPath === filePath ? 200 : 404;
  const contentType = contentTypes[extname(resolvedPath)] || "application/octet-stream";

  response.writeHead(statusCode, { "Content-Type": contentType });
  createReadStream(resolvedPath).pipe(response);
}).listen(port, host, () => {
  console.log(`Serving ${root} at http://${host}:${port}/`);
});
