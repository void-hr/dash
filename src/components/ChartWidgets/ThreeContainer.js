import React from 'react'
import './style.css'
// import {Bar} from 'react-chartjs-2';
// import { useState } from 'react';
// import {Chart as ChartJS} from 'chart.js/auto'
import video from '../../Assets/video.mp4'

import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
)

export default function ThreeContainer() {
    // let data = [1,2,3,4,5];
    // cons t [userData, setUserData] = useState({
    //     labels: ['one', 'two', 'three'],
    //     datasets:[1,2,3]
    // });
    const data = {
        labels : ['Mon', 'Tue', 'Wed'],
        datasets: [
            {
                label: 'boy',
                data: [3, 6, 9],
                backgroundColor: 'aqua',
                color:'white',
                borderColor: 'black',
                borderWidth: 1,
            },
            {
                label: 'girl',
                data: [4, 3, 3],
                backgroundColor: 'green',
                color:'white',
                borderColor: 'black',
                borderWidth: 1,
            }
        ]
    }

    const options = {

    }
  return (
        <div className="container-3x">
        
            <div className="box-3">
                <Bar data={data} opitons={options}/>
            </div>
            <div className="box-3">
                <Bar data={data} opitons={options}/>
            </div>
        
            <div className="box-3">
                <Bar data={data} opitons={options}/>
            </div>
            {/* <BarChart data={data} options={options}/>  */}
        </div>

  )
}
