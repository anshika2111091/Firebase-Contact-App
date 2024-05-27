import NavBar from "./components/NavBar"
import { FiSearch } from "react-icons/fi"
import {AiFillPlusCircle} from "react-icons/ai"
import {useState,useEffect} from "react";
import { collection,getDocs } from "firebase/firestore";
import { db } from './config/firebase';
import {HiOutlineUserCircle} from "react-icons/hi";
import {IoMdTrash} from "react-icons/io";
import {RiEditCircleLine} from "react-icons/ri";


import "firebase/firestore";

const App = () => {
  const [contacts,setContacts]=useState([]);
  console.log(db);
  useEffect(()=>{
    
    const getContacts=async ()=>{
      try{
        const contactsRef=collection(db,"contacts");
        const contactSnapshot=await getDocs(contactsRef);
        const contactList=contactSnapshot.docs.map((doc)=>{
          return{
            id:doc.id,
            ...doc.data()

        }
          
        });
      setContacts(contactList);
      }
      catch(err){
        console.log(err);
      }

    };
    getContacts();
  },[])
  return (
    <div className="max-w-[370px] mx-auto" >
      <NavBar/>  
      <div className="flex gap-2">
      <div className="flex relative items-center flex-grow">
        <FiSearch className="text-white text-2xl absolute ml-1"/>
        <input type="text"  placeholder="Search Contract" className="bg-transparent border flex-grow pl-8 text-white border-white rounded-md h-9 placeholder-white placeholder:text-lg " />
      </div>
      
        <AiFillPlusCircle className="text-5xl text-white cursor-pointer"/>
      
     
      </div>
      <div className="mt-2" >
       { contacts.map((contact) => (
          <div className="flex bg-[#FFEAAE] justify-between items-center rounded-lg p-2 " key={contact.id}>
<div className="flex gap-1 justify-center">
<HiOutlineUserCircle className="text-orange text-5xl"/>
            <div className=" ">
              <h2 className="font-medium">{contact.name}</h2>
              <p className="text-sm">{contact.email}</p>
            </div>
</div>
           
            <div className="flex gap-2">
              <RiEditCircleLine className="text-4xl "/>
              <IoMdTrash className="text-4xl text-purple-500"/>
            

            </div>
             
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default App

