import React from "react";
import Info_card from "../components/info_card";

function Mainpage(){
    const style={
        "top":"0.8rem", "left":"0.75rem"
    }
    return(<div id="page_index">
    <div className="grid_left">
        <Info_card></Info_card>
        <div className="btn_container">
            <button className="btn_stream">실시간 모니터링</button>
        </div>
    </div>
    <div className="grid_center">
        <div className="dummy_dots_pack">
            <div className="img_container dummy">
                <img src="img/index/dummy_man.png"/>
            </div>
            <div className="dots_container">
                <div className="dot body1" style={style}>
                    <div className="inner_dot"></div>
                </div>
                {/* <div className="dot body2" style="top: 12rem; left: 6rem;">
                    <div className="inner_dot"></div>
                </div>
                <div className="dot body3" style="top: 17rem; left: 10rem;">
                    <div className="inner_dot"></div>
                </div> */}
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
                    <img className="x" src="img/icons/x.svg"/>
                    <div className="texts_container">
                        <p className="category">알림</p>
                        <p className="content">엉치뼈 부근에 강한 압력이 가해지고 있습니다. 조치를 취해 주세요.</p>
                        <p className="date">2023. 10. 01 12:41</p>
                    </div>
                    <div className="btn_container">
                        <button   className="btn_back">Backwork 조치</button>
                    </div>
                </div>
                <div className="notification">
                    <img  className="x" src="img/icons/x.svg"/>
                    <div className="texts_container">
                        <p className="category">알림</p>
                        <p className="content">엉치뼈 부근에 강한 압력이 가해지고 있습니다. 조치를 취해 주세요.</p>
                        <p className="date">2023. 10. 01 12:41</p>
                    </div>
                    <div className="btn_container">
                        <button   className="btn_back">Backwork 조치</button>
                    </div>
                </div>
                <div className="notification">
                    <img className="x" src="img/icons/x.svg"/>
                    <div className="texts_container">
                        <p className="category">알림</p>
                        <p className="content">엉치뼈 부근에 강한 압력이 가해지고 있습니다. 조치를 취해 주세요.</p>
                        <p className="date">2023. 10. 01 12:41</p>
                    </div>
                    <div className="btn_container">
                        <button   className="btn_back">Backwork 조치</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
);
}

export default Mainpage