import React from "react";
import Info_card from "../components/info_card";

function Write_comment(){
    return(
        <div id="page_write_comment">
    <div class="grid_left">
        <p class="title">소견 작성</p>
        <div class="contents">
            <form method="post" action="/write_comment">
                <input class="hide" value="kcs" name="name"/>
                    <textarea class="input_comment" placeholder="환자에 대한 소견을 입력하세요." name="comment"></textarea>
                <div class="label_content_pack">
                    <div class="label">작성일자</div>
                    <input class="hide" name="date" value="2023.10.04"/>
                    <div class="content">2023.10.04</div>
                </div>
                <div class="btns_container">
                    <button type="submit" class="write_comment">소견 작성</button>
                    <button onclick="location.href='/streaming?name=kcs'" type="button" class="back">돌아가기</button>
                </div>
            </form>

        </div>
    </div>
    <div class="grid_right">
        <Info_card></Info_card>
    </div>


</div>
    )
}

export default Write_comment