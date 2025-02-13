import express from 'express';
import fs from 'fs';

var router = express.Router();

router.get('/files', (req, res) => {
    let LocalFilesArray = LocalFuncForFiles();
    res.json(LocalFilesArray);
});

let LocalFuncForFiles = () => {
    let LocalFilesPath = "KData/JSON/316";
    let CommonFiles = fs.readdirSync(LocalFilesPath);
    let LocalFilesArray = [];

    CommonFiles.forEach(function (file, index) {
        LocalFilesArray.push(file);
    });

    return LocalFilesArray;
};

export { router };