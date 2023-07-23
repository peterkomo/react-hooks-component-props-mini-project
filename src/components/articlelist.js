import React from 'react';
import Article from './Article';

// The ArticleList component takes a 'posts' prop, which is an array of article objects. It maps
// through the array and renders each article using the Article component, passing the required
// props to it.
const ArticleList = ({ posts }) => {
  return (
    <main>
      {posts.map((post, index) => (
        <Article
          key={index}
          title={post.title}
          date={post.date}
          preview={post.preview}
          minutesToRead={post.minutesToRead} // Minutes to Read prop for bonus feature
        />
      ))}
    </main>
  );
};

export default ArticleList;