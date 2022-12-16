import {router as newRouter} from './news.js'
import {router as siteRouter} from './site.js'
import { router as courseRouter } from './courses.js'
    const route = (app) => {
        app.use('/course',courseRouter)
        app.use('/',siteRouter)
    }
export {route}