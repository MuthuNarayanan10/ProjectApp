const express = require('express');
const router = express.Router();
const historyController = require("../controllers/historyController");
const appConfig = require("../../config/appConfig")
const auth = require('../middlewares/auth')


module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/history`;

    // params: key(String), value(Object)
    
    app.post(`${baseUrl}/addHistory`, auth.isAuthorized, historyController.addHistoryFunction);
   



    app.post(`${baseUrl}/deleteHistory`, auth.isAuthorized, historyController.deleteHistoryFunction);

    
    app.post(`${baseUrl}/getHistory`, auth.isAuthorized, historyController.getHistoryFunction);



}


/** Run this command : apidoc -i app/routes/ -o apidoc/ */
