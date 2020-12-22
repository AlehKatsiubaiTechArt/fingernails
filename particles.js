export default {
  fpsLimit: 60,
  /* interactivity: {
    detect_on: "canvas",
    events: {
      onclick: { enable: true, mode: "push" },
      onhover: {
        enable: true,
        mode: "repulse",
        parallax: { enable: false, force: 60, smooth: 10 },
      },
      resize: true,
    },
    modes: {
      bubble: { distance: 400, duration: 2, opacity: 0.8, size: 40, speed: 3 },
      grab: { distance: 400, line_linked: { opacity: 1 } },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
      repulse: { distance: 100, duration: 0.4 },
    },
  }, */
  particles: {
    number: { density: { enable: true, value_area: 800 }, value: 30 },
    line_linked: {
      enable: false,
    },
    move: {
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
      bounce: false,
      direction: "none",
      enable: true,
      out_mode: "out",
      random: false,
      speed: 3,
      straight: false,
    },
    rotate: {
      animation: {
        enable: true,
        speed: 10,
        sync: true,
      },
    },
    shape: {
      type: ["image"],
      image: [
        {
          src: "images/Canadian_Maple_Leaf.svg",
          height: 20,
          width: 20,
        } /* , {
                    "src": "images/Canada_Leaf_Maple.svg",
                    "height": 20,
                    "width": 20
                }, {
                    "src": "images/Canadian_Maple_Leaf2.svg",
                    "height": 20,
                    "width": 20
                }, */,
      ],
    },
    opacity: {
      random: true,
      anim: {
        enable: false,
      },
    },
    color: {
      value: "#947960",
    },
    size: {
      value: 12,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 5,
        sync: false,
      },
    },
  },
  retina_detect: false,
};
