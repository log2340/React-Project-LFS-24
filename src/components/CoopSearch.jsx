import { React, useState } from "react";
import TextField from "@mui/material/TextField";

const CoopSearch = ({info}) =>{
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };


    const filterList = info.filter((el) => {
        //if no input the return the original
        if (inputText === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return JSON.stringify(el).toLowerCase().includes(inputText);
            
        }
    })

    return(
        <div className="coopMain">
            {/* search bar */}
            <h3>Search Coops</h3>
            <div className="search">
            <TextField
            onChange={inputHandler}
            id="outlined-basic"
            variant="outlined"
            fullWidth
            label="Search"/>
        </div>
        {/* list of coops that appears through filter */}
        <div className="coopTable">
        {filterList.map((i, x)=>
            <div key={`${i}-${x}`} className="coopTableItem">
                <h4>{i.employer}</h4>
                <h5>{i.degree}</h5>
                <h5>{i.city}</h5>
                <h5>{i.term}</h5>
            </div>
        )}
        </div>

    </div>
    );

}

export default CoopSearch