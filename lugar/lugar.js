const axios = require('axios');



const getLugarLatLng = async(dir) => {



    const dataTest = {
        "name": "New York",
        "type": "city",
        "c": "US",
        "zmw": "10269.6.99999",
        "tz": "America/New_York",
        "tzs": "EST",
        "l": "/q/zmw:10269.6.99999",
        "ll": "40.700001 -74.010002",
        "lat": "40.700001",
        "lon": "-74.010002"
    }

    //console.log(argv.direccion);
    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        //timeout: 1000,
        headers: { 'X-RapidAPI-Key': '9f1f67c415mshd3f34d08d8ad7efp1cbdccjsn74d9614b698c' }
    });

    const resp = await instance.get();

    resp.data.Result = dataTest;

    if (resp.data.Result == null) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Result;
    const direccion = resp.data.Result.name;
    const lat = resp.data.Result.lat;
    const lng = resp.data.Result.lon;
    /*instance.get()
        .then(resp => {
            //fix pq url devuelve NULL
            console.log(resp.data.Result);
            resp.data.Result = data;
            console.log(resp.data.Result);
        })
        .catch(err => {
            console.log('ERROR!!!', err);
        });*/

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}