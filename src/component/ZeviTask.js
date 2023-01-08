import React, { useState } from 'react'
import {Link,Outlet} from "react-router-dom"
import "./ZeviTask.css"
import SearchIcon from '@mui/icons-material/Search';
import trend1 from "./images/trend1.jfif"
import trend2 from "./images/trend2.avif"
import trend3 from "./images/trend3.jpg"
import trend4 from "./images/trend4.jpg"
import trend5 from "./images/trend5.webp"


const trends=[
  {
    id:1,
    imgData:trend1,
    imgContent:"Shirt with puffed sleeves",
  },
  {
    id:2,
    imgData:trend2,
    imgContent:"Linen jumpsuit",
  },
  {
    id:3,
    imgData:trend3,
    imgContent:"White format suit",
  },
  {
    id:4,
    imgData:trend4,
    imgContent:"Pattern dresses",
  },
  {
    id:5,
    imgData:trend5,
    imgContent:"Leather shirt dress",
  },

]

const ZeviTask = () => {
  const[popup,setPopup]=useState(false)
  const[search,setSearch]=useState('')

  function boxOpen(){
    setPopup(!popup)
  }

  const searchItem=trends.filter((item)=>{
    if(search===""){
      return item
    }
    else if(item.imgContent.toLocaleLowerCase().includes(search.toLowerCase())){
      return item
    }
  })

  return (
    <>
    <div className="clothes">
    <div className="searchInputs">
    <input type="text" 
    placeholder='Search'
    onClick={boxOpen}
    onChange={event=>setSearch(event.target.value)}
    />
    <div className="searchIcon">
        <SearchIcon  onClick={boxOpen}/>
    </div>
    </div>

    {
      popup?
    <div className="shoppingBox">
      <h3 className="h3-1">Latest Trends</h3>
      <div className="shoppingBoxContent">
      {
        searchItem.map((ele)=>{
          return(
      <div className="trends" key={ele.id}>
        <Link to={`/${ele.id}`}>
        <img src={ele.imgData} alt="img" className=''></img>
        </Link>
        <Outlet />
        <div className="imagesData">{ele.imgContent}</div>
      </div>   
          )
        })
      }
      </div>
    <h3 className='h3-2'>Popular suggestions</h3>
    <h5 className='h5-1'>Striped shirt dress</h5>
    <h5>Satin shirts</h5>
    <h5>Denim jumpsuit</h5>
    <h5>Leather dresses</h5>
    <h5>Solid tshirts</h5>
    </div>:""
    }
    </div>
    </>
  )
}

export default ZeviTask
// export{trends}