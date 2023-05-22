import { useEffect, useState } from "react"
import { createUser, getCategories, uploadImage } from "../action/userAction"



export default function CreateUser(){
    
    const [source, setSource] = useState("")
    const [categories, setCategories] = useState([])
    const [user, setUser] = useState({
        "name": "",
        "email": "",
        "password": "",
        "role": "customer",
        "avatar": "https://api.lorem.space/image/face?w=640&h=480"
    })

    const handleInputChange = (e) => {
        console.log(e) 
        const {name, value} = e.target
        setUser(prevState => {
            return{
                ...prevState,
                [name]: value
            }
        })
    }

    const onFileUploadHandler = (e) => {
        console.log(e.target.files[0])
        setSource(e.target.files[0])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("handle submit")
        // covert image to formData
        const formData = new FormData()
        formData.append("file", source)
        uploadImage(formData)
        .then(response => {
            user.avatar = [response.data.location]
            console.log(user)
            createUser(user)
            .then(resp => {
                console.log(resp)
                alert("Insert Product Sucess")
               
            })
        })
    }
        useEffect(() => {
            getCategories()
            .then(response => setCategories(response))
        }, [])
    return(
        <form 
        className="mt-5 w-50 m-auto"
        onSubmit={handleSubmit}
    >
        <h1 className="text-center">Create USER</h1>
        <div className="mb-3">
            <label htmlFor="name" class="form-label">User Name</label>
            <input 
                type="text" 
                class="form-control"
                placeholder="Soknat"
                name="name"
                onChange={handleInputChange}
            />
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input 
                type="text" 
                className="form-control"
                placeholder="....@gmail.com"
                name="email"
                onChange={handleInputChange}
            />
        </div>
        <div className="mb-3">
            <label htmlFor="password" class="form-label">Password</label>
            <input
                type="password"
                className="form-control" 
               
                name="password"
                placeholder="Input Password here"
                onChange={handleInputChange}
            >

            </input>
        </div>

        <select 
            class="form-select"
            onChange={handleInputChange}
            name="role"
        >
            <option selected>Choose Category</option>
            {
                categories.map(cat => (
                    <option value={cat.id}>{cat.name}</option>
                ))
            }
        </select>
        <div className="mb-3">
            <label htmlFor="avatar" className="form-label">Upload Image</label>
            <input 
                type="file" 
                className="form-control"
                name="avatar"
                onChange={onFileUploadHandler}
            />
        </div>
        {/* preview image */}
        <div className="mb-3">
            <img className="w-50" 
                src={source && URL.createObjectURL(source)} alt="" />
        </div>
        <button 
            type="submit" 
            class="btn btn-primary mt-4 w-100"
        >Insert User</button>
    </form>
)}
