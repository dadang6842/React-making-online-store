import { useFadeEffect } from './../functions/fade.js';

function Event() {
    let fade = useFadeEffect([]);
    
    return (
      <div className={"start " + fade}>
        <h4>오늘의 이벤트</h4>
        
        {/* 아래 이벤트 UI 구현 */}
        {/* <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
            <Route path="two" element={<div>생일 기념 쿠폰 받기</div>} />
          </Route> */}
      </div>
    );
  }

  export default Event;