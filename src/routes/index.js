import {router} from './news.js'

const route = (app) => {

    app.use('/news',router)
    
}
export {route}