import express from "express"

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
