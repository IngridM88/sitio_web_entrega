import React from 'react';
import '../styles/pages/newsnevents.css'
const NewsEventsItem = (props) => {
const {title, subtitle, image, body} = props;

    return (
        <body>
        <main>
        <div className= "newsnevents container">
            <div id="newsnevents">
            <h3 >{title}</h3>
            <div id="subt"><h4>{subtitle}</h4></div>
            <div dangerouslySetInnerHTML={{__html:body}} />
            <div id="imgcontainer"><img src={image} /></div>
            <hr />
            </div>
        </div>
        </main>
        </body>
    );
}

export default NewsEventsItem;