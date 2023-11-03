import "./App.css";
import Goal from "./components/Goal";
import Header from "./components/Header";

function App() {
  return (
    <main>
      <Header
        image={{
          src: "https://images.unsplash.com/photo-1698570493404-ee2c4f1fc498?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "My goals",
        }}
      >
        <h1>Your Goals</h1>
      </Header>
      <Goal title="Learn TS">
        <p>Learning from scratch</p>
      </Goal>
    </main>
  );
}

export default App;
