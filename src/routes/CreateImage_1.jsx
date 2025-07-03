import "../App.css";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import challenges from "../dummy/challenges";

const CreateImage_1 = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const challenge = challenges.find((c) => String(c.id) === id);

  if (!challenge) return <div>문제를 찾을 수 없습니다.</div>;

  const [isTestExecuted, setIsTestExecuted] = useState(false);
  const [promptText, setPromptText] = useState("");

  const handleTestExecution = () => {
    setIsTestExecuted(true);
  };

  return (
    <div className="page-container">
      <header className="header">
        <div className="frame">
          <h3
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            Prompteer
          </h3>
        </div>
      </header>
      <div className="content-layout">
        <div className="column-1">
          <h2 className="challenge-title">{challenge.title}</h2>
          <div className="tags-container">
            <div className="frame">
              <div className="text-wrapper">{challenge.challenge_type}</div>
            </div>
          </div>
          <div className="frame">
            <div className="div">
              <p className="p">{challenge.description}</p>
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
