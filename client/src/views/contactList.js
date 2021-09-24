import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import Contact from './contact'
import {getData}from '../redux/action/contact-action'
import axios from 'axios'
import Add from './add'
import '../stylesheet/contactList.css'
export default function ContactList() {
const dispatch = useDispatch()
useEffect(() => {
dispatch(getData())
}, [])

const contacts = useSelector(state => state.contacts)
  return (
    <div>
      <Add/>
      <div className="contactListContainer">
        {contacts?.map((contact, key) => (
          <Contact contact={contact} key={contact._id} />
        ))}
      </div>
    </div>
  );
}
