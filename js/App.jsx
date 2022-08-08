// function MyApp() {
//   return <h1>Hello, world!</h1>;
// }

// const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container);
// root.render(<MyApp />);


// import * as React from 'react';


// now I have a component that renders something
// class App extends React.Component {
//   constructor(props) {
//     // when new app created, inside here always runs
//     // super the props
//     super(props)
//     this.state = {
//       name: "Adam",
//     }
//   }
//   doSomething = (e) => {
//     // only way to change state
//     this.setState({
//       name: e.target.value,
//     })
//   }
//   render() {  
//     return (
//       <main>
//         Hello, {this.state.name}
//         <br></br>
//         <input onChange={this.doSomething} />
//       </main>
//     );
//   }
// }

// const container = document.getElementById("root");

// const root = ReactDOM.createRoot(container);

// root.render(
//     <App />
// );

// import logSomething from './app.js';

class App extends React.Component {
  constructor(props) {
    // when new app created, inside here always runs
    // super the props
    super(props)
    this.state = {
      name: null,
      min: null,
      max: null,
      avg: null,
    }
  }
  doSomething = (e) => {
    e.preventDefault();
    // only way to change state
    this.setState({
      name: e.target.name.value,
      min: e.target.min.value,
      max: e.target.max.value,
      avg: e.target.avg.value,
    })
  }
  render() {
    // logSomething();
    return (
      <main>
        <span>{this.state.name} {this.state.min} {this.state.max} {this.state.avg}</span>
        <br></br>
        <form onSubmit={this.doSomething}>
          <label>
            Name
            <input type="text" name="name" />
          </label>
          <label>
            Min
            <input type="text" name="min" />
          </label>
          <label>
            Max
            <input type="text" name="max" />
          </label>
          <label>
            Avg
            <input type="text" name="avg" />
          </label>
          <input type="submit" />
        </form>
      </main>
    );
  }
}

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

root.render(
    <App />
);