import { useState } from "react";
import { styled } from "styled-components";

export function ConfirmDelete(){
    const [toggle, setToggle] = useState(false);

    const handleConfirm = ()=>{
        setToggle(!toggle);
    }
    return(

        <CsConfirmDelete toggle={toggle}>
            <div className="container">
                <div className="question">
                    <p>Are you sure you want</p>
                    <p>to delete this post?</p>                  
                                
                </div>
                <div className="options">
                    <div className="no option" onClick={handleConfirm}>
                        No, go back
                    </div>
                    <div className="yes option" onClick={handleConfirm}>
                        Yes, delete it
                    </div>
                </div>
            </div>
            
        </CsConfirmDelete>
    );
}

const CsConfirmDelete = styled.div`
    position: fixed;
    left: 0;
    top:0;
    z-index: 10;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.7);

    display: ${ p=> p.toggle ?'flex' : 'none'};
    align-items: center;
    justify-content: center;

    .container{
        //border: 1px solid;
        //*{border:1px solid;}
        width: 40vw;
        height: 30vh;
        background-color: #333333;
        border-radius: 8vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10%;
        color: white;

        .question{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            p{
                font-size: 5vh;
            }
        }

        .options{
            width: 55%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 16.6%;
            .option{
                width: 40%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 2.5vh;
                height: 100%;
                cursor: pointer;
                border-radius: 5px;
            }
            .no{
                background-color: white;
                color: blue;
            }
            .yes{
                background-color: blue;
                color: white;
            }
        }
    }

`;