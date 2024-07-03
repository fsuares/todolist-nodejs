const validateFieldTitle = (req, rest, next) => {
    const { body } = req;
    if(body.title === undefined){
        rest.status(400).json({ message: 'title is required'})
    };
    if(body.title === ''){
        rest.status(400).json({ message: 'title cannot be empty'})
    };

    next()
};

const validateFieldStatus = (req, rest, next) => {
    const { body } = req;
    if(body.status === undefined){
        rest.status(400).json({ message: 'status is required'})
    };
    if(body.status === ''){
        rest.status(400).json({ message: 'status cannot be empty'})
    };

    next()
};

module.exports = {
    validateFieldTitle,
    validateFieldStatus,
};