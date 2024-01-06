const model=require('../Model/Schema');
const From = model.From;


exports.createInfo=(req,res)=>{
    const product = new From(req.body);
    
    res.send(product)
    console.log(product);

    product.save()
  
    
  };