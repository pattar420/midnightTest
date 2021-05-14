import express from 'express'
import path from 'path'
import React from "react"
import ReactDOMServer from 'react-dom/server'
import template from '../../template.js'
import ReactRouter from 'react-router-dom'
import Body from '../client/components/Body'
import {StaticRouter} from 'react-router-dom'
import compress from 'compression'
import helmet from 'helmet'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import { ServerStyleSheets } from '@material-ui/styles'
import './../client/styles/App.css'



const app = express()
const port = 3000;
const CURRENT_WORKING_DIR = process.cwd()



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))
app.use(express.static(path.join(CURRENT_WORKING_DIR, 'public')))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())


const mockResponse = {
    foo: 'bar',
    bar: 'foo'
};


app.get('/api', (req, res) => {
    res.send(mockResponse)
})

app.get('*', (req, res) => {
    const sheets = new ServerStyleSheets()
    console.log('request url: ', req.url)
    let context = {}
    const body = ReactDOMServer.renderToString(
        sheets.collect(
        <StaticRouter location={req.url} context={context}>
            <Body />
        </StaticRouter>
        )
    )



    if (context.url) {
        return res.redirect(303, context.url)
    }
    const css = sheets.toString()
    console.log('css: ', css)
    console.log(template(body, css ))
    res.status(200).send(template(body, css))
    console.log('test 1')
})



app.get('/', (req, res) => {
    console.log('test 2')
    res.status(200).send(template())
})



app.listen(port, (err) => {
    if (err){
        console.log('an error occured ', err)
    }
    console.log('App listening on port: ', port)
})


export default app
