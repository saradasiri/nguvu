import React ,{useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(["sarada", "sirisha"]);

   useEffect(() => {
    async function fetchData () {
        const response = await fetch ('http://192.168.1.210/api/oys/predictiveAnalytics/list/json?sEcho=3&iDisplayStart=0&iDisplayLength=10&iSortingCols=1&mDataProp_0=recDtLupd&iColumns=1').then(data => data.json())
        console.log(response)
       // setData(response);
     }
     fetchData();
  },[])
  return (
    <div className="App">
      {data.map((data) => <div>{data}</div>)}     
    </div>
  );
}

export default App;
