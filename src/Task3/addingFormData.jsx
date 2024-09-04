import { useState } from "react"




const AddingForm =()=>{


    const [formData,setFormData] = useState({
        userName:"",
        password:""
    })


    const changeHandler=(event)=>{
        event.preventDefault();
        


        const {name,value} = event.target

        setFormData({...formData,[name]:value})

        console.log(formData)




    }



    return(
        <>
            <form >
            <div className="mb-4">
                <label htmlFor="exampleInputEmail1" className="form-label">
                User Name
                </label><br></br>
                <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="userName"
                value={formData.userName}
                onChange={changeHandler}
                

                />
            </div>
            <div className="mb-5">
                <label htmlFor="exampleInputPassword1" className="form-label">
                Password
                </label><br></br>
                <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
                value={formData.password}
                onChange={changeHandler}
            
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
            </form>


        </>
    )
}



export default AddingForm