import "./App.css";

function App() {
  return (
    <div className="App">
      <head>
        <title>Socket.IO chat</title>
      </head>
      <body>
        <ul id="messages"></ul>
        <form id="form" action="">
          <input id="input" autocomplete="off" />
          <button>Send</button>
        </form>
      </body>
    </div>
  );
}

export default App;
