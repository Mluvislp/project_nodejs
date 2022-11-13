import express from 'express';
import  {NewsController}  from '../resources/app/controllers/NewsController.js';

var router = express.Router() ;

var newsController = new NewsController;

router.use('/',newsController.index)

export {router}