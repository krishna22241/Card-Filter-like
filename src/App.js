import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl,filterData } from "./data";
 import  Spinner  from "./components/Spinner";
 import {toast} from  "react-toastify";
 
const App = () =>{

  const [courses,setCourses] = useState(null);//null ki jgh [] bhi de skte h
  const [loading,setLoading] = useState(true);
  const [category,setCategory] = useState(filterData[0].title);

//sare k sare courses k adata nikal le ata h 
  async function fetchData() {
    setLoading(true);
    try{
        let response = await fetch(apiUrl);
        let output = await response.json();
        //output->
        setCourses(output.data);
        // console.log(output);
    }
    catch(error){
      toast.error("Network me dikkat hai");
    }
    setLoading(false);
  }
  useEffect(()=>{
    fetchData();
  },[]);


  return (
    <div className="min-h-screen flex flex-col bg-blue-500">
      <div>
        <Navbar></Navbar>
      </div>

      <div className="bg-blue-500">

        <div>
          <Filter filterData={filterData}
          category={category}
          setCategory={setCategory}></Filter>
        </div>


        <div className="w-11/12 max-w-{1200px} mx-auto flex flex-wrap justify-center items-center min-h[50vh]">
          {
            loading ? (<Spinner/>):(<Cards courses={courses}
            category={category}></Cards>)
          }
        </div>

      </div>
      



    </div>
  )
};


export default App;