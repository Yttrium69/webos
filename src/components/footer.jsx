import React from "react";
import Link from "react-router-dom"; // Import Link from React Router

function Nav() {
  return (
    <div className="footer">
<div className="nav_list">
      <p onClick={()=>{window.location.href="/showdetail"}}>환자 상세</p>
      <p onClick={()=>{window.location.href="/"}}>메인</p>
      <p onClick={()=>{window.location.href="/streaming"}}>실시간 모니터링</p>
    </div>
    </div>
    
  );
}

export default Nav;
