const fs=require('fs')
const file=process.argv[2]
fs.readdir(file,(err,data)=>{
    if(err){console.log('can not read the file')}
    else{data.filter(e=>e.endsWith(`.${process.argv[3]}`)).map(el=>console.log(el.toString()))}
})