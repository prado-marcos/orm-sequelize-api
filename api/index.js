const express = require("express");
const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => res.status(200).send({ message: "Hello World" }));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
