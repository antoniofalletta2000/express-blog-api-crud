const posts=require("../data/postsData")

const index= (req, res) => {
    let tagData=posts
    if((req.query.tag).toLowerCase()){
        tagData=posts.filter(item=>{
            return item.tags.includes((req.query.tag).toLowerCase())
        })
    }
    res.json(tagData)
}

const show=(req,res)=>{
    const post= posts.find(post=>post.id===parseInt(req.params.id))
    if(post){
        res.json(post)
    }else{
        res.status(404).json({message:"Post not found"})
    }
}

const post=(req,res)=>{
    res.send(`Create a new post`)
}

const update=(req,res)=>{
    res.send(`Update post with id ${req.params.id}`)
}

const modify=(req,res)=>{
    res.send(`Update post with id ${req.params.id}`)
}

const destroy=(req,res)=>{
    
    const index= posts.findIndex(post=>post.id===parseInt(req.params.id))
    if(index !=-1 ){
        const postDeleted=posts.splice(index,1)
        res.json(postDeleted)
    }else{
        res.status(404).json({message:"Nessun contenuto"})
    }
}

module.exports={index, show, post, update, modify, destroy}