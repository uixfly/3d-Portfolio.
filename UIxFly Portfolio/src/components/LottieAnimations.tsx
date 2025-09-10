import { useEffect, useRef } from "react";

// Lottie JSON data for the three animations with gold accent #D4AF37
const trustBadgePulse = {
  "v": "5.7.4",
  "fr": 60,
  "ip": 0,
  "op": 90,
  "w": 80,
  "h": 80,
  "nm": "Trust Badge Pulse",
  "ddd": 0,
  "assets": [],
  "layers": [
    {
      "ddd": 0,
      "ind": 1,
      "ty": 4,
      "nm": "Badge",
      "sr": 1,
      "ks": {
        "o": {"a": 0, "k": 100},
        "r": {"a": 0, "k": 0},
        "p": {"a": 0, "k": [40, 40, 0]},
        "a": {"a": 0, "k": [0, 0, 0]},
        "s": {
          "a": 1,
          "k": [
            {"i": {"x": [0.667], "y": [1]}, "o": {"x": [0.333], "y": [0]}, "t": 0, "s": [100]},
            {"i": {"x": [0.667], "y": [1]}, "o": {"x": [0.333], "y": [0]}, "t": 45, "s": [110]},
            {"t": 90, "s": [100]}
          ]
        }
      },
      "ao": 0,
      "shapes": [
        {
          "ty": "gr",
          "it": [
            {
              "ind": 0,
              "ty": "sh",
              "ks": {
                "a": 0,
                "k": {
                  "i": [[0, -11.046], [11.046, 0], [0, 11.046], [-11.046, 0]],
                  "o": [[0, 11.046], [-11.046, 0], [0, -11.046], [11.046, 0]],
                  "v": [[20, 0], [0, 20], [-20, 0], [0, -20]],
                  "c": true
                }
              }
            },
            {
              "ty": "fl",
              "c": {"a": 0, "k": [0.831, 0.686, 0.216, 1]},
              "o": {"a": 0, "k": 100}
            }
          ]
        }
      ],
      "ip": 0,
      "op": 90,
      "st": 0
    },
    {
      "ddd": 0,
      "ind": 2,
      "ty": 4,
      "nm": "Glow",
      "sr": 1,
      "ks": {
        "o": {
          "a": 1,
          "k": [
            {"i": {"x": [0.667], "y": [1]}, "o": {"x": [0.333], "y": [0]}, "t": 0, "s": [0]},
            {"i": {"x": [0.667], "y": [1]}, "o": {"x": [0.333], "y": [0]}, "t": 45, "s": [60]},
            {"t": 90, "s": [0]}
          ]
        },
        "r": {"a": 0, "k": 0},
        "p": {"a": 0, "k": [40, 40, 0]},
        "a": {"a": 0, "k": [0, 0, 0]},
        "s": {"a": 0, "k": [120, 120, 100]}
      },
      "ao": 0,
      "shapes": [
        {
          "ty": "gr",
          "it": [
            {
              "ind": 0,
              "ty": "sh",
              "ks": {
                "a": 0,
                "k": {
                  "i": [[0, -15], [15, 0], [0, 15], [-15, 0]],
                  "o": [[0, 15], [-15, 0], [0, -15], [15, 0]],
                  "v": [[25, 0], [0, 25], [-25, 0], [0, -25]],
                  "c": true
                }
              }
            },
            {
              "ty": "fl",
              "c": {"a": 0, "k": [0.831, 0.686, 0.216, 1]},
              "o": {"a": 0, "k": 100}
            }
          ]
        }
      ],
      "ip": 0,
      "op": 90,
      "st": 0
    }
  ]
};

const ctaMicroPulse = {
  "v": "5.7.4",
  "fr": 60,
  "ip": 0,
  "op": 48,
  "w": 60,
  "h": 60,
  "nm": "CTA Micro Pulse",
  "ddd": 0,
  "assets": [],
  "layers": [
    {
      "ddd": 0,
      "ind": 1,
      "ty": 4,
      "nm": "Pulse Ring",
      "sr": 1,
      "ks": {
        "o": {
          "a": 1,
          "k": [
            {"i": {"x": [0.667], "y": [1]}, "o": {"x": [0.333], "y": [0]}, "t": 0, "s": [100]},
            {"t": 48, "s": [0]}
          ]
        },
        "r": {"a": 0, "k": 0},
        "p": {"a": 0, "k": [30, 30, 0]},
        "a": {"a": 0, "k": [0, 0, 0]},
        "s": {
          "a": 1,
          "k": [
            {"i": {"x": [0.667], "y": [1]}, "o": {"x": [0.333], "y": [0]}, "t": 0, "s": [80]},
            {"t": 48, "s": [120]}
          ]
        }
      },
      "ao": 0,
      "shapes": [
        {
          "ty": "gr",
          "it": [
            {
              "ind": 0,
              "ty": "sh",
              "ks": {
                "a": 0,
                "k": {
                  "i": [[0, -8], [8, 0], [0, 8], [-8, 0]],
                  "o": [[0, 8], [-8, 0], [0, -8], [8, 0]],
                  "v": [[12, 0], [0, 12], [-12, 0], [0, -12]],
                  "c": true
                }
              }
            },
            {
              "ty": "st",
              "c": {"a": 0, "k": [0.831, 0.686, 0.216, 1]},
              "o": {"a": 0, "k": 100},
              "w": {"a": 0, "k": 2}
            }
          ]
        }
      ],
      "ip": 0,
      "op": 48,
      "st": 0
    }
  ]
};

