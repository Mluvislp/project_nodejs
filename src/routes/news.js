import express from 'express';
import  {NewsController}  from '../resources/app/controllers/NewsController.js';

    var router = express.Router() ;

    var news = new NewsController;

    router.get('/',news.index)

export {router}