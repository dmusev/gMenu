/**
 * Created by D.Musev on 31.10.2016 г..
 */
var path = require('path');

module.exports = {
    index: (req, res) => {
        res.sendFile('index.html', { root: path.join(__dirname, '../../public') });
    }
}