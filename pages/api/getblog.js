// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';

export default function handler(req, res) {
  // how-to-learn-javascript
  fs.readFile(`blogdata/${req.query.slug}.json`,'utf-8',(err,data)=>{
    if(err){
      res.status(200).json({error: "internal server error"})
    }
    // console.log(JSON.parse(data));
    let d = JSON.parse(data)
    res.status(200).json(d);
  })
}
