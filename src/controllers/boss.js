import Client from '../models/boss';


const listAll = () => {
    return Boss;
    find().then(bossList =>{
        return bossList;
    }).catch (err=>{
        return 'Algo salio mal';
    })
}

const getOne = (id) => {
    return Boss.findById(id)
        .then(boss => {
            return boss;
        }).catch(err => {
            return 'Something went wrong';
        })
}

const addOne = (boss) => {
    var newBoss = new Client(boss);

    return newBoss
        .save()
        .then(boss => {
            return boss;
        })
        .catch(err => {
            return 'Something went wrong';
        })
}


const deleteOne = (id) => {
        return Boss.findById(id)
        .then(boss => {
            boss.remove(jefe._id)
            .then(boss =>{
                return "se pudo :v";
            })
            .catch(err=>{
                return "no se pudo";
            })
        }).catch(err => {
            return 'No se pudo eliminar';
        })

}


const updateOne = (id,newInfo) => { 
    return Boss.findById(id)
    .then(boss=>{
        boss = new Boss (newInfo);
        boss.save()
        .then(boss=>{
            return 'Acualizado correctamente';
        })
        .cathc(err=>{
            return 'no se pudo guardar cambios';
        })

    }).catch(boss=>{
        return 'no se pudo actualiza';
    })


}

module.exports = {
    listAll,
    getOne, 
    addOne,
    deleteOne,
    updateOne
}