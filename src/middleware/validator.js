'use strict';
module.exports=(req,res,next)=>{
    let id = parseInt(req.params.id);
    console.log("ID is:"+id);
      if (id!=undefined){
           next();
      } else  {
          next("Please input an id:  ");
      }
}