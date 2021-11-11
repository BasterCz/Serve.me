import React, { useState } from "react";
import {FaStar} from "react-icons/fa"
const Rating = () => {
  const[hoverValue, setHoverValue] = useState(0);
  const[currentValue, setCurrentValue] = useState(0);
  const[finalValue, setFinalValue] = useState<undefined | number>(undefined)
  const[review, setReview] = useState<undefined | string>(undefined)


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
    <div>{finalValue}</div>
    <div>{review}</div>
    </>
  )
}

export default Rating
