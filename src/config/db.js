
var config = { 
    db: {
        mongo: 'mongodb://',
        host: 'localhost',
        name: 'databaseMongo',
        mondoprod: 'mongodb://eduardo:rafaga@ds117913.mlab.com:17913/heroku_4fb37fwz'
    },
    localhost: 'mongodb://localhost/erp', //local mongodb
    webhost: '',
    secretKey: 'nevermindXD'//to use in jsonwebtoken
}

module.exports = config;