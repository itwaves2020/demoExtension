(() => {
    "use strict";
    var A = {
        737: (A, n, e) => {
            e.d(n, { Z: () => C });
            var t = e(15),
                o = e.n(t),
                l = e(645),
                s = e.n(l)()(o());
            s.push([
                A.id,
                '.base-button {\n  background: transparent;\n  max-height: 30px;\n  height: 30px;\n  border-radius: 20px;\n  padding: 0 15px;\n  border: solid 1px #e3e3e3;\n  color: #3b3b3b;\n  font-size: 12px;\n  transition: background 0.5s;\n}\n.base-button:hover {\n  background: #f0f0f0;\n  cursor: pointer;\n}\n.base-button:focus {\n  outline: none;\n}\n.base-button:active {\n  background: #e3e3e3;\n  cursor: pointer;\n}\n@media screen and (max-width: 900px) and (min-width: 540px) {\n  .base-button {\n    padding: 0 5px;\n  }\n}\n\n.ellipsis-button {\n  margin-left: auto;\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  border: none;\n  background: none;\n  transition: background 0.5s;\n}\n.ellipsis-button:hover {\n  display: block;\n  background: #e3e3e3;\n  cursor: pointer;\n}\n.ellipsis-button:focus {\n  outline: none;\n}\n\n.add-button {\n  width: 32px;\n  height: 32px;\n  background-color: #1d90f5;\n  border-radius: 50%;\n  font-size: 24px;\n  color: #fff;\n  line-height: 28px;\n  border: none;\n  position: absolute;\n  right: 10px;\n}\n.add-button:hover {\n  background-color: #0f69b8;\n  cursor: pointer;\n}\n@media screen and (max-width: 540px) {\n  .add-button {\n    position: fixed;\n    bottom: 10px;\n  }\n}\n\n.alert_info_wrapper {\n  padding: 8px 42px 8px 10px;\n  border-radius: 5px;\n  background-color: #f5f5f5;\n  margin: 15px 0 15px;\n}\n.alert_info_wrapper a {\n  color: #0f69b8;\n  text-decoration: none;\n}\n.alert_info_wrapper p {\n  margin: 2px 8px;\n  display: inline-block;\n}\n.alert_info_wrapper img {\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  float: left;\n  margin: 5px;\n}\n@media screen and (max-width: 540px) {\n  .alert_info_wrapper img {\n    display: inline-block;\n    float: none;\n    margin: 0 auto;\n  }\n}\n\n.toast-wrapper {\n  width: -webkit-fill-available;\n  position: fixed;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 5px;\n  z-index: 9999;\n  animation: fadein 0.3s;\n  -moz-animation: fadein 0.3s;\n  -webkit-animation: fadein 0.3s;\n  -o-animation: fadein 0.3s;\n  /* Opera */\n}\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-moz-keyframes fadein {\n  /* Firefox */\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes fadein {\n  /* Safari and Chrome */\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-o-keyframes fadein {\n  /* Opera */\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.toast {\n  min-width: 254px;\n  height: 40px;\n  flex-grow: 0;\n  padding: 0px 50px 0px 11px;\n  border-radius: 5px;\n  border: solid 1px #a4f6ba;\n  background-color: #f1fef4;\n  display: flex;\n  align-items: center;\n}\n.toast span {\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 1.71;\n  letter-spacing: normal;\n  text-align: left;\n  color: #107f52;\n  display: inline-block;\n}\n.toast img {\n  width: 24px;\n  height: 24px;\n  margin: 6px 8px 6px 0px;\n  display: inline-block;\n  float: left;\n}\n\n.toast-error {\n  min-width: 254px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  flex-grow: 0;\n  padding: 0px 50px 0px 11px;\n  border-radius: 5px;\n  border: solid 1px #f8ced3;\n  background-color: #ffefef;\n}\n.toast-error span {\n  color: #bb1717;\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 1.71;\n  letter-spacing: normal;\n  text-align: left;\n  display: inline-block;\n}\n.toast-error img {\n  width: 24px;\n  height: 24px;\n  margin: 6px 8px 6px 0px;\n  display: inline-block;\n  float: left;\n}\n@media screen and (max-width: 540px) {\n  .toast-error {\n    padding: 8px 0px 8px 10px;\n    min-width: 200px;\n    height: 15px;\n    margin-top: -10px;\n  }\n}\n\n.meeting-card-wrapper {\n  display: inline-block;\n  height: 125px;\n  min-height: 125px;\n  padding: 10px 18px 0px 15px;\n  border-radius: 5px;\n  border: solid 1px #f0f0f0;\n  background-color: #ffffff;\n}\n@media screen and (max-width: 540px) {\n  .meeting-card-wrapper {\n    padding: 10px 8px 0px 8px;\n  }\n}\n@media screen and (max-width: 900px) and (min-width: 540px) {\n  .meeting-card-wrapper {\n    padding: 10px 8px 0px 8px;\n  }\n}\n.meeting-card-wrapper .meeting-top {\n  display: flex;\n  position: relative;\n}\n.meeting-card-wrapper .meeting-top .title {\n  margin: 0;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.33;\n  letter-spacing: normal;\n  text-align: left;\n  color: #3b3b3b;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 100%;\n}\n.meeting-card-wrapper .meeting-top .sub-title {\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.71;\n  letter-spacing: normal;\n  text-align: left;\n  color: #707070;\n  margin: 0;\n}\n.meeting-card-wrapper .bottom {\n  display: flex;\n  justify-content: space-between;\n  padding-top: 46px;\n}\n.meeting-card-wrapper .bottom .avatar {\n  width: 100%;\n  max-width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.meeting-card-wrapper .bottom .user-count {\n  display: inline-flex;\n  justify-content: center;\n  max-height: 30px;\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  position: relative;\n  background: #f0f0f0;\n}\n.meeting-card-wrapper .bottom .user-count span {\n  position: absolute;\n  color: #707070;\n  font-size: 14px;\n  align-items: center;\n  align-self: center;\n}\n.meeting-card-wrapper .staff-card {\n  padding-top: 0px;\n  padding-bottom: 51px;\n  align-items: center;\n}\n.meeting-card-wrapper .staff-bottom {\n  height: 30px;\n}\n.meeting-card-wrapper .name {\n  display: flex;\n  align-items: center;\n  flex: 1;\n}\n.meeting-card-wrapper:hover .ellipsis-button {\n  display: block;\n}\n\n.tooltip {\n  min-width: 70px;\n  min-height: 20px;\n  top: -10px;\n  left: 50%;\n  transform: translate(-50%, -100%);\n  color: #3b3b3b;\n  background-color: #fff;\n  font-size: 12px;\n  border-radius: 5px;\n  position: absolute;\n  z-index: 9999;\n  box-sizing: border-box;\n  box-shadow: 0 1px 8px #dddddd;\n  visibility: hidden;\n  opacity: 0;\n  transition: opacity 0.8s;\n}\n.tooltip i {\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -12px;\n  width: 24px;\n  height: 12px;\n  overflow: hidden;\n}\n.tooltip i::after {\n  content: "";\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  left: 50%;\n  transform: translate(-50%, -50%) rotate(45deg);\n  background-color: #fff;\n  box-shadow: 0 1px 8px #dddddd;\n}\n\n* {\n  font-family: "Lato", "Arial", "Helvetica", "sans-serif";\n}\n\n.hide {\n  display: none;\n}\n\n.show {\n  display: inline-block;\n}\n\n.container {\n  padding: 35px 35px;\n  margin: 0 0 50px 0;\n}\n@media screen and (max-width: 540px) {\n  .container {\n    padding: 0px;\n  }\n}\n.container .root {\n  padding: 10px 15px;\n}\n@media screen and (max-width: 540px) {\n  .container .root {\n    padding: 10px 0px;\n  }\n}\n.container .root .services-text {\n  margin: 10px 0px 12px 0px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.container .root .services-text h2 {\n  margin: 0;\n  font-size: 24px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.33;\n  letter-spacing: normal;\n  text-align: left;\n  color: #3b3b3b;\n}\n.container .root .services-text .my-booking a {\n  font-size: 14px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.71;\n  letter-spacing: normal;\n  text-align: left;\n  color: #0f69b8;\n  float: left;\n  margin: 6px 15px;\n  text-decoration: none;\n}\n.container .root .services-text .my-booking a:hover {\n  text-decoration: underline;\n}\n.container .root .services-text .my-booking button {\n  display: flex;\n  align-items: center;\n  padding: 0;\n  border: none;\n  background: transparent;\n  position: relative;\n  cursor: pointer;\n}\n.container .root .services-text .my-booking button:focus {\n  background-color: #e3e3e3;\n  border-radius: 50%;\n  outline: none;\n}\n.container .root .services-text .my-booking button:hover .tooltip {\n  visibility: visible;\n  opacity: 1;\n}\n.container .root .services-text .my-booking img {\n  width: 18px;\n  height: 18px;\n  padding: 6px;\n  border: solid 1px #e3e3e3;\n  border-radius: 50%;\n}\n.container .root .services-text .my-booking img:hover {\n  background-color: #f0f0f0;\n}\n.container .root .services-text .my-booking img:focus {\n  background-color: #f0f0f0;\n  outline: none;\n}\n.container .root .services-text .my-booking img:active {\n  background-color: #e3e3e3;\n  outline: none;\n}\n.container .root .card-section {\n  display: grid;\n  grid-template-columns: repeat(3, calc(calc(100% / 3) - calc(40px / 3)));\n  grid-gap: 20px;\n}\n@media screen and (max-width: 540px) {\n  .container .root .card-section {\n    grid-template-columns: repeat(1, 100%);\n  }\n}\n@media screen and (max-width: 900px) and (min-width: 540px) {\n  .container .root .card-section {\n    grid-template-columns: repeat(2, calc(calc(100% / 2) - calc(20px / 2)));\n  }\n}\n@media screen and (max-width: 1300px) and (min-width: 900px) {\n  .container .root .card-section {\n    grid-template-columns: repeat(3, calc(calc(100% / 3) - calc(40px / 3)));\n  }\n}\n@media screen and (max-width: 1800px) and (min-width: 1300px) {\n  .container .root .card-section {\n    grid-template-columns: repeat(3, calc(calc(100% / 3) - calc(60px / 3)));\n  }\n}\n@media screen and (min-width: 1800px) {\n  .container .root .card-section {\n    grid-template-columns: repeat(5, calc(calc(100% / 5) - calc(80px / 5)));\n  }\n}\n.container .root .class-section {\n  padding-top: 30px;\n}\n.container .root .staff-section {\n  margin-top: 20px;\n}\n.container .root .cat-name {\n  padding: 18px 0px 10px 0px;\n  font-size: 16px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: normal;\n  text-align: left;\n  color: #707070;\n  display: inline-block;\n  width: 100%;\n}\n.container .root .dropdown-content {\n  position: absolute;\n  right: 0;\n  background-color: #fff;\n  box-shadow: 0px 7px 35px 0px #f0f0f0;\n  z-index: 1;\n  min-height: 150px;\n  min-width: 130px;\n  margin-top: 35px;\n  border-radius: 5px;\n}\n.container .root .dropdown-content a {\n  font-size: 14px;\n  color: #000;\n  padding: 15px 16px;\n  text-decoration: none;\n  display: block;\n}\n.container .root .dropdown-content a:hover {\n  background-color: #f0f0f0;\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=index.css.map */\n',
                "",
                {
                    version: 3,
                    sources: [
                        "webpack://./src/styles/components/buttons.scss",
                        "webpack://./src/styles/helpers/variables.scss",
                        "webpack://./src/styles/compiled/index.css",
                        "webpack://./src/styles/helpers/mixins.scss",
                        "webpack://./src/styles/components/alerts.scss",
                        "webpack://./src/styles/components/meeting-card.scss",
                        "webpack://./src/styles/components/tooltip.scss",
                        "webpack://./src/styles/index.scss",
                    ],
                    names: [],
                    mappings:
                        "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",
                    sourceRoot: "",
                },
            ]);
            const C = s;
        },
        645: (A) => {
            A.exports = function (A) {
                var n = [];
                return (
                    (n.toString = function () {
                        return this.map(function (n) {
                            var e = A(n);
                            return n[2] ? "@media ".concat(n[2], " {").concat(e, "}") : e;
                        }).join("");
                    }),
                    (n.i = function (A, e, t) {
                        "string" == typeof A && (A = [[null, A, ""]]);
                        var o = {};
                        if (t)
                            for (var l = 0; l < this.length; l++) {
                                var s = this[l][0];
                                null != s && (o[s] = !0);
                            }
                        for (var C = 0; C < A.length; C++) {
                            var i = [].concat(A[C]);
                            (t && o[i[0]]) || (e && (i[2] ? (i[2] = "".concat(e, " and ").concat(i[2])) : (i[2] = e)), n.push(i));
                        }
                    }),
                    n
                );
            };
        },
        15: (A) => {
            function n(A, n) {
                (null == n || n > A.length) && (n = A.length);
                for (var e = 0, t = new Array(n); e < n; e++) t[e] = A[e];
                return t;
            }
            A.exports = function (A) {
                var e,
                    t,
                    o =
                        ((t = 4),
                            (function (A) {
                                if (Array.isArray(A)) return A;
                            })((e = A)) ||
                            (function (A, n) {
                                if ("undefined" != typeof Symbol && Symbol.iterator in Object(A)) {
                                    var e = [],
                                        t = !0,
                                        o = !1,
                                        l = void 0;
                                    try {
                                        for (var s, C = A[Symbol.iterator](); !(t = (s = C.next()).done) && (e.push(s.value), !n || e.length !== n); t = !0);
                                    } catch (A) {
                                        (o = !0), (l = A);
                                    } finally {
                                        try {
                                            t || null == C.return || C.return();
                                        } finally {
                                            if (o) throw l;
                                        }
                                    }
                                    return e;
                                }
                            })(e, t) ||
                            (function (A, e) {
                                if (A) {
                                    if ("string" == typeof A) return n(A, e);
                                    var t = Object.prototype.toString.call(A).slice(8, -1);
                                    return (
                                        "Object" === t && A.constructor && (t = A.constructor.name), "Map" === t || "Set" === t ? Array.from(A) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? n(A, e) : void 0
                                    );
                                }
                            })(e, t) ||
                            (function () {
                                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                            })()),
                    l = o[1],
                    s = o[3];
                if ("function" == typeof btoa) {
                    var C = btoa(unescape(encodeURIComponent(JSON.stringify(s)))),
                        i = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(C),
                        a = "/*# ".concat(i, " */"),
                        c = s.sources.map(function (A) {
                            return "/*# sourceURL=".concat(s.sourceRoot || "").concat(A, " */");
                        });
                    return [l].concat(c).concat([a]).join("\n");
                }
                return [l].join("\n");
            };
        },
    },
        n = {};
    function e(t) {
        var o = n[t];
        if (void 0 !== o) return o.exports;
        var l = (n[t] = { id: t, exports: {} });
        return A[t](l, l.exports, e), l.exports;
    }
    (e.n = (A) => {
        var n = A && A.__esModule ? () => A.default : () => A;
        return e.d(n, { a: n }), n;
    }),
        (e.d = (A, n) => {
            for (var t in n) e.o(n, t) && !e.o(A, t) && Object.defineProperty(A, t, { enumerable: !0, get: n[t] });
        }),
        (e.o = (A, n) => Object.prototype.hasOwnProperty.call(A, n)),
        (() => {
            var A,
                n,
                t,
                o,
                l,
                s =
                    ((A = "/Users/apple/Projects/Package/Setmore-easyshare/src/config/api-config.ts"),
                        (n = "5c914bc0c0ceba3017f5c2aad624df406c59c01c"),
                        (o = {
                            path: "/Users/apple/Projects/Package/Setmore-easyshare/src/config/api-config.ts",
                            statementMap: {
                                0: { start: { line: 6, column: 8 }, end: { line: 6, column: 37 } },
                                1: { start: { line: 7, column: 8 }, end: { line: 7, column: 37 } },
                                2: { start: { line: 8, column: 8 }, end: { line: 8, column: 42 } },
                                3: { start: { line: 11, column: 8 }, end: { line: 11, column: 59 } },
                                4: { start: { line: 12, column: 8 }, end: { line: 14, column: 9 } },
                                5: { start: { line: 13, column: 12 }, end: { line: 13, column: 40 } },
                            },
                            fnMap: {
                                0: { name: "(anonymous_0)", decl: { start: { line: 5, column: 4 }, end: { line: 5, column: 5 } }, loc: { start: { line: 5, column: 23 }, end: { line: 9, column: 5 } }, line: 5 },
                                1: { name: "(anonymous_1)", decl: { start: { line: 10, column: 4 }, end: { line: 10, column: 5 } }, loc: { start: { line: 10, column: 40 }, end: { line: 15, column: 5 } }, line: 10 },
                            },
                            branchMap: {
                                0: {
                                    loc: { start: { line: 8, column: 21 }, end: { line: 8, column: 41 } },
                                    type: "binary-expr",
                                    locations: [
                                        { start: { line: 8, column: 21 }, end: { line: 8, column: 32 } },
                                        { start: { line: 8, column: 36 }, end: { line: 8, column: 41 } },
                                    ],
                                    line: 8,
                                },
                                1: {
                                    loc: { start: { line: 11, column: 25 }, end: { line: 11, column: 58 } },
                                    type: "binary-expr",
                                    locations: [
                                        { start: { line: 11, column: 25 }, end: { line: 11, column: 39 } },
                                        { start: { line: 11, column: 43 }, end: { line: 11, column: 58 } },
                                    ],
                                    line: 11,
                                },
                                2: {
                                    loc: { start: { line: 12, column: 8 }, end: { line: 14, column: 9 } },
                                    type: "if",
                                    locations: [
                                        { start: { line: 12, column: 8 }, end: { line: 14, column: 9 } },
                                        { start: { line: 12, column: 8 }, end: { line: 14, column: 9 } },
                                    ],
                                    line: 12,
                                },
                            },
                            s: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
                            f: { 0: 0, 1: 0 },
                            b: { 0: [0, 0], 1: [0, 0], 2: [0, 0] },
                            inputSourceMap: {
                                version: 3,
                                file: "/Users/apple/Projects/Package/Setmore-easyshare/src/config/api-config.ts",
                                sourceRoot: "",
                                sources: ["/Users/apple/Projects/Package/Setmore-easyshare/src/config/api-config.ts"],
                                names: [],
                                mappings:
                                    "AAAA,2EAA2E;AAC3E,2EAA2E;AAC3E,2EAA2E;AAC3E,MAAM,OAAO,SAAS;IAMlB,YAAoB,KAAK;QACrB,IAAI,CAAC,OAAO,GAAG,KAAK,CAAC,OAAO,CAAC;QAC7B,IAAI,CAAC,OAAO,GAAG,KAAK,CAAC,OAAO,CAAC;QAC7B,IAAI,CAAC,KAAK,GAAG,KAAK,CAAC,KAAK,IAAI,KAAK,CAAC;IACtC,CAAC;IAEM,MAAM,CAAC,WAAW,CAAC,KAAK,EAAE,QAA6B;QAC1D,IAAI,CAAC,SAAS,GAAG,IAAI,CAAC,SAAS,IAAI,IAAI,IAAI,CAAC,KAAK,CAAC,CAAC;QACnD,IAAI,OAAO,CAAC,QAAQ,CAAC,KAAK,UAAU,EAAE;YAClC,QAAQ,CAAC,EAAE,OAAO,EAAE,IAAI,EAAE,CAAC,CAAC;SAC/B;IACL,CAAC;CACJ",
                                sourcesContent: [
                                    '///////////////////////////////////////////////////////////////////////////\n/////////////////////// Class to get Api Config ///////////////////////////\n///////////////////////////////////////////////////////////////////////////\nexport class ApiConfig {\n    public static _instance: ApiConfig;\n    headers: any;\n    baseUrl: string;\n    isDev: boolean;\n\n    private constructor(props) {\n        this.headers = props.headers;\n        this.baseUrl = props.baseUrl;\n        this.isDev = props.isDev || false;\n    }\n\n    public static getInstance(props, callback?: (ack: any) => void) {\n        this._instance = this._instance || new this(props);\n        if (typeof (callback) === "function") {\n            callback({ success: true });\n        }\n    }\n}',
                                ],
                            },
                            _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c",
                        }),
                        (l = (t = new (0, function () { }.constructor)("return this")())["__coverage__"] || (t.__coverage__ = {}))[A] && l[A].hash === n ? l[A] : ((o.hash = n), (l[A] = o)));
            class C {
                constructor(A) {
                    s.f[0]++, s.s[0]++, (this.headers = A.headers), s.s[1]++, (this.baseUrl = A.baseUrl), s.s[2]++, (this.isDev = (s.b[0][0]++, A.isDev || (s.b[0][1]++, !1)));
                }
                static getInstance(A, n) {
                    s.f[1]++, s.s[3]++, (this._instance = (s.b[1][0]++, this._instance || (s.b[1][1]++, new this(A)))), s.s[4]++, "function" == typeof n ? (s.b[2][0]++, s.s[5]++, n({ success: !0 })) : s.b[2][1]++;
                }
            }
            var i = (function () {
                var A = "/Users/apple/Projects/Package/Setmore-easyshare/src/utils/extend.ts",
                    n = "c3903c77e1545c02c18dec2ed699c2dfa10ada89",
                    e = new (0, function () { }.constructor)("return this")(),
                    t = "__coverage__",
                    o = {
                        path: "/Users/apple/Projects/Package/Setmore-easyshare/src/utils/extend.ts",
                        statementMap: { 0: { start: { line: 2, column: 0 }, end: { line: 4, column: 2 } }, 1: { start: { line: 3, column: 4 }, end: { line: 3, column: 44 } } },
                        fnMap: { 0: { name: "(anonymous_0)", decl: { start: { line: 2, column: 18 }, end: { line: 2, column: 19 } }, loc: { start: { line: 2, column: 40 }, end: { line: 4, column: 1 } }, line: 2 } },
                        branchMap: {},
                        s: { 0: 0, 1: 0 },
                        f: { 0: 0 },
                        b: {},
                        inputSourceMap: {
                            version: 3,
                            file: "/Users/apple/Projects/Package/Setmore-easyshare/src/utils/extend.ts",
                            sourceRoot: "",
                            sources: ["/Users/apple/Projects/Package/Setmore-easyshare/src/utils/extend.ts"],
                            names: [],
                            mappings: "AAAA,OAAO,EAAE,SAAS,EAAE,MAAM,sBAAsB,CAAC;AASjD,MAAM,CAAC,QAAQ,GAAG,CAAC,MAAW,EAAE,QAA4B,EAAE,EAAE;IAC5D,SAAS,CAAC,WAAW,CAAC,MAAM,EAAE,QAAQ,CAAC,CAAC;AAC5C,CAAC,CAAA",
                            sourcesContent: [
                                'import { ApiConfig } from "../config/api-config";\n\nexport { };\ndeclare global {\n    interface Window {\n        __config: any;\n    }\n}\n\nwindow.__config = (config: any, callback: (ack: any) => void) => {\n    ApiConfig.getInstance(config, callback);\n}',
                            ],
                        },
                        _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c",
                    },
                    l = e[t] || (e[t] = {});
                return l[A] && l[A].hash === n ? l[A] : ((o.hash = n), (l[A] = o));
            })();
            i.s[0]++,
                (window.__config = (A, n) => {
                    i.f[0]++, i.s[1]++, C.getInstance(A, n);
                });
            var a = (function () {
                var A = "/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/button/base-button.ts",
                    n = "f21e7623b9cd1efda4d82dff072b4c8fff5b375e",
                    e = new (0, function () { }.constructor)("return this")(),
                    t = "__coverage__",
                    o = {
                        path: "/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/button/base-button.ts",
                        statementMap: {
                            0: { start: { line: 5, column: 18 }, end: { line: 5, column: 50 } },
                            1: { start: { line: 6, column: 4 }, end: { line: 6, column: 40 } },
                            2: { start: { line: 7, column: 4 }, end: { line: 8, column: 49 } },
                            3: { start: { line: 8, column: 8 }, end: { line: 8, column: 49 } },
                            4: { start: { line: 10, column: 4 }, end: { line: 10, column: 36 } },
                            5: { start: { line: 11, column: 4 }, end: { line: 11, column: 17 } },
                        },
                        fnMap: { 0: { name: "(anonymous_0)", decl: { start: { line: 4, column: 15 }, end: { line: 4, column: 16 } }, loc: { start: { line: 4, column: 26 }, end: { line: 12, column: 1 } }, line: 4 } },
                        branchMap: {
                            0: {
                                loc: { start: { line: 6, column: 22 }, end: { line: 6, column: 39 } },
                                type: "binary-expr",
                                locations: [
                                    { start: { line: 6, column: 22 }, end: { line: 6, column: 33 } },
                                    { start: { line: 6, column: 37 }, end: { line: 6, column: 39 } },
                                ],
                                line: 6,
                            },
                            1: {
                                loc: { start: { line: 7, column: 4 }, end: { line: 8, column: 49 } },
                                type: "if",
                                locations: [
                                    { start: { line: 7, column: 4 }, end: { line: 8, column: 49 } },
                                    { start: { line: 7, column: 4 }, end: { line: 8, column: 49 } },
                                ],
                                line: 7,
                            },
                        },
                        s: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
                        f: { 0: 0 },
                        b: { 0: [0, 0], 1: [0, 0] },
                        inputSourceMap: {
                            version: 3,
                            file: "/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/button/base-button.ts",
                            sourceRoot: "",
                            sources: ["/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/button/base-button.ts"],
                            names: [],
                            mappings:
                                "AAEA,gGAAgG;AAChG,gGAAgG;AAChG,gGAAgG;AAChG,eAAe,CAAC,KAAsB,EAAE,EAAE;IACtC,MAAM,KAAK,GAAG,QAAQ,CAAC,aAAa,CAAC,QAAQ,CAAC,CAAC;IAC/C,KAAK,CAAC,SAAS,GAAG,KAAK,CAAC,KAAK,IAAI,EAAE,CAAC;IACpC,IAAI,KAAK,CAAC,KAAK;QACX,KAAK,CAAC,YAAY,CAAC,OAAO,EAAE,KAAK,CAAC,KAAK,CAAC,CAAC;IAE7C,iBAAiB;IACjB,KAAK,CAAC,QAAQ,GAAG,KAAK,CAAC,QAAQ,CAAC;IAEhC,OAAO,KAAK,CAAC;AACjB,CAAC,CAAA",
                            sourcesContent: [
                                'import { BaseButtonProps } from "../../../config/types";\n\n////////////////////////////////////////////////////////////////////////////////////////////////\n////////////////////  base button function to render default button ////////////////////////////\n////////////////////////////////////////////////////////////////////////////////////////////////\nexport default (props: BaseButtonProps) => {\n    const btnEl = document.createElement("button");\n    btnEl.innerText = props.label || "";\n    if (props.class)\n        btnEl.setAttribute("class", props.class);\n\n    // disable button\n    btnEl.disabled = props.disabled;\n\n    return btnEl;\n}',
                            ],
                        },
                        _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c",
                    },
                    l = e[t] || (e[t] = {});
                return l[A] && l[A].hash === n ? l[A] : ((o.hash = n), (l[A] = o));
            })();
            const c = (A) => {
                a.f[0]++;
                const n = (a.s[0]++, document.createElement("button"));
                return a.s[1]++, (n.innerText = (a.b[0][0]++, A.label || (a.b[0][1]++, ""))), a.s[2]++, A.class ? (a.b[1][0]++, a.s[3]++, n.setAttribute("class", A.class)) : a.b[1][1]++, a.s[4]++, (n.disabled = A.disabled), a.s[5]++, n;
            };
            !(function () {
                var A = "/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/button/ellipsis-button.ts",
                    n = "7cbd058a32d657fa6b7e38ef14060858448b1fae",
                    e = new (0, function () { }.constructor)("return this")(),
                    t = "__coverage__",
                    o = {
                        path: "/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/button/ellipsis-button.ts",
                        statementMap: {
                            0: { start: { line: 5, column: 18 }, end: { line: 5, column: 50 } },
                            1: { start: { line: 6, column: 4 }, end: { line: 6, column: 66 } },
                            2: { start: { line: 7, column: 4 }, end: { line: 7, column: 36 } },
                            3: { start: { line: 8, column: 17 }, end: { line: 8, column: 44 } },
                            4: { start: { line: 9, column: 4 }, end: { line: 9, column: 51 } },
                            5: { start: { line: 10, column: 4 }, end: { line: 11, column: 52 } },
                            6: { start: { line: 11, column: 8 }, end: { line: 11, column: 52 } },
                            7: { start: { line: 12, column: 4 }, end: { line: 13, column: 36 } },
                            8: { start: { line: 13, column: 8 }, end: { line: 13, column: 36 } },
                            9: { start: { line: 14, column: 4 }, end: { line: 14, column: 28 } },
                            10: { start: { line: 15, column: 4 }, end: { line: 15, column: 17 } },
                        },
                        fnMap: { 0: { name: "(anonymous_0)", decl: { start: { line: 4, column: 15 }, end: { line: 4, column: 16 } }, loc: { start: { line: 4, column: 26 }, end: { line: 16, column: 1 } }, line: 4 } },
                        branchMap: {
                            0: {
                                loc: { start: { line: 10, column: 4 }, end: { line: 11, column: 52 } },
                                type: "if",
                                locations: [
                                    { start: { line: 10, column: 4 }, end: { line: 11, column: 52 } },
                                    { start: { line: 10, column: 4 }, end: { line: 11, column: 52 } },
                                ],
                                line: 10,
                            },
                            1: {
                                loc: { start: { line: 12, column: 4 }, end: { line: 13, column: 36 } },
                                type: "if",
                                locations: [
                                    { start: { line: 12, column: 4 }, end: { line: 13, column: 36 } },
                                    { start: { line: 12, column: 4 }, end: { line: 13, column: 36 } },
                                ],
                                line: 12,
                            },
                        },
                        s: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0 },
                        f: { 0: 0 },
                        b: { 0: [0, 0], 1: [0, 0] },
                        inputSourceMap: {
                            version: 3,
                            file: "/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/button/ellipsis-button.ts",
                            sourceRoot: "",
                            sources: ["/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/button/ellipsis-button.ts"],
                            names: [],
                            mappings:
                                "AAEA,gGAAgG;AAChG,gGAAgG;AAChG,gGAAgG;AAChG,eAAe,CAAC,KAA0B,EAAE,EAAE;IAC1C,MAAM,KAAK,GAAG,QAAQ,CAAC,aAAa,CAAC,QAAQ,CAAC,CAAC;IAC/C,KAAK,CAAC,YAAY,CAAC,OAAO,EAAE,mBAAmB,KAAK,CAAC,KAAK,EAAE,CAAC,CAAC;IAC9D,KAAK,CAAC,QAAQ,GAAG,KAAK,CAAC,QAAQ,CAAC;IAEhC,MAAM,IAAI,GAAG,QAAQ,CAAC,aAAa,CAAC,GAAG,CAAC,CAAC;IACzC,IAAI,CAAC,YAAY,CAAC,OAAO,EAAE,kBAAkB,CAAC,CAAC;IAE/C,IAAI,KAAK,CAAC,SAAS;QACf,IAAI,CAAC,YAAY,CAAC,OAAO,EAAE,KAAK,CAAC,SAAS,CAAC,CAAC;IAEhD,IAAI,KAAK,CAAC,KAAK;QACX,KAAK,CAAC,OAAO,GAAG,KAAK,CAAC,KAAK,CAAC;IAEhC,KAAK,CAAC,WAAW,CAAC,IAAI,CAAC,CAAC;IACxB,OAAO,KAAK,CAAC;AACjB,CAAC,CAAA",
                            sourcesContent: [
                                'import { EllipsisButtonProps } from "../../../config/types";\n\n////////////////////////////////////////////////////////////////////////////////////////////////\n///////////////// Ellipsis button function to render default ellipsis button ///////////////////\n////////////////////////////////////////////////////////////////////////////////////////////////\nexport default (props: EllipsisButtonProps) => {\n    const btnEl = document.createElement("button");\n    btnEl.setAttribute("class", `ellipsis-button ${props.class}`);\n    btnEl.disabled = props.disabled;\n\n    const icon = document.createElement("i");\n    icon.setAttribute("class", "fa fa-ellipsis-h");\n\n    if (props.iconClass)\n        icon.setAttribute("class", props.iconClass);\n\n    if (props.event)\n        btnEl.onclick = props.event;\n\n    btnEl.appendChild(icon);\n    return btnEl;\n}',
                            ],
                        },
                        _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c",
                    },
                    l = e[t] || (e[t] = {});
                l[A] && l[A].hash === n ? l[A] : ((o.hash = n), (l[A] = o));
            })(),
                (function () {
                    var A = "/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/button/index.ts",
                        n = "19dc04edcf52ccfd0493e6f4ee3f2ba7de47b559",
                        e = new (0, function () { }.constructor)("return this")(),
                        t = "__coverage__",
                        o = {
                            path: "/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/button/index.ts",
                            statementMap: {},
                            fnMap: {},
                            branchMap: {},
                            s: {},
                            f: {},
                            b: {},
                            inputSourceMap: {
                                version: 3,
                                file: "/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/button/index.ts",
                                sourceRoot: "",
                                sources: ["/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/button/index.ts"],
                                names: [],
                                mappings: "AAAA,OAAO,EAAE,OAAO,IAAI,MAAM,EAAE,MAAM,eAAe,CAAC;AAClD,OAAO,EAAE,OAAO,IAAI,cAAc,EAAE,MAAM,mBAAmB,CAAC",
                                sourcesContent: ['export { default as button } from "./base-button";\nexport { default as ellipsisButton } from "./ellipsis-button";'],
                            },
                            _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c",
                        },
                        l = e[t] || (e[t] = {});
                    l[A] && l[A].hash === n ? l[A] : ((o.hash = n), (l[A] = o));
                })(),
                (function () {
                    var A = "/Users/apple/Projects/Package/Setmore-easyshare/src/utils/assets.ts",
                        n = "4958c7f65afd486aec375d6ff00108d8aef4bb59",
                        e = new (0, function () { }.constructor)("return this")(),
                        t = "__coverage__",
                        o = {
                            path: "/Users/apple/Projects/Package/Setmore-easyshare/src/utils/assets.ts",
                            statementMap: {},
                            fnMap: {},
                            branchMap: {},
                            s: {},
                            f: {},
                            b: {},
                            inputSourceMap: {
                                version: 3,
                                file: "/Users/apple/Projects/Package/Setmore-easyshare/src/utils/assets.ts",
                                sourceRoot: "",
                                sources: ["/Users/apple/Projects/Package/Setmore-easyshare/src/utils/assets.ts"],
                                names: [],
                                mappings:
                                    "AAAA,uFAAuF;AACvF,uFAAuF;AACvF,uFAAuF;AACvF,eAAe;IACX,SAAS,EAAE,mFAAmF;IAC9F,YAAY,EAAE,sFAAsF;IACpG,UAAU,EAAE,kFAAkF;IAC9F,QAAQ,EAAE,kFAAkF;IAC5F,aAAa,EAAE,uFAAuF;IACtG,IAAI,EAAE,6EAA6E;CACtF,CAAA",
                                sourcesContent: [
                                    '///////////////////////////////////////////////////////////////////////////////////////\n///////////////////////////////// Image Assets object /////////////////////////////////\n///////////////////////////////////////////////////////////////////////////////////////\nexport default {\n    alertInfo: "https://storage.googleapis.com/setmore-assets/2.0/Images/EasyShare/alert_info.png",\n    toastSuccess: "https://storage.googleapis.com/setmore-assets/2.0/Images/EasyShare/alert_success.png",\n    toastError: "https://storage.googleapis.com/setmore-assets/2.0/Images/EasyShare/info_icon.svg",\n    copyIcon: "https://storage.googleapis.com/setmore-assets/2.0/Images/EasyShare/copy_icon.png",\n    defaultAvatar: "https://storage.googleapis.com/setmore-assets/2.0/Images/EasyShare/default_avatar.png",\n    user: "https://storage.googleapis.com/setmore-assets/2.0/Images/EasyShare/user.png",\n}',
                                ],
                            },
                            _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c",
                        },
                        l = e[t] || (e[t] = {});
                    l[A] && l[A].hash === n ? l[A] : ((o.hash = n), (l[A] = o));
                })();
            const r = "https://storage.googleapis.com/setmore-assets/2.0/Images/EasyShare/alert_success.png",
                m = "https://storage.googleapis.com/setmore-assets/2.0/Images/EasyShare/default_avatar.png";
            var u = (function () {
                var A = "/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/avatar/base-avatar.ts",
                    n = "6c24b3109cd23986959b478be802d22c86b33e88",
                    e = new (0, function () { }.constructor)("return this")(),
                    t = "__coverage__",
                    o = {
                        path: "/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/avatar/base-avatar.ts",
                        statementMap: {
                            0: { start: { line: 5, column: 27 }, end: { line: 17, column: 1 } },
                            1: { start: { line: 6, column: 21 }, end: { line: 6, column: 55 } },
                            2: { start: { line: 7, column: 4 }, end: { line: 15, column: 10 } },
                            3: { start: { line: 16, column: 4 }, end: { line: 16, column: 20 } },
                            4: { start: { line: 22, column: 19 }, end: { line: 22, column: 44 } },
                            5: { start: { line: 23, column: 4 }, end: { line: 23, column: 42 } },
                        },
                        fnMap: {
                            0: { name: "(anonymous_0)", decl: { start: { line: 5, column: 27 }, end: { line: 5, column: 28 } }, loc: { start: { line: 5, column: 38 }, end: { line: 17, column: 1 } }, line: 5 },
                            1: { name: "(anonymous_1)", decl: { start: { line: 21, column: 15 }, end: { line: 21, column: 16 } }, loc: { start: { line: 21, column: 26 }, end: { line: 24, column: 1 } }, line: 21 },
                        },
                        branchMap: {
                            0: {
                                loc: { start: { line: 9, column: 21 }, end: { line: 9, column: 43 } },
                                type: "binary-expr",
                                locations: [
                                    { start: { line: 9, column: 21 }, end: { line: 9, column: 37 } },
                                    { start: { line: 9, column: 41 }, end: { line: 9, column: 43 } },
                                ],
                                line: 9,
                            },
                            1: {
                                loc: { start: { line: 10, column: 19 }, end: { line: 10, column: 34 } },
                                type: "binary-expr",
                                locations: [
                                    { start: { line: 10, column: 19 }, end: { line: 10, column: 28 } },
                                    { start: { line: 10, column: 32 }, end: { line: 10, column: 34 } },
                                ],
                                line: 10,
                            },
                            2: {
                                loc: { start: { line: 11, column: 21 }, end: { line: 11, column: 39 } },
                                type: "binary-expr",
                                locations: [
                                    { start: { line: 11, column: 21 }, end: { line: 11, column: 33 } },
                                    { start: { line: 11, column: 37 }, end: { line: 11, column: 39 } },
                                ],
                                line: 11,
                            },
                        },
                        s: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
                        f: { 0: 0, 1: 0 },
                        b: { 0: [0, 0], 1: [0, 0], 2: [0, 0] },
                        inputSourceMap: {
                            version: 3,
                            file: "/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/avatar/base-avatar.ts",
                            sourceRoot: "",
                            sources: ["/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/avatar/base-avatar.ts"],
                            names: [],
                            mappings:
                                "AACA,OAAO,MAAM,MAAM,uBAAuB,CAAC;AAE3C,gGAAgG;AAChG,gGAAgG;AAChG,gGAAgG;AAChG,MAAM,kBAAkB,GAAG,CAAC,KAAsB,EAAE,EAAE;IAClD,MAAM,QAAQ,GAAG,QAAQ,CAAC,aAAa,CAAC,UAAU,CAAC,CAAC;IACpD,QAAQ,CAAC,SAAS,GAAG;;qBAEJ,KAAK,CAAC,UAAU,IAAI,EAAE;mBACxB,KAAK,CAAC,GAAG,IAAI,EAAE;qBACb,KAAK,CAAC,MAAM,IAAI,EAAE;iCACN,MAAM,CAAC,aAAa;;;SAG5C,CAAC;IACN,OAAO,QAAQ,CAAC;AACpB,CAAC,CAAA;AAED,gGAAgG;AAChG,gGAAgG;AAChG,gGAAgG;AAChG,eAAe,CAAC,KAAsB,EAAE,EAAE;IACtC,MAAM,MAAM,GAAG,kBAAkB,CAAC,KAAK,CAAC,CAAC;IACzC,OAAO,MAAM,CAAC,OAAO,CAAC,SAAS,CAAC,IAAI,CAAC,CAAC;AAC1C,CAAC,CAAA",
                            sourcesContent: [
                                'import { BaseAvatarProps } from "../../../config/types";\nimport images from "../../../utils/assets";\n\n////////////////////////////////////////////////////////////////////////////////////////////////\n//////////////////////////////// Default Avatar template ///////////////////////////////////////\n////////////////////////////////////////////////////////////////////////////////////////////////\nconst baseAvatarTemplate = (props: BaseAvatarProps) => {\n    const template = document.createElement("template");\n    template.innerHTML = `\n        <img\n            class="${props.styleClass || ""}"\n            src="${props.src || ""}"\n            style="${props.styles || ""}"\n            onerror="this.src=\'${images.defaultAvatar}\'"\n        >\n        </img>\n        `;\n    return template;\n}\n\n////////////////////////////////////////////////////////////////////////////////////////////////\n//////////////////////////// avatar function to render avatar image ////////////////////////////\n////////////////////////////////////////////////////////////////////////////////////////////////\nexport default (props: BaseAvatarProps) => {\n    const avatar = baseAvatarTemplate(props);\n    return avatar.content.cloneNode(true);\n}',
                            ],
                        },
                        _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c",
                    },
                    l = e[t] || (e[t] = {});
                return l[A] && l[A].hash === n ? l[A] : ((o.hash = n), (l[A] = o));
            })();
            u.s[0]++;
            const d = (A) => {
                u.f[1]++;
                const n =
                    (u.s[4]++,
                        ((A) => {
                            u.f[0]++;
                            const n = (u.s[1]++, document.createElement("template"));
                            return (
                                u.s[2]++,
                                (n.innerHTML = `\n        <img\n            class="${(u.b[0][0]++, A.styleClass || (u.b[0][1]++, ""))}"\n            src="${(u.b[1][0]++, A.src || (u.b[1][1]++, ""))}"\n            style="${(u.b[2][0]++, A.styles || (u.b[2][1]++, ""))
                                    }"\n            onerror="this.src='${m}'"\n        >\n        </img>\n        `),
                                u.s[3]++,
                                n
                            );
                        })(A));
                return u.s[5]++, n.content.cloneNode(!0);
            };
            !(function () {
                var A = "/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/avatar/index.ts",
                    n = "d68186e2cdbaa9bf3aab6a8c1885da7b0256dfbf",
                    e = new (0, function () { }.constructor)("return this")(),
                    t = "__coverage__",
                    o = {
                        path: "/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/avatar/index.ts",
                        statementMap: {},
                        fnMap: {},
                        branchMap: {},
                        s: {},
                        f: {},
                        b: {},
                        inputSourceMap: {
                            version: 3,
                            file: "/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/avatar/index.ts",
                            sourceRoot: "",
                            sources: ["/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/avatar/index.ts"],
                            names: [],
                            mappings: "AAAA,OAAO,EAAE,OAAO,IAAI,MAAM,EAAE,MAAM,eAAe,CAAC",
                            sourcesContent: ['export { default as avatar } from "./base-avatar";'],
                        },
                        _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c",
                    },
                    l = e[t] || (e[t] = {});
                l[A] && l[A].hash === n ? l[A] : ((o.hash = n), (l[A] = o));
            })();
            var p = (function () {
                var A = "/Users/apple/Projects/Package/Setmore-easyshare/src/utils/common.ts",
                    n = "c94f6d0c4a74b6212b586b28543091aa33e8b3ab",
                    e = new (0, function () { }.constructor)("return this")(),
                    t = "__coverage__",
                    o = {
                        path: "/Users/apple/Projects/Package/Setmore-easyshare/src/utils/common.ts",
                        statementMap: {
                            0: { start: { line: 4, column: 24 }, end: { line: 9, column: 1 } },
                            1: { start: { line: 5, column: 21 }, end: { line: 7, column: 36 } },
                            2: { start: { line: 5, column: 85 }, end: { line: 5, column: 112 } },
                            3: { start: { line: 7, column: 20 }, end: { line: 7, column: 35 } },
                            4: { start: { line: 8, column: 4 }, end: { line: 8, column: 58 } },
                            5: { start: { line: 13, column: 29 }, end: { line: 38, column: 1 } },
                            6: { start: { line: 14, column: 4 }, end: { line: 37, column: 5 } },
                            7: { start: { line: 15, column: 8 }, end: { line: 17, column: 9 } },
                            8: { start: { line: 16, column: 12 }, end: { line: 16, column: 64 } },
                            9: { start: { line: 20, column: 20 }, end: { line: 20, column: 53 } },
                            10: { start: { line: 21, column: 8 }, end: { line: 22, column: 51 } },
                            11: { start: { line: 22, column: 12 }, end: { line: 22, column: 51 } },
                            12: { start: { line: 23, column: 8 }, end: { line: 24, column: 51 } },
                            13: { start: { line: 24, column: 12 }, end: { line: 24, column: 51 } },
                            14: { start: { line: 25, column: 8 }, end: { line: 26, column: 44 } },
                            15: { start: { line: 26, column: 12 }, end: { line: 26, column: 44 } },
                            16: { start: { line: 27, column: 8 }, end: { line: 28, column: 56 } },
                            17: { start: { line: 28, column: 12 }, end: { line: 28, column: 56 } },
                            18: { start: { line: 29, column: 8 }, end: { line: 30, column: 44 } },
                            19: { start: { line: 30, column: 12 }, end: { line: 30, column: 44 } },
                            20: { start: { line: 31, column: 8 }, end: { line: 35, column: 9 } },
                            21: { start: { line: 32, column: 12 }, end: { line: 34, column: 13 } },
                            22: { start: { line: 33, column: 16 }, end: { line: 33, column: 56 } },
                            23: { start: { line: 36, column: 8 }, end: { line: 36, column: 42 } },
                            24: { start: { line: 42, column: 31 }, end: { line: 52, column: 1 } },
                            25: { start: { line: 43, column: 15 }, end: { line: 43, column: 49 } },
                            26: { start: { line: 44, column: 4 }, end: { line: 44, column: 20 } },
                            27: { start: { line: 45, column: 4 }, end: { line: 45, column: 36 } },
                            28: { start: { line: 46, column: 4 }, end: { line: 46, column: 35 } },
                            29: { start: { line: 47, column: 4 }, end: { line: 47, column: 30 } },
                            30: { start: { line: 48, column: 4 }, end: { line: 48, column: 34 } },
                            31: { start: { line: 49, column: 4 }, end: { line: 49, column: 16 } },
                            32: { start: { line: 50, column: 4 }, end: { line: 50, column: 33 } },
                            33: { start: { line: 51, column: 4 }, end: { line: 51, column: 34 } },
                            34: { start: { line: 56, column: 31 }, end: { line: 60, column: 1 } },
                            35: { start: { line: 57, column: 4 }, end: { line: 59, column: 8 } },
                            36: { start: { line: 58, column: 8 }, end: { line: 58, column: 45 } },
                            37: { start: { line: 64, column: 30 }, end: { line: 64, column: 50 } },
                            38: { start: { line: 68, column: 28 }, end: { line: 78, column: 1 } },
                            39: { start: { line: 69, column: 16 }, end: { line: 69, column: 17 } },
                            40: { start: { line: 70, column: 4 }, end: { line: 76, column: 5 } },
                            41: { start: { line: 71, column: 8 }, end: { line: 75, column: 9 } },
                            42: { start: { line: 72, column: 12 }, end: { line: 74, column: 13 } },
                            43: { start: { line: 73, column: 16 }, end: { line: 73, column: 24 } },
                            44: { start: { line: 77, column: 4 }, end: { line: 77, column: 17 } },
                        },
                        fnMap: {
                            0: { name: "(anonymous_0)", decl: { start: { line: 4, column: 24 }, end: { line: 4, column: 25 } }, loc: { start: { line: 4, column: 33 }, end: { line: 9, column: 1 } }, line: 4 },
                            1: { name: "(anonymous_1)", decl: { start: { line: 5, column: 69 }, end: { line: 5, column: 70 } }, loc: { start: { line: 5, column: 85 }, end: { line: 5, column: 112 } }, line: 5 },
                            2: { name: "(anonymous_2)", decl: { start: { line: 7, column: 13 }, end: { line: 7, column: 14 } }, loc: { start: { line: 7, column: 20 }, end: { line: 7, column: 35 } }, line: 7 },
                            3: { name: "(anonymous_3)", decl: { start: { line: 13, column: 29 }, end: { line: 13, column: 30 } }, loc: { start: { line: 13, column: 40 }, end: { line: 38, column: 1 } }, line: 13 },
                            4: { name: "(anonymous_4)", decl: { start: { line: 42, column: 31 }, end: { line: 42, column: 32 } }, loc: { start: { line: 42, column: 41 }, end: { line: 52, column: 1 } }, line: 42 },
                            5: { name: "(anonymous_5)", decl: { start: { line: 56, column: 31 }, end: { line: 56, column: 32 } }, loc: { start: { line: 56, column: 40 }, end: { line: 60, column: 1 } }, line: 56 },
                            6: { name: "(anonymous_6)", decl: { start: { line: 57, column: 21 }, end: { line: 57, column: 22 } }, loc: { start: { line: 57, column: 31 }, end: { line: 59, column: 5 } }, line: 57 },
                            7: { name: "(anonymous_7)", decl: { start: { line: 68, column: 28 }, end: { line: 68, column: 29 } }, loc: { start: { line: 68, column: 38 }, end: { line: 78, column: 1 } }, line: 68 },
                        },
                        branchMap: {
                            0: {
                                loc: { start: { line: 14, column: 4 }, end: { line: 37, column: 5 } },
                                type: "if",
                                locations: [
                                    { start: { line: 14, column: 4 }, end: { line: 37, column: 5 } },
                                    { start: { line: 14, column: 4 }, end: { line: 37, column: 5 } },
                                ],
                                line: 14,
                            },
                            1: {
                                loc: { start: { line: 15, column: 8 }, end: { line: 17, column: 9 } },
                                type: "if",
                                locations: [
                                    { start: { line: 15, column: 8 }, end: { line: 17, column: 9 } },
                                    { start: { line: 15, column: 8 }, end: { line: 17, column: 9 } },
                                ],
                                line: 15,
                            },
                            2: {
                                loc: { start: { line: 21, column: 8 }, end: { line: 22, column: 51 } },
                                type: "if",
                                locations: [
                                    { start: { line: 21, column: 8 }, end: { line: 22, column: 51 } },
                                    { start: { line: 21, column: 8 }, end: { line: 22, column: 51 } },
                                ],
                                line: 21,
                            },
                            3: {
                                loc: { start: { line: 23, column: 8 }, end: { line: 24, column: 51 } },
                                type: "if",
                                locations: [
                                    { start: { line: 23, column: 8 }, end: { line: 24, column: 51 } },
                                    { start: { line: 23, column: 8 }, end: { line: 24, column: 51 } },
                                ],
                                line: 23,
                            },
                            4: {
                                loc: { start: { line: 25, column: 8 }, end: { line: 26, column: 44 } },
                                type: "if",
                                locations: [
                                    { start: { line: 25, column: 8 }, end: { line: 26, column: 44 } },
                                    { start: { line: 25, column: 8 }, end: { line: 26, column: 44 } },
                                ],
                                line: 25,
                            },
                            5: {
                                loc: { start: { line: 27, column: 8 }, end: { line: 28, column: 56 } },
                                type: "if",
                                locations: [
                                    { start: { line: 27, column: 8 }, end: { line: 28, column: 56 } },
                                    { start: { line: 27, column: 8 }, end: { line: 28, column: 56 } },
                                ],
                                line: 27,
                            },
                            6: {
                                loc: { start: { line: 29, column: 8 }, end: { line: 30, column: 44 } },
                                type: "if",
                                locations: [
                                    { start: { line: 29, column: 8 }, end: { line: 30, column: 44 } },
                                    { start: { line: 29, column: 8 }, end: { line: 30, column: 44 } },
                                ],
                                line: 29,
                            },
                            7: {
                                loc: { start: { line: 31, column: 8 }, end: { line: 35, column: 9 } },
                                type: "if",
                                locations: [
                                    { start: { line: 31, column: 8 }, end: { line: 35, column: 9 } },
                                    { start: { line: 31, column: 8 }, end: { line: 35, column: 9 } },
                                ],
                                line: 31,
                            },
                            8: {
                                loc: { start: { line: 70, column: 4 }, end: { line: 76, column: 5 } },
                                type: "if",
                                locations: [
                                    { start: { line: 70, column: 4 }, end: { line: 76, column: 5 } },
                                    { start: { line: 70, column: 4 }, end: { line: 76, column: 5 } },
                                ],
                                line: 70,
                            },
                            9: {
                                loc: { start: { line: 72, column: 12 }, end: { line: 74, column: 13 } },
                                type: "if",
                                locations: [
                                    { start: { line: 72, column: 12 }, end: { line: 74, column: 13 } },
                                    { start: { line: 72, column: 12 }, end: { line: 74, column: 13 } },
                                ],
                                line: 72,
                            },
                        },
                        s: {
                            0: 0,
                            1: 0,
                            2: 0,
                            3: 0,
                            4: 0,
                            5: 0,
                            6: 0,
                            7: 0,
                            8: 0,
                            9: 0,
                            10: 0,
                            11: 0,
                            12: 0,
                            13: 0,
                            14: 0,
                            15: 0,
                            16: 0,
                            17: 0,
                            18: 0,
                            19: 0,
                            20: 0,
                            21: 0,
                            22: 0,
                            23: 0,
                            24: 0,
                            25: 0,
                            26: 0,
                            27: 0,
                            28: 0,
                            29: 0,
                            30: 0,
                            31: 0,
                            32: 0,
                            33: 0,
                            34: 0,
                            35: 0,
                            36: 0,
                            37: 0,
                            38: 0,
                            39: 0,
                            40: 0,
                            41: 0,
                            42: 0,
                            43: 0,
                            44: 0,
                        },
                        f: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 },
                        b: { 0: [0, 0], 1: [0, 0], 2: [0, 0], 3: [0, 0], 4: [0, 0], 5: [0, 0], 6: [0, 0], 7: [0, 0], 8: [0, 0], 9: [0, 0] },
                        inputSourceMap: {
                            version: 3,
                            file: "/Users/apple/Projects/Package/Setmore-easyshare/src/utils/common.ts",
                            sourceRoot: "",
                            sources: ["/Users/apple/Projects/Package/Setmore-easyshare/src/utils/common.ts"],
                            names: [],
                            mappings:
                                "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",
                            sourcesContent: [
                                "///////////////////////////////////////////////////////////////////////////////////////\n//////////////////// Function to convert Hexadecimal color to rgb /////////////////////\n///////////////////////////////////////////////////////////////////////////////////////\nexport const hexToRgb = (hex: any) => {\n    const rgbCodes = hex.replace(/^#?([a-f\\d])([a-f\\d])([a-f\\d])$/i,\n        (m: any, r: any, g: any, b: any) => '#' + r + r + g + g + b + b)\n        .substring(1).match(/.{2}/g)\n        .map((x: string) => parseInt(x, 16));\n\n    return `${rgbCodes[0]} ${rgbCodes[1]} ${rgbCodes[2]}`\n}\n\n///////////////////////////////////////////////////////////////////////////////////////\n//////////////////////////// Create and set child element /////////////////////////////\n///////////////////////////////////////////////////////////////////////////////////////\nexport const setProperties = (value: any) => {\n    if (value.tag === \"self\") {\n        if (value.style) {\n            value.appendWidh.setAttribute(\"style\", value.style);\n        }\n    }\n    else {\n        const ele = document.createElement(value.tag);\n        if (value.style)\n            ele.setAttribute(\"style\", value.style);\n\n        if (value.class)\n            ele.setAttribute(\"class\", value.class);\n\n        if (value.innerText)\n            ele.innerText = value.innerText;\n\n        if (value.innerTitle)\n            ele.setAttribute(\"title\", value.innerTitle);\n\n        if (value.innerHTML)\n            ele.innerHTML = value.innerHTML;\n\n        if (value.attributes) {\n            for (const attr of value.attributes) {\n                ele.setAttribute(attr.name, attr.value);\n            }\n        }\n        value.appendWidh.appendChild(ele);\n    }\n}\n\n///////////////////////////////////////////////////////////////////////////////////////\n///////////////////// Copy Text to Clipborad and set child element ////////////////////\n///////////////////////////////////////////////////////////////////////////////////////\nexport const copyToClipboard = (text: string) => {\n    const el = document.createElement('textarea');\n    el.value = text;\n    el.setAttribute('readonly', '');\n    el.style.position = 'absolute';\n    el.style.left = '-9999px';\n    document.body.appendChild(el);\n    el.select();\n    document.execCommand('copy');\n    document.body.removeChild(el);\n};\n\n///////////////////////////////////////////////////////////////////////////////////////\n///////////////////// Sort array of json //////////////////////////////////////////////\n///////////////////////////////////////////////////////////////////////////////////////\nexport const sortArrayOfJson = (arr) => {\n    return arr.sort(((a, b) => {\n        return a.createdTime - b.createdTime;\n    }));\n}\n\n///////////////////////////////////////////////////////////////////////////////////////\n///////////////////// Types of Cards //////////////////////////////////////////////////\n///////////////////////////////////////////////////////////////////////////////////////\nexport const _fixCategories = [\"SERVICE\", \"CLASS\"];\n\n////////////////////////////////////////////////////////////////////////////////////////\n////////////////////// Count of cards in a category ////////////////////////////////////\n////////////////////////////////////////////////////////////////////////////////////////\nexport const countOfCards = groups => {\n    let count = 0;\n    if (groups) {\n        for (const _g in groups) {\n            if (groups[_g].length) {\n                count++;\n            }\n        }\n    }\n    return count;\n}",
                            ],
                        },
                        _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c",
                    },
                    l = e[t] || (e[t] = {});
                return l[A] && l[A].hash === n ? l[A] : ((o.hash = n), (l[A] = o));
            })();
            p.s[0]++, p.s[5]++;
            const E = (A) => {
                if ((p.f[3]++, p.s[6]++, "self" === A.tag)) p.b[0][0]++, p.s[7]++, A.style ? (p.b[1][0]++, p.s[8]++, A.appendWidh.setAttribute("style", A.style)) : p.b[1][1]++;
                else {
                    p.b[0][1]++;
                    const n = (p.s[9]++, document.createElement(A.tag));
                    if (
                        (p.s[10]++,
                            A.style ? (p.b[2][0]++, p.s[11]++, n.setAttribute("style", A.style)) : p.b[2][1]++,
                            p.s[12]++,
                            A.class ? (p.b[3][0]++, p.s[13]++, n.setAttribute("class", A.class)) : p.b[3][1]++,
                            p.s[14]++,
                            A.innerText ? (p.b[4][0]++, p.s[15]++, (n.innerText = A.innerText)) : p.b[4][1]++,
                            p.s[16]++,
                            A.innerTitle ? (p.b[5][0]++, p.s[17]++, n.setAttribute("title", A.innerTitle)) : p.b[5][1]++,
                            p.s[18]++,
                            A.innerHTML ? (p.b[6][0]++, p.s[19]++, (n.innerHTML = A.innerHTML)) : p.b[6][1]++,
                            p.s[20]++,
                            A.attributes)
                    ) {
                        p.b[7][0]++, p.s[21]++;
                        for (const e of A.attributes) p.s[22]++, n.setAttribute(e.name, e.value);
                    } else p.b[7][1]++;
                    p.s[23]++, A.appendWidh.appendChild(n);
                }
            };
            p.s[24]++;
            const h = (A) => {
                p.f[4]++;
                const n = (p.s[25]++, document.createElement("textarea"));
                p.s[26]++,
                    (n.value = A),
                    p.s[27]++,
                    n.setAttribute("readonly", ""),
                    p.s[28]++,
                    (n.style.position = "absolute"),
                    p.s[29]++,
                    (n.style.left = "-9999px"),
                    p.s[30]++,
                    document.body.appendChild(n),
                    p.s[31]++,
                    n.select(),
                    p.s[32]++,
                    document.execCommand("copy"),
                    p.s[33]++,
                    document.body.removeChild(n);
            };
            p.s[34]++;
            const I = (p.s[37]++, ["SERVICE", "CLASS"]);
            p.s[38]++;
            const f = (A) => {
                p.f[7]++;
                let n = (p.s[39]++, 0);
                if ((p.s[40]++, A)) {
                    p.b[8][0]++, p.s[41]++;
                    for (const e in A) p.s[42]++, A[e].length ? (p.b[9][0]++, p.s[43]++, n++) : p.b[9][1]++;
                } else p.b[8][1]++;
                return p.s[44]++, n;
            };
            var g = (function () {
                var A = "/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/dropdown/card-dropdown.ts",
                    n = "a1bb3315337773f444a014ef9a17668652b780fc",
                    e = new (0, function () { }.constructor)("return this")(),
                    t = "__coverage__",
                    o = {
                        path: "/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/dropdown/card-dropdown.ts",
                        statementMap: {
                            0: { start: { line: 5, column: 29 }, end: { line: 5, column: 58 } },
                            1: { start: { line: 6, column: 4 }, end: { line: 6, column: 68 } },
                            2: { start: { line: 8, column: 4 }, end: { line: 13, column: 7 } },
                            3: { start: { line: 9, column: 21 }, end: { line: 9, column: 48 } },
                            4: { start: { line: 10, column: 8 }, end: { line: 10, column: 39 } },
                            5: { start: { line: 11, column: 8 }, end: { line: 11, column: 27 } },
                            6: { start: { line: 12, column: 8 }, end: { line: 12, column: 43 } },
                            7: { start: { line: 14, column: 4 }, end: { line: 14, column: 28 } },
                        },
                        fnMap: {
                            0: { name: "(anonymous_0)", decl: { start: { line: 4, column: 15 }, end: { line: 4, column: 16 } }, loc: { start: { line: 4, column: 26 }, end: { line: 15, column: 1 } }, line: 4 },
                            1: { name: "(anonymous_1)", decl: { start: { line: 8, column: 23 }, end: { line: 8, column: 24 } }, loc: { start: { line: 8, column: 30 }, end: { line: 13, column: 5 } }, line: 8 },
                        },
                        branchMap: {},
                        s: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 },
                        f: { 0: 0, 1: 0 },
                        b: {},
                        inputSourceMap: {
                            version: 3,
                            file: "/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/dropdown/card-dropdown.ts",
                            sourceRoot: "",
                            sources: ["/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/dropdown/card-dropdown.ts"],
                            names: [],
                            mappings:
                                "AAEA,gGAAgG;AAChG,gGAAgG;AAChG,gGAAgG;AAChG,eAAe,CAAC,KAAwB,EAAE,EAAE;IACxC,MAAM,gBAAgB,GAAG,QAAQ,CAAC,aAAa,CAAC,KAAK,CAAC,CAAC;IACvD,gBAAgB,CAAC,YAAY,CAAC,OAAO,EAAE,uBAAuB,CAAC,CAAC;IAEhE,oCAAoC;IACpC,KAAK,CAAC,IAAI,CAAC,OAAO,CAAC,CAAC,CAAC,EAAE,EAAE;QACrB,MAAM,IAAI,GAAG,QAAQ,CAAC,aAAa,CAAC,GAAG,CAAC,CAAC;QACzC,IAAI,CAAC,YAAY,CAAC,MAAM,EAAE,GAAG,CAAC,CAAC;QAC/B,IAAI,CAAC,SAAS,GAAG,CAAC,CAAC;QACnB,gBAAgB,CAAC,WAAW,CAAC,IAAI,CAAC,CAAC;IACvC,CAAC,CAAC,CAAC;IAEH,OAAO,gBAAgB,CAAC;AAC5B,CAAC,CAAA",
                            sourcesContent: [
                                'import { CardDropDownProps } from "../../../config/types";\n\n////////////////////////////////////////////////////////////////////////////////////////////////\n////////////////////  Card dropdown function to render drop down menu //////////////////////////\n////////////////////////////////////////////////////////////////////////////////////////////////\nexport default (props: CardDropDownProps) => {\n    const dropDownTemplate = document.createElement("div");\n    dropDownTemplate.setAttribute("class", "hide dropdown-content");\n\n    // append each list item to dropdown\n    props.list.forEach((l) => {\n        const item = document.createElement("a");\n        item.setAttribute("href", "#");\n        item.innerText = l;\n        dropDownTemplate.appendChild(item);\n    });\n\n    return dropDownTemplate;\n}',
                            ],
                        },
                        _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c",
                    },
                    l = e[t] || (e[t] = {});
                return l[A] && l[A].hash === n ? l[A] : ((o.hash = n), (l[A] = o));
            })();
            const b = (A) => {
                g.f[0]++;
                const n = (g.s[0]++, document.createElement("div"));
                return (
                    g.s[1]++,
                    n.setAttribute("class", "hide dropdown-content"),
                    g.s[2]++,
                    A.list.forEach((A) => {
                        g.f[1]++;
                        const e = (g.s[3]++, document.createElement("a"));
                        g.s[4]++, e.setAttribute("href", "#"), g.s[5]++, (e.innerText = A), g.s[6]++, n.appendChild(e);
                    }),
                    g.s[7]++,
                    n
                );
            };
            !(function () {
                var A = "/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/dropdown/index.ts",
                    n = "e297fa3e5f53412c237c28c1513988c57e58dfd0",
                    e = new (0, function () { }.constructor)("return this")(),
                    t = "__coverage__",
                    o = {
                        path: "/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/dropdown/index.ts",
                        statementMap: {},
                        fnMap: {},
                        branchMap: {},
                        s: {},
                        f: {},
                        b: {},
                        inputSourceMap: {
                            version: 3,
                            file: "/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/dropdown/index.ts",
                            sourceRoot: "",
                            sources: ["/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/dropdown/index.ts"],
                            names: [],
                            mappings: "AAAA,OAAO,EAAE,OAAO,IAAI,YAAY,EAAE,MAAM,iBAAiB,CAAC",
                            sourcesContent: ['export { default as cardDropDown } from "./card-dropdown";'],
                        },
                        _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c",
                    },
                    l = e[t] || (e[t] = {});
                l[A] && l[A].hash === n ? l[A] : ((o.hash = n), (l[A] = o));
            })();
            var G = (function () {
                var A = "/Users/apple/Projects/Package/Setmore-easyshare/src/components/molecules/cards/meeting-card.ts",
                    n = "9652d72e94c6e5f0f44b1eb1e089d14900aad89f",
                    e = new (0, function () { }.constructor)("return this")(),
                    t = "__coverage__",
                    o = {
                        path: "/Users/apple/Projects/Package/Setmore-easyshare/src/components/molecules/cards/meeting-card.ts",
                        statementMap: {
                            0: { start: { line: 11, column: 8 }, end: { line: 11, column: 53 } },
                            1: { start: { line: 12, column: 8 }, end: { line: 12, column: 49 } },
                            2: { start: { line: 13, column: 8 }, end: { line: 13, column: 52 } },
                            3: { start: { line: 14, column: 8 }, end: { line: 14, column: 78 } },
                            4: { start: { line: 18, column: 8 }, end: { line: 25, column: 10 } },
                            5: { start: { line: 19, column: 12 }, end: { line: 24, column: 13 } },
                            6: { start: { line: 20, column: 16 }, end: { line: 20, column: 55 } },
                            7: { start: { line: 23, column: 16 }, end: { line: 23, column: 52 } },
                            8: { start: { line: 29, column: 8 }, end: { line: 33, column: 10 } },
                            9: { start: { line: 30, column: 24 }, end: { line: 30, column: 48 } },
                            10: { start: { line: 31, column: 12 }, end: { line: 31, column: 121 } },
                            11: { start: { line: 32, column: 12 }, end: { line: 32, column: 66 } },
                            12: { start: { line: 37, column: 8 }, end: { line: 40, column: 10 } },
                            13: { start: { line: 38, column: 12 }, end: { line: 38, column: 65 } },
                            14: { start: { line: 39, column: 12 }, end: { line: 39, column: 63 } },
                            15: { start: { line: 44, column: 8 }, end: { line: 68, column: 10 } },
                            16: { start: { line: 45, column: 24 }, end: { line: 45, column: 25 } },
                            17: { start: { line: 46, column: 12 }, end: { line: 57, column: 13 } },
                            18: { start: { line: 47, column: 16 }, end: { line: 47, column: 24 } },
                            19: { start: { line: 48, column: 16 }, end: { line: 56, column: 26 } },
                            20: { start: { line: 49, column: 20 }, end: { line: 54, column: 24 } },
                            21: { start: { line: 56, column: 20 }, end: { line: 56, column: 26 } },
                            22: { start: { line: 58, column: 12 }, end: { line: 67, column: 13 } },
                            23: { start: { line: 59, column: 28 }, end: { line: 59, column: 57 } },
                            24: { start: { line: 60, column: 16 }, end: { line: 60, column: 56 } },
                            25: { start: { line: 61, column: 16 }, end: { line: 62, column: 65 } },
                            26: { start: { line: 62, column: 20 }, end: { line: 62, column: 65 } },
                            27: { start: { line: 63, column: 26 }, end: { line: 63, column: 56 } },
                            28: { start: { line: 64, column: 16 }, end: { line: 64, column: 49 } },
                            29: { start: { line: 65, column: 16 }, end: { line: 65, column: 35 } },
                            30: { start: { line: 66, column: 16 }, end: { line: 66, column: 47 } },
                            31: { start: { line: 69, column: 8 }, end: { line: 69, column: 67 } },
                            32: { start: { line: 70, column: 8 }, end: { line: 70, column: 54 } },
                            33: { start: { line: 71, column: 8 }, end: { line: 73, column: 9 } },
                            34: { start: { line: 72, column: 12 }, end: { line: 72, column: 57 } },
                            35: { start: { line: 74, column: 8 }, end: { line: 74, column: 115 } },
                            36: { start: { line: 75, column: 8 }, end: { line: 75, column: 33 } },
                            37: { start: { line: 76, column: 8 }, end: { line: 76, column: 61 } },
                            38: { start: { line: 77, column: 8 }, end: { line: 77, column: 45 } },
                            39: { start: { line: 78, column: 8 }, end: { line: 78, column: 42 } },
                            40: { start: { line: 79, column: 8 }, end: { line: 79, column: 44 } },
                            41: { start: { line: 80, column: 8 }, end: { line: 80, column: 33 } },
                            42: { start: { line: 81, column: 8 }, end: { line: 81, column: 39 } },
                            43: { start: { line: 82, column: 8 }, end: { line: 82, column: 45 } },
                            44: { start: { line: 83, column: 8 }, end: { line: 83, column: 29 } },
                            45: { start: { line: 84, column: 8 }, end: { line: 84, column: 20 } },
                            46: { start: { line: 85, column: 8 }, end: { line: 85, column: 23 } },
                            47: { start: { line: 86, column: 8 }, end: { line: 86, column: 43 } },
                            48: { start: { line: 87, column: 8 }, end: { line: 87, column: 46 } },
                            49: { start: { line: 88, column: 8 }, end: { line: 88, column: 63 } },
                            50: { start: { line: 89, column: 8 }, end: { line: 89, column: 61 } },
                            51: { start: { line: 90, column: 8 }, end: { line: 90, column: 59 } },
                            52: { start: { line: 91, column: 8 }, end: { line: 91, column: 63 } },
                            53: { start: { line: 92, column: 8 }, end: { line: 92, column: 72 } },
                            54: { start: { line: 93, column: 8 }, end: { line: 93, column: 70 } },
                            55: { start: { line: 99, column: 23 }, end: { line: 99, column: 67 } },
                            56: { start: { line: 100, column: 8 }, end: { line: 100, column: 68 } },
                            57: { start: { line: 101, column: 8 }, end: { line: 101, column: 55 } },
                            58: { start: { line: 102, column: 8 }, end: { line: 102, column: 82 } },
                            59: { start: { line: 103, column: 8 }, end: { line: 106, column: 11 } },
                            60: { start: { line: 107, column: 8 }, end: { line: 107, column: 110 } },
                            61: { start: { line: 108, column: 8 }, end: { line: 108, column: 44 } },
                            62: { start: { line: 116, column: 8 }, end: { line: 116, column: 52 } },
                            63: { start: { line: 117, column: 8 }, end: { line: 117, column: 63 } },
                            64: { start: { line: 118, column: 26 }, end: { line: 118, column: 55 } },
                            65: { start: { line: 119, column: 8 }, end: { line: 124, column: 11 } },
                            66: { start: { line: 125, column: 24 }, end: { line: 125, column: 82 } },
                            67: { start: { line: 126, column: 8 }, end: { line: 133, column: 11 } },
                            68: { start: { line: 127, column: 12 }, end: { line: 132, column: 48 } },
                            69: { start: { line: 128, column: 16 }, end: { line: 128, column: 50 } },
                            70: { start: { line: 129, column: 16 }, end: { line: 129, column: 60 } },
                            71: { start: { line: 132, column: 16 }, end: { line: 132, column: 48 } },
                            72: { start: { line: 134, column: 8 }, end: { line: 134, column: 54 } },
                            73: { start: { line: 135, column: 8 }, end: { line: 135, column: 41 } },
                        },
                        fnMap: {
                            0: { name: "(anonymous_0)", decl: { start: { line: 10, column: 4 }, end: { line: 10, column: 5 } }, loc: { start: { line: 10, column: 23 }, end: { line: 94, column: 5 } }, line: 10 },
                            1: { name: "(anonymous_1)", decl: { start: { line: 18, column: 31 }, end: { line: 18, column: 32 } }, loc: { start: { line: 18, column: 38 }, end: { line: 25, column: 9 } }, line: 18 },
                            2: { name: "(anonymous_2)", decl: { start: { line: 29, column: 30 }, end: { line: 29, column: 31 } }, loc: { start: { line: 29, column: 36 }, end: { line: 33, column: 9 } }, line: 29 },
                            3: { name: "(anonymous_3)", decl: { start: { line: 37, column: 29 }, end: { line: 37, column: 30 } }, loc: { start: { line: 37, column: 35 }, end: { line: 40, column: 9 } }, line: 37 },
                            4: { name: "(anonymous_4)", decl: { start: { line: 44, column: 31 }, end: { line: 44, column: 32 } }, loc: { start: { line: 44, column: 42 }, end: { line: 68, column: 9 } }, line: 44 },
                            5: { name: "(anonymous_5)", decl: { start: { line: 98, column: 4 }, end: { line: 98, column: 5 } }, loc: { start: { line: 98, column: 11 }, end: { line: 111, column: 5 } }, line: 98 },
                            6: { name: "(anonymous_6)", decl: { start: { line: 115, column: 4 }, end: { line: 115, column: 5 } }, loc: { start: { line: 115, column: 14 }, end: { line: 136, column: 5 } }, line: 115 },
                            7: { name: "(anonymous_7)", decl: { start: { line: 126, column: 42 }, end: { line: 126, column: 43 } }, loc: { start: { line: 126, column: 48 }, end: { line: 133, column: 9 } }, line: 126 },
                        },
                        branchMap: {
                            0: {
                                loc: { start: { line: 19, column: 12 }, end: { line: 24, column: 13 } },
                                type: "if",
                                locations: [
                                    { start: { line: 19, column: 12 }, end: { line: 24, column: 13 } },
                                    { start: { line: 19, column: 12 }, end: { line: 24, column: 13 } },
                                ],
                                line: 19,
                            },
                            1: {
                                loc: { start: { line: 48, column: 16 }, end: { line: 56, column: 26 } },
                                type: "if",
                                locations: [
                                    { start: { line: 48, column: 16 }, end: { line: 56, column: 26 } },
                                    { start: { line: 48, column: 16 }, end: { line: 56, column: 26 } },
                                ],
                                line: 48,
                            },
                            2: {
                                loc: { start: { line: 50, column: 29 }, end: { line: 50, column: 87 } },
                                type: "binary-expr",
                                locations: [
                                    { start: { line: 50, column: 29 }, end: { line: 50, column: 63 } },
                                    { start: { line: 50, column: 67 }, end: { line: 50, column: 87 } },
                                ],
                                line: 50,
                            },
                            3: {
                                loc: { start: { line: 53, column: 32 }, end: { line: 53, column: 55 } },
                                type: "binary-expr",
                                locations: [
                                    { start: { line: 53, column: 32 }, end: { line: 53, column: 49 } },
                                    { start: { line: 53, column: 53 }, end: { line: 53, column: 55 } },
                                ],
                                line: 53,
                            },
                            4: {
                                loc: { start: { line: 58, column: 12 }, end: { line: 67, column: 13 } },
                                type: "if",
                                locations: [
                                    { start: { line: 58, column: 12 }, end: { line: 67, column: 13 } },
                                    { start: { line: 58, column: 12 }, end: { line: 67, column: 13 } },
                                ],
                                line: 58,
                            },
                            5: {
                                loc: { start: { line: 61, column: 16 }, end: { line: 62, column: 65 } },
                                type: "if",
                                locations: [
                                    { start: { line: 61, column: 16 }, end: { line: 62, column: 65 } },
                                    { start: { line: 61, column: 16 }, end: { line: 62, column: 65 } },
                                ],
                                line: 61,
                            },
                            6: {
                                loc: { start: { line: 71, column: 8 }, end: { line: 73, column: 9 } },
                                type: "if",
                                locations: [
                                    { start: { line: 71, column: 8 }, end: { line: 73, column: 9 } },
                                    { start: { line: 71, column: 8 }, end: { line: 73, column: 9 } },
                                ],
                                line: 71,
                            },
                            7: {
                                loc: { start: { line: 76, column: 23 }, end: { line: 76, column: 60 } },
                                type: "binary-expr",
                                locations: [
                                    { start: { line: 76, column: 23 }, end: { line: 76, column: 45 } },
                                    { start: { line: 76, column: 49 }, end: { line: 76, column: 60 } },
                                ],
                                line: 76,
                            },
                            8: {
                                loc: { start: { line: 78, column: 21 }, end: { line: 78, column: 41 } },
                                type: "binary-expr",
                                locations: [
                                    { start: { line: 78, column: 21 }, end: { line: 78, column: 35 } },
                                    { start: { line: 78, column: 39 }, end: { line: 78, column: 41 } },
                                ],
                                line: 78,
                            },
                            9: {
                                loc: { start: { line: 99, column: 23 }, end: { line: 99, column: 67 } },
                                type: "cond-expr",
                                locations: [
                                    { start: { line: 99, column: 39 }, end: { line: 99, column: 62 } },
                                    { start: { line: 99, column: 65 }, end: { line: 99, column: 67 } },
                                ],
                                line: 99,
                            },
                            10: {
                                loc: { start: { line: 100, column: 20 }, end: { line: 100, column: 67 } },
                                type: "cond-expr",
                                locations: [
                                    { start: { line: 100, column: 50 }, end: { line: 100, column: 62 } },
                                    { start: { line: 100, column: 65 }, end: { line: 100, column: 67 } },
                                ],
                                line: 100,
                            },
                            11: {
                                loc: { start: { line: 100, column: 20 }, end: { line: 100, column: 47 } },
                                type: "binary-expr",
                                locations: [
                                    { start: { line: 100, column: 20 }, end: { line: 100, column: 33 } },
                                    { start: { line: 100, column: 37 }, end: { line: 100, column: 47 } },
                                ],
                                line: 100,
                            },
                            12: {
                                loc: { start: { line: 101, column: 20 }, end: { line: 101, column: 54 } },
                                type: "cond-expr",
                                locations: [
                                    { start: { line: 101, column: 33 }, end: { line: 101, column: 49 } },
                                    { start: { line: 101, column: 52 }, end: { line: 101, column: 54 } },
                                ],
                                line: 101,
                            },
                            13: {
                                loc: { start: { line: 127, column: 12 }, end: { line: 132, column: 48 } },
                                type: "if",
                                locations: [
                                    { start: { line: 127, column: 12 }, end: { line: 132, column: 48 } },
                                    { start: { line: 127, column: 12 }, end: { line: 132, column: 48 } },
                                ],
                                line: 127,
                            },
                        },
                        s: {
                            0: 0,
                            1: 0,
                            2: 0,
                            3: 0,
                            4: 0,
                            5: 0,
                            6: 0,
                            7: 0,
                            8: 0,
                            9: 0,
                            10: 0,
                            11: 0,
                            12: 0,
                            13: 0,
                            14: 0,
                            15: 0,
                            16: 0,
                            17: 0,
                            18: 0,
                            19: 0,
                            20: 0,
                            21: 0,
                            22: 0,
                            23: 0,
                            24: 0,
                            25: 0,
                            26: 0,
                            27: 0,
                            28: 0,
                            29: 0,
                            30: 0,
                            31: 0,
                            32: 0,
                            33: 0,
                            34: 0,
                            35: 0,
                            36: 0,
                            37: 0,
                            38: 0,
                            39: 0,
                            40: 0,
                            41: 0,
                            42: 0,
                            43: 0,
                            44: 0,
                            45: 0,
                            46: 0,
                            47: 0,
                            48: 0,
                            49: 0,
                            50: 0,
                            51: 0,
                            52: 0,
                            53: 0,
                            54: 0,
                            55: 0,
                            56: 0,
                            57: 0,
                            58: 0,
                            59: 0,
                            60: 0,
                            61: 0,
                            62: 0,
                            63: 0,
                            64: 0,
                            65: 0,
                            66: 0,
                            67: 0,
                            68: 0,
                            69: 0,
                            70: 0,
                            71: 0,
                            72: 0,
                            73: 0,
                        },
                        f: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 },
                        b: { 0: [0, 0], 1: [0, 0], 2: [0, 0], 3: [0, 0], 4: [0, 0], 5: [0, 0], 6: [0, 0], 7: [0, 0], 8: [0, 0], 9: [0, 0], 10: [0, 0], 11: [0, 0], 12: [0, 0], 13: [0, 0] },
                        inputSourceMap: {
                            version: 3,
                            file: "/Users/apple/Projects/Package/Setmore-easyshare/src/components/molecules/cards/meeting-card.ts",
                            sourceRoot: "",
                            sources: ["/Users/apple/Projects/Package/Setmore-easyshare/src/components/molecules/cards/meeting-card.ts"],
                            names: [],
                            mappings:
                                "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",
                            sourcesContent: [
                                'import { button, ellipsisButton } from "../../atom/button/index";\nimport { avatar } from "../../atom/avatar/index";\nimport { hexToRgb, setProperties, copyToClipboard } from "../../../utils/common";\nimport assets from "../../../utils/assets";\nimport { cardDropDown } from "../../atom/dropdown/index";\nimport { AvatarProps, MeetingCardProps } from "../../../config/types";\n\n///////////////////////////////////////////////////////////////////////////////////////\n/////////////////// Meeting Card Function to render one staff card ////////////////////\n///////////////////////////////////////////////////////////////////////////////////////\nexport default class MeetingCard {\n    meeting = document.createElement("div") as HTMLElement;\n    top = document.createElement("div") as HTMLElement;\n    bottom = document.createElement("div") as HTMLElement;\n    dropdown = cardDropDown({ list: ["Preview", "Edit", "Delete"] });\n\n    title: string;\n    price: number;\n    duration: number;\n    bookingLink: string;\n    btnText: string;\n    avatarStyle: string;\n    users: any;\n    colour: string;\n    sideColor: string;\n    ack: (error: string, success: string) => void;\n\n    constructor(props: MeetingCardProps) {\n        this.meeting.setAttribute("class", "meeting-card-wrapper");\n        this.top.setAttribute("class", "meeting-top");\n\n        if (!props.title) {\n            console.error(`Title is missing`, { props });\n        }\n        setProperties({ tag: "self", appendWidh: this.meeting, style: `border-left: 4px solid #${props.colour}` });\n        this.title = props.title;\n        this.btnText = props.bottomButtonText || "Copy Link";\n        this.avatarStyle = props.avatarStyle;\n        this.users = props.provider || [];\n        this.sideColor = `#${props.colour}`;\n        this.price = props.price;\n        this.duration = props.duration;\n        this.bookingLink = props.bookingLink;\n        this.ack = props.ack;\n\n        this._top();\n        this._bottom();\n        this.meeting.appendChild(this.top);\n        this.meeting.appendChild(this.bottom);\n\n        this._toggleDropdown = this._toggleDropdown.bind(this);\n        this._cardMouseOver = this._cardMouseOver.bind(this);\n        this._cardMouseOut = this._cardMouseOut.bind(this);\n        this._renderUserIcon = this._renderUserIcon.bind(this);\n\n        this.meeting.addEventListener("mouseover", this._cardMouseOver);\n        this.meeting.addEventListener("mouseout", this._cardMouseOut);\n    }\n\n    ///////////////////////////////////////////////////////////////////////////////////////\n    //////////////////////////////// Top element wrapper //////////////////////////////////\n    ///////////////////////////////////////////////////////////////////////////////////////\n    _top() {\n        let subTitle = this.duration ? `${this.duration} mins` : "";\n        subTitle += this.duration && this.price ? " &middot; " : "";\n        subTitle += this.price ? `$${this.price}` : "";\n\n        setProperties({ tag: "div", style: "width: 80%;", appendWidh: this.top });\n        setProperties({\n            tag: "h2", class: "title", appendWidh: this.top.firstChild,\n            innerTitle: this.title, innerHTML: `${this.title}`\n        });\n        setProperties({ tag: "p", class: "sub-title", appendWidh: this.top.firstChild, innerHTML: subTitle });\n        this.top.appendChild(this.dropdown);\n        // const elipsis = ellipsisButton({ class: "hide", event: this._toggleDropdown });\n        // this.top.appendChild(elipsis);\n    }\n\n    ///////////////////////////////////////////////////////////////////////////////////////\n    ///////////////////////////// Bottom elemnet wrapper //////////////////////////////////\n    ///////////////////////////////////////////////////////////////////////////////////////\n    _bottom() {\n        this.bottom.setAttribute("class", "bottom");\n        setProperties({ tag: "div", appendWidh: this.bottom });\n        const avatarEle = document.createElement("div");\n        this._renderUserIcon({\n            limit: 5,\n            users: this.users,\n            avatarStyle: this.avatarStyle,\n            wrapper: avatarEle\n        });\n        const copyBtn = button({ label: this.btnText, class: "base-button hide" });\n        copyBtn.addEventListener("click", () => {\n            if (this.bookingLink) {\n                copyToClipboard(this.bookingLink);\n                this.ack(null, `Link copied successfully!`);\n            }\n            else\n                this.ack(`Link not found!`, ``);\n        });\n        this.bottom.firstChild.appendChild(avatarEle)\n        this.bottom.appendChild(copyBtn);\n    }\n\n    ///////////////////////////////////////////////////////////////////////////////////////\n    ///////////////////////////// Toggle dropdown /////////////////////////////////////////\n    ///////////////////////////////////////////////////////////////////////////////////////\n    _toggleDropdown = (e) => {\n        if (this.dropdown.classList.contains("hide")) {\n            this.dropdown.classList.remove("hide");\n        } else {\n            this.dropdown.classList.add("hide");\n        }\n    }\n\n    ///////////////////////////////////////////////////////////////////////////////////////\n    ///////////////////////////// Card mouseover //////////////////////////////////////////\n    ///////////////////////////////////////////////////////////////////////////////////////\n    _cardMouseOver = () => {\n        const rgb: string = hexToRgb(this.sideColor);\n        this.meeting.style.setProperty(\n            "box-shadow", `0 7px 51px 0 rgb(0 0 0 / 2%), 0 7px 24px 0 rgb(${rgb} / 12%)`\n        );\n        this.bottom.lastElementChild.classList.remove("hide");\n    }\n\n    ///////////////////////////////////////////////////////////////////////////////////////\n    ///////////////////////////// Card mouseout ///////////////////////////////////////////\n    ///////////////////////////////////////////////////////////////////////////////////////\n    _cardMouseOut = () => {\n        this.meeting.style.setProperty("box-shadow", `none`);\n        this.bottom.lastElementChild.classList.add("hide");\n    }\n\n\n    ////////////////////////////////////////////////////////////////////////////////////////////////\n    /////////////////////////// Adding multiple avtatars of users to card //////////////////////////\n    ////////////////////////////////////////////////////////////////////////////////////////////////\n    _renderUserIcon = (props: AvatarProps) => {\n        let count: number = 0;\n\n        for (let index = 0; index < props.limit; index++) {\n            count++;\n            if (props.users[index])\n                props.wrapper.appendChild(\n                    avatar({\n                        src: props.users[index].CompanyLogoPath || assets.defaultAvatar,\n                        styleClass: "avatar",\n                        alt: "Members",\n                        styles: props.avatarStyle || ""\n                    }) as HTMLElement\n                )\n            else\n                break\n        }\n        if (props.users.length > props.limit) {\n            const div = document.createElement("div") as HTMLElement;\n            div.setAttribute("class", "user-count");\n            if (props.avatarStyle)\n                div.setAttribute("style", props.avatarStyle);\n            const p = document.createElement("span");\n            p.innerText = `+${props.limit} `;\n            div.appendChild(p);\n            props.wrapper.appendChild(div);\n        }\n    }\n}',
                            ],
                        },
                        _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c",
                    },
                    l = e[t] || (e[t] = {});
                return l[A] && l[A].hash === n ? l[A] : ((o.hash = n), (l[A] = o));
            })();
            class M {
                constructor(A) {
                    G.f[0]++,
                        G.s[0]++,
                        (this.meeting = document.createElement("div")),
                        G.s[1]++,
                        (this.top = document.createElement("div")),
                        G.s[2]++,
                        (this.bottom = document.createElement("div")),
                        G.s[3]++,
                        (this.dropdown = b({ list: ["Preview", "Edit", "Delete"] })),
                        G.s[4]++,
                        (this._toggleDropdown = (A) => {
                            G.f[1]++, G.s[5]++, this.dropdown.classList.contains("hide") ? (G.b[0][0]++, G.s[6]++, this.dropdown.classList.remove("hide")) : (G.b[0][1]++, G.s[7]++, this.dropdown.classList.add("hide"));
                        }),
                        G.s[8]++,
                        (this._cardMouseOver = () => {
                            G.f[2]++;
                            const A =
                                (G.s[9]++,
                                    ((A) => {
                                        p.f[0]++;
                                        const n =
                                            (p.s[1]++,
                                                A.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (A, n, e, t) => (p.f[1]++, p.s[2]++, "#" + n + n + e + e + t + t))
                                                    .substring(1)
                                                    .match(/.{2}/g)
                                                    .map((A) => (p.f[2]++, p.s[3]++, parseInt(A, 16))));
                                        return p.s[4]++, `${n[0]} ${n[1]} ${n[2]}`;
                                    })(this.sideColor));
                            G.s[10]++, this.meeting.style.setProperty("box-shadow", `0 7px 51px 0 rgb(0 0 0 / 2%), 0 7px 24px 0 rgb(${A} / 12%)`), G.s[11]++, this.bottom.lastElementChild.classList.remove("hide");
                        }),
                        G.s[12]++,
                        (this._cardMouseOut = () => {
                            G.f[3]++, G.s[13]++, this.meeting.style.setProperty("box-shadow", "none"), G.s[14]++, this.bottom.lastElementChild.classList.add("hide");
                        }),
                        G.s[15]++,
                        (this._renderUserIcon = (A) => {
                            G.f[4]++, G.s[16]++, G.s[17]++;
                            for (let n = 0; n < A.limit; n++) {
                                if ((G.s[18]++, G.s[19]++, !A.users[n])) {
                                    G.b[1][1]++, G.s[21]++;
                                    break;
                                }
                                G.b[1][0]++,
                                    G.s[20]++,
                                    A.wrapper.appendChild(d({ src: (G.b[2][0]++, A.users[n].CompanyLogoPath || (G.b[2][1]++, m)), styleClass: "avatar", alt: "Members", styles: (G.b[3][0]++, A.avatarStyle || (G.b[3][1]++, "")) }));
                            }
                            if ((G.s[22]++, A.users.length > A.limit)) {
                                G.b[4][0]++;
                                const n = (G.s[23]++, document.createElement("div"));
                                G.s[24]++, n.setAttribute("class", "user-count"), G.s[25]++, A.avatarStyle ? (G.b[5][0]++, G.s[26]++, n.setAttribute("style", A.avatarStyle)) : G.b[5][1]++;
                                const e = (G.s[27]++, document.createElement("span"));
                                G.s[28]++, (e.innerText = `+${A.limit} `), G.s[29]++, n.appendChild(e), G.s[30]++, A.wrapper.appendChild(n);
                            } else G.b[4][1]++;
                        }),
                        G.s[31]++,
                        this.meeting.setAttribute("class", "meeting-card-wrapper"),
                        G.s[32]++,
                        this.top.setAttribute("class", "meeting-top"),
                        G.s[33]++,
                        A.title ? G.b[6][1]++ : (G.b[6][0]++, G.s[34]++, console.error("Title is missing", { props: A })),
                        G.s[35]++,
                        E({ tag: "self", appendWidh: this.meeting, style: `border-left: 4px solid #${A.colour}` }),
                        G.s[36]++,
                        (this.title = A.title),
                        G.s[37]++,
                        (this.btnText = (G.b[7][0]++, A.bottomButtonText || (G.b[7][1]++, "Copy Link"))),
                        G.s[38]++,
                        (this.avatarStyle = A.avatarStyle),
                        G.s[39]++,
                        (this.users = (G.b[8][0]++, A.provider || (G.b[8][1]++, []))),
                        G.s[40]++,
                        (this.sideColor = `#${A.colour}`),
                        G.s[41]++,
                        (this.price = A.price),
                        G.s[42]++,
                        (this.duration = A.duration),
                        G.s[43]++,
                        (this.bookingLink = A.bookingLink),
                        G.s[44]++,
                        (this.ack = A.ack),
                        G.s[45]++,
                        this._top(),
                        G.s[46]++,
                        this._bottom(),
                        G.s[47]++,
                        this.meeting.appendChild(this.top),
                        G.s[48]++,
                        this.meeting.appendChild(this.bottom),
                        G.s[49]++,
                        (this._toggleDropdown = this._toggleDropdown.bind(this)),
                        G.s[50]++,
                        (this._cardMouseOver = this._cardMouseOver.bind(this)),
                        G.s[51]++,
                        (this._cardMouseOut = this._cardMouseOut.bind(this)),
                        G.s[52]++,
                        (this._renderUserIcon = this._renderUserIcon.bind(this)),
                        G.s[53]++,
                        this.meeting.addEventListener("mouseover", this._cardMouseOver),
                        G.s[54]++,
                        this.meeting.addEventListener("mouseout", this._cardMouseOut);
                }
                _top() {
                    G.f[5]++;
                    let A = (G.s[55]++, this.duration ? (G.b[9][0]++, `${this.duration} mins`) : (G.b[9][1]++, ""));
                    G.s[56]++,
                        (A += (G.b[11][0]++, this.duration && (G.b[11][1]++, this.price) ? (G.b[10][0]++, " &middot; ") : (G.b[10][1]++, ""))),
                        G.s[57]++,
                        (A += this.price ? (G.b[12][0]++, `$${this.price}`) : (G.b[12][1]++, "")),
                        G.s[58]++,
                        E({ tag: "div", style: "width: 80%;", appendWidh: this.top }),
                        G.s[59]++,
                        E({ tag: "h2", class: "title", appendWidh: this.top.firstChild, innerTitle: this.title, innerHTML: `${this.title}` }),
                        G.s[60]++,
                        E({ tag: "p", class: "sub-title", appendWidh: this.top.firstChild, innerHTML: A }),
                        G.s[61]++,
                        this.top.appendChild(this.dropdown);
                }
                _bottom() {
                    G.f[6]++, G.s[62]++, this.bottom.setAttribute("class", "bottom"), G.s[63]++, E({ tag: "div", appendWidh: this.bottom });
                    const A = (G.s[64]++, document.createElement("div"));
                    G.s[65]++, this._renderUserIcon({ limit: 5, users: this.users, avatarStyle: this.avatarStyle, wrapper: A });
                    const n = (G.s[66]++, c({ label: this.btnText, class: "base-button hide" }));
                    G.s[67]++,
                        n.addEventListener("click", () => {
                            G.f[7]++, G.s[68]++, this.bookingLink ? (G.b[13][0]++, G.s[69]++, h(this.bookingLink), G.s[70]++, this.ack(null, "Link copied successfully!")) : (G.b[13][1]++, G.s[71]++, this.ack("Link not found!", ""));
                        }),
                        G.s[72]++,
                        this.bottom.firstChild.appendChild(A),
                        G.s[73]++,
                        this.bottom.appendChild(n);
                }
            }
            var B = (function () {
                var A = "/Users/apple/Projects/Package/Setmore-easyshare/src/components/molecules/cards/staff-card.ts",
                    n = "96ca1182b6acd089dbc03e65d6402ef3f7426807",
                    e = new (0, function () { }.constructor)("return this")(),
                    t = "__coverage__",
                    o = {
                        path: "/Users/apple/Projects/Package/Setmore-easyshare/src/components/molecules/cards/staff-card.ts",
                        statementMap: {
                            0: { start: { line: 11, column: 8 }, end: { line: 11, column: 51 } },
                            1: { start: { line: 12, column: 8 }, end: { line: 12, column: 49 } },
                            2: { start: { line: 13, column: 8 }, end: { line: 13, column: 52 } },
                            3: { start: { line: 14, column: 8 }, end: { line: 14, column: 78 } },
                            4: { start: { line: 18, column: 8 }, end: { line: 25, column: 10 } },
                            5: { start: { line: 19, column: 12 }, end: { line: 24, column: 13 } },
                            6: { start: { line: 20, column: 16 }, end: { line: 20, column: 55 } },
                            7: { start: { line: 23, column: 16 }, end: { line: 23, column: 52 } },
                            8: { start: { line: 29, column: 8 }, end: { line: 32, column: 10 } },
                            9: { start: { line: 30, column: 12 }, end: { line: 30, column: 117 } },
                            10: { start: { line: 31, column: 12 }, end: { line: 31, column: 66 } },
                            11: { start: { line: 36, column: 8 }, end: { line: 39, column: 10 } },
                            12: { start: { line: 37, column: 12 }, end: { line: 37, column: 63 } },
                            13: { start: { line: 38, column: 12 }, end: { line: 38, column: 63 } },
                            14: { start: { line: 43, column: 8 }, end: { line: 50, column: 10 } },
                            15: { start: { line: 44, column: 12 }, end: { line: 49, column: 16 } },
                            16: { start: { line: 51, column: 8 }, end: { line: 51, column: 65 } },
                            17: { start: { line: 52, column: 8 }, end: { line: 52, column: 70 } },
                            18: { start: { line: 53, column: 8 }, end: { line: 53, column: 113 } },
                            19: { start: { line: 54, column: 8 }, end: { line: 54, column: 41 } },
                            20: { start: { line: 55, column: 8 }, end: { line: 55, column: 39 } },
                            21: { start: { line: 56, column: 8 }, end: { line: 56, column: 53 } },
                            22: { start: { line: 57, column: 8 }, end: { line: 57, column: 61 } },
                            23: { start: { line: 58, column: 8 }, end: { line: 58, column: 45 } },
                            24: { start: { line: 59, column: 8 }, end: { line: 59, column: 42 } },
                            25: { start: { line: 60, column: 8 }, end: { line: 60, column: 44 } },
                            26: { start: { line: 61, column: 8 }, end: { line: 61, column: 45 } },
                            27: { start: { line: 62, column: 8 }, end: { line: 62, column: 29 } },
                            28: { start: { line: 63, column: 8 }, end: { line: 63, column: 20 } },
                            29: { start: { line: 64, column: 8 }, end: { line: 64, column: 23 } },
                            30: { start: { line: 65, column: 8 }, end: { line: 65, column: 41 } },
                            31: { start: { line: 66, column: 8 }, end: { line: 66, column: 44 } },
                            32: { start: { line: 67, column: 8 }, end: { line: 67, column: 63 } },
                            33: { start: { line: 68, column: 8 }, end: { line: 68, column: 61 } },
                            34: { start: { line: 69, column: 8 }, end: { line: 69, column: 59 } },
                            35: { start: { line: 70, column: 8 }, end: { line: 70, column: 63 } },
                            36: { start: { line: 71, column: 8 }, end: { line: 71, column: 70 } },
                            37: { start: { line: 72, column: 8 }, end: { line: 72, column: 68 } },
                            38: { start: { line: 78, column: 8 }, end: { line: 78, column: 78 } },
                            39: { start: { line: 79, column: 8 }, end: { line: 82, column: 11 } },
                            40: { start: { line: 83, column: 24 }, end: { line: 83, column: 82 } },
                            41: { start: { line: 84, column: 8 }, end: { line: 91, column: 11 } },
                            42: { start: { line: 85, column: 12 }, end: { line: 90, column: 48 } },
                            43: { start: { line: 86, column: 16 }, end: { line: 86, column: 50 } },
                            44: { start: { line: 87, column: 16 }, end: { line: 87, column: 60 } },
                            45: { start: { line: 90, column: 16 }, end: { line: 90, column: 48 } },
                            46: { start: { line: 92, column: 8 }, end: { line: 92, column: 41 } },
                            47: { start: { line: 98, column: 8 }, end: { line: 98, column: 60 } },
                            48: { start: { line: 99, column: 8 }, end: { line: 99, column: 60 } },
                            49: { start: { line: 100, column: 26 }, end: { line: 100, column: 55 } },
                            50: { start: { line: 101, column: 8 }, end: { line: 101, column: 40 } },
                            51: { start: { line: 102, column: 8 }, end: { line: 102, column: 44 } },
                            52: { start: { line: 104, column: 8 }, end: { line: 104, column: 51 } },
                        },
                        fnMap: {
                            0: { name: "(anonymous_0)", decl: { start: { line: 10, column: 4 }, end: { line: 10, column: 5 } }, loc: { start: { line: 10, column: 23 }, end: { line: 73, column: 5 } }, line: 10 },
                            1: { name: "(anonymous_1)", decl: { start: { line: 18, column: 31 }, end: { line: 18, column: 32 } }, loc: { start: { line: 18, column: 38 }, end: { line: 25, column: 9 } }, line: 18 },
                            2: { name: "(anonymous_2)", decl: { start: { line: 29, column: 30 }, end: { line: 29, column: 31 } }, loc: { start: { line: 29, column: 36 }, end: { line: 32, column: 9 } }, line: 29 },
                            3: { name: "(anonymous_3)", decl: { start: { line: 36, column: 29 }, end: { line: 36, column: 30 } }, loc: { start: { line: 36, column: 35 }, end: { line: 39, column: 9 } }, line: 36 },
                            4: { name: "(anonymous_4)", decl: { start: { line: 43, column: 31 }, end: { line: 43, column: 32 } }, loc: { start: { line: 43, column: 44 }, end: { line: 50, column: 9 } }, line: 43 },
                            5: { name: "(anonymous_5)", decl: { start: { line: 77, column: 4 }, end: { line: 77, column: 5 } }, loc: { start: { line: 77, column: 14 }, end: { line: 93, column: 5 } }, line: 77 },
                            6: { name: "(anonymous_6)", decl: { start: { line: 84, column: 42 }, end: { line: 84, column: 43 } }, loc: { start: { line: 84, column: 48 }, end: { line: 91, column: 9 } }, line: 84 },
                            7: { name: "(anonymous_7)", decl: { start: { line: 97, column: 4 }, end: { line: 97, column: 5 } }, loc: { start: { line: 97, column: 11 }, end: { line: 106, column: 5 } }, line: 97 },
                        },
                        branchMap: {
                            0: {
                                loc: { start: { line: 19, column: 12 }, end: { line: 24, column: 13 } },
                                type: "if",
                                locations: [
                                    { start: { line: 19, column: 12 }, end: { line: 24, column: 13 } },
                                    { start: { line: 19, column: 12 }, end: { line: 24, column: 13 } },
                                ],
                                line: 19,
                            },
                            1: {
                                loc: { start: { line: 45, column: 21 }, end: { line: 45, column: 65 } },
                                type: "binary-expr",
                                locations: [
                                    { start: { line: 45, column: 21 }, end: { line: 45, column: 41 } },
                                    { start: { line: 45, column: 45 }, end: { line: 45, column: 65 } },
                                ],
                                line: 45,
                            },
                            2: {
                                loc: { start: { line: 48, column: 24 }, end: { line: 48, column: 46 } },
                                type: "binary-expr",
                                locations: [
                                    { start: { line: 48, column: 24 }, end: { line: 48, column: 40 } },
                                    { start: { line: 48, column: 44 }, end: { line: 48, column: 46 } },
                                ],
                                line: 48,
                            },
                            3: {
                                loc: { start: { line: 57, column: 23 }, end: { line: 57, column: 60 } },
                                type: "binary-expr",
                                locations: [
                                    { start: { line: 57, column: 23 }, end: { line: 57, column: 45 } },
                                    { start: { line: 57, column: 49 }, end: { line: 57, column: 60 } },
                                ],
                                line: 57,
                            },
                            4: {
                                loc: { start: { line: 59, column: 21 }, end: { line: 59, column: 41 } },
                                type: "binary-expr",
                                locations: [
                                    { start: { line: 59, column: 21 }, end: { line: 59, column: 35 } },
                                    { start: { line: 59, column: 39 }, end: { line: 59, column: 41 } },
                                ],
                                line: 59,
                            },
                            5: {
                                loc: { start: { line: 85, column: 12 }, end: { line: 90, column: 48 } },
                                type: "if",
                                locations: [
                                    { start: { line: 85, column: 12 }, end: { line: 90, column: 48 } },
                                    { start: { line: 85, column: 12 }, end: { line: 90, column: 48 } },
                                ],
                                line: 85,
                            },
                        },
                        s: {
                            0: 0,
                            1: 0,
                            2: 0,
                            3: 0,
                            4: 0,
                            5: 0,
                            6: 0,
                            7: 0,
                            8: 0,
                            9: 0,
                            10: 0,
                            11: 0,
                            12: 0,
                            13: 0,
                            14: 0,
                            15: 0,
                            16: 0,
                            17: 0,
                            18: 0,
                            19: 0,
                            20: 0,
                            21: 0,
                            22: 0,
                            23: 0,
                            24: 0,
                            25: 0,
                            26: 0,
                            27: 0,
                            28: 0,
                            29: 0,
                            30: 0,
                            31: 0,
                            32: 0,
                            33: 0,
                            34: 0,
                            35: 0,
                            36: 0,
                            37: 0,
                            38: 0,
                            39: 0,
                            40: 0,
                            41: 0,
                            42: 0,
                            43: 0,
                            44: 0,
                            45: 0,
                            46: 0,
                            47: 0,
                            48: 0,
                            49: 0,
                            50: 0,
                            51: 0,
                            52: 0,
                        },
                        f: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 },
                        b: { 0: [0, 0], 1: [0, 0], 2: [0, 0], 3: [0, 0], 4: [0, 0], 5: [0, 0] },
                        inputSourceMap: {
                            version: 3,
                            file: "/Users/apple/Projects/Package/Setmore-easyshare/src/components/molecules/cards/staff-card.ts",
                            sourceRoot: "",
                            sources: ["/Users/apple/Projects/Package/Setmore-easyshare/src/components/molecules/cards/staff-card.ts"],
                            names: [],
                            mappings:
                                "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",
                            sourcesContent: [
                                'import { button, ellipsisButton } from "../../atom/button/index";\nimport { avatar } from "../../atom/avatar/index";\nimport { setProperties, copyToClipboard } from "../../../utils/common";\nimport assets from "../../../utils/assets";\nimport { cardDropDown } from "../../atom/dropdown/index";\nimport { StaffCardProps } from "../../../config/types";\n\n///////////////////////////////////////////////////////////////////////////////////////\n/////////////////// Meeting Card Function to render one staff card ////////////////////\n///////////////////////////////////////////////////////////////////////////////////////\nexport default class StaffCard {\n    staff = document.createElement("div") as HTMLElement;\n    top = document.createElement("div") as HTMLElement;\n    bottom = document.createElement("div") as HTMLElement;\n    dropdown = cardDropDown({ list: ["Preview", "Edit", "Delete"] });\n\n    firstName: string;\n    lastName: string;\n    companyLogoPath: string;\n    bookingLink: string;\n    btnText: string;\n    avatarStyle: string;\n    users: any;\n    colour: string;\n    sideColor: string;\n    ack: (error: string, success: string) => void;\n\n    constructor(props: StaffCardProps) {\n        this.staff.setAttribute("class", "meeting-card-wrapper");\n        this.bottom.setAttribute("class", "meeting-top staff-bottom");\n\n        setProperties({ tag: "self", appendWidh: this.staff, style: `border-left: 4px solid #${props.colour}` });\n        this.firstName = props.FirstName;\n        this.lastName = props.LastName;\n        this.companyLogoPath = props.CompanyLogoPath;\n        this.btnText = props.bottomButtonText || "Copy Link";\n        this.avatarStyle = props.avatarStyle;\n        this.users = props.provider || [];\n        this.sideColor = `#${props.colour}`;\n        this.bookingLink = props.bookingLink;\n        this.ack = props.ack;\n\n        this._top();\n        this._bottom();\n        this.staff.appendChild(this.top);\n        this.staff.appendChild(this.bottom);\n\n\n        this._toggleDropdown = this._toggleDropdown.bind(this);\n        this._cardMouseOver = this._cardMouseOver.bind(this);\n        this._cardMouseOut = this._cardMouseOut.bind(this);\n        this._renderUserIcon = this._renderUserIcon.bind(this);\n\n        this.staff.addEventListener("mouseover", this._cardMouseOver);\n        this.staff.addEventListener("mouseout", this._cardMouseOut);\n    }\n\n    ///////////////////////////////////////////////////////////////////////////////////////\n    //////////////////////////////// Top element wrapper //////////////////////////////////\n    ///////////////////////////////////////////////////////////////////////////////////////\n    _bottom() {\n        setProperties({ tag: "div", class: "name", appendWidh: this.bottom });\n        setProperties({\n            tag: "h2", class: "title", appendWidh: this.bottom.firstChild,\n            innerHTML: this.firstName + " " + this.lastName\n        });\n\n        const copyBtn = button({ label: this.btnText, class: "base-button hide" });\n        copyBtn.addEventListener("click", () => {\n            if (this.bookingLink) {\n                copyToClipboard(this.bookingLink);\n                this.ack(null, `Link copied successfully!`);\n            }\n            else\n                this.ack(`Link not found!`, ``);\n        });\n        this.bottom.appendChild(copyBtn);\n    }\n\n    ///////////////////////////////////////////////////////////////////////////////////////\n    ///////////////////////////// Bottom elemnet wrapper //////////////////////////////////\n    ///////////////////////////////////////////////////////////////////////////////////////\n    _top() {\n        this.top.setAttribute("class", "staff-card bottom");\n        setProperties({ tag: "div", appendWidh: this.top });\n        const avatarEle = document.createElement("div");\n        this._renderUserIcon(avatarEle);\n\n        this.top.appendChild(this.dropdown);\n        // const elipsis = ellipsisButton({ class: "hide", event: this._toggleDropdown });\n        this.top.firstChild.appendChild(avatarEle)\n        // this.top.appendChild(elipsis);\n    }\n\n    ///////////////////////////////////////////////////////////////////////////////////////\n    ///////////////////////////// Toggle dropdown /////////////////////////////////////////\n    ///////////////////////////////////////////////////////////////////////////////////////\n    _toggleDropdown = (e) => {\n        if (this.dropdown.classList.contains("hide")) {\n            this.dropdown.classList.remove("hide");\n        } else {\n            this.dropdown.classList.add("hide");\n        }\n    }\n\n    ///////////////////////////////////////////////////////////////////////////////////////\n    ///////////////////////////// Card mouseover //////////////////////////////////////////\n    ///////////////////////////////////////////////////////////////////////////////////////\n    _cardMouseOver = () => {\n        this.staff.style.setProperty(\n            "box-shadow", `0 7px 30px 0 rgb(0 0 0 / 0%), 0 7px 30px 0 rgb(0 0 0 / 7%)`\n        );\n        this.bottom.lastElementChild.classList.remove("hide");\n    }\n\n    ///////////////////////////////////////////////////////////////////////////////////////\n    ///////////////////////////// Card mouseout ///////////////////////////////////////////\n    ///////////////////////////////////////////////////////////////////////////////////////\n    _cardMouseOut = () => {\n        this.staff.style.setProperty("box-shadow", `none`);\n        this.bottom.lastElementChild.classList.add("hide");\n    }\n\n\n    ////////////////////////////////////////////////////////////////////////////////////////////////\n    /////////////////////////// Adding multiple avtatars of users to card //////////////////////////\n    ////////////////////////////////////////////////////////////////////////////////////////////////\n    _renderUserIcon = (wrapper) => {\n        wrapper.appendChild(\n            avatar({\n                src: this.companyLogoPath || assets.defaultAvatar,\n                styleClass: "avatar",\n                alt: "Staff",\n                styles: this.avatarStyle || ""\n            }) as HTMLElement\n        );\n    }\n}',
                            ],
                        },
                        _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c",
                    },
                    l = e[t] || (e[t] = {});
                return l[A] && l[A].hash === n ? l[A] : ((o.hash = n), (l[A] = o));
            })();
            class y {
                constructor(A) {
                    B.f[0]++,
                        B.s[0]++,
                        (this.staff = document.createElement("div")),
                        B.s[1]++,
                        (this.top = document.createElement("div")),
                        B.s[2]++,
                        (this.bottom = document.createElement("div")),
                        B.s[3]++,
                        (this.dropdown = b({ list: ["Preview", "Edit", "Delete"] })),
                        B.s[4]++,
                        (this._toggleDropdown = (A) => {
                            B.f[1]++, B.s[5]++, this.dropdown.classList.contains("hide") ? (B.b[0][0]++, B.s[6]++, this.dropdown.classList.remove("hide")) : (B.b[0][1]++, B.s[7]++, this.dropdown.classList.add("hide"));
                        }),
                        B.s[8]++,
                        (this._cardMouseOver = () => {
                            B.f[2]++, B.s[9]++, this.staff.style.setProperty("box-shadow", "0 7px 30px 0 rgb(0 0 0 / 0%), 0 7px 30px 0 rgb(0 0 0 / 7%)"), B.s[10]++, this.bottom.lastElementChild.classList.remove("hide");
                        }),
                        B.s[11]++,
                        (this._cardMouseOut = () => {
                            B.f[3]++, B.s[12]++, this.staff.style.setProperty("box-shadow", "none"), B.s[13]++, this.bottom.lastElementChild.classList.add("hide");
                        }),
                        B.s[14]++,
                        (this._renderUserIcon = (A) => {
                            B.f[4]++, B.s[15]++, A.appendChild(d({ src: (B.b[1][0]++, this.companyLogoPath || (B.b[1][1]++, m)), styleClass: "avatar", alt: "Staff", styles: (B.b[2][0]++, this.avatarStyle || (B.b[2][1]++, "")) }));
                        }),
                        B.s[16]++,
                        this.staff.setAttribute("class", "meeting-card-wrapper"),
                        B.s[17]++,
                        this.bottom.setAttribute("class", "meeting-top staff-bottom"),
                        B.s[18]++,
                        E({ tag: "self", appendWidh: this.staff, style: `border-left: 4px solid #${A.colour}` }),
                        B.s[19]++,
                        (this.firstName = A.FirstName),
                        B.s[20]++,
                        (this.lastName = A.LastName),
                        B.s[21]++,
                        (this.companyLogoPath = A.CompanyLogoPath),
                        B.s[22]++,
                        (this.btnText = (B.b[3][0]++, A.bottomButtonText || (B.b[3][1]++, "Copy Link"))),
                        B.s[23]++,
                        (this.avatarStyle = A.avatarStyle),
                        B.s[24]++,
                        (this.users = (B.b[4][0]++, A.provider || (B.b[4][1]++, []))),
                        B.s[25]++,
                        (this.sideColor = `#${A.colour}`),
                        B.s[26]++,
                        (this.bookingLink = A.bookingLink),
                        B.s[27]++,
                        (this.ack = A.ack),
                        B.s[28]++,
                        this._top(),
                        B.s[29]++,
                        this._bottom(),
                        B.s[30]++,
                        this.staff.appendChild(this.top),
                        B.s[31]++,
                        this.staff.appendChild(this.bottom),
                        B.s[32]++,
                        (this._toggleDropdown = this._toggleDropdown.bind(this)),
                        B.s[33]++,
                        (this._cardMouseOver = this._cardMouseOver.bind(this)),
                        B.s[34]++,
                        (this._cardMouseOut = this._cardMouseOut.bind(this)),
                        B.s[35]++,
                        (this._renderUserIcon = this._renderUserIcon.bind(this)),
                        B.s[36]++,
                        this.staff.addEventListener("mouseover", this._cardMouseOver),
                        B.s[37]++,
                        this.staff.addEventListener("mouseout", this._cardMouseOut);
                }
                _bottom() {
                    B.f[5]++, B.s[38]++, E({ tag: "div", class: "name", appendWidh: this.bottom }), B.s[39]++, E({ tag: "h2", class: "title", appendWidh: this.bottom.firstChild, innerHTML: this.firstName + " " + this.lastName });
                    const A = (B.s[40]++, c({ label: this.btnText, class: "base-button hide" }));
                    B.s[41]++,
                        A.addEventListener("click", () => {
                            B.f[6]++, B.s[42]++, this.bookingLink ? (B.b[5][0]++, B.s[43]++, h(this.bookingLink), B.s[44]++, this.ack(null, "Link copied successfully!")) : (B.b[5][1]++, B.s[45]++, this.ack("Link not found!", ""));
                        }),
                        B.s[46]++,
                        this.bottom.appendChild(A);
                }
                _top() {
                    B.f[7]++, B.s[47]++, this.top.setAttribute("class", "staff-card bottom"), B.s[48]++, E({ tag: "div", appendWidh: this.top });
                    const A = (B.s[49]++, document.createElement("div"));
                    B.s[50]++, this._renderUserIcon(A), B.s[51]++, this.top.appendChild(this.dropdown), B.s[52]++, this.top.firstChild.appendChild(A);
                }
            }
            !(function () {
                var A = "/Users/apple/Projects/Package/Setmore-easyshare/src/components/molecules/index.ts",
                    n = "e17b33cfe675bb92998d550880bd04e40cea663b",
                    e = new (0, function () { }.constructor)("return this")(),
                    t = "__coverage__",
                    o = {
                        path: "/Users/apple/Projects/Package/Setmore-easyshare/src/components/molecules/index.ts",
                        statementMap: {},
                        fnMap: {},
                        branchMap: {},
                        s: {},
                        f: {},
                        b: {},
                        inputSourceMap: {
                            version: 3,
                            file: "/Users/apple/Projects/Package/Setmore-easyshare/src/components/molecules/index.ts",
                            sourceRoot: "",
                            sources: ["/Users/apple/Projects/Package/Setmore-easyshare/src/components/molecules/index.ts"],
                            names: [],
                            mappings: "AAAA,OAAO,EAAE,OAAO,IAAI,WAAW,EAAE,MAAM,sBAAsB,CAAC;AAC9D,OAAO,EAAE,OAAO,IAAI,SAAS,EAAE,MAAM,oBAAoB,CAAC",
                            sourcesContent: ['export { default as MeetingCard } from "./cards/meeting-card";\nexport { default as StaffCard } from "./cards/staff-card";'],
                        },
                        _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c",
                    },
                    l = e[t] || (e[t] = {});
                l[A] && l[A].hash === n ? l[A] : ((o.hash = n), (l[A] = o));
            })();
            var v = (function () {
                var A = "/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/alert/alert-info.ts",
                    n = "2537099fd94d068a17f29a5ddc8952ae3819e8a7",
                    e = new (0, function () { }.constructor)("return this")(),
                    t = "__coverage__",
                    o = {
                        path: "/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/alert/alert-info.ts",
                        statementMap: {
                            0: { start: { line: 5, column: 22 }, end: { line: 18, column: 1 } },
                            1: { start: { line: 6, column: 21 }, end: { line: 6, column: 55 } },
                            2: { start: { line: 7, column: 4 }, end: { line: 16, column: 10 } },
                            3: { start: { line: 17, column: 4 }, end: { line: 17, column: 20 } },
                            4: { start: { line: 23, column: 21 }, end: { line: 23, column: 41 } },
                            5: { start: { line: 24, column: 4 }, end: { line: 24, column: 44 } },
                        },
                        fnMap: {
                            0: { name: "(anonymous_0)", decl: { start: { line: 5, column: 22 }, end: { line: 5, column: 23 } }, loc: { start: { line: 5, column: 33 }, end: { line: 18, column: 1 } }, line: 5 },
                            1: { name: "(anonymous_1)", decl: { start: { line: 22, column: 15 }, end: { line: 22, column: 16 } }, loc: { start: { line: 22, column: 26 }, end: { line: 25, column: 1 } }, line: 22 },
                        },
                        branchMap: {
                            0: {
                                loc: { start: { line: 8, column: 22 }, end: { line: 8, column: 57 } },
                                type: "binary-expr",
                                locations: [
                                    { start: { line: 8, column: 22 }, end: { line: 8, column: 33 } },
                                    { start: { line: 8, column: 37 }, end: { line: 8, column: 57 } },
                                ],
                                line: 8,
                            },
                            1: {
                                loc: { start: { line: 8, column: 69 }, end: { line: 8, column: 94 } },
                                type: "binary-expr",
                                locations: [
                                    { start: { line: 8, column: 69 }, end: { line: 8, column: 88 } },
                                    { start: { line: 8, column: 92 }, end: { line: 8, column: 94 } },
                                ],
                                line: 8,
                            },
                            2: {
                                loc: { start: { line: 10, column: 17 }, end: { line: 10, column: 36 } },
                                type: "binary-expr",
                                locations: [
                                    { start: { line: 10, column: 17 }, end: { line: 10, column: 30 } },
                                    { start: { line: 10, column: 34 }, end: { line: 10, column: 36 } },
                                ],
                                line: 10,
                            },
                            3: {
                                loc: { start: { line: 11, column: 27 }, end: { line: 11, column: 43 } },
                                type: "binary-expr",
                                locations: [
                                    { start: { line: 11, column: 27 }, end: { line: 11, column: 37 } },
                                    { start: { line: 11, column: 41 }, end: { line: 11, column: 43 } },
                                ],
                                line: 11,
                            },
                            4: {
                                loc: { start: { line: 11, column: 56 }, end: { line: 11, column: 78 } },
                                type: "binary-expr",
                                locations: [
                                    { start: { line: 11, column: 56 }, end: { line: 11, column: 72 } },
                                    { start: { line: 11, column: 76 }, end: { line: 11, column: 78 } },
                                ],
                                line: 11,
                            },
                            5: {
                                loc: { start: { line: 12, column: 22 }, end: { line: 12, column: 42 } },
                                type: "binary-expr",
                                locations: [
                                    { start: { line: 12, column: 22 }, end: { line: 12, column: 36 } },
                                    { start: { line: 12, column: 40 }, end: { line: 12, column: 42 } },
                                ],
                                line: 12,
                            },
                        },
                        s: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
                        f: { 0: 0, 1: 0 },
                        b: { 0: [0, 0], 1: [0, 0], 2: [0, 0], 3: [0, 0], 4: [0, 0], 5: [0, 0] },
                        inputSourceMap: {
                            version: 3,
                            file: "/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/alert/alert-info.ts",
                            sourceRoot: "",
                            sources: ["/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/alert/alert-info.ts"],
                            names: [],
                            mappings:
                                "AAAA,OAAO,MAAM,MAAM,uBAAuB,CAAC;AAG3C,iGAAiG;AACjG,iGAAiG;AACjG,iGAAiG;AACjG,MAAM,aAAa,GAAG,CAAC,KAAqB,EAAE,EAAE;IAC5C,MAAM,QAAQ,GAAG,QAAQ,CAAC,aAAa,CAAC,UAAU,CAAC,CAAC;IACpD,QAAQ,CAAC,SAAS,GAAG;sBACH,KAAK,CAAC,KAAK,IAAI,oBAAoB,YAAY,KAAK,CAAC,aAAa,IAAI,EAAE;wBACtE,MAAM,CAAC,SAAS;iBACvB,KAAK,CAAC,OAAO,IAAI,EAAE;2BACT,KAAK,CAAC,IAAI,IAAI,EAAE,aAAa,KAAK,CAAC,UAAU,IAAI,EAAE;sBACxD,KAAK,CAAC,QAAQ,IAAI,EAAE;;;;SAIjC,CAAC;IACN,OAAO,QAAQ,CAAC;AACpB,CAAC,CAAA;AAED,iGAAiG;AACjG,iGAAiG;AACjG,iGAAiG;AACjG,eAAe,CAAC,KAAqB,EAAE,EAAE;IACrC,MAAM,QAAQ,GAAG,aAAa,CAAC,KAAK,CAAC,CAAC;IACtC,OAAO,QAAQ,CAAC,OAAO,CAAC,SAAS,CAAC,IAAI,CAAC,CAAC;AAC5C,CAAC,CAAA",
                            sourcesContent: [
                                'import assets from "../../../utils/assets";\nimport { AlertInfoProps } from "../../../config/types";\n\n/////////////////////////////////////////////////////////////////////////////////////////////////\n//////////////////////////// Default AlertInfo template /////////////////////////////////////////\n/////////////////////////////////////////////////////////////////////////////////////////////////\nconst alertTemplate = (props: AlertInfoProps) => {\n    const template = document.createElement("template");\n    template.innerHTML = `\n        <div class="${props.class || "alert_info_wrapper"}" style="${props.wrapperStyles || ""}">\n            <img src="${assets.alertInfo}"/>\n            <p>${props.message || ""}\n                <a href="${props.href || ""}" target="${props.linkTarget || ""}">\n                    ${props.linkText || ""}\n                </a>\n            </p>\n        </div>\n        `;\n    return template;\n}\n\n/////////////////////////////////////////////////////////////////////////////////////////////////\n///////////////// AlertInfo function to render alert info message ///////////////////////////////\n/////////////////////////////////////////////////////////////////////////////////////////////////\nexport default (props: AlertInfoProps) => {\n    const template = alertTemplate(props);\n    return template.content.cloneNode(true);\n}',
                            ],
                        },
                        _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c",
                    },
                    l = e[t] || (e[t] = {});
                return l[A] && l[A].hash === n ? l[A] : ((o.hash = n), (l[A] = o));
            })();
            v.s[0]++;
            const K = (A) => {
                v.f[1]++;
                const n =
                    (v.s[4]++,
                        ((A) => {
                            v.f[0]++;
                            const n = (v.s[1]++, document.createElement("template"));
                            return (
                                v.s[2]++,
                                (n.innerHTML = `\n        <div class="${(v.b[0][0]++, A.class || (v.b[0][1]++, "alert_info_wrapper"))}" style="${(v.b[1][0]++, A.wrapperStyles || (v.b[1][1]++, ""))
                                    }">\n            <img src="https://storage.googleapis.com/setmore-assets/2.0/Images/EasyShare/alert_info.png"/>\n            <p>${(v.b[2][0]++, A.message || (v.b[2][1]++, ""))}\n                <a href="${(v.b[3][0]++, A.href || (v.b[3][1]++, ""))
                                    }" target="${(v.b[4][0]++, A.linkTarget || (v.b[4][1]++, ""))}">\n                    ${(v.b[5][0]++, A.linkText || (v.b[5][1]++, ""))}\n                </a>\n            </p>\n        </div>\n        `),
                                v.s[3]++,
                                n
                            );
                        })(A));
                return v.s[5]++, n.content.cloneNode(!0);
            };
            var Q = (function () {
                var A = "/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/alert/toaster.ts",
                    n = "979979ca928e3e9e981daef4bc630afc7246cf1e",
                    e = new (0, function () { }.constructor)("return this")(),
                    t = "__coverage__",
                    o = {
                        path: "/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/alert/toaster.ts",
                        statementMap: {
                            0: { start: { line: 5, column: 16 }, end: { line: 18, column: 1 } },
                            1: { start: { line: 6, column: 21 }, end: { line: 6, column: 55 } },
                            2: { start: { line: 7, column: 4 }, end: { line: 16, column: 10 } },
                            3: { start: { line: 17, column: 4 }, end: { line: 17, column: 20 } },
                            4: { start: { line: 23, column: 21 }, end: { line: 23, column: 35 } },
                            5: { start: { line: 24, column: 4 }, end: { line: 24, column: 44 } },
                        },
                        fnMap: {
                            0: { name: "(anonymous_0)", decl: { start: { line: 5, column: 16 }, end: { line: 5, column: 17 } }, loc: { start: { line: 5, column: 27 }, end: { line: 18, column: 1 } }, line: 5 },
                            1: { name: "(anonymous_1)", decl: { start: { line: 22, column: 15 }, end: { line: 22, column: 16 } }, loc: { start: { line: 22, column: 26 }, end: { line: 25, column: 1 } }, line: 22 },
                        },
                        branchMap: {
                            0: {
                                loc: { start: { line: 8, column: 22 }, end: { line: 8, column: 52 } },
                                type: "binary-expr",
                                locations: [
                                    { start: { line: 8, column: 22 }, end: { line: 8, column: 33 } },
                                    { start: { line: 8, column: 37 }, end: { line: 8, column: 52 } },
                                ],
                                line: 8,
                            },
                            1: {
                                loc: { start: { line: 9, column: 26 }, end: { line: 9, column: 53 } },
                                type: "binary-expr",
                                locations: [
                                    { start: { line: 9, column: 26 }, end: { line: 9, column: 42 } },
                                    { start: { line: 9, column: 46 }, end: { line: 9, column: 53 } },
                                ],
                                line: 9,
                            },
                            2: {
                                loc: { start: { line: 10, column: 28 }, end: { line: 10, column: 61 } },
                                type: "binary-expr",
                                locations: [
                                    { start: { line: 10, column: 28 }, end: { line: 10, column: 38 } },
                                    { start: { line: 10, column: 42 }, end: { line: 10, column: 61 } },
                                ],
                                line: 10,
                            },
                            3: {
                                loc: { start: { line: 12, column: 22 }, end: { line: 12, column: 41 } },
                                type: "binary-expr",
                                locations: [
                                    { start: { line: 12, column: 22 }, end: { line: 12, column: 35 } },
                                    { start: { line: 12, column: 39 }, end: { line: 12, column: 41 } },
                                ],
                                line: 12,
                            },
                        },
                        s: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
                        f: { 0: 0, 1: 0 },
                        b: { 0: [0, 0], 1: [0, 0], 2: [0, 0], 3: [0, 0] },
                        inputSourceMap: {
                            version: 3,
                            file: "/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/alert/toaster.ts",
                            sourceRoot: "",
                            sources: ["/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/alert/toaster.ts"],
                            names: [],
                            mappings:
                                "AAAA,OAAO,MAAM,MAAM,uBAAuB,CAAC;AAG3C,iGAAiG;AACjG,iGAAiG;AACjG,iGAAiG;AACjG,MAAM,OAAO,GAAG,CAAC,KAAK,EAAE,EAAE;IACtB,MAAM,QAAQ,GAAG,QAAQ,CAAC,aAAa,CAAC,UAAU,CAAC,CAAC;IACpD,QAAQ,CAAC,SAAS,GAAG;sBACH,KAAK,CAAC,KAAK,IAAI,eAAe,WAAW,KAAK,CAAC,KAAK;0BAChD,KAAK,CAAC,UAAU,IAAI,OAAO;4BACzB,KAAK,CAAC,IAAI,IAAI,MAAM,CAAC,YAAY;;sBAEvC,KAAK,CAAC,OAAO,IAAI,EAAE;;;;SAIhC,CAAC;IACN,OAAO,QAAQ,CAAC;AACpB,CAAC,CAAA;AAED,iGAAiG;AACjG,iGAAiG;AACjG,iGAAiG;AACjG,eAAe,CAAC,KAAK,EAAE,EAAE;IACrB,MAAM,QAAQ,GAAG,OAAO,CAAC,KAAK,CAAC,CAAC;IAChC,OAAO,QAAQ,CAAC,OAAO,CAAC,SAAS,CAAC,IAAI,CAAC,CAAC;AAC5C,CAAC,CAAA",
                            sourcesContent: [
                                'import assets from "../../../utils/assets";\nimport { } from "../../../config/types";\n\n/////////////////////////////////////////////////////////////////////////////////////////////////\n//////////////////////////// Default AlertInfo template /////////////////////////////////////////\n/////////////////////////////////////////////////////////////////////////////////////////////////\nconst toaster = (props) => {\n    const template = document.createElement("template");\n    template.innerHTML = `\n        <div class="${props.class || "toast-wrapper"}" style=${props.style}">\n            <div class="${props.toastClass || "toast"}">\n                <img src="${props.icon || assets.toastSuccess}"/>\n                <span>\n                    ${props.message || ""}\n                </span>\n            </div>\n        </div>\n        `;\n    return template;\n}\n\n/////////////////////////////////////////////////////////////////////////////////////////////////\n///////////////// AlertInfo function to render alert info message ///////////////////////////////\n/////////////////////////////////////////////////////////////////////////////////////////////////\nexport default (props) => {\n    const template = toaster(props);\n    return template.content.cloneNode(true);\n}',
                            ],
                        },
                        _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c",
                    },
                    l = e[t] || (e[t] = {});
                return l[A] && l[A].hash === n ? l[A] : ((o.hash = n), (l[A] = o));
            })();
            Q.s[0]++;
            const S = (A) => {
                Q.f[1]++;
                const n =
                    (Q.s[4]++,
                        ((A) => {
                            Q.f[0]++;
                            const n = (Q.s[1]++, document.createElement("template"));
                            return (
                                Q.s[2]++,
                                (n.innerHTML = `\n        <div class="${(Q.b[0][0]++, A.class || (Q.b[0][1]++, "toast-wrapper"))}" style=${A.style}">\n            <div class="${(Q.b[1][0]++, A.toastClass || (Q.b[1][1]++, "toast"))
                                    }">\n                <img src="${(Q.b[2][0]++, A.icon || (Q.b[2][1]++, r))}"/>\n                <span>\n                    ${(Q.b[3][0]++, A.message || (Q.b[3][1]++, ""))
                                    }\n                </span>\n            </div>\n        </div>\n        `),
                                Q.s[3]++,
                                n
                            );
                        })(A));
                return Q.s[5]++, n.content.cloneNode(!0);
            };
            !(function () {
                var A = "/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/alert/index.ts",
                    n = "af9b82689dce9bb1a9dad24fb1fc634a36889fa0",
                    e = new (0, function () { }.constructor)("return this")(),
                    t = "__coverage__",
                    o = {
                        path: "/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/alert/index.ts",
                        statementMap: {},
                        fnMap: {},
                        branchMap: {},
                        s: {},
                        f: {},
                        b: {},
                        inputSourceMap: {
                            version: 3,
                            file: "/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/alert/index.ts",
                            sourceRoot: "",
                            sources: ["/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/alert/index.ts"],
                            names: [],
                            mappings: "AAAA,OAAO,EAAE,OAAO,IAAI,SAAS,EAAE,MAAM,cAAc,CAAC;AACpD,OAAO,EAAE,OAAO,IAAI,OAAO,EAAE,MAAM,WAAW,CAAC",
                            sourcesContent: ['export { default as AlertInfo } from "./alert-info";\nexport { default as Toaster } from "./toaster";'],
                        },
                        _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c",
                    },
                    l = e[t] || (e[t] = {});
                l[A] && l[A].hash === n ? l[A] : ((o.hash = n), (l[A] = o));
            })();
            var x = (function () {
                var A = "/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/tooltip/button-tooltip.ts",
                    n = "e83444baf6c0ad75143bfb784f740bf51d0d83a2",
                    e = new (0, function () { }.constructor)("return this")(),
                    t = "__coverage__",
                    o = {
                        path: "/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/tooltip/button-tooltip.ts",
                        statementMap: {
                            0: { start: { line: 4, column: 24 }, end: { line: 12, column: 1 } },
                            1: { start: { line: 5, column: 21 }, end: { line: 5, column: 55 } },
                            2: { start: { line: 6, column: 4 }, end: { line: 10, column: 10 } },
                            3: { start: { line: 11, column: 4 }, end: { line: 11, column: 20 } },
                            4: { start: { line: 17, column: 20 }, end: { line: 17, column: 42 } },
                            5: { start: { line: 18, column: 4 }, end: { line: 18, column: 43 } },
                        },
                        fnMap: {
                            0: { name: "(anonymous_0)", decl: { start: { line: 4, column: 24 }, end: { line: 4, column: 25 } }, loc: { start: { line: 4, column: 35 }, end: { line: 12, column: 1 } }, line: 4 },
                            1: { name: "(anonymous_1)", decl: { start: { line: 16, column: 15 }, end: { line: 16, column: 16 } }, loc: { start: { line: 16, column: 26 }, end: { line: 19, column: 1 } }, line: 16 },
                        },
                        branchMap: {
                            0: {
                                loc: { start: { line: 7, column: 22 }, end: { line: 7, column: 46 } },
                                type: "binary-expr",
                                locations: [
                                    { start: { line: 7, column: 22 }, end: { line: 7, column: 33 } },
                                    { start: { line: 7, column: 37 }, end: { line: 7, column: 46 } },
                                ],
                                line: 7,
                            },
                        },
                        s: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
                        f: { 0: 0, 1: 0 },
                        b: { 0: [0, 0] },
                        inputSourceMap: {
                            version: 3,
                            file: "/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/tooltip/button-tooltip.ts",
                            sourceRoot: "",
                            sources: ["/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/tooltip/button-tooltip.ts"],
                            names: [],
                            mappings:
                                "AAEA,gGAAgG;AAChG,gGAAgG;AAChG,gGAAgG;AAChG,MAAM,eAAe,GAAG,CAAC,KAA0B,EAAE,EAAE;IACnD,MAAM,QAAQ,GAAG,QAAQ,CAAC,aAAa,CAAC,UAAU,CAAC,CAAC;IACpD,QAAQ,CAAC,SAAS,GAAG;sBACH,KAAK,CAAC,KAAK,IAAI,SAAS;iBAC5B,KAAK,CAAC,KAAK;;SAEpB,CAAC;IACN,OAAO,QAAQ,CAAC;AACpB,CAAC,CAAA;AACD,gGAAgG;AAChG,gGAAgG;AAChG,gGAAgG;AAChG,eAAe,CAAC,KAA0B,EAAE,EAAE;IAC1C,MAAM,OAAO,GAAG,eAAe,CAAC,KAAK,CAAC,CAAC;IACvC,OAAO,OAAO,CAAC,OAAO,CAAC,SAAS,CAAC,IAAI,CAAC,CAAC;AAC3C,CAAC,CAAA",
                            sourcesContent: [
                                'import { DefaultToolTipProps } from "../../../config/types";\n\n////////////////////////////////////////////////////////////////////////////////////////////////\n//////////////////////////////  Default tooltip template ///////////////////////////////////////\n////////////////////////////////////////////////////////////////////////////////////////////////\nconst tooltipTemplate = (props: DefaultToolTipProps) => {\n    const template = document.createElement("template");\n    template.innerHTML = `\n        <div class="${props.class || "tooltip"}">\n            <p>${ props.label}<i></i></p>\n        </div>\n        `;\n    return template;\n}\n////////////////////////////////////////////////////////////////////////////////////////////////\n//////////////////////  ToolTip function to render default Tooltip /////////////////////////////\n////////////////////////////////////////////////////////////////////////////////////////////////\nexport default (props: DefaultToolTipProps) => {\n    const tooltip = tooltipTemplate(props);\n    return tooltip.content.cloneNode(true);\n}',
                            ],
                        },
                        _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c",
                    },
                    l = e[t] || (e[t] = {});
                return l[A] && l[A].hash === n ? l[A] : ((o.hash = n), (l[A] = o));
            })();
            x.s[0]++;
            !(function () {
                var A = "/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/tooltip/index.ts",
                    n = "74f52546b6b656574e6b67be6fbe4af58220ff37",
                    e = new (0, function () { }.constructor)("return this")(),
                    t = "__coverage__",
                    o = {
                        path: "/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/tooltip/index.ts",
                        statementMap: {},
                        fnMap: {},
                        branchMap: {},
                        s: {},
                        f: {},
                        b: {},
                        inputSourceMap: {
                            version: 3,
                            file: "/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/tooltip/index.ts",
                            sourceRoot: "",
                            sources: ["/Users/apple/Projects/Package/Setmore-easyshare/src/components/atom/tooltip/index.ts"],
                            names: [],
                            mappings: "AAAA,OAAO,EAAE,OAAO,IAAI,UAAU,EAAE,MAAM,kBAAkB,CAAC",
                            sourcesContent: ['export { default as BtnTooltip } from "./button-tooltip";'],
                        },
                        _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c",
                    },
                    l = e[t] || (e[t] = {});
                l[A] && l[A].hash === n ? l[A] : ((o.hash = n), (l[A] = o));
            })();
            var O = (function () {
                var A = "/Users/apple/Projects/Package/Setmore-easyshare/src/utils/http.ts",
                    n = "733c7a1bb267bc7479623ebec2625c70e3594b4d",
                    e = new (0, function () { }.constructor)("return this")(),
                    t = "__coverage__",
                    o = {
                        path: "/Users/apple/Projects/Package/Setmore-easyshare/src/utils/http.ts",
                        statementMap: {
                            0: { start: { line: 5, column: 21 }, end: { line: 8, column: 6 } },
                            1: { start: { line: 9, column: 4 }, end: { line: 9, column: 27 } },
                            2: { start: { line: 15, column: 21 }, end: { line: 22, column: 6 } },
                            3: { start: { line: 23, column: 4 }, end: { line: 23, column: 27 } },
                            4: { start: { line: 29, column: 21 }, end: { line: 36, column: 6 } },
                            5: { start: { line: 37, column: 4 }, end: { line: 37, column: 27 } },
                            6: { start: { line: 43, column: 21 }, end: { line: 50, column: 6 } },
                            7: { start: { line: 51, column: 4 }, end: { line: 51, column: 27 } },
                        },
                        fnMap: {
                            0: { name: "GET", decl: { start: { line: 4, column: 22 }, end: { line: 4, column: 25 } }, loc: { start: { line: 4, column: 40 }, end: { line: 10, column: 1 } }, line: 4 },
                            1: { name: "POST", decl: { start: { line: 14, column: 22 }, end: { line: 14, column: 26 } }, loc: { start: { line: 14, column: 32 }, end: { line: 24, column: 1 } }, line: 14 },
                            2: { name: "PUT", decl: { start: { line: 28, column: 22 }, end: { line: 28, column: 25 } }, loc: { start: { line: 28, column: 31 }, end: { line: 38, column: 1 } }, line: 28 },
                            3: { name: "DELETE", decl: { start: { line: 42, column: 22 }, end: { line: 42, column: 28 } }, loc: { start: { line: 42, column: 34 }, end: { line: 52, column: 1 } }, line: 42 },
                        },
                        branchMap: {},
                        s: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 },
                        f: { 0: 0, 1: 0, 2: 0, 3: 0 },
                        b: {},
                        inputSourceMap: {
                            version: 3,
                            file: "/Users/apple/Projects/Package/Setmore-easyshare/src/utils/http.ts",
                            sourceRoot: "",
                            sources: ["/Users/apple/Projects/Package/Setmore-easyshare/src/utils/http.ts"],
                            names: [],
                            mappings:
                                "AAAA,kGAAkG;AAClG,kGAAkG;AAClG,kGAAkG;AAClG,MAAM,CAAC,KAAK,UAAU,GAAG,CAAI,GAAQ,EAAE,OAAqB;IACxD,MAAM,QAAQ,GAAG,MAAM,KAAK,CAAC,GAAG,EAAE;QAC9B,MAAM,EAAE,KAAK;QACb,OAAO;KACV,CAAC,CAAC;IACH,OAAO,QAAQ,CAAC,IAAI,EAAE,CAAC;AAC3B,CAAC;AAED,kGAAkG;AAClG,mGAAmG;AACnG,kGAAkG;AAClG,MAAM,CAAC,KAAK,UAAU,IAAI,CAAI,GAAW;IACrC,MAAM,QAAQ,GAAG,MAAM,KAAK,CAAC,GAAG,EAAE;QAC9B,MAAM,EAAE,MAAM;QACd,OAAO,EAAE;YACL,QAAQ,EAAE,kBAAkB;YAC5B,cAAc,EAAE,kBAAkB;SACrC;QACD,IAAI,EAAE,IAAI,CAAC,SAAS,CAAC,EAAE,CAAC;KAC3B,CAAC,CAAC;IACH,OAAO,QAAQ,CAAC,IAAI,EAAE,CAAC;AAC3B,CAAC;AAED,kGAAkG;AAClG,kGAAkG;AAClG,kGAAkG;AAClG,MAAM,CAAC,KAAK,UAAU,GAAG,CAAI,GAAW;IACpC,MAAM,QAAQ,GAAG,MAAM,KAAK,CAAC,GAAG,EAAE;QAC9B,MAAM,EAAE,MAAM;QACd,OAAO,EAAE;YACL,QAAQ,EAAE,kBAAkB;YAC5B,cAAc,EAAE,kBAAkB;SACrC;QACD,IAAI,EAAE,IAAI,CAAC,SAAS,CAAC,EAAE,CAAC;KAC3B,CAAC,CAAC;IACH,OAAO,QAAQ,CAAC,IAAI,EAAE,CAAC;AAC3B,CAAC;AAED,kGAAkG;AAClG,kGAAkG;AAClG,kGAAkG;AAClG,MAAM,CAAC,KAAK,UAAU,MAAM,CAAI,GAAW;IACvC,MAAM,QAAQ,GAAG,MAAM,KAAK,CAAC,GAAG,EAAE;QAC9B,MAAM,EAAE,QAAQ;QAChB,OAAO,EAAE;YACL,QAAQ,EAAE,kBAAkB;YAC5B,cAAc,EAAE,kBAAkB;SACrC;QACD,IAAI,EAAE,IAAI,CAAC,SAAS,CAAC,EAAE,CAAC;KAC3B,CAAC,CAAC;IACH,OAAO,QAAQ,CAAC,IAAI,EAAE,CAAC;AAC3B,CAAC",
                            sourcesContent: [
                                "//////////////////////////////////////////////////////////////////////////////////////////////////\n// GET REQUEST ///////////////////////////////////////////////////////////////////////////////////\n//////////////////////////////////////////////////////////////////////////////////////////////////\nexport async function GET<T>(url: any, headers?: HeadersInit): Promise<T> {\n    const response = await fetch(url, {\n        method: 'GET',\n        headers,\n    });\n    return response.json();\n}\n\n//////////////////////////////////////////////////////////////////////////////////////////////////\n// POST REQUEST ///////////////////////////////////////////////////////////////////////////////////\n//////////////////////////////////////////////////////////////////////////////////////////////////\nexport async function POST<T>(url: string): Promise<T> {\n    const response = await fetch(url, {\n        method: 'POST',\n        headers: {\n            'Accept': 'application/json',\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({})\n    });\n    return response.json();\n}\n\n//////////////////////////////////////////////////////////////////////////////////////////////////\n// PUT REQUEST ///////////////////////////////////////////////////////////////////////////////////\n//////////////////////////////////////////////////////////////////////////////////////////////////\nexport async function PUT<T>(url: string): Promise<T> {\n    const response = await fetch(url, {\n        method: 'POST',\n        headers: {\n            'Accept': 'application/json',\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({})\n    });\n    return response.json();\n}\n\n//////////////////////////////////////////////////////////////////////////////////////////////////\n// DELETE REQUEST/////////////////////////////////////////////////////////////////////////////////\n//////////////////////////////////////////////////////////////////////////////////////////////////\nexport async function DELETE<T>(url: string): Promise<T> {\n    const response = await fetch(url, {\n        method: 'DELETE',\n        headers: {\n            'Accept': 'application/json',\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({})\n    });\n    return response.json();\n}",
                            ],
                        },
                        _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c",
                    },
                    l = e[t] || (e[t] = {});
                return l[A] && l[A].hash === n ? l[A] : ((o.hash = n), (l[A] = o));
            })();
            async function k(A, n) {
                O.f[0]++;
                const e = (O.s[0]++, await fetch(A, { method: "GET", headers: n }));
                return O.s[1]++, e.json();
            }
            var _ = (function () {
                var A = "/Users/apple/Projects/Package/Setmore-easyshare/src/config/api.ts",
                    n = "1dcba672664e0c01651be53297e0863e4e9a6ce0",
                    e = new (0, function () { }.constructor)("return this")(),
                    t = "__coverage__",
                    o = {
                        path: "/Users/apple/Projects/Package/Setmore-easyshare/src/config/api.ts",
                        statementMap: { 0: { start: { line: 5, column: 23 }, end: { line: 5, column: 100 } }, 1: { start: { line: 6, column: 25 }, end: { line: 10, column: 1 } } },
                        fnMap: {},
                        branchMap: {},
                        s: { 0: 0, 1: 0 },
                        f: {},
                        b: {},
                        inputSourceMap: {
                            version: 3,
                            file: "/Users/apple/Projects/Package/Setmore-easyshare/src/config/api.ts",
                            sourceRoot: "",
                            sources: ["/Users/apple/Projects/Package/Setmore-easyshare/src/config/api.ts"],
                            names: [],
                            mappings: "AAAA,2EAA2E;AAC3E,2EAA2E;AAC3E,2EAA2E;AAC3E,mDAAmD;AACnD,MAAM,CAAC,MAAM,OAAO,GAAG,6EAA6E,CAAC;AAErG,MAAM,CAAC,MAAM,SAAS,GAAG;IACrB,UAAU;IACV,SAAS,EAAE,gBAAgB;IAC3B,WAAW,EAAE,oBAAoB;CAMpC,CAAA",
                            sourcesContent: [
                                '///////////////////////////////////////////////////////////////////////////\n/////////////////////////// Api endpoints /////////////////////////////////\n///////////////////////////////////////////////////////////////////////////\n// export const baseUrl = "https://my.setmore.com";\nexport const baseUrl = "https://auth-dot-services-dot-schedulingengine.uc.r.appspot.com/schedule/v3";\n\nexport const endpoints = {\n    // New one\n    _services: "/services/type",\n    _categories: "/services/category",\n\n    // Old one\n    // services: "/api/internal/v1/scheduling/common/service",\n    // categories: "/api/internal/v1/scheduling/common/category",\n    // staff: "https://easyshare-dot-setmoreappointments.appspot.com/api/internal/v1/staff/fetch/details"\n}',
                            ],
                        },
                        _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c",
                    },
                    l = e[t] || (e[t] = {});
                return l[A] && l[A].hash === n ? l[A] : ((o.hash = n), (l[A] = o));
            })();
            _.s[0]++;
            const F = (_.s[1]++, { _services: "/services/type", _categories: "/services/category" });
            var U = e(737),
                w = (function () {
                    var A = "/Users/apple/Projects/Package/Setmore-easyshare/src/components/hoc/service-wrapper.ts",
                        n = "61783aee0ee067e3abdfeb33e05d144ec785832e",
                        e = new (0, function () { }.constructor)("return this")(),
                        t = "__coverage__",
                        o = {
                            path: "/Users/apple/Projects/Package/Setmore-easyshare/src/components/hoc/service-wrapper.ts",
                            statementMap: {
                                0: { start: { line: 17, column: 8 }, end: { line: 17, column: 16 } },
                                1: { start: { line: 18, column: 8 }, end: { line: 18, column: 26 } },
                                2: { start: { line: 19, column: 8 }, end: { line: 19, column: 45 } },
                                3: { start: { line: 20, column: 8 }, end: { line: 20, column: 44 } },
                                4: { start: { line: 21, column: 25 }, end: { line: 21, column: 56 } },
                                5: { start: { line: 22, column: 22 }, end: { line: 22, column: 52 } },
                                6: { start: { line: 23, column: 8 }, end: { line: 23, column: 48 } },
                                7: { start: { line: 24, column: 8 }, end: { line: 24, column: 74 } },
                                8: { start: { line: 25, column: 8 }, end: { line: 25, column: 58 } },
                                9: { start: { line: 26, column: 8 }, end: { line: 26, column: 32 } },
                                10: { start: { line: 27, column: 8 }, end: { line: 27, column: 46 } },
                                11: { start: { line: 28, column: 8 }, end: { line: 28, column: 65 } },
                                12: { start: { line: 29, column: 8 }, end: { line: 29, column: 39 } },
                                13: { start: { line: 32, column: 8 }, end: { line: 32, column: 25 } },
                                14: { start: { line: 39, column: 23 }, end: { line: 39, column: 42 } },
                                15: { start: { line: 40, column: 8 }, end: { line: 40, column: 28 } },
                                16: { start: { line: 43, column: 8 }, end: { line: 43, column: 59 } },
                                17: { start: { line: 46, column: 8 }, end: { line: 53, column: 9 } },
                                18: { start: { line: 47, column: 27 }, end: { line: 47, column: 46 } },
                                19: { start: { line: 48, column: 12 }, end: { line: 48, column: 114 } },
                                20: { start: { line: 48, column: 77 }, end: { line: 48, column: 112 } },
                                21: { start: { line: 49, column: 12 }, end: { line: 49, column: 32 } },
                                22: { start: { line: 52, column: 12 }, end: { line: 52, column: 29 } },
                                23: { start: { line: 59, column: 27 }, end: { line: 59, column: 58 } },
                                24: { start: { line: 60, column: 8 }, end: { line: 63, column: 9 } },
                                25: { start: { line: 61, column: 12 }, end: { line: 61, column: 45 } },
                                26: { start: { line: 62, column: 12 }, end: { line: 62, column: 52 } },
                                27: { start: { line: 64, column: 25 }, end: { line: 69, column: 9 } },
                                28: { start: { line: 71, column: 30 }, end: { line: 71, column: 105 } },
                                29: { start: { line: 72, column: 30 }, end: { line: 72, column: 107 } },
                                30: { start: { line: 73, column: 20 }, end: { line: 76, column: 10 } },
                                31: { start: { line: 78, column: 41 }, end: { line: 78, column: 50 } },
                                32: { start: { line: 79, column: 8 }, end: { line: 81, column: 10 } },
                                33: { start: { line: 87, column: 33 }, end: { line: 87, column: 35 } },
                                34: { start: { line: 92, column: 8 }, end: { line: 108, column: 9 } },
                                35: { start: { line: 93, column: 12 }, end: { line: 95, column: 13 } },
                                36: { start: { line: 94, column: 16 }, end: { line: 94, column: 60 } },
                                37: { start: { line: 96, column: 12 }, end: { line: 96, column: 65 } },
                                38: { start: { line: 99, column: 29 }, end: { line: 99, column: 51 } },
                                39: { start: { line: 100, column: 38 }, end: { line: 100, column: 40 } },
                                40: { start: { line: 101, column: 12 }, end: { line: 106, column: 13 } },
                                41: { start: { line: 102, column: 31 }, end: { line: 102, column: 99 } },
                                42: { start: { line: 102, column: 85 }, end: { line: 102, column: 98 } },
                                43: { start: { line: 103, column: 16 }, end: { line: 105, column: 17 } },
                                44: { start: { line: 104, column: 20 }, end: { line: 104, column: 74 } },
                                45: { start: { line: 107, column: 12 }, end: { line: 107, column: 54 } },
                                46: { start: { line: 109, column: 8 }, end: { line: 109, column: 49 } },
                                47: { start: { line: 115, column: 8 }, end: { line: 117, column: 9 } },
                                48: { start: { line: 123, column: 44 }, end: { line: 123, column: 70 } },
                                49: { start: { line: 130, column: 8 }, end: { line: 133, column: 9 } },
                                50: { start: { line: 131, column: 12 }, end: { line: 131, column: 36 } },
                                51: { start: { line: 132, column: 12 }, end: { line: 132, column: 43 } },
                                52: { start: { line: 148, column: 8 }, end: { line: 148, column: 56 } },
                                53: { start: { line: 149, column: 8 }, end: { line: 149, column: 52 } },
                                54: { start: { line: 150, column: 21 }, end: { line: 150, column: 35 } },
                                55: { start: { line: 151, column: 20 }, end: { line: 151, column: 21 } },
                                56: { start: { line: 152, column: 26 }, end: { line: 152, column: 55 } },
                                57: { start: { line: 153, column: 8 }, end: { line: 153, column: 53 } },
                                58: { start: { line: 154, column: 8 }, end: { line: 184, column: 9 } },
                                59: { start: { line: 155, column: 25 }, end: { line: 155, column: 54 } },
                                60: { start: { line: 156, column: 27 }, end: { line: 156, column: 56 } },
                                61: { start: { line: 157, column: 12 }, end: { line: 157, column: 58 } },
                                62: { start: { line: 158, column: 12 }, end: { line: 158, column: 47 } },
                                63: { start: { line: 159, column: 26 }, end: { line: 159, column: 68 } },
                                64: { start: { line: 160, column: 12 }, end: { line: 160, column: 79 } },
                                65: { start: { line: 161, column: 12 }, end: { line: 161, column: 83 } },
                                66: { start: { line: 162, column: 12 }, end: { line: 164, column: 13 } },
                                67: { start: { line: 163, column: 16 }, end: { line: 163, column: 56 } },
                                68: { start: { line: 165, column: 12 }, end: { line: 165, column: 20 } },
                                69: { start: { line: 166, column: 12 }, end: { line: 166, column: 37 } },
                                70: { start: { line: 167, column: 12 }, end: { line: 167, column: 40 } },
                                71: { start: { line: 168, column: 12 }, end: { line: 168, column: 40 } },
                                72: { start: { line: 169, column: 12 }, end: { line: 183, column: 13 } },
                                73: { start: { line: 170, column: 31 }, end: { line: 170, column: 33 } },
                                74: { start: { line: 171, column: 16 }, end: { line: 176, column: 17 } },
                                75: { start: { line: 172, column: 20 }, end: { line: 172, column: 87 } },
                                76: { start: { line: 175, column: 20 }, end: { line: 175, column: 51 } },
                                77: { start: { line: 179, column: 41 }, end: { line: 181, column: 18 } },
                                78: { start: { line: 182, column: 16 }, end: { line: 182, column: 51 } },
                                79: { start: { line: 186, column: 8 }, end: { line: 186, column: 47 } },
                                80: { start: { line: 192, column: 8 }, end: { line: 192, column: 25 } },
                                81: { start: { line: 193, column: 26 }, end: { line: 193, column: 74 } },
                                82: { start: { line: 194, column: 8 }, end: { line: 194, column: 51 } },
                                83: { start: { line: 195, column: 8 }, end: { line: 205, column: 9 } },
                                84: { start: { line: 196, column: 12 }, end: { line: 204, column: 13 } },
                                85: { start: { line: 197, column: 16 }, end: { line: 197, column: 44 } },
                                86: { start: { line: 198, column: 16 }, end: { line: 203, column: 17 } },
                                87: { start: { line: 199, column: 34 }, end: { line: 199, column: 86 } },
                                88: { start: { line: 199, column: 71 }, end: { line: 199, column: 85 } },
                                89: { start: { line: 200, column: 20 }, end: { line: 202, column: 21 } },
                                90: { start: { line: 201, column: 24 }, end: { line: 201, column: 62 } },
                                91: { start: { line: 211, column: 8 }, end: { line: 236, column: 9 } },
                                92: { start: { line: 212, column: 12 }, end: { line: 235, column: 13 } },
                                93: { start: { line: 213, column: 16 }, end: { line: 234, column: 17 } },
                                94: { start: { line: 214, column: 20 }, end: { line: 233, column: 21 } },
                                95: { start: { line: 215, column: 24 }, end: { line: 232, column: 25 } },
                                96: { start: { line: 216, column: 48 }, end: { line: 216, column: 77 } },
                                97: { start: { line: 217, column: 28 }, end: { line: 217, column: 78 } },
                                98: { start: { line: 218, column: 28 }, end: { line: 231, column: 29 } },
                                99: { start: { line: 220, column: 32 }, end: { line: 225, column: 33 } },
                                100: { start: { line: 221, column: 54 }, end: { line: 221, column: 83 } },
                                101: { start: { line: 222, column: 36 }, end: { line: 222, column: 80 } },
                                102: { start: { line: 223, column: 36 }, end: { line: 223, column: 72 } },
                                103: { start: { line: 224, column: 36 }, end: { line: 224, column: 64 } },
                                104: { start: { line: 226, column: 32 }, end: { line: 229, column: 33 } },
                                105: { start: { line: 227, column: 59 }, end: { line: 227, column: 102 } },
                                106: { start: { line: 228, column: 36 }, end: { line: 228, column: 84 } },
                                107: { start: { line: 230, column: 32 }, end: { line: 230, column: 62 } },
                                108: { start: { line: 242, column: 8 }, end: { line: 261, column: 9 } },
                                109: { start: { line: 243, column: 32 }, end: { line: 243, column: 61 } },
                                110: { start: { line: 244, column: 12 }, end: { line: 244, column: 63 } },
                                111: { start: { line: 245, column: 30 }, end: { line: 245, column: 59 } },
                                112: { start: { line: 246, column: 12 }, end: { line: 246, column: 52 } },
                                113: { start: { line: 247, column: 31 }, end: { line: 247, column: 38 } },
                                114: { start: { line: 248, column: 12 }, end: { line: 248, column: 89 } },
                                115: { start: { line: 249, column: 12 }, end: { line: 249, column: 88 } },
                                116: { start: { line: 250, column: 12 }, end: { line: 250, column: 47 } },
                                117: { start: { line: 251, column: 12 }, end: { line: 251, column: 45 } },
                                118: { start: { line: 252, column: 12 }, end: { line: 252, column: 40 } },
                                119: { start: { line: 253, column: 31 }, end: { line: 253, column: 52 } },
                                120: { start: { line: 254, column: 32 }, end: { line: 254, column: 61 } },
                                121: { start: { line: 255, column: 12 }, end: { line: 255, column: 76 } },
                                122: { start: { line: 256, column: 12 }, end: { line: 259, column: 13 } },
                                123: { start: { line: 257, column: 37 }, end: { line: 257, column: 78 } },
                                124: { start: { line: 258, column: 16 }, end: { line: 258, column: 60 } },
                                125: { start: { line: 260, column: 12 }, end: { line: 260, column: 47 } },
                                126: { start: { line: 267, column: 27 }, end: { line: 267, column: 58 } },
                                127: { start: { line: 268, column: 8 }, end: { line: 268, column: 48 } },
                                128: { start: { line: 269, column: 33 }, end: { line: 269, column: 71 } },
                                129: { start: { line: 270, column: 8 }, end: { line: 278, column: 11 } },
                                130: { start: { line: 279, column: 24 }, end: { line: 279, column: 34 } },
                                131: { start: { line: 280, column: 8 }, end: { line: 283, column: 11 } },
                                132: { start: { line: 281, column: 12 }, end: { line: 281, column: 46 } },
                                133: { start: { line: 282, column: 12 }, end: { line: 282, column: 56 } },
                                134: { start: { line: 284, column: 25 }, end: { line: 284, column: 57 } },
                                135: { start: { line: 285, column: 24 }, end: { line: 285, column: 58 } },
                                136: { start: { line: 286, column: 8 }, end: { line: 286, column: 38 } },
                                137: { start: { line: 287, column: 8 }, end: { line: 287, column: 37 } },
                                138: { start: { line: 288, column: 8 }, end: { line: 288, column: 46 } },
                                139: { start: { line: 294, column: 20 }, end: { line: 294, column: 63 } },
                                140: { start: { line: 295, column: 8 }, end: { line: 295, column: 33 } },
                                141: { start: { line: 301, column: 8 }, end: { line: 302, column: 39 } },
                                142: { start: { line: 302, column: 12 }, end: { line: 302, column: 39 } },
                                143: { start: { line: 303, column: 8 }, end: { line: 305, column: 9 } },
                                144: { start: { line: 304, column: 12 }, end: { line: 304, column: 44 } },
                                145: { start: { line: 306, column: 8 }, end: { line: 311, column: 9 } },
                                146: { start: { line: 307, column: 12 }, end: { line: 307, column: 150 } },
                                147: { start: { line: 310, column: 12 }, end: { line: 310, column: 100 } },
                                148: { start: { line: 312, column: 8 }, end: { line: 317, column: 17 } },
                                149: { start: { line: 313, column: 12 }, end: { line: 315, column: 13 } },
                                150: { start: { line: 314, column: 16 }, end: { line: 314, column: 48 } },
                                151: { start: { line: 316, column: 12 }, end: { line: 316, column: 39 } },
                            },
                            fnMap: {
                                0: { name: "(anonymous_0)", decl: { start: { line: 16, column: 4 }, end: { line: 16, column: 5 } }, loc: { start: { line: 16, column: 18 }, end: { line: 30, column: 5 } }, line: 16 },
                                1: { name: "(anonymous_1)", decl: { start: { line: 31, column: 4 }, end: { line: 31, column: 5 } }, loc: { start: { line: 31, column: 36 }, end: { line: 33, column: 5 } }, line: 31 },
                                2: { name: "(anonymous_2)", decl: { start: { line: 37, column: 4 }, end: { line: 37, column: 5 } }, loc: { start: { line: 37, column: 24 }, end: { line: 41, column: 5 } }, line: 37 },
                                3: { name: "(anonymous_3)", decl: { start: { line: 42, column: 4 }, end: { line: 42, column: 5 } }, loc: { start: { line: 42, column: 27 }, end: { line: 44, column: 5 } }, line: 42 },
                                4: { name: "(anonymous_4)", decl: { start: { line: 45, column: 4 }, end: { line: 45, column: 5 } }, loc: { start: { line: 45, column: 55 }, end: { line: 54, column: 5 } }, line: 45 },
                                5: { name: "(anonymous_5)", decl: { start: { line: 48, column: 67 }, end: { line: 48, column: 68 } }, loc: { start: { line: 48, column: 77 }, end: { line: 48, column: 112 } }, line: 48 },
                                6: { name: "(anonymous_6)", decl: { start: { line: 58, column: 4 }, end: { line: 58, column: 5 } }, loc: { start: { line: 58, column: 26 }, end: { line: 82, column: 5 } }, line: 58 },
                                7: { name: "(anonymous_7)", decl: { start: { line: 86, column: 4 }, end: { line: 86, column: 5 } }, loc: { start: { line: 86, column: 47 }, end: { line: 110, column: 5 } }, line: 86 },
                                8: { name: "(anonymous_8)", decl: { start: { line: 102, column: 79 }, end: { line: 102, column: 80 } }, loc: { start: { line: 102, column: 85 }, end: { line: 102, column: 98 } }, line: 102 },
                                9: { name: "(anonymous_9)", decl: { start: { line: 114, column: 4 }, end: { line: 114, column: 5 } }, loc: { start: { line: 114, column: 59 }, end: { line: 118, column: 5 } }, line: 114 },
                                10: { name: "(anonymous_10)", decl: { start: { line: 122, column: 4 }, end: { line: 122, column: 5 } }, loc: { start: { line: 122, column: 25 }, end: { line: 187, column: 5 } }, line: 122 },
                                11: { name: "(anonymous_11)", decl: { start: { line: 191, column: 4 }, end: { line: 191, column: 5 } }, loc: { start: { line: 191, column: 47 }, end: { line: 206, column: 5 } }, line: 191 },
                                12: { name: "(anonymous_12)", decl: { start: { line: 199, column: 62 }, end: { line: 199, column: 63 } }, loc: { start: { line: 199, column: 71 }, end: { line: 199, column: 85 } }, line: 199 },
                                13: { name: "(anonymous_13)", decl: { start: { line: 210, column: 4 }, end: { line: 210, column: 5 } }, loc: { start: { line: 210, column: 30 }, end: { line: 237, column: 5 } }, line: 210 },
                                14: { name: "(anonymous_14)", decl: { start: { line: 241, column: 4 }, end: { line: 241, column: 5 } }, loc: { start: { line: 241, column: 35 }, end: { line: 262, column: 5 } }, line: 241 },
                                15: { name: "(anonymous_15)", decl: { start: { line: 266, column: 4 }, end: { line: 266, column: 5 } }, loc: { start: { line: 266, column: 32 }, end: { line: 289, column: 5 } }, line: 266 },
                                16: { name: "(anonymous_16)", decl: { start: { line: 280, column: 42 }, end: { line: 280, column: 43 } }, loc: { start: { line: 280, column: 48 }, end: { line: 283, column: 9 } }, line: 280 },
                                17: { name: "(anonymous_17)", decl: { start: { line: 293, column: 4 }, end: { line: 293, column: 5 } }, loc: { start: { line: 293, column: 26 }, end: { line: 296, column: 5 } }, line: 293 },
                                18: { name: "(anonymous_18)", decl: { start: { line: 300, column: 4 }, end: { line: 300, column: 5 } }, loc: { start: { line: 300, column: 24 }, end: { line: 318, column: 5 } }, line: 300 },
                                19: { name: "(anonymous_19)", decl: { start: { line: 312, column: 34 }, end: { line: 312, column: 35 } }, loc: { start: { line: 312, column: 40 }, end: { line: 317, column: 9 } }, line: 312 },
                            },
                            branchMap: {
                                0: {
                                    loc: { start: { line: 46, column: 8 }, end: { line: 53, column: 9 } },
                                    type: "if",
                                    locations: [
                                        { start: { line: 46, column: 8 }, end: { line: 53, column: 9 } },
                                        { start: { line: 46, column: 8 }, end: { line: 53, column: 9 } },
                                    ],
                                    line: 46,
                                },
                                1: {
                                    loc: { start: { line: 46, column: 12 }, end: { line: 46, column: 46 } },
                                    type: "binary-expr",
                                    locations: [
                                        { start: { line: 46, column: 12 }, end: { line: 46, column: 33 } },
                                        { start: { line: 46, column: 37 }, end: { line: 46, column: 46 } },
                                    ],
                                    line: 46,
                                },
                                2: {
                                    loc: { start: { line: 60, column: 8 }, end: { line: 63, column: 9 } },
                                    type: "if",
                                    locations: [
                                        { start: { line: 60, column: 8 }, end: { line: 63, column: 9 } },
                                        { start: { line: 60, column: 8 }, end: { line: 63, column: 9 } },
                                    ],
                                    line: 60,
                                },
                                3: {
                                    loc: { start: { line: 66, column: 19 }, end: { line: 66, column: 51 } },
                                    type: "binary-expr",
                                    locations: [
                                        { start: { line: 66, column: 19 }, end: { line: 66, column: 45 } },
                                        { start: { line: 66, column: 49 }, end: { line: 66, column: 51 } },
                                    ],
                                    line: 66,
                                },
                                4: {
                                    loc: { start: { line: 67, column: 23 }, end: { line: 67, column: 62 } },
                                    type: "binary-expr",
                                    locations: [
                                        { start: { line: 67, column: 23 }, end: { line: 67, column: 53 } },
                                        { start: { line: 67, column: 57 }, end: { line: 67, column: 62 } },
                                    ],
                                    line: 67,
                                },
                                5: {
                                    loc: { start: { line: 68, column: 20 }, end: { line: 68, column: 53 } },
                                    type: "binary-expr",
                                    locations: [
                                        { start: { line: 68, column: 20 }, end: { line: 68, column: 47 } },
                                        { start: { line: 68, column: 51 }, end: { line: 68, column: 53 } },
                                    ],
                                    line: 68,
                                },
                                6: {
                                    loc: { start: { line: 92, column: 31 }, end: { line: 92, column: 65 } },
                                    type: "binary-expr",
                                    locations: [
                                        { start: { line: 92, column: 31 }, end: { line: 92, column: 59 } },
                                        { start: { line: 92, column: 63 }, end: { line: 92, column: 65 } },
                                    ],
                                    line: 92,
                                },
                                7: {
                                    loc: { start: { line: 93, column: 12 }, end: { line: 95, column: 13 } },
                                    type: "if",
                                    locations: [
                                        { start: { line: 93, column: 12 }, end: { line: 95, column: 13 } },
                                        { start: { line: 93, column: 12 }, end: { line: 95, column: 13 } },
                                    ],
                                    line: 93,
                                },
                                8: {
                                    loc: { start: { line: 99, column: 29 }, end: { line: 99, column: 51 } },
                                    type: "binary-expr",
                                    locations: [
                                        { start: { line: 99, column: 29 }, end: { line: 99, column: 45 } },
                                        { start: { line: 99, column: 49 }, end: { line: 99, column: 51 } },
                                    ],
                                    line: 99,
                                },
                                9: {
                                    loc: { start: { line: 102, column: 32 }, end: { line: 102, column: 67 } },
                                    type: "binary-expr",
                                    locations: [
                                        { start: { line: 102, column: 32 }, end: { line: 102, column: 61 } },
                                        { start: { line: 102, column: 65 }, end: { line: 102, column: 67 } },
                                    ],
                                    line: 102,
                                },
                                10: {
                                    loc: { start: { line: 102, column: 33 }, end: { line: 102, column: 50 } },
                                    type: "binary-expr",
                                    locations: [
                                        { start: { line: 102, column: 33 }, end: { line: 102, column: 44 } },
                                        { start: { line: 102, column: 48 }, end: { line: 102, column: 50 } },
                                    ],
                                    line: 102,
                                },
                                11: {
                                    loc: { start: { line: 103, column: 16 }, end: { line: 105, column: 17 } },
                                    type: "if",
                                    locations: [
                                        { start: { line: 103, column: 16 }, end: { line: 105, column: 17 } },
                                        { start: { line: 103, column: 16 }, end: { line: 105, column: 17 } },
                                    ],
                                    line: 103,
                                },
                                12: {
                                    loc: { start: { line: 130, column: 8 }, end: { line: 133, column: 9 } },
                                    type: "if",
                                    locations: [
                                        { start: { line: 130, column: 8 }, end: { line: 133, column: 9 } },
                                        { start: { line: 130, column: 8 }, end: { line: 133, column: 9 } },
                                    ],
                                    line: 130,
                                },
                                13: {
                                    loc: { start: { line: 130, column: 12 }, end: { line: 130, column: 48 } },
                                    type: "binary-expr",
                                    locations: [
                                        { start: { line: 130, column: 12 }, end: { line: 130, column: 27 } },
                                        { start: { line: 130, column: 31 }, end: { line: 130, column: 48 } },
                                    ],
                                    line: 130,
                                },
                                14: {
                                    loc: { start: { line: 159, column: 26 }, end: { line: 159, column: 68 } },
                                    type: "cond-expr",
                                    locations: [
                                        { start: { line: 159, column: 46 }, end: { line: 159, column: 56 } },
                                        { start: { line: 159, column: 59 }, end: { line: 159, column: 68 } },
                                    ],
                                    line: 159,
                                },
                                15: {
                                    loc: { start: { line: 162, column: 12 }, end: { line: 164, column: 13 } },
                                    type: "if",
                                    locations: [
                                        { start: { line: 162, column: 12 }, end: { line: 164, column: 13 } },
                                        { start: { line: 162, column: 12 }, end: { line: 164, column: 13 } },
                                    ],
                                    line: 162,
                                },
                                16: {
                                    loc: { start: { line: 162, column: 16 }, end: { line: 162, column: 40 } },
                                    type: "binary-expr",
                                    locations: [
                                        { start: { line: 162, column: 16 }, end: { line: 162, column: 30 } },
                                        { start: { line: 162, column: 34 }, end: { line: 162, column: 40 } },
                                    ],
                                    line: 162,
                                },
                                17: {
                                    loc: { start: { line: 169, column: 12 }, end: { line: 183, column: 13 } },
                                    type: "if",
                                    locations: [
                                        { start: { line: 169, column: 12 }, end: { line: 183, column: 13 } },
                                        { start: { line: 169, column: 12 }, end: { line: 183, column: 13 } },
                                    ],
                                    line: 169,
                                },
                                18: {
                                    loc: { start: { line: 171, column: 16 }, end: { line: 176, column: 17 } },
                                    type: "if",
                                    locations: [
                                        { start: { line: 171, column: 16 }, end: { line: 176, column: 17 } },
                                        { start: { line: 171, column: 16 }, end: { line: 176, column: 17 } },
                                    ],
                                    line: 171,
                                },
                                19: {
                                    loc: { start: { line: 171, column: 20 }, end: { line: 171, column: 83 } },
                                    type: "binary-expr",
                                    locations: [
                                        { start: { line: 171, column: 20 }, end: { line: 171, column: 46 } },
                                        { start: { line: 171, column: 50 }, end: { line: 171, column: 83 } },
                                    ],
                                    line: 171,
                                },
                                20: {
                                    loc: { start: { line: 193, column: 26 }, end: { line: 193, column: 74 } },
                                    type: "binary-expr",
                                    locations: [
                                        { start: { line: 193, column: 26 }, end: { line: 193, column: 68 } },
                                        { start: { line: 193, column: 72 }, end: { line: 193, column: 74 } },
                                    ],
                                    line: 193,
                                },
                                21: {
                                    loc: { start: { line: 193, column: 27 }, end: { line: 193, column: 48 } },
                                    type: "binary-expr",
                                    locations: [
                                        { start: { line: 193, column: 27 }, end: { line: 193, column: 42 } },
                                        { start: { line: 193, column: 46 }, end: { line: 193, column: 48 } },
                                    ],
                                    line: 193,
                                },
                                22: {
                                    loc: { start: { line: 196, column: 12 }, end: { line: 204, column: 13 } },
                                    type: "if",
                                    locations: [
                                        { start: { line: 196, column: 12 }, end: { line: 204, column: 13 } },
                                        { start: { line: 196, column: 12 }, end: { line: 204, column: 13 } },
                                    ],
                                    line: 196,
                                },
                                23: {
                                    loc: { start: { line: 200, column: 20 }, end: { line: 202, column: 21 } },
                                    type: "if",
                                    locations: [
                                        { start: { line: 200, column: 20 }, end: { line: 202, column: 21 } },
                                        { start: { line: 200, column: 20 }, end: { line: 202, column: 21 } },
                                    ],
                                    line: 200,
                                },
                                24: {
                                    loc: { start: { line: 211, column: 8 }, end: { line: 236, column: 9 } },
                                    type: "if",
                                    locations: [
                                        { start: { line: 211, column: 8 }, end: { line: 236, column: 9 } },
                                        { start: { line: 211, column: 8 }, end: { line: 236, column: 9 } },
                                    ],
                                    line: 211,
                                },
                                25: {
                                    loc: { start: { line: 213, column: 16 }, end: { line: 234, column: 17 } },
                                    type: "if",
                                    locations: [
                                        { start: { line: 213, column: 16 }, end: { line: 234, column: 17 } },
                                        { start: { line: 213, column: 16 }, end: { line: 234, column: 17 } },
                                    ],
                                    line: 213,
                                },
                                26: {
                                    loc: { start: { line: 215, column: 24 }, end: { line: 232, column: 25 } },
                                    type: "if",
                                    locations: [
                                        { start: { line: 215, column: 24 }, end: { line: 232, column: 25 } },
                                        { start: { line: 215, column: 24 }, end: { line: 232, column: 25 } },
                                    ],
                                    line: 215,
                                },
                                27: {
                                    loc: { start: { line: 218, column: 28 }, end: { line: 231, column: 29 } },
                                    type: "if",
                                    locations: [
                                        { start: { line: 218, column: 28 }, end: { line: 231, column: 29 } },
                                        { start: { line: 218, column: 28 }, end: { line: 231, column: 29 } },
                                    ],
                                    line: 218,
                                },
                                28: {
                                    loc: { start: { line: 220, column: 32 }, end: { line: 225, column: 33 } },
                                    type: "if",
                                    locations: [
                                        { start: { line: 220, column: 32 }, end: { line: 225, column: 33 } },
                                        { start: { line: 220, column: 32 }, end: { line: 225, column: 33 } },
                                    ],
                                    line: 220,
                                },
                                29: {
                                    loc: { start: { line: 242, column: 8 }, end: { line: 261, column: 9 } },
                                    type: "if",
                                    locations: [
                                        { start: { line: 242, column: 8 }, end: { line: 261, column: 9 } },
                                        { start: { line: 242, column: 8 }, end: { line: 261, column: 9 } },
                                    ],
                                    line: 242,
                                },
                                30: {
                                    loc: { start: { line: 301, column: 8 }, end: { line: 302, column: 39 } },
                                    type: "if",
                                    locations: [
                                        { start: { line: 301, column: 8 }, end: { line: 302, column: 39 } },
                                        { start: { line: 301, column: 8 }, end: { line: 302, column: 39 } },
                                    ],
                                    line: 301,
                                },
                                31: {
                                    loc: { start: { line: 306, column: 8 }, end: { line: 311, column: 9 } },
                                    type: "if",
                                    locations: [
                                        { start: { line: 306, column: 8 }, end: { line: 311, column: 9 } },
                                        { start: { line: 306, column: 8 }, end: { line: 311, column: 9 } },
                                    ],
                                    line: 306,
                                },
                            },
                            s: {
                                0: 0,
                                1: 0,
                                2: 0,
                                3: 0,
                                4: 0,
                                5: 0,
                                6: 0,
                                7: 0,
                                8: 0,
                                9: 0,
                                10: 0,
                                11: 0,
                                12: 0,
                                13: 0,
                                14: 0,
                                15: 0,
                                16: 0,
                                17: 0,
                                18: 0,
                                19: 0,
                                20: 0,
                                21: 0,
                                22: 0,
                                23: 0,
                                24: 0,
                                25: 0,
                                26: 0,
                                27: 0,
                                28: 0,
                                29: 0,
                                30: 0,
                                31: 0,
                                32: 0,
                                33: 0,
                                34: 0,
                                35: 0,
                                36: 0,
                                37: 0,
                                38: 0,
                                39: 0,
                                40: 0,
                                41: 0,
                                42: 0,
                                43: 0,
                                44: 0,
                                45: 0,
                                46: 0,
                                47: 0,
                                48: 0,
                                49: 0,
                                50: 0,
                                51: 0,
                                52: 0,
                                53: 0,
                                54: 0,
                                55: 0,
                                56: 0,
                                57: 0,
                                58: 0,
                                59: 0,
                                60: 0,
                                61: 0,
                                62: 0,
                                63: 0,
                                64: 0,
                                65: 0,
                                66: 0,
                                67: 0,
                                68: 0,
                                69: 0,
                                70: 0,
                                71: 0,
                                72: 0,
                                73: 0,
                                74: 0,
                                75: 0,
                                76: 0,
                                77: 0,
                                78: 0,
                                79: 0,
                                80: 0,
                                81: 0,
                                82: 0,
                                83: 0,
                                84: 0,
                                85: 0,
                                86: 0,
                                87: 0,
                                88: 0,
                                89: 0,
                                90: 0,
                                91: 0,
                                92: 0,
                                93: 0,
                                94: 0,
                                95: 0,
                                96: 0,
                                97: 0,
                                98: 0,
                                99: 0,
                                100: 0,
                                101: 0,
                                102: 0,
                                103: 0,
                                104: 0,
                                105: 0,
                                106: 0,
                                107: 0,
                                108: 0,
                                109: 0,
                                110: 0,
                                111: 0,
                                112: 0,
                                113: 0,
                                114: 0,
                                115: 0,
                                116: 0,
                                117: 0,
                                118: 0,
                                119: 0,
                                120: 0,
                                121: 0,
                                122: 0,
                                123: 0,
                                124: 0,
                                125: 0,
                                126: 0,
                                127: 0,
                                128: 0,
                                129: 0,
                                130: 0,
                                131: 0,
                                132: 0,
                                133: 0,
                                134: 0,
                                135: 0,
                                136: 0,
                                137: 0,
                                138: 0,
                                139: 0,
                                140: 0,
                                141: 0,
                                142: 0,
                                143: 0,
                                144: 0,
                                145: 0,
                                146: 0,
                                147: 0,
                                148: 0,
                                149: 0,
                                150: 0,
                                151: 0,
                            },
                            f: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0, 13: 0, 14: 0, 15: 0, 16: 0, 17: 0, 18: 0, 19: 0 },
                            b: {
                                0: [0, 0],
                                1: [0, 0],
                                2: [0, 0],
                                3: [0, 0],
                                4: [0, 0],
                                5: [0, 0],
                                6: [0, 0],
                                7: [0, 0],
                                8: [0, 0],
                                9: [0, 0],
                                10: [0, 0],
                                11: [0, 0],
                                12: [0, 0],
                                13: [0, 0],
                                14: [0, 0],
                                15: [0, 0],
                                16: [0, 0],
                                17: [0, 0],
                                18: [0, 0],
                                19: [0, 0],
                                20: [0, 0],
                                21: [0, 0],
                                22: [0, 0],
                                23: [0, 0],
                                24: [0, 0],
                                25: [0, 0],
                                26: [0, 0],
                                27: [0, 0],
                                28: [0, 0],
                                29: [0, 0],
                                30: [0, 0],
                                31: [0, 0],
                            },
                            inputSourceMap: {
                                version: 3,
                                file: "/Users/apple/Projects/Package/Setmore-easyshare/src/components/hoc/service-wrapper.ts",
                                sourceRoot: "",
                                sources: ["/Users/apple/Projects/Package/Setmore-easyshare/src/components/hoc/service-wrapper.ts"],
                                names: [],
                                mappings:
                                    "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",
                                sourcesContent: [
                                    'import { MeetingCard, StaffCard } from "../molecules/index";\nimport { button } from "../atom/button/index";\nimport { AlertInfo, Toaster } from "../atom/alert/index";\nimport { BtnTooltip } from "../atom/tooltip/index";\nimport assets from "../../utils/assets";\nimport { setProperties, sortArrayOfJson, copyToClipboard, _fixCategories, countOfCards } from "../../utils/common";\nimport { avatar } from "../atom/avatar/index";\nimport { GET } from "../../utils/http";\nimport { endpoints } from "../../config/api";\nimport { ApiConfig } from "../../config/api-config";\nimport * as styles from "../../styles/compiled/index.css";\n\n/////////////////////////////////////////////////////////////////////////////////////////////////\n////////////////////////// User meeting card class to render one card ///////////////////////////\n/////////////////////////////////////////////////////////////////////////////////////////////////\nexport default class ServiceWrapper extends HTMLElement {\n    isBooking: boolean;\n    data: any;\n    timeout: any;\n    filteredServices: any;\n    apiConfig: ApiConfig;\n    init = false;\n\n    static get observedAttributes() {\n        return ["class"];\n    }\n\n    constructor() {\n        super();\n        this.apiConfig = ApiConfig._instance;\n        this.attachShadow({ mode: "open" });\n        const styleEle = document.createElement(\'style\');\n        const fonts = document.createElement(\'link\');\n        fonts.setAttribute("rel", "stylesheet");\n        fonts.setAttribute("href", "https://use.typekit.net/jxr4jlj.css");\n        styleEle.innerHTML = `${styles["default"][0][1]}`;\n        this.appendChild(fonts);\n        this.shadowRoot.appendChild(styleEle);\n        this.isBooking = Boolean(this.getAttribute("myBooking"));\n        this.ack = this.ack.bind(this);\n    }\n\n    /////////////////////////////////////////////////////////////////////////////////////////////\n    //////////////////////// Default lifecycle method to responsible to render data /////////////\n    /////////////////////////////////////////////////////////////////////////////////////////////\n    connectedCallback() {\n        // Apply the stylesheet to a document:\n        const config = ApiConfig._instance;\n        this.render(config);\n    }\n\n    disconnectedCallback() {\n        console.log("easyshare webcomponent disconnected");\n    }\n\n    attributeChangedCallback(name, oldValue, newValue) {\n        if (oldValue !== newValue && this.init) {\n            const config = ApiConfig._instance;\n            this.shadowRoot.querySelectorAll(".container").forEach(_child => this.shadowRoot.removeChild(_child));\n            this.render(config);\n        } else {\n            this.init = true;\n        }\n    }\n\n    /////////////////////////////////////////////////////////////////////////////////////////////\n    //////////////////////// Get data form api using load file to get headers ///////////////////\n    /////////////////////////////////////////////////////////////////////////////////////////////\n    async getData(config: ApiConfig) {\n        const merchandId = this.getAttribute("merchandId");\n        if (!merchandId) {\n            this.ack("MerchandId required!");\n            throw new Error("MerchandId required!");\n        }\n\n        const queryobj = {\n            merchantId: this.getAttribute("merchandId"),\n            limit: this.getAttribute("limit") || 50,\n            isDeleted: this.getAttribute("isDeleted") || false,\n            cursor: this.getAttribute("cursor") || "",\n        }\n\n        // const sericesApiUrl = `${config.baseUrl}${endpoints.services}?q=${queryString}`;\n        const sericesApiUrl = `${config.baseUrl}${endpoints._services}?merchantId=${queryobj.merchantId}`;\n        const categoriesUrl = `${config.baseUrl}${endpoints._categories}?merchantId=${queryobj.merchantId}`;\n\n        const all = Promise.all([\n            GET(sericesApiUrl, config.headers),\n            GET(categoriesUrl, config.headers),\n            // GET(endpoints.staff + "?cursor=0&size=100", config.headers)\n        ]);\n\n        // const [_services, _categories, _staff]: any = await all;\n        const [_services, _categories]: any = await all;\n        return {\n            _services, _categories,\n            // _staff\n        };\n    }\n\n    /////////////////////////////////////////////////////////////////////////////////////////////\n    ////////////////////////////// Filter providers  ////////////////////////////////////////////\n    /////////////////////////////////////////////////////////////////////////////////////////////\n    filterProviders(_services, _staff, config: any) {\n        const filteredServices = {};\n\n        // Old one\n        // for (const service of (_services.data.services || [])) {\n\n        // New one\n        // let categories = [];\n        for (const service of (_services.data.scheduleTypes || [])) {\n            if (!(service.scheduleType in filteredServices)) {\n                filteredServices[service.scheduleType] = [];\n            }\n            filteredServices[service.scheduleType].push(service);\n\n\n            // const categoryDetail = `${config.baseUrl}${endpoints._categoryDetail}/`;\n            // await getCategories(categoryDetail, config.headers, service, categories)\n\n            const provider = service.provider || [];\n            const filteredProviders = [];\n            for (const _p of provider) {\n                const _index = ((_staff.data || {}).staffList || []).findIndex(_m => _m.key === _p)\n                if (_index > -1) {\n                    filteredProviders.push(_staff.data.staffList[_index]);\n                }\n            }\n            service.provider = [...filteredProviders];\n        }\n        this.filteredServices = filteredServices;\n    }\n\n    /////////////////////////////////////////////////////////////////////////////////////////////\n    //////////////////////////// Get category details page //////////////////////////////////////\n    /////////////////////////////////////////////////////////////////////////////////////////////\n    async getCategories(url, headers, service, categories) {\n        for (let index = 0; index < service.category; index++) {\n            // let category = await GET(`${url}/${service.category[index]}`, headers);\n        }\n    }\n\n    /////////////////////////////////////////////////////////////////////////////////////////////\n    //////////////////////////// Render service data ////////////////////////////////////////////\n    /////////////////////////////////////////////////////////////////////////////////////////////\n    async render(config: ApiConfig) {\n        const { _services, _categories,\n            // _staff\n        }: any = await this.getData(config);\n\n        // Old one\n        // if (!_services.response || !_categories.response || !_staff.response) {\n        //     this.ack(_services.msg || _categories.msg || _staff.msg);\n        //     throw new Error(_services.msg || _categories.msg || _staff.msg);\n        // }\n\n        // New one\n        if (!_services.data || !_categories.data) {\n            this.ack(_services.msg);\n            throw new Error(_services.msg);\n        }\n        // Old one Comment this one for new API\'s as there is not staff API for now\n        // this.filterProviders(_services, _staff);\n        // let categories = [];\n        // for (let i = 0; i < _services.data.scheduleTypes.length; i++) {\n        //     let category = _services.data.scheduleTypes[i].category;\n        //     for (let ci = 0; ci < category.length; ci++) {\n        //         let _c = category[ci];\n        //         let _in = categories.findIndex(_cat => _cat.id === _c);\n        //         if (_in < 0) {\n        //             let c: any = await GET(`${config.baseUrl}${endpoints._categoryDetail}/${_c}`, config.headers);\n        //             categories.push(c.data);\n        //         }\n        //     }\n        // }\n        console.log("_services==>1 ", _categories.data);\n        this.filterProviders(_services, [], config);\n\n        const keys = _fixCategories;\n        let count = 0;\n        const container = document.createElement("div");\n        container.setAttribute("class", "container");\n\n        for (const key of keys) {\n            const root = document.createElement("div");\n            const _title = document.createElement("div");\n            _title.setAttribute("class", "services-text");\n            root.setAttribute("class", "root");\n\n            const title = key === "SERVICE" ? "Services" : "Classes";\n            setProperties({ tag: "h2", innerText: title, appendWidh: _title });\n            setProperties({ tag: "div", class: "my-booking", appendWidh: _title })\n\n            if (this.isBooking && !count) {\n                this.renderCopy(_title, config.baseUrl);\n            }\n            count++;\n            root.appendChild(_title);\n            container.appendChild(root);\n            this.appendChild(container);\n\n            if (this.filteredServices[key]) {\n                const groups = {};\n                if (this.filteredServices[key] && this.filteredServices[key].length) {\n                    this.groupby(groups, this.filteredServices[key], _categories, key);\n\n                    // New one\n                    // this.groupby(groups, this.filteredServices[key], {}, key);\n                    this.renderGroup(groups, root);\n                }\n            }\n            else {\n                const alertInfoMessage = AlertInfo({\n                    message: `You don\'t have any ${title.toLowerCase()} yet. `,\n                    // linkText: "Click here to add new service.",\n                    // href: \'https://google.com\',\n                    // linkTarget: \'_blank\',\n                });\n                root.appendChild(alertInfoMessage);\n            }\n        }\n        // this.renderStaff(_staff, container);\n        this.shadowRoot.appendChild(container);\n    }\n\n    /////////////////////////////////////////////////////////////////////////////////////////////\n    ////////////////////// Distribute service data in groups ////////////////////////////////////\n    /////////////////////////////////////////////////////////////////////////////////////////////\n    groupby(group: any, services: any, categories: any, type: any) {\n        group[type] = {};\n        let _categories: any = (categories.data || {}).scheduleCategories || [];\n        _categories = sortArrayOfJson(_categories);\n\n        for (const cat of _categories) {\n            if (type === cat.categoryType) {\n                group[type][cat.title] = [];\n\n                for (const _service of services) {\n                    const index = _service.category.findIndex((_id: string) => _id === cat.id);\n                    if (index > -1) {\n                        group[type][cat.title].push(_service);\n                    }\n                }\n            }\n        }\n    }\n\n    /////////////////////////////////////////////////////////////////////////////////////////////\n    ////////////////////// Render groups data ///////////////////////////////////////////////////\n    /////////////////////////////////////////////////////////////////////////////////////////////\n    renderGroup(groups: any, root: any) {\n        if (groups) {\n            for (const _g in groups) {\n                if (groups[_g]) {\n                    for (const _categoryName in groups[_g]) {\n                        if (groups[_g][_categoryName]) {\n                            const cardWrapper = document.createElement("div") as HTMLElement;\n                            cardWrapper.setAttribute("class", "card-section");\n                            if (groups[_g][_categoryName].length) {\n                                // if (groups[_categoryName].length) {\n\n                                if (countOfCards(groups[_g]) > 1) {\n                                    const _subTitle = document.createElement("div");\n                                    _subTitle.setAttribute("class", "cat-name");\n                                    _subTitle.innerText = _categoryName;\n                                    root.appendChild(_subTitle);\n                                }\n                                for (const card of groups[_g][_categoryName]) {\n                                    const meetingCardEle = new MeetingCard({ ...card, ack: this.ack });\n                                    cardWrapper.appendChild(meetingCardEle.meeting);\n                                }\n                                root.appendChild(cardWrapper);\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n\n\n    /////////////////////////////////////////////////////////////////////////////////////////////\n    ////////////////////// Render service staff data ////////////////////////////////////////////\n    /////////////////////////////////////////////////////////////////////////////////////////////\n    renderStaff(_staff: any, container: any) {\n        if (_staff) {\n            const _staffTitle = document.createElement("div");\n            _staffTitle.setAttribute("class", "services-text");\n\n            const staffRoot = document.createElement("div");\n            staffRoot.setAttribute("class", "root");\n\n            const staffTitle = "Staff";\n            setProperties({ tag: "h2", innerText: staffTitle, appendWidh: _staffTitle });\n            setProperties({ tag: "div", class: "my-booking", appendWidh: _staffTitle });\n\n            staffRoot.appendChild(_staffTitle);\n            container.appendChild(staffRoot);\n            this.appendChild(container);\n\n            const staffCards = _staff.data.staffList;\n            const cardWrapper = document.createElement("div") as HTMLElement;\n            cardWrapper.setAttribute("class", "card-section staff-section");\n\n            for (const card of staffCards) {\n                const staffcardEle = new StaffCard({ ...card, ack: this.ack });\n                cardWrapper.appendChild(staffcardEle.staff);\n            }\n            staffRoot.appendChild(cardWrapper);\n        }\n    }\n\n    /////////////////////////////////////////////////////////////////////////////////////////////\n    /////////////////////////////// Render copy btn /////////////////////////////////////////////\n    /////////////////////////////////////////////////////////////////////////////////////////////\n    renderCopy(parent, baseUrl) {\n        const merchandId = this.getAttribute("merchandId");\n        console.log("merchandId: ", merchandId);\n        const myBookingPageUrl = `${baseUrl}/bookingpage/${merchandId}`;\n        setProperties({\n            tag: "a",\n            appendWidh: parent.lastChild,\n            innerText: "My Booking Page",\n            attributes: [\n                { name: \'href\', value: myBookingPageUrl },\n                { name: \'target\', value: \'_Blank\' }]\n        });\n        const copyBtn = button({});\n        copyBtn.addEventListener(\'click\', () => {\n            copyToClipboard(myBookingPageUrl);\n            this.ack(null, `Link copied successfully!`);\n        });\n        const copyIcon = avatar({ src: assets.copyIcon });\n        const toolTip = BtnTooltip({ label: "Copy Link" });\n        copyBtn.appendChild(copyIcon);\n        copyBtn.appendChild(toolTip);\n        parent.lastChild.appendChild(copyBtn);\n    }\n\n\n    /////////////////////////////////////////////////////////////////////////////////////////////\n    /////////////////////////////// Set add button to our wrapper ///////////////////////////////\n    /////////////////////////////////////////////////////////////////////////////////////////////\n    setAddButton(Wrapper: HTMLElement) {\n        const btn = button({ label: "+", class: "add-button" });\n        Wrapper.appendChild(btn);\n    }\n\n    /////////////////////////////////////////////////////////////////////////////////////////////\n    /////////////////////////////// Set Snackbar toast to page //////////////////////////////////\n    /////////////////////////////////////////////////////////////////////////////////////////////\n    ack(error?: string, success?: string) {\n        if (this.timeout)\n            clearTimeout(this.timeout);\n\n        for (const _d of this.shadowRoot.querySelectorAll(".toast-wrapper")) {\n            this.shadowRoot.removeChild(_d);\n        }\n        if (error) {\n            this.shadowRoot.insertBefore(\n                Toaster({ icon: assets.toastError, toastClass: "toast-error", message: error }),\n                this.shadowRoot.firstChild\n            );\n        } else {\n            this.shadowRoot.insertBefore(Toaster({ message: success }), this.shadowRoot.firstChild);\n        }\n        this.timeout = setTimeout(() => {\n            for (const _d of this.shadowRoot.querySelectorAll(".toast-wrapper")) {\n                this.shadowRoot.removeChild(_d);\n            }\n            clearTimeout(this.timeout);\n        }, 3000)\n    }\n}\n',
                                ],
                            },
                            _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c",
                        },
                        l = e[t] || (e[t] = {});
                    return l[A] && l[A].hash === n ? l[A] : ((o.hash = n), (l[A] = o));
                })();
            class W extends HTMLElement {
                constructor() {
                    w.f[0]++, w.s[0]++, super(), w.s[1]++, (this.init = !1), w.s[2]++, (this.apiConfig = C._instance), w.s[3]++, this.attachShadow({ mode: "open" });
                    const A = (w.s[4]++, document.createElement("style")),
                        n = (w.s[5]++, document.createElement("link"));
                    w.s[6]++,
                        n.setAttribute("rel", "stylesheet"),
                        w.s[7]++,
                        n.setAttribute("href", "https://use.typekit.net/jxr4jlj.css"),
                        w.s[8]++,
                        (A.innerHTML = `${U.Z[0][1]}`),
                        w.s[9]++,
                        this.appendChild(n),
                        w.s[10]++,
                        this.shadowRoot.appendChild(A),
                        w.s[11]++,
                        (this.isBooking = Boolean(this.getAttribute("myBooking"))),
                        w.s[12]++,
                        (this.ack = this.ack.bind(this));
                }
                static get observedAttributes() {
                    return w.f[1]++, w.s[13]++, ["class"];
                }
                connectedCallback() {
                    w.f[2]++;
                    const A = (w.s[14]++, C._instance);
                    w.s[15]++, this.render(A);
                }
                disconnectedCallback() {
                    w.f[3]++, w.s[16]++, console.log("easyshare webcomponent disconnected");
                }
                attributeChangedCallback(A, n, e) {
                    if ((w.f[4]++, w.s[17]++, w.b[1][0]++, n !== e && (w.b[1][1]++, this.init))) {
                        w.b[0][0]++;
                        const A = (w.s[18]++, C._instance);
                        w.s[19]++, this.shadowRoot.querySelectorAll(".container").forEach((A) => (w.f[5]++, w.s[20]++, this.shadowRoot.removeChild(A))), w.s[21]++, this.render(A);
                    } else w.b[0][1]++, w.s[22]++, (this.init = !0);
                }
                async getData(A) {
                    w.f[6]++;
                    const n = (w.s[23]++, this.getAttribute("merchandId"));
                    if ((w.s[24]++, !n)) throw (w.b[2][0]++, w.s[25]++, this.ack("MerchandId required!"), w.s[26]++, new Error("MerchandId required!"));
                    w.b[2][1]++;
                    const e =
                        (w.s[27]++,
                        {
                            merchantId: this.getAttribute("merchandId"),
                            limit: (w.b[3][0]++, this.getAttribute("limit") || (w.b[3][1]++, 50)),
                            isDeleted: (w.b[4][0]++, this.getAttribute("isDeleted") || (w.b[4][1]++, !1)),
                            cursor: (w.b[5][0]++, this.getAttribute("cursor") || (w.b[5][1]++, "")),
                        }),
                        t = (w.s[28]++, `${A.baseUrl}${F._services}?merchantId=${e.merchantId}`),
                        o = (w.s[29]++, `${A.baseUrl}${F._categories}?merchantId=${e.merchantId}`),
                        l = (w.s[30]++, Promise.all([k(t, A.headers), k(o, A.headers)])),
                        [s, C] = (w.s[31]++, await l);
                    return w.s[32]++, { _services: s, _categories: C };
                }
                filterProviders(A, n, e) {
                    w.f[7]++;
                    const t = (w.s[33]++, {});
                    w.s[34]++;
                    for (const e of (w.b[6][0]++, A.data.scheduleTypes || (w.b[6][1]++, []))) {
                        w.s[35]++, e.scheduleType in t ? w.b[7][1]++ : (w.b[7][0]++, w.s[36]++, (t[e.scheduleType] = [])), w.s[37]++, t[e.scheduleType].push(e);
                        const A = (w.s[38]++, w.b[8][0]++, e.provider || (w.b[8][1]++, [])),
                            o = (w.s[39]++, []);
                        w.s[40]++;
                        for (const e of A) {
                            const A = (w.s[41]++, (w.b[9][0]++, (w.b[10][0]++, n.data || (w.b[10][1]++, {})).staffList || (w.b[9][1]++, [])).findIndex((A) => (w.f[8]++, w.s[42]++, A.key === e)));
                            w.s[43]++, A > -1 ? (w.b[11][0]++, w.s[44]++, o.push(n.data.staffList[A])) : w.b[11][1]++;
                        }
                        w.s[45]++, (e.provider = [...o]);
                    }
                    w.s[46]++, (this.filteredServices = t);
                }
                async getCategories(A, n, e, t) {
                    w.f[9]++, w.s[47]++;
                    for (let A = 0; A < e.category; A++);
                }
                async render(A) {
                    w.f[10]++;
                    const { _services: n, _categories: e } = (w.s[48]++, await this.getData(A));
                    if ((w.s[49]++, w.b[13][0]++, !n.data || (w.b[13][1]++, !e.data))) throw (w.b[12][0]++, w.s[50]++, this.ack(n.msg), w.s[51]++, new Error(n.msg));
                    w.b[12][1]++, w.s[52]++, console.log("_services==>1 ", e.data), w.s[53]++, this.filterProviders(n, [], A);
                    const t = (w.s[54]++, I);
                    let o = (w.s[55]++, 0);
                    const l = (w.s[56]++, document.createElement("div"));
                    w.s[57]++, l.setAttribute("class", "container"), w.s[58]++;
                    for (const n of t) {
                        const t = (w.s[59]++, document.createElement("div")),
                            s = (w.s[60]++, document.createElement("div"));
                        w.s[61]++, s.setAttribute("class", "services-text"), w.s[62]++, t.setAttribute("class", "root");
                        const C = (w.s[63]++, "SERVICE" === n ? (w.b[14][0]++, "Services") : (w.b[14][1]++, "Classes"));
                        if (
                            (w.s[64]++,
                                E({ tag: "h2", innerText: C, appendWidh: s }),
                                w.s[65]++,
                                E({ tag: "div", class: "my-booking", appendWidh: s }),
                                w.s[66]++,
                                w.b[16][0]++,
                                this.isBooking && (w.b[16][1]++, !o) ? (w.b[15][0]++, w.s[67]++, this.renderCopy(s, A.baseUrl)) : w.b[15][1]++,
                                w.s[68]++,
                                o++,
                                w.s[69]++,
                                t.appendChild(s),
                                w.s[70]++,
                                l.appendChild(t),
                                w.s[71]++,
                                this.appendChild(l),
                                w.s[72]++,
                                this.filteredServices[n])
                        ) {
                            w.b[17][0]++;
                            const A = (w.s[73]++, {});
                            w.s[74]++,
                                w.b[19][0]++,
                                this.filteredServices[n] && (w.b[19][1]++, this.filteredServices[n].length) ? (w.b[18][0]++, w.s[75]++, this.groupby(A, this.filteredServices[n], e, n), w.s[76]++, this.renderGroup(A, t)) : w.b[18][1]++;
                        } else {
                            w.b[17][1]++;
                            const A = (w.s[77]++, K({ message: `You don't have any ${C.toLowerCase()} yet. ` }));
                            w.s[78]++, t.appendChild(A);
                        }
                    }
                    w.s[79]++, this.shadowRoot.appendChild(l);
                }
                groupby(A, n, e, t) {
                    w.f[11]++, w.s[80]++, (A[t] = {});
                    let o = (w.s[81]++, w.b[20][0]++, (w.b[21][0]++, e.data || (w.b[21][1]++, {})).scheduleCategories || (w.b[20][1]++, []));
                    var l;
                    w.s[82]++, (l = o), p.f[5]++, p.s[35]++, (o = l.sort((A, n) => (p.f[6]++, p.s[36]++, A.createdTime - n.createdTime))), w.s[83]++;
                    for (const e of o)
                        if ((w.s[84]++, t === e.categoryType)) {
                            w.b[22][0]++, w.s[85]++, (A[t][e.title] = []), w.s[86]++;
                            for (const o of n) {
                                const n = (w.s[87]++, o.category.findIndex((A) => (w.f[12]++, w.s[88]++, A === e.id)));
                                w.s[89]++, n > -1 ? (w.b[23][0]++, w.s[90]++, A[t][e.title].push(o)) : w.b[23][1]++;
                            }
                        } else w.b[22][1]++;
                }
                renderGroup(A, n) {
                    if ((w.f[13]++, w.s[91]++, A)) {
                        w.b[24][0]++, w.s[92]++;
                        for (const e in A)
                            if ((w.s[93]++, A[e])) {
                                w.b[25][0]++, w.s[94]++;
                                for (const t in A[e])
                                    if ((w.s[95]++, A[e][t])) {
                                        w.b[26][0]++;
                                        const o = (w.s[96]++, document.createElement("div"));
                                        if ((w.s[97]++, o.setAttribute("class", "card-section"), w.s[98]++, A[e][t].length)) {
                                            if ((w.b[27][0]++, w.s[99]++, f(A[e]) > 1)) {
                                                w.b[28][0]++;
                                                const A = (w.s[100]++, document.createElement("div"));
                                                w.s[101]++, A.setAttribute("class", "cat-name"), w.s[102]++, (A.innerText = t), w.s[103]++, n.appendChild(A);
                                            } else w.b[28][1]++;
                                            w.s[104]++;
                                            for (const n of A[e][t]) {
                                                const A = (w.s[105]++, new M({ ...n, ack: this.ack }));
                                                w.s[106]++, o.appendChild(A.meeting);
                                            }
                                            w.s[107]++, n.appendChild(o);
                                        } else w.b[27][1]++;
                                    } else w.b[26][1]++;
                            } else w.b[25][1]++;
                    } else w.b[24][1]++;
                }
                renderStaff(A, n) {
                    if ((w.f[14]++, w.s[108]++, A)) {
                        w.b[29][0]++;
                        const e = (w.s[109]++, document.createElement("div"));
                        w.s[110]++, e.setAttribute("class", "services-text");
                        const t = (w.s[111]++, document.createElement("div"));
                        w.s[112]++, t.setAttribute("class", "root");
                        const o = (w.s[113]++, "Staff");
                        w.s[114]++,
                            E({ tag: "h2", innerText: o, appendWidh: e }),
                            w.s[115]++,
                            E({ tag: "div", class: "my-booking", appendWidh: e }),
                            w.s[116]++,
                            t.appendChild(e),
                            w.s[117]++,
                            n.appendChild(t),
                            w.s[118]++,
                            this.appendChild(n);
                        const l = (w.s[119]++, A.data.staffList),
                            s = (w.s[120]++, document.createElement("div"));
                        w.s[121]++, s.setAttribute("class", "card-section staff-section"), w.s[122]++;
                        for (const A of l) {
                            const n = (w.s[123]++, new y({ ...A, ack: this.ack }));
                            w.s[124]++, s.appendChild(n.staff);
                        }
                        w.s[125]++, t.appendChild(s);
                    } else w.b[29][1]++;
                }
                renderCopy(A, n) {
                    w.f[15]++;
                    const e = (w.s[126]++, this.getAttribute("merchandId"));
                    w.s[127]++, console.log("merchandId: ", e);
                    const t = (w.s[128]++, `${n}/bookingpage/${e}`);
                    w.s[129]++,
                        E({
                            tag: "a",
                            appendWidh: A.lastChild,
                            innerText: "My Booking Page",
                            attributes: [
                                { name: "href", value: t },
                                { name: "target", value: "_Blank" },
                            ],
                        });
                    const o = (w.s[130]++, c({}));
                    w.s[131]++,
                        o.addEventListener("click", () => {
                            w.f[16]++, w.s[132]++, h(t), w.s[133]++, this.ack(null, "Link copied successfully!");
                        });
                    const l = (w.s[134]++, d({ src: "https://storage.googleapis.com/setmore-assets/2.0/Images/EasyShare/copy_icon.png" })),
                        s =
                            (w.s[135]++,
                                ((A) => {
                                    x.f[1]++;
                                    const n =
                                        (x.s[4]++,
                                            ((A) => {
                                                x.f[0]++;
                                                const n = (x.s[1]++, document.createElement("template"));
                                                return x.s[2]++, (n.innerHTML = `\n        <div class="${(x.b[0][0]++, A.class || (x.b[0][1]++, "tooltip"))}">\n            <p>${A.label}<i></i></p>\n        </div>\n        `), x.s[3]++, n;
                                            })(A));
                                    return x.s[5]++, n.content.cloneNode(!0);
                                })({ label: "Copy Link" }));
                    w.s[136]++, o.appendChild(l), w.s[137]++, o.appendChild(s), w.s[138]++, A.lastChild.appendChild(o);
                }
                setAddButton(A) {
                    w.f[17]++;
                    const n = (w.s[139]++, c({ label: "+", class: "add-button" }));
                    w.s[140]++, A.appendChild(n);
                }
                ack(A, n) {
                    w.f[18]++, w.s[141]++, this.timeout ? (w.b[30][0]++, w.s[142]++, clearTimeout(this.timeout)) : w.b[30][1]++, w.s[143]++;
                    for (const A of this.shadowRoot.querySelectorAll(".toast-wrapper")) w.s[144]++, this.shadowRoot.removeChild(A);
                    w.s[145]++,
                        A
                            ? (w.b[31][0]++,
                                w.s[146]++,
                                this.shadowRoot.insertBefore(S({ icon: "https://storage.googleapis.com/setmore-assets/2.0/Images/EasyShare/info_icon.svg", toastClass: "toast-error", message: A }), this.shadowRoot.firstChild))
                            : (w.b[31][1]++, w.s[147]++, this.shadowRoot.insertBefore(S({ message: n }), this.shadowRoot.firstChild)),
                        w.s[148]++,
                        (this.timeout = setTimeout(() => {
                            w.f[19]++, w.s[149]++;
                            for (const A of this.shadowRoot.querySelectorAll(".toast-wrapper")) w.s[150]++, this.shadowRoot.removeChild(A);
                            w.s[151]++, clearTimeout(this.timeout);
                        }, 3e3));
                }
            }
            var Y = (function () {
                var A = "/Users/apple/Projects/Package/Setmore-easyshare/src/components/hoc/toast-wrapper.ts",
                    n = "deb2f0f38fd5ca7046aafa73fcd5e012f66ca196",
                    e = new (0, function () { }.constructor)("return this")(),
                    t = "__coverage__",
                    o = {
                        path: "/Users/apple/Projects/Package/Setmore-easyshare/src/components/hoc/toast-wrapper.ts",
                        statementMap: {
                            0: { start: { line: 8, column: 8 }, end: { line: 8, column: 16 } },
                            1: { start: { line: 9, column: 8 }, end: { line: 9, column: 51 } },
                            2: { start: { line: 10, column: 8 }, end: { line: 10, column: 52 } },
                            3: { start: { line: 11, column: 8 }, end: { line: 11, column: 50 } },
                            4: { start: { line: 12, column: 8 }, end: { line: 12, column: 52 } },
                            5: { start: { line: 13, column: 8 }, end: { line: 13, column: 48 } },
                            6: { start: { line: 14, column: 8 }, end: { line: 14, column: 74 } },
                            7: { start: { line: 15, column: 8 }, end: { line: 15, column: 66 } },
                            8: { start: { line: 16, column: 8 }, end: { line: 16, column: 58 } },
                            9: { start: { line: 17, column: 8 }, end: { line: 17, column: 52 } },
                            10: { start: { line: 23, column: 8 }, end: { line: 23, column: 22 } },
                            11: { start: { line: 26, column: 8 }, end: { line: 26, column: 22 } },
                            12: { start: { line: 29, column: 21 }, end: { line: 29, column: 78 } },
                            13: { start: { line: 30, column: 24 }, end: { line: 30, column: 54 } },
                            14: { start: { line: 31, column: 8 }, end: { line: 31, column: 47 } },
                            15: { start: { line: 32, column: 8 }, end: { line: 34, column: 9 } },
                            16: { start: { line: 33, column: 12 }, end: { line: 33, column: 88 } },
                            17: { start: { line: 35, column: 8 }, end: { line: 37, column: 9 } },
                            18: { start: { line: 36, column: 12 }, end: { line: 36, column: 63 } },
                            19: { start: { line: 38, column: 8 }, end: { line: 40, column: 9 } },
                            20: { start: { line: 39, column: 12 }, end: { line: 39, column: 89 } },
                            21: { start: { line: 41, column: 8 }, end: { line: 41, column: 37 } },
                            22: { start: { line: 42, column: 8 }, end: { line: 42, column: 40 } },
                            23: { start: { line: 43, column: 8 }, end: { line: 43, column: 37 } },
                        },
                        fnMap: {
                            0: { name: "(anonymous_0)", decl: { start: { line: 7, column: 4 }, end: { line: 7, column: 5 } }, loc: { start: { line: 7, column: 18 }, end: { line: 18, column: 5 } }, line: 7 },
                            1: { name: "(anonymous_1)", decl: { start: { line: 22, column: 4 }, end: { line: 22, column: 5 } }, loc: { start: { line: 22, column: 24 }, end: { line: 24, column: 5 } }, line: 22 },
                            2: { name: "(anonymous_2)", decl: { start: { line: 25, column: 4 }, end: { line: 25, column: 5 } }, loc: { start: { line: 25, column: 31 }, end: { line: 27, column: 5 } }, line: 25 },
                            3: { name: "(anonymous_3)", decl: { start: { line: 28, column: 4 }, end: { line: 28, column: 5 } }, loc: { start: { line: 28, column: 13 }, end: { line: 44, column: 5 } }, line: 28 },
                        },
                        branchMap: {
                            0: {
                                loc: { start: { line: 29, column: 35 }, end: { line: 29, column: 75 } },
                                type: "binary-expr",
                                locations: [
                                    { start: { line: 29, column: 35 }, end: { line: 29, column: 52 } },
                                    { start: { line: 29, column: 56 }, end: { line: 29, column: 75 } },
                                ],
                                line: 29,
                            },
                            1: {
                                loc: { start: { line: 31, column: 28 }, end: { line: 31, column: 46 } },
                                type: "binary-expr",
                                locations: [
                                    { start: { line: 31, column: 28 }, end: { line: 31, column: 40 } },
                                    { start: { line: 31, column: 44 }, end: { line: 31, column: 46 } },
                                ],
                                line: 31,
                            },
                            2: {
                                loc: { start: { line: 32, column: 8 }, end: { line: 34, column: 9 } },
                                type: "if",
                                locations: [
                                    { start: { line: 32, column: 8 }, end: { line: 34, column: 9 } },
                                    { start: { line: 32, column: 8 }, end: { line: 34, column: 9 } },
                                ],
                                line: 32,
                            },
                            3: {
                                loc: { start: { line: 35, column: 8 }, end: { line: 37, column: 9 } },
                                type: "if",
                                locations: [
                                    { start: { line: 35, column: 8 }, end: { line: 37, column: 9 } },
                                    { start: { line: 35, column: 8 }, end: { line: 37, column: 9 } },
                                ],
                                line: 35,
                            },
                            4: {
                                loc: { start: { line: 38, column: 8 }, end: { line: 40, column: 9 } },
                                type: "if",
                                locations: [
                                    { start: { line: 38, column: 8 }, end: { line: 40, column: 9 } },
                                    { start: { line: 38, column: 8 }, end: { line: 40, column: 9 } },
                                ],
                                line: 38,
                            },
                        },
                        s: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0, 13: 0, 14: 0, 15: 0, 16: 0, 17: 0, 18: 0, 19: 0, 20: 0, 21: 0, 22: 0, 23: 0 },
                        f: { 0: 0, 1: 0, 2: 0, 3: 0 },
                        b: { 0: [0, 0], 1: [0, 0], 2: [0, 0], 3: [0, 0], 4: [0, 0] },
                        inputSourceMap: {
                            version: 3,
                            file: "/Users/apple/Projects/Package/Setmore-easyshare/src/components/hoc/toast-wrapper.ts",
                            sourceRoot: "",
                            sources: ["/Users/apple/Projects/Package/Setmore-easyshare/src/components/hoc/toast-wrapper.ts"],
                            names: [],
                            mappings:
                                "AAAA,OAAO,MAAM,MAAM,oBAAoB,CAAC;AACxC,OAAO,EAAE,MAAM,EAAE,MAAM,sBAAsB,CAAC;AAE9C,iGAAiG;AACjG,iGAAiG;AACjG,iGAAiG;AACjG,MAAM,CAAC,OAAO,OAAO,YAAa,SAAQ,WAAW;IAUjD;QACI,KAAK,EAAE,CAAC;QAVZ,UAAK,GAAG,QAAQ,CAAC,aAAa,CAAC,KAAK,CAAC,CAAC;QAYlC,IAAI,CAAC,YAAY,CAAC,OAAO,EAAE,eAAe,CAAC,CAAC;QAC5C,IAAI,CAAC,KAAK,CAAC,YAAY,CAAC,OAAO,EAAE,OAAO,CAAC,CAAC;QAC1C,IAAI,CAAC,OAAO,GAAG,IAAI,CAAC,YAAY,CAAC,SAAS,CAAC,CAAC;QAC5C,IAAI,CAAC,KAAK,GAAG,IAAI,CAAC,YAAY,CAAC,OAAO,CAAC,CAAC;QACxC,IAAI,CAAC,oBAAoB,GAAG,IAAI,CAAC,YAAY,CAAC,kBAAkB,CAAC,CAAC;QAClE,IAAI,CAAC,gBAAgB,GAAG,IAAI,CAAC,YAAY,CAAC,cAAc,CAAC,CAAC;QAC1D,IAAI,CAAC,YAAY,GAAG,IAAI,CAAC,YAAY,CAAC,UAAU,CAAC,CAAC;QAClD,IAAI,CAAC,SAAS,GAAG,IAAI,CAAC,YAAY,CAAC,OAAO,CAAC,CAAC;IAChD,CAAC;IAED,6FAA6F;IAC7F,6FAA6F;IAC7F,6FAA6F;IAC7F,iBAAiB;QACb,IAAI,CAAC,MAAM,EAAE,CAAC;IAClB,CAAC;IAED,wBAAwB;QACpB,IAAI,CAAC,MAAM,EAAE,CAAC;IAClB,CAAC;IAED,MAAM;QACF,MAAM,IAAI,GAAG,MAAM,CAAC,EAAE,GAAG,EAAE,IAAI,CAAC,YAAY,IAAI,MAAM,CAAC,YAAY,EAAE,CAAC,CAAC;QACvE,MAAM,OAAO,GAAG,QAAQ,CAAC,aAAa,CAAC,MAAM,CAAgB,CAAC;QAC9D,OAAO,CAAC,SAAS,GAAG,IAAI,CAAC,OAAO,IAAI,EAAE,CAAC;QAEvC,IAAI,IAAI,CAAC,oBAAoB,EAAE;YAC3B,IAAI,CAAC,KAAK,CAAC,KAAK,CAAC,WAAW,CAAC,kBAAkB,EAAE,IAAI,CAAC,oBAAoB,CAAC,CAAC;SAC/E;QACD,IAAI,IAAI,CAAC,SAAS,EAAE;YAChB,OAAO,CAAC,KAAK,CAAC,WAAW,CAAC,OAAO,EAAE,IAAI,CAAC,SAAS,CAAC,CAAC;SACtD;QACD,IAAI,IAAI,CAAC,gBAAgB,EAAE;YACvB,IAAI,CAAC,KAAK,CAAC,KAAK,CAAC,WAAW,CAAC,QAAQ,EAAE,aAAa,IAAI,CAAC,gBAAgB,EAAE,CAAC,CAAC;SAChF;QAED,IAAI,CAAC,KAAK,CAAC,WAAW,CAAC,IAAI,CAAC,CAAC;QAC7B,IAAI,CAAC,KAAK,CAAC,WAAW,CAAC,OAAO,CAAC,CAAC;QAChC,IAAI,CAAC,WAAW,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC;IACjC,CAAC;CACJ",
                            sourcesContent: [
                                'import assets from "../../utils/assets";\nimport { avatar } from "../atom/avatar/index";\n\n/////////////////////////////////////////////////////////////////////////////////////////////////\n////////////////////////// Toast Wrapper to render toast notification ///////////////////////////\n/////////////////////////////////////////////////////////////////////////////////////////////////\nexport default class ToastWrapper extends HTMLElement {\n    toast = document.createElement("div");\n\n    message: string;\n    class: string;\n    toastBackgroundColor: string;\n    toastborderColor: string;\n    toastIconSrc: string;\n    textColor: string;\n\n    constructor() {\n        super();\n\n        this.setAttribute("class", "toast-wrapper");\n        this.toast.setAttribute("class", "toast");\n        this.message = this.getAttribute("message");\n        this.class = this.getAttribute("class");\n        this.toastBackgroundColor = this.getAttribute("background-color");\n        this.toastborderColor = this.getAttribute("border-color");\n        this.toastIconSrc = this.getAttribute("icon-src");\n        this.textColor = this.getAttribute("color");\n    }\n\n    /////////////////////////////////////////////////////////////////////////////////////////////\n    //////////////////////// Default lifecycle method to responsible to render data /////////////\n    /////////////////////////////////////////////////////////////////////////////////////////////\n    connectedCallback() {\n        this.render();\n    }\n\n    attributeChangedCallback() {\n        this.render();\n    }\n\n    render() {\n        const icon = avatar({ src: this.toastIconSrc || assets.toastSuccess });\n        const message = document.createElement("span") as HTMLElement;\n        message.innerText = this.message || "";\n\n        if (this.toastBackgroundColor) {\n            this.toast.style.setProperty("background-color", this.toastBackgroundColor);\n        }\n        if (this.textColor) {\n            message.style.setProperty("color", this.textColor);\n        }\n        if (this.toastborderColor) {\n            this.toast.style.setProperty("border", `solid 1px ${this.toastborderColor}`);\n        }\n\n        this.toast.appendChild(icon);\n        this.toast.appendChild(message);\n        this.appendChild(this.toast);\n    }\n}',
                            ],
                        },
                        _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c",
                    },
                    l = e[t] || (e[t] = {});
                return l[A] && l[A].hash === n ? l[A] : ((o.hash = n), (l[A] = o));
            })();
            class D extends HTMLElement {
                constructor() {
                    Y.f[0]++,
                        Y.s[0]++,
                        super(),
                        Y.s[1]++,
                        (this.toast = document.createElement("div")),
                        Y.s[2]++,
                        this.setAttribute("class", "toast-wrapper"),
                        Y.s[3]++,
                        this.toast.setAttribute("class", "toast"),
                        Y.s[4]++,
                        (this.message = this.getAttribute("message")),
                        Y.s[5]++,
                        (this.class = this.getAttribute("class")),
                        Y.s[6]++,
                        (this.toastBackgroundColor = this.getAttribute("background-color")),
                        Y.s[7]++,
                        (this.toastborderColor = this.getAttribute("border-color")),
                        Y.s[8]++,
                        (this.toastIconSrc = this.getAttribute("icon-src")),
                        Y.s[9]++,
                        (this.textColor = this.getAttribute("color"));
                }
                connectedCallback() {
                    Y.f[1]++, Y.s[10]++, this.render();
                }
                attributeChangedCallback() {
                    Y.f[2]++, Y.s[11]++, this.render();
                }
                render() {
                    Y.f[3]++;
                    const A = (Y.s[12]++, d({ src: (Y.b[0][0]++, this.toastIconSrc || (Y.b[0][1]++, r)) })),
                        n = (Y.s[13]++, document.createElement("span"));
                    Y.s[14]++,
                        (n.innerText = (Y.b[1][0]++, this.message || (Y.b[1][1]++, ""))),
                        Y.s[15]++,
                        this.toastBackgroundColor ? (Y.b[2][0]++, Y.s[16]++, this.toast.style.setProperty("background-color", this.toastBackgroundColor)) : Y.b[2][1]++,
                        Y.s[17]++,
                        this.textColor ? (Y.b[3][0]++, Y.s[18]++, n.style.setProperty("color", this.textColor)) : Y.b[3][1]++,
                        Y.s[19]++,
                        this.toastborderColor ? (Y.b[4][0]++, Y.s[20]++, this.toast.style.setProperty("border", `solid 1px ${this.toastborderColor}`)) : Y.b[4][1]++,
                        Y.s[21]++,
                        this.toast.appendChild(A),
                        Y.s[22]++,
                        this.toast.appendChild(n),
                        Y.s[23]++,
                        this.appendChild(this.toast);
                }
            }
            !(function () {
                var A = "/Users/apple/Projects/Package/Setmore-easyshare/src/components/hoc/index.ts",
                    n = "e9a91b3e257b12887743a91ff85118bee473e375",
                    e = new (0, function () { }.constructor)("return this")(),
                    t = "__coverage__",
                    o = {
                        path: "/Users/apple/Projects/Package/Setmore-easyshare/src/components/hoc/index.ts",
                        statementMap: {},
                        fnMap: {},
                        branchMap: {},
                        s: {},
                        f: {},
                        b: {},
                        inputSourceMap: {
                            version: 3,
                            file: "/Users/apple/Projects/Package/Setmore-easyshare/src/components/hoc/index.ts",
                            sourceRoot: "",
                            sources: ["/Users/apple/Projects/Package/Setmore-easyshare/src/components/hoc/index.ts"],
                            names: [],
                            mappings: "AAAA,OAAO,EAAE,OAAO,IAAI,cAAc,EAAE,MAAM,mBAAmB,CAAC;AAC9D,OAAO,EAAE,OAAO,IAAI,YAAY,EAAE,MAAM,iBAAiB,CAAC",
                            sourcesContent: ['export { default as ServiceWrapper } from "./service-wrapper";\nexport { default as ToastWrapper } from "./toast-wrapper";'],
                        },
                        _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c",
                    },
                    l = e[t] || (e[t] = {});
                l[A] && l[A].hash === n ? l[A] : ((o.hash = n), (l[A] = o));
            })();
            var P = (function () {
                var A = "/Users/apple/Projects/Package/Setmore-easyshare/src/index.ts",
                    n = "2f4ac5e401d054e225b5314edf11443d385d8054",
                    e = new (0, function () { }.constructor)("return this")(),
                    t = "__coverage__",
                    o = {
                        path: "/Users/apple/Projects/Package/Setmore-easyshare/src/index.ts",
                        statementMap: {
                            0: { start: { line: 12, column: 0 }, end: { line: 18, column: 3 } },
                            1: { start: { line: 15, column: 4 }, end: { line: 15, column: 102 } },
                            2: { start: { line: 17, column: 4 }, end: { line: 17, column: 96 } },
                        },
                        fnMap: { 0: { name: "(anonymous_0)", decl: { start: { line: 12, column: 46 }, end: { line: 12, column: 47 } }, loc: { start: { line: 12, column: 52 }, end: { line: 18, column: 1 } }, line: 12 } },
                        branchMap: {
                            0: {
                                loc: { start: { line: 15, column: 4 }, end: { line: 15, column: 101 } },
                                type: "binary-expr",
                                locations: [
                                    { start: { line: 15, column: 4 }, end: { line: 15, column: 41 } },
                                    { start: { line: 15, column: 45 }, end: { line: 15, column: 101 } },
                                ],
                                line: 15,
                            },
                            1: {
                                loc: { start: { line: 17, column: 4 }, end: { line: 17, column: 95 } },
                                type: "binary-expr",
                                locations: [
                                    { start: { line: 17, column: 4 }, end: { line: 17, column: 39 } },
                                    { start: { line: 17, column: 43 }, end: { line: 17, column: 95 } },
                                ],
                                line: 17,
                            },
                        },
                        s: { 0: 0, 1: 0, 2: 0 },
                        f: { 0: 0 },
                        b: { 0: [0, 0], 1: [0, 0] },
                        inputSourceMap: {
                            version: 3,
                            file: "/Users/apple/Projects/Package/Setmore-easyshare/src/index.ts",
                            sourceRoot: "",
                            sources: ["/Users/apple/Projects/Package/Setmore-easyshare/src/index.ts"],
                            names: [],
                            mappings:
                                "AAAA,OAAO,gBAAgB,CAAC;AAExB,iGAAiG;AACjG,iGAAiG;AACjG,iGAAiG;AACjG,iGAAiG;AACjG,iGAAiG;AACjG,iGAAiG;AACjG,iGAAiG;AACjG,iGAAiG;AACjG,iGAAiG;AACjG,OAAO,EAAE,cAAc,EAAE,YAAY,EAAE,MAAM,wBAAwB,CAAC;AAEtE,QAAQ,CAAC,gBAAgB,CAAC,kBAAkB,EAAE,GAAG,EAAE;IAC/C,iGAAiG;IACjG,2BAA2B;IAC3B,cAAc,CAAC,GAAG,CAAC,iBAAiB,CAAC,IAAI,cAAc,CAAC,MAAM,CAAC,iBAAiB,EAAE,cAAc,CAAC,CAAC;IAClG,2BAA2B;IAC3B,cAAc,CAAC,GAAG,CAAC,eAAe,CAAC,IAAI,cAAc,CAAC,MAAM,CAAC,eAAe,EAAE,YAAY,CAAC,CAAC;AAChG,CAAC,CAAC,CAAC",
                            sourcesContent: [
                                'import "./utils/extend";\n\n/////////////////////////////////////////////////////////////////////////////////////////////////\n/////////////////////////////////////////////////////////////////////////////////////////////////\n/////////////////////////////////////////////////////////////////////////////////////////////////\n///////////////////////////// Version 1.0.0 /////////////////////////////////////////////////////\n///////////////////////////// Root file to get all the modules of the package ///////////////////\n///////////////////////////// tsc version 4+ ////////////////////////////////////////////////////\n/////////////////////////////////////////////////////////////////////////////////////////////////\n/////////////////////////////////////////////////////////////////////////////////////////////////\n/////////////////////////////////////////////////////////////////////////////////////////////////\nimport { ServiceWrapper, ToastWrapper } from "./components/hoc/index";\n\ndocument.addEventListener("DOMContentLoaded", () => {\n    //////////////////// Defining the card selector for our html template ///////////////////////////\n    // tslint:disable-next-line\n    customElements.get("service-wrapper") || customElements.define("service-wrapper", ServiceWrapper);\n    // tslint:disable-next-line\n    customElements.get("toast-wrapper") || customElements.define("toast-wrapper", ToastWrapper);\n});',
                            ],
                        },
                        _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c",
                    },
                    l = e[t] || (e[t] = {});
                return l[A] && l[A].hash === n ? l[A] : ((o.hash = n), (l[A] = o));
            })();
            P.s[0]++,
                document.addEventListener("DOMContentLoaded", () => {
                    P.f[0]++,
                        P.s[1]++,
                        P.b[0][0]++,
                        customElements.get("service-wrapper") || (P.b[0][1]++, customElements.define("service-wrapper", W)),
                        P.s[2]++,
                        P.b[1][0]++,
                        customElements.get("toast-wrapper") || (P.b[1][1]++, customElements.define("toast-wrapper", D));
                });
        })();
})();