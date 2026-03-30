"use client";

import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";
import Logo from "@/components/Logo";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ROLES = ["GO BACKEND ENGINEER", "LLM ENGINEER", "AGENT ARCHITECT", "AI/ML ENGINEER"];

function useTypewriter(words: string[], speed = 75, pause = 2000) {
  const [displayed, setDisplayed] = useState(words[0]);
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(words[0].length);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const delay = deleting
      ? speed / 2
      : charIdx === current.length
      ? pause
      : speed;

    const timer = setTimeout(() => {
      if (!deleting && charIdx < current.length) {
        setDisplayed(current.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      } else if (!deleting && charIdx === current.length) {
        setDeleting(true);
      } else if (deleting && charIdx > 0) {
        setDisplayed(current.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      } else {
        setDeleting(false);
        setWordIdx((i) => (i + 1) % words.length);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return displayed;
}

// Hub-and-spoke node network (orchestrator at center)
const NODES = [
  { x: 0.5,  y: 0.48 }, // 0 - ORCH (center)
  { x: 0.15, y: 0.18 }, // 1 - LLM
  { x: 0.82, y: 0.22 }, // 2 - RAG
  { x: 0.12, y: 0.72 }, // 3 - MCP
  { x: 0.75, y: 0.75 }, // 4 - AGENT
  { x: 0.42, y: 0.82 }, // 5 - GO
  { x: 0.88, y: 0.5  }, // 6 - API
];

const EDGES = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6],
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const role = useTypewriter(ROLES);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-element",
        { y: 50, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.5,
          stagger: 0.2,
          ease: "power3.out",
        }
      );

      gsap.to(textRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        y: 150,
        opacity: 0,
      });

      gsap.to(".hero-grid", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        y: 50,
        opacity: 0,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  const tiltX = (mousePos.y - 0.5) * -10;
  const tiltY = (mousePos.x - 0.5) * 10;

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Mouse-reactive grid */}
      <div
        className="hero-grid absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          backgroundPosition: "center center",
          transform: `perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
          transformOrigin: "center center",
          transition: "transform 0.08s linear",
        }}
      />

      {/* Animated node network */}
      <svg
        className="hero-element absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <style>{`
            @keyframes flow-dash {
              0% { stroke-dashoffset: 40; }
              100% { stroke-dashoffset: 0; }
            }
            @keyframes node-pulse {
              0%, 100% { opacity: 0.4; r: 3; }
              50% { opacity: 0.9; r: 5; }
            }
            @keyframes dot-travel {
              0% { offset-distance: 0%; opacity: 0; }
              10% { opacity: 1; }
              90% { opacity: 1; }
              100% { offset-distance: 100%; opacity: 0; }
            }
            .flow-edge {
              stroke-dasharray: 6 8;
              animation: flow-dash 2s linear infinite;
            }
            .node-core {
              animation: node-pulse 3s ease-in-out infinite;
            }
          `}</style>
        </defs>

        {/* Edges */}
        {EDGES.map(([a, b], i) => {
          const na = NODES[a], nb = NODES[b];
          const x1 = `${na.x * 100}%`, y1 = `${na.y * 100}%`;
          const x2 = `${nb.x * 100}%`, y2 = `${nb.y * 100}%`;
          return (
            <line
              key={i}
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="rgba(139,92,246,0.35)"
              strokeWidth="1"
              className="flow-edge"
              style={{ animationDelay: `${i * 0.35}s` }}
            />
          );
        })}

        {/* Nodes */}
        {NODES.map((n, i) => (
          <g key={i}>
            {/* Outer halo */}
            <circle
              cx={`${n.x * 100}%`}
              cy={`${n.y * 100}%`}
              r={i === 0 ? "16" : "10"}
              fill="none"
              stroke="rgba(139,92,246,0.12)"
              strokeWidth="1"
            />
            {/* Core dot */}
            <circle
              cx={`${n.x * 100}%`}
              cy={`${n.y * 100}%`}
              r="3"
              fill={i === 0 ? "rgba(167,139,250,0.9)" : "rgba(139,92,246,0.7)"}
              className="node-core"
              style={{ animationDelay: `${i * 0.4}s` }}
            />
          </g>
        ))}
      </svg>

      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent z-10" />

      {/* Top Left Logo */}
      <div className="hero-element absolute top-8 left-8 z-30 hidden md:block">
        <Logo size={72} />
      </div>

      <div ref={textRef} className="relative z-20 w-full px-6 flex flex-col justify-end min-h-[50vh] pb-24 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-8">

          {/* Typewriter title */}
          <div className="hero-element">
            <span className="block text-violet-400/70 font-mono text-sm md:text-base tracking-[0.35em] mb-3">
              $ whoami
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-bold text-white leading-[0.85] tracking-tighter mix-blend-difference font-mono">
              {role}
              <span className="animate-pulse text-violet-400">_</span>
            </h1>
          </div>

          <div className="max-w-xs md:max-w-sm flex flex-col gap-6">
            <p className="hero-element text-lg md:text-xl text-white/60 leading-relaxed font-light">
              Building intelligent systems using advanced orchestration,
              state-of-the-art models, and high-throughput backends.
            </p>

            <div className="hero-element flex flex-wrap gap-2">
              {["Go", "LLMs", "MCP", "RAG", "Multi-Agent"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs uppercase tracking-widest border border-violet-500/40 bg-violet-500/10 px-3 py-1 rounded-full text-violet-300 backdrop-blur-md font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="hero-element animate-bounce mt-4 opacity-50 text-white">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="hidden md:block"
              >
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
              <span className="md:hidden text-xs uppercase tracking-widest font-mono">
                scroll
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
