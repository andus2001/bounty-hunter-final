import React, {useState, useEffect} from "react";
import axios from 'axios'
import Bounties from "./Bounties";
import AddBounty from "./AddBounty";

export default function App(){
    const [bounties, setBounties] = useState([])


    function getBounties(){
        axios.get('/bounty')
        .then(res => setBounties(res.data))
        .catch(err => console.log(err))
    }
    function addBounty(newBounty){
        axios.post('bounty', newBounty)
        .then(res => {
            setBounties(prevBounties => [...prevBounties, res.data])
        })
        .catch(err => console.log(err))
    }
    function deleteBounty(bountyId){
        axios.delete(`/bounty/${bountyId}`)
        .then(res => {
            setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
        })
        .catch(err => console.log(err))
    }

    function editBounty(updates, bountyId){
        axios.put(`/bounty/${bountyId}`, updates)
        .then(res => {
            setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId? bounty: res.data ))
        })
        .catch(err => console.log(err))
    }
    useEffect(()=>{
        getBounties()
    },[])

    return(
        <div>
            <AddBounty addBounty={addBounty} />
            {bounties.map(bounty => <Bounties {...bounty} key={bounty.lastName}
            deleteBounty={deleteBounty} editBounty={editBounty} />)}
        </div>
    )
}