import express from "express";
import path from "path";
import open from "open";
import chalk from "chalk";

const port = 3000;
const app = express();

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
    if (err) {
        console.log(chalk.red(err));
    } else {
        open('http://localhost:' + port);
    }
});

console.log(chalk.blue("Server is running..."));