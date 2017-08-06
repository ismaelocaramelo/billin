/* eslint-disable */
import React, { Component} from 'react';


var styles = {
    cards: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    card: {
        flexGrow: 1,
        textAlign: 'center',
        lineHeight: '1.8',
        boxSizing: 'border-box'
    },
    cardDescription:{
        fontSizeAdjust: 3
    }

}
    


let trimDescription = (text) => {
    let lengthToTrim = 100;
    let trimmedString = text.substring(0, lengthToTrim);
    return trimmedString + '...';
}

const CardItem = ({showAuthor, data}) =>{ 
    const cardItems = data.map(e => {
        return (
            <div style={styles.card} key={e.id}>
                <div>
                    <h3> <button onClick={() => { showAuthor(e.author)}}>{e.author}</button> </h3>
                    <p style={styles.cardDescription}>{trimDescription(e.excerpt)}</p>
                    <h5>{e.title}</h5>
                </div>
            </div>
        )
    })
   
    return (
        <div style={styles.cards}>
            {cardItems}
        </div>
    )
}

export default CardItem;

