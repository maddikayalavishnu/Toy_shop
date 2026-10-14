/**
 * ToyLand - Lightweight Native Node.js Server & API
 * Zero third-party npm dependencies needed! Uses standard Node.js library.
 */

const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const DATA_DIR = path.join(__dirname, "data");
const ORDERS_FILE = path.join(DATA_DIR, "orders.json");

// Ensure data folder and orders.json exist
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
if (!fs.existsSync(ORDERS_FILE)) {
  fs.writeFileSync(ORDERS_FILE, JSON.stringify([], null, 2), "utf8");
}

// MIME types for static asset serving
const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp"
};

// Helper to read orders
function readOrders() {
  try {
    const data = fs.readFileSync(ORDERS_FILE, "utf8");
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

// Helper to save orders
function saveOrders(orders) {
  try {
    fs.writeFileSync(ORDERS_FILE, JSON.stringify(orders, null, 2), "utf8");
    return true;
  } catch (err) {
    console.error("Failed to write orders:", err);
    return false;
  }
}

// Load products for API
let TOY_PRODUCTS = [];
try {
  const prodModule = require("./js/products.js");
  TOY_PRODUCTS = prodModule.TOY_PRODUCTS || [];
} catch (e) {
  console.log("Products module loaded dynamically in browser.");
}

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const pathname = parsedUrl.pathname;

  // CORS Headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  // API Endpoints
  if (pathname === "/api/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "ok", timestamp: new Date().toISOString() }));
    return;
  }

  if (pathname === "/api/products" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(TOY_PRODUCTS));
    return;
  }

  if (pathname === "/api/orders" && req.method === "GET") {
    const orders = readOrders();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(orders));
    return;
  }

  if (pathname.startsWith("/api/orders/") && req.method === "GET") {
    const orderId = pathname.replace("/api/orders/", "").trim().toUpperCase();
    const orders = readOrders();
    const order = orders.find(o => o.orderId.toUpperCase() === orderId);

    if (order) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(order));
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Order not found" }));
    }
    return;
  }

  if (pathname === "/api/orders" && req.method === "POST") {
    let body = "";
    req.on("data", chunk => {
      body += chunk.toString();
    });
    req.on("end", () => {
      try {
        const orderData = JSON.parse(body);
        const orders = readOrders();
        orders.unshift(orderData);
        saveOrders(orders);

        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ success: true, orderId: orderData.orderId }));
      } catch (err) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid JSON order payload" }));
      }
    });
    return;
  }

  // Static File Serving
  let filePath = path.join(__dirname, pathname === "/" ? "index.html" : pathname);

  // Security check to avoid directory traversal
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Fallback to index.html for SPA
      filePath = path.join(__dirname, "index.html");
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || "application/octet-stream";

    fs.readFile(filePath, (readErr, content) => {
      if (readErr) {
        res.writeHead(500);
        res.end("Server Error loading file");
      } else {
        res.writeHead(200, { "Content-Type": contentType });
        res.end(content);
      }
    });
  });
});

server.listen(PORT, () => {
  console.log(`\n=================================================`);
  console.log(`🚀 ToyLand Website is running live!`);
  console.log(`🌐 Local URL: http://localhost:${PORT}`);
  console.log(`📦 Orders API: http://localhost:${PORT}/api/orders`);
  console.log(`=================================================\n`);
});
