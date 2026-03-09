import './EightBall.css';

export default function EightBall({ answer, type, shaking, onClick }) {
  return (
    <div
      className={`ball ${shaking ? 'shaking' : ''}`}
      onClick={onClick}
      role="button"
      aria-label="Magic 8 Ball — click to ask a question"
    >
      <div className="ball-label">8</div>
      <div className={`window ${type ?? ''}`}>
        <div className={`answer ${answer && !shaking ? 'visible' : ''}`}>
          {answer || ''}
        </div>
      </div>
    </div>
  );
}
