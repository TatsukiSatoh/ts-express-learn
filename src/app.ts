import express, {Request, Response, NextFunction} from "express"

//POSTのBodyをより安全にする
interface MessageRequest extends Request {
    body: {
        "message": string
    }
}

const app = express();

// req.bodyで型推論するために必要
app.use(express.json())

// middleware
app.use((req, res, next) => {
    console.log("hello!!!")
    next()
})

app.get('/', (req, res,next)=>{
    res.send('<h1>Hello</h1>')
})

app.post('/',(req: MessageRequest, res,next)=>{
    res.send(`I got ${req.body.message}`)
})

// error 
app.use((err: Error, req: Request, res:Response, next: NextFunction)=>{
    console.log("error");
    next();
})

app.listen(3000);
