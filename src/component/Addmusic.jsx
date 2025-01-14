import '../styles/Addmusic.css';

function Addmusic() {
    return (
      <>
      <div className="addmusic-container1">
      </div>
      <div className="addmusic-container2">
        <div className="findmusic">
          찾고 싶은 노래를 검색하세요
        </div>
        <div className="search">
          <input type="text" placeholder="검색어 입력" />
            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"/>
        </div>
        <div className="suggestion-container">
              <div className="suggestion">#annie</div>
              <div className="suggestion">#Drwoning</div>
              <div className="suggestion">#그XX</div>
              <div className="suggestion">#사랑 범벅</div>
              <div className="suggestion">#사랑한만큼</div>
        </div> 
      </div>
      </>
    );
  }
  
  export default Addmusic; 
  