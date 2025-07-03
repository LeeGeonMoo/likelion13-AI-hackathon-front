import "../App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateCode_1 = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleHeaderClick = () => {
    navigate("/");
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleRetry = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="page-container">
      <header className="header">
        <div className="frame">
          <h3 onClick={handleHeaderClick} style={{ cursor: "pointer" }}>
            Prompteer
          </h3>
        </div>
      </header>
      <div className="content-layout">
        <div className="column-1">
          <h2 className="challenge-title">Challenge#12</h2>
          <div className="challenge-info">
            <div className="info-item">
              <span className="info-label">시간제한</span>
              <span className="info-value">1초</span>
            </div>
            <div className="info-item">
              <span className="info-label">메모리 제한</span>
              <span className="info-value">256 MB</span>
            </div>
            <div className="info-item">
              <span className="info-label">정답비율</span>
              <span className="info-value">22.699%</span>
            </div>
          </div>
          <div className="tags-container">
            <div className="frame">
              <div className="text-wrapper">#코드 생성</div>
            </div>
          </div>
          <div className="frame">
            <div className="div-wrapper">
              <div className="text-wrapper">📝 문제 상황</div>
            </div>
            <div className="div">
              <p className="p">
                알파벳 대문자로만 이루어진 문자열 S가 있고, 길이는 N이다. S[i]는
                S의 i번째 문자를 나타내고, S[i:j]는 S[i], S[i+1], ..., S[j-1],
                S[j]에 해당하는 S의 부분 문자열을 나타낸다. 이 문제에서 사용하는
                문자열의 인덱스는 1부터 시작한다. U(i, j)는 S[i:j]에 나타나는
                알파벳을 순서대로 정렬한 문자열을 의미하고, 중복해서 나타나는
                알파벳은 제외한다. 예를 들어, S = "ABCBA" 인 경우 U(1, 3) =
                "ABC"가 되며, U(2, 4) = "BC", U(1, 5) = "ABC"이다. 모든 1 ≤ i ≤
                j ≤ N에 대하여 U(i, j)을 구했을 때 이 문자열 중에서 서로 다른
                문자열이 모두 몇 개 있는지 구해보자.
              </p>
            </div>
          </div>
          <div className="frame">
            <div className="div-wrapper">
              <div className="text-wrapper">🎯 입력</div>
            </div>
            <div className="div">
              <p className="p">
                첫째 줄에 테스트 케이스의 개수 T가 주어진다. 각 테스트 케이스는
                한 줄로 이루어져 있고, 문자열 S가 주어진다.
              </p>
            </div>
          </div>
          <div className="frame">
            <div className="div-wrapper">
              <div className="text-wrapper">📤 출력</div>
            </div>
            <div className="div">
              <p className="p">
                각 테스트 케이스에 대해서 U(i, j)에 서로 다른 문자열이 몇 개
                있는지 출력한다.
              </p>
            </div>
          </div>
          <div className="frame">
            <div className="div-wrapper">
              <div className="text-wrapper">📏 제한</div>
            </div>
            <div className="div">
              <p className="p">
                1 ≤ T ≤ 10
                <br />1 ≤ N ≤ 100,000
              </p>
            </div>
          </div>
          <div className="frame">
            <div className="div-wrapper">
              <div className="text-wrapper">📥 예제 입력 1</div>
            </div>
            <div className="div">
              <p className="p">4</p>
            </div>
          </div>
        </div>
        <div className="column-2">
          <div className="column-2-top">
            <div className="prompt-section">
              <div className="prompt-input-container">
                <textarea
                  className="prompt-input"
                  placeholder="프롬프트를 입력하세요..."
                  disabled={isSubmitted}
                />
              </div>
            </div>
            {!isSubmitted && (
              <div className="button-section">
                <div className="Frame55">
                  <div className="button-text">실행(예제 테스트)</div>
                </div>
              </div>
            )}
          </div>
          <div className="column-2-bottom">
            <div className="result-section">
              <div className="result-label">실행 결과</div>
              <div className="result-content">
                {isSubmitted
                  ? "제출 완료"
                  : "실행 버튼을 눌러 결과를 확인하세요."}
              </div>
            </div>
            {!isSubmitted && (
              <div className="submit-section">
                <div className="Frame55" onClick={handleSubmit}>
                  <div className="button-text">최종 제출</div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="column-3">
          {!isSubmitted ? (
            <div className="column-3-content">
              standard output
              <br />
              Hello world!
            </div>
          ) : (
            <div className="submission-result">
              <div className="execution-result-section">
                <h3 className="execution-result-title">실행 결과</h3>
                <div className="execution-result-box">
                  <p>4</p>
                  <p>3</p>
                  <p>2</p>
                  <p>1</p>
                </div>
              </div>
              <div className="grading-result-section">
                <h3 className="grading-result-title">채점 결과</h3>
                <div className="grading-result-box">
                  <p className="correct-answer">정답입니다!</p>
                  <p className="memory-info">메모리: 34024 KB</p>
                  <p className="time-info">시간: 68 ms</p>
                </div>
              </div>
              <div className="retry-section">
                <div className="Frame55" onClick={handleRetry}>
                  <div className="button-text">다시 풀기</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateCode_1;
