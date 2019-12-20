const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        demand: true,
        desc: 'Comando para obtener el clima'
    }
}).argv;



const getInfo = async (direccion) => {

    try {

        const coord = await lugar.getDirLatLng(direccion);
        const temp = await clima.getClima(coord.lat,coord.lng);

        return `El clima de la ciudad de ${coord.dir} es de ${temp}`;

    } catch (e) {
        return e;
    } 
};

getInfo(argv.direccion).then(console.log).catch(console.log);

