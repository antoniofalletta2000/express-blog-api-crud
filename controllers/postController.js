const posts = [
  {
    id: 1,
    title: 'Primo post',
    content: 'Contenuto del primo post del mio blog.',
    image: 'http://localhost:3000/images/1.svg',
    tags: ['intro', 'welcome']
  },
  {
    id: 2,
    title: 'Secondo post',
    content: 'Contenuto del secondo post con qualche dettaglio.',
    image: 'http://localhost:3000/images/2.svg',
    tags: ['node', 'express']
  },
  {
    id: 3,
    title: 'Terzo post',
    content: 'Un breve post di esempio per la bacheca.',
    image: 'http://localhost:3000/images/3.svg',
    tags: ['example', 'blog']
  },
  {
    id: 4,
    title: 'Quarto post',
    content: 'Altro contenuto dimostrativo.',
    image: 'http://localhost:3000/images/4.svg',
    tags: ['tutorial', 'express']
  },
  {
    id: 5,
    title: 'Quinto post',
    content: 'Ultimo post della lista di esempio.',
    image: 'http://localhost:3000/images/5.svg',
    tags: ['wrapup', 'notes']
  }
];

const index= (req, res) => {
    res.send("array posts")
}

const show=(req,res)=>{
    const post= posts.find(post=>post.id===parseInt(req.params.id))
    if(post){
        res.send("post id")
    }else{
        res.status(404).send("Post not found")
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
        res.send("post deleted right now")
    }else{
        res.status(404).send("Post not found")
    }
}

module.exports={index, show, post, update, modify, destroy}