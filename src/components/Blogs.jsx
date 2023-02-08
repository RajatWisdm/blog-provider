import React , { useEffect, useState } from 'react'
import {useLocation} from "react-router-dom";

function Blogs() {
  // const apiKey = "fca4e5674bcf44bfb3e9acdfcff985f6"
  const apiKey = "40a94da478d1417fa4aa251bea430459"
  const search = useLocation().search;
  const topic = new URLSearchParams(search).get('topic');
  const [blogs, setBlogs] = useState([])
    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch(`https://newsapi.org/v2/everything?q=${topic}&sortBy=publishedAt&apiKey=${apiKey}`)
            .then(response => response.json())
            .then(data => {setBlogs(data["articles"])
            console.log("blogs", blogs)
            });
    }, []);
  
  return (
    <div>
      <h1>Here are the results:</h1>
      <div id="blogs-container" className="my-10">
        {
          blogs.map((blog)=>
            <div className="blog-box">
              <img className="blog-img" src={blog["urlToImage"]} alt=""/>
              <div className="blog-text">
                <a href={blog["url"]} target="_blank" rel="noreferrer" className="cursor-pointer blog-heading"><h2>{blog["title"]}</h2></a>
                <p>{blog["content"]}</p>
              </div>
              <div className="plaga-btn">
                <a href="https://www.duplichecker.com/" target="_blank" rel="noreferrer"><button className="btn btn-warning mx-4">Check Plagiarism</button></a>
                <a href="https://www.plagiarismremover.net/" target="_blank" rel="noreferrer"><button className="btn btn-primary">Remove Plagiarism</button></a>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Blogs