import React from "react";
import $ from "jquery";

function Show_list() {
    $(document).ready(function(){

        for(let i=0;i<3;i++) append_card(".title_grid_pack.bad .member_cards_container");
        for(let i=0;i<11;i++) append_card(".title_grid_pack.notbad .member_cards_container");
    }) 
    function append_child(parent_selctor, child_dom){
        $(parent_selctor).append(child_dom);
    }
    
    function append_card(parent_selector){
        const card = `<div class="member_card">
                            <div class="img_name_pack">
                                <div class="img_container">
                                    <img src="img//profiles/kcs/profile.png">
                                </div>
                                <div onclick="location.href='/show_detail?name=kcs'" class="text_icon_pack">
                                    <p onclick="location.href='/show_detail?name=kcs'" class="text">kcs 환자</p>
                                    <div onclick="location.href='/show_detail?name=kcs'" class="icon">
                                        <img src="img//icons/next.svg">
                                    </div>
                                </div>
    
                            </div>
                            <div class="time_container">
                                <div class="texts_container">
                                    <p class="label">동일 자세 지속</p>
                                    <p class="time">3시간 20분</p>
                                </div>
                                <div class="time_bar">
                                    <div class="back"></div>
                                    <div class="fore"></div>
                                    <div class="time_dot"></div>
                                </div>
    
                            </div>
                            <div class="btns_container">
                                <button onclick="location.href='backwork'" class="backwork">Backwork</button>
                                <button onclick="location.href='streaming'" class="streaming">모니터링</button>
                            </div>
                        </div>
        `;
        append_child(parent_selector, card);
    }
    return (
        <div id="page_show_list">
        <div class="comp_show_status">
            <div class="status_cards_container">
                <div class="status_card best">
                    <div class="img_container">
                        <img src="img//show_list/face_best.png"/>
                    </div>
                    <p class="label">좋음</p>
                    <p class="cnt">82</p>
                </div>
                <div class="status_card good">
                    <div class="img_container">
                        <img src="img//show_list/face_good.png"/>
                    </div>
                    <p class="label">양호</p>
                    <p class="cnt">41</p>
                </div>
                <div class="status_card bad">
                    <div class="img_container">
                        <img src="img//show_list/face_bad.png"/>
                    </div>
                    <p class="label">조치 요망</p>
                    <p class="cnt">3</p>
                </div>
            </div>
        </div>
        <div class="comp_show_list">
            <div class="title_container">
                <p class="title">전체 환자 열람</p>
                <a href="/addmember" class="add_member">환자 정보 추가</a>
            </div>
            <div class="bad_notbad_pack">
                <div class="title_grid_pack bad">
                    <p class="title">조치 요망</p>
                    <div class="member_cards_container"></div>
    
    
                </div>
                <div class="title_grid_pack notbad">
                    <p class="title">조치 불필요</p>
                    <div class="member_cards_container">
    

    
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Show_list