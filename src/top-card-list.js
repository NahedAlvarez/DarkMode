import React from 'react'
import Card from './card.js'

const cardListData = [
  {
    username: '@nahedDavid',
    id: 1,
    followers: '148',
    todayFollowers: 1,
    icon: 'images/icon-facebook.svg',
    name: 'facebook'
  },
  {
    username: '@nahedDavid',
    id: 2,
    followers: '147',
    todayFollowers: 2,
    icon: 'images/icon-twitter.svg',
    name: 'twitter'
  },
  {
    username: '@nahedDavid',
    id: 3,
    followers: '146',
    todayFollowers: 3,
    icon: 'images/icon-instagram.svg',
    name: 'instagram'
  },
  {
    username: '@nahedDavid',
    id: 4,
    followers: '145',
    todayFollowers: 4,
    icon: 'images/icon-youtube.svg',
    name: 'youtube'
  }
]
   
function TopCardList(){
    return(
        <section className="top-cards">
        <div className="wrapper">
          <div className="grid">
            {
                cardListData.map((cardData)=> <Card key={cardData.id} {...cardData} />)
            }
          </div>
        </div>
      </section>
    )
}
export default TopCardList