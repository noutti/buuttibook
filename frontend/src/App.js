import './App.css';
import { useState, useEffect } from "react";
import { getBooks, saveNewClicked, saveClicked, deleteClicked } from "./functions";

const App = () => {

  const [books, setBooks] = useState();
  const [selectedBook, setSelectedBook] = useState();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    // getBooks(setBooks);
  }, [])

  const bookView = () => (
    books.map((item, index) => {
      return <option key={index} value={index}>{item.title}</option>
    })
  );


  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <main className="App-main">
        <div>
          <p>
            Title
            <br /><input placeholder="required" onChange={(e) => setTitle(e.target.value.trim())}/>
          </p>
          <p>
            Author
            <br /><input placeholder="required" onChange={(e) => setAuthor(e.target.value.trim())}/>
          </p>
          <p>
            Description
            <br /><input placeholder="required" onChange={(e) => setDescription(e.target.value.trim())}/>
          </p>
          <button onClick={() => saveNewClicked(
            title,
            author,
            description
          )}>Save New</button>
          <button disabled={!selectedBook} onClick={() => saveClicked(
            selectedBook ? selectedBook._id : undefined,
            title,
            author,
            description
          )}>Save</button>
          <button disabled={!selectedBook} onClick={() =>deleteClicked(
            selectedBook ? selectedBook._id : undefined,
          )}>Delete</button>
          <button disabled={!selectedBook} onClick={() => setBooks(getBooks())}>GETBOOKS</button>
        </div>
        <select size="5">
          {books ? bookView() : <option value="0">No books found</option>}
        </select>
      </main>
    </div>
  );
}

export default App;
