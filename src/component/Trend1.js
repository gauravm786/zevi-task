import React, { useState } from 'react'
import "./trend.css"

import clothes1 from "./images/trend1.jfif"
import clothes2 from "./images/trend2.avif"
import clothes3 from "./images/trend3.jpg"
import clothes4 from "./images/trend4.jpg"
import clothes5 from "./images/trend5.webp"
import clothes6 from "./images/trend6.jpg"
import clothes7 from "./images/trend7.jpg"
import clothes8 from "./images/trend8.avif"

import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';

const clothes=[
  {
    id:1,
    clothesImage:clothes1,
    clothesName:"Shirt with puffed sleeves",
    mrp:"Rs.599",
    discount:"Rs.549",
    stars:"⭐⭐⭐⭐(210)" ,
    heartButton:<FavoriteBorderIcon />
  },
  {
    id:2,
    clothesImage:clothes2,
    clothesName:"Linen jumpsuit",
    mrp:"Rs.999",
    discount:"Rs.749",
    stars:"⭐⭐⭐⭐(210)" ,
    heartButton:<FavoriteBorderIcon />
  },
  {
    id:3,
    clothesImage:clothes3,
    clothesName:"White format suit",
    mrp:"Rs.899",
    discount:"Rs.849",
    stars:"⭐⭐⭐⭐(210)",
    heartButton:<FavoriteBorderIcon /> 
  },
  {
    id:4,
    clothesImage:clothes4,
    clothesName:"Pattern dresses",
    mrp:"Rs.650",
    discount:"Rs.549",
    stars:"⭐⭐⭐⭐(210)",
    heartButton:<FavoriteBorderIcon /> 
  },
  {
    id:5,
    clothesImage:clothes5,
    clothesName:"Leather shirt dress",
    mrp:"Rs.599",
    discount:"Rs.549",
    stars:"⭐⭐⭐⭐(210)",
    heartButton:<FavoriteBorderIcon /> 
  },
  {
    id:6,
    clothesImage:clothes6,
    clothesName:"Round neck cotton Tee",
    mrp:"Rs.999",
    discount:"Rs.749",
    stars:"⭐⭐⭐⭐(210)",
    heartButton:<FavoriteBorderIcon /> 
  },
  {
    id:7,
    clothesImage:clothes7,
    clothesName:"High waist trousers",
    mrp:"Rs.899",
    discount:"Rs.849",
    stars:"⭐⭐⭐⭐(210)",
    heartButton:<FavoriteBorderIcon /> 
  },
  {
    id:8,
    clothesImage:clothes8,
    clothesName:"satin jumpsuit",
    mrp:"Rs.650",
    discount:"Rs.549",
    stars:"⭐⭐⭐⭐(210)",
    heartButton:<FavoriteBorderIcon /> 
  }
]



