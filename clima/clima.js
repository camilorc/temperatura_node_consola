const axios = require('axios');


const getClima = async (lat,lon) =>{

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=305d901071d94ed38fd893ddff455a94&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}