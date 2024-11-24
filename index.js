import express from "express"
import path from "path"
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express();
const PORT = 3000

// serving static files
app.use(express.static('views'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html')).status(200)
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})