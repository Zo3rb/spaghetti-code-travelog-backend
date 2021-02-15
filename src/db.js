const mongoose = require('mongoose');

const CONNECT_OPTION = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
};

module.exports = async () => {
    try {
        // TODO --> Remove The DB_URI and Added as Environment Variable
        await mongoose.connect(process.env.DB_URI, CONNECT_OPTION);
        console.log('Successfully connected to The Database');
    } catch (error) {
        console.log(`Error Ocurred: ${error.message}`);
        process.exit();
    }
};
