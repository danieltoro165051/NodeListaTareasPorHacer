const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
    }
}

const optsActualizar = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: "Descripcion de la tarea por hacer"
    },
    completado: {
        demand: true,
        alias: 'c',
        default: true,
        desc: "Marca como completado o pendiente la tarea"
    }
}

const objList = {
    listar: {
        alias: 'l',
    }
}


const objBorrar = {
    borrar: {
        alias: 'b',
    }
}

const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', opts)
    .command('actualizar', 'Actualiza el estado de una tarea', optsActualizar)
    .command('listar', 'Lista las tareas', objList)
    .command('borrar', 'Borra una tarea en especifico', opts)
    .help()
    .argv


module.exports = {
    argv
}