import "./App.css";
import { useState, useEffect } from "react";
import { getBooks, saveNewClicked, saveClicked, deleteClicked } from "./functions";
import NotificationModal from "./components/notificationModal";

const App = () => {

  const [books, setBooks] = useState();
  const [selectedBook, setSelectedBook] = useState();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [responseData, setResponseData] = useState();

  // For notification modal
  const [notificationModalVisible, setNotificationModalVisible] = useState(false);
  const [notificationModalTitle, setNotificationModalTitle] = useState("");
  const [notificationModalMsg, setNotificationModalMsg] = useState("");

  useEffect(() => {
    // Get books when page is loaded
    getBooks(setBooks, setResponseData);
  }, [])

  useEffect(() => {
    if (responseData && responseData.status !== 200) {
      setNotificationModalTitle("Error!");
      if (responseData.response) {
        setNotificationModalMsg(responseData.response.data.error);
      } else {
        setNotificationModalMsg(responseData.message);
      }
      setNotificationModalVisible(true);
    } else {
      getBooks(setBooks, setResponseData);
    }
  }, [responseData])

  useEffect(() => {
    if (selectedBook) {
      setTitle(selectedBook.title);
      setAuthor(selectedBook.author);
      setDescription(selectedBook.description);
    }
  }, [selectedBook])

  const clearSelection = () => {
    setSelectedBook(null);
    setTitle("");
    setAuthor("");
    setDescription("");
  }

  const bookView = () => (
    books.map((item, index) => {
      return <option key={index} value={item._id}>{item.title}</option>
    })
  );

  const selectionChanged = (e) => {
    if (books && books.length) {
      setSelectedBook(books.find((book) => book._id === e.target.value));
    }
  }; 


  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <main className="App-main">
        <div>
          <p>
            Title
            <br /><input placeholder="required" value={title} onChange={(e) => setTitle(e.target.value)}/>
          </p>
          <p>
            Author
            <br /><input placeholder="required" value={author} onChange={(e) => setAuthor(e.target.value)}/>
          </p>
          <p>
            Description
            <br /><input placeholder="required" value={description} onChange={(e) => setDescription(e.target.value)}/>
          </p>
          <button onClick={() => saveNewClicked(
            title,
            author,
            description,
            setResponseData
          )}>Save New</button>
          <button disabled={!selectedBook} onClick={() => saveClicked(
            selectedBook ? selectedBook._id : undefined,
            title,
            author,
            description,
            setResponseData,
            clearSelection
          )}>Save</button>
          <button disabled={!selectedBook} onClick={() => deleteClicked(
            selectedBook ? selectedBook._id : undefined,
            setResponseData,
            clearSelection
          )}>Delete</button>
        </div>
        
        <NotificationModal
          title={notificationModalTitle}
          setVisible={setNotificationModalVisible}
          visible={notificationModalVisible}
          message={notificationModalMsg} 
        />
      </main>
      <aside>
        <p>
        Book list
          <br /><select className="BookList" size="10" onClick={(e) => selectionChanged(e)} onChange={(e) => selectionChanged(e)}>
            {books && books.length > 0 ? bookView() : <option value="0">No books found</option>}
          </select>
        </p>
      </aside>
    </div>
  );
}

export default App;