const tinyLoader = {
  "v": "5.7.4",
  "fr": 60,
  "ip": 0,
  "op": 60,
  "w": 40,
  "h": 40,
  "nm": "Tiny Loader",
  "ddd": 0,
  "assets": [],
  "layers": [
    {
      "ddd": 0,
      "ind": 1,
      "ty": 4,
      "nm": "Loader Circle",
      "sr": 1,
      "ks": {
        "o": {"a": 0, "k": 100},
        "r": {
          "a": 1,
          "k": [
            {"i": {"x": [0.667], "y": [1]}, "o": {"x": [0.333], "y": [0]}, "t": 0, "s": [0]},
            {"t": 60, "s": [360]}
          ]
        },
        "p": {"a": 0, "k": [20, 20, 0]},
        "a": {"a": 0, "k": [0, 0, 0]},
        "s": {"a": 0, "k": [100, 100, 100]}
      },
      "ao": 0,
      "shapes": [
        {
          "ty": "gr",
          "it": [
            {
              "ind": 0,
              "ty": "sh",
              "ks": {
                "a": 0,
                "k": {
                  "i": [[0, -8], [8, 0], [0, 8], [-8, 0]],
                  "o": [[0, 8], [-8, 0], [0, -8], [8, 0]],
                  "v": [[12, 0], [0, 12], [-12, 0], [0, -12]],
                  "c": true
                }
              }
            },
            {
              "ty": "st",
              "c": {"a": 0, "k": [0.831, 0.686, 0.216, 1]},
              "o": {"a": 0, "k": 100},
              "w": {"a": 0, "k": 3},
              "lc": 2,
              "d": [{"n": "d", "nm": "dash", "v": {"a": 0, "k": 10}}, {"n": "g", "nm": "gap", "v": {"a": 0, "k": 5}}]
            }
          ]
        }
      ],
      "ip": 0,
      "op": 60,
      "st": 0
    }
  ]
};

interface LottiePlayerProps {
  animationData: any;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

export function LottiePlayer({ animationData, className = "", loop = true, autoplay = true }: LottiePlayerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current && typeof window !== "undefined") {
      // Simple animation renderer using CSS animations as fallback
      const container = ref.current;
      container.innerHTML = "";
      
      // Create SVG element based on animation data
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("width", animationData.w.toString());
      svg.setAttribute("height", animationData.h.toString());
      svg.setAttribute("viewBox", `0 0 ${animationData.w} ${animationData.h}`);
      svg.style.width = "100%";
      svg.style.height = "100%";

      // Create simplified animation based on the type
      if (animationData.nm === "Trust Badge Pulse") {
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", "40");
        circle.setAttribute("cy", "40");
        circle.setAttribute("r", "20");
        circle.setAttribute("fill", "#D4AF37");
        circle.style.animation = "trustPulse 1.5s infinite ease-in-out";
        svg.appendChild(circle);

        const style = document.createElement("style");
        style.textContent = `
          @keyframes trustPulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.8; }
          }
        `;
        container.appendChild(style);
      } else if (animationData.nm === "CTA Micro Pulse") {
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", "30");
        circle.setAttribute("cy", "30");
        circle.setAttribute("r", "12");
        circle.setAttribute("fill", "none");
        circle.setAttribute("stroke", "#D4AF37");
        circle.setAttribute("stroke-width", "2");
        circle.style.animation = "ctaPulse 0.8s infinite ease-out";
        svg.appendChild(circle);

        const style = document.createElement("style");
        style.textContent = `
          @keyframes ctaPulse {
            0% { transform: scale(0.8); opacity: 1; }
            100% { transform: scale(1.2); opacity: 0; }
          }
        `;
        container.appendChild(style);
      } else if (animationData.nm === "Tiny Loader") {
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", "20");
        circle.setAttribute("cy", "20");
        circle.setAttribute("r", "12");
        circle.setAttribute("fill", "none");
        circle.setAttribute("stroke", "#D4AF37");
        circle.setAttribute("stroke-width", "3");
        circle.setAttribute("stroke-linecap", "round");
        circle.setAttribute("stroke-dasharray", "10 5");
        circle.style.animation = "loaderSpin 1s infinite linear";
        svg.appendChild(circle);

        const style = document.createElement("style");
        style.textContent = `
          @keyframes loaderSpin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `;
        container.appendChild(style);
      }

      container.appendChild(svg);
    }
  }, [animationData]);

  return <div ref={ref} className={className} />;
}

// Export the animation components
export function TrustBadgePulse({ className = "" }: { className?: string }) {
  return (
    <LottiePlayer 
      animationData={trustBadgePulse} 
      className={`w-20 h-20 ${className}`}
      loop={true}
      autoplay={true}
    />
  );
}

export function CTAMicroPulse({ className = "" }: { className?: string }) {
  return (
    <LottiePlayer 
      animationData={ctaMicroPulse} 
      className={`w-15 h-15 ${className}`}
      loop={true}
      autoplay={true}
    />
  );
}

export function TinyLoader({ className = "" }: { className?: string }) {
  return (
    <LottiePlayer 
      animationData={tinyLoader} 
      className={`w-10 h-10 ${className}`}
      loop={true}
      autoplay={true}
    />
  );
}