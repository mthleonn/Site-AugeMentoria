const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
    
    const extname = path.extname(filePath).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.wasm': 'application/wasm'
    };
    
    const contentType = mimeTypes[extname] || 'application/octet-stream';
    
    fs.readFile(filePath, (error, content) => {
        if (error) {
            if(error.code == 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 Not Found</h1>', 'utf-8');
            } else {
                res.writeHead(500);
                res.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

const PORT = 8000;
const HOST = '0.0.0.0'; // Permite acesso de qualquer IP na rede

server.listen(PORT, HOST, () => {
    const os = require('os');
    const networkInterfaces = os.networkInterfaces();
    
    console.log(`\n🚀 Servidor AUGE iniciado com sucesso!`);
    console.log(`\n📍 Acesso Local:`);
    console.log(`   http://localhost:${PORT}/`);
    console.log(`\n🌐 Acesso em Rede:`);
    
    Object.keys(networkInterfaces).forEach(interfaceName => {
        networkInterfaces[interfaceName].forEach(networkInterface => {
            if (networkInterface.family === 'IPv4' && !networkInterface.internal) {
                console.log(`   http://${networkInterface.address}:${PORT}/`);
            }
        });
    });
    
    console.log(`\n💡 Seu amigo pode acessar usando qualquer um dos IPs de rede listados acima!`);
    console.log(`\n⚠️  Certifique-se de que o firewall permite conexões na porta ${PORT}`);
});