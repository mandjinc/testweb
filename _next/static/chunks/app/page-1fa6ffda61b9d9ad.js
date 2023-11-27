(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    9784: function (e, t, l) {
      Promise.resolve().then(l.bind(l, 5159)),
        Promise.resolve().then(l.bind(l, 4296)),
        Promise.resolve().then(l.bind(l, 2035)),
        Promise.resolve().then(l.bind(l, 3422)),
        Promise.resolve().then(l.bind(l, 2742)),
        Promise.resolve().then(l.bind(l, 5760));
    },
    2035: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return m;
          },
        });
      var s = l(7437),
        i = l(2265),
        r = l(6691),
        a = l.n(r),
        n = l(9094);
      let c = {
        default: { width: 0 },
        active: { width: "calc(100% - 0.75rem)" },
      };
      var o = (e) => {
        let { active: t, selectTab: l, children: i } = e;
        return (0, s.jsxs)("button", {
          onClick: l,
          children: [
            (0, s.jsx)("p", {
              className: "mr-3 font-semibold hover:text-white ".concat(
                t ? "text-white" : "text-[#ADB7BE]"
              ),
              children: i,
            }),
            (0, s.jsx)(n.E.div, {
              animate: t ? "active" : "default",
              variants: c,
              className: "h-1 bg-primary-500 mt-2 mr-3",
            }),
          ],
        });
      };
      let d = [
        {
          title: "Skills",
          id: "skills",
          content: (0, s.jsxs)("ul", {
            className: "list-disc pl-2",
            children: [
              (0, s.jsx)("li", { children: "Node.js" }),
              (0, s.jsx)("li", { children: "Express" }),
              (0, s.jsx)("li", { children: "PostgreSQL" }),
              (0, s.jsx)("li", { children: "Sequelize" }),
              (0, s.jsx)("li", { children: "JavaScript" }),
              (0, s.jsx)("li", { children: "React" }),
            ],
          }),
        },
        {
          title: "Education",
          id: "education",
          content: (0, s.jsxs)("ul", {
            className: "list-disc pl-2",
            children: [
              (0, s.jsx)("li", { children: "Fullstack Academy of Code" }),
              (0, s.jsx)("li", {
                children: "University of California, Santa Cruz",
              }),
            ],
          }),
        },
        {
          title: "Certifications",
          id: "certifications",
          content: (0, s.jsxs)("ul", {
            className: "list-disc pl-2",
            children: [
              (0, s.jsx)("li", { children: "AWS Cloud Practitioner" }),
              (0, s.jsx)("li", {
                children: "Google Professional Cloud Developer",
              }),
            ],
          }),
        },
      ];
      var m = () => {
        let [e, t] = (0, i.useState)("skills"),
          [l, r] = (0, i.useTransition)(),
          n = (e) => {
            r(() => {
              t(e);
            });
          };
        return (0, s.jsx)("section", {
          className: "text-white",
          id: "about",
          children: (0, s.jsxs)("div", {
            className:
              "md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16",
            children: [
              (0, s.jsx)(a(), {
                src: "/images/about-image.png",
                width: 500,
                height: 500,
              }),
              (0, s.jsxs)("div", {
                className: "mt-4 md:mt-0 text-left flex flex-col h-full",
                children: [
                  (0, s.jsx)("h2", {
                    className: "text-4xl font-bold text-white mb-4",
                    children: "About Me",
                  }),
                  (0, s.jsx)("p", {
                    className: "text-base lg:text-lg",
                    children:
                      "I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.",
                  }),
                  (0, s.jsxs)("div", {
                    className: "flex flex-row justify-start mt-8",
                    children: [
                      (0, s.jsxs)(o, {
                        selectTab: () => n("skills"),
                        active: "skills" === e,
                        children: [" ", "Skills", " "],
                      }),
                      (0, s.jsxs)(o, {
                        selectTab: () => n("education"),
                        active: "education" === e,
                        children: [" ", "Education", " "],
                      }),
                      (0, s.jsxs)(o, {
                        selectTab: () => n("certifications"),
                        active: "certifications" === e,
                        children: [" ", "Certifications", " "],
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: "mt-8",
                    children: d.find((t) => t.id === e).content,
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    5760: function (e, t, l) {
      "use strict";
      l.r(t);
      var s = l(7437);
      l(2265);
      var i = l(8864),
        r = l.n(i);
      let a = r()(() => l.e(524).then(l.t.bind(l, 9524, 23)), {
          loadableGenerated: { webpack: () => [9524] },
          ssr: !1,
        }),
        n = [
          { metric: "Projects", value: "100", postfix: "+" },
          { prefix: "~", metric: "Users", value: "100,000" },
          { metric: "Awards", value: "7" },
          { metric: "Years", value: "5" },
        ];
      t.default = () =>
        (0, s.jsx)("div", {
          className: "py-8 px-4 xl:gap-16 sm:py-16 xl:px-16",
          children: (0, s.jsx)("div", {
            className:
              "sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between",
            children: n.map((e, t) =>
              (0, s.jsxs)(
                "div",
                {
                  className:
                    "flex flex-col items-center justify-center mx-4 my-4 sm:my-0",
                  children: [
                    (0, s.jsxs)("h2", {
                      className: "text-white text-4xl font-bold flex flex-row",
                      children: [
                        e.prefix,
                        (0, s.jsx)(a, {
                          includeComma: !0,
                          animateToNumber: parseInt(e.value),
                          locale: "en-US",
                          className: "text-white text-4xl font-bold",
                          configs: (e, t) => ({
                            mass: 1,
                            friction: 100,
                            tensions: 140 * (t + 1),
                          }),
                        }),
                        e.postfix,
                      ],
                    }),
                    (0, s.jsx)("p", {
                      className: "text-[#ADB7BE] text-base",
                      children: e.metric,
                    }),
                  ],
                },
                t
              )
            ),
          }),
        });
    },
    2742: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return m;
          },
        });
      var s = l(7437),
        i = l(2265),
        r = {
          src: "/_next/static/media/github-icon.04fa7de0.svg",
          height: 48,
          width: 48,
          blurWidth: 0,
          blurHeight: 0,
        },
        a = {
          src: "/_next/static/media/linkedin-icon.67ae5368.svg",
          height: 48,
          width: 48,
          blurWidth: 0,
          blurHeight: 0,
        },
        n = l(1396),
        c = l.n(n),
        o = l(6691),
        d = l.n(o),
        m = () => {
          let [e, t] = (0, i.useState)(!1),
            l = async (e) => {
              e.preventDefault();
              let l = {
                  email: e.target.email.value,
                  subject: e.target.subject.value,
                  message: e.target.message.value,
                },
                s = JSON.stringify(l),
                i = await fetch("/api/send", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: s,
                });
              await i.json(),
                200 === i.status && (console.log("Message sent."), t(!0));
            };
          return (0, s.jsxs)("section", {
            id: "contact",
            className:
              "grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative",
            children: [
              (0, s.jsx)("div", {
                className:
                  "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2",
              }),
              (0, s.jsxs)("div", {
                className: "z-10",
                children: [
                  (0, s.jsx)("h5", {
                    className: "text-xl font-bold text-white my-2",
                    children: "Let's Connect",
                  }),
                  (0, s.jsxs)("p", {
                    className: "text-[#ADB7BE] mb-4 max-w-md",
                    children: [
                      " ",
                      "I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "socials flex flex-row gap-2",
                    children: [
                      (0, s.jsx)(c(), {
                        href: "github.com",
                        children: (0, s.jsx)(d(), {
                          src: r,
                          alt: "Github Icon",
                        }),
                      }),
                      (0, s.jsx)(c(), {
                        href: "linkedin.com",
                        children: (0, s.jsx)(d(), {
                          src: a,
                          alt: "Linkedin Icon",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                children: e
                  ? (0, s.jsx)("p", {
                      className: "text-green-500 text-sm mt-2",
                      children: "Email sent successfully!",
                    })
                  : (0, s.jsxs)("form", {
                      className: "flex flex-col",
                      onSubmit: l,
                      children: [
                        (0, s.jsxs)("div", {
                          className: "mb-6",
                          children: [
                            (0, s.jsx)("label", {
                              htmlFor: "email",
                              className:
                                "text-white block mb-2 text-sm font-medium",
                              children: "Your email",
                            }),
                            (0, s.jsx)("input", {
                              name: "email",
                              type: "email",
                              id: "email",
                              required: !0,
                              className:
                                "bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5",
                              placeholder: "jacob@google.com",
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className: "mb-6",
                          children: [
                            (0, s.jsx)("label", {
                              htmlFor: "subject",
                              className:
                                "text-white block text-sm mb-2 font-medium",
                              children: "Subject",
                            }),
                            (0, s.jsx)("input", {
                              name: "subject",
                              type: "text",
                              id: "subject",
                              required: !0,
                              className:
                                "bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5",
                              placeholder: "Just saying hi",
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className: "mb-6",
                          children: [
                            (0, s.jsx)("label", {
                              htmlFor: "message",
                              className:
                                "text-white block text-sm mb-2 font-medium",
                              children: "Message",
                            }),
                            (0, s.jsx)("textarea", {
                              name: "message",
                              id: "message",
                              className:
                                "bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5",
                              placeholder: "Let's talk about...",
                            }),
                          ],
                        }),
                        (0, s.jsx)("button", {
                          type: "submit",
                          className:
                            "bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full",
                          children: "Send Message",
                        }),
                      ],
                    }),
              }),
            ],
          });
        };
    },
    5159: function (e, t, l) {
      "use strict";
      l.r(t);
      var s = l(7437);
      l(2265);
      var i = l(6691),
        r = l.n(i),
        a = l(2400),
        n = l(9094),
        c = l(1396),
        o = l.n(c);
      t.default = () =>
        (0, s.jsx)("section", {
          className: "lg:py-16",
          children: (0, s.jsxs)("div", {
            className: "grid grid-cols-1 sm:grid-cols-12",
            children: [
              (0, s.jsxs)(n.E.div, {
                initial: { opacity: 0, scale: 0.5 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.5 },
                className:
                  "col-span-8 place-self-center text-center sm:text-left justify-self-start",
                children: [
                  (0, s.jsxs)("h1", {
                    className:
                      "text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold",
                    children: [
                      (0, s.jsxs)("span", {
                        className:
                          "text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600",
                        children: ["Hello, I'm", " "],
                      }),
                      (0, s.jsx)("br", {}),
                      (0, s.jsx)(a.e, {
                        sequence: [
                          "Judy",
                          1e3,
                          "Web Developer",
                          1e3,
                          "Mobile Developer",
                          1e3,
                          "UI/UX Designer",
                          1e3,
                        ],
                        wrapper: "span",
                        speed: 50,
                        repeat: 1 / 0,
                      }),
                    ],
                  }),
                  (0, s.jsx)("p", {
                    className:
                      "text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl",
                    children:
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptuous.",
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)(o(), {
                        href: "/#contact",
                        className:
                          "px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white",
                        children: "Hire Me",
                      }),
                      (0, s.jsx)(o(), {
                        href: "/",
                        className:
                          "px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3",
                        children: (0, s.jsx)("span", {
                          className:
                            "block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2",
                          children: "Download CV",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)(n.E.div, {
                initial: { opacity: 0, scale: 0.5 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.5 },
                className: "col-span-4 place-self-center mt-4 lg:mt-0",
                children: (0, s.jsx)("div", {
                  className:
                    "rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative",
                  children: (0, s.jsx)(r(), {
                    src: "/images/hero-image.png",
                    alt: "hero image",
                    className:
                      "absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2",
                    width: 300,
                    height: 300,
                  }),
                }),
              }),
            ],
          }),
        });
    },
    4296: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return x;
          },
        });
      var s = l(7437),
        i = l(1396),
        r = l.n(i),
        a = l(2265),
        n = (e) => {
          let { href: t, title: l } = e;
          return (0, s.jsx)(r(), {
            href: t,
            className:
              "block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white",
            children: l,
          });
        },
        c = l(2364),
        o = l(4027),
        d = (e) => {
          let { links: t } = e;
          return (0, s.jsx)("ul", {
            className: "flex flex-col py-4 items-center",
            children: t.map((e, t) =>
              (0, s.jsx)(
                "li",
                { children: (0, s.jsx)(n, { href: e.path, title: e.title }) },
                t
              )
            ),
          });
        };
      let m = [
        { title: "About", path: "#about" },
        { title: "Projects", path: "#projects" },
        { title: "Contact", path: "#contact" },
      ];
      var x = () => {
        let [e, t] = (0, a.useState)(!1);
        return (0, s.jsxs)("nav", {
          className:
            "fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100",
          children: [
            (0, s.jsxs)("div", {
              className:
                "flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2",
              children: [
                (0, s.jsx)(r(), {
                  href: "/",
                  className: "text-2xl md:text-5xl text-white font-semibold",
                  children: "LOGO",
                }),
                (0, s.jsx)("div", {
                  className: "mobile-menu block md:hidden",
                  children: e
                    ? (0, s.jsx)("button", {
                        onClick: () => t(!1),
                        className:
                          "flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white",
                        children: (0, s.jsx)(o.Z, { className: "h-5 w-5" }),
                      })
                    : (0, s.jsx)("button", {
                        onClick: () => t(!0),
                        className:
                          "flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white",
                        children: (0, s.jsx)(c.Z, { className: "h-5 w-5" }),
                      }),
                }),
                (0, s.jsx)("div", {
                  className: "menu hidden md:block md:w-auto",
                  id: "navbar",
                  children: (0, s.jsx)("ul", {
                    className: "flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0",
                    children: m.map((e, t) =>
                      (0, s.jsx)(
                        "li",
                        {
                          children: (0, s.jsx)(n, {
                            href: e.path,
                            title: e.title,
                          }),
                        },
                        t
                      )
                    ),
                  }),
                }),
              ],
            }),
            e ? (0, s.jsx)(d, { links: m }) : null,
          ],
        });
      };
    },
    3422: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return p;
          },
        });
      var s = l(7437),
        i = l(2265),
        r = l(7287),
        a = l(9367),
        n = l(1396),
        c = l.n(n),
        o = (e) => {
          let {
            imgUrl: t,
            title: l,
            description: i,
            gitUrl: n,
            previewUrl: o,
          } = e;
          return (0, s.jsxs)("div", {
            children: [
              (0, s.jsx)("div", {
                className: "h-52 md:h-72 rounded-t-xl relative group",
                style: {
                  background: "url(".concat(t, ")"),
                  backgroundSize: "cover",
                },
                children: (0, s.jsxs)("div", {
                  className:
                    "overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ",
                  children: [
                    (0, s.jsx)(c(), {
                      href: n,
                      className:
                        "h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link",
                      children: (0, s.jsx)(r.Z, {
                        className:
                          "h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white",
                      }),
                    }),
                    (0, s.jsx)(c(), {
                      href: o,
                      className:
                        "h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link",
                      children: (0, s.jsx)(a.Z, {
                        className:
                          "h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white",
                      }),
                    }),
                  ],
                }),
              }),
              (0, s.jsxs)("div", {
                className: "text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4",
                children: [
                  (0, s.jsx)("h5", {
                    className: "text-xl font-semibold mb-2",
                    children: l,
                  }),
                  (0, s.jsx)("p", { className: "text-[#ADB7BE]", children: i }),
                ],
              }),
            ],
          });
        },
        d = (e) => {
          let { name: t, onClick: l, isSelected: i } = e;
          return (0, s.jsx)("button", {
            className: "".concat(
              i
                ? "text-white border-primary-500"
                : "text-[#ADB7BE] border-slate-600 hover:border-white",
              " rounded-full border-2 px-6 py-3 text-xl cursor-pointer"
            ),
            onClick: () => l(t),
            children: t,
          });
        },
        m = l(6165),
        x = l(9094);
      let h = [
        {
          id: 1,
          title: "React Portfolio Website",
          description: "Project 1 description",
          image: "/images/projects/1.png",
          tag: ["All", "Web"],
          gitUrl: "/",
          previewUrl: "/",
        },
        {
          id: 2,
          title: "Potography Portfolio Website",
          description: "Project 2 description",
          image: "/images/projects/2.png",
          tag: ["All", "Web"],
          gitUrl: "/",
          previewUrl: "/",
        },
        {
          id: 3,
          title: "E-commerce Application",
          description: "Project 3 description",
          image: "/images/projects/3.png",
          tag: ["All", "Web"],
          gitUrl: "/",
          previewUrl: "/",
        },
        {
          id: 4,
          title: "Food Ordering Application",
          description: "Project 4 description",
          image: "/images/projects/4.png",
          tag: ["All", "Mobile"],
          gitUrl: "/",
          previewUrl: "/",
        },
        {
          id: 5,
          title: "React Firebase Template",
          description: "Authentication and CRUD operations",
          image: "/images/projects/5.png",
          tag: ["All", "Web"],
          gitUrl: "/",
          previewUrl: "/",
        },
        {
          id: 6,
          title: "Full-stack Roadmap",
          description: "Project 5 description",
          image: "/images/projects/6.png",
          tag: ["All", "Web"],
          gitUrl: "/",
          previewUrl: "/",
        },
      ];
      var p = () => {
        let [e, t] = (0, i.useState)("All"),
          l = (0, i.useRef)(null),
          r = (0, m.Y)(l, { once: !0 }),
          a = (e) => {
            t(e);
          },
          n = h.filter((t) => t.tag.includes(e)),
          c = { initial: { y: 50, opacity: 0 }, animate: { y: 0, opacity: 1 } };
        return (0, s.jsxs)("section", {
          id: "projects",
          children: [
            (0, s.jsx)("h2", {
              className:
                "text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12",
              children: "My Projects",
            }),
            (0, s.jsxs)("div", {
              className:
                "text-white flex flex-row justify-center items-center gap-2 py-6",
              children: [
                (0, s.jsx)(d, {
                  onClick: a,
                  name: "All",
                  isSelected: "All" === e,
                }),
                (0, s.jsx)(d, {
                  onClick: a,
                  name: "Web",
                  isSelected: "Web" === e,
                }),
                (0, s.jsx)(d, {
                  onClick: a,
                  name: "Mobile",
                  isSelected: "Mobile" === e,
                }),
              ],
            }),
            (0, s.jsx)("ul", {
              ref: l,
              className: "grid md:grid-cols-3 gap-8 md:gap-12",
              children: n.map((e, t) =>
                (0, s.jsx)(
                  x.E.li,
                  {
                    variants: c,
                    initial: "initial",
                    animate: r ? "animate" : "initial",
                    transition: { duration: 0.3, delay: 0.4 * t },
                    children: (0, s.jsx)(
                      o,
                      {
                        title: e.title,
                        description: e.description,
                        imgUrl: e.image,
                        gitUrl: e.gitUrl,
                        previewUrl: e.previewUrl,
                      },
                      e.id
                    ),
                  },
                  t
                )
              ),
            }),
          ],
        });
      };
    },
  },
  function (e) {
    e.O(0, [19, 971, 596, 744], function () {
      return e((e.s = 9784));
    }),
      (_N_E = e.O());
  },
]);
