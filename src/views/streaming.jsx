import React from "react";
import Info_card from "../components/info_card";

function Streaming(){
    return (
        <div id="page_streaming">
    <div class="grid_left">
        <div class="video_curtime_btn_pack">
            <div class="cur_time">2023. 10. 01 19:57:23</div>
            <div class="video_container">
                <video class="streaming_video"></video>
            </div>
            <div class="btn_container">
                <button onclick="location.href='/'" class="btn_back">돌아가기</button>
            </div>
        </div>
    </div>
    <div class="grid_right">
        <Info_card></Info_card>
        <div class="btns_container">
            <button onclick="location.href='/backwork'" class="backwork">Backwork 조치</button>
            <button onclick="location.href='/write_comment'" class="write_comment">소견 작성</button>
        </div>
    </div>
</div>
    )
}

export default Streaming