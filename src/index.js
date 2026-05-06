const express = required('express');

const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: "ok" });
});

app.get('/hello/:name', (req, res) => {
  res.json ({ message: `Salut ${req.params.name}` });
});

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`serv run port ${PORT}`);
  });
}

module.exports = app;
