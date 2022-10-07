const DIR = "public/images";
const multer = require('multer')

const storage = multer.diskStorage({
    destination: DIR,
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

const upload = multer({
    storage: storage
}).single('image')

module.exports = {
    upload
}