import React from "react";
import Info_card from "../components/info_card";
import keyboard from "@enact/webos/keyboard";

function Add_member() {
  return (
    <div id="page_add_member">
      <div class="grid_left">
        <p class="title">환자 정보 입력</p>
        <div class="contents">
          <form method="post" action="/add_member">
            <div class="inputs_container">
              <div class="label_input_pack">
                <div class="label">이름</div>
                <input
                  type="url"
                  placeholder="이름을 입력하세요."
                  class="input name"
                  name="name"
                />
              </div>
              <div class="label_input_pack radio">
                <div class="label">성별</div>
                <div class="radios">
                  <input type="radio" name="gender" vlaue="male" />
                  <span>남성</span>
                  <input type="radio" name="gender" vlaue="female" />
                  <span>여성</span>
                </div>
              </div>
              <div class="label_input_pack">
                <div class="label">신장</div>
                <input
                  placeholder="신장을 입력하세요."
                  class="input height"
                  name="height"
                />
              </div>
              <div class="label_input_pack">
                <div class="label">체중</div>
                <input
                  placeholder="체중을 입력하세요."
                  class="input weight"
                  name="weight"
                />
              </div>
              <div class="label_input_pack">
                <div class="label">병력</div>
                <input
                  placeholder="환자의 병력을 요약해 입력하세요."
                  class="input history"
                  name="history"
                />
              </div>
            </div>
            <div class="btns_container">
              <button type="submit" class="add_member">
                환자 추가
              </button>
              <button onclick="location.href='/'" type="button" class="back">
                돌아가기
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="grid_right">
        <Info_card></Info_card>
      </div>
      <keyboard />
    </div>
  );
}

export default Add_member;
