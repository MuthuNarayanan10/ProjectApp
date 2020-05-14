const express = require('express');
const router = express.Router();
const itemController = require("../controllers/itemController");
const appConfig = require("../../config/appConfig")
const auth = require('../middlewares/auth')


module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/items`;

    // params: listId,itemName,itemCreatorId,itemCreatorName,itemModifierId,itemModifierName,


 
    app.post(`${baseUrl}/additem`, auth.isAuthorized, itemController.addItemFunction);
   


    app.put(`${baseUrl}/:itemId/updateitem`, auth.isAuthorized, itemController.updateItemFunction);
   
    app.post(`${baseUrl}/:itemId/delete`, auth.isAuthorized, itemController.deleteItemFunction);

   


    app.get(`${baseUrl}/view/all/items/:listId`, auth.isAuthorized, itemController.getAllItemsFunction);
   


    // params: itemId.
    app.get(`${baseUrl}/:itemId/details`, auth.isAuthorized, itemController.getItemDetailsFunction);
   

    /* params: ItemId
        body : subItemName,subItemModifierId,subItemModifierName,subItemCreatorId,subItemCreatorName
    */

   app.put(`${baseUrl}/:itemId/addSubItem`, auth.isAuthorized, itemController.addSubItemFunction);
  
   
  app.put(`${baseUrl}/:itemId/updateSubItem`, auth.isAuthorized, itemController.updateSubItemFunction);
 

app.post(`${baseUrl}/subItems/:itemId/details`, auth.isAuthorized, itemController.getSubItemDetailsFunction);


}




/** Run this command : apidoc -i app/routes/ -o apidoc/ */
