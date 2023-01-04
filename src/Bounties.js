import React, {useState} from "react";
import AddBounty from "./AddBounty";

export default function Bounties(props){
    const { firstName, lastName, bountyAmount, type, _id} = props
    const [editToggle, setEditToggle] = useState(false)
    return(
        <div className="bountyContainer">
            <div className="bounties">
                { !editToggle ?
                <>
                <h1>{type} {firstName} {lastName}</h1>
                <p>$ {bountyAmount}</p>
                <button className="deleteBtn"
                onClick={() => props.deleteBounty(_id)} >Delete</button>
                <button className="editBtn"
                onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
                </>
                :
                <>
                <AddBounty
                    firstName={firstName}
                    lastName={lastName}
                    type={type}
                    _id={_id}
                    bountyAmount={bountyAmount} submit={props.editBounty} />
                    <button onClick={() => setEditToggle(prevToggle => !prevToggle)} >close</button>
                </>
                 }
            </div>
        </div>
    )
}