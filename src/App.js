import React, { useEffect, useState } from 'react';
import ArticleList from './components/articleList/ArticleList';
import Header from './components/header/Header';
import SearchForm from './components/searchForm/SearchForm';

function App() {

  const [ category, updateCategory ] = useState("");
  const [ news, updateNews ] = useState([]);

  useEffect(() => {
    const consultAPI = async () => {

      const key = "7e19d1d82d784f0e96c716f7cd5b0333"
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${key}`;

      const response = await fetch(url);
      const news = await response.json();

      updateNews(news.articles);
    }
    consultAPI();
  }, [category])
 

  return (
    <>
      <Header 
        title="Search news"
      />  

      <div className="container white"> 
        <SearchForm
          updateCategory={updateCategory}
        />

        <ArticleList 
          news={news}
        />

      </div>
    </>
  );
}

export default App;


