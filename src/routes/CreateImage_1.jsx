import { useState } from "react";

const CreateImage_1 = () => {
  const [isTestExecuted, setIsTestExecuted] = useState(false);
  const [promptText, setPromptText] = useState("");

  const handleTestExecution = () => {
    setIsTestExecuted(true);
  };

  return (
    <div className="page-container">
      <header className="header">
        <div className="frame">
          <h3>Prompteer</h3>
        </div>
      </header>
      <div className="content-layout">
        <div className="column-1">
          <h2 className="challenge-title">Challenge#11</h2>
          <div className="tags-container">
            <div className="frame">
              <div className="text-wrapper">#사진 생성</div>
            </div>
            <div className="frame">
              <div className="text-wrapper">#강아지</div>
            </div>
          </div>
          <div className="frame">
            <div className="div-wrapper">
              <div className="text-wrapper">📝 문제 상황</div>
            </div>
            <div className="div">
              <p className="p">
                당신은 애견 커뮤니티에 올릴, 사람들의 시선을 사로잡 는
                사랑스러운 강아지 사진이 필요합니다. 이번 주인공 은 &#39;비숑
                프리제&#39;입니다.
              </p>
            </div>
          </div>
          <div className="frame">
            <div className="div-wrapper">
              <div className="text-wrapper">🎯 과제</div>
            </div>
            <div className="div">
              <p className="p">
                귀여운 비숑의 사진을 최대한 리얼리스틱하게, 프롬프 팅을 적절히
                잘 사용해서 만들어봅시다!
              </p>
            </div>
          </div>
          <div className="frame">
            <div className="div-wrapper">
              <div className="text-wrapper">📜 제약 조건 및 채점 기준</div>
            </div>
            <div className="div">
              <p className="p">
                <strong>AI 모델</strong>: DALL-E 3
              </p>
              <p className="p">
                <strong>채점 방식</strong>: AI 평가 50% + 커뮤니티 평가 50%
              </p>
            </div>
          </div>
        </div>
        <div className="column-2">
          <div className="input-section">
            <textarea
              className="prompt-input"
              placeholder="이곳에 이미지 생성 프롬프트를 작성하세요..."
              value={promptText}
              onChange={(e) => setPromptText(e.target.value)}
              disabled={isTestExecuted}
            />
          </div>
          {!isTestExecuted && (
            <div className="button-section">
              <div className="Frame54">
                <div className="button-text">최종 제출</div>
              </div>
              <div className="Frame55" onClick={handleTestExecution}>
                <div className="button-text">테스트 실행</div>
              </div>
            </div>
          )}
        </div>
        <div className="column-3">
          {!isTestExecuted ? (
            <div className="column-3-content">
              '테스트 실행' 버튼을 눌러
              <br />
              AI가 생성한 이미지를 확인하세요.
            </div>
          ) : (
            <>
              <div className="image-section">
                <div className="image-placeholder">
                  AI 생성 이미지가 여기에 표시됩니다
                </div>
              </div>
              <div className="button-section">
                <div className="Frame54">
                  <div className="button-text">다른 사람한테 공유하기</div>
                </div>
                <div className="Frame55">
                  <div className="button-text">다시하기</div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateImage_1;
