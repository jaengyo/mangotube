import app from "./app.js";

const PORT = 4040;

const handleListening = () => console.log(`${PORT}에서 잘 작동중`);
app.listen("4040", handleListening);
