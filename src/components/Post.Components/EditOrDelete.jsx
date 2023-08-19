import { styled } from "styled-components";
import trash from './../../assets/images/icons/trash.svg';
import edit from './../../assets/images/icons/edit.svg'
import { ConfirmDelete } from "./ConfirmDelete";

//AQUI ESTÃO AS IMPORTAÇÕES E AS TAGS
//NÃO MUDEI POR QUE VAI DAR CONFLITOO ANTES
//DE SER ACEITO O ULTIMO PULL REQUEST QUE FIZ E 
//ENTÃO VOU ESPERAR SER ACEITO PRIMEIRO PRA USAR DPS

// import {TbTrashFilled} from 'react-icons/tb';
// import {PiPencilBold} from 'react-icons/pi';
// <TbTrashFilled/>
// <PiPencilBold/>


export function EditOrDelete(props){
    const{toggle, setToggle} = props;

    return(
        <CsEditOrDelete>
            <ConfirmDelete
                toggle={toggle}
                setToggle={setToggle}
            />
            <div className="edit option">< img src={edit}/></div>
            <div className="delete option"><img src={trash} onClick={()=>setToggle(!toggle)}/></div>
        </CsEditOrDelete>
    );
}


const CsEditOrDelete = styled.div`
    //border: 1px solid white;
    //*{ border: 1px solid white;}
    //width: 30px;
    //height: 30px;
    position: absolute;
    top: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    .option{
        width: 23px;
        height: 23px; 
        cursor: pointer; 
    }

`;