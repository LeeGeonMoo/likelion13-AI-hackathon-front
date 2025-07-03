import "../App.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const CreateCode_1 = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [challenge, setChallenge] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleHeaderClick = () => {
    navigate("/");
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleRetry = () => {
    setIsSubmitted(false);
  };

  useEffect(() => {
    const fetchChallenge = async () => {
      try {
        const res = await fetch(`http://localhost:8000/api/challenges/${id}/`);
        if (!res.ok) throw new Error("Failed to fetch challenge");
        const data = await res.json();
        setChallenge(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchChallenge();
  }, [id]);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러: {error}</div>;
  if (!challenge) return <div>문제를 찾을 수 없습니다.</div>;

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
          <h2 className="challenge-title">{challenge.title}</h2>
          <div className="challenge-info">
            <div className="info-item">
              <span className="info-label">시간제한</span>
              <span className="info-value">{challenge.time_limit_ms ? `${challenge.time_limit_ms/1000}초` : "-"}</span>
            </div>
            <div className="info-item">
              <span className="info-label">메모리 제한</span>
              <span className="info-value">{challenge.memory_limit_mb ? `${challenge.memory_limit_mb} MB` : "-"}</span>
            </div>
            <div className="info-item">
              <span className="info-label">정답비율</span>
              <span className="info-value">-</span>
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
              <p className="p">{challenge.problem_statement}</p>
            </div>
          </div>
          <div className="frame">
            <div className="div-wrapper">
              <div className="text-wrapper">🎯 입력</div>
            </div>
            <div className="div">
              <p className="p">{challenge.input_example}</p>
            </div>
          </div>
          <div className="frame">
            <div className="div-wrapper">
            </div>
            <div className="div">
              <p className="p">{challenge.output_example}</p>
            </div>
          </div>
          <div className="frame">
            <div className="div-wrapper">
              <div className="text-wrapper">📏 제한</div>
            </div>
            <div className="div">
              <p className="p">난이도: {challenge.challenge_level}</p>
            </div>
          </div>
          <button onClick={() => navigate(`/create-code/${challenge.id}`)}>
            코드 문제 풀기
          </button>
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
