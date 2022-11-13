import express from 'express';
import  {SiteController}  from '../resources/app/controllers/SiteController';

var router = express.Router() ;

var siteController = new SiteController;

router.use('/',siteController.showHomePage)

export {router}