import React from 'react';
import './Home.css';
import Nabvar from '../Navbar/Navbar';
import Card from '../Card/Card';

function Home() {
  return (
      <div>
        <Nabvar/>
        <section class="jumbotron text-center">
            <div class="container">
            <h1 class="jumbotron-heading">Album example</h1>
            <p class="lead text-muted">In this page you can public the Posts about the topic whatever, only in the cours that you be suscrito!</p>
            <p>
                <a href="#" class="btn btn-primary my-2">Main call to action</a>
                <a href="#" class="btn btn-secondary my-2">Secondary action</a>
            </p>
            </div>
        </section>
        <div className="album py-5 bg-light">
            <Card/>
        </div>
      </div>
  );
}

export default Home;