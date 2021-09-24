import { FETCH } from "../action-types/contact-action-types";
import acios from "axios";
import axios from "axios";
// export const getData=(data)=>{
// return {
//     type:FETCH,
//     payload:data
// }
// }

export const getData = () => (dispatch) => {
  axios
    .get("http://localhost:5000/api/contacts/all")
    .then((res) =>
      dispatch({
        type: FETCH,
        payload: res.data.contacts,
      })
    )
    .catch((err) => console.log(err));
};

export const deleteHandler = (idContact) => (dispatch) => {
  axios
    .delete(`http://localhost:5000/api/contacts/delete/${idContact} `)
    .then((res) => dispatch(getData()))
    .catch((err) => console.log(err));
};

export const addHandler = (newContact) => (dispatch) => {
  axios.post("http://localhost:5000/api/contacts/add", newContact)
  .then((res) => dispatch(getData()))
  .catch((err) => console.log(err));
};

export const editHandler=(nameEdit,editContact )=>dispatch=>{
    axios.put(`http://localhost:5000/api/contacts/edit/${nameEdit} `,editContact)
    .then((res) => dispatch(getData()))
    .catch((err) => console.log(err))
}