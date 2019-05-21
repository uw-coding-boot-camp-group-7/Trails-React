import axios from "axios";

export default {
  // Gets connection to back
  getUser: function() {
    return axios.get("/api/users");
  },
//   // Gets the book with the given id
//   getBook: function(id) {
//     return axios.get("/api/books/" + id);
//   },
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
  // Saves a book to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  }
};