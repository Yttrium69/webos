import React from "react";

function Info_card(){
    return(
        <div id="info_card">
                    <div className="img_name_pack">
                        <div className="img_container">
                            <img src="img/profiles/김철산/profile.png"/>
                        </div>
                        <div className="title">김철산 환자</div>
                    </div>
                    <div className="texts_container">
                        <div className="label_content_pack gender">
                            <p className="label">성별</p>
                            <p className="content">남성</p>
                        </div>
                        <div className="label_content_pack age">
                            <p className="label">나이</p>
                            <p className="content">만 85세</p>
                        </div>
                        <div className="label_content_pack gender">
                            <p className="label">신장</p>
                            <p className="content">172cm</p>
                        </div>
                        <div className="label_content_pack gender">
                            <p className="label">체중</p>
                            <p className="content">62kg</p>
                        </div>
                        <div className="label_content_pack gender">
                            <p className="label">입원기간</p>
                            <p className="content">2023. 08. 14 ~ 2023. 09. 14</p>
                        </div>
                        <div className="label_content_pack gender">
                            <p className="label">병력</p>
                            <p className="content">노환으로 인한 거동 불편</p>
                        </div>
                    </div>
                    <div className="QR_container">
                        <div className="img_container">
                            <img src="img/profiles/김철산/QR.png"/>
                        </div>
                    </div>
                </div>
    )
}

export default Info_card