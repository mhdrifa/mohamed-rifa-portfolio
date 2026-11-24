import { lazy, Suspense, useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, ArrowRight } from 'lucide-react';
import { PIPELINE_STAGES } from '../three/DataPipelineScene';

const DataPipelineScene = lazy(() =>
  import('../three/DataPipelineScene').then((mod) => ({
    default: mod.DataPipelineScene,
  }))
);

export function DataArchitecture() {
  const [selectedStageId, setSelectedStageId] = useState<string>('bronze');
  const activeStage =
    PIPELINE_STAGES.find((s) => s.id === selectedStageId) || PIPELINE_STAGES[0];

  return (
    <section id="architecture" className="py-24 relative">
      <div className="section-container space-y-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#00E5FF]">
              Interactive 3D Data Engineering Showcase
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F8FAFC]">
              From Raw Data to Business Intelligence
            </h2>
            <p className="max-w-2xl text-sm sm:text-base text-[#94A3B8]">
              Explore how raw operational sources evolve through Bronze, Silver, and Gold Medallion layers into Star Schema analytics. Select any stage below or inside the 3D scene.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-xl border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-xs text-amber-200 self-start">
            <AlertCircle className="h-4 w-4 shrink-0 text-amber-300" aria-hidden="true" />
            <span>Illustrative technical architecture (not a live production stream)</span>
          </div>
        </div>

        {/* 3D Pipeline Visualization */}
        <Suspense
          fallback={
            <div className="h-[320px] rounded-3xl border border-white/10 bg-[#101827]/50 animate-pulse" />
          }
        >
          <DataPipelineScene
            selectedStageId={selectedStageId}
            onSelectStage={setSelectedStageId}
          />
        </Suspense>

        {/* Accessible HTML Stage Selector + Detailed Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {PIPELINE_STAGES.map((stage, idx) => {
              const isSelected = stage.id === selectedStageId;
              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setSelectedStageId(stage.id)}
                  className={`flex flex-col justify-between rounded-2xl border p-4 text-left transition-all ${
                    isSelected
                      ? 'border-[#00E5FF] bg-[#00E5FF]/10 shadow-cyanGlow'
                      : 'border-white/10 bg-[#101827]/60 hover:border-white/25'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="font-mono text-xs text-[#94A3B8]">0{idx + 1}</span>
                    {idx < PIPELINE_STAGES.length - 1 && (
                      <ArrowRight className="h-3.5 w-3.5 text-[#94A3B8]/60" aria-hidden="true" />
                    )}
                  </div>
                  <p className="mt-3 font-display text-sm sm:text-base font-semibold text-[#F8FAFC]">
                    {stage.title}
                  </p>
                </button>
              );
            })}
          </div>

          <motion.div
            key={activeStage.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:col-span-5 glass-panel rounded-3xl p-6 sm:p-7 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-[#00E5FF]">
                  Selected Stage
                </span>
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: activeStage.color }}
                />
              </div>
              <h3 className="mt-2 font-display text-2xl font-bold text-[#F8FAFC]">
                {activeStage.title}
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#94A3B8]">
                {activeStage.summary}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-2">
              {activeStage.concepts.map((concept) => (
                <span
                  key={concept}
                  className="rounded-lg border border-white/10 bg-[#05070D]/80 px-3 py-1 font-mono text-xs text-[#F8FAFC]"
                >
                  {concept}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
