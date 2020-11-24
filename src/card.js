import React from 'react'
import './card.css'

function Card({username,id,followers,todayFollowers,icon,name}) {
  const classCard = "card " + name;
  return (
        <article className= {classCard}>
        <p className="card-title">
          <img src= {icon} alt=""/>
          {username}
        </p>
        <p className="card-followers">
          <span className="card-followers-number">{followers}</span>
          <span className="card-followers-title">Followers</span>
        </p>
        <p className="card-today">
          <img src="images/icon-up.svg" alt=""/>
          {todayFollowers}
        </p>
      </article>
    )
}
export default Card