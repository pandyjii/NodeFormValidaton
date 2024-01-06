
const mongoose=require('mongoose')
// const { Schema } = mongoose;

const FromSchema = new mongoose.Schema({

     FirstName: {
          type:String,
          required: [true, 'the FirstName  is required']        
  
       },
     LastName: {
          type:String,
          required: [true, 'the LastName  is required']        
  
       },
     Company:{
        type:String,
        required: [true, 'the Company name is required']        

     },
     
     
     String,

     email: {
          type: String,
          validate: {
            validator: function(v) {
              return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
            },
            message: props => `${props.value} is not a valid Email!`
          },
          required: [true, 'the Email id is required']
        }
    



});


exports.From = mongoose.model('From', FromSchema)