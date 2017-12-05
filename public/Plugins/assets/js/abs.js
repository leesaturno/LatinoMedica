/**
 * Abs - v0.0.1 - 2017-07-04
 *
 * Copyright (c) 2017 Agriya
 */
function readMore(e) {
    function t(e, t, o) {
        function s() {
            o.debug("setToggleMoreText"), r.toggle.moreText = r.hmMoreText || "Read more"
        }

        function n() {
            o.debug("setToggleLessText"), r.toggle.lessText = r.hmLessText || "Read less"
        }

        function m() {
            o.debug("setCurrentToggleText"), r.toggle.text = r.toggle.state ? r.toggle.lessText : r.toggle.moreText
        }

        function g() {
            o.debug("setShowToggle"), r.toggle.show = r.moreText && r.moreText.length > 0
        }

        function l() {
            o.debug("validateLimit"), r.hmLimit = r.hmLimit && r.hmLimit <= 0 ? void 0 : r.hmLimit
        }

        function i() {
            return o.debug("getMoreTextLimit"), r.hmLimit && r.hmLimit < r.hmText.length ? r.hmLimit - r.hmText.length : 0
        }

        function a() {
            o.debug("setLessAndMoreText"), r.lessText = e("limitTo")(r.hmText, r.hmLimit), r.moreText = e("limitTo")(r.hmText, i())
        }

        function h() {
            o.debug("initialize"), s(), n(), l(), a(), g(), m()
        }
        var r = this;
        r.toggle = {
            dots: "...",
            dotsClass: r.hmDotsClass,
            linkClass: r.hmLinkClass
        }, r.doToggle = function() {
            o.debug("doToggle"), r.toggle.state = !r.toggle.state, r.showMoreText = !r.showMoreText, m()
        }, t.$watch("vm.hmMoreText", function(e, t) {
            e != t && (o.debug("hmMoreText changed"), s(), m())
        }), t.$watch("vm.hmLessText", function(e, t) {
            e != t && (o.debug("hmLessText changed"), n(), m())
        }), t.$watch("vm.hmDotsClass", function(e, t) {
            e != t && (o.debug("hmDotsClass changed"), r.toggle.dotsClass = r.hmDotsClass)
        }), t.$watch("vm.hmLinkClass", function(e, t) {
            e != t && (o.debug("hmLinkClass changed"), r.toggle.linkClass = r.hmLinkClass)
        }), h(), t.$watch("vm.hmText", function(e, t) {
            e != t && (o.debug("hmText changed"), l(), a(), g())
        }), t.$watch("vm.hmLimit", function(e, t) {
            e != t && (o.debug("hmLimit changed"), l(), a(), g())
        })
    }
    t.$inject = ["$filter", "$scope", "$log"];
    var o = {
        restrict: "AE",
        scope: {
            hmText: "@",
            hmLimit: "@",
            hmMoreText: "@",
            hmLessText: "@",
            hmDotsClass: "@",
            hmLinkClass: "@"
        },
        template: e.get("readmore.template.html"),
        controller: t,
        controllerAs: "vm",
        bindToController: !0
    };
    return o
}

function debounce(t, e, n) {
    var i;
    return function() {
        var o = this,
            r = arguments,
            u = function() {
                i = null, n || t.apply(o, r)
            },
            c = n && !i;
        clearTimeout(i), i = setTimeout(u, e), c && t.apply(o, r)
    }
}

function randomString(t, e) {
    e = e && e.toLowerCase();
    for (var n = "", i = 0, o = "a" == e ? 10 : 0, r = "n" == e ? 10 : 62; i++ < t;) {
        var u = Math.random() * (r - o) + o << 0;
        n += String.fromCharCode(u += u > 9 ? 36 > u ? 55 : 61 : 48)
    }
    return n
}! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    function s(a) {
        var b = !!a && "length" in a && a.length,
            c = n.type(a);
        return "function" !== c && !n.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }

    function z(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (y.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return h.call(b, a) > -1 !== c
        })
    }

    function F(a, b) {
        for (;
            (a = a[b]) && 1 !== a.nodeType;);
        return a
    }

    function H(a) {
        var b = {};
        return n.each(a.match(G) || [], function(a, c) {
            b[c] = !0
        }), b
    }

    function J() {
        d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J), n.ready()
    }

    function M() {
        this.expando = n.expando + M.uid++
    }

    function R(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(Q, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c || "false" !== c && ("null" === c ? null : +c + "" === c ? +c : P.test(c) ? n.parseJSON(c) : c)
                } catch (e) {}
                O.set(a, b, c)
            } else c = void 0;
        return c
    }

    function W(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function() {
                return d.cur()
            } : function() {
                return n.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
            k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }

    function _(a, b) {
        var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
    }

    function aa(a, b) {
        for (var c = 0, d = a.length; d > c; c++) N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"))
    }

    function ca(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length; p > o; o++)
            if (f = a[o], f || 0 === f)
                if ("object" === n.type(f)) n.merge(m, f.nodeType ? [f] : f);
                else if (ba.test(f)) {
            for (g = g || l.appendChild(b.createElement("div")), h = (Y.exec(f) || ["", ""])[1].toLowerCase(), i = $[h] || $._default, g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2], k = i[0]; k--;) g = g.lastChild;
            n.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
        } else m.push(b.createTextNode(f));
        for (l.textContent = "", o = 0; f = m[o++];)
            if (d && n.inArray(f, d) > -1) e && e.push(f);
            else if (j = n.contains(f.ownerDocument, f), g = _(l.appendChild(f), "script"), j && aa(g), c)
            for (k = 0; f = g[k++];) Z.test(f.type || "") && c.push(f);
        return l
    }

    function ga() {
        return !0
    }

    function ha() {
        return !1
    }

    function ia() {
        try {
            return d.activeElement
        } catch (a) {}
    }

    function ja(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) ja(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ha;
        else if (!e) return a;
        return 1 === f && (g = e, e = function(a) {
            return n().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() {
            n.event.add(this, b, e, d, c)
        })
    }

    function pa(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function qa(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function ra(a) {
        var b = na.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function sa(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (N.hasData(a) && (f = N.access(a), g = N.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c])
            }
            O.hasData(a) && (h = O.access(a), i = n.extend({}, h), O.set(b, i))
        }
    }

    function ta(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && X.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
    }

    function ua(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0,
            o = a.length,
            p = o - 1,
            q = b[0],
            r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && ma.test(q)) return a.each(function(e) {
            var f = a.eq(e);
            r && (b[0] = q.call(this, e, f.html())), ua(f, b, c, d)
        });
        if (o && (e = ca(b, a[0].ownerDocument, !1, a, d), g = e.firstChild, 1 === e.childNodes.length && (e = g), g || d)) {
            for (h = n.map(_(e, "script"), qa), i = h.length; o > m; m++) j = e, m !== p && (j = n.clone(j, !0, !0), i && n.merge(h, _(j, "script"))), c.call(a[m], j, m);
            if (i)
                for (k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0; i > m; m++) j = h[m], Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, "")))
        }
        return a
    }

    function va(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(_(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")), d.parentNode.removeChild(d));
        return a
    }

    function ya(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body),
            d = n.css(c[0], "display");
        return c.detach(), d
    }

    function za(a) {
        var b = d,
            c = xa[a];
        return c || (c = ya(a, b), "none" !== c && c || (wa = (wa || n(""),
                    c = a.prop("attributes");
                angular.forEach(c, function(a) {
                    b.attr(a.name, a.value)
                }), b.attr("src", b.attr("ta-insert-video")), a.replaceWith(b)
            }
        }]).value("taTranslations", {
            html: {
                tooltip: "Toggle html / Rich Text"
            },
            heading: {
                tooltip: "Heading "
            },
            p: {
                tooltip: "Paragraph"
            },
            pre: {
                tooltip: "Preformatted text"
            },
            ul: {
                tooltip: "Unordered List"
            },
            ol: {
                tooltip: "Ordered List"
            },
            quote: {
                tooltip: "Quote/unquote selection or paragraph"
            },
            undo: {
                tooltip: "Undo"
            },
            redo: {
                tooltip: "Redo"
            },
            bold: {
                tooltip: "Bold"
            },
            italic: {
                tooltip: "Italic"
            },
            underline: {
                tooltip: "Underline"
            },
            strikeThrough: {
                tooltip: "Strikethrough"
            },
            justifyLeft: {
                tooltip: "Align text left"
            },
            justifyRight: {
                tooltip: "Align text right"
            },
            justifyFull: {
                tooltip: "Justify text"
            },
            justifyCenter: {
                tooltip: "Center"
            },
            indent: {
                tooltip: "Increase indent"
            },
            outdent: {
                tooltip: "Decrease indent"
            },
            clear: {
                tooltip: "Clear formatting"
            },
            insertImage: {
                dialogPrompt: "Please enter an image URL to insert",
                tooltip: "Insert image",
                hotkey: "the - possibly language dependent hotkey ... for some future implementation"
            },
            insertVideo: {
                tooltip: "Insert video",
                dialogPrompt: "Please enter a youtube URL to embed"
            },
            insertLink: {
                tooltip: "Insert / edit link",
                dialogPrompt: "Please enter a URL to insert"
            },
            editLink: {
                reLinkButton: {
                    tooltip: "Relink"
                },
                unLinkButton: {
                    tooltip: "Unlink"
                },
                targetToggle: {
                    buttontext: "Open in New Window"
                }
            },
            wordcount: {
                tooltip: "Display words Count"
            },
            charcount: {
                tooltip: "Display characters Count"
            }
        }).factory("taToolFunctions", ["$window", "taTranslations", function(a, b) {
            return {
                imgOnSelectAction: function(a, b, c) {
                    var d = function() {
                        c.updateTaBindtaTextElement(), c.hidePopover()
                    };
                    a.preventDefault(), c.displayElements.popover.css("width", "375px");
                    var e = c.displayElements.popoverContainer;
                    e.empty();
                    var f = angular.element('
'),
                        g = angular.element('100% ');
                    g.on("click", function(a) {
                        a.preventDefault(), b.css({
                            width: "100%",
                            height: ""
                        }), d()
                    });
                    var h = angular.element('50% ');
                    h.on("click", function(a) {
                        a.preventDefault(), b.css({
                            width: "50%",
                            height: ""
                        }), d()
                    });
                    var i = angular.element('25% ');
                    i.on("click", function(a) {
                        a.preventDefault(), b.css({
                            width: "25%",
                            height: ""
                        }), d()
                    });
                    var j = angular.element('Reset');
                    j.on("click", function(a) {
                        a.preventDefault(), b.css({
                            width: "",
                            height: ""
                        }), d()
                    }), f.append(g), f.append(h), f.append(i), f.append(j), e.append(f), f = angular.element('
');
                    var k = angular.element('');
                    k.on("click", function(a) {
                        a.preventDefault(), b.css("float", "left"), b.css("cssFloat", "left"), b.css("styleFloat", "left"), d()
                    });
                    var l = angular.element('');
                    l.on("click", function(a) {
                        a.preventDefault(), b.css("float", "right"), b.css("cssFloat", "right"), b.css("styleFloat", "right"), d()
                    });
                    var m = angular.element('');
                    m.on("click", function(a) {
                        a.preventDefault(), b.css("float", ""), b.css("cssFloat", ""), b.css("styleFloat", ""), d()
                    }), f.append(k), f.append(m), f.append(l), e.append(f), f = angular.element('
');
                    var n = angular.element('');
                    n.on("click", function(a) {
                        a.preventDefault(), b.remove(), d()
                    }), f.append(n), e.append(f), c.showPopover(b), c.showResizeOverlay(b)
                },
                aOnSelectAction: function(c, d, e) {
                    c.preventDefault(), e.displayElements.popover.css("width", "436px");
                    var f = e.displayElements.popoverContainer;
                    f.empty(), f.css("line-height", "28px");
                    var g = angular.element('' + d.attr("href") + "");
                    g.css({
                        display: "inline-block",
                        "max-width": "200px",
                        overflow: "hidden",
                        "text-overflow": "ellipsis",
                        "white-space": "nowrap",
                        "vertical-align": "middle"
                    }), f.append(g);
                    var h = angular.element('
'),
                        i = angular.element('');
                    i.on("click", function(c) {
                        c.preventDefault();
                        var f = a.prompt(b.insertLink.dialogPrompt, d.attr("href"));
                        f && "" !== f && "http://" !== f && (d.attr("href", f), e.updateTaBindtaTextElement()), e.hidePopover()
                    }), h.append(i);
                    var j = angular.element('');
                    j.on("click", function(a) {
                        a.preventDefault(), d.replaceWith(d.contents()), e.updateTaBindtaTextElement(), e.hidePopover()
                    }), h.append(j);
                    var k = angular.element('' + b.editLink.targetToggle.buttontext + "");
                    "_blank" === d.attr("target") && k.addClass("active"), k.on("click", function(a) {
                        a.preventDefault(), d.attr("target", "_blank" === d.attr("target") ? "" : "_blank"), k.toggleClass("active"), e.updateTaBindtaTextElement()
                    }), h.append(k), f.append(h), e.showPopover(d)
                },
                extractYoutubeVideoId: function(a) {
                    var b = /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/i,
                        c = a.match(b);
                    return c && c[1] || null
                }
            }
        }]).run(["taRegisterTool", "$window", "taTranslations", "taSelection", "taToolFunctions", "$sanitize", "taOptions", "$log", function(a, b, c, d, e, f, g, h) {
            var i = {};
            if (f("", i), g.forceTextAngularSanitize === !0 && "taSanitize" !== i.version) throw angular.$$minErr("textAngular")("textAngularSetup", "The textAngular-sanitize provider has been replaced by another -- have you included angular-sanitize by mistake?");
            a("html", {
                iconclass: "fa fa-code",
                tooltiptext: c.html.tooltip,
                action: function() {
                    this.$editor().switchView()
                },
                activeState: function() {
                    return this.$editor().showHtml
                }
            });
            var j = function(a) {
                    return function() {
                        return this.$editor().queryFormatBlockState(a)
                    }
                },
                k = function() {
                    return this.$editor().wrapSelection("formatBlock", "<" + this.name.toUpperCase() + ">")
                };
            angular.forEach(["h1", "h2", "h3", "h4", "h5", "h6"], function(b) {
                a(b.toLowerCase(), {
                    buttontext: b.toUpperCase(),
                    tooltiptext: c.heading.tooltip + b.charAt(1),
                    action: k,
                    activeState: j(b.toLowerCase())
                })
            }), a("p", {
                buttontext: "P",
                tooltiptext: c.p.tooltip,
                action: function() {
                    return this.$editor().wrapSelection("formatBlock", "
")
                },
                activeState: function() {
                    return this.$editor().queryFormatBlockState("p")
                }
            }), a("pre", {
                buttontext: "pre",
                tooltiptext: c.pre.tooltip,
                action: function() {
                    return this.$editor().wrapSelection("formatBlock", "
")
                },
                activeState: function() {
                    return this.$editor().queryFormatBlockState("pre")
                }
            }), a("ul", {
                iconclass: "fa fa-list-ul",
                tooltiptext: c.ul.tooltip,
                action: function() {
                    return this.$editor().wrapSelection("insertUnorderedList", null)
                },
                activeState: function() {
                    return this.$editor().queryCommandState("insertUnorderedList")
                }
            }), a("ol", {
                iconclass: "fa fa-list-ol",
                tooltiptext: c.ol.tooltip,
                action: function() {
                    return this.$editor().wrapSelection("insertOrderedList", null)
                },
                activeState: function() {
                    return this.$editor().queryCommandState("insertOrderedList")
                }
            }), a("quote", {
                iconclass: "fa fa-quote-right",
                tooltiptext: c.quote.tooltip,
                action: function() {
                    return this.$editor().wrapSelection("formatBlock", "
")
                },
                activeState: function() {
                    return this.$editor().queryFormatBlockState("blockquote")
                }
            }), a("undo", {
                iconclass: "fa fa-undo",
                tooltiptext: c.undo.tooltip,
                action: function() {
                    return this.$editor().wrapSelection("undo", null)
                }
            }), a("redo", {
                iconclass: "fa fa-repeat",
                tooltiptext: c.redo.tooltip,
                action: function() {
                    return this.$editor().wrapSelection("redo", null)
                }
            }), a("bold", {
                iconclass: "fa fa-bold",
                tooltiptext: c.bold.tooltip,
                action: function() {
                    return this.$editor().wrapSelection("bold", null)
                },
                activeState: function() {
                    return this.$editor().queryCommandState("bold")
                },
                commandKeyCode: 98
            }), a("justifyLeft", {
                iconclass: "fa fa-align-left",
                tooltiptext: c.justifyLeft.tooltip,
                action: function() {
                    return this.$editor().wrapSelection("justifyLeft", null)
                },
                activeState: function(a) {
                    if (a && "#document" === a.nodeName) return !1;
                    var b = !1;
                    if (a) try {
                        b = "left" === a.css("text-align") || "left" === a.attr("align") || "right" !== a.css("text-align") && "center" !== a.css("text-align") && "justify" !== a.css("text-align") && !this.$editor().queryCommandState("justifyRight") && !this.$editor().queryCommandState("justifyCenter") && !this.$editor().queryCommandState("justifyFull")
                    } catch (a) {
                        b = !1
                    }
                    return b = b || this.$editor().queryCommandState("justifyLeft")
                }
            }), a("justifyRight", {
                iconclass: "fa fa-align-right",
                tooltiptext: c.justifyRight.tooltip,
                action: function() {
                    return this.$editor().wrapSelection("justifyRight", null)
                },
                activeState: function(a) {
                    if (a && "#document" === a.nodeName) return !1;
                    var b = !1;
                    if (a) try {
                        b = "right" === a.css("text-align")
                    } catch (a) {
                        b = !1
                    }
                    return b = b || this.$editor().queryCommandState("justifyRight")
                }
            }), a("justifyFull", {
                iconclass: "fa fa-align-justify",
                tooltiptext: c.justifyFull.tooltip,
                action: function() {
                    return this.$editor().wrapSelection("justifyFull", null)
                },
                activeState: function(a) {
                    var b = !1;
                    if (a) try {
                        b = "justify" === a.css("text-align")
                    } catch (a) {
                        b = !1
                    }
                    return b = b || this.$editor().queryCommandState("justifyFull")
                }
            }), a("justifyCenter", {
                iconclass: "fa fa-align-center",
                tooltiptext: c.justifyCenter.tooltip,
                action: function() {
                    return this.$editor().wrapSelection("justifyCenter", null)
                },
                activeState: function(a) {
                    if (a && "#document" === a.nodeName) return !1;
                    var b = !1;
                    if (a) try {
                        b = "center" === a.css("text-align")
                    } catch (a) {
                        b = !1
                    }
                    return b = b || this.$editor().queryCommandState("justifyCenter")
                }
            }), a("indent", {
                iconclass: "fa fa-indent",
                tooltiptext: c.indent.tooltip,
                action: function() {
                    return this.$editor().wrapSelection("indent", null)
                },
                activeState: function() {
                    return this.$editor().queryFormatBlockState("blockquote")
                },
                commandKeyCode: "TabKey"
            }), a("outdent", {
                iconclass: "fa fa-outdent",
                tooltiptext: c.outdent.tooltip,
                action: function() {
                    return this.$editor().wrapSelection("outdent", null)
                },
                activeState: function() {
                    return !1
                },
                commandKeyCode: "ShiftTabKey"
            }), a("italics", {
                iconclass: "fa fa-italic",
                tooltiptext: c.italic.tooltip,
                action: function() {
                    return this.$editor().wrapSelection("italic", null)
                },
                activeState: function() {
                    return this.$editor().queryCommandState("italic")
                },
                commandKeyCode: 105
            }), a("underline", {
                iconclass: "fa fa-underline",
                tooltiptext: c.underline.tooltip,
                action: function() {
                    return this.$editor().wrapSelection("underline", null)
                },
                activeState: function() {
                    return this.$editor().queryCommandState("underline")
                },
                commandKeyCode: 117
            }), a("strikeThrough", {
                iconclass: "fa fa-strikethrough",
                tooltiptext: c.strikeThrough.tooltip,
                action: function() {
                    return this.$editor().wrapSelection("strikeThrough", null)
                },
                activeState: function() {
                    return document.queryCommandState("strikeThrough")
                }
            }), a("clear", {
                iconclass: "fa fa-ban",
                tooltiptext: c.clear.tooltip,
                action: function(a, b) {
                    var c;
                    this.$editor().wrapSelection("removeFormat", null);
                    var e = angular.element(d.getSelectionElement());
                    c = d.getAllSelectedElements();
                    var f = function(a, b) {
                        a = angular.element(a);
                        var c = b;
                        return b || (c = a), angular.forEach(a.children(), function(a) {
                            if ("ul" === a.tagName.toLowerCase() || "ol" === a.tagName.toLowerCase()) c = f(a, c);
                            else {
                                var b = angular.element("
");
                                b.html(angular.element(a).html()), c.after(b), c = b
                            }
                        }), a.remove(), c
                    };
                    angular.forEach(c, function(a) {
                        "ul" !== a.nodeName.toLowerCase() && "ol" !== a.nodeName.toLowerCase() || f(a)
                    }), angular.forEach(e.find("ul"), f), angular.forEach(e.find("ol"), f);
                    var g = this.$editor(),
                        h = function(a) {
                            a = angular.element(a), a[0] !== g.displayElements.text[0] && a.removeAttr("class"), angular.forEach(a.children(), h)
                        };
                    angular.forEach(e, h), e[0] && "li" !== e[0].tagName.toLowerCase() && "ol" !== e[0].tagName.toLowerCase() && "ul" !== e[0].tagName.toLowerCase() && "true" !== e[0].getAttribute("contenteditable") && this.$editor().wrapSelection("formatBlock", "default"), b()
                }
            });
            var l = function(a) {
                return a.toLowerCase().indexOf("javascript") !== -1
            };
            a("insertImage", {
                iconclass: "fa fa-picture-o",
                tooltiptext: c.insertImage.tooltip,
                action: function() {
                    var a;
                    if (a = b.prompt(c.insertImage.dialogPrompt, "http://"), a && "" !== a && "http://" !== a && !l(a)) {
                        d.getSelectionElement().tagName && "a" === d.getSelectionElement().tagName.toLowerCase() && d.setSelectionAfterElement(d.getSelectionElement());
                        var e = '';
                        return this.$editor().wrapSelection("insertHTML", e, !0)
                    }
                },
                onElementSelect: {
                    element: "img",
                    action: e.imgOnSelectAction
                }
            }), a("insertVideo", {
                iconclass: "fa fa-youtube-play",
                tooltiptext: c.insertVideo.tooltip,
                action: function() {
                    var a;
                    if (a = b.prompt(c.insertVideo.dialogPrompt, "https://"), !l(a) && a && "" !== a && "https://" !== a && (videoId = e.extractYoutubeVideoId(a), videoId)) {
                        var f = "https://www.youtube.com/embed/" + videoId,
                            g = '';
                        return d.getSelectionElement().tagName && "a" === d.getSelectionElement().tagName.toLowerCase() && d.setSelectionAfterElement(d.getSelectionElement()), this.$editor().wrapSelection("insertHTML", g, !0)
                    }
                },
                onElementSelect: {
                    element: "img",
                    onlyWithAttrs: ["ta-insert-video"],
                    action: e.imgOnSelectAction
                }
            }), a("insertLink", {
                tooltiptext: c.insertLink.tooltip,
                iconclass: "fa fa-link",
                action: function() {
                    var a;
                    if (a = d.getSelectionElement().tagName && "a" === d.getSelectionElement().tagName.toLowerCase() ? b.prompt(c.insertLink.dialogPrompt, d.getSelectionElement().href) : b.prompt(c.insertLink.dialogPrompt, "http://"), a && "" !== a && "http://" !== a && !l(a)) return this.$editor().wrapSelection("createLink", a, !0)
                },
                activeState: function(a) {
                    return !!a && "A" === a[0].tagName
                },
                onElementSelect: {
                    element: "a",
                    action: e.aOnSelectAction
                }
            }), a("wordcount", {
                display: '
Words:
',
                disabled: !0,
                wordcount: 0,
                activeState: function() {
                    var a = this.$editor().displayElements.text,
                        b = a[0].innerHTML || "",
                        c = 0;
                    return "" !== b.replace(/\s*<[^>]*?>\s*/g, "") && "" !== b.trim() && (c = b.replace(/<\/?(b|i|em|strong|span|u|strikethrough|a|img|small|sub|sup|label)( [^>*?])?>/gi, "").replace(/(<[^>]*?>\s*<[^>]*?>)/gi, " ").replace(/(<[^>]*?>)/gi, "").replace(/\s+/gi, " ").match(/\S+/g).length), this.wordcount = c, this.$editor().wordcount = c, !1
                }
            }), a("charcount", {
                display: '
Characters:
',
                disabled: !0,
                charcount: 0,
                activeState: function() {
                    var a = this.$editor().displayElements.text,
                        b = a[0].innerText || a[0].textContent,
                        c = b.replace(/(\r\n|\n|\r)/gm, "").replace(/^\s+/g, " ").replace(/\s+$/g, " ").length;
                    return this.charcount = c, this.$editor().charcount = c, !1
                }
            })
        }]);
        var f = "v1.5.16",
            g = {
                ie: function() {
                    for (var a, b = 3, c = document.createElement("div"), d = c.getElementsByTagName("i"); c.innerHTML = "", d[0];);
                    return b > 4 ? b : a
                }(),
                webkit: /AppleWebKit\/([\d.]+)/i.test(navigator.userAgent),
                isFirefox: navigator.userAgent.toLowerCase().indexOf("firefox") > -1
            },
            h = h || {};
        h.now = function() {
            return h.now || h.mozNow || h.msNow || h.oNow || h.webkitNow || function() {
                return (new Date).getTime()
            }
        }();
        var i = /^(address|article|aside|audio|blockquote|canvas|center|dd|div|dl|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hgroup|hr|noscript|ol|output|p|pre|section|table|tfoot|ul|video)$/i,
            j = /^(ul|li|ol)$/i,
            k = /^(#text|span|address|article|aside|audio|blockquote|canvas|center|dd|div|dl|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hgroup|hr|noscript|ol|output|p|pre|section|table|tfoot|ul|video|li)$/i;
        String.prototype.trim || (String.prototype.trim = function() {
            return this.replace(/^\s+|\s+$/g, "")
        });
        var l, m, n, o, p, q;
        if (g.ie > 8 || void 0 === g.ie) {
            for (var r = document.styleSheets, s = 0; s < r.length; s++)
                if ((0 === r[s].media.length || r[s].media.mediaText.match(/(all|screen)/gi)) && r[s].href && r[s].href.match(/textangular\.(min\.|)css/gi)) {
                    l = r[s];
                    break
                }
            l || (l = function() {
                var a = document.createElement("style");
                return g.webkit && a.appendChild(document.createTextNode("")), document.getElementsByTagName("head")[0].appendChild(a), a.sheet
            }()), m = function(a, b) {
                return o(l, a, b)
            }, o = function(a, b, c) {
                var d, e;
                return a.cssRules ? d = Math.max(a.cssRules.length - 1, 0) : a.rules && (d = Math.max(a.rules.length - 1, 0)), a.insertRule ? a.insertRule(b + "{" + c + "}", d) : a.addRule(b, c, d), l.rules ? e = l.rules[d] : l.cssRules && (e = l.cssRules[d]), e
            }, q = function(a, b) {
                var c, d;
                for (c = 0; c < b.length; c++)
                    if (b[c].cssText === a.cssText) {
                        d = c;
                        break
                    }
                return d
            }, n = function(a) {
                p(l, a)
            }, p = function(a, b) {
                var c = a.cssRules || a.rules;
                if (c && 0 !== c.length) {
                    var d = q(b, c);
                    a.removeRule ? a.removeRule(d) : a.deleteRule(d)
                }
            }
        }
        angular.module("textAngular.factories", []).factory("taBrowserTag", [function() {
            return function(a) {
                return a ? "" === a ? void 0 === g.ie ? "div" : g.ie <= 8 ? "P" : "p" : g.ie <= 8 ? a.toUpperCase() : a : g.ie <= 8 ? "P" : "p"
            }
        }]).factory("taApplyCustomRenderers", ["taCustomRenderers", "taDOM", function(a, b) {
            return function(c) {
                var d = angular.element("
");
                return d[0].innerHTML = c, angular.forEach(a, function(a) {
                    var c = [];
                    a.selector && "" !== a.selector ? c = d.find(a.selector) : a.customAttribute && "" !== a.customAttribute && (c = b.getByAttribute(d, a.customAttribute)), angular.forEach(c, function(b) {
                        b = angular.element(b), a.selector && "" !== a.selector && a.customAttribute && "" !== a.customAttribute ? void 0 !== b.attr(a.customAttribute) && a.renderLogic(b) : a.renderLogic(b)
                    })
                }), d[0].innerHTML
            }
        }]).factory("taFixChrome", function() {
            var a = function(a, b) {
                if (!a || !angular.isString(a) || a.length <= 0) return a;
                for (var c, d, e, f = /style\s?=\s?(["'])(?:(?=(\\?))\2.)*?\1/gi, g = /([^<]+)<\/span>/gi, h = "", i = 0; c = g.exec(a);) e = c[1], e = e.replace(/ /gi, " "), h += a.substring(i, c.index) + e, i = c.index + c[0].length;
                if (i && (h += a.substring(i), a = h, h = "", i = 0), !b) {
                    for (; c = f.exec(a);) h += a.substring(i, c.index - 1), d = c[0], c = /font-family: inherit;|line-height: 1.[0-9]{3,12};|color: inherit; line-height: 1.1;|color: rgb\(\d{1,3}, \d{1,3}, \d{1,3}\);|background-color: rgb\(\d{1,3}, \d{1,3}, \d{1,3}\);/gi.exec(d), c ? (d = d.replace(/( |)font-family: inherit;|( |)line-height: 1.[0-9]{3,12};|( |)color: inherit;|( |)color: rgb\(\d{1,3}, \d{1,3}, \d{1,3}\);|( |)background-color: rgb\(\d{1,3}, \d{1,3}, \d{1,3}\);/gi, ""), d.length > 8 && (h += " " + d)) : h += " " + d, i = f.lastIndex;
                    h += a.substring(i)
                }
                if (i > 0) {
                    var j = h.replace(/(.*?)<\/span>(|)/gi, "$1");
                    return j
                }
                return a
            };
            return a
        }).factory("taSanitize", ["$sanitize", function(a) {
            function b(a, b) {
                for (var c, d = 0, e = 0, f = /<[^>]*>/gi; c = f.exec(a);)
                    if (e = c.index, "/" === c[0].substr(1, 1)) {
                        if (0 === d) break;
                        d--
                    } else d++;
                return b + a.substring(0, e) + angular.element(b)[0].outerHTML.substring(b.length) + a.substring(e)
            }

            function c(a) {
                if (!a || !angular.isString(a) || a.length <= 0) return a;
                for (var d, f, g, h, i, k, l = /<([^>\/]+?)style=("([^"]+)"|'([^']+)')([^>]*)>/gi, m = "", n = "", o = 0; f = l.exec(a);) {
                    h = f[3] || f[4];
                    var p = new RegExp(j, "i");
                    if (angular.isString(h) && p.test(h)) {
                        i = "";
                        for (var q = new RegExp(j, "ig"); g = q.exec(h);)
                            for (d = 0; d < e.length; d++) g[2 * d + 2] && (i += "<" + e[d].tag + ">");
                        k = c(a.substring(o, f.index)), n += m.length > 0 ? b(k, m) : k, h = h.replace(new RegExp(j, "ig"), ""), n += "<" + f[1].trim(), h.length > 0 && (n += ' style="' + h + '"'), n += f[5] + ">", o = f.index + f[0].length, m = i
                    }
                }
                return n += m.length > 0 ? b(a.substring(o), m) : a.substring(o)
            }

            function d(a) {
                if (!a || !angular.isString(a) || a.length <= 0) return a;
                for (var b, c = /<([^>\/]+?)align=("([^"]+)"|'([^']+)')([^>]*)>/gi, d = "", e = 0; b = c.exec(a);) {
                    d += a.substring(e, b.index), e = b.index + b[0].length;
                    var f = "<" + b[1] + b[5];
                    /style=("([^"]+)"|'([^']+)')/gi.test(f) ? f = f.replace(/style=("([^"]+)"|'([^']+)')/i, 'style="$2$3 text-align:' + (b[3] || b[4]) + ';"') : f += ' style="text-align:' + (b[3] || b[4]) + ';"', f += ">", d += f
                }
                return d + a.substring(e)
            }
            for (var e = [{
                    property: "font-weight",
                    values: ["bold"],
                    tag: "b"
                }, {
                    property: "font-style",
                    values: ["italic"],
                    tag: "i"
                }], f = [], g = 0; g < e.length; g++) {
                for (var h = "(" + e[g].property + ":\\s*(", i = 0; i < e[g].values.length; i++) i > 0 && (h += "|"), h += e[g].values[i];
                h += ");)", f.push(h)
            }
            var j = "(" + f.join("|") + ")",
                k = new RegExp(/[^<>]+?<\/span>/gi),
                l = new RegExp(/[^<>]+?<\/span>/gi),
                m = new RegExp(/[^<>]+?<\/span>/gi);
            return function(b, e, f) {
                if (!f) try {
                    b = c(b)
                } catch (a) {}
                if (b = d(b)) try {
                    b = b.replace(k, ""), b = b.replace(l, ""), b = b.replace(k, ""), b = b.replace(m, "")
                } catch (a) {}
                var g;
                try {
                    g = a(b), f && (g = b)
                } catch (a) {
                    g = e || ""
                }
                var h, i = g.match(/(]*>.*?<\/pre[^>]*>)/gi),
                    j = g.replace(/(&#(9|10);)*/gi, ""),
                    n = /]*>.*?<\/pre[^>]*>/gi,
                    o = 0,
                    p = 0;
                for (g = ""; null !== (h = n.exec(j)) && o < i.length;) g += j.substring(p, h.index) + i[o], p = h.index + h[0].length, o++;
                return g + j.substring(p)
            }
        }]).factory("taToolExecuteAction", ["$q", "$log", function(a, b) {
            return function(c) {
                void 0 !== c && (this.$editor = function() {
                    return c
                });
                var d, e = a.defer(),
                    f = e.promise,
                    g = this.$editor();
                try {
                    d = this.action(e, g.startAction()), f["finally"](function() {
                        g.endAction.call(g)
                    })
                } catch (a) {
                    b.error(a)
                }(d || void 0 === d) && e.resolve()
            }
        }]), angular.module("textAngular.DOM", ["textAngular.factories"]).factory("taExecCommand", ["taSelection", "taBrowserTag", "$document", function(b, c, d) {
            var e = function(a, c) {
                    var d, e, f = a.find("li");
                    for (e = f.length - 1; e >= 0; e--) d = angular.element("<" + c + ">" + f[e].innerHTML + ""), a.after(d);
                    a.remove(), b.setSelectionToElementEnd(d[0])
                },
                f = function(a, d, e, f, g) {
                    var h, i, j, k, l, m = a.find("li");
                    for (i = 0; i < m.length; i++)
                        if (m[i].outerHTML === d[0].outerHTML) {
                            l = i, i > 0 && (j = m[i - 1]), i + 1 < m.length && (k = m[i + 1]);
                            break
                        }
                    var n = "";
                    if (f ? n += "<" + g + ">" + d[0].innerHTML + "" : (n += "<" + c(e) + ">", n += "
" + d[0].innerHTML + "", n += ""), h = angular.element(n), !j) return d.remove(), a.after(angular.element(a[0].outerHTML)), a.after(h), a.remove(), void b.setSelectionToElementEnd(h[0]);
                    if (k) {
                        var o = (a.parent(), ""),
                            p = a[0].nodeName.toLowerCase();
                        for (o += "<" + p + ">", i = 0; i < l; i++) o += "
" + m[i].innerHTML + "";
                        o += "";
                        var q = "";
                        for (q += "<" + p + ">", i = l + 1; i < m.length; i++) q += "
" + m[i].innerHTML + "";
                        q += "", a.after(angular.element(q)), a.after(h), a.after(angular.element(o)), a.remove(), b.setSelectionToElementEnd(h[0])
                    } else d.remove(), a.after(h), b.setSelectionToElementEnd(h[0])
                },
                g = function(a, d, e, f, g) {
                    var h, i, j, k, l, m = a.find("li"),
                        n = [];
                    for (i = 0; i < m.length; i++)
                        for (j = 0; j < d.length; j++) m[i].isEqualNode(d[j]) && (n[j] = i);
                    n[0] > 0 && (k = m[n[0] - 1]), n[d.length - 1] + 1 < m.length && (l = m[n[d.length - 1] + 1]);
                    var o = "";
                    if (f)
                        for (j = 0; j < d.length; j++) o += "<" + g + ">" + d[j].innerHTML + "", d[j].remove();
                    else {
                        for (o += "<" + c(e) + ">", j = 0; j < d.length; j++) o += d[j].outerHTML, d[j].remove();
                        o += ""
                    }
                    if (h = angular.element(o), !k) return a.after(angular.element(a[0].outerHTML)), a.after(h), a.remove(), void b.setSelectionToElementEnd(h[0]);
                    if (!l) return a.after(h), void b.setSelectionToElementEnd(h[0]);
                    var p = "",
                        q = a[0].nodeName.toLowerCase();
                    for (p += "<" + q + ">", i = 0; i < n[0]; i++) p += "
" + m[i].innerHTML + "";
                    p += "";
                    var r = "";
                    for (r += "<" + q + ">", i = n[d.length - 1] + 1; i < m.length; i++) r += "
" + m[i].innerHTML + "";
                    r += "", a.after(angular.element(r)), a.after(h), a.after(angular.element(p)), a.remove(), b.setSelectionToElementEnd(h[0])
                },
                h = function(a) {
                    /()$/i.test(a.innerHTML.trim()) ? b.setSelectionBeforeElement(angular.element(a).find("br")[0]) : b.setSelectionToElementEnd(a)
                },
                k = function(a, b) {
                    var c = angular.element("<" + b + ">" + a[0].innerHTML + "");
                    a.after(c), a.remove(), h(c.find("li")[0])
                },
                l = function(a, b, d) {
                    for (var e = "", f = 0; f < a.length; f++) e += "<" + c("li") + ">" + a[f].innerHTML + "";
                    var g = angular.element("<" + d + ">" + e + "");
                    b.after(g), b.remove(), h(g.find("li")[0])
                },
                m = function(a, b) {
                    for (var c = 0; c < a.childNodes.length; c++) {
                        var d = a.childNodes[c];
                        d.tagName && d.tagName.match(i) && m(d, b)
                    }
                    if (null === a.parentNode) return a;
                    if ("
" === b) return a;
                    var e = angular.element(b);
                    return e[0].innerHTML = a.innerHTML, a.parentNode.insertBefore(e[0], a), a.parentNode.removeChild(a), e
                };
            return function(h, n) {
                return h = c(h),
                    function(o, p, q, r) {
                        var s, t, u, v, w, x, y, z, A = angular.element("<" + h + ">");
                        try {
                            b.getSelection && (z = b.getSelection()), y = b.getSelectionElement();
                            var B, C;
                            void 0 !== y.tagName && ("div" === y.tagName.toLowerCase() && /taTextElement.+/.test(y.id) && z && z.start && 1 === z.start.offset && 1 === z.end.offset ? (B = y.innerHTML, //i.test(B) && (B = B.replace(//i, "​")), //i.test(B) && (B = B.replace(//i, "​")), /()+/i.test(B) && (B = __.replace(/()+/i, "")), /<\/span>(<\/span>)+/i.test(B) && (B = __.replace(/<\/span>(<\/span>)+/i, "")), /<\/span>/i.test(B) && (B = B.replace(/<\/span>/i, "")), C = "" + B + "", y.innerHTML = C, b.setSelectionToElementEnd(y.childNodes[0]), y = b.getSelectionElement()) : "span" === y.tagName.toLowerCase() && z && z.start && 1 === z.start.offset && 1 === z.end.offset ? (B = y.innerHTML, //i.test(B) && (B = B.replace(//i, "​")), //i.test(B) && (B = B.replace(//i, "​")), /()+/i.test(B) && (B = __.replace(/()+/i, "")), /<\/span>(<\/span>)+/i.test(B) && (B = __.replace(/<\/span>(<\/span>)+/i, "")), /<\/span>/i.test(B) && (B = B.replace(/<\/span>/i, "")), C = "" + B + "", y.innerHTML = C, b.setSelectionToElementEnd(y.childNodes[0]), y = b.getSelectionElement()) : "p" === y.tagName.toLowerCase() && z && z.start && 1 === z.start.offset && 1 === z.end.offset ? (B = y.innerHTML, //i.test(B) && (B = B.replace(//i, "​"), y.innerHTML = B)) : "li" === y.tagName.toLowerCase() && z && z.start && z.start.offset === z.end.offset && (B = y.innerHTML, //i.test(B) && (B = B.replace(//i, ""), y.innerHTML = B)))
                        } catch (a) {}
                        if (y) {
                            var D = angular.element(y),
                                E = y && y.tagName && y.tagName.toLowerCase() || "";
                            if ("insertorderedlist" === o.toLowerCase() || "insertunorderedlist" === o.toLowerCase()) {
                                var F = c("insertorderedlist" === o.toLowerCase() ? "ol" : "ul"),
                                    G = b.getOnlySelectedElements();
                                if (G.length > 1 && ("ol" === E || "ul" === E)) return g(D, G, F, F === E, h);
                                if (E === F) return D[0].childNodes.length !== G.length && 1 === G.length ? (D = angular.element(G[0]), f(D.parent(), D, F, !0, h)) : e(D, h);
                                if ("li" === E && D.parent()[0].tagName.toLowerCase() === F && 1 === D.parent().children().length) return e(D.parent(), h);
                                if ("li" === E && D.parent()[0].tagName.toLowerCase() !== F && 1 === D.parent().children().length) return k(D.parent(), F);
                                if (E.match(i) && !D.hasClass("ta-bind")) {
                                    if (G.length && D[0].childNodes.length !== G.length && 1 === G.length) return D = angular.element(G[0]), f(D.parent(), D, F, F === E, h);
                                    if ("ol" === E || "ul" === E) return k(D, F);
                                    var H = !1;
                                    return angular.forEach(D.children(), function(a) {
                                        a.tagName.match(i) && (H = !0)
                                    }), H ? l(D.children(), D, F) : l([angular.element("
" + y.innerHTML + "")[0]], D, F)
                                }
                                if (E.match(i)) {
                                    if (v = b.getOnlySelectedElements(), 0 === v.length) t = angular.element("<" + F + ">
" + y.innerHTML + ""), D.html(""), D.append(t);
                                    else {
                                        if (1 === v.length && ("ol" === v[0].tagName.toLowerCase() || "ul" === v[0].tagName.toLowerCase())) return v[0].tagName.toLowerCase() === F ? e(angular.element(v[0]), h) : k(angular.element(v[0]), F);
                                        u = "";
                                        var I = [];
                                        for (s = 0; s < v.length; s++)
                                            if (3 !== v[s].nodeType) {
                                                var J = angular.element(v[s]);
                                                if ("li" === v[s].tagName.toLowerCase()) continue;
                                                u += "ol" === v[s].tagName.toLowerCase() || "ul" === v[s].tagName.toLowerCase() ? J[0].innerHTML : "span" !== v[s].tagName.toLowerCase() || "ol" !== v[s].childNodes[0].tagName.toLowerCase() && "ul" !== v[s].childNodes[0].tagName.toLowerCase() ? "<" + c("li") + ">" + J[0].innerHTML + "" : J[0].childNodes[0].innerHTML, I.unshift(J)
                                            }
                                        t = angular.element("<" + F + ">" + u + ""), I.pop().replaceWith(t), angular.forEach(I, function(a) {
                                            a.remove()
                                        })
                                    }
                                    return void b.setSelectionToElementEnd(t[0])
                                }
                            } else {
                                if ("formatblock" === o.toLowerCase()) {
                                    for (x = q.toLowerCase().replace(/[<>]/gi, ""), "default" === x.trim() && (x = h, q = "<" + h + ">"), t = "li" === E ? D.parent() : D; !t[0].tagName || !t[0].tagName.match(i) && !t.parent().attr("contenteditable");) t = t.parent(), E = (t[0].tagName || "").toLowerCase();
                                    if (E === x) {
                                        v = t.children();
                                        var K = !1;
                                        for (s = 0; s < v.length; s++) K = K || v[s].tagName.match(i);
                                        K ? (t.after(v), w = t.next(), t.remove(), t = w) : (A.append(t[0].childNodes), t.after(A), t.remove(), t = A)
                                    } else if (t.parent()[0].tagName.toLowerCase() !== x || t.parent().hasClass("ta-bind"))
                                        if (E.match(j)) t.wrap(q);
                                        else {
                                            for (v = b.getOnlySelectedElements(), 0 === v.length && (v = [t[0]]), s = 0; s < v.length; s++)
                                                if (3 === v[s].nodeType || !v[s].tagName.match(i))
                                                    for (; 3 === v[s].nodeType || !v[s].tagName || !v[s].tagName.match(i);) v[s] = v[s].parentNode;
                                            if (v = v.filter(function(a, b, c) {
                                                    return c.indexOf(a) === b
                                                }), v.length > 1 && (v = v.filter(function(a, b, c) {
                                                    return !("div" === a.nodeName.toLowerCase() && /^taTextElement/.test(a.id))
                                                })), angular.element(v[0]).hasClass("ta-bind")) t = angular.element(q), t[0].innerHTML = v[0].innerHTML, v[0].innerHTML = t[0].outerHTML;
                                            else if ("blockquote" === x) {
                                                for (u = "", s = 0; s < v.length; s++) u += v[s].outerHTML;
                                                for (t = angular.element(q), t[0].innerHTML = u, v[0].parentNode.insertBefore(t[0], v[0]), s = v.length - 1; s >= 0; s--) v[s].parentNode && v[s].parentNode.removeChild(v[s])
                                            } else if ("pre" === x && b.getStateShiftKey()) {
                                                for (u = "", s = 0; s < v.length; s++) u += v[s].outerHTML;
                                                for (t = angular.element(q), t[0].innerHTML = u, v[0].parentNode.insertBefore(t[0], v[0]), s = v.length - 1; s >= 0; s--) v[s].parentNode && v[s].parentNode.removeChild(v[s])
                                            } else
                                                for (s = 0; s < v.length; s++) {
                                                    var L = m(v[s], q);
                                                    v[s] === t[0] && (t = angular.element(L))
                                                }
                                        }
                                    else {
                                        var M = t.parent(),
                                            N = M.contents();
                                        for (s = 0; s < N.length; s++) M.parent().hasClass("ta-bind") && 3 === N[s].nodeType && (A = angular.element("<" + h + ">"), A[0].innerHTML = N[s].outerHTML, N[s] = A[0]), M.parent()[0].insertBefore(N[s], M[0]);
                                        M.remove()
                                    }
                                    return b.setSelectionToElementEnd(t[0]), void t[0].focus()
                                }
                                if ("createlink" === o.toLowerCase()) {
                                    if ("a" === E) return void(b.getSelectionElement().href = q);
                                    var O = '',
                                        P = "",
                                        Q = b.getSelection();
                                    if (Q.collapsed) b.insertHtml(O + q + P, n);
                                    else if (a.getSelection().getRangeAt(0).canSurroundContents()) {
                                        var R = angular.element(O + P)[0];
                                        a.getSelection().getRangeAt(0).surroundContents(R)
                                    }
                                    return
                                }
                                if ("inserthtml" === o.toLowerCase()) return void b.insertHtml(q, n)
                            }
                            try {
                                d[0].execCommand(o, p, q)
                            } catch (a) {}
                        }
                    }
            }
        }]).service("taSelection", ["$document", "taDOM", "$log", function(b, c, d) {
            var e, f = b[0],
                g = function(a, b) {
                    return a.tagName && a.tagName.match(/^br$/i) && 0 === b && !a.previousSibling ? {
                        element: a.parentNode,
                        offset: 0
                    } : {
                        element: a,
                        offset: b
                    }
                },
                h = {
                    getSelection: function() {
                        var b;
                        try {
                            b = a.getSelection().getRangeAt(0)
                        } catch (a) {
                            return
                        }
                        var c = b.commonAncestorContainer,
                            d = {
                                start: g(b.startContainer, b.startOffset),
                                end: g(b.endContainer, b.endOffset),
                                collapsed: b.collapsed
                            };
                        return 3 === c.nodeType && ("div" === c.parentNode.nodeName.toLowerCase() && /^taTextElement/.test(c.parentNode.id) || (c = c.parentNode)), "div" === c.nodeName.toLowerCase() && /^taTextElement/.test(c.id) ? (d.start.element = c.childNodes[d.start.offset], d.end.element = c.childNodes[d.end.offset], d.container = c) : c.parentNode === d.start.element || c.parentNode === d.end.element ? d.container = c.parentNode : d.container = c, d
                    },
                    updateLeftArrowKey: function(b) {
                        var c = a.getSelection().getRangeAt(0);
                        if (c && c.collapsed) {
                            var d = h.getFlattenedDom(c);
                            if (!d.findIndex) return;
                            var e, f, g = c.startContainer,
                                i = d.findIndex(function(a, b) {
                                    if (a.node === g) return !0;
                                    var c = a.parents.indexOf(g);
                                    return c !== -1
                                });
                            if (d.forEach(function(a, b) {
                                    a.parents.forEach(function(a, b) {})
                                }), i + 1 < d.length && (f = d[i + 1].node), f && f.textContent && (e = /^\ufeff([^\ufeff]*)$/.exec(f.textContent))) return;
                            var j;
                            if (i > 0 && (j = d[i - 1].node), 0 === c.startOffset && j && (e = /^\ufeff([^\ufeff]*)$/.exec(j.textContent))) return void h.setSelectionToElementEnd(j)
                        }
                    },
                    updateRightArrowKey: function(a) {},
                    getFlattenedDom: function(a) {
                        function b(a) {
                            if (a.node.childNodes.length) {
                                var c = Array.prototype.slice.call(a.node.childNodes);
                                c.forEach(function(c) {
                                    var d = a.parents.slice();
                                    d.slice(-1)[0] !== a.node && d.push(a.node), b({
                                        parents: d,
                                        node: c
                                    })
                                })
                            } else d.push({
                                parents: a.parents,
                                node: a.node
                            })
                        }
                        var c = a.commonAncestorContainer.parentNode;
                        if (!c) return a.commonAncestorContainer.childNodes;
                        var d = Array.prototype.slice.call(c.childNodes),
                            e = d.indexOf(a.startContainer);
                        return e + 1 < d.length && e > 0 || c.parentNode && (c = c.parentNode), d = [], b({
                            parents: [c],
                            node: c
                        }), d
                    },
                    getOnlySelectedElements: function() {
                        var b = a.getSelection().getRangeAt(0),
                            c = b.commonAncestorContainer;
                        return c = 3 === c.nodeType ? c.parentNode : c, b.getNodes([1], function(a) {
                            return a.parentNode === c
                        })
                    },
                    getAllSelectedElements: function() {
                        var b = a.getSelection().getRangeAt(0),
                            c = b.commonAncestorContainer;
                        c = 3 === c.nodeType ? c.parentNode : c;
                        var d = b.getNodes([1], function(a) {
                                return a.parentNode === c
                            }),
                            e = c.innerHTML;
                        if (e = e.replace(/]+>\ufeff?<\/span>/gi, ""), e === b.toHtml() && ("div" !== c.nodeName.toLowerCase() || !/^taTextElement/.test(c.id))) {
                            for (var f = [], g = d.length; g--; f.unshift(d[g]));
                            d = f, d.push(c)
                        }
                        return d
                    },
                    getSelectionElement: function() {
                        var a = h.getSelection();
                        return a ? h.getSelection().container : void 0
                    },
                    setSelection: function(b, c, d, e) {
                        var f = a.createRange();
                        f.setStart(b, d), f.setEnd(c, e), a.getSelection().setSingleRange(f)
                    },
                    setSelectionBeforeElement: function(b) {
                        var c = a.createRange();
                        c.selectNode(b), c.collapse(!0), a.getSelection().setSingleRange(c)
                    },
                    setSelectionAfterElement: function(b) {
                        var c = a.createRange();
                        c.selectNode(b), c.collapse(!1), a.getSelection().setSingleRange(c)
                    },
                    setSelectionToElementStart: function(b) {
                        var c = a.createRange();
                        c.selectNodeContents(b), c.collapse(!0), a.getSelection().setSingleRange(c)
                    },
                    setSelectionToElementEnd: function(b) {
                        var c = a.createRange();
                        c.selectNodeContents(b), c.collapse(!1), b.childNodes && b.childNodes[b.childNodes.length - 1] && "br" === b.childNodes[b.childNodes.length - 1].nodeName && (c.startOffset = c.endOffset = c.startOffset - 1), a.getSelection().setSingleRange(c)
                    },
                    setStateShiftKey: function(a) {
                        e = a
                    },
                    getStateShiftKey: function() {
                        return e
                    },
                    insertHtml: function(b, d) {
                        var e, g, j, l, m, n, o, p = angular.element("
" + b + ""),
                            q = a.getSelection().getRangeAt(0),
                            r = f.createDocumentFragment(),
                            s = p[0].childNodes,
                            t = !0;
                        if (s.length > 0) {
                            for (l = [], j = 0; j < s.length; j++) {
                                var u = s[j];
                                "p" === u.nodeName.toLowerCase() && "" === u.innerHTML.trim() || (t = t && !i.test(u.nodeName), l.push(u))
                            }
                            for (var v = 0; v < l.length; v++) n = r.appendChild(l[v]);
                            !t && q.collapsed && /^(|)$/i.test(q.startContainer.innerHTML) && q.selectNode(q.startContainer)
                        } else t = !0, n = r = f.createTextNode(b);
                        if (t) q.deleteContents();
                        else if (q.collapsed && q.startContainer !== d)
                            if (q.startContainer.innerHTML && q.startContainer.innerHTML.match(/^<[^>]*>$/i)) e = q.startContainer, 1 === q.startOffset ? (q.setStartAfter(e), q.setEndAfter(e)) : (q.setStartBefore(e), q.setEndBefore(e));
                            else {
                                if (3 === q.startContainer.nodeType && q.startContainer.parentNode !== d)
                                    for (e = q.startContainer.parentNode, g = e.cloneNode(), c.splitNodes(e.childNodes, e, g, q.startContainer, q.startOffset); !k.test(e.nodeName);) {
                                        angular.element(e).after(g), e = e.parentNode;
                                        var w = g;
                                        g = e.cloneNode(), c.splitNodes(e.childNodes, e, g, w)
                                    } else e = q.startContainer, g = e.cloneNode(), c.splitNodes(e.childNodes, e, g, void 0, void 0, q.startOffset);
                                if (angular.element(e).after(g), q.setStartAfter(e), q.setEndAfter(e), /^(|)$/i.test(e.innerHTML.trim()) && (q.setStartBefore(e), q.setEndBefore(e), angular.element(e).remove()), /^(|)$/i.test(g.innerHTML.trim()) && angular.element(g).remove(), "li" === e.nodeName.toLowerCase()) {
                                    for (o = f.createDocumentFragment(), m = 0; m < r.childNodes.length; m++) p = angular.element("
"), c.transferChildNodes(r.childNodes[m], p[0]), c.transferNodeAttributes(r.childNodes[m], p[0]), o.appendChild(p[0]);
                                    r = o, n && (n = r.childNodes[r.childNodes.length - 1], n = n.childNodes[n.childNodes.length - 1])
                                }
                            }
                        else q.deleteContents();
                        q.insertNode(r), n && h.setSelectionToElementEnd(n)
                    }
                };
            return h
        }]).service("taDOM", function() {
            var a = {
                getByAttribute: function(b, c) {
                    var d = [],
                        e = b.children();
                    return e.length && angular.forEach(e, function(b) {
                        d = d.concat(a.getByAttribute(angular.element(b), c))
                    }), void 0 !== b.attr(c) && d.push(b), d
                },
                transferChildNodes: function(a, b) {
                    for (b.innerHTML = ""; a.childNodes.length > 0;) b.appendChild(a.childNodes[0]);
                    return b
                },
                splitNodes: function(b, c, d, e, f, g) {
                    if (!e && isNaN(g)) throw new Error("taDOM.splitNodes requires a splitNode or splitIndex");
                    for (var h = document.createDocumentFragment(), i = document.createDocumentFragment(), j = 0; b.length > 0 && (isNaN(g) || g !== j) && b[0] !== e;) h.appendChild(b[0]), j++;
                    for (!isNaN(f) && f >= 0 && b[0] && (h.appendChild(document.createTextNode(b[0].nodeValue.substring(0, f))), b[0].nodeValue = b[0].nodeValue.substring(f)); b.length > 0;) i.appendChild(b[0]);
                    a.transferChildNodes(h, c), a.transferChildNodes(i, d)
                },
                transferNodeAttributes: function(a, b) {
                    for (var c = 0; c < a.attributes.length; c++) b.setAttribute(a.attributes[c].name, a.attributes[c].value);
                    return b
                }
            };
            return a
        }), angular.module("textAngular.validators", []).directive("taMaxText", function() {
            return {
                restrict: "A",
                require: "ngModel",
                link: function(a, b, c, d) {
                    var e = parseInt(a.$eval(c.taMaxText));
                    if (isNaN(e)) throw "Max text must be an integer";
                    c.$observe("taMaxText", function(a) {
                        if (e = parseInt(a), isNaN(e)) throw "Max text must be an integer";
                        d.$dirty && d.$validate()
                    }), d.$validators.taMaxText = function(a) {
                        var b = angular.element("
");
                        return b.html(a), b.text().length <= e
                    }
                }
            }
        }).directive("taMinText", function() {
            return {
                restrict: "A",
                require: "ngModel",
                link: function(a, b, c, d) {
                    var e = parseInt(a.$eval(c.taMinText));
                    if (isNaN(e)) throw "Min text must be an integer";
                    c.$observe("taMinText", function(a) {
                        if (e = parseInt(a), isNaN(e)) throw "Min text must be an integer";
                        d.$dirty && d.$validate()
                    }), d.$validators.taMinText = function(a) {
                        var b = angular.element("
");
                        return b.html(a), !b.text().length || b.text().length >= e
                    }
                }
            }
        }), angular.module("textAngular.taBind", ["textAngular.factories", "textAngular.DOM"]).service("_taBlankTest", [function() {
            return function(a) {
                if (!a) return !0;
                var b = d(a);
                return "" === b && !/]+>/.test(a)
            }
        }]).directive("taButton", [function() {
            return {
                link: function(a, b, c) {
                    b.attr("unselectable", "on"), b.on("mousedown", function(a, b) {
                        return b && angular.extend(a, b), a.preventDefault(), !1
                    })
                }
            }
        }]).directive("taBind", ["taSanitize", "$timeout", "$document", "taFixChrome", "taBrowserTag", "taSelection", "taSelectableElements", "taApplyCustomRenderers", "taOptions", "_taBlankTest", "$parse", "taDOM", "textAngularManager", function(b, c, d, e, f, h, j, l, o, p, q, r, s) {
            return {
                priority: 2,
                require: ["ngModel", "?ngModelOptions"],
                link: function(f, r, u, v) {
                    function w(a) {
                        var b;
                        return V.forEach(function(c) {
                            if (c.keyCode === a.keyCode) {
                                var d = (a.metaKey ? N : 0) + (a.ctrlKey ? M : 0) + (a.shiftKey ? P : 0) + (a.altKey ? O : 0);
                                if (c.forbiddenModifiers & d) return;
                                c.mustHaveModifiers.every(function(a) {
                                    return d & a
                                }) && (b = c.specialKey)
                            }
                        }), b
                    }
                    var x, y, z, A, B = v[0],
                        C = v[1] || {},
                        D = void 0 !== r.attr("contenteditable") && r.attr("contenteditable"),
                        E = D || "textarea" === r[0].tagName.toLowerCase() || "input" === r[0].tagName.toLowerCase(),
                        F = !1,
                        G = !1,
                        H = !1,
                        I = u.taUnsafeSanitizer || o.disableSanitizer,
                        J = u.taKeepStyles || o.keepStyles,
                        K = /^(9|19|20|27|33|34|35|36|37|38|39|40|45|112|113|114|115|116|117|118|119|120|121|122|123|144|145)$/i,
                        L = /^(8|13|32|46|59|61|107|109|173|186|187|188|189|190|191|192|219|220|221|222)$/i,
                        M = 1,
                        N = 2,
                        O = 4,
                        P = 8,
                        Q = 13,
                        R = 16,
                        S = 9,
                        T = 37,
                        U = 39,
                        V = [{
                            specialKey: "UndoKey",
                            forbiddenModifiers: O + P,
                            mustHaveModifiers: [N + M],
                            keyCode: 90
                        }, {
                            specialKey: "RedoKey",
                            forbiddenModifiers: O,
                            mustHaveModifiers: [N + M, P],
                            keyCode: 90
                        }, {
                            specialKey: "RedoKey",
                            forbiddenModifiers: O + P,
                            mustHaveModifiers: [N + M],
                            keyCode: 89
                        }, {
                            specialKey: "TabKey",
                            forbiddenModifiers: N + P + O + M,
                            mustHaveModifiers: [],
                            keyCode: S
                        }, {
                            specialKey: "ShiftTabKey",
                            forbiddenModifiers: N + O + M,
                            mustHaveModifiers: [P],
                            keyCode: S
                        }];
                    void 0 === u.taDefaultWrap && (u.taDefaultWrap = "p"), "" === u.taDefaultWrap ? (z = "", A = void 0 === g.ie ? "

" : g.ie >= 11 ? "


" : g.ie <= 8 ? "
 " : "
 ") : (z = void 0 === g.ie || g.ie >= 11 ? "br" === u.taDefaultWrap.toLowerCase() ? "

" : "<" + u.taDefaultWrap + ">
" : g.ie <= 8 ? "<" + u.taDefaultWrap.toUpperCase() + ">" : "<" + u.taDefaultWrap + ">", A = void 0 === g.ie || g.ie >= 11 ? "br" === u.taDefaultWrap.toLowerCase() ? "

" : "<" + u.taDefaultWrap + ">
" : g.ie <= 8 ? "<" + u.taDefaultWrap.toUpperCase() + "> " : "<" + u.taDefaultWrap + "> "), C.$options || (C.$options = {});
                    var W = function(a) {
                        if (p(a)) return a;
                        var b = angular.element("
" + a + "");
                        if (0 === b.children().length) a = "<" + u.taDefaultWrap + ">" + a + "";
                        else {
                            var c, d = b[0].childNodes,
                                e = !1;
                            for (c = 0; c < d.length && !(e = d[c].nodeName.toLowerCase().match(i)); c++);
                            if (e)
                                for (a = "", c = 0; c < d.length; c++) {
                                    var f = d[c],
                                        g = f.nodeName.toLowerCase();
                                    if ("#comment" === g) a += "";
                                    else if ("#text" === g) {
                                        var h = f.textContent;
                                        a += h.trim() ? "<" + u.taDefaultWrap + ">" + h + "" : h
                                    } else if (g.match(i)) a += f.outerHTML;
                                    else {
                                        var j = f.outerHTML || f.nodeValue;
                                        a += "" !== j.trim() ? "<" + u.taDefaultWrap + ">" + j + "" : j
                                    }
                                } else a = "<" + u.taDefaultWrap + ">" + a + ""
                        }
                        return a
                    };
                    u.taPaste && (y = q(u.taPaste)), r.addClass("ta-bind");
                    var X;
                    f["$undoManager" + (u.id || "")] = B.$undoManager = {
                        _stack: [],
                        _index: 0,
                        _max: 1e3,
                        push: function(a) {
                            return "undefined" == typeof a || null === a || "undefined" != typeof this.current() && null !== this.current() && a === this.current() ? a : (this._index < this._stack.length - 1 && (this._stack = this._stack.slice(0, this._index + 1)), this._stack.push(a), X && c.cancel(X), this._stack.length > this._max && this._stack.shift(), this._index = this._stack.length - 1, a)
                        },
                        undo: function() {
                            return this.setToIndex(this._index - 1)
                        },
                        redo: function() {
                            return this.setToIndex(this._index + 1)
                        },
                        setToIndex: function(a) {
                            if (!(a < 0 || a > this._stack.length - 1)) return this._index = a, this.current()
                        },
                        current: function() {
                            return this._stack[this._index]
                        }
                    };
                    var Y, Z = function() {
                            if (D) return r[0].innerHTML;
                            if (E) return r.val();
                            throw "textAngular Error: attempting to update non-editable taBind"
                        },
                        $ = function(a) {
                            return f.$emit("ta-element-select", this), a.preventDefault(), !1
                        },
                        _ = f["reApplyOnSelectorHandlers" + (u.id || "")] = function() {
                            F || angular.forEach(j, function(a) {
                                r.find(a).off("click", $).on("click", $)
                            })
                        },
                        aa = function(a, b, c) {
                            H = c || !1, "undefined" != typeof b && null !== b || (b = D), "undefined" != typeof a && null !== a || (a = Z()), p(a) ? ("" !== B.$viewValue && B.$setViewValue(""), b && "" !== B.$undoManager.current() && B.$undoManager.push("")) : (_(), B.$viewValue !== a && (B.$setViewValue(a), b && B.$undoManager.push(a))), B.$render()
                        },
                        ba = function(a) {
                            r[0].innerHTML = a
                        },
                        ca = f["$undoTaBind" + (u.id || "")] = function() {
                            if (!F && D) {
                                var a = B.$undoManager.undo();
                                "undefined" != typeof a && null !== a && (ba(a), aa(a, !1), Y && c.cancel(Y), Y = c(function() {
                                    r[0].focus(), h.setSelectionToElementEnd(r[0])
                                }, 1))
                            }
                        },
                        da = f["$redoTaBind" + (u.id || "")] = function() {
                            if (!F && D) {
                                var a = B.$undoManager.redo();
                                "undefined" != typeof a && null !== a && (ba(a), aa(a, !1), Y && c.cancel(Y), Y = c(function() {
                                    r[0].focus(), h.setSelectionToElementEnd(r[0])
                                }, 1))
                            }
                        };
                    f["updateTaBind" + (u.id || "")] = function() {
                        F || aa(void 0, void 0, !0)
                    };
                    var ea = function(a) {
                        return B.$oldViewValue = b(e(a, J), B.$oldViewValue, I)
                    };
                    if (r.attr("required") && (B.$validators.required = function(a, b) {
                            return !p(a || b)
                        }), B.$parsers.push(ea), B.$parsers.unshift(W), B.$formatters.push(ea), B.$formatters.unshift(W), B.$formatters.unshift(function(a) {
                            return B.$undoManager.push(a || "")
                        }), E)
                        if (f.events = {}, D) {
                            var fa = !1,
                                ga = function(a) {
                                    var d = void 0 !== a && a.match(/content=["']*OneNote.File/i);
                                    if (a && a.trim().length) {
                                        if (a.match(/class=["']*Mso(Normal|List)/i) || a.match(/content=["']*Word.Document/i) || a.match(/content=["']*OneNote.File/i)) {
                                            var e = a.match(/([\s\S]*?)/i);
                                            e = e ? e[1] : a, e = e.replace(/[\s\S]*?<\/o:p>/gi, "").replace(/class=(["']|)MsoNormal(["']|)/gi, "");
                                            var g = angular.element("
" + e + ""),
                                                i = angular.element("
"),
                                                j = {
                                                    element: null,
                                                    lastIndent: [],
                                                    lastLi: null,
                                                    isUl: !1
                                                };
                                            j.lastIndent.peek = function() {
                                                var a = this.length;
                                                if (a > 0) return this[a - 1]
                                            };
                                            for (var k = function(a) {
                                                    j.isUl = a, j.element = angular.element(a ? "
" : "
"), j.lastIndent = [], j.lastIndent.peek = function() {
                                                        var a = this.length;
                                                        if (a > 0) return this[a - 1]
                                                    }, j.lastLevelMatch = null
                                                }, l = 0; l <= g[0].childNodes.length; l++)
                                                if (g[0].childNodes[l] && "#text" !== g[0].childNodes[l].nodeName) {
                                                    var m = g[0].childNodes[l].tagName.toLowerCase();
                                                    if ("p" === m || "ul" === m || "h1" === m || "h2" === m || "h3" === m || "h4" === m || "h5" === m || "h6" === m || "table" === m) {
                                                        var n = angular.element(g[0].childNodes[l]),
                                                            o = (n.attr("class") || "").match(/MsoList(Bullet|Number|Paragraph)(CxSp(First|Middle|Last)|)/i);
                                                        if (o) {
                                                            if (n[0].childNodes.length < 2 || n[0].childNodes[1].childNodes.length < 1) continue;
                                                            var p = "bullet" === o[1].toLowerCase() || "number" !== o[1].toLowerCase() && !(/^[^0-9a-z<]*[0-9a-z]+[^0-9a-z<>]]" : ""), j.lastLi.append(j.element);
                                                            else if (null != j.lastIndent.peek() && j.lastIndent.peek() > s) {
                                                                for (; null != j.lastIndent.peek() && j.lastIndent.peek() > s;)
                                                                    if ("li" !== j.element.parent()[0].tagName.toLowerCase()) {
                                                                        if (!/[uo]l/i.test(j.element.parent()[0].tagName.toLowerCase())) break;
                                                                        j.element = j.element.parent(), j.lastIndent.pop()
                                                                    } else j.element = j.element.parent();
                                                                j.isUl = "ul" === j.element[0].tagName.toLowerCase(), p !== j.isUl && (k(p), i.append(j.element))
                                                            }
                                                            j.lastLevelMatch = t, s !== j.lastIndent.peek() && j.lastIndent.push(s), j.lastLi = angular.element("
"), j.element.append(j.lastLi), j.lastLi.html(n.html().replace(/[\s\S]*?/gi, "")), n.remove()
                                                        } else k(!1), i.append(n)
                                                    }
                                                }
                                            var u = function(a) {
                                                a = angular.element(a);
                                                for (var b = a[0].childNodes.length - 1; b >= 0; b--) a.after(a[0].childNodes[b]);
                                                a.remove()
                                            };angular.forEach(i.find("span"), function(a) {
                                                a.removeAttribute("lang"), a.attributes.length <= 0 && u(a)
                                            }), angular.forEach(i.find("font"), u), a = i.html(), d && (a = i.html() || g.html()), a = a.replace(/\n/g, " ")} else {
                                            if (a = a.replace(/<(|\/)meta[^>]*?>/gi, ""), a.match(/<[^>]*?(ta-bind)[^>]*?>/)) {if (a.match(/<[^>]*?(text-angular)[^>]*?>/)) {var v = angular.element("" + a + "");
                                                    v.find("textarea").remove();for (var w = 0; w < binds.length; w++) {for (var x = binds[w][0].parentNode.parentNode, z = 0; z < binds[w][0].childNodes.length; z++) x.parentNode.insertBefore(binds[w][0].childNodes[z], x);x.parentNode.removeChild(x)}
                                                    a = v.html().replace('', "")}} else a.match(/^.<\/span>/gi) || (a = a.replace(/<(|\/)span[^>]*?>/gi, "")));a = a.replace(/]*?>/gi, "").replace(/( | )<\/span>/gi, " ")}
                                        //i.test(a) && /(|).*/i.test(a) === !1 && (a = a.replace(/.*<\/li(\s.*)?>/i, "
$&")), a = a.replace(/^[ |\u00A0]+/gm, function(a) {
                                            for (var b = "", c = 0; c < a.length; c++) b += " ";
                                            return b
                                        }).replace(/\n|\r\n|\r/g, "").replace(/\t/g, "    "), y && (a = y(f, {
                                            $html: a
                                        }) || a), a = a.replace(/]*?)("|')>([^<]+?)<\/span>/g, "$5"), a = b(a, "", I), h.insertHtml(a, r[0]), c(function() {
                                            B.$setViewValue(Z()), fa = !1, r.removeClass("processing-paste")
                                        }, 0)
                                    } else fa = !1, r.removeClass("processing-paste")
                                };
                            r.on("paste", f.events.paste = function(b, e) {
                                if (e && angular.extend(b, e), F || fa) return b.stopPropagation(), b.preventDefault(), !1;
                                fa = !0, r.addClass("processing-paste");
                                var f, g = (b.originalEvent || b).clipboardData;
                                if (!g && window.clipboardData && window.clipboardData.getData) return f = window.clipboardData.getData("Text"), ga(f), b.stopPropagation(), b.preventDefault(), !1;
                                if (g && g.getData && g.types.length > 0) {
                                    for (var h = "", i = 0; i < g.types.length; i++) h += " " + g.types[i];
                                    return /text\/html/i.test(h) ? f = g.getData("text/html") : /text\/plain/i.test(h) && (f = g.getData("text/plain")), ga(f), b.stopPropagation(), b.preventDefault(), !1
                                }
                                var j = a.saveSelection(),
                                    k = angular.element('');
                                d.find("body").append(k), k[0].focus(), c(function() {
                                    a.restoreSelection(j), ga(k[0].innerHTML), r[0].focus(), k.remove()
                                }, 0)
                            }), r.on("cut", f.events.cut = function(a) {
                                F ? a.preventDefault() : c(function() {
                                    B.$setViewValue(Z())
                                }, 0)
                            }), r.on("keydown", f.events.keydown = function(a, b) {
                                b && angular.extend(a, b), a.keyCode === R ? h.setStateShiftKey(!0) : h.setStateShiftKey(!1), a.specialKey = w(a);
                                var c;
                                if (o.keyMappings.forEach(function(b) {
                                        a.specialKey === b.commandKeyCode && (a.specialKey = void 0), b.testForKey(a) && (c = b.commandKeyCode), "UndoKey" !== b.commandKeyCode && "RedoKey" !== b.commandKeyCode || b.enablePropagation || a.preventDefault()
                                    }), "undefined" != typeof c && (a.specialKey = c), "undefined" == typeof a.specialKey || "UndoKey" === a.specialKey && "RedoKey" === a.specialKey || (a.preventDefault(), s.sendKeyCommand(f, a)), !(F || ("UndoKey" === a.specialKey && (ca(), a.preventDefault()), "RedoKey" === a.specialKey && (da(), a.preventDefault()), a.keyCode !== Q || a.shiftKey || a.ctrlKey || a.metaKey || a.altKey))) {
                                      var d, e = function(a, b) {
                                            for (var c = 0; c < a.length; c++)
                                                if (a[c] === b) return !0;
                                            return !1
                                        },
                                        g = h.getSelectionElement();
                                    if (!g.nodeName.match(k)) return;
                                    var i = angular.element(z),
                                        j = ["blockquote", "ul", "ol"];
                                    if (e(j, g.parentNode.tagName.toLowerCase())) {
                                        if (/^$/i.test(g.innerHTML.trim()) && !g.nextSibling) {
                                            d = angular.element(g);
                                            var l = d.parent();
                                            l.after(i), d.remove(), 0 === l.children().length && l.remove(), h.setSelectionToElementStart(i[0]), a.preventDefault()
                                        }
                                        /^<[^>]+><\/[^>]+>$/i.test(g.innerHTML.trim()) && (d = angular.element(g), d.after(i), d.remove(), h.setSelectionToElementStart(i[0]), a.preventDefault())
                                    }
                                }
                            });
                            var ha;
                            r.on("keyup", f.events.keyup = function(a, b) {
                                if (b && angular.extend(a, b), h.setStateShiftKey(!1), a.keyCode === S) {
                                    var d = h.getSelection();
                                    return void(d.start.element === r[0] && r.children().length && h.setSelectionToElementStart(r.children()[0]))
                                }
                                if (a.keyCode !== T || a.shiftKey || h.updateLeftArrowKey(r), a.keyCode !== U || a.shiftKey || h.updateRightArrowKey(r), X && c.cancel(X), !F && !K.test(a.keyCode))
                                    if (a.keyCode === Q && (a.ctrlKey || a.metaKey || a.altKey));
                                    else {
                                        if ("" !== z && "" !== z && a.keyCode === Q && !a.ctrlKey && !a.metaKey && !a.altKey) {
                                            for (var e = h.getSelectionElement(); !e.nodeName.match(k) && e !== r[0];) e = e.parentNode;
                                            if (a.shiftKey) {
                                                var f = e.tagName.toLowerCase();
                                                if ((f === u.taDefaultWrap || "li" === f || "pre" === f || "div" === f) && !/.+/.test(e.innerHTML.trim())) {
                                                    var g = e.previousSibling;
                                                    g && (g.innerHTML = g.innerHTML + "", angular.element(e).remove(), h.setSelectionToElementEnd(g))
                                                }
                                            } else if (e.tagName.toLowerCase() !== u.taDefaultWrap && "li" !== e.nodeName.toLowerCase() && ("" === e.innerHTML.trim() || "" === e.innerHTML.trim())) {
                                                var i = angular.element(z);
                                                angular.element(e).replaceWith(i), h.setSelectionToElementStart(i[0])
                                            }
                                        }
                                        var j = Z();
                                        "" === z || "" !== j.trim() && "" !== j.trim() ? "<" !== j.substring(0, 1) && "" !== u.taDefaultWrap : (ba(z), h.setSelectionToElementStart(r.children()[0]));
                                        var l = x !== a.keyCode && L.test(a.keyCode);
                                        ha && c.cancel(ha), ha = c(function() {
                                            aa(j, l, !0)
                                        }, C.$options.debounce || 400), l || (X = c(function() {
                                            B.$undoManager.push(j)
                                        }, 250)), x = a.keyCode
                                    }
                            });
                            var ia;
                            if (r.on("input", function() {
                                    Z() !== B.$viewValue && (ia && c.cancel(ia), ia = c(function() {
                                        var b = a.saveSelection(),
                                            c = Z();
                                        c !== B.$viewValue && aa(c, !0), 0 !== B.$viewValue.length && a.restoreSelection(b)
                                    }, 1e3))
                                }), r.on("blur", f.events.blur = function() {
                                    G = !1, F ? (H = !0, B.$render()) : aa(void 0, void 0, !0)
                                }), u.placeholder && (g.ie > 8 || void 0 === g.ie)) {
                                var ja;
                                if (!u.id) throw "textAngular Error: An unique ID is required for placeholders to work";
                                ja = m("#" + u.id + ".placeholder-text:before", 'content: "' + u.placeholder + '"'), f.$on("$destroy", function() {
                                    n(ja)
                                })
                            }
                            r.on("focus", f.events.focus = function() {
                                G = !0, r.removeClass("placeholder-text"), _()
                            }), r.on("mouseup", f.events.mouseup = function() {
                                var a = h.getSelection();
                                a && a.start.element === r[0] && r.children().length && h.setSelectionToElementStart(r.children()[0])
                            }), r.on("mousedown", f.events.mousedown = function(a, b) {
                                b && angular.extend(a, b), a.stopPropagation()
                            })
                        } else {
                            r.on("change blur", f.events.change = f.events.blur = function() {
                                F || B.$setViewValue(Z())
                            }), r.on("keydown", f.events.keydown = function(a, b) {
                                if (b && angular.extend(a, b), a.keyCode === S) {
                                    var c = this.selectionStart,
                                        d = this.selectionEnd,
                                        e = r.val();
                                    if (a.shiftKey) {
                                        var f = e.lastIndexOf("\n", c),
                                            g = e.lastIndexOf("\t", c);
                                        g !== -1 && g >= f && (r.val(e.substring(0, g) + e.substring(g + 1)), this.selectionStart = this.selectionEnd = c - 1)
                                    } else r.val(e.substring(0, c) + "\t" + e.substring(d)), this.selectionStart = this.selectionEnd = c + 1;
                                    a.preventDefault()
                                }
                            });
                            var ka = function(a, b) {
                                    for (var c = "", d = 0; d < b; d++) c += a;
                                    return c
                                },
                                la = function(a, b, c) {
                                    for (var d = 0; d < a.length; d++) b.call(c, d, a[d])
                                },
                                ma = function(a, b) {
                                    var c = "",
                                        d = a.childNodes;
                                    return b++, c += ka("\t", b - 1) + a.outerHTML.substring(0, 4), la(d, function(a, d) {
                                        var e = d.nodeName.toLowerCase();
                                        return "#comment" === e ? void(c += "") : "#text" === e ? void(c += d.textContent) : void(d.outerHTML && (c += "ul" === e || "ol" === e ? "\n" + ma(d, b) : "\n" + ka("\t", b) + d.outerHTML))
                                    }), c += "\n" + ka("\t", b - 1) + a.outerHTML.substring(a.outerHTML.lastIndexOf("<"))
                                };
                            B.$formatters.unshift(function(a) {
                                var b = angular.element("
" + a + "")[0].childNodes;
                                return b.length > 0 && (a = "", la(b, function(b, c) {
                                    var d = c.nodeName.toLowerCase();
                                    return "#comment" === d ? void(a += "") : "#text" === d ? void(a += c.textContent) : void(c.outerHTML && (a.length > 0 && (a += "\n"), a += "ul" === d || "ol" === d ? "" + ma(c, 0) : "" + c.outerHTML))
                                })), a
                            })
                        }
                    var na, oa = function(a, b) {
                            if (b && angular.extend(a, b), !t && !F) {
                                t = !0;
                                var d;
                                d = a.originalEvent ? a.originalEvent.dataTransfer : a.dataTransfer, f.$emit("ta-drop-event", this, a, d), c(function() {
                                    t = !1, aa(void 0, void 0, !0)
                                }, 100)
                            }
                        },
                        pa = !1;
                    B.$render = function() {
                        if (!pa) {
                            pa = !0;
                            var a = B.$viewValue || "";
                            H || (D && G && (r.removeClass("placeholder-text"), na && c.cancel(na), na = c(function() {
                                G || (r[0].focus(), h.setSelectionToElementEnd(r.children()[r.children().length - 1])), na = void 0
                            }, 1)), D ? (ba(u.placeholder ? "" === a ? z : a : "" === a ? z : a), F ? r.off("drop", oa) : (_(), r.on("drop", oa))) : "textarea" !== r[0].tagName.toLowerCase() && "input" !== r[0].tagName.toLowerCase() ? ba(l(a)) : r.val(a)), D && u.placeholder && ("" === a ? G ? r.removeClass("placeholder-text") : r.addClass("placeholder-text") : r.removeClass("placeholder-text")), pa = H = !1
                        }
                    }, u.taReadonly && (F = f.$eval(u.taReadonly), F ? (r.addClass("ta-readonly"), "textarea" !== r[0].tagName.toLowerCase() && "input" !== r[0].tagName.toLowerCase() || r.attr("disabled", "disabled"), void 0 !== r.attr("contenteditable") && r.attr("contenteditable") && r.removeAttr("contenteditable")) : (r.removeClass("ta-readonly"), "textarea" === r[0].tagName.toLowerCase() || "input" === r[0].tagName.toLowerCase() ? r.removeAttr("disabled") : D && r.attr("contenteditable", "true")), f.$watch(u.taReadonly, function(a, b) {
                        b !== a && (a ? (r.addClass("ta-readonly"), "textarea" !== r[0].tagName.toLowerCase() && "input" !== r[0].tagName.toLowerCase() || r.attr("disabled", "disabled"), void 0 !== r.attr("contenteditable") && r.attr("contenteditable") && r.removeAttr("contenteditable"), angular.forEach(j, function(a) {
                            r.find(a).on("click", $)
                        }), r.off("drop", oa)) : (r.removeClass("ta-readonly"), "textarea" === r[0].tagName.toLowerCase() || "input" === r[0].tagName.toLowerCase() ? r.removeAttr("disabled") : D && r.attr("contenteditable", "true"), angular.forEach(j, function(a) {
                            r.find(a).off("click", $)
                        }), r.on("drop", oa)), F = a)
                    })), D && !F && (angular.forEach(j, function(a) {
                        r.find(a).on("click", $)
                    }), r.on("drop", oa))
                }
            }
        }]);
        var t = !1,
            u = angular.module("textAngular", ["ngSanitize", "textAngularSetup", "textAngular.factories", "textAngular.DOM", "textAngular.validators", "textAngular.taBind"]);
        return u.config([function() {
            angular.forEach(e, function(a, b) {
                delete e[b]
            })
        }]), u.directive("textAngular", ["$compile", "$timeout", "taOptions", "taSelection", "taExecCommand", "textAngularManager", "$document", "$animate", "$log", "$q", "$parse", function(b, c, d, e, f, g, h, i, j, k, l) {
            return {
                require: "?ngModel",
                scope: {},
                restrict: "EA",
                priority: 2,
                link: function(m, n, o, p) {
                    var q, r, s, t, u, v, w, x, y, z, A, B, C = o.serial ? o.serial : Math.floor(1e16 * Math.random());
                    m._name = o.name ? o.name : "textAngularEditor" + C;
                    var D = function(a, b, d) {
                        c(function() {
                            a.one(b, d)
                        }, 100)
                    };
                    if (y = f(o.taDefaultWrap),
                        angular.extend(m, angular.copy(d), {
                            wrapSelection: function(a, b, c) {
                                "undo" === a.toLowerCase() ? m["$undoTaBindtaTextElement" + C]() : "redo" === a.toLowerCase() ? m["$redoTaBindtaTextElement" + C]() : (y(a, !1, b, m.defaultTagAttributes), c && m["reApplyOnSelectorHandlerstaTextElement" + C](), m.displayElements.text[0].focus())
                            },
                            showHtml: m.$eval(o.taShowHtml) || !1
                        }), o.taFocussedClass && (m.classes.focussed = o.taFocussedClass), o.taTextEditorClass && (m.classes.textEditor = o.taTextEditorClass), o.taHtmlEditorClass && (m.classes.htmlEditor = o.taHtmlEditorClass), o.taDefaultTagAttributes) try {
                        angular.extend(m.defaultTagAttributes, angular.fromJson(o.taDefaultTagAttributes))
                    } catch (a) {
                        j.error(a)
                    }
                    o.taTextEditorSetup && (m.setup.textEditorSetup = m.$parent.$eval(o.taTextEditorSetup)), o.taHtmlEditorSetup && (m.setup.htmlEditorSetup = m.$parent.$eval(o.taHtmlEditorSetup)), o.taFileDrop ? m.fileDropHandler = m.$parent.$eval(o.taFileDrop) : m.fileDropHandler = m.defaultFileDropHandler, w = n[0].innerHTML, n[0].innerHTML = "", m.displayElements = {
                        forminput: angular.element(""),
                        html: angular.element("
"),
                        text: angular.element("
"),
                        scrollWindow: angular.element("
"),
                        popover: angular.element('
'),
                        popoverArrow: angular.element('
'),
                        popoverContainer: angular.element('
'),
                        resize: {
                            overlay: angular.element('
'),
                            background: angular.element('
'),
                            anchors: [angular.element('
'), angular.element('
'), angular.element('
'), angular.element('
')],
                            info: angular.element('
')
                        }
                    }, m.displayElements.popover.append(m.displayElements.popoverArrow), m.displayElements.popover.append(m.displayElements.popoverContainer), m.displayElements.scrollWindow.append(m.displayElements.popover), m.displayElements.popover.on("mousedown", function(a, b) {
                        return b && angular.extend(a, b), a.preventDefault(), !1
                    }), m.handlePopoverEvents = function() {
                        "block" === m.displayElements.popover.css("display") && (B && c.cancel(B), B = c(function() {
                            m.reflowPopover(m.resizeElement), m.reflowResizeOverlay(m.resizeElement)
                        }, 100))
                    }, angular.element(window).on("resize", m.handlePopoverEvents), angular.element(window).on("scroll", m.handlePopoverEvents);
                    var E = function(a) {
                        var b, c = {
                            vertical: !1,
                            horizontal: !1
                        };
                        try {
                            if (b = window.getComputedStyle(a), null === b) return c
                        } catch (a) {
                            return c
                        }
                        var d = b["overflow-y"],
                            e = b["overflow-x"];
                        return {
                            vertical: ("scroll" === d || "auto" === d) && a.scrollHeight > a.clientHeight,
                            horizontal: ("scroll" === e || "auto" === e) && a.scrollWidth > a.clientWidth
                        }
                    };
                    m.getScrollTop = function(a, b) {
                        var c = a.scrollTop;
                        return "undefined" == typeof c && (c = 0), b && E(a).vertical && (a.removeEventListener("scroll", m._scrollListener, !1), a.addEventListener("scroll", m._scrollListener, !1)), 0 !== c ? {
                            node: a.nodeName,
                            top: c
                        } : a.parentNode ? m.getScrollTop(a.parentNode, b) : {
                            node: "",
                            top: 0
                        }
                    }, m.showPopover = function(a) {
                        m.getScrollTop(m.displayElements.scrollWindow[0], !0), m.displayElements.popover.css("display", "block"), c(function() {
                            m.displayElements.resize.overlay.css("display", "block")
                        }), m.resizeElement = a, m.reflowPopover(a), i.addClass(m.displayElements.popover, "in"), D(h.find("body"), "click keyup", function() {
                            m.hidePopover()
                        })
                    }, m._scrollListener = function(a, b) {
                        m.handlePopoverEvents()
                    }, m.reflowPopover = function(a) {
                        var b = m.getScrollTop(m.displayElements.scrollWindow[0], !1),
                            c = a[0].offsetTop - b.top;
                        c < 51 ? (m.displayElements.popover.css("top", a[0].offsetTop + a[0].offsetHeight + m.displayElements.scrollWindow[0].scrollTop + "px"), m.displayElements.popover.removeClass("top").addClass("bottom")) : (m.displayElements.popover.css("top", a[0].offsetTop - 54 + m.displayElements.scrollWindow[0].scrollTop + "px"), m.displayElements.popover.removeClass("bottom").addClass("top"));
                        var d = m.displayElements.text[0].offsetWidth - m.displayElements.popover[0].offsetWidth,
                            e = a[0].offsetLeft + a[0].offsetWidth / 2 - m.displayElements.popover[0].offsetWidth / 2,
                            f = Math.max(0, Math.min(d, e)),
                            g = Math.min(e, Math.max(0, e - d)) - 11;
                        f += window.scrollX, g -= window.scrollX, m.displayElements.popover.css("left", f + "px"), m.displayElements.popoverArrow.css("margin-left", g + "px")
                    }, m.hidePopover = function() {
                        m.displayElements.popover.css("display", "none"), m.displayElements.popoverContainer.attr("style", ""), m.displayElements.popoverContainer.attr("class", "popover-content"), m.displayElements.popover.removeClass("in"), m.displayElements.resize.overlay.css("display", "none")
                    }, m.displayElements.resize.overlay.append(m.displayElements.resize.background), angular.forEach(m.displayElements.resize.anchors, function(a) {
                        m.displayElements.resize.overlay.append(a)
                    }), m.displayElements.resize.overlay.append(m.displayElements.resize.info), m.displayElements.scrollWindow.append(m.displayElements.resize.overlay), m.displayElements.resize.background.on("click", function(a) {
                        m.displayElements.text[0].focus()
                    }), m.reflowResizeOverlay = function(a) {
                        a = angular.element(a)[0], m.displayElements.resize.overlay.css({
                            display: "block",
                            left: a.offsetLeft - 5 + "px",
                            top: a.offsetTop - 5 + "px",
                            width: a.offsetWidth + 10 + "px",
                            height: a.offsetHeight + 10 + "px"
                        }), m.displayElements.resize.info.text(a.offsetWidth + " x " + a.offsetHeight)
                    }, m.showResizeOverlay = function(a) {
                        var b = h.find("body");
                        z = function(c) {
                            var d = {
                                width: parseInt(a.attr("width")),
                                height: parseInt(a.attr("height")),
                                x: c.clientX,
                                y: c.clientY
                            };
                            (void 0 === d.width || isNaN(d.width)) && (d.width = a[0].offsetWidth), (void 0 === d.height || isNaN(d.height)) && (d.height = a[0].offsetHeight), m.hidePopover();
                            var e = d.height / d.width,
                                f = function(b) {
                                    function c(a) {
                                        return Math.round(Math.max(0, a))
                                    }
                                    var f = {
                                            x: Math.max(0, d.width + (b.clientX - d.x)),
                                            y: Math.max(0, d.height + (b.clientY - d.y))
                                        },
                                        g = void 0 !== o.taResizeForceAspectRatio,
                                        h = o.taResizeMaintainAspectRatio,
                                        i = g || h && !b.shiftKey;
                                    if (i) {
                                        var j = f.y / f.x;
                                        f.x = e > j ? f.x : f.y / e, f.y = e > j ? f.x * e : f.y
                                    }
                                    var k = angular.element(a);
                                    k.css("height", c(f.y) + "px"), k.css("width", c(f.x) + "px"), m.reflowResizeOverlay(a)
                                };
                            b.on("mousemove", f), D(b, "mouseup", function(a) {
                                a.preventDefault(), a.stopPropagation(), b.off("mousemove", f), m.$apply(function() {
                                    m.hidePopover(), m.updateTaBindtaTextElement()
                                }, 100)
                            }), c.stopPropagation(), c.preventDefault()
                        }, m.displayElements.resize.anchors[3].off("mousedown"), m.displayElements.resize.anchors[3].on("mousedown", z), m.reflowResizeOverlay(a), D(b, "click", function() {
                            m.hideResizeOverlay()
                        })
                    }, m.hideResizeOverlay = function() {
                        m.displayElements.resize.anchors[3].off("mousedown", z), m.displayElements.resize.overlay.css("display", "none")
                    }, m.setup.htmlEditorSetup(m.displayElements.html), m.setup.textEditorSetup(m.displayElements.text), m.displayElements.html.attr({
                        id: "taHtmlElement" + C,
                        "ng-show": "showHtml",
                        "ta-bind": "ta-bind",
                        "ng-model": "html",
                        "ng-model-options": n.attr("ng-model-options")
                    }), m.displayElements.text.attr({
                        id: "taTextElement" + C,
                        contentEditable: "true",
                        "ta-bind": "ta-bind",
                        "ng-model": "html",
                        "ng-model-options": n.attr("ng-model-options")
                    }), m.displayElements.scrollWindow.attr({
                        "ng-hide": "showHtml"
                    }), o.taDefaultWrap && m.displayElements.text.attr("ta-default-wrap", o.taDefaultWrap), o.taUnsafeSanitizer && (m.displayElements.text.attr("ta-unsafe-sanitizer", o.taUnsafeSanitizer), m.displayElements.html.attr("ta-unsafe-sanitizer", o.taUnsafeSanitizer)), o.taKeepStyles && (m.displayElements.text.attr("ta-keep-styles", o.taKeepStyles), m.displayElements.html.attr("ta-keep-styles", o.taKeepStyles)), m.displayElements.scrollWindow.append(m.displayElements.text), n.append(m.displayElements.scrollWindow), n.append(m.displayElements.html), m.displayElements.forminput.attr("name", m._name), n.append(m.displayElements.forminput), o.tabindex && (n.removeAttr("tabindex"), m.displayElements.text.attr("tabindex", o.tabindex), m.displayElements.html.attr("tabindex", o.tabindex)), o.placeholder && (m.displayElements.text.attr("placeholder", o.placeholder), m.displayElements.html.attr("placeholder", o.placeholder)), o.taDisabled && (m.displayElements.text.attr("ta-readonly", "disabled"), m.displayElements.html.attr("ta-readonly", "disabled"), m.disabled = m.$parent.$eval(o.taDisabled), m.$parent.$watch(o.taDisabled, function(a) {
                        m.disabled = a, m.disabled ? n.addClass(m.classes.disabled) : n.removeClass(m.classes.disabled)
                    })), o.taPaste && (m._pasteHandler = function(a) {
                        return l(o.taPaste)(m.$parent, {
                            $html: a
                        })
                    }, m.displayElements.text.attr("ta-paste", "_pasteHandler($html)")), b(m.displayElements.scrollWindow)(m), b(m.displayElements.html)(m), m.updateTaBindtaTextElement = m["updateTaBindtaTextElement" + C], m.updateTaBindtaHtmlElement = m["updateTaBindtaHtmlElement" + C], n.addClass("ta-root"), m.displayElements.scrollWindow.addClass("ta-text ta-editor " + m.classes.textEditor), m.displayElements.html.addClass("ta-html ta-editor " + m.classes.htmlEditor);
                    var F = function(a, b) {
                        b !== h[0].queryCommandState(a) && h[0].execCommand(a, !1, null)
                    };
                    m._actionRunning = !1;
                    var G = !1;
                    if (m.startAction = function() {
                            var b = !1,
                                c = !1,
                                d = !1,
                                e = !1;
                            return m._actionRunning = !0, b = h[0].queryCommandState("bold"), c = h[0].queryCommandState("italic"), d = h[0].queryCommandState("underline"), e = h[0].queryCommandState("strikeThrough"), G = a.saveSelection(), F("bold", b), F("italic", c), F("underline", d), F("strikeThrough", e),
                                function() {
                                    G && a.restoreSelection(G)
                                }
                        }, m.endAction = function() {
                            m._actionRunning = !1, G && (m.showHtml ? m.displayElements.html[0].focus() : m.displayElements.text[0].focus(), a.removeMarkers(G)), G = !1, m.updateSelectedStyles(), m.showHtml || m["updateTaBindtaTextElement" + C]()
                        }, u = function(a) {
                            m.focussed = !0, n.addClass(m.classes.focussed), x.focus(), n.triggerHandler("focus"), m.updateSelectedStyles && !m._bUpdateSelectedStyles && c(function() {
                                m.updateSelectedStyles()
                            }, 0)
                        }, m.displayElements.html.on("focus", u), m.displayElements.text.on("focus", u), v = function(a) {
                            return m._actionRunning || h[0].activeElement === m.displayElements.html[0] || h[0].activeElement === m.displayElements.text[0] || (n.removeClass(m.classes.focussed), x.unfocus(), c(function() {
                                m._bUpdateSelectedStyles = !1, n.triggerHandler("blur"), m.focussed = !1
                            }, 0)), a.preventDefault(), !1
                        }, m.displayElements.html.on("blur", v), m.displayElements.text.on("blur", v), m.displayElements.text.on("paste", function(a) {
                            n.triggerHandler("paste", a)
                        }), m.queryFormatBlockState = function(a) {
                            return !m.showHtml && a.toLowerCase() === h[0].queryCommandValue("formatBlock").toLowerCase()
                        }, m.queryCommandState = function(a) {
                            return m.showHtml ? "" : h[0].queryCommandState(a)
                        }, m.switchView = function() {
                            m.showHtml = !m.showHtml, i.enabled(!1, m.displayElements.html), i.enabled(!1, m.displayElements.text), m.showHtml ? c(function() {
                                return i.enabled(!0, m.displayElements.html), i.enabled(!0, m.displayElements.text), m.displayElements.html[0].focus()
                            }, 100) : c(function() {
                                return i.enabled(!0, m.displayElements.html), i.enabled(!0, m.displayElements.text), m.displayElements.text[0].focus()
                            }, 100)
                        }, o.ngModel) {
                        var H = !0;
                        p.$render = function() {
                            if (H) {
                                H = !1;
                                var a = m.$parent.$eval(o.ngModel);
                                void 0 !== a && null !== a || !w || "" === w || p.$setViewValue(w)
                            }
                            m.displayElements.forminput.val(p.$viewValue), m.html = p.$viewValue || ""
                        }, n.attr("required") && (p.$validators.required = function(a, b) {
                            var c = a || b;
                            return !(!c || "" === c.trim())
                        })
                    } else m.displayElements.forminput.val(w), m.html = w;
                    if (m.$watch("html", function(a, b) {
                            a !== b && (o.ngModel && p.$viewValue !== a && p.$setViewValue(a), m.displayElements.forminput.val(a))
                        }), o.taTargetToolbars) x = g.registerEditor(m._name, m, o.taTargetToolbars.split(","));
                    else {
                        var I = angular.element('
');
                        o.taToolbar && I.attr("ta-toolbar", o.taToolbar), o.taToolbarClass && I.attr("ta-toolbar-class", o.taToolbarClass), o.taToolbarGroupClass && I.attr("ta-toolbar-group-class", o.taToolbarGroupClass), o.taToolbarButtonClass && I.attr("ta-toolbar-button-class", o.taToolbarButtonClass), o.taToolbarActiveButtonClass && I.attr("ta-toolbar-active-button-class", o.taToolbarActiveButtonClass), o.taFocussedClass && I.attr("ta-focussed-class", o.taFocussedClass), n.prepend(I), b(I)(m.$parent), x = g.registerEditor(m._name, m, ["textAngularToolbar" + C])
                    }
                    m.$on("$destroy", function() {
                        g.unregisterEditor(m._name), angular.element(window).off("blur"), angular.element(window).off("resize", m.handlePopoverEvents), angular.element(window).off("scroll", m.handlePopoverEvents)
                    }), m.$on("ta-element-select", function(a, b) {
                        x.triggerElementSelect(a, b) && m["reApplyOnSelectorHandlerstaTextElement" + C]()
                    }), m.$on("ta-drop-event", function(a, b, d, f) {
                        f && f.files && f.files.length > 0 ? (m.displayElements.text[0].focus(), e.setSelectionToElementEnd(d.target), angular.forEach(f.files, function(a) {
                            try {
                                k.when(m.fileDropHandler(a, m.wrapSelection) || m.fileDropHandler !== m.defaultFileDropHandler && k.when(m.defaultFileDropHandler(a, m.wrapSelection))).then(function() {
                                    m["updateTaBindtaTextElement" + C]()
                                })
                            } catch (a) {
                                j.error(a)
                            }
                        }), d.preventDefault(), d.stopPropagation()) : c(function() {
                            m["updateTaBindtaTextElement" + C]()
                        }, 0)
                    }), m._bUpdateSelectedStyles = !1, angular.element(window).on("blur", function() {
                        m._bUpdateSelectedStyles = !1, m.focussed = !1
                    }), m.updateSelectedStyles = function() {
                        var a;
                        A && c.cancel(A), void 0 !== (a = e.getSelectionElement()) && a.parentNode !== m.displayElements.text[0] ? x.updateSelectedStyles(angular.element(a)) : x.updateSelectedStyles(), m._bUpdateSelectedStyles && (A = c(m.updateSelectedStyles, 200))
                    }, q = function() {
                        return m.focussed ? void(m._bUpdateSelectedStyles || (m._bUpdateSelectedStyles = !0, m.$apply(function() {
                            m.updateSelectedStyles()
                        }))) : void(m._bUpdateSelectedStyles = !1)
                    }, m.displayElements.html.on("keydown", q), m.displayElements.text.on("keydown", q), r = function() {
                        m._bUpdateSelectedStyles = !1
                    }, m.displayElements.html.on("keyup", r), m.displayElements.text.on("keyup", r), s = function(a, b) {
                        if (e.getSelection) {
                            var c = e.getSelection();
                            e.getSelectionElement() && "a" === e.getSelectionElement().nodeName.toLowerCase() && (3 === c.start.element.nodeType && c.start.element.textContent.length === c.end.offset && e.setSelectionAfterElement(e.getSelectionElement()), 3 === c.start.element.nodeType && 0 === c.start.offset && e.setSelectionBeforeElement(e.getSelectionElement()))
                        }
                        b && angular.extend(a, b), m.$apply(function() {
                            if (x.sendKeyCommand(a)) return m._bUpdateSelectedStyles || m.updateSelectedStyles(), a.preventDefault(), !1
                        })
                    }, m.displayElements.html.on("keypress", s), m.displayElements.text.on("keypress", s), t = function() {
                        m._bUpdateSelectedStyles = !1, c(function() {
                            m.updateSelectedStyles()
                        }, 0)
                    }, m.displayElements.html.on("mouseup", t), m.displayElements.text.on("mouseup", t)
                }
            }
        }]), u.service("textAngularManager", ["taToolExecuteAction", "taTools", "taRegisterTool", "$interval", "$rootScope", "$log", function(a, b, c, d, e, g) {
            var h, i = {},
                j = {},
                k = 0,
                l = function(a) {
                    angular.forEach(j, function(b) {
                        b.editorFunctions.updateSelectedStyles(a)
                    })
                },
                m = 50,
                n = function() {
                    k = Date.now(), h = d(function() {
                        l(), h = void 0
                    }, m, 1)
                };
            e.$on("destroy", function() {
                h && (d.cancel(h), h = void 0)
            });
            var o = function() {
                Math.abs(Date.now() - k) > m && n()
            };
            return {
                registerEditor: function(c, d, e) {
                    if (!c || "" === c) throw "textAngular Error: An editor requires a name";
                    if (!d) throw "textAngular Error: An editor requires a scope";
                    if (j[c]) throw 'textAngular Error: An Editor with name "' + c + '" already exists';
                    return j[c] = {
                        scope: d,
                        toolbars: e,
                        toolbarScopes: [],
                        _registerToolbarScope: function(a) {
                            this.toolbars.indexOf(a.name) >= 0 && this.toolbarScopes.push(a)
                        },
                        editorFunctions: {
                            disable: function() {
                                angular.forEach(j[c].toolbarScopes, function(a) {
                                    a.disabled = !0
                                })
                            },
                            enable: function() {
                                angular.forEach(j[c].toolbarScopes, function(a) {
                                    a.disabled = !1
                                })
                            },
                            focus: function() {
                                angular.forEach(j[c].toolbarScopes, function(a) {
                                    a._parent = d, a.disabled = !1, a.focussed = !0
                                }), d.focussed = !0
                            },
                            unfocus: function() {
                                angular.forEach(j[c].toolbarScopes, function(a) {
                                    a.disabled = !0, a.focussed = !1
                                }), d.focussed = !1
                            },
                            updateSelectedStyles: function(a) {
                                angular.forEach(j[c].toolbarScopes, function(b) {
                                    angular.forEach(b.tools, function(c) {
                                        c.activeState && (b._parent = d, c.active = c.activeState(a))
                                    })
                                })
                            },
                            sendKeyCommand: function(e) {
                                var f = !1;
                                return (e.ctrlKey || e.metaKey || e.specialKey) && angular.forEach(b, function(b, g) {
                                    if (b.commandKeyCode && (b.commandKeyCode === e.which || b.commandKeyCode === e.specialKey))
                                        for (var h = 0; h < j[c].toolbarScopes.length; h++)
                                            if (void 0 !== j[c].toolbarScopes[h].tools[g]) {
                                                a.call(j[c].toolbarScopes[h].tools[g], d), f = !0;
                                                break
                                            }
                                }), f
                            },
                            triggerElementSelect: function(a, e) {
                                var f = function(a, b) {
                                        for (var c = !0, d = 0; d < b.length; d++) c = c && a.attr(b[d]);
                                        return c
                                    },
                                    g = [],
                                    h = {},
                                    i = !1;
                                e = angular.element(e);
                                var k = !1;
                                if (angular.forEach(b, function(a, b) {
                                        a.onElementSelect && a.onElementSelect.element && a.onElementSelect.element.toLowerCase() === e[0].tagName.toLowerCase() && (!a.onElementSelect.filter || a.onElementSelect.filter(e)) && (k = k || angular.isArray(a.onElementSelect.onlyWithAttrs) && f(e, a.onElementSelect.onlyWithAttrs), a.onElementSelect.onlyWithAttrs && !f(e, a.onElementSelect.onlyWithAttrs) || (h[b] = a))
                                    }), k ? (angular.forEach(h, function(a, b) {
                                        a.onElementSelect.onlyWithAttrs && f(e, a.onElementSelect.onlyWithAttrs) && g.push({
                                            name: b,
                                            tool: a
                                        })
                                    }), g.sort(function(a, b) {
                                        return b.tool.onElementSelect.onlyWithAttrs.length - a.tool.onElementSelect.onlyWithAttrs.length
                                    })) : angular.forEach(h, function(a, b) {
                                        g.push({
                                            name: b,
                                            tool: a
                                        })
                                    }), g.length > 0)
                                    for (var l = 0; l < g.length; l++) {
                                        for (var m = g[l].tool, n = g[l].name, o = 0; o < j[c].toolbarScopes.length; o++)
                                            if (void 0 !== j[c].toolbarScopes[o].tools[n]) {
                                                m.onElementSelect.action.call(j[c].toolbarScopes[o].tools[n], a, e, d), i = !0;
                                                break
                                            }
                                        if (i) break
                                    }
                                return i
                            }
                        }
                    }, angular.forEach(e, function(a) {
                        i[a] && j[c].toolbarScopes.push(i[a])
                    }), o(), j[c].editorFunctions
                },
                retrieveEditor: function(a) {
                    return j[a]
                },
                unregisterEditor: function(a) {
                    delete j[a], o()
                },
                registerToolbar: function(a) {
                    if (!a) throw "textAngular Error: A toolbar requires a scope";
                    if (!a.name || "" === a.name) throw "textAngular Error: A toolbar requires a name";
                    if (i[a.name]) throw 'textAngular Error: A toolbar with name "' + a.name + '" already exists';
                    i[a.name] = a, angular.forEach(j, function(b) {
                        b._registerToolbarScope(a)
                    }), o()
                },
                retrieveToolbar: function(a) {
                    return i[a]
                },
                retrieveToolbarsViaEditor: function(a) {
                    var b = [],
                        c = this;
                    return angular.forEach(this.retrieveEditor(a).toolbars, function(a) {
                        b.push(c.retrieveToolbar(a))
                    }), b
                },
                unregisterToolbar: function(a) {
                    delete i[a], o()
                },
                updateToolsDisplay: function(a) {
                    var b = this;
                    angular.forEach(a, function(a, c) {
                        b.updateToolDisplay(c, a)
                    })
                },
                resetToolsDisplay: function() {
                    var a = this;
                    angular.forEach(b, function(b, c) {
                        a.resetToolDisplay(c)
                    }), o()
                },
                updateToolDisplay: function(a, b) {
                    var c = this;
                    angular.forEach(i, function(d, e) {
                        c.updateToolbarToolDisplay(e, a, b)
                    }), o()
                },
                resetToolDisplay: function(a) {
                    var b = this;
                    angular.forEach(i, function(c, d) {
                        b.resetToolbarToolDisplay(d, a)
                    }), o()
                },
                updateToolbarToolDisplay: function(a, b, c) {
                    if (!i[a]) throw 'textAngular Error: No Toolbar with name "' + a + '" exists';
                    i[a].updateToolDisplay(b, c)
                },
                resetToolbarToolDisplay: function(a, c) {
                    if (!i[a]) throw 'textAngular Error: No Toolbar with name "' + a + '" exists';
                    i[a].updateToolDisplay(c, b[c], !0)
                },
                removeTool: function(a) {
                    delete b[a], angular.forEach(i, function(b) {
                        delete b.tools[a];
                        for (var c = 0; c < b.toolbar.length; c++) {
                            for (var d, e = 0; e < b.toolbar[c].length; e++) {
                                if (b.toolbar[c][e] === a) {
                                    d = {
                                        group: c,
                                        index: e
                                    };
                                    break
                                }
                                if (void 0 !== d) break
                            }
                            void 0 !== d && (b.toolbar[d.group].slice(d.index, 1), b._$element.children().eq(d.group).children().eq(d.index).remove())
                        }
                    }), o()
                },
                addTool: function(a, b, d, e) {
                    c(a, b), angular.forEach(i, function(c) {
                        c.addTool(a, b, d, e)
                    }), o()
                },
                addToolToToolbar: function(a, b, d, e, f) {
                    c(a, b), i[d].addTool(a, b, e, f), o()
                },
                refreshEditor: function(a) {
                    if (!j[a]) throw 'textAngular Error: No Editor with name "' + a + '" exists';
                    j[a].scope.updateTaBindtaTextElement(), j[a].scope.$$phase || j[a].scope.$digest(), o()
                },
                sendKeyCommand: function(a, b) {
                    var c = j[a._name];
                    if (c && c.editorFunctions.sendKeyCommand(b)) return a._bUpdateSelectedStyles || a.updateSelectedStyles(), b.preventDefault(), !1
                },
                updateStyles: l,
                getVersion: function() {
                    return f
                },
                getToolbarScopes: function() {
                    var a = [];
                    return angular.forEach(j, function(b) {
                        a = a.concat(b.toolbarScopes)
                    }), a
                }
            }
        }]), u.directive("textAngularToolbar", ["$compile", "textAngularManager", "taOptions", "taTools", "taToolExecuteAction", "$window", function(a, b, c, d, e, f) {
            return {
                scope: {
                    name: "@"
                },
                restrict: "EA",
                link: function(g, h, i) {
                    if (!g.name || "" === g.name) throw "textAngular Error: A toolbar requires a name";
                    angular.extend(g, angular.copy(c)), i.taToolbar && (g.toolbar = g.$parent.$eval(i.taToolbar)), i.taToolbarClass && (g.classes.toolbar = i.taToolbarClass), i.taToolbarGroupClass && (g.classes.toolbarGroup = i.taToolbarGroupClass), i.taToolbarButtonClass && (g.classes.toolbarButton = i.taToolbarButtonClass), i.taToolbarActiveButtonClass && (g.classes.toolbarButtonActive = i.taToolbarActiveButtonClass), i.taFocussedClass && (g.classes.focussed = i.taFocussedClass), g.disabled = !0, g.focussed = !1, g._$element = h, h[0].innerHTML = "", h.addClass("ta-toolbar " + g.classes.toolbar), g.$watch("focussed", function() {
                        g.focussed ? h.addClass(g.classes.focussed) : h.removeClass(g.classes.focussed)
                    });
                    var j = function(b, c) {
                        var d;
                        if (d = b && b.display ? angular.element(b.display) : angular.element(""), b && b["class"] ? d.addClass(b["class"]) : d.addClass(g.classes.toolbarButton), d.attr("name", c.name), d.attr("ta-button", "ta-button"), d.attr("ng-disabled", "isDisabled()"), d.attr("tabindex", "-1"), d.attr("ng-click", "executeAction()"), d.attr("ng-class", "displayActiveToolClass(active)"), b && b.tooltiptext && d.attr("title", b.tooltiptext), b && !b.display && !c._display && (d[0].innerHTML = "", b.buttontext && (d[0].innerHTML = b.buttontext), b.iconclass)) {
                            var e = angular.element(""),
                                f = d[0].innerHTML;
                            e.addClass(b.iconclass), d[0].innerHTML = "", d.append(e), f && "" !== f && d.append(" " + f)
                        }
                        return c._lastToolDefinition = angular.copy(b), a(d)(c)
                    };
                    g.tools = {}, g._parent = {
                        disabled: !0,
                        showHtml: !1,
                        queryFormatBlockState: function() {
                            return !1
                        },
                        queryCommandState: function() {
                            return !1
                        }
                    };
                    var k = {
                        $window: f,
                        $editor: function() {
                            return g._parent
                        },
                        isDisabled: function() {
                            return ("html" !== this.name || !g._parent.startAction) && ("function" != typeof this.$eval("disabled") && this.$eval("disabled") || this.$eval("disabled()") || "html" !== this.name && this.$editor().showHtml || this.$parent.disabled || this.$editor().disabled)
                        },
                        displayActiveToolClass: function(a) {
                            return a ? g.classes.toolbarButtonActive : ""
                        },
                        executeAction: e
                    };
                    angular.forEach(g.toolbar, function(a) {
                        var b = angular.element("
");
                        b.addClass(g.classes.toolbarGroup), angular.forEach(a, function(a) {
                            g.tools[a] = angular.extend(g.$new(!0), d[a], k, {
                                name: a
                            }), g.tools[a].$element = j(d[a], g.tools[a]), b.append(g.tools[a].$element)
                        }), h.append(b)
                    }), g.updateToolDisplay = function(a, b, c) {
                        var d = g.tools[a];
                        if (d) {
                            if (d._lastToolDefinition && !c && (b = angular.extend({}, d._lastToolDefinition, b)), null === b.buttontext && null === b.iconclass && null === b.display) throw 'textAngular Error: Tool Definition for updating "' + a + '" does not have a valid display/iconclass/buttontext value';
                            null === b.buttontext && delete b.buttontext, null === b.iconclass && delete b.iconclass, null === b.display && delete b.display;
                            var e = j(b, d);
                            d.$element.replaceWith(e), d.$element = e
                        }
                    }, g.addTool = function(a, b, c, e) {
                        g.tools[a] = angular.extend(g.$new(!0), d[a], k, {
                            name: a
                        }), g.tools[a].$element = j(d[a], g.tools[a]);
                        var f;
                        void 0 === c && (c = g.toolbar.length - 1), f = angular.element(h.children()[c]), void 0 === e ? (f.append(g.tools[a].$element), g.toolbar[c][g.toolbar[c].length - 1] = a) : (f.children().eq(e).after(g.tools[a].$element), g.toolbar[c][e] = a)
                    }, b.registerToolbar(g), g.$on("$destroy", function() {
                        b.unregisterToolbar(g.name)
                    })
                }
            }
        }]), u.directive("textAngularVersion", ["textAngularManager", function(a) {
            var b = a.getVersion();
            return {
                restrict: "EA",
                link: function(a, c, d) {
                    c.html(b)
                }
            }
        }]), u.name
    }), angular.module("djds4rce.angular-socialshare", []).factory("$FB", ["$window", function(t) {
        return {
            init: function(e) {
                if (!e) throw "FB App Id Cannot be blank";
                this.fbId = e, t.fbAsyncInit = function() {
                        FB.init({
                            appId: e,
                            channelUrl: "app/channel.html",
                            status: !0,
                            xfbml: !0
                        })
                    },
                    function(t) {
                        var e, n = "facebook-jssdk",
                            i = t.getElementsByTagName("script")[0];
                        t.getElementById(n) || (e = t.createElement("script"), e.id = n, e.async = !0, e.src = "//connect.facebook.net/en_US/all.js", i.parentNode.insertBefore(e, i))
                    }(document)
            }
        }
    }]).directive("facebook", ["$http", function(t) {
        return {
            scope: {
                callback: "=",
                shares: "="
            },
            transclude: !0,
            template: '

Share
',
            link: function(e, n, i) {
                i.$observe("url", function() {
                    i.shares && i.url && t.get("https://api.facebook.com/method/links.getStats?urls=" + i.url + "&format=json").success(function(t) {
                        var n = t[0] ? t[0].total_count.toString() : 0,
                            i = "";
                        n.length > 6 ? ("0" != n.slice(-6, -5) && (i = "." + n.slice(-6, -5)), n = n.slice(0, -6), n = n + i + "M") : n.length > 3 && ("0" != n.slice(-3, -2) && (i = "." + n.slice(-3, -2)), n = n.slice(0, -3), n = n + i + "k"), e.shares = n
                    }).error(function() {
                        e.shares = 0
                    }), n.unbind(), n.bind("click", function(t) {
                        FB.ui({
                            method: "share",
                            href: i.url
                        }, function(t) {
                            void 0 !== e.callback && "function" == typeof e.callback && e.callback(t)
                        }), t.preventDefault()
                    })
                })
            }
        }
    }]).directive("facebookFeedShare", ["$http", function(t) {
        return {
            scope: {
                callback: "=",
                shares: "="
            },
            transclude: !0,
            template: '

Share
',
            link: function(e, n, i) {
                i.$observe("url", function() {
                    i.shares && i.url && t.get("https://api.facebook.com/method/links.getStats?urls=" + i.url + "&format=json").success(function(t) {
                        var n = t[0] ? t[0].total_count.toString() : 0,
                            i = "";
                        n.length > 6 ? ("0" != n.slice(-6, -5) && (i = "." + n.slice(-6, -5)), n = n.slice(0, -6), n = n + i + "M") : n.length > 3 && ("0" != n.slice(-3, -2) && (i = "." + n.slice(-3, -2)), n = n.slice(0, -3), n = n + i + "k"), e.shares = n
                    }).error(function() {
                        e.shares = 0
                    }), n.unbind(), n.bind("click", function(t) {
                        FB.ui({
                            method: "feed",
                            link: i.url,
                            picture: i.picture,
                            name: i.name,
                            caption: i.caption,
                            description: i.description
                        }, function(t) {
                            void 0 !== e.callback && "function" == typeof e.callback && e.callback(t)
                        }), t.preventDefault()
                    })
                })
            }
        }
    }]).directive("twitter", ["$timeout", function(t) {
        return {
            link: function(e, n, i) {
                var o = debounce(function() {
                    i.url && t(function() {
                        n[0].innerHTML = "", twttr.widgets.createShareButton(i.url, n[0], function() {}, {
                            count: i.count,
                            text: i.text,
                            via: i.via,
                            size: i.size
                        })
                    })
                }, 75);
                i.$observe("url", o), i.$observe("text", o)
            }
        }
    }]).directive("linkedin", ["$timeout", "$http", "$window", function(t, e, n) {
        return {
            scope: {
                shares: "="
            },
            transclude: !0,
            template: '
inShare
',
            link: function(i, o, r) {
                var u = debounce(function() {
                    r.shares && r.url && e.jsonp("https://www.linkedin.com/countserv/count/share?url=" + r.url + "&callback=JSON_CALLBACK&format=jsonp").success(function(t) {
                        i.shares = t.count.toLocaleString()
                    }).error(function() {
                        i.shares = 0
                    }), t(function() {
                        o.unbind(), o.bind("click", function() {
                            var t = encodeURIComponent(r.url).replace(/'/g, "%27").replace(/"/g, "%22");
                            n.open("//www.linkedin.com/shareArticle?mini=true&url=" + t + "&title=" + r.title + "&summary=" + r.summary)
                        })
                    })
                }, 100);
                r.$observe("url", u), r.$observe("title", u), r.$observe("summary", u)
            }
        }
    }]).directive("gplus", [function() {
        return {
            link: function(t, e, n) {
                var i = debounce(function() {
                        "undefined" == typeof gapi ? ! function() {
                            var t = document.createElement("script");
                            t.type = "text/javascript", t.async = !0, t.src = "https://apis.google.com/js/platform.js", t.onload = o;
                            var e = document.getElementsByTagName("script")[0];
                            e.parentNode.insertBefore(t, e)
                        }() : o()
                    }, 100),
                    o = function(t, n) {
                        return function() {
                            var t = document.createElement("div"),
                                i = n.id || randomString(5);
                            n.id = i, t.setAttribute("id", i), e.innerHTML = "", e.append(t), n["class"] && -1 != n["class"].indexOf("g-plusone") ? window.gapi.plusone.render(i, n) : window.gapi.plus.render(i, n)
                        }
                    }(e, n);
                n.$observe("href", i)
            }
        }
    }]).directive("tumblrText", [function() {
        return {
            link: function(t, e, n) {
                var i = document.createElement("a"),
                    o = debounce(function() {
                        i.setAttribute("href", "https://www.tumblr.com/share/link?url=" + encodeURIComponent(n.url) + "&name=" + encodeURIComponent(n.name) + "&description=" + encodeURIComponent(n.description)), i.setAttribute("title", n.title || "Share on Tumblr"), i.setAttribute("style", n.styling || "display:inline-block; text-indent:-9999px; overflow:hidden; width:81px; height:20px; background:url('https://platform.tumblr.com/v1/share_1.png') top left no-repeat transparent;"), e[0].innerHTML = "", e.append(i)
                    }, 100);
                n.$observe("url", o), n.$observe("name", o), n.$observe("description", o)
            }
        }
    }]).directive("tumblrQoute", [function() {
        return {
            link: function(t, e, n) {
                var i = document.createElement("a"),
                    o = debounce(function() {
                        i.setAttribute("href", "https://www.tumblr.com/share/quote?quote=" + encodeURIComponent(n.qoute) + "&source=" + encodeURIComponent(n.source)), i.setAttribute("title", n.title || "Share on Tumblr"), i.setAttribute("style", n.styling || "display:inline-block; text-indent:-9999px; overflow:hidden; width:81px; height:20px; background:url('https://platform.tumblr.com/v1/share_1.png') top left no-repeat transparent;"), e[0].innerHTML = "", e.append(i)
                    }, 100);
                n.$observe("qoute", o), n.$observe("source", o)
            }
        }
    }]).directive("tumblrImage", [function() {
        return {
            link: function(t, e, n) {
                var i = document.createElement("a"),
                    o = debounce(function() {
                        i.setAttribute("href", "https://www.tumblr.com/share/photo?source=" + encodeURIComponent(n.source) + "&caption=" + encodeURIComponent(n.caption) + "&clickthru=" + encodeURIComponent(n.clickthru)), i.setAttribute("title", n.title || "Share on Tumblr"), i.setAttribute("style", n.styling || "display:inline-block; text-indent:-9999px; overflow:hidden; width:81px; height:20px; background:url('https://platform.tumblr.com/v1/share_1.png') top left no-repeat transparent;"), e[0].innerHTML = "", e.append(i)
                    }, 100);
                n.$observe("source", o), n.$observe("caption", o), n.$observe("clickthru", o)
            }
        }
    }]).directive("tumblrVideo", [function() {
        return {
            link: function(t, e, n) {
                var i = document.createElement("a"),
                    o = debounce(function() {
                        i.setAttribute("href", "https://www.tumblr.com/share/video?embed=" + encodeURIComponent(n.embedcode) + "&caption=" + encodeURIComponent(n.caption)), i.setAttribute("title", n.title || "Share on Tumblr"), i.setAttribute("style", n.styling || "display:inline-block; text-indent:-9999px; overflow:hidden; width:81px; height:20px; background:url('https://platform.tumblr.com/v1/share_1.png') top left no-repeat transparent;"), e[0].innerHTML = "", e.append(i)
                    }, 100);
                n.$observe("embedcode", o), n.$observe("caption", o)
            }
        }
    }]).directive("pintrest", ["$window", "$timeout", function(t, e) {
        return {
            template: '',
            link: function(n, i, o) {
                var r = debounce(function() {
                    var n = document.createElement("a");
                    n.setAttribute("href", "//www.pinterest.com/pin/create/button/?url=" + encodeURIComponent(o.href) + "&media=" + encodeURIComponent(o.img) + "&description=" + encodeURIComponent(o.description)), n.setAttribute("pinDo", o.pinDo || "buttonPin"), n.setAttribute("pinConfig", o.pinConfig || "beside"), i[0].innerHTML = "", i.append(n), e(function() {
                        t.parsePins(i)
                    })
                }, 100);
                o.$observe("href", r), o.$observe("img", r), o.$observe("description", r)
            }
        }
    }]),
    function(factory) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], factory) : "undefined" != typeof exports ? module.exports = factory(require("jquery")) : factory(jQuery)
    }(function($) {
        "use strict";
        var Slick = window.Slick || {};
        Slick = function() {
            function Slick(element, settings) {
                var dataSettings, responsiveSettings, breakpoint, _ = this;
                if (_.defaults = {
                        accessibility: !0,
                        adaptiveHeight: !1,
                        appendArrows: $(element),
                        appendDots: $(element),
                        arrows: !0,
                        asNavFor: null,
                        prevArrow: 'Previous',
                        nextArrow: 'Next',
                        autoplay: !1,
                        autoplaySpeed: 3e3,
                        centerMode: !1,
                        centerPadding: "50px",
                        cssEase: "ease",
                        customPaging: function(slider, i) {
                            return '' + (i + 1) + ""
                        },
                        dots: !1,
                        dotsClass: "slick-dots",
                        draggable: !0,
                        easing: "linear",
                        edgeFriction: .35,
                        fade: !1,
                        focusOnSelect: !1,
                        infinite: !0,
                        initialSlide: 0,
                        lazyLoad: "ondemand",
                        mobileFirst: !1,
                        pauseOnHover: !0,
                        pauseOnDotsHover: !1,
                        respondTo: "window",
                        responsive: null,
                        rtl: !1,
                        slide: "",
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        speed: 500,
                        swipe: !0,
                        swipeToSlide: !1,
                        touchMove: !0,
                        touchThreshold: 5,
                        useCSS: !0,
                        variableWidth: !1,
                        vertical: !1,
                        waitForAnimate: !0
                    }, _.initials = {
                        animating: !1,
                        dragging: !1,
                        autoPlayTimer: null,
                        currentDirection: 0,
                        currentLeft: null,
                        currentSlide: 0,
                        direction: 1,
                        $dots: null,
                        listWidth: null,
                        listHeight: null,
                        loadIndex: 0,
                        $nextArrow: null,
                        $prevArrow: null,
                        slideCount: null,
                        slideWidth: null,
                        $slideTrack: null,
                        $slides: null,
                        sliding: !1,
                        slideOffset: 0,
                        swipeLeft: null,
                        $list: null,
                        touchObject: {},
                        transformsEnabled: !1
                    }, $.extend(_, _.initials), _.activeBreakpoint = null, _.animType = null, _.animProp = null, _.breakpoints = [], _.breakpointSettings = [], _.cssTransitions = !1, _.hidden = "hidden", _.paused = !1, _.positionProp = null, _.respondTo = null, _.shouldClick = !0, _.$slider = $(element), _.$slidesCache = null, _.transformType = null, _.transitionType = null, _.visibilityChange = "visibilitychange", _.windowWidth = 0, _.windowTimer = null, dataSettings = $(element).data("slick") || {}, _.options = $.extend({}, _.defaults, dataSettings, settings), _.currentSlide = _.options.initialSlide, _.originalSettings = _.options, responsiveSettings = _.options.responsive || null, responsiveSettings && responsiveSettings.length > -1) {
                    _.respondTo = _.options.respondTo || "window";
                    for (breakpoint in responsiveSettings) responsiveSettings.hasOwnProperty(breakpoint) && (_.breakpoints.push(responsiveSettings[breakpoint].breakpoint), _.breakpointSettings[responsiveSettings[breakpoint].breakpoint] = responsiveSettings[breakpoint].settings);
                    _.breakpoints.sort(function(a, b) {
                        return _.options.mobileFirst === !0 ? a - b : b - a
                    })
                }
                "undefined" != typeof document.mozHidden ? (_.hidden = "mozHidden", _.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.msHidden ? (_.hidden = "msHidden", _.visibilityChange = "msvisibilitychange") : "undefined" != typeof document.webkitHidden && (_.hidden = "webkitHidden", _.visibilityChange = "webkitvisibilitychange"), _.autoPlay = $.proxy(_.autoPlay, _), _.autoPlayClear = $.proxy(_.autoPlayClear, _), _.changeSlide = $.proxy(_.changeSlide, _), _.clickHandler = $.proxy(_.clickHandler, _), _.selectHandler = $.proxy(_.selectHandler, _), _.setPosition = $.proxy(_.setPosition, _), _.swipeHandler = $.proxy(_.swipeHandler, _), _.dragHandler = $.proxy(_.dragHandler, _), _.keyHandler = $.proxy(_.keyHandler, _), _.autoPlayIterator = $.proxy(_.autoPlayIterator, _), _.instanceUid = instanceUid++, _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, _.init(), _.checkResponsive(!0)
            }
            var instanceUid = 0;
            return Slick
        }(), Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {
            var _ = this;
            if ("boolean" == typeof index) addBefore = index, index = null;
            else if (index < 0 || index >= _.slideCount) return !1;
            _.unload(), "number" == typeof index ? 0 === index && 0 === _.$slides.length ? $(markup).appendTo(_.$slideTrack) : addBefore ? $(markup).insertBefore(_.$slides.eq(index)) : $(markup).insertAfter(_.$slides.eq(index)) : addBefore === !0 ? $(markup).prependTo(_.$slideTrack) : $(markup).appendTo(_.$slideTrack), _.$slides = _.$slideTrack.children(this.options.slide), _.$slideTrack.children(this.options.slide).detach(), _.$slideTrack.append(_.$slides), _.$slides.each(function(index, element) {
                $(element).attr("data-slick-index", index)
            }), _.$slidesCache = _.$slides, _.reinit()
        }, Slick.prototype.animateHeight = function() {
            var _ = this;
            if (1 === _.options.slidesToShow && _.options.adaptiveHeight === !0 && _.options.vertical === !1) {
                var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(!0);
                _.$list.animate({
                    height: targetHeight
                }, _.options.speed)
            }
        }, Slick.prototype.animateSlide = function(targetLeft, callback) {
            var animProps = {},
                _ = this;
            _.animateHeight(), _.options.rtl === !0 && _.options.vertical === !1 && (targetLeft = -targetLeft), _.transformsEnabled === !1 ? _.options.vertical === !1 ? _.$slideTrack.animate({
                left: targetLeft
            }, _.options.speed, _.options.easing, callback) : _.$slideTrack.animate({
                top: targetLeft
            }, _.options.speed, _.options.easing, callback) : _.cssTransitions === !1 ? (_.options.rtl === !0 && (_.currentLeft = -_.currentLeft), $({
                animStart: _.currentLeft
            }).animate({
                animStart: targetLeft
            }, {
                duration: _.options.speed,
                easing: _.options.easing,
                step: function(now) {
                    now = Math.ceil(now), _.options.vertical === !1 ? (animProps[_.animType] = "translate(" + now + "px, 0px)", _.$slideTrack.css(animProps)) : (animProps[_.animType] = "translate(0px," + now + "px)", _.$slideTrack.css(animProps))
                },
                complete: function() {
                    callback && callback.call()
                }
            })) : (_.applyTransition(), targetLeft = Math.ceil(targetLeft), _.options.vertical === !1 ? animProps[_.animType] = "translate3d(" + targetLeft + "px, 0px, 0px)" : animProps[_.animType] = "translate3d(0px," + targetLeft + "px, 0px)", _.$slideTrack.css(animProps), callback && setTimeout(function() {
                _.disableTransition(), callback.call()
            }, _.options.speed))
        }, Slick.prototype.asNavFor = function(index) {
            var _ = this,
                asNavFor = null !== _.options.asNavFor ? $(_.options.asNavFor).slick("getSlick") : null;
            null !== asNavFor && asNavFor.slideHandler(index, !0)
        }, Slick.prototype.applyTransition = function(slide) {
            var _ = this,
                transition = {};
            _.options.fade === !1 ? transition[_.transitionType] = _.transformType + " " + _.options.speed + "ms " + _.options.cssEase : transition[_.transitionType] = "opacity " + _.options.speed + "ms " + _.options.cssEase, _.options.fade === !1 ? _.$slideTrack.css(transition) : _.$slides.eq(slide).css(transition)
        }, Slick.prototype.autoPlay = function() {
            var _ = this;
            _.autoPlayTimer && clearInterval(_.autoPlayTimer), _.slideCount > _.options.slidesToShow && _.paused !== !0 && (_.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed))
        }, Slick.prototype.autoPlayClear = function() {
            var _ = this;
            _.autoPlayTimer && clearInterval(_.autoPlayTimer)
        }, Slick.prototype.autoPlayIterator = function() {
            var _ = this;
            _.options.infinite === !1 ? 1 === _.direction ? (_.currentSlide + 1 === _.slideCount - 1 && (_.direction = 0), _.slideHandler(_.currentSlide + _.options.slidesToScroll)) : (_.currentSlide - 1 === 0 && (_.direction = 1), _.slideHandler(_.currentSlide - _.options.slidesToScroll)) : _.slideHandler(_.currentSlide + _.options.slidesToScroll)
        }, Slick.prototype.buildArrows = function() {
            var _ = this;
            _.options.arrows === !0 && _.slideCount > _.options.slidesToShow && (_.$prevArrow = $(_.options.prevArrow), _.$nextArrow = $(_.options.nextArrow), _.htmlExpr.test(_.options.prevArrow) && _.$prevArrow.appendTo(_.options.appendArrows), _.htmlExpr.test(_.options.nextArrow) && _.$nextArrow.appendTo(_.options.appendArrows), _.options.infinite !== !0 && _.$prevArrow.addClass("slick-disabled"))
        }, Slick.prototype.buildDots = function() {
            var i, dotString, _ = this;
            if (_.options.dots === !0 && _.slideCount > _.options.slidesToShow) {
                for (dotString = '
', i = 0; i <= _.getDotCount(); i += 1) dotString += "
" + _.options.customPaging.call(this, _, i) + "";
                dotString += "", _.$dots = $(dotString).appendTo(_.options.appendDots), _.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
            }
        }, Slick.prototype.buildOut = function() {
            var _ = this;
            _.$slides = _.$slider.children(_.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), _.slideCount = _.$slides.length, _.$slides.each(function(index, element) {
                $(element).attr("data-slick-index", index)
            }), _.$slidesCache = _.$slides, _.$slider.addClass("slick-slider"), _.$slideTrack = 0 === _.slideCount ? $('
').appendTo(_.$slider) : _.$slides.wrapAll('
').parent(), _.$list = _.$slideTrack.wrap('
').parent(), _.$slideTrack.css("opacity", 0), _.options.centerMode !== !0 && _.options.swipeToSlide !== !0 || (_.options.slidesToScroll = 1), $("img[data-lazy]", _.$slider).not("[src]").addClass("slick-loading"), _.setupInfinite(), _.buildArrows(), _.buildDots(), _.updateDots(), _.options.accessibility === !0 && _.$list.prop("tabIndex", 0), _.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide : 0), _.options.draggable === !0 && _.$list.addClass("draggable")
        }, Slick.prototype.checkResponsive = function(initial) {
            var breakpoint, targetBreakpoint, respondToWidth, _ = this,
                sliderWidth = _.$slider.width(),
                windowWidth = window.innerWidth || $(window).width();
            if ("window" === _.respondTo ? respondToWidth = windowWidth : "slider" === _.respondTo ? respondToWidth = sliderWidth : "min" === _.respondTo && (respondToWidth = Math.min(windowWidth, sliderWidth)), _.originalSettings.responsive && _.originalSettings.responsive.length > -1 && null !== _.originalSettings.responsive) {
                targetBreakpoint = null;
                for (breakpoint in _.breakpoints) _.breakpoints.hasOwnProperty(breakpoint) && (_.originalSettings.mobileFirst === !1 ? respondToWidth < _.breakpoints[breakpoint] && (targetBreakpoint = _.breakpoints[breakpoint]) : respondToWidth > _.breakpoints[breakpoint] && (targetBreakpoint = _.breakpoints[breakpoint]));
                null !== targetBreakpoint ? null !== _.activeBreakpoint ? targetBreakpoint !== _.activeBreakpoint && (_.activeBreakpoint = targetBreakpoint, "unslick" === _.breakpointSettings[targetBreakpoint] ? _.unslick() : (_.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]), initial === !0 && (_.currentSlide = _.options.initialSlide), _.refresh())) : (_.activeBreakpoint = targetBreakpoint, "unslick" === _.breakpointSettings[targetBreakpoint] ? _.unslick() : (_.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]), initial === !0 && (_.currentSlide = _.options.initialSlide), _.refresh())) : null !== _.activeBreakpoint && (_.activeBreakpoint = null, _.options = _.originalSettings, initial === !0 && (_.currentSlide = _.options.initialSlide), _.refresh())
            }
        }, Slick.prototype.changeSlide = function(event, dontAnimate) {
            var indexOffset, slideOffset, unevenOffset, _ = this,
                $target = $(event.target);
            switch ($target.is("a") && event.preventDefault(), unevenOffset = _.slideCount % _.options.slidesToScroll !== 0, indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll, event.data.message) {
                case "previous":
                    slideOffset = 0 === indexOffset ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset, _.slideCount > _.options.slidesToShow && _.slideHandler(_.currentSlide - slideOffset, !1, dontAnimate);
                    break;
                case "next":
                    slideOffset = 0 === indexOffset ? _.options.slidesToScroll : indexOffset, _.slideCount > _.options.slidesToShow && _.slideHandler(_.currentSlide + slideOffset, !1, dontAnimate);
                    break;
                case "index":
                    var index = 0 === event.data.index ? 0 : event.data.index || $(event.target).parent().index() * _.options.slidesToScroll;
                    _.slideHandler(_.checkNavigable(index), !1, dontAnimate);
                    break;
                default:
                    return
            }
        }, Slick.prototype.checkNavigable = function(index) {
            var navigables, prevNavigable, _ = this;
            if (navigables = _.getNavigableIndexes(), prevNavigable = 0, index > navigables[navigables.length - 1]) index = navigables[navigables.length - 1];
            else
                for (var n in navigables) {
                    if (index < navigables[n]) {
                        index = prevNavigable;
                        break
                    }
                    prevNavigable = navigables[n]
                }
            return index
        }, Slick.prototype.clickHandler = function(event) {
            var _ = this;
            _.shouldClick === !1 && (event.stopImmediatePropagation(), event.stopPropagation(), event.preventDefault())
        }, Slick.prototype.destroy = function() {
            var _ = this;
            _.autoPlayClear(), _.touchObject = {}, $(".slick-cloned", _.$slider).remove(), _.$dots && _.$dots.remove(), _.$prevArrow && "object" != typeof _.options.prevArrow && _.$prevArrow.remove(), _.$nextArrow && "object" != typeof _.options.nextArrow && _.$nextArrow.remove(), _.$slides.removeClass("slick-slide slick-active slick-center slick-visible").attr("aria-hidden", "true").removeAttr("data-slick-index").css({
                position: "",
                left: "",
                top: "",
                zIndex: "",
                opacity: "",
                width: ""
            }), _.$slider.removeClass("slick-slider"), _.$slider.removeClass("slick-initialized"), _.$list.off(".slick"), $(window).off(".slick-" + _.instanceUid), $(document).off(".slick-" + _.instanceUid), _.$slider.html(_.$slides)
        }, Slick.prototype.disableTransition = function(slide) {
            var _ = this,
                transition = {};
            transition[_.transitionType] = "", _.options.fade === !1 ? _.$slideTrack.css(transition) : _.$slides.eq(slide).css(transition)
        }, Slick.prototype.fadeSlide = function(slideIndex, callback) {
            var _ = this;
            _.cssTransitions === !1 ? (_.$slides.eq(slideIndex).css({
                zIndex: 1e3
            }), _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback)) : (_.applyTransition(slideIndex), _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: 1e3
            }), callback && setTimeout(function() {
                _.disableTransition(slideIndex), callback.call()
            }, _.options.speed))
        }, Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {
            var _ = this;
            null !== filter && (_.unload(), _.$slideTrack.children(this.options.slide).detach(), _.$slidesCache.filter(filter).appendTo(_.$slideTrack), _.reinit())
        }, Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {
            var _ = this;
            return _.currentSlide
        }, Slick.prototype.getDotCount = function() {
            var _ = this,
                breakPoint = 0,
                counter = 0,
                pagerQty = 0;
            if (_.options.infinite === !0) pagerQty = Math.ceil(_.slideCount / _.options.slidesToScroll);
            else if (_.options.centerMode === !0) pagerQty = _.slideCount;
            else
                for (; breakPoint < _.slideCount;) ++pagerQty, breakPoint = counter + _.options.slidesToShow, counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            return pagerQty - 1
        }, Slick.prototype.getLeft = function(slideIndex) {
            var targetLeft, verticalHeight, targetSlide, _ = this,
                verticalOffset = 0;
            return _.slideOffset = 0, verticalHeight = _.$slides.first().outerHeight(), _.options.infinite === !0 ? (_.slideCount > _.options.slidesToShow && (_.slideOffset = _.slideWidth * _.options.slidesToShow * -1, verticalOffset = verticalHeight * _.options.slidesToShow * -1), _.slideCount % _.options.slidesToScroll !== 0 && slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow && (slideIndex > _.slideCount ? (_.slideOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth * -1, verticalOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight * -1) : (_.slideOffset = _.slideCount % _.options.slidesToScroll * _.slideWidth * -1, verticalOffset = _.slideCount % _.options.slidesToScroll * verticalHeight * -1))) : slideIndex + _.options.slidesToShow > _.slideCount && (_.slideOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth, verticalOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight), _.slideCount <= _.options.slidesToShow && (_.slideOffset = 0, verticalOffset = 0), _.options.centerMode === !0 && _.options.infinite === !0 ? _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth : _.options.centerMode === !0 && (_.slideOffset = 0, _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2)), targetLeft = _.options.vertical === !1 ? slideIndex * _.slideWidth * -1 + _.slideOffset : slideIndex * verticalHeight * -1 + verticalOffset, _.options.variableWidth === !0 && (targetSlide = _.slideCount <= _.options.slidesToShow || _.options.infinite === !1 ? _.$slideTrack.children(".slick-slide").eq(slideIndex) : _.$slideTrack.children(".slick-slide").eq(slideIndex + _.options.slidesToShow), targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0, _.options.centerMode === !0 && (targetSlide = _.options.infinite === !1 ? _.$slideTrack.children(".slick-slide").eq(slideIndex) : _.$slideTrack.children(".slick-slide").eq(slideIndex + _.options.slidesToShow + 1), targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0, targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2)), targetLeft
        }, Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {
            var _ = this;
            return _.options[option]
        }, Slick.prototype.getNavigableIndexes = function() {
            var max, _ = this,
                breakPoint = 0,
                counter = 0,
                indexes = [];
            for (_.options.infinite === !1 ? (max = _.slideCount - _.options.slidesToShow + 1, _.options.centerMode === !0 && (max = _.slideCount)) : (breakPoint = _.slideCount * -1, counter = _.slideCount * -1, max = 2 * _.slideCount); breakPoint < max;) indexes.push(breakPoint), breakPoint = counter + _.options.slidesToScroll, counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            return indexes
        }, Slick.prototype.getSlick = function() {
            return this
        }, Slick.prototype.getSlideCount = function() {
            var slidesTraversed, swipedSlide, centerOffset, _ = this;
            return centerOffset = _.options.centerMode === !0 ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0, _.options.swipeToSlide === !0 ? (_.$slideTrack.find(".slick-slide").each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + $(slide).outerWidth() / 2 > _.swipeLeft * -1) return swipedSlide = slide, !1
            }), slidesTraversed = Math.abs($(swipedSlide).attr("data-slick-index") - _.currentSlide) || 1) : _.options.slidesToScroll
        }, Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {
            var _ = this;
            _.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(slide)
                }
            }, dontAnimate)
        }, Slick.prototype.init = function() {
            var _ = this;
            $(_.$slider).hasClass("slick-initialized") || ($(_.$slider).addClass("slick-initialized"), _.buildOut(), _.setProps(), _.startLoad(), _.loadSlider(), _.initializeEvents(), _.updateArrows(), _.updateDots()), _.$slider.trigger("init", [_])
        }, Slick.prototype.initArrowEvents = function() {
            var _ = this;
            _.options.arrows === !0 && _.slideCount > _.options.slidesToShow && (_.$prevArrow.on("click.slick", {
                message: "previous"
            }, _.changeSlide), _.$nextArrow.on("click.slick", {
                message: "next"
            }, _.changeSlide))
        }, Slick.prototype.initDotEvents = function() {
            var _ = this;
            _.options.dots === !0 && _.slideCount > _.options.slidesToShow && $("li", _.$dots).on("click.slick", {
                message: "index"
            }, _.changeSlide), _.options.dots === !0 && _.options.pauseOnDotsHover === !0 && _.options.autoplay === !0 && $("li", _.$dots).on("mouseenter.slick", function() {
                _.paused = !0, _.autoPlayClear()
            }).on("mouseleave.slick", function() {
                _.paused = !1, _.autoPlay()
            })
        }, Slick.prototype.initializeEvents = function() {
            var _ = this;
            _.initArrowEvents(), _.initDotEvents(), _.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, _.swipeHandler), _.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, _.swipeHandler), _.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, _.swipeHandler), _.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, _.swipeHandler), _.$list.on("click.slick", _.clickHandler), _.options.autoplay === !0 && ($(document).on(_.visibilityChange, function() {
                _.visibility()
            }), _.options.pauseOnHover === !0 && (_.$list.on("mouseenter.slick", function() {
                _.paused = !0, _.autoPlayClear()
            }), _.$list.on("mouseleave.slick", function() {
                _.paused = !1, _.autoPlay()
            }))), _.options.accessibility === !0 && _.$list.on("keydown.slick", _.keyHandler), _.options.focusOnSelect === !0 && $(_.$slideTrack).children().on("click.slick", _.selectHandler), $(window).on("orientationchange.slick.slick-" + _.instanceUid, function() {
                _.checkResponsive(), _.setPosition()
            }), $(window).on("resize.slick.slick-" + _.instanceUid, function() {
                $(window).width() !== _.windowWidth && (clearTimeout(_.windowDelay), _.windowDelay = window.setTimeout(function() {
                    _.windowWidth = $(window).width(), _.checkResponsive(), _.setPosition()
                }, 50))
            }), $("*[draggable!=true]", _.$slideTrack).on("dragstart", function(e) {
                e.preventDefault()
            }), $(window).on("load.slick.slick-" + _.instanceUid, _.setPosition), $(document).on("ready.slick.slick-" + _.instanceUid, _.setPosition)
        }, Slick.prototype.initUI = function() {
            var _ = this;
            _.options.arrows === !0 && _.slideCount > _.options.slidesToShow && (_.$prevArrow.show(), _.$nextArrow.show()), _.options.dots === !0 && _.slideCount > _.options.slidesToShow && _.$dots.show(), _.options.autoplay === !0 && _.autoPlay()
        }, Slick.prototype.keyHandler = function(event) {
            var _ = this;
            37 === event.keyCode && _.options.accessibility === !0 ? _.changeSlide({
                data: {
                    message: "previous"
                }
            }) : 39 === event.keyCode && _.options.accessibility === !0 && _.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, Slick.prototype.lazyLoad = function() {
            function loadImages(imagesScope) {
                $("img[data-lazy]", imagesScope).each(function() {
                    var image = $(this),
                        imageSource = $(this).attr("data-lazy");
                    image.load(function() {
                        image.animate({
                            opacity: 1
                        }, 200)
                    }).css({
                        opacity: 0
                    }).attr("src", imageSource).removeAttr("data-lazy").removeClass("slick-loading")
                })
            }
            var loadRange, cloneRange, rangeStart, rangeEnd, _ = this;
            _.options.centerMode === !0 ? _.options.infinite === !0 ? (rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1), rangeEnd = rangeStart + _.options.slidesToShow + 2) : (rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1)), rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide) : (rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide, rangeEnd = rangeStart + _.options.slidesToShow, _.options.fade === !0 && (rangeStart > 0 && rangeStart--, rangeEnd <= _.slideCount && rangeEnd++)), loadRange = _.$slider.find(".slick-slide").slice(rangeStart, rangeEnd), loadImages(loadRange), _.slideCount <= _.options.slidesToShow ? (cloneRange = _.$slider.find(".slick-slide"), loadImages(cloneRange)) : _.currentSlide >= _.slideCount - _.options.slidesToShow ? (cloneRange = _.$slider.find(".slick-cloned").slice(0, _.options.slidesToShow), loadImages(cloneRange)) : 0 === _.currentSlide && (cloneRange = _.$slider.find(".slick-cloned").slice(_.options.slidesToShow * -1), loadImages(cloneRange))
        }, Slick.prototype.loadSlider = function() {
            var _ = this;
            _.setPosition(), _.$slideTrack.css({
                opacity: 1
            }), _.$slider.removeClass("slick-loading"), _.initUI(), "progressive" === _.options.lazyLoad && _.progressiveLazyLoad()
        }, Slick.prototype.next = Slick.prototype.slickNext = function() {
            var _ = this;
            _.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, Slick.prototype.pause = Slick.prototype.slickPause = function() {
            var _ = this;
            _.autoPlayClear(), _.paused = !0
        }, Slick.prototype.play = Slick.prototype.slickPlay = function() {
            var _ = this;
            _.paused = !1, _.autoPlay()
        }, Slick.prototype.postSlide = function(index) {
            var _ = this;
            _.$slider.trigger("afterChange", [_, index]), _.animating = !1, _.setPosition(), _.swipeLeft = null, _.options.autoplay === !0 && _.paused === !1 && _.autoPlay()
        }, Slick.prototype.prev = Slick.prototype.slickPrev = function() {
            var _ = this;
            _.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, Slick.prototype.progressiveLazyLoad = function() {
            var imgCount, targetImage, _ = this;
            imgCount = $("img[data-lazy]", _.$slider).length, imgCount > 0 && (targetImage = $("img[data-lazy]", _.$slider).first(), targetImage.attr("src", targetImage.attr("data-lazy")).removeClass("slick-loading").load(function() {
                targetImage.removeAttr("data-lazy"), _.progressiveLazyLoad(), _.options.adaptiveHeight === !0 && _.setPosition()
            }).error(function() {
                targetImage.removeAttr("data-lazy"), _.progressiveLazyLoad()
            }))
        }, Slick.prototype.refresh = function() {
            var _ = this,
                currentSlide = _.currentSlide;
            _.destroy(), $.extend(_, _.initials), _.init(), _.changeSlide({
                data: {
                    message: "index",
                    index: currentSlide
                }
            }, !0)
        }, Slick.prototype.reinit = function() {
            var _ = this;
            _.$slides = _.$slideTrack.children(_.options.slide).addClass("slick-slide"), _.slideCount = _.$slides.length, _.currentSlide >= _.slideCount && 0 !== _.currentSlide && (_.currentSlide = _.currentSlide - _.options.slidesToScroll), _.slideCount <= _.options.slidesToShow && (_.currentSlide = 0), _.setProps(), _.setupInfinite(), _.buildArrows(), _.updateArrows(), _.initArrowEvents(), _.buildDots(), _.updateDots(), _.initDotEvents(), _.options.focusOnSelect === !0 && $(_.$slideTrack).children().on("click.slick", _.selectHandler), _.setSlideClasses(0), _.setPosition(), _.$slider.trigger("reInit", [_])
        }, Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {
            var _ = this;
            return "boolean" == typeof index ? (removeBefore = index, index = removeBefore === !0 ? 0 : _.slideCount - 1) : index = removeBefore === !0 ? --index : index, !(_.slideCount < 1 || index < 0 || index > _.slideCount - 1) && (_.unload(), removeAll === !0 ? _.$slideTrack.children().remove() : _.$slideTrack.children(this.options.slide).eq(index).remove(), _.$slides = _.$slideTrack.children(this.options.slide), _.$slideTrack.children(this.options.slide).detach(), _.$slideTrack.append(_.$slides), _.$slidesCache = _.$slides, void _.reinit())
        }, Slick.prototype.setCSS = function(position) {
            var x, y, _ = this,
                positionProps = {};
            _.options.rtl === !0 && (position = -position), x = "left" == _.positionProp ? Math.ceil(position) + "px" : "0px", y = "top" == _.positionProp ? Math.ceil(position) + "px" : "0px", positionProps[_.positionProp] = position, _.transformsEnabled === !1 ? _.$slideTrack.css(positionProps) : (positionProps = {}, _.cssTransitions === !1 ? (positionProps[_.animType] = "translate(" + x + ", " + y + ")", _.$slideTrack.css(positionProps)) : (positionProps[_.animType] = "translate3d(" + x + ", " + y + ", 0px)", _.$slideTrack.css(positionProps)))
        }, Slick.prototype.setDimensions = function() {
            var _ = this;
            if (_.options.vertical === !1 ? _.options.centerMode === !0 && _.$list.css({
                    padding: "0px " + _.options.centerPadding
                }) : (_.$list.height(_.$slides.first().outerHeight(!0) * _.options.slidesToShow), _.options.centerMode === !0 && _.$list.css({
                    padding: _.options.centerPadding + " 0px"
                })), _.listWidth = _.$list.width(), _.listHeight = _.$list.height(), _.options.vertical === !1 && _.options.variableWidth === !1) _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow), _.$slideTrack.width(Math.ceil(_.slideWidth * _.$slideTrack.children(".slick-slide").length));
            else if (_.options.variableWidth === !0) {
                var trackWidth = 0;
                _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow), _.$slideTrack.children(".slick-slide").each(function() {
                    trackWidth += _.listWidth
                }), _.$slideTrack.width(Math.ceil(trackWidth) + 1)
            } else _.slideWidth = Math.ceil(_.listWidth), _.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(!0) * _.$slideTrack.children(".slick-slide").length));
            var offset = _.$slides.first().outerWidth(!0) - _.$slides.first().width();
            _.options.variableWidth === !1 && _.$slideTrack.children(".slick-slide").width(_.slideWidth - offset)
        }, Slick.prototype.setFade = function() {
            var targetLeft, _ = this;
            _.$slides.each(function(index, element) {
                targetLeft = _.slideWidth * index * -1, _.options.rtl === !0 ? $(element).css({
                    position: "relative",
                    right: targetLeft,
                    top: 0,
                    zIndex: 800,
                    opacity: 0
                }) : $(element).css({
                    position: "relative",
                    left: targetLeft,
                    top: 0,
                    zIndex: 800,
                    opacity: 0
                })
            }), _.$slides.eq(_.currentSlide).css({
                zIndex: 900,
                opacity: 1
            })
        }, Slick.prototype.setHeight = function() {
            var _ = this;
            if (1 === _.options.slidesToShow && _.options.adaptiveHeight === !0 && _.options.vertical === !1) {
                var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(!0);
                _.$list.css("height", targetHeight)
            }
        }, Slick.prototype.setOption = Slick.prototype.slickSetOption = function(option, value, refresh) {
            var _ = this;
            _.options[option] = value, refresh === !0 && (_.unload(), _.reinit())
        }, Slick.prototype.setPosition = function() {
            var _ = this;
            _.setDimensions(), _.setHeight(), _.options.fade === !1 ? _.setCSS(_.getLeft(_.currentSlide)) : _.setFade(), _.$slider.trigger("setPosition", [_])
        }, Slick.prototype.setProps = function() {
            var _ = this,
                bodyStyle = document.body.style;
            _.positionProp = _.options.vertical === !0 ? "top" : "left", "top" === _.positionProp ? _.$slider.addClass("slick-vertical") : _.$slider.removeClass("slick-vertical"), void 0 === bodyStyle.WebkitTransition && void 0 === bodyStyle.MozTransition && void 0 === bodyStyle.msTransition || _.options.useCSS === !0 && (_.cssTransitions = !0), void 0 !== bodyStyle.OTransform && (_.animType = "OTransform", _.transformType = "-o-transform", _.transitionType = "OTransition", void 0 === bodyStyle.perspectiveProperty && void 0 === bodyStyle.webkitPerspective && (_.animType = !1)), void 0 !== bodyStyle.MozTransform && (_.animType = "MozTransform", _.transformType = "-moz-transform", _.transitionType = "MozTransition", void 0 === bodyStyle.perspectiveProperty && void 0 === bodyStyle.MozPerspective && (_.animType = !1)), void 0 !== bodyStyle.webkitTransform && (_.animType = "webkitTransform", _.transformType = "-webkit-transform", _.transitionType = "webkitTransition", void 0 === bodyStyle.perspectiveProperty && void 0 === bodyStyle.webkitPerspective && (_.animType = !1)), void 0 !== bodyStyle.msTransform && (_.animType = "msTransform", _.transformType = "-ms-transform", _.transitionType = "msTransition", void 0 === bodyStyle.msTransform && (_.animType = !1)), void 0 !== bodyStyle.transform && _.animType !== !1 && (_.animType = "transform", _.transformType = "transform", _.transitionType = "transition"), _.transformsEnabled = null !== _.animType && _.animType !== !1
        }, Slick.prototype.setSlideClasses = function(index) {
            var centerOffset, allSlides, indexOffset, remainder, _ = this;
            _.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden", "true").removeClass("slick-center"), allSlides = _.$slider.find(".slick-slide"), _.options.centerMode === !0 ? (centerOffset = Math.floor(_.options.slidesToShow / 2), _.options.infinite === !0 && (index >= centerOffset && index <= _.slideCount - 1 - centerOffset ? _.$slides.slice(index - centerOffset, index + centerOffset + 1).addClass("slick-active").attr("aria-hidden", "false") : (indexOffset = _.options.slidesToShow + index, allSlides.slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === index ? allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass("slick-center") : index === _.slideCount - 1 && allSlides.eq(_.options.slidesToShow).addClass("slick-center")), _.$slides.eq(index).addClass("slick-center")) : index >= 0 && index <= _.slideCount - _.options.slidesToShow ? _.$slides.slice(index, index + _.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : allSlides.length <= _.options.slidesToShow ? allSlides.addClass("slick-active").attr("aria-hidden", "false") : (remainder = _.slideCount % _.options.slidesToShow, indexOffset = _.options.infinite === !0 ? _.options.slidesToShow + index : index, _.options.slidesToShow == _.options.slidesToScroll && _.slideCount - index < _.options.slidesToShow ? allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass("slick-active").attr("aria-hidden", "false") : allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === _.options.lazyLoad && _.lazyLoad()
        }, Slick.prototype.setupInfinite = function() {
            var i, slideIndex, infiniteCount, _ = this;
            if (_.options.fade === !0 && (_.options.centerMode = !1), _.options.infinite === !0 && _.options.fade === !1 && (slideIndex = null, _.slideCount > _.options.slidesToShow)) {
                for (infiniteCount = _.options.centerMode === !0 ? _.options.slidesToShow + 1 : _.options.slidesToShow, i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) slideIndex = i - 1, $(_.$slides[slideIndex]).clone(!0).attr("id", "").attr("data-slick-index", slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass("slick-cloned");
                for (i = 0; i < infiniteCount; i += 1) slideIndex = i, $(_.$slides[slideIndex]).clone(!0).attr("id", "").attr("data-slick-index", slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass("slick-cloned");
                _.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    $(this).attr("id", "")
                })
            }
        }, Slick.prototype.selectHandler = function(event) {
            var _ = this,
                index = parseInt($(event.target).parents(".slick-slide").attr("data-slick-index"));
            return index || (index = 0), _.slideCount <= _.options.slidesToShow ? (_.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden", "true"), _.$slides.eq(index).addClass("slick-active").attr("aria-hidden", "false"), _.options.centerMode === !0 && (_.$slider.find(".slick-slide").removeClass("slick-center"), _.$slides.eq(index).addClass("slick-center")), void _.asNavFor(index)) : void _.slideHandler(index)
        }, Slick.prototype.slideHandler = function(index, sync, dontAnimate) {
            var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
                _ = this;
            if (sync = sync || !1, (_.animating !== !0 || _.options.waitForAnimate !== !0) && !(_.options.fade === !0 && _.currentSlide === index || _.slideCount <= _.options.slidesToShow)) return sync === !1 && _.asNavFor(index), targetSlide = index, targetLeft = _.getLeft(targetSlide), slideLeft = _.getLeft(_.currentSlide), _.currentLeft = null === _.swipeLeft ? slideLeft : _.swipeLeft, _.options.infinite === !1 && _.options.centerMode === !1 && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll) ? void(_.options.fade === !1 && (targetSlide = _.currentSlide, dontAnimate !== !0 ? _.animateSlide(slideLeft, function() {
                _.postSlide(targetSlide)
            }) : _.postSlide(targetSlide))) : _.options.infinite === !1 && _.options.centerMode === !0 && (index < 0 || index > _.slideCount - _.options.slidesToScroll) ? void(_.options.fade === !1 && (targetSlide = _.currentSlide, dontAnimate !== !0 ? _.animateSlide(slideLeft, function() {
                _.postSlide(targetSlide)
            }) : _.postSlide(targetSlide))) : (_.options.autoplay === !0 && clearInterval(_.autoPlayTimer), animSlide = targetSlide < 0 ? _.slideCount % _.options.slidesToScroll !== 0 ? _.slideCount - _.slideCount % _.options.slidesToScroll : _.slideCount + targetSlide : targetSlide >= _.slideCount ? _.slideCount % _.options.slidesToScroll !== 0 ? 0 : targetSlide - _.slideCount : targetSlide, _.animating = !0, _.$slider.trigger("beforeChange", [_, _.currentSlide, animSlide]), oldSlide = _.currentSlide, _.currentSlide = animSlide, _.setSlideClasses(_.currentSlide),
                _.updateDots(), _.updateArrows(), _.options.fade === !0 ? (dontAnimate !== !0 ? _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide)
                }) : _.postSlide(animSlide), void _.animateHeight()) : void(dontAnimate !== !0 ? _.animateSlide(targetLeft, function() {
                    _.postSlide(animSlide)
                }) : _.postSlide(animSlide)))
        }, Slick.prototype.startLoad = function() {
            var _ = this;
            _.options.arrows === !0 && _.slideCount > _.options.slidesToShow && (_.$prevArrow.hide(), _.$nextArrow.hide()), _.options.dots === !0 && _.slideCount > _.options.slidesToShow && _.$dots.hide(), _.$slider.addClass("slick-loading")
        }, Slick.prototype.swipeDirection = function() {
            var xDist, yDist, r, swipeAngle, _ = this;
            return xDist = _.touchObject.startX - _.touchObject.curX, yDist = _.touchObject.startY - _.touchObject.curY, r = Math.atan2(yDist, xDist), swipeAngle = Math.round(180 * r / Math.PI), swipeAngle < 0 && (swipeAngle = 360 - Math.abs(swipeAngle)), swipeAngle <= 45 && swipeAngle >= 0 ? _.options.rtl === !1 ? "left" : "right" : swipeAngle <= 360 && swipeAngle >= 315 ? _.options.rtl === !1 ? "left" : "right" : swipeAngle >= 135 && swipeAngle <= 225 ? _.options.rtl === !1 ? "right" : "left" : "vertical"
        }, Slick.prototype.swipeEnd = function(event) {
            var slideCount, _ = this;
            if (_.dragging = !1, _.shouldClick = !(_.touchObject.swipeLength > 10), void 0 === _.touchObject.curX) return !1;
            if (_.touchObject.edgeHit === !0 && _.$slider.trigger("edge", [_, _.swipeDirection()]), _.touchObject.swipeLength >= _.touchObject.minSwipe) switch (_.swipeDirection()) {
                case "left":
                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount(), _.slideHandler(slideCount), _.currentDirection = 0, _.touchObject = {}, _.$slider.trigger("swipe", [_, "left"]);
                    break;
                case "right":
                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount(), _.slideHandler(slideCount), _.currentDirection = 1, _.touchObject = {}, _.$slider.trigger("swipe", [_, "right"])
            } else _.touchObject.startX !== _.touchObject.curX && (_.slideHandler(_.currentSlide), _.touchObject = {})
        }, Slick.prototype.swipeHandler = function(event) {
            var _ = this;
            if (!(_.options.swipe === !1 || "ontouchend" in document && _.options.swipe === !1 || _.options.draggable === !1 && event.type.indexOf("mouse") !== -1)) switch (_.touchObject.fingerCount = event.originalEvent && void 0 !== event.originalEvent.touches ? event.originalEvent.touches.length : 1, _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold, event.data.action) {
                case "start":
                    _.swipeStart(event);
                    break;
                case "move":
                    _.swipeMove(event);
                    break;
                case "end":
                    _.swipeEnd(event)
            }
        }, Slick.prototype.swipeMove = function(event) {
            var curLeft, swipeDirection, swipeLength, positionOffset, touches, _ = this;
            return touches = void 0 !== event.originalEvent ? event.originalEvent.touches : null, !(!_.dragging || touches && 1 !== touches.length) && (curLeft = _.getLeft(_.currentSlide), _.touchObject.curX = void 0 !== touches ? touches[0].pageX : event.clientX, _.touchObject.curY = void 0 !== touches ? touches[0].pageY : event.clientY, _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2))), swipeDirection = _.swipeDirection(), "vertical" !== swipeDirection ? (void 0 !== event.originalEvent && _.touchObject.swipeLength > 4 && event.preventDefault(), positionOffset = (_.options.rtl === !1 ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1), swipeLength = _.touchObject.swipeLength, _.touchObject.edgeHit = !1, _.options.infinite === !1 && (0 === _.currentSlide && "right" === swipeDirection || _.currentSlide >= _.getDotCount() && "left" === swipeDirection) && (swipeLength = _.touchObject.swipeLength * _.options.edgeFriction, _.touchObject.edgeHit = !0), _.options.vertical === !1 ? _.swipeLeft = curLeft + swipeLength * positionOffset : _.swipeLeft = curLeft + swipeLength * (_.$list.height() / _.listWidth) * positionOffset, _.options.fade !== !0 && _.options.touchMove !== !1 && (_.animating === !0 ? (_.swipeLeft = null, !1) : void _.setCSS(_.swipeLeft))) : void 0)
        }, Slick.prototype.swipeStart = function(event) {
            var touches, _ = this;
            return 1 !== _.touchObject.fingerCount || _.slideCount <= _.options.slidesToShow ? (_.touchObject = {}, !1) : (void 0 !== event.originalEvent && void 0 !== event.originalEvent.touches && (touches = event.originalEvent.touches[0]), _.touchObject.startX = _.touchObject.curX = void 0 !== touches ? touches.pageX : event.clientX, _.touchObject.startY = _.touchObject.curY = void 0 !== touches ? touches.pageY : event.clientY, void(_.dragging = !0))
        }, Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {
            var _ = this;
            null !== _.$slidesCache && (_.unload(), _.$slideTrack.children(this.options.slide).detach(), _.$slidesCache.appendTo(_.$slideTrack), _.reinit())
        }, Slick.prototype.unload = function() {
            var _ = this;
            $(".slick-cloned", _.$slider).remove(), _.$dots && _.$dots.remove(), _.$prevArrow && "object" != typeof _.options.prevArrow && _.$prevArrow.remove(), _.$nextArrow && "object" != typeof _.options.nextArrow && _.$nextArrow.remove(), _.$slides.removeClass("slick-slide slick-active slick-visible").attr("aria-hidden", "true").css("width", "")
        }, Slick.prototype.unslick = function() {
            var _ = this;
            _.destroy()
        }, Slick.prototype.updateArrows = function() {
            var centerOffset, _ = this;
            centerOffset = Math.floor(_.options.slidesToShow / 2), _.options.arrows === !0 && _.options.infinite !== !0 && _.slideCount > _.options.slidesToShow && (_.$prevArrow.removeClass("slick-disabled"), _.$nextArrow.removeClass("slick-disabled"), 0 === _.currentSlide ? (_.$prevArrow.addClass("slick-disabled"), _.$nextArrow.removeClass("slick-disabled")) : _.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === !1 ? (_.$nextArrow.addClass("slick-disabled"), _.$prevArrow.removeClass("slick-disabled")) : _.currentSlide >= _.slideCount - 1 && _.options.centerMode === !0 && (_.$nextArrow.addClass("slick-disabled"), _.$prevArrow.removeClass("slick-disabled")))
        }, Slick.prototype.updateDots = function() {
            var _ = this;
            null !== _.$dots && (_.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), _.$dots.find("li").eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
        }, Slick.prototype.visibility = function() {
            var _ = this;
            document[_.hidden] ? (_.paused = !0, _.autoPlayClear()) : (_.paused = !1, _.autoPlay())
        }, $.fn.slick = function() {
            var ret, _ = this,
                opt = arguments[0],
                args = Array.prototype.slice.call(arguments, 1),
                l = _.length,
                i = 0;
            for (i; i < l; i++)
                if ("object" == typeof opt || "undefined" == typeof opt ? _[i].slick = new Slick(_[i], opt) : ret = _[i].slick[opt].apply(_[i].slick, args), "undefined" != typeof ret) return ret;
            return _
        }, $(function() {
            $("[data-slick]").slick()
        })
    }), angular.module("slick", []).directive("slick", ["$timeout", function($timeout) {
        return {
            restrict: "AEC",
            scope: {
                initOnload: "@",
                data: "=",
                currentIndex: "=",
                accessibility: "@",
                adaptiveHeight: "@",
                arrows: "@",
                asNavFor: "@",
                appendArrows: "@",
                appendDots: "@",
                autoplay: "@",
                autoplaySpeed: "@",
                centerMode: "@",
                centerPadding: "@",
                cssEase: "@",
                customPaging: "&",
                dots: "@",
                draggable: "@",
                easing: "@",
                fade: "@",
                focusOnSelect: "@",
                infinite: "@",
                initialSlide: "@",
                lazyLoad: "@",
                onBeforeChange: "&",
                onAfterChange: "&",
                onInit: "&",
                onReInit: "&",
                onSetPosition: "&",
                pauseOnHover: "@",
                pauseOnDotsHover: "@",
                responsive: "=",
                rtl: "@",
                slide: "@",
                slidesToShow: "@",
                slidesToScroll: "@",
                speed: "@",
                swipe: "@",
                swipeToSlide: "@",
                touchMove: "@",
                touchThreshold: "@",
                useCSS: "@",
                variableWidth: "@",
                vertical: "@",
                prevArrow: "@",
                nextArrow: "@"
            },
            link: function(scope, element, attrs) {
                var destroySlick, initializeSlick, isInitialized;
                return destroySlick = function() {
                    return $timeout(function() {
                        var slider;
                        return slider = $(element), slider.unslick(), slider.find(".slick-list").remove(), slider
                    })
                }, initializeSlick = function() {
                    return $timeout(function() {
                        var currentIndex, customPaging, slider;
                        return slider = $(element), null != scope.currentIndex && (currentIndex = scope.currentIndex), customPaging = function(slick, index) {
                            return scope.customPaging({
                                slick: slick,
                                index: index
                            })
                        }, slider.slick({
                            accessibility: "false" !== scope.accessibility,
                            adaptiveHeight: "true" === scope.adaptiveHeight,
                            arrows: "false" !== scope.arrows,
                            asNavFor: scope.asNavFor ? scope.asNavFor : void 0,
                            appendArrows: scope.appendArrows ? $(scope.appendArrows) : $(element),
                            appendDots: scope.appendDots ? $(scope.appendDots) : $(element),
                            autoplay: "true" === scope.autoplay,
                            autoplaySpeed: null != scope.autoplaySpeed ? parseInt(scope.autoplaySpeed, 10) : 3e3,
                            centerMode: "true" === scope.centerMode,
                            centerPadding: scope.centerPadding || "50px",
                            cssEase: scope.cssEase || "ease",
                            customPaging: attrs.customPaging ? customPaging : void 0,
                            dots: "true" === scope.dots,
                            draggable: "false" !== scope.draggable,
                            easing: scope.easing || "linear",
                            fade: "true" === scope.fade,
                            focusOnSelect: "true" === scope.focusOnSelect,
                            infinite: "false" !== scope.infinite,
                            initialSlide: scope.initialSlide || 0,
                            lazyLoad: scope.lazyLoad || "ondemand",
                            beforeChange: attrs.onBeforeChange ? scope.onBeforeChange : void 0,
                            onReInit: attrs.onReInit ? scope.onReInit : void 0,
                            onSetPosition: attrs.onSetPosition ? scope.onSetPosition : void 0,
                            pauseOnHover: "false" !== scope.pauseOnHover,
                            responsive: scope.responsive || void 0,
                            rtl: "true" === scope.rtl,
                            slide: scope.slide || "div",
                            slidesToShow: null != scope.slidesToShow ? parseInt(scope.slidesToShow, 10) : 1,
                            slidesToScroll: null != scope.slidesToScroll ? parseInt(scope.slidesToScroll, 10) : 1,
                            speed: null != scope.speed ? parseInt(scope.speed, 10) : 300,
                            swipe: "false" !== scope.swipe,
                            swipeToSlide: "true" === scope.swipeToSlide,
                            touchMove: "false" !== scope.touchMove,
                            touchThreshold: scope.touchThreshold ? parseInt(scope.touchThreshold, 10) : 5,
                            useCSS: "false" !== scope.useCSS,
                            variableWidth: "true" === scope.variableWidth,
                            vertical: "true" === scope.vertical,
                            prevArrow: scope.prevArrow ? $(scope.prevArrow) : void 0,
                            nextArrow: scope.nextArrow ? $(scope.nextArrow) : void 0
                        }), slider.on("init", function(sl) {
                            if (attrs.onInit && scope.onInit(), null != currentIndex) return sl.slideHandler(currentIndex)
                        }), slider.on("afterChange", function(event, slick, currentSlide, nextSlide) {
                            if (scope.onAfterChange && scope.onAfterChange(), null != currentIndex) return scope.$apply(function() {
                                return currentIndex = currentSlide, scope.currentIndex = currentSlide
                            })
                        }), scope.$watch("currentIndex", function(newVal, oldVal) {
                            if (null != currentIndex && null != newVal && newVal !== currentIndex) return slider.slick("slickGoTo", newVal)
                        })
                    })
                }, scope.initOnload ? (isInitialized = !1, scope.$watch("data", function(newVal, oldVal) {
                    if (null != newVal) return isInitialized && destroySlick(), initializeSlick(), isInitialized = !0
                })) : initializeSlick()
            }
        }
    }]),
    function(window, angular) {
        "use strict";

        function nodeName_(element) {
            return angular.lowercase(element.nodeName || element[0] && element[0].nodeName)
        }

        function $TouchProvider($provide, $compileProvider) {
            var ngClickOverrideEnabled = !1,
                ngClickDirectiveAdded = !1;
            this.ngClickOverrideEnabled = function(enabled) {
                return angular.isDefined(enabled) ? (enabled && !ngClickDirectiveAdded && (ngClickDirectiveAdded = !0, ngTouchClickDirectiveFactory.$$moduleName = "ngTouch", $compileProvider.directive("ngClick", ngTouchClickDirectiveFactory), $provide.decorator("ngClickDirective", ["$delegate", function($delegate) {
                    if (ngClickOverrideEnabled) $delegate.shift();
                    else
                        for (var i = $delegate.length - 1; i >= 0;) {
                            if ("ngTouch" === $delegate[i].$$moduleName) {
                                $delegate.splice(i, 1);
                                break
                            }
                            i--
                        }
                    return $delegate
                }])), ngClickOverrideEnabled = enabled, this) : ngClickOverrideEnabled
            }, this.$get = function() {
                return {
                    ngClickOverrideEnabled: function() {
                        return ngClickOverrideEnabled
                    }
                }
            }
        }

        function makeSwipeDirective(directiveName, direction, eventName) {
            ngTouch.directive(directiveName, ["$parse", "$swipe", function($parse, $swipe) {
                var MAX_VERTICAL_DISTANCE = 75,
                    MAX_VERTICAL_RATIO = .3,
                    MIN_HORIZONTAL_DISTANCE = 30;
                return function(scope, element, attr) {
                    function validSwipe(coords) {
                        if (!startCoords) return !1;
                        var deltaY = Math.abs(coords.y - startCoords.y),
                            deltaX = (coords.x - startCoords.x) * direction;
                        return valid && deltaY < MAX_VERTICAL_DISTANCE && deltaX > 0 && deltaX > MIN_HORIZONTAL_DISTANCE && deltaY / deltaX < MAX_VERTICAL_RATIO
                    }
                    var startCoords, valid, swipeHandler = $parse(attr[directiveName]),
                        pointerTypes = ["touch"];
                    angular.isDefined(attr.ngSwipeDisableMouse) || pointerTypes.push("mouse"), $swipe.bind(element, {
                        start: function(coords, event) {
                            startCoords = coords, valid = !0
                        },
                        cancel: function(event) {
                            valid = !1
                        },
                        end: function(coords, event) {
                            validSwipe(coords) && scope.$apply(function() {
                                element.triggerHandler(eventName), swipeHandler(scope, {
                                    $event: event
                                })
                            })
                        }
                    }, pointerTypes)
                }
            }])
        }
        var ngTouch = angular.module("ngTouch", []);
        ngTouch.provider("$touch", $TouchProvider), $TouchProvider.$inject = ["$provide", "$compileProvider"], ngTouch.factory("$swipe", [function() {
            function getCoordinates(event) {
                var originalEvent = event.originalEvent || event,
                    touches = originalEvent.touches && originalEvent.touches.length ? originalEvent.touches : [originalEvent],
                    e = originalEvent.changedTouches && originalEvent.changedTouches[0] || touches[0];
                return {
                    x: e.clientX,
                    y: e.clientY
                }
            }

            function getEvents(pointerTypes, eventType) {
                var res = [];
                return angular.forEach(pointerTypes, function(pointerType) {
                    var eventName = POINTER_EVENTS[pointerType][eventType];
                    eventName && res.push(eventName)
                }), res.join(" ")
            }
            var MOVE_BUFFER_RADIUS = 10,
                POINTER_EVENTS = {
                    mouse: {
                        start: "mousedown",
                        move: "mousemove",
                        end: "mouseup"
                    },
                    touch: {
                        start: "touchstart",
                        move: "touchmove",
                        end: "touchend",
                        cancel: "touchcancel"
                    },
                    pointer: {
                        start: "pointerdown",
                        move: "pointermove",
                        end: "pointerup",
                        cancel: "pointercancel"
                    }
                };
            return {
                bind: function(element, eventHandlers, pointerTypes) {
                    var totalX, totalY, startCoords, lastPos, active = !1;
                    pointerTypes = pointerTypes || ["mouse", "touch", "pointer"], element.on(getEvents(pointerTypes, "start"), function(event) {
                        startCoords = getCoordinates(event), active = !0, totalX = 0, totalY = 0, lastPos = startCoords, eventHandlers.start && eventHandlers.start(startCoords, event)
                    });
                    var events = getEvents(pointerTypes, "cancel");
                    events && element.on(events, function(event) {
                        active = !1, eventHandlers.cancel && eventHandlers.cancel(event)
                    }), element.on(getEvents(pointerTypes, "move"), function(event) {
                        if (active && startCoords) {
                            var coords = getCoordinates(event);
                            if (totalX += Math.abs(coords.x - lastPos.x), totalY += Math.abs(coords.y - lastPos.y), lastPos = coords, !(totalX < MOVE_BUFFER_RADIUS && totalY < MOVE_BUFFER_RADIUS)) return totalY > totalX ? (active = !1, void(eventHandlers.cancel && eventHandlers.cancel(event))) : (event.preventDefault(), void(eventHandlers.move && eventHandlers.move(coords, event)))
                        }
                    }), element.on(getEvents(pointerTypes, "end"), function(event) {
                        active && (active = !1, eventHandlers.end && eventHandlers.end(getCoordinates(event), event))
                    })
                }
            }
        }]);
        var ngTouchClickDirectiveFactory = ["$parse", "$timeout", "$rootElement", function($parse, $timeout, $rootElement) {
            function hit(x1, y1, x2, y2) {
                return Math.abs(x1 - x2) < CLICKBUSTER_THRESHOLD && Math.abs(y1 - y2) < CLICKBUSTER_THRESHOLD
            }

            function checkAllowableRegions(touchCoordinates, x, y) {
                for (var i = 0; i < touchCoordinates.length; i += 2)
                    if (hit(touchCoordinates[i], touchCoordinates[i + 1], x, y)) return touchCoordinates.splice(i, i + 2), !0;
                return !1
            }

            function onClick(event) {
                if (!(Date.now() - lastPreventedTime > PREVENT_DURATION)) {
                    var touches = event.touches && event.touches.length ? event.touches : [event],
                        x = touches[0].clientX,
                        y = touches[0].clientY;
                    x < 1 && y < 1 || lastLabelClickCoordinates && lastLabelClickCoordinates[0] === x && lastLabelClickCoordinates[1] === y || (lastLabelClickCoordinates && (lastLabelClickCoordinates = null), "label" === nodeName_(event.target) && (lastLabelClickCoordinates = [x, y]), checkAllowableRegions(touchCoordinates, x, y) || (event.stopPropagation(), event.preventDefault(), event.target && event.target.blur && event.target.blur()))
                }
            }

            function onTouchStart(event) {
                var touches = event.touches && event.touches.length ? event.touches : [event],
                    x = touches[0].clientX,
                    y = touches[0].clientY;
                touchCoordinates.push(x, y), $timeout(function() {
                    for (var i = 0; i < touchCoordinates.length; i += 2)
                        if (touchCoordinates[i] === x && touchCoordinates[i + 1] === y) return void touchCoordinates.splice(i, i + 2)
                }, PREVENT_DURATION, !1)
            }

            function preventGhostClick(x, y) {
                touchCoordinates || ($rootElement[0].addEventListener("click", onClick, !0), $rootElement[0].addEventListener("touchstart", onTouchStart, !0), touchCoordinates = []), lastPreventedTime = Date.now(), checkAllowableRegions(touchCoordinates, x, y)
            }
            var lastPreventedTime, touchCoordinates, lastLabelClickCoordinates, TAP_DURATION = 750,
                MOVE_TOLERANCE = 12,
                PREVENT_DURATION = 2500,
                CLICKBUSTER_THRESHOLD = 25,
                ACTIVE_CLASS_NAME = "ng-click-active";
            return function(scope, element, attr) {
                function resetState() {
                    tapping = !1, element.removeClass(ACTIVE_CLASS_NAME)
                }
                var tapElement, startTime, touchStartX, touchStartY, clickHandler = $parse(attr.ngClick),
                    tapping = !1;
                element.on("touchstart", function(event) {
                    tapping = !0, tapElement = event.target ? event.target : event.srcElement, 3 === tapElement.nodeType && (tapElement = tapElement.parentNode), element.addClass(ACTIVE_CLASS_NAME), startTime = Date.now();
                    var originalEvent = event.originalEvent || event,
                        touches = originalEvent.touches && originalEvent.touches.length ? originalEvent.touches : [originalEvent],
                        e = touches[0];
                    touchStartX = e.clientX, touchStartY = e.clientY
                }), element.on("touchcancel", function(event) {
                    resetState()
                }), element.on("touchend", function(event) {
                    var diff = Date.now() - startTime,
                        originalEvent = event.originalEvent || event,
                        touches = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches : originalEvent.touches && originalEvent.touches.length ? originalEvent.touches : [originalEvent],
                        e = touches[0],
                        x = e.clientX,
                        y = e.clientY,
                        dist = Math.sqrt(Math.pow(x - touchStartX, 2) + Math.pow(y - touchStartY, 2));
                    tapping && diff < TAP_DURATION && dist < MOVE_TOLERANCE && (preventGhostClick(x, y), tapElement && tapElement.blur(), angular.isDefined(attr.disabled) && attr.disabled !== !1 || element.triggerHandler("click", [event])), resetState()
                }), element.onclick = function(event) {}, element.on("click", function(event, touchend) {
                    scope.$apply(function() {
                        clickHandler(scope, {
                            $event: touchend || event
                        })
                    })
                }), element.on("mousedown", function(event) {
                    element.addClass(ACTIVE_CLASS_NAME)
                }), element.on("mousemove mouseup", function(event) {
                    element.removeClass(ACTIVE_CLASS_NAME)
                })
            }
        }];
        makeSwipeDirective("ngSwipeLeft", -1, "swipeleft"), makeSwipeDirective("ngSwipeRight", 1, "swiperight")
    }(window, window.angular),
    function(module) {
        module.directive("uibgroupExport", ["$state", "Flash", "AppointmentExport", function($state, Flash, AppointmentExport) {
            return {
                restrict: "E",
                scope: {
                    islength: "="
                },
                controller: ["$rootScope", "$scope", "ConstUserType", "$sce", "$timeout", "Flash", function($rootScope, $scope, ConstUserType, $sce, $timeout, Flash) {
                    var model = this;
                    $timeout(function() {
                        model.name = "Export", model.isLengthTrue = !0, $scope.items = ["The first choice!", "And another choice for you.", "but wait! A third!"], $scope.status = {
                            isopen: !1
                        }, $scope.toggleDropdown = function($event) {
                            $event.preventDefault(), $event.stopPropagation(), $scope.status.isopen = !$scope.status.isopen
                        }, $scope.appendToEl = angular.element(document.querySelector("#dropdown-long-content")), $rootScope.auth.role_id === ConstUserType.Doctor ? model.htmlcontent = $sce.trustAsHtml('
 XLS
  PDF
') : $rootScope.auth.role_id === ConstUserType.User && (model.htmlcontent = $sce.trustAsHtml('
 XLS
 PDF
'))
                    }, 1e3)
                }],
                link: function(scope, elem, attr) {
                    scope.exportService = function(type, format) {
                        AppointmentExport["export"]({
                            type: type,
                            format: format
                        }).$promise.then(function(response) {
                            angular.isDefined(response) ? ($state.go("Appointments", {}, {
                                reload: !0
                            }), Flash.set("Success", "success")) : ($state.go("Appointments", {}, {
                                reload: !0
                            }), Flash.set("Error occured. please try again later", "error"))
                        })
                    }
                },
                controllerAs: "model",
                template: '
 {{model.name}}
 XLS
 PDF
'
            }
        }]), module.config(["$stateProvider", function($stateProvider) {
            var ResolveServiceData = {
                ResolveServiceData: function(ResolveService, $q) {
                    return $q.all({
                        AuthServiceData: ResolveService.promiseAuth,
                        SettingServiceData: ResolveService.promiseSettings
                    })
                }
            };
            $stateProvider.state("AppointmentSetting", {
                url: "/appointments/settings",
                authenticate: !0,
                views: {
                    main: {
                        controller: "AppointmentsSettingController as model",
                        templateUrl: "Appointments/appointment_setting.tpl.html",
                        resolve: ResolveServiceData
                    }
                }
            }).state("appointmentModification", {
                url: "/appointments/modifications",
                authenticate: !0,
                views: {
                    main: {
                        controller: "AppointmentsModificationController as model",
                        templateUrl: "Appointments/appointment_modifications.tpl.html",
                        resolve: ResolveServiceData
                    }
                }
            }).state("appointmentModificationAdd", {
                url: "/appointments/modifications/add",
                authenticate: !0,
                views: {
                    main: {
                        controller: "AppointmentsModificationController as model",
                        templateUrl: "Appointments/appointment_modifications_add.tpl.html",
                        resolve: ResolveServiceData
                    }
                }
            }).state("appointmentModificationDelete", {
                url: "/appointments/modifications/delete/{id}",
                authenticate: !0,
                views: {
                    main: {
                        controller: "AppointmentsModificationController as model",
                        resolve: ResolveServiceData
                    }
                }
            }).state("appointmentModificationEdit", {
                url: "/appointments/modifications/edit/{id}",
                authenticate: !0,
                views: {
                    main: {
                        controller: "AppointmentsModificationController as model",
                        templateUrl: "Appointments/appointment_modifications_edit.tpl.html",
                        resolve: ResolveServiceData
                    }
                }
            }).state("Appointments", {
                url: "/appointments/{type}",
                authenticate: !0,
                views: {
                    main: {
                        controller: "AppointmentsController as model",
                        templateUrl: "Appointments/appointment_index.tpl.html",
                        resolve: ResolveServiceData
                    }
                }
            }).state("MyAppointments", {
                url: "/appointments/all",
                authenticate: !0,
                views: {
                    main: {
                        controller: "AppointmentsController as model",
                        templateUrl: "Appointments/appointment_index.tpl.html",
                        resolve: ResolveServiceData
                    }
                }
            }).state("AppointmentDetail", {
                url: "/appointment/{id}",
                authenticate: !0,
                views: {
                    main: {
                        controller: "AppointmentsController as model",
                        templateUrl: "Appointments/appointment_view.tpl.html",
                        resolve: ResolveServiceData
                    }
                }
            }).state("AppointmentBooking", {
                url: "/appointments/booking/{doctorid}/{apt_date}/{apt_time}/{workplaceid}",
                authenticate: !1,
                views: {
                    main: {
                        controller: "BookingController as model",
                        templateUrl: "Appointments/appointment_booking_appt_info.tpl.html",
                        resolve: ResolveServiceData
                    }
                }
            }).state("AppointmentBookingStep2", {
                url: "/appointments/booking/{doctorid}/{apt_date}/{apt_time}/{workplaceid}/step2",
                authenticate: !0,
                views: {
                    main: {
                        controller: "BookingController as model",
                        templateUrl: "Appointments/appointment_booking_patient_info.tpl.html",
                        resolve: ResolveServiceData
                    }
                }
            }).state("AppointmentBookingStep3", {
                url: "/appointments/booking/{doctorid}/{apt_date}/{apt_time}/{workplaceid}/step3",
                authenticate: !0,
                views: {
                    main: {
                        controller: "BookingController as model",
                        templateUrl: "Appointments/appointment_booking_details.tpl.html",
                        resolve: ResolveServiceData
                    }
                }
            }).state("AppointmentBookingStep4", {
                url: "/appointments/booking/{doctorid}/{apt_date}/{apt_time}/{workplaceid}/final",
                authenticate: !0,
                views: {
                    main: {
                        controller: "BookingController as model",
                        templateUrl: "Appointments/appointment_booking_confirm.tpl.html",
                        resolve: ResolveServiceData
                    }
                }
            })
        }])
    }(angular.module("Abs.appointments", ["ui.router", "ngResource", "mgcrea.ngStrap", "uiSwitch", "oitozero.ngSweetAlert", "ui.bootstrap", "localytics.directives"])),
    function(module) {
        module.constant("Constantbadges", {
            state_Badges: "UserBadges"
        }), module.config(["$stateProvider", "Constantbadges", function($stateProvider, Constantbadges) {
            var ResolveServiceData = {
                ResolveServiceData: function(ResolveService, $q) {
                    return $q.all({
                        AuthServiceData: ResolveService.promiseAuth,
                        SettingServiceData: ResolveService.promiseSettings
                    })
                }
            };
            $stateProvider.state(Constantbadges.state_Badges, {
                url: "/user/badges",
                authenticate: !0,
                views: {
                    main: {
                        controller: "UserBadgesController as model",
                        templateUrl: "Badges/userBadges.tpl.html",
                        resolve: ResolveServiceData
                    }
                }
            })
        }])
    }(angular.module("Abs.userbadges", ["ui.router", "ngResource", "mgcrea.ngStrap.datepicker", "oitozero.ngSweetAlert", "ngMessages", "ngFileUpload"])),
    function(module) {
        module.config(["$stateProvider", "$analyticsProvider", function($stateProvider, $analyticsProvider) {}])
    }(angular.module("Abs.common", ["ui.router", "angulartics", "angulartics.google.analytics", "angulartics.facebook.pixel", "slugifier"])),
    function(module) {
        module.directive("starRatingDisabled", function() {
            return {
                restrict: "EA",
                template: '


',
                scope: {
                    ratingValue: "=ngModel",
                    max: "=?",
                    onRatingSelect: "&?",
                    readonly: "=?"
                },
                link: function(scope, element, attributes) {
                    function updateStars() {
                        scope.stars = [];
                        for (var i = 0; i < scope.max; i++) scope.stars.push({
                            filled: i < scope.ratingValue
                        })
                    }
                    void 0 === scope.max && (scope.max = 5), scope.toggle = function(index) {
                        void 0 !== scope.readonly && scope.readonly !== !1 || (scope.ratingValue = index + 1, scope.onRatingSelect({
                            rating: index + 1
                        }))
                    }, scope.$watch("ratingValue", function(oldValue, newValue) {
                        newValue && updateStars()
                    })
                }
            }
        })
    }(angular.module("Abs.starratings", [""])),
    function(module) {
        module.filter("starRate", function() {
            return function(input, max) {
                var val = 0;
                return !isNaN(input) && input > 1 && "" !== max && (val = 20 * input, 10 == max && (val = 10 * input)), val
            }
        }), module.directive("featuredSpecialistDoctor", function() {
            return {
                restrict: "E",
                templateUrl: "Home/featured_specialist_doctor.tpl.html",
                controller: ["$scope", "$filter", "$state", "$timeout", "featuredDoctors", function($scope, $filter, $state, $timeout, featuredDoctors) {
                    $scope.featuredDoctorsLength = !1, $scope.responsiveSlick = [{
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1,
                            infinite: !0,
                            arrows: !0
                        }
                    }, {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    }, {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    }, {
                        breakpoint: 500,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }], featuredDoctors.getDoctors({
                        limit: "20"
                    }).$promise.then(function(response) {
                        $scope.featuredDoctorsLength = response.data.length > 0, $scope.featuredDoctors = response.data
                    }), $timeout(function() {
                        $("body").on("click", ".js-share-open", function(e) {
                            $(".js-social-share").removeClass("share-open"), $("#js-social-share" + $(this).attr("data-index")).addClass("share-open")
                        }), $("body").on("blur", ".js-share-open", function(e) {
                            $(".js-social-share").removeClass("share-open")
                        })
                    }, 2e3)
                }]
            }
        }), module.config(["$stateProvider", "$analyticsProvider", function($stateProvider, $analyticsProvider) {
            var ResolveServiceData = {
                ResolveServiceData: function(ResolveService, $q) {
                    return $q.all({
                        AuthServiceData: ResolveService.promiseAuth,
                        SettingServiceData: ResolveService.promiseSettings
                    })
                }
            };
            $stateProvider.state("home", {
                url: "/",
                authenticate: !1,
                views: {
                    main: {
                        controller: "HomeController as model",
                        templateUrl: "Home/home.tpl.html",
                        resolve: ResolveServiceData
                    }
                },
                data: {
                    pageTitle: "Home"
                }
            })
        }])
    }(angular.module("Abs.home", ["ui.router", "angulartics", "angulartics.google.analytics", "angulartics.facebook.pixel", "angular-input-stars", "slick", "ngTouch", "angucomplete-abs"])),
    function(module) {
        module.constant("ConstantMessages", {
            state_Message: "Message",
            state_SentMessage: "SentMessage",
            state_ItemMessage: "ItemMessage",
            state_ComposeMessage: "ComposeMessage",
            state_MessageView: "MessageView",
            state_ReplyMessage: "ReplyMessage",
            state_PrivateNote: "PrivateNote"
        }), module.config(["$stateProvider", "ConstantMessages", function($stateProvider, ConstantMessages) {
            var ResolveServiceData = {
                ResolveServiceData: function(ResolveService, $q) {
                    return $q.all({
                        AuthServiceData: ResolveService.promiseAuth,
                        SettingServiceData: ResolveService.promiseSettings
                    })
                }
            };
            $stateProvider.state(ConstantMessages.state_Message, {
                url: "/messages",
                authenticate: !0,
                views: {
                    main: {
                        controller: "UserMessagesController as model",
                        templateUrl: "Messages/messages.tpl.html",
                        resolve: ResolveServiceData
                    }
                }
            }).state(ConstantMessages.state_SentMessage, {
                url: "/sentmessages",
                authenticate: !0,
                views: {
                    main: {
                        controller: "UserMessagesController as model",
                        templateUrl: "Messages/sentmessages.tpl.html",
                        resolve: ResolveServiceData
                    }
                }
            }).state(ConstantMessages.state_ItemMessage, {
                url: "/item_messages/{id}",
                authenticate: !0,
                views: {
                    main: {
                        controller: "UserMessagesController as model",
                        templateUrl: "Messages/itemmessages.tpl.html",
                        resolve: ResolveServiceData
                    }
                }
            }).state(ConstantMessages.state_ComposeMessage, {
                url: "/composemessage",
                authenticate: !0,
                views: {
                    main: {
                        controller: "UserMessagesController as model",
                        templateUrl: "Messages/messagecompose.tpl.html",
                        resolve: ResolveServiceData
                    }
                }
            }).state(ConstantMessages.state_MessageView, {
                url: "/messages/{id}",
                authenticate: !0,
                views: {
                    main: {
                        controller: "UserMessagesController as model",
                        templateUrl: "Messages/messageview.tpl.html",
                        resolve: ResolveServiceData
                    }
                }
            }).state(ConstantMessages.state_ReplyMessage, {
                url: "/messages/{message_id}/reply",
                authenticate: !0,
                views: {
                    main: {
                        controller: "UserMessagesController as model",
                        templateUrl: "Messages/messagereply.tpl.html",
                        resolve: ResolveServiceData
                    }
                }
            }).state(ConstantMessages.state_PrivateNote, {
                url: "/private_notes",
                authenticate: !0,
                views: {
                    main: {
                        controller: "UserMessagesController as model",
                        templateUrl: "Messages/privatenote.tpl.html",
                        resolve: ResolveServiceData
                    }
                }
            })
        }])
    }(angular.module("Abs.usermessage", ["ui.router", "ngResource", "mgcrea.ngStrap.datepicker", "oitozero.ngSweetAlert", "ngMessages"])),
    function(module) {
        module.config(["$stateProvider", function($stateProvider) {
            $stateProvider.state("search", {
                url: "/search?is_online_booking&gender_id&doctor&city_id&specialty_disease_id&specialty_id&insurance_id&appointment&page",
                views: {
                    main: {
                        controller: "SearchController as model",
                        templateUrl: "Search/search.tpl.html"
                    }
                },
                data: {
                    pageTitle: "Search"
                }
            })
        }])
    }(angular.module("Abs.search", ["ui.router", "ngResource", "ngMap", "bw.paging", "angucomplete-abs"])),
    function(module) {
        module.filter("trustedhtml", ["$sce", function($sce) {
            return function(html) {
                return $sce.trustAsHtml(html)
            }
        }]), module.directive("onlyDigits", function() {
            return {
                require: "ngModel",
                restrict: "A",
                link: function(scope, element, attr, ctrl) {
                    function inputValue(val) {
                        if (val) {
                            var digits = val.replace(/[^0-9]/g, "");
                            return digits !== val && (ctrl.$setViewValue(digits), ctrl.$render()), parseInt(digits, 10)
                        }
                    }
                    ctrl.$parsers.push(inputValue)
                }
            }
        }).directive("doctorProfileQuestions", function() {
            return {
                restrict: "E",
                templateUrl: "User/doctor_profile_question.tpl.html",
                controller: ["$scope", "$filter", "$state", "$timeout", "Flash", "DoctorQuestionAdd", "DoctorQuestionList", function($scope, $filter, $state, $timeout, Flash, DoctorQuestionAdd, DoctorQuestionList) {
                    $timeout(function() {
                        DoctorQuestionList.get({
                            id: $scope.userId
                        }).$promise.then(function(response) {
                            $scope.questions = response.data, $scope.paginates = response.meta.pagination
                        })
                    }, 3e3), $scope.questionAdd = function($valid, data) {
                        $valid && (data.doctor_id = $scope.userId, data.specialty_id = $scope.specialtyId, data.is_active = 1, DoctorQuestionAdd.post(data).$promise.then(function(response) {
                            response.Success ? (Flash.set($filter("translate")(response.Success), "success", !0), $state.go("UserView", {}, {
                                reload: !0
                            })) : Flash.set($filter("translate")(response.Failed), "error", !1)
                        }))
                    }
                }]
            }
        }).directive("headerMenu", function() {
            return {
                restrict: "E",
                templateUrl: "User/header.tpl.html",
                controller: ["$scope", "$filter", "$state", "$timeout", "Flash", function($scope, $filter, $state, $timeout, Flash) {}]
            }
        }).directive("navMenu", function() {
            return {
                restrict: "E",
                templateUrl: "User/navmenu.tpl.html",
                controller: ["$rootScope", "$scope", "$filter", "$state", "$timeout", "Flash", "ConstUserType", function($rootScope, $scope, $filter, $state, $timeout, Flash, ConstUserType) {
                    $rootScope.auth.role_id == ConstUserType.Doctor ? $scope.tabsMenus = [{
                        header_class: "tabs-equipa",
                        header_text: "Next appointments",
                        state: "MyAppointments"
                    }, {
                        header_class: "tabs-citas",
                        header_text: "My calendar",
                        state: "MyCalender"
                    }, {
                        header_class: "tabs-mensajes",
                        header_text: "Messages",
                        state: "Message"
                    }, {
                        header_class: "tabs-ajustes",
                        header_text: "Settings",
                        state: "UserProfile"
                    }] : $scope.tabsMenus = [{
                        header_class: "tabs-equipa",
                        header_text: "Medical Team",
                        state: "MedicalTeamList"
                    }, {
                        header_class: "tabs-citas",
                        header_text: "Appointments and previous revisions",
                        state: "MyAppointments"
                    }, {
                        header_class: "tabs-mensajes",
                        header_text: "Messages",
                        state: "Message"
                    }, {
                        header_class: "tabs-ajustes",
                        header_text: "Settings",
                        state: "UserProfile"
                    }], $scope.switchMenu = function(stateGo) {
                        $state.go(stateGo)
                    }
                }]
            }
        }).directive("starRating", function() {
            return {
                restrict: "A",
                template: '
★
',
                scope: {
                    ratingValue: "=",
                    max: "=",
                    onRatingSelected: "&"
                },
                link: function(scope, elem, attrs) {
                    var updateStars = function() {
                        scope.stars = [];
                        for (var i = 0; i < scope.max; i++) scope.stars.push({
                            filled: i < scope.ratingValue
                        })
                    };
                    scope.toggle = function(index) {
                        scope.ratingValue = index + 1, scope.onRatingSelected({
                            rating: index + 1
                        })
                    }, scope.$watch("ratingValue", function(oldVal, newVal) {
                        newVal && updateStars()
                    })
                }
            }
        }).directive("displayTemplate", function() {
            return {
                restrict: "E",
                template: '
',
                link: function(scope, element, attrs) {
                    scope.contentUrl = attrs.name, attrs.$observe("name", function(v) {
                        scope.contentUrl = v, $scope.state = "UserProfile"
                    })
                },
                controller: ["$scope", "$state", "ConstUserType", function($scope, $state, ConstUserType) {
                    $scope.ConstUserType = ConstUserType, $scope.currentState = $state.current.name
                }]
            }
        }), module.config(["$stateProvider", "$authProvider", "GENERAL_CONFIG", "$analyticsProvider", function($stateProvider, $authProvider, GENERAL_CONFIG, $analyticsProvider) {
            var ResolveServiceData = {
                ResolveServiceData: function(ResolveService, $q) {
                    return $q.all({
                        AuthServiceData: ResolveService.promiseAuth,
                        SettingServiceData: ResolveService.promiseSettings
                    })
                }
            };
            $authProvider.tokenPrefix = "", $authProvider.tokenName = "userToken", $authProvider.loginUrl = GENERAL_CONFIG.api_url + "/users/login", $authProvider.signupUrl = GENERAL_CONFIG.api_url + "/users/register", $authProvider.bookingsignupUrl = GENERAL_CONFIG.api_url + "/users/booking_register", $stateProvider.state("login", {
                url: "/users/login",
                authenticate: !1,
                views: {
                    main: {
                        controller: "UserLoginController as model",
                        templateUrl: "User/login.tpl.html",
                        resolve: ResolveServiceData
                    }
                }
            }).state("login_user", {
                url: "/users/login_user",
                authenticate: !1,
                views: {
                    main: {
                        controller: "UserRegisterController as model",
                        templateUrl: "User/login_user.tpl.html"
                    }
                }
            }).state("MedicalTeam", {
                url: "/user/medical_team",
                authenticate: !1,
                views: {
                    main: {
                        controller: "MedicalTeamController as model",
                        templateUrl: "User/medical_team.tpl.html"
                    }
                }
            }).state("register", {
                url: "/users/register/:user_type",
                authenticate: !1,
                views: {
                    main: {
                        controller: "UserRegisterController as model",
                        templateUrl: "User/register.tpl.html",
                        resolve: ResolveServiceData
                    }
                }
            }).state("list_your_practice", {
                url: "/users/practice?signin",
                authenticate: !1,
                views: {
                    main: {
                        controller: "ListYourPracticeController as model",
                        templateUrl: "User/list_your_practice.tpl.html",
                        resolve: ResolveServiceData
                    }
                }
            }).state("booking_register", {
                url: "/users/booking_register/",
                authenticate: !1,
                views: {
                    main: {
                        controller: "UserRegisterController as model",
                        templateUrl: "User/booking_register.tpl.html",
                        resolve: ResolveServiceData
                    }
                }
            }).state("activate", {
                url: "/users/:id/activate/:hash",
                views: {
                    main: {
                        controller: "UserActivateController as model",
                        resolve: ResolveServiceData
                    }
                }
            }).state("ChangePassword", {
                url: "/users/change_password",
                authenticate: !0,
                views: {
                    main: {
                        controller: "ChangePasswordController as model",
                        templateUrl: "User/change_password.tpl.html",
                        resolve: ResolveServiceData
                    }
                }
            }).state("UserProfile", {
                url: "/users/user_profile",
                authenticate: !0,
                views: {
                    main: {
                        controller: "UserProfileController as model",
                        templateUrl: "User/user_profile.tpl.html",
                        resolve: ResolveServiceData
                    }
                }
            }).state("UserView", {
                url: "/doctor/:username",
                authenticate: !1,
                views: {
                    main: {
                        controller: "UserController as model",
                        templateUrl: "User/user_view.tpl.html",
                        resolve: ResolveServiceData
                    }
                }
            }).state("Dashboard", {
                url: "/users/dashboard",
                authenticate: !0,
                views: {
                    main: {
                        controller: "DashboardController as model",
                        templateUrl: "User/dashboard.tpl.html",
                        resolve: ResolveServiceData
                    }
                }
            }).state("ForgotPassword", {
                url: "/users/forgot_password",
                authenticate: !1,
                views: {
                    main: {
                        controller: "ForgotPasswordController as model",
                        templateUrl: "User/forgot_password.tpl.html",
                        resolve: ResolveServiceData
                    }
                }
            }).state("MySpecialties", {
                url: "/user/specialties",
                authenticate: !0,
                views: {
                    main: {
                        controller: "SpecialtyController as model",
                        templateUrl: "User/my_specialties.tpl.html",
                        resolve: ResolveServiceData
                    }
                }
            }).state("MyInsurances", {
                url: "/user/insurances",
                authenticate: !0,
                views: {
                    main: {
                        controller: "InsuranceController as model",
                        templateUrl: "User/my_insurances.tpl.html",
                        resolve: ResolveServiceData
                    }
                }
            }).state("MyLanguages", {
                url: "/user/languages",
                authenticate: !0,
                views: {
                    main: {
                        controller: "LanguageController as model",
                        templateUrl: "User/my_languages.tpl.html",
                        resolve: ResolveServiceData
                    }
                }
            }).state("MyCalender", {
                url: "/user/calendar",
                authenticate: !0,
                views: {
                    main: {
                        controller: "CalenderController as model",
                        templateUrl: "User/my_calender.tpl.html",
                        resolve: ResolveServiceData
                    }
                }
            }).state("MySettings", {
                url: "/user/settings",
                authenticate: !0,
                views: {
                    main: {
                        controller: "UserSettingsController as model",
                        templateUrl: "User/settings.tpl.html",
                        resolve: ResolveServiceData
                    }
                }
            }).state("UpdateDiseases", {
                url: "/update_spectialty_diseases/:id",
                authenticate: !0,
                views: {
                    main: {
                        controller: "SpecialtyController as model",
                        templateUrl: "User/updateDiseaseForm.tpl.html",
                        resolve: ResolveServiceData
                    }
                }
            }).state("Notifications", {
                url: "/notifications",
                authenticate: !0,
                views: {
                    main: {
                        controller: "NotificationController as model",
                        templateUrl: "User/notifications.tpl.html",
                        resolve: ResolveServiceData
                    }
                }
            }).state("FamilyFriends", {
                url: "/familyfriends",
                authenticate: !0,
                views: {
                    main: {
                        controller: "FamilyFriendController as model",
                        templateUrl: "User/family_friends.tpl.html",
                        resolve: ResolveServiceData
                    }
                }
            }).state("DemographicInformation", {
                url: "/user/demographic",
                authenticate: !0,
                views: {
                    main: {
                        controller: "DemographicInformationController as model",
                        templateUrl: "User/demographic.tpl.html",
                        resolve: ResolveServiceData
                    }
                }
            }).state("Authorization", {
                url: "/authorization",
                authenticate: !0,
                views: {
                    main: {
                        controller: "AuthorizationController as model",
                        templateUrl: "User/authorization.tpl.html",
                        resolve: ResolveServiceData
                    }
                }
            }).state("MedicalTeamList", {
                url: "/user/medicalteam",
                authenticate: !0,
                views: {
                    main: {
                        controller: "MedicalTeamController as model",
                        templateUrl: "User/medical_team.tpl.html",
                        resolve: ResolveServiceData
                    }
                }
            }).state("Activities", {
                url: "/activities",
                authenticate: !0,
                views: {
                    main: {
                        controller: "AcitivitiesController as model",
                        templateUrl: "User/activities.tpl.html",
                        resolve: ResolveServiceData
                    }
                }
            })
        }])
    }(angular.module("Abs.user", ["ui.router", "angulartics", "angulartics.google.analytics", "angulartics.facebook.pixel", "satellizer", "mwl.calendar", "ui.bootstrap", "ngFileUpload", "vcRecaptcha", "mgcrea.ngStrap", "ngMap", "hm.readmore", "checklist-model", "angular-input-stars", "ngResource", "textAngular", "djds4rce.angular-socialshare", "Abs.Maps"])),
    function(module) {
        module.constant("ConstantWorkPlaces", {
            state_WorkPlace: "UserWorkPlace",
            state_WorkPlaceAdd: "UserWorkPlaceAdd",
            state_WorkPlaceEdit: "UserWorkPlaceEdit",
            state_AppoinmentSettings: "UserAppoinmentSettings",
            state_AppoinmentSettingsCreate: "UserAppoinmentSettingsCreate",
            state_AppoinmentSettingsUpdate: "UserAppoinmentSettingsUpdate",
            state_AppoinmentModification: "UserAppoinmentModification",
            state_AppoinmentModificationCreate: "UserAppoinmentModificationCreate",
            state_AppoinmentModificationUpdate: "UserAppoinmentModificationUpdate"
        }), module.config(["$stateProvider", "ConstantWorkPlaces", function($stateProvider, ConstantWorkPlaces) {
            var ResolveServiceData = {
                ResolveServiceData: function(ResolveService, $q) {
                    return $q.all({
                        AuthServiceData: ResolveService.promiseAuth,
                        SettingServiceData: ResolveService.promiseSettings
                    })
                }
            };
            $stateProvider.state(ConstantWorkPlaces.state_WorkPlace, {
                url: "/user/workplaces",
                authenticate: !0,
                views: {
                    main: {
                        controller: "UserWorkPlacesController as model",
                        templateUrl: "Worklocation/userWorkPlaces.tpl.html",
                        resolve: ResolveServiceData
                    }
                }
            }).state(ConstantWorkPlaces.state_WorkPlaceAdd, {
                url: "/user/workplaces/add",
                authenticate: !0,
                views: {
                    main: {
                        controller: "UserWorkPlacesController as model",
                        templateUrl: "Worklocation/userWorkPlacesAdd.tpl.html",
                        resolve: ResolveServiceData
                    }
                }
            }).state(ConstantWorkPlaces.state_WorkPlaceEdit, {
                url: "/user/workplaces/{id}/edit",
                authenticate: !0,
                views: {
                    main: {
                        controller: "UserWorkPlacesController as model",
                        templateUrl: "Worklocation/userWorkPlacesEdit.tpl.html",
                        resolve: ResolveServiceData
                    }
                }
            }).state(ConstantWorkPlaces.state_AppoinmentSettings, {
                url: "/user/workplaces/{locationid}/appoinmentsettings",
                authenticate: !0,
                views: {
                    main: {
                        controller: "UserWorkPlacesController as model",
                        templateUrl: "Worklocation/userAppoinmentSettings.tpl.html",
                        resolve: ResolveServiceData
                    }
                }
            }).state(ConstantWorkPlaces.state_AppoinmentModification, {
                url: "/user/workplaces/{locationid}/appoinmentmodification",
                authenticate: !0,
                views: {
                    main: {
                        controller: "UserWorkPlacesController as model",
                        templateUrl: "Worklocation/userAppoinmentModification.tpl.html",
                        resolve: ResolveServiceData
                    }
                }
            }).state(ConstantWorkPlaces.state_AppoinmentModificationCreate, {
                url: "/user/workplaces/{locationid}/appoinmentmodification/create",
                authenticate: !0,
                views: {
                    main: {
                        controller: "UserWorkPlacesController as model",
                        templateUrl: "Worklocation/userAppoinmentModificationCreate.tpl.html",
                        resolve: ResolveServiceData
                    }
                }
            }).state(ConstantWorkPlaces.state_AppoinmentModificationUpdate, {
                url: "/user/workplaces/{locationid}/appoinmentmodification/{id}/update",
                authenticate: !0,
                views: {
                    main: {
                        controller: "UserWorkPlacesController as model",
                        templateUrl: "Worklocation/userAppoinmentModificationUpdate.tpl.html",
                        resolve: ResolveServiceData
                    }
                }
            })
        }])
    }(angular.module("Abs.userworkplace", ["ui.router", "ngResource", "mgcrea.ngStrap.datepicker", "oitozero.ngSweetAlert", "ngMessages"])),
    function(app) {
        app.config(["$stateProvider", "$urlRouterProvider", "$authProvider", "$translateProvider", "$analyticsProvider", function($stateProvider, $urlRouterProvider, $authProvider, $translateProvider, $analyticsProvider) {
            $translateProvider.useStaticFilesLoader({
                prefix: "assets/js/l10n/",
                suffix: ".json"
            }), $translateProvider.preferredLanguage("en"), $translateProvider.useLocalStorage(), $translateProvider.useSanitizeValueStrategy("escape"), $urlRouterProvider.otherwise("/")
        }]), app.controller("AppController", ["$scope", "$auth", "$location", "$anchorScroll", "$timeout", function($scope, $auth, $location, $anchorScroll, $timeout) {
            $scope.scrollMoveTop = function() {
                $("html, body").stop(!0, !0).animate({
                    scrollTop: 0
                }, 600)
            }, $scope.gotoDiv = function(divelement) {
                var topvalue = $("#" + divelement).position().top;
                $("html, body").animate({
                    scrollTop: parseFloat(topvalue - 30)
                })
            }
        }]), app.run(["$rootScope", "$state", "$location", "$http", "$auth", function($rootScope, $state, $location, $http, $auth) {
            $rootScope.is_fresh_call = 1;
            var url_array = ["/users/register", "/users/login"];
            $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
                $.inArray(toState.url, url_array) !== -1 && $auth.isAuthenticated() && $location.path("/"), toState.authenticate && !$auth.isAuthenticated() && ($rootScope.returnToState = toState.url, $rootScope.returnToStateParams = toParams.Id, $location.path("/users/login"))
            }), $rootScope.$on("$viewContentLoaded", function() {
                $("#preloader").hasClass("loadAG") || ($("#status").fadeOut(600), $("#preloader").delay(600).fadeOut(300))
            }), $rootScope.$on("$stateChangeSuccess", function() {
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                var booking_menu = ["AppointmentBooking", "AppointmentBookingStep2", "AppointmentBookingStep3", "AppointmentBookingStep4", "search", "UserView", "list_your_practice", "MySpecialties", "MyLanguages", "UserBadges", "UserWorkPlace", "UserWorkPlaceAdd", "UserWorkPlaceEdit", "UserAppoinmentSettings", "UserAppoinmentModification", "UserPhotos", "UserPhotosAdd", "AnswerQuestion", "AnswersList", "UserEducations", "AppointmentDetail"],
                    user_menu = ["MedicalTeam", "UserProfile", "MyInsurances", "MyCalender", "MySettings", "Notifications", "FamilyFriends", "DemographicInformation", "Authorization", "MedicalTeamList", "MyAppointments", "AppointmentDetail", "ChangePassword", "Appointments", "Message", "SentMessage", "ComposeMessage"],
                    current_state = $state.current.name;
                $rootScope.menu_show = !0, booking_menu.indexOf(current_state) !== -1 && ($rootScope.menu_show = !1), $rootScope.menu_dropdown = !0, user_menu.indexOf(current_state) !== -1 && ($rootScope.menu_dropdown = !1), $rootScope.$broadcast("menu_show", $rootScope.menu_show), $rootScope.$broadcast("menu_dropdown", $rootScope.menu_dropdown)
            })
        }]), app.factory("Flash", ["$rootScope", "growl", function($rootScope, growl) {
            return {
                set: function(message, type, isStateChange) {
                    "success" === type ? growl.success(message) : "error" === type ? isStateChange === !0 ? growl.error(message, {
                        ttl: -1
                    }) : growl.error(message) : "info" === type ? growl.info(message) : "Warning" === type && growl.warning(message)
                }
            }
        }]), app.directive("header", function() {
            var linker = function(scope, element, attrs) {};
            return {
                restrict: "A",
                templateUrl: "Common/header.tpl.html",
                link: linker,
                controller: "HeaderController as model",
                scope: {
                    header: "="
                }
            }
        }), app.directive("footer", function() {
            var linker = function(scope, element, attrs) {};
            return {
                restrict: "A",
                templateUrl: "Common/footer.tpl.html",
                link: linker,
                controller: "FooterController as model",
                scope: {
                    footer: "="
                }
            }
        }), app.directive("scroll", ["$window", function($window) {
            return function(scope) {
                angular.element($window).bind("scroll", function() {
                    this.pageYOffset >= 100 ? scope.boolChangeClass = !0 : scope.boolChangeClass = !1, scope.$apply()
                })
            }
        }]), app.directive("mapscroll", ["$window", function($window) {
            return function(scope) {
                angular.element($window).bind("posfixed", function() {
                    console.log(this.pageYOffset), this.pageYOffset >= 400 ? scope.boolChangeClass = !0 : scope.boolChangeClass = !1, scope.$apply()
                })
            }
        }]), app.filter("html", ["$sce", function($sce) {
            return function(val) {
                return $sce.trustAsHtml(val)
            }
        }]), app.filter("pricedisplay", ["$rootScope", function($rootScope) {
            return function(val) {
                var price = "Nil";
                if (angular.isDefined(val)) {
                    var valFormatted = val.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    price = $rootScope.settings["site.currency"] + " " + valFormatted
                }
                return price
            }
        }]).filter("capitalize", function() {
            return function(input) {
                return input ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : ""
            }
        }).filter("array_to_string", function() {
            return function(values) {
                var displayStr = "Nil";
                if (angular.isDefined(values)) {
                    var buildArr = [];
                    angular.forEach(values, function(value, key) {
                        buildArr.push(value.name)
                    }), displayStr = buildArr.toString()
                }
                return displayStr
            }
        }), app.filter("dateFormat", ["$filter", function($filter) {
            return function(val) {
                if (null == val) return "";
                var dateTime = val.replace(/(.+) (.+)/, "$1T$2Z"),
                    formatedDate = $filter("date")(new Date(dateTime), "dd-MM-yyyy HH:mm:ss");
                return formatedDate
            }
        }]), app.filter("appointmentDate", ["$filter", function($filter) {
            return function(val) {
                if (null == val) return "";
                var dateTime = val.replace(/(.+) (.+)/, "$1T$2Z"),
                    formatedDate = $filter("date")(new Date(dateTime), "dd-MM-yyyy");
                return formatedDate
            }
        }]), app.filter("splitedShow", ["$filter", function($filter) {
            return function(passValue) {
                if (null != passValue) {
                    var splitedValues = passValue.split(","),
                        ulBuild = "";
                    return $.each(splitedValues, function(i, value) {
                        ulBuild = ulBuild + "
" + value + ""
                    }), ulBuild
                }
                return ""
            }
        }]), app.service("ResolveService", ["$auth", "$rootScope", "GENERAL_CONFIG", "AuthFactory", "$q", "$location", "$state", function($auth, $rootScope, GENERAL_CONFIG, AuthFactory, $q, $location, $state) {
            var promiseSettings, promiseAuth;
            $q.defer();
            return promiseAuth = !$auth.isAuthenticated() || void 0 !== $rootScope.auth || AuthFactory.fetch().$promise.then(function(user) {
                $rootScope.auth = user
            }), $rootScope.is_fresh_call ? (angular.isUndefined($rootScope.settings) && ($rootScope.settings = {}), promiseSettings = $.get(GENERAL_CONFIG.api_url + "/settings?type=public_settings", function(response) {
                response.data && $.each(response.data, function(i, settingData) {
                    $rootScope.settings[settingData.name] = settingData.value
                })
            })) : promiseSettings = !0, {
                promiseAuth: promiseAuth,
                promiseSettings: promiseSettings
            }
        }]), app.directive("dashboardSettings", ["$filter", function($filter) {
            return {
                restrict: "E",
                templateUrl: "User/dashboard_settings.tpl.html",
                link: function(scope, E, A) {
                    scope.currentDate = $filter("date")(new Date, "yyyy-MM-dd"), void 0 === localStorage.zone && (localStorage.zone = moment(new Date).format("Z"))
                },
                scope: !0
            }
        }]), app.directive("userSettings", ["$filter", function($filter) {
            return {
                restrict: "E",
                templateUrl: "User/user_settings.tpl.html",
                link: function(scope, E, A) {
                    scope.currentDate = $filter("date")(new Date, "yyyy-MM-dd"), void 0 === localStorage.zone && (localStorage.zone = moment(new Date).format("Z"))
                },
                scope: !0,
                controller: ["$scope", "$state", "$auth", "$http", "AuthFactory", "$rootScope", "$filter", "$location", "Flash", "GENERAL_CONFIG", function($scope, $state, $auth, $http, AuthFactory, $rootScope, $filter, $location, Flash, GENERAL_CONFIG) {
                    $scope.dashboardlogout = function() {
                        $http.get(GENERAL_CONFIG.api_url + "/users/logout", {
                            headers: {
                                Authorization: "Bearer " + localStorage.userToken
                            }
                        }), $rootScope.auth = {}, $auth.logout()
                    }
                }]
            }
        }]), app.config(["growlProvider", function(growlProvider) {
            growlProvider.onlyUniqueMessages(!0), growlProvider.globalTimeToLive(5e3), growlProvider.globalPosition("top-center"), growlProvider.globalDisableCountDown(!0)
        }])
    }(angular.module("Abs", ["Abs.home", "Abs.Constant", "Abs.user", "Abs.search", "Abs.userworkplace", "Abs.usermessage", "Abs.userbadges", "templates-app", "ui.router.state", "ui.router", "ui.bootstrap", "ngSanitize", "ngAnimate", "angular-growl", "pascalprecht.translate", "ngCookies", "Abs.common", "Abs.appointments", "ngMap"])),
    function(module) {
        module.controller("AppointmentsController", ["$scope", "$state", "$filter", "$rootScope", "$location", "Flash", "ConstUserType", "ConstAppointmentStatus", "SweetAlert", "AppointmentFactory", "appointmentView", "changeStatus", "AppointmentExport", "$uibModal", "$uibModalStack", "RemainderService", "DoctorAppointment", "patientReviewAdd", "ActivityCount", function($scope, $state, $filter, $rootScope, $location, Flash, ConstUserType, ConstAppointmentStatus, SweetAlert, AppointmentFactory, appointmentView, changeStatus, AppointmentExport, $uibModal, $uibModalStack, RemainderService, DoctorAppointment, patientReviewAdd, ActivityCount) {
            function addRemainder(data) {
                RemainderService.post(data).$promise.then(function(response) {
                    angular.isDefined(response) && (response.Success ? ($rootScope.closeModal(), $state.go("AppointmentDetail", {
                        id: $state.params.id
                    }, {
                        reload: !0
                    }), Flash.set("Remainder added successfully", "success")) : response.message ? ($state.go("AppointmentDetail", {
                        id: $state.params.id
                    }, {
                        reload: !0
                    }), Flash.set(response.message, "error")) : ($state.go("AppointmentDetail", {
                        id: $state.params.id
                    }, {
                        reload: !0
                    }), Flash.set("Please try again", "error")))
                })
            }
            var model = this;
            $scope.maxSize = 5;
            $scope.patientReviewAdd = function(userID, AppointID) {
                SweetAlert.swal({
                    title: "Are you sure to rating for this appointment ?",
                    text: "",
                    type: "warning",
                    showCancelButton: !0,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Confirm",
                    cancelButtonText: "No",
                    closeOnConfirm: !0,
                    closeOnCancel: !0
                }, function(isConfirm) {
                    isConfirm && (model.reviewRate.patient_id = userID, model.reviewRate.appointment_id = AppointID, model.reviewRate.rating_option_id = 1, patientReviewAdd.post(model.reviewRate).$promise.then(function(response) {
                        response.Success ? ($state.go("AppointmentDetail", {
                            id: $state.params.id
                        }, {
                            reload: !0
                        }), Flash.set(response.Success, "success")) : ($state.go("AppointmentDetail", {
                            id: $state.params.id
                        }, {
                            reload: !0
                        }), Flash.set(response.Failed, "error"))
                    }))
                })
            }, model.init = function() {
                model.ConstUserType = ConstUserType, model.ConstAppointmentStatus = ConstAppointmentStatus, ActivityCount.get().$promise.then(function(response) {
                    $rootScope.activityCount = response.data.total_count
                }), $scope.currentPage = void 0 !== $scope.currentPage ? parseInt($scope.currentPage) : 1, $state.params.type = void 0 !== $state.params.type ? $state.params.type : "all", "Appointments" == $state.current.name ? ($rootScope.pageTitle = $rootScope.settings["site.name"] + " | " + $filter("translate")("My Appointments Details"), $scope.getAppointmentListYear()) : "AppointmentDetail" == $state.current.name && ($rootScope.pageTitle = $rootScope.settings["site.name"] + " | " + $filter("translate")("Appointment Details"), appointmentView.get({
                    id: $state.params.id
                }).$promise.then(function(response) {
                    $scope.todayDateTime = $filter("date")(new Date, "yyyy-MM-dd HH:mm"), $scope.appointmentDateTime = response.appointment_date + " " + response.appointment_time, $scope.appointment = response, $scope.appointment.doctor_note = null === response.doctor_note ? "--" : response.doctor_note, $scope.appointment.patient_note = null === response.patient_note ? "--" : response.patient_note, $rootScope.auth.role_id == ConstUserType.Doctor ? ($scope.appointmentUser = response.user, model.patientId = response.user.id, model.appointmentId = response.id, DoctorAppointment.get({
                        id: model.patientId,
                        appointment_id: model.appointmentId
                    }).$promise.then(function(Appointmentresponse) {
                        Appointmentresponse.data ? (model.doctorReview = Appointmentresponse.data[0], model.reviewRate = model.doctorReview, model.reviewRate.isvisited = !0) : model.reviewRate.isvisited = !1
                    })) : ($scope.appointmentUser = response.user, $scope.appointmentUser = response.doctor_user, $scope.appointmentUser.user_profile.dr_title = null === $scope.appointmentUser.user_profile.dr_title ? "" : $scope.appointmentUser.user_profile.dr_title)
                })), $scope.changeappointstatus = function(status) {
                    "confirm" == status ? titleText = "Are you sure to Confirm this Appointment?" : "decline" == status ? titleText = "Are you sure to Decline this Appointment?" : "cancel" == status && (titleText = "Are you sure to Cancel this Appointment?"), SweetAlert.swal({
                        title: titleText,
                        text: "",
                        type: "warning",
                        showCancelButton: !0,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "Confirm",
                        cancelButtonText: "No",
                        closeOnConfirm: !0,
                        closeOnCancel: !0
                    }, function(isConfirm) {
                        isConfirm && changeStatus.get({
                            id: $state.params.id,
                            apt_status: status
                        }).$promise.then(function(response) {
                            Flash.set($filter("translate")(response.Success), "success", !0), $location.path("/appointments/all")
                        })
                    })
                }, $scope.appointstatuschange = function(status, id) {
                    "confirm" == status ? titleText = "Are you sure to Confirm this Appointment?" : "decline" == status ? titleText = "Are you sure to Decline this Appointment?" : "cancel" == status && (titleText = "Are you sure to Cancel this Appointment?"), SweetAlert.swal({
                        title: titleText,
                        text: "",
                        type: "warning",
                        showCancelButton: !0,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "Confirm",
                        cancelButtonText: "No",
                        closeOnConfirm: !0,
                        closeOnCancel: !0
                    }, function(isConfirm) {
                        isConfirm && changeStatus.get({
                            id: id,
                            apt_status: status
                        }).$promise.then(function(response) {
                            Flash.set($filter("translate")(response.Success), "success", !0), $location.path("/appointments/all")
                        })
                    })
                }
            }, $scope.showModal = function() {
                $scope.modalInstance = $uibModal.open({
                    templateUrl: "Appointments/appointment_remainder.tpl.html",
                    animation: !0,
                    controller: ["$scope", "$rootScope", "$stateParams", "$filter", "$state", "$uibModal", "patientId", function($scope, $rootScope, $stateParams, $filter, $state, $uibModal, patientId) {
                        var model = this;
                        $scope.remainder_add = function($valid) {
                            $valid && (model.remainder.doctor_id = $rootScope.auth.id, model.remainder.patient_id = patientId, addRemainder(model.remainder))
                        }
                    }],
                    controllerAs: "model",
                    resolve: {
                        patientId: function() {
                            return model.patientId
                        }
                    },
                    size: "lg"
                })
            }, $rootScope.closeModal = function() {
                $uibModalStack.dismissAll()
            }, $scope.getAppointmentList = function() {
                $scope.appointmentsLength = !1, param = {
                    type: $state.params.type,
                    page: $scope.currentPage
                }, AppointmentFactory.get(param).$promise.then(function(response) {
                    $scope.appointments = response.data, Object.keys(response.data).length > 0 && ($scope.appointmentsLength = Object.keys(response.data).length > 0), $scope._metadata = response.meta.pagination
                })
            }, $scope.getAppointmentListYear = function() {
                $scope.appointmentsLength = !1, $scope.appointment_formatteds = [], $scope.appointment_formatteds_year = [], param = {
                    type: $state.params.type,
                    page: $scope.currentPage
                }, AppointmentFactory.get(param).$promise.then(function(response) {
                    $scope.appointments = response.data, Object.keys(response.data).length > 0 && ($scope.appointmentsLength = Object.keys(response.data).length > 0), angular.forEach($scope.appointments, function(value, key) {
                        var appDate = new Date(value.appointment_date),
                            toDate = new Date;
                        $scope.year_condition = toDate.getFullYear();
                        var upComing = "";
                        upComing = appDate > toDate ? "1" : "0", "undefined" == typeof $scope.appointment_formatteds[appDate.getFullYear()] ? ($scope.appointment_formatteds[appDate.getFullYear()] = [], $scope.appointment_formatteds_year.push(appDate.getFullYear()), $scope.appointment_formatteds[appDate.getFullYear()].push({
                            id: value.id,
                            value: value,
                            appdate: appDate,
                            upComing: upComing
                        })) : $scope.appointment_formatteds[appDate.getFullYear()].push({
                            id: value.id,
                            value: value,
                            appdate: appDate,
                            upComing: upComing
                        })
                    }), $scope.appointment_formatteds = $scope.appointment_formatteds.reverse(), $scope._metadata = response.meta.pagination
                })
            }, $scope.paginate = function(pageno) {
                $scope.currentPage = parseInt($scope.currentPage), $scope.getAppointmentListYear()
            }, model.init()
        }])
    }(angular.module("Abs.appointments")),
    function(module) {
        module.factory("AuthFactory", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
            return $resource(GENERAL_CONFIG.api_url + "/users/auth", {}, {
                fetch: {
                    method: "GET"
                }
            })
        }]), module.factory("AppointmentFactory", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
            return $resource(GENERAL_CONFIG.api_url + "/appointments/:type", {
                type: "@type"
            }, {
                get: {
                    method: "GET"
                }
            })
        }]), module.factory("appointmentView", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
            return $resource(GENERAL_CONFIG.api_url + "/appointment/:id", {
                id: "@id"
            })
        }]), module.factory("appointmentSetting", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
            return $resource(GENERAL_CONFIG.api_url + "/appointments/settings?zone=" + localStorage.zone, {}, {
                update: {
                    method: "POST"
                },
                get: {
                    method: "GET"
                }
            })
        }]), module.factory("appointmentModification", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
            return $resource(GENERAL_CONFIG.api_url + "/appointments/modifications", {}, {
                get: {
                    method: "GET"
                }
            })
        }]), module.factory("appointmentModificationDelete", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
            return $resource(GENERAL_CONFIG.api_url + "/appointments/modifications/delete/:id", {
                id: "@id"
            }, {
                "delete": {
                    method: "delete"
                }
            })
        }]), module.factory("appointmentModificationAdd", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
            return $resource(GENERAL_CONFIG.api_url + "/appointments/modifications/add", {}, {
                add: {
                    method: "POST"
                }
            })
        }]), module.factory("appointmentModificationEdit", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
            return $resource(GENERAL_CONFIG.api_url + "/appointments/modifications/edit/:id", {
                id: "@id"
            }, {
                get: {
                    method: "GET"
                },
                update: {
                    method: "POST"
                }
            })
        }]), module.factory("BookingAppointment", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
            return $resource(GENERAL_CONFIG.api_url + "/appointments/booking/:doctorid/:apt_date/:apt_time/:workplaceid", {
                doctorid: "@doctorid",
                apt_date: "@apt_date",
                apt_time: "@apt_time",
                workplaceid: "@workplaceid"
            }, {
                get: {
                    method: "GET"
                }
            })
        }]), module.factory("Gender", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
            return $resource(GENERAL_CONFIG.api_url + "/genders", {}, {
                genderList: {
                    method: "GET"
                }
            })
        }]), module.factory("AppointmentBookingAdd", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
            return $resource(GENERAL_CONFIG.api_url + "/appointments/booking/add", {}, {
                add: {
                    method: "POST"
                }
            })
        }]), module.factory("changeStatus", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
            return $resource(GENERAL_CONFIG.api_url + "/appointment/:id/:apt_status", {
                id: "@id",
                apt_status: "@apt_status"
            }, {
                get: {
                    method: "GET"
                }
            })
        }]), module.factory("splitedTimeSlot", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
            return $resource(GENERAL_CONFIG.api_url + "/search/timeslot", {}, {
                get: {
                    method: "GET"
                }
            })
        }]), module.factory("MyDocotors", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
            return $resource(GENERAL_CONFIG.api_url + "/user/favorite", {}, {
                get: {
                    method: "GET"
                }
            })
        }]), module.factory("AppointmentExport", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
            return $resource(GENERAL_CONFIG.api_url + "/appointments/export/:type/:format?token=" + localStorage.userToken, {}, {
                "export": {
                    method: "GET",
                    params: {
                        type: "@type",
                        format: "@format"
                    }
                }
            })
        }]), module.factory("RemainderService", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
            return $resource(GENERAL_CONFIG.api_url + "/reminders/:id", {}, {
                getall: {
                    method: "GET"
                },
                post: {
                    method: "POST"
                },
                put: {
                    method: "PUT",
                    id: "@id"
                },
                getbyid: {
                    method: "GET",
                    id: "@id"
                },
                "delete": {
                    method: "DELETE",
                    id: "@id"
                }
            })
        }]), module.factory("DoctorInsuranceList", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
            return $resource(GENERAL_CONFIG.api_url + "/insurances", {
                doctor_id: "@doctor_id",
                date: "@date"
            }, {
                get: {
                    method: "GET"
                }
            })
        }]), module.factory("FamilyFriendsList", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
            return $resource(GENERAL_CONFIG.api_url + "/family_friends", {
                user_id: "@user_id"
            }, {
                get: {
                    method: "GET"
                },
                post: {
                    method: "POST"
                }
            })
        }]), module.factory("FamilyFriendsSingle", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
            return $resource(GENERAL_CONFIG.api_url + "/family_friends/:id", {
                id: "@id"
            }, {
                get: {
                    method: "GET"
                }
            })
        }]), module.factory("DoctorAppointment", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
            return $resource(GENERAL_CONFIG.api_url + "/patient_reviews/:id/:appointment_id", {
                id: "@id",
                appointment_id: "@appointment_id"
            }, {
                get: {
                    method: "GET"
                }
            })
        }]), module.factory("patientReviewAdd", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
            return $resource(GENERAL_CONFIG.api_url + "/patient_reviews/add", {}, {
                post: {
                    method: "POST"
                }
            })
        }])
    }(angular.module("Abs.appointments")),
    function(module) {
        module.controller("AppointmentsSettingController", ["$scope", "$state", "Flash", "$filter", "$rootScope", "$timeout", "appointmentSetting", function($scope, $state, Flash, $filter, $rootScope, $timeout, appointmentSetting) {
            var model = this;
            model.init = function() {
                $rootScope.pageTitle = $rootScope.settings["site.name"] + " | " + $filter("translate")("Appointment Settings"), $scope.calendarSlots = [], $scope.calendarSlots.push({
                    id: 5,
                    name: "5"
                }, {
                    id: 10,
                    name: "10"
                }, {
                    id: 15,
                    name: "15"
                }, {
                    id: 20,
                    name: "20"
                }, {
                    id: 25,
                    name: "25"
                }, {
                    id: 30,
                    name: "30"
                }, {
                    id: 35,
                    name: "35"
                }, {
                    id: 40,
                    name: "40"
                }, {
                    id: 45,
                    name: "45"
                }, {
                    id: 50,
                    name: "50"
                }, {
                    id: 55,
                    name: "55"
                }, {
                    id: 60,
                    name: "60"
                })
            }, model.init(), appointmentSetting.get().$promise.then(function(response) {
                model.settingValue = response.appointmentResponse, model.settingValue.calendar_slot_id = parseInt(response.appointmentResponse.calendar_slot_id), model.settingValue.is_today_first_day = 1 === parseInt(response.appointmentResponse.is_today_first_day), model.settingValue.is_two_session = 1 === parseInt(response.appointmentResponse.is_two_session), model.settingValue.type = 1 === parseInt(response.appointmentResponse.type), model.settingValue.is_sunday_open = 1 === parseInt(response.appointmentResponse.is_sunday_open), model.settingValue.sunday_two_session = 1 === parseInt(response.appointmentResponse.sunday_two_session), model.settingValue.is_monday_open = 1 === parseInt(response.appointmentResponse.is_monday_open), model.settingValue.monday_two_session = 1 === parseInt(response.appointmentResponse.monday_two_session), model.settingValue.is_tuesday_open = 1 === parseInt(response.appointmentResponse.is_tuesday_open), model.settingValue.tuesday_two_session = 1 === parseInt(response.appointmentResponse.tuesday_two_session), model.settingValue.is_wednesday_open = 1 === parseInt(response.appointmentResponse.is_wednesday_open), model.settingValue.wednesday_two_session = 1 === parseInt(response.appointmentResponse.wednesday_two_session), model.settingValue.is_thrusday_open = 1 === parseInt(response.appointmentResponse.is_thrusday_open), model.settingValue.thrusday_two_session = 1 === parseInt(response.appointmentResponse.thrusday_two_session), model.settingValue.is_friday_open = 1 === parseInt(response.appointmentResponse.is_friday_open), model.settingValue.friday_two_session = 1 === parseInt(response.appointmentResponse.friday_two_session), model.settingValue.is_saturday_open = 1 === parseInt(response.appointmentResponse.is_saturday_open), model.settingValue.saturday_two_session = 1 === parseInt(response.appointmentResponse.saturday_two_session), model.settingValue.is_active = 1 === parseInt(response.appointmentResponse.is_active)
            }), model.settingUpdate = function($valid) {
                $valid && ($scope.is_disable = !0, model.settingValue.nowtimezone = moment(new Date).format("Z"), appointmentSetting.update(model.settingValue).$promise.then(function(response) {
                    void 0 !== response.error ? model.settingValue.type === !0 ? (model.settingValue.is_sunday_open === !0 && (model.settingValue.sunday_two_session === !0 ? (void 0 !== response.error.sunday_open_lunch ? model.sunday_open_lunch = $filter("translate")(response.error.sunday_open_lunch) : model.sunday_open_lunch = !1, void 0 !== response.error.sunday_lunch_resume ? model.sunday_lunch_resume = $filter("translate")(response.error.sunday_lunch_resume) : model.sunday_lunch_resume = !1, void 0 !== response.error.sunday_resume_close ? model.sunday_resume_close = $filter("translate")(response.error.sunday_resume_close) : model.sunday_resume_close = !1) : (model.sunday_resume_close = !1, void 0 !== response.error.sunday_open_close ? model.sunday_open_close = $filter("translate")(response.error.sunday_open_close) : model.sunday_open_close = !1)), model.settingValue.is_monday_open === !0 && (model.settingValue.monday_two_session === !0 ? (void 0 !== response.error.monday_open_lunch ? model.monday_open_lunch = $filter("translate")(response.error.monday_open_lunch) : model.monday_open_lunch = !1, void 0 !== response.error.monday_lunch_resume ? model.monday_lunch_resume = $filter("translate")(response.error.monday_lunch_resume) : model.monday_lunch_resume = !1, void 0 !== response.error.monday_resume_close ? model.monday_resume_close = $filter("translate")(response.error.monday_resume_close) : model.monday_resume_close = !1) : (model.monday_resume_close = !1, void 0 !== response.error.monday_open_close ? model.monday_open_close = $filter("translate")(response.error.monday_open_close) : model.monday_open_close = !1)), model.settingValue.is_tuesday_open === !0 && (model.settingValue.tuesday_two_session === !0 ? (void 0 !== response.error.tuesday_open_lunch ? model.tuesday_open_lunch = $filter("translate")(response.error.tuesday_open_lunch) : model.tuesday_open_lunch = !1, void 0 !== response.error.tuesday_lunch_resume ? model.tuesday_lunch_resume = $filter("translate")(response.error.tuesday_lunch_resume) : model.tuesday_lunch_resume = !1, void 0 !== response.error.tuesday_resume_close ? model.tuesday_resume_close = $filter("translate")(response.error.tuesday_resume_close) : model.tuesday_resume_close = !1) : (model.tuesday_resume_close = !1, void 0 !== response.error.tuesday_open_close ? model.tuesday_open_close = $filter("translate")(response.error.tuesday_open_close) : model.tuesday_open_close = !1)), model.settingValue.is_wednesday_open === !0 && (model.settingValue.wednesday_two_session === !0 ? (void 0 !== response.error.wednesday_open_lunch ? model.wednesday_open_lunch = $filter("translate")(response.error.wednesday_open_lunch) : model.wednesday_open_lunch = !1, void 0 !== response.error.wednesday_lunch_resume ? model.wednesday_lunch_resume = $filter("translate")(response.error.wednesday_lunch_resume) : model.wednesday_lunch_resume = !1, void 0 !== response.error.wednesday_resume_close ? model.wednesday_resume_close = $filter("translate")(response.error.wednesday_resume_close) : model.wednesday_resume_close = !1) : (model.wednesday_resume_close = !1, void 0 !== response.error.wednesday_open_close ? model.wednesday_open_close = $filter("translate")(response.error.wednesday_open_close) : model.wednesday_open_close = !1)), model.settingValue.is_thrusday_open === !0 && (model.settingValue.thrusday_two_session === !0 ? (void 0 !== response.error.thrusday_open_lunch ? model.thrusday_open_lunch = $filter("translate")(response.error.thrusday_open_lunch) : model.thrusday_open_lunch = !1, void 0 !== response.error.thrusday_lunch_resume ? model.thrusday_lunch_resume = $filter("translate")(response.error.thrusday_lunch_resume) : model.thrusday_lunch_resume = !1, void 0 !== response.error.thrusday_resume_close ? model.thrusday_resume_close = $filter("translate")(response.error.thrusday_resume_close) : model.thrusday_resume_close = !1) : (model.thrusday_resume_close = !1, void 0 !== response.error.thrusday_open_close ? model.thrusday_open_close = $filter("translate")(response.error.thrusday_open_close) : model.thrusday_open_close = !1)), model.settingValue.is_friday_open === !0 && (model.settingValue.friday_two_session === !0 ? (void 0 !== response.error.friday_open_lunch ? model.friday_open_lunch = $filter("translate")(response.error.friday_open_lunch) : model.friday_open_lunch = !1, void 0 !== response.error.friday_lunch_resume ? model.friday_lunch_resume = $filter("translate")(response.error.friday_lunch_resume) : model.friday_lunch_resume = !1, void 0 !== response.error.friday_resume_close ? model.friday_resume_close = $filter("translate")(response.error.friday_resume_close) : model.friday_resume_close = !1) : (model.friday_resume_close = !1, void 0 !== response.error.friday_open_close ? model.friday_open_close = $filter("translate")(response.error.friday_open_close) : model.friday_open_close = !1)), model.settingValue.is_saturday_open === !0 && (model.settingValue.saturday_two_session === !0 ? (void 0 !== response.error.saturday_open_lunch ? model.saturday_open_lunch = $filter("translate")(response.error.saturday_open_lunch) : model.saturday_open_lunch = !1, void 0 !== response.error.saturday_lunch_resume ? model.saturday_lunch_resume = $filter("translate")(response.error.saturday_lunch_resume) : model.saturday_lunch_resume = !1, void 0 !== response.error.saturday_resume_close ? model.saturday_resume_close = $filter("translate")(response.error.saturday_resume_close) : model.saturday_resume_close = !1) : (model.saturday_resume_close = !1, void 0 !== response.error.saturday_open_close ? model.saturday_open_close = $filter("translate")(response.error.saturday_open_close) : model.saturday_open_close = !1))) : model.settingValue.is_two_session === !0 ? (void 0 !== response.error.open_lunch ? model.open_lunch = $filter("translate")(response.error.open_lunch) : model.open_lunch = !1, void 0 !== response.error.lunch_resume ? model.lunch_resume = $filter("translate")(response.error.lunch_resume) : model.lunch_resume = !1, void 0 !== response.error.resume_close ? model.resume_close = $filter("translate")(response.error.resume_close) : model.resume_close = !1) : (model.resume_close = !1, void 0 !== response.error.open_close ? model.open_close = $filter("translate")(response.error.open_close) : model.open_close = !1) : (model.open_lunch = model.resume_close = model.lunch_resume = model.open_close = model.sunday_open_lunch = model.sunday_resume_close = model.sunday_lunch_resume = model.sunday_open_close = model.monday_open_lunch = model.monday_resume_close = model.monday_lunch_resume = model.monday_open_close = model.tuesday_open_lunch = model.tuesday_resume_close = model.tuesday_lunch_resume = model.tuesday_open_close = model.wednesday_open_lunch = model.wednesday_resume_close = model.wednesday_lunch_resume = model.wednesday_open_close = model.thrusday_open_lunch = model.thrusday_resume_close = model.thrusday_lunch_resume = model.thrusday_open_close = model.friday_open_lunch = model.friday_resume_close = model.friday_lunch_resume = model.friday_open_close = model.saturday_open_lunch = model.saturday_resume_close = model.saturday_lunch_resume = model.saturday_open_close = !1, angular.isDefined(response.Success) && Flash.set($filter("translate")(response.Success), "success", !0), $state.go("AppointmentSetting", {})), $scope.is_disable = !1
                }))
            }
        }])
    }(angular.module("Abs.appointments")),
    function(module) {
        module.controller("AppointmentsModificationController", ["$scope", "$state", "$filter", "$rootScope", "Flash", "ConstUserType", "appointmentModification", "appointmentModificationAdd", "appointmentModificationEdit", "appointmentModificationDelete", "splitedTimeSlot", "SweetAlert", function($scope, $state, $filter, $rootScope, Flash, ConstUserType, appointmentModification, appointmentModificationAdd, appointmentModificationEdit, appointmentModificationDelete, splitedTimeSlot, SweetAlert) {
            var model = this;
            model.init = function() {
                $rootScope.pageTitle = $rootScope.settings["site.name"] + " | " + $filter("translate")("Appointment Modification"), model.ConstUserType = ConstUserType, "appointmentModification" == $state.current.name && ($scope.currentPage = void 0 !== $scope.currentPage ? parseInt($scope.currentPage) : 1, $scope.getAppointmentModification())
            }, "appointmentModificationAdd" == $state.current.name ? ($rootScope.pageTitle = $rootScope.settings["site.name"] + " | " + $filter("translate")("Add Modification Details"), $scope.init = function() {
                $scope.dateBlockeBefore = $filter("date")(new Date, "yyyy-MM-ddTHH:mm:ss.sssZ"), splitedTimeSlot.get().$promise.then(function(response) {
                    $scope.timeSlot = response.data
                })
            }, $scope.init(), model.appointmentModificationAdd = function() {
                appointmentModificationAdd.add(model.settingValue).$promise.then(function(response) {
                    response.Success ? (Flash.set($filter("translate")(response.Success), "success", !0), $state.go("appointmentModification")) : Flash.set($filter("translate")(response.Failed), "error", !1)
                })
            }) : "appointmentModificationEdit" == $state.current.name && ($rootScope.pageTitle = $rootScope.settings["site.name"] + " | " + $filter("translate")("Edit Modification Details"), appointmentModificationEdit.get({
                id: $state.params.id
            }).$promise.then(function(response) {
                if (model.settingValue = response, model.settingValue.type = 1 === parseInt(response.type), "" !== response.practice_open) {
                    var practiceOpen = response.practice_open;
                    model.settingValue.appt_time = practiceOpen.split(",")
                } else model.settingValue.appt_time = "";
                splitedTimeSlot.get().$promise.then(function(response) {
                    $scope.timeSlot = response.data
                })
            }), model.appointmentModificationEdit = function() {
                appointmentModificationEdit.update({
                    id: $state.params.id
                }, model.settingValue).$promise.then(function(response) {
                    Flash.set($filter("translate")(response.Success), "success", !0), $state.go("appointmentModification")
                })
            }), $scope.swithcOn = !0, $scope.swithcOff = !1, $scope.getAppointmentModification = function() {
                param = {
                    page: $scope.currentPage
                }, appointmentModification.get(param).$promise.then(function(response) {
                    $scope.modificationList = response.data, $scope._metadata = response.meta.pagination
                })
            }, $scope.paginate = function(pageno) {
                $scope.currentPage = parseInt($scope.currentPage), $scope.getAppointmentModification()
            }, model.init(), $scope.AptModificationDelete = function(id) {
                SweetAlert.swal({
                    title: "Are you sure to delete?",
                    text: "",
                    type: "warning",
                    showCancelButton: !0,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Confirm",
                    cancelButtonText: "No",
                    closeOnConfirm: !0,
                    closeOnCancel: !0
                }, function(isConfirm) {
                    isConfirm && appointmentModificationDelete["delete"]({
                        id: id
                    }).$promise.then(function(response) {
                        Flash.set($filter("translate")("Appointment Modifications deleted successfully"), "success", !0), $state.reload()
                    }, function(error) {
                        Flash.set($filter("translate")("Appointment Modifications could not be deleted"), "error", !1)
                    })
                })
            }
        }])
    }(angular.module("Abs.appointments")),
    function(module) {
        module.controller("BookingController", ["$scope", "$http", "$state", "$filter", "$auth", "$rootScope", "$location", "AuthFactory", "Flash", "SweetAlert", "BookingAppointment", "ConstUserType", "AppointmentBookingAdd", "Gender", "DoctorInsuranceList", "FamilyFriendsList", "FamilyFriendsSingle", function($scope, $http, $state, $filter, $auth, $rootScope, $location, AuthFactory, Flash, SweetAlert, BookingAppointment, ConstUserType, AppointmentBookingAdd, Gender, DoctorInsuranceList, FamilyFriendsList, FamilyFriendsSingle) {
            var model = this;
            model.init = function() {
                $rootScope.pageTitle = $rootScope.settings["site.name"] + " | " + $filter("translate")("Booking"), model.ConstUserType = ConstUserType, $auth.isAuthenticated() || (localStorage.bookingUrl = "/appointments/booking/" + $state.params.doctorid + "/" + $state.params.apt_date + "/" + $state.params.apt_time + "/" + $state.params.workplaceid, $state.go("AppointmentBooking", {
                    doctorid: $state.params.doctorid,
                    apt_date: $state.params.apt_date,
                    apt_time: $state.params.apt_time,
                    workplaceid: $state.params.workplaceid
                })), $scope.appt_time = $state.params.apt_time, $scope.appt_date = $state.params.apt_date, $scope.dobDateLimit = $filter("date")(new Date, "yyyy-MM-dd")
            }, model.init(), Gender.genderList({}).$promise.then(function(genderResponse) {
                model.genderList = genderResponse.data
            }), BookingAppointment.get({
                doctorid: $state.params.doctorid,
                apt_date: $state.params.apt_date,
                apt_time: $state.params.apt_time,
                workplaceid: $state.params.workplaceid
            }).$promise.then(function(response) {
                if ($scope.doctorProfile = response.doctor_profile.data, $scope.doctorSpecialtyDiseases = response.doctor_specialty_diseas, "AppointmentBooking" == $state.current.name && ($scope.stepStatus = 1, model.diseasList = response.doctor_specialty_diseas, $rootScope.reasonToVisit = "", model.formFields = {
                        is_seen_before: 1
                    }), "AppointmentBookingStep2" == $state.current.name && ($scope.stepStatus = 2, Gender.genderList({}).$promise.then(function(genderResponse) {
                        model.genderList = genderResponse.data
                    }), FamilyFriendsList.get({
                        user_id: $rootScope.auth.user_id
                    }).$promise.then(function(response) {
                        model.friendsLists = response.data
                    }), model.formValue = {
                        is_guest_appointment: 1,
                        first_name: $rootScope.auth.user_profile.first_name,
                        last_name: $rootScope.auth.user_profile.last_name,
                        postal_code: $rootScope.auth.user_profile.postal_code,
                        phone: $rootScope.auth.user_profile.phone,
                        gender_id: parseInt($rootScope.auth.user_profile.gender_id)
                    }), "AppointmentBookingStep3" == $state.current.name && ($scope.stepStatus = 3, model.formValue = {
                        phone: $rootScope.auth.user_profile.phone
                    }), "AppointmentBookingStep4" == $state.current.name) {
                    $scope.stepStatus = 4;
                    var step2Val = (JSON.parse(window.atob(localStorage.bookingValueS1)), JSON.parse(window.atob(localStorage.bookingValueS2)));
                    1 === parseInt(step2Val.is_guest_appointment) ? ($scope.name = step2Val.first_name + " " + step2Val.last_name, $scope.mobile = step2Val.phone, $scope.email = $rootScope.auth.email, $scope.dob = $rootScope.auth.user_profile.dob, 1 === step2Val.gender_id ? $scope.gender = "Male" : $scope.gender = "Female") : angular.isDefined(step2Val.family_friend_id) ? FamilyFriendsSingle.get({
                        id: step2Val.family_friend_id
                    }).$promise.then(function(response) {
                        angular.isDefined(response.id) ? ($scope.name = response.first_name, null !== response.mobile ? $scope.mobile = response.mobile : $scope.mobile = "No Data", $scope.email = $rootScope.auth.email, 1 === parseInt(response.gender_id) ? $scope.gender = "Male" : $scope.gender = "Female") : ($scope.name = "No Data", $scope.mobile = "No Data", $scope.email = "No Data", $scope.gender = "No Data")
                    }) : ($scope.name = step2Val.guest_first_name + " " + step2Val.guest_last_name, $scope.mobile = step2Val.phone, $scope.email = step2Val.guest_email, $scope.dob = step2Val.guest_dob, 1 === step2Val.guest_gender_id ? $scope.gender = "Male" : $scope.gender = "Female"), $scope.dob = angular.isDefined($scope.dob) && "0000-00-00" !== $scope.dob ? $filter("date")(new Date($scope.dob), "MMM dd, yyyy") : "--"
                }
            }), model.login = function(isvalid) {
                if (isvalid) {
                    var credentials = {
                        email: model.email,
                        password: model.password
                    };
                    $auth.login(credentials).then(function(response) {
                        response.data.userToken && ($translate = $filter("translate")("Login successfully"), Flash.set($translate, "success", !0), AuthFactory.fetch().$promise.then(function(user) {
                            $rootScope.auth = user, localStorage.bookingUrl ? $state.reload() : $state.go("MyAppointments")
                        }))
                    })["catch"](function(error) {
                        Flash.set($filter("translate")("Sorry, login failed. Your email or password are incorrect."), "error", !1)
                    })
                }
            }, model.signup = function(isvalid) {
                if (isvalid && model.password == model.confirm_password) {
                    var credentials = {
                        first_name: model.first_name,
                        last_name: model.last_name,
                        username: model.username,
                        email: model.email,
                        password: model.password,
                        confirm_password: model.confirm_password,
                        dob: model.year + "-" + model.month + "-" + model.date,
                        phone: model.phone,
                        gender_id: model.gender_id,
                        is_agree_terms_conditions: model.terms_conditions
                    };
                    $auth.signup(credentials).then(function(response) {
                        response.data.token ? ($auth.setToken(response.data.token), AuthFactory.fetch().$promise.then(function(user) {
                            $rootScope.auth = user, localStorage.bookingUrl ? $state.reload() : $state.go("MyAppointments")
                        })) : $state.go("login"), Flash.set($filter("translate")(response.data.Success), "success", !0)
                    })["catch"](function(error) {
                        model.emailErr = "", model.nameErr = "", model.passwordErr = "", model.confirmPasswordErr = "";
                        var errorResponse = error.data.errors;
                        angular.isDefined(errorResponse) ? (errorResponse.email && (model.emailErr = $filter("translate")(errorResponse.email[0])), errorResponse.username && (model.nameErr = $filter("translate")(errorResponse.username[0])), errorResponse.password && (model.passwordErr = $filter("translate")(errorResponse.password[0])), Flash.set($filter("translate")(error.data.message), "error", !1)) : Flash.set($filter("translate")(error.data.message), "error", !1)
                    })
                }
            }, model.step1 = function(isvalidate) {
                if (isvalidate)
                    if (model.formFields.doctor_user_id = $state.params.doctorid, model.formFields.appointment_date = $state.params.apt_date, model.formFields.appointment_time = $state.params.apt_time, model.formFields.work_place_id = $state.params.workplaceid, "Yes" === model.formFields.checkInsurance) model.formFields.checkInsurance = "Yes", localStorage.bookingValueS1 = window.btoa(JSON.stringify(model.formFields)), $scope.insuranceCheckSubmit($state.params.doctorid, $state.params.apt_date, model.formFields.insurance_id, function(insurance) {
                        if (1 == parseInt(insurance[0].response.status)) {
                            var reDirectPath = "/appointments/booking/" + $state.params.doctorid + "/" + $state.params.apt_date + "/" + $state.params.apt_time + "/" + $state.params.workplaceid + "/step2";
                            $location.path(reDirectPath)
                        } else Flash.set($filter("translate")(insurance[0].response.message), "error", !1), $scope.insuranceCheck("Yes")
                    });
                    else {
                        model.formFields.checkInsurance = "No", model.formFields.insurance_id = "", localStorage.bookingValueS1 = window.btoa(JSON.stringify(model.formFields));
                        var reDirectPath = "/appointments/booking/" + $state.params.doctorid + "/" + $state.params.apt_date + "/" + $state.params.apt_time + "/" + $state.params.workplaceid + "/step2";
                        $location.path(reDirectPath)
                    }
            }, model.step2 = function(isvalidate) {
                if (isvalidate)
                    if (1 === parseInt(model.formValue.is_guest_appointment)) storedValues = {
                        first_name: model.formValue.first_name,
                        last_name: model.formValue.last_name,
                        gender_id: model.formValue.gender_id,
                        is_guest_appointment: model.formValue.is_guest_appointment,
                        postal_code: model.formValue.postal_code,
                        phone: model.formValue.phone,
                        notes: model.formValue.notes
                    }, model.step2sub(storedValues);
                    else if (3 === parseInt(model.formValue.is_guest_appointment)) storedValues = {
                    guest_first_name: model.formValue.guest_first_name,
                    guest_last_name: model.formValue.guest_last_name,
                    guest_email: model.formValue.guest_email,
                    guest_gender_id: model.formValue.gender_id,
                    is_guest_appointment: model.formValue.is_guest_appointment,
                    guest_postal_code: model.formValue.postal_code,
                    guest_dob: model.formValue.guest_dob,
                    phone: model.formValue.phone,
                    notes: model.formValue.notes
                }, model.step2sub(storedValues);
                else if (2 === parseInt(model.formValue.is_guest_appointment))
                    if (null == model.formValue.family_member) {
                        var family_data = {
                            first_name: model.formValue.name_member,
                            relationship: model.formValue.relation,
                            age: model.formValue.age,
                            gender_id: model.formValue.realtion_gender_id
                        };
                        FamilyFriendsList.post(family_data).$promise.then(function(response) {
                            angular.isDefined(response.id) && (model.familyfriendid = response.id, angular.isDefined(response.id) && (storedValues = {
                                family_friend_id: model.familyfriendid,
                                first_name: model.formValue.name_member,
                                last_name: model.formValue.last_name,
                                gender_id: model.formValue.realtion_gender_id
                            }, model.step2sub(storedValues)))
                        })
                    } else storedValues = {
                        family_friend_id: model.formValue.family_member
                    }, model.step2sub(storedValues)
            }, model.step2sub = function(storedValues) {
                localStorage.bookingValueS2 = window.btoa(JSON.stringify(storedValues));
                var reDirectPath = "/appointments/booking/" + $state.params.doctorid + "/" + $state.params.apt_date + "/" + $state.params.apt_time + "/" + $state.params.workplaceid + "/final";
                $location.path(reDirectPath)
            }, model.step3 = function() {
                localStorage.bookingValueS3 = window.btoa(JSON.stringify(model.formValue));
                var reDirectPath = "/appointments/booking/" + $state.params.doctorid + "/" + $state.params.apt_date + "/" + $state.params.apt_time + "/" + $state.params.workplaceid + "/final";
                $location.path(reDirectPath)
            }, $scope.finalConfirm = function() {
                var postValue = {
                    step1value: localStorage.bookingValueS1,
                    step2value: localStorage.bookingValueS2
                };
                AppointmentBookingAdd.add(postValue).$promise.then(function(response) {
                    response.Success ? localStorage.widgetUser ? (Flash.set($filter("translate")("Booked Successfully. Go to Main Web for Other Details"), "success", !0), $rootScope.auth = {}, $auth.logout(), $location.path("/doctor/" + localStorage.widgetUser)) : (Flash.set($filter("translate")(response.Success), "success", !0), localStorage.removeItem("bookingValueS1"), localStorage.removeItem("bookingValueS2"), $location.path("/appointments/all")) : Flash.set($filter("translate")(response.Failed), "error", !1)
                })
            }, $scope.cancelAppoinment = function() {
                angular.isDefined(localStorage) && (localStorage.removeItem("bookingValueS1"), localStorage.removeItem("bookingValueS2"), $state.go("MyAppointments", {}, {
                    reload: !0
                }))
            }, $scope.reasonValue = function(diseas) {
                var reasonId = model.formFields.specialty_disease_id,
                    reasonName = $.grep(model.diseasList, function(diseas) {
                        return diseas.id == reasonId
                    })[0].name;
                $rootScope.reasonToVisit = reasonName
            }, $scope.insuranceCheck = function(value) {
                if ("Yes" === value) {
                    var insurance_date = $filter("date")($state.params.apt_date, "yyyy-MM-dd"),
                        dt = $filter("date")(new Date(insurance_date.split("-").join("/")), "yyyy-MM-dd");
                    DoctorInsuranceList.get({
                        doctor_id: $state.params.doctorid,
                        date: dt
                    }).$promise.then(function(response) {
                        $scope.response_code = response.code, 1 === response.code ? ($scope.activeInsurance = response.data.active, $scope.expiredInsurance = response.data.expired) : 0 === response.code && ($scope.noInsurance = response.message)
                    })
                }
            }, $scope.insuranceCheckSubmit = function(doctor_id_insurance, apt_date_insurance, insurance_id, callback) {
                var insuranceCheck = [];
                if (insuranceCheck[0] = {
                        response: {
                            status: 0,
                            message: "Please try another insurance"
                        }
                    }, void 0 !== doctor_id_insurance && void 0 !== apt_date_insurance && null !== doctor_id_insurance && null !== apt_date_insurance && "" !== doctor_id_insurance && "" !== apt_date_insurance) {
                    var insurance_date = $filter("date")(apt_date_insurance, "yyyy-MM-dd"),
                        dt = $filter("date")(new Date(insurance_date.split("-").join("/")), "yyyy-MM-dd");
                    DoctorInsuranceList.get({
                        doctor_id: doctor_id_insurance,
                        date: dt
                    }).$promise.then(function(response) {
                        $scope.response_code = response.code, 1 === response.code && angular.forEach(response.data.active, function(value, key) {
                            parseInt(value.id) == parseInt(model.formFields.insurance_id) && (insuranceCheck[0] = {
                                response: {
                                    status: 1
                                }
                            })
                        }), callback(insuranceCheck)
                    })
                }
            }, $scope.bookingCancel = function() {
                SweetAlert.swal({
                    title: "Are you sure to Cancel the Booking?",
                    text: "",
                    type: "warning",
                    showCancelButton: !0,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Yes",
                    cancelButtonText: "No",
                    closeOnConfirm: !0,
                    closeOnCancel: !0
                }, function(isConfirm) {
                    isConfirm && (localStorage.removeItem("bookingValueS1"), localStorage.removeItem("bookingValueS2"), $location.path("/appointments/all"))
                })
            }
        }]).directive("bookingBreadCrum", function() {
            return {
                restrict: "E",
                templateUrl: "Appointments/booking_breadcrum.tpl.html",
                link: function(scope, element, attr) {
                    scope.stepStatus = parseInt(attr.datastep)
                }
            }
        })
    }(angular.module("Abs.appointments")),
    function(module) {
        module.factory("AuthFactory", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
            return $resource(GENERAL_CONFIG.api_url + "/users/auth", {}, {
                fetch: {
                    method: "GET"
                }
            })
        }]), module.factory("AppointmentFactory", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
            return $resource(GENERAL_CONFIG.api_url + "/appointments/:type", {
                type: "@type"
            }, {
                get: {
                    method: "GET"
                }
            })
        }]), module.factory("appointmentView", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
            return $resource(GENERAL_CONFIG.api_url + "/appointment/:id", {
                id: "@id"
            })
        }]), module.factory("appointmentSetting", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
            return $resource(GENERAL_CONFIG.api_url + "/appointments/settings?zone=" + localStorage.zone, {}, {
                update: {
                    method: "POST"
                },
                get: {
                    method: "GET"
                }
            })
        }]), module.factory("appointmentModification", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
            return $resource(GENERAL_CONFIG.api_url + "/appointments/modifications", {}, {
                get: {
                    method: "GET"
                }
            })
        }]), module.factory("appointmentModificationDelete", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
            return $resource(GENERAL_CONFIG.api_url + "/appointments/modifications/delete/:id", {
                id: "@id"
            }, {
                "delete": {
                    method: "delete"
                }
            })
        }]), module.factory("appointmentModificationAdd", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
            return $resource(GENERAL_CONFIG.api_url + "/appointments/modifications/add", {}, {
                add: {
                    method: "POST"
                }
            })
        }]), module.factory("appointmentModificationEdit", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
            return $resource(GENERAL_CONFIG.api_url + "/appointments/modifications/edit/:id", {
                id: "@id"
            }, {
                get: {
                    method: "GET"
                },
                update: {
                    method: "POST"
                }
            })
        }]), module.factory("BookingAppointment", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
            return $resource(GENERAL_CONFIG.api_url + "/appointments/booking/:doctorid/:apt_date/:apt_time/:workplaceid", {
                doctorid: "@doctorid",
                apt_date: "@apt_date",
                apt_time: "@apt_time",
                workplaceid: "@workplaceid"
            }, {
                get: {
                    method: "GET"
                }
            })
        }]), module.factory("Gender", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
            return $resource(GENERAL_CONFIG.api_url + "/genders", {}, {
                genderList: {
                    method: "GET"
                }
            })
        }]), module.factory("AppointmentBookingAdd", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
            return $resource(GENERAL_CONFIG.api_url + "/appointments/booking/add", {}, {
                add: {
                    method: "POST"
                }
            })
        }]), module.factory("changeStatus", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
            return $resource(GENERAL_CONFIG.api_url + "/appointment/:id/:apt_status", {
                id: "@id",
                apt_status: "@apt_status"
            }, {
                get: {
                    method: "GET"
                }
            })
        }]), module.factory("splitedTimeSlot", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
            return $resource(GENERAL_CONFIG.api_url + "/search/timeslot", {}, {
                get: {
                    method: "GET"
                }
            })
        }]), module.factory("MyDocotors", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
            return $resource(GENERAL_CONFIG.api_url + "/user/favorite", {}, {
                get: {
                    method: "GET"
                }
            })
        }]), module.factory("AppointmentExport", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
            return $resource(GENERAL_CONFIG.api_url + "/appointments/export/:type/:format?token=" + localStorage.userToken, {}, {
                "export": {
                    method: "GET",
                    params: {
                        type: "@type",
                        format: "@format"
                    }
                }
            })
        }]), module.factory("RemainderService", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
            return $resource(GENERAL_CONFIG.api_url + "/reminders/:id", {}, {
                getall: {
                    method: "GET"
                },
                post: {
                    method: "POST"
                },
                put: {
                    method: "PUT",
                    id: "@id"
                },
                getbyid: {
                    method: "GET",
                    id: "@id"
                },
                "delete": {
                    method: "DELETE",
                    id: "@id"
                }
            })
        }]), module.factory("DoctorInsuranceList", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
            return $resource(GENERAL_CONFIG.api_url + "/insurances", {
                doctor_id: "@doctor_id",
                date: "@date"
            }, {
                get: {
                    method: "GET"
                }
            })
        }]), module.factory("FamilyFriendsList", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
            return $resource(GENERAL_CONFIG.api_url + "/family_friends", {
                user_id: "@user_id"
            }, {
                get: {
                    method: "GET"
                },
                post: {
                    method: "POST"
                }
            })
        }]), module.factory("FamilyFriendsSingle", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
            return $resource(GENERAL_CONFIG.api_url + "/family_friends/:id", {
                id: "@id"
            }, {
                get: {
                    method: "GET"
                }
            })
        }])
    }(angular.module("Abs.appointments")),
    function(moduel) {
        moduel.controller("UserBadgesController", ["$state", "$rootScope", "$scope", "$filter", "$location", "$timeout", "Flash", "SweetAlert", "BadgesService", "Constantbadges", "$stateParams", "Upload", "GENERAL_CONFIG", function($state, $rootScope, $scope, $filter, $location, $timeout, Flash, SweetAlert, BadgesService, Constantbadges, $stateParams, Upload, GENERAL_CONFIG) {
            function pageTitle(title) {
                $rootScope.pageTitle = $rootScope.settings["site.name"] + " | " + $filter("translate")(title)
            }

            function flashMessage(message, classname) {
                Flash.set($filter("translate")(message), classname, !0)
            }

            function getBadges() {
                model.userBadgesLength = !1, BadgesService.getall().$promise.then(function(response) {
                    angular.isDefined(response) && (model.userBadges = response.data, model.userBadgesLength = response.data.length > 0)
                })
            }

            function fnDeleteBadges(id) {
                SweetAlert.swal({
                    title: "Are you sure to Delete?",
                    text: "",
                    type: "warning",
                    showCancelButton: !0,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Yes",
                    cancelButtonText: "No",
                    closeOnConfirm: !0,
                    closeOnCancel: !0
                }, function(isConfirm) {
                    isConfirm && BadgesService["delete"]({
                        id: id
                    }).$promise.then(function(response) {
                        flashMessage("User Badges deleted successfully", "success"), $timeout(function() {
                            $state.reload()
                        }, 500)
                    }, function(error) {
                        flashMessage("User Badges could not be deleted, Please try again", "error")
                    })
                })
            }
            var model = this;
            $state.current.name === Constantbadges.state_Badges ? (pageTitle("My Badges"), getBadges(), $scope.uploadFiles = function(files) {
                $scope.files = files, files && files.length && Upload.upload({
                    url: GENERAL_CONFIG.api_url + "/badges",
                    data: {
                        badge: files[0]
                    }
                }).then(function(response) {
                    console.log(response), flashMessage("Badges added successfully", "success"), $state.go(Constantbadges.state_Badges, {}, {
                        reload: !0
                    })
                }, function(response) {
                    flashMessage("Badges could not be added. Please, try again.", "error")
                }, function(evt) {
                    $scope.progress = Math.min(100, parseInt(100 * evt.loaded / evt.total))
                })
            }, $scope.deleteBadges = function(id) {
                angular.isDefined(id) && fnDeleteBadges(id)
            }) : $state.go(Constantbadges.state_Badges)
        }])
    }(angular.module("Abs.userbadges")),
    function(module) {
        module.factory("BadgesService", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
            return $resource(GENERAL_CONFIG.api_url + "/badges/:id", {}, {
                getall: {
                    method: "GET"
                },
                post: {
                    method: "POST"
                },
                "delete": {
                    method: "DELETE",
                    id: "@id"
                }
            })
        }])
    }(angular.module("Abs.userbadges")),
    function(module) {
        module.controller("FooterController", ["$scope", function($scope) {
            $scope.currentYear = (new Date).getFullYear()
        }])
    }(angular.module("Abs.common", ["ngSanitize", "ui.select", "ngScrollbars"])),
    function(module) {
        module.controller("HeaderController", ["$state", "$scope", "$rootScope", "$auth", "$http", "$location", "$timeout", "ResolveService", "AuthFactory", "ConstSocialLogin", "ConstThumb", "ConstUserType", "ConstMembershipPlan", "GENERAL_CONFIG", function($state, $scope, $rootScope, $auth, $http, $location, $timeout, ResolveService, AuthFactory, ConstSocialLogin, ConstThumb, ConstUserType, ConstMembershipPlan, GENERAL_CONFIG) {
            var model = this;
            model.setMetaData = function() {
                angular.element("html head meta[name=description]").attr("content", $rootScope.settings["meta.description"]), angular.element("html head meta[name=keywords]").attr("content", $rootScope.settings["meta.keywords"]), angular.element('html head meta[property="og:description"], html head meta[name="twitter:description"]').attr("content", $rootScope.settings["meta.description"]), angular.element('html head meta[name="twitter:creator"]').attr("content", $rootScope.settings["twitter.creator"]), angular.element('html head meta[name="twitter:site"]').attr("content", $rootScope.settings["twitter.site"]), angular.element('html head meta[name="twitter:card"]').attr("content", $rootScope.settings["twitter.card"]), angular.element('html head meta[name="twitter:app:id:iphone"]').attr("content", $rootScope.settings.ios_app_store_id), angular.element('html head meta[name="twitter:app:id:ipad"]').attr("content", $rootScope.settings.ipad_app_store_id), angular.element('html head meta[property="al:ios:app_store_id"]').attr("content", $rootScope.settings.ios_app_store_id), angular.element('html head meta[property="al:ipad:app_store_id"]').attr("content", $rootScope.settings.ipad_app_store_id), angular.element('html head meta[property="al:android:package"]').attr("content", $rootScope.settings.android_app_store_id), angular.element('html head meta[property="al:windows_phone:app_id"]').attr("content", $rootScope.settings.windows_phone_app_id), angular.element('html head meta[property="og:image"], html head meta[name="twitter:image:src"]').attr("content", ""), angular.element('html head meta[property="og:type"]').attr("content", "")
            }, model.init = function() {
                var promiseSettings = (ResolveService.promiseAuth, ResolveService.promiseSettings);
                promiseSettings.then(function(data) {
                    model.setMetaData()
                }), model.ConstSocialLogin = ConstSocialLogin, model.thumb = ConstThumb.user, model.ConstUserType = ConstUserType, model.ConstMembershipPlan = ConstMembershipPlan, $rootScope.$on("menu_show", function(event, data) {
                    $scope.menu_show = data
                }), $rootScope.$on("menu_dropdown", function(event, data) {
                    $scope.menu_dropdown = data
                })
            }, model.init(), model.isAuthenticated = function() {
                return $auth.isAuthenticated()
            }, model.logout = function() {
                $http.get(GENERAL_CONFIG.api_url + "/users/logout", {
                    headers: {
                        Authorization: "Bearer " + localStorage.userToken
                    }
                }), $rootScope.auth = {}, $auth.logout()
            }
        }])
    }(angular.module("Abs.common"));
var app = angular.module("Abs.Constant", []).constant("GENERAL_CONFIG", {
    api_url: "/api",
    preferredLanguage: "en"
}).constant("ConstUserType", {
    Admin: 1,
    User: 2,
    Doctor: 3
}).constant("ConstUserID", {
    Admin: 1
}).constant("ConstAttachment", {
    UserAvatar: 1,
    Photo: 2
}).constant("ConstMoreAction", {
    Inactive: 1,
    Active: 2,
    Delete: 3,
    Export: 4
}).constant("ConstBannedTypes", {
    SingleIPOrHostName: 1,
    IPRange: 2,
    RefererBlock: 3
}).constant("ConstBannedDurations", {
    Permanent: 1,
    Days: 2,
    Weeks: 3
}).constant("ConstGenders", {
    Male: 1,
    Female: 2
}).constant("ConstPaymentGateways", {
    PayPal: 1
}).constant("ConstTransactionTypes", {
    PlanFee: 1,
    SignupFee: 2
}).constant("ConstPaymentType", {
    PlanFee: 1,
    SignupFee: 2
}).constant("ConstRepeatDates", {
    Sunday: 1,
    Monday: 2,
    Tuesday: 3,
    Wednesday: 4,
    Thursday: 5,
    Friday: 6,
    Saturday: 7
}).constant("ConstAppointmentStatus", {
    PendingApproval: 1,
    Approved: 2,
    Closed: 3,
    Cancelled: 4,
    Rejected: 5,
    Expired: 6
}).constant("ConstPreferredPhone", {
    Cell: 1,
    Home: 2,
    Work: 3
}).constant("ConstMembershipPlan", {
    Gold: 1,
    Silver: 2,
    Bronze: 3,
    FreeSignup: 4
}).constant("ConstEmail", {
    AlretReminderMailFive: 1,
    AlretReminderMailThree: 2
}).constant("ConstNotificationType", {
    Both: 1,
    Email: 2,
    SMS: 3
}).constant("ConstPreferenceType", {
    Appointment: 1,
    Lunch: 2,
    Meeting: 3,
    PersonalWork: 4
}).constant("ConstUserReviewType", {
    VerifiedPatient: 1,
    GuestPatient: 2
}).constant("ConstSMSGatewayStatus", {
    Disable: 0,
    Enable: 1
}).constant("ConstWithdrawalStatuses", {
    Pending: 1,
    UnderProcess: 2,
    Rejected: 3,
    AmountTransferred: 4
}).constant("ConstSocialLogin", {
    User: 10,
    Facebook: 1,
    Twitter: 2,
    Google: 3,
    Github: 4
}).constant("ConstThumb", {
    user: {
        small: {
            width: 28,
            height: 28
        },
        medium: {
            width: 110,
            height: 110
        }
    }
}).constant("ConstPhotoThumb", {
    photo: {
        medium: {
            width: 250,
            height: 150
        },
        large: {
            width: 110,
            height: 110
        }
    }
});
! function(root, factory) {
    "use strict";
    "undefined" != typeof module && module.exports ? module.exports = factory(require("angular")) : "function" == typeof define && define.amd ? define(["angular"], factory) : factory(root.angular)
}(window, function(angular) {
    "use strict";
    angular.module("angucomplete-abs", []).directive("angucompleteAlt", ["$q", "$parse", "$http", "$sce", "$timeout", "$templateCache", "$interpolate", "$state", "$rootScope", "$filter", function($q, $parse, $http, $sce, $timeout, $templateCache, $interpolate, $state, $rootScope, $filter) {
        function link(scope, elem, attrs, ctrl) {
            function handleInputChange(newval, initial) {
                newval && ("object" == typeof newval ? (scope.searchStr = extractTitle(newval), callOrAssign({
                    originalObject: newval
                })) : "string" == typeof newval && newval.length > 0 ? scope.searchStr = newval : console && console.error && console.error("Tried to set " + (initial ? "initial" : "") + " value of angucomplete to", newval, "which is an invalid value"), handleRequired(!0))
            }

            function clickoutHandlerForDropdown(event) {
                mousedownOn = null, scope.hideResults(event), document.body.removeEventListener("click", clickoutHandlerForDropdown)
            }

            function ie8EventNormalizer(event) {
                return event.which ? event.which : event.keyCode
            }

            function callOrAssign(value) {
                "function" == typeof scope.selectedObject ? scope.selectedObject(value, scope.selectedObjectData) : scope.selectedObject = value, handleRequired(value ? !0 : !1)
            }

            function callFunctionOrIdentity(fn) {
                return function(data) {
                    return scope[fn] ? scope[fn](data) : data
                }
            }

            function setInputString(str) {
                callOrAssign({
                    originalObject: str
                }), scope.clearSelected && (scope.searchStr = null), clearResults()
            }

            function extractTitle(data) {
                return scope.titleField.split(",").map(function(field) {
                    return extractValue(data, field)
                }).join(" ")
            }

            function extractValue(obj, key) {
                var keys, result;
                if (key) {
                    keys = key.split("."), result = obj;
                    for (var i = 0; i < keys.length; i++) result = result[keys[i]]
                } else result = obj;
                return result
            }

            function findMatchString(target, str) {
                var result, matches, re;
                if (re = new RegExp(str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"), target) return target.match && target.replace || (target = target.toString()), matches = target.match(re), result = matches ? target.replace(re, '' + matches[0] + "") : target, $sce.trustAsHtml(result)
            }

            function handleRequired(valid) {
                scope.notEmpty = valid, validState = scope.searchStr, scope.fieldRequired && ctrl && scope.inputName && ctrl[scope.inputName].$setValidity(requiredClassName, valid)
            }

            function keyupHandler(event) {
                var which = ie8EventNormalizer(event);
                if (which !== KEY_LF && which !== KEY_RT)
                    if (which === KEY_UP || which === KEY_EN) event.preventDefault();
                    else if (which === KEY_DW) event.preventDefault(), !scope.showDropdown && scope.searchStr && scope.searchStr.length >= minlength && (initResults(), scope.searching = !0, searchTimerComplete(scope.searchStr));
                else if (which === KEY_ES) clearResults(), scope.$apply(function() {
                    inputField.val(scope.searchStr)
                });
                else {
                    if (0 === minlength && !scope.searchStr) return;
                    scope.searchStr && "" !== scope.searchStr ? scope.searchStr.length >= minlength && (initResults(), searchTimer && $timeout.cancel(searchTimer), scope.searching = !0, searchTimer = $timeout(function() {
                        searchTimerComplete(scope.searchStr)
                    }, scope.pause)) : scope.showDropdown = !1, validState && validState !== scope.searchStr && !scope.clearSelected && scope.$apply(function() {
                        callOrAssign()
                    })
                }
            }

            function handleOverrideSuggestions(event) {
                !scope.overrideSuggestions || scope.selectedObject && scope.selectedObject.originalObject === scope.searchStr || (event && event.preventDefault(), $timeout.cancel(searchTimer), cancelHttpRequest(), setInputString(scope.searchStr))
            }

            function dropdownRowOffsetHeight(row) {
                var css = getComputedStyle(row);
                return row.offsetHeight + parseInt(css.marginTop, 10) + parseInt(css.marginBottom, 10)
            }

            function dropdownHeight() {
                return dd.getBoundingClientRect().top + parseInt(getComputedStyle(dd).maxHeight, 10)
            }

            function dropdownRow() {
                return elem[0].querySelectorAll(".angucomplete-row")[scope.currentIndex]
            }

            function dropdownRowTop() {
                return dropdownRow().getBoundingClientRect().top - (dd.getBoundingClientRect().top + parseInt(getComputedStyle(dd).paddingTop, 10))
            }

            function dropdownScrollTopTo(offset) {
                dd.scrollTop = dd.scrollTop + offset
            }

            function updateInputField() {
                var current = scope.results[scope.currentIndex];
                scope.matchClass ? inputField.val(extractTitle(current.originalObject)) : inputField.val(current.title)
            }

            function keydownHandler(event) {
                var which = ie8EventNormalizer(event),
                    row = null,
                    rowTop = null;
                which === KEY_EN && scope.results ? (scope.currentIndex >= 0 && scope.currentIndex < scope.results.length ? (event.preventDefault(), scope.selectResult(scope.results[scope.currentIndex])) : (handleOverrideSuggestions(event), clearResults()), scope.$apply()) : which === KEY_DW && scope.results ? (event.preventDefault(), scope.currentIndex + 1 < scope.results.length && scope.showDropdown && (scope.$apply(function() {
                    scope.currentIndex++, updateInputField()
                }), isScrollOn && (row = dropdownRow(), dropdownHeight() < row.getBoundingClientRect().bottom && dropdownScrollTopTo(dropdownRowOffsetHeight(row))))) : which === KEY_UP && scope.results ? (event.preventDefault(), scope.currentIndex >= 1 ? (scope.$apply(function() {
                    scope.currentIndex--, updateInputField()
                }), isScrollOn && (rowTop = dropdownRowTop(), rowTop < 0 && dropdownScrollTopTo(rowTop - 1))) : 0 === scope.currentIndex && scope.$apply(function() {
                    scope.currentIndex = -1, inputField.val(scope.searchStr)
                })) : which === KEY_TAB ? scope.results && scope.results.length > 0 && scope.showDropdown ? scope.currentIndex === -1 && scope.overrideSuggestions ? handleOverrideSuggestions() : (scope.currentIndex === -1 && (scope.currentIndex = 0), scope.selectResult(scope.results[scope.currentIndex]), scope.$digest()) : scope.searchStr && scope.searchStr.length > 0 && handleOverrideSuggestions() : which === KEY_ES && event.preventDefault()
            }

            function httpSuccessCallbackGen(str) {
                return function(responseData, status, headers, config) {
                    status || headers || config || !responseData.data || (responseData = responseData.data), scope.searching = !1, processResults(extractValue(responseFormatter(responseData), scope.remoteUrlDataField), str)
                }
            }

            function httpErrorCallback(errorRes, status, headers, config) {
                scope.searching = httpCallInProgress, status || headers || config || (status = errorRes.status), 0 !== status && status !== -1 && (scope.remoteUrlErrorCallback ? scope.remoteUrlErrorCallback(errorRes, status, headers, config) : console && console.error && console.error("http error"))
            }

            function cancelHttpRequest() {
                httpCanceller && httpCanceller.resolve()
            }

            function getRemoteResults(str) {
                var params = {},
                    url = scope.remoteUrl + encodeURIComponent(str);
                scope.remoteUrlRequestFormatter && (params = {
                    params: scope.remoteUrlRequestFormatter(str)
                }, url = scope.remoteUrl), scope.remoteUrlRequestWithCredentials && (params.withCredentials = !0), cancelHttpRequest(), httpCanceller = $q.defer(), params.timeout = httpCanceller.promise, httpCallInProgress = !0, $http.get(url, params).then(httpSuccessCallbackGen(str))["catch"](httpErrorCallback)["finally"](function() {
                    httpCallInProgress = !1
                })
            }

            function getRemoteResultsWithCustomHandler(str) {
                cancelHttpRequest(), httpCanceller = $q.defer(), scope.remoteApiHandler(str, httpCanceller.promise).then(httpSuccessCallbackGen(str))["catch"](httpErrorCallback)
            }

            function clearResults() {
                scope.showDropdown = !1, scope.results = [], dd && (dd.scrollTop = 0)
            }

            function initResults() {
                scope.showDropdown = displaySearching, scope.currentIndex = scope.focusFirst ? 0 : -1, scope.results = []
            }

            function getLocalResults(str) {
                var i, match, s, value, searchFields = scope.searchFields.split(","),
                    matches = [];
                for ("undefined" != typeof scope.parseInput() && (str = scope.parseInput()(str)), i = 0; i < scope.localData.length; i++) {
                    for (match = !1, s = 0; s < searchFields.length; s++) value = extractValue(scope.localData[i], searchFields[s]) || "", match = match || value.toString().toLowerCase().indexOf(str.toString().toLowerCase()) >= 0;
                    match && (matches[matches.length] = scope.localData[i])
                }
                return matches
            }

            function checkExactMatch(result, obj, str) {
                if (!str) return !1;
                for (var key in obj)
                    if (obj[key].toLowerCase() === str.toLowerCase()) return scope.selectResult(result), !0;
                return !1
            }

            function searchTimerComplete(str) {
                !str || str.length < minlength || (scope.localData ? scope.$apply(function() {
                    var matches;
                    matches = "undefined" != typeof scope.localSearch() ? scope.localSearch()(str, scope.localData) : getLocalResults(str), scope.searching = !1, processResults(matches, str)
                }) : scope.remoteApiHandler ? getRemoteResultsWithCustomHandler(str) : getRemoteResults(str))
            }

            function processResults(responseData, str) {
                var i, description, image, text, formattedText, formattedDesc;
                if (responseData && responseData.length > 0)
                    for (scope.results = [], i = 0; i < responseData.length; i++) scope.titleField && "" !== scope.titleField && (text = formattedText = extractTitle(responseData[i])), description = "", scope.descriptionField && (description = formattedDesc = extractValue(responseData[i], scope.descriptionField)), image = "", scope.imageField && void 0 !== responseData[i][scope.imageField] && null !== responseData[i][scope.imageField] && (image = extractValue(responseData[i], scope.imageField)), scope.matchClass && (formattedText = findMatchString(text, str), formattedDesc = findMatchString(description, str)), scope.results[scope.results.length] = {
                        title: formattedText,
                        description: formattedDesc,
                        image: image,
                        originalObject: responseData[i]
                    };
                else scope.results = [];
                scope.autoMatch && 1 === scope.results.length && checkExactMatch(scope.results[0], {
                    title: text,
                    desc: description || ""
                }, scope.searchStr) ? scope.showDropdown = !1 : 0 !== scope.results.length || displayNoResults ? scope.showDropdown = !0 : scope.showDropdown = !1
            }

            function showAll() {
                scope.localData ? (scope.searching = !1, processResults(scope.localData, "")) : scope.remoteApiHandler ? (scope.searching = !0, getRemoteResultsWithCustomHandler("")) : (scope.searching = !0, getRemoteResults(""))
            }
            var hideTimer, responseFormatter, unbindInitialValue, displaySearching, displayNoResults, inputField = elem.find("input"),
                minlength = MIN_LENGTH,
                searchTimer = null,
                requiredClassName = REQUIRED_CLASS,
                validState = null,
                httpCanceller = null,
                httpCallInProgress = !1,
                dd = elem[0].querySelector(".angucomplete-dropdown"),
                isScrollOn = !1,
                mousedownOn = null;
            elem.on("mousedown", function(event) {
                event.target.id ? (mousedownOn = event.target.id, mousedownOn === scope.id + "_dropdown" && document.body.addEventListener("click", clickoutHandlerForDropdown)) : mousedownOn = event.target.className
            }), scope.currentIndex = scope.focusFirst ? 0 : null, scope.searching = !1, unbindInitialValue = scope.$watch("initialValue", function(newval) {
                newval && (unbindInitialValue(), handleInputChange(newval, !0))
            }), scope.$watch("fieldRequired", function(newval, oldval) {
                newval !== oldval && (newval ? handleRequired(validState && scope.currentIndex !== -1 ? !0 : !1) : ctrl[scope.inputName].$setValidity(requiredClassName, !0))
            }), scope.$on("angucomplete-alt:clearInput", function(event, elementId) {
                elementId && elementId !== scope.id || (scope.searchStr = null, callOrAssign(), handleRequired(!1), clearResults())
            }), scope.$on("angucomplete-alt:changeInput", function(event, elementId, newval) {
                elementId && elementId === scope.id && handleInputChange(newval)
            }), scope.onFocusHandler = function() {
                scope.focusIn && scope.focusIn(), 0 !== minlength || scope.searchStr && 0 !== scope.searchStr.length || (scope.currentIndex = scope.focusFirst ? 0 : scope.currentIndex, scope.showDropdown = !0, showAll())
            }, scope.hideResults = function() {
                mousedownOn && (mousedownOn === scope.id + "_dropdown" || mousedownOn.indexOf("angucomplete") >= 0) ? mousedownOn = null : (hideTimer = $timeout(function() {
                    clearResults(), scope.$apply(function() {
                        scope.searchStr && scope.searchStr.length > 0 && inputField.val(scope.searchStr)
                    })
                }, BLUR_TIMEOUT), cancelHttpRequest(), scope.focusOut && scope.focusOut(), scope.overrideSuggestions && scope.searchStr && scope.searchStr.length > 0 && scope.currentIndex === -1 && handleOverrideSuggestions())
            }, scope.resetHideResults = function() {
                hideTimer && $timeout.cancel(hideTimer)
            }, scope.hoverRow = function(index) {
                scope.currentIndex = index
            }, scope.selectResult = function(result) {
                scope.matchClass && (result.title = extractTitle(result.originalObject), result.description = extractValue(result.originalObject, scope.descriptionField)), scope.clearSelected ? scope.searchStr = null : scope.searchStr = result.title, callOrAssign(result), clearResults(), $rootScope.doctorSpecialtyId = result.description.specialtyId, angular.isDefined(result.description.username) && location.replace("#/doctor/" + result.description.username)
            }, scope.inputChangeHandler = function(str) {
                return str.length < minlength ? (cancelHttpRequest(), clearResults()) : 0 === str.length && 0 === minlength && showAll(), scope.inputChanged && (str = scope.inputChanged(str)), str
            }, scope.fieldRequiredClass && "" !== scope.fieldRequiredClass && (requiredClassName = scope.fieldRequiredClass), scope.minlength && "" !== scope.minlength && (minlength = parseInt(scope.minlength, 10)), scope.pause || (scope.pause = PAUSE), scope.clearSelected || (scope.clearSelected = !1), scope.overrideSuggestions || (scope.overrideSuggestions = !1), scope.fieldRequired && ctrl && handleRequired(scope.initialValue ? !0 : !1), scope.inputType = attrs.type ? attrs.type : "text", scope.textSearching = attrs.textSearching ? attrs.textSearching : TEXT_SEARCHING, scope.textNoResults = attrs.textNoResults ? attrs.textNoResults : TEXT_NORESULTS, displaySearching = "false" !== scope.textSearching, displayNoResults = "false" !== scope.textNoResults, scope.maxlength = attrs.maxlength ? attrs.maxlength : MAX_LENGTH, inputField.on("keydown", keydownHandler), inputField.on("keyup compositionend", keyupHandler), responseFormatter = callFunctionOrIdentity("remoteUrlResponseFormatter"), $timeout(function() {
                var css = getComputedStyle(dd);
                isScrollOn = css.maxHeight && "auto" === css.overflowY
            })
        }
        var KEY_DW = 40,
            KEY_RT = 39,
            KEY_UP = 38,
            KEY_LF = 37,
            KEY_ES = 27,
            KEY_EN = 13,
            KEY_TAB = 9,
            MIN_LENGTH = 3,
            MAX_LENGTH = 524288,
            PAUSE = 500,
            BLUR_TIMEOUT = 200,
            REQUIRED_CLASS = "autocomplete-required",
            TEXT_SEARCHING = $filter("translate")("Searching..."),
            TEXT_NORESULTS = $filter("translate")("No results found"),
            TEMPLATE_URL = "/angucomplete-alt/index.html";
        return $templateCache.put(TEMPLATE_URL, '

{{placeholder}}








{{ result.title }}

{{result.description}}
'), {
            restrict: "EA",
            require: "^?form",
            scope: {
                selectedObject: "=",
                selectedObjectData: "=",
                disableInput: "=",
                initialValue: "=",
                localData: "=",
                localSearch: "&",
                remoteUrlRequestFormatter: "=",
                remoteUrlRequestWithCredentials: "@",
                remoteUrlResponseFormatter: "=",
                remoteUrlErrorCallback: "=",
                remoteApiHandler: "=",
                id: "@",
                type: "@",
                placeholder: "@",
                textSearching: "@",
                textNoResults: "@",
                remoteUrl: "@",
                remoteUrlDataField: "@",
                titleField: "@",
                descriptionField: "@",
                imageField: "@",
                inputClass: "@",
                pause: "@",
                searchFields: "@",
                minlength: "@",
                matchClass: "@",
                clearSelected: "@",
                overrideSuggestions: "@",
                fieldRequired: "=",
                fieldRequiredClass: "@",
                inputChanged: "=",
                autoMatch: "@",
                focusOut: "&",
                focusIn: "&",
                fieldTabindex: "@",
                inputName: "@",
                focusFirst: "@",
                parseInput: "&"
            },
            templateUrl: function(element, attrs) {
                return attrs.templateUrl || TEMPLATE_URL
            },
            compile: function(tElement) {
                var startSym = $interpolate.startSymbol(),
                    endSym = $interpolate.endSymbol();
                if ("{{" !== startSym || "}}" !== endSym) {
                    var interpolatedHtml = tElement.html().replace(/\{\{/g, startSym).replace(/\}\}/g, endSym);
                    tElement.html(interpolatedHtml)
                }
                return link
            }
        }
    }])
}),
function(module) {
    module.directive("locationDirections", function() {
        return {
            restrict: "E",
            link: function(scope, element, attrs) {
                angular.isDefined(attrs.wayPoints) && (scope.wayPoints = attrs.wayPoints)
            },
            controller: ["$scope", "$element", function($scope, $element) {
                $scope.origin = "toronto", $scope.destination = "ottawa", $scope.mapChanged = function() {
                    $scope.origin = $scope.originBox, $scope.destination = $scope.destinationBox, alert($scope.origin + "-----" + $scope.destination)
                }
            }],
            templateUrl: "CustomDirectives/Maps/locationDirections.tpl.html"
        }
    })
}(angular.module("Abs.Maps", ["ngMap"])),
function(module) {
    module.controller("HomeController", ["$filter", "$rootScope", "$location", "$scope", "$timeout", "Cities", "Specialties", "SpecialtyDiseas", "Insurances", "BestRated", "featuredDoctors", "SearchAll", function($filter, $rootScope, $location, $scope, $timeout, Cities, Specialties, SpecialtyDiseas, Insurances, BestRated, featuredDoctors, SearchAll) {
        function getContentList() {
            Cities.citiesliList().$promise.then(function(cityResponse) {
                $scope.citiesliLists = cityResponse.data
            }), Specialties.specialtyliList().$promise.then(function(specialtyResponse) {
                $scope.specialtyliLists = specialtyResponse.specialties
            }), SpecialtyDiseas.specialtyDiseasliList().$promise.then(function(specialtyDiseasResponse) {
                $scope.specialtyDiseasliLists = specialtyDiseasResponse.data
            }), Insurances.get().$promise.then(function(response) {
                $scope.insurances = response.insurance_companies
            }), BestRated.get().$promise.then(function(response) {
                $scope.bestRatedDoctors = response.data
            })
        }

        function citiesView(cityId) {
            $location.path("/search").search({
                is_online_booking: localStorage.ischeckboxchecked,
                city_id: cityId
            })
        }

        function specialtyDiseasView(splDisId) {
            $location.path("/search").search({
                is_online_booking: localStorage.ischeckboxchecked,
                specialty_disease_id: splDisId
            })
        }

        function specialtyView(splId) {
            $location.path("/search").search({
                is_online_booking: localStorage.ischeckboxchecked,
                specialty_id: splId
            })
        }
        var model = this;
        model.setMetaData = function() {
            var pageTitle = $filter("translate")("Home"),
                fullUrl = $location.absUrl(),
                appUrl = $rootScope.settings.scheme_name + ":/" + $location.url();
            angular.element('html head meta[property="og:title"], html head meta[name="twitter:title"]').attr("content", $rootScope.settings["site.name"] + " | " + pageTitle), angular.element('meta[property="al:ios:url"], meta[property="al:ipad:url"], meta[property="al:android:url"], meta[property="al:windows_phone:url"], html head meta[name="twitter:app:url:iphone"], html head meta[name="twitter:app:url:ipad"], html head meta[name="twitter:app:url:googleplay"]').attr("content", appUrl), angular.element('meta[property="og:url"]').attr("content", fullUrl)
        }, model.init = function() {
            model.setMetaData(), $rootScope.pageTitle = $rootScope.settings["site.name"] + " | " + $filter("translate")("Home")
        }, model.init(), model.citiesView = citiesView, model.specialtyView = specialtyView, model.specialtyDiseasView = specialtyDiseasView, model.form_specialties = null, model.form_city = null, model.form_insurances = null, model.featuredDoctorsLength = !1, $scope.indexSearch = [], model.homeSearchKey = function() {
            SearchAll.get().$promise.then(function(response) {
                angular.isDefined(response.doctor) && ($scope.indexSearch = response.doctor, $scope.autocomplete = [], angular.forEach($scope.indexSearch, function(value, key) {
                    $scope.autocomplete.push({
                        id: value.id,
                        name: value.name,
                        image: value.image,
                        username: value.username
                    }), $scope.autocomplete.push({
                        id: value.id,
                        name: value.caption,
                        image: null,
                        specialtyId: value.specialty
                    })
                }))
            })
        }, model.homeSearchKey(), model.homesearch = function() {
            angular.isDefined($rootScope.doctorSpecialtyId) && (model.form_specialties = $rootScope.doctorSpecialtyId), model.form_specialties || model.form_city || model.form_insurances ? angular.isDefined(model.form_specialties) && null != model.form_specialties ? $location.path("/search").search({
                is_online_booking: !0,
                specialty_id: model.form_specialties,
                city_id: model.form_city,
                insurance_id: model.form_insurances
            }) : $location.path("/search").search({
                is_online_booking: localStorage.ischeckboxchecked,
                specialty_id: model.form_specialties,
                city_id: model.form_city,
                insurance_id: model.form_insurances
            }) : $location.path("/search").search({
                is_online_booking: localStorage.ischeckboxchecked
            })
        }, getContentList(), $scope.localSearch = function(str) {
            var matches = [];
            return $scope.people.forEach(function(person) {
                var fullName = person.firstName + " " + person.surname;
                (person.firstName.toLowerCase().indexOf(str.toString().toLowerCase()) >= 0 || person.surname.toLowerCase().indexOf(str.toString().toLowerCase()) >= 0 || fullName.toLowerCase().indexOf(str.toString().toLowerCase()) >= 0) && matches.push(person)
            }), matches
        }, void 0 === localStorage.ischeckboxchecked && (localStorage.ischeckboxchecked = !0), model.ischeckboxchecked = localStorage.ischeckboxchecked, $scope.checkboxcheck = function() {
            model.ischeckboxchecked === !0 ? localStorage.ischeckboxchecked = !0 : localStorage.ischeckboxchecked = !1
        }, model.pageRedirect = function(redirectLink) {
            console.log(redirectLink), $location.path("/search").search(redirectLink)
        }
    }])
}(angular.module("Abs.home")),
function(module) {
    module.factory("Home", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/languages", {}, {
            get: {
                method: "GET"
            }
        })
    }]), module.factory("Cities", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/cities", {}, {
            get: {
                method: "GET"
            }
        })
    }]), module.factory("Specialties", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/specialties", {}, {
            get: {
                method: "GET"
            }
        })
    }]), module.factory("SpecialtyDiseas", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/specialty_diseases", {}, {
            get: {
                method: "GET"
            }
        })
    }]), module.factory("Insurances", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/insurances", {}, {
            get: {
                method: "GET"
            }
        })
    }]), module.factory("BestRated", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/users", {}, {
            get: {
                method: "GET"
            }
        })
    }]), module.factory("featuredDoctors", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/users?is_featured=1", {}, {
            getDoctors: {
                method: "GET",
                params: {
                    limit: "@limit"
                }
            }
        })
    }])
}(angular.module("Abs.home")),
function(module) {
    function UserMessagesController($state, $rootScope, $scope, $filter, $location, $timeout, Flash, SweetAlert, ConstantMessages, $stateParams, MessagesService, SentMessagesService, ItemMessagesService, UserLists, MessageDelete, ConstUserType) {
        function pageTitle(title) {
            $rootScope.pageTitle = $rootScope.settings["site.name"] + " | " + $filter("translate")(title)
        }

        function flashMessage(message, classname) {
            Flash.set($filter("translate")(message), classname, !0)
        }

        function getMessages(param) {
            MessagesService.getall(param).$promise.then(function(response) {
                angular.isDefined(response) && (model.receivedMessages = response.data, model.dataLength = response.data.length > 0, model._metadata = response.meta.pagination, model.currentPage = param.page, model.maxSize = 5, model.messageType = "received")
            })
        }

        function getSentMessages(param) {
            SentMessagesService.getall(param).$promise.then(function(response) {
                angular.isDefined(response) && (model.sentMessages = response.data, model.dataLength = response.data.length > 0, model._metadata = response.meta.pagination, model.currentPage = param.page, model.maxSize = 5, model.messageType = "sent")
            })
        }

        function userlists() {
            UserLists.get().$promise.then(function(response) {
                angular.isDefined(response) && (model.userLists = response.data)
            })
        }

        function composeMessage(data) {
            MessagesService.compose(data).$promise.then(function(response) {
                angular.isDefined(response) && (response.Success ? ($timeout(function() {
                    $state.go(ConstantMessages.state_Message, {}, {
                        reload: !0
                    })
                }, 500), flashMessage(response.Success, "success")) : flashMessage("Please try again", "error"))
            })
        }

        function replyMessage(data) {
            MessagesService.reply(data).$promise.then(function(response) {
                angular.isDefined(response) && (response.Success ? ($timeout(function() {
                    $state.go(ConstantMessages.state_Message, {}, {
                        reload: !0
                    })
                }, 500), flashMessage(response.Success, "success")) : flashMessage("Please try again", "error"))
            })
        }

        function fnDeletemessage(data) {
            SweetAlert.swal({
                title: "Are you sure to Delete?",
                text: "",
                type: "warning",
                showCancelButton: !0,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes",
                cancelButtonText: "No",
                closeOnConfirm: !0,
                closeOnCancel: !0
            }, function(isConfirm) {
                isConfirm && MessageDelete["delete"](data).$promise.then(function(response) {
                    flashMessage(response.Success, "success"), $timeout(function() {
                        $state.go(ConstantMessages.state_Message, {}, {
                            reload: !0
                        })
                    }, 500)
                }, function(error) {
                    flashMessage("Messages could not be deleted", "error")
                })
            })
        }
        var model = this;
        model.init = function() {
            model.currentPage = void 0 !== model.currentPage ? parseInt(model.currentPage) : 1, model.messageIds = {}, model.receivedMessages = {}, model.sentMessages = {}, model.ConstUserType = ConstUserType
        }, model.init();
        var param = {
            page: model.currentPage
        };
        $state.current.name === ConstantMessages.state_Message ? (pageTitle("Messages"), getMessages(param), model.message_reply = function(valid, toUserId) {
            valid && (model.reply_message.to_user_id = toUserId, model.reply_message.message_id = $scope.parentMessageId, replyMessage(model.reply_message))
        }) : $state.current.name === ConstantMessages.state_SentMessage ? (pageTitle("Sent Messages"), getSentMessages(param)) : $state.current.name === ConstantMessages.state_ComposeMessage ? (pageTitle("Compose Message"), userlists(), model.message_compose = function(valid) {
            valid && composeMessage(model.compose_message)
        }) : $state.go(ConstantMessages.state_Message), model.messageDelete = function() {
            angular.isDefined(model.messageIds.id) ? ("received" == model.messageType ? model.messageIds.message_folder_id = "1" : model.messageIds.message_folder_id = "2", fnDeletemessage(model.messageIds)) : alert("Please select any message to delete")
        }, $scope.$watch("model.receivedMessages", function() {
            for (var newtext = "", i = 0; i < model.receivedMessages.length; i++) model.receivedMessages[i].selected === !0 && (newtext += model.receivedMessages[i].id + ",");
            model.messageIds.id = newtext
        }, !0), $scope.$watch("model.sentMessages", function() {
            for (var sentmsg = "", j = 0; j < model.sentMessages.length; j++) model.sentMessages[j].selected === !0 && (sentmsg += model.sentMessages[j].id + ",");
            model.messageIds.id = sentmsg
        }, !0), model.paginate = function() {
            model.currentPage = parseInt(model.currentPage);
            var param = {
                page: model.currentPage
            };
            "received" == model.messageType ? getMessages(param) : getSentMessages(param), $("html, body").stop(!0, !0).animate({
                scrollTop: 200
            }, 600)
        }, model.ShowHide = function(value) {
            messageHide = angular.element(document.getElementsByClassName("js-answers" + value)), messageHide.hasClass("hide") ? messageHide.removeClass("hide") : messageHide.addClass("hide")
        }, model.messageReplyBox = function(value) {
            replyBoxHide = angular.element(document.getElementsByClassName("js-replybox" + value)), replyBoxHide.hasClass("hide") ? (replyBoxHide.removeClass("hide"), $scope.parentMessageId = value) : replyBoxHide.addClass("hide")
        }
    }
    module.controller("UserMessagesController", UserMessagesController), UserMessagesController.$inject = ["$state", "$rootScope", "$scope", "$filter", "$location", "$timeout", "Flash", "SweetAlert", "ConstantMessages", "$stateParams", "MessagesService", "SentMessagesService", "ItemMessagesService", "UserLists", "MessageDelete", "ConstUserType"]
}(angular.module("Abs.usermessage")),
function(module) {
    module.factory("MessagesService", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/messages/:id/:type", {}, {
            getall: {
                method: "GET"
            },
            post: {
                method: "POST"
            },
            compose: {
                method: "POST",
                params: {
                    type: "user"
                }
            },
            reply: {
                method: "POST",
                params: {
                    id: "@message_id",
                    type: "reply"
                }
            },
            getbyid: {
                method: "GET",
                id: "@id"
            },
            "delete": {
                method: "DELETE"
            }
        })
    }]), module.factory("SentMessagesService", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/sentMessages", {}, {
            getall: {
                method: "GET"
            }
        })
    }]), module.factory("ItemMessagesService", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/item_messages/:item_id", {}, {
            get: {
                method: "GET",
                params: {
                    item_id: "@item_id"
                }
            }
        })
    }]), module.factory("PrivateNoteService", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/private_notes", {}, {
            post: {
                method: "POST"
            }
        })
    }]), module.factory("UserLists", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/users/messages", {}, {
            get: {
                method: "GET"
            }
        })
    }]), module.factory("MessageDelete", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/messages", {}, {
            "delete": {
                method: "DELETE"
            }
        })
    }])
}(angular.module("Abs.usermessage")),
function(module) {
    module.controller("SearchController", ["$location", "$scope", "$window", "$rootScope", "$filter", "$state", "$timeout", "Languages", "Cities", "Specialties", "SpecialtyDiseas", "Gender", "Insurances", "SearchList", "WeekList", "SearchAll", "GetSpecialty", function($location, $scope, $window, $rootScope, $filter, $state, $timeout, Languages, Cities, Specialties, SpecialtyDiseas, Gender, Insurances, SearchList, WeekList, SearchAll, GetSpecialty) {
        function dateAdd() {
            $scope.today = $scope.dateAddFunction(0, $scope.ViewSlot), $scope.day2 = $scope.dateAddFunction(1, $scope.ViewSlot), $scope.day3 = $scope.dateAddFunction(2, $scope.ViewSlot), $scope.day4 = $scope.dateAddFunction(3, $scope.ViewSlot)
        }

        function addDays(theDate, days) {
            return new Date(theDate.getTime() + 24 * days * 60 * 60 * 1e3)
        }

        function statusBarShow() {
            $("#search-loading-div").attr("style", "display:block"), $("#loading").attr("style", "display:block"), $("#search-result-div").attr("style", "display:none")
        }

        function statusBarHide() {
            $("#search-loading-div").attr("style", "display:none"), $("#loading").attr("style", "display:none"), $("#search-result-div").attr("style", "display:block")
        }
        var model = this;
        model.setMetaData = function() {
            var pageTitle = $filter("translate")("Doctor Search"),
                fullUrl = $location.absUrl(),
                appUrl = $rootScope.settings.scheme_name + ":/" + $location.url();
            angular.element('html head meta[property="og:title"], html head meta[name="twitter:title"]').attr("content", $rootScope.settings["site.name"] + " | " + pageTitle), angular.element('meta[property="al:ios:url"], meta[property="al:ipad:url"], meta[property="al:android:url"], meta[property="al:windows_phone:url"], html head meta[name="twitter:app:url:iphone"], html head meta[name="twitter:app:url:ipad"], html head meta[name="twitter:app:url:googleplay"]').attr("content", appUrl), angular.element('meta[property="og:url"]').attr("content", fullUrl)
        }, model.init = function() {
            model.pageRedirect = pageRedirect, $scope.searchRecordShow = 1, model.siteCurrency = $rootScope.settings["site.currency"]
        }, model.homeSearchKey = function() {
            SearchAll.get().$promise.then(function(response) {
                angular.isDefined(response.doctor) && ($scope.indexSearch = response.doctor, $scope.autocomplete = [], angular.forEach($scope.indexSearch, function(value, key) {
                    $scope.autocomplete.push({
                        id: value.id,
                        name: value.name,
                        image: value.image,
                        username: value.username
                    }), $scope.autocomplete.push({
                        id: value.id,
                        name: value.caption,
                        image: null,
                        specialtyId: value.specialty
                    })
                }))
            })
        }, model.homeSearchKey(), $timeout(function() {
            $("body").on("click", ".js-share-open", function(e) {
                $(".js-social-share").removeClass("share-open"), $("#js-social-share" + $(this).attr("data-index")).addClass("share-open")
            }), $("body").on("blur", ".js-share-open", function(e) {
                $(".js-social-share").removeClass("share-open")
            })
        }, 2e3), model.formFilter = function(type, value) {
            1 === parseInt(type) ? 0 === parseInt(value) ? model.gender_id = void 0 : model.gender_id = parseInt(value) : 2 === parseInt(type) && (0 === parseInt(value) ? model.appointment = void 0 : 1 === parseInt(value) ? model.appointment = "today" : 2 === parseInt(value) ? model.appointment = "threeday" : model.appointment = void 0), model.refinesearch()
        }, (angular.isDefined($rootScope.doctorSpecialtyId) || angular.isDefined($location.search().specialty_id)) && (model.specialty_id = isNaN($rootScope.doctorSpecialtyId) ? $location.search().specialty_id : $rootScope.doctorSpecialtyId, GetSpecialty.get({
            id: model.specialty_id
        }).$promise.then(function(response) {
            model.specialtyDetail = response
        })), model.refinesearch = function() {
            angular.isDefined($rootScope.doctorSpecialtyId) && (model.specialty_id = $rootScope.doctorSpecialtyId, GetSpecialty.get({
                id: model.specialty_id
            }).$promise.then(function(response) {
                model.specialtyDetail = response, $rootScope.doctorSpecialtyId = ""
            })), $state.go("search", {
                specialty_id: isNaN(model.specialty_id) ? void 0 : model.specialty_id,
                city_id: isNaN(model.city_id) ? void 0 : model.city_id,
                specialty_disease_id: isNaN(model.specialty_disease_id) ? void 0 : model.specialty_disease_id,
                doctor: model.doctor,
                language_id: isNaN(model.language_id) ? void 0 : model.language_id,
                gender_id: isNaN(model.gender_id) ? void 0 : model.gender_id,
                insurance_id: isNaN(model.insurance_id) ? void 0 : model.insurance_id,
                appointment: model.appointment
            })
        }, $scope.init = function() {
            model.siteCurrency = $rootScope.settings["site.currency"], $scope.loadMore = function(userId) {
                userAppointmentClass = "showmore_" + userId, appointmetHide = angular.element(document.getElementsByClassName(userAppointmentClass)), appointmetHide.hasClass("hide") && (appointmetHide.removeClass("hide"), appointmetHide.addClass("show")), showMoreClass = "showmore_btn_" + userId, showLessClass = "showless_btn_" + userId, moreShow = angular.element(document.getElementsByClassName(showMoreClass)), moreShow.hasClass("show") && (moreShow.removeClass("show"), moreShow.addClass("hide")), lessShow = angular.element(document.getElementsByClassName(showLessClass)), lessShow.hasClass("hide") && (lessShow.addClass("show"), lessShow.removeClass("hide"))
            }, $scope.showLess = function(userId) {
                userAppointmentClass = "showmore_" + userId, appointmetHide = angular.element(document.getElementsByClassName(userAppointmentClass)), appointmetHide.hasClass("show") && (appointmetHide.removeClass("show"), appointmetHide.addClass("hide")), showMoreClass = "showmore_btn_" + userId, showLessClass = "showless_btn_" + userId, moreShow = angular.element(document.getElementsByClassName(showMoreClass)), moreShow.hasClass("hide") && (moreShow.removeClass("hide"), moreShow.addClass("show")), lessShow = angular.element(document.getElementsByClassName(showLessClass)), lessShow.hasClass("show") && (lessShow.addClass("hide"), lessShow.removeClass("show"))
            }, $scope.dateAddFunction = function(days, multipleCount) {
                $scope.positions = [], parseInt(multipleCount) > 1 ? $scope.addDays = 4 * (parseInt(multipleCount) - 1) + parseInt(days) : $scope.addDays = parseInt(days);
                var displayDate = "",
                    curr_date = "",
                    curr_month = "",
                    curr_year = "",
                    dayShortNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                return "0" === parseInt(days) && "1" === parseInt(multipleCount) ? (displayDate = new Date, curr_date = displayDate.getDate(), curr_month = displayDate.getMonth(), curr_year = displayDate.getFullYear(), dateValue = {
                    day: dayShortNames[parseInt(displayDate.getDay())],
                    date: $filter("date")(new Date, "MM/dd"),
                    dateFormatted: curr_date + "-" + monthShortNames[curr_month] + "-" + curr_year
                }, dateValue) : "0" === parseInt(days) && parseInt(multipleCount) > 1 ? (days = 4 * (parseInt(multipleCount) - 1), displayDate = addDays(new Date, days), curr_date = displayDate.getDate(), curr_month = displayDate.getMonth(), curr_year = displayDate.getFullYear(), dateValue = {
                    day: dayShortNames[parseInt(displayDate.getDay())],
                    date: $filter("date")(addDays(new Date, days), "MM/dd"),
                    dateFormatted: curr_date + "-" + monthShortNames[curr_month] + "-" + curr_year
                }, dateValue) : (displayDate = addDays(new Date, $scope.addDays), curr_date = displayDate.getDate(), curr_month = displayDate.getMonth(), curr_year = displayDate.getFullYear(), dateValue = {
                    day: dayShortNames[parseInt(displayDate.getDay())],
                    date: $filter("date")(displayDate, "MM/dd"),
                    dateFormatted: curr_date + "-" + monthShortNames[curr_month] + "-" + curr_year
                }, dateValue)
            }, dateAdd(), model.specialty_id = angular.isDefined($state.params.specialty_id) ? parseInt($state.params.specialty_id) : void 0, model.insurance_id = angular.isDefined($state.params.insurance_id) ? parseInt($state.params.insurance_id) : void 0, model.city_id = angular.isDefined($state.params.city_id) ? parseInt($state.params.city_id) : void 0, model.specialty_disease_id = angular.isDefined($state.params.specialty_disease_id) ? parseInt($state.params.specialty_disease_id) : void 0, model.language_id = angular.isDefined($state.params.language_id) ? parseInt($state.params.language_id) : void 0, model.doctor = angular.isDefined($state.params.doctor) ? $state.params.doctor : void 0, model.gender_id = angular.isDefined($state.params.gender_id) ? parseInt($state.params.gender_id) : void 0, model.appointment = angular.isDefined($state.params.appointment) ? $state.params.appointment : void 0
        }, SearchList.searchList({
            is_online_booking: localStorage.ischeckboxchecked,
            city_id: $location.search().city_id,
            gender_id: $location.search().gender_id,
            specialty_disease_id: $location.search().specialty_disease_id,
            language_id: $location.search().language_id,
            insurance_id: $location.search().insurance_id,
            specialty_id: $location.search().specialty_id,
            page: $location.search().page,
            doctor: $location.search().doctor,
            appointment: model.appointment
        }).$promise.then(function(searchResponse) {
            if ($scope.searchLists = searchResponse.user_profiles[0], void 0 !== $scope.searchLists) {
                var searchListsLength = Object.keys($scope.searchLists);
                $scope.searchRecordShow = searchListsLength.length > 0 ? 1 : 0, $scope.PaginateValues = searchResponse.paginate_values, $scope.userIds = searchResponse.weekids, $scope.ViewSlot = searchResponse.viewslot, $scope.appointmentLoadMore = searchResponse.userLoadMore, $rootScope.doctorSpecialtyId = ""
            } else $scope.searchRecordShow = 0;
            Languages.languageList({}).$promise.then(function(response) {
                $scope.languagesLists = response.data
            }), Cities.citiesliList({}).$promise.then(function(cityResponse) {
                $scope.citiesliLists = cityResponse.data
            }), Specialties.specialtyliList({}).$promise.then(function(specialtyResponse) {
                $scope.specialtyliLists = specialtyResponse.specialties
            }), SpecialtyDiseas.specialtyDiseasliList({}).$promise.then(function(specialtyDiseasResponse) {
                $scope.specialtyDiseasliLists = specialtyDiseasResponse.data
            }), Gender.genderList({}).$promise.then(function(genderResponse) {
                $scope.genderLists = genderResponse.data
            }), Insurances.get().$promise.then(function(response) {
                $scope.insurances = response.insurance_companies
            }), currentUrl = $location.absUrl(), paginateUrlSplited = currentUrl.split("#/"), paginateUrlSplited[1].indexOf("&page=") > 0 || paginateUrlSplited[1].indexOf("?page=") > 0 ? paginateUrlSplited[1].indexOf("&page=") > 0 ? (removePage = paginateUrlSplited[1].split("&page="), $scope.paginateUrl = "#/" + removePage[0]) : (removePage = paginateUrlSplited[1].split("?page="), $scope.paginateUrl = "#/" + removePage[0] + "?") : (questRemove = paginateUrlSplited[1].split("?"), questRemove.length > 1 ? $scope.paginateUrl = "#/" + paginateUrlSplited[1] : $scope.paginateUrl = "#/" + paginateUrlSplited[1] + "?"), void 0 !== $scope.searchLists && angular.forEach($scope.searchLists, function(value, key) {
                var cityValue = "";
                "undefined" != typeof value.data.city && (cityValue = "," + value.data.city.data.name + ",");
                var postal_codeValue = "";
                "undefined" != typeof value.data.postal_code && (postal_codeValue = "," + value.data.postal_code + ",");
                var countryValue = "";
                if ("undefined" != typeof value.data.country && (countryValue = "," + value.data.country.data.name + ","), "undefined" != typeof value.data.latitude && "undefined" != typeof value.data.longitude && null != value.data.latitude && null != value.data.longitude) {
                    var formattedAddress = postal_codeValue + cityValue + countryValue,
                        formattedAddressResult = formattedAddress.substring(1, formattedAddress.length - 1).replace(/,,/g, ",");
                    $scope.positions.push({
                        id: key,
                        username: value.data.User.data.username,
                        doctor_name: value.data.display_name,
                        avatar: value.data.User.data.attachmentable.data.thumb.medium,
                        address1: value.data.address,
                        address2: formattedAddressResult,
                        rating: value.starRating,
                        lat: value.data.latitude,
                        lon: value.data.longitude
                    })
                }
            }), $scope.mappositions = $scope.positions, $scope.cenLat = 33.8621, $scope.cenLong = -84.6879, angular.isDefined($scope.mappositions[0]) && ($scope.cenLat = $scope.mappositions[0].lat, $scope.cenLong = $scope.mappositions[0].lon)
        }), $scope.init(), model.pageRedirect = function(linkvalue) {
            var fulUrl = $location.absUrl(),
                splitUrl = fulUrl.split("?");
            window.location.href = splitUrl[0] + "?" + linkvalue
        }, $scope.nextWeek = function() {
            statusBarShow(), $scope.ViewSlot = parseInt($scope.ViewSlot) + 1, WeekList.get({
                viewslot: $scope.ViewSlot,
                userids: $scope.userIds
            }).$promise.then(function(searchResponse) {
                $scope.searchLists = searchResponse.user_profiles[0], $scope.ViewSlot = searchResponse.viewslot, statusBarHide()
            }), dateAdd()
        }, $scope.prevWeek = function() {
            statusBarShow(), "1" == $scope.ViewSlot ? $scope.ViewSlot = 1 : $scope.ViewSlot = parseInt($scope.ViewSlot) - 1, WeekList.get({
                viewslot: $scope.ViewSlot,
                userids: $scope.userIds
            }).$promise.then(function(searchResponse) {
                $scope.searchLists = searchResponse.user_profiles[0], $scope.ViewSlot = searchResponse.viewslot, statusBarHide()
            }), dateAdd()
        }, $scope.showDetail = function(e, doctorInfo) {
            $scope.doctorInfo = doctorInfo, $scope.map.showInfoWindow("doctor-info", doctorInfo.id)
        }, $(document).ready(function() {
            $(window).scroll(function() {
                $(document).scrollTop() > 613 && $(window).width() > 768 ? $(".search-result-header").addClass("search-header-fixed") : $(".search-result-header").removeClass("search-header-fixed")
            })
        })
    }]), module.directive("convertToNumber", function() {
        return {
            require: "ngModel",
            link: function(scope, element, attrs, ngModel) {
                ngModel.$parsers.push(function(val) {
                    return val ? parseInt(val, 10) : null
                }), ngModel.$formatters.push(function(val) {
                    return val ? "" + val : ""
                })
            }
        }
    })
}(angular.module("Abs.search")),
function(module) {
    module.factory("Languages", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/languages", {}, {
            languageList: {
                method: "GET"
            }
        })
    }]), module.factory("SearchAll", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/searchall", {}, {
            get: {
                method: "GET"
            }
        })
    }]), module.factory("Cities", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/cities", {}, {
            citiesliList: {
                method: "GET"
            }
        })
    }]), module.factory("Specialties", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/specialties", {}, {
            specialtyliList: {
                method: "GET"
            }
        })
    }]), module.factory("SpecialtyDiseas", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/specialty_diseases", {}, {
            specialtyDiseasliList: {
                method: "GET"
            }
        })
    }]), module.factory("Gender", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/genders", {}, {
            genderList: {
                method: "GET"
            }
        })
    }]), module.factory("Insurances", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/insurances", {}, {
            get: {
                method: "GET"
            }
        })
    }]), module.factory("SearchList", ["$resource", "GENERAL_CONFIG", "$location", function($resource, GENERAL_CONFIG, $location) {
        return $resource(GENERAL_CONFIG.api_url + "/search", {}, {
            searchList: {
                method: "GET"
            }
        })
    }]), module.factory("WeekList", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/search/weeklist/:userids/:viewslot", {
            userids: "@userids",
            viewslot: "@viewslot"
        }, {
            get: {
                method: "GET"
            }
        })
    }])
}(angular.module("Abs.search")),
function(module) {
    module.controller("AcitivitiesController", ["$state", "$scope", "Flash", "$filter", "$rootScope", "$location", "ConstUserType", "ActivityFactory", "ConstAppointmentStatus", function($state, $scope, Flash, $filter, $rootScope, $location, ConstUserType, ActivityFactory, ConstAppointmentStatus) {
        var model = this;
        model.init = function() {}, model.init(), model.ConstUserType = ConstUserType, ActivityFactory.get().$promise.then(function(response) {
            $scope.activities = response.data, model.ConstAppointmentStatus = ConstAppointmentStatus
        })
    }])
}(angular.module("Abs.user")),
function(module) {
    function AuthorizationController($rootScope, $scope, $state, $filter, Flash, $timeout, ConstUserType, SweetAlert, Authorization) {
        function flashMessage(message, classname) {
            Flash.set($filter("translate")(message), classname, !0)
        }

        function addAuthorized(data) {
            Authorization.post(data).$promise.then(function(response) {
                angular.isDefined(response) && (response.Success ? ($timeout(function() {
                    $state.go("Authorization", {}, {
                        reload: !0
                    })
                }, 500), flashMessage(response.Success, "success")) : flashMessage(response.Failure, "error"))
            })
        }

        function getAuthorizeddoctor(param) {
            Authorization.get(param).$promise.then(function(response) {
                angular.isDefined(response) && (model.doctorsLists = response, model.dataLength = response.data.length > 0, model._metadata = response.meta.pagination, model.currentPage = param.page, model.maxSize = 5)
            })
        }

        function deleteAuthorizeddoctor(id) {
            SweetAlert.swal({
                title: "Are you sure to Delete?",
                text: "",
                type: "warning",
                showCancelButton: !0,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes",
                cancelButtonText: "No",
                closeOnConfirm: !0,
                closeOnCancel: !0
            }, function(isConfirm) {
                Authorization["delete"]({
                    id: id
                }).$promise.then(function(response) {
                    angular.isDefined(response) && (response.Success ? ($timeout(function() {
                        $state.go("Authorization", {}, {
                            reload: !0
                        })
                    }, 500), flashMessage("Authorization doctor deleted", "success")) : flashMessage("Authorization doctor could not be deleted", "error"))
                })
            })
        }
        var model = this;
        if (model.init = function() {
                $rootScope.pageTitle = $rootScope.settings["site.name"] + " | Authorized Doctor"
            }, model.init(), model.ConstUserType = ConstUserType, "Authorization" == $state.current.name) {
            model.currentPage = void 0 !== model.currentPage ? parseInt(model.currentPage) : 1;
            var param = {
                page: model.currentPage
            };
            getAuthorizeddoctor(param)
        }
        model.addDoctor = function(valid) {
            valid && addAuthorized(model.authorizedDoctor)
        }, model.removeDoctor = function(id) {
            angular.isDefined(id) && deleteAuthorizeddoctor(id)
        }, model.paginate = function() {
            model.currentPage = parseInt(model.currentPage);
            var param = {
                page: model.currentPage
            };
            getAuthorizeddoctor(param), $("html, body").stop(!0, !0).animate({
                scrollTop: 400
            }, 600)
        }
    }
    module.controller("AuthorizationController", AuthorizationController), AuthorizationController.$inject = ["$rootScope", "$scope", "$state", "$filter", "Flash", "$timeout", "ConstUserType", "SweetAlert", "Authorization"]
}(angular.module("Abs.user")),
function(module) {
    module.controller("ChangePasswordController", ["$state", "$auth", "$scope", "Flash", "$http", "$filter", "$rootScope", "$location", "ConstUserType", "ChangePWd", function($state, $auth, $scope, Flash, $http, $filter, $rootScope, $location, ConstUserType, ChangePWd) {
        var model = this;
        $scope.user = {}, $scope.setMetaData = function() {
            var pageTitle = $filter("translate")("Change Password"),
                fullUrl = $location.absUrl(),
                appUrl = $rootScope.settings.scheme_name + ":/" + $location.url();
            angular.element('html head meta[property="og:title"], html head meta[name="twitter:title"]').attr("content", $rootScope.settings["site.name"] + " | " + pageTitle), angular.element('meta[property="al:ios:url"], meta[property="al:ipad:url"], meta[property="al:android:url"], meta[property="al:windows_phone:url"], html head meta[name="twitter:app:url:iphone"], html head meta[name="twitter:app:url:ipad"], html head meta[name="twitter:app:url:googleplay"]').attr("content", appUrl), angular.element('meta[property="og:url"]').attr("content", fullUrl)
        }, $scope.init = function() {
            $scope.setMetaData(), $rootScope.pageTitle = $rootScope.settings["site.name"] + " | " + $filter("translate")("Change Password")
        }, $scope.init(), model.ConstUserType = ConstUserType, $scope.change_password = function(changePasswordForm, user) {
            $scope.disableButton = !0, changePasswordForm && ChangePWd.put({
                id: $rootScope.auth.id
            }, user, function(response) {
                $translate = $filter("translate")("Password changed successfully"), Flash.set($translate, "success", !0), $rootScope.auth = {}, $auth.logout(), $state.go("login")
            }, function(error) {
                Flash.set($filter("translate")(error.data.message), "error", !1)
            })
        }
    }])
}(angular.module("Abs.user")),
function(module) {
    module.controller("DashboardController", ["$state", "$scope", "$http", "Flash", "AuthFactory", "GENERAL_CONFIG", "$filter", "$rootScope", "ConstThumb", "ConstSocialLogin", "ConstUserType", function($state, $scope, $http, Flash, AuthFactory, GENERAL_CONFIG, $filter, $rootScope, ConstThumb, ConstSocialLogin, ConstUserType) {
        var model = this;
        model.init = function() {
            $rootScope.pageTitle = $rootScope.settings["site.name"] + " | " + $filter("translate")("User Dashboard"), AuthFactory.fetch({}).$promise.then(function(response) {
                $scope.user = response
            }), model.ConstSocialLogin = ConstSocialLogin, model.thumb = ConstThumb.user, model.ConstUserType = ConstUserType
        }, model.init()
    }])
}(angular.module("Abs.user")),
function(module) {
    function DemographicInformationController($rootScope, $scope, $state, $filter, Flash, $timeout, ConstUserType, SweetAlert, DemographicInformation, UserProfilesFactory) {
        function flashMessage(message, classname) {
            Flash.set($filter("translate")(message), classname, !0)
        }

        function update_demographicinfo(data) {
            console.log(data), DemographicInformation.post(data).$promise.then(function(response) {
                angular.isDefined(response) && (response.Success ? ($timeout(function() {
                    $state.go("DemographicInformation", {}, {
                        reload: !0
                    })
                }, 500), flashMessage(response.Success, "success")) : flashMessage(response.Failure, "error"))
            })
        }

        function getDemographicinfo() {
            UserProfilesFactory.get().$promise.then(function(response) {
                if (angular.isDefined(response)) {
                    model.demographicinformation = response, model.demographicInformation.postal_code = response.postal_code, model.demographicInformation.preferred_lang = parseInt(response.preferred_lang);
                    for (var race_ids = response.race.split(","), i = 0; i < race_ids.length; i++) race_ids[i] = parseInt(race_ids[i], 10);
                    model.racevalue = {
                        race_ids: race_ids
                    };
                    for (var ethic_ids = response.ethnicity.split(","), j = 0; j < ethic_ids.length; j++) ethic_ids[j] = parseInt(ethic_ids[j], 10);
                    model.ethic = {
                        ethic_ids: ethic_ids
                    }
                }
            })
        }
        var model = this;
        model.init = function() {
            $rootScope.pageTitle = $rootScope.settings["site.name"] + " | Demographic information", model.demographicInformation = {}
        }, model.init(), model.ConstUserType = ConstUserType, "DemographicInformation" == $state.current.name && (model.races = [{
            id: 1,
            name: "American Indian or Alaska Native"
        }, {
            id: 2,
            name: "Asian"
        }, {
            id: 3,
            name: "Native Hawaiian"
        }, {
            id: 4,
            name: "Other Pacific Islander"
        }, {
            id: 5,
            name: "White"
        }, {
            id: 6,
            name: "Black or African American"
        }, {
            id: 7,
            name: "Other"
        }, {
            id: 8,
            name: "Decline to Answer"
        }], model.ethnic = [{
            id: 1,
            name: "Hispanic or Latino"
        }, {
            id: 2,
            name: "Non Hispanic or Latino"
        }, {
            id: 3,
            name: "Decline to Answer"
        }], model.languages = [{
            value: 42,
            option: "English"
        }, {
            value: 149,
            option: "Spanish"
        }], getDemographicinfo()), model.race_check = function(value, checked) {
            var idx = model.racevalue.race_ids.indexOf(value);
            idx >= 0 && !checked && model.racevalue.race_ids.splice(idx, 1), idx < 0 && checked && model.racevalue.race_ids.push(value)
        }, model.ethnicity_check = function(value, checked) {
            var idj = model.ethic.ethic_ids.indexOf(value);
            idj >= 0 && !checked && model.ethic.ethic_ids.splice(idj, 1), idj < 0 && checked && model.ethic.ethic_ids.push(value)
        }, model.addDemographic = function() {
            model.demographicInformation.race = model.racevalue.race_ids.toString(), model.demographicInformation.ethnicity = model.ethic.ethic_ids.toString(), update_demographicinfo(model.demographicInformation)
        }
    }
    module.controller("DemographicInformationController", DemographicInformationController), DemographicInformationController.$inject = ["$rootScope", "$scope", "$state", "$filter", "Flash", "$timeout", "ConstUserType", "SweetAlert", "DemographicInformation", "UserProfilesFactory"]
}(angular.module("Abs.user")),
function(module) {
    module.controller("FamilyFriendController", ["$rootScope", "$scope", "$state", "ConstUserType", "FamilyFriends", "Genders", "City", "States", "Country", "Flash", "$timeout", "$filter", "$anchorScroll", "SweetAlert", function($rootScope, $scope, $state, ConstUserType, FamilyFriends, Genders, City, States, Country, Flash, $timeout, $filter, $anchorScroll, SweetAlert) {
        function flashMessage(message, classname) {
            Flash.set($filter("translate")(message), classname, !0)
        }

        function getFamilyFriends(param) {
            FamilyFriends.get(param).$promise.then(function(response) {
                angular.isDefined(response.data) && ($scope.typeid = "1", $scope.noRecords = response.data.length > 0, console.log(response.data), $scope.friendsLists = response.data, $scope._metadata = response.meta.pagination, $scope.currentPage = response.meta.pagination.current_page, $scope.maxSize = 5)
            })
        }
        var model = this;
        if ($scope.noRecords = !1, model.familyfriends = [], model.dateBlockeBefore = $filter("date")(new Date, "yyyy-MM-dd"), Genders.get().$promise.then(function(response) {
                $scope.genderArray = response.data
            }), City.cityList({}).$promise.then(function(response) {
                $scope.cityArray = response.data
            }), States.stateList({}).$promise.then(function(response) {
                $scope.stateArray = response.data
            }), Country.countryList({}).$promise.then(function(response) {
                $scope.countryArray = response.data
            }), model.ConstUserType = ConstUserType, "FamilyFriends" == $state.current.name) {
            $scope.currentPage = void 0 !== $scope.currentPage ? parseInt($scope.currentPage) : 1;
            var param = {
                page: $scope.currentPage
            };
            getFamilyFriends(param)
        }
        $scope.paginate = function(currentPage) {
            var param = {
                page: currentPage
            };
            getFamilyFriends(param), $("html, body").stop(!0, !0).animate({
                scrollTop: 1200
            }, 600)
        }, model.friendsAdd = function(isvalid) {
            isvalid && ("1" == $scope.typeid ? (model.familyFriends.is_active = 1, FamilyFriends.add(model.familyFriends).$promise.then(function(response) {
                angular.isDefined(response) && (response.Success ? ($timeout(function() {
                    $state.go("FamilyFriends", {}, {
                        reload: !0})}, 500), flashMessage("FamilyFriend added successfully", "success")) : flashMessage("Please try again", "error"))})) : (model.familyFriends.id = $scope.friendId, FamilyFriends.put(model.familyFriends).$promise.then(function(response) {
                angular.isDefined(response) && (response.Success ? ($timeout(function() {$state.go("FamilyFriends", {}, {reload: !0})}, 500), flashMessage("FamilyFriend Updated successfully", "success")) : flashMessage("Please try again", "error"))})))}, $scope.editFamilyfriend = function(value) {FamilyFriends.getbyid({id: value}).$promise.then(function(response) {
                angular.isDefined(response) && (model.familyFriends = response, $scope.typeid = "2", $scope.friendId = response.id, $anchorScroll("friendtop"))})}, $scope.removeFamilyfriend = function(value) {SweetAlert.swal({title: "Are you sure to delete the record",text: "FamilyFriends record deleted",type: "warning",showCancelButton: !0,
                confirmButtonColor: "#DD6B55",confirmButtonText: "Confirm",cancelButtonText: "No",closeOnConfirm: !0,closeOnCancel: !0}, function(isConfirm) {isConfirm && FamilyFriends["delete"]({id: value}).$promise.then(function(response) {angular.isDefined(response) && (response.Success ? ($timeout(function() {$state.go("FamilyFriends", {}, {reload: !0})}, 500), flashMessage("FamilyFriend deleted successfully", "success")) : flashMessage("Please try again", "error"))})})}}]), module.filter("capitalize", function() {return function(input, scope) {return null != input && (input = input.toLowerCase()), input.substring(0, 1).toUpperCase() + input.substring(1)}}), app.filter("ageFilter", function() {return function(input) {var ageDifMs = Date.now() - new Date(input),ageDate = new Date(ageDifMs);return Math.abs(ageDate.getUTCFullYear() - 1970)}})}(angular.module("Abs.user")),function(module) {module.controller("ForgotPasswordController", ["$state", "$window", "$scope", "$rootScope", "$location", "Flash", "$filter", "ForgotPasswordFactory", function($state, $window, $scope, $rootScope, $location, Flash, $filter, ForgotPasswordFactory) {$scope.user = {}, $rootScope.pageTitle = $rootScope.settings["site.name"] + " | " + $filter("translate")("Forgot Password"), $scope.forgot_password = function(forgotPassword, user) {$scope.user = user, $scope.disableButton = !0, forgotPassword && ForgotPasswordFactory.forgot_password($scope.user, function(response) {Flash.set($filter("translate")("Password changed Successfully. New password is sent in mail."), "success", !0), $state.go("login")})["catch"](function(error) {Flash.set($filter("translate")("Password could not be changed"), "error", !1), $scope.disableButton = !1})}}])}(angular.module("Abs.user")),function(module) {module.controller("ListYourPracticeController", ["$auth", "$state", "$scope", "Flash", "$rootScope", "$filter", "AuthFactory", "$location", "Genders", "City", "Specialties", "Language", function($auth, $state, $scope, Flash, $rootScope, $filter, AuthFactory, $location, Genders, City, Specialties, Language) {var model = this;model.setMetaData = function() {var pageTitle = $filter("translate")("Register"),fullUrl = $location.absUrl(),appUrl = $rootScope.settings.scheme_name + ":/" + $location.url();angular.element('html head meta[property="og:title"], html head meta[name="twitter:title"]').attr("content", $rootScope.settings["site.name"] + " | " + pageTitle), angular.element('meta[property="al:ios:url"], meta[property="al:ipad:url"], meta[property="al:android:url"], meta[property="al:windows_phone:url"], html head meta[name="twitter:app:url:iphone"], html head meta[name="twitter:app:url:ipad"], html head meta[name="twitter:app:url:googleplay"]').attr("content", appUrl), angular.element('meta[property="og:url"]').attr("content", fullUrl)}, model.init = function() {model.setMetaData(), $rootScope.pageTitle = $rootScope.settings["site.name"] + " | " + $filter("translate")("Register"), angular.isDefined($state.params.signin) && $scope.gotoDiv("joinlationmedica"), $scope.breakpointSlick = [{breakpoint: 1199,settings: {slidesToShow: 1,slidesToScroll: 1,infinite: !0,arrows: !0}}]}, model.init(), Specialties.specialtyliList({}).$promise.then(function(response) {$rootScope.specialtyliLists = response.specialties}), Language.languageList({}).$promise.then(function(response) {$rootScope.languageLists = response.data}), Genders.genderList({}).$promise.then(function(genderResponse){$rootScope.genderLists = genderResponse.data}), City.cityList({}).$promise.then(function(response) {$rootScope.cityArray = response.data}), model.signup = function(isvalid) {if (isvalid) {var credentials = {first_name: model.first_name,last_name: model.last_name,username: model.username,email: model.email,password:model.password,confirm_password: model.confirm_password,phone: model.phone,specialty_id: model.specialty_id,postal_code: model.postal_code,is_agree_terms_conditions: model.terms_conditions};$auth.signup(credentials).then(function(response) {response.data.token ? ($auth.setToken(response.data.token), AuthFactory.fetch().$promise.then(function(user) {localStorage.auth = user, $state.go("MyCalender")})) : $state.go("login"), Flash.set($filter("translate")(response.data.Success), "success", !0)})["catch"](function(error) {model.emailErr = "", model.nameErr = "", model.passwordErr = "", model.confirmPasswordErr = "";var errorResponse = error.data.errors;angular.isDefined(errorResponse) ? (errorResponse.email && (model.emailErr = $filter("translate")(errorResponse.email[0])), errorResponse.username && (model.nameErr = $filter("translate")(errorResponse.username[0])), errorResponse.password && (model.passwordErr = $filter("translate")(errorResponse.password[0])), errorResponse.confirm_password && (model.confirmPasswordErr = $filter("translate")(errorResponse.confirm_password[0])), Flash.set($filter("translate")(error.data.message), "error", !1)) : Flash.set($filter("translate")(error.data.message), "error", !1)})}}, model.search = function() {model.specialty_id || model.city_id ? $location.path("/search").search({is_online_booking: !0,specialty_id: model.specialty_id,city_id: model.city_id}) : $location.path("/search").search({is_online_booking: !0})}}])}(angular.module("Abs.user")),function(module) {module.controller("UserLoginController", ["$auth", "$state", "Flash", "$rootScope", "$filter", "AuthFactory", "$location", "$scope", function($auth, $state, Flash, $rootScope, $filter, AuthFactory, $location, $scope) {var model = this;model.setMetaData = function() {var pageTitle = $filter("translate")("Login"),fullUrl = $location.absUrl(),appUrl = $rootScope.settings.scheme_name + ":/"+$location.url();angular.element('html head meta[property="og:title"], html head meta[name="twitter:title"]').attr("content", $rootScope.settings["site.name"] + " | " + pageTitle), angular.element('meta[property="al:ios:url"], meta[property="al:ipad:url"], meta[property="al:android:url"], meta[property="al:windows_phone:url"], html head meta[name="twitter:app:url:iphone"], html head meta[name="twitter:app:url:ipad"], html head meta[name="twitter:app:url:googleplay"]').attr("content", appUrl), angular.element('meta[property="og:url"]').attr("content", fullUrl), $auth.isAuthenticated() && $location.path("/appointments/all")}, model.init = function() {model.setMetaData(), $rootScope.pageTitle = $rootScope.settings["site.name"] + " | " + $filter("translate")("Login")}, model.init(), model.login = function(isvalid) {if (isvalid) {var credentials = {email: model.email,password: model.password};$auth.login(credentials).then(function(response) {response.data.userToken && ($translate = $filter("translate")("Login successfully"), Flash.set($translate, "success", !0), AuthFactory.fetch().$promise.then(function(user) {if ($rootScope.auth = user, localStorage.bookingUrl) {var redirectPath = localStorage.bookingUrl;localStorage.removeItem("bookingUrl"), $location.path(redirectPath)} else $state.go("MyAppointments")}))})["catch"](function(error) { Flash.set($filter("translate")("Sorry, login failed. Your email or password are incorrect."), "error", !1)})}}}])
}(angular.module("Abs.user")),function(module) {function MedicalTeamController($scope, $rootScope, $state, SweetAlert, Flash, $filter, $timeout, MedicalTeam, $uibModal, $uibModalStack, Specialties, Cities) {function flashMessage(message, classname) {Flash.set($filter("translate")(message), classname, !0)}function pageTitle(title) {$rootScope.pageTitle = $rootScope.settings["site.name"] + " | " + $filter("translate")(title)}function getmedicalTeamlist() { MedicalTeam.get().$promise.then(function(response) {angular.isDefined(response) && (model.medicalTeam = response.data, model.dataLength = response.data.length > 0)})}function addDoctorList(data) {MedicalTeam.post(data).$promise.then(function(response) {angular.isDefined(response) && (response.Success ? ($rootScope.closeModal(), $state.go("MedicalTeamList", {}, {reload: !0}), Flash.set(response.Success, "success")) : response.message ? Flash.set(response.message, "error") : Flash.set("Please try again", "error"))})} function fnDeleteWorkPlace(id) {SweetAlert.swal({title: "Are you sure to Delete?",text: "",type: "warning",showCancelButton: !0,confirmButtonColor: "#DD6B55",confirmButtonText: "Yes",cancelButtonText: "No",closeOnConfirm: !0,closeOnCancel: !0}, function(isConfirm) {isConfirm && MedicalTeam["delete"]({id: id}).$promise.then(function(response) {flashMessage("Team list deleted successfully", "success"),$timeout(function() {$state.go("MedicalTeamList", {}, {reload: !0})}, 500)}, function(error) {flashMessage("Team list could not be deleted", "error"), $state.go("MedicalTeamList", {}, {reload: !0})})})}var model = this;$scope.userId = $rootScope.auth.id, model.init = function() {pageTitle("Medical Team"), getmedicalTeamlist()}, model.init(), $scope.deletedoctortlist = function(id) {angular.isDefined(id) && fnDeleteWorkPlace(id)}, $scope.showDoctorList = function() {$scope.modalInstance = $uibModal.open({templateUrl: "User/doctor_filter.tpl.html",animation: !0, controller: ["$scope", "$rootScope", "$stateParams", "$filter", "$state", "$uibModal", "userId", "Specialties", "Cities", function($scope, $rootScope, $stateParams, $filter, $state, $uibModal, userId, Specialties, Cities) {var model = this;Cities.citiesliList().$promise.then(function(cityResponse) {$scope.citiesliLists = cityResponse.data}), Specialties.specialtyliList().$promise.then(function(specialtyResponse) {$scope.specialtyliLists = specialtyResponse.specialties}), model.search_list_data = function($valid) {$valid && (model.add_list.user_id = $rootScope.auth.id, console.log(model.add_list), addDoctorList(model.add_list))}}],controllerAs: "model",resolve: {userId: function() {return model.userId}},size: "lg"})}, $rootScope.closeModal = function() {$uibModalStack.dismissAll()}}module.controller("MedicalTeamController", MedicalTeamController), MedicalTeamController.$inject = ["$scope", "$rootScope", "$state", "SweetAlert", "Flash", "$filter", "$timeout", "MedicalTeam", "$uibModal", "$uibModalStack", "Specialties", "Cities"]}(angular.module("Abs.user")),function(module) {module.controller("CalenderController", ["$scope", "$state", "$filter", "$rootScope", "$location", "$compile", "$timeout", "Flash", "SweetAlert", "$uibModal", "$uibModalStack", "calenderEvents", "calenderEventsDoctor", "DoctorReviewCheck", "appointmentchangeStatus", "calenderCancelToday", "patientNote", "changeStatus", "RemainderService", "ConstUserType", function($scope, $state, $filter, $rootScope, $location, $compile, $timeout, Flash, SweetAlert, $uibModal, $uibModalStack,calenderEvents, calenderEventsDoctor, DoctorReviewCheck, appointmentchangeStatus, calenderCancelToday, patientNote, changeStatus, RemainderService, ConstUserType) {function eventBuild(response) {var eventsLists = [];return response.appointmentEvent && (appointmentEvent = response.appointmentEvent, eventsLists = $scope.setEvent(eventsLists, appointmentEvent)), response.leaveEvent ? (leaveEvent = response.leaveEvent, eventsLists = $scope.setEvent(eventsLists, leaveEvent)) : eventsLists = "",eventsLists}var model = this;$scope.month = moment().format("MMM"), model.calendarView = "month", model.viewDate = new Date, model.isCellOpen = !0, $scope.dt = new Date, $scope.options = {showWeeks: !0}, $scope.$watch("dt", function(newValue, oldValue) {$scope.getDateWiseAppointment()}), $scope.$watch("model.calendarView", function(currentView) {$timeout(function() {"day" === currentView && (classElement = document.getElementsByClassName("day-highlight"), classElement.length > 0 && angular.forEach(classElement, function(value, key) {var spans = value.getElementsByTagName("span"),span4th = spans[3].innerHTML,pixel = span4th.replace(":", "") + "px";value.style.top = pixel}))}, 1e3)}), model.init = function() {$rootScope.pageTitle = $rootScope.settings["site.name"] + " | " + $filter("translate")("My Calender"), model.ConstUserType = ConstUserType}, $scope.getDateWiseAppointment = function() {var params = {date: $filter("date")($scope.dt, "yyyy-MM-dd")};$scope.calendarDatas = "",$scope.dataLength = !0, calenderEventsDoctor.get(params).$promise.then(function(response) {angular.isDefined(response.status) && "success" == response.status && response.data.length > 0 ? ($scope.calendarDatas = response.data, $scope.workplaceChange = $scope.calendarDatas[0].workplace.id) : ($scope.calendarEmpty = response.message, $scope.dataLength = !1)})}, $scope.cancelTodayAppointment = function(appointment_date) {var params = {date: appointment_date};SweetAlert.swal({
                title: "Are you sure to Cancel today Appointments?",
                text: "",
                type: "warning",
                showCancelButton: !0,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Confirm",
                cancelButtonText: "No",
                closeOnConfirm: !0,
                closeOnCancel: !0
            }, function(isConfirm) {
                isConfirm && calenderCancelToday.get(params).$promise.then(function(response) {
                    $state.go("MyCalender", {}, {
                        reload: !0
                    }), Flash.set($filter("translate")(response.Success), "success", !0)
                })
            })
        }, $scope.doctorNote = function(appointmentId) {
            $scope.modalInstance = $uibModal.open({
                templateUrl: "User/doctor_note.tpl.html",
                animation: !0,
                controller: ["$scope", "$rootScope", "$stateParams", "$filter", "$state", "$uibModal", function($scope, $rootScope, $stateParams, $filter, $state, $uibModal) {
                    var model = this;
                    $scope.note_add = function($valid) {
                        $valid && (model.remainder.appointment_id = appointmentId, patientNote.post(model.remainder).$promise.then(function(response) {
                            $rootScope.notecloseModal(), $state.go("MyCalender", {}, {
                                reload: !0
                            }), Flash.set($filter("translate")(response.Success), "success", !0)
                        }))
                    }
                }],
                controllerAs: "model",
                size: "lg"
            })
        }, $rootScope.notecloseModal = function() {
            $uibModalStack.dismissAll()
        }, $scope.showAction = function(index) {
            var myEl = angular.element(document.querySelector("#tgle-" + index)),
                multiRemove = angular.element(document.getElementsByClassName("js-action-remove"));
            myEl.hasClass("disp-block") ? myEl.removeClass("disp-block") : (multiRemove.removeClass("disp-block"), myEl.addClass("disp-block"))
        }, $scope.showNoteModal = function(appointmentId) {
            $scope.modalInstance = $uibModal.open({
                templateUrl: "Appointments/appointment_note.tpl.html",
                animation: !0,
                controller: ["$scope", "$rootScope", "$stateParams", "$filter", "$state", "$uibModal", function($scope, $rootScope, $stateParams, $filter, $state, $uibModal) {
                    var model = this;
                    $scope.remainder_note_add = function($valid) {
                        $valid && (model.remainder.doctor_note = model.remainder.reminder_text, model.remainder.doctor_id = $rootScope.auth.id, model.remainder.appointment_id = appointmentId, patientNote.post(model.remainder).$promise.then(function(response) {
                            response.Success ? ($rootScope.notecloseModal(), Flash.set($filter("translate")(response.Success), "success", !0), $state.go("MyCalender", {}, {
                                reload: !0
                            })) : Flash.set($filter("translate")(response.Failed), "error")
                        }))
                    }
                }],
                controllerAs: "model",
                size: "lg"
            })
        }, $scope.deleteStatus = function(status) {
            "confirm" == status ? titleText = "Are you sure to Confirm this Appointment?" : "decline" == status ? titleText = "Are you sure to Decline this Appointment?" : "cancel" == status && (titleText = "Are you sure to Cancel this Appointment?"), SweetAlert.swal({
                title: titleText,
                text: "",
                type: "warning",
                showCancelButton: !0,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Confirm",
                cancelButtonText: "No",
                closeOnConfirm: !0,
                closeOnCancel: !0
            }, function(isConfirm) {
                isConfirm && changeStatus.get({
                    id: $state.params.id,
                    apt_status: status
                }).$promise.then(function(response) {
                    Flash.set($filter("translate")(response.Success), "success", !0), $location.path("/appointments/all")
                })
            })
        }, $scope.getEvent = function(params) {
            calenderEvents.get(params).$promise.then(function(response) {
                model.events = eventBuild(response), $scope.prevMonth = response.prevMonth, $scope.nextMonth = response.nextMonth
            })
        }, $scope.prev = function() {
            $scope.getEvent({
                month: $scope.prevMonth
            })
        }, $scope.today = function() {
            $scope.getEvent({})
        }, $scope.next = function() {
            $scope.getEvent({
                month: $scope.nextMonth
            })
        }, model.eventClicked = function(event) {
            $location.path("/appointment/" + event.id)
        }, model.toggle = function($event, field, event) {
            $event.preventDefault(), $event.stopPropagation(), event[field] = !event[field]
        }, Date.prototype.subHours = function(h) {
            return this.setHours(this.getHours() - h), this
        }, $scope.setEvent = function(eventsLists, appointmentEvent) {
            return $.each(appointmentEvent, function(index) {
                eventsList = {
                    title: appointmentEvent[index].first_name + " " + appointmentEvent[index].last_name,
                    type: "info",
                    startsAt: moment(appointmentEvent[index].appointment_date + " " + appointmentEvent[index].appointment_time).toDate(),
                    draggable: !1,
                    resizable: !1,
                    editable: !1,
                    deletable: !1,
                    id: appointmentEvent[index].id
                }, eventsLists.push(eventsList)
            }), eventsLists
        }, $scope.appointdelete = function(status, id) {
            "confirm" == status ? titleText = "Are you sure to Confirm this Appointment?" : "decline" == status ? titleText = "Are you sure to Decline this Appointment?" : "cancel" == status && (titleText = "Are you sure to Cancel this Appointment?"), SweetAlert.swal({
                title: titleText,
                text: "",
                type: "warning",
                showCancelButton: !0,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Confirm",
                cancelButtonText: "No",
                closeOnConfirm: !0,
                closeOnCancel: !0
            }, function(isConfirm) {
                isConfirm && appointmentchangeStatus.get({
                    id: id,
                    apt_status: status
                }).$promise.then(function(response) {
                    angular.isDefined(response) ? ($state.go("MyCalender", {}, {
                        reload: !0
                    }), Flash.set($filter("translate")(response.Success), "success", !0)) : ($state.go("MyCalender", {}, {
                        reload: !0
                    }), Flash.set($filter("translate")(response.Success), "error", !0))
                })
            })
        }, model.init()
    }])
}(angular.module("Abs.user")),
function(module) {
    module.controller("InsuranceController", ["$scope", "$filter", "$rootScope", "$state", "Flash", "MyInsurances", "ConstUserType", "UserInsurances", "DoctorInsurances", "SweetAlert", "$timeout", function($scope, $filter, $rootScope, $state, Flash, MyInsurances, ConstUserType, UserInsurances, DoctorInsurances, SweetAlert, $timeout) {
        function getdoctorinsurance(param) {
            DoctorInsurances.get(param).$promise.then(function(response) {
                angular.isDefined(response) && (model.insuranceLists = response, model.dataLength = response.data.length > 0, model._metadata = response.meta.pagination, model.currentPage = param.page, model.maxSize = 5)
            })
        }

        function deleteInsurance(id) {
            SweetAlert.swal({
                title: "Are you sure to Delete?",
                text: "",
                type: "warning",
                showCancelButton: !0,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes",
                cancelButtonText: "No",
                closeOnConfirm: !0,
                closeOnCancel: !0
            }, function(isConfirm) {
                isConfirm && DoctorInsurances["delete"]({
                    id: id
                }).$promise.then(function(response) {
                    angular.isDefined(response) && (response.Success ? (Flash.set($filter("translate")(response.Success), "success", !0), $state.reload("MyInsurances")) : (Flash.set($filter("translate")(response.Success), "success", !0), $state.reload("MyInsurances")))
                })
            })
        }
        var model = this;
        model.init = function() {
            $rootScope.pageTitle = $rootScope.settings["site.name"] + " | " + $filter("translate")("My Insurances"), MyInsurances.get({}).$promise.then(function(response) {
                $scope.insurances = response.insurances, UserInsurances.get().$promise.then(function(response) {
                    angular.isDefined(response.data[0]) ? ($timeout(function() {
                        model.insurance = response.data[0]
                    }, 500), model.type = "put") : model.type = "post"
                })
            }), model.ConstUserType = ConstUserType, model.currentPage = void 0 !== model.currentPage ? parseInt(model.currentPage) : 1;
            var param = {
                page: model.currentPage
            };
            getdoctorinsurance(param)
        }, model.init(), model.myInsurance = function() {
            "post" == model.type ? UserInsurances.post(model.insurance).$promise.then(function(response) {
                Flash.set($filter("translate")(response.Success), "success", !0), $state.reload("MyInsurances")
            }) : UserInsurances.put({
                id: model.insurance.id
            }, model.insurance).$promise.then(function(response) {
                Flash.set($filter("translate")(response.Success), "success", !0), $state.reload("MyInsurances")
            })
        }, model.DoctorInsurance = function(valid) {
            valid && DoctorInsurances.post(model.insurancecount).$promise.then(function(response) {
                Flash.set($filter("translate")(response.Success), "success", !0), $state.reload("MyInsurances")
            })
        }, model.removeInsurance = function(id) {
            angular.isDefined(id) && deleteInsurance(id)
        }, model.paginate = function() {
            model.currentPage = parseInt(model.currentPage);
            var param = {
                page: model.currentPage
            };
            getdoctorinsurance(param), $("html, body").stop(!0, !0).animate({
                scrollTop: 400
            }, 600)
        }
    }])
}(angular.module("Abs.user")),
function(module) {
    module.controller("LanguageController", ["$filter", "$rootScope", "$scope", "$state", "Flash", "MyLanguages", function($filter, $rootScope, $scope, $state, Flash, MyLanguages) {
        var model = this;
        model.init = function() {
            $rootScope.pageTitle = $rootScope.settings["site.name"] + " | " + $filter("translate")("My Languages"), MyLanguages.get({}).$promise.then(function(response) {
                $scope.languages = response.languages;
                for (var ids = response.user_language_id.split(","), i = 0; i < ids.length; i++) ids[i] = parseInt(ids[i], 10);
                $scope.user = {
                    language_ids: ids
                }
            })
        }, model.init(), $scope.check = function(value, checked) {
            var idx = $scope.user.language_ids.indexOf(value);
            idx >= 0 && !checked && $scope.user.language_ids.splice(idx, 1), idx < 0 && checked && $scope.user.language_ids.push(value)
        }, model.myLanguage = function() {
            $scope.languages = {
                language: $scope.user.language_ids
            }, MyLanguages.update($scope.languages).$promise.then(function(response) {
                Flash.set($filter("translate")(response.Success), "success", !0), $state.reload("MyLanguages")
            })
        }
    }])
}(angular.module("Abs.user")),
function(module) {
    module.controller("SpecialtyController", ["$scope", "$filter", "$rootScope", "$state", "Flash", "MySpecialties", function($scope, $filter, $rootScope, $state, Flash, MySpecialties) {
        var model = this;
        model.init = function() {
            $rootScope.pageTitle = $rootScope.settings["site.name"] + " | " + $filter("translate")("My Specialties"), $scope.aside = {
                title: "Title",
                content: "Hello Aside
This is a multiline message!"
            }, MySpecialties.get({}).$promise.then(function(response) {
                $scope.specialties = response.specialties;
                for (var ids = response.user_specialty_id.split(","), i = 0; i < ids.length; i++) ids[i] = parseInt(ids[i], 10);
                $scope.user = {
                    specialty_ids: ids
                }
            })
        }, model.init(), $scope.check = function(value, checked) {
            var idx = $scope.user.specialty_ids.indexOf(value);
            idx >= 0 && !checked && $scope.user.specialty_ids.splice(idx, 1), idx < 0 && checked && $scope.user.specialty_ids.push(value)
        }, model.mySpeciality = function() {
            $scope.specialties = {
                specialty: $scope.user.specialty_ids
            }, MySpecialties.update($scope.specialties).$promise.then(function(response) {
                Flash.set($filter("translate")(response.Success), "success", !0), $state.reload("MySpecialties")
            })
        }
    }])
}(angular.module("Abs.user")),
function(module) {
    module.controller("NotificationController", ["$state", "$scope", "Flash", "$filter", "$rootScope", "$location", "ConstUserType", "Notifications", function($state, $scope, Flash, $filter, $rootScope, $location, ConstUserType, Notifications) {
        var model = this;
        model.init = function() {
            model.formValue = {
                is_remind_email_wellness: 0,
                is_remind_app_appointments: 0,
                is_remind_app_appointment_changed: 0,
                is_remind_app_wellness: 0
            }
        }, model.init(), model.ConstUserType = ConstUserType, Notifications.get().$promise.then(function(response) {
            model.formValue.is_remind_email_wellness = response.is_remind_email_wellness, model.formValue.is_remind_app_appointments = response.is_remind_app_appointments, model.formValue.is_remind_app_appointment_changed = response.is_remind_app_appointment_changed, model.formValue.is_remind_app_wellness = response.is_remind_app_wellness
        }), model.notification = function() {
            angular.isUndefined(model.formValue.is_remind_email_wellness) ? model.formValue.is_remind_email_wellness = 0 : angular.isUndefined(model.formValue.is_remind_app_appointments) ? model.formValue.is_remind_app_appointments = 0 : angular.isUndefined(model.formValue.is_remind_app_appointment_changed) ? model.formValue.is_remind_app_appointment_changed = 0 : angular.isUndefined(model.formValue.is_remind_app_wellness) && (model.formValue.is_remind_app_wellness = 0), Notifications.add(model.formValue).$promise.then(function(response) {
                response.Success ? (Flash.set($filter("translate")(response.Success), "success", !0), $state.go("Notifications", {}, {
                    reload: !0
                })) : Flash.set($filter("translate")(response.Failed), "error", !1)
            })
        }
    }])
}(angular.module("Abs.user")),
function(module) {
    module.controller("UserRegisterController", ["$auth", "$state", "$scope", "Flash", "$rootScope", "$filter", "AuthFactory", "$location", "vcRecaptchaService", "Genders", "City", "Specialties", "Language", function($auth, $state, $scope, Flash, $rootScope, $filter, AuthFactory, $location, vcRecaptchaService, Genders, City, Specialties, Language) {
        function readFile(input) {
            if (input.files && input.files[0]) {
                $(".js-cropimg-choose").addClass("hide"), $(".js-crop-image-section").addClass("hide"), $(".js-crop-col-md-3").addClass("p-l-0"), $uploadCrop = $(".js-image-crop").croppie({
                    enableExif: !0,
                    viewport: {
                        width: 254,
                        height: 208
                    },
                    boundary: {
                        width: 264,
                        height: 218
                    }
                }), btnhtml = ' Crop   Cancel ', $(".cr-slider-wrap").after(btnhtml), $(".crop-image").on("click", function(ev) {
                    $uploadCrop.croppie("result", {
                        type: "canvas",
                        size: "viewport"
                    }).then(function(resp) {
                        $scope.cropImgSrc = resp, $(".js-image-crop-tmp-update").attr("src", resp), $(".js-image-crop").html(""), $(".js-image-crop").removeClass("ready"), $(".js-cropimg-choose").removeClass("hide"), $(".js-crop-image-section").removeClass("hide"), $(".js-crop-col-md-3").removeClass("p-l-0")
                    })
                }), $(".js-crop-image-cancel").on("click", function() {
                    $(".js-image-crop").html(""), $(".js-image-crop").removeClass("ready"), $(".js-cropimg-choose").removeClass("hide"), $(".js-crop-image-section").removeClass("hide")
                });
                var reader = new FileReader;
                reader.onload = function(e) {
                    $(".js-image-crop").addClass("ready"), $uploadCrop.croppie("bind", {
                        url: e.target.result
                    }).then(function() {
                        console.log("jQuery bind complete")
                    })
                }, reader.readAsDataURL(input.files[0])
            } else swal("Sorry - you're browser doesn't support the FileReader API"), $(".js-cropimg-choose").removeClass("hide")
        }
        var model = this;
        model.setMetaData = function() {
            var pageTitle = $filter("translate")("Register"),
                fullUrl = $location.absUrl(),
                appUrl = $rootScope.settings.scheme_name + ":/" + $location.url();
            angular.element('html head meta[property="og:title"], html head meta[name="twitter:title"]').attr("content", $rootScope.settings["site.name"] + " | " + pageTitle), angular.element('meta[property="al:ios:url"], meta[property="al:ipad:url"], meta[property="al:android:url"], meta[property="al:windows_phone:url"], html head meta[name="twitter:app:url:iphone"], html head meta[name="twitter:app:url:ipad"], html head meta[name="twitter:app:url:googleplay"]').attr("content", appUrl), angular.element('meta[property="og:url"]').attr("content", fullUrl)
        }, model.init = function() {
            model.setMetaData(), model.captcha_site_key = $rootScope.settings["captcha.site_key"], $rootScope.pageTitle = $rootScope.settings["site.name"] + " | " + $filter("translate")("Register")
        }, model.init(), model.user_type = $state.params.user_type, "doctor" == model.user_type && (Specialties.specialtyliList({}).$promise.then(function(response) {
            $rootScope.specialtyliLists = response.specialties
        }), Language.languageList({}).$promise.then(function(response) {
            $rootScope.languageLists = response.data
        })), Genders.genderList({}).$promise.then(function(genderResponse) {
            $rootScope.genderLists = genderResponse.data
        }), City.cityList({}).$promise.then(function(response) {
            $rootScope.cityArray = response.data
        }), model.signup = function(isvalid) {
            if (isvalid && model.password == model.confirm_password) {
                var credentials = {
                    first_name: model.first_name,
                    last_name: model.last_name,
                    username: model.username,
                    email: model.email,
                    password: model.password,
                    confirm_password: model.confirm_password,
                    dob: model.year + "-" + model.month + "-" + model.date,
                    phone: model.phone,
                    gender_id: model.gender_id,
                    hobbies: model.hobbies,
                    is_agree_terms_conditions: model.terms_conditions
                };
                void 0 !== $scope.cropImgSrc && (credentials.profileimg = $scope.cropImgSrc), $auth.signup(credentials).then(function(response) {
                    response.data.token ? ($auth.setToken(response.data.token), AuthFactory.fetch().$promise.then(function(user) {
                        localStorage.auth = user, $state.go("MyCalender")
                    })) : $state.go("login"), Flash.set($filter("translate")(response.data.Success), "success", !0)
                })["catch"](function(error) {
                    model.emailErr = "", model.nameErr = "", model.passwordErr = "", model.confirmPasswordErr = "";
                    var errorResponse = error.data.errors;
                    angular.isDefined(errorResponse) ? (errorResponse.email && (model.emailErr = $filter("translate")(errorResponse.email[0])), errorResponse.username && (model.nameErr = $filter("translate")(errorResponse.username[0])), errorResponse.password && (model.passwordErr = $filter("translate")(errorResponse.password[0])), errorResponse.confirm_password && (model.confirmPasswordErr = $filter("translate")(errorResponse.confirm_password[0])), Flash.set($filter("translate")(error.data.message), "error", !1)) : Flash.set($filter("translate")(error.data.message), "error", !1)
                })
            }
        }, $("#inputFile").on("change", function() {
            readFile(this)
        }), model.mothValid = function() {
            model.month > 12 && (model.month = "")
        }, model.dateValid = function() {
            model.date > 31 && (model.date = "")
        }
    }])
}(angular.module("Abs.user")),
function(module) {
    module.controller("UserController", ["$scope", "$state", "$rootScope", "$filter", "$location", "$auth", "$timeout", "Flash", "$anchorScroll", "ConstUserType", "ConstMembershipPlan", "UsersFactory", "ConstSocialLogin", "ProfileSearchList", "AppointmentWeekList", "UserReviews", "UserAppointment", "ReviewAdd", "MyDocotors", "$FB", "PhotosFactory", "SweetAlert", "$interval", "ActivityCount", function($scope, $state, $rootScope, $filter, $location, $auth, $timeout, Flash, $anchorScroll, ConstUserType, ConstMembershipPlan, UsersFactory, ConstSocialLogin, ProfileSearchList, AppointmentWeekList, UserReviews, UserAppointment, ReviewAdd, MyDocotors, $FB, PhotosFactory, SweetAlert, $interval, ActivityCount) {
        function addDays(theDate, days) {
            return new Date(theDate.getTime() + 24 * days * 60 * 60 * 1e3)
        }

        function plusDivs() {
            slideIndex = $scope.clinicphotos.length - 1 <= parseInt(slideIndex) ? 0 : parseInt(slideIndex) + 1, $scope.showDivs(slideIndex)
        }

        function daysAdd(slot_index) {
            return {
                today: $scope.dateAddFunction(0, $scope.worklocationLists[slot_index].viewslot),
                day2: $scope.dateAddFunction(1, $scope.worklocationLists[slot_index].viewslot),
                day3: $scope.dateAddFunction(2, $scope.worklocationLists[slot_index].viewslot),
                day4: $scope.dateAddFunction(3, $scope.worklocationLists[slot_index].viewslot)
            }
        }

        function daysAddIntially() {
            return {
                today: $scope.dateAddFunction(0, $scope.viewslot),
                day2: $scope.dateAddFunction(1, $scope.viewslot),
                day3: $scope.dateAddFunction(2, $scope.viewslot),
                day4: $scope.dateAddFunction(3, $scope.viewslot)
            }
        }
        var model = this,
            slideIndex = 0;
        model.setMetaData = function() {
            var pageTitle = $filter("translate")("User"),
                fullUrl = $location.absUrl(),
                appUrl = $rootScope.settings.scheme_name + ":/" + $location.url();
            angular.element('html head meta[property="og:title"], html head meta[name="twitter:title"]').attr("content", $rootScope.settings["site.name"] + " | " + pageTitle), angular.element('meta[property="al:ios:url"], meta[property="al:ipad:url"], meta[property="al:android:url"], meta[property="al:windows_phone:url"], html head meta[name="twitter:app:url:iphone"], html head meta[name="twitter:app:url:ipad"], html head meta[name="twitter:app:url:googleplay"]').attr("content", appUrl), angular.element('meta[property="og:url"]').attr("content", fullUrl)
        }, $scope.gotoAnchor = function(x) {
            $anchorScroll(x)
        }, model.init = function() {
            model.setMetaData(), model.ConstSocialLogin = ConstSocialLogin, $rootScope.pageTitle = $rootScope.settings["site.name"] + " | " + $filter("translate")("User") + ":" + $state.params.username, $scope.maxSize = 5, $scope.currentPage = void 0 !== $scope.currentPage ? parseInt($scope.currentPage) : 1, $scope.worklocationLists = [], model.siteCurrency = $rootScope.settings["site.currency"], model.formvalue = "", $scope.clinicphotos = [], $scope.clinicSlick = [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }], PhotosFactory.get({
                username: $state.params.username
            }).$promise.then(function(response) {
                if ($scope.photos = response.data, $scope.imageDisplay = !1, $scope.photos.length > 0) {
                    $scope.imageDisplay = !0;
                    var intialArr = 0,
                        intialPhotoArr = 0;
                    $scope.clinicphotos[intialArr] = [], angular.forEach($scope.photos, function(value, key) {
                        intialPhotoArr % 3 === 0 ? (intialArr++, $scope.clinicphotos[intialArr] = [], $scope.clinicphotos[intialArr].push({
                            thumb: value.attachmentable.data.thumb.small
                        })) : $scope.clinicphotos[intialArr].push({
                            thumb: value.attachmentable.data.thumb.small
                        }), intialPhotoArr++
                    }), $scope.clinicphotos.splice(0, 1), $timeout(function() {
                        $scope.showDivs(slideIndex), $interval(plusDivs, 3e3)
                    }, 1e3)
                }
            })
        }, UsersFactory.get({
            username: $state.params.username
        }).$promise.then(function(response) {
            model.user = response, model.userBadges = model.user.badge.data, model.user.user_profile.booking_instructions = null === model.user.user_profile.booking_instructions ? $filter("translate")("No any booking instructions") : model.user.user_profile.booking_instructions, $scope.timeRating = parseInt(model.user.timing_avg_rating / model.user.timing_rating_count), $scope.bedRating = parseInt(model.user.bedside_avg_rating / model.user.bedside_rating_count), $scope.overAllRating = model.user.overall_avg_rating, $scope.practice = "null" !== response.user_profile.practice_name ? " | " + $filter("translate")("Practice by:") + response.user_profile.practice_name : "", model.user.user_profile.about_me = "null" !== response.user_profile.about_me ? response.user_profile.about_me : "", $scope.workplaces = response.workplace.data, $scope.mapCenter = !1, $scope.workplaces.length > 0 && angular.isDefined($scope.workplaces[0].latitude) && angular.isDefined($scope.workplaces[0].longitude) && null !== $scope.workplaces[0].latitude && null !== $scope.workplaces[0].longitude && "" !== $scope.workplaces[0].latitude && "" !== $scope.workplaces[0].longitude ? ($scope.mapCenter = !0, $scope.latitude = $scope.workplaces[0].latitude, $scope.longitude = $scope.workplaces[0].longitude, $scope.destinationAddress = $scope.workplaces[0].location, $scope.staticMapImage = "https://maps.googleapis.com/maps/api/staticmap?sensor=false&style=feature:administrative|element:labels|visibility:off&markers=icon:http://abssalvador.nginxpg.develag.com/assets/img/hospital-marker.png|label:C|" + $scope.latitude + "," + $scope.longitude + "&zoom=15&size=640x130&format=jpg&scale=2&visual_refresh=true&key=AIzaSyBCLwpetgvwQXwvqS7XmYvCr9lW_y4FHfY", $timeout(function() {
                $(".js-maps-image").attr("src", $scope.staticMapImage)
            }, 100)) : $scope.staticMapImage = "", $scope.loadMore = function(worklocationId) {
                appointmetHide = angular.element(document.getElementsByClassName("js-showmore" + worklocationId)), appointmetHide.hasClass("hide") && (appointmetHide.removeClass("hide"), appointmetHide.addClass("show")), moreShow = angular.element(document.getElementsByClassName("js-showmore_btn" + worklocationId)), moreShow.hasClass("show") && (moreShow.removeClass("show"), moreShow.addClass("hide")), lessShow = angular.element(document.getElementsByClassName("js-showless_btn" + worklocationId)), lessShow.hasClass("hide") && (lessShow.addClass("show"), lessShow.removeClass("hide"))
            }, $scope.showLess = function(worklocationId) {
                appointmetHide = angular.element(document.getElementsByClassName("js-showmore" + worklocationId)), appointmetHide.hasClass("show") && (appointmetHide.removeClass("show"), appointmetHide.addClass("hide")), moreShow = angular.element(document.getElementsByClassName("js-showmore_btn" + worklocationId)), moreShow.hasClass("hide") && (moreShow.removeClass("hide"), moreShow.addClass("show")), lessShow = angular.element(document.getElementsByClassName("js-showless_btn" + worklocationId)), lessShow.hasClass("show") && (lessShow.addClass("hide"), lessShow.removeClass("show"))
            }, $scope.userId = model.user.id, $scope.specialtyId = model.user.user_profile.specialties[0].id, $scope.viewslot = 1;
            var slot_index = 0;
            angular.forEach(model.user.workplace.data, function(value, key) {
                ProfileSearchList.get({
                    viewslot: $scope.viewslot,
                    userids: $scope.userId,
                    workplaceid: value.id
                }).$promise.then(function(searchResponse) {
                    $scope.worklocationLists.push({
                        days: daysAddIntially(),
                        slotIndex: slot_index,
                        worklocationId: value.id,
                        worklocationName: value.location,
                        worklocationPrice: value.price,
                        viewslot: searchResponse.viewslot,
                        appointmentLoadMore: searchResponse.userLoadMore,
                        workslots: searchResponse.user_profiles[0],
                        show_button: searchResponse.user_profiles[0].show_button,
                        week_hender: searchResponse.user_profiles[0].week_hender
                    }), slot_index++
                })
            }), model.ConstUserType = ConstUserType, model.ConstMembershipPlan = ConstMembershipPlan, $rootScope.settings["site.enabled_plugins"].indexOf("UserReviews") > -1 && ($scope.getReviewsList(), $auth.isAuthenticated() && ($rootScope.auth.role_id === ConstUserType.User ? UserAppointment.get({
                doctor_id: $scope.userId,
                user_id: $rootScope.auth.id
            }).$promise.then(function(Appointmentresponse) {
                $scope.isAlreadyVisted = Appointmentresponse.data.is_visited, $scope.isAlreadyVisted === !0 ? ($scope.isvisited = !0, UserReviews.get({
                    doctor_id: $scope.userId,
                    user_id: $rootScope.auth.id
                }).$promise.then(function(reviewResponse) {
                    $scope.authUserAddedReview = reviewResponse.data, $scope.userReviewData = reviewResponse.status, $scope.userReviewData === !0 ? ($scope.reviewEnable = !1, $scope.alreadyadded = !0) : ($scope.reviewEnable = !0, $scope.alreadyadded = !1)
                })) : ($scope.reviewEnable = !1, $scope.isvisited = !1)
            }) : $scope.reviewEnable = !1))
        }), $scope.showMoreLanguage = function() {
            languageHide = angular.element(document.getElementsByClassName("js-showmore-language")), languageHide.hasClass("hide") && (languageHide.removeClass("hide"), languageHide.addClass("show")), moreShow = angular.element(document.getElementsByClassName("seeall-btn")), moreShow.hasClass("show") && (moreShow.removeClass("show"), moreShow.addClass("hide"))
        }, $scope.showRoute = function(e, workplace) {
            $scope.destinationBox = void 0 !== workplace.address1 ? workplace.address1 : workplace.location
        }, $scope.travelMode = "DRIVING", $scope.driveModeChanged = function(mode) {
            $scope.mapChanged(2, mode)
        }, $scope.mapFilterClose = function(mode) {
            1 == parseInt(mode) ? ($(".js-maps-show").removeClass("real-map"), $(".js-maps-image").removeClass("hide")) : ($(".js-maps-show").addClass("real-map"), $(".js-maps-image").addClass("hide"), $scope.mapChanged(1, $scope.travelMode))
        }, $scope.mapChanged = function(checkMode, travelMode) {
            if (angular.isUndefined($scope.destinationBox) && ($scope.destinationBox = $scope.destinationAddress), "" !== $scope.originBox && "" !== $scope.destinationBox) {
                swal({
                    title: "Loading...",
                    timer: 1e3,
                    showConfirmButton: !1
                });
                var geocoder = new google.maps.Geocoder;
                geocoder.geocode({
                    address: $scope.originBox
                }, function(results, status) {
                    status == google.maps.GeocoderStatus.OK && results.length >= 1 ? ($scope.address1 = $scope.getLocationDetails(results[0]), geocoder.geocode({
                        address: $scope.destinationBox
                    }, function(results, status) {
                        status == google.maps.GeocoderStatus.OK && results.length >= 1 ? ($scope.address2 = $scope.getLocationDetails(results[0]), $timeout(function() {
                            $scope.waypoints = [{
                                location: {
                                    lat: $scope.address1.latitude,
                                    lng: $scope.address1.longitude
                                },
                                stopover: !0
                            }, {
                                location: {
                                    lat: $scope.address2.latitude,
                                    lng: $scope.address2.longitude
                                },
                                stopover: !0
                            }], angular.isDefined(travelMode) ? $scope.travelMode = travelMode : $scope.travelMode = $scope.travelMode, $scope.origin = $scope.address1.formatted_address, $scope.destination = $scope.address2.formatted_address
                        }, 2e3)) : (angular.isDefined(travelMode) ? $scope.travelMode = travelMode : $scope.travelMode = $scope.travelMode, SweetAlert.swal("Destination address couldn't be located."))
                    })) : (angular.isDefined(travelMode) ? $scope.travelMode = travelMode : $scope.travelMode = $scope.travelMode, SweetAlert.swal("Origin address couldn't be located."))
                })
            } else 2 === checkMode && (angular.isDefined(travelMode) ? $scope.travelMode = travelMode : $scope.travelMode = $scope.travelMode, SweetAlert.swal("Enter Origin and Destination address."))
        }, $scope.dateAddFunction = function(days, multipleCount) {
            parseInt(multipleCount) > 1 ? $scope.addDays = 4 * (parseInt(multipleCount) - 1) + parseInt(days) : $scope.addDays = parseInt(days);
            var displayDate = "",
                curr_date = "",
                curr_month = "",
                curr_year = "",
                dayShortNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            return "0" === parseInt(days) && "1" === parseInt(multipleCount) ? (displayDate = new Date, curr_date = displayDate.getDate(), curr_month = displayDate.getMonth(), curr_year = displayDate.getFullYear(), dateValue = {
                day: dayShortNames[parseInt(displayDate.getDay())],
                date: $filter("date")(new Date, "MM/dd"),
                dateFormatted: curr_date + "-" + monthShortNames[curr_month] + "-" + curr_year,
                year: $filter("date")(new Date, "yyyy")
            }, dateValue) : "0" === parseInt(days) && parseInt(multipleCount) > 1 ? (days = 4 * (parseInt(multipleCount) - 1), displayDate = addDays(new Date, days), curr_date = displayDate.getDate(), curr_month = displayDate.getMonth(), curr_year = displayDate.getFullYear(), dateValue = {
                day: dayShortNames[parseInt(displayDate.getDay())],
                date: $filter("date")(addDays(new Date, days), "MM/dd"),
                dateFormatted: curr_date + "-" + monthShortNames[curr_month] + "-" + curr_year,
                year: $filter("date")(addDays(new Date, days), "yyyy")
            }, dateValue) : (displayDate = addDays(new Date, $scope.addDays), curr_date = displayDate.getDate(), curr_month = displayDate.getMonth(), curr_year = displayDate.getFullYear(), dateValue = {
                day: dayShortNames[parseInt(displayDate.getDay())],
                date: $filter("date")(addDays(new Date, $scope.addDays), "MM/dd"),
                dateFormatted: curr_date + "-" + monthShortNames[curr_month] + "-" + curr_year,
                year: $filter("date")(addDays(new Date, $scope.addDays), "yyyy")
            }, dateValue)
        }, model.init(), $scope.showDivs = function(n) {
            $(".mySlides").addClass("hide"), $("#mySlides" + n).removeClass("hide")
        }, $scope.printDiv = function(divName) {
            var printContents = document.getElementById(divName).innerHTML,
                popupWin = window.open("", "_blank", "width=300,height=300");
            popupWin.document.open(), popupWin.document.write('' + printContents + ""), popupWin.document.close()
        }, $scope.nextWeek = function(value, slot_index) {
            $scope.worklocationLists[slot_index].viewslot = parseInt($scope.worklocationLists[slot_index].viewslot) + 1, AppointmentWeekList.get({
                viewslot: $scope.worklocationLists[slot_index].viewslot,
                userids: $scope.userId,
                workplaceid: value
            }).$promise.then(function(searchResponse) {
                $scope.worklocationLists[slot_index].workslots = searchResponse.user_profiles[0], $scope.worklocationLists[slot_index].days = daysAdd(slot_index), $scope.worklocationLists[slot_index].viewslot = searchResponse.viewslot, $scope.worklocationLists[slot_index].show_button = searchResponse.user_profiles[0].show_button
            })
        }, $scope.prevWeek = function(value, slot_index) {
            "1" == $scope.worklocationLists[slot_index].viewslot ? $scope.worklocationLists[slot_index].viewslot = 1 : ($scope.worklocationLists[slot_index].viewslot = parseInt($scope.worklocationLists[slot_index].viewslot) - 1, AppointmentWeekList.get({
                viewslot: $scope.worklocationLists[slot_index].viewslot,
                userids: $scope.userId,
                workplaceid: value
            }).$promise.then(function(searchResponse) {
                $scope.worklocationLists[slot_index].workslots = searchResponse.user_profiles[0], $scope.worklocationLists[slot_index].days = daysAdd(slot_index), $scope.worklocationLists[slot_index].viewslot = searchResponse.viewslot, $scope.worklocationLists[slot_index].show_button = searchResponse.user_profiles[0].show_button
            }))
        }, model.isAuthenticated = function() {
            return $auth.isAuthenticated()
        }, $scope.getReviewsList = function() {
            param = {
                doctor_id: $scope.userId,
                page: $scope.currentPage
            }, UserReviews.get(param).$promise.then(function(response) {
                $scope.doctorReviews = response.data, $scope._metadata = response.meta.pagination, $scope.metadata = response.meta.pagination
            })
        }, $scope.paginate = function() {
            $scope.currentPage = parseInt($scope.currentPage), $scope.getReviewsList()
        }, $scope.ratings = [{
            current: 1,
            max: 5
        }], $scope.getLocationDetails = function(getAddressResults) {
            for (var address = {}, ii = 0; ii < getAddressResults.address_components.length; ii++) {
                var city = "";
                address.latitude = getAddressResults.geometry.location.lat(), address.longitude = getAddressResults.geometry.location.lng(), address.formatted_address = getAddressResults.formatted_address;
                var types = getAddressResults.address_components[ii].types.join(",");
                "street_number" === types && (address.street_number = getAddressResults.address_components[ii].long_name), "route" !== types && "point_of_interest,establishment" !== types || (address.route = getAddressResults.address_components[ii].long_name), "sublocality,political" !== types && "locality,political" !== types && "neighborhood,political" !== types && "administrative_area_level_3,political" !== types || (address.city = "" === city || "locality,political" === types ? getAddressResults.address_components[ii].long_name : city), "administrative_area_level_1,political" === types && (address.state = getAddressResults.address_components[ii].short_name), "postal_code" !== types && "postal_code_prefix,postal_code" !== types || (address.zipcode = getAddressResults.address_components[ii].long_name), "country,political" === types && (address.country = getAddressResults.address_components[ii].long_name)
            }
            return address
        }
    }])
}(angular.module("Abs.user")),
function(module) {
    module.controller("UserActivateController", ["$auth", "$state", "$rootScope", "$filter", "UserActivateFactory", "Flash", "AuthFactory", "$location", function($auth, $state, $rootScope, $filter, UserActivateFactory, Flash, AuthFactory, $location) {
        var model = this;
        model.init = function() {
            UserActivateFactory.activate({
                id: $state.params.id,
                hash: $state.params.hash
            }).$promise.then(function(response) {
                void 0 === response.message ? response.token ? ($auth.setToken(response.token), AuthFactory.fetch().$promise.then(function(user) {
                    $rootScope.auth = user, $state.go("home")
                })) : (Flash.set($filter("translate")("Account activated successfully"), "success", !0), $state.go("login")) : (Flash.set($filter("translate")(response.message), "success", !0), $state.go("login"))
            }, function(error) {
                Flash.set($filter("translate")("Account could not be activated"), "error", !0), $state.go("login")
            })
        }, model.init()
    }])
}(angular.module("Abs.user")),
function(module) {
    module.controller("UserProfileController", ["$state", "$scope", "$http", "$auth", "Flash", "UserProfilesFactory", "UserProfilesImageFactory", "$filter", "$rootScope", "$location", "Upload", "GENERAL_CONFIG", "ConstSocialLogin", "ConstThumb", "City", "States", "Country", "UserDeactivate", "SweetAlert", "ConstUserType", function($state, $scope, $http, $auth, Flash, UserProfilesFactory, UserProfilesImageFactory, $filter, $rootScope, $location, Upload, GENERAL_CONFIG, ConstSocialLogin, ConstThumb, City, States, Country, UserDeactivate, SweetAlert, ConstUserType) {
        function readFile(input) {
            if (input.files && input.files[0]) {
                $(".js-cropimg-choose").addClass("hide"), $(".js-crop-image-section").addClass("hide"), $(".js-crop-col-md-3").addClass("p-l-0"), $uploadCrop = $(".js-image-crop").croppie({
                    enableExif: !0,
                    viewport: {
                        width: 254,
                        height: 208
                    },
                    boundary: {
                        width: 264,
                        height: 218
                    }
                }), btnhtml = ' Crop   Cancel ', $(".cr-slider-wrap").after(btnhtml), $(".crop-image").on("click", function(ev) {
                    $uploadCrop.croppie("result", {
                        type: "canvas",
                        size: "viewport"
                    }).then(function(resp) {
                        $scope.cropImgSrc = resp, $(".js-image-crop-tmp-update").attr("src", resp), $(".js-image-crop").html(""), $(".js-image-crop").removeClass("ready"), $(".js-cropimg-choose").removeClass("hide"), $(".js-crop-image-section").removeClass("hide"), $(".js-crop-col-md-3").removeClass("p-l-0")
                    })
                }), $(".js-crop-image-cancel").on("click", function() {
                    $(".js-image-crop").html(""), $(".js-image-crop").removeClass("ready"), $(".js-cropimg-choose").removeClass("hide"), $(".js-crop-image-section").removeClass("hide")
                });
                var reader = new FileReader;
                reader.onload = function(e) {
                    $(".js-image-crop").addClass("ready"), $uploadCrop.croppie("bind", {
                        url: e.target.result
                    }).then(function() {
                        console.log("jQuery bind complete")
                    })
                }, reader.readAsDataURL(input.files[0])
            } else swal("Sorry - you're browser doesn't support the FileReader API"), $(".js-cropimg-choose").removeClass("hide")
        }
        var model = this;
        model.setMetaData = function() {
            var pageTitle = $filter("translate")("User Profile"),
                fullUrl = $location.absUrl(),
                appUrl = $rootScope.settings.scheme_name + ":/" + $location.url();
            angular.element('html head meta[property="og:title"], html head meta[name="twitter:title"]').attr("content", $rootScope.settings["site.name"] + " | " + pageTitle), angular.element('meta[property="al:ios:url"], meta[property="al:ipad:url"], meta[property="al:android:url"], meta[property="al:windows_phone:url"], html head meta[name="twitter:app:url:iphone"], html head meta[name="twitter:app:url:ipad"], html head meta[name="twitter:app:url:googleplay"]').attr("content", appUrl), angular.element('meta[property="og:url"]').attr("content", fullUrl)
        }, model.init = function() {
            model.setMetaData(), $rootScope.pageTitle = $rootScope.settings["site.name"] + " | " + $filter("translate")("User Profile"), model.ConstSocialLogin = ConstSocialLogin, model.thumb = ConstThumb.user, $scope.genderArray = [], $scope.photoUpload = !1, $scope.fieldsRequired = !0, $scope.genderArray.push({
                id: 1,
                name: $filter("translate")("Male")
            }, {
                id: 2,
                name: $filter("translate")("Female")
            }), $scope.notificationArray = [], $scope.notificationArray.push({
                id: 1,
                name: $filter("translate")("Both")
            }, {
                id: 2,
                name: $filter("translate")("Email")
            }, {
                id: 3,
                name: $filter("translate")("SMS")
            }), City.cityList({}).$promise.then(function(response) {
                $rootScope.cityArray = response.data
            }), States.stateList({}).$promise.then(function(response) {
                $rootScope.stateArray = response.data
            }), Country.countryList({}).$promise.then(function(response) {
                $rootScope.countryArray = response.data
            }), UserProfilesFactory.get().$promise.then(function(response) {
                model.user_profile = response, $scope.user = response.User, model.user_profile.is_newpatient_accepted = 1 === parseInt(response.is_newpatient_accepted), $rootScope.auth.attachmentable.thumb = $scope.user.attachmentable.thumb, $rootScope.auth.user_profile.first_name = response.first_name, $rootScope.auth.user_profile.last_name = response.last_name, $rootScope.auth.user_profile.postal_code = response.postal_code, $rootScope.auth.user_profile.phone = response.phone, $rootScope.auth.user_profile.gender_id = response.gender_id, model.user_profile.user_type = "doctor", "2" == model.user_profile.User.role_id && (model.user_profile.user_type = "patient"), "null" === response.booking_instructions && (model.user_profile.booking_instructions = ""), "null" === response.practice_name && (model.user_profile.practice_name = ""), "null" === response.board_certifications && (model.user_profile.board_certifications = ""), "null" === response.about_me && (model.user_profile.about_me = ""), "null" === response.memberships && (model.user_profile.memberships = ""), "null" === response.awards && (model.user_profile.awards = ""), response.gender_id && (model.user_profile.gender_id = parseInt(response.gender_id)), response.city_id && (model.user_profile.city_id = parseInt(response.city_id)), response.country_id && (model.user_profile.country_id = parseInt(response.country_id))
            })
        }, model.init(), model.ConstUserType = ConstUserType, model.deactivateLogout = function() {
            $http.get(GENERAL_CONFIG.api_url + "/users/logout", {
                headers: {
                    Authorization: "Bearer " + localStorage.userToken
                }
            }), $rootScope.auth = {}, $auth.logout(), $state.go("home", {}, {
                reload: !0
            })
        }, $scope.dateBlockeBefore = $filter("date")(new Date, "yyyy-MM-ddTHH:mm:ss.sssZ"), model.upload = function(profileData, file) {
            Upload.upload({
                url: GENERAL_CONFIG.api_url + "/user_profiles",
                data: {
                    file: file,
                    first_name: profileData.first_name,
                    last_name: profileData.last_name,
                    dr_title: profileData.dr_title,
                    practice_name: profileData.practice_name,
                    dob: profileData.dob,
                    gender_id: profileData.gender_id,
                    about_me: profileData.about_me,
                    board_certifications: profileData.board_certifications,
                    memberships: profileData.memberships,
                    awards: profileData.awards,
                    phone: profileData.phone,
                    address: profileData.address,
                    city_id: profileData.city_id,
                    state_id: profileData.state_id,
                    country_id: profileData.country_id,
                    postal_code: profileData.postal_code,
                    notification_type_id: profileData.notification_type_id,
                    is_newpatient_accepted: profileData.is_newpatient_accepted,
                    identification_number: profileData.identification_number,
                    hobbies: profileData.hobbies,
                    html_info: profileData.html_info,
                    no_insurance_patients: profileData.no_insurance_patients,
                    is_allow_appointments: profileData.is_allow_appointments
                }
            }).then(function(resp) {
                Flash.set($filter("translate")("UserProfile has been updated"), "success", !0), $state.reload("UserProfile")
            }, function(resp) {
                Flash.set($filter("translate")("UserProfile could not be updated. Please, try again."), "error", !1)
            }, function(evt) {
                parseInt(100 * evt.loaded / evt.total)
            })
        }, model.userProfile = function($valid) {
            $valid && UserProfilesFactory.update(model.user_profile).$promise.then(function(response) {
                Flash.set($filter("translate")(response.Success), "success", !0), $state.reload("UserProfile")
            }), $scope.photoUpload === !0 && ($("#inputFile").val(""), UserProfilesImageFactory.update({
                profileimg: $scope.cropImgSrc
            }).$promise.then(function(response) {
                Flash.set($filter("translate")(response.Success), "success", !0), $state.go("UserProfile", {}, {
                    reload: !0
                })
            }))
        }, model.userProfileDeactive = function() {
            SweetAlert.swal({
                title: "Are you sure",
                text: "Account deactivate causes to loose your account",
                type: "warning",
                showCancelButton: !0,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Confirm",
                cancelButtonText: "No",
                closeOnConfirm: !0,
                closeOnCancel: !0
            }, function(isConfirm) {
                isConfirm && UserDeactivate.post().$promise.then(function(response) {
                    angular.isDefined(response.Success) ? (model.deactivateLogout(), Flash.set($filter("translate")(response.Success), "success", !0)) : Flash.set($filter("translate")(response.Failure), "error", !0)
                })
            })
        }, model.photoUpload = function(type) {
            1 === parseInt(type) ? ($scope.photoUpload = !0, $scope.fieldsRequired = !1) : ($scope.photoUpload = !1, $scope.fieldsRequired = !0)
        }, $("#inputFile").on("change", function() {
            readFile(this)
        })
    }]), module.directive("convertToNumber", function() {
        return {
            require: "ngModel",
            link: function(scope, element, attrs, ngModel) {
                ngModel.$parsers.push(function(val) {
                    return val ? parseInt(val, 10) : null
                }), ngModel.$formatters.push(function(val) {
                    return val ? "" + val : ""
                })
            }
        }
    })
}(angular.module("Abs.user")),
function(module) {
    module.controller("UserSettingsController", ["$scope", "$state", "$rootScope", "$filter", "$location", "$auth", "Flash", function($scope, $state, $rootScope, $filter, $location, $auth, Flash) {
        $scope.displayTemplate = "User/user_profile.tpl.html", $scope.getTemplate = function(displayTemplate) {
            $scope.displayTemplate = displayTemplate
        }
    }])
}(angular.module("Abs.user")),
function(module) {
    module.factory("AuthFactory", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/users/auth", {}, {
            fetch: {
                method: "GET"
            }
        })
    }]), module.factory("UserProfilesFactory", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/user_profiles", {}, {
            update: {
                method: "POST"
            },
            get: {
                method: "GET"
            }
        })
    }]), module.factory("UserProfilesImageFactory", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/user_profiles/update_photo", {}, {
            update: {
                method: "POST"
            }
        })
    }]), module.factory("UsersFactory", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/doctor/:username", {
            username: "@username"
        }, {
            get: {
                method: "GET"
            }
        })
    }]), module.factory("UserActivateFactory", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/users/:id/activate/:hash", {
            id: "@id",
            hash: "@hash"
        }, {
            activate: {
                method: "PUT"
            }
        })
    }]), module.factory("ForgotPasswordFactory", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/users/forgot_password", {}, {
            forgot_password: {
                method: "PUT"
            }
        })
    }]), module.factory("ChangePWd", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/users/:id/change_password", {
            id: "@id"
        }, {
            put: {
                method: "PUT"
            }
        })
    }]), module.factory("UserAttachmentFactory", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/users/:id/attachment", {
            id: "@id"
        }, {
            get: {
                method: "GET"
            }
        })
    }]), module.factory("Specialties", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/specialties", {}, {
            specialtyliList: {
                method: "GET"
            }
        })
    }]), module.factory("Genders", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/genders", {}, {
            genderList: {
                method: "GET"
            }
        })
    }]), module.factory("Language", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/languages", {}, {
            languageList: {
                method: "GET"
            }
        })
    }]), module.factory("City", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/cities", {}, {
            cityList: {
                method: "GET"
            }
        })
    }]), module.factory("States", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/states", {}, {
            stateList: {
                method: "GET"
            }
        })
    }]), module.factory("Country", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/countries", {}, {
            countryList: {
                method: "GET"
            }
        })
    }]), module.factory("Specialties", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/specialties", {}, {
            specialtyliList: {
                method: "GET"
            }
        })
    }]), module.factory("MySpecialties", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/user/specialties", {}, {
            update: {
                method: "PUT"
            },
            get: {
                method: "GET"
            }
        })
    }]), module.factory("GetSpecialty", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/specialties/:id", {
            id: "@id"
        }, {
            get: {
                method: "GET"
            }
        })
    }]), module.factory("Notifications", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/notifications", {}, {
            get: {
                method: "GET"
            },
            add: {
                method: "POST"
            }
        })
    }]), module.factory("FamilyFriends", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/family_friends/:id", {
            id: "@id"
        }, {
            put: {
                method: "PUT",
                id: "@id"
            },
            get: {
                method: "GET"
            },
            getbyid: {
                method: "GET",
                id: "@id"
            },
            add: {
                method: "POST"
            },
            "delete": {
                method: "DELETE",
                id: "@id"
            }
        })
    }]), module.factory("MedicalTeam", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/find_doctors/:id", {
            id: "@id"
        }, {
            put: {
                method: "PUT",
                id: "@id"
            },
            get: {
                method: "GET"
            },
            getbyid: {
                method: "GET",
                id: "@id"
            },
            post: {
                method: "POST"
            },
            "delete": {
                method: "DELETE",
                id: "@id"
            }
        })
    }]), module.factory("DemographicInformation", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/user/demographic", {}, {
            post: {
                method: "POST"
            }
        })
    }]), module.factory("MyInsurances", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/user/insurances", {}, {
            update: {
                method: "PUT"
            },
            get: {
                method: "GET"
            }
        })
    }]), module.factory("UserInsurances", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/insurance_plans/:id", {}, {
            get: {
                method: "GET"
            },
            post: {
                method: "POST"
            },
            put: {
                method: "PUT",
                id: "@id"
            }
        })
    }]), module.factory("DoctorInsurances", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/insured_patients/:id", {}, {
            get: {
                method: "GET"
            },
            post: {
                method: "POST"
            },
            put: {
                method: "PUT",
                id: "@id"
            },
            "delete": {
                method: "DELETE",
                id: "@id"
            }
        })
    }]), module.factory("Authorization", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/authorized_doctors/:id", {}, {
            post: {
                method: "POST"
            },
            get: {
                method: "GET"
            },
            "delete": {
                method: "DELETE",
                id: "@id"
            }
        })
    }]), module.factory("MyLanguages", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/user/languages", {}, {
            update: {
                method: "PUT"
            },
            get: {
                method: "GET"
            }
        })
    }]), module.factory("ProfileSearchList", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/search/getdoctorweeklist/:userids/:viewslot/:workplaceid", {
            userids: "@userids",
            viewslot: "@viewslot",
            workplaceid: "@workplaceid"
        }, {
            get: {
                method: "GET"
            }
        })
    }]), module.factory("AppointmentWeekList", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/search/getdoctorweeklist/:userids/:viewslot/:workplaceid", {
            userids: "@userids",
            viewslot: "@viewslot",
            workplaceid: "@workplaceid"
        }, {
            get: {
                method: "GET"
            }
        })
    }]), module.factory("calenderEvents", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/calender/events/:month", {
            param1: "@param1"
        }, {
            get: {
                method: "GET"
            }
        })
    }]), module.factory("calenderEventsDoctor", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/calender/eventsdoctor?appointment_date=:date", {
            param1: "@param1"
        }, {
            get: {
                method: "GET"
            }
        })
    }]), module.factory("UserReviews", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/reviews/:doctor_id/:user_id", {
            doctor_id: "@doctor_id",
            user_id: "@user_id"
        }, {
            get: {
                method: "GET"
            },
            add: {
                method: "POST"
            }
        })
    }]), module.factory("UserAppointment", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/bookings/:doctor_id/:user_id", {
            doctor_id: "@doctor_id",
            user_id: "@user_id"
        }, {
            get: {
                method: "GET"
            }
        })
    }]), module.factory("ReviewAdd", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/reviews/add", {}, {
            add: {
                method: "POST"
            }
        })
    }]), module.factory("DoctorQuestionAdd", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/questions/add", {}, {
            post: {
                method: "POST"
            }
        })
    }]), module.factory("DoctorQuestionList", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/questions/answer/:id", {
            id: "@id"
        }, {
            get: {
                method: "GET"
            }
        })
    }]), module.factory("UserQuestionList", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/questions/user/:id", {
            id: "@id"
        }, {
            get: {
                method: "GET"
            }
        })
    }]), module.factory("DoctorAnswerAdd", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/answers/add/:id", {
            id: "@id"
        }, {
            get: {
                method: "GET"
            },
            post: {
                method: "POST"
            }
        })
    }]), module.factory("UserDeactivate", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/user/deactivate", {}, {
            post: {
                method: "POST"
            }
        })
    }]), module.factory("BestanswerUpdate", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/answers/update/:id", {}, {
            put: {
                method: "PUT",
                params: {
                    id: "@id"
                }
            }
        })
    }]), module.factory("DoctorReviewCheck", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/patient_reviews/:id", {
            id: "@id"
        }, {
            get: {
                method: "GET"
            }
        })
    }]), module.factory("appointmentchangeStatus", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/appointment/:id/:apt_status", {
            id: "@id",
            apt_status: "@apt_status"
        }, {
            get: {
                method: "GET"
            }
        })
    }]), module.factory("calenderCancelToday", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/calender/canceltoday?appointment_date=:date", {
            param1: "@param1"
        }, {
            get: {
                method: "GET"
            }
        })
    }]), module.factory("patientNote", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/appointment/patientnote", {}, {
            post: {
                method: "POST"
            }
        })
    }]), module.factory("ActivityCount", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/activities?is_read=1", {}, {
            get: {
                method: "GET"
            }
        })
    }]), module.factory("ActivityFactory", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/activities", {}, {
            get: {
                method: "GET"
            }
        })
    }])
}(angular.module("Abs.user")),
function(moduel) {
    moduel.directive("onlyDigits", function() {
        return {
            require: "ngModel",
            restrict: "A",
            link: function(scope, element, attr, ctrl) {
                function inputValue(val) {
                    if (val) {
                        var digits = val.replace(/[^0-9]/g, "");
                        return digits !== val && (ctrl.$setViewValue(digits), ctrl.$render()), parseInt(digits, 10)
                    }
                }
                ctrl.$parsers.push(inputValue)
            }
        }
    }), moduel.directive("geoLocation", ["$location", function($location) {
        return {
            restrict: "E",
            scope: !0,
            controller: ["$scope", function($scope) {
                var autocompleteFrom = new google.maps.places.Autocomplete(document.getElementById("geo-location"));
                google.maps.event.addListener(autocompleteFrom, "place_changed", function() {
                    var place = autocompleteFrom.getPlace();
                    $scope.profileLatitude = place.geometry.location.lat(), $scope.profileLongitude = place.geometry.location.lng(), $scope.model.workplace.address1 = place.formatted_address;
                    var k = 0;
                    angular.forEach(place.address_components, function(value, key) {
                        "locality" !== value.types[0] && "administrative_area_level_2" !== value.types[0] || (0 === k && ($scope.cityName = value.long_name), "locality" === value.types[0] && (k = 1)), "administrative_area_level_1" === value.types[0] && ($scope.stateName = value.long_name), "country" === value.types[0] && ($scope.countryName = value.long_name), "sublocality_level_1" !== value.types[0] && "sublocality_level_2" !== value.types[0] || ("" !== $scope.profileAddress ? $scope.profileAddress = $scope.profileAddress + ", " + value.long_name : $scope.profileAddress = value.long_name), "postal_code" === value.types[0] && ($scope.postalCode = parseInt(value.long_name))
                    })
                })
            }],
            template: '
'
        }
    }]), moduel.controller("UserWorkPlacesController", ["$state", "$rootScope", "$scope", "$filter", "$location", "$timeout", "Flash", "SweetAlert", "WorkLocationService", "ConstantWorkPlaces", "$stateParams", "AppoinmentModificationService", "AppoinmentSettingsService", "CountriesService", "StatesService", "CitiesService", "splitedTimeSlot", "AuthDetails", function($state, $rootScope, $scope, $filter, $location, $timeout, Flash, SweetAlert, WorkLocationService, ConstantWorkPlaces, $stateParams, AppoinmentModificationService, AppoinmentSettingsService, CountriesService, StatesService, CitiesService, splitedTimeSlot, AuthDetails) {
        function pageTitle(title) {
            $rootScope.pageTitle = $rootScope.settings["site.name"] + " | " + $filter("translate")(title)
        }

        function flashMessage(message, classname) {
            Flash.set($filter("translate")(message), classname, !0)
        }

        function dateFilter(value) {
            return $filter("date")(value, "yyyy-MM-dd")
        }

        function getCountries() {
            CountriesService.getall().$promise.then(function(response) {
                angular.isDefined(response) && (model.countries = response.data, model.countriesLength = response.data.length > 0)
            })
        }

        function getStates() {
            StatesService.getall().$promise.then(function(response) {
                angular.isDefined(response) && (model.states = response.data, model.statesLength = response.data.length > 0)
            })
        }

        function getCities() {
            CitiesService.getall().$promise.then(function(response) {
                angular.isDefined(response) && (model.cities = response.data, model.citiesLength = response.data.length > 0)
            })
        }

        function getTimeSlot() {
            splitedTimeSlot.get().$promise.then(function(response) {
                angular.isDefined(response) && (model.timeSlot = response.data, model.timeSlotLength = response.data.length > 0)
            })
        }

        function getWorkLocation() {
            WorkLocationService.getall().$promise.then(function(response) {
                angular.isDefined(response) && (model.worklocation = response, model.siteCurrency = $rootScope.settings["site.currency"], model.dataLength = response.data.length > 0, AuthDetails.get().$promise.then(function(response) {
                    angular.isDefined(response) && (1 == response.users.length && 0 !== response.users[0].subscription_id ? model.premiumUser = !0 : model.premiumUser = !1)
                }))
            })
        }

        function getWorkLocationById(id) {
            WorkLocationService.getbyid({
                id: id
            }).$promise.then(function(response) {
                angular.isDefined(response) && (response.Failed ? flashMessage(response.Failed, "error") : model.workplace = response)
            })
        }

        function updateWorkLocationById(id, data) {
            WorkLocationService.put({
                id: id
            }, data).$promise.then(function(response) {
                angular.isDefined(response) && (response.Success ? ($timeout(function() {
                    $state.go(ConstantWorkPlaces.state_WorkPlace, {}, {
                        reload: !0
                    })
                }, 500), flashMessage("Workplace updated successfully", "success")) : flashMessage("Please try again", "error"))
            })
        }

        function addWorkLocation(data) {
            WorkLocationService.post(data).$promise.then(function(response) {
                angular.isDefined(response) && (response.Success ? ($timeout(function() {
                    $state.go(ConstantWorkPlaces.state_WorkPlace, {}, {
                        reload: !0
                    })
                }, 500), flashMessage("Workplace added successfully", "success")) : response.message ? flashMessage(response.message, "error") : flashMessage("Please try again", "error"))
            })
        }

        function getAppoinmentModification(id) {
            AppoinmentModificationService.getall({
                id: id
            }).$promise.then(function(response) {
                angular.isDefined(response) && (model.appoinmentModification = response.data, model.dataModificationLength = response.data.length > 0)
            })
        }

        function getAppoinmentModificationById(id) {
            AppoinmentModificationService.getbyid({
                id: id
            }).$promise.then(function(response) {
                if (angular.isDefined(response)) {
                    if (model.appoinmentmodification_update = response, model.appoinmentmodification_update.type = parseInt(response.type), "" !== response.practice_open) {
                        var practiceOpen = response.practice_open;
                        model.appoinmentmodification_update.appt_time = practiceOpen.split(",")
                    } else model.appoinmentmodification_update.appt_time = "";
                    model.dataModificationLength = response.length > 0
                }
            })
        }

        function updateAppoinmentModification(id, data) {
            AppoinmentModificationService.put({
                id: id
            }, data).$promise.then(function(response) {
                angular.isDefined(response) && (response.Success ? ($timeout(function() {
                    $state.go(ConstantWorkPlaces.state_AppoinmentModification, {
                        locationid: $state.params.locationid
                    }, {
                        reload: !0
                    })
                }, 500), flashMessage("Appoinment modification updated successfully", "success")) : flashMessage("Please try again", "error"))
            })
        }

        function addAppoinmentModification(data) {
            AppoinmentModificationService.post(data).$promise.then(function(response) {
                angular.isDefined(response) && (response.Success ? ($timeout(function() {
                    $state.go(ConstantWorkPlaces.state_AppoinmentModification, {
                        locationid: $state.params.locationid
                    }, {
                        reload: !0
                    })
                }, 500), flashMessage("Appoinment modification added successfully", "success")) : response.Failed ? flashMessage(response.Failed, "error") : flashMessage("Please try again", "error"))
            })
        }

        function fnDeleteWorkPlace(id) {
            SweetAlert.swal({
                title: "Are you sure to Delete?",
                text: "",
                type: "warning",
                showCancelButton: !0,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes",
                cancelButtonText: "No",
                closeOnConfirm: !0,
                closeOnCancel: !0
            }, function(isConfirm) {
                isConfirm && $state.current.name === ConstantWorkPlaces.state_WorkPlace ? WorkLocationService["delete"]({
                    id: id
                }).$promise.then(function(response) {
                    flashMessage("Workplace deleted successfully", "success"), $timeout(function() {
                        $state.reload()
                    }, 500)
                }, function(error) {
                    flashMessage("Worklocation could not be deleted", "error")
                }) : isConfirm && $state.current.name === ConstantWorkPlaces.state_AppoinmentModification && AppoinmentModificationService["delete"]({
                    id: id
                }).$promise.then(function(response) {
                    flashMessage("Appoinment modification deleted successfully", "success"), $timeout(function() {
                        $state.reload()
                    }, 500)
                }, function(error) {
                    flashMessage("Appoinment modification could not be deleted, Please try again", "error")
                })
            })
        }

        function calendarSlots() {
            $scope.calendarSlots = [], $scope.calendarSlots.push({
                id: 5,
                name: "5 minutes"
            }, {
                id: 10,
                name: "10 minutes"
            }, {
                id: 15,
                name: "15 minutes"
            }, {
                id: 20,
                name: "20  minutes"
            }, {
                id: 25,
                name: "25 minutes"
            }, {
                id: 30,
                name: "30 minutes"
            }, {
                id: 35,
                name: "35 minutes"
            }, {
                id: 40,
                name: "40 minutes"
            }, {
                id: 45,
                name: "45 minutes"
            }, {
                id: 50,
                name: "50 minutes"
            }, {
                id: 55,
                name: "55 minutes"
            }, {
                id: 60,
                name: "60 minutes"
            })
        }

        function checkASettingsResponse(value) {
            return 1 === parseInt(value)
        }

        function getAppointmentSettingsData(locationid) {
            AppoinmentSettingsService.getbyworkplace({
                work_place_id: locationid
            }).$promise.then(function(response) {
                angular.isDefined(response) && (model.settingValue = response.appointmentResponse, model.settingValue.calendar_slot_id = parseInt(response.appointmentResponse.calendar_slot_id), model.settingValue.is_today_first_day = checkASettingsResponse(response.appointmentResponse.is_today_first_day), model.settingValue.is_two_session = checkASettingsResponse(response.appointmentResponse.is_two_session), model.settingValue.type = checkASettingsResponse(response.appointmentResponse.type), model.settingValue.is_sunday_open = checkASettingsResponse(response.appointmentResponse.is_sunday_open), model.settingValue.sunday_two_session = checkASettingsResponse(response.appointmentResponse.sunday_two_session), model.settingValue.is_monday_open = checkASettingsResponse(response.appointmentResponse.is_monday_open), model.settingValue.monday_two_session = checkASettingsResponse(response.appointmentResponse.monday_two_session), model.settingValue.is_tuesday_open = checkASettingsResponse(response.appointmentResponse.is_tuesday_open), model.settingValue.tuesday_two_session = checkASettingsResponse(response.appointmentResponse.tuesday_two_session), model.settingValue.is_wednesday_open = checkASettingsResponse(response.appointmentResponse.is_wednesday_open), model.settingValue.wednesday_two_session = checkASettingsResponse(response.appointmentResponse.wednesday_two_session), model.settingValue.is_thrusday_open = checkASettingsResponse(response.appointmentResponse.is_thrusday_open), model.settingValue.thrusday_two_session = checkASettingsResponse(response.appointmentResponse.thrusday_two_session),
                    model.settingValue.is_friday_open = checkASettingsResponse(response.appointmentResponse.is_friday_open), model.settingValue.friday_two_session = checkASettingsResponse(response.appointmentResponse.friday_two_session), model.settingValue.is_saturday_open = checkASettingsResponse(response.appointmentResponse.is_saturday_open), model.settingValue.saturday_two_session = checkASettingsResponse(response.appointmentResponse.saturday_two_session), model.settingValue.is_active = checkASettingsResponse(response.appointmentResponse.is_active))
            })
        }

        function updateAppointmnetSettings(data) {
            AppoinmentSettingsService.save(data).$promise.then(function(response) {
                angular.isDefined(response.error) ? model.settingValue.type === !0 ? (model.settingValue.is_sunday_open === !0 && (model.settingValue.sunday_two_session === !0 ? (model.sunday_open_lunch = model.sunday_lunch_resume = model.sunday_resume_close = !1, void 0 !== response.error.sunday_open_lunch && (model.sunday_open_lunch = $filter("translate")(response.error.sunday_open_lunch)), void 0 !== response.error.sunday_lunch_resume && (model.sunday_lunch_resume = $filter("translate")(response.error.sunday_lunch_resume)), void 0 !== response.error.sunday_resume_close && (model.sunday_resume_close = $filter("translate")(response.error.sunday_resume_close))) : (model.sunday_resume_close = !1, void 0 !== response.error.sunday_open_close ? model.sunday_open_close = $filter("translate")(response.error.sunday_open_close) : model.sunday_open_close = !1)), model.settingValue.is_monday_open === !0 && (model.settingValue.monday_two_session === !0 ? (model.monday_open_lunch = model.monday_lunch_resume = model.monday_resume_close = !1, void 0 !== response.error.monday_open_lunch && (model.monday_open_lunch = $filter("translate")(response.error.monday_open_lunch)), void 0 !== response.error.monday_lunch_resume && (model.monday_lunch_resume = $filter("translate")(response.error.monday_lunch_resume)), void 0 !== response.error.monday_resume_close && (model.monday_resume_close = $filter("translate")(response.error.monday_resume_close))) : (model.monday_resume_close = model.monday_open_close = !1, void 0 !== response.error.monday_open_close && (model.monday_open_close = $filter("translate")(response.error.monday_open_close)))), model.settingValue.is_tuesday_open === !0 && (model.settingValue.tuesday_two_session === !0 ? (model.tuesday_open_lunch = model.tuesday_lunch_resume = model.tuesday_resume_close = !1, void 0 !== response.error.tuesday_open_lunch && (model.tuesday_open_lunch = $filter("translate")(response.error.tuesday_open_lunch)), void 0 !== response.error.tuesday_lunch_resume && (model.tuesday_lunch_resume = $filter("translate")(response.error.tuesday_lunch_resume)), void 0 !== response.error.tuesday_resume_close && (model.tuesday_resume_close = $filter("translate")(response.error.tuesday_resume_close))) : (model.tuesday_resume_close = model.tuesday_open_close = !1, void 0 !== response.error.tuesday_open_close && (model.tuesday_open_close = $filter("translate")(response.error.tuesday_open_close)))), model.settingValue.is_wednesday_open === !0 && (model.settingValue.wednesday_two_session === !0 ? (model.wednesday_open_lunch = model.wednesday_lunch_resume = model.wednesday_resume_close = !1, void 0 !== response.error.wednesday_open_lunch && (model.wednesday_open_lunch = $filter("translate")(response.error.wednesday_open_lunch)), void 0 !== response.error.wednesday_lunch_resume && (model.wednesday_lunch_resume = $filter("translate")(response.error.wednesday_lunch_resume)), void 0 !== response.error.wednesday_resume_close && (model.wednesday_resume_close = $filter("translate")(response.error.wednesday_resume_close))) : (model.wednesday_resume_close = model.wednesday_open_close = !1, void 0 !== response.error.wednesday_open_close && (model.wednesday_open_close = $filter("translate")(response.error.wednesday_open_close)))), model.settingValue.is_thrusday_open === !0 && (model.settingValue.thrusday_two_session === !0 ? (model.thrusday_open_lunch = model.thrusday_lunch_resume = model.thrusday_resume_close = !1, void 0 !== response.error.thrusday_open_lunch && (model.thrusday_open_lunch = $filter("translate")(response.error.thrusday_open_lunch)), void 0 !== response.error.thrusday_lunch_resume && (model.thrusday_lunch_resume = $filter("translate")(response.error.thrusday_lunch_resume)), void 0 !== response.error.thrusday_resume_close && (model.thrusday_resume_close = $filter("translate")(response.error.thrusday_resume_close))) : (model.thrusday_resume_close = model.thrusday_open_close = !1, void 0 !== response.error.thrusday_open_close && (model.thrusday_open_close = $filter("translate")(response.error.thrusday_open_close)))), model.settingValue.is_friday_open === !0 && (model.settingValue.friday_two_session === !0 ? (model.friday_open_lunch = model.friday_lunch_resume = model.friday_resume_close = !1, void 0 !== response.error.friday_open_lunch && (model.friday_open_lunch = $filter("translate")(response.error.friday_open_lunch)), void 0 !== response.error.friday_lunch_resume && (model.friday_lunch_resume = $filter("translate")(response.error.friday_lunch_resume)), void 0 !== response.error.friday_resume_close && (model.friday_resume_close = $filter("translate")(response.error.friday_resume_close))) : (model.friday_resume_close = model.friday_open_close = !1, void 0 !== response.error.friday_open_close && (model.friday_open_close = $filter("translate")(response.error.friday_open_close)))), model.settingValue.is_saturday_open === !0 && (model.settingValue.saturday_two_session === !0 ? (model.saturday_open_lunch = model.saturday_lunch_resume = model.saturday_resume_close = !1, void 0 !== response.error.saturday_open_lunch && (model.saturday_open_lunch = $filter("translate")(response.error.saturday_open_lunch)), void 0 !== response.error.saturday_lunch_resume && (model.saturday_lunch_resume = $filter("translate")(response.error.saturday_lunch_resume)), void 0 !== response.error.saturday_resume_close && (model.saturday_resume_close = $filter("translate")(response.error.saturday_resume_close))) : (model.saturday_resume_close = model.saturday_open_close = !1, void 0 !== response.error.saturday_open_close && (model.saturday_open_close = $filter("translate")(response.error.saturday_open_close))))) : model.settingValue.is_two_session === !0 ? (model.open_lunch = model.lunch_resume = model.resume_close = !1, void 0 !== response.error.open_lunch && (model.open_lunch = $filter("translate")(response.error.open_lunch)), void 0 !== response.error.lunch_resume && (model.lunch_resume = $filter("translate")(response.error.lunch_resume)), void 0 !== response.error.resume_close && (model.resume_close = $filter("translate")(response.error.resume_close))) : (model.resume_close = model.open_close = !1, void 0 !== response.error.open_close && (model.open_close = $filter("translate")(response.error.open_close))) : (model.open_lunch = model.resume_close = model.lunch_resume = model.open_close = model.sunday_open_lunch = model.sunday_resume_close = model.sunday_lunch_resume = model.sunday_open_close = model.monday_open_lunch = model.monday_resume_close = model.monday_lunch_resume = model.monday_open_close = model.tuesday_open_lunch = model.tuesday_resume_close = model.tuesday_lunch_resume = model.tuesday_open_close = model.wednesday_open_lunch = model.wednesday_resume_close = model.wednesday_lunch_resume = model.wednesday_open_close = model.thrusday_open_lunch = model.thrusday_resume_close = model.thrusday_lunch_resume = model.thrusday_open_close = model.friday_open_lunch = model.friday_resume_close = model.friday_lunch_resume = model.friday_open_close = model.saturday_open_lunch = model.saturday_resume_close = model.saturday_lunch_resume = model.saturday_open_close = !1, angular.isDefined(response.Success) && ($state.go(ConstantWorkPlaces.state_WorkPlace), flashMessage(response.Success, "success"))), $scope.is_disable = !1
            })
        }
        var model = this;
        model.dataLength = model.dataModificationLength = model.dataAppoinmentsLength = !1, model.settingValue = null, $state.current.name === ConstantWorkPlaces.state_WorkPlace ? (pageTitle("List Workplaces "), getWorkLocation(), $scope.deleteWorkPlace = function(id) {
            angular.isDefined(id) && fnDeleteWorkPlace(id)
        }, $scope.setPreferLocation = function(locationid) {
            angular.isDefined(locationid) || ($state.reload(), flashMessage("Preferred location could not be changed, Please try again", "error"))
        }, $scope.setStatus = function(locationid) {
            angular.isDefined(locationid) || ($state.reload(), flashMessage("Status could not be changed, Please try again", "error"))
        }) : $state.current.name === ConstantWorkPlaces.state_WorkPlaceAdd ? (pageTitle("Add Workplaces"), getCountries(), getStates(), getCities(), $scope.new_workplace = function(is_valid) {
            is_valid === !0 && (model.workplace.doctor_id = $rootScope.auth.id, angular.isUndefined(model.workplace.is_active) && (model.workplace.is_active = !1), angular.isUndefined(model.workplace.is_preferred_location) && (model.workplace.is_preferred_location = !1), addWorkLocation(model.workplace))
        }) : $state.current.name === ConstantWorkPlaces.state_WorkPlaceEdit ? angular.isDefined($stateParams.id) ? (pageTitle("Edit Workplaces"), getCountries(), getStates(), getCities(), $timeout(function() {
            getWorkLocationById($stateParams.id)
        }, 1200), $scope.update_workplace = function(is_valid) {
            is_valid === !0 && (model.workplace.doctor_id = $rootScope.auth.id, angular.isUndefined(model.workplace.is_active) && (model.workplace.is_active = !1), angular.isUndefined(model.workplace.is_preferred_location) && (model.workplace.is_preferred_location = !1), updateWorkLocationById($stateParams.id, model.workplace))
        }) : $state.go(ConstantWorkPlaces.state_WorkPlace) : $state.current.name === ConstantWorkPlaces.state_AppoinmentSettings ? (pageTitle("List Appoinment Settings "), angular.isDefined($state.params.locationid) ? (pageTitle("List My Appoinment Modifications"), model.locationid = $state.params.locationid, getWorkLocationById(model.locationid), calendarSlots(), getAppointmentSettingsData(model.locationid), model.settingUpdate = function($valid) {
            $valid && ($scope.is_disable = !0, model.settingValue.work_place_id = model.locationid, model.settingValue.nowtimezone = moment(new Date).format("Z"), updateAppointmnetSettings(model.settingValue))
        }, $scope.deleteWorkPlace = function(id) {
            angular.isDefined(id) && fnDeleteWorkPlace(id)
        }) : $state.go(ConstantWorkPlaces.state_WorkPlace)) : $state.current.name === ConstantWorkPlaces.state_AppoinmentModification ? angular.isDefined($state.params.locationid) ? (pageTitle("List Appoinment Modifications"), model.locationid = $state.params.locationid, getWorkLocationById(model.locationid), getAppoinmentModification(model.locationid), $scope.deleteWorkPlace = function(id) {
            angular.isDefined(id) && fnDeleteWorkPlace(id)
        }) : $state.go(ConstantWorkPlaces.state_WorkPlace) : $state.current.name === ConstantWorkPlaces.state_AppoinmentModificationCreate ? (pageTitle("Create Appoinment Modifications"), angular.isDefined($state.params.locationid) ? (getTimeSlot(), model.locationid = $state.params.locationid, getWorkLocationById(model.locationid), $scope.saveAppoinmentModification = function(is_valid) {
            is_valid === !0 && (model.appoinmentmodification_add.appoint_date = dateFilter(model.appoinmentmodification_add.appoint_date), model.appoinmentmodification_add.work_place_id = model.locationid, addAppoinmentModification(model.appoinmentmodification_add))
        }) : $state.go(ConstantWorkPlaces.state_WorkPlace)) : $state.current.name === ConstantWorkPlaces.state_AppoinmentModificationUpdate ? (pageTitle("Update Appoinment Modifications"), angular.isDefined($state.params.locationid) && angular.isDefined($state.params.id) ? (model.locationid = $state.params.locationid, getTimeSlot(), model.id = $state.params.id, getWorkLocationById(model.locationid), getAppoinmentModificationById(model.id), $scope.updateAppoinmentModification = function(is_valid) {
            is_valid === !0 && (model.appoinmentmodification_update.work_place_id = model.locationid, updateAppoinmentModification(model.id, model.appoinmentmodification_update))
        }) : $state.go(ConstantWorkPlaces.state_WorkPlace)) : $state.go(ConstantWorkPlaces.state_WorkPlace), model.manualAddress = function() {
            var addr = {},
                geocoder = new google.maps.Geocoder;
            geocoder.geocode({
                address: model.workplace.address1
            }, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK)
                    if (results.length >= 1)
                        for (var fullAddress = "", ii = 0; ii < results[0].address_components.length; ii++) {
                            var city;
                            model.workplace.latitude = results[0].geometry.location.lat(), model.workplace.longitude = results[0].geometry.location.lng();
                            var types = results[0].address_components[ii].types.join(",");
                            "street_number" == types && (fullAddress += addr.street_number = results[0].address_components[ii].long_name), "route" != types && "point_of_interest,establishment" != types || (addr.route = results[0].address_components[ii].long_name), "sublocality,political" != types && "locality,political" != types && "neighborhood,political" != types && "administrative_area_level_3,political" != types || (fullAddress += addr.city = "" === city || "locality,political" == types ? results[0].address_components[ii].long_name : city), "administrative_area_level_1,political" == types && (fullAddress += addr.state = results[0].address_components[ii].short_name), "postal_code" != types && "postal_code_prefix,postal_code" != types || (addr.zipcode = results[0].address_components[ii].long_name), "country,political" == types && (fullAddress += addr.country = results[0].address_components[ii].long_name)
                        } else Flash.set($filter("translate")("Could not be found your address. Please, try again."), "error", !1);
                    else Flash.set($filter("translate")("Could not be found your address. Please, try again."), "error", !1)
            })
        }
    }])
}(angular.module("Abs.userworkplace")),
function(module) {
    module.factory("WorkLocationService", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/workplaces/:id", {}, {
            getall: {
                method: "GET"
            },
            post: {
                method: "POST"
            },
            put: {
                method: "PUT"
            },
            getbyid: {
                method: "GET",
                id: "@id"
            },
            "delete": {
                method: "DELETE",
                id: "@id"
            }
        })
    }]), module.factory("AppoinmentModificationService", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/appointments/modifications/:urltype/:id", {}, {
            getall: {
                method: "GET",
                params: {
                    urltype: "show",
                    id: "@id"
                }
            },
            post: {
                method: "POST",
                params: {
                    urltype: "add"
                }
            },
            put: {
                method: "POST",
                params: {
                    urltype: "edit",
                    id: "@id"
                }
            },
            getbyid: {
                method: "GET",
                params: {
                    urltype: "edit",
                    id: "@id"
                }
            },
            "delete": {
                method: "DELETE",
                params: {
                    urltype: "delete",
                    id: "@id"
                }
            }
        })
    }]), module.factory("AppoinmentSettingsService", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/appointments/settings?zone=" + localStorage.zone + "&work_place_id=:work_place_id", {}, {
            getbyworkplace: {
                method: "GET",
                params: {
                    work_place_id: "@work_place_id"
                }
            },
            save: {
                method: "POST",
                params: {
                    work_place_id: "@work_place_id"
                }
            }
        })
    }]), module.factory("CountriesService", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/countries/:id", {}, {
            getall: {
                method: "GET"
            },
            getbyid: {
                method: "GET",
                id: "@id"
            }
        })
    }]), module.factory("StatesService", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/states/:id", {}, {
            getall: {
                method: "GET"
            },
            getbyid: {
                method: "GET",
                id: "@id"
            }
        })
    }]), module.factory("CitiesService", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/cities/:id", {}, {
            getall: {
                method: "GET"
            },
            getbyid: {
                method: "GET",
                id: "@id"
            }
        })
    }]), module.factory("splitedTimeSlot", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/search/timeslot", {}, {
            get: {
                method: "GET"
            }
        })
    }]), module.factory("AuthDetails", ["$resource", "GENERAL_CONFIG", function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + "/users/auth_details", {}, {
            get: {
                method: "GET"
            }
        })
    }])
}(angular.module("Abs.userworkplace")), angular.module("templates-app", ["Common/404.tpl.html", "Common/footer.tpl.html", "Common/header.tpl.html", "User/activities.tpl.html", "User/authorization.tpl.html", "User/booking_register.tpl.html", "User/change_password.tpl.html", "User/dashboard_settings.tpl.html", "User/dashboard.tpl.html", "User/demographic.tpl.html", "User/doctor_filter.tpl.html", "User/doctor_note.tpl.html", "User/doctor_profile_question.tpl.html", "User/family_friends.tpl.html", "User/forgot_password.tpl.html", "User/header.tpl.html", "User/list_your_practice.tpl.html", "User/login_user.tpl.html", "User/login.tpl.html", "User/medical_team.tpl.html", "User/my_calender.tpl.html", "User/my_insurances.tpl.html", "User/my_languages.tpl.html", "User/my_specialties.tpl.html", "User/navmenu.tpl.html", "User/notifications.tpl.html", "User/register.tpl.html", "User/settings.tpl.html", "User/sidemenu.tpl.html", "User/updateDiseaseForm.tpl.html", "User/user_profile.tpl.html", "User/user_settings.tpl.html", "User/user_view.tpl.html", "Home/featured_specialist_doctor.tpl.html", "Home/home.tpl.html", "Appointments/appointment_booking_appt_info.tpl.html", "Appointments/appointment_booking_confirm.tpl.html", "Appointments/appointment_booking_details.tpl.html", "Appointments/appointment_booking_patient_info.tpl.html", "Appointments/appointment_index.tpl.html", "Appointments/appointment_modifications_add.tpl.html", "Appointments/appointment_modifications_edit.tpl.html", "Appointments/appointment_modifications.tpl.html", "Appointments/appointment_note.tpl.html", "Appointments/appointment_remainder.tpl.html", "Appointments/appointment_setting.tpl.html", "Appointments/appointment_view.tpl.html", "Appointments/appointments.tpl.html", "Appointments/booking_breadcrum.tpl.html", "Search/search.tpl.html", "Worklocation/userAppoinmentModification.tpl.html", "Worklocation/userAppoinmentModificationCreate.tpl.html", "Worklocation/userAppoinmentModificationUpdate.tpl.html", "Worklocation/userAppoinmentSettings.tpl.html", "Worklocation/userWorkPlaces.tpl.html", "Worklocation/userWorkPlacesAdd.tpl.html", "Worklocation/userWorkPlacesEdit.tpl.html", "Messages/messagecompose.tpl.html", "Messages/messages.tpl.html", "Messages/sentmessages.tpl.html", "Badges/userBadges.tpl.html", "CustomDirectives/Maps/locationDirections.tpl.html"]), angular.module("Common/404.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("Common/404.tpl.html", '
\n\t
\t\n\t\t
404 Page Not Found\n\t\t\t\n\n')
}]), angular.module("Common/footer.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("Common/footer.tpl.html", '\n
\n
\n
\n            \n
\n                \n                \n                \n
      \n         \t\n        \n    \n\n')
}]), angular.module("Common/header.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("Common/header.tpl.html", '\n
\n
\n        \n
\n            \n                Toggle navigation\n                \n                \n                \n            \n
\n
\n                \t
\n                    \t{{\'Call Us:\' | translate}} {{$root.settings[\'site.contact_number\']}}\n                    \n
\n                        logo\n                   \n\t\t\t\t\n            \n        \n        \n
\n        \t
\n\t\t\t
\n               \t\t{{\'Call Us:\' | translate}} {{$root.settings[\'site.contact_number\']}}\n               \n\t\t\t
\n               \t\tlogo\n               \n            \n
\n
\n                \t{{\'Log In / Sign Up\' | translate}}\n                \n
\n\t\t\t\t\t{{\'List your practice\' | translate}}\n                \n                \n
\n                \t\n                \t\n                \n                \n
\n\t\t\t\t\t{{\'Contact Us\' | translate}}\n                \n
\n            \n        \n        \n    \n    \n\n')
}]), angular.module("User/activities.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("User/activities.tpl.html", '
\n
\n        \n
\n            \n
\n
\n
\n
\n                            {{\'Activities\'|translate}}\n                        \n
\n
 Your Appointment status is Pending.  \n                            Your Appointment status is Approved.\n                            Your Appointment status is Closed.  \n                            Your Appointment status is Cancelled.\n                            Your Appointment status is Rejected. Your Appointment status is Expired.   \n                            \n
\n                        \n
\n                            \n                        \n                    \n                \n            \n        \n    \n');
}]), angular.module("User/authorization.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("User/authorization.tpl.html", '
\n
\n        \n
\n            \n
\n
\n                    \n                \n
\n\t\t\t\t\t\t
\n\t\t\t\t\t\t\t
    \n\t\t\t\t\t\t\t\t
{{"Authorization" | translate }}\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{"(I) "}} {{$root.auth.user_profile.display_name}} {{" Authorize" | translate }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t
{{\'Enter Doctor code\'| translate}}
\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{"Enter doctor code" | translate }} \n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t\t\t\t{{\'Authorize\' | translate }}\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t
\n
\n
\n
\n                                                {{\'Authorized Doctors\'| translate}}\n
\n
{{doctorsList.doctor.user_profile.display_name}}{{" | "}}{{doctorsList.doctor.user_profile.specialties[0].name}}

\n                                                    {{"Revoke" | translate }}\n                                                \n                                            \n                                        \n                                    \n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t
{{\'No Record Found\'|translate}}\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\n            \n        \n    \n')
}]), angular.module("User/booking_register.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("User/booking_register.tpl.html", '
\n
\n    \t
\n            \n                logo\n            \n        \n
\n
\n
\n
{{\'Book your appointment\'| translate }}\n                      \n                    \n                \n
\n
\n\t\t\t\t\t\t
\n                            \n
\n\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t*{{\'Have you used Latinomedica before?\'| translate}}\n\t\t\t\t\t\t\t\t\tWe will use the information from your last visit\n\t\t\t\t\t\t\t\t
\n                          \n\t\t\t\t\t\t\t\n    {{"I\'m new in latinomedica" | translate }}\n  \n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t
\n  \n    {{"I have used Latinomedica before" | translate }}\n  \n\t\t\t\t\t\t\t\t\t\n                        \n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t \n                        \n\t\t\t\t\t\t\n\t\t\t\t\t\t
\n
{{\'Create your account\'| translate }}\n                      \n                    \n\t\t\t\t\t\t\t{{"This will help you handle your appointments" | translate}}\n                \n\t\t\t\t\t\t\t\t
\n                            \n
\n
\n\t\t\t\t\t\t\t\t\t {{\'*Cellphone\'| translate}}\n
\n
\n                                            \n
{{\'Mobile\'| translate}}
\n                                        \n                                        {{\'Enter Mobile Number\'| translate }} \n                                        {{\'Enter Valid Mobile Number Without Character\'| translate }} \n                                        {{\'Minimum Length is 8\'| translate }} \n                                        {{\'Maximum Length is 12\'| translate }} \n                                    \n                                    \n                                \n                               \n                            \n                        \n                            \n
\n\t\t\t\t\t\t\t\t \n                            \t
\n                                    {{\'*Insert your E-mail address\'}}\n
Email
\n                                    {{\'Please enter your E-mail id\'| translate }}\n                                    {{\'Enter valid E-mail\'| translate }}\n                                    {{model.emailErr}}\n                                \n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t
\n                                    {{\'*Confirm your E-mail address\'}}\n
Confirm Email
\n                                    {{\'Please re-enter your E-mail id\'| translate }}\n                                    {{\'Enter valid E-mail\'| translate }}\n\t\t\t\t\t\t\t\t\t{{\'E-mail Mismatch\'| translate }}\n                                    {{model.confirm_emailErr}}\n                                \n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t
\n
\n                                \n                                    \n                                    {{\'Please, send me emails with preventive health care remainders. recommended\'| translate }}\n                                    \n                                \n                            \n                            \n                        \n                            \n
\n                            \t
\n                                    {{\'*Create a Password\'}}\n
Password
\n                                    {{ \'Enter Password\' | translate }}\n                                    {{ \'Minimum length is 6\' | translate }}\n                                    {{ \'Maximum length is 20\' | translate }}\n                                    {{model.passwordErr}}\n                                \n                            \n                            \n\t\t\t\t\t\t\t
\n                            {{\'*Name\'}}\n
\n
Please enter your first name
\n                                {{\'Please enter your first name\'| translate }} \n                                {{ \'Minimum length is 3\' | translate }}\n                                {{ \'Enter Valid name without number\' | translate }}\n                                 \n                            \n
\n
Please enter your last name
\n                                {{\'Please enter your last name\'| translate }} \n                                {{ \'Minimum length is 3\' | translate }}\n                                {{ \'Enter valid name without number\' | translate }}\n\n                                 \n                            \n                        \n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t
\n                            \n
\n\t\t\t\t\t\t\t\t {{\'*Date of birth\'| translate}}\n\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t\n
\n
\n
{{\'MM\'| translate}}
\n                                        \n                                        {{\'Enter Month\'| translate }} \n                                        {{\'Enter Valid Month Without Character\'| translate }} \n                                        {{\'Minimum Length is 2\'| translate }} \n                                        {{\'Maximum Length is 2\'| translate }} \n                                    \n                                    \n                                \n
\n\t\t\t\t\t\t\t\t\t\n
\n
\n
{{\'DD\'| translate}}
\n                                        \n                                        {{\'Enter date\'| translate }} \n                                        {{\'Enter Valid date Without Character\'| translate }} \n                                        {{\'Minimum Length is 2\'| translate }} \n                                        {{\'Maximum Length is 2\'| translate }} \n                                    \n                                    \n                                \n\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t\n
\n
\n
{{\'yyyy\'| translate}}
\n                                        \n                                        {{\'Enter year\'| translate }} \n                                        {{\'Enter Valid year Without Character\'| translate }} \n                                        {{\'Minimum Length is 4\'| translate }} \n                                        {{\'Maximum Length is 4\'| translate }} \n                                    \n                                    \n                                \n                                \n                            \n                        \n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t
\n                                \n                                \n                            \n\t\t\t\t\t\n
\n                            \n
\n\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t*{{"who\'s is going to see the Doctor?"| translate}}\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t
\n                          \n\t\t\t\t\t\t\t\n    {{"Myself" | translate }}\n  \n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t
\n  \n    {{"A family member" | translate }}\n  \n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t
\n  \n    {{"Other person" | translate }}\n  \n\t\t\t\t\t\t\t\t\t\n                        \n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t \n                        \n\t\t\t\t\t\t\n\t\t\t\t\t\t
\n                                \n                                \n                            \n\t\t\t\t\t\t\n\t\t\t\t\t\t
\n                            \n
\n\t\t\t\t\t\t\t\t*{{\'Add a new Family of Friend\'| translate}}\n\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t\n
\n
\n
{{\'Name of the family member or Patient\'| translate}}
\n                                        \n                                        {{\'Enter Name\'| translate }} \n                                        {{\'Enter Valid Name Without Character\'| translate }} \n                                        {{\'Minimum Length is 3\'| translate }} \n                                        \n                                    \n                                    \n                                \n
\n\t\t\t\t\t\t\t\t\t\n                                     \n                                \n                                    \n                                \n\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t\n
\n
\n
{{\'age\'| translate}}
\n                                        \n                                        {{\'Enter age\'| translate }} \n                                        {{\'Enter Valid age Without Character\'| translate }} \n                                        {{\'Minimum Length is 2\'| translate }} \n                                        {{\'Maximum Length is 2\'| translate }} \n                                    \n                                    \n                                \n\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t\n                                     \n                                \n                                    \n                                \n                                \n                            \n                        \n                        \n
\n                        \t
\n

\n                            \n                        \n    \n
\n
\n                                \n                                    \n                                    {{\'Please read and agree to The terms of Use and privace policy\'| translate }}\n                                    \n                                \n                            \n                            {{\'Required\'| translate }}\n                        \n\t\t\t\t\t\t
\n
\n                                \n                                    \n                                    {{\'I have read and agree to Latinomedia \'| translate }}\n                                    \n                                \n                            \n                            {{\'Required\'| translate }}\n                        \n                    \n
\n
\n
\n                                {{\'Join Now\' | translate }}\n                            \n                        \n                    \n                \n            \n        \n    \n');
}]), angular.module("User/change_password.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("User/change_password.tpl.html", '
\n
\n        \n
\n            \n
\n
\n                    \n                \n
\n\t\t\t\t\t
\n    \t\t\t\t\t
\n
\n                                \n
\n
{{\'Reset Password\' | translate}}\n                                \n
\n
\n
\n
\n
\n                                                    Current password\n
{{\'Current Password\' | translate}}
\n                                                    {{\'Enter Current Password\' | translate}}\n                                                    {{\'Minimum length is\' | translate}} 6\n                                                    {{user.oldPassErr}}\n                                                \n                                            \n                                        \n
\n
\n
\n                                                    New password\n
{{\'New Password\' | translate}}
\n                                                    {{\'Enter New Password\' | translate}}\n                                                    {{\'Minimum length is\' | translate}} 6\n                                                    {{\'Maximum length is\' | translate}} 40\n                                                \n                                            \n                                        \n
\n
\n
\n                                                    Confirm your new password\n
{{\'Re-type New Password\' | translate}}
\n                                                    {{\'Re-type New Password\' | translate}}\n                                                    {{\'Minimum length is\' | translate}} 6\n                                                    {{\'Maximum length is\' | translate}} 40\n                                                    {{\'Password Mismatch\' | translate}}\n                                                \n                                            \n                                        \n                                    \n
\n                                        {{\'Save\' | translate}}\n                                        {{\'Cancel\'| translate }}\n                                    \n                                \n                            \n    \t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\n            \n        \n    \n')
}]), angular.module("User/dashboard_settings.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("User/dashboard_settings.tpl.html", '
\n\t\n        {{$root.auth.username}}\n        \n\t\n
\n    \t
\n        \t
\n            \t
\n
{{\'Profile Details\' | translate}}\n
\n                    \t
{{\'Dashboard\' | translate}}
\n
{{\'View Profile\' | translate}}
\n
{{\'Change Password\' | translate}}

{{\'Settings\' | translate}}
\n
{{\'Messages\' | translate}}
\n
{{\'My Educations\' | translate}}
\n
{{\'Badges\' | translate}}
  \n                    \n
{{\'Work Places\' | translate}}\n
\n                    \t
{{ \'My Workplaces\' | translate }}
\n                    \n               \t\n            \t\n            \t
\n
{{\'Facilities\' | translate}}\n
\n
{{\'My Appointments\' | translate}}
\n
{{\'Subscription Plans\' | translate}}
    \n
{{\'My Subscription\' | translate}}
\n
{{\'My Specialties\' | translate}}
\n                        \n
{{\'My Languages\' | translate}}
\n
{{\'My Clinic Photos\' | translate}}
\n
{{\'Ical\' | translate}}
\n
{{\'Book a new appointment\' | translate}}
\n
{{\'My Doctors\' | translate}}
\n
{{\'Questions\' | translate}}
\n
{{\'Answers\' | translate}}
\n
{{\'Admin Dashboard\' | translate}}
\n                    \n              \t\n            \t
                    \n
{{\'Exit\' | translate}}\n
\n                    \t
{{ \'Sign out\' | translate }}
\n                    \n              \t\n       \t\t\n        \n    \n')
}]), angular.module("User/dashboard.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("User/dashboard.tpl.html", '
\n\t
\n        \n
\n            \n
\n
\n                assaas\n                \n            \n        \n    \n')
}]), angular.module("User/demographic.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("User/demographic.tpl.html", '
\n
\n        \n
\n            \n
\n
\n                    \n                \n
\n\t\t\t\t\t
\n\t\t\t\t\t\t
    \n\t\t\t\t\t\t\t
{{"Demographic information" | translate }}\n\t\t\t\t\t\t\n\t\t\t\t\t\t
\n\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t\t\t\t{{"Race(choose one or more)" | translate }}\n\t\t\t\t\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t {{race.name | translate }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t\t\t\t{{"Ethnicity" | translate }}\n\t\t\t\t\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t {{ethnicity.name | translate }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t\t\t\t{{"Preferred Language" | translate }}\n\t\t\t\t\t\t\t\t\t\t\t\t
{{"Latinomedica is currently available in " | translate }} {{"English" | translate }} {{"and" | translate }} {{"Spanish" | translate }}

\n\t\t\t\t\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t\t\t\t\t \t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t\t\t\t{{"Zip code (Optional)" | translate }}\n\t\t\t\t\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t{{"Save" | translate }}\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n            \n        \n    \n')
}]), angular.module("User/doctor_filter.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("User/doctor_filter.tpl.html", '
\n
\n
  \n
{{"Your team" | translate }}\n        \n
\n\t\t\t\n\t\t\t
\n\t\t\t\t\n\t\t\t\t
\n\t\t\t\t\t{{\'select city\'| translate }}\n\t\t\t\t\n            \n
\n\t\t\t\t             \n\t\t\t\t
\n\t\t\t\t\t{{\'select specialty\'| translate }}\n\t\t\t\t\n                        \n\t\t\t
\n\t\t\t{{"Submit" | translate}}\n\t\t\t {{"Cancel" | translate}}\n\t\t\t\n        \n    \n')
}]), angular.module("User/doctor_note.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("User/doctor_note.tpl.html", '
\n
\n
  \n
{{\'Note\' | translate }}\n        \n
\t\t\t\n\t\t\t
\n\t\t\t\t
\n\t\t\t\t {{\'Note\' | translate }}\n
Note Description
\n\t\t\t\t\t{{\'Enter Note\'| translate }} \n\t\t\t\t\n\t\t\t\n
\n                {{\'Submit\' | translate}}\n                {{\'Cancel\' | translate}}\n            \n        \n    \n')
}]), angular.module("User/doctor_profile_question.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("User/doctor_profile_question.tpl.html", '
\n    \n
\n
\n
\n
\n
{{\'Write your question here\'| translate }}
\n                    {{\'Question Required\'| translate }} \n                \n            \n        \n
\n            {{\'Add\'| translate }}\n        \n    \n\n\n
\n
\n        \n
\n            \n            {{questionR.question}}\n            {{questionR.created_at | dateFormat}}
\n
\n                \n                {{answer.answer}}\n                {{answer.created_at | dateFormat}}\n\t\t\t\n        \n    \n')
}]), angular.module("User/family_friends.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("User/family_friends.tpl.html", '
\n
\n        \n
\n            \n
\n
\n                    \n                \n
\n
\n
\n
{{"Family or Friends" | translate }}\n                        \n
\n
\n
\n
{{"Add new" | translate }}\n                                \n
\n
\n
\n
\n                                                {{"First Name" | translate }}\n
\n                                                {{"First Name Required" | translate }}\n                        {{"Minimum 3 character required" | translate }}\n                        {{"Maximum 25 Character" | translate }}\n                        {{"Enter a valid name without numbers" | translate }}\n                                            \n                                        \n
\n
\n                                                {{"Last Name" | translate }}\n
\n                                                 {{"Last Name Required" | translate }}\n                        {{"Minimum 1 Character" | translate }}\n                        {{"Maximum 20 Character" | translate }}\n                        {{"Enter a valid name without numbers" | translate }}\n                                            \n                                        \n                                    \n
\n
\n
\n                                                {{"Relationship" | translate }}\n
\n                                                {{"Enter relation"| translate }} \n                                            \n                                        \n
\n
\n                                                {{"E-mail" | translate }}{{"(Optional)" | translate }}\n
                                                \n                        {{"Enter valid email" | translate }}\n                                            \n                                        \n                                    \n
\n
\n
\n                                                {{"Cellphone" | translate }}{{"(Optional)" | translate }}\n
  \n                                                 {{"Minimum 8 digits" | translate }}\n                                                 {{"Maximum 12 digits" | translate }}\n                                                 {{"Enter a valid mobile number" | translate }}\n                                            \n                                        \n
\n
\n                                                {{"Home Phone" | translate }}{{"(Optional)" | translate }}\n
\n                                            \n                                        \n
\n
\n                                                {{"Work Mobile" | translate }}{{"(Optional)" | translate }}\n
\n                                            \n                                        \n                                    \n
\n
\n
{{"Address" | translate }}{{"(Optional)" | translate }}\n
\n
\n
Physical address
\n                                                \n                                            \n
\n
\n
#apt, unit
\n                                                \n                                            \n
\n
\n                                                    \n                                            \n                                            \n
\n
\n                                                    \n                                                \n                                            \n
\n
\n                                                    \n                                                \n                                            \n
\n
\n
{{\'Postal Code\' | translate }}
\n                                                \n                                            \n                                        \n                                    \n
\n
\n                                            {{"Gender" | translate }}\n
\n
\n                                                    \n                                                    {{"Select a Gender" | translate }}\n                                                \n                                            \n                                        \n                                    \n
\n
\n                                            {{"Date of birth" | translate }}\n
\n
\n
\n                                                                                                               \n
Date
\n                                                        {{"Select DOB" | translate }}\n                                                    \n                                                \n                                            \n                                        \n                                    \n
\n                                        {{"Save" | translate }}\n\t\t\t\t\t\t\t\t\t\t{{"Update" | translate }}\n                                    \n                        \t\t\n                        \t\n
\n
\n
{{"Family or Friends Created" | translate }}\n                                \n
\n
\n
\n
\n
{{friendsList.first_name}}\n                                            \n
\n
{{friendsList.relationship | capitalize}}\n                                            \n
\n
{{friendsList.dob | ageFilter}} {{"years" | translate }}\n                                            \n
\n                                               {{"Edit" | translate }}\n                                            \n                                            \n                                        \n
\n                                            \n                                        \n
\n
\n
{{"No Family Added" | translate }}\n                                            \n                                        \n                                    \n                                \n                            \n\t\t\t\t\t\t\n                    \n                \n            \n        \n    \n');
}]), angular.module("User/forgot_password.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("User/forgot_password.tpl.html", '
\n
\n    \t
\n        \t
\n            \t\n                    logo\n                \n            \n        \t
\n
{{\'Forgot your password?\' | translate}}\n            \n
\n            \t
\n                \t
\n                        {{"Please provide the email address. We\'ll send you an email with new password." | translate}}\n                    \n
\n
{{\'Enter your email\' | translate}}
\n
\n                            \n
\n                                {{\'Please Enter Email\'| translate }}\n                                {{\'Enter valid email\'| translate }}\n                            \n                        \n                    \n                \n
\n                    \n                        {{\'Send\' | translate}}\n                        \n                    \n                \n         \t\n
{{"Don\'t have an account yet?"|translate}} {{\'Sign up\'|translate}}

\n      \t\n   \t\n')
}]), angular.module("User/header.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("User/header.tpl.html", '
\n\t\n\t\tlogo\n\t\n\n
\n\t
\n\t\t\n\t\n\t
\n\t\t\n        \n\t\t\n\t\n\t
\n\t\t\n\t\t\t{{$root.auth.username}}\n\t\t\n\t\n')
}]), angular.module("User/list_your_practice.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("User/list_your_practice.tpl.html", '
\n    \n
\n
\n        \t
\n
{{"Doctors thrive with" | translate }} {{$root.settings[\'site.name\']}}\n                {{"Subscribe now!" | translate }}\n
{{$root.settings[\'site.name\']}} {{"helps me achieve what I set out to do as a Doctor" | translate }}\n                Dr. Julio César Castro\n            \n        \n    \n    \n    \n    \n
\n
\n
\n
\n                    {{"What is" | translate }} {{$root.settings[\'site.name\']}}{{"?"}}\n                \n
\n                    {{"Why join?" | translate }}\n                \n
\n                    {{"How does it work?" | translate }}\n                \n            \n            {{"List your practice" | translate }}\n        \n    \n    \n    \n    \n
\n    \t
\n
{{"Throughout the country, Doctors rely on" | translate }} {{$root.settings[\'site.name\']}}\n\t\t\t
{{"Your coleagues already registered" | translate }}\n
{{"See who is using" | translate }} {{$root.settings[\'site.name\']}} {{"in your area:" | translate }}\n
\n            \t
\n
\n
{{"Show me" | translate }}\n                        \n                    \n                \n
\n                    \n\t\t\t\t\n
\n                    {{"Go" | translate }}\n                \n            \n             \n
\n    \t\t\t
\n                \t\n                \n            \n
{{"Subscribe Now!" | translate }}

\n        \n    \n    \n    \n    \n
\n    \t
\n
{{"How will patients find you" | translate }}\n            {{"Create your profile" | translate }}\n
\n
\n
\n                        search mobile\n                    \n                \n
\n
\n
\n
\n                                Date Icon\n                            \n                        \n
\n
{{"Your Own Search List" | translate }}\n
{{"Patients can find it on our website and through the application" | translate }} {{$root.settings[\'site.name\']}}\n                        \n                    \n
\n
\n
\n                                search Icon\n                            \n                        \n
\n
{{"Online reservations 24/7" | translate }}\n
{{"Patients can view their availability and book with a tap - either 2 pm and their phones are busy, or it\'s 2 am and their office is closed" | translate }}\n                        \n                    \n                \n            \n
\n
\n
\n
\n
{{"Custom profile of Latinomedica" | translate }}\n
{{"Your profile of" | translate }} {{$root.settings[\'site.name\']}} {{"is personalized with your insurance on the network, the procedures offered and their availability in real time" | translate }}\n                        \n
\n
\n                                location Icon\n                            \n                        \n                    \n
\n
\n
{{"Professional pictures" | translate }}\n
{{"Headshots and photos of the office enhance your profile and help attract more patients. (Only available in certain areas.)" | translate }}\n                        \n
\n
\n                                location Icon\n                            \n                        \n                    \n
\n
\n
{{"Unlimited Locations" | translate }}\n
{{"List several practice locations in your profile to help patients find the most convenient" | translate }}\n                        \n
\n
\n                                location Icon\n                            \n                        \n                    \n
\n
\n
{{"Patient Feedback" | translate }}\n
{{"Build and Protect Your Online Reputation with Verified Reviews of Real Patients" | translate }}\n                        \n
\n
\n                                location Icon\n                            \n                        \n                    \n                \n
\n
\n                        search mobile\n                    \n                \n            \n        \n    \n    \n    \n    \n
\n
\n
{{"Interested? Get more information today" | translate }}\n            {{"Register for a FREE demonstration" | translate }}\n        \n    \n    \n    \n    \n
\n    \t
\n        \t
\n
\n
\n
\n                            latinowork mobile\n                        \n                    \n
\n
\n
\n
\n                                    Notepad Icon\n                                \n                            \n
\n
{{"Register immediately" | translate }}\n
{{"Patients fill their papers online - all you have to do is print it. This can improve the accuracy and readability of their practice" | translate }}\n                            \n                        \n
\n
\n
\n                                    Mail Icon\n                                \n                            \n
\n
{{"Email reminders and text" | translate }}\n
{{"His patients receive appointment reminders," | translate }} {{$root.settings[\'site.name\']}} {{"reducing no-shows and the time spent by your office staff on the phone" | translate }}\n                            \n                        \n                \t\n                \n
{{"This features make latinomedica work for you" | translate }}\n
\n
\n
\n
\n
{{"Calendar Latinomedica" | translate }}\n
{{"Manage availability without problems. You control your schedule and patients can choose when booking" | translate }}\n                            \n
\n
\n                                    calendar Icon\n                                \n                            \n                        \n
\n
\n
{{"Account Activity" | translate }}\n
{{"I\'ll remind you to confirm appointments and send other useful updates." | translate }}\n                            \n
\n
\n                                    clock Icon\n                                \n                            \n                        \n
\n
\n
{{"Get synchronized" | translate }}\n
{{"Our technology reads your practice management software (PMS) and automatically displays the times available in your profile " | translate }} {{$root.settings[\'site.name\']}}\n                            \n
\n
\n                                    synchronize Icon\n                                \n                            \n                        \n                    \n
\n
\n                            Latinowork Browser\n                        \n                    \n                \n            \n        \n    \n    \n    \n    \n
\n
\n
{{"Why do Doctors join Latinomedica\'s?" | translate }}\n
\n
\n
{{"Building Patient Loyalty" | translate }}\n
{{"Strengthen relationships with patients by offering"}} {{$root.settings[\'site.name\']}} {{"first-class comfort - from simple booking and personalized reminders to trouble-free online registration" | translate }}\n                \n
\n
{{"Attract the patients you need" | translate }}\n
{{"Your profile of" | translate }} {{$root.settings[\'site.name\']}} {{"is personalized with your insurance, the procedures offered and their availability in real time" | translate }}\n                \n            \n        \n
\n
\n
\n
\n
{{"Improve attendance" | translate }}\n
\n                        mejorar\n                    \n
{{$root.settings[\'site.name\']}} {{"reminders improve attendance by 60%" | translate }}\n                \n
\n
{{"You are always up to date" | translate }}\n
\n                        siempre\n                    \n
{{"Reminders by SMS Booking You can be located Users or potential itinerants" | translate }}\n                \n
\n
{{"High Refunds" | translate }}\n
\n                        reembolsos\n                    \n
{{"95% of" | translate }} {{$root.settings[\'site.name\']}} {{"patients are commercially insured or pay in cash" | translate }}\n                \n
\n
{{"Large search presence" | translate }}\n
\n                        gran\n                    \n
{{"120 million annual searches of doctors show" | translate }} {{$root.settings[\'site.name\']}} {{"in the best results" | translate }}.\n                \n            \n        \n    \n
\n
\n        \t
\n
\n
\n
{{"Maximize your availability" | translate }}\n
{{"Fill in the last-minute openings on your calendar caused by cancellations and schedule changes. With" | translate }} {{$root.settings[\'site.name\']}} {{",you are there for your patients when they need it" | translate }}\n                    \n
\n
{{"Strengthen your reputation" | translate }}\n
{{$root.settings[\'site.name\']}} {{"protects and improves its presence on the web with verified reviews of real patients" | translate }}\n                    \n                \n            \n        \n    \t
\n
\n    \t\t
\n
\n
{{"Accommodate urgent needs" | translate }}\n
\n                        acomodar\n                    \n
{{"The typical" | translate }} {{$root.settings[\'site.name\']}} {{"patient visits a doctor in 24 hours" | translate }}\n                \n
\n
{{"Be available 24/7" | translate }}\n
\n                        estar\n                    \n
{{"45% of" | translate }} {{$root.settings[\'site.name\']}} {{"appointments are booked after hours" | translate }}\n                \n
\n
{{"Capture more comments" | translate }}\n
\n                        capture\n                    \n
{{"The average physician score after one year in" | translate }} {{$root.settings[\'site.name\']}} {{"is 4.68 out of 5 stars" | translate }}\n                \n
\n
{{"Get verified reviews" | translate }}\n
\n                        obtener\n                    \n
{{"The average provider has 40 qualifications after one year in" | translate }} {{$root.settings[\'site.name\']}}\n                \n            \n        \n    \n    \n    \n    \n
\n
\n        \t\n                                \t\n                    Previous\n                \n
\n
\n                        specialists\n                    \n
{{$root.settings[\'site.name\']}} {{"helps me achieve what I set out to do as a doctor" | translate }}\n                    Dr. Julio César Castro\n                \n
\n
\n                        specialists\n                    \n
{{$root.settings[\'site.name\']}} {{"helps me achieve what I set out to do as a doctor" | translate }}\n                    Dr. Julio César Castro\n                \n
\n
\n                        specialists\n                    \n
{{$root.settings[\'site.name\']}} {{"helps me achieve what I set out to do as a doctor" | translate }}\n                    Dr. Julio César Castro\n                \n
\n
\n                        specialists\n                    \n
{{$root.settings[\'site.name\']}} {{"helps me achieve what I set out to do as a doctor" | translate }}\n                    Dr. Julio César Castro\n                \n
\n
\n                        specialists\n                    \n
{{$root.settings[\'site.name\']}} {{"helps me achieve what I set out to do as a doctor" | translate }}\n                    Dr. Julio César Castro\n                \n                \n                    Next\n                \n            \n        \n    \n    \n    \n    \n
\n
\n\t\t\t\n                                \t\n                    Previous\n                \n
\n
{{$root.settings[\'site.name\']}} {{"is the only one that offers patients a quick and painless way to schedule an appointment with the right doctor" | translate }}\n
\n                        elsiglo\n                    \n                \n
\n
{{$root.settings[\'site.name\']}} {{"is the only one that offers patients a quick and painless way to schedule an appointment with the right doctor" | translate }}\n
\n                        elsiglo\n                    \n                \n
\n
{{$root.settings[\'site.name\']}} {{"is the only one that offers patients a quick and painless way to schedule an appointment with the right doctor" | translate }}\n
\n                        elsiglo\n                    \n                \n
\n
{{$root.settings[\'site.name\']}} {{"is the only one that offers patients a quick and painless way to schedule an appointment with the right doctor" | translate }}\n
\n                        elsiglo\n                    \n                \n
\n
{{$root.settings[\'site.name\']}} {{"is the only one that offers patients a quick and painless way to schedule an appointment with the right doctor" | translate }}\n
\n                        elsiglo\n                    \n                \n                \n                    Next\n                \n    \t\t\n        \n    \n    \n    \n    \n
\n
\n            \n
{{"Join" | translate }} {{$root.settings[\'site.name\']}}{{"!"}}\n
\n
\n
\n                    \t
\n                        \t
\n                            \t
\n
\n
\n                                        \t{{"First Name" | translate }}\n
\n                                            {{"Please enter your first name" | translate }} \n                                            {{"Minimum length is 3" | translate }}\n                                            {{"Enter Valid name without number and space" | translate }}                                     \n                                        \n
\n                                        \t{{"Last Name" | translate }}\n
\n                                            {{"Please enter your last name" | translate }} \n                                            {{"Minimum length is 3" | translate }}\n                                            {{"Enter valid name without number and space" | translate }}\n                                        \n                                    \n                                \n
\n
\n
\n                                            {{"Direct Phone number" | translate }}\n
\n                                             {{"Enter Phone Number" | translate }} \n                                            {{"Maximum length is 12" | translate }}\n                                            {{"Minimum length is 8" | translate }}\n                                            {{"Enter Valid Mobile Number Without Character"| translate }} \n                                        \n
\n                                            {{"Your Email" | translate }}\n
\n                                            {{"Please enter your mail id"| translate }}\n                                            {{"Enter valid email"| translate }}\n                                            {{model.emailErr}}\n                                        \n                                    \n                                \n\t\t\t\t\t\t\t\t
\n                                \t
\n
\n                                            {{"Password" | translate }}\n
\n\t\t\t\t\t\t\t\t\t\t\t{{"Please enter password" | translate }}\n\t\t\t\t\t\t\t\t\t\t\t{{"Minimum length is 6" | translate }}\n\t\t\t\t\t\t\t\t\t\t\t{{"Maximum length is 20" | translate }}\n\t\t\t\t\t\t\t\t\t\t\t{{model.passwordErr}}\n                                        \n
\n                                            {{"Confirm Password" | translate }}\n
\n\t\t\t\t\t\t\t\t\t\t\t{{"Please enter confirm password" | translate}}\n\t\t\t\t\t\t\t\t\t\t\t{{"Minimum length is 6" | translate}}\n\t\t\t\t\t\t\t\t\t\t\t{{"Maximum length is 20" | translate }}\n\t\t\t\t\t\t\t\t\t\t\t{{"Password Mismatch" | translate }}\n\t\t\t\t\t\t\t\t\t\t\t{{model.confirmPasswordErr}}\n                                        \n                                \t\n                                \t\t\t\t\t\t\t\t\n                            \n                            \n
\n                            \t{{"Specialty" | translate }}\n                            \t
\n                                    \n                                    {{"Please select specialty" | translate }} \n                                \n
\n                                \t
\n
\n                                            {{"Postal Code" | translate }}\n
\n                                            {{"Enter Postal Code" | translate }} \n                                            {{"Minimum length is 3" | translate }}\n                                            {{"Maximum length is 6" | translate }}\n                                    \t\n                                    \n                                \n                            \n                        \n                        \n
\n
\n                            {{model.captchaErr}}\n                        \n
\n
\n                                \n                                    \n                                    {{"Please read and agree to" | translate }} {{"The terms of Use and privace policy" | translate }}\n                                    \n                                \n                            \n                            {{"Required" | translate }}\n                        \n
\n
\n                                {{"Begin" | translate }}\n                            \n                        \n                    \n                \n            \n        \n    \n    \n');
}]), angular.module("User/login_user.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("User/login_user.tpl.html", '
\n\t
\n    \t
\n        \t
\n            \t\n                    logo\n                \n            \n
\n
\n
\n
\n                            doctor\n                        \n
\n
{{\'I am looking for a doctor\'|translate}}\n
Looking to make an appointment with one of ABS doc\'s Doctors or Dentists in your area\n                        \n
\n                            {{\'Join Us\'|translate}} \n                        \n                    \n                \n
\n
\n
\n                            doctor\n                        \n
\n
{{\'I am doctor\'|translate}}\n
Looking to become a member of ABS doc\'s network of practioners? Sign up to start taking appointments.\n                        \n
\n                            {{\'Join Us\'|translate}} \n                        \n                    \n                 \n            \n      \t\n    \n')
}]), angular.module("User/login.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("User/login.tpl.html", '
\n
\n    \t
\n        \t
\n            \t\n                    logo\n                \n            \n
\n
\n                   \t
\n
{{"Log in or create an account" | translate }}

\n                    \n
{{"Access your latinomedica account" | translate }}\n
\n\t\t\t     \t\t
E-mail
\n                        {{\'Enter Email\'| translate }}\n                        {{ \'Enter your email\' | translate }}\n                    \n
\n                  \t\t
Password
\n                        {{\'Enter Password\'| translate }}\n                        {{\'Minimum length is 6\'| translate}}\n                        {{\'Maximum length is 40\'| translate }}\n                    \n
\n                    \t
\n                        \t\n                                {{"keep me signed in" | translate }}\n                                \n                        \t\n                        \n                    \t{{\'Log In\'|translate}}\n                    \n
{{"Forget your Password?" | translate }}

\n                \n            \n
\n            \t
\n
\n
\n                        \t
\n
\n
{{"New in Latinomedica" | translate }}\n                                    {{\'Create an Account \'|translate}}\n                                \n                            \n                        \n                    \n               \t\n            \n      \t\n         \n')
}]), angular.module("User/medical_team.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("User/medical_team.tpl.html", '
\n
\n        \n
\n            \n
\n            \t
\n                \t
\n                    \t
\n                    \t\t
\n
\n
{{"Hi," | translate }} {{$root.auth.username}}\n
{{"Click below to find a doctor and to make an appointemnt instaltly .Its completely free!" | translate }}\n                                    {{"Find Doctors" | translate }}\n                                \n
\n                                \n                            \n                        \t
\n
\n\t\t\t\t\t\t\t\t\t
\n
\n
{{"Appointment with a" | translate }} {{team.specialty.name}}\n                                            \n                                        \n
\n
\n                                                logo\n                                            \n
\n
{{"Need a doctor? Make an appointment now and add a doctor to your medical team" | translate }}\n                                                {{"Search" | translate }}\n                                            \n                                        \n                                    \n                                \n
\n                                \t
\n                                        \n                                            \n                                                \n                                                \n                                            \n                                        \n\t\t\t\t\t\t\t\t\t\t
{{"Find a Doctor" | translate }}

\n                                    \n                                \n                            \n                        \n                    \n
\n                    \t
\n                        \t
\n
{{"Already have one? Sign In" | translate }}

\n                                questions\n                            \n
{{"Recommendations for you" | translate }}\n
1 de 5\n                            {{"Completed" | translate }} \n
\n
\n                                    {{"20% Complete" | translate }}\n                                \n                            \n
\n                                \n
\n                                        {{"Eyesight test" | translate }}\n                                    \n
\n                                       {{"Skin test" | translate }}\n                                    \n
\n                                        {{"Anual checkup" | translate }}\n                                    \n
\n                                        {{"Dental cleaning" | translate }}\n                                    \n
\n                                       {{"Medical record" | translate }}\n                                    \n                                \n                            \n                        \n
\n                        \tevent-icon\n                            {{"No upcoming appointments" | translate }}\n                        \n                    \n                \n\t\t\t\t
{{"Answer to your messages" | translate }}\n
\n                \t
\n                    \t
\n                        \t
{{questionR.question}}\n                        \n
\n                        \t{{questionR.created_at | dateFormat}}\n                        \n                    \n\t\t\t\t\t
\n
\n
\n
{{answer.user.username}}\n
{{answer.answer}}\n                            \n
\n
\n                                {{answer.created_at | dateFormat}}\n                            \n
\n
{{"Rate the best answer" | translate }}\n\t\t\t\t\t\t\t\t
\n
\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n                        \n                    \n                \n\t\t    \n        \n    \n')
}]), angular.module("User/my_calender.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("User/my_calender.tpl.html", '
\n
\n        \n
\n            \n            \n
\n
\n
\n                \n
calendar{{\'Todays Appoinments\'| translate}}\n
\n
\n
\n
\n
\n
\n                                        \n                                        {{calendarData.user.username}}\n                                    \n
\n                                        \n                                    \n                                \n
\n
{{calendarData.appointment_time}}\n                                \n
\n
{{calendarData.appointment_date}}\n                                \n
\n
{{\'Clinic\'| translate}} {{calendarData.workplace.location}}\n                                \n
\n
\n                                        \n
\n
{{\'Edit Appointment\'| translate}}
\n
{{\'Note\'| translate}}
\n
{{\'Delete\'| translate}}
\n                                        \n                                    \n                                \n                            \n                        \n                    \n                \n
\n
{{\'No Appoinments Todays\'| translate}}\n                \n
\n                    {{\'Cancel Todays Appointments\'| translate}}\n                \n            \n        \n    \n')
}]), angular.module("User/my_insurances.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("User/my_insurances.tpl.html", '
\n
\n        \n
\n            \n
\n
\n                    \n                \n
\n
\n
    \n
{{\'Insurances\'| translate}}\n                        \n
\n
\n
\n                                    \n
\n                                        \n
\n
\n
\n
\n                                                        {{\'Medical insurance\'| translate}}\n
\n                                                            \n                                                           \n                                                    \n                                                \n                                            \n
\n
\n
\n                                                        {{\'Dental insurance\'| translate}}\n
\n                                                            \n                                                        \n                                                    \n                                                \n                                            \n
\n
\n
\n                                                        {{\'Eyesight insurance\'| translate}}\n
\n                                                            \n                                                        \n                                                    \n                                                \n                                            \n                                        \n                                    \n
\n                                        {{\'Save\'| translate }}\n                                    \n                                \n
\n                                \t
\n
\n
\n
\n
\n                                                    {{\'Accepted medical Insurance\'| translate}}\n
\n                                                    \n                                                          {{"Select medical insurance" | translate }}\n                                                   \n                                                \n                                            \n
\n                                            \t
\n                                                    {{\'Patients per day\'| translate}}\n
\n
\n                                                        {{"Enter patient count" | translate }} \n                                                    \n                                                    \n                                                \n                                            \n                                        \n                                    \n
\n                                        {{"Save" | translate }}\n                                    \n                                \n                                    \n
\n
\n
\n
\n                                                    {{"Insurance Lists" | translate }}\n
\n
{{insuranceList.insurance.name}}{{" | "}}{{insuranceList.allowed_patients}}\n                                                        {{"Revoke" | translate }}\n                                                    \n                                                \n                                            \n                                        \n                                    \n
\n
{{\'No Record Found\'|translate}}\n                                    \n
\n                                        \n                                    \n                                \n                            \n                        \n                    \n\n\t\t\t\t\n            \n        \n    \n');
}]), angular.module("User/my_languages.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("User/my_languages.tpl.html", '
\n
\n
    \n
{{\'My Languages\'| translate}}\n        \n    \n
\n
\n        \t
\n
\n
{{\'Select Your Languages\'| translate}}

\n                \n
\n                \t
\n                        \n                            \n                            \n                            {{language.name}}\n                        \n                    \n                \n
\n                \t
\n                    \t
\n                \t\t\t{{\'Update\'| translate }}\n                \t\t\n                  \t\n                \n            \n        \n   \t\n')
}]), angular.module("User/my_specialties.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("User/my_specialties.tpl.html", '
\n
\n
    \n
{{\'My Specialties\'| translate}}\n        \n    \n
\n
\n
\n
\n
{{\'Select Your Specialties\'| translate}}\n                \n
\n
\n                        \n                            \n                            \n                            {{specialty.name}}\n                        \n                    \n                \n
\n
\n
\n                            {{\'Update\'| translate }}\n                        \n                    \n                \n            \n        \n    \n\n
\n    \n')
}]), angular.module("User/navmenu.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("User/navmenu.tpl.html", '
\n\t
\n\t\t{{tabsMenu.header_text | translate}}\n\t\n')
}]), angular.module("User/notifications.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("User/notifications.tpl.html", '
\n
\n        \n
\n            \n
\n
\n                    \n                \n
\n
\n
\n
{{"Notifications" | translate }}\n                        \n
\n
\n
\n
\n
\n
\n                                                {{"E-mails" | translate }}\n
\n                                                    \n                                                         {{"Wellness reminders" | translate }}\n                                                        \n                                                    \n                                                \n                                            \n                                        \n                                    \n
\n
\n
\n                                                {{"Application Settings" | translate }}\n
{{"Download the latinomedica" | translate }}{{"Android app" | translate }}{{"\n                                                    or the" | translate }} {{"Iphone app" | translate }}.\n
\n                                                    \n                                                         {{"Notify appointment reminders" | translate }}\n                                                        \n                                                    \n                                                \n
\n                                                    \n                                                         {{"Notify if your appointment is reprogrammed or cancelled" | translate }}\n                                                        \n                                                    \n                                                \n
\n                                                    \n                                                         {{"Notify wellness reminders" | translate }}\n                                                        \n                                                    \n                                                \n                                            \n                                        \n                                    \n                                \n
\n                                    {{"Save" | translate }}\n                                \n                            \n                        \n                    \n                \n            \n        \n    \n')
}]), angular.module("User/register.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("User/register.tpl.html", '
\n
\n    \t
\n            \n                logo\n            \n        \n
\n
\n
\n
\n
\n
\n
\n
\n
\n                                            {{user.username}}\n                                        \n                                        \n                                            {{user.username}}\n                                        \n                                        Seleccionar archivo\n                                        \n                                            {{\'Add user photo\' | translate }}\n                                        \n                                        {{\'Allowed extensions: jpg, jpeg, gif, png\'|translate }}\n
\n                                    \n                                \n                            \n                        \n                        \n
\n
{{\'Create a new account\' | translate }}\n                        \n                        \n
\n
\n                                {{\'Name\' | translate }}\n
\n
\n
{{\'Name\' | translate }}
\n                                        {{\'Please enter your first name\'| translate }} \n                                        {{ \'Minimum length is 3\' | translate }}\n                                        {{ \'Enter Valid name without number and space\' | translate }}                                     \n                                    \n
\n
{{\'Last name\' | translate }}
\n                                        {{\'Please enter your last name\'| translate }} \n                                        {{ \'Minimum length is 3\' | translate }}\n                                        {{ \'Enter valid name without number and space\' | translate }}\n                                \n                                \n                            \n                        \n
\n
\n                                {{\'Insert your E-mail address\' | translate}}\n
{{\'Email\' | translate }}
\n                                {{\'Please enter your E-mail id\' | translate }}\n                                {{\'Enter valid E-mail\' | translate }}\n                                {{model.emailErr}}\n                            \n
\n                                {{\'Confirm your E-mail address\' | translate}}\n
{{\'Confirm Email\' | translate }}
\n                                {{\'Please re-enter your E-mail id\'| translate }}\n                                {{\'Enter valid E-mail\'| translate }}\n                                {{\'E-mail Mismatch\'| translate }}\n                                {{model.confirm_emailErr}}\n                            \n
\n                                {{\'Create a Password\' | translate}}\n
{{\'Password\' | translate }}
\n                                {{ \'Enter Password\' | translate }}\n                                {{ \'Minimum length is 6\' | translate }}\n                                {{ \'Maximum length is 20\' | translate }}\n                                {{model.passwordErr}}\n                            \n\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t{{\'Confirm Password\' | translate}}\n
{{\'Confirm Password\'| translate }}
\n                                {{\'Enter Confirm Password\'| translate }}\n                                {{\'Minimum length is 6\'| translate }}\n                                {{\'Maximum length is 20\'| translate }}\n                                {{\'Password Mismatch\'| translate }}\n                                {{model.confirmPasswordErr}}\n                            \n
\n                                {{\'Your Name\' | translate}}\n
\n
\n
{{\'Name\' | translate }}
\n                                        {{\'Please enter your first name\'| translate }} \n                                        {{ \'Minimum length is 3\' | translate }}\n                                        {{ \'Enter Valid name without number\' | translate }}                                         \n                                    \n
\n
{{\'Last name\' | translate }}
\n                                        {{\'Please enter your last name\'| translate }} \n                                        {{ \'Minimum length is 3\' | translate }}\n                                        {{ \'Enter valid name without number\' | translate }}\n                                    \n                            \n                        \n
\n                                {{\'Date of birth\'| translate}}\n
\n
\n
\n
\n
{{\'MM\'| translate }}
\n                                            \n                                            {{\'Enter Month\'| translate }} \n                                            {{\'Enter Valid Month Without Character\'| translate }} \n                                            {{\'Minimum Length is 2\'| translate }} \n                                            {{\'Maximum Length is 2\'| translate }} \n                                        \n                                    \n
\n
\n
\n
{{\'DD\'| translate }}
\n                                            \n                                            {{\'Enter date\'| translate }} \n                                            {{\'Enter Valid date Without Character\'| translate }} \n                                            {{\'Minimum Length is 2\'| translate }} \n                                            {{\'Maximum Length is 2\'| translate }} \n                                        \n                                    \n
\n
\n
{{\'YYYY\'| translate }}
\n                                            {{\'Enter year\'| translate }} \n                                            {{\'Enter Valid year Without Character\'| translate }} \n                                            {{\'Minimum Length is 4\'| translate }} \n                                            {{\'Maximum Length is 4\'| translate }} \n                                        \n                                    \n                                \n                            \n                                \n
\n
\n
\n                                       {{\'Cellphone\'| translate }}\n
\n
{{\'Cellphone\'| translate }}
\n                                            {{\'Enter Mobile Number\'| translate }} \n                                            {{\'Enter Valid Mobile Number Without Character\'| translate }} \n                                            {{\'Minimum Length is 8\'| translate }} \n                                            {{\'Maximum Length is 12\'| translate }} \n                                        \n                                    \n                                \n
\n
\n                                        {{\'City\'| translate }}\n
\n                                            \n                                            \n                                            {{\'Choose City\'| translate }} \n                                        \n                                    \n                                \n                            \n                                \n
\n                                {{\'Hobbies\' | translate }}\n
{{\'Hobbies\'| translate }}
\n                                {{\'Please enter your hobbies\'| translate }} \n                                {{ \'Minimum length is 3\' | translate }}\n                                {{ \'Enter hobbies without number\' | translate }}\n                            \n                            \n
\n                                {{\'Gender\'| translate }}\n
\n
\n                                         {{\'Male\' | translate }}\n                                    \n
\n                                         {{\'Female\' | translate }}\n                                    \n\t\t\t\t\t\t\t\t\t{{\'Please select gender\'| translate }} \n                                \n                                * Required fields\n                            \n                        \n                        \n
\n
\n                                {{\'Username\' | translate}}\n
\n                                {{\'Please enter your Username\'| translate }} \n                                {{ \'Minimum length is 3\' | translate }}\n                                {{ \'Enter valid username without space and caps\' | translate }}\n                                {{model.nameErr}}\n                            \n
\n                                {{\'Email\' | translate}}\n
\n                                {{\'Please enter your mail id\'| translate }}\n                                {{\'Enter valid email\'| translate }}\n                                {{model.emailErr}}\n                            \n
\n                                {{\'Password\' | translate}}\n
\n
\n
Create a Password
\n                                        {{ \'Please enter password\' | translate }}\n                                        {{ \'Minimum length is 6\' | translate }}\n                                        {{ \'Maximum length is 20\' | translate }}\n                                        {{model.passwordErr}}\n                                    \n
\n
Confirm Password
\n                                        {{\'Please enter confirm password\'| translate}}\n                                        {{\'Minimum length is 6\'| translate}}\n                                        {{\'Maximum length is 20\'| translate }}\n                                        {{\'Password Mismatch\'| translate }}\n                                        {{model.confirmPasswordErr}}\n                                \n                                \n                            \n
\n                                {{\'Phone\' | translate}}\n
Phone
\n                                 {{\'Enter Phone Number\'| translate }} \n                                {{ \'Maximum length is 12\' | translate }}\n                                {{ \'Minimum length is 8\' | translate }}\n                                {{\'Enter Valid Mobile Number Without Character\'| translate }} \n                            \n
\n                                {{\'Postal Code\' | translate}}\n
Postal Code
\n                                {{\'Enter Postal Code\'| translate }} \n                                {{ \'Minimum length is 3\' | translate }}\n                                {{ \'Maximum length is 6\' | translate }}\n                            \n
\n                                {{\'Specialty\' | translate}}\n                                \n                                {{\'Please select specialty\'| translate }} \n                            \n
\n                                {{\'Language\' | translate}}\n                                \n                                * Required fields\n                                {{\'Please select language\'| translate }}  \n                            \n                        \n                        \n                       \n    \n
\n
\n                                \n                                    \n                                    {{\'Please read and agree to\'| translate }} {{\'The terms of Use and privace policy\' | translate }}\n                                    \n                                \n\t\t\t\t\t\t    \n                           {{\'Required\'| translate }}\n                        \n                        \n
\n
\n                                \n                                    \n                                    {{\'I have read and agree to\'| translate }} {{settings[\'site.name\'] | translate }}\n                                    \n                                \n\t\t\t\t\t\t\t\t\n                            \n                           {{\'Required\'| translate }} \n                        \n                    \n
\n                        \n
\n                            {{\'Save and continue\' | translate }}\n                        \n
\n
\n                                {{\'Save and continue\' | translate }}\n                            \n                        \n                    \n                \n            \n        \n    \n');
}]), angular.module("User/settings.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("User/settings.tpl.html", '
\n
\n        \n
\n            \n
\n
\n
\n
Profile\n
Password\n
\n                            Notifications\n                        \n
\n                            Family or Friends\n                        \n
Insurance\n
Demographic Information\n
Authorization\n                    \n                \n
\n                    \n                \n            \n        \n    \n')
}]), angular.module("User/sidemenu.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("User/sidemenu.tpl.html", "
\n
\n        Profile\n    \n\t
\n\t\tPassword\n\t\n
\n        Notifications\n    \n\t
\n        Family or Friends\n    \n
\n\t\tInsurance\n\t\n
\n\t\tDemographic Information\n\t\n
\n\t\tAuthorization\n\t\n")
}]), angular.module("User/updateDiseaseForm.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("User/updateDiseaseForm.tpl.html", '
\n
\n    \t
\n
{{\'Specialty Diseases\' | translate}}

\n      \t\n    \n')
}]), angular.module("User/user_profile.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("User/user_profile.tpl.html", '
\n
\n        \n
\n            \n
\n
\n                    \n                \n
\n
\n
\n
{{\'Profile\'| translate}}\n                            \n                        \n
\n
\n
\n                                    \n
\n
\n
\n                                                {{\'Name\'| translate}}\n
{{$root.auth.user_profile.display_name}}\n                                            \n
\n                                                {{\'Update profile photo\'| translate}}\n                                            \n                                            Seleccionar archivo\n                                        \n
\n
\n
\n
\n                                                        {{\'E-mail\'| translate}}\n
\n                                                    \n                                                \n                                            \n                                        \n
\n
\n
\n
\n                                                        {{\'Cellphone\'| translate}}\n
{{\'Mobile\'| translate}}
\n                                                        {{\'Enter Mobile Number\'| translate }} \n                                                        {{\'Enter Valid Mobile Number Without Character\'| translate }} \n                                                        {{\'Minimum Length is 8\'| translate }} \n                                                        {{\'Maximum Length is 12\'| translate }} \n                                                    \n                                                \n
\n
\n                                                        {{\'Home phone(Optional)\'| translate}}\n
{{\'Mobile\'| translate}}
\n                                                        {{\'Enter Home phone Number\'| translate }} \n                                                    \n                                                \n
\n
\n                                                        {{\'Work phone(Optional)\'| translate}}\n
{{\'Mobile\'| translate}}
\n                                                        {{\'Enter Work phone\'| translate }} \n                                                    \n                                                \n                                            \n                                        \n
\n
\n
\n
\n                                                        {{\'Hobbies\'| translate}}\n
\n
{{\'Hobbies\'| translate}}
\n                                                            {{\'Enter Hobbies\'| translate }} \n                                                        \n                                                    \n                                                \n                                            \n                                        \n
\n
\n                                                {{\'Social Network\'| translate}}\n
\n
\n
\n
\n
\n\n
{{\'Instagram Url\'| translate}}
\n                                                                {{\'Enter Instagram Url\'| translate }} \n\n                                                            \n                                                        \t\n                                                        {{\'Enter Instagram Url\'| translate }} \n                                                    \n                                                \n
\n
\n
\n
\n
\n\n
{{\'Twitter Url\'| translate}}
\n                                                                {{\'Enter Instagram Url\'| translate }} \n\n                                                            \n                                                        \n                                                        {{\'Enter Twitter Url\'| translate }} \n                                                    \n                                                \n
\n
\n
\n
\n
\n\n
{{\'Facebook Url\'| translate}}
\n                                                                {{\'Enter Instagram Url\'| translate }} \n\n                                                            \n                                                        \n                                                        {{\'Enter Facebook Url\'| translate }} \n                                                    \n                                                \n                                            \n                                        \n
\n
\n                                                {{\'Address(Optional)\'| translate}}\n
\n
\n
{{\'Physical address\'| translate}}
\n                                                        {{\'Physical address\'| translate }} \n                                                    \n                                                \n
\n
\n
{{\'#apt, unit\'| translate}}
\n                                                        {{\'#apt, unit\'| translate }} \n                                                    \n                                                \n
\n
\n
City
\n                                                        {{\'Choose City\'| translate }} \n                                                    \n                                                \n
\n
\n                                                        \n                                                        {{\'Enter Country\'| translate }} \n                                                    \n                                                \n
\n
\n
{{\'Postal Code\'| translate}}
\n                                                        {{\'Enter Postal Code\'| translate }} \n                                                    \n                                                \n                                            \n                                        \n
\n
\n                                                {{\'Gender\'| translate}}\n
\n
\n                                                        \n                                                        {{\'Choose Gender\'| translate }} \n                                                    \n                                                \n                                            \n                                        \n
\n
\n                                                Date of birth\n
\n
\n
\n                                                            \n
Date
\n                                                        \n                                                        {{\'Choose DOB\'| translate }} \n                                                    \n                                                \n                                            \n                                        \n                                    \n                                \n
\n
\n
{{\'Upload your picture to help your medical team\'| translate}}\n
\n                                            \n                                                \n                                                        {{user.username}}\n                                                        {{user.username}}\n                                                    \n                                            \n                                            Seleccionar archivo\n                                            \n                                                    Change picture...\n                                                    {{\'Cancel Update profile photo\'| translate}}\n                                                \n                                            {{\'Allowed extensions: jpg, jpeg, gif, png\'|translate}}\n
\n                                        \n                                    \n                                \n                            \n
\n
\n
\n
\n                                                {{\'Description\'| translate}}\n
\n
                                                    \n                                                    \n                                                    {{\'Enter Professional Statement\'| translate }} \n                                                \n                                            \n
\n
\n                                                    {{\'Save\'| translate }}\n                                                    {{\'Cancel\'| translate }}\n                                                \n
\n                                                    \n                                                        {{\'Deactivate my account\'| translate }}\n                                                    \n                                                \n                                            \n                                        \n                                    \n                                \n                        \t\n                    \t\n                \t\n            \t\n            \n        \n    \n');
}]), angular.module("User/user_settings.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("User/user_settings.tpl.html", '
\n\t{{"Welcome" | translate }}, {{$root.auth.user_profile.display_name}}\n        \n    \n
\n    \t
\n        \t
\n            \t
\n
{{\'Profile Details\' | translate}}\n
\n                    \t
{{\'Dashboard\' | translate}}
\n
{{\'View Profile\' | translate}}
\n
{{\'Change Password\' | translate}}

{{\'Settings\' | translate}}
\n
{{\'Messages\' | translate}}
  \n
{{\'My Educations\' | translate}}
\n
{{\'Badges\' | translate}}
  \n                    \n
{{\'Work Places\' | translate}}\n
\n                    \t
{{ \'My Workplaces\' | translate }}
\n                    \n               \t\n            \t \n            \t
\n
{{\'Facilities\' | translate}}\n
\n
{{\'My Appointments\' | translate}}
\n
{{\'Subscription Plans\' | translate}}
    \n
{{\'My Subscription\' | translate}}
\n
{{\'My Specialties\' | translate}}
\n
{{\'My Insurances\' | translate}}
\n
{{\'My Languages\' | translate}}
\n
{{\'My Clinic Photos\' | translate}}
\n
{{\'Ical\' | translate}}
\n
{{\'Book a new appointment\' | translate}}
\n
{{\'My Doctors\' | translate}}
\n
{{\'Questions\' | translate}}
\n
{{\'Answers\' | translate}}
\n
{{\'Admin Dashboard\' | translate}}
\n                    \n              \t\n            \t
                    \n
{{\'Exit\' | translate}}\n
\n                    \t
{{ \'Sign out\' | translate }}
\n                    \n              \t\n       \t\t\n        \n    \n')
}]), angular.module("User/user_view.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("User/user_view.tpl.html", '
\n
\n
\n            \n
\n                \t
\n
Google Maps\n                        \n                    \n                \t
\n
\n
\n
\n                                \n
\n
\n                            \n                        \n
\n                            {{\'Origin\'| translate }}\n
\n                        \n
\n                            {{\'Destination\'| translate }}\n                            \n                        \n
\n                            {{\'Calculate Route\'| translate }}\n                        \n                    \n                \n
\n                    \n                        \n                        \n                        \n                    \n                \n
\n                    Directions path length: {{map.directionsRenderers[0].directions.routes[0].overview_path.length}}\n                \n
\n
{{\'Sorry No Locations.\' |translate}}\n                \n            \n            \n            \n        \n
\n        \t\n        \n
\n
\n
{{\'No map location found !\' |translate}}\n            \n        \n    \n\t
\n
\n
\n
\n
\n                        \n                            {{model.user.username}}\n                            {{model.user.username}}\n                        \n                    \n
\n
{{\'Dr.\'| translate }}{{model.user.user_profile.first_name}} {{model.user.user_profile.last_name}}\n
\n                                    {{$first ? \'\' : $last ? \' and \' : \', \'}} {{specialty.name | translate }}\n

\n                        \n
{{"Code" | translate }}: {{model.user.user_code}}

\n
\n
\n                                \n                            \n
\n                                \n                                    {{\'Read patient reviews\'| translate }}\n                                \n                            \n
\n                                {{\'Practices\' | translate }} {{\'Immediate and primary\' | translate }}\n                            \n
\n                                {{\'Print\' | translate }}\n                            \n
\n
\n                                    \n                                \n                            \n                        \n                    \n                \n            \n        \n
\n
\n
\n
\n
{{\'Qualifications and experience\' | translate }}\n
\n
\n
{{\'Education\' | translate }}\n                            \n
\n
\n
\n
{{\'Accomplishments\' | translate }}\n
{{education.education}}\n                                    \n
\n
{{\'Universities\' | translate }}\n
{{education.organization}}\n                                    \n                                \n
\n
\n
\n                                            {{\'Education not yet added\' | translate }}\n                                        \n                                    \n                                \n                            \n                        \n
\n
\n
{{\'Hospital affiliation\' | translate }}\n                            \n
\n                                \n                                    {{model.user.user_profile.hospital_affiliation}}\n                                \n                            \n                        \n
\n
\n
{{\'Languages spoken at the consulting room \' | translate }}\n                            \n
\n
\n
 \n                                        {{language.name}}\n                                    \n
{{\'See all...\' | translate }}
\n                                \n
\n                                    {{\'Language not yet added\' | translate }}\n                                \n                            \n                        \n
\n
\n
{{\'Postgraduate Specialization\' | translate }}\n                            \n
\n                                \n                                    {{$first ? \'\' : $last ? \' and \' : \', \'}} {{specialty.name}}\n                                \n
\n                                    {{\'Specialty not yet added\' | translate }}\n                                \n                            \n                        \n
\n
\n
{{\'Insurances inside the network\' | translate }}\n                            \n
\n                                \n                                    {{$first ? \'\' : $last ? \' and \' : \', \'}} {{patient.insurance.name | capitalize}}\n                                \n
\n                                    {{\'Insurances not yet added\' | translate }}\n                                \n                            \n                        \n
\n
\n
{{\'Latinomédica Awards\' | translate }}\n                            \n
\n
\n

\n                                \n
\n                                    {{\'Awards not yet added\' | translate }}\n                                \n                            \n                        \n                    \n                    \n
\n
\n
{{\'Patient verification and reviews\'| translate }}\n                            \n                            \n
\n
\n
\n                                        \n                                    \n                                \n                            \n
\n
\n
\n                                        {{\'Doctor not able to add review\' | translate }}\n                                    \n
\n
\n                                            {{\'You are not able to add more than one review for a doctor\' | translate }}\n                                        \n
\n                                            {{\'You are not able to add the review. Need to visit the doctor atleast once.\' | translate }}\n                                        \n                                    \n                                \n                            \n
\n
\n
{{ review.created_at | dateFormat }}\n                                    {{\'by \'| translate  }} {{review.pet_name}}\n
{{\'(Verified Patient)\' | translate }}\n                                \n
\n
\n
\n
{{\'General Opinion\'| translate }}\n                                            \n                                        \n
\n
{{\'Patient Care\'| translate }}\n                                            \n                                        \n
\n
{{\'Waiting Time\'| translate }}\n                                            \n                                        \n                                    \n
\n
{{review.review}}\n                                    \n                                \n                            \n
\n                                {{\'Not yet reviewed\'| translate }}\n                            \n
\n                                \n                            \n                        \n                    \n                \n
\n
\n
\n
\n
\n                                    \n                                \n                             \n
\n
{{\'No Clinic images found !\' | translate }}\n                             \n                         \n                        \n
{{\'Available times for the appointment\' | translate }}\n
\n
\n
{{searchLists.worklocationName}}\n
\n
\n
{{model.siteCurrency}} {{searchLists.worklocationPrice}}\n
\n
\n
\n                                                     \n                                                \n
\n
\n
{{searchLists.days.today.day}}\n
{{searchLists.days.today.date}}\n                                                    \n                                                \n
\n
\n
{{searchLists.days.day2.day}}\n
{{searchLists.days.day2.date}}\n                                                    \n                                                \n
\n
\n
{{searchLists.days.day3.day}}\n
{{searchLists.days.day3.date}}\n                                                    \n                                                \n
\n
\n
{{searchLists.days.day4.day}}\n
{{searchLists.days.day4.date}}\n                                                    \n                                                \n
\n                                                    \n                                                        \n                                                \n                                            \n                                        \n
\n
\n
\n
\n
\n
\n                                                                \n                                                                    \n                                                                        {{todaySlot}}\n                                                                    \n                                                                \n                                                                        {{todaySlot}}\n                                                                    \n                                                                \n                                                                \n                                                                    \n                                                                        {{todaySlot}}\n                                                                    \n                                                                \n                                                                        {{todaySlot}}\n                                                                    \n                                                                \n                                                            \n                                                        \n                                                    \n
\n
\n
\n                                                                \n                                                                    \n                                                                        {{Day2}}\n                                                                    \n                                                                \n                                                                        {{Day2}}\n                                                                    \n                                                                \n                                                                \n                                                                    \n                                                                        {{Day2}}\n                                                                    \n                                                                \n                                                                        {{Day2}}\n                                                                    \n                                                                \n                                                            \n                                                        \n                                                    \n
\n
\n
\n                                                                \n                                                                    \n                                                                        {{Day3}}\n                                                                    \n                                                                \n                                                                        {{Day3}}\n                                                                    \n                                                                \n                                                                \n                                                                    \n                                                                        {{Day3}}\n                                                                    \n                                                                \n                                                                        {{Day3}}\n                                                                    \n                                                                \n                                                            \n                                                        \n                                                    \n
\n
\n
\n                                                                \n                                                                    \n                                                                        {{Day4}}\n                                                                    \n                                                                \n                                                                        {{Day4}}\n                                                                    \n                                                                \n                                                                \n                                                                    \n                                                                        {{Day4}}\n                                                                    \n                                                                \n                                                                        {{Day4}}\n                                                                    \n                                                                \n                                                            \n                                                        \n                                                    \n                                                \n
\n
\n
\n                                                            {{\'No Slots Available\' | translate }}\n                                                        \n                                                    \n                                                \n
\n                                                    \n                                                        More \n                                                    \n                                                    \n                                                        Less \n                                                    \n                                                \n                                            \n                                        \n                                    \n                                \n                            \n                        \n                    \n                \n            \n
\n
{{"Doctor\'s Description" | translate }}\n
\n
\n                    {{\'No Description Added\' | translate }}\n                \n                \n            \n
\n
\n
{{\'Ask the Doctor\'| translate }}\n                \n
\n                    \n                \n            \n        \n
\n            \n            \n            \n            \n            \n            \n        \n\t\n\n\n\n');
}]), angular.module("Home/featured_specialist_doctor.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("Home/featured_specialist_doctor.tpl.html", '
\n    \n                        \t\n            Previous\n        \n
\n
\n
\n
\n
\n                            specialists\n                        \n                    \n                    specialist-logo\n                \n
\n
\n                        \n                            {{doctors.user_profile.data.display_name}}\n                        \n                    \n
{{ doctors.user_profile.data.practice_name | translate}}\n                    {{ doctors.user_profile.data.specialties[0].name | translate}}\n
\n
\n
\n\t\t\t\t\t\t\t\t\n                            \n                        \n                    \n                \n
\n
\n                        \n                             {{doctors.points}}\n                        \n                    \n
\n                        \n                             {{doctors.doctor_view_count}}\n                        \n                    \n
\n                        \n                            \n                        \n
\n
{{ \'Share\' | translate }}
\n
\n
\n                        \n                    \n                \n            \n        \n        \n            Next\n        \n    \n')
}]), angular.module("Home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("Home/home.tpl.html", '
\n\t\n
\n
\n        \t
\n               logo\n            \n
{{"Surprised! Find a Doctor" | translate }}\n
{{"Your Medical Directory" | translate }}\n
{{"Only medical and health professionals" | translate }}\n
\n            \t
\n
\n
\n                    \n
\n                        \n                    \n
 \n                        \n                    \n
\n                        \n                    \n                \n            \n        \n    \n    \n    \n    \n   \t
\n    \t
\n        \t
\n            \t
\n                \t
{{"Are you a Doctor Five Star?" | translate }}\n
{{"List your practice to reach millions of patients" | translate }}\n
\n                    \t
{{"Attract and attract new patients" | translate }}\n
{{"Build and strengthen their online reputation" | translate }}\n
{{"Provide premium patient experience" | translate }}\n                    \n                    {{"List your practice in" | translate }} {{$root.settings[\'site.name\']}}\n                \n
\n                \tdoctor\n
\n                    \t
\n
\n                            \n                        \n                    \n                \n            \n        \n    \n    \n    \n    \n
\n    \t
\n        \t
\n            \t
\n                \t
\n                    \tapp\n
\n                        \t
\n                            \t\n                            \t\tandroid\n                                \n                            \n
\n                            \t\n                            \t\tiphone\n                                \n                            \n
\n                            \t\n                            \t\twindows\n                                \n                            \n                        \n                    \n                \n
\n                \t
{{"Get the application" | translate }} {{$root.settings[\'site.name\']}}\n
\n                    \t
{{"Check the map of doctors in your insurance network" | translate }}\n
{{"See patient comments to help you choose the right doctor" | translate }}\n
{{"See schedule any doctor available, and click to book instantly" | translate }}\n                    \n                \n
\n                \t
\n                    \tapp\n
\n                        \t
\n                            \t\n                            \t\tandroid\n                                \n                            \n
\n                            \t\n                            \t\tiphone\n                                \n                            \n
\n                            \t\n                            \t\twindows\n                                \n                            \n                        \n                    \n                \n            \n        \n    \n        \n    \n
\n    \t
\n        \t
\n
{{"Featured Specialists" | translate }}\n                \n            \n\n                \n             \n            \n            \n            \n        \n    \n    \n    \n    \n    \t\n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n
\n    \t
\n        \t
{{"Find Doctor by" | translate }}{{"..."}}\n
\n
\n
\n
{{"City" | translate }}
\n
\n
\n                                {{citiesliList.name}}\n                            \n
\n                          \t\t{{"More" | translate }}{{"..."}}\n                                {{"Less" | translate }}\n                            \n                        \n                    \n                \n
\n
\n
{{"Specialty" | translate }}
\n
\n
\n                                {{specialtyliList.name | translate}}\n                            \n
\n                          \t\t{{"More" | translate }}{{"..."}}\n                                {{"Less" | translate }}\n                            \n                        \n                    \n                \n
\n
\n
{{"Insurance" | translate }}
\n
\n
\n                                {{insurance.name | translate}}\n                            \n
\n                          \t\t{{"More" | translate }}{{"..."}}\n                                {{"Less" | translate }}\n                            \n                        \n                    \n                \n            \n
{{"Or search by Name" | translate }}{{","}} {{"Practice" | translate }}{{","}} {{"Procedure" | translate }} {{" or Clinic" | translate }}\n       \t\n   \t\n\t\n    \n    \n    \n    \n    \n    \n    \t
\n        \t
\n            \t
{{"Patients are losing patience when trying to access your attention" | translate }}\n
{{"See why we are the perfect partner for health systems" | translate }}\n
\n                \t
\n                    \t\n                        \tclient-centro\n                        \n                    \n
\n                    \t\n                        \tclient-clinica\n                        \n                    \n
\n                    \t\n                        \tclient-maracay\n                        \n                    \n
\n                    \t\n                        \tclient-medicas\n                        \n                    \n
\n                    \t\n                        \tclient-hospital\n                        \n                    \n
\n                    \t\n                        \tclient-sociedad\n                        \n                    \n                \n
{{"Join us and our partners" | translate }}

\n            \n        \n    \n    \n');
}]), angular.module("Appointments/appointment_booking_appt_info.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("Appointments/appointment_booking_appt_info.tpl.html", '
\n\t
\n    \t
\n
 \n            \n
\n                \n            \n        \n    \n
\n
\n        \t
{{"Book Your Appointment" | translate }}\n        \n
\n\t\t\t
\n
\n
\n
{{"Have you used" | translate }} {{$root.settings[\'site.name\']}} {{"before" | translate }} {{"?"}}\n
{{"We will use the information from your last visit" | translate }}\n
\n
\n                                \n                                    \n                                    {{"I\'m new in" | translate }} {{$root.settings[\'site.name\']}}\n                                \n                            \n
\n                                \n                                    \n                                    {{"I have used" | translate }} {{$root.settings[\'site.name\']}} {{" before" | translate }}\n                                \n                            \n                        \n                    \n
\n
\n
\n
\n
{{"Log in or create an account" | translate }}\n                            \n
{{"Access your" | translate }} {{$root.settings[\'site.name\']}} {{"account" | translate }}\n
\n
\n
\n                                        \n
{{\'Email\'| translate }}
\n                                        {{"Enter Email" | translate }}\n                                        {{"Enter your email" | translate }}\n                                    \n                                \n                            \n
\n
\n
\n                                        \n
{{\'Password\' | translate }}
\n                                        {{"Enter Password" | translate }}\n                                        {{"Minimum length is 6" | translate}}\n                                        {{"Maximum length is 40" | translate }}\n                                    \n                                \n                            \n
\n
\n                                    \n                                        {{"keep me signed in" | translate }}\n                                        \n                                    \n                                \n                            \n
\n
\n                                    {{"Log In" | translate }}\n                                \n                            \n
{{"Forget your Password?" | translate }}

\n                        \n                        \n                    \n
\n
\n
\n
\n
{{"Create your account" | translate }}\n                                {{"This will help you handle your appointments" | translate }}\n                            \n
\n                                {{"Cellphone" | translate }}\n
\n
\n                                        \n
{{\'Mobile\'| translate}}
\n                                    \n                                    {{"Enter Mobile Number" | translate }} \n                                    {{"Enter Valid Mobile Number Without Character" | translate }} \n                                    {{"Minimum Length is 8" | translate }} \n                                    {{"Maximum Length is 12" | translate }} \n                                \n                            \n
\n
\n
\n                                    {{"Insert your E-mail address" | translate }}\n
{{\'Email\' | translate }}
\n                                    {{"Please enter your E-mail id" | translate }}\n                                    {{"Enter valid E-mail" | translate }}\n                                    {{model.emailErr}}\n                                    \n                                \n                            \n
\n
\n
\n                                        {{"Confirm your E-mail address" | translate }}\n
{{\'Confirm Email\' | translate }}
\n                                        {{"Please re-enter your E-mail id" | translate }}\n                                        {{"Enter valid E-mail" | translate }}\n                                        {{"E-mail Mismatch" | translate }}\n                                        {{model.confirm_emailErr}}\n                                    \n                                \n                            \n
\n
\n                                    \n                                        \n                                        {{"Please, send me emails with preventive health care remainders. recommended" | translate }}\n                                        \n                                    \n                                \n                            \n
\n
\n                                    {{"Create a Password" | translate }}\n
{{\'Password\' | translate }}
\n                                    {{"Enter Password" | translate }}\n                                    {{"Minimum length is 6" | translate }}\n                                    {{"Maximum length is 20" | translate }}\n                                    {{model.passwordErr}}\n                                \n                            \n\t\t\t\t\t\t\t
\n
{{\'Confirm Password\' | translate }}
\n                                        {{"Please enter confirm password" |  translate }}\n                                        {{"Minimum length is 6" | translate }}\n                                        {{"Maximum length is 20" |  translate }}\n                                        {{"Password Mismatch" | translate }}\n                                        {{model.confirmPasswordErr}}\n                                \n
\n
\n                                    {{"Name" | translate }}\n
\n
{{\'First Name\' | translate }}
\n                                        {{"Please enter your first name" | translate }} \n                                        {{"Minimum length is 3" | translate }}\n                                        {{"Enter Valid name without number" | translate }}\n                                    \n
\n
{{\'Last Name\' | translate }}
\n                                        {{"Please enter your last name" | translate }} \n                                        {{"Minimum length is 3" | translate }}\n                                        {{"Enter valid name without number" | translate }}\n                                    \n                                \n                            \n
\n                                {{"Date of birth" | translate }}\n
\n
\n
\n
\n
{{\'Day\' | translate }}
\n                                            \n                                            {{"Enter date" | translate }} \n                                            {{"Enter Valid date Without Character" | translate }} \n                                            {{"Minimum Length is 2" | translate }} \n                                            {{"Maximum Length is 2" | translate }} \n                                        \n                                    \n
\n
\n
\n
{{\'Month\' | translate }}
\n                                            \n                                            {{"Enter Month" | translate }} \n                                            {{"Enter Valid Month Without Character" | translate }} \n                                            {{"Minimum Length is 2" | translate }} \n                                            {{"Maximum Length is 2" | translate }} \n                                        \n                                    \n
\n
\n
\n
{{\'Year\' | translate }}
\n                                            \n                                            {{"Enter year" | translate }} \n                                            {{"Enter Valid year Without Character" | translate }} \n                                            {{"Minimum Length is 4" | translate }} \n                                            {{"Maximum Length is 4" | translate }} \n                                        \n                                    \n                                \n                            \n
\n                                \n                                {{"Gender" | translate }}\n                                \n                                {{"Select a Gender" | translate }}\n                            \n
\n
\n                                    \n                                        \n                                        {{"Please read and agree to The Terms of Use and Privacy Policy" | translate }}\n                                        \n                                    \n                                \n                                {{"Required" | translate }}\n                            \n
\n
\n                                    \n                                        \n                                        {{"I have read and agree to" | translate }} {{$root.settings[\'site.name\']}} {{"Contract" | translate }}\n                                        \n                                    \n                                \n                                {{"Required" | translate }}\n                            \n                        \n
\n
\n
\n                                    {{"Join Now" | translate }}\n                                \n                            \n                        \n                    \n                    \n                \n\t\t\t\n        \t
\n
\n
\n
\n                            {{"Will you use your health insurance?" | translate }}\n                            \n\t\t\t\t\t\t\t {{"Please select" | translate }}\n                        \n\t\t\t\t\t\t
\n\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t \n                            \n                                {{"Select a insurance" | translate }}\n                            \n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t
{{"Apointment Slots finished insurance" | translate }}\n                                {{insurance.name | capitalize}}\n                            \n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t
{{noInsurance | translate }}\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\n
\n                            {{"What\'\\s the reason of your visit?" | translate }}\n                             \n                            {{"Select a Reason" | translate }}\n                        \n
\n                            {{"Have you seen this doctor before?" | translate }}\n
\n
\n                                    \n                                        \n                                        {{"I am a new patient" | translate }}\n                                    \n                                \n
\n                                    \n                                        \n                                        {{"I am an existing patient of this practice" | translate }}\n                                    \n                                \n                            \n                        \n
\n                       \n
\n                            {{"Book for Free" | translate }}\n                        \n                    \n                \n
\n
\n                         {{$root.auth.user_profile.dr_title}} {{$root.auth.user_profile.first_name}} {{"Doctor will not able to schedule an appointment" | translate }}\n                    \n                \n        \t\n        \t
\n
\n
{{doctorSpecialtyDiseases[0].name}}\n
\n
\n
\n
\n                                {{doctorProfile.dr_title}} {{doctorProfile.first_name}} {{doctorProfile.last_name}}\n                                \n                            \n
\n
{{doctorProfile.dr_title}} {{doctorProfile.first_name}} {{doctorProfile.last_name}}\n
\n                                \n\t\t\t\t\t\t\t\t{{$first ? \'\' : $last ? \' and \' : \', \'}} {{specialty.name}}\n                            \n
{{doctorProfile.work_place.data.location}}\n
{{"Read reviews" | translate }}

\n
Code: {{doctorProfile.User.data.user_code}}

\n
 {{doctorProfile.address}} \n                            \n                        \n                    \n
\n                        \n
{{appt_date}}- {{appt_time}}

\n                    \n
\n
\n
\n
{{"Patient" | translate }}\n
{{$root.auth.username}}\n                            \n
\n
{{"Reason for your Visit" | translate }}\n
{{reasonToVisit}}\n                            \n                        \n                    \n                \n            \n\t\t\t\t
{{"Safe booking" | translate }}\n        \t\n        \n\t\n');
}]), angular.module("Appointments/appointment_booking_confirm.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("Appointments/appointment_booking_confirm.tpl.html", '
\n\t
\n    \t
\n
 \n            \n
\n                \n            \n        \n    \n
\n
\n
{{\'Book Your Appointment\'| translate}}\n        \n        \n
\n        \t
\n            \t
\n
\n                        Dr. Patricia A. Lloyd\n                    \n
\n
{{doctorProfile.dr_title}} {{doctorProfile.first_name}} {{doctorProfile.last_name}}\n                        \n                    \n                \n            \n
\n            \t
 {{doctorProfile.address}} \n            \n
\n            \t
 \n
\n
{{\'Appt Date:\'| translate }}{{appt_date}}
\n
{{\'Appt Time:\'| translate }}{{appt_time}}
\n                    \n                \n            \n        \n    \t
\n
\n                \n                    \n                        \n                            \n                            \n                            \n                            \n                            \n                        \n                    \n                    \n                        \n                            \n                            \n                            \n                            \n                            \n                        \n                    \n
Name	Email Id	Mobile	DOB	Gender
{{name}}	{{email}}	{{mobile}}	{{dob}}	{{gender}}
\n            \n
\n                Confirm Your Appointment  \n                Cancel Booking  \n            \n        \n    \n')
}]), angular.module("Appointments/appointment_booking_details.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("Appointments/appointment_booking_details.tpl.html", '
\n\t
\n    \t
\n
 \n            \n
\n                \n            \n        \n    \n
\n
\n
{{\'Book Your Appointment\'| translate}}\n        \n        \n
 \n
\n
{{\'Doctor\'| translate}}\n
\n                    Dr. Patricia A. Lloyd    \n
\n                        {{doctorProfile.dr_title}} {{doctorProfile.first_name}} {{doctorProfile.last_name}}\n                    \n
\n                    \n                    \n
 {{doctorProfile.address}} \n
 \n
\n
 {{\'Appt Date:\'| translate }} {{appt_date}} \n
 {{\'Appt Time:\'| translate }} {{appt_time}}\n                        \n                    \n                    \n                \n            \n        \n
\n
\n
\n
\n                        Phone number where the doctor can contact you\n
 \n                    \n
\n                        Any note\'s for the doctor\'s office?\n
\n                    \n
\n                        {{\'Book for Free\'| translate }}\n                    \n                \n            \n
\n
\n                     {{$root.auth.user_profile.dr_title}} {{$root.auth.user_profile.first_name}} Doctor will not able to schedule an appointment.\n                \n            \n        \n    \n')
}]), angular.module("Appointments/appointment_booking_patient_info.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("Appointments/appointment_booking_patient_info.tpl.html", '
\n
\n
\n
\n            \n
\n                \n            \n        \n    \n
\n
\n
{{"Book Your Appointment" | translate }}\n        \n
\n
\n
\n
\n
\n
\n
\n                                    {{"who\'s is going to see the Doctor?" | translate }}\n
\n                                        \n                                                {{"Myself" | translate }}\n                                            \n                                    \n
\n                                        \n                                                {{"A family member" | translate }}\n                                            \n                                    \n
\n                                        \n                                                {{"Other person" | translate }}\n                                            \n                                    \n                                \n                            \n                        \n
\n
\n
First Name
\n                                {{"First Name Required" | translate }}\n                                {{"Minimum 3 character required" | translate }}\n                                {{"Maximum 25 Character" | translate }}\n                            \n
\n
Last Name
\n                                {{"Last Name Required" | translate }}\n                                {{"Minimum 1 character required" | translate }}\n                                {{"Maximum 20 Character" | translate }}\n                                {{"Enter a valid name without numbers" | translate }}\n                            \n
\n                                \n                                {{\'Select a Gender\'| translate }}\n                            \n
\n
Postal Code
\n                                {{\'Postal Code Required\'| translate }}\n                                {{\'Minimum 3 Character Required\'| translate }}\n                                {{\'Maximum 10 Character Required\'| translate }}\n                            \n                        \n
\n
\n                                {{"Family member or friend" | translate }}\n                                \n                            \n
\n                                {{"Add a new Family of Friend" | translate }}\n
\n
\n
\n
\n
{{\'Name of the family member or Patient\'| translate }}
\n                                            \n                                            {{"Enter Name"| translate }}\n                                        \n                                    \n
\n
\n
\n
{{\'Relation\'| translate }}
\n                                            \n                                            {{"Enter Relationship"| translate }} \n                                        \n                                    \n
\n
\n
\n
{{\'age\' | translate }}
\n                                            \n                                            {{"Enter age" | translate }} \n                                            {{"Enter Valid age Without Character" | translate }} \n                                        \n                                    \n
\n
\n                                            \n                                            {{\'Select a Gender\'| translate }}\n                                        \n                                    \n                                \n                            \n                        \n
\n
\n
First Name
\n                                {{\'First Name Required\'| translate }}\n                                {{\'Minimum 3 character required\'| translate }}\n                                {{\'Maximum 25 Character\'| translate }}\n                                {{\'Enter a valid name without numbers\'| translate }}\n                            \n
\n
Last Name
\n                                {{\'Last Name Required\'| translate }}\n                                {{\'Minimum 1 Character\'| translate }}\n                                {{\'Maximum 20 Character\'| translate }}\n                                {{\'Enter a valid name without numbers\'| translate }}\n                            \n
\n
Postal Code
\n                                {{\'Postal Code Required\'| translate }}\n                                {{\'Minimum 3 Character Required\'| translate }}\n                                {{\'Maximum 10 Character Required\'| translate }}\n                            \n
\n
Email
\n                                {{\'Enter Email\'| translate }}\n                                {{\'Enter valid email\'| translate }}\n                            \n
\n
DOB
\n                                {{\'Select DOB\'| translate }}\n                            \n
\n                                \n                                {{\'Select a Gender\'| translate }}\n                            \n                        \n\n
\n
\n
Mobile
\n                                {{"Enter Phone Number" | translate }}\n                                {{"Minimum 8 digits" | translate }}\n                                {{"Maximum 12 digits" | translate }}\n                                {{"Enter a valid phone number" | translate }}\n                            \n
\n
{{\'Any note\\\'s for the doctor\\\'s office?\' | translate }}
\n                            \n                        \n
\n                            {{"Appointment time" | translate }}\n
\n
\n
\n
\n
9:30 AM
\n                                    \n                                \n
\n
\n
Monday: 22/01/2017
\n                                    \n                                \n
\n
\n
Clinica Maracay
\n                                        \n                                            \n                                        \n                                    \n                                \n                            \n                        \n
\n
\n                                {{"Book for Free" | translate }}\n                            \n                        \n                    \n                \n\n
\n
\n                         {{$root.auth.user_profile.dr_title}} {{$root.auth.user_profile.first_name}}{{"Doctor\n                        will not able to schedule an appointment" | translate }}\n                \n            \n
\n
\n
{{doctorSpecialtyDiseases[0].name}}\n
\n
\n
\n
\n                                    {{doctorProfile.dr_title}} {{doctorProfile.first_name}} {{doctorProfile.last_name}}\n                                \n                            \n
\n
{{doctorProfile.dr_title}} {{doctorProfile.first_name}} {{doctorProfile.last_name}}\n                                \n
\n                                \n\t\t\t\t\t\t\t\t{{$first ? \'\' : $last ? \' and \' : \', \'}} {{specialty.name}}\n                            \n
{{doctorProfile.work_place.data.location}}\n
{{"Read reviews" | translate }}

\n
Code: {{doctorProfile.User.data.user_code}}

\n
 {{doctorProfile.address}} \n                            \n                        \n                    \n
\n                        \n
{{appt_date}}- {{appt_time}}

\n                    \n
\n
\n
\n
{{"Patient" | translate }}\n
{{$root.auth.username}}\n                            \n
\n
{{"Reason for your Visit" | translate }}\n
{{reasonToVisit}}\n                            \n                        \n                    \n                \n                \n
{{"Safe booking" | translate }}\n            \n        \n    \n');
}]), angular.module("Appointments/appointment_index.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("Appointments/appointment_index.tpl.html", '
\n
\n        \n
\n
\n                \n
\n
\n
\n
\n
\n
\n
\n
{{\'Appointments\'|translate}} \n
\n
\n                                                     {{\'All\'| translate}} \n                                                \n                                                \n
\n
 {{\'Pending Approval\'| translate}}
\n
 {{\'Approved\'| translate}}
\n
 {{\'Cancelled\'| translate}}
\n
 {{\'Rejected\'| translate}}
\n                                                \n                                                 \n                                            \n                                        \n                                    \n    \n                                    \n                                \n                            \n                        \n                    \n                \n
\n                    \n
\n
{{appointment_formatteds_year[$index]}}\n
\n
\n                                \n
\n                                        calendar\n                                        tick\n                                        {{\'Appointment with :\'| translate}}\n                                        {{appointment.value.doctor_user.user_profile.display_name}}\n                                        {{appointment.value.User.user_profile.display_name}}\n                                        {{appointment.value.doctor_user.user_profile.specialties[0].name}}\n                                    \n                                \n                            \n
\n
{{appointment.value.appointment_time}}\n                            \n
\n
{{appointment.value.appointment_date}}\n                            \t\t\t\t\t    \n
\n
{{appointment.value.workplace.location}}\n                            \n
\n
{{\'PendingApproval\' |translate}}\n
{{\'Approved\' |translate}}\n
{{\'Closed\' |translate}}\n
{{\'Cancelled\' |translate}}\n
{{\'Rejected\' |translate}}\n
{{\'Expired\' |translate}}\n                            \n
\n                                \n                            \n
\n                                \n                            \n                        \n
\n                            {{\'Make an appointment now\'| translate}}\n                        \n                    \n                    \n
\n
{{\'No Record Found\' |translate}}\n                    \n
\n                        \n                    \n                    \n                \n            \n        \n    \n')
}]), angular.module("Appointments/appointment_modifications_add.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("Appointments/appointment_modifications_add.tpl.html", '
\n
\n    \t
\n
   \n
{{\'Appointment Settings Modification Add\'| translate }}\n            \n
\n
\n
\n
{{\'Change Your Calender Settings\'| translate }}\n                    \n
\n
\n
Date
\n                        \n
\n                            \n                                \n                                {{\'Make a day off\' | translate }}\n                            \n                        \n            \n
\n                            {{\'Choose your Available Time\' | translate }}\n                            \n                            \n                           \n    \n                        \n                        \n                        \n
\n                            Active / In Active\n
\n                                \n                            \n                        \n                    \n
\n                        {{\'Add\'| translate }}\n                        {{\'Back\'| translate }}\n                    \n                \n            \n       \t\n   \t\n')
}]), angular.module("Appointments/appointment_modifications_edit.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("Appointments/appointment_modifications_edit.tpl.html", '
\n
\n    \t
\n
\n
{{\'Appointment Settings Modification Add\'| translate}}\n            \n
\n
\n
\n
{{\'Change Your Calender Settings\'| translate}}

\n                    \n
\n
\n                            Date\n
\n                        \n                        \n
\n                            \n                                \n                                {{\'Make a day off\' | translate }}\n                            \n                        \n            \n
\n                             {{\'Choose your Available Time\' | translate }}\n                            \n                        \n                        \n                        \n            \n
\n                            Active / In Active\n
\n                                \n                            \n                        \t\n                    \n
\n                        {{\'Update\'| translate }}\n                        {{\'Back\'| translate }}\n                    \n                \n            \n   \t\t\n   \t\n')
}]), angular.module("Appointments/appointment_modifications.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("Appointments/appointment_modifications.tpl.html", '
\n\t
\n
    \n
{{\'Appointment Settings Modification\'| translate}}\n                \n
 \n
\n                        Add\n                \t\n                    \n                \n        \n    \n
\n
\n
 \n            \n
\n                \n                    \n                        \n                            \n                            \n                            \n                            \n                            \n                        \n                    \n                    \n                        \n                            \n                            \n                            \n                            \n                            \n                            \n                        \n                        \n                            \n                        \n                    \n
{{\'Date\'| translate}}	{{\'Type\'| translate}}	{{\'Slot\'| translate}}	{{\'Status\'| translate}}	{{\'Action\'| translate}}
{{modifyValue.appoint_date}}	\n                                \n                                    {{\'Day Off\'| translate}}\n                                \n                                \n                                    {{\'Schedule Change\'| translate}}\n                                \n                            	\n                                \n                                    --\n                                \n                                \n
\n                                    \n                                \n                            	\n
\n                                    \n                                \n
\n                                    \n                                \n                            	\n                                \n                                    Edit\n                                \n                                \n                                    Delete\n                                \n
\n
{{\'No Record Found\' |translate}}\n
\n             \n
\n                \n            \n        \n    \n    \n\n')
}]), angular.module("Appointments/appointment_note.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("Appointments/appointment_note.tpl.html", '
\n
  \n
{{\'Note\' | translate }}\n    \n
\n
\n            {{\'Note Description\' | translate }}\n
Note Description
\n            {{\'Enter Remainder Text\'| translate }} \n        \n        \n
\n            {{\'Submit\' | translate}}\n            {{\'Cancel\' | translate}}\n        \n    \n');
}]), angular.module("Appointments/appointment_remainder.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("Appointments/appointment_remainder.tpl.html", '
\n
  \n
{{\'Remainder\' | translate }}\n    \n
\n
\n            {{\'Remainder Text\' | translate }}\n
Remainder text
\n            {{\'Enter Remainder Text\'| translate }} \n        \n        \n
\n            {{\'Remainder on\' | translate }}\n
Date
\n            {{\'Select Date\'| translate }}\n        \n        \n
\n            {{\'Submit\' | translate}}\n            {{\'Cancel\' | translate}}\n        \n    \n')
}]), angular.module("Appointments/appointment_setting.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("Appointments/appointment_setting.tpl.html", '
\n
\n
    \n
{{\'Change Your Calender Settings\'| translate}}\n        \n
\n
\n
\n                \t
\n
\n
\n                                \n                                    \n                                    \n                                    {{\'Always show today as first day on my calendar \'| translate}}\n                                \n                            \n
\n                                \n                            \n                        \n
\n
\n                                \n                                    \n                                    \n                                    {{\'Practice operates in two sessions\'| translate}}\n                                \n                            \n
\n
\n                                    {{\'Practice Open\'| translate}}\n
\n
\n                                        \n                                    \n                                \n
\n
\n                                        {{\'Lunch At\'| translate}}\n
\n
\n                                            \n                                            {{model.open_lunch}}\n                                        \n                                    \n
\n                                        {{\'Resume At\'| translate}}\n
\n
\n                                            \n                                           {{model.lunch_resume}}\n                                        \n                                    \n                                 \n
\n                                    Practice Close\n
\n
\n                                        \n                                        {{model.resume_close}}\n                                        {{model.open_close}}\n                                    \n                                \n                            \n                        \n                \t\n                    \n    \n
\n                    \t
\n
\n
\n                                    \n                                        \n                                        \n                                        Sunday\n                                    \n                                \n
\n                                    \n                                        \n                                        \n                                        Practice operates in two sessions for Sunday\n                                    \n                                \n                            \n                       \n
\n
\n
\n                                        Practice Open\n
\n
\n                                            \n                                        \n                                    \n
\n                                        Practice Close\n
\n
\n                                            \n                                            {{model.sunday_resume_close}}\n                                            {{model.sunday_open_close}}\n                                        \n                                    \n                                \n                                \n
\n
\n                                        Lunch At\n
\n
\n                                            \n                                            {{model.sunday_open_lunch}}\n                                        \n                                    \n
\n                                        Resume At\n
\n
\n                                            \n                                            {{model.sunday_lunch_resume}}\n                                        \n                                    \n                                \n                            \n    \t\t\t\t\t\n
\n
\n
\n                                    \n                                        \n                                        \n                                        Monday\n                                    \n                                \n
\n                                    \n                                        \n                                        \n                                        Practice operates in two sessions for Monday\n                                    \n                                \n                            \n
\n
\n
\n                                        Practice Open\n
\n
\n                                           \n                                        \n                                    \n
\n                                        Practice Close\n
\n
\n                                            \n                                            {{model.monday_resume_close}}\n                                            {{model.monday_open_close}}\n                                        \n                                    \n                                \n
\n
\n                                        Lunch At\n
\n
\n                                            \n                                            {{model.monday_open_lunch}}\n                                        \n                                    \n
\n                                        Resume At\n
\n
\n                                            \n                                            {{model.monday_lunch_resume}}\n                                        \n                                    \n                                \n                            \n    \t\t\t\t\t\n
\n
\n
\n                                    \n                                        \n                                        \n                                        Tuesday\n                                    \n                                \n
\n                                    \n                                        \n                                        \n                                        Practice operates in two sessions for Tuesday\n                                    \n                                \n                            \n
\n
\n
\n                                        Practice Open\n
\n
\n                                            \n                                        \n                                    \n
\n                                        Practice Close\n
\n
\n                                            \n                                            {{model.tuesday_resume_close}}\n                                            {{model.tuesday_open_close}}\n                                        \n                                    \n                                \n
\n
\n                                        Lunch At\n
\n
\n                                            \n                                            {{model.tuesday_open_lunch}}\n                                        \n                                    \n
\n                                        Resume At\n
\n
\n                                           \n                                            {{model.tuesday_lunch_resume}}\n                                        \n                                    \n                                \n                            \n    \t\t\t\t\t\n
\n
\n
\n                                    \n                                        \n                                        \n                                        Wednesday\n                                    \n                                \n
\n                                    \n                                        \n                                        \n                                        Practice operates in two sessions for Wednesday\n                                    \n                                \n                            \n    \n
\n
\n
\n                                        Practice Open\n
\n
\n                                            \n                                        \n                                    \n
\n                                        Practice Close\n
\n
\n                                            \n                                            {{model.wednesday_resume_close}}\n                                            {{model.wednesday_open_close}}\n                                        \n                                    \n                                \n
\n
\n                                        Lunch At\n
\n
\n                                            \n                                            {{model.wednesday_open_lunch}}\n                                        \n                                    \n
\n                                        Resume At\n
\n
\n                                            \n                                            {{model.wednesday_lunch_resume}}\n                                        \n                                    \n                                \n                            \n    \t\t\t\t\t\n
\n
\n
\n                                    \n                                        \n                                        \n                                        Thrusday\n                                    \n                                \n
\n                                    \n                                        \n                                        \n                                        Practice operates in two sessions for Thrusday\n                                    \n                                \n                            \n                        \n
\n
\n
\n                                        Practice Open\n
\n
\n                                            \n                                        \n                                    \n
\n                                        Practice Close\n
\n
\n                                            \n                                            {{model.thrusday_resume_close}}\n                                            {{model.thrusday_open_close}}\n                                        \n                                    \n                                \n                                \n
\n
\n                                        Lunch At\n
\n
\n                                            \n                                            {{model.thrusday_open_lunch}}\n                                        \n                                    \n
\n                                        Resume At\n
\n
\n                                            \n                                            {{model.thrusday_lunch_resume}}\n                                        \n                                    \n                                \n                            \n                        \n
\n
\n
\n                                    \n                                        \n                                        \n                                        Friday\n                                    \n                                \n
\n                                    \n                                        \n                                        \n                                        Practice operates in two sessions for Friday\n                                    \n                                \n                            \n    \n
\n
\n
\n                                        Practice Open\n
\n
\n                                            \n                                        \n                                    \n
\n                                        Practice Close\n
\n
\n                                            \n                                            {{model.friday_resume_close}}\n                                            {{model.friday_open_close}}\n                                        \n                                    \n                                \n
\n
\n                                        Lunch At\n
\n
\n                                            \n                                            {{model.friday_open_lunch}}\n                                        \n                                    \n
\n                                        Resume At\n
\n
\n                                            \n                                            {{model.friday_lunch_resume}}\n                                        \n                                    \n                                \n                            \n    \t\t\t\t\t\n
\n
\n
\n                                    \n                                        \n                                        \n                                        Saturday\n                                    \n                                \n
\n                                    \n                                        \n                                        \n                                        Practice operates in two sessions for Saturday\n                                    \n                                \n                            \n
\n
\n
\n                                        Practice Open\n
\n
\n                                            \n                                        \n                                    \n
\n                                        Practice Close\n
\n
\n                                            \n                                            {{model.saturday_resume_close}}\n                                            {{model.saturday_open_close}}\n                                        \n                                    \n                                \n
\n
\n                                        Lunch At\n
\n
\n                                            \n                                            {{model.saturday_open_lunch}}\n                                        \n                                    \n
\n                                        Resume At\n
\n
\n                                            \n                                            {{model.saturday_lunch_resume}}\n                                        \n                                    \n                                \n                            \n                   \t\t\n                    \n
\n
\n                            \n                                \n                                \n                                Visiting hours are NOT same for all working days in a week\n                            \n                        \n
\n                            Active / In Active\n
\n                                \n                            \n                        \n                    \n
\n                        {{\'Update\'| translate }}\n                    \n                \n            \n        \n   \t\n');
}]), angular.module("Appointments/appointment_view.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("Appointments/appointment_view.tpl.html", '
\n
\n
  \n
{{\'The appointment is scheduled for\' | translate }} {{appointment.appointment_date | appointmentDate}} {{appointment.appointment_time}}\n        \tBack\n        \n
\n
\n                {{\'Doctor\' | translate }}\n                \n                \t{{appointmentUser.user_profile.dr_title}} {{appointmentUser.user_profile.first_name}} {{appointmentUser.user_profile.last_name}}\n                \n            \n
\n                {{\'Patient Name\' | translate }}\n                {{appointmentUser.user_profile.first_name}} {{appointmentUser.user_profile.last_name}}\n            \n
\n                {{\'Gender\' | translate }}\n                {{appointmentUser.user_profile.gender.name}}\n            \n
\n                {{\'Where\' | translate }}\n                {{appointmentUser.user_profile.address}} {{appointmentUser.user_profile.city.name}},  {{appointmentUser.user_profile.country.name}}, {{appointmentUser.user_profile.postal_code}}\n
\n
\n                {{\'Patient Note\' | translate }}\n                {{appointment.patient_note}}\n                --\n            \n
\n                {{\'Doctor Note\' | translate }}\n                {{appointment.doctor_note}}\n                --\n            \n
\n                {{\'Patient Status\' | translate }}\n                 Already Seen \n                 New Patient \n            \n
\n                {{\'Reason for visit\' | translate }}\n                {{appointment.specialty_diseas.name}}\n            \n
\n                {{\'Appointment Status\' | translate }}\n                {{appointment.appointment_status.name}}\n            \n
\n
  {{\'Confirm Appointment\' | translate }}  \n
 {{\'Decline Appointment\' | translate }}  \n            \n
\n
 \n                     \n                        {{\'Cancel Appointment\' | translate }} \n                     \n                \n            \n\t\t\t{{"Close" | translate}}\n        \n
\n
\n
\n
{{\'Your Rating\'| translate }}\n                    \n                \n            \n
\n
\n                    \n
                                    \n
\n
{{\'Rating\'| translate }}\n                            \n                        \n                       \n                    {{"Add Rating" | translate}}   \n                \n            \n                \n    \n')
}]), angular.module("Appointments/appointments.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("Appointments/appointments.tpl.html", '
\n
\n\n
\n
\n
{{\'Appointments\'|translate}}\n            \n        \n
\n            \n                    \n
\n
{{tab.title}}\n
\n
{{item[tab.title]}}\n                            \n                        \n
Loading...
\n                    \n            \n        \n\n    \n\n')
}]), angular.module("Appointments/booking_breadcrum.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("Appointments/booking_breadcrum.tpl.html", '
\n
{{"Patient Info" | translate }}
\n
{{"Appointment Info" | translate }}
\n    \n
{{"You Finished" | translate }}
\n')
}]), angular.module("Search/search.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("Search/search.tpl.html", '
\n
\n
\n        \t
\n
\n
\n
\n
\n                        \n
\n                            \n                        \n
\n                            \n                        \n
\n                            \n                        \n                    \n\t\t\t\t \n            \n     \t\n  \t\n
\n
\n
\n
{{\'Doctors or Specialists\' | translate }}\n
\n
\n
\n                             \n                        \n                    \n
\n
\n                            {{\'Any gender\'| translate }}\n                        \n
\n                            {{\'Male\'| translate }}\n                        \n
\n                            {{\'Female\'| translate }}\n                        \n                    \n                \n
{{ model.specialtyDetail.name | translate }} {{\'and other suppliers in Venezuela\'| translate }}\n
\n
\n
\n                        \t
\n
{{\'Any Day\'| translate }}
\n
{{\'Today\'| translate }}
\n
{{\'Next 3 days\'| translate }}
\n                                \n                            \n              \n
\n
\n
\n

\n
\n
\n
{{today.day}}\n
{{today.date}}\n                                            \n                                        \n
\n
\n
{{day2.day}}\n
{{day2.date}}\n                                            \n                                        \n
\n
\n
{{day3.day}}\n
{{day3.date}}\n                                            \n                                        \n
\n
\n
{{day4.day}}\n
{{day4.date}}\n                                            \n                                        \n

\n                                    \n                                \n                            \n                        \n
\n
\n
\n                            \n                        \n
\n
\n
\n                                \t
\n                                    \t
\n
\n                                                doctor\n                                            \n
\n
\n                                                    \n                                                    \n                                                \n
{{"Code" | translate }}: {{doctorList.data.User.data.user_code}}

\n
\n
\n                                                        \n                                                             {{doctorList.data.User.data.points}}\n                                                        \n                                                    \n
\n                                                        \n                                                             {{doctorList.data.User.data.doctor_view_count}}\n                                                        \n                                                    \n
\n                                                        \n                                                            \n                                                        \n
\n                                                        \t
{{ \'Share\' | translate }}
\n
\n
\n                                                        \n                                                    \n                                                \n                                            \n                                        \n
\n                                        \t
\n                                            \t
{{doctorList.data.display_name}}

\n                                                {{doctorList.work_place.data.location}}\n                                            \n
\n                                            \t
{{\'Specialties\' | translate}}\n                                                \n                                                    {{doctorList.data.specialties | array_to_string | translate }}\n                                                \n                                            \n
\n                                            \t
{{\'Favorite place to work\' | translate}}\n                                                {{doctorList.work_place.data.location}}\n                                            \n
\n                                            \t
{{\'First appointment price\' | translate}}\n                                                \n                                                    {{model.siteCurrency}} {{doctorList.work_place.data.price}}\n                                                \n                                            \n                                        \n                                    \n                                \n
\n
\n
\n
\n
{{today.day}}\n
\n                                                    \n                                                        \n                                                            {{todaySlot}}\n                                                        \n                                                        \n                                                            {{todaySlot}}\n                                                        \n                                                    \n                                                    \n                                                        \n                                                           {{todaySlot}}\n                                                        \n                                                        \n                                                            {{todaySlot}}\n                                                        \n                                                    \n                                                \n                                            \n                                        \n
\n
\n
{{day2.day}}\n
\n                                                    \n                                                        \n                                                            {{Day2}}\n                                                        \n                                                        \n                                                            {{Day2}}\n                                                        \n                                                    \n                                                    \n                                                        \n                                                           {{Day2}}\n                                                        \n                                                        \n                                                            {{Day2}}\n                                                        \n                                                    \n                                                \n                                            \n                                        \n\n
\n
\n
{{day3.day}}\n
\n                                                    \n                                                        \n                                                            {{Day3}}\n                                                        \n                                                        \n                                                            {{Day3}}\n                                                        \n                                                    \n                                                    \n                                                        \n                                                           {{Day3}}\n                                                        \n                                                        \n                                                            {{Day3}}\n                                                        \n                                                    \n                                                \n                                            \n                                        \n
\n
\n
{{day4.day}}\n
\n                                                    \n                                                        \n                                                            {{Day4}}\n                                                        \n                                                        \n                                                            {{Day4}}\n                                                        \n                                                    \n                                                    \n                                                        \n                                                           {{Day4}}\n                                                        \n                                                        \n                                                            {{Day4}}\n                                                        \n                                                    \n                                                \n                                            \n                                        \n                                    \n                                \n
\n                                \t
\n                                    \t
\n                                          \t
\n                                                doctor\n                                            \n
\n
\n                                                    \n                                                \n
Code: LM-000-001

\n
\n                                                    \n                                                    \n                                                         {{doctorList.data.User.data.points}}\n                                                    \n                                                    \n                                                    \n                                                    \n                                                         {{\'11000\' | translate}}\n                                                    \n                                                    \n                                                    \n                                                    \n                                                        \n                                                    \n                                                    \n                                                \n                                            \n                                        \n                                    \n                                \n                            \n
\n
{{\'No Doctor Found\' |translate}}\n                            \n                        \n\n
\n                            \n                            \n
\n                    \n                \n            \n
\n
\n
\n                        \n                            \n                            \n
\n
 {{\'Dr.\'| translate }}{{doctorInfo.doctor_name}} \n
\n
{{\'Dr.\'| translate }}{{doctorInfo.doctor_name}}\n
\n
\n
{{doctorInfo.address1}}\n
{{doctorInfo.address2}}\n                                        \n                                    \n                                    {{\'Book Online\'| translate }}\n                                \n                            \n                        \n                    \n                \n
\n                    \n
{{ model.specialtyDetail.name | translate }}\n
{{ model.specialtyDetail.description | translate }}\n                        Read More...\n                    \n
{{\'Specialties\'| translate }}\n
{{\'Dentistry has several specialties specified:\'| translate }}\n
{{\'Oral Rehabilitation:.\'| translate }}{{\'is the part of dentistry in charge of the restoration, and that is to  recover the physiological and aesthetic function through the use of dental prostheses and other measures \'| translate }}\n
{{\'Periodontics or Periodontal.\'| translate }}{{\' its a branch of dentistry specialized in the diagnostic, prevention and treatment of periodontal diseases\'| translate }}\n                    Read More...\n                \n\n            \n        \n    \n
\n
\n
\n                \n
\n
Find Doctors by...\n
\n
\n
\n
{{\'City\'| translate }}
\n
\n
\n                                        {{citiesliList.name}}\n                                    \n
\n                                        More...\n                                        Less\n                                    \n                                \n                            \n                        \n
\n
\n
{{\'Specialty\'| translate }}
\n
\n
\n                                        {{specialtyliList.name}}\n                                    \n
\n                                        More...\n                                        Less\n                                    \n                                \n                            \n                        \n
\n
\n
{{\'Languages\'| translate }}
\n
\n
\n                                        {{languageList.name}}\n                                    \n
\n                                        More...\n                                        Less\n                                    \n                                \n                            \n                        \n                    \n' + "
{{'Or search by Name,'| translate }}, {{'Practice'| translate }}, {{'Comments'| translate }}, {{'Hospital'| translate }}, {{'Language'| translate }}

\n                \n                \n   \t\t\t\n\t\t\n \t\n");
}]), angular.module("Worklocation/userAppoinmentModification.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("Worklocation/userAppoinmentModification.tpl.html", '
\n\t
\n
    \n
{{\'My Appoinment Modification\'|translate}} \n\t\t\t\t{{\'Location:\' |  translate}}{{model.workplace.location |translate}}\n                \n                    {{\'Add\'|translate}}\n                            \n                \n                    {{\'Back\'|translate}}\n                                \n            \n        \n\n\t\t
\n
\n
\n                \n                    \n                        \n                            \n                            \n                            \n                            \n                            \n                        \n                    \n                     \n\t\t\t\t\t\t \n                            \n                            \n                            \n                            \n                            \n                            \n                        \n                        \n                            \n                        \n                        \n                    \n
{{\'Date\'| translate}}	{{\'Type\'| translate}}	{{\'Slot\'| translate}}	{{\'Status\'| translate}}	{{\'Action\'| translate}}
{{modifyValue.appoint_date | dateFormat}}	\n                                \n                                    {{\'Day Off\'| translate}}\n                                \n                                \n                                    {{\'Schedule Change\'| translate}}\n                                \n                            	\n                                \n                                    --\n                                \n                                \n
\n                                    \n                                \n                            	\n
\n                                    \n                                \n
\n                                    \n                                \n                            	                               \n\t\t\t\t\t\t\t\t{{\'Edit\' | translate}}\n                                {{\'Delete\' | translate}}\n
\n
{{\'No Record Found\' |translate}}\n
\n            \n
\n                \n
\n        \n\t\n\n')
}]), angular.module("Worklocation/userAppoinmentModificationCreate.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("Worklocation/userAppoinmentModificationCreate.tpl.html", '
\n
\n    \t
\n            \n                logo\n            \n        \n
\n            \n
\n
{{\'Appointment Settings Modification Add\'| translate}}\n            \n
\n
\n
\n                    \t
Date
\n
\n                        \t{{\'This field is required!\'| translate }}\n                         \n                    \n\t\t\t\t\t
\n                        \n                            \n                            Make a day off\n                        \n                    \n
              \n\t\t\t\t\t
\n                        Choose your Available Time\n                        \n                    \n\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\n
\n                            Active / In Active\n
\n                                \n                            \n                        \n                \n\n
\n                    {{\'Save\'| translate }}\n                    {{\'Cancel\'| translate }}\n                \n            \n        \n    \n')
}]), angular.module("Worklocation/userAppoinmentModificationUpdate.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("Worklocation/userAppoinmentModificationUpdate.tpl.html", '
\n
\n    \t
\n            \n                logo\n            \n        \n
\n            \n
\n
{{\'Edit Appoinment Modification\'| translate}}\n            \n
\n
\n
\n\t\t\t\t\t\t
\n\t\t\t\t\t\t
\n                            {{\'This field is required!\'| translate }}\n\t\t\t\t\t\t\t  \n                        \n\t\t\t\t\t
\n                        \n                            \n                            Make a day off\n                        \n                    \n
              \n\t\t\t\t\t\n\t\t\t\t\t
\n                        Choose your Available Time\n                                                    \n                    \n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\n
\n                            Active / In Active\n
\n                                \n                            \n                        \n\t\t\t\t\n
\n                    {{\'Save\'| translate }}\n                    {{\'Cancel\'| translate }}\n                \n            \n        \n    \n')
}]), angular.module("Worklocation/userAppoinmentSettings.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("Worklocation/userAppoinmentSettings.tpl.html", '
\n
\n
    \n
{{\'Change Your Appointment Settings\'| translate}}\n\t\t\t{{\'Location:\' |  translate}}{{model.workplace.location |translate}}\n\t\t\t\n        \n
\n
\n
\n                \t
\n
\n
\n                                \n                                    \n                                    \n                                    {{\'Always show today as first day on my calendar \'| translate}}\n                                \n                            \n
\n                                \n                            \n                        \n
\n
\n                                \n                                    \n                                    \n                                    {{\'Practice operates in two sessions\'| translate}}\n                                \n                            \n
\n
\n                                    {{\'Practice Open\'| translate}}\n
\n
\n                                        \n                                    \n                                \n
\n
\n                                        {{\'Lunch At\'| translate}}\n
\n
\n                                            \n                                            {{model.open_lunch}}\n                                        \n                                    \n
\n                                        {{\'Resume At\'| translate}}\n
\n
\n                                            \n                                           {{model.lunch_resume}}\n                                        \n                                    \n                                 \n
\n                                    Practice Close\n
\n
\n                                        \n                                        {{model.resume_close}}\n                                        {{model.open_close}}\n                                    \n                                \n                            \n                        \n                \t\n                    \n    \n
\n                    \t
\n
\n
\n                                    \n                                        \n                                        \n                                        Sunday\n                                    \n                                \n
\n                                    \n                                        \n                                        \n                                        Practice operates in two sessions for Sunday\n                                    \n                                \n                            \n                       \n
\n
\n
\n                                        Practice Open\n
\n
\n                                            \n                                        \n                                    \n
\n                                        Practice Close\n
\n
\n                                            \n                                            {{model.sunday_resume_close}}\n                                            {{model.sunday_open_close}}\n                                        \n                                    \n                                \n                                \n
\n
\n                                        Lunch At\n
\n
\n                                            \n                                            {{model.sunday_open_lunch}}\n                                        \n                                    \n
\n                                        Resume At\n
\n
\n                                            \n                                            {{model.sunday_lunch_resume}}\n                                        \n                                    \n                                \n                            \n    \t\t\t\t\t\n
\n
\n
\n                                    \n                                        \n                                        \n                                        Monday\n                                    \n                                \n
\n                                    \n                                        \n                                        \n                                        Practice operates in two sessions for Monday\n                                    \n                                \n                            \n
\n
\n
\n                                        Practice Open\n
\n
\n                                           \n                                        \n                                    \n
\n                                        Practice Close\n
\n
\n                                            \n                                            {{model.monday_resume_close}}\n                                            {{model.monday_open_close}}\n                                        \n                                    \n                                \n
\n
\n                                        Lunch At\n
\n
\n                                            \n                                            {{model.monday_open_lunch}}\n                                        \n                                    \n
\n                                        Resume At\n
\n
\n                                            \n                                            {{model.monday_lunch_resume}}\n                                        \n                                    \n                                \n                            \n    \t\t\t\t\t\n
\n
\n
\n                                    \n                                        \n                                        \n                                        Tuesday\n                                    \n                                \n
\n                                    \n                                        \n                                        \n                                        Practice operates in two sessions for Tuesday\n                                    \n                                \n                            \n
\n
\n
\n                                        Practice Open\n
\n
\n                                            \n                                        \n                                    \n
\n                                        Practice Close\n
\n
\n                                            \n                                            {{model.tuesday_resume_close}}\n                                            {{model.tuesday_open_close}}\n                                        \n                                    \n                                \n
\n
\n                                        Lunch At\n
\n
\n                                            \n                                            {{model.tuesday_open_lunch}}\n                                        \n                                    \n
\n                                        Resume At\n
\n
\n                                           \n                                            {{model.tuesday_lunch_resume}}\n                                        \n                                    \n                                \n                            \n    \t\t\t\t\t\n
\n
\n
\n                                    \n                                        \n                                        \n                                        Wednesday\n                                    \n                                \n
\n                                    \n                                        \n                                        \n                                        Practice operates in two sessions for Wednesday\n                                    \n                                \n                            \n    \n
\n
\n
\n                                        Practice Open\n
\n
\n                                            \n                                        \n                                    \n
\n                                        Practice Close\n
\n
\n                                            \n                                            {{model.wednesday_resume_close}}\n                                            {{model.wednesday_open_close}}\n                                        \n                                    \n                                \n
\n
\n                                        Lunch At\n
\n
\n                                            \n                                            {{model.wednesday_open_lunch}}\n                                        \n                                    \n
\n                                        Resume At\n
\n
\n                                            \n                                            {{model.wednesday_lunch_resume}}\n                                        \n                                    \n                                \n                            \n    \t\t\t\t\t\n
\n
\n
\n                                    \n                                        \n                                        \n                                        Thrusday\n                                    \n                                \n
\n                                    \n                                        \n                                        \n                                        Practice operates in two sessions for Thrusday\n                                    \n                                \n                            \n                        \n
\n
\n
\n                                        Practice Open\n
\n
\n                                            \n                                        \n                                    \n
\n                                        Practice Close\n
\n
\n                                            \n                                            {{model.thrusday_resume_close}}\n                                            {{model.thrusday_open_close}}\n                                        \n                                    \n                                \n                                \n
\n
\n                                        Lunch At\n
\n
\n                                            \n                                            {{model.thrusday_open_lunch}}\n                                        \n                                    \n
\n                                        Resume At\n
\n
\n                                            \n                                            {{model.thrusday_lunch_resume}}\n                                        \n                                    \n                                \n                            \n                        \n
\n
\n
\n                                    \n                                        \n                                        \n                                        Friday\n                                    \n                                \n
\n                                    \n                                        \n                                        \n                                        Practice operates in two sessions for Friday\n                                    \n                                \n                            \n    \n
\n
\n
\n                                        Practice Open\n
\n
\n                                            \n                                        \n                                    \n
\n                                        Practice Close\n
\n
\n                                            \n                                            {{model.friday_resume_close}}\n                                            {{model.friday_open_close}}\n                                        \n                                    \n                                \n
\n
\n                                        Lunch At\n
\n
\n                                            \n                                            {{model.friday_open_lunch}}\n                                        \n                                    \n
\n                                        Resume At\n
\n
\n                                            \n                                            {{model.friday_lunch_resume}}\n                                        \n                                    \n                                \n                            \n    \t\t\t\t\t\n
\n
\n
\n                                    \n                                        \n                                        \n                                        Saturday\n                                    \n                                \n
\n                                    \n                                        \n                                        \n                                        Practice operates in two sessions for Saturday\n                                    \n                                \n                            \n
\n
\n
\n                                        Practice Open\n
\n
\n                                            \n                                        \n                                    \n
\n                                        Practice Close\n
\n
\n                                            \n                                            {{model.saturday_resume_close}}\n                                            {{model.saturday_open_close}}\n                                        \n                                    \n                                \n
\n
\n                                        Lunch At\n
\n
\n                                            \n                                            {{model.saturday_open_lunch}}\n                                        \n                                    \n
\n                                        Resume At\n
\n
\n                                            \n                                            {{model.saturday_lunch_resume}}\n                                        \n                                    \n                                \n                            \n                   \t\t\n                    \n
\n
\n                            \n                                \n                                \n                                Visiting hours are NOT same for all working days in a week\n                            \n                        \n
\n                            Active / In Active\n
\n                                \n                            \n                        \n                    \n
\n                        {{\'Update\'| translate }}\n                    \n                \n            \n        \n   \t\n');
}]), angular.module("Worklocation/userWorkPlaces.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("Worklocation/userWorkPlaces.tpl.html", '
\n\t
\n
    \n
{{\'My Workplaces\'|translate}}\n                \n                    {{\'Add Places\'|translate}}\n                \n            \n        \n\n\t\t
\n
\n
\n                \n                    \n                        \n                                                        \n                            \n                            \n                            \n                            \n                            \n                            \n                        \n                    \n                                            \n                        \n                                                        \n                            \n                            \n                            \n                            \n                            \n                            \n                        \n                        \n                            \n                        \n                    \n
{{\'Country\'|translate}}	{{\'City\'|translate}}	{{\'Phone\'|translate}}	{{\'Price\'|translate}}	{{\'Preferred\'|translate}}	{{\'status\'|translate}}	{{\'Action\'|translate}}
{{worklocation.country.name |translate}}	{{worklocation.city.name |translate}}	{{worklocation.work_phone_number |translate}}	{{model.siteCurrency}} {{worklocation.price}}	\n                                \n                                                                \n                            	\n                                \n                                \n                            	\n                                {{\'Edit\' | translate}}\n                                {{\'Delete\' | translate}}\n                                {{\'Appoinment  Settings\' | translate}}\n                                {{\'Appoinment Modifications\' | translate}}                                \n
\n
{{\'No Record Found\'|translate}}\n
\n            \n
\n                \n
\n        \n\t\n\n')
}]), angular.module("Worklocation/userWorkPlacesAdd.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("Worklocation/userWorkPlacesAdd.tpl.html", '
\n
\n
\n
\n
{{\'Add Work Place\'| translate}}\n            \n
\n
\n
\n                        {{\'Country\' | translate }}\n                        \n
\n                            {{\'This field is required!\'| translate }}\n                                        \n                    \n
\n                      {{\'State\' | translate }}\n                       \n
\n                            {{\'This field is required!\'| translate }}\n                        \n                    \n
\n                       {{\'City\' | translate }}\n                       \n
\n                            {{\'This field is required!\'| translate }}\n                        \n                    \n
\n                         {{\'Location\' | translate }}\n
{{\'Location\'| translate}}
        \n
\n                            {{\'This field is required!\'| translate }}\n                                   \n                    \n
\n                        {{\'Google Location\' | translate }}\n                                    \n                                    \n                                {{\'Enter Address\'| translate }} \n                            \n                   \n\t\t\t\t\t\t \n
\n                                       {{\'Phone Number\' | translate }}\n
\n                                            \n
{{\'Mobile\'| translate}}
\n                                        \n                                        {{\'Enter Mobile Number\'| translate }} \n                                        {{\'Enter Valid Mobile Number Without Character\'| translate }} \n                                        {{\'Minimum Length is 8\'| translate }} \n                                        {{\'Maximum Length is 12\'| translate }} \n                                    \n                      \n
\n                        Price :\n
{{\'Price\'| translate}}
 \n                    \n\t\t\t\t\t
\n                            \n                                \n                                {{\'is Preferred location?\' | translate }}\n                            \n                        \n\t\t\t\t\t
\n                            {{\'Active / In Active\' | translate }}\n
\n                                \n                            \n                        \n                    \n                \n
\n                    {{\'Save\'| translate }}\n                    {{\'Cancel\'| translate }}\n                \n            \n        \n    \n')
}]), angular.module("Worklocation/userWorkPlacesEdit.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("Worklocation/userWorkPlacesEdit.tpl.html", '
\n
\n
\n
\n
{{\'Edit Workplace\'| translate}}\n            \n
\n
\n
\n                        {{\'Country\' | translate }}\n                        \n
\n                            {{\'This field is required!\'| translate }}\n                                        \n                    \n
\n                        {{\'State\' | translate }}\n                       \n
\n                            {{\'This field is required!\'| translate }}\n                        \n                    \n
\n                       {{\'City\' | translate }}\n                       \n
\n                            {{\'This field is required!\'| translate }}\n                        \n                    \n
\n                         {{\'Location\' | translate }}\n
{{\'Location\'| translate}}
        \n
\n                            {{\'This field is required!\'| translate }}\n                                   \n                    \n
\n                        {{\'Google Location\' | translate }}\n                                    \n                                    \n                                {{\'Enter Address\'| translate }} \n                            \n\t\t\t\t\t
\n                        {{\'Phone Number\' | translate }}\n
\n                                            \n
{{\'Mobile\'| translate}}
\n                                        \n                                        {{\'Enter Mobile Number\'| translate }} \n                                        {{\'Enter Valid Mobile Number Without Character\'| translate }} \n                                        {{\'Minimum Length is 8\'| translate }} \n                                        {{\'Maximum Length is 12\'| translate }} \n                                    \n
\n                        {{\'Price\' | translate }}\n
{{\'Price\'| translate}}
 \n                    \n\t\t\t\t\t
\n                            \n\t\t\t\t\t\t\t\t\n                                {{\'is Preferred location?\' | translate }}\n                            \n                        \n\t\t\t\t\t
\n                            {{\'Active / In Active\' | translate }}\n
\n                                \n                            \n                        \n                    \n                \n
\n                    {{\'Save\'| translate }}\n                    {{\'Cancel\'| translate }}\n                \n            \n        \n    \n\n')
}]), angular.module("Messages/messagecompose.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("Messages/messagecompose.tpl.html", '
\n
\n        \n
\n            \n
\n
\n
    \n
{{"Compose Message"| translate }}\n                \n
\n
\n                         {{"Write" | translate }}\n                    \n
\n                         {{"Received" | translate }}\n                    \n
\n                         {{"Sent" | translate }}\n                    \n
\n                         {{"Delete" | translate }}\n                    \n                \n
\n
\n
\n
\n
\n                                    {{"User" | translate }}\n
\n                                    \n                                          {{"Select User" | translate }}\n                                   \n                                \n
\n                                    {{"Subject" | translate }}\n
\n
\n                                        {{"Enter subject" | translate }} \n                                    \n                                    \n                                \n
\n                                    {{"Message" | translate }}\n
\n
\n                                        {{"Enter message" | translate }} \n                                    \n                                    \n                                \n                            \n
\n                                {{"Save" | translate }}\n                            \n                        \n                    \n                \n            \n            \n\t\t\n\t\n\n')
}]), angular.module("Messages/messages.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("Messages/messages.tpl.html", '
\n
\n        \n
\n            \n
\n
\n
    \n
{{"Messages" | translate }}\n                    \n
\n
\n                             {{"Write" | translate }}\n                        \n
\n                             {{"Received" | translate }}\n                        \n
\n                             {{"Sent" | translate }}\n                        \n
\n                             {{"Delete" | translate }}\n                        \n                    \n\t\t\t\t\t
\n                    \t
\n\t\t\t\t\t\t\t
\n
\n
\n                                        \n                                            \n                                        \n                                    \n
{{message.from_user.username}}{{message.message_content.subject}}

\n                                \n
\n                                    {{message.created_at | dateFormat}}\n                                \n                            \n\t\t\t\t\t\t\t
\n                        \t\t

\n
\n
\n
\n
\n
{{message.from_user.username}}{{message.message_content.subject}}

\n
{{message.message_content.message}}\n\t\t\t\t\t\t\t\t\t\t\t\t{{"Reply" | translate}}\n                                            \n
\n
\n                                                {{message.created_at | dateFormat}}\n                                            \n
\n\t\t\t\t\t\t\t\t\t\t\t\t
\n
\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
{{child_message.from_user.username}}{{child_message.message_content.subject}}

\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{child_message.created_at | dateFormat}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t
{{child_message.message_content.message}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t\t\t\t{{"Reply" | translate}}\n                                            \n                                                    \n                                                \n\t\t\t\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t\t\t\t
\n
{{"Reply Message" | translate }}\n                           \t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{"Subject" | translate }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{"Enter Subject" | translate }} \n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n
\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{"Message" | translate }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{"Enter message" | translate }} \n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{"Save" | translate }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n                       \t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n                                        \n                                    \n                                \n\t\t\t\t\t\t\t\n                        \n\t\t\t\t\t\t
\n\t\t\t\t\t\t\t
{{"No Record Found" | translate }}\n\t\t\t\t\t\t\n
\n                            \n                        \n                    \n                \n            \n\t\t\n\t\n\n');
}]), angular.module("Messages/sentmessages.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("Messages/sentmessages.tpl.html", '
\n
\n        \n
\n            \n
\n
\n
    \n
{{"Sent Messages" | translate }}\n                    \n
\n
\n                             {{"Write" | translate }}\n                        \n
\n                             {{"Received" | translate }}\n                        \n
\n                             {{"Sent" | translate }}\n                        \n
\n                             {{"Delete" | translate }}\n                        \n                    \n
\n                    \t
\n\t\t\t\t\t\t\t
\n
\n
\n                                        \n                                            \n                                        \n                                    \n
{{message.from_user.username}}{{message.message_content.subject}}

\n                                \n
\n                                    {{message.created_at | dateFormat}}\n                                \n                            \n\t\t\t\t\t\t\t
\n                        \t\t

\n
\n
\n
\n
\n
{{message.from_user.username}}{{message.message_content.subject}}

\n
{{message.message_content.message}}\n                                            \n
\n
\n                                                {{message.created_at | dateFormat}}\n                                            \n
\n                                            \n                                        \n                                    \n                                \n\t\t\t\t\t\t\t\n                        \n\t\t\t\t\t\t
\n\t\t\t\t\t\t\t
{{"No Record Found" | translate }}\n\t\t\t\t\t\t\n\t\t\t\t\t\t
\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\n                    \n                \n            \n\t\t\n\t\n\n')
}]), angular.module("Badges/userBadges.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("Badges/userBadges.tpl.html", '
\n\t
\n        \n
    \n
{{\'My Badges\'|translate}}\n        \n\t\t
\n
\n
\n\t\t\t\t
 \n
\n\t\t\t\t\t    \n                        \n                     \n                 \n            \n
\n
 \n
 {{\'No record(s) found\'| translate }}\n                \n                        \n        \n
            \n
\n                \n
\n        \n\t\n\n')
}]), angular.module("CustomDirectives/Maps/locationDirections.tpl.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("CustomDirectives/Maps/locationDirections.tpl.html", '\n\n\n\n\n\n\n\n\n\nOrigin\n\t\nDestionation \n\t\nMode of Travel: \n      \n\t  {{\'submit\'| translate }}\n\n\t  {{origin}}-----{{destination}}\n\n\n\n\t\n Directions path length: {{map.directionsRenderers[0].directions.routes[0].overview_path.length}}\n\t\n\n\n\n')
  }]);
