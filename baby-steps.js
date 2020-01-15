//console.log(process.argv.slice(2,process.argv.length))
console.log(process.argv.slice(2,process.argv.length).reduce((c,v)=>Number(c)+Number(v)))