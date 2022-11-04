const express = require('express');
const multer = require('multer');
const path = require('path');

express().use(express.static(__dirname + '/public'));
express().use('/uploads', express.static('uploads'));

const imageStorage = multer.diskStorage({
  // Destination to store image
  destination: 'images',
  filename: (req, file, cb) => {
    let ext = path.extname(file.originalname)
    cb(null, file.fieldname + '_' + Date.now() + ext);
    // file.fieldname is name of the field (image)
    // path.extname get the uploaded file extension
  },
});

const imageUpload = multer({
  storage: imageStorage,
  limits: {
    fileSize: 10000000, // 1000000 Bytes = 1 MB
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg)$/)) {
      // upload only png and jpg format
      return cb(new Error('Please upload a Image'));
    }
    cb(undefined, true);
  },
});

module.exports = imageUpload;
