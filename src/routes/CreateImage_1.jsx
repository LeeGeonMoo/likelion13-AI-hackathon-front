import "../App.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import challenges from "../dummy/challenges";
import { useNavigate } from "react-router-dom";

const CreateImage_1 = () => {
  const { id } = useParams();
  const [challenge, setChallenge] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isTestExecuted, setIsTestExecuted] = useState(false);
  const [promptText, setPromptText] = useState("");
  const [likedImages, setLikedImages] = useState(new Set());
  const navigate = useNavigate();
  const [imageLoading, setImageLoading] = useState(false);
  const [imageError, setImageError] = useState(null);
  const [generatedImage, setGeneratedImage] = useState(null);

  useEffect(() => {
    const fetchChallenge = async () => {
      try {
        const res = await fetch(`http://localhost:8000/api/challenges/${id}/`);
        if (!res.ok) throw new Error("Failed to fetch challenge");
        const data = await res.json();
        setChallenge(data);
        console.log("challenge data:", data);
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

  const handleTestExecution = async () => {
    setImageLoading(true);
    setImageError(null);
    setGeneratedImage(null);
    setIsTestExecuted(true);
    try {
      const res = await fetch("http://localhost:8000/api/generate-image/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: promptText,
          // 필요시 client_id 등 추가
        }),
      });
      if (!res.ok) throw new Error("이미지 생성 실패");
      const data = await res.json();
      if (data.image_base64) {
        setGeneratedImage(data.image_base64);
      } else {
        setImageError(data.error || "이미지 생성 실패");
      }
    } catch (err) {
      setImageError(err.message);
    } finally {
      setImageLoading(false);
    }
  };

  const handleReset = () => {
    setIsTestExecuted(false);
    setPromptText("");
    setLikedImages(new Set());
  };

  const handleHeaderClick = () => {
    navigate("/");
  };

  const handleLikeToggle = (imageId) => {
    setLikedImages((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(imageId)) {
        newSet.delete(imageId);
      } else {
        newSet.add(imageId);
      }
      return newSet;
    });
  };

  // 인기 이미지 데이터 (10개)
  const popularImages = [
    { id: 1, title: "인기 이미지 1" },
    { id: 2, title: "인기 이미지 2" },
    { id: 3, title: "인기 이미지 3" },
    { id: 4, title: "인기 이미지 4" },
    { id: 5, title: "인기 이미지 5" },
    { id: 6, title: "인기 이미지 6" },
    { id: 7, title: "인기 이미지 7" },
    { id: 8, title: "인기 이미지 8" },
    { id: 9, title: "인기 이미지 9" },
    { id: 10, title: "인기 이미지 10" },
  ];

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

          <div className="tags-container">
            <div className="frame">
              <div className="text-wrapper">{challenge.challenge_type}</div>
            </div>
          </div>
          <div className="frame">
            <div className="div">
              <p className="p">{challenge.description || challenge.problem_statement}</p>
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
          ) : imageLoading ? (
            <div className="column-3-content">이미지 생성 중...</div>
          ) : imageError ? (
            <div className="column-3-content" style={{color: 'red'}}>에러: {imageError}</div>
          ) : generatedImage ? (
            <>
              <div className="image-section">
                <img
                  src={`data:image/png;base64,${generatedImage}`}
                  alt="AI 생성 이미지"
                  className="image-placeholder"
                  style={{maxWidth: '100%', maxHeight: '300px'}}
                />
              </div>
              <div className="button-section">
                <div className="Frame54">
                  <div className="button-text">다른 사람한테 공유하기</div>
                </div>
                <div className="Frame55" onClick={handleReset}>
                  <div className="button-text">다시하기</div>
                </div>
              </div>
            </>
          ) : (
            <div className="column-3-content">이미지 없음</div>
          )}
        </div>
      </div>

      {/* 인기 이미지 섹션 - 테스트 실행 후에만 표시 */}
      {isTestExecuted && (
        <div className="popular-images-section">
          <h3 className="popular-images-title">인기 이미지</h3>
          <div className="popular-images-container">
            {popularImages.map((image) => (
              <div key={image.id} className="popular-image-item">
                <div className="popular-image-placeholder">{image.title}</div>
                <div
                  className={`heart-icon ${
                    likedImages.has(image.id) ? "liked" : ""
                  }`}
                  onClick={() => handleLikeToggle(image.id)}
                >
                  ♥
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateImage_1;
