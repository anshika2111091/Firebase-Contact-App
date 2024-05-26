import NavBar from "./components/NavBar"
import { FiSearch } from "react-icons/fi"
import {AiFillPlusCircle} from "react-icons/ai"
import {useState,useEffect} from "react";
import { collection,getDocs } from "firebase/firestore";
import { db } from './config/firebase';

const App = () => {
  const [contacts,setContacts]=useState([]);
  console.log(db);
  useEffect(()=>{
    
    const getContacts=async ()=>{
      try{
        const contactsRef=collection(db,"contacts");
        const contactSnapshot=await getDocs(contactsRef);
        console.log(contactSnapshot);
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
      
    </div>
  )
}

export default App

