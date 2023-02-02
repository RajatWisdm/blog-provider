import React, { useEffect , useState } from 'react'

function Test() {
    const [blogs, setBlogs] = useState([])
    // useEffect(() => {
    //     const query = "india"
    //     console.log(query);
    //     // GET request using fetch inside useEffect React hook
    //     fetch(`https://newsapi.org/v2/everything?q=${query}&from=2022-12-31&sortBy=publishedAt&apiKey=40a94da478d1417fa4aa251bea430459`)
    //         .then(response => response.json())
    //         .then(data => {setBlogs(data["articles"])
    //         console.log(blogs)
    //         });
    // }, []);
  return (
    <div>
        {
            // blogs.map((blog)=>
            //     <div>
            //         <h1>{blog["title"]}</h1>
            //         <h3>{blog["content"]}</h3>
            //     </div>
            // )
        }
    </div>
  )
}

export default Test