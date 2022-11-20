const express = require("express");

require("dotenv").config({ path: "../.env" });

const PORT = process.env.PORT || 8080;

const app = express();

app.get("/", (req: Request, res: Response) => {
    return res.json({
        status: "ok",
    });
});

app.listen(PORT, () => {
    console.log(`server is now working on : http://localhost:${PORT}`);
});
