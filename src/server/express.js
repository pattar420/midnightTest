const express = require('express')
const path = require('path')
const React = require("react")
const test = require('./squishbug')
const app = express()
const DIST_DIR = path.join(__dirname, '../../dist');
const port = process.env.PORT || 3000;



const mockResponse = {
    foo: 'bar',
    bar: 'foo'
};

app.use(express.static(DIST_DIR))

app.get('*', (req, res) => {
    console.log('request url: ', req.url)
    let context = {}
    const body = reactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <MainRouter />
        </StaticRouter>
    )

    if (context.url) {
        return res.redirect(303, context.url)
    }

    res.status(200).send(Template(body))
})




app.get('/api', (req, res) => {
    res.send(mockResponse)
})

app.listen(port, function(){
    console.log('App listening on port: ', port)
})


module.exports = {default: app}