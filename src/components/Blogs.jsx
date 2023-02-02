import React from 'react'
import {useLocation} from "react-router-dom";

function Blogs() {
  const search = useLocation().search;
  const topic = new URLSearchParams(search).get('topic');
  console.log("topic", topic)
  return (
    <div>Blogs</div>
  )
}

export default Blogs