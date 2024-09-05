const db=require("../database/index")
module.exports = {
    getAllPosts:async (req, res) => {
     
      try {
        const posts = await db.Posts.findAll()
        res.send(posts)
      } catch (error) {
        throw error
       
      }
    },
  
    addPost: async (req, res) => {
      
     const {title,description,expiredAt}=req.body
      try {
        
        const posts = await db.Posts.create({title,description,expiredAt})
        res.status(201).send(posts)
      } catch (error) {
        throw error
        
      }},
  
  
      toggleExpire: async (req, res) => {
       const id = req.params.id
        try {
          const getpost =await db.Posts.findByPk(id)
  
          const posts = await db.Posts.update({expiredAt:!getpost.expiredAt},{where:{id}})
          res.send(getpost)
        } catch (error) {
          throw error
          // res.status(500).send(error)
        }},
  
        deletePost: async (req, res) => {
         const id = req.params.id
          try {
            
            const posts = await db.Posts.destroy({where:{id:id}})
            res.send("deleted")
          } catch (error) {
            throw error
            // res.status(500).send(error)
          }},
  
          updatePost: async (req, res) => {

           const id = req.params.id
           const {title,description,expiredAt} = req.body
            try {
              
              const posts = await db.Posts.update({title,description,expiredAt},{where:{id:id}})
              res.send(posts)
            } catch (error) {
              throw error
            }},
  
            getone: async (req, res) => {

              const id = req.params.id
             
               try {
                 
                 const posts = await db.Posts.findOne({where:{id:id}})
                 res.send(posts)
               } catch (error) {
                 throw error
               }},
  
  
  
  
  };