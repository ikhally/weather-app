// let myName = "kunle"
// const test = async()=>{
//     await delay()
//     console.log(myName)
// }
// const delay = ()=>{
//     setTimeout(() => {
//         myName = "ikhally"
//     }, 3000);
// }

// const endpoint = "https://jsonplaceholder.typicode.com/users"
// const test = async()=>{
//     let response = await fetch(endpoint)
//     let jsonResponse = await response.json()
//     console.log(jsonResponse)
//     jsonResponse.map((item)=>{
    //         disp.innerHTML +=`<h1>${item.login}</h1>` 
    //     })
    // }
    
    async function test () {
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${cityname.value}&appid=da0110184794c11e20d984f29f8dc9d9&units=metric`
    let response = await fetch(endpoint)
    let jsonResponse = await response.json()
    console.log(jsonResponse)
    
    cityName.innerHTML = jsonResponse.name;
    show.innerHTML = jsonResponse.main.humidity
    degree.innerHTML = `${Math.round(jsonResponse.main.temp)}${"<sup>o</sup>C"}`
    condition.innerHTML = jsonResponse.weather[0].description;
    country.innerHTML = jsonResponse.sys.country;
    longitude.innerHTML = jsonResponse.coord.lon;
    latitude.innerHTML = jsonResponse.coord.lat;
    cloud.innerHTML = `${jsonResponse.clouds.all}${"%"}`
    pressure.innerHTML = jsonResponse.main.pressure
    humidity.innerHTML = `${jsonResponse.main.humidity}${"%"}`
    wind.innerHTML = `${jsonResponse.wind.speed}${"km/hr"}`
    gust.innerHTML = `${jsonResponse.wind.gust}${"km/hr"}`

 
// const timeDisp = ()=>{
//     const time = new Date();

//     const hour = timeFormat((time.getHours)) 
//     const minutes = timeFormat((time.getMinutes))
//     const day = timeFormat((time.getDay))
//     const month = timeFormat((time.getMonth))
//     const year = timeFormat((time.getFullYear)).
//     clock.innerHTML = `${hour}:${minutes}-${day},${month}${year}`
// }
// setInterval(timeDisp, 1000)

// const timeFormat = (timer)=>{
//     if(timer<10){
//         return 0
//     }
// }

// }
async function currentLocation(){
    navigator.geolocation.getCurrentPosition((position)=>{
        let longitude = position.coords.longitude
        let latitude = position.coords.latitude
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon${longitude}&appid=${key}&units=metric`
        fetch(url).then((response)=>response.json()).then((currentLocation)=>{
            cityName.innerHTML = currentLocation.name;
            degree.innerHTML = `${Math.round(currentLocation.main.temp)}${"<sup>o</sup>C"}`
            condition.innerHTML = currentLocation.weather[0].description;
            country.innerHTML = currentLocation.sys.country;
            longitude.innerHTML = currentLocation.coord.lon;
            latitude.innerHTML = currentLocation.coord.lat; 
            cloud.innerHTML = `${currentLocation.clouds.all}${"%"}`
            pressure.innerHTML = currentLocation.main.pressure
            humidity.innerHTML = `${currentLocation.main.humidity}${"%"}`
            wind.innerHTML = `${currentLocation.wind.speed}${"km/hr"}`
            gust.innerHTML = `${jsonResponse.wind.gust}${"km/hr"}` 

            if(jsonResponse.weather[0].main === "Rain"){
                document.getElementById("bckgrnd").style.backgroundImage = `url(pics/raining.jpg)`
            }
            else if(jsonResponse.weather[0].main === "Clouds"){
                document.getElementById("bckgrnd").style.backgroundImage = `url(pics/cloud.jpg)`
            }
            else{
                document.getElementById("bckgrnd").style.backgroundImage = `url(pics/FB_IMG_16643955208083256.jpg)`
            }
        })
    })
}