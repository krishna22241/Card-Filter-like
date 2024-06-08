import React from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import {toast} from 'react-toastify';
const Card = (props) => {
    let course = props.course;
    let likedCourses=props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
    function clickHandler () {
        if (likedCourses.includes(course.id)) {
            //pehle se like hua pda tha
            //setLikedCourses((prev) => prev.filter( (cid) => (cid !== course.id) ) );
            setLikedCourses(likedCourses.filter((id) => id !== course.id));
            toast.warning("like removed");
        }
        else{
            //pehle se like nhi hua tha
            //insert krna h ye course liked courses me
            setLikedCourses([...likedCourses,course.id]);
            if(likedCourses.length === 0){
                setLikedCourses([course.id]);
            }
            else{
                //non-empty phle se
                setLikedCourses ((prev) => [...prev , course.id]);
            }
            toast.success("Liked Successfully")
        }
    };

  return (
    <div className='w-[300px] bg-blue-800 bg-opacity-80 rounded-md overflow-hidden '  >
        <div className='relative'>
            <img src={course.image.url}/>

            <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-20px] grid place-items-center'>
                <button onClick={clickHandler}>
                   { likedCourses.includes(course.id) ?(<FcLike fontSize="1.75rem"/>)
                      :(<FcLikePlaceholder fontSize="1.75rem"/>)
                     
                    }
                </button>
            </div>

        </div>


        <div className='p-4'>
            <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
            <p className='mt-2 text-white'>
                {
                    course.description.length > 100 ?
                    (course.description.substr(0,100))+"...":
                    (course.description)
                }
            </p>
        </div>

    </div>
  )
}
export default Card;