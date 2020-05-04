import axios from 'axios';

function addFavorite(data, id) {
  console.log('hike id: ' + id);
  data.id = id;
   axios
   .post
   ('api/users/favorite', data)
    .then(res => {console.log(res)})
    .catch(function (err) {
        console.log(err)
  });
}

export default addFavorite;