//Controllers


const Player = require("./models");

module.exports = {
    all : (req,res)=>{
        Player.find()
            .then(data=>res.json({info:data, msg:'success'}))
            .catch(err=>res.json({info:err, msg:'failure'}))
    },
    add : (req,res)=>{
        Player.create(req.body)
            .then(data=>res.json({info:data, msg:'success'}))
            .catch(err=>res.json({info:err, msg:'failure'}))
    },
    // about : (req,res)=>{
    //     Player.find({_id:req.params.id})
    //         .then(data=>res.json({info:data, msg:'success'}))
    //         .catch(err=>res.json({info:err, msg:'failure'}))
    // },
    update : (req,res)=>{
        Player.updateOne({_id:req.params.id}, {$set:req.body})
            .then(data=>res.json({info:data, msg:'success'}))
            .catch(err=>res.json({info:err, msg:'failure'}))
    },
    delete : (req,res)=>{
        Player.remove({_id:req.params.id})
            .then(data=>res.json({info:data, msg:'success'}))
            .catch(err=>res.json({info:err, msg:'failure'}))
    },
    // add_quote: (req,res)=>{
    //     Player.updateOne({_id:req.params.id},{$push:{quote:req.body}}, {runValidators:true})
    //     .then(data=>res.json({info:data, msg:'success'}))
    //     .catch(err=>res.json({info:err, msg:'failure'}))    
    // },

    
}
