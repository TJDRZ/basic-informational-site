// const http = require("http");
const path = require("path");
// const fs = require("fs");
const express = require("express");

const port = process.env.PORT || 8080;
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "contact-me.html"));
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "404.html"));
});

app.listen(port, () => console.log(`Server running on port ${port}`));

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
//       if (err) throw err;
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.end(data);
//     });
//   } else if (req.url === "/about") {
//     fs.readFile(path.join(__dirname, "public", "about.html"), (err, data) => {
//       if (err) throw err;
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.end(data);
//     });
//   } else if (req.url === "/contact-me") {
//     fs.readFile(
//       path.join(__dirname, "public", "contact-me.html"),
//       (err, data) => {
//         if (err) throw err;
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(data);
//       }
//     );
//   } else {
//     fs.readFile(path.join(__dirname, "public", "404.html"), (err, data) => {
//       if (err) throw err;
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.end(data);
//     });
//   }
// });