const Trend1 = () => {
  const[heart,setHeart]=useState('')
  const[search,setSearch]=useState('')

  function ChangeHeart(){
      setHeart(!heart)
  }

  const searchItem=clothes.filter((item)=>{
    if(search===""){
      return item
    }
    else if(item.clothesName.toLocaleLowerCase().includes(search.toLowerCase())){
      return item
    }
  })
  
  return (
    <>
    <div className="page">
    <div className="sidebar">
      <h2>Search Results</h2>
      <div className="accordion">
        <div className="accordionBox">
          <div className="accordionTab">
            <h3>BRAND</h3>
            <p><KeyboardArrowDownIcon /></p>
          </div>
          <div className="accordion-content">
          <FormGroup>
      <FormControlLabel sx={{marginTop:"-0.5rem"}} control={<Checkbox />}
       label={<Typography sx={{color:"black"}}>Mango</Typography>} 
       />
      <FormControlLabel sx={{marginTop:"-0.5rem"}} control={<Checkbox />} 
       label={<Typography sx={{color:"black"}}>H&M</Typography>} 
       />
    </FormGroup>
          </div>
        </div>
        <div className="accordionBox">
          <div className="accordionTab">
            <h3>PRICE RANGE</h3>
            <p><KeyboardArrowDownIcon /></p>
          </div>
          <div className="accordion-content">
          <FormGroup>
      <FormControlLabel sx={{marginTop:"-0.5rem"}} control={<Checkbox />}
       label={<Typography sx={{color:"black"}}>Under 500</Typography>} 
       />
      <FormControlLabel sx={{marginTop:"-0.5rem"}} control={<Checkbox />} 
       label={<Typography sx={{color:"black"}}>1000 To 3000</Typography>} 
       />
    </FormGroup>
          </div>
        </div>
        <div className="ratingBox">
          <div className="ratingTab">
            <h3>RATINGS</h3>
            <p><KeyboardArrowDownIcon /></p>
          </div>
          <div className="accordion-content">
          <FormGroup>
      <FormControlLabel sx={{marginTop:"-0.5rem"}} control={<Checkbox />}
       label={<Typography sx={{color:"black"}}>
        <StarIcon sx={{color:"yellow",marginTop:"0.4rem"}}/>
        <StarIcon sx={{color:"yellow",marginTop:"0.4rem"}}/>
        <StarIcon sx={{color:"yellow",marginTop:"0.4rem"}}/>
        <StarIcon sx={{color:"yellow",marginTop:"0.4rem"}}/>
        <StarIcon sx={{color:"yellow",marginTop:"0.4rem"}}/>
       </Typography>} 
       />
      <FormControlLabel sx={{marginTop:"-0.5rem"}} control={<Checkbox />} 
       label={<Typography sx={{color:"black"}}>
        <StarIcon sx={{color:"yellow",marginTop:"0.4rem"}}/>
        <StarIcon sx={{color:"yellow",marginTop:"0.4rem"}}/>
        <StarIcon sx={{color:"yellow",marginTop:"0.4rem"}}/>
        <StarIcon sx={{color:"yellow",marginTop:"0.4rem"}}/>
        <StarIcon sx={{color:"grey",marginTop:"0.4rem"}}/>
       </Typography>} 
       />
      <FormControlLabel sx={{marginTop:"-0.5rem"}} control={<Checkbox />} 
       label={<Typography sx={{color:"black"}}>
        <StarIcon sx={{color:"yellow",marginTop:"0.4rem"}}/>
        <StarIcon sx={{color:"yellow",marginTop:"0.4rem"}}/>
        <StarIcon sx={{color:"yellow",marginTop:"0.4rem"}}/>
        <StarIcon sx={{color:"grey",marginTop:"0.4rem"}}/>
        <StarIcon sx={{color:"grey",marginTop:"0.4rem"}}/>
       </Typography>} 
       />
      <FormControlLabel sx={{marginTop:"-0.5rem"}} control={<Checkbox />} 
       label={<Typography sx={{color:"black"}}>
        <StarIcon sx={{color:"yellow",marginTop:"0.4rem"}}/>
        <StarIcon sx={{color:"yellow",marginTop:"0.4rem"}}/>
        <StarIcon sx={{color:"grey",marginTop:"0.4rem"}}/>
        <StarIcon sx={{color:"grey",marginTop:"0.4rem"}}/>
        <StarIcon sx={{color:"grey",marginTop:"0.4rem"}}/>
       </Typography>} 
       />
      <FormControlLabel sx={{marginTop:"-0.5rem"}} control={<Checkbox />} 
       label={<Typography sx={{color:"black"}}>
        <StarIcon sx={{color:"yellow",marginTop:"0.4rem"}}/>
        <StarIcon sx={{color:"grey",marginTop:"0.4rem"}}/>
        <StarIcon sx={{color:"grey",marginTop:"0.4rem"}}/>
        <StarIcon sx={{color:"grey",marginTop:"0.4rem"}}/>
        <StarIcon sx={{color:"grey",marginTop:"0.4rem"}}/>
       </Typography>} 
       />
    </FormGroup>
          </div>
        </div>
        
      </div>
    </div>
    <div className="mainbar">
    <div className="searchInputs">
    <input type="text" 
    placeholder='Search'
    onChange={event=>setSearch(event.target.value)}
    />
    <div className="searchIcon">
        <SearchIcon />
    </div>
    </div>
    <div className="mainbarBox">
            {
        searchItem.map((ele)=>{
          return(
            <div className="mainbarCard" key={ele.id}>
              <div className="mainbarCardImg">
                <img src={ele.clothesImage} alt="clothes" />
                <p>View Product</p>
                <h6 onClick={ChangeHeart}>
                  {
                    heart?<FavoriteIcon sx={{color:"red"}} /> : <FavoriteBorderIcon />  
                  }
                </h6>
              </div>
                <h3>{ele.clothesName}</h3>
                <h3><span>{ele.mrp}</span> <span>{ele.discount}</span></h3>
                <h4>{ele.stars}</h4>
            </div>
                )
        })
      }
      
    </div>
    </div>
    </div>
    </>
  )
}

export default Trend1