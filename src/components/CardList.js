import React from "react";
import Card from './Card';
import './CardList.css'

const CardList=({robots}) =>
{
    const bots=robots.map(user=>{
    return <Card id={user.id} name={user.name} username={user.username} email={user.email}/>
    })
  return (
    <div className="list">
      {
        bots 
      }
    </div>
  );
}

export default CardList;