const fs = require('fs');
const os = require('os');
require('dotenv').config();
const app_root = process.cwd();

/**
 * Save A User Uploaded File.
    @param {string} disk - String => 'local' | 'public' | 's3' | 'gcs'
    @param {object} file - Object From Multer => req.file
    @throws Error
*/
module.exports.put = (disk,file) => {
    let fileContent = fs.readFileSync(file.path);
    switch (disk) {
        case('local'):
            // Store File In Storage/Uploads (Not Public)
            try {
                if(fs.existsSync(app_root + "/storage/uploads")){
                    fs.writeFile(app_root + "/storage/uploads/" + file.originalname, fileContent, function (err) {
                        if (err) throw err;
                    });
                }
                else{
                    fs.mkdirSync(app_root + "/storage/uploads", function(err){
                        if(!err){
                            fs.writeFile(app_root + "/storage/uploads/" + file.originalname, fileContent, function (err) {
                                if (err) throw err;
                            });
                        }
                    });
                }
            } catch (error) {
                console.log(error);
            }
            break;
        case('public'):
            // Store File In Storage/Public/Uploads (Public)
            try {
                if(fs.existsSync(app_root + "/storage/public/uploads")){
                    fs.writeFile(app_root + "/storage/public/uploads/" + file.originalname, fileContent, function (err) {
                        if (err) throw err;
                      });
                }
                else{
                    fs.mkdir(app_root + "/storage/public/uploads", function(err){
                        if(!err){
                    fs.writeFile(app_root + "/storage/public/uploads/" + file.originalname, fileContent, function (err) {
                        if (err) throw err;
                      });
                        }
                    });
                }                    
            } catch (error) {
                console.log(error);
            }
            break;
        case ('s3'):
            // Store File In AWS S3 Storage
            if(process.env.AWS_ID && process.env.AWS_SECRET && process.env.AWS_BUCKET){
                const AWS = require('aws-sdk');
                const s3 = new AWS.S3({
                    accessKeyId: process.env.AWS_ID,
                    secretAccessKey: process.env.AWS_SECRET,
                    region: process.env.AWS_BUCKET_REGION
                });
                const BUCKET_NAME = process.env.AWS_BUCKET;
                                
                const params = {
                    Bucket: BUCKET_NAME,
                    Key: file.originalname,
                    ContentType: file.mimetype,
                    Body: fileContent
                };
                try {
                    s3.upload(params, function(err, data) {
                        if (err) {
                            throw err;
                        }
                    });
                } catch (error) {
                    console.log(error);                
                }    
            }
            else{
                console.log('Authentication Error');
            }
            break;    
        case ('gcs'):
            // Store File In GCS (Google Cloud Storage)
            if(process.env.GOOGLE_CLOUD_KEYFILE && process.env.GOOGLE_CLOUD_BUCKET){
                const {Storage} = require('@google-cloud/storage');
                      
                const storage = new Storage({
                    keyFilename: process.env.GOOGLE_CLOUD_KEYFILE,
                });
                if(!fs.existsSync(os.tmpdir() + '/nitromvc')){
                    fs.mkdir(os.tmpdir() + '/nitromvc', function(err){
                        if(err) console.log(err);
                   });
                   fs.writeFile(os.tmpdir() + '/nitromvc/' + file.originalname, fileContent, function (err) {
                    if (err) throw err;
                   });
                }
                else{
                    fs.writeFile(os.tmpdir() + '/nitromvc/' + file.originalname, fileContent, function (err) {
                        if (err) throw err;
                      });    
                }

                try {
                    storage.bucket(process.env.GOOGLE_CLOUD_BUCKET).upload(os.tmpdir() + '/nitromvc/' + file.originalname, function(err, data) {
                        if (err) {
                            throw err;
                        }
                    });
                } catch (error) {
                    console.log(error);                
                }    
            }
            else{
                console.log('Authentication Error');
            }
            break;    

        default:
            break;
    }
}

