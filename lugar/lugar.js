const axios = require('axios');

const getDirLatLng = async (direccion) => {
    
    const encodeUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
        "x-rapidapi-key": "51a5c8321dmsh1cb63e29d5cf3f4p1eda81jsn5c90f1aa67a1"}
    });

    const resp = await instance.get();

    if(resp.data.Results.length === 0){
        throw new Error(`No existen resultados para la dirección ${direccion}`);
    }
    const data = resp.data.Results[0];

    const dir = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        dir,
        lat,
        lng
    }
}

module.exports = {
    getDirLatLng
}


