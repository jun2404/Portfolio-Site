import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const PortraitCard: React.FC = () => {
  return (
    <div className="relative w-full max-w-md mx-auto group">
      {/* Ambient background glow matching Warm Synthesis */}
      <div 
        aria-hidden="true" 
        className="absolute -inset-4 bg-gradient-to-tr from-[#C1652F]/15 via-[#C08A4E]/10 to-transparent rounded-[2.5rem] blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" 
      />

      {/* Main framed card */}
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#F2EDE9] to-[#E8DCC8] border border-[#2C2A28]/10 shadow-warm-resting group-hover:shadow-warm-hover transition-all duration-500">
        
        {/* Editorial Illustrated Portrait matching Stitch reference aesthetics */}
        <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden flex items-end justify-center">
          
          {/* Subtle interior lighting & studio background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#ded3c2] via-[#f5ede3] to-[#fffdf9]" />
          
          {/* Window mullion / architectural light shadow simulation */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 right-1/4 w-32 h-full bg-white blur-xl transform -skew-x-12" />
            <div className="absolute top-8 left-6 w-24 h-24 rounded-full bg-[#C08A4E]/20 blur-2xl" />
          </div>

          {/* Indoor plant leaf accents (soft blurred background foliage) */}
          <svg
            aria-hidden="true"
            className="absolute top-12 left-4 w-32 h-36 opacity-25 text-[#73634e] blur-[1px]"
            viewBox="0 0 100 100"
            fill="currentColor"
          >
            <path d="M10,80 Q25,30 60,20 Q40,60 10,80 Z" />
            <path d="M25,85 Q45,45 80,40 Q55,75 25,85 Z" />
            <path d="M5,60 Q20,20 50,10 Q30,50 5,60 Z" />
          </svg>

          {/* High-craft stylized portrait vector of Junaid */}
          <svg
            className="relative z-10 w-full h-[96%] max-h-[460px] object-contain drop-shadow-md"
            viewBox="0 0 400 480"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Skin gradient */}
              <linearGradient id="skin" x1="200" y1="90" x2="200" y2="250" gradientUnits="userSpaceOnUse">
                <stop stopColor="#e5a87b" />
                <stop offset="0.7" stopColor="#d49467" />
                <stop offset="1" stopColor="#be7e53" />
              </linearGradient>

              {/* Tan linen blazer gradient */}
              <linearGradient id="blazer" x1="100" y1="280" x2="300" y2="480" gradientUnits="userSpaceOnUse">
                <stop stopColor="#c7a783" />
                <stop offset="0.5" stopColor="#b69571" />
                <stop offset="1" stopColor="#9a7753" />
              </linearGradient>

              {/* Lapel highlight */}
              <linearGradient id="lapel" x1="160" y1="290" x2="240" y2="440" gradientUnits="userSpaceOnUse">
                <stop stopColor="#d7b895" />
                <stop offset="1" stopColor="#aa8863" />
              </linearGradient>

              {/* Hair & beard gradient */}
              <linearGradient id="hair" x1="200" y1="50" x2="200" y2="230" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2a221d" />
                <stop offset="1" stopColor="#181310" />
              </linearGradient>

              {/* Inner t-shirt */}
              <linearGradient id="shirt" x1="200" y1="260" x2="200" y2="350" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ffffff" />
                <stop offset="1" stopColor="#ede6df" />
              </linearGradient>

              {/* Soft ambient shadow */}
              <radialGradient id="faceShade" cx="50%" cy="50%" r="50%">
                <stop offset="60%" stopColor="#000000" stopOpacity="0" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0.12" />
              </radialGradient>
            </defs>

            {/* Neck */}
            <path d="M174 220 L174 280 Q200 295 226 280 L226 220 Z" fill="#c3855a" />
            <path d="M174 240 Q200 270 226 240 L226 270 Q200 288 174 270 Z" fill="#ae7248" opacity="0.4" />

            {/* Shoulders & Linen Blazer Body */}
            <path
              d="M75 480 L100 350 Q130 295 180 285 L200 340 L220 285 Q270 295 300 350 L325 480 Z"
              fill="url(#blazer)"
            />

            {/* Inner Crewneck T-shirt */}
            <path
              d="M174 275 Q200 300 226 275 L228 340 Q200 355 172 340 Z"
              fill="url(#shirt)"
            />
            {/* Crewneck collar rib */}
            <path
              d="M173 275 Q200 295 227 275 Q200 288 173 275 Z"
              fill="#d9d0c7"
            />

            {/* Tailored Blazer Lapels */}
            {/* Left Lapel */}
            <path
              d="M140 300 L185 365 L155 480 L90 480 L110 345 Z"
              fill="url(#lapel)"
            />
            {/* Right Lapel */}
            <path
              d="M260 300 L215 365 L245 480 L310 480 L290 345 Z"
              fill="url(#lapel)"
            />
            {/* Lapel fold shadows */}
            <path d="M185 365 L170 480 L160 480 L180 360 Z" fill="#806242" opacity="0.3" />
            <path d="M215 365 L230 480 L240 480 L220 360 Z" fill="#806242" opacity="0.3" />

            {/* Head / Face shape */}
            <path
              d="M146 142 C146 88, 254 88, 254 142 C254 195, 236 242, 200 242 C164 242, 146 195, 146 142 Z"
              fill="url(#skin)"
            />
            {/* Face ambient shade */}
            <path
              d="M146 142 C146 88, 254 88, 254 142 C254 195, 236 242, 200 242 C164 242, 146 195, 146 142 Z"
              fill="url(#faceShade)"
            />

            {/* Ears */}
            <path d="M140 148 C136 138, 146 128, 148 140 C150 152, 142 165, 144 172 C140 166, 137 155, 140 148 Z" fill="#d49467" />
            <path d="M260 148 C264 138, 254 128, 252 140 C250 152, 258 165, 256 172 C260 166, 263 155, 260 148 Z" fill="#c3855a" />

            {/* Hair (modern styled pompadour / side part) */}
            <path
              d="M143 132 C140 92, 158 55, 200 52 C240 50, 262 85, 258 130 C252 110, 240 92, 205 92 C170 92, 150 108, 143 132 Z"
              fill="url(#hair)"
            />
            <path
              d="M152 75 C175 58, 225 56, 250 78 C238 68, 205 64, 175 70 Z"
              fill="#3e332a"
              opacity="0.8"
            />

            {/* Eyebrows */}
            <path d="M162 134 Q176 128 190 134" stroke="#1d1713" strokeWidth="4.5" strokeLinecap="round" />
            <path d="M210 134 Q224 128 238 134" stroke="#1d1713" strokeWidth="4.5" strokeLinecap="round" />

            {/* Eyes (warm, friendly gaze with slight smile crinkle) */}
            <ellipse cx="177" cy="148" rx="7" ry="5.5" fill="#201b17" />
            <circle cx="179" cy="146" r="2" fill="#ffffff" />
            <path d="M165 147 Q177 141 189 147" stroke="#33241b" strokeWidth="2" fill="none" strokeLinecap="round" />

            <ellipse cx="223" cy="148" rx="7" ry="5.5" fill="#201b17" />
            <circle cx="225" cy="146" r="2" fill="#ffffff" />
            <path d="M211 147 Q223 141 235 147" stroke="#33241b" strokeWidth="2" fill="none" strokeLinecap="round" />

            {/* Nose */}
            <path d="M200 144 L197 175 Q200 182 205 180" stroke="#b27349" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M192 178 Q200 183 208 178" stroke="#a2653c" strokeWidth="2" fill="none" strokeLinecap="round" />

            {/* Well-groomed Beard & Mustache */}
            <path
              d="M154 175 C154 218, 176 242, 200 242 C224 242, 246 218, 246 175 C240 185, 230 196, 218 198 C212 195, 208 195, 200 195 C192 195, 188 195, 182 198 C170 196, 160 185, 154 175 Z"
              fill="url(#hair)"
              opacity="0.95"
            />
            {/* Mustache */}
            <path
              d="M185 194 Q200 191 215 194 Q200 201 185 194 Z"
              fill="#221a15"
            />

            {/* Friendly Smile */}
            <path
              d="M188 205 Q200 218 212 205"
              stroke="#ffffff"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M186 204 Q200 219 214 204"
              stroke="#68291a"
              strokeWidth="2"
              fill="none"
            />
          </svg>

          {/* Warm bottom vignette overlay */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#E8DCC8] to-transparent pointer-events-none" />
        </div>

        {/* Floating pill badge matching Stitch mockup */}
        <div className="absolute bottom-5 inset-x-4 flex justify-center z-20">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-[#2C2A28]/10 shadow-md text-xs font-semibold text-[#2C2A28] tracking-tight">
            {/* Pulsing green availability beacon */}
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span>{PORTFOLIO_DATA.statusText}</span>
          </div>
        </div>

      </div>
    </div>
  );
};
