import { Router,Request,Response,NextFunction } from "express"
import v1Router from "./v1"


const rootRouter=Router()

rootRouter.get('/',async function(req:Request,res:Response,next:NextFunction){

    res.json({
        message:"Hello ExpressJs"
    })
})

export default rootRouter