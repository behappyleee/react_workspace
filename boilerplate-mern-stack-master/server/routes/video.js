const express = require('express');
const router = express.Router();
// const { Video } = require("../model/Video");
const { auth } = require("../middleware/auth");
const multer = require('multer');
const ffmpeg =require('fluent-ffmpeg');

let storage = multer.diskStorage({
    
    destination: (req, files, cb) => {
        cb(null, '../uploads/');
        console.log('storage ~~~ 1');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
        console.log('storage ~~~ 2');
    },
    fileFilter: (req, file, cb) => {
        const ext = path.exname(file.originalname)
        if(ext !== '.mp4') {
            return cb(res.status(400).end('only mp4 is allowed'), false);
        }
        cb(null, true);
    }
});
const upload = multer({ storage: storage }).single('file');
//=================================
//             Video
//=================================

// post request 는 포스트 get request 는 get 으로 router 사용 하기
// req, res 는 call back 함수임 req 를 통하여 파일을 받음
router.post("/uploadfiles", (req, res) => {
    console.log('/upload video page ~~', req);
    // Client 에서 받은 video 를 server에 저장하기
    upload(req, res, (err) => {
        if(err) {
            console.log('upload files ', req);
            return res.json({ success: false, err })
        } else {
            // res 는 들어간 파일 경로를 client 에게 보내줌
            console.log('success ~N !!!'); 
            return res.json({ 
                success: true, 
                url: res.req.file.path, 
                fileName: req.req.file.fileName 
             })     
        }
    })
});

router.post('/thumbnail', (res, req) => {

    ffmpeg.ffprobe(req.body.url, function(err, metadata) {
        console.log(metadata);
        console.log(metadata.format.duration)
        fileDuration = metadata.format.duration;
    })

    // 썸네일 생성 하고 비디오 (런닝 같은 정보등 ... 가져오기)
    ffmpeg(req.body.url)
        .on('fileName', function(filenames) {
            console.log('Will generate' + filenames.join(','))
            console.log(filenames);

            filePath = 'uploads/thumbnails/' + filenames[0];
        })  
        .on('end', function () {
            console.log('Screenshots taken');
            return res.json({success: 'true', url: filePath, filDuration: fileDuration })
        })
        .on('error', function(err) {
            console.log(err);
            return res.json({success: false, err});
        })
        .screenshot({
            count: 3,
            folder: '',
            size: '320x240',
            filename: 'thumbnail%b.png'
        })
       


})




module.exports = router;