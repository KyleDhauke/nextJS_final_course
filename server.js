import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';

// Get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const PORT = process.env.PORT;
const server = http.createServer(async (request, response) => {
    let filePath;
    console.log(request.url)
    if (request.url === '/') {
        filePath = path.join(__dirname, 'public', 'index.html');
    } else if (request.url === '/about') {
        filePath = path.join(__dirname, 'public', 'about.html');
    } 
    // else {
    //     throw new Error ('Not Found')
    // } 
    const data = await fs.readFile(filePath);
    response.setHeader('Content-Type', 'text/html');
    response.write(data);
    response.end();
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
