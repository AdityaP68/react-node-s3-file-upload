const express = require("express");
const cors = require("cors");
const multer = require("multer");
const uploadToS3 = require('./s3')

const app = express();
const PORT = 8000 || process.env.PORT;

app.use(express.json());
app.use(cors());
//app.use(express.urlextended({}))

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.get("/", async (req, res, next) => {
  res.send("<h1>home</h1>");
});

app.post("/image/upload", upload.single("image"), async (req, res, next) => {
  const { file } = req;
  const userid = req.headers["x-user-id"];

  if (!file || !userid) {
    return res.status(400).json({ message: "bad request" });
  }
  //console.log(file)
  const { error, key } = uploadToS3(file, userid);
if (error) return res.status(500).json({ message: error.message });

return res.status(201).json({key});
});

app.listen(PORT, () => {
  console.log(`The server is running on port no ${PORT}`);
});
