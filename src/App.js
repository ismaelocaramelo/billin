import React, { Component } from 'react';
import request from './request';
import { ARTICLES_QUERY } from './queries';
import CardItem from './components/cardItem';


class App extends Component {
  // definition
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  

  // lifecycle
  componentDidMount() {
    request(ARTICLES_QUERY).then(response => {
      this.setState({ articles: response.articles });
    });
  }

  handleAuthor(author){
    alert(author + ' also says Hello to you');
  }

  // Renders
  render() {
    return (this.state.articles.length === 0)? <h2>Cargando</h2> : 
      <div>
        <header>
          <div>
            <h1>Billin code challenge</h1>
            <p>Text for Billin <a title="Billin Cards" href="https://www.billin.net/">Billin</a> </p>
          </div>
        </header>
        <main>
          <div>
              <section>
                <CardItem showAuthor={this.handleAuthor} data = {this.state.articles}/>
              </section>
          </div>
        </main>
        
      </div>
  }
}

export default App;