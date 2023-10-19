import React from "react";

function Add_member(){
    return(<div id="page_add_member">
    <div class="grid_left">
        <p class="title">환자 정보 입력</p>
        <div class="contents">
            <form method="post" action="/add_member">
                <div class="inputs_container">
                    <div class="label_input_pack">
                        <div class="label">이름</div>
                        <input placeholder="이름을 입력하세요." class="input name" name="name"/>
                    </div>
                    <div class="label_input_pack radio">
                        <div class="label">성별</div>
                        <div class="radios">
                            <input type="radio" name="gender" vlaue="male"/><span>남성</span>
                            <input type="radio" name="gender" vlaue="female"/><span>여성</span>
                        </div>

                    </div>
                    <div class="label_input_pack">
                        <div class="label">신장</div>
                        <input placeholder="신장을 입력하세요." class="input height" name="height"/>
                    </div>
                    <div class="label_input_pack">
                        <div class="label">체중</div>
                        <input placeholder="체중을 입력하세요." class="input weight" name="weight"/>
                    </div>
                    <div class="label_input_pack">
                        <div class="label">병력</div>
                        <input placeholder="환자의 병력을 요약해 입력하세요." class="input history" name="history"/>
                    </div>
                </div>
                <div class="btns_container">
                    <button type="submit" class="add_member">환자 추가</button>
                    <button onclick="location.href='/'" type="button" class="back">돌아가기</button>
                </div>

            </form>

        </div>
    </div>
    <div class="grid_right">
        <div id="info_card">
            <div class="img_name_pack">
                <div class="img_container">
                    <img src="img/profiles/김철산/profile.png"/>
                </div>
                <div class="title">김철산 환자</div>
            </div>
            <div class="texts_container">
                <div class="label_content_pack gender">
                    <p class="label">성별</p>
                    <p class="content">남성</p>
                </div>
                <div class="label_content_pack age">
                    <p class="label">나이</p>
                    <p class="content">만 85세</p>
                </div>
                <div class="label_content_pack gender">
                    <p class="label">신장</p>
                    <p class="content">172cm</p>
                </div>
                <div class="label_content_pack gender">
                    <p class="label">체중</p>
                    <p class="content">62kg</p>
                </div>
                <div class="label_content_pack gender">
                    <p class="label">입원기간</p>
                    <p class="content">2023. 08. 14 ~ 2023. 09. 14</p>
                </div>
                <div class="label_content_pack gender">
                    <p class="label">병력</p>
                    <p class="content">노환으로 인한 거동 불편</p>
                </div>
            </div>
            <div class="QR_container">
                <div class="img_container">
                    <img src="img/profiles/김철산/QR.png"/>
                </div>
            </div>
        </div>
    </div>


</div>
);
}

export default Add_member