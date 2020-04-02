import React from 'react'
import PropTypes from 'prop-types'

import'./style.css';

export default function Card({ 
  handleClick,
  id,
  flipped,
  type,
  height, 
  width,
}){
  return (<div 
  className={`flip-container ${flipped ? 'flipped' : ''} `}
  style={{
    width, 
    height,
  }}
  onClick = {()=> handleClick(id)}
  >
    <div className='flipper'>
      <img alt=""
      style={{
        height, width
      }}
      className={flipped ? 'front': 'back'}
      src={flipped ? `/card_set/${type}.svg` : `/card_set/back.svg`}
      />
     </div>  
  </div>
  )
}

Card.propTypes = {
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  flipped: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,

}