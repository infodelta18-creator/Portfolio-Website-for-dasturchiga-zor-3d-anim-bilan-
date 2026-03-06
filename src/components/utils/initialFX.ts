import { gsap } from "gsap";

/**
 * initialFX - landing page animatsiyalari uchun
 * Harflar har bir span ichida bo'lishi kerak.
 * Masalan:
 * <h1><span>L</span><span>a</span><span>n</span>...</h1>
 */
export function initialFX() {
  document.body.style.overflowY = "auto";
  document.getElementsByTagName("main")[0]?.classList.add("main-active");

  // Body background
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  // Landing text animatsiyasi
  const landingH3 = document.querySelectorAll(".landing-info h3 span");
  const landingH2 = document.querySelectorAll(".landing-intro h2 span");
  const landingH1 = document.querySelectorAll(".landing-intro h1 span");

  gsap.fromTo(
    [...landingH3, ...landingH2, ...landingH1],
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1.2,
      stagger: 0.025,
      ease: "power3.inOut",
      delay: 0.3,
    }
  );

  const landingH2Info = document.querySelectorAll(".landing-h2-info span");
  const landingH2Info1 = document.querySelectorAll(".landing-h2-info-1 span");
  const landingH21 = document.querySelectorAll(".landing-h2-1 span");
  const landingH22 = document.querySelectorAll(".landing-h2-2 span");

  // H2 info animatsiyasi
  gsap.fromTo(
    landingH2Info,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1.2,
      stagger: 0.025,
      ease: "power3.inOut",
      delay: 0.3,
    }
  );

  // Landing info h2 fade
  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.8,
    }
  );

  // Header va nav fade
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  // Loop animatsiya timeline bilan
  const loopTimeline = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;

  loopTimeline
    .fromTo(
      landingH2Info1,
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.inOut", stagger: 0.1, delay },
      0
    )
    .fromTo(
      landingH2Info,
      { y: 80 },
      { y: 0, duration: 1.2, ease: "power3.inOut", stagger: 0.1, delay: delay2 },
      1
    )
    .fromTo(
      landingH2Info,
      { y: 0 },
      { y: -80, duration: 1.2, ease: "power3.inOut", stagger: 0.1, delay },
      0
    )
    .to(
      landingH2Info1,
      { y: -80, duration: 1.2, ease: "power3.inOut", stagger: 0.1, delay: delay2 },
      1
    );
}