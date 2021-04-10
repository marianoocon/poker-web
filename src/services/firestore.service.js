import db from '../firebase.config.js'

const GetRoomService ={
    getService:function Fetch() {
        db.collection("rooms").get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              console.log(doc.id, " => ", doc.data());
          });
      });
      }

}
export default GetRoomService