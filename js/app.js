const searchbtn= document.getElementById('searchbtn')


const getData=()=>{
    // console.log('working')
    const userData = document.getElementById('userSearch').value;
    document.getElementById('userSearch').value="";
    // console.log(userData);
    fetchWeather(userData)
}

const fetchWeather= async(recvUserData)=>{
    const weatherData= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${recvUserData}&appid=87289ea51125a69f0027c6a29f64cfb0`);
    // console.log(weatherData)
    const result = await weatherData.json()
    // console.log(result.name)
    document.getElementById('cityName').innerText= result.name
    document.getElementById('badgeId').innerText= result.sys.country
    const temp = (result.main.temp-273.5).toFixed(2)
    // console.log(temp)
    document.getElementById('temp').innerText= temp

}

searchbtn.addEventListener('click',getData)


















