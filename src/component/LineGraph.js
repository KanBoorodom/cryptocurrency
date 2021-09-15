import React,{useState,useEffect} from 'react'
import Loader from "react-loader-spinner";
import { defaults,Line } from 'react-chartjs-2';
import axios from 'axios'
import './coin.css'

const LineGraph = ({id,day,searchAll, currencySelected,priceChange}) => {
    const [loadGraph,setLoadGraph] = useState(false)
    const [dateData,setDateData] = useState([])
    const [priceData,setPriceData] = useState([])
    const dateFormat = (unix)=>{
        var date = new Date(unix)
        var hours = date.getHours()
        var min = date.getMinutes()
        var sec = date.getSeconds()
        var day = date.getDate()
        var month = date.getMonth()+1 /* getMonth strart from 0 */
        var year = date.getFullYear()
        return (`${day}/${month}/${year} ${hours}:${min}:${sec}`)
    }

    useEffect(()=>{
        const getGraph = async (id) => {
          try{
            setLoadGraph(true)
            var response
            if(searchAll.length !== 0){
              response = await axios.get(`https://api.coingecko.com/api/v3/coins/${searchAll}/market_chart?vs_currency=${currencySelected}&days=${day}`) 
            }
            else{
              response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currencySelected}&days=${day}`) 
            }
            const graphDate = []
            const graphValue = [] 
            for(let i of response.data.prices){
              graphDate.push(dateFormat(i[0]))
              graphValue.push(i[1])
            }
            setDateData(graphDate)
            setPriceData(graphValue)
            setLoadGraph(false)
          }
          catch (e) {
            console.log(e)
          }
        }
        getGraph(id)
      },[id,searchAll,currencySelected,day])
      defaults.font.size = 14

      const data = {
        labels: dateData,
        datasets: [
          {
            label: 'Price',
            data: priceData,
            fill: true,
            backgroundColor: priceChange > 0 ? '#125d1e':'#ff63844d' , 
            borderColor: priceChange > 0 ? '#26bf3e':'#f45050', 
            pointRadius:2,
            tension:0.1,
          },
        ],
      };
      
      const options = {
        plugins:{
          legend:{
            display:false
          }
        },
        scales:{
            y:{
              ticks:{
                color:'white',
              }
            },
            x:{
              ticks:{
                display:false,
              },          
            }
        }
      }

    return (
        <>
            {loadGraph ? 
            <div className = 'coin__loadContainer'>
                <Loader className = 'coin--load' type="ThreeDots" color="#00BFFF" height={80} width={100} /> 
            </div>
            :
            <Line className = 'coin__chart' data={data} options={options}/>}
        </>
    )
}

export default LineGraph
