const createProductValidationMdw = (req, res, next) => {
    console.log(req.body);
    res.send('mdw');
}

module.exports = createProductValidationMdw;