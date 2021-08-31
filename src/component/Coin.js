import React,{useState,useEffect} from 'react'
import axios from 'axios'

import './coin.css'
import { Line } from 'react-chartjs-2';


const Coin = ({name,id,image,symbol,price,volume,currncySelected,priceChange}) => {
    const [dataDate,setDataDate] = useState([])
    const [priceData,setPriceData] = useState([])

    var d = new Date();
    const dateFormat = (unix)=>{
        var date = new Date(unix*1000)
        var hours = date.getHours()
        var min = date.getMinutes()
        var sec = date.getSeconds()
        var day = date.getDate()
        var month = date.getMonth()
        var year = date.getFullYear()
        return (`${day}/${month}/${year} ${hours}:${min}:${sec}`)
    }

    useEffect(()=>{
      const getGraph = async (id) => {
        try{
          const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currncySelected}&days=1`) 
          var graphDate = []
          var graphValue = [] 
          for(let i of response.data.prices){
            graphDate.push(i[0])
            graphValue.push(i[1])
          }
          console.log('---------------------------------------')
          setDataDate(graphDate)
          setPriceData(graphValue)
        }
        catch (e) {
          console.log(e)
        }
      }
      getGraph(id)
    },[])


    const data = {
        labels: dataDate,
        datasets: [
          {
            label: 'Price',
            data: priceData,
            fill: true,
            backgroundColor: priceChange > 0 ? '#125d1e':'#ff63844d' ,
            borderColor: priceChange > 0 ? '#229534':'#f45050',
          /*   pointBorderColor:'white',
            pointBackgroundColor:'white', */
            tension:0.1
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
        <div className = 'coin'>
            <img className = "coin__img" src= {image}  alt="crypto" />
            <div className = "coin__data">
                <a href={`https://www.coingecko.com/en/coins/${name.toLowerCase().replace(/\s+/g, '-')}`} className = "coin__name">{name} <br/>({symbol.toUpperCase()})</a>
                {/* <h1 className = "coin__name">{name} <br/>({symbol.toUpperCase()})</h1> */}
                <p className="coin__price">{currncySelected} {price.toLocaleString()}</p>
                <p className="coin__volume">Mkt Cap <br/>{currncySelected.toUpperCase()} {volume.toLocaleString()}</p>
                <p className = "coin__priceChange">24h change 
                    {priceChange > 0 ? <span className = "coin__priceChange--green"> +{priceChange.toFixed(2)}%</span>
                        :<span className = "coin__priceChange--red"> {priceChange.toFixed(2)}%</span>}
                </p>
            </div>
            <Line data={data} options={options}/>
            <div className="coin__updatetime">
                <p>Last update {d.toLocaleTimeString('en-GB')}</p>
                <p>{d.toLocaleDateString()}</p>
            </div> 
        </div>
    )
}

export default Coin
