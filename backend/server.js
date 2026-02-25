const express = require("express");
const cors = require("cors");

const wordRoutes = require("./src/routes/wordRoutes");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/api", wordRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
