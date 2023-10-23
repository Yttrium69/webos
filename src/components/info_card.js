import React from "react";
import {ps} from '../../public/ps';

function Info_card(props){
    const p_json = ps[props.name];
    console.log(p_json)
    
    let gender="남성"
    if(p_json.info.gender == 'f') gender = "여성";
    return(
        <div id="info_card">
                    <div className="img_name_pack">
                        <div className="img_container">
                            <img src={"img/profiles/"+p_json.name+"/profile.png"}/>
                        </div>
                        <div className="title">{p_json.name} 환자</div>
                    </div>
                    <div className="texts_container">
                        <div className="label_content_pack gender">
                            <p className="label">성별</p>
                            <p className="content">{gender}</p>
                        </div>
                        <div className="label_content_pack age">
                            <p className="label">나이</p>
                            <p className="content">{p_json.info.age}세</p>
                        </div>
                        <div className="label_content_pack gender">
                            <p className="label">신장</p>
                            <p className="content">{p_json.info.height}cm</p>
                        </div>
                        <div className="label_content_pack gender">
                            <p className="label">체중</p>
                            <p className="content">{p_json.info.weight}kg</p>
                        </div>
                        <div className="label_content_pack gender">
                            <p className="label">입원기간</p>
                            <p className="content">{p_json.info.period.start} ~ {p_json.info.period.end}</p>
                        </div>
                        <div className="label_content_pack gender">
                            <p className="label">병력</p>
                            <p className="content">{p_json.info.history}</p>
                        </div>
                    </div>
                    <div className="QR_container">
                        <div className="img_container">
                            <img src={"img/profiles/"+p_json.name+"/QR.png"}/>
                        </div>
                    </div>
                </div>
    )
}

export default Info_card