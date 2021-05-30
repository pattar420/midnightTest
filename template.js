
export default (body, css) => {
    return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            
            <title>Midnight test</title>
            <link href="/dist/main.css" rel="stylesheet">
        </head>
        <body>
            <div id='root'>${body}</div>
            <div id='toRemove'> </div>
            <script defer src="/dist/server.generated.js"></script>
        </body>
        
        </html>`
}

 
