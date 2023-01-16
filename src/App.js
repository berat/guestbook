import { useState } from "react";
// components
import { Form, Card } from "./components/";

function App() {
  const [comments, setComments] = useState([]);

  return (
    <div className="App">
      <Form setComments={setComments} />
      <Card comments={comments} setComments={setComments} />
    </div>
  );
}

export default App;
