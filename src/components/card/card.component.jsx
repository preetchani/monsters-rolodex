import React from 'react'
import { Wrapper } from './card.styles';
export const Card =(props)=>{
return <Wrapper>
    <img src={`https://robohash.org/${props.monster.id}?set=set1&size=180x180`} alt="monsters" />
    <h2 key={props.monster.id}>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
</Wrapper>
};