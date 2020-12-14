import axios from "axios";

const API_URL = "http://localhost:5000";

export const sendRequest = (body, method) => {
    return axios({
      method: `${method}`,
      url: `${API_URL}/`,
      headers: {},
      data: body,
    });
};

export const getBooks = (setBooks) => {
    console.log("GET BOOKS");
    sendRequest(undefined,
    "GET").then((response) => {
        setBooks(response.data);
    }).catch((error) => {
        error.response ? 
            console.log(error.response.data) :
            console.log(error.message);
    });
};

export const saveClicked = (id, title, author, description) => {
    console.log("SAVE CLICKED");
    sendRequest({
        "id":id,
        "title":title,
        "author":author,
        "description":description
    }, 
    "PUT").then((response) => {
        console.log(response.status);
    }).catch((error) => {
        error.response ? 
            console.log(error.response.data) :
            console.log(error.message);
    });
};

export const saveNewClicked = (title, author, description) => {
    console.log("NEW CLICKED");
    sendRequest({
        "title":title,
        "author":author,
        "description":description
    }, 
    "POST").then((response) => {
        console.log(response.status);
    }).catch((error) => {
        error.response ? 
            console.log(error.response.data) :
            console.log(error.message);
    });
};

export const deleteClicked = (id) => {
    console.log("DELETE CLICKED");
    sendRequest({
        "id":id
    }, 
    "DELETE").then((response) => {
        console.log(response.status);
    }).catch((error) => {
        error.response ? 
            console.log(error.response.data) :
            console.log(error.message);
    });
};