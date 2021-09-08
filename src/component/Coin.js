import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Loader from "react-loader-spinner";

import './coin.css'
import { Line } from 'react-chartjs-2';


const Coin = ({name,id,image,symbol,price,volume,currncySelected,priceChange,searchAll}) => {
    const [dateData,setDateData] = useState([])
    const [priceData,setPriceData] = useState([])
    const [load,setLoad] = useState(false)
    var d = new Date();
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
          setLoad(true)
          console.log(searchAll)
          var response
          if(searchAll.length !== 0){
            response = await axios.get(`https://api.coingecko.com/api/v3/coins/${searchAll}/market_chart?vs_currency=${currncySelected}&days=1`) 
          }
          else{
            response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currncySelected}&days=1`) 
          }
          var graphDate = []
          var graphValue = [] 
          for(let i of response.data.prices){
            graphDate.push(dateFormat(i[0]))
            graphValue.push(i[1])
          }
          setDateData(graphDate)
          setPriceData(graphValue)
          setLoad(false)
        }
        catch (e) {
          console.log(e)
        }
      }
      getGraph(id)
    },[id,searchAll,currncySelected])


    const data = {
        labels: dateData,
        datasets: [
          {
            label: 'Price',
            data: priceData,
            fill: true,
            backgroundColor: priceChange > 0 ? '#125d1e':'#ff63844d' , 
            borderColor: priceChange > 0 ? '#26bf3e':'#f45050',  /* #229534 */
            pointRadius:2,
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
                <p className="coin__price">{currncySelected} {price.toLocaleString()}</p>
                <p className="coin__volume">Mkt Cap <br/>{currncySelected.toUpperCase()} {volume.toLocaleString()}</p>
                <p className = "coin__priceChange" style = {{backgroundColor:priceChange > 0 ? '#1b7642' : '#722727'}}>24h change 
                    <br />
                    {priceChange > 0 ? <span className = "coin__priceChange--green"> +{priceChange.toFixed(2)}%</span>
                        :<span className = "coin__priceChange--red"> {priceChange.toFixed(2)}%</span>}
                </p>
            </div>
            {load ? 
              <div className = 'coin__loadContainer'>
                <Loader className = 'coin--load' type="ThreeDots" color="#00BFFF" height={80} width={100} /> 
              </div>
            : <Line className = 'coin__chart' data={data} options={options}/>} 
            <div className="coin__updatetime">
                <p>Last update {d.toLocaleTimeString('en-GB')}</p>
                <p>{d.toLocaleDateString()}</p>
            </div> 
        </div>
    )
}

export default Coin
