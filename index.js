const {parse} = require("csv-parse")
const fs = require("fs")

const results= []   

fs.createReadStream("kepler_data_planetary.csv").pipe(parse({
        column: true,
        comment: "#"
    }))
    .on("data", (data)=>
        results.push(data)
    )
    .on("error",  (err)=>
    console.log(err)
    )
    .on("end", ()=>{
        console.log(results)
        console.log("Done")
    })