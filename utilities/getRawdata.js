const axios = require("axios");
module.exports=async function(location)
{      //get woeid
    const resp=await axios.get("https://www.metaweather.com/api/location/search/?query="+location);
    //get raw weather
   const woeid=resp.data[0].woeid
    const rawWeather =await axios.get("https://www.metaweather.com/api/location/"+woeid+"/")
    
    return rawWeather.data["consolidated_weather"]
}