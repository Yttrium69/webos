import React from "react";
import Info_card from "../components/info_card";

function Backwork(){
    return (
        <div id="page_backwork">
    <div class="grid_left">
        <div class="video_curtime_btn_pack">
            <div class="cur_time">2023. 10. 01 19:57:23</div>
            <div class="video_container">
                <video class="streaming_video"></video>
            </div>
            <div class="btn_container">
                <button onclick="location.href='/'" class="btn_back">돌아가기</button>
            </div>
            <div class="controllers_container">
                <div onclick="alert('clicked left btn')" class="controller left"><img src="img/icons/left.svg"/></div>
                <div onclick="alert('clicked pause btn')" class="controller pause"><img src="img/icons/pause.svg"/></div>
                <div onclick="alert('clicked right btn')" class="controller right"><img src="img/icons/right.svg"/></div>
            </div>
        </div>
    </div>
    <div class="grid_right">
        <Info_card></Info_card>
    </div>


</div>
    )
}

export default Backwork