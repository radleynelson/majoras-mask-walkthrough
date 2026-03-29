interface MajorasMaskProps {
  size?: number;
  className?: string;
}

export function MajorasMask({ size = 48, className }: MajorasMaskProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer spikes */}
      <polygon points="60,2 65,20 55,20" fill="#8B5CF6" />
      <polygon points="20,15 32,28 24,32" fill="#7C3AED" />
      <polygon points="100,15 96,32 88,28" fill="#7C3AED" />
      <polygon points="5,45 20,42 18,52" fill="#6D28D9" />
      <polygon points="115,45 100,42 102,52" fill="#6D28D9" />

      {/* Main mask shape - heart/shield form */}
      <path
        d="M60 108 C60 108, 18 78, 18 48 C18 28, 35 16, 60 24 C85 16, 102 28, 102 48 C102 78, 60 108, 60 108Z"
        fill="#4C1D95"
        stroke="#7C3AED"
        strokeWidth="2"
      />

      {/* Inner face pattern */}
      <path
        d="M60 98 C60 98, 28 74, 28 50 C28 35, 40 26, 60 32 C80 26, 92 35, 92 50 C92 74, 60 98, 60 98Z"
        fill="#5B21B6"
      />

      {/* Forehead marking */}
      <path
        d="M60 28 L54 42 L60 38 L66 42 Z"
        fill="#C8A84E"
      />

      {/* Left eye */}
      <ellipse cx="44" cy="52" rx="12" ry="10" fill="#1E1B4B" stroke="#C8A84E" strokeWidth="1.5" />
      <ellipse cx="44" cy="52" rx="7" ry="6" fill="#EF4444" />
      <ellipse cx="44" cy="52" rx="3" ry="3" fill="#FCD34D" />
      <circle cx="42" cy="50" r="1.5" fill="white" opacity="0.8" />

      {/* Right eye */}
      <ellipse cx="76" cy="52" rx="12" ry="10" fill="#1E1B4B" stroke="#C8A84E" strokeWidth="1.5" />
      <ellipse cx="76" cy="52" rx="7" ry="6" fill="#EF4444" />
      <ellipse cx="76" cy="52" rx="3" ry="3" fill="#FCD34D" />
      <circle cx="74" cy="50" r="1.5" fill="white" opacity="0.8" />

      {/* Nose/center line */}
      <line x1="60" y1="60" x2="60" y2="72" stroke="#C8A84E" strokeWidth="1.5" />

      {/* Cheek markings */}
      <path d="M36 66 Q40 70 36 74" stroke="#C8A84E" strokeWidth="1.5" fill="none" />
      <path d="M84 66 Q80 70 84 74" stroke="#C8A84E" strokeWidth="1.5" fill="none" />

      {/* Mouth area tribal marks */}
      <path d="M48 78 Q54 84 60 80 Q66 84 72 78" stroke="#C8A84E" strokeWidth="1.5" fill="none" />

      {/* Small dots/tribal accents */}
      <circle cx="38" cy="40" r="1.5" fill="#C8A84E" />
      <circle cx="82" cy="40" r="1.5" fill="#C8A84E" />
      <circle cx="48" cy="88" r="1.5" fill="#C8A84E" />
      <circle cx="72" cy="88" r="1.5" fill="#C8A84E" />

      {/* Subtle glow effect */}
      <ellipse cx="44" cy="52" rx="8" ry="7" fill="#EF4444" opacity="0.15" />
      <ellipse cx="76" cy="52" rx="8" ry="7" fill="#EF4444" opacity="0.15" />
    </svg>
  );
}
