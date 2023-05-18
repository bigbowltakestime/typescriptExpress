import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


function hi(sumbitString: any) {
  return `<h1>${sumbitString}</h1>`
}
function htmlBox(data: any) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  </head>
  <body>
  ${data}
  </body>
  </html>
  `;
}

app.get('/', (req: Request, res: Response)=>{
  res.sendFile(path.join(__dirname, './index.html'))
})
app.get('/main', (req: Request, res: Response)=>{
  res.sendFile(path.join(__dirname, './main.js'))
})
app.post('/post', (req: Request, res: Response)=>{
  console.log(req.body)
})
app.post('/hello', (req: Request, res: Response) => {
  console.log(req.body)
  // res.send(htmlBox(hi(submitString)));
});
// 서버 포트 설정
app.listen(8080,()=>{
  console.log('서버 실행')
});