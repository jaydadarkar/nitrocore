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