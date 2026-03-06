import { gsap } from "gsap";

/**
 * initialFX - landing page animatsiyalari uchun
 * Harflar har bir span ichida bo'lishi kerak.
 * Masalan:
 * <h1><span>L</span><span>a</span><span>n</span>...</h1>
 */
export function initialFX() {
  // Scroll va main class
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

  // H2 info animatsiyasi
  const landingH2Info = document.querySelectorAll(".landing-h2-info span");
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

  // Agar keyinchalik boshqa loop animatsiyalar bo‘lsa, shunga o‘xshash gsap.timeline ishlatish mumkin
}

  var landingText3 = new SplitText(".landing-h2-info-1", TextProps);
  var landingText4 = new SplitText(".landing-h2-1", TextProps);
  var landingText5 = new SplitText(".landing-h2-2", TextProps);

  LoopText(landingText2, landingText3);
  LoopText(landingText4, landingText5);
}

function LoopText(Text1: SplitText, Text2: SplitText) {
  var tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;

  tl.fromTo(
    Text2.chars,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut",
      y: 0,
      stagger: 0.1,
      delay: delay,
    },
    0
  )
    .fromTo(
      Text1.chars,
      { y: 80 },
      {
        duration: 1.2,
        ease: "power3.inOut",
        y: 0,
        stagger: 0.1,
        delay: delay2,
      },
      1
    )
    .fromTo(
      Text1.chars,
      { y: 0 },
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay,
      },
      0
    )
    .to(
      Text2.chars,
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay2,
      },
      1
    );
}
