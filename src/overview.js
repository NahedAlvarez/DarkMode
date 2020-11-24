import React from 'react'
import CardSmall from './card-small'
import './overview.css' 
const CardSmallList = [
    {
        icon: 'icon-facebook.svg',
        pageViews: '87',
        growth: 1,
        key: 1
    },
    {
        icon: 'images/icon-twitter.svg',
        pageViews: '3',
        growth: 5,
        key: 2
    },    
    {
        icon: 'images/icon-instagram.svg',
        pageViews: '3',
        growth: 12,
        key: 3
    },
    {
        icon: 'images/icon-youtube.svg',
        pageViews: '4',
        growth: 1,
        key: 4
    }
]

function Overview(){
    return(
        <section className="overview">
        <div className="wrapper">
          <h2>Overview - Today</h2>
          <div className="grid">
              {
                CardSmallList.map(({icon,pageViews,growth,key})=>
                    (<CardSmall 
                     icon = {icon}    
                     pageViews = {pageViews} 
                     growth = {growth} 
                     key = {key} 
                    />)
                )
              }
          </div>
        </div>
      </section>   
    )
}
export default Overview