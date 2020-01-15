
  const fs=require('fs')
  module.exports=function(list,ext,callback){
    fs.readdir(list,(err,data)=>{if(err){callback(err)}
    else{callback(null,data.filter(e=>e.endsWith(`.${ext}`)))

  }
})
  }