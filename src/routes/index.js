import {router as newRouter} from './news.js'
import {router as siteRouter} from './site.js'
    const route = (app) => {
        app.use('/news',newRouter)
        app.use('/',siteRouter)
    }
export {route}