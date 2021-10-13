import React,{memo} from 'react'
import useFetch from './useFetch';
import Loader from "react-loader-spinner";
import { defaults,Line } from 'react-chartjs-2';
import './coin.css'

const LineGraph = ({id,day,searchAll, currencySelected,priceChange}) => {
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
    let fetch = (searchAll !== '') ? searchAll : id
    
    const {data,loading} = useFetch(`https://api.coingecko.com/api/v3/coins/${fetch}/market_chart?vs_currency=${currencySelected}&days=${day}`)
    if(loading){
      return  (   
        <div className = 'coin__loadContainer'>
          <Loader className = 'coin--load' type="ThreeDots" color="#00BFFF" height={80} width={100} /> 
        </div>
      )
    }
    const priceInfo = {'date': data.prices.map(p => dateFormat(p[0])), 'price': data.prices.map(p => p[1])}
    defaults.font.size = 14
    const graphData = {
        labels: priceInfo.date,
        datasets: [
          {
            label: 'Price',
            data: priceInfo.price,
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
            <Line className = 'coin__chart' data={graphData} options={options}/>
        </>
    )    
}

export default memo(LineGraph)