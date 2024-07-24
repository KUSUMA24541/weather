async function getdata(city){
    const res= await fetch(`http://api.weatherapi.com/v1/current.json?key=dbf86ecea3494b6481993833240507&q=${city}&aqi=yes`)
    return await(res.json())
}

async function handleInp(){
    let inp = document.querySelector("input")
    let data=await getdata(inp.value);
    console.log(data.location);
    document.querySelector("h1").innerHTML=`${data.location.name} - ${data.location.region} - ${data.location.country}`
}