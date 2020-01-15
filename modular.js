const mymodule = require('./my-module.js')

const file=process.argv[2]
mymodule(file,process.argv[3],function(err,data){
    if(err){console.log('can not read file')} else {console.log(data.map(el=>console.log(el.toString())).map(el=>console.log(el.toString())))
    }
})