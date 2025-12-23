let loading = () => {
  var t = gsap.timeline();
  t.from("#loader h1", {
    duration: 1,
    delay: 0.5,
    opacity: 0,
  });
  t.to(
    ".yellow",
    {
      top: "-100%",
      duration: 1,
      delay: 1,
      ease: "expo.out",
    },
    "anim"
  );
  t.to(
    ".page1",
    {
      height: "50vh",
      duration: 1,
      delay: 0.5,
    },
    "anim"
  );
  t.from(
    "nav",
    {
      duration: 0.5,
      delay: 0.5,
      opacity: 0,
      stagger: 1,
    },
    "anim"
  );
  t.from(
    "#part2 h4",
    {
      duration: 0.5,
      delay: 0.5,
      opacity: 0,
    },
    "anim"
  );
  t.to(
    "#loader",
    {
      display: "none",
    },
    "anim"
  );
  t.call(() => {
    initScroll();
    initMarquee();
    initMasonry();
  });
};

loading();

let scroll;

function initScroll() {
  scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    lerp: 0.08,
  });
}
function initMarquee() {
  let page2 = document.querySelector(".page2");
  document.querySelectorAll(".elem").forEach((elem) => {
    const tl = gsap.timeline({
      paused: true,
    });

    tl.fromTo(
      elem.querySelector(".moving"),
      { opacity: 0 },
      { opacity: 1, duration: 0.3 }
    );

    tl.to(
      elem.querySelectorAll(".moving-in"),
      {
        x: "-70%",
        duration: 7,
        ease: "none",
        repeat: -1,
      },
      0
    );
    elem.addEventListener("mouseenter", () => {
      let dimg = elem.getAttribute("data-img");
      page2.style.backgroundImage = `url(${dimg})`;
      tl.play();
    });

    elem.addEventListener("mouseleave", () => {
      tl.pause(0);
    });
  });
}

function initMasonry() {
  const worksData = [
    {
      image:
        "https://works.studio/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F136349%2F1744053214-thumbnail.jpg&w=768&q=96",
      h5: "Experimental Typography",
    },
    {
      image:
        "https://works.studio/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F136349%2F1749820683-works_essentials-identity_thumbnail.jpg&w=768&q=96",
      h5: "Essentials – Identity",
    },
    {
      image:
        "https://works.studio/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F136349%2F1761154847-thumbnail.jpg&w=768&q=96",
      h5: "Creative Editorial Project",
    },
    {
      image:
        "https://works.studio/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F136349%2F1726170418-works_thefrosthouse_02.jpg&w=768&q=96",
      h5: "The Frost House",
    },
    {
      image:
        "https://works.studio/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F136349%2F1753892566-thumbnail.jpg&w=768&q=96",
      h5: "Brand Campaign Visuals",
    },
    {
      image:
        "https://works.studio/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F136349%2F1738687527-works_apparatus_subjects_design_thumbnail.jpg&w=768&q=96",
      h5: "Apparatus – Subjects & Design",
    },
    {
      image:
        "https://works.studio/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F136349%2F1744053214-thumbnail.jpg&w=768&q=96",
      h5: "Experimental Typography",
    },
    {
      image:
        "https://works.studio/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F136349%2F1726171535-cover.jpg&w=768&q=96",
      h5: "Architecture & Space",
    },
    {
      image:
        "https://works.studio/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F136349%2F1744053474-works_converse-davidcarson-collages_200.jpg&w=1920&q=96",
      h5: "Converse – David Carson Collages",
    },
    {
      image:
        "https://works.studio/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F136349%2F1726170418-works_thefrosthouse_02.jpg&w=768&q=96",
      h5: "The Frost House",
    },
    {
      image:
        "https://works.studio/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F136349%2F1753892566-thumbnail.jpg&w=768&q=96",
      h5: "Brand Campaign Visuals",
    },
    {
      image:
        "https://works.studio/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F136349%2F1738687527-works_apparatus_subjects_design_thumbnail.jpg&w=768&q=96",
      h5: "Apparatus – Subjects & Design",
    },
    {
      image:
        "https://works.studio/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F136349%2F1749820683-works_essentials-identity_thumbnail.jpg&w=768&q=96",
      h5: "Essentials – Identity",
    },
    {
      image:
        "https://works.studio/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F136349%2F1761154847-thumbnail.jpg&w=768&q=96",
      h5: "Creative Editorial Project",
    },

    {
      image:
        "https://works.studio/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F136349%2F1744053474-works_converse-davidcarson-collages_200.jpg&w=1920&q=96",
      h5: "Converse – David Carson Collages",
    },
  ];
  const imgDiv = document.querySelector("#image-div");

  imgDiv.innerHTML = "";
  const columnWidth = 250;
  const gap = 15;
  const columns = Math.max(
    1,
    Math.floor(imgDiv.clientWidth / (columnWidth + gap))
  );
  const columnHeights = new Array(columns).fill(0);
  let imagesLoaded = 0;
  const totalImages = worksData.length;

  worksData.forEach((item) => {
    const card = document.createElement("div");
    card.className = "image-card";

    const img = document.createElement("img");
    img.src = item.image;

    const overlay = document.createElement("div");
    overlay.className = "overlay";
    overlay.innerHTML = `<h5>${item.h5}</h5>`;

    img.onload = () => {
      const minCol = columnHeights.indexOf(Math.min(...columnHeights));

      const x = minCol * (columnWidth + gap);
      const y = columnHeights[minCol];

      card.style.transform = `translate(${x}px, ${y}px)`;

      columnHeights[minCol] += img.offsetHeight + gap;

      imgDiv.style.height = Math.max(...columnHeights) + "px";

      imagesLoaded++;

      if (imagesLoaded === totalImages && scroll) {
        requestAnimationFrame(() => {
          scroll.update();
        });
      }
    };

    card.appendChild(img);
    card.appendChild(overlay);
    imgDiv.appendChild(card);
  });
}

let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    initMasonry();
    if (scroll) scroll.update();
  }, 300);
});

document.querySelector(".footer button").addEventListener("click", () => {
  scroll.scrollTo(0);
});
