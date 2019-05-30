import axios from "axios";

export default {
  // Gets connection to back
  getUsers: function() {
    return axios.get("/api/users");
  },
//   // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
//   // Deletes the hike with the given id from the give user
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  createUser: function(userData) {
    return axios.post("/api/users", userData);
  }
};