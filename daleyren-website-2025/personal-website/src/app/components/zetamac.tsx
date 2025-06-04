"use client";
import { useEffect, useRef, useState } from "react";

/* ---------- helpers ---------- */
type Op = "+" | "-" | "×" | "÷";
interface Prob { l: number; r: number; op: Op }

const rand = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const makeProb = (): Prob => {
  const ops: Op[] = ["+", "-", "×", "÷"];
  const op = ops[Math.floor(Math.random() * ops.length)];
  let l = rand(2, 12);
  let r = rand(2, 12);
  if (op === "÷") l = l * r;          // keep division integer
  return { l, r, op };
};
const solve = ({ l, r, op }: Prob) =>
  op === "+" ? l + r :
  op === "-" ? l - r :
  op === "×" ? l * r :
               l / r;

/* ---------- component ---------- */
export default function ZetamacMini() {
  const ROUND = 60;                       // seconds per round
  const [prob, setProb] = useState<Prob | null>(null);   // null until mounted
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [time,  setTime]  = useState(ROUND);
  const inputRef = useRef<HTMLInputElement>(null);

  /* create first problem only on the client ----------------------------- */
  useEffect(() => { setProb(makeProb()); }, []);

  /* timer ---------------------------------------------------------------- */
  useEffect(() => {
    if (time <= 0) return;
    const id = setInterval(() => setTime(t => t - 1), 1_000);
    return () => clearInterval(id);
  }, [time]);

  /* auto-check answer ---------------------------------------------------- */
  useEffect(() => {
    if (!prob || time <= 0) return;
    const user = parseFloat(answer);
    if (Number.isNaN(user)) return;
    if (Math.abs(user - solve(prob)) < 1e-6) {
      setScore(s => s + 1);
      setProb(makeProb());
      setAnswer("");
      inputRef.current?.focus();
    }
  }, [answer, prob, time]);

  /* reset ---------------------------------------------------------------- */
  const restart = () => {
    setScore(0);
    setTime(ROUND);
    setProb(makeProb());
    setAnswer("");
    inputRef.current?.focus();
  };

  /* --------------------------------------------------------------------- */
  if (!prob) return null;                 // nothing until first mount

  return (
    <div className="bg-gray-100 text-black rounded-lg shadow-lg p-6 w-80 mx-auto text-center">
      <h2 className="text-xl font-bold mb-4">Zetamac Mini</h2>

      {time > 0 ? (
        <>
          <div className="text-3xl font-mono mb-4 select-none">
            {prob.l} {prob.op} {prob.r}
          </div>

          <input
            ref={inputRef}
            value={answer}
            onChange={e => setAnswer(e.target.value)}
            className="w-24 h-16 text-center border-2 border-blue-400 rounded
                       text-xl leading-none focus:outline-none focus:ring-2
                       focus:ring-blue-500"
            autoFocus
          />

          <p className="mt-4 text-gray-600 text-sm">Type the answer</p>
          <div className="mt-4 text-sm space-y-1">
            <p>Score: {score}</p>
            <p>Time left: {time}s</p>
          </div>
        </>
      ) : (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Time&apos;s up!</h3>
          <p className="text-lg">Final Score: {score}</p>
          <button
            onClick={restart}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}
