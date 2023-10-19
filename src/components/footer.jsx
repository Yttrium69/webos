import React from "react";

function Footer(){
    return(
<footer>
    <div class="nav_list">
        <a onClick={function(){location.href='/showdetail'}}>환자 상세</a>
        <a onClick={function(){location.href='/'}}>메인 </a>
        <a onClick={function(){location.href='/streaming'}}>실시간 모니터링</a>
    </div>
</footer>
    )
}

export default Footer