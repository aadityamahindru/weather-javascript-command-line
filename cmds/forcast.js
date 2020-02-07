const getRawWeather=require("../utilities/getRawdata")
const getLoc=require("../utilities/getLocation")
const ora =require("ora")
module.exports= async function(location){
    const spinner=ora("Loading Weather")
    spinner.start()
    if(location==undefined)
    location= await getLoc();
    const fullWeather=await getRawWeather(location)
    //console.log(fullWeather)
     for(let i=0;i<fullWeather.length;i++){
         const CDate=fullWeather[i]["applicable_date"]
         const minTemp=Math.floor(fullWeather[i]["min_temp"])
         const maxTemp=Math.floor(fullWeather[i]["max_temp"])
         const currentState=fullWeather[i]["weather_state_name"]
        spinner.stop()
         console.log(`
                    ${CDate}-  Low: ${minTemp} ° | Max: ${maxTemp}°  | ${currentState}`)
     }
   
  
}
