import React from 'react';
import Article from '../article/Article';
import './ArticleList.css';

const ArticleList = ({ news }) => {

    return (
        <div className="container">
            <ul className="cardList">
            { news.map(news => (
                <Article 
                    key={news.url}
                    news={news}
                />
            )) }
            </ul>
        </div>
    );
}

export default ArticleList;