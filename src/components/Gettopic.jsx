import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Gettopic() {
  const [topic, setTopic] = useState("")
  const navigate = useNavigate();
  const handleOnClick = () => navigate(`/blogs?topic=${topic}`)
  useEffect(() => {
    console.log(topic);
  }, [topic])
  
  return (
    <div id="gettopic">
        <h1>Ask About Your Topic Here</h1>
        <div className="topic-box">
            <input type="text" className="topic-input" placeholder="Enter your topic" onChange={(e)=>{setTopic(e.target.value)}}/>
            <button className="topic-btn btn btn-warning" onClick={handleOnClick}>Get Blogs</button>
        </div>
    </div>
  )
}

export default Gettopic