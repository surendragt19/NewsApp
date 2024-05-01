import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import './News.css'
import Navbar from './Navbar';




const News = () => {
    const [myNews,setNews]=useState([])

    const dataApi=async ()=>{
        let res=await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=91635e21749f4c1484415d18d600ebe8')
        let data=await res.json();
        setNews(data.articles)
    }
    console.log(myNews)
    useEffect(()=>{
        dataApi()
    },[])
  return (
    <>
    <Navbar/>
     <div className='main_css'>
    {
        myNews.map((currentElement)=>{
            return (
                <>
               
                <div className="card" style={{width: '350px',height:'auto',marginTop:'2rem'}}>
  <img src={currentElement.urlToImage==null ? "https://media.kare11.com/assets/KARE/images/fa395bd6-0986-4166-88ad-68b356890371/fa395bd6-0986-4166-88ad-68b356890371_1140x641.jpg" : currentElement.urlToImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><b>{currentElement.author ==null ? "Title Not Avilable" : currentElement.author}</b></h5>
    <p className="card-text">{currentElement.title}</p>
    <a href={currentElement.url} target='_blank' className="btn btn-primary">Read More</a>
  </div>
</div>

                </>
            )
        })
    }
   </div>
        
    </>
  )
}

export default News

// 91635e21749f4c1484415d18d600ebe8