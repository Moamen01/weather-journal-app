

// Personal API Key for OpenWeatherMap API
const apiKey = "&appid=9f66733271278886eb8678e6ce1d4100&units=metric";
const apiURL = "http://localhost:3000/";

const zipCode = document.getElementById('zip');
const feelings = document.getElementById('feelings');
const dateElem = document.getElementById('date');
const tempElem = document.getElementById('temp');
const contentElem = document.getElementById('content');



// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

/* Function called by event listener */
function performAction(e){
  let d = new Date();
  let inputData = {
    zipCode: zipCode.value,
    content: feelings.value,
    date: d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear()
  }

/* Function to GET Web API Data*/
  getZipData(inputData.zipCode).then(zipObj => {
    if (zipObj.cod != 200){
      return alert(zipObj.message);
    }
    inputData.temp = zipObj.main.temp;
    //POST call & UI update
    postData('/setData', inputData);
  }).then(updateUI);
}

const getZipData = async function(zip){
  const res= await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode.value}${apiKey}`);
    try{
      const data = await res.json();
      return data;
    }catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}



/* Function to POST data */
const postData = async (url='', data ={})=>{

  const res = await fetch(url ,{
      method: 'POST',
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    }
  );

  try{
    const newData = await res.json();
    console.log(newData);
    return newData;
  }catch (error){
    console.log("error", error);
  }
}

/* Function to GET Project Data */

const updateUI = async ()=>{
  const req = await fetch('/all');

  try{
    const allData = await req.json();
    dateElem.innerHTML= allData.date;
    tempElem.innerHTML= allData.temp;
    contentElem.innerHTML= allData.content;
  }catch (error){
    console.log("error", error);
  }
}
