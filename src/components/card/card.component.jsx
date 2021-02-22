import React from "react";
import "./card.styles.js";
import {CardContainer } from "./card.styles";

export const Card = (props) => (
    <CardContainer>
    
        <img src={`https://robohash.org/${props.monster.id}?set=set1&size=180x180`} alt="monster"/>
        <h2>
            {props.monster.name}
        </h2>
        <p>{props.monster.email}</p>
    </CardContainer>
)