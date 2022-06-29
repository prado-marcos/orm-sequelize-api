const express = require("express");
const routes = require("../api/routes");
const app = express();
const port = process.env.PORT || 3000;

routes(app);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
