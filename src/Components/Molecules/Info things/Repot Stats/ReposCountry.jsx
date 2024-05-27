import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import {TbRectangleFilled} from "react-icons/tb";

function RepsAge({countryRange}) {


    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
   if(!countryRange) return
   const data = Object.values(countryRange)
        const myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                datasets: [{
                    data: data,
                    backgroundColor: [
                        '#053F5C',
                        '#429EBD',
                        '#9FE7F5',
                        '#F7AD19',
                        '#F27F0C',                    ],
                    borderColor: [
                        '#053F5C',
                        '#429EBD',
                        '#9FE7F5',
                        '#F7AD19',
                        '#F27F0C',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: false,
            }
        });

        return () => {
            myChart.destroy();
        };
    }, [countryRange]);

    return (
        <>
            <div className=" mx-auto max-w-screen-lg bg-[#5EB7BF]/20 rounded-lg px-[100px] shadow-lg p-[30px] " >
                <h1 className="text-3xl text-center text-[#042B29]  font-semibold">Country Report</h1>
                <div className='w-[50px] flex flex-row '>

                    <canvas ref={chartRef}
                            className='w-[350px] h-[400px] flex justify-center items-center mx-auto'></canvas>
                    <div className="ml-[166px]">
                        <div className="m-7 flex items-center">
                            <TbRectangleFilled className="text-white bg-[#053F5C] text-lg p-3 "/>
                            <p className="ml-3 text-xl">Africa</p>
                        </div>
                        <div className="m-7 flex items-center">
                            <TbRectangleFilled className="text-white bg-[#429EBD] text-lg p-3 "/>
                            <p className="ml-3 text-xl">America</p>
                        </div>
                        <div className="m-7 flex items-center">
                            <TbRectangleFilled className="text-white bg-[#9FE7F5] text-lg p-3 "/>
                            <p className="ml-3 text-xl">Asia</p>
                        </div>
                        <div className="m-7 flex items-center">
                            <TbRectangleFilled className="text-white bg-[#F7AD19] text-lg p-3 "/>
                            <p className="ml-3 text-xl">Australia</p>
                        </div>
                        <div className="m-7 flex items-center">
                            <TbRectangleFilled className="text-white bg-[#F27F0C] text-lg p-3 "/>
                            <p className="ml-3 text-xl">Europe</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default RepsAge;