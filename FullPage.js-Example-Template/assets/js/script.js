new fullpage('#fullpage', {
  sectionsColor: ['red', 'orange', '#C0C0C0', '#ADD8E6'],

  // 페이지 전환 이벤트 핸들러 //
  /*
      페이지 전환 이벤트 핸들러에는 종류가 여러개 있습니다.
      (** 표시는 자주 사용할것 같은 콜백)
      (슬라이드는 수평 슬라이드를, 풀페이지는 수평 슬라이드를 의미하는것으로 예상됨)
      - afterLoad       : 풀페이지 화면이 전환되고 나서 실행되는 콜백 **
      - onLeave         : 풀페이지가 완전히 전환되기 직전에 실행되는 콜백 **
      - afterSlideLoad  : 슬라이드 화면이 전환되고 난 후에 실행되는 콜백
      - onSlideLeave    : 슬라이드 전환 직전에 이벤트가 발생
      - afterResize     : 브라우저의 사이즈가 커지거나 줄었을 때 조정된 풀페이지 영역에 맞춰 이벤트 발생
      - afterResponsive : jQuery fullpage.js가 일반 웹사이트에서 반응형웹으로 변경될 때 또는 반응형에서 일반모드로 바뀔 때 이벤트 발생
  */
  // Refer : https://blog.naver.com/PostView.nhn?blogId=coding-&logNo=221432074882
  // 페이지가 완전히 로드되기보단, 이전 페이지에서 넘어올 때 애니메이션 효과를 적용하는것이 조금 더 자연스러워서
  // onLeave 콜백을 사용함
  onLeave: function (origin, destination, direction) {
    const options = {
      iterations: 1,
      iterationStart: 0,
      delay: 0,
      endDelay: 0,
      direction: "alternate",
      duration: 2000,
      fill: "forwards",
      easing: "linear"
    };

    // section4로의 전환 감지
    if (destination.index == 3) {
      console.log("페이지 전환을 감지하였습니다.");
      // 애니메이션 대상 요소 설정
      const html = document.querySelector("#html");
      const css = document.querySelector("#css");
      const js = document.querySelector("#js");

      const targets = [html, css, js];
      const effects = ["fadeInLeft", "fadeInDown", "fadeInRight"];

      // 애니메이션 재생
      for (let i = 0; i < targets.length; i++){
        const keyframes = animations.animations[effects[i]];
        targets[i].animate(keyframes, options);
      }

      let keyframes = animations.animations["fadeInDown"];
      document.querySelector("#css").animate(keyframes, options);
    }
  }
});