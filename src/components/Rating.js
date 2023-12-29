
import { MdOutlineStarOutline } from "react-icons/md";
import { RxStarFilled } from "react-icons/rx";

const Rating = ({rating, onClick, style}) => {
  return (
    <div>
        {[...Array(5)].map((_, i)=> {
            <span key={i} onClick={()=>onclick(i)} style={style}>
                {rating>i ?(
                    <RxStarFilled fontSize ="15px"></RxStarFilled>
                ):(
                    <MdOutlineStarOutline fontSize ="15px"></MdOutlineStarOutline>

                )
                }

            </span>
        })}
    </div>
  )
}

export default Rating