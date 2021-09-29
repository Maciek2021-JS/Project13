import React, { Component } from "react";
import "./App.css";

const data = [
  { id: 1, title: "Wiadomość numer 1", body: "Zawartość wiadomości numer1..." },
  { id: 2, title: "Wiadomość numer 2", body: "Zawartość wiadomości numer2..." },
];

setInterval(() => {
  const index = data.length + 1;
  data.push({
    id: index,
    title: `Wiadomość numer ${index}`,
    body: `Zawartość wiadomości numer ${index}...`,
  });
}, 4000);

class App extends Component {
  state = {
    comments: [...data],
  };

  getData = () => {
    if (this.state.comments.length !== data.length) {
      console.log("aktualizacja");
      this.setState({
        comments: [...data],
      });
    } else {
      console.log("dane takie same - nie aktualizuje");
    }
  };

  componentDidMount() {
    this.idI = setInterval(this.getData, 5000);
  }

  componentWillUmmount() {
    clearInterval(this.idI);
  }

  render() {
    const comments = this.state.comments.map((comment) => (
      <div key={comment.id}>
        <h4>{comment.title}</h4>
        <div>{comment.body}</div>
      </div>
    ));
    return <div className="App">{comments.reverse()}</div>;
  }
}

export default App;
