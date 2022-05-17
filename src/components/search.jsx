import { useState } from "react";


const Search = () => {
    const [msg, setMsg] = useState('');
    
    const handleChange = (e) => {
        setMsg(e.target.value);
        console.log(msg)
      };
     

    return (
    <div className="search">
        <input type="search" placeholder="Search" onChange={handleChange}></input>
    </div>
    )
}

export default Search;