import { useState } from 'react';
import EightBall from './components/EightBall';
import './App.css';

const RESPONSES = [
  // Positive
  { text: 'It is certain', type: 'positive' },
  { text: 'It is decidedly so', type: 'positive' },
  { text: 'Without a doubt', type: 'positive' },
  { text: 'Yes, definitely', type: 'positive' },
  { text: 'You may rely on it', type: 'positive' },
  { text: 'As I see it, yes', type: 'positive' },
  { text: 'Most likely', type: 'positive' },
  { text: 'Outlook good', type: 'positive' },
  { text: 'Yes', type: 'positive' },
  { text: 'Signs point to yes', type: 'positive' },
  // Neutral
  { text: 'Reply hazy, try again', type: 'neutral' },
  { text: 'Ask again later', type: 'neutral' },
  { text: 'Better not tell you now', type: 'neutral' },
  { text: 'Cannot predict now', type: 'neutral' },
  { text: 'Concentrate and ask again', type: 'neutral' },
  // Negative
  { text: "Don't count on it", type: 'negative' },
  { text: 'My reply is no', type: 'negative' },
  { text: 'My sources say no', type: 'negative' },
  { text: 'Outlook not so good', type: 'negative' },
  { text: 'Very doubtful', type: 'negative' },
];

function randomResponse() {
  return RESPONSES[Math.floor(Math.random() * RESPONSES.length)];
}

export default function App() {
  const [response, setResponse] = useState(null);
  const [shaking, setShaking] = useState(false);

  function handleClick() {
    if (shaking) return;
    setShaking(true);
    setResponse(randomResponse());
    setTimeout(() => setShaking(false), 800);
  }

  return (
    <div className="app">
      <h1 className="title">Magic 8 Ball</h1>
      <p className="subtitle">Ask a question, then click the ball</p>
      <EightBall
        answer={response?.text ?? null}
        type={response?.type ?? null}
        shaking={shaking}
        onClick={handleClick}
      />
    </div>
  );
}
