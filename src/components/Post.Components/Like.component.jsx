import { useState } from "react";
import { Tooltip } from "react-tooltip";
import { styled } from "styled-components";


export function LikeComponent(props){
    const{isLiked, setIsLiked} = props;
    const detail = `Maria João e outras 12 pessoas`;
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
            
            
            <div  
                className="text"
                data-tooltip-id="details"
                data-tooltip-content={detail}
            >
                14 likes
            </div>
            <Tooltip 
                id="details" 
                variant="light"
                place="bottom"
            />
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
    .text{
        font-size: 14px;
    }

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