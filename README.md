# NITRO CORE
Core Library For Nitro MVC

## The Nitro MVC Doc Explains Usage Of This Small Library

## Usage
##### Strings
```
 const nitro = require('@jaydadarkar/nitrocore');
 let abc = nitro.strings.first('This Is Test String');  // Returns T
```
first: Returns first character of a string.\
last: Returns last character of a string.\
strLength: Returns length of the string.\
subString: Returns a substring.\
uppercase: Returns a converted to uppercase string.\
lowercase: Returns a converted to lowercase string.\
capitalize: Returns a string with every first word of the string uppercased.\
wordCount: Returns number of words in a string.\
random: Returns a randomly generated alpha-numeric string.

##### Arrays
```
 const nitro = require('@jaydadarkar/nitrocore');
 let abc = nitro.arrays.first(['abc', 'pqr', 'xyz']);  // Returns abc
```
first: Returns first element of an array.\
last: Returns last element of an array.\
sort: Returns a sorted array.\
randomSort: Returns a randomly sorted array.\
arrayJoin: Returns a concatinated array.\
random: Returns a random element from an array.\
min: returns the minimum element of an array.\
max: returns the maximum element of an array.

##### Storage
```
 const nitro = require('@jaydadarkar/nitrocore');

 // Add middleware To The Route upload.single('myFile')

// Your Controller
 module.exports.controller = async (req,res,next) => {
 await nitro.storage.put('public', req.file);  // Save A User Uploaded File To Storage/Public/Uploads
 }
```
put: Uploads A File To Public, Local, AWS S3 And Google Cloud.\
get: Returns A Buffer Object Of The File. You Can Store This Object In A Variable And Write It To A File.\
delete: Deletes A File From Public, Local, AWS S3 And Google Cloud.

##### Pagination
```
// Route
router.get('/products/:page?', parseForm, csrfProtection, controller.products);

// Controller
export.products = async (req,res) => {
await Products.find({}, function(err,Products){
    Products = nitro.paginate(req,20,Products);    // req: Express req object, 20: Limit, Products: Mongoose Object
        if(!err){
            res.render('shop/products', {csrfToken: req.csrfToken(), products: Products.data, links: Products.links});
        }
        else{
            res.render('errors/messages', {val_errors: err});
        }
    });
}

// Edit Your View. Apply Foreach to products and add links at bottom
<%- links %>
```

##### Logger
```
nitro.log(data)  // Appends data to nitrolog.log file in storage/logs
```

## Changelog
```
(v1.2.0) => { Pagination, Logger }
(v1.1.0) => { Storage Method }
(v1.0.0) => {String Methods, Array Methods}
```
## Author
[Jay Dadarkar](https://jaydadarkar.com/)

## License
[MIT](https://choosealicense.com/licenses/mit/)