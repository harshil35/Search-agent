import React from "react";

const Searchbox =(searchChange) =>{
  return(
    <div className="pa2">
      <input className="pa3 ba b--green bg-lightest-blue" type="search" placeholder="Search character" onChange={searchChange.searchChange}/>
    </div>
  );
}

export default Searchbox;