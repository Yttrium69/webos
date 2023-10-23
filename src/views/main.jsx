import React from "react";
import Info_card from "../components/info_card";
import $ from 'jquery';


function Mainpage() {
    function update_dots(sick_arr) {
        function turn_off_dot(target) {
            $(`.${target}`).css("display", "none");
        }
        function turn_on_dot(target) {
            $(`.${target}`).css("display", "");
        }
        function init_dots() {
            turn_off_dot("dot");
        }

        init_dots();
        sick_arr.forEach((target) => { turn_on_dot(target); })
    }

    const style = {
        "head": {
            "top": "0rem", "left": "8.5rem"
        },
        "LElbow": {
            "top": "10rem", "left": "3rem"
        },
        "LShoulder": {
            "top": "6rem", "left": "5rem"
        },
        "RElbow": {
            "top": "10rem", "left": "14rem"
        },
        "RShoulder": {
            "top": "6rem", "left": "12rem"
        },
        "RLeg": {
            "top": "25rem", "left": "11rem"
        },
        "LLeg": {
            "top": "25rem", "left": "6rem"
        },
    }

    $(document).ready(function () {
        fetch('http://165.246.44.97:8080/cord/location', {method:'POST', mode:'cors',})
        .then((response) => {
          if(response.ok) {
            return response.json();
          }  
          throw new Error('Network response was not ok.');
        }).then((data) => {
            console.log(data.data.coordinate)
            update_dots(data.data.coordinate)
        })
        .catch((error) => {
          console.log(`error: ${error}`)
      });

    })


    return (<div id="page_index">
        <div className="grid_left">
            <Info_card 
            name = "kcs"
            ></Info_card>
            <div className="btn_container">
                <button onClick={function(){window.location.href='/streaming'}} className="btn_stream">실시간 모니터링</button>
            </div>
        </div>
        <div className="grid_center">
            <div className="dummy_dots_pack">
                <div className="img_container dummy">
                    <img src="img/index/dummy_man.png" />
                </div>
                <div className="dots_container">
                    <div className="dot head" style={style.head}>
                        <div className="inner_dot"></div>
                    </div>
                    <div className="dot LElbow" style={style.LElbow}>
                        <div className="inner_dot"></div>
                    </div>
                    <div className="dot LShoulder" style={style.LShoulder}>
                        <div className="inner_dot"></div>
                    </div>
                    <div className="dot RShoulder" style={style.RShoulder}>
                        <div className="inner_dot"></div>
                    </div>
                    <div className="dot RElbow" style={style.RElbow}>
                        <div className="inner_dot"></div>
                    </div>
                    <div className="dot LLeg" style={style.LLeg}>
                        <div className="inner_dot"></div>
                    </div>
                    <div className="dot RLeg" style={style.RLeg}>
                        <div className="inner_dot"></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="grid_right">
            <div className="time_notifications_pack">
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
                <div className="notifications_pack">
                    <div className="notification">
                        <img className="x" src="img/icons/x.svg" />
                        <div className="texts_container">
                            <p className="category">알림</p>
                            <p className="content">엉치뼈 부근에 강한 압력이 가해지고 있습니다. 조치를 취해 주세요.</p>
                            <p className="date">2023. 10. 01 12:41</p>
                        </div>
                        <div className="btn_container">
                            <button className="btn_back">Backwork 조치</button>
                        </div>
                    </div>
                    <div className="notification">
                        <img className="x" src="img/icons/x.svg" />
                        <div className="texts_container">
                            <p className="category">알림</p>
                            <p className="content">엉치뼈 부근에 강한 압력이 가해지고 있습니다. 조치를 취해 주세요.</p>
                            <p className="date">2023. 10. 01 12:41</p>
                        </div>
                        <div className="btn_container">
                            <button className="btn_back">Backwork 조치</button>
                        </div>
                    </div>
                    <div className="notification">
                        <img className="x" src="img/icons/x.svg" />
                        <div className="texts_container">
                            <p className="category">알림</p>
                            <p className="content">엉치뼈 부근에 강한 압력이 가해지고 있습니다. 조치를 취해 주세요.</p>
                            <p className="date">2023. 10. 01 12:41</p>
                        </div>
                        <div className="btn_container">
                            <button className="btn_back">Backwork 조치</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Mainpage