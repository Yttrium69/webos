import React from "react";
import { ms } from '../../public/ps';


function Member_card(props) {
    const ms_list = ms[props.name];
    const percentage = (parseFloat(ms_list.time[0])/4)*100;
    const style ={
        'fore':{'width':`${100-percentage}%`},
        'dot':{'left':percentage+"%", 'backgroundColor':''},
    };

    if(0<=percentage&&percentage<30){ style.dot.backgroundColor = '#33FF00'}
    else if(30<=percentage&&percentage<60){ style.dot.backgroundColor = '#FCE94D'}
    else{ style.dot.backgroundColor = '#FF1401'}
    
    return (
        <div className="member_card">
            <div className="img_name_pack">
                <div className="img_container">
                    <img onError={()=>{this.src='img/profiles/error.png'}} src={'img/profiles/error.png'}/>
                </div>
                <div onClick={()=>{window.location.href="/showdetail"}} className="text_icon_pack">
                    <p  onClick={()=>{window.location.href="/showdetail"}} className="text">{ms_list.name} 환자</p>
                    <div  onClick={()=>{window.location.href="/showdetail"}}  className="icon">
                        <img src="img//icons/next.svg"/>
                    </div>
                </div>

            </div>
            <div className="time_container">
                <div className="texts_container">
                    <p className="label">동일 자세 지속</p>
                    <p className="time">{ms_list.time}</p>
                </div>
                <div className="time_bar">
                    <div className="back"></div>
                    <div  style={style.fore} className="fore"></div>
                    <div  style={style.dot} className="time_dot"></div>
                </div>

            </div>
            <div className="btns_container">
                <button  onClick={()=>{window.location.href="/qrscan"}} className="backwork">Backwork</button>
                <button  onClick={()=>{window.location.href="/streaming"}} className="streaming">모니터링</button>
            </div>
        </div>
    )


}

export default Member_card