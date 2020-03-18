const Driver = require('../models/Driver.model')
const Bus = require('../models/Bus.model')

var driverController = {
    test: (req,res)=>{
        res.send({message:"Hoal"})
    },
    login: (req,res)=>{
        let params = req.body;
        email = params.email;
        if(email==null) return res.status(404).send({message: "Driver no found"})

        Driver.findOne({email:email},(err,docs)=>{
            if(err){
                return res.status(500).send({message:err})
            }
            return res.status(200).send(docs)

        })
        
        
    },
    createDriver: (req,res)=>{
        let {name,email}=req.body
        let newDriver = new Driver()
        newDriver.name = name;
        newDriver.email= email;
        newDriver.save((err,driverSaved)=>{
            if(err){
                return res.status(500).send({
                    message: "Save error"
                })
            }
            if(!driverSaved) return res.status(404).send({message:'could not save'})
            return res.status(200).send({message:driverSaved})
        })

    },
    getState:(req,res)=>{
        let params = req.body;
        email = params.email;
        if(email==null) return res.status(404).send({message: "Driver no found"})

        Driver.findOne({email:email},'working',(err,state)=>{
            if(err){
                return res.status(500).send({message:err})
            }
            if(!state) return res.status(404).send({message:'could not find'})
                        return res.status(200).send(state)

        })
},
startWorking: (req,res)=>{
    let params = req.body;
    email = params.email;
    if(email==null) return res.status(404).send({message: "Driver no found"})
    Driver.findAndModify({email:email}, {},{ $inc: { working: true }}, {new:true}, (err,doc)=>{
        if(err){
            return res.status(500).send({message:err})
        }
        if(!doc){
            return res.status(404).send({message: 'Driver no found'})
        }
        return res.status(200).send({message:doc})
    })
   },


}
module.exports = driverController;