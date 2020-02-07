const getRawWeather=require("../utilities/getRawdata")
const getLoc=require("../utilities/getLocation")
const ora=require("ora")
module.exports= async function(location){
    const spinner=ora("Loading Weather")
spinner.start();
    if(location==undefined)
    location=await getLoc()
    const fullWeather=await getRawWeather(location)
    const TodayWeather=fullWeather[0];
    const currentState=TodayWeather["weather_state_name"]
    const temp=Math.ceil(TodayWeather["the_temp"])
  //print weather
  spinner.stop();
  console.log(`Current conditions
  in ${location}
                  ${temp}°
                  ${currentState}`)
}
