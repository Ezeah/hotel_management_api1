const { model, Schema } = require("mongoose");
const constants = require("./constants");
const Room = require("./roomModel");
const { USER_TYPES, DATABASES } = constants;

const RoomTypesSchema = new Schema( 
  {
    name:{
      "type": String,
      "required": true
  },
    description: {
      "type": String,
      "required": false
    },
  }  
  );
  
  const RoomTypes = model(DATABASES.ROOM_TYPES, RoomTypesSchema);
  
  module.exports = RoomTypes;

