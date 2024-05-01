import React from 'react'
import './News.css'
import { useSearchParams } from 'react-router-dom'
const NewsFull = () => {
    const [search]=useSearchParams()
    console.log(search.get('id'))
  return (
    <>
    <div className='upperDiv'>
       <div className="card" style={{width: '100%'}}>
  <div className="card-body">
    <h1 className="card-title">
    2024 Masters TV schedule, coverage, live stream, channel, how to watch online, streaming, golf tee times 
    </h1>
    <h4 className="card-subtitle mb-2 text-body-secondary">
    How to watch every memorable moment of the 2024 Masters on TV or streaming live
    </h4>
    <img src="https://media.kare11.com/assets/KARE/images/fa395bd6-0986-4166-88ad-68b356890371/fa395bd6-0986-4166-88ad-68b356890371_1140x641.jpg" className="card-img-top" alt="..." style={{height:'400px'}}/>

    <p>
    The most wonderful time of the golf season has arrived once 
    again as the beauty of April surrounds Augusta National 
    Golf Club this week. The 2024 Masters is a star-studded affair 
    with a loaded field featuring the best golfers in the world. 
    Jon Rahm is struggling early in his quest to defend the green jacket,
     while Scottie Scheffler entered as the favorite and started out on fire
      through his first 18 holes, shooting arguably the best round of the opening day.
    </p>
  </div>
</div>
 </div>
    </>
  )
}

export default NewsFull