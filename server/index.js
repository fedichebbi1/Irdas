const express = require("express");
require('dotenv').config()
const App = express();
const cors = require('cors');
App.use(cors());
App.use(express.json())
const userRoute=require("./routes/user.router.js")
const postsRoute=require("./routes/post.router.js")
App.use('/api/user',userRoute)
App.use('/api/posts',postsRoute)

App.listen(process.env.PORT, () => {
  console.log(`app listening on http://localhost:${process.env.PORT}`);
});