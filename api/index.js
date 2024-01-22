import express from "express";
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
  console.log('success');
}).catch((err)=>{
  console.log('error');
})

const app = express();

app.listen(3000, () => {
  console.log('asdads!!1');
});
