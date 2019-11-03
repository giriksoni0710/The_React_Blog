import React from 'react';

import { Link } from 'react-router-dom';

const ArticlesList = ({ articles }) => (

    <>
    {articles.map((article, key) => (
    
        // every article item on click responds to the particular article
        <Link class="article-list-item" key={key} to={`/article/${article.name}`}>
    
        {/* populating the list of articles */}
        
        <h3>{article.title}</h3>
    
        {/* displays 150 words from every article in articlelistpage for each article */}
        <p>{ article.content[0].substring(0, 150) }...</p>
    
        </Link>
    ))}
    </>
)


export default ArticlesList