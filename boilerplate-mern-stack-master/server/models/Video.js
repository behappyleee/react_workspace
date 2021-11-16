const { Schema } = require('mongoose');
const mongoose = require('mongoose');


const videoSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        maxlength: 50
    },
    description: {
        type: String
    },
    privacy: {
        type: Number
    },
    filePath: {
        type: String
    },
    category: {
        tpye:String
    },
    views: {
        type: Number,
        default: 0
    },
    duration: {
        type:String
    },
    thumbnail: {
        type: String
    }

// 만든 date 와 update 한 데이트를 표시하기위함 
}, {timestamp: true})

const Video = mongoose.model('Video', videoSchema);



module.exports = { Video }