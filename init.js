import app from "./app";

const PORT = 4000;

const handleListening = () => {
  console.log(`Listening on ${PORT}`);
};

app.listen("4000", handleListening);
