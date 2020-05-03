import axios from 'axios';

function addFavorite(data) {
   axios
   .post
   ('api/users/favorite', data)
   .then(res => {console.log(res.data)})
   .catch(function (err) {
    console.log(err)
  });
}

export default addFavorite;