import "../App.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const CreateCode_1 = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [challenge, setChallenge] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [apiLoading, setApiLoading] = useState(false);
  const [token, setToken] = useState("");
  const [currentCode, setCurrentCode] = useState("");
  const [submissionResult, setSubmissionResult] = useState(null);

  const handleHeaderClick = () => {
    navigate("/");
  };

  const handleSubmit = async () => {
    setApiLoading(true);
    try {
      const response = await fetch("http://localhost:8000/api/score-code/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          challenge_id: challenge.id,
          user_code: result.replace(/```(\w+)?\n([\s\S]*?)\n```/, "$2").trim(),
        }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Submission error:", errorData);
        alert("제출 실패: " + (errorData.detail || response.status));
        setApiLoading(false);
        return;
      }
      const data = await response.json();
      console.log("Submission result:", data);
      setSubmissionResult(data);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission failed:", error);
      alert("제출 중 에러가 발생했습니다.");
    }
    setApiLoading(false);
  };

  const handleRetry = () => {
    setIsSubmitted(false);
  };

  const handleRun = async () => {
    setApiLoading(true);
    setResult("");
    try {
      const response = await fetch("http://localhost:8000/api/generate-code/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          challenge_id: challenge.id,
          prompt: prompt,
          current_code: currentCode,
        }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        setResult("에러: " + (errorData.detail || response.status));
        setApiLoading(false);
        return;
      }
      const data = await response.json();
      setResult(data.new_code);
    } catch (error) {
      setResult("에러가 발생했습니다.");
    }
    setApiLoading(false);
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
              <span className="info-value">
                {challenge.time_limit_ms
                  ? `${challenge.time_limit_ms / 1000}초`
                  : "-"}
              </span>
            </div>
            <div className="info-item">
              <span className="info-label">메모리 제한</span>
              <span className="info-value">
                {challenge.memory_limit_mb
                  ? `${challenge.memory_limit_mb} MB`
                  : "-"}
              </span>
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
            <div className="div-wrapper"></div>
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
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
              </div>
            </div>
            {!isSubmitted && (
              <div className="button-section">
                <div className="Frame55">
                  <div
                    className="button-text"
                    onClick={handleRun}
                    disabled={apiLoading}
                  >
                    {apiLoading ? "실행 중..." : "코드 생성"}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="column-2-bottom">
            <div className="result-section">
              <div className="result-label">실행 결과</div>
              <div className="result-content">
                {result ? (
                  <SyntaxHighlighter
                    language={result.match(/```(\w+)\n/)?.[1] || "text"}
                    style={solarizedlight}
                    customStyle={{
                      background: "none",
                      padding: "0",
                      fontSize: "16px",
                      whiteSpace: "pre-wrap",
                      wordBreak: "break-all",
                    }}
                  >
                    {result.replace(/```(\w+)?\n([\s\S]*?)\n```/, "$2").trim()}
                  </SyntaxHighlighter>
                ) : isSubmitted ? (
                  "제출 완료"
                ) : (
                  "실행 버튼을 눌러 결과를 확인하세요."
                )}
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
                  {submissionResult && submissionResult.results.map((res) => (
                    <p key={res.test_case_id}>
                      테스트 {res.test_case_id}: {res.passed ? "성공" : "실패"}
                      {res.stdout && ` (출력: ${res.stdout.trim()})`}
                      {res.stderr && ` (에러: ${res.stderr.trim()})`}
                    </p>
                  ))}
                </div>
              </div>
              <div className="grading-result-section">
                <h3 className="grading-result-title">채점 결과</h3>
                <div className="grading-result-box">
                  {submissionResult && (
                    <>
                      <p className="correct-answer">
                        {submissionResult.total_passed === submissionResult.total_test_cases
                          ? "정답입니다!"
                          : `일부 테스트 실패 (${submissionResult.total_passed}/${submissionResult.total_test_cases})`}
                      </p>
                      {submissionResult.results[0] && (
                        <>
                          <p className="memory-info">메모리: {submissionResult.results[0].max_memory_kb} KB</p>
                          <p className="time-info">시간: {Math.round(submissionResult.results[0].elapsed_time * 1000)} ms</p>
                        </>
                      )}
                    </>
                  )}
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
