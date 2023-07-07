import { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    posts: []
  }

  async componentDidMount() {
    await fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => this.setState({ posts }));
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="App">
        {posts.map(p => (
          <div key={p.id}>
            <h1>{p.title}</h1>
            <p>{p.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
