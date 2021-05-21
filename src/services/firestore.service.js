import db from '../firebase.config.js'

const FirestoreService = {
    getRooms: async () => {
        const snapshot = await db.collection('rooms').get()
        return snapshot.docs.map(doc => doc.data());
    },
    createRoom: async (code, company) => {
        db.collection("rooms").doc(code).set({
            code: code,
            company: company
        });
    },
    deleteRoom: async (code, company) => {
        db.collection("rooms").doc(code).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }

}
export default FirestoreService