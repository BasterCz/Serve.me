import React, { useState } from "react";
import {FaStar} from "react-icons/fa"
import Firetest from "./testFirebase";
const Rating = () => {
  const[hoverValue, setHoverValue] = useState(0);
  const[currentValue, setCurrentValue] = useState(0);
  const[finalValue, setFinalValue] = useState<number>(0)
  const[review, setReview] = useState<undefined | string>(undefined)
  const[canSend, setCanSend] = useState(false);


  const handleClick = (value : number) => {
    setCurrentValue(value)
  }
  const handleHover = (value : number) => {
    setHoverValue(value)
  }

  const useRating = async (event : any) => {
    event.preventDefault()
    setReview(event.target.reviewText.value)
    setFinalValue(currentValue)
    setCanSend(true)
  }

  return(
    <>
    <form onSubmit={useRating}>
      <h2>Zanechte hodnocení:</h2>
      <div>
        {[...Array(5)].map((_, index) => {
          return(
          <FaStar
          key={index}
          size={100}
          style={{
            cursor: "pointer"
          }}
          color={(hoverValue || currentValue) > index ? "FFBA5A" : "A9A9A9"}
          onClick={() => handleClick(index + 1)}
          onMouseOver={() => handleHover(index + 1)}
          onMouseLeave={() => setHoverValue(0)}
          />
          )
        })}
      </div>
      <div>
        <input
        placeholder="Máte něco na srdíčku?"
        id="reviewText"
        name="reviewText"
        type="text"
        />
        <button type="submit">Odeslat</button>
      </div>
    </form>
    {canSend && <Firetest stars={finalValue} review={review}/>}
    </>
  )
}

export default Rating
