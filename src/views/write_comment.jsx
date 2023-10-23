import React from "react";
import Info_card from "../components/info_card";

function Write_comment(){
    return(
        <div id="page_write_comment">
    <div className="grid_left">
        <p className="title">소견 작성</p>
        <div className="contents">
            <form method="post" action="http://165.246.44.97:8080/api/write_comment">
                <input className="hide" value="kcs" name="name"/>
                    <textarea className="input_comment" placeholder="환자에 대한 소견을 입력하세요." name="comment"></textarea>
                <div className="label_content_pack">
                    <div className="label">작성일자</div>
                    <input className="hide" name="date" value="2023.10.04"/>
                    <div className="content">2023.10.04</div>
                </div>
                <div className="btns_container">
                    <button type="submit" className="write_comment">소견 작성</button>
                    <button onClick={()=>{window.location.href='/streaming'}} type="button" className="back">돌아가기</button>
                </div>
            </form>

        </div>
    </div>
    <div className="grid_right">
        <Info_card name="kcs"></Info_card>
    </div>


</div>
    )
}

export default Write_comment