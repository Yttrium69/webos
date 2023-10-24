import React from "react";
import Info_card from "../components/info_card";
import keyboard from "@enact/webos/keyboard";

function Add_member() {
  return (
    <div id="page_add_member">
      <div className="grid_left">
        <p className="title">환자 정보 입력</p>
        <div className="contents">
          <form method="post" action="http://165.246.44.97:8080/api/add_member">
            <div className="inputs_container">
              <div className="label_input_pack">
                <div className="label">이름</div>
                <input
                  placeholder="이름을 입력하세요."
                  className="input name"
                  name="name"
                />
              </div>
              <div className="label_input_pack radio">
                <div className="label">성별</div>
                <div className="radios">
                  <input type="radio" name="gender" vlaue="male" />
                  <span>남성</span>
                  <input type="radio" name="gender" vlaue="female" />
                  <span>여성</span>
                </div>
              </div>
              <div className="label_input_pack">
                <div className="label">신장</div>
                <input
                                  type="number"
                  placeholder="신장을 입력하세요."
                  className="input height"
                  name="height"
                />
              </div>
              <div className="label_input_pack">
                <div className="label">체중</div>
                <input
                                  type="number"
                  placeholder="체중을 입력하세요."
                  className="input weight"
                  name="weight"
                />
              </div>
              <div className="label_input_pack">
                <div className="label">병력</div>
                <input
                  placeholder="환자의 병력을 요약해 입력하세요."
                  className="input history"
                  name="history"
                />
              </div>
            </div>
            <div className="btns_container">
              <button type="submit" className="add_member">
                환자 추가
              </button>
              <button  onClick={()=>{window.location.href='/'}} type="button" className="back">
                돌아가기
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="grid_right">
        <Info_card name="kcs"></Info_card>
      </div>
      <keyboard />
    </div>
  );
}

export default Add_member;
