const reactDOMServer = require('react-dom/server')
const StaticRouter = require("react-router-dom").StaticRouter
const MainRouter = require('./../client/components/mainRouter')
const Template = require('./../../template.js')

const test = () => {
    console.log('request url: ', req.url)
    let context = {}
    const body = reactDOMServer.renderToString(
        <StaticRouter location={req.originalUrl} context={context}>
            <MainRouter />
        </StaticRouter>
    )

    if (context.url) {
        return res.redirect(303, context.url)
    }

    res.status(200).send(Template(body))
}

export default test