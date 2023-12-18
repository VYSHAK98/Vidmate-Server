const jsonServer=require('json-server')
const cors=require('cors')

const server=jsonServer.create()
// to convert json to js
const middleware=jsonServer.defaults()
const router=jsonServer.router('data.json')

server.use(cors())
server.use(middleware)
server.use(router)

const PORT=4000
server.listen(PORT,()=>{
    console.log(`....Json Server Started At Port ${PORT}....`);
})

