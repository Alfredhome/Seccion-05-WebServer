const http = require('http')

http.createServer((req, res) => {

    console.log(req);
    res.setHeader('Content-Disposition', 'attachment; filename=list.csv')
    res.writeHead(200, { 'Content-Type': 'aplication/csv' })

    res.write('Id, Nombre\n')
    res.write('1, Francisco\n')
    res.write('2, Alfredo\n')
    res.write('3, Coj\n')
    res.write('4, Sulugui\n')
    res.end();
})
    .listen(8080)

console.log('Escuchando el puerto', 8080);
