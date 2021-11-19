import React from 'react';
import './Article.css';

const Article = ({ news }) => {

    const { urlToImage, url, title, description, source  } = news;

    const image = urlToImage ? (
    <>
        <img src={urlToImage} alt={title} />
        <span className="card-title">{source.name}</span>
    </>
    ) : null;

    return (
               <li className="cardItem">
               {image}
                <div className="cardContent">
                    <h3 className="cardTitle">{title}</h3>
                    <p className="cardDesc">{description}</p>
                </div>
                <div className="cardAction">
                   <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cardLink"
                   >See All News</a> 
                </div>
               </li>
    );
}

export default Article;