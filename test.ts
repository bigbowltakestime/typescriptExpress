import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
const formTag = `
<form method="POST" action="/hello">
  <input type="text" name="id">
  <input type="submit">
</form>
`;
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
const app = express();
const port = 3333;
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req: Request, res: Response) => {
  res.send(htmlBox(formTag));
});
app.post('/hello', (req: Request, res: Response) => {
  const submitString = req.body.id;
  console.log(submitString)
  res.send(htmlBox(hi(submitString)));
});
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});