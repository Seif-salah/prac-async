# 🧑‍💻 Node.js Homework — Local API & Frontend Server

## 📚 Overview

This homework consists of building a full local application using Node.js. It is divided into two parts:

1. **Local API Server** — handles JSON data and exposes it via HTTP endpoints.
2. **Frontend Server** — serves rendered HTML pages that consume data from the API server.

---

## 📂 Project Structure
```
/project-root
│
├── /api-server
│ ├── server.js
│ └── products.json
│
├── /frontend-server
│ ├── server.js
│ ├── modules/
│ │ └── replaceTemplate.js
│ ├── templates/
│ │ ├── overview.html
│ │ ├── product.html
│ │ └── card.html
│

```
---

## 🔹 Part 1: API Server (localhost:3000)

### ✅ Requirements:
- Use **only core modules**: `http`, `fs`, `url`.
- Read data from `products.json`.

### 🔗 API Endpoints:
- `GET /api/products` — Returns **all products** as JSON.
- `GET /api/product?id=2` — Returns a **specific product** by ID.

---

## 🔹 Part 2: Frontend Server (localhost:8000)

### ✅ Requirements:
- Use HTML templates (`overview.html`, `product.html`, `card.html`).
- Fetch product data from API server (`localhost:3000`).
- Render HTML pages dynamically.

### 🧭 Routes:
- `/` or `/overview` — Shows all products (overview page).
- `/product?id=2` — Shows a single product's detail page.

---

## ✅ Objective

- Understand Node.js core modules (`http`, `fs`, `url`)
- Practice modular code structure
- Learn how to connect frontend to backend via API
- Handle routing and dynamic HTML rendering

---

## 🚀 Getting Started

1. **Run API Server:**
   ```bash
   node back-end/server.js
2. Run Frontend Server:
   ```bash
	node front-end/server.js
4. Open in Browser:

    API: http://localhost:3000/api/products

    Frontend: http://localhost:8000
