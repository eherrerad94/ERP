import Client from '../models/client';


const listAll = () => {

    return Client.
        find().then(clientList => {
            return clientList;
        }).catch(err => {
            return 'Something went wrong';
        })
}

const getOne = (id) => {
    return Client.findById(id)
        .then(client => {
            return client;
        }).catch(err => {
            return 'Something went wrong';
        })
}

const addOne = (client) => {
    var newClient = new Client(client);

    return newClient
        .save()
        .then(client => {
            return client;
        })
        .catch(err => {
            return 'Something went wrong';
        })
}



module.exports = {
    listAll,
    getOne,
    addOne,
   // updateOne,

}