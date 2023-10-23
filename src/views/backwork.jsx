import React from "react";
import Info_card from "../components/info_card";

function Backwork(){
    function ctrl_arm(direction){
        fetch(`http://165.246.44.97:8080/api/ctrl_arm?direction=${direction}`, {method:'GET', mode:'cors',})
        .then((response) => {
          if(response.ok) {
            console.log(response);
          }  
        })
        .catch((error) => {
          console.log(`error: ${error}`)
      });
    }
    return (
        <div id="page_backwork">
    <div className="grid_left">
        <div className="video_curtime_btn_pack">
            <div className="cur_time">2023. 10. 01 19:57:23</div>
            <div className="video_container">
                <video className="streaming_video"></video>
            </div>
            <div className="btn_container">
                <button onClick={()=>{window.location.href='/'}} className="btn_back">돌아가기</button>
            </div>
            <div className="controllers_container">
                <div onClick={()=>{ctrl_arm("l")}} className="controller left"><img src="img/icons/left.svg"/></div>
                <div  onClick={()=>{ctrl_arm("p")}} className="controller pause"><img src="img/icons/pause.svg"/></div>
                <div  onClick={()=>{ctrl_arm("r")}} className="controller right"><img src="img/icons/right.svg"/></div>
            </div>
        </div>
    </div>
    <div className="grid_right">
        <Info_card name="kcs"></Info_card>
    </div>
</div>
    )
}

export default Backwork