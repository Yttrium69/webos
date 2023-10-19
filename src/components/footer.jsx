import React from "react";
import Link from "react-router-dom"; // Import Link from React Router

function Nav() {
  return (
    <div className="nav_list">
      <Link to="/showdetail">환자 상세</Link>
      <Link to="/">메인</Link>
      <Link to="/streaming">실시간 모니터링</Link>
    </div>
  );
}

export default Nav;
