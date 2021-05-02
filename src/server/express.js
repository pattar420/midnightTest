import express from 'express'
import path from 'path'
import React from "react"
import ReactDOMServer from 'react-dom/server'
import template from '../../template.js'
import ReactRouter from 'react-router-dom'
import Body from '../client/components/Body'
import StaticRouter from 'react-router-dom'
import compress from 'compression'
import helmet from 'helmet'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'


const app = express()
const port = process.env.PORT || 3000;
const CURRENT_WORKING_DIR = process.cwd()


app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))
app.use(helmet())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())

const mockResponse = {
    foo: 'bar',
    bar: 'foo'
};


app.get('/api', (req, res) => {
    res.send(mockResponse)
})

app.get('*', (req, res) => {
    console.log('request url: ', req.url)
    let context = {}
    const body = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <Body />
        </StaticRouter>)

        console.log('body: ', body)

    if (context.url) {
        return res.redirect(303, context.url)
    }

    res.status(200).send(template({body}))
}) 



app.get('/', (req, res) => {
    res.status(200).send(template())
})



app.listen(port, function(){
    console.log('App listening on port: ', port)
})


export default app

