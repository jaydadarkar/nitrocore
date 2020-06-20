/**
    * Import Array Methods
    @method first() - Returns First Element Of Array.
    @method last() - Returns Last Element Of Array.
    @method sort() - Returns A Sorted Array.
    @method randomSort() - Returns A Randomly Sorted Array.
    @method arrayJoin() - Returns A Concatinated Array.
    @method random() - Returns A Random Element Of Array.
    @method min() - Returns Lowest Of Array.
    @method max() - Returns Highest Element Of Array.
*/
module.exports.arrays = require('./lib/array');

/**
    * Import String Methods
    @method first() - Returns First Character Of String.
    @method last() - Returns Last Character Of String.
    @method strLength() - Returns Length Of String.
    @method subString() - Returns A Sub String.
    @method uppercase() - Returns An Uppercased String.
    @method lowercase() - Returns A Lowercased String.
    @method capitalize() - Returns A Capitalized String.
    @method wordCount() - Returns Number Of Words In A String.
    @method random() - Returns A Random String.
*/
module.exports.strings = require('./lib/string');

/**
    * Import Storage Methods
    @method put() - Saves File To Disk.
    @method get() - Retrieves A Buffer Object Of The File.
    @method delete() - Deletes A File.
*/
module.exports.storage = require('./lib/storage');

/**
    * Import Paginate Methods
    @param {object} req - {Object} Express req object
    @param {number} limit - {Number} Limit
    @param {object} Model - {Object} Mongoose object
    @returns {object} {data} {links} - Model.data And Model.links
*/
module.exports.paginate = (req, limit, Model) => {
    const page_number = (req.params.page == undefined) ? 0 : req.params.page;
    const len = Model.length;
    const pages = Math.ceil(len / limit);
    let links = '';

    if(page_number <= 1){
        links = '';
        for (let index = 1; index <= pages; index++) {
            if(req.params.page == undefined){
                if(index == 1){
                    links += '<a class="disabled btn btn-success rounded-0 m-0 pagination-button border border-white" href="'+ req.url + '/' + index +'">'+ index +'</a>';
                }
                else{
                    links += '<a class="btn btn-success rounded-0 m-0 pagination-button border border-white" href="'+ req.url + '/' + index +'">'+ index +'</a>';
                }    
            }
            else{
                if(index == 1){
                    links += '<a class="disabled btn btn-success rounded-0 m-0 pagination-button border border-white" href="'+ '' + index +'">'+ index +'</a>';
                }
                else{
                    links += '<a class="btn btn-success rounded-0 m-0 pagination-button border border-white" href="'+ '' + index +'">'+ index +'</a>';
                }    
            }
        }
        Model.data = Model.slice(0 , limit);
        Model.links = links;
        return Model;
    }
    else{
        links = '';
        for (let index = 1; index <= pages; index++) {
            if(index == page_number){
                links += '<a class="disabled btn btn-success rounded-0 m-0 pagination-button border border-white" href="' + index +'">'+ index +'</a>';
            }
            else{
                links += '<a class="btn btn-success rounded-0 m-0 pagination-button border border-white" href="' + index +'">'+ index +'</a>';
            }
        }
        Model.data = Model.slice((page_number * limit) - limit , page_number * limit);
        console.log(pages, page_number);
        Model.links = links;
        return Model;
    }
}

/**
    * Import Logger Methods
    @param {String} data - {String} Data To Be Logged To nitrolog.log file.
*/
module.exports.log = (data) => {
    const fs = require('fs');
    let date = new Date;
    date = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() ;
    data = '['+ date + '] ' + data;
    fs.appendFile(process.cwd() + '/storage/logs/nitrologs.log', data, function (err) {
        if (err) throw err;
      });
}