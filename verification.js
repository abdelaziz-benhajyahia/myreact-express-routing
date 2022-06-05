const res = require("express/lib/response")

let day = new Date().getDay()
let hours = new Date().getHours()

console.log(hours)

function verification1(req, res, next){
    //day>0 && day <6 && 
    if(hours>8 && hours<14) next()
    else(res.send(`<!DOCTYPE html>
<html lang="en">
    <body>
        <h1>Welcome ... servises are closed, services open 8AM to 5PM from Monday to Friday</h1>
    </body>
</html>`))
}

module.exports = verification1;