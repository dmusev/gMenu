/**
 * Created by D.Musev on 31.10.2016 г..
 */
module.exports = {
    index: (req, res) => {
        res.sendfile('./../../public/index.html')
    }
}