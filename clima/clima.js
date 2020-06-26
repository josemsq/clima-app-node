const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=b3b6122398e66a9dc404c50c94b625f3&units=metric`);

    return resp.data.main.temp;

}


module.exports = {
    getClima
}