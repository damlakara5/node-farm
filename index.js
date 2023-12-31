const fs = require("fs")

//BLOCKING, SYNC WAY
//if we don't specify the utf-8 (second argument) we get buffer but we want text
const textInput = fs.readFileSync('./txt/input.txt','utf-8')

console.log(textInput)

const textOut = `This is what we know : ${textInput}.\nCreated on ${Date.now()}`

fs.writeFileSync("./txt/output.txt", textOut)

console.log("File has been written")


//NON-BLOCKING, ASYNC WAY

fs.readFile("./txt/start.txt",'utf-8', (err, data1) => {
    fs.readFile(`./txt/${data1}.txt`,'utf-8', (err, data2) => {
        console.log(data2)
        fs.readFile(`./txt/append.txt`,'utf-8', (err, data3) => {
            console.log(data3)

            fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, 'utf-8', (err) => {
                console.log("file has ben written")
            })
        })
    })
})