/**
 * Get Buffer Object Of File.
    @param {string} disk - String => 'local' | 'public' | 's3' | 'gcs'
    @param {string} filename - String => somefile.txt
    @throws Error
*/
module.exports.get = async (disk,filename) => {
    switch (disk) {
        case ('local'):
            // Get Buffer Object Of File In Storage/Uploads
            try {
                let data = fs.readFileSync(app_root + '/storage/uploads/' + filename);
                return data;
            } catch (error) {
                throw error;
            }
            break;

        case ('public'):
            // Get Buffer Object Of File In Storage/Public/Uploads
            try {
                let data = fs.readFileSync(app_root + '/storage/public/uploads/' + filename);
                return data;
            } catch (error) {
                throw error;
            }
            break;

        case ('s3'):
            // Get Buffer Object Of File In AWS S3
            if(process.env.AWS_ID && process.env.AWS_SECRET && process.env.AWS_BUCKET){
                const AWS = require('aws-sdk');
                const s3 = new AWS.S3({
                    accessKeyId: process.env.AWS_ID,
                    secretAccessKey: process.env.AWS_SECRET,
                    region: process.env.AWS_BUCKET_REGION
                });
                const BUCKET_NAME = process.env.AWS_BUCKET;
                                
                const params = {
                    Bucket: BUCKET_NAME,
                    Key: filename,
                };
                try {
                    const data = await s3.getObject(params).promise();
                    const bufferdata = data.Body;
                    return bufferdata;
                } catch (error) {
                    throw error;                
                }            
            }
            else{
                console.log('Authentication Error');
            }
            break;

        case ('gcs'):
            // Get Buffer Object Of File In Google Cloud Storage
            if(process.env.GOOGLE_CLOUD_KEYFILE && process.env.GOOGLE_CLOUD_BUCKET){
                const {Storage} = require('@google-cloud/storage');
                        
                const storage = new Storage({
                    keyFilename: process.env.GOOGLE_CLOUD_KEYFILE
                });

                try {
                    await storage.bucket(process.env.GOOGLE_CLOUD_BUCKET).file(filename).download({destination: os.tmpdir() + '/nitromvc/' + filename});
                    const data = fs.readFileSync(os.tmpdir() + '/nitromvc/' + filename);
                    return data;
                } catch (error) {
                    throw error;                
                }
            }
            else{
                console.log('Authentication Error');
            }
            break;
    
        default:
            break;
    }
}

/**
 * Deletes A File.
    @param {string} disk - String => 'local' | 'public' | 's3' | 'gcs'
    @param {string} filename - String => somefile.txt
    @throws Error
*/
module.exports.delete = async (disk,filename) => {
    switch (disk) {
        case ('local'):
            // Delete File In Storage/Uploads
            try {
                fs.unlinkSync(app_root + '/storage/uploads/' + filename);
            } catch (error) {
                throw error;
            }            
            break;

        case ('public'):
            // Delete File In Storage/Public/Uploads
            try {
                fs.unlinkSync(app_root + '/storage/public/uploads/' + filename);
            } catch (error) {
                throw error;
            }                        
            break;

        case ('s3'):
            // Delete File In AWS S3
            if(process.env.AWS_ID && process.env.AWS_SECRET && process.env.AWS_BUCKET){
                const AWS = require('aws-sdk');
                const s3 = new AWS.S3({
                    accessKeyId: process.env.AWS_ID,
                    secretAccessKey: process.env.AWS_SECRET,
                    region: process.env.AWS_BUCKET_REGION
                });
                const BUCKET_NAME = process.env.AWS_BUCKET;
                                
                const params = {
                    Bucket: BUCKET_NAME,
                    Key: filename,
                };
                try {
                    await s3.deleteObject(params, function(err,response){
                        if(err) throw err;
                    }).promise();
                } catch (error) {
                    throw error;                
                }            
            }
            else{
                console.log('Authentication Error');
            }
            break;

        case ('gcs'):
             // Delete File In Google Cloud Storage
             if(process.env.GOOGLE_CLOUD_KEYFILE && process.env.GOOGLE_CLOUD_BUCKET){
                const {Storage} = require('@google-cloud/storage');
                      
                const storage = new Storage({
                    keyFilename: process.env.GOOGLE_CLOUD_KEYFILE
                });
    
                try {
                    await storage.bucket(process.env.GOOGLE_CLOUD_BUCKET).file(filename).delete();
                } catch (error) {
                    throw error;                
                }
            }
            else{
                console.log('Authentication Error');
            }
            break;
    
        default:
            break;
    }    
}