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
  const [popularImages, setPopularImages] = useState([]); // 인기 이미지 상태 추가

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

  const fetchPopularImages = async () => {
    console.log("Attempting to fetch popular images for challenge ID:", id); // Debugging line
    try {
      const res = await fetch(`http://localhost:8000/api/challenges/${id}/images/`);
      if (!res.ok) throw new Error("Failed to fetch popular images");
      const data = await res.json();
      setPopularImages(data.images); // 백엔드 응답 구조에 따라 수정
    } catch (err) {
      console.error("Error fetching popular images:", err);
      // 에러 처리 (예: 사용자에게 메시지 표시)
    }
  };

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러: {error}</div>;
  if (!challenge) return <div>문제를 찾을 수 없습니다.</div>;

  const handleTestExecution = async () => {
    setImageLoading(true);
    setImageError(null);
    setGeneratedImage(null);
    setIsTestExecuted(true); // 테스트 실행 시 isTestExecuted를 true로 설정
    try {
      const res = await fetch("http://localhost:8000/api/generate-image/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: promptText,
          challenge_id: id,
          day_of_challenge: 1,
        }),
      });
      if (!res.ok) throw new Error("이미지 생성 실패");
      const data = await res.json();
      if (data.image_base64) {
        setGeneratedImage(data.image_base64);
        fetchPopularImages(); // 이미지 생성 성공 후 인기 이미지 불러오기
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
    setPopularImages([]); // 리셋 시 인기 이미지도 초기화
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
              '테스트 실행' 버튼을 눌러<br />AI가 생성한 이미지를 확인하세요.
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
                <img src={image.image_url} alt="인기 이미지" className="popular-image-placeholder" />
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
