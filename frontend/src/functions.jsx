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

export const getBooks = (setBooks, setResponseData) => {
    sendRequest(undefined,
    "GET").then((response) => {
        setBooks(response.data);
    }).catch((error) => {
        setResponseData(error);
    });
};

export const saveClicked = (id, title, author, description, setResponseData, clearSelection) => {
    sendRequest({
        "id":id,
        "title":title.trim(),
        "author":author.trim(),
        "description":description.trim()
    }, 
    "PUT").then((response) => {
        setResponseData(response);
        clearSelection();
    }).catch((error) => {
        setResponseData(error);
    });
};

export const saveNewClicked = (title, author, description, setResponseData) => {
    sendRequest({
        "title":title.trim(),
        "author":author.trim(),
        "description":description.trim()
    }, 
    "POST").then((response) => {
        setResponseData(response);
    }).catch((error) => {
        setResponseData(error);
    });
};

export const deleteClicked = (id, setResponseData, clearSelection) => {
    sendRequest({
        "id":id
    }, 
    "DELETE").then((response) => {
        setResponseData(response);
        clearSelection();
    }).catch((error) => {
        setResponseData(error);
    });
};