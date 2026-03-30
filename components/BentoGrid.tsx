"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";

const Card = ({
  children,
  className,
  colSpan,
  rowSpan,
}: {
  children: React.ReactNode;
  className?: string;
  colSpan?: string;
  rowSpan?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className={`
    relative overflow-hidden rounded-3xl
    bg-zinc-900/50 backdrop-blur-xl border border-white/10
    shadow-lg hover:border-white/20 transition-all duration-500
    flex flex-col
    ${colSpan} ${rowSpan} ${className}
    group
  `}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    {children}
  </motion.div>
);

const IntroCard = () => (
  <div className="p-8 md:p-10 flex flex-col justify-between h-full relative">
    <div className="flex flex-col md:flex-row gap-8 items-start">
      <div className="relative shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-white/20 shadow-[0_0_30px_rgba(139,92,246,0.3)]">
        <Image
          src="/profile.png"
          alt="Syamsul Huda Profile"
          fill
          className="object-cover scale-110"
        />
      </div>
      <div>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Who am I?</h2>
        <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-xl">
          Go backend engineer building production-grade LLM systems — from gRPC
          microservices and MCP protocol bridges to multi-agent AI architectures
          and RAG pipelines. I validate AI-generated code against production
          standards with SonarQube, hexagonal architecture, and CI/CD pipelines.
        </p>
      </div>
    </div>

    {/* Stats bar */}
    <div className="mt-6 grid grid-cols-3 gap-4 border-t border-white/[0.06] pt-6">
      {[
        { value: "3+", label: "Years Backend" },
        { value: "5", label: "Production Systems" },
        { value: "Go", label: "Primary Language" },
      ].map((stat) => (
        <div key={stat.label} className="flex flex-col">
          <span className="text-2xl font-bold text-white font-mono">{stat.value}</span>
          <span className="text-white/40 text-xs uppercase tracking-widest mt-0.5">{stat.label}</span>
        </div>
      ))}
    </div>

    <div className="mt-6">
      <p className="text-violet-400 font-semibold uppercase tracking-widest text-sm mb-4 font-mono">
        Focus Areas
      </p>
      <div className="flex flex-wrap gap-2">
        {["Go Microservices", "LLM Integration", "Agentic Systems", "RAG Pipelines", "Code Quality"].map(
          (tag) => (
            <span
              key={tag}
              className="border border-white/10 bg-white/5 text-slate-300 px-3 py-1.5 rounded-full text-xs font-mono"
            >
              {tag}
            </span>
          )
        )}
      </div>
    </div>
  </div>
);

const SkillsMarquee = () => {
  const flatSkills = skillCategories.flatMap((c) => c.skills);
  return (
    <div className="flex flex-col justify-center h-full relative overflow-hidden bg-white/5 w-full py-8">
      <div className="flex gap-4 md:gap-8 items-center animate-marquee whitespace-nowrap px-4 w-full">
        {[...flatSkills, ...flatSkills, ...flatSkills].map((skill, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
          >
            <span className="text-lg md:text-xl font-bold uppercase tracking-wider block text-white/80 font-mono">
              {skill}
            </span>
          </div>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#18181b] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#18181b] to-transparent z-10" />
    </div>
  );
};

const ProjectsCard = () => (
  <div className="p-8 h-full flex flex-col relative overflow-hidden group">
    <h2 className="text-2xl font-bold mb-6 text-white z-10">Featured Projects</h2>
    <div className="flex-1 overflow-y-auto pr-4 space-y-4 custom-scrollbar z-10">
      {projects.slice(0, 3).map((p) => (
        <div
          key={p.id}
          className="p-4 rounded-xl bg-black/40 border border-white/5 hover:border-violet-500/30 transition-colors"
        >
          <h3 className="text-white font-semibold mb-1">{p.title}</h3>
          <p className="text-white/50 text-xs mb-3 line-clamp-2">{p.description}</p>
          <div className="flex gap-2 flex-wrap">
            {p.badges.slice(0, 3).map((b) => (
              <span
                key={b}
                className="text-[10px] text-violet-300 bg-violet-500/10 px-2 py-0.5 rounded font-mono"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
    <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-zinc-900/90 to-transparent pointer-events-none z-20" />
  </div>
);

const ContactCard = () => (
  <div className="h-full w-full relative group p-8 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-violet-900/40 to-black">
    <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
      <div className="w-32 h-32 rounded-full border-4 border-dashed border-white animate-[spin_10s_linear_infinite]" />
    </div>

    <div className="z-10">
      <h3 className="text-2xl font-bold text-white mb-2">Let&apos;s connect</h3>
      <p className="text-white/60 text-sm">Open to contract opportunities</p>
      <div className="flex items-center gap-2 mt-2">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-green-400 text-xs font-mono uppercase tracking-widest">Available now</span>
      </div>
    </div>

    <div className="z-10 mt-6 flex flex-col gap-3">
      <a
        href="mailto:syamsulhuda.uul@gmail.com"
        className="inline-block bg-white text-black font-bold px-6 py-3 rounded-full hover:scale-105 transition-transform font-mono text-sm"
      >
        Email Me ↗
      </a>
      <a
        href="https://github.com/syamsulhudauul"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block border border-white/20 text-white/70 hover:text-white hover:border-white/40 font-mono text-xs px-4 py-2 rounded-full transition-colors"
      >
        github.com/syamsulhudauul ↗
      </a>
    </div>
  </div>
);

// ─── Agent Flow Card ──────────────────────────────────────────────────────────

const AGENT_NODES = [
  { id: "orch",   label: "ORCHESTRATOR",   x: 200, y: 40,  color: "#a78bfa" },
  { id: "rag",    label: "RAG Agent",      x: 60,  y: 140, color: "#818cf8" },
  { id: "code",   label: "Code Agent",     x: 200, y: 140, color: "#818cf8" },
  { id: "search", label: "Search Agent",   x: 340, y: 140, color: "#818cf8" },
  { id: "result", label: "Tool Results",   x: 200, y: 230, color: "#6d28d9" },
];

const AGENT_EDGES = [
  { from: 0, to: 1, delay: "0s"    },
  { from: 0, to: 2, delay: "0.5s"  },
  { from: 0, to: 3, delay: "1s"    },
  { from: 1, to: 4, delay: "1.5s"  },
  { from: 2, to: 4, delay: "2s"    },
  { from: 3, to: 4, delay: "2.5s"  },
];

const AgentFlowCard = () => (
  <div className="p-6 h-full flex flex-col">
    <p className="text-violet-400 font-mono text-xs uppercase tracking-widest mb-1">
      Architecture
    </p>
    <h3 className="text-white font-bold text-lg mb-4">Multi-Agent Topology</h3>
    <div className="flex-1 flex items-center justify-center">
      <svg
        viewBox="0 0 400 280"
        className="w-full max-h-[200px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <style>{`
            @keyframes travel {
              0%   { offset-distance: 0%;   opacity: 0; }
              8%   { opacity: 1; }
              92%  { opacity: 1; }
              100% { offset-distance: 100%; opacity: 0; }
            }
            .dot-travel {
              animation: travel 2.5s ease-in-out infinite;
              offset-rotate: 0deg;
            }
          `}</style>
          {AGENT_EDGES.map((e, i) => {
            const from = AGENT_NODES[e.from];
            const to = AGENT_NODES[e.to];
            return (
              <path
                key={`path-def-${i}`}
                id={`edge-path-${i}`}
                d={`M${from.x},${from.y} L${to.x},${to.y}`}
                fill="none"
              />
            );
          })}
        </defs>

        {/* Edges */}
        {AGENT_EDGES.map((e, i) => {
          const from = AGENT_NODES[e.from];
          const to = AGENT_NODES[e.to];
          return (
            <line
              key={`edge-${i}`}
              x1={from.x} y1={from.y}
              x2={to.x}   y2={to.y}
              stroke="rgba(139,92,246,0.25)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
          );
        })}

        {/* Traveling dots */}
        {AGENT_EDGES.map((e, i) => (
          <circle
            key={`dot-${i}`}
            r="3"
            fill="#a78bfa"
            className="dot-travel"
            style={{
              offsetPath: `path('M${AGENT_NODES[e.from].x},${AGENT_NODES[e.from].y} L${AGENT_NODES[e.to].x},${AGENT_NODES[e.to].y}')`,
              animationDelay: e.delay,
            } as React.CSSProperties}
          />
        ))}

        {/* Nodes */}
        {AGENT_NODES.map((n, i) => (
          <g key={`node-${i}`}>
            <rect
              x={n.x - 52} y={n.y - 16}
              width="104" height="32"
              rx="8"
              fill="rgba(0,0,0,0.6)"
              stroke={n.color}
              strokeWidth={i === 0 ? "1.5" : "1"}
              strokeOpacity={i === 0 ? "0.8" : "0.4"}
            />
            <text
              x={n.x} y={n.y + 5}
              textAnchor="middle"
              fontSize={i === 0 ? "9" : "8"}
              fontFamily="monospace"
              fill={n.color}
              fontWeight={i === 0 ? "bold" : "normal"}
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
    <p className="text-white/20 text-xs font-mono text-center mt-2">
      CrewAI · MCP Protocol · gRPC · SSE
    </p>
  </div>
);

// ─── Terminal Card ────────────────────────────────────────────────────────────

const LOG_SEQUENCE = [
  { text: "$ agent-runtime: initializing...",              color: "text-white/40" },
  { text: "✓ mcp-bridge: gRPC services registered [8]",   color: "text-green-400" },
  { text: "> orchestrator: routing to council...",         color: "text-blue-300"  },
  { text: "→ agent:fundamentals — analyzing AAPL data",   color: "text-violet-300"},
  { text: "→ agent:technicals — RSI 58.2, MACD bullish",  color: "text-violet-300"},
  { text: "→ agent:sentiment — scanning 42 news docs",    color: "text-violet-300"},
  { text: "◎ council voting... [3/3 agents ready]",       color: "text-yellow-300"},
  { text: "✓ consensus: BUY signal [87% confidence]",     color: "text-green-400" },
  { text: "→ rag_agent: embedding query [k=5]",           color: "text-violet-300"},
  { text: "✓ retrieved 12 chunks [sim > 0.82]",           color: "text-green-400" },
  { text: "→ code_agent: generating response...",         color: "text-violet-300"},
  { text: "✓ pipeline complete [847ms · 2,341 tokens]",   color: "text-green-400" },
  { text: "$ awaiting next query...",                      color: "text-white/40"  },
];

const TerminalCard = () => {
  const [visibleLines, setVisibleLines] = useState<typeof LOG_SEQUENCE>([]);
  const [lineIdx, setLineIdx] = useState(0);

  useEffect(() => {
    const tick = () => {
      setVisibleLines((prev) => {
        const next = [...prev, LOG_SEQUENCE[lineIdx % LOG_SEQUENCE.length]];
        return next.slice(-7);
      });
      setLineIdx((i) => i + 1);
    };

    // seed initial lines
    setVisibleLines(LOG_SEQUENCE.slice(0, 3));
    setLineIdx(3);

    const interval = setInterval(tick, 1300);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="p-6 h-full flex flex-col font-mono">
      {/* macOS-style title bar */}
      <div className="flex items-center gap-2 mb-5">
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="text-white/25 text-xs ml-2">agent-runtime.log</span>
      </div>

      <div className="flex-1 overflow-hidden flex flex-col justify-end gap-1.5">
        {visibleLines.map((line, i) => (
          <div
            key={i}
            className={`text-xs leading-relaxed ${line.color} transition-all duration-300`}
          >
            {line.text}
            {i === visibleLines.length - 1 && (
              <span className="animate-pulse ml-0.5">▌</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── Main Export ──────────────────────────────────────────────────────────────

export default function BentoGrid() {
  return (
    <section className="bg-black py-24 px-4 md:px-8 lg:px-12 relative z-20">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
        }
        .animate-marquee {
            animation: marquee 30s linear infinite;
        }
        .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(255,255,255,0.05);
            border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(255,255,255,0.2);
            border-radius: 4px;
        }
      `,
        }}
      />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 auto-rows-[250px] gap-4 md:gap-6">

        {/* Row 1-2 */}
        <Card colSpan="md:col-span-8" rowSpan="row-span-1 md:row-span-2">
          <IntroCard />
        </Card>
        <Card colSpan="md:col-span-4" rowSpan="row-span-1 md:row-span-2">
          <ProjectsCard />
        </Card>

        {/* Row 3 */}
        <Card colSpan="md:col-span-7" rowSpan="row-span-1" className="flex items-center justify-center p-0">
          <SkillsMarquee />
        </Card>
        <Card colSpan="md:col-span-5" rowSpan="row-span-1">
          <ContactCard />
        </Card>

        {/* Row 4 — Agent Architecture */}
        <Card colSpan="md:col-span-7" rowSpan="row-span-1">
          <AgentFlowCard />
        </Card>
        <Card colSpan="md:col-span-5" rowSpan="row-span-1" className="bg-black/80">
          <TerminalCard />
        </Card>

      </div>
    </section>
  );
}
