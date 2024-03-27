var imodel = require('../model/imagemodel')

// exports.insert= async (req,res) => {

//     var img = req.files.length;
//     var image = "";
//     for (let index = 0; index < img; index++) {
        
//         // image = image+","+req.files[index].originalname;
//         image = image + req.files[index].originalname+",";
//     }
//     req.body.image = image;
//     var data = await imodel.create(req.body)
//     res.status(200).json({
//         data
//     })
// }

exports.insert= async (req,res) => {   
 
    var data = await imodel.create(req.body)
    res.status(200).json({
        data
    })
}
exports.getdata= async (req,res) => { 

    var data = await imodel.find()
    res.status(200).json({
        data
    })
}


