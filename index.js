const Client =require('pg').Client

const client = new Client({
    user:"postgres",
    password:"Monpost1",
    port:5432,
    database:"postgres"

})

client.connect()
.then(()=>console.log("successful connection!"))
.catch(e=>console.log(e))