import axios from "axios";

axios.get('http://www.amiiboapi.com/api/amiibo/')
  .then(data => alert(data))