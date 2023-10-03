import Chart, { CategoryScale } from 'chart.js/auto'
import React, { useState } from 'react'
import { Data } from './chartData';
import { Bar, Line, Pie } from 'react-chartjs-2';

Chart.register(CategoryScale)

const Picharts = () => {

    const [chartData, setChartData] = useState({
        
        labels: Data.map((data) => data.year),
        datasets: [
            {
                label: "Users Gained",
                data: Data.map((data) => data.userGain),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "& quot; #ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0"
                ],
                borderColor: "black",
                borderWidth: 1
            }
            
        ]
    })
    return (
<>
<div className=' border-2 border-black mx-auto grid grid-cols-1 lg:grid-cols-2'>


        <div  className="chart-container max-w-[500px] mx-auto my-5">
            <h2 className='text-center py-3 text-2xl font-semibold'>Pie Chart</h2>
            <Pie  className=' rounded-lg bg-[whitesmoke]' 
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Users Gained between 2016-2020"
                        }
                    }
                    
                }}
            />
        </div>

        <div  className="chart-container max-w-[500px] mx-auto  my-5">
            <h2 className='text-center py-3 text-2xl font-semibold'>Bar Chart</h2>
            <Bar  className=' rounded-lg bg-[whitesmoke]' 
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Users Gained between 2016-2020"
                        },
                        legend:false
                    }
                }}
            />
        </div>

        <div  className="chart-container  max-w-[500px] mx-auto my-5">
            <h2 className='text-center py-3 text-2xl font-semibold'>Line Chart</h2>
            <Line  className=' rounded-lg bg-[whitesmoke]' 
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Users Gained between 2016-2020"
                        },
                        legend:false
                    }
                }}
            />
        </div>
        </div>
        </>
    )
}

export default Picharts