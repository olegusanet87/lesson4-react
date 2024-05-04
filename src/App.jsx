import { useState, useEffect } from 'react';
import { useRef } from 'react';
import reactLogo from './assets/react.svg';
import axios from 'axios';
import ArticleList from './components/ArticleList/ArticleList';
import SearchForm from './components/SearchForm/SearchForm';
import Player from './components/Player/Player';
import { FetchArticlesWithTopic } from './articles-api';
import viteLogo from '/vite.svg';
import './App.css';

export default function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async ({ topic }) => {
    try {
      setArticles([]);
      setError(false);
      setLoading(true);
      const data = await FetchArticlesWithTopic(topic);
      setArticles(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div>
        <h1>Latest articles</h1>
        <SearchForm onSearch={handleSearch} />
        {loading && <p>Loading data, please wait...</p>}
        {error && (
          <p>Whoops, something went wrong! Please try reloading this page!</p>
        )}
        {articles.length > 0 && <ArticleList items={articles} />}
        <Player source="<http://media.w3.org/2010/05/sintel/trailer.mp4>" />
      </div>
    </>
  );
}
