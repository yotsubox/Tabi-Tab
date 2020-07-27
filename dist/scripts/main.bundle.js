!(function (t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var o = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var o in t)
          n.d(
            r,
            o,
            function (e) {
              return t[e];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 0));
})([
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      const n = document.createElement(t);
      return (n.className = e), n;
    }
    function o(t) {
      (t.contentEditable = !0),
        (t.spellcheck = !1),
        t.addEventListener("paste", (t) => {
          t.preventDefault();
          const e = t.clipboardData.getData("text/plain");
          document.execCommand("insertHTML", !1, e);
        });
    }
    n.r(e),
      n.d(e, "saveButton", function () {
        return x;
      }),
      n.d(e, "listsWrapper", function () {
        return S;
      }),
      n.d(e, "addListButton", function () {
        return w;
      });
    const i = Object.freeze({ TabList: 0 });
    let s = [];
    class a {
      static add(t) {
        s.push(t);
      }
      static *[Symbol.iterator]() {
        for (const t of s) yield t;
      }
      static clear() {
        s = [];
      }
    }
    function c(t, e) {
      !(function (t, e, n) {
        const o = r("div", "list-menu__option"),
          i = r("input", "list-menu__option-box");
        (i.type = "checkbox"),
          (i.checked = n),
          i.addEventListener("mousedown", (t) => {
            t.preventDefault();
          });
        const s = r("div", "list-menu__option-name");
        (s.textContent = e), o.append(i, s), t.append(o);
      })(t, "Priority", !1);
    }
    let l = !1;
    const u = { onChange: [], onSave: [] };
    class d {
      static haveChangesBeenMade() {
        return console.log("haveChangesBeenMade", l), l;
      }
      static addEventListener(t, e, n, ...r) {
        u[t].push({ listener: e, thisArg: n, args: r });
      }
      static _dispatchEvent(t) {
        const e = u[t];
        for (const { listener: t, thisArg: n, args: r } of e) t.apply(n, r);
      }
      static detected() {
        l || ((l = !0), d._dispatchEvent("onChange"));
      }
      static resetState() {
        (l = !1), d._dispatchEvent("onSave");
      }
    }
    let m = null,
      f = null;
    function p(t) {
      t.preventDefault();
      const e = window.scrollX,
        n = window.scrollY;
      !(function (t, e, n, o) {
        const i = r("div", "menu");
        document.body.appendChild(i),
          (i.tabIndex = 9),
          i.focus(),
          (i.owner = n),
          (i.x = t),
          (i.y = e),
          (i.style.left = t + "px"),
          (i.style.top = e + "px"),
          c(i),
          (i.owner.style.outline = "4px solid rgba(100, 158, 180, 0.8)"),
          i.addEventListener("blur", (t) => {
            document.body.removeChild(i), (i.owner.style.outline = "");
          });
      })(t.clientX + e, t.clientY + n, this),
        window.scrollTo(e, n);
    }
    function g(t) {
      t.addEventListener("contextmenu", p),
        (t.getItemCount = function () {
          return this._itemCount;
        }),
        (t.removeItem = function (t) {
          t.remove(), this.itemCount--;
        }),
        (t.getTitleName = function () {
          return this.titleElem.textContent;
        }),
        (t.getItems = function () {
          return this.querySelectorAll(
            ".list__item:not(.list__item--add-more)"
          );
        }),
        (t.newListItem = function (t = "") {
          this._itemCount++;
          const e = (function (t, e = "") {
            const n = r("div", "list__item");
            (n.draggable = !0), (n._orderNumber = t);
            const o = r("div", "list__item-order");
            (o.textContent = t + "."), (n._order = o);
            const i = r("div", "list__item-content");
            return (
              (i.textContent = e),
              (n._content = i),
              n.appendChild(o),
              n.appendChild(i),
              (n.setOrderNumber = function (t) {
                (n._order.textContent = 0 === t ? "" : t + "."),
                  (n._orderNumber = t);
              }),
              (n.getOrderNumber = function () {
                return n._orderNumber;
              }),
              (n.getContentElem = function () {
                return n._content;
              }),
              (n.getURL = function () {
                return n._content.textContent;
              }),
              n
            );
          })(this._itemCount, t);
          return (
            o(e.getContentElem()),
            (function (t, e, n, r) {
              const o = e.getContentElem();
              function i() {
                const t = n.children.length - 1;
                for (let e = 1; e < t; e++) {
                  n.children[e].setOrderNumber(e);
                }
              }
              o.addEventListener("keydown", (n) => {
                "Enter" === n.key
                  ? (o.blur(),
                    o.textContent.length || (t.removeItem(e), i()),
                    t.getItemCount() === e.getOrderNumber() && r.focus())
                  : d.detected();
              }),
                o.addEventListener("blur", (t) => {
                  o.textContent = o.textContent.trim();
                }),
                e.addEventListener("dragstart", (t) => {
                  (m = e),
                    e
                      .getContentElem()
                      .classList.add("list__item-content--dragging"),
                    t.dataTransfer.setDragImage(
                      document.createElement("img"),
                      0,
                      0
                    );
                }),
                e.addEventListener("dragover", (t) => {
                  t.preventDefault();
                  const r = e.getBoundingClientRect();
                  if (t.clientY - r.top - r.height / 2 < 0) {
                    if (f === e) return;
                    n.insertBefore(m, e), (f = m);
                  } else {
                    const t = e.nextElementSibling;
                    if (f === t) return;
                    n.insertBefore(m, t), (f = t);
                  }
                  i();
                }),
                e.addEventListener("dragend", () => {
                  d.detected(),
                    m
                      .getContentElem()
                      .classList.remove("list__item-content--dragging"),
                    (m = null);
                });
            })(this, e, this.itemContainer, this.futureItem),
            e
          );
        }),
        (t.stringify = function () {
          const t = [].map.call(this.getItems(), (t) => t.getURL());
          return JSON.stringify({
            type: i.TabList,
            settings: this._settings,
            titleName: this.getTitleName(),
            urls: t,
          });
        });
    }
    function v(t) {
      const e = r("div", "list__item-wrapper");
      return t.appendChild(e), e;
    }
    function y(t, e = "Title") {
      const n = document.createElement("div");
      return (
        (n.className = "list__title"),
        (n.textContent = e),
        o(n),
        (function (t, e) {
          t.addEventListener("keydown", (n) => {
            "Enter" === n.key
              ? 0 === e.getItemCount()
                ? e.futureItem.focus()
                : t.blur()
              : d.detected();
          }),
            t.addEventListener("blur", () => {
              t.textContent = t.textContent.trim();
            });
        })(n, t),
        t.itemContainer.appendChild(n),
        n
      );
    }
    function _(t) {
      const e = r("div", "list__item list__item--add-more");
      return (
        o(e),
        (function (t, e) {
          e.addEventListener("keydown", (n) => {
            "Enter" === n.key &&
              (n.preventDefault(),
              (e.textContent = e.textContent.trim()),
              e.textContent.length &&
                (function (t, e, n) {
                  const r = n.newListItem();
                  (r.getContentElem().textContent = e.textContent),
                    (e.textContent = ""),
                    n.itemContainer.insertBefore(r, e);
                })(0, e, t));
          }),
            e.addEventListener("blur", () => {
              e.textContent = e.textContent.trim();
            });
        })(t, e),
        t.itemContainer.appendChild(e),
        e
      );
    }
    function h() {
      d.detected();
      const t = (function () {
        const t = r("div", "list");
        return (
          (t._itemCount = 0),
          (t._settings = {}),
          a.add(t),
          (t.itemContainer = v(t)),
          (t.titleElem = y(t)),
          (t.futureItem = _(t)),
          g(t),
          t
        );
      })();
      this.addList(t);
    }
    class C {
      static get _parseByType() {
        return b;
      }
      static parse(t) {
        this._parseByType[t.type](t);
      }
    }
    const b = [];
    b[i.TabList] = function (t) {
      const e = (function (t) {
        const e = r("div", "list");
        (e._itemCount = 0),
          (e._settings = t.settings),
          a.add(e),
          (e.itemContainer = v(e)),
          (e.titleElem = y(e, t.titleName)),
          (e.futureItem = _(e)),
          g(e);
        for (const n of t.urls) {
          const t = e.newListItem(n);
          e.itemContainer.insertBefore(t, e.futureItem);
        }
        return e;
      })(t);
      w.addList(e);
    };
    const E = window.localStorage;
    class L {
      static save() {
        if (!d.haveChangesBeenMade()) return !1;
        let t = 0;
        for (const e of a) E.setItem("+" + t, e.stringify()), t++;
        return (
          d.resetState(),
          console.log("SAVED:"),
          console.log("savables", a._stack),
          console.log("storage:", E),
          !0
        );
      }
      static load() {
        const t = (function () {
          const t = [];
          for (let e = 0; e < E.length; e++) {
            const n = E.key(e);
            t.push(JSON.parse(E.getItem(n)));
          }
          return t;
        })();
        this._removeCurrentlyRunningObjects(), a.clear();
        for (const e of t) C.parse(e);
      }
      static _clear() {
        E.clear();
      }
      static _removeCurrentlyRunningObjects() {
        for (const t of a) t.remove();
      }
    }
    document.body.addEventListener("keydown", (t) => {
      t.shiftKey ||
        t.altKey ||
        !t.ctrlKey ||
        ("s" !== t.key && "S" !== t.key) ||
        (t.preventDefault(), L.save());
    }),
      setTimeout(function t() {
        L.save(), setTimeout(t, 1e4);
      }, 1e4);
    const x = class {
        static FromExistingElem(t) {
          var e;
          return (
            t.classList.add("--gray-scale"),
            ((e = t).toggleGrayScale = function (t) {
              e.classList.remove("--gray-scale"),
                console.log("CALLED", t),
                t
                  ? e.classList.add("--gray-scale")
                  : e.classList.remove("--gray-scale");
            }),
            (function (t) {
              d.addEventListener("onChange", t.toggleGrayScale, t, !1),
                d.addEventListener("onSave", t.toggleGrayScale, t, !0),
                t.addEventListener("click", () => {
                  d.haveChangesBeenMade() && L.save();
                });
            })(t),
            t
          );
        }
      }.FromExistingElem(document.querySelector(".save-btn")),
      S = document.querySelector(".lists-wrapper"),
      w = (function (t = null) {
        const e = document.createElement("button");
        return (
          t && t.appendChild(e),
          (e.className = "btn btn--padding"),
          (e.textContent = "Add new list"),
          (e.listsElem = e.previousElementSibling),
          e.addEventListener("click", h),
          (e.addList = function (t) {
            this.listsElem.appendChild(t);
          }),
          e
        );
      })(S);
    L.load();
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc2NyaXB0cy9tYWluLmJ1bmRsZS5qcyJdLCJuYW1lcyI6WyJtb2R1bGVzIiwiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsIl9fd2VicGFja19leHBvcnRzX18iLCJjcmVhdGVFbGVtZW50IiwidGFnTmFtZSIsImNsYXNzTmFtZSIsImVsZW0iLCJkb2N1bWVudCIsIm1ha2VFbGVtZW50RWRpdGFibGUiLCJ0YXJnZXQiLCJjb250ZW50RWRpdGFibGUiLCJzcGVsbGNoZWNrIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRleHQiLCJjbGlwYm9hcmREYXRhIiwiZ2V0RGF0YSIsImV4ZWNDb21tYW5kIiwibWFpbl9zYXZlQnV0dG9uIiwibGlzdHNXcmFwcGVyIiwibWFpbl9hZGRMaXN0QnV0dG9uIiwiVHlwZSIsImZyZWV6ZSIsIlRhYkxpc3QiLCJfc3RhY2siLCJTYXZhYmxlT2JqZWN0cyIsIltvYmplY3QgT2JqZWN0XSIsInNhdmVhYmxlIiwicHVzaCIsIml0ZXJhdG9yIiwic2F2YWJsZSIsImFkZE9wdGlvbnMiLCJtZW51Iiwib3B0aW9ucyIsImNoZWNrZWQiLCJvcHRpb24iLCJjQm94IiwidHlwZSIsIm9wdGlvbk5hbWUiLCJ0ZXh0Q29udGVudCIsImFwcGVuZCIsIm5ld0NoZWNrQm94T3B0aW9uIiwiX2NoYW5nZWQiLCJfbGlzdGVuZXJzRGF0YSIsIm9uQ2hhbmdlIiwib25TYXZlIiwiQ2hhbmdlc0RldGVjdG9yIiwiY29uc29sZSIsImxvZyIsImxpc3RlbmVyIiwidGhpc0FyZyIsImFyZ3MiLCJsaXN0ZW5lcnNEYXRhIiwiYXBwbHkiLCJfZGlzcGF0Y2hFdmVudCIsImRyYWdnZWRJdGVtIiwiZHJhZ2dlZE92ZXJJdGVtIiwibWVudUV2ZW50Iiwib2xkU2Nyb2xsWCIsIndpbmRvdyIsInNjcm9sbFgiLCJvbGRTY3JvbGxZIiwic2Nyb2xsWSIsIngiLCJ5IiwibGlzdCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInRhYkluZGV4IiwiZm9jdXMiLCJvd25lciIsInN0eWxlIiwibGVmdCIsInRvcCIsIm91dGxpbmUiLCJyZW1vdmVDaGlsZCIsIm5ld01lbnUiLCJjbGllbnRYIiwiY2xpZW50WSIsInRoaXMiLCJzY3JvbGxUbyIsImFkZEZ1bmN0aW9uYWxpdGllcyIsInRhYkxpc3QiLCJnZXRJdGVtQ291bnQiLCJfaXRlbUNvdW50IiwicmVtb3ZlSXRlbSIsIml0ZW0iLCJyZW1vdmUiLCJpdGVtQ291bnQiLCJnZXRUaXRsZU5hbWUiLCJ0aXRsZUVsZW0iLCJnZXRJdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJuZXdMaXN0SXRlbSIsInVybCIsIm9yZGVyTnVtYmVyIiwiZHJhZ2dhYmxlIiwiX29yZGVyTnVtYmVyIiwib3JkZXIiLCJfb3JkZXIiLCJjb250ZW50IiwiX2NvbnRlbnQiLCJzZXRPcmRlck51bWJlciIsImdldE9yZGVyTnVtYmVyIiwiZ2V0Q29udGVudEVsZW0iLCJnZXRVUkwiLCJuZXdJdGVtIiwiaXRlbVdyYXBwZXIiLCJmdXR1cmVJdGVtIiwiaXRlbUNvbnRlbnQiLCJmaXhPcmRlck51bWJlciIsInJhbmdlIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJibHVyIiwiZGV0ZWN0ZWQiLCJ0cmltIiwiY2xhc3NMaXN0IiwiYWRkIiwiZGF0YVRyYW5zZmVyIiwic2V0RHJhZ0ltYWdlIiwiYm94IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0IiwiaW5zZXJ0QmVmb3JlIiwibmV4dEl0ZW0iLCJuZXh0RWxlbWVudFNpYmxpbmciLCJpbml0SXRlbUV2ZW50cyIsInN0cmluZ2lmeSIsInVybHMiLCJtYXAiLCJKU09OIiwic2V0dGluZ3MiLCJfc2V0dGluZ3MiLCJ0aXRsZU5hbWUiLCJuZXdJdGVtV3JhcHBlciIsIm5ld1RpdGxlIiwidGl0bGUiLCJpbml0VGl0bGVFdmVudHMiLCJuZXdGdXR1cmVJdGVtIiwiaW5pdEZ1dHVyZUl0ZW1FdmVudHMiLCJhZGROZXdMaXN0RXZlbnQiLCJsaXN0RWxlbSIsIm5ld1RhYkxpc3QiLCJhZGRMaXN0IiwiT2JqZWN0TG9hZGVyIiwiX3BhcnNlQnlUeXBlIiwicGFyc2VCeVR5cGVIYW5kbGVycyIsInNhdmFibGVPYmplY3RKU09OIiwidGFiTGlzdEpTT04iLCJuZXdUYWJMaXN0RnJvbUpTT04iLCJzdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwiTG9jYWxTdG9yYWdlX0xvY2FsU3RvcmFnZSIsImhhdmVDaGFuZ2VzQmVlbk1hZGUiLCJpZCIsInNldEl0ZW0iLCJyZXNldFN0YXRlIiwic2F2YWJsZU9iamVjdHNEYXRhIiwicGFyc2UiLCJnZXRJdGVtIiwiZ2V0U2F2YWJsZU9iamVjdHNEYXRhIiwiX3JlbW92ZUN1cnJlbnRseVJ1bm5pbmdPYmplY3RzIiwiY2xlYXIiLCJkYXRhIiwic2hpZnRLZXkiLCJhbHRLZXkiLCJjdHJsS2V5Iiwic2F2ZSIsInNldFRpbWVvdXQiLCJyZXBlYXQiLCJzYXZlQnV0dG9uIiwidG9nZ2xlR3JheVNjYWxlIiwic3RhdGUiLCJpbml0U2F2ZUJ1dHRvbkV2ZW50cyIsIkZyb21FeGlzdGluZ0VsZW0iLCJxdWVyeVNlbGVjdG9yIiwiYXBwZW5kVGFyZ2V0IiwiYWRkTGlzdEJ1dHRvbiIsImxpc3RzRWxlbSIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJuZXdBZGRMaXN0QnV0dG9uIiwibG9hZCJdLCJtYXBwaW5ncyI6IkNBQVMsU0FBVUEs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QUFxQixHQUMzQixJQUFLLElBQUk1TCxFQUFJLEVBQUdBLEVBQUlxTCxFQUFRdEMsT0FBUS9JLElBQUssQ0FFdkMsTUFBTXNCLEVBQU0rSixFQUFRL0osSUFBSXRCLEdBQ3hCNEwsRUFBbUJsSSxLQUFLdUcsS0FBSzRCLE1BQU1SLEVBQVFTLFFBQVF4SyxLQUVyRCxPQUFPc0ssRUE3QnNCRyxHQUUzQmxGLEtBQUttRixpQ0FDTHpJLEVBQWUwSSxRQUVmLElBQUssTUFBTUMsS0FBUU4sRUFDakJiLEVBQWFjLE1BQU1LLEdBSXZCMUksZ0JBQ0U2SCxFQUFRWSxRQUdWekksd0NBQ0UsSUFBSyxNQUFNSSxLQUFXTCxFQUNwQkssRUFBUXlELFVBdUJaakYsU0FBUzRELEtBQUt2RCxpQkFBaUIsVUFBWUMsSUFDckNBLEVBQUV5SixVQUFZekosRUFBRTBKLFNBQ2YxSixFQUFFMkosU0FBc0IsTUFBVjNKLEVBQUVwQixLQUF5QixNQUFWb0IsRUFBRXBCLE1BQ3RDb0IsRUFBRUMsaUJBQ0Y0SSxFQUEwQmUsVUFRNUJDLFlBQVcsU0FBU0MsSUFDbEJqQixFQUEwQmUsT0FDMUJDLFdBQVdDLEVBQVEsT0FDbEIsS0F1RkwsTUFBTXhKLEVBeEJOLE1BSUVRLHdCQUF3QnJCLEdBdEQxQixJQUErQ3NLLEVBMkQzQyxPQUpBdEssRUFBS2dILFVBQVVDLElBQUksaUJBdkR3QnFELEVBeURMdEssR0FwRDdCdUssZ0JBQWtCLFNBQVVDLEdBRXJDRixFQUFXdEQsVUFBVTlCLE9BQU8sZ0JBQzVCeEMsUUFBUUMsSUFBSSxTQUFVNkgsR0FFbEJBLEVBQU9GLEVBQVd0RCxVQUFVQyxJQUFJLGdCQUMvQnFELEVBQVd0RCxVQUFVOUIsT0FBTyxpQkFRckMsU0FBOEJvRixHQUM1QjdILEVBQWdCbkMsaUJBQ2QsV0FDQWdLLEVBQVdDLGdCQUNYRCxHQUNBLEdBSUY3SCxFQUFnQm5DLGlCQUNkLFNBQ0FnSyxFQUFXQyxnQkFDWEQsR0FDQSxHQUdGQSxFQUFXaEssaUJBQWlCLFFBQVMsS0FDOUJtQyxFQUFnQjRHLHVCQUVyQkQsRUFBMEJlLFNBb0IxQk0sQ0FBcUJ6SyxHQUNkQSxJQWVtQzBLLGlCQUM1Q3pLLFNBQVMwSyxjQUFjLGNBRW5CN0osRUFBZWIsU0FBUzBLLGNBQWMsa0JBQ3RDNUosRUEvUE4sU0FBMEI2SixFQUFlLE1BQ3ZDLE1BQU1DLEVBQWdCNUssU0FBU0osY0FBYyxVQWdCN0MsT0FkSStLLEdBQWNBLEVBQWE5RyxZQUFZK0csR0FFM0NBLEVBQWM5SyxVQUFZLG1CQUMxQjhLLEVBQWMzSSxZQUFjLGVBQzVCMkksRUFBY0MsVUFBWUQsRUFBY0UsdUJBR3hDRixFQUFjdkssaUJBQWlCLFFBQVNrSSxHQUV4Q3FDLEVBQWNsQyxRQUFVLFNBQVUvRSxHQUVoQ2MsS0FBS29HLFVBQVVoSCxZQUFZRixJQUd0QmlILEVBOE9rQkcsQ0FBaUJsSyxHQUc1Q3NJLEVBQTBCNkIiLCJmaWxlIjoiLi9zY3JpcHRzL21haW4uYnVuZGxlLmpzIiwic291cmNlUm9vdCI6IiJ9
