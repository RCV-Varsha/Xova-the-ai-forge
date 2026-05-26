"use client";

import React from "react";
import { motion } from "framer-motion";
import { IndustryService } from "@/types/service";
import { 
  Zap, Database, Bot, ShieldCheck, Network, FileText, 
  Calendar, Users, Activity, LineChart, Route, Store,
  UserCircle, Cog, BarChart, Shield, CalendarClock, Video,
  FolderLock, Workflow, PenTool, CreditCard
} from "lucide-react";

const IconMap: Record<string, any> = {
  Zap, Database, Bot, ShieldCheck, Network, FileText, 
  Calendar, Users, Activity, LineChart, Route, Store,
  UserCircle, Cog, BarChart, Shield, CalendarClock, Video,
  FolderLock, Workflow, PenTool, CreditCard
};

export default function FeatureShowcase({ industry }: { industry: IndustryService }) {
  return (
    <section className="py-16 lg:py-24 bg-[#02040a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            System Features
          </h2>
          <p className="text-zinc-400 text-base font-light">
            Core functional capabilities built into your infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industry.features.map((feature, idx) => {
            const Icon = IconMap[feature.iconName] || Database;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 rounded-2xl border border-white/5 bg-[#050914] flex flex-col items-center text-center hover:border-white/10 transition-colors"
              >
                <div className="size-12 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center mb-6">
                  <Icon className="size-5 text-zinc-300" />
                </div>
                <h3 className="text-lg font-medium text-white mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-sm font-light text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
