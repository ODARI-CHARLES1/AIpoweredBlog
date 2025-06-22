import express from 'express'

const testRoute=express.Router()

testRoute.get('/test',(Req,res)=>{
    res.json("testing...")
})

export default testRoute;