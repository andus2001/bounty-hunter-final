import React, {useState} from "react"

export default function AddBounty(props){
    const initInputs = {firstName: props.firstName || "",
    lastName: props.lastName || "", type: props.type || "", 
    bountyAmount: props.bountyAmount || ""}
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log('clicked');
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="firstName" value={inputs.firstName}
            onChange={handleChange} placeholder="first name" />
            <input type="text" name="lastName" value={inputs.lastName}
            onChange={handleChange} placeholder="Last Name" />
            <input type="text" name="type" value={inputs.type}
            onChange={handleChange} placeholder="type" />
            <input type="number" name="bountyAmount" value={inputs.bountyAmount}
            onChange={handleChange} placeholder="Price?" />
            <button>submit</button>
        </form>
    )
}