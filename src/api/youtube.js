import axios from "axios";

const KEY = "AIzaSyCeNzIkRpQ8hYBdc4hJ8WFsG4E2tM2frsk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
