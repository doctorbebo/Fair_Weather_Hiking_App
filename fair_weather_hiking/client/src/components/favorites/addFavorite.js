import axios from 'axios';

function addFavorite(user, hike) {
  console.log('this.props.auth.user: ' + user.id);
  console.log('this.props: ' + hike)
   axios
   .post
   ('api/users/favorite', hike)
    .then(res => {console.log(res)})
    .catch(function (err) {
        console.log(err)
  });
}

export default addFavorite;