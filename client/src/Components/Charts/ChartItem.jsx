import React, { useEffect, useState } from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2'
import Chart, { CategoryScale } from 'chart.js/auto'
Chart.register(CategoryScale)


const ChartItem = ({ details, label1, label2, type }) => {

    const [chartData, setChartData] = useState({

        labels: label1.map((data) => data),
        datasets: [
            {
                label: "Users Gained",
                data: label1.map((data) => details[data]),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "& quot; #ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                    "#2a61d0",
                    "#2a51d0",
                ],
                borderColor: "black",
                borderWidth: 1
            }

        ]
    })


    const [chartData2, setChartData2] = useState({

        labels: label2.map((data) => data),
        datasets: [
            {
                label: "Users Gained",
                data: label2.map((data) => details[data]),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "& quot; #ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                    "#2b91d0",
                    "#2c51d0",
                ],
                borderColor: "black",
                borderWidth: 1
            }

        ]
    })


    const convertDate = (date) => {
        if (date) {
            date = date.split('-');
            let num = date[1];
            let newdate = new Date();
            newdate.setMonth(num - 1)
            return newdate.toLocaleString('en-US', { month: 'long' }).substring(0, 3).toUpperCase() + " " + date[0];
        }
    }

    useEffect(() => {

    }, [])


    return (
        <>
            <div className='row justify-content-center align-items-center gap-5 mb-5 '>
                {type == "Pie" &&
                    <>
                        <div className="col-md-5 col-s-12 text-center">
                            <Pie className=' rounded-lg bg-[whitesmoke]'
                                data={chartData}
                                options={{
                                    plugins: {
                                        title: {
                                            display: true,
                                            text: "Different Types Of Energy Gained"
                                        }
                                    }

                                }}
                            />
                        </div>

                        <h3 className='col-md-1  text-center' >{convertDate(details.date)} </h3>

                        <div className="col-md-5 col-s-12 text-center">
                            <Pie className=' rounded-lg bg-[whitesmoke]'
                                data={chartData2}
                                options={{
                                    plugins: {
                                        title: {
                                            display: true,
                                            text: "GHI And GTI Calculation"
                                        }
                                    }

                                }}
                            />
                        </div>


                    </>
                }

{type == "Bar" &&
                    <>
                        <div className="col-md-5 text-center">
                            <Bar className=' rounded-lg bg-[whitesmoke]'
                                data={chartData}
                                options={{
                                    plugins: {
                                        title: {
                                            display: true,
                                            text: "Different Types Of Energy Gained"
                                        },
                                        legend:false
                                    }

                                }}
                            />
                        </div>

                        <h3 className='col-md-1 text-center' >{convertDate(details.date)} </h3>

                        <div className="col-md-5 text-center">
                            <Bar className=' rounded-lg bg-[whitesmoke]'
                                data={chartData2}
                                options={{
                                    plugins: {
                                        title: {
                                            display: true,
                                            text: "GHI And GTI Calculation"
                                        },
                                        legend:false
                                    }

                                }}
                            />
                        </div>


                    </>
                }


{type == "Line" &&
                    <>
                        <div className="col-md-5 text-center">
                            <Line className=' rounded-lg bg-[whitesmoke]'
                                data={chartData}
                                options={{
                                    plugins: {
                                        title: {
                                            display: true,
                                            text: "Different Types Of Energy Gained"
                                        },
                                        legend:false
                                    }

                                }}
                            />
                        </div>

                        <h3 className='col-md-1 text-center' >{convertDate(details.date)} </h3>

                        <div className="col-md-5 text-center">
                            <Line className=' rounded-lg bg-[whitesmoke]'
                                data={chartData2}
                                options={{
                                    plugins: {
                                        title: {
                                            display: true,
                                            text: "GHI And GTI Calculation"
                                        },
                                        legend:false
                                    }

                                }}
                            />
                        </div>


                    </>
                }
            </div>

        </>
    )
}

export default ChartItem