import React from 'react';
import { Grid } from './card-list.styles.js';
import { Card } from '../card/card.component.jsx';
export const CardList = props=>{
return <Grid>
    {props.monsters.map(monster=>
    <Card key={monster.id} monster={monster}/>
    )}
    </Grid>
};