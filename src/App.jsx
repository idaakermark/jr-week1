import { useState } from 'react'
import './App.css'
import me from "./assets/me.png"
import graduate from "./assets/graduate.jpeg"
import design from "./assets/design.webp"

const articles = [
  {
    title: 'About me',
    content: 'Hi! My name is Ida and im a frontend/app developer student. I dont have any experience of coding before starting this program more than doing a course in webbdevelopment 1. So far we have worked in Html, css, vanilla javascript, jQuery and github.',
    image: me,
  },
  {
    title: 'My idea',
    content: 'My idea for this project is to create a countdown for how many more days we have left of school until we graduate. It might help to stay motivated!',
    image: graduate,
  },
  {
    title: 'Design',
    content: 'I chose this design because it looks pretty beginner-friendly. Also, i want to try to make more colorful designs, lately its been alot of neutral colors.',
    image: design,
  }
];

const ArticleSwitch = () => {
  const [currentArticle, setCurrentArticle] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const handleSwitchClick = () => {
    setCurrentArticle((currentArticle + 1) % 3);
  };

  const handleShowAllClick = () => {
    setShowAll(!showAll);
  };

  return (
    <div>
      {showAll ? (
        <div>
          {articles.map((article, index) => (
            <div key={index}>
              <h2>{article.title}</h2>
              <p>{article.content}</p>
              <img src={article.image} alt="" />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h2>{articles[currentArticle].title}</h2>
          <p>{articles[currentArticle].content}</p>
          <div className='image-container'>
            <img src={articles[currentArticle].image} alt="" />
            </div>
        </div>
      )}
      <button onClick={handleSwitchClick}>Switch Article</button>
      <button onClick={handleShowAllClick}>Show All Articles</button>
    </div>
  );
};

export default ArticleSwitch;

