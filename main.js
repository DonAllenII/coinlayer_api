const axios = require('axios');

const url_builder = (request_type) => {
    let base_url = "http://api.coinlayer.com/"
    let access_key = "1b540a831135cf2a997b18dbaa85f23b"

    let url = base_url + request_type + "?access_key=" + access_key
    return url
}

const getData = async(url) => {
    let response = await axios.get(url)

    console.log(response.data)
    return response.data
}

live = url_builder("live");
coins_list = live + "&symbols=BTC,ETH,XRP,SOL,USDC,ADA,DOT"
//getData(live);
getData(coins_list);