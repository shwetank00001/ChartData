import {useState} from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)

function App() {
  const [data, setData]= useState({
    labels:["Company 1","Company 2","Company 3","Company 4","Company 5","Company 6","Company 7" ],
    datasets:[
      {
        label:"Best Revenue",
        data:[50, 70, 30, 42, 51, 82, 31],
        backgroundColor:'lightblue',
        borderColor:'black',
        tension:0.4,
        fill:true,
        pointStyle:'rect',
        pointBorderColor:'blue',
        pointBackgroundColor:'#fff',
        showLine:true
      }
    ]
  })
  return (
    <div className="App" style={{width:'800px', height:'800px'}}>
      <Line data={data}>Hello</Line>
    </div>
  );
}

export default App;