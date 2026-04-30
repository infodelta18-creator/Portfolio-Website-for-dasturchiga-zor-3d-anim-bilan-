import { gsap } from "gsap";

/**
 * initialFX - landing page animatsiyalari
 */
export function initialFX() {
  if (typeof window === "undefined") return;

  document.body.style.overflowY = "auto";
  document.querySelector("main")?.classList.add("main-active");

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

  const allText = [...landingH3, ...landingH2, ...landingH1];

  if (allText.length) {
    gsap.fromTo(
      allText,
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
  }

  const landingH2Info = document.querySelectorAll(".landing-h2-info span");
  const landingH2Info1 = document.querySelectorAll(".landing-h2-info-1 span");

  // H2 info animatsiyasi
  if (landingH2Info.length) {
    gsap.fromTo(
      landingH2Info,
      { opacity: 0, y: 80, filter: "blur(5px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.2,
        stagger: 0.02,
        ease: "power3.inOut",
        delay: 0.3,
      }
    );
  }

  // Fade section
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

  // Header fade
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

  // Loop animation (safe version)
  if (landingH2Info.length && landingH2Info1.length) {
    const loopTimeline = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    const delay = 4;
    const delay2 = delay * 2 + 1;

    loopTimeline
      .fromTo(
        landingH2Info1,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.inOut",
          stagger: 0.1,
        }
      )
      .to(landingH2Info, {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
      });
  }
}