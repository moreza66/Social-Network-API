// Importing Dependencies 
const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

// Reaction Subdocument in Thought model
const ReactionSchema = new Schema({ 
    reactionId: {
        type: Schema.Types.ObjectId, // Use Mongoos's ObjectId data type
        // default value is set to a new ObjectId
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    }, 
    createdAt: {
        type: Date, 
        // Set default value to the current timestamp
        default: Date.now,
        // Use a getter method to format the timestamp on query
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    },
},
{
    toJSON: {
        getters: true
    }
});

// Thought Schema
const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        maxlength: 280,
        minlength: 1
    },
    createdAt: {
        type: Date, 
        // Set default value to the current timestamp
        default: Date.now,
        // Use a getter method to format the timestamp on query
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [ReactionSchema]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false   
}
); 

//Create a virtual called reactionCount that retrieves the length of the thought's reactions array 
//field on query.
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;