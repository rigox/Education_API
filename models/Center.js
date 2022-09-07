const mongoose = require('mongoose');


const centerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name']
  },
  Location:{
    type: String,
    required: [true , 'please add location']
  },
  Programm:{
     type: String,
     required: [true, ' Select Either Headsart or  Delegate']

  },
ClassRooms:[],
staff:[]
 
});

module.exports = mongoose.model('User', UserSchema);