const descripcion = {
    demand: true,
    alias: 'd',
    desc: "Descripción de la tarea por hacer"
};
const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completada o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear una tarea', {
        descripcion
    })
    .command('actualizar', 'Actualizar una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina una Tarea de la lista de Tareas', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}