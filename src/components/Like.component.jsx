import { useState } from "react";
import { styled } from "styled-components";

export function LikeComponent(){
    const[isLiked, setIsLiked] = useState(false);

    const handleLike = ()=>{
        setIsLiked(!isLiked);
    }

    return(
        <CsLikeComponent>

            {!isLiked ? (
                <div className="heartNoLiked" onClick={handleLike}>
                    <ion-icon name="heart-outline"></ion-icon>
                </div>
            ) : (
                <div className="heartLiked" onClick={handleLike}>
                    <ion-icon name="heart"></ion-icon>
                </div>
            )}
            
            
            <div className="text">14 likes</div>
        </CsLikeComponent>
    );
}

 const CsLikeComponent= styled.div`
 
    width: 90%;
    max-width: 80px;
    min-width: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    //border: 1px solid white;
    //*{border: 1px solid white}
    padding-top: 15px;

    ion-icon{
        cursor: pointer;
        height: 100%;
        width: 100%;   
    }

    .heartLiked{
        width: 35px;
        height: 35px;
        color: red;
    }
    .heartNoLiked{
        width: 35px;
        height: 35px;
        color: white;
    }

 `;