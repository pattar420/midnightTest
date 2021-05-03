
export default (body) => {
    return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel='stylesheet' href='/src/client/styles/App.css'>
            <title>Midnight test</title>
        </head>
        <body>
            <div id='root'>${body}</div>
            <script type="text/javascript" type="module" src="/dist/server.generated.js">
        </body>
        </html>`
}

 
