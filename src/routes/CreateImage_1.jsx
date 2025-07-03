import "../App.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import challenges from "../dummy/challenges";
import { useNavigate } from "react-router-dom";

const CreateImage_1 = () => {
  const { id } = useParams();
  const challenge = challenges.find((c) => String(c.id) === id);

  if (!challenge) return <div>문제를 찾을 수 없습니다.</div>;

  const [isTestExecuted, setIsTestExecuted] = useState(false);
  const [promptText, setPromptText] = useState("");
  const [likedImages, setLikedImages] = useState(new Set());
  const navigate = useNavigate();

  const handleTestExecution = () => {
    setIsTestExecuted(true);
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
                <div className="Frame55" onClick={handleReset}>
                  <div className="button-text">다시하기</div>
                </div>
              </div>
            </>
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
