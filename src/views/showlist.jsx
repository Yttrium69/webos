import React from "react";
import $ from "jquery";
import Member_card from "../components/member_card";

function Show_list() {
    $(document).ready(function(){

        // for(let i=0;i<3;i++) append_card(".title_grid_pack.bad .member_cards_container");
        // for(let i=0;i<11;i++) append_card(".title_grid_pack.notbad .member_cards_container");
    }) 
    function append_child(parent_selctor, child_dom){
        $(parent_selctor).append(child_dom);
    }

    
    function append_card(parent_selector){
        const card = `<div className="member_card">
                            <div className="img_name_pack">
                                <div className="img_container">
                                    <img src="img//profiles/kcs/profile.png">
                                </div>
                                <div onClick="location.href='/showdetail'" className="text_icon_pack">
                                    <p onClick="location.href='/showdetail'" className="text">kcs 환자</p>
                                    <div onClick="location.href='/showdetail'" className="icon">
                                        <img src="img//icons/next.svg">
                                    </div>
                                </div>
    
                            </div>
                            <div className="time_container">
                                <div className="texts_container">
                                    <p className="label">동일 자세 지속</p>
                                    <p className="time">3시간 20분</p>
                                </div>
                                <div className="time_bar">
                                    <div className="back"></div>
                                    <div className="fore"></div>
                                    <div className="time_dot"></div>
                                </div>
    
                            </div>
                            <div className="btns_container">
                                <button onClick="location.href='backwork'" className="backwork">Backwork</button>
                                <button onClick="location.href='streaming'" className="streaming">모니터링</button>
                            </div>
                        </div>
        `;
        append_child(parent_selector, card);
    }

    return (
        <div id="page_show_list">
        <div className="comp_show_status">

            <div className="status_cards_container">
                <div className="status_card best">
                    <div className="img_container">
                        <img src="img//show_list/face_best.png"/>
                    </div>
                    <p className="label">좋음</p>
                    <p className="cnt">82</p>
                </div>
                <div className="status_card good">
                    <div className="img_container">
                        <img src="img//show_list/face_good.png"/>
                    </div>
                    <p className="label">양호</p>
                    <p className="cnt">41</p>
                </div>
                <div className="status_card bad">
                    <div className="img_container">
                        <img src="img//show_list/face_bad.png"/>
                    </div>
                    <p className="label">조치 요망</p>
                    <p className="cnt">3</p>
                </div>
            </div>
        </div>
        <div className="comp_show_list">
            <div className="title_container">
                <p className="title">전체 환자 열람</p>
                <a href="/addmember" className="add_member">환자 정보 추가</a>
            </div>
            <div className="bad_notbad_pack">
                <div className="title_grid_pack bad">
                    <p className="title">조치 요망</p>
                    <div className="member_cards_container">
                        <Member_card name="kcs"></Member_card>
                        <Member_card name="vcs"></Member_card>
                        <Member_card name="sdj"></Member_card>
                        
                    </div>
    
    
                </div>
                <div className="title_grid_pack notbad">
                    <p className="title">조치 불필요</p>
                    <div className="member_cards_container">
                        <Member_card name="nms"></Member_card>
                        <Member_card name="new"></Member_card>
                        <Member_card name="nsl"></Member_card>
                        <Member_card name="nlw"></Member_card>
                        <Member_card name="ewn"></Member_card><Member_card name='nwd'></Member_card>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Show_list