"use client";
import { useEffect, useRef, useState } from "react";

/* ---------- helpers ---------- */
type Op = "+" | "-" | "×" | "÷";

const randInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const newProblem = (): { l: number; r: number; op: Op } => {
  const ops: Op[] = ["+", "-", "×", "÷"];
  const op = ops[Math.floor(Math.random() * ops.length)];

  let l = randInt(2, 12);
  let r = randInt(2, 12);

  // ensure integer division
  if (op === "÷") {
    l = l * r;
  }
  return { l, r, op };
};

const solve = ({ l, r, op }: { l: number; r: number; op: Op }) => {
  switch (op) {
    case "+":
      return l + r;
    case "-":
      return l - r;
    case "×":
      return l * r;
    case "÷":
      return l / r;
  }
};

/* ---------- component ---------- */
export default function ZetamacMini() {
  const ROUND = 60; // seconds
  const [prob, setProb] = useState(newProblem());
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(ROUND);
  const inputRef = useRef<HTMLInputElement>(null);

  /* timer ----------------------- */
  useEffect(() => {
    if (time <= 0) return;
    const t = setInterval(() => setTime((s) => s - 1), 1000);
    return () => clearInterval(t);
  }, [time]);

  /* auto-check answer ----------- */
  useEffect(() => {
    if (time <= 0) return; // stop when round finished
    const user = parseFloat(input);
    if (Number.isNaN(user)) return;
    const correct = solve(prob);
    if (Math.abs(user - correct) < 1e-3) {
      setScore((s) => s + 1);
      setProb(newProblem());
      setInput("");
      inputRef.current?.focus();
    }
  }, [input, prob, time]);

  /* reset round ----------------- */
  const playAgain = () => {
    setScore(0);
    setTime(ROUND);
    setProb(newProblem());
    setInput("");
    inputRef.current?.focus();
  };

  /* ui -------------------------- */
  return (
    <div className="bg-gray-100 text-black rounded-lg shadow-lg p-6 w-80 mx-auto text-center">
      <h2 className="text-xl font-bold mb-4">Mini Zetamac</h2>

      {time > 0 ? (
        <>
          <div className="text-3xl font-mono mb-4 select-none">
            {prob.l} {prob.op} {prob.r}
          </div>

          <input
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            className="w-24 h-16 text-center border p-2 rounded text-xl"
            autoFocus
          />

          <p className="mt-4 text-gray-600 text-sm">Type the answer</p>
          <div className="mt-4 space-y-1 text-sm">
            <p>Score: {score}</p>
            <p>Time left: {time}s</p>
          </div>
        </>
      ) : (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Time&apos;s up!</h3>
          <p className="text-lg">Final Score: {score}</p>
          <button
            onClick={playAgain}
            className="bg-blue-600 text-white px-4 pt-3 pb-2 rounded hover:bg-blue-700 transition"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}
