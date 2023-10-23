import React from "react";
import Info_card from "../components/info_card";

function Streaming(){
    return (
        <div id="page_streaming">
    <div className="grid_left">
        <div className="video_curtime_btn_pack">
            <div className="cur_time">2023. 10. 01 19:57:23</div>
            <div className="video_container">
                <video className="streaming_video"></video>
            </div>
            <div className="btn_container">
                <button  onClick={()=>{window.location.href='/'}} className="btn_back">돌아가기</button>
            </div>
        </div>
    </div>
    <div className="grid_right">
        <Info_card name="kcs"></Info_card>
        <div className="btns_container">
            <button onClick={()=>{window.location.href='/backwork'}} className="backwork">Backwork 조치</button>
            <button onClick={()=>{window.location.href='/write_comment'}} className="write_comment">소견 작성</button>
        </div>
    </div>
</div>
    )
}

export default Streaming