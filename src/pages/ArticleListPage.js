import React from 'react';
import articleContent from './Article-content';

import ArticlesList from '../components/ArticlesList'


const ArticleListPage = () => (

<>
    <h1>Articles </h1>

    {/* here we populate the list of articles from the articlelist component */}

    <ArticlesList articles= { articleContent }>

    </ArticlesList>


</>

);

export default ArticleListPage