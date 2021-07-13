const CURD = require('.././Models/CURDmodel')


exports.getAllInfo = async (req,res) => {
    try {
        const data = await CURD.find()
        res.status(200).json({
            status:"success",
            data
        })
    } catch (error) {
        res.status(400).json({
            status:"fail"
    })
    }
}


exports.getSingleInfo = async (req,res) => {
    try {
        const id = req.params.id
        const data = await CURD.findById(id)
        res.status(200).json({
            status:"success",
            data
        })
    } catch (error) {
        res.status(400).json({
            status:"fail"
    })
    }
}

exports.AddInfo = async (req,res) => {
    try {
        const data = await CURD.create(req.body);
        res.status(200).json({
            status:"success",
            data
        })
    } catch (error) {
        res.status(400).json({
            status:"fail"
        })
    }
   
}


exports.changeInfo = async (req,res) => {
    try {
        const id = req.params.id
        console.log(req.body)
        const data = await CURD.findByIdAndUpdate(id,req.body,
            {
                new:true
            })
            console.log("hello")
        res.status(200).json({
            status:"success",
            data
        })
    } catch (error) {
        res.status(400).json({
            status:"fail"
        })
    }
}

exports.deleteInfo = async (req,res) => {
    try {
        const id = req.params.id
        const data = await CURD.findOneAndDelete(id)
        res.status(200).json({
            status:"success"
        })
    } catch (error) {
        res.status(400).json({
            status:"fail"
        })
    }
}
