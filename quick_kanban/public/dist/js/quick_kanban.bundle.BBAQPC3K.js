(() => {
  // ../quick_kanban/quick_kanban/public/js/quick_kanban.bundle.js
  (function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
      return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
      r(i);
    new MutationObserver((i) => {
      for (const o of i)
        if (o.type === "childList")
          for (const s of o.addedNodes)
            s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
    }).observe(document, { childList: true, subtree: true });
    function n(i) {
      const o = {};
      return i.integrity && (o.integrity = i.integrity), i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
    }
    function r(i) {
      if (i.ep)
        return;
      i.ep = true;
      const o = n(i);
      fetch(i.href, o);
    }
  })();
  function Yr(e, t) {
    const n = new Set(e.split(","));
    return (r) => n.has(r);
  }
  var Se = {};
  var Cn = [];
  var it = () => {
  };
  var Dc = () => false;
  var hr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97);
  var Xi = (e) => e.startsWith("onUpdate:");
  var Ae = Object.assign;
  var Ji = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  };
  var Lc = Object.prototype.hasOwnProperty;
  var _e = (e, t) => Lc.call(e, t);
  var J = Array.isArray;
  var Tn = (e) => Vn(e) === "[object Map]";
  var _n = (e) => Vn(e) === "[object Set]";
  var No = (e) => Vn(e) === "[object Date]";
  var kc = (e) => Vn(e) === "[object RegExp]";
  var le = (e) => typeof e == "function";
  var Pe = (e) => typeof e == "string";
  var Lt = (e) => typeof e == "symbol";
  var xe = (e) => e !== null && typeof e == "object";
  var Qi = (e) => (xe(e) || le(e)) && le(e.then) && le(e.catch);
  var bs = Object.prototype.toString;
  var Vn = (e) => bs.call(e);
  var Fc = (e) => Vn(e).slice(8, -1);
  var ws = (e) => Vn(e) === "[object Object]";
  var Zi = (e) => Pe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e;
  var On = Yr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
  var Xr = (e) => {
    const t = /* @__PURE__ */ Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  };
  var jc = /-(\w)/g;
  var Ze = Xr((e) => e.replace(jc, (t, n) => n ? n.toUpperCase() : ""));
  var Bc = /\B([A-Z])/g;
  var ut = Xr((e) => e.replace(Bc, "-$1").toLowerCase());
  var pr = Xr((e) => e.charAt(0).toUpperCase() + e.slice(1));
  var Zn = Xr((e) => e ? `on${pr(e)}` : "");
  var St = (e, t) => !Object.is(e, t);
  var In = (e, t) => {
    for (let n = 0; n < e.length; n++)
      e[n](t);
  };
  var Ss = (e, t, n, r = false) => {
    Object.defineProperty(e, t, { configurable: true, enumerable: false, writable: r, value: n });
  };
  var kr = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
  var Fr = (e) => {
    const t = Pe(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
  var Mo;
  var Es = () => Mo || (Mo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
  var Hc = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error";
  var $c = Yr(Hc);
  function Qt(e) {
    if (J(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) {
        const r = e[n], i = Pe(r) ? zc(r) : Qt(r);
        if (i)
          for (const o in i)
            t[o] = i[o];
      }
      return t;
    } else if (Pe(e) || xe(e))
      return e;
  }
  var Vc = /;(?![^(]*\))/g;
  var Uc = /:([^]+)/;
  var Kc = /\/\*[^]*?\*\//g;
  function zc(e) {
    const t = {};
    return e.replace(Kc, "").split(Vc).forEach((n) => {
      if (n) {
        const r = n.split(Uc);
        r.length > 1 && (t[r[0].trim()] = r[1].trim());
      }
    }), t;
  }
  function Un(e) {
    let t = "";
    if (Pe(e))
      t = e;
    else if (J(e))
      for (let n = 0; n < e.length; n++) {
        const r = Un(e[n]);
        r && (t += r + " ");
      }
    else if (xe(e))
      for (const n in e)
        e[n] && (t += n + " ");
    return t.trim();
  }
  function Gc(e) {
    if (!e)
      return null;
    let { class: t, style: n } = e;
    return t && !Pe(t) && (e.class = Un(t)), n && (e.style = Qt(n)), e;
  }
  var Wc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly";
  var qc = Yr(Wc);
  function xs(e) {
    return !!e || e === "";
  }
  function Yc(e, t) {
    if (e.length !== t.length)
      return false;
    let n = true;
    for (let r = 0; n && r < e.length; r++)
      n = Yt(e[r], t[r]);
    return n;
  }
  function Yt(e, t) {
    if (e === t)
      return true;
    let n = No(e), r = No(t);
    if (n || r)
      return n && r ? e.getTime() === t.getTime() : false;
    if (n = Lt(e), r = Lt(t), n || r)
      return e === t;
    if (n = J(e), r = J(t), n || r)
      return n && r ? Yc(e, t) : false;
    if (n = xe(e), r = xe(t), n || r) {
      if (!n || !r)
        return false;
      const i = Object.keys(e).length, o = Object.keys(t).length;
      if (i !== o)
        return false;
      for (const s in e) {
        const l = e.hasOwnProperty(s), c = t.hasOwnProperty(s);
        if (l && !c || !l && c || !Yt(e[s], t[s]))
          return false;
      }
    }
    return String(e) === String(t);
  }
  function Jr(e, t) {
    return e.findIndex((n) => Yt(n, t));
  }
  var An = (e) => Pe(e) ? e : e == null ? "" : J(e) || xe(e) && (e.toString === bs || !le(e.toString)) ? JSON.stringify(e, Cs, 2) : String(e);
  var Cs = (e, t) => t && t.__v_isRef ? Cs(e, t.value) : Tn(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, i], o) => (n[mi(r, o) + " =>"] = i, n), {}) } : _n(t) ? { [`Set(${t.size})`]: [...t.values()].map((n) => mi(n)) } : Lt(t) ? mi(t) : xe(t) && !J(t) && !ws(t) ? String(t) : t;
  var mi = (e, t = "") => {
    var n;
    return Lt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
  var ct;
  var eo = class {
    constructor(t = false) {
      this.detached = t, this._active = true, this.effects = [], this.cleanups = [], this.parent = ct, !t && ct && (this.index = (ct.scopes || (ct.scopes = [])).push(this) - 1);
    }
    get active() {
      return this._active;
    }
    run(t) {
      if (this._active) {
        const n = ct;
        try {
          return ct = this, t();
        } finally {
          ct = n;
        }
      }
    }
    on() {
      ct = this;
    }
    off() {
      ct = this.parent;
    }
    stop(t) {
      if (this._active) {
        let n, r;
        for (n = 0, r = this.effects.length; n < r; n++)
          this.effects[n].stop();
        for (n = 0, r = this.cleanups.length; n < r; n++)
          this.cleanups[n]();
        if (this.scopes)
          for (n = 0, r = this.scopes.length; n < r; n++)
            this.scopes[n].stop(true);
        if (!this.detached && this.parent && !t) {
          const i = this.parent.scopes.pop();
          i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
        }
        this.parent = void 0, this._active = false;
      }
    }
  };
  function Ts(e) {
    return new eo(e);
  }
  function Os(e, t = ct) {
    t && t.active && t.effects.push(e);
  }
  function Is() {
    return ct;
  }
  function Xc(e) {
    ct && ct.cleanups.push(e);
  }
  var cn;
  var Fn = class {
    constructor(t, n, r, i) {
      this.fn = t, this.trigger = n, this.scheduler = r, this.active = true, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = false, this._depsLength = 0, Os(this, i);
    }
    get dirty() {
      if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
        this._dirtyLevel = 1, Zt();
        for (let t = 0; t < this._depsLength; t++) {
          const n = this.deps[t];
          if (n.computed && (Jc(n.computed), this._dirtyLevel >= 4))
            break;
        }
        this._dirtyLevel === 1 && (this._dirtyLevel = 0), en();
      }
      return this._dirtyLevel >= 4;
    }
    set dirty(t) {
      this._dirtyLevel = t ? 4 : 0;
    }
    run() {
      if (this._dirtyLevel = 0, !this.active)
        return this.fn();
      let t = qt, n = cn;
      try {
        return qt = true, cn = this, this._runnings++, Po(this), this.fn();
      } finally {
        Ro(this), this._runnings--, cn = n, qt = t;
      }
    }
    stop() {
      this.active && (Po(this), Ro(this), this.onStop && this.onStop(), this.active = false);
    }
  };
  function Jc(e) {
    return e.value;
  }
  function Po(e) {
    e._trackId++, e._depsLength = 0;
  }
  function Ro(e) {
    if (e.deps.length > e._depsLength) {
      for (let t = e._depsLength; t < e.deps.length; t++)
        As(e.deps[t], e);
      e.deps.length = e._depsLength;
    }
  }
  function As(e, t) {
    const n = e.get(t);
    n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
  }
  function Qc(e, t) {
    e.effect instanceof Fn && (e = e.effect.fn);
    const n = new Fn(e, it, () => {
      n.dirty && n.run();
    });
    t && (Ae(n, t), t.scope && Os(n, t.scope)), (!t || !t.lazy) && n.run();
    const r = n.run.bind(n);
    return r.effect = n, r;
  }
  function Zc(e) {
    e.effect.stop();
  }
  var qt = true;
  var Ii = 0;
  var Ns = [];
  function Zt() {
    Ns.push(qt), qt = false;
  }
  function en() {
    const e = Ns.pop();
    qt = e === void 0 ? true : e;
  }
  function to() {
    Ii++;
  }
  function no() {
    for (Ii--; !Ii && Ai.length; )
      Ai.shift()();
  }
  function Ms(e, t, n) {
    if (t.get(e) !== e._trackId) {
      t.set(e, e._trackId);
      const r = e.deps[e._depsLength];
      r !== t ? (r && As(r, e), e.deps[e._depsLength++] = t) : e._depsLength++;
    }
  }
  var Ai = [];
  function Ps(e, t, n) {
    to();
    for (const r of e.keys()) {
      let i;
      r._dirtyLevel < t && (i != null ? i : i = e.get(r) === r._trackId) && (r._shouldSchedule || (r._shouldSchedule = r._dirtyLevel === 0), r._dirtyLevel = t), r._shouldSchedule && (i != null ? i : i = e.get(r) === r._trackId) && (r.trigger(), (!r._runnings || r.allowRecurse) && r._dirtyLevel !== 2 && (r._shouldSchedule = false, r.scheduler && Ai.push(r.scheduler)));
    }
    no();
  }
  var Rs = (e, t) => {
    const n = /* @__PURE__ */ new Map();
    return n.cleanup = e, n.computed = t, n;
  };
  var jr = /* @__PURE__ */ new WeakMap();
  var an = Symbol("");
  var Ni = Symbol("");
  function st(e, t, n) {
    if (qt && cn) {
      let r = jr.get(e);
      r || jr.set(e, r = /* @__PURE__ */ new Map());
      let i = r.get(n);
      i || r.set(n, i = Rs(() => r.delete(n))), Ms(cn, i);
    }
  }
  function Rt(e, t, n, r, i, o) {
    const s = jr.get(e);
    if (!s)
      return;
    let l = [];
    if (t === "clear")
      l = [...s.values()];
    else if (n === "length" && J(e)) {
      const c = Number(r);
      s.forEach((u, d) => {
        (d === "length" || !Lt(d) && d >= c) && l.push(u);
      });
    } else
      switch (n !== void 0 && l.push(s.get(n)), t) {
        case "add":
          J(e) ? Zi(n) && l.push(s.get("length")) : (l.push(s.get(an)), Tn(e) && l.push(s.get(Ni)));
          break;
        case "delete":
          J(e) || (l.push(s.get(an)), Tn(e) && l.push(s.get(Ni)));
          break;
        case "set":
          Tn(e) && l.push(s.get(an));
          break;
      }
    to();
    for (const c of l)
      c && Ps(c, 4);
    no();
  }
  function ea(e, t) {
    const n = jr.get(e);
    return n && n.get(t);
  }
  var ta = Yr("__proto__,__v_isRef,__isVue");
  var Ds = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Lt));
  var Do = na();
  function na() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function(...n) {
        const r = ye(this);
        for (let o = 0, s = this.length; o < s; o++)
          st(r, "get", o + "");
        const i = r[t](...n);
        return i === -1 || i === false ? r[t](...n.map(ye)) : i;
      };
    }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function(...n) {
        Zt(), to();
        const r = ye(this)[t].apply(this, n);
        return no(), en(), r;
      };
    }), e;
  }
  function ra(e) {
    Lt(e) || (e = String(e));
    const t = ye(this);
    return st(t, "has", e), t.hasOwnProperty(e);
  }
  var Ls = class {
    constructor(t = false, n = false) {
      this._isReadonly = t, this._isShallow = n;
    }
    get(t, n, r) {
      const i = this._isReadonly, o = this._isShallow;
      if (n === "__v_isReactive")
        return !i;
      if (n === "__v_isReadonly")
        return i;
      if (n === "__v_isShallow")
        return o;
      if (n === "__v_raw")
        return r === (i ? o ? $s : Hs : o ? Bs : js).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
      const s = J(t);
      if (!i) {
        if (s && _e(Do, n))
          return Reflect.get(Do, n, r);
        if (n === "hasOwnProperty")
          return ra;
      }
      const l = Reflect.get(t, n, r);
      return (Lt(n) ? Ds.has(n) : ta(n)) || (i || st(t, "get", n), o) ? l : Ge(l) ? s && Zi(n) ? l : l.value : xe(l) ? i ? io(l) : gr(l) : l;
    }
  };
  var ks = class extends Ls {
    constructor(t = false) {
      super(false, t);
    }
    set(t, n, r, i) {
      let o = t[n];
      if (!this._isShallow) {
        const c = jn(o);
        if (!ir(r) && !jn(r) && (o = ye(o), r = ye(r)), !J(t) && Ge(o) && !Ge(r))
          return c ? false : (o.value = r, true);
      }
      const s = J(t) && Zi(n) ? Number(n) < t.length : _e(t, n), l = Reflect.set(t, n, r, i);
      return t === ye(i) && (s ? St(r, o) && Rt(t, "set", n, r) : Rt(t, "add", n, r)), l;
    }
    deleteProperty(t, n) {
      const r = _e(t, n);
      t[n];
      const i = Reflect.deleteProperty(t, n);
      return i && r && Rt(t, "delete", n, void 0), i;
    }
    has(t, n) {
      const r = Reflect.has(t, n);
      return (!Lt(n) || !Ds.has(n)) && st(t, "has", n), r;
    }
    ownKeys(t) {
      return st(t, "iterate", J(t) ? "length" : an), Reflect.ownKeys(t);
    }
  };
  var Fs = class extends Ls {
    constructor(t = false) {
      super(true, t);
    }
    set(t, n) {
      return true;
    }
    deleteProperty(t, n) {
      return true;
    }
  };
  var ia = new ks();
  var oa = new Fs();
  var sa = new ks(true);
  var la = new Fs(true);
  var ro = (e) => e;
  var Qr = (e) => Reflect.getPrototypeOf(e);
  function wr(e, t, n = false, r = false) {
    e = e.__v_raw;
    const i = ye(e), o = ye(t);
    n || (St(t, o) && st(i, "get", t), st(i, "get", o));
    const { has: s } = Qr(i), l = r ? ro : n ? so : or;
    if (s.call(i, t))
      return l(e.get(t));
    if (s.call(i, o))
      return l(e.get(o));
    e !== i && e.get(t);
  }
  function Sr(e, t = false) {
    const n = this.__v_raw, r = ye(n), i = ye(e);
    return t || (St(e, i) && st(r, "has", e), st(r, "has", i)), e === i ? n.has(e) : n.has(e) || n.has(i);
  }
  function Er(e, t = false) {
    return e = e.__v_raw, !t && st(ye(e), "iterate", an), Reflect.get(e, "size", e);
  }
  function Lo(e) {
    e = ye(e);
    const t = ye(this);
    return Qr(t).has.call(t, e) || (t.add(e), Rt(t, "add", e, e)), this;
  }
  function ko(e, t) {
    t = ye(t);
    const n = ye(this), { has: r, get: i } = Qr(n);
    let o = r.call(n, e);
    o || (e = ye(e), o = r.call(n, e));
    const s = i.call(n, e);
    return n.set(e, t), o ? St(t, s) && Rt(n, "set", e, t) : Rt(n, "add", e, t), this;
  }
  function Fo(e) {
    const t = ye(this), { has: n, get: r } = Qr(t);
    let i = n.call(t, e);
    i || (e = ye(e), i = n.call(t, e)), r && r.call(t, e);
    const o = t.delete(e);
    return i && Rt(t, "delete", e, void 0), o;
  }
  function jo() {
    const e = ye(this), t = e.size !== 0, n = e.clear();
    return t && Rt(e, "clear", void 0, void 0), n;
  }
  function xr(e, t) {
    return function(r, i) {
      const o = this, s = o.__v_raw, l = ye(s), c = t ? ro : e ? so : or;
      return !e && st(l, "iterate", an), s.forEach((u, d) => r.call(i, c(u), c(d), o));
    };
  }
  function Cr(e, t, n) {
    return function(...r) {
      const i = this.__v_raw, o = ye(i), s = Tn(o), l = e === "entries" || e === Symbol.iterator && s, c = e === "keys" && s, u = i[e](...r), d = n ? ro : t ? so : or;
      return !t && st(o, "iterate", c ? Ni : an), { next() {
        const { value: h, done: v } = u.next();
        return v ? { value: h, done: v } : { value: l ? [d(h[0]), d(h[1])] : d(h), done: v };
      }, [Symbol.iterator]() {
        return this;
      } };
    };
  }
  function Ht(e) {
    return function(...t) {
      return e === "delete" ? false : e === "clear" ? void 0 : this;
    };
  }
  function ca() {
    const e = { get(o) {
      return wr(this, o);
    }, get size() {
      return Er(this);
    }, has: Sr, add: Lo, set: ko, delete: Fo, clear: jo, forEach: xr(false, false) }, t = { get(o) {
      return wr(this, o, false, true);
    }, get size() {
      return Er(this);
    }, has: Sr, add: Lo, set: ko, delete: Fo, clear: jo, forEach: xr(false, true) }, n = { get(o) {
      return wr(this, o, true);
    }, get size() {
      return Er(this, true);
    }, has(o) {
      return Sr.call(this, o, true);
    }, add: Ht("add"), set: Ht("set"), delete: Ht("delete"), clear: Ht("clear"), forEach: xr(true, false) }, r = { get(o) {
      return wr(this, o, true, true);
    }, get size() {
      return Er(this, true);
    }, has(o) {
      return Sr.call(this, o, true);
    }, add: Ht("add"), set: Ht("set"), delete: Ht("delete"), clear: Ht("clear"), forEach: xr(true, true) };
    return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
      e[o] = Cr(o, false, false), n[o] = Cr(o, true, false), t[o] = Cr(o, false, true), r[o] = Cr(o, true, true);
    }), [e, n, t, r];
  }
  var [aa, ua, fa, da] = ca();
  function Zr(e, t) {
    const n = t ? e ? da : fa : e ? ua : aa;
    return (r, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? r : Reflect.get(_e(n, i) && i in r ? n : r, i, o);
  }
  var ha = { get: Zr(false, false) };
  var pa = { get: Zr(false, true) };
  var ga = { get: Zr(true, false) };
  var ma = { get: Zr(true, true) };
  var js = /* @__PURE__ */ new WeakMap();
  var Bs = /* @__PURE__ */ new WeakMap();
  var Hs = /* @__PURE__ */ new WeakMap();
  var $s = /* @__PURE__ */ new WeakMap();
  function ya(e) {
    switch (e) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function _a(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : ya(Fc(e));
  }
  function gr(e) {
    return jn(e) ? e : ei(e, false, ia, ha, js);
  }
  function Vs(e) {
    return ei(e, false, sa, pa, Bs);
  }
  function io(e) {
    return ei(e, true, oa, ga, Hs);
  }
  function va(e) {
    return ei(e, true, la, ma, $s);
  }
  function ei(e, t, n, r, i) {
    if (!xe(e) || e.__v_raw && !(t && e.__v_isReactive))
      return e;
    const o = i.get(e);
    if (o)
      return o;
    const s = _a(e);
    if (s === 0)
      return e;
    const l = new Proxy(e, s === 2 ? r : n);
    return i.set(e, l), l;
  }
  function Nn(e) {
    return jn(e) ? Nn(e.__v_raw) : !!(e && e.__v_isReactive);
  }
  function jn(e) {
    return !!(e && e.__v_isReadonly);
  }
  function ir(e) {
    return !!(e && e.__v_isShallow);
  }
  function oo(e) {
    return e ? !!e.__v_raw : false;
  }
  function ye(e) {
    const t = e && e.__v_raw;
    return t ? ye(t) : e;
  }
  function Us(e) {
    return Object.isExtensible(e) && Ss(e, "__v_skip", true), e;
  }
  var or = (e) => xe(e) ? gr(e) : e;
  var so = (e) => xe(e) ? io(e) : e;
  var Ks = class {
    constructor(t, n, r, i) {
      this.getter = t, this._setter = n, this.dep = void 0, this.__v_isRef = true, this.__v_isReadonly = false, this.effect = new Fn(() => t(this._value), () => Mn(this, this.effect._dirtyLevel === 2 ? 2 : 3)), this.effect.computed = this, this.effect.active = this._cacheable = !i, this.__v_isReadonly = r;
    }
    get value() {
      const t = ye(this);
      return (!t._cacheable || t.effect.dirty) && St(t._value, t._value = t.effect.run()) && Mn(t, 4), lo(t), t.effect._dirtyLevel >= 2 && Mn(t, 2), t._value;
    }
    set value(t) {
      this._setter(t);
    }
    get _dirty() {
      return this.effect.dirty;
    }
    set _dirty(t) {
      this.effect.dirty = t;
    }
  };
  function ba(e, t, n = false) {
    let r, i;
    const o = le(e);
    return o ? (r = e, i = it) : (r = e.get, i = e.set), new Ks(r, i, o || !i, n);
  }
  function lo(e) {
    var t;
    qt && cn && (e = ye(e), Ms(cn, (t = e.dep) != null ? t : e.dep = Rs(() => e.dep = void 0, e instanceof Ks ? e : void 0)));
  }
  function Mn(e, t = 4, n) {
    e = ye(e);
    const r = e.dep;
    r && Ps(r, t);
  }
  function Ge(e) {
    return !!(e && e.__v_isRef === true);
  }
  function un(e) {
    return zs(e, false);
  }
  function wa(e) {
    return zs(e, true);
  }
  function zs(e, t) {
    return Ge(e) ? e : new Sa(e, t);
  }
  var Sa = class {
    constructor(t, n) {
      this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = true, this._rawValue = n ? t : ye(t), this._value = n ? t : or(t);
    }
    get value() {
      return lo(this), this._value;
    }
    set value(t) {
      const n = this.__v_isShallow || ir(t) || jn(t);
      t = n ? t : ye(t), St(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : or(t), Mn(this, 4));
    }
  };
  function Ea(e) {
    Mn(e, 4);
  }
  function Pn(e) {
    return Ge(e) ? e.value : e;
  }
  function xa(e) {
    return le(e) ? e() : Pn(e);
  }
  var Ca = { get: (e, t, n) => Pn(Reflect.get(e, t, n)), set: (e, t, n, r) => {
    const i = e[t];
    return Ge(i) && !Ge(n) ? (i.value = n, true) : Reflect.set(e, t, n, r);
  } };
  function co(e) {
    return Nn(e) ? e : new Proxy(e, Ca);
  }
  var Ta = class {
    constructor(t) {
      this.dep = void 0, this.__v_isRef = true;
      const { get: n, set: r } = t(() => lo(this), () => Mn(this));
      this._get = n, this._set = r;
    }
    get value() {
      return this._get();
    }
    set value(t) {
      this._set(t);
    }
  };
  function Gs(e) {
    return new Ta(e);
  }
  function Oa(e) {
    const t = J(e) ? new Array(e.length) : {};
    for (const n in e)
      t[n] = Ws(e, n);
    return t;
  }
  var Ia = class {
    constructor(t, n, r) {
      this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = true;
    }
    get value() {
      const t = this._object[this._key];
      return t === void 0 ? this._defaultValue : t;
    }
    set value(t) {
      this._object[this._key] = t;
    }
    get dep() {
      return ea(ye(this._object), this._key);
    }
  };
  var Aa = class {
    constructor(t) {
      this._getter = t, this.__v_isRef = true, this.__v_isReadonly = true;
    }
    get value() {
      return this._getter();
    }
  };
  function Na(e, t, n) {
    return Ge(e) ? e : le(e) ? new Aa(e) : xe(e) && arguments.length > 1 ? Ws(e, t, n) : un(e);
  }
  function Ws(e, t, n) {
    const r = e[t];
    return Ge(r) ? r : new Ia(e, t, n);
  }
  var Ma = { GET: "get", HAS: "has", ITERATE: "iterate" };
  var Pa = { SET: "set", ADD: "add", DELETE: "delete", CLEAR: "clear" };
  function Ra(e, t) {
  }
  var Da = { SETUP_FUNCTION: 0, 0: "SETUP_FUNCTION", RENDER_FUNCTION: 1, 1: "RENDER_FUNCTION", WATCH_GETTER: 2, 2: "WATCH_GETTER", WATCH_CALLBACK: 3, 3: "WATCH_CALLBACK", WATCH_CLEANUP: 4, 4: "WATCH_CLEANUP", NATIVE_EVENT_HANDLER: 5, 5: "NATIVE_EVENT_HANDLER", COMPONENT_EVENT_HANDLER: 6, 6: "COMPONENT_EVENT_HANDLER", VNODE_HOOK: 7, 7: "VNODE_HOOK", DIRECTIVE_HOOK: 8, 8: "DIRECTIVE_HOOK", TRANSITION_HOOK: 9, 9: "TRANSITION_HOOK", APP_ERROR_HANDLER: 10, 10: "APP_ERROR_HANDLER", APP_WARN_HANDLER: 11, 11: "APP_WARN_HANDLER", FUNCTION_REF: 12, 12: "FUNCTION_REF", ASYNC_COMPONENT_LOADER: 13, 13: "ASYNC_COMPONENT_LOADER", SCHEDULER: 14, 14: "SCHEDULER" };
  var La = { sp: "serverPrefetch hook", bc: "beforeCreate hook", c: "created hook", bm: "beforeMount hook", m: "mounted hook", bu: "beforeUpdate hook", u: "updated", bum: "beforeUnmount hook", um: "unmounted hook", a: "activated hook", da: "deactivated hook", ec: "errorCaptured hook", rtc: "renderTracked hook", rtg: "renderTriggered hook", 0: "setup function", 1: "render function", 2: "watcher getter", 3: "watcher callback", 4: "watcher cleanup function", 5: "native event handler", 6: "component event handler", 7: "vnode hook", 8: "directive hook", 9: "transition hook", 10: "app errorHandler", 11: "app warnHandler", 12: "ref function", 13: "async component loader", 14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ." };
  function Dt(e, t, n, r) {
    try {
      return r ? e(...r) : e();
    } catch (i) {
      vn(i, t, n);
    }
  }
  function ft(e, t, n, r) {
    if (le(e)) {
      const i = Dt(e, t, n, r);
      return i && Qi(i) && i.catch((o) => {
        vn(o, t, n);
      }), i;
    }
    if (J(e)) {
      const i = [];
      for (let o = 0; o < e.length; o++)
        i.push(ft(e[o], t, n, r));
      return i;
    }
  }
  function vn(e, t, n, r = true) {
    const i = t ? t.vnode : null;
    if (t) {
      let o = t.parent;
      const s = t.proxy, l = `https://vuejs.org/error-reference/#runtime-${n}`;
      for (; o; ) {
        const u = o.ec;
        if (u) {
          for (let d = 0; d < u.length; d++)
            if (u[d](e, s, l) === false)
              return;
        }
        o = o.parent;
      }
      const c = t.appContext.config.errorHandler;
      if (c) {
        Zt(), Dt(c, null, 10, [e, s, l]), en();
        return;
      }
    }
    ka(e, n, i, r);
  }
  function ka(e, t, n, r = true) {
    console.error(e);
  }
  var sr = false;
  var Mi = false;
  var Ye = [];
  var It = 0;
  var Rn = [];
  var Kt = null;
  var sn = 0;
  var qs = Promise.resolve();
  var ao = null;
  function ti(e) {
    const t = ao || qs;
    return e ? t.then(this ? e.bind(this) : e) : t;
  }
  function Fa(e) {
    let t = It + 1, n = Ye.length;
    for (; t < n; ) {
      const r = t + n >>> 1, i = Ye[r], o = lr(i);
      o < e || o === e && i.pre ? t = r + 1 : n = r;
    }
    return t;
  }
  function ni(e) {
    (!Ye.length || !Ye.includes(e, sr && e.allowRecurse ? It + 1 : It)) && (e.id == null ? Ye.push(e) : Ye.splice(Fa(e.id), 0, e), Ys());
  }
  function Ys() {
    !sr && !Mi && (Mi = true, ao = qs.then(Xs));
  }
  function ja(e) {
    const t = Ye.indexOf(e);
    t > It && Ye.splice(t, 1);
  }
  function Br(e) {
    J(e) ? Rn.push(...e) : (!Kt || !Kt.includes(e, e.allowRecurse ? sn + 1 : sn)) && Rn.push(e), Ys();
  }
  function Bo(e, t, n = sr ? It + 1 : 0) {
    for (; n < Ye.length; n++) {
      const r = Ye[n];
      if (r && r.pre) {
        if (e && r.id !== e.uid)
          continue;
        Ye.splice(n, 1), n--, r();
      }
    }
  }
  function Hr(e) {
    if (Rn.length) {
      const t = [...new Set(Rn)].sort((n, r) => lr(n) - lr(r));
      if (Rn.length = 0, Kt) {
        Kt.push(...t);
        return;
      }
      for (Kt = t, sn = 0; sn < Kt.length; sn++)
        Kt[sn]();
      Kt = null, sn = 0;
    }
  }
  var lr = (e) => e.id == null ? 1 / 0 : e.id;
  var Ba = (e, t) => {
    const n = lr(e) - lr(t);
    if (n === 0) {
      if (e.pre && !t.pre)
        return -1;
      if (t.pre && !e.pre)
        return 1;
    }
    return n;
  };
  function Xs(e) {
    Mi = false, sr = true, Ye.sort(Ba);
    try {
      for (It = 0; It < Ye.length; It++) {
        const t = Ye[It];
        t && t.active !== false && Dt(t, null, 14);
      }
    } finally {
      It = 0, Ye.length = 0, Hr(), sr = false, ao = null, (Ye.length || Rn.length) && Xs();
    }
  }
  var xn;
  var Tr = [];
  function Js(e, t) {
    var n, r;
    xn = e, xn ? (xn.enabled = true, Tr.forEach(({ event: i, args: o }) => xn.emit(i, ...o)), Tr = []) : typeof window < "u" && window.HTMLElement && !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((o) => {
      Js(o, t);
    }), setTimeout(() => {
      xn || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Tr = []);
    }, 3e3)) : Tr = [];
  }
  function Ha(e, t, ...n) {
    if (e.isUnmounted)
      return;
    const r = e.vnode.props || Se;
    let i = n;
    const o = t.startsWith("update:"), s = o && t.slice(7);
    if (s && s in r) {
      const d = `${s === "modelValue" ? "model" : s}Modifiers`, { number: h, trim: v } = r[d] || Se;
      v && (i = n.map((x) => Pe(x) ? x.trim() : x)), h && (i = n.map(kr));
    }
    let l, c = r[l = Zn(t)] || r[l = Zn(Ze(t))];
    !c && o && (c = r[l = Zn(ut(t))]), c && ft(c, e, 6, i);
    const u = r[l + "Once"];
    if (u) {
      if (!e.emitted)
        e.emitted = {};
      else if (e.emitted[l])
        return;
      e.emitted[l] = true, ft(u, e, 6, i);
    }
  }
  function Qs(e, t, n = false) {
    const r = t.emitsCache, i = r.get(e);
    if (i !== void 0)
      return i;
    const o = e.emits;
    let s = {}, l = false;
    if (!le(e)) {
      const c = (u) => {
        const d = Qs(u, t, true);
        d && (l = true, Ae(s, d));
      };
      !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
    }
    return !o && !l ? (xe(e) && r.set(e, null), null) : (J(o) ? o.forEach((c) => s[c] = null) : Ae(s, o), xe(e) && r.set(e, s), s);
  }
  function ri(e, t) {
    return !e || !hr(t) ? false : (t = t.slice(2).replace(/Once$/, ""), _e(e, t[0].toLowerCase() + t.slice(1)) || _e(e, ut(t)) || _e(e, t));
  }
  var Be = null;
  var ii = null;
  function cr(e) {
    const t = Be;
    return Be = e, ii = e && e.type.__scopeId || null, t;
  }
  function $a(e) {
    ii = e;
  }
  function Va() {
    ii = null;
  }
  var Ua = (e) => oi;
  function oi(e, t = Be, n) {
    if (!t || e._n)
      return e;
    const r = (...i) => {
      r._d && Bi(-1);
      const o = cr(t);
      let s;
      try {
        s = e(...i);
      } finally {
        cr(o), r._d && Bi(1);
      }
      return s;
    };
    return r._n = true, r._c = true, r._d = true, r;
  }
  function Rr(e) {
    const { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [o], slots: s, attrs: l, emit: c, render: u, renderCache: d, props: h, data: v, setupState: x, ctx: j, inheritAttrs: Y } = e, ue = cr(e);
    let ce, L;
    try {
      if (n.shapeFlag & 4) {
        const E = i || r, N = E;
        ce = at(u.call(N, E, d, h, x, v, j)), L = l;
      } else {
        const E = t;
        ce = at(E.length > 1 ? E(h, { attrs: l, slots: s, emit: c }) : E(h, null)), L = t.props ? l : za(l);
      }
    } catch (E) {
      nr.length = 0, vn(E, e, 1), ce = we(ze);
    }
    let w = ce;
    if (L && Y !== false) {
      const E = Object.keys(L), { shapeFlag: N } = w;
      E.length && N & 7 && (o && E.some(Xi) && (L = Ga(L, o)), w = At(w, L, false, true));
    }
    return n.dirs && (w = At(w, null, false, true), w.dirs = w.dirs ? w.dirs.concat(n.dirs) : n.dirs), n.transition && (w.transition = n.transition), ce = w, cr(ue), ce;
  }
  function Ka(e, t = true) {
    let n;
    for (let r = 0; r < e.length; r++) {
      const i = e[r];
      if (Xt(i)) {
        if (i.type !== ze || i.children === "v-if") {
          if (n)
            return;
          n = i;
        }
      } else
        return;
    }
    return n;
  }
  var za = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || hr(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  };
  var Ga = (e, t) => {
    const n = {};
    for (const r in e)
      (!Xi(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
  function Wa(e, t, n) {
    const { props: r, children: i, component: o } = e, { props: s, children: l, patchFlag: c } = t, u = o.emitsOptions;
    if (t.dirs || t.transition)
      return true;
    if (n && c >= 0) {
      if (c & 1024)
        return true;
      if (c & 16)
        return r ? Ho(r, s, u) : !!s;
      if (c & 8) {
        const d = t.dynamicProps;
        for (let h = 0; h < d.length; h++) {
          const v = d[h];
          if (s[v] !== r[v] && !ri(u, v))
            return true;
        }
      }
    } else
      return (i || l) && (!l || !l.$stable) ? true : r === s ? false : r ? s ? Ho(r, s, u) : true : !!s;
    return false;
  }
  function Ho(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length)
      return true;
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      if (t[o] !== e[o] && !ri(n, o))
        return true;
    }
    return false;
  }
  function uo({ vnode: e, parent: t }, n) {
    for (; t; ) {
      const r = t.subTree;
      if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
        (e = t.vnode).el = n, t = t.parent;
      else
        break;
    }
  }
  var fo = "components";
  var qa = "directives";
  function Ya(e, t) {
    return ho(fo, e, true, t) || e;
  }
  var Zs = Symbol.for("v-ndc");
  function Xa(e) {
    return Pe(e) ? ho(fo, e, false) || e : e || Zs;
  }
  function Ja(e) {
    return ho(qa, e);
  }
  function ho(e, t, n = true, r = false) {
    const i = Be || He;
    if (i) {
      const o = i.type;
      if (e === fo) {
        const l = Ki(o, false);
        if (l && (l === t || l === Ze(t) || l === pr(Ze(t))))
          return o;
      }
      const s = $o(i[e] || o[e], t) || $o(i.appContext[e], t);
      return !s && r ? o : s;
    }
  }
  function $o(e, t) {
    return e && (e[t] || e[Ze(t)] || e[pr(Ze(t))]);
  }
  var el = (e) => e.__isSuspense;
  var Pi = 0;
  var Qa = { name: "Suspense", __isSuspense: true, process(e, t, n, r, i, o, s, l, c, u) {
    if (e == null)
      eu(t, n, r, i, o, s, l, c, u);
    else {
      if (o && o.deps > 0 && !e.suspense.isInFallback) {
        t.suspense = e.suspense, t.suspense.vnode = t, t.el = e.el;
        return;
      }
      tu(e, t, n, r, i, s, l, c, u);
    }
  }, hydrate: nu, create: po, normalize: ru };
  var Za = Qa;
  function ar(e, t) {
    const n = e.props && e.props[t];
    le(n) && n();
  }
  function eu(e, t, n, r, i, o, s, l, c) {
    const { p: u, o: { createElement: d } } = c, h = d("div"), v = e.suspense = po(e, i, r, t, h, n, o, s, l, c);
    u(null, v.pendingBranch = e.ssContent, h, null, r, v, o, s), v.deps > 0 ? (ar(e, "onPending"), ar(e, "onFallback"), u(null, e.ssFallback, t, n, r, null, o, s), Dn(v, e.ssFallback)) : v.resolve(false, true);
  }
  function tu(e, t, n, r, i, o, s, l, { p: c, um: u, o: { createElement: d } }) {
    const h = t.suspense = e.suspense;
    h.vnode = t, t.el = e.el;
    const v = t.ssContent, x = t.ssFallback, { activeBranch: j, pendingBranch: Y, isInFallback: ue, isHydrating: ce } = h;
    if (Y)
      h.pendingBranch = v, wt(v, Y) ? (c(Y, v, h.hiddenContainer, null, i, h, o, s, l), h.deps <= 0 ? h.resolve() : ue && (ce || (c(j, x, n, r, i, null, o, s, l), Dn(h, x)))) : (h.pendingId = Pi++, ce ? (h.isHydrating = false, h.activeBranch = Y) : u(Y, i, h), h.deps = 0, h.effects.length = 0, h.hiddenContainer = d("div"), ue ? (c(null, v, h.hiddenContainer, null, i, h, o, s, l), h.deps <= 0 ? h.resolve() : (c(j, x, n, r, i, null, o, s, l), Dn(h, x))) : j && wt(v, j) ? (c(j, v, n, r, i, h, o, s, l), h.resolve(true)) : (c(null, v, h.hiddenContainer, null, i, h, o, s, l), h.deps <= 0 && h.resolve()));
    else if (j && wt(v, j))
      c(j, v, n, r, i, h, o, s, l), Dn(h, v);
    else if (ar(t, "onPending"), h.pendingBranch = v, v.shapeFlag & 512 ? h.pendingId = v.component.suspenseId : h.pendingId = Pi++, c(null, v, h.hiddenContainer, null, i, h, o, s, l), h.deps <= 0)
      h.resolve();
    else {
      const { timeout: L, pendingId: w } = h;
      L > 0 ? setTimeout(() => {
        h.pendingId === w && h.fallback(x);
      }, L) : L === 0 && h.fallback(x);
    }
  }
  function po(e, t, n, r, i, o, s, l, c, u, d = false) {
    const { p: h, m: v, um: x, n: j, o: { parentNode: Y, remove: ue } } = u;
    let ce;
    const L = iu(e);
    L && t && t.pendingBranch && (ce = t.pendingId, t.deps++);
    const w = e.props ? Fr(e.props.timeout) : void 0, E = o, N = { vnode: e, parent: t, parentComponent: n, namespace: s, container: r, hiddenContainer: i, deps: 0, pendingId: Pi++, timeout: typeof w == "number" ? w : -1, activeBranch: null, pendingBranch: null, isInFallback: !d, isHydrating: d, isUnmounted: false, effects: [], resolve(M = false, z = false) {
      const { vnode: F, activeBranch: q, pendingBranch: V, pendingId: re, effects: B, parentComponent: ae, container: Ce } = N;
      let p = false;
      N.isHydrating ? N.isHydrating = false : M || (p = q && V.transition && V.transition.mode === "out-in", p && (q.transition.afterLeave = () => {
        re === N.pendingId && (v(V, Ce, o === E ? j(q) : o, 0), Br(B));
      }), q && (Y(q.el) !== N.hiddenContainer && (o = j(q)), x(q, ae, N, true)), p || v(V, Ce, o, 0)), Dn(N, V), N.pendingBranch = null, N.isInFallback = false;
      let g = N.parent, b = false;
      for (; g; ) {
        if (g.pendingBranch) {
          g.effects.push(...B), b = true;
          break;
        }
        g = g.parent;
      }
      !b && !p && Br(B), N.effects = [], L && t && t.pendingBranch && ce === t.pendingId && (t.deps--, t.deps === 0 && !z && t.resolve()), ar(F, "onResolve");
    }, fallback(M) {
      if (!N.pendingBranch)
        return;
      const { vnode: z, activeBranch: F, parentComponent: q, container: V, namespace: re } = N;
      ar(z, "onFallback");
      const B = j(F), ae = () => {
        N.isInFallback && (h(null, M, V, B, q, null, re, l, c), Dn(N, M));
      }, Ce = M.transition && M.transition.mode === "out-in";
      Ce && (F.transition.afterLeave = ae), N.isInFallback = true, x(F, q, null, true), Ce || ae();
    }, move(M, z, F) {
      N.activeBranch && v(N.activeBranch, M, z, F), N.container = M;
    }, next() {
      return N.activeBranch && j(N.activeBranch);
    }, registerDep(M, z) {
      const F = !!N.pendingBranch;
      F && N.deps++;
      const q = M.vnode.el;
      M.asyncDep.catch((V) => {
        vn(V, M, 0);
      }).then((V) => {
        if (M.isUnmounted || N.isUnmounted || N.pendingId !== M.suspenseId)
          return;
        M.asyncResolved = true;
        const { vnode: re } = M;
        Vi(M, V, false), q && (re.el = q);
        const B = !q && M.subTree.el;
        z(M, re, Y(q || M.subTree.el), q ? null : j(M.subTree), N, s, c), B && ue(B), uo(M, re.el), F && --N.deps === 0 && N.resolve();
      });
    }, unmount(M, z) {
      N.isUnmounted = true, N.activeBranch && x(N.activeBranch, n, M, z), N.pendingBranch && x(N.pendingBranch, n, M, z);
    } };
    return N;
  }
  function nu(e, t, n, r, i, o, s, l, c) {
    const u = t.suspense = po(t, r, n, e.parentNode, document.createElement("div"), null, i, o, s, l, true), d = c(e, u.pendingBranch = t.ssContent, n, u, o, s);
    return u.deps === 0 && u.resolve(false, true), d;
  }
  function ru(e) {
    const { shapeFlag: t, children: n } = e, r = t & 32;
    e.ssContent = Vo(r ? n.default : n), e.ssFallback = r ? Vo(n.fallback) : we(ze);
  }
  function Vo(e) {
    let t;
    if (le(e)) {
      const n = mn && e._c;
      n && (e._d = false, Fe()), e = e(), n && (e._d = true, t = ot, jl());
    }
    return J(e) && (e = Ka(e)), e = at(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)), e;
  }
  function tl(e, t) {
    t && t.pendingBranch ? J(e) ? t.effects.push(...e) : t.effects.push(e) : Br(e);
  }
  function Dn(e, t) {
    e.activeBranch = t;
    const { vnode: n, parentComponent: r } = e;
    let i = t.el;
    for (; !i && t.component; )
      t = t.component.subTree, i = t.el;
    n.el = i, r && r.subTree === n && (r.vnode.el = i, uo(r, i));
  }
  function iu(e) {
    const t = e.props && e.props.suspensible;
    return t != null && t !== false;
  }
  var nl = Symbol.for("v-scx");
  var rl = () => kn(nl);
  function ou(e, t) {
    return mr(e, null, t);
  }
  function il(e, t) {
    return mr(e, null, { flush: "post" });
  }
  function ol(e, t) {
    return mr(e, null, { flush: "sync" });
  }
  var Or = {};
  function fn(e, t, n) {
    return mr(e, t, n);
  }
  function mr(e, t, { immediate: n, deep: r, flush: i, once: o, onTrack: s, onTrigger: l } = Se) {
    if (t && o) {
      const M = t;
      t = (...z) => {
        M(...z), N();
      };
    }
    const c = He, u = (M) => r === true ? M : ln(M, r === false ? 1 : void 0);
    let d, h = false, v = false;
    if (Ge(e) ? (d = () => e.value, h = ir(e)) : Nn(e) ? (d = () => u(e), h = true) : J(e) ? (v = true, h = e.some((M) => Nn(M) || ir(M)), d = () => e.map((M) => {
      if (Ge(M))
        return M.value;
      if (Nn(M))
        return u(M);
      if (le(M))
        return Dt(M, c, 2);
    })) : le(e) ? t ? d = () => Dt(e, c, 2) : d = () => (x && x(), ft(e, c, 3, [j])) : d = it, t && r) {
      const M = d;
      d = () => ln(M());
    }
    let x, j = (M) => {
      x = w.onStop = () => {
        Dt(M, c, 4), x = w.onStop = void 0;
      };
    }, Y;
    if (br)
      if (j = it, t ? n && ft(t, c, 3, [d(), v ? [] : void 0, j]) : d(), i === "sync") {
        const M = rl();
        Y = M.__watcherHandles || (M.__watcherHandles = []);
      } else
        return it;
    let ue = v ? new Array(e.length).fill(Or) : Or;
    const ce = () => {
      if (!(!w.active || !w.dirty))
        if (t) {
          const M = w.run();
          (r || h || (v ? M.some((z, F) => St(z, ue[F])) : St(M, ue))) && (x && x(), ft(t, c, 3, [M, ue === Or ? void 0 : v && ue[0] === Or ? [] : ue, j]), ue = M);
        } else
          w.run();
    };
    ce.allowRecurse = !!t;
    let L;
    i === "sync" ? L = ce : i === "post" ? L = () => Ke(ce, c && c.suspense) : (ce.pre = true, c && (ce.id = c.uid), L = () => ni(ce));
    const w = new Fn(d, it, L), E = Is(), N = () => {
      w.stop(), E && Ji(E.effects, w);
    };
    return t ? n ? ce() : ue = w.run() : i === "post" ? Ke(w.run.bind(w), c && c.suspense) : w.run(), Y && Y.push(N), N;
  }
  function su(e, t, n) {
    const r = this.proxy, i = Pe(e) ? e.includes(".") ? sl(r, e) : () => r[e] : e.bind(r, r);
    let o;
    le(t) ? o = t : (o = t.handler, n = t);
    const s = yn(this), l = mr(i, o.bind(r), n);
    return s(), l;
  }
  function sl(e, t) {
    const n = t.split(".");
    return () => {
      let r = e;
      for (let i = 0; i < n.length && r; i++)
        r = r[n[i]];
      return r;
    };
  }
  function ln(e, t = 1 / 0, n) {
    if (t <= 0 || !xe(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
      return e;
    if (n.add(e), t--, Ge(e))
      ln(e.value, t, n);
    else if (J(e))
      for (let r = 0; r < e.length; r++)
        ln(e[r], t, n);
    else if (_n(e) || Tn(e))
      e.forEach((r) => {
        ln(r, t, n);
      });
    else if (ws(e))
      for (const r in e)
        ln(e[r], t, n);
    return e;
  }
  function ll(e, t) {
    if (Be === null)
      return e;
    const n = fi(Be) || Be.proxy, r = e.dirs || (e.dirs = []);
    for (let i = 0; i < t.length; i++) {
      let [o, s, l, c = Se] = t[i];
      o && (le(o) && (o = { mounted: o, updated: o }), o.deep && ln(s), r.push({ dir: o, instance: n, value: s, oldValue: void 0, arg: l, modifiers: c }));
    }
    return e;
  }
  function Ot(e, t, n, r) {
    const i = e.dirs, o = t && t.dirs;
    for (let s = 0; s < i.length; s++) {
      const l = i[s];
      o && (l.oldValue = o[s].value);
      let c = l.dir[r];
      c && (Zt(), ft(c, n, 8, [e.el, l, e, t]), en());
    }
  }
  var zt = Symbol("_leaveCb");
  var Ir = Symbol("_enterCb");
  function go() {
    const e = { isMounted: false, isLeaving: false, isUnmounting: false, leavingVNodes: /* @__PURE__ */ new Map() };
    return Kn(() => {
      e.isMounted = true;
    }), ai(() => {
      e.isUnmounting = true;
    }), e;
  }
  var gt = [Function, Array];
  var mo = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: gt, onEnter: gt, onAfterEnter: gt, onEnterCancelled: gt, onBeforeLeave: gt, onLeave: gt, onAfterLeave: gt, onLeaveCancelled: gt, onBeforeAppear: gt, onAppear: gt, onAfterAppear: gt, onAppearCancelled: gt };
  var lu = { name: "BaseTransition", props: mo, setup(e, { slots: t }) {
    const n = Ft(), r = go();
    return () => {
      const i = t.default && si(t.default(), true);
      if (!i || !i.length)
        return;
      let o = i[0];
      if (i.length > 1) {
        for (const v of i)
          if (v.type !== ze) {
            o = v;
            break;
          }
      }
      const s = ye(e), { mode: l } = s;
      if (r.isLeaving)
        return yi(o);
      const c = Uo(o);
      if (!c)
        return yi(o);
      const u = Bn(c, s, r, n);
      pn(c, u);
      const d = n.subTree, h = d && Uo(d);
      if (h && h.type !== ze && !wt(c, h)) {
        const v = Bn(h, s, r, n);
        if (pn(h, v), l === "out-in" && c.type !== ze)
          return r.isLeaving = true, v.afterLeave = () => {
            r.isLeaving = false, n.update.active !== false && (n.effect.dirty = true, n.update());
          }, yi(o);
        l === "in-out" && c.type !== ze && (v.delayLeave = (x, j, Y) => {
          const ue = al(r, h);
          ue[String(h.key)] = h, x[zt] = () => {
            j(), x[zt] = void 0, delete u.delayedLeave;
          }, u.delayedLeave = Y;
        });
      }
      return o;
    };
  } };
  var cl = lu;
  function al(e, t) {
    const { leavingVNodes: n } = e;
    let r = n.get(t.type);
    return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
  }
  function Bn(e, t, n, r) {
    const { appear: i, mode: o, persisted: s = false, onBeforeEnter: l, onEnter: c, onAfterEnter: u, onEnterCancelled: d, onBeforeLeave: h, onLeave: v, onAfterLeave: x, onLeaveCancelled: j, onBeforeAppear: Y, onAppear: ue, onAfterAppear: ce, onAppearCancelled: L } = t, w = String(e.key), E = al(n, e), N = (F, q) => {
      F && ft(F, r, 9, q);
    }, M = (F, q) => {
      const V = q[1];
      N(F, q), J(F) ? F.every((re) => re.length <= 1) && V() : F.length <= 1 && V();
    }, z = { mode: o, persisted: s, beforeEnter(F) {
      let q = l;
      if (!n.isMounted)
        if (i)
          q = Y || l;
        else
          return;
      F[zt] && F[zt](true);
      const V = E[w];
      V && wt(e, V) && V.el[zt] && V.el[zt](), N(q, [F]);
    }, enter(F) {
      let q = c, V = u, re = d;
      if (!n.isMounted)
        if (i)
          q = ue || c, V = ce || u, re = L || d;
        else
          return;
      let B = false;
      const ae = F[Ir] = (Ce) => {
        B || (B = true, Ce ? N(re, [F]) : N(V, [F]), z.delayedLeave && z.delayedLeave(), F[Ir] = void 0);
      };
      q ? M(q, [F, ae]) : ae();
    }, leave(F, q) {
      const V = String(e.key);
      if (F[Ir] && F[Ir](true), n.isUnmounting)
        return q();
      N(h, [F]);
      let re = false;
      const B = F[zt] = (ae) => {
        re || (re = true, q(), ae ? N(j, [F]) : N(x, [F]), F[zt] = void 0, E[V] === e && delete E[V]);
      };
      E[V] = e, v ? M(v, [F, B]) : B();
    }, clone(F) {
      return Bn(F, t, n, r);
    } };
    return z;
  }
  function yi(e) {
    if (yr(e))
      return e = At(e), e.children = null, e;
  }
  function Uo(e) {
    if (!yr(e))
      return e;
    const { shapeFlag: t, children: n } = e;
    if (n) {
      if (t & 16)
        return n[0];
      if (t & 32 && le(n.default))
        return n.default();
    }
  }
  function pn(e, t) {
    e.shapeFlag & 6 && e.component ? pn(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
  }
  function si(e, t = false, n) {
    let r = [], i = 0;
    for (let o = 0; o < e.length; o++) {
      let s = e[o];
      const l = n == null ? s.key : String(n) + String(s.key != null ? s.key : o);
      s.type === ke ? (s.patchFlag & 128 && i++, r = r.concat(si(s.children, t, l))) : (t || s.type !== ze) && r.push(l != null ? At(s, { key: l }) : s);
    }
    if (i > 1)
      for (let o = 0; o < r.length; o++)
        r[o].patchFlag = -2;
    return r;
  }
  function yo(e, t) {
    return le(e) ? Ae({ name: e.name }, t, { setup: e }) : e;
  }
  var dn = (e) => !!e.type.__asyncLoader;
  function cu(e) {
    le(e) && (e = { loader: e });
    const { loader: t, loadingComponent: n, errorComponent: r, delay: i = 200, timeout: o, suspensible: s = true, onError: l } = e;
    let c = null, u, d = 0;
    const h = () => (d++, c = null, v()), v = () => {
      let x;
      return c || (x = c = t().catch((j) => {
        if (j = j instanceof Error ? j : new Error(String(j)), l)
          return new Promise((Y, ue) => {
            l(j, () => Y(h()), () => ue(j), d + 1);
          });
        throw j;
      }).then((j) => x !== c && c ? c : (j && (j.__esModule || j[Symbol.toStringTag] === "Module") && (j = j.default), u = j, j)));
    };
    return yo({ name: "AsyncComponentWrapper", __asyncLoader: v, get __asyncResolved() {
      return u;
    }, setup() {
      const x = He;
      if (u)
        return () => _i(u, x);
      const j = (L) => {
        c = null, vn(L, x, 13, !r);
      };
      if (s && x.suspense || br)
        return v().then((L) => () => _i(L, x)).catch((L) => (j(L), () => r ? we(r, { error: L }) : null));
      const Y = un(false), ue = un(), ce = un(!!i);
      return i && setTimeout(() => {
        ce.value = false;
      }, i), o != null && setTimeout(() => {
        if (!Y.value && !ue.value) {
          const L = new Error(`Async component timed out after ${o}ms.`);
          j(L), ue.value = L;
        }
      }, o), v().then(() => {
        Y.value = true, x.parent && yr(x.parent.vnode) && (x.parent.effect.dirty = true, ni(x.parent.update));
      }).catch((L) => {
        j(L), ue.value = L;
      }), () => {
        if (Y.value && u)
          return _i(u, x);
        if (ue.value && r)
          return we(r, { error: ue.value });
        if (n && !ce.value)
          return we(n);
      };
    } });
  }
  function _i(e, t) {
    const { ref: n, props: r, children: i, ce: o } = t.vnode, s = we(e, r, i);
    return s.ref = n, s.ce = o, delete t.vnode.ce, s;
  }
  var yr = (e) => e.type.__isKeepAlive;
  var au = { name: "KeepAlive", __isKeepAlive: true, props: { include: [String, RegExp, Array], exclude: [String, RegExp, Array], max: [String, Number] }, setup(e, { slots: t }) {
    const n = Ft(), r = n.ctx;
    if (!r.renderer)
      return () => {
        const L = t.default && t.default();
        return L && L.length === 1 ? L[0] : L;
      };
    const i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set();
    let s = null;
    const l = n.suspense, { renderer: { p: c, m: u, um: d, o: { createElement: h } } } = r, v = h("div");
    r.activate = (L, w, E, N, M) => {
      const z = L.component;
      u(L, w, E, 0, l), c(z.vnode, L, w, E, z, l, N, L.slotScopeIds, M), Ke(() => {
        z.isDeactivated = false, z.a && In(z.a);
        const F = L.props && L.props.onVnodeMounted;
        F && rt(F, z.parent, L);
      }, l);
    }, r.deactivate = (L) => {
      const w = L.component;
      u(L, v, null, 1, l), Ke(() => {
        w.da && In(w.da);
        const E = L.props && L.props.onVnodeUnmounted;
        E && rt(E, w.parent, L), w.isDeactivated = true;
      }, l);
    };
    function x(L) {
      vi(L), d(L, n, l, true);
    }
    function j(L) {
      i.forEach((w, E) => {
        const N = Ki(w.type);
        N && (!L || !L(N)) && Y(E);
      });
    }
    function Y(L) {
      const w = i.get(L);
      !s || !wt(w, s) ? x(w) : s && vi(s), i.delete(L), o.delete(L);
    }
    fn(() => [e.include, e.exclude], ([L, w]) => {
      L && j((E) => Jn(L, E)), w && j((E) => !Jn(w, E));
    }, { flush: "post", deep: true });
    let ue = null;
    const ce = () => {
      ue != null && i.set(ue, bi(n.subTree));
    };
    return Kn(ce), ci(ce), ai(() => {
      i.forEach((L) => {
        const { subTree: w, suspense: E } = n, N = bi(w);
        if (L.type === N.type && L.key === N.key) {
          vi(N);
          const M = N.component.da;
          M && Ke(M, E);
          return;
        }
        x(L);
      });
    }), () => {
      if (ue = null, !t.default)
        return null;
      const L = t.default(), w = L[0];
      if (L.length > 1)
        return s = null, L;
      if (!Xt(w) || !(w.shapeFlag & 4) && !(w.shapeFlag & 128))
        return s = null, w;
      let E = bi(w);
      const N = E.type, M = Ki(dn(E) ? E.type.__asyncResolved || {} : N), { include: z, exclude: F, max: q } = e;
      if (z && (!M || !Jn(z, M)) || F && M && Jn(F, M))
        return s = E, w;
      const V = E.key == null ? N : E.key, re = i.get(V);
      return E.el && (E = At(E), w.shapeFlag & 128 && (w.ssContent = E)), ue = V, re ? (E.el = re.el, E.component = re.component, E.transition && pn(E, E.transition), E.shapeFlag |= 512, o.delete(V), o.add(V)) : (o.add(V), q && o.size > parseInt(q, 10) && Y(o.values().next().value)), E.shapeFlag |= 256, s = E, el(w.type) ? w : E;
    };
  } };
  var uu = au;
  function Jn(e, t) {
    return J(e) ? e.some((n) => Jn(n, t)) : Pe(e) ? e.split(",").includes(t) : kc(e) ? e.test(t) : false;
  }
  function ul(e, t) {
    dl(e, "a", t);
  }
  function fl(e, t) {
    dl(e, "da", t);
  }
  function dl(e, t, n = He) {
    const r = e.__wdc || (e.__wdc = () => {
      let i = n;
      for (; i; ) {
        if (i.isDeactivated)
          return;
        i = i.parent;
      }
      return e();
    });
    if (li(t, r, n), n) {
      let i = n.parent;
      for (; i && i.parent; )
        yr(i.parent.vnode) && fu(r, t, n, i), i = i.parent;
    }
  }
  function fu(e, t, n, r) {
    const i = li(t, e, r, true);
    ui(() => {
      Ji(r[t], i);
    }, n);
  }
  function vi(e) {
    e.shapeFlag &= -257, e.shapeFlag &= -513;
  }
  function bi(e) {
    return e.shapeFlag & 128 ? e.ssContent : e;
  }
  function li(e, t, n = He, r = false) {
    if (n) {
      const i = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...s) => {
        if (n.isUnmounted)
          return;
        Zt();
        const l = yn(n), c = ft(t, n, e, s);
        return l(), en(), c;
      });
      return r ? i.unshift(o) : i.push(o), o;
    }
  }
  var kt = (e) => (t, n = He) => (!br || e === "sp") && li(e, (...r) => t(...r), n);
  var hl = kt("bm");
  var Kn = kt("m");
  var pl = kt("bu");
  var ci = kt("u");
  var ai = kt("bum");
  var ui = kt("um");
  var gl = kt("sp");
  var ml = kt("rtg");
  var yl = kt("rtc");
  function _l(e, t = He) {
    li("ec", e, t);
  }
  function _r(e, t, n, r) {
    let i;
    const o = n && n[r];
    if (J(e) || Pe(e)) {
      i = new Array(e.length);
      for (let s = 0, l = e.length; s < l; s++)
        i[s] = t(e[s], s, void 0, o && o[s]);
    } else if (typeof e == "number") {
      i = new Array(e);
      for (let s = 0; s < e; s++)
        i[s] = t(s + 1, s, void 0, o && o[s]);
    } else if (xe(e))
      if (e[Symbol.iterator])
        i = Array.from(e, (s, l) => t(s, l, void 0, o && o[l]));
      else {
        const s = Object.keys(e);
        i = new Array(s.length);
        for (let l = 0, c = s.length; l < c; l++) {
          const u = s[l];
          i[l] = t(e[u], u, l, o && o[l]);
        }
      }
    else
      i = [];
    return n && (n[r] = i), i;
  }
  function du(e, t) {
    for (let n = 0; n < t.length; n++) {
      const r = t[n];
      if (J(r))
        for (let i = 0; i < r.length; i++)
          e[r[i].name] = r[i].fn;
      else
        r && (e[r.name] = r.key ? (...i) => {
          const o = r.fn(...i);
          return o && (o.key = r.key), o;
        } : r.fn);
    }
    return e;
  }
  function hu(e, t, n = {}, r, i) {
    if (Be.isCE || Be.parent && dn(Be.parent) && Be.parent.isCE)
      return t !== "default" && (n.name = t), we("slot", n, r && r());
    let o = e[t];
    o && o._c && (o._d = false), Fe();
    const s = o && vl(o(n)), l = vr(ke, { key: n.key || s && s.key || `_${t}` }, s || (r ? r() : []), s && e._ === 1 ? 64 : -2);
    return !i && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), o && o._c && (o._d = true), l;
  }
  function vl(e) {
    return e.some((t) => Xt(t) ? !(t.type === ze || t.type === ke && !vl(t.children)) : true) ? e : null;
  }
  function pu(e, t) {
    const n = {};
    for (const r in e)
      n[t && /[A-Z]/.test(r) ? `on:${r}` : Zn(r)] = e[r];
    return n;
  }
  var Ri = (e) => e ? Kl(e) ? fi(e) || e.proxy : Ri(e.parent) : null;
  var er = Ae(/* @__PURE__ */ Object.create(null), { $: (e) => e, $el: (e) => e.vnode.el, $data: (e) => e.data, $props: (e) => e.props, $attrs: (e) => e.attrs, $slots: (e) => e.slots, $refs: (e) => e.refs, $parent: (e) => Ri(e.parent), $root: (e) => Ri(e.root), $emit: (e) => e.emit, $options: (e) => _o(e), $forceUpdate: (e) => e.f || (e.f = () => {
    e.effect.dirty = true, ni(e.update);
  }), $nextTick: (e) => e.n || (e.n = ti.bind(e.proxy)), $watch: (e) => su.bind(e) });
  var wi = (e, t) => e !== Se && !e.__isScriptSetup && _e(e, t);
  var Di = { get({ _: e }, t) {
    if (t === "__v_skip")
      return true;
    const { ctx: n, setupState: r, data: i, props: o, accessCache: s, type: l, appContext: c } = e;
    let u;
    if (t[0] !== "$") {
      const x = s[t];
      if (x !== void 0)
        switch (x) {
          case 1:
            return r[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (wi(r, t))
          return s[t] = 1, r[t];
        if (i !== Se && _e(i, t))
          return s[t] = 2, i[t];
        if ((u = e.propsOptions[0]) && _e(u, t))
          return s[t] = 3, o[t];
        if (n !== Se && _e(n, t))
          return s[t] = 4, n[t];
        Li && (s[t] = 0);
      }
    }
    const d = er[t];
    let h, v;
    if (d)
      return t === "$attrs" && st(e.attrs, "get", ""), d(e);
    if ((h = l.__cssModules) && (h = h[t]))
      return h;
    if (n !== Se && _e(n, t))
      return s[t] = 4, n[t];
    if (v = c.config.globalProperties, _e(v, t))
      return v[t];
  }, set({ _: e }, t, n) {
    const { data: r, setupState: i, ctx: o } = e;
    return wi(i, t) ? (i[t] = n, true) : r !== Se && _e(r, t) ? (r[t] = n, true) : _e(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (o[t] = n, true);
  }, has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, propsOptions: o } }, s) {
    let l;
    return !!n[s] || e !== Se && _e(e, s) || wi(t, s) || (l = o[0]) && _e(l, s) || _e(r, s) || _e(er, s) || _e(i.config.globalProperties, s);
  }, defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : _e(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  } };
  var gu = Ae({}, Di, { get(e, t) {
    if (t !== Symbol.unscopables)
      return Di.get(e, t, e);
  }, has(e, t) {
    return t[0] !== "_" && !$c(t);
  } });
  function mu() {
    return null;
  }
  function yu() {
    return null;
  }
  function _u(e) {
  }
  function vu(e) {
  }
  function bu() {
    return null;
  }
  function wu() {
  }
  function Su(e, t) {
    return null;
  }
  function Eu() {
    return bl().slots;
  }
  function xu() {
    return bl().attrs;
  }
  function bl() {
    const e = Ft();
    return e.setupContext || (e.setupContext = Wl(e));
  }
  function ur(e) {
    return J(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
  }
  function Cu(e, t) {
    const n = ur(e);
    for (const r in t) {
      if (r.startsWith("__skip"))
        continue;
      let i = n[r];
      i ? J(i) || le(i) ? i = n[r] = { type: i, default: t[r] } : i.default = t[r] : i === null && (i = n[r] = { default: t[r] }), i && t[`__skip_${r}`] && (i.skipFactory = true);
    }
    return n;
  }
  function Tu(e, t) {
    return !e || !t ? e || t : J(e) && J(t) ? e.concat(t) : Ae({}, ur(e), ur(t));
  }
  function Ou(e, t) {
    const n = {};
    for (const r in e)
      t.includes(r) || Object.defineProperty(n, r, { enumerable: true, get: () => e[r] });
    return n;
  }
  function Iu(e) {
    const t = Ft();
    let n = e();
    return $i(), Qi(n) && (n = n.catch((r) => {
      throw yn(t), r;
    })), [n, () => yn(t)];
  }
  var Li = true;
  function Au(e) {
    const t = _o(e), n = e.proxy, r = e.ctx;
    Li = false, t.beforeCreate && Ko(t.beforeCreate, e, "bc");
    const { data: i, computed: o, methods: s, watch: l, provide: c, inject: u, created: d, beforeMount: h, mounted: v, beforeUpdate: x, updated: j, activated: Y, deactivated: ue, beforeDestroy: ce, beforeUnmount: L, destroyed: w, unmounted: E, render: N, renderTracked: M, renderTriggered: z, errorCaptured: F, serverPrefetch: q, expose: V, inheritAttrs: re, components: B, directives: ae, filters: Ce } = t;
    if (u && Nu(u, r, null), s)
      for (const b in s) {
        const S = s[b];
        le(S) && (r[b] = S.bind(n));
      }
    if (i) {
      const b = i.call(n, n);
      xe(b) && (e.data = gr(b));
    }
    if (Li = true, o)
      for (const b in o) {
        const S = o[b], Z = le(S) ? S.bind(n, n) : le(S.get) ? S.get.bind(n, n) : it, oe = !le(S) && le(S.set) ? S.set.bind(n) : it, me = fr({ get: Z, set: oe });
        Object.defineProperty(r, b, { enumerable: true, configurable: true, get: () => me.value, set: (X) => me.value = X });
      }
    if (l)
      for (const b in l)
        wl(l[b], r, n, b);
    if (c) {
      const b = le(c) ? c.call(n) : c;
      Reflect.ownKeys(b).forEach((S) => {
        El(S, b[S]);
      });
    }
    d && Ko(d, e, "c");
    function g(b, S) {
      J(S) ? S.forEach((Z) => b(Z.bind(n))) : S && b(S.bind(n));
    }
    if (g(hl, h), g(Kn, v), g(pl, x), g(ci, j), g(ul, Y), g(fl, ue), g(_l, F), g(yl, M), g(ml, z), g(ai, L), g(ui, E), g(gl, q), J(V))
      if (V.length) {
        const b = e.exposed || (e.exposed = {});
        V.forEach((S) => {
          Object.defineProperty(b, S, { get: () => n[S], set: (Z) => n[S] = Z });
        });
      } else
        e.exposed || (e.exposed = {});
    N && e.render === it && (e.render = N), re != null && (e.inheritAttrs = re), B && (e.components = B), ae && (e.directives = ae);
  }
  function Nu(e, t, n = it) {
    J(e) && (e = ki(e));
    for (const r in e) {
      const i = e[r];
      let o;
      xe(i) ? "default" in i ? o = kn(i.from || r, i.default, true) : o = kn(i.from || r) : o = kn(i), Ge(o) ? Object.defineProperty(t, r, { enumerable: true, configurable: true, get: () => o.value, set: (s) => o.value = s }) : t[r] = o;
    }
  }
  function Ko(e, t, n) {
    ft(J(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
  }
  function wl(e, t, n, r) {
    const i = r.includes(".") ? sl(n, r) : () => n[r];
    if (Pe(e)) {
      const o = t[e];
      le(o) && fn(i, o);
    } else if (le(e))
      fn(i, e.bind(n));
    else if (xe(e))
      if (J(e))
        e.forEach((o) => wl(o, t, n, r));
      else {
        const o = le(e.handler) ? e.handler.bind(n) : t[e.handler];
        le(o) && fn(i, o, e);
      }
  }
  function _o(e) {
    const t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: o, config: { optionMergeStrategies: s } } = e.appContext, l = o.get(t);
    let c;
    return l ? c = l : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((u) => $r(c, u, s, true)), $r(c, t, s)), xe(t) && o.set(t, c), c;
  }
  function $r(e, t, n, r = false) {
    const { mixins: i, extends: o } = t;
    o && $r(e, o, n, true), i && i.forEach((s) => $r(e, s, n, true));
    for (const s in t)
      if (!(r && s === "expose")) {
        const l = Mu[s] || n && n[s];
        e[s] = l ? l(e[s], t[s]) : t[s];
      }
    return e;
  }
  var Mu = { data: zo, props: Go, emits: Go, methods: Qn, computed: Qn, beforeCreate: Qe, created: Qe, beforeMount: Qe, mounted: Qe, beforeUpdate: Qe, updated: Qe, beforeDestroy: Qe, beforeUnmount: Qe, destroyed: Qe, unmounted: Qe, activated: Qe, deactivated: Qe, errorCaptured: Qe, serverPrefetch: Qe, components: Qn, directives: Qn, watch: Ru, provide: zo, inject: Pu };
  function zo(e, t) {
    return t ? e ? function() {
      return Ae(le(e) ? e.call(this, this) : e, le(t) ? t.call(this, this) : t);
    } : t : e;
  }
  function Pu(e, t) {
    return Qn(ki(e), ki(t));
  }
  function ki(e) {
    if (J(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++)
        t[e[n]] = e[n];
      return t;
    }
    return e;
  }
  function Qe(e, t) {
    return e ? [...new Set([].concat(e, t))] : t;
  }
  function Qn(e, t) {
    return e ? Ae(/* @__PURE__ */ Object.create(null), e, t) : t;
  }
  function Go(e, t) {
    return e ? J(e) && J(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Ae(/* @__PURE__ */ Object.create(null), ur(e), ur(t != null ? t : {})) : t;
  }
  function Ru(e, t) {
    if (!e)
      return t;
    if (!t)
      return e;
    const n = Ae(/* @__PURE__ */ Object.create(null), e);
    for (const r in t)
      n[r] = Qe(e[r], t[r]);
    return n;
  }
  function Sl() {
    return { app: null, config: { isNativeTag: Dc, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
  }
  var Du = 0;
  function Lu(e, t) {
    return function(r, i = null) {
      le(r) || (r = Ae({}, r)), i != null && !xe(i) && (i = null);
      const o = Sl(), s = /* @__PURE__ */ new WeakSet();
      let l = false;
      const c = o.app = { _uid: Du++, _component: r, _props: i, _container: null, _context: o, _instance: null, version: Xl, get config() {
        return o.config;
      }, set config(u) {
      }, use(u, ...d) {
        return s.has(u) || (u && le(u.install) ? (s.add(u), u.install(c, ...d)) : le(u) && (s.add(u), u(c, ...d))), c;
      }, mixin(u) {
        return o.mixins.includes(u) || o.mixins.push(u), c;
      }, component(u, d) {
        return d ? (o.components[u] = d, c) : o.components[u];
      }, directive(u, d) {
        return d ? (o.directives[u] = d, c) : o.directives[u];
      }, mount(u, d, h) {
        if (!l) {
          const v = we(r, i);
          return v.appContext = o, h === true ? h = "svg" : h === false && (h = void 0), d && t ? t(v, u) : e(v, u, h), l = true, c._container = u, u.__vue_app__ = c, fi(v.component) || v.component.proxy;
        }
      }, unmount() {
        l && (e(null, c._container), delete c._container.__vue_app__);
      }, provide(u, d) {
        return o.provides[u] = d, c;
      }, runWithContext(u) {
        const d = Ln;
        Ln = c;
        try {
          return u();
        } finally {
          Ln = d;
        }
      } };
      return c;
    };
  }
  var Ln = null;
  function El(e, t) {
    if (He) {
      let n = He.provides;
      const r = He.parent && He.parent.provides;
      r === n && (n = He.provides = Object.create(r)), n[e] = t;
    }
  }
  function kn(e, t, n = false) {
    const r = He || Be;
    if (r || Ln) {
      const i = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : Ln._context.provides;
      if (i && e in i)
        return i[e];
      if (arguments.length > 1)
        return n && le(t) ? t.call(r && r.proxy) : t;
    }
  }
  function ku() {
    return !!(He || Be || Ln);
  }
  var xl = {};
  var Cl = () => Object.create(xl);
  var Tl = (e) => Object.getPrototypeOf(e) === xl;
  function Fu(e, t, n, r = false) {
    const i = {}, o = Cl();
    e.propsDefaults = /* @__PURE__ */ Object.create(null), Ol(e, t, i, o);
    for (const s in e.propsOptions[0])
      s in i || (i[s] = void 0);
    n ? e.props = r ? i : Vs(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
  }
  function ju(e, t, n, r) {
    const { props: i, attrs: o, vnode: { patchFlag: s } } = e, l = ye(i), [c] = e.propsOptions;
    let u = false;
    if ((r || s > 0) && !(s & 16)) {
      if (s & 8) {
        const d = e.vnode.dynamicProps;
        for (let h = 0; h < d.length; h++) {
          let v = d[h];
          if (ri(e.emitsOptions, v))
            continue;
          const x = t[v];
          if (c)
            if (_e(o, v))
              x !== o[v] && (o[v] = x, u = true);
            else {
              const j = Ze(v);
              i[j] = Fi(c, l, j, x, e, false);
            }
          else
            x !== o[v] && (o[v] = x, u = true);
        }
      }
    } else {
      Ol(e, t, i, o) && (u = true);
      let d;
      for (const h in l)
        (!t || !_e(t, h) && ((d = ut(h)) === h || !_e(t, d))) && (c ? n && (n[h] !== void 0 || n[d] !== void 0) && (i[h] = Fi(c, l, h, void 0, e, true)) : delete i[h]);
      if (o !== l)
        for (const h in o)
          (!t || !_e(t, h)) && (delete o[h], u = true);
    }
    u && Rt(e.attrs, "set", "");
  }
  function Ol(e, t, n, r) {
    const [i, o] = e.propsOptions;
    let s = false, l;
    if (t)
      for (let c in t) {
        if (On(c))
          continue;
        const u = t[c];
        let d;
        i && _e(i, d = Ze(c)) ? !o || !o.includes(d) ? n[d] = u : (l || (l = {}))[d] = u : ri(e.emitsOptions, c) || (!(c in r) || u !== r[c]) && (r[c] = u, s = true);
      }
    if (o) {
      const c = ye(n), u = l || Se;
      for (let d = 0; d < o.length; d++) {
        const h = o[d];
        n[h] = Fi(i, c, h, u[h], e, !_e(u, h));
      }
    }
    return s;
  }
  function Fi(e, t, n, r, i, o) {
    const s = e[n];
    if (s != null) {
      const l = _e(s, "default");
      if (l && r === void 0) {
        const c = s.default;
        if (s.type !== Function && !s.skipFactory && le(c)) {
          const { propsDefaults: u } = i;
          if (n in u)
            r = u[n];
          else {
            const d = yn(i);
            r = u[n] = c.call(null, t), d();
          }
        } else
          r = c;
      }
      s[0] && (o && !l ? r = false : s[1] && (r === "" || r === ut(n)) && (r = true));
    }
    return r;
  }
  function Il(e, t, n = false) {
    const r = t.propsCache, i = r.get(e);
    if (i)
      return i;
    const o = e.props, s = {}, l = [];
    let c = false;
    if (!le(e)) {
      const d = (h) => {
        c = true;
        const [v, x] = Il(h, t, true);
        Ae(s, v), x && l.push(...x);
      };
      !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
    }
    if (!o && !c)
      return xe(e) && r.set(e, Cn), Cn;
    if (J(o))
      for (let d = 0; d < o.length; d++) {
        const h = Ze(o[d]);
        Wo(h) && (s[h] = Se);
      }
    else if (o)
      for (const d in o) {
        const h = Ze(d);
        if (Wo(h)) {
          const v = o[d], x = s[h] = J(v) || le(v) ? { type: v } : Ae({}, v);
          if (x) {
            const j = Xo(Boolean, x.type), Y = Xo(String, x.type);
            x[0] = j > -1, x[1] = Y < 0 || j < Y, (j > -1 || _e(x, "default")) && l.push(h);
          }
        }
      }
    const u = [s, l];
    return xe(e) && r.set(e, u), u;
  }
  function Wo(e) {
    return e[0] !== "$" && !On(e);
  }
  function qo(e) {
    return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
  }
  function Yo(e, t) {
    return qo(e) === qo(t);
  }
  function Xo(e, t) {
    return J(t) ? t.findIndex((n) => Yo(n, e)) : le(t) && Yo(t, e) ? 0 : -1;
  }
  var Al = (e) => e[0] === "_" || e === "$stable";
  var vo = (e) => J(e) ? e.map(at) : [at(e)];
  var Bu = (e, t, n) => {
    if (t._n)
      return t;
    const r = oi((...i) => vo(t(...i)), n);
    return r._c = false, r;
  };
  var Nl = (e, t, n) => {
    const r = e._ctx;
    for (const i in e) {
      if (Al(i))
        continue;
      const o = e[i];
      if (le(o))
        t[i] = Bu(i, o, r);
      else if (o != null) {
        const s = vo(o);
        t[i] = () => s;
      }
    }
  };
  var Ml = (e, t) => {
    const n = vo(t);
    e.slots.default = () => n;
  };
  var Hu = (e, t) => {
    const n = e.slots = Cl();
    if (e.vnode.shapeFlag & 32) {
      const r = t._;
      r ? (Ae(n, t), Ss(n, "_", r, true)) : Nl(t, n);
    } else
      t && Ml(e, t);
  };
  var $u = (e, t, n) => {
    const { vnode: r, slots: i } = e;
    let o = true, s = Se;
    if (r.shapeFlag & 32) {
      const l = t._;
      l ? n && l === 1 ? o = false : (Ae(i, t), !n && l === 1 && delete i._) : (o = !t.$stable, Nl(t, i)), s = t;
    } else
      t && (Ml(e, t), s = { default: 1 });
    if (o)
      for (const l in i)
        !Al(l) && s[l] == null && delete i[l];
  };
  function Vr(e, t, n, r, i = false) {
    if (J(e)) {
      e.forEach((v, x) => Vr(v, t && (J(t) ? t[x] : t), n, r, i));
      return;
    }
    if (dn(r) && !i)
      return;
    const o = r.shapeFlag & 4 ? fi(r.component) || r.component.proxy : r.el, s = i ? null : o, { i: l, r: c } = e, u = t && t.r, d = l.refs === Se ? l.refs = {} : l.refs, h = l.setupState;
    if (u != null && u !== c && (Pe(u) ? (d[u] = null, _e(h, u) && (h[u] = null)) : Ge(u) && (u.value = null)), le(c))
      Dt(c, l, 12, [s, d]);
    else {
      const v = Pe(c), x = Ge(c);
      if (v || x) {
        const j = () => {
          if (e.f) {
            const Y = v ? _e(h, c) ? h[c] : d[c] : c.value;
            i ? J(Y) && Ji(Y, o) : J(Y) ? Y.includes(o) || Y.push(o) : v ? (d[c] = [o], _e(h, c) && (h[c] = d[c])) : (c.value = [o], e.k && (d[e.k] = c.value));
          } else
            v ? (d[c] = s, _e(h, c) && (h[c] = s)) : x && (c.value = s, e.k && (d[e.k] = s));
        };
        s ? (j.id = -1, Ke(j, n)) : j();
      }
    }
  }
  var $t = false;
  var Vu = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject";
  var Uu = (e) => e.namespaceURI.includes("MathML");
  var Ar = (e) => {
    if (Vu(e))
      return "svg";
    if (Uu(e))
      return "mathml";
  };
  var Nr = (e) => e.nodeType === 8;
  function Ku(e) {
    const { mt: t, p: n, o: { patchProp: r, createText: i, nextSibling: o, parentNode: s, remove: l, insert: c, createComment: u } } = e, d = (w, E) => {
      if (!E.hasChildNodes()) {
        n(null, w, E), Hr(), E._vnode = w;
        return;
      }
      $t = false, h(E.firstChild, w, null, null, null), Hr(), E._vnode = w, $t && console.error("Hydration completed but contains mismatches.");
    }, h = (w, E, N, M, z, F = false) => {
      F = F || !!E.dynamicChildren;
      const q = Nr(w) && w.data === "[", V = () => Y(w, E, N, M, z, q), { type: re, ref: B, shapeFlag: ae, patchFlag: Ce } = E;
      let p = w.nodeType;
      E.el = w, Ce === -2 && (F = false, E.dynamicChildren = null);
      let g = null;
      switch (re) {
        case gn:
          p !== 3 ? E.children === "" ? (c(E.el = i(""), s(w), w), g = w) : g = V() : (w.data !== E.children && ($t = true, w.data = E.children), g = o(w));
          break;
        case ze:
          L(w) ? (g = o(w), ce(E.el = w.content.firstChild, w, N)) : p !== 8 || q ? g = V() : g = o(w);
          break;
        case hn:
          if (q && (w = o(w), p = w.nodeType), p === 1 || p === 3) {
            g = w;
            const b = !E.children.length;
            for (let S = 0; S < E.staticCount; S++)
              b && (E.children += g.nodeType === 1 ? g.outerHTML : g.data), S === E.staticCount - 1 && (E.anchor = g), g = o(g);
            return q ? o(g) : g;
          } else
            V();
          break;
        case ke:
          q ? g = j(w, E, N, M, z, F) : g = V();
          break;
        default:
          if (ae & 1)
            (p !== 1 || E.type.toLowerCase() !== w.tagName.toLowerCase()) && !L(w) ? g = V() : g = v(w, E, N, M, z, F);
          else if (ae & 6) {
            E.slotScopeIds = z;
            const b = s(w);
            if (q ? g = ue(w) : Nr(w) && w.data === "teleport start" ? g = ue(w, w.data, "teleport end") : g = o(w), t(E, b, null, N, M, Ar(b), F), dn(E)) {
              let S;
              q ? (S = we(ke), S.anchor = g ? g.previousSibling : b.lastChild) : S = w.nodeType === 3 ? wo("") : we("div"), S.el = w, E.component.subTree = S;
            }
          } else
            ae & 64 ? p !== 8 ? g = V() : g = E.type.hydrate(w, E, N, M, z, F, e, x) : ae & 128 && (g = E.type.hydrate(w, E, N, M, Ar(s(w)), z, F, e, h));
      }
      return B != null && Vr(B, null, M, E), g;
    }, v = (w, E, N, M, z, F) => {
      F = F || !!E.dynamicChildren;
      const { type: q, props: V, patchFlag: re, shapeFlag: B, dirs: ae, transition: Ce } = E, p = q === "input" || q === "option";
      if (p || re !== -1) {
        ae && Ot(E, null, N, "created");
        let g = false;
        if (L(w)) {
          g = Ll(M, Ce) && N && N.vnode.props && N.vnode.props.appear;
          const S = w.content.firstChild;
          g && Ce.beforeEnter(S), ce(S, w, N), E.el = w = S;
        }
        if (B & 16 && !(V && (V.innerHTML || V.textContent))) {
          let S = x(w.firstChild, E, w, N, M, z, F);
          for (; S; ) {
            $t = true;
            const Z = S;
            S = S.nextSibling, l(Z);
          }
        } else
          B & 8 && w.textContent !== E.children && ($t = true, w.textContent = E.children);
        if (V)
          if (p || !F || re & 48)
            for (const S in V)
              (p && (S.endsWith("value") || S === "indeterminate") || hr(S) && !On(S) || S[0] === ".") && r(w, S, null, V[S], void 0, void 0, N);
          else
            V.onClick && r(w, "onClick", null, V.onClick, void 0, void 0, N);
        let b;
        (b = V && V.onVnodeBeforeMount) && rt(b, N, E), ae && Ot(E, null, N, "beforeMount"), ((b = V && V.onVnodeMounted) || ae || g) && tl(() => {
          b && rt(b, N, E), g && Ce.enter(w), ae && Ot(E, null, N, "mounted");
        }, M);
      }
      return w.nextSibling;
    }, x = (w, E, N, M, z, F, q) => {
      q = q || !!E.dynamicChildren;
      const V = E.children, re = V.length;
      for (let B = 0; B < re; B++) {
        const ae = q ? V[B] : V[B] = at(V[B]);
        if (w)
          w = h(w, ae, M, z, F, q);
        else {
          if (ae.type === gn && !ae.children)
            continue;
          $t = true, n(null, ae, N, null, M, z, Ar(N), F);
        }
      }
      return w;
    }, j = (w, E, N, M, z, F) => {
      const { slotScopeIds: q } = E;
      q && (z = z ? z.concat(q) : q);
      const V = s(w), re = x(o(w), E, V, N, M, z, F);
      return re && Nr(re) && re.data === "]" ? o(E.anchor = re) : ($t = true, c(E.anchor = u("]"), V, re), re);
    }, Y = (w, E, N, M, z, F) => {
      if ($t = true, E.el = null, F) {
        const re = ue(w);
        for (; ; ) {
          const B = o(w);
          if (B && B !== re)
            l(B);
          else
            break;
        }
      }
      const q = o(w), V = s(w);
      return l(w), n(null, E, V, q, N, M, Ar(V), z), q;
    }, ue = (w, E = "[", N = "]") => {
      let M = 0;
      for (; w; )
        if (w = o(w), w && Nr(w) && (w.data === E && M++, w.data === N)) {
          if (M === 0)
            return o(w);
          M--;
        }
      return w;
    }, ce = (w, E, N) => {
      const M = E.parentNode;
      M && M.replaceChild(w, E);
      let z = N;
      for (; z; )
        z.vnode.el === E && (z.vnode.el = z.subTree.el = w), z = z.parent;
    }, L = (w) => w.nodeType === 1 && w.tagName.toLowerCase() === "template";
    return [d, h];
  }
  var Ke = tl;
  function Pl(e) {
    return Dl(e);
  }
  function Rl(e) {
    return Dl(e, Ku);
  }
  function Dl(e, t) {
    const n = Es();
    n.__VUE__ = true;
    const { insert: r, remove: i, patchProp: o, createElement: s, createText: l, createComment: c, setText: u, setElementText: d, parentNode: h, nextSibling: v, setScopeId: x = it, insertStaticContent: j } = e, Y = (f, m, C, I = null, P = null, O = null, H = void 0, k = null, R = !!m.dynamicChildren) => {
      if (f === m)
        return;
      f && !wt(f, m) && (I = Ne(f), X(f, P, O, true), f = null), m.patchFlag === -2 && (R = false, m.dynamicChildren = null);
      const { type: T, ref: G, shapeFlag: W } = m;
      switch (T) {
        case gn:
          ue(f, m, C, I);
          break;
        case ze:
          ce(f, m, C, I);
          break;
        case hn:
          f == null && L(m, C, I, H);
          break;
        case ke:
          B(f, m, C, I, P, O, H, k, R);
          break;
        default:
          W & 1 ? N(f, m, C, I, P, O, H, k, R) : W & 6 ? ae(f, m, C, I, P, O, H, k, R) : (W & 64 || W & 128) && T.process(f, m, C, I, P, O, H, k, R, et);
      }
      G != null && P && Vr(G, f && f.ref, O, m || f, !m);
    }, ue = (f, m, C, I) => {
      if (f == null)
        r(m.el = l(m.children), C, I);
      else {
        const P = m.el = f.el;
        m.children !== f.children && u(P, m.children);
      }
    }, ce = (f, m, C, I) => {
      f == null ? r(m.el = c(m.children || ""), C, I) : m.el = f.el;
    }, L = (f, m, C, I) => {
      [f.el, f.anchor] = j(f.children, m, C, I, f.el, f.anchor);
    }, w = ({ el: f, anchor: m }, C, I) => {
      let P;
      for (; f && f !== m; )
        P = v(f), r(f, C, I), f = P;
      r(m, C, I);
    }, E = ({ el: f, anchor: m }) => {
      let C;
      for (; f && f !== m; )
        C = v(f), i(f), f = C;
      i(m);
    }, N = (f, m, C, I, P, O, H, k, R) => {
      m.type === "svg" ? H = "svg" : m.type === "math" && (H = "mathml"), f == null ? M(m, C, I, P, O, H, k, R) : q(f, m, P, O, H, k, R);
    }, M = (f, m, C, I, P, O, H, k) => {
      let R, T;
      const { props: G, shapeFlag: W, transition: ee, dirs: se } = f;
      if (R = f.el = s(f.type, O, G && G.is, G), W & 8 ? d(R, f.children) : W & 16 && F(f.children, R, null, I, P, Si(f, O), H, k), se && Ot(f, null, I, "created"), z(R, f, f.scopeId, H, I), G) {
        for (const D in G)
          D !== "value" && !On(D) && o(R, D, null, G[D], O, f.children, I, P, ge);
        "value" in G && o(R, "value", null, G.value, O), (T = G.onVnodeBeforeMount) && rt(T, I, f);
      }
      se && Ot(f, null, I, "beforeMount");
      const fe = Ll(P, ee);
      fe && ee.beforeEnter(R), r(R, m, C), ((T = G && G.onVnodeMounted) || fe || se) && Ke(() => {
        T && rt(T, I, f), fe && ee.enter(R), se && Ot(f, null, I, "mounted");
      }, P);
    }, z = (f, m, C, I, P) => {
      if (C && x(f, C), I)
        for (let O = 0; O < I.length; O++)
          x(f, I[O]);
      if (P) {
        let O = P.subTree;
        if (m === O) {
          const H = P.vnode;
          z(f, H, H.scopeId, H.slotScopeIds, P.parent);
        }
      }
    }, F = (f, m, C, I, P, O, H, k, R = 0) => {
      for (let T = R; T < f.length; T++) {
        const G = f[T] = k ? Gt(f[T]) : at(f[T]);
        Y(null, G, m, C, I, P, O, H, k);
      }
    }, q = (f, m, C, I, P, O, H) => {
      const k = m.el = f.el;
      let { patchFlag: R, dynamicChildren: T, dirs: G } = m;
      R |= f.patchFlag & 16;
      const W = f.props || Se, ee = m.props || Se;
      let se;
      if (C && rn(C, false), (se = ee.onVnodeBeforeUpdate) && rt(se, C, m, f), G && Ot(m, f, C, "beforeUpdate"), C && rn(C, true), T ? V(f.dynamicChildren, T, k, C, I, Si(m, P), O) : H || S(f, m, k, null, C, I, Si(m, P), O, false), R > 0) {
        if (R & 16)
          re(k, m, W, ee, C, I, P);
        else if (R & 2 && W.class !== ee.class && o(k, "class", null, ee.class, P), R & 4 && o(k, "style", W.style, ee.style, P), R & 8) {
          const fe = m.dynamicProps;
          for (let D = 0; D < fe.length; D++) {
            const K = fe[D], Q = W[K], te = ee[K];
            (te !== Q || K === "value") && o(k, K, Q, te, P, f.children, C, I, ge);
          }
        }
        R & 1 && f.children !== m.children && d(k, m.children);
      } else
        !H && T == null && re(k, m, W, ee, C, I, P);
      ((se = ee.onVnodeUpdated) || G) && Ke(() => {
        se && rt(se, C, m, f), G && Ot(m, f, C, "updated");
      }, I);
    }, V = (f, m, C, I, P, O, H) => {
      for (let k = 0; k < m.length; k++) {
        const R = f[k], T = m[k], G = R.el && (R.type === ke || !wt(R, T) || R.shapeFlag & 70) ? h(R.el) : C;
        Y(R, T, G, null, I, P, O, H, true);
      }
    }, re = (f, m, C, I, P, O, H) => {
      if (C !== I) {
        if (C !== Se)
          for (const k in C)
            !On(k) && !(k in I) && o(f, k, C[k], null, H, m.children, P, O, ge);
        for (const k in I) {
          if (On(k))
            continue;
          const R = I[k], T = C[k];
          R !== T && k !== "value" && o(f, k, T, R, H, m.children, P, O, ge);
        }
        "value" in I && o(f, "value", C.value, I.value, H);
      }
    }, B = (f, m, C, I, P, O, H, k, R) => {
      const T = m.el = f ? f.el : l(""), G = m.anchor = f ? f.anchor : l("");
      let { patchFlag: W, dynamicChildren: ee, slotScopeIds: se } = m;
      se && (k = k ? k.concat(se) : se), f == null ? (r(T, C, I), r(G, C, I), F(m.children || [], C, G, P, O, H, k, R)) : W > 0 && W & 64 && ee && f.dynamicChildren ? (V(f.dynamicChildren, ee, C, P, O, H, k), (m.key != null || P && m === P.subTree) && bo(f, m, true)) : S(f, m, C, G, P, O, H, k, R);
    }, ae = (f, m, C, I, P, O, H, k, R) => {
      m.slotScopeIds = k, f == null ? m.shapeFlag & 512 ? P.ctx.activate(m, C, I, H, R) : Ce(m, C, I, P, O, H, R) : p(f, m, R);
    }, Ce = (f, m, C, I, P, O, H) => {
      const k = f.component = Ul(f, I, P);
      if (yr(f) && (k.ctx.renderer = et), zl(k), k.asyncDep) {
        if (P && P.registerDep(k, g), !f.el) {
          const R = k.subTree = we(ze);
          ce(null, R, m, C);
        }
      } else
        g(k, f, m, C, P, O, H);
    }, p = (f, m, C) => {
      const I = m.component = f.component;
      if (Wa(f, m, C))
        if (I.asyncDep && !I.asyncResolved) {
          b(I, m, C);
          return;
        } else
          I.next = m, ja(I.update), I.effect.dirty = true, I.update();
      else
        m.el = f.el, I.vnode = m;
    }, g = (f, m, C, I, P, O, H) => {
      const k = () => {
        if (f.isMounted) {
          let { next: G, bu: W, u: ee, parent: se, vnode: fe } = f;
          {
            const de = kl(f);
            if (de) {
              G && (G.el = fe.el, b(f, G, H)), de.asyncDep.then(() => {
                f.isUnmounted || k();
              });
              return;
            }
          }
          let D = G, K;
          rn(f, false), G ? (G.el = fe.el, b(f, G, H)) : G = fe, W && In(W), (K = G.props && G.props.onVnodeBeforeUpdate) && rt(K, se, G, fe), rn(f, true);
          const Q = Rr(f), te = f.subTree;
          f.subTree = Q, Y(te, Q, h(te.el), Ne(te), f, P, O), G.el = Q.el, D === null && uo(f, Q.el), ee && Ke(ee, P), (K = G.props && G.props.onVnodeUpdated) && Ke(() => rt(K, se, G, fe), P);
        } else {
          let G;
          const { el: W, props: ee } = m, { bm: se, m: fe, parent: D } = f, K = dn(m);
          if (rn(f, false), se && In(se), !K && (G = ee && ee.onVnodeBeforeMount) && rt(G, D, m), rn(f, true), W && ht) {
            const Q = () => {
              f.subTree = Rr(f), ht(W, f.subTree, f, P, null);
            };
            K ? m.type.__asyncLoader().then(() => !f.isUnmounted && Q()) : Q();
          } else {
            const Q = f.subTree = Rr(f);
            Y(null, Q, C, I, f, P, O), m.el = Q.el;
          }
          if (fe && Ke(fe, P), !K && (G = ee && ee.onVnodeMounted)) {
            const Q = m;
            Ke(() => rt(G, D, Q), P);
          }
          (m.shapeFlag & 256 || D && dn(D.vnode) && D.vnode.shapeFlag & 256) && f.a && Ke(f.a, P), f.isMounted = true, m = C = I = null;
        }
      }, R = f.effect = new Fn(k, it, () => ni(T), f.scope), T = f.update = () => {
        R.dirty && R.run();
      };
      T.id = f.uid, rn(f, true), T();
    }, b = (f, m, C) => {
      m.component = f;
      const I = f.vnode.props;
      f.vnode = m, f.next = null, ju(f, m.props, I, C), $u(f, m.children, C), Zt(), Bo(f), en();
    }, S = (f, m, C, I, P, O, H, k, R = false) => {
      const T = f && f.children, G = f ? f.shapeFlag : 0, W = m.children, { patchFlag: ee, shapeFlag: se } = m;
      if (ee > 0) {
        if (ee & 128) {
          oe(T, W, C, I, P, O, H, k, R);
          return;
        } else if (ee & 256) {
          Z(T, W, C, I, P, O, H, k, R);
          return;
        }
      }
      se & 8 ? (G & 16 && ge(T, P, O), W !== T && d(C, W)) : G & 16 ? se & 16 ? oe(T, W, C, I, P, O, H, k, R) : ge(T, P, O, true) : (G & 8 && d(C, ""), se & 16 && F(W, C, I, P, O, H, k, R));
    }, Z = (f, m, C, I, P, O, H, k, R) => {
      f = f || Cn, m = m || Cn;
      const T = f.length, G = m.length, W = Math.min(T, G);
      let ee;
      for (ee = 0; ee < W; ee++) {
        const se = m[ee] = R ? Gt(m[ee]) : at(m[ee]);
        Y(f[ee], se, C, null, P, O, H, k, R);
      }
      T > G ? ge(f, P, O, true, false, W) : F(m, C, I, P, O, H, k, R, W);
    }, oe = (f, m, C, I, P, O, H, k, R) => {
      let T = 0;
      const G = m.length;
      let W = f.length - 1, ee = G - 1;
      for (; T <= W && T <= ee; ) {
        const se = f[T], fe = m[T] = R ? Gt(m[T]) : at(m[T]);
        if (wt(se, fe))
          Y(se, fe, C, null, P, O, H, k, R);
        else
          break;
        T++;
      }
      for (; T <= W && T <= ee; ) {
        const se = f[W], fe = m[ee] = R ? Gt(m[ee]) : at(m[ee]);
        if (wt(se, fe))
          Y(se, fe, C, null, P, O, H, k, R);
        else
          break;
        W--, ee--;
      }
      if (T > W) {
        if (T <= ee) {
          const se = ee + 1, fe = se < G ? m[se].el : I;
          for (; T <= ee; )
            Y(null, m[T] = R ? Gt(m[T]) : at(m[T]), C, fe, P, O, H, k, R), T++;
        }
      } else if (T > ee)
        for (; T <= W; )
          X(f[T], P, O, true), T++;
      else {
        const se = T, fe = T, D = /* @__PURE__ */ new Map();
        for (T = fe; T <= ee; T++) {
          const Te = m[T] = R ? Gt(m[T]) : at(m[T]);
          Te.key != null && D.set(Te.key, T);
        }
        let K, Q = 0;
        const te = ee - fe + 1;
        let de = false, yt = 0;
        const he = new Array(te);
        for (T = 0; T < te; T++)
          he[T] = 0;
        for (T = se; T <= W; T++) {
          const Te = f[T];
          if (Q >= te) {
            X(Te, P, O, true);
            continue;
          }
          let Ee;
          if (Te.key != null)
            Ee = D.get(Te.key);
          else
            for (K = fe; K <= ee; K++)
              if (he[K - fe] === 0 && wt(Te, m[K])) {
                Ee = K;
                break;
              }
          Ee === void 0 ? X(Te, P, O, true) : (he[Ee - fe] = T + 1, Ee >= yt ? yt = Ee : de = true, Y(Te, m[Ee], C, null, P, O, H, k, R), Q++);
        }
        const je = de ? zu(he) : Cn;
        for (K = je.length - 1, T = te - 1; T >= 0; T--) {
          const Te = fe + T, Ee = m[Te], tt = Te + 1 < G ? m[Te + 1].el : I;
          he[T] === 0 ? Y(null, Ee, C, tt, P, O, H, k, R) : de && (K < 0 || T !== je[K] ? me(Ee, C, tt, 2) : K--);
        }
      }
    }, me = (f, m, C, I, P = null) => {
      const { el: O, type: H, transition: k, children: R, shapeFlag: T } = f;
      if (T & 6) {
        me(f.component.subTree, m, C, I);
        return;
      }
      if (T & 128) {
        f.suspense.move(m, C, I);
        return;
      }
      if (T & 64) {
        H.move(f, m, C, et);
        return;
      }
      if (H === ke) {
        r(O, m, C);
        for (let W = 0; W < R.length; W++)
          me(R[W], m, C, I);
        r(f.anchor, m, C);
        return;
      }
      if (H === hn) {
        w(f, m, C);
        return;
      }
      if (I !== 2 && T & 1 && k)
        if (I === 0)
          k.beforeEnter(O), r(O, m, C), Ke(() => k.enter(O), P);
        else {
          const { leave: W, delayLeave: ee, afterLeave: se } = k, fe = () => r(O, m, C), D = () => {
            W(O, () => {
              fe(), se && se();
            });
          };
          ee ? ee(O, fe, D) : D();
        }
      else
        r(O, m, C);
    }, X = (f, m, C, I = false, P = false) => {
      const { type: O, props: H, ref: k, children: R, dynamicChildren: T, shapeFlag: G, patchFlag: W, dirs: ee } = f;
      if (k != null && Vr(k, null, C, f, true), G & 256) {
        m.ctx.deactivate(f);
        return;
      }
      const se = G & 1 && ee, fe = !dn(f);
      let D;
      if (fe && (D = H && H.onVnodeBeforeUnmount) && rt(D, m, f), G & 6)
        Re(f.component, C, I);
      else {
        if (G & 128) {
          f.suspense.unmount(C, I);
          return;
        }
        se && Ot(f, null, m, "beforeUnmount"), G & 64 ? f.type.remove(f, m, C, P, et, I) : T && (O !== ke || W > 0 && W & 64) ? ge(T, m, C, false, true) : (O === ke && W & 384 || !P && G & 16) && ge(R, m, C), I && pe(f);
      }
      (fe && (D = H && H.onVnodeUnmounted) || se) && Ke(() => {
        D && rt(D, m, f), se && Ot(f, null, m, "unmounted");
      }, C);
    }, pe = (f) => {
      const { type: m, el: C, anchor: I, transition: P } = f;
      if (m === ke) {
        We(C, I);
        return;
      }
      if (m === hn) {
        E(f);
        return;
      }
      const O = () => {
        i(C), P && !P.persisted && P.afterLeave && P.afterLeave();
      };
      if (f.shapeFlag & 1 && P && !P.persisted) {
        const { leave: H, delayLeave: k } = P, R = () => H(C, O);
        k ? k(f.el, O, R) : R();
      } else
        O();
    }, We = (f, m) => {
      let C;
      for (; f !== m; )
        C = v(f), i(f), f = C;
      i(m);
    }, Re = (f, m, C) => {
      const { bum: I, scope: P, update: O, subTree: H, um: k } = f;
      I && In(I), P.stop(), O && (O.active = false, X(H, f, m, C)), k && Ke(k, m), Ke(() => {
        f.isUnmounted = true;
      }, m), m && m.pendingBranch && !m.isUnmounted && f.asyncDep && !f.asyncResolved && f.suspenseId === m.pendingId && (m.deps--, m.deps === 0 && m.resolve());
    }, ge = (f, m, C, I = false, P = false, O = 0) => {
      for (let H = O; H < f.length; H++)
        X(f[H], m, C, I, P);
    }, Ne = (f) => f.shapeFlag & 6 ? Ne(f.component.subTree) : f.shapeFlag & 128 ? f.suspense.next() : v(f.anchor || f.el);
    let dt = false;
    const $e = (f, m, C) => {
      f == null ? m._vnode && X(m._vnode, null, null, true) : Y(m._vnode || null, f, m, null, null, null, C), dt || (dt = true, Bo(), Hr(), dt = false), m._vnode = f;
    }, et = { p: Y, um: X, m: me, r: pe, mt: Ce, mc: F, pc: S, pbc: V, n: Ne, o: e };
    let Je, ht;
    return t && ([Je, ht] = t(et)), { render: $e, hydrate: Je, createApp: Lu($e, Je) };
  }
  function Si({ type: e, props: t }, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
  }
  function rn({ effect: e, update: t }, n) {
    e.allowRecurse = t.allowRecurse = n;
  }
  function Ll(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted;
  }
  function bo(e, t, n = false) {
    const r = e.children, i = t.children;
    if (J(r) && J(i))
      for (let o = 0; o < r.length; o++) {
        const s = r[o];
        let l = i[o];
        l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[o] = Gt(i[o]), l.el = s.el), n || bo(s, l)), l.type === gn && (l.el = s.el);
      }
  }
  function zu(e) {
    const t = e.slice(), n = [0];
    let r, i, o, s, l;
    const c = e.length;
    for (r = 0; r < c; r++) {
      const u = e[r];
      if (u !== 0) {
        if (i = n[n.length - 1], e[i] < u) {
          t[r] = i, n.push(r);
          continue;
        }
        for (o = 0, s = n.length - 1; o < s; )
          l = o + s >> 1, e[n[l]] < u ? o = l + 1 : s = l;
        u < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), n[o] = r);
      }
    }
    for (o = n.length, s = n[o - 1]; o-- > 0; )
      n[o] = s, s = t[s];
    return n;
  }
  function kl(e) {
    const t = e.subTree.component;
    if (t)
      return t.asyncDep && !t.asyncResolved ? t : kl(t);
  }
  var Gu = (e) => e.__isTeleport;
  var tr = (e) => e && (e.disabled || e.disabled === "");
  var Jo = (e) => typeof SVGElement < "u" && e instanceof SVGElement;
  var Qo = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement;
  var ji = (e, t) => {
    const n = e && e.to;
    return Pe(n) ? t ? t(n) : null : n;
  };
  var Wu = { name: "Teleport", __isTeleport: true, process(e, t, n, r, i, o, s, l, c, u) {
    const { mc: d, pc: h, pbc: v, o: { insert: x, querySelector: j, createText: Y, createComment: ue } } = u, ce = tr(t.props);
    let { shapeFlag: L, children: w, dynamicChildren: E } = t;
    if (e == null) {
      const N = t.el = Y(""), M = t.anchor = Y("");
      x(N, n, r), x(M, n, r);
      const z = t.target = ji(t.props, j), F = t.targetAnchor = Y("");
      z && (x(F, z), s === "svg" || Jo(z) ? s = "svg" : (s === "mathml" || Qo(z)) && (s = "mathml"));
      const q = (V, re) => {
        L & 16 && d(w, V, re, i, o, s, l, c);
      };
      ce ? q(n, M) : z && q(z, F);
    } else {
      t.el = e.el;
      const N = t.anchor = e.anchor, M = t.target = e.target, z = t.targetAnchor = e.targetAnchor, F = tr(e.props), q = F ? n : M, V = F ? N : z;
      if (s === "svg" || Jo(M) ? s = "svg" : (s === "mathml" || Qo(M)) && (s = "mathml"), E ? (v(e.dynamicChildren, E, q, i, o, s, l), bo(e, t, true)) : c || h(e, t, q, V, i, o, s, l, false), ce)
        F ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Mr(t, n, N, u, 1);
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const re = t.target = ji(t.props, j);
        re && Mr(t, re, null, u, 0);
      } else
        F && Mr(t, M, z, u, 1);
    }
    Fl(t);
  }, remove(e, t, n, r, { um: i, o: { remove: o } }, s) {
    const { shapeFlag: l, children: c, anchor: u, targetAnchor: d, target: h, props: v } = e;
    if (h && o(d), s && o(u), l & 16) {
      const x = s || !tr(v);
      for (let j = 0; j < c.length; j++) {
        const Y = c[j];
        i(Y, t, n, x, !!Y.dynamicChildren);
      }
    }
  }, move: Mr, hydrate: qu };
  function Mr(e, t, n, { o: { insert: r }, m: i }, o = 2) {
    o === 0 && r(e.targetAnchor, t, n);
    const { el: s, anchor: l, shapeFlag: c, children: u, props: d } = e, h = o === 2;
    if (h && r(s, t, n), (!h || tr(d)) && c & 16)
      for (let v = 0; v < u.length; v++)
        i(u[v], t, n, 2);
    h && r(l, t, n);
  }
  function qu(e, t, n, r, i, o, { o: { nextSibling: s, parentNode: l, querySelector: c } }, u) {
    const d = t.target = ji(t.props, c);
    if (d) {
      const h = d._lpa || d.firstChild;
      if (t.shapeFlag & 16)
        if (tr(t.props))
          t.anchor = u(s(e), t, l(e), n, r, i, o), t.targetAnchor = h;
        else {
          t.anchor = s(e);
          let v = h;
          for (; v; )
            if (v = s(v), v && v.nodeType === 8 && v.data === "teleport anchor") {
              t.targetAnchor = v, d._lpa = t.targetAnchor && s(t.targetAnchor);
              break;
            }
          u(h, t, d, n, r, i, o);
        }
      Fl(t);
    }
    return t.anchor && s(t.anchor);
  }
  var Yu = Wu;
  function Fl(e) {
    const t = e.ctx;
    if (t && t.ut) {
      let n = e.children[0].el;
      for (; n && n !== e.targetAnchor; )
        n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid), n = n.nextSibling;
      t.ut();
    }
  }
  var ke = Symbol.for("v-fgt");
  var gn = Symbol.for("v-txt");
  var ze = Symbol.for("v-cmt");
  var hn = Symbol.for("v-stc");
  var nr = [];
  var ot = null;
  function Fe(e = false) {
    nr.push(ot = e ? null : []);
  }
  function jl() {
    nr.pop(), ot = nr[nr.length - 1] || null;
  }
  var mn = 1;
  function Bi(e) {
    mn += e;
  }
  function Bl(e) {
    return e.dynamicChildren = mn > 0 ? ot || Cn : null, jl(), mn > 0 && ot && ot.push(e), e;
  }
  function Xe(e, t, n, r, i, o) {
    return Bl(Me(e, t, n, r, i, o, true));
  }
  function vr(e, t, n, r, i) {
    return Bl(we(e, t, n, r, i, true));
  }
  function Xt(e) {
    return e ? e.__v_isVNode === true : false;
  }
  function wt(e, t) {
    return e.type === t.type && e.key === t.key;
  }
  function Xu(e) {
  }
  var Hl = ({ key: e }) => e != null ? e : null;
  var Dr = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? Pe(e) || Ge(e) || le(e) ? { i: Be, r: e, k: t, f: !!n } : e : null);
  function Me(e, t = null, n = null, r = 0, i = null, o = e === ke ? 0 : 1, s = false, l = false) {
    const c = { __v_isVNode: true, __v_skip: true, type: e, props: t, key: t && Hl(t), ref: t && Dr(t), scopeId: ii, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetAnchor: null, staticCount: 0, shapeFlag: o, patchFlag: r, dynamicProps: i, dynamicChildren: null, appContext: null, ctx: Be };
    return l ? (So(c, n), o & 128 && e.normalize(c)) : n && (c.shapeFlag |= Pe(n) ? 8 : 16), mn > 0 && !s && ot && (c.patchFlag > 0 || o & 6) && c.patchFlag !== 32 && ot.push(c), c;
  }
  var we = Ju;
  function Ju(e, t = null, n = null, r = 0, i = null, o = false) {
    if ((!e || e === Zs) && (e = ze), Xt(e)) {
      const l = At(e, t, true);
      return n && So(l, n), mn > 0 && !o && ot && (l.shapeFlag & 6 ? ot[ot.indexOf(e)] = l : ot.push(l)), l.patchFlag |= -2, l;
    }
    if (sf(e) && (e = e.__vccOpts), t) {
      t = $l(t);
      let { class: l, style: c } = t;
      l && !Pe(l) && (t.class = Un(l)), xe(c) && (oo(c) && !J(c) && (c = Ae({}, c)), t.style = Qt(c));
    }
    const s = Pe(e) ? 1 : el(e) ? 128 : Gu(e) ? 64 : xe(e) ? 4 : le(e) ? 2 : 0;
    return Me(e, t, n, r, i, s, o, true);
  }
  function $l(e) {
    return e ? oo(e) || Tl(e) ? Ae({}, e) : e : null;
  }
  function At(e, t, n = false, r = false) {
    const { props: i, ref: o, patchFlag: s, children: l, transition: c } = e, u = t ? Vl(i || {}, t) : i, d = { __v_isVNode: true, __v_skip: true, type: e.type, props: u, key: u && Hl(u), ref: t && t.ref ? n && o ? J(o) ? o.concat(Dr(t)) : [o, Dr(t)] : Dr(t) : o, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: l, target: e.target, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t && e.type !== ke ? s === -1 ? 16 : s | 16 : s, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: c, component: e.component, suspense: e.suspense, ssContent: e.ssContent && At(e.ssContent), ssFallback: e.ssFallback && At(e.ssFallback), el: e.el, anchor: e.anchor, ctx: e.ctx, ce: e.ce };
    return c && r && (d.transition = c.clone(d)), d;
  }
  function wo(e = " ", t = 0) {
    return we(gn, null, e, t);
  }
  function Qu(e, t) {
    const n = we(hn, null, e);
    return n.staticCount = t, n;
  }
  function Ur(e = "", t = false) {
    return t ? (Fe(), vr(ze, null, e)) : we(ze, null, e);
  }
  function at(e) {
    return e == null || typeof e == "boolean" ? we(ze) : J(e) ? we(ke, null, e.slice()) : typeof e == "object" ? Gt(e) : we(gn, null, String(e));
  }
  function Gt(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : At(e);
  }
  function So(e, t) {
    let n = 0;
    const { shapeFlag: r } = e;
    if (t == null)
      t = null;
    else if (J(t))
      n = 16;
    else if (typeof t == "object")
      if (r & 65) {
        const i = t.default;
        i && (i._c && (i._d = false), So(e, i()), i._c && (i._d = true));
        return;
      } else {
        n = 32;
        const i = t._;
        !i && !Tl(t) ? t._ctx = Be : i === 3 && Be && (Be.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
      }
    else
      le(t) ? (t = { default: t, _ctx: Be }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [wo(t)]) : n = 8);
    e.children = t, e.shapeFlag |= n;
  }
  function Vl(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n];
      for (const i in r)
        if (i === "class")
          t.class !== r.class && (t.class = Un([t.class, r.class]));
        else if (i === "style")
          t.style = Qt([t.style, r.style]);
        else if (hr(i)) {
          const o = t[i], s = r[i];
          s && o !== s && !(J(o) && o.includes(s)) && (t[i] = o ? [].concat(o, s) : s);
        } else
          i !== "" && (t[i] = r[i]);
    }
    return t;
  }
  function rt(e, t, n, r = null) {
    ft(e, t, 7, [n, r]);
  }
  var Zu = Sl();
  var ef = 0;
  function Ul(e, t, n) {
    const r = e.type, i = (t ? t.appContext : e.appContext) || Zu, o = { uid: ef++, vnode: e, type: r, parent: t, appContext: i, root: null, next: null, subTree: null, effect: null, update: null, scope: new eo(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t ? t.provides : Object.create(i.provides), accessCache: null, renderCache: [], components: null, directives: null, propsOptions: Il(r, i), emitsOptions: Qs(r, i), emit: null, emitted: null, propsDefaults: Se, inheritAttrs: r.inheritAttrs, ctx: Se, data: Se, props: Se, attrs: Se, slots: Se, refs: Se, setupState: Se, setupContext: null, attrsProxy: null, slotsProxy: null, suspense: n, suspenseId: n ? n.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
    return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Ha.bind(null, o), e.ce && e.ce(o), o;
  }
  var He = null;
  var Ft = () => He || Be;
  var Kr;
  var Hi;
  {
    const e = Es(), t = (n, r) => {
      let i;
      return (i = e[n]) || (i = e[n] = []), i.push(r), (o) => {
        i.length > 1 ? i.forEach((s) => s(o)) : i[0](o);
      };
    };
    Kr = t("__VUE_INSTANCE_SETTERS__", (n) => He = n), Hi = t("__VUE_SSR_SETTERS__", (n) => br = n);
  }
  var yn = (e) => {
    const t = He;
    return Kr(e), e.scope.on(), () => {
      e.scope.off(), Kr(t);
    };
  };
  var $i = () => {
    He && He.scope.off(), Kr(null);
  };
  function Kl(e) {
    return e.vnode.shapeFlag & 4;
  }
  var br = false;
  function zl(e, t = false) {
    t && Hi(t);
    const { props: n, children: r } = e.vnode, i = Kl(e);
    Fu(e, n, i, t), Hu(e, r);
    const o = i ? tf(e, t) : void 0;
    return t && Hi(false), o;
  }
  function tf(e, t) {
    const n = e.type;
    e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Di);
    const { setup: r } = n;
    if (r) {
      const i = e.setupContext = r.length > 1 ? Wl(e) : null, o = yn(e);
      Zt();
      const s = Dt(r, e, 0, [e.props, i]);
      if (en(), o(), Qi(s)) {
        if (s.then($i, $i), t)
          return s.then((l) => {
            Vi(e, l, t);
          }).catch((l) => {
            vn(l, e, 0);
          });
        e.asyncDep = s;
      } else
        Vi(e, s, t);
    } else
      Gl(e, t);
  }
  function Vi(e, t, n) {
    le(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : xe(t) && (e.setupState = co(t)), Gl(e, n);
  }
  var zr;
  var Ui;
  function nf(e) {
    zr = e, Ui = (t) => {
      t.render._rc && (t.withProxy = new Proxy(t.ctx, gu));
    };
  }
  var rf = () => !zr;
  function Gl(e, t, n) {
    const r = e.type;
    if (!e.render) {
      if (!t && zr && !r.render) {
        const i = r.template || _o(e).template;
        if (i) {
          const { isCustomElement: o, compilerOptions: s } = e.appContext.config, { delimiters: l, compilerOptions: c } = r, u = Ae(Ae({ isCustomElement: o, delimiters: l }, s), c);
          r.render = zr(i, u);
        }
      }
      e.render = r.render || it, Ui && Ui(e);
    }
    {
      const i = yn(e);
      Zt();
      try {
        Au(e);
      } finally {
        en(), i();
      }
    }
  }
  var of = { get(e, t) {
    return st(e, "get", ""), e[t];
  } };
  function Wl(e) {
    const t = (n) => {
      e.exposed = n || {};
    };
    return { attrs: new Proxy(e.attrs, of), slots: e.slots, emit: e.emit, expose: t };
  }
  function fi(e) {
    if (e.exposed)
      return e.exposeProxy || (e.exposeProxy = new Proxy(co(Us(e.exposed)), { get(t, n) {
        if (n in t)
          return t[n];
        if (n in er)
          return er[n](e);
      }, has(t, n) {
        return n in t || n in er;
      } }));
  }
  function Ki(e, t = true) {
    return le(e) ? e.displayName || e.name : e.name || t && e.__name;
  }
  function sf(e) {
    return le(e) && "__vccOpts" in e;
  }
  var fr = (e, t) => ba(e, t, br);
  function lf(e, t, n = Se) {
    const r = Ft(), i = Ze(t), o = ut(t), s = Gs((c, u) => {
      let d;
      return ol(() => {
        const h = e[t];
        St(d, h) && (d = h, u());
      }), { get() {
        return c(), n.get ? n.get(d) : d;
      }, set(h) {
        const v = r.vnode.props;
        !(v && (t in v || i in v || o in v) && (`onUpdate:${t}` in v || `onUpdate:${i}` in v || `onUpdate:${o}` in v)) && St(h, d) && (d = h, u()), r.emit(`update:${t}`, n.set ? n.set(h) : h);
      } };
    }), l = t === "modelValue" ? "modelModifiers" : `${t}Modifiers`;
    return s[Symbol.iterator] = () => {
      let c = 0;
      return { next() {
        return c < 2 ? { value: c++ ? e[l] || {} : s, done: false } : { done: true };
      } };
    }, s;
  }
  function ql(e, t, n) {
    const r = arguments.length;
    return r === 2 ? xe(t) && !J(t) ? Xt(t) ? we(e, null, [t]) : we(e, t) : we(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Xt(n) && (n = [n]), we(e, t, n));
  }
  function cf() {
  }
  function af(e, t, n, r) {
    const i = n[r];
    if (i && Yl(i, e))
      return i;
    const o = t();
    return o.memo = e.slice(), n[r] = o;
  }
  function Yl(e, t) {
    const n = e.memo;
    if (n.length != t.length)
      return false;
    for (let r = 0; r < n.length; r++)
      if (St(n[r], t[r]))
        return false;
    return mn > 0 && ot && ot.push(e), true;
  }
  var Xl = "3.4.27";
  var uf = it;
  var ff = La;
  var df = xn;
  var hf = Js;
  var pf = { createComponentInstance: Ul, setupComponent: zl, renderComponentRoot: Rr, setCurrentRenderingInstance: cr, isVNode: Xt, normalizeVNode: at };
  var gf = pf;
  var mf = null;
  var yf = null;
  var _f = null;
  var vf = "http://www.w3.org/2000/svg";
  var bf = "http://www.w3.org/1998/Math/MathML";
  var Wt = typeof document < "u" ? document : null;
  var Zo = Wt && Wt.createElement("template");
  var wf = { insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  }, remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  }, createElement: (e, t, n, r) => {
    const i = t === "svg" ? Wt.createElementNS(vf, e) : t === "mathml" ? Wt.createElementNS(bf, e) : Wt.createElement(e, n ? { is: n } : void 0);
    return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
  }, createText: (e) => Wt.createTextNode(e), createComment: (e) => Wt.createComment(e), setText: (e, t) => {
    e.nodeValue = t;
  }, setElementText: (e, t) => {
    e.textContent = t;
  }, parentNode: (e) => e.parentNode, nextSibling: (e) => e.nextSibling, querySelector: (e) => Wt.querySelector(e), setScopeId(e, t) {
    e.setAttribute(t, "");
  }, insertStaticContent(e, t, n, r, i, o) {
    const s = n ? n.previousSibling : t.lastChild;
    if (i && (i === o || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(true), n), !(i === o || !(i = i.nextSibling)); )
        ;
    else {
      Zo.innerHTML = r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e;
      const l = Zo.content;
      if (r === "svg" || r === "mathml") {
        const c = l.firstChild;
        for (; c.firstChild; )
          l.appendChild(c.firstChild);
        l.removeChild(c);
      }
      t.insertBefore(l, n);
    }
    return [s ? s.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
  } };
  var Vt = "transition";
  var Yn = "animation";
  var Hn = Symbol("_vtc");
  var Eo = (e, { slots: t }) => ql(cl, Ql(e), t);
  Eo.displayName = "Transition";
  var Jl = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String };
  var Sf = Eo.props = Ae({}, mo, Jl);
  var on = (e, t = []) => {
    J(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  };
  var es = (e) => e ? J(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
  function Ql(e) {
    const t = {};
    for (const B in e)
      B in Jl || (t[B] = e[B]);
    if (e.css === false)
      return t;
    const { name: n = "v", type: r, duration: i, enterFromClass: o = `${n}-enter-from`, enterActiveClass: s = `${n}-enter-active`, enterToClass: l = `${n}-enter-to`, appearFromClass: c = o, appearActiveClass: u = s, appearToClass: d = l, leaveFromClass: h = `${n}-leave-from`, leaveActiveClass: v = `${n}-leave-active`, leaveToClass: x = `${n}-leave-to` } = e, j = Ef(i), Y = j && j[0], ue = j && j[1], { onBeforeEnter: ce, onEnter: L, onEnterCancelled: w, onLeave: E, onLeaveCancelled: N, onBeforeAppear: M = ce, onAppear: z = L, onAppearCancelled: F = w } = t, q = (B, ae, Ce) => {
      Ut(B, ae ? d : l), Ut(B, ae ? u : s), Ce && Ce();
    }, V = (B, ae) => {
      B._isLeaving = false, Ut(B, h), Ut(B, x), Ut(B, v), ae && ae();
    }, re = (B) => (ae, Ce) => {
      const p = B ? z : L, g = () => q(ae, B, Ce);
      on(p, [ae, g]), ts(() => {
        Ut(ae, B ? c : o), Mt(ae, B ? d : l), es(p) || ns(ae, r, Y, g);
      });
    };
    return Ae(t, { onBeforeEnter(B) {
      on(ce, [B]), Mt(B, o), Mt(B, s);
    }, onBeforeAppear(B) {
      on(M, [B]), Mt(B, c), Mt(B, u);
    }, onEnter: re(false), onAppear: re(true), onLeave(B, ae) {
      B._isLeaving = true;
      const Ce = () => V(B, ae);
      Mt(B, h), Mt(B, v), ec(), ts(() => {
        B._isLeaving && (Ut(B, h), Mt(B, x), es(E) || ns(B, r, ue, Ce));
      }), on(E, [B, Ce]);
    }, onEnterCancelled(B) {
      q(B, false), on(w, [B]);
    }, onAppearCancelled(B) {
      q(B, true), on(F, [B]);
    }, onLeaveCancelled(B) {
      V(B), on(N, [B]);
    } });
  }
  function Ef(e) {
    if (e == null)
      return null;
    if (xe(e))
      return [Ei(e.enter), Ei(e.leave)];
    {
      const t = Ei(e);
      return [t, t];
    }
  }
  function Ei(e) {
    return Fr(e);
  }
  function Mt(e, t) {
    t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Hn] || (e[Hn] = /* @__PURE__ */ new Set())).add(t);
  }
  function Ut(e, t) {
    t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
    const n = e[Hn];
    n && (n.delete(t), n.size || (e[Hn] = void 0));
  }
  function ts(e) {
    requestAnimationFrame(() => {
      requestAnimationFrame(e);
    });
  }
  var xf = 0;
  function ns(e, t, n, r) {
    const i = e._endId = ++xf, o = () => {
      i === e._endId && r();
    };
    if (n)
      return setTimeout(o, n);
    const { type: s, timeout: l, propCount: c } = Zl(e, t);
    if (!s)
      return r();
    const u = s + "end";
    let d = 0;
    const h = () => {
      e.removeEventListener(u, v), o();
    }, v = (x) => {
      x.target === e && ++d >= c && h();
    };
    setTimeout(() => {
      d < c && h();
    }, l + 1), e.addEventListener(u, v);
  }
  function Zl(e, t) {
    const n = window.getComputedStyle(e), r = (j) => (n[j] || "").split(", "), i = r(`${Vt}Delay`), o = r(`${Vt}Duration`), s = rs(i, o), l = r(`${Yn}Delay`), c = r(`${Yn}Duration`), u = rs(l, c);
    let d = null, h = 0, v = 0;
    t === Vt ? s > 0 && (d = Vt, h = s, v = o.length) : t === Yn ? u > 0 && (d = Yn, h = u, v = c.length) : (h = Math.max(s, u), d = h > 0 ? s > u ? Vt : Yn : null, v = d ? d === Vt ? o.length : c.length : 0);
    const x = d === Vt && /\b(transform|all)(,|$)/.test(r(`${Vt}Property`).toString());
    return { type: d, timeout: h, propCount: v, hasTransform: x };
  }
  function rs(e, t) {
    for (; e.length < t.length; )
      e = e.concat(e);
    return Math.max(...t.map((n, r) => is(n) + is(e[r])));
  }
  function is(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
  }
  function ec() {
    return document.body.offsetHeight;
  }
  function Cf(e, t, n) {
    const r = e[Hn];
    r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
  }
  var Gr = Symbol("_vod");
  var tc = Symbol("_vsh");
  var nc = { beforeMount(e, { value: t }, { transition: n }) {
    e[Gr] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Xn(e, t);
  }, mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  }, updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), Xn(e, true), r.enter(e)) : r.leave(e, () => {
      Xn(e, false);
    }) : Xn(e, t));
  }, beforeUnmount(e, { value: t }) {
    Xn(e, t);
  } };
  function Xn(e, t) {
    e.style.display = t ? e[Gr] : "none", e[tc] = !t;
  }
  function Tf() {
    nc.getSSRProps = ({ value: e }) => {
      if (!e)
        return { style: { display: "none" } };
    };
  }
  var rc = Symbol("");
  function Of(e) {
    const t = Ft();
    if (!t)
      return;
    const n = t.ut = (i = e(t.proxy)) => {
      Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((o) => Gi(o, i));
    }, r = () => {
      const i = e(t.proxy);
      zi(t.subTree, i), n(i);
    };
    Kn(() => {
      il(r);
      const i = new MutationObserver(r);
      i.observe(t.subTree.el.parentNode, { childList: true }), ui(() => i.disconnect());
    });
  }
  function zi(e, t) {
    if (e.shapeFlag & 128) {
      const n = e.suspense;
      e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
        zi(n.activeBranch, t);
      });
    }
    for (; e.component; )
      e = e.component.subTree;
    if (e.shapeFlag & 1 && e.el)
      Gi(e.el, t);
    else if (e.type === ke)
      e.children.forEach((n) => zi(n, t));
    else if (e.type === hn) {
      let { el: n, anchor: r } = e;
      for (; n && (Gi(n, t), n !== r); )
        n = n.nextSibling;
    }
  }
  function Gi(e, t) {
    if (e.nodeType === 1) {
      const n = e.style;
      let r = "";
      for (const i in t)
        n.setProperty(`--${i}`, t[i]), r += `--${i}: ${t[i]};`;
      n[rc] = r;
    }
  }
  var If = /(^|;)\s*display\s*:/;
  function Af(e, t, n) {
    const r = e.style, i = Pe(n);
    let o = false;
    if (n && !i) {
      if (t)
        if (Pe(t))
          for (const s of t.split(";")) {
            const l = s.slice(0, s.indexOf(":")).trim();
            n[l] == null && Lr(r, l, "");
          }
        else
          for (const s in t)
            n[s] == null && Lr(r, s, "");
      for (const s in n)
        s === "display" && (o = true), Lr(r, s, n[s]);
    } else if (i) {
      if (t !== n) {
        const s = r[rc];
        s && (n += ";" + s), r.cssText = n, o = If.test(n);
      }
    } else
      t && e.removeAttribute("style");
    Gr in e && (e[Gr] = o ? r.display : "", e[tc] && (r.display = "none"));
  }
  var os = /\s*!important$/;
  function Lr(e, t, n) {
    if (J(n))
      n.forEach((r) => Lr(e, t, r));
    else if (n == null && (n = ""), t.startsWith("--"))
      e.setProperty(t, n);
    else {
      const r = Nf(e, t);
      os.test(n) ? e.setProperty(ut(r), n.replace(os, ""), "important") : e[r] = n;
    }
  }
  var ss = ["Webkit", "Moz", "ms"];
  var xi = {};
  function Nf(e, t) {
    const n = xi[t];
    if (n)
      return n;
    let r = Ze(t);
    if (r !== "filter" && r in e)
      return xi[t] = r;
    r = pr(r);
    for (let i = 0; i < ss.length; i++) {
      const o = ss[i] + r;
      if (o in e)
        return xi[t] = o;
    }
    return t;
  }
  var ls = "http://www.w3.org/1999/xlink";
  function Mf(e, t, n, r, i) {
    if (r && t.startsWith("xlink:"))
      n == null ? e.removeAttributeNS(ls, t.slice(6, t.length)) : e.setAttributeNS(ls, t, n);
    else {
      const o = qc(t);
      n == null || o && !xs(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n);
    }
  }
  function Pf(e, t, n, r, i, o, s) {
    if (t === "innerHTML" || t === "textContent") {
      r && s(r, i, o), e[t] = n != null ? n : "";
      return;
    }
    const l = e.tagName;
    if (t === "value" && l !== "PROGRESS" && !l.includes("-")) {
      const u = l === "OPTION" ? e.getAttribute("value") || "" : e.value, d = n != null ? n : "";
      (u !== d || !("_value" in e)) && (e.value = d), n == null && e.removeAttribute(t), e._value = n;
      return;
    }
    let c = false;
    if (n === "" || n == null) {
      const u = typeof e[t];
      u === "boolean" ? n = xs(n) : n == null && u === "string" ? (n = "", c = true) : u === "number" && (n = 0, c = true);
    }
    try {
      e[t] = n;
    } catch (e2) {
    }
    c && e.removeAttribute(t);
  }
  function Pt(e, t, n, r) {
    e.addEventListener(t, n, r);
  }
  function Rf(e, t, n, r) {
    e.removeEventListener(t, n, r);
  }
  var cs = Symbol("_vei");
  function Df(e, t, n, r, i = null) {
    const o = e[cs] || (e[cs] = {}), s = o[t];
    if (r && s)
      s.value = r;
    else {
      const [l, c] = Lf(t);
      if (r) {
        const u = o[t] = jf(r, i);
        Pt(e, l, u, c);
      } else
        s && (Rf(e, l, s, c), o[t] = void 0);
    }
  }
  var as = /(?:Once|Passive|Capture)$/;
  function Lf(e) {
    let t;
    if (as.test(e)) {
      t = {};
      let r;
      for (; r = e.match(as); )
        e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = true;
    }
    return [e[2] === ":" ? e.slice(3) : ut(e.slice(2)), t];
  }
  var Ci = 0;
  var kf = Promise.resolve();
  var Ff = () => Ci || (kf.then(() => Ci = 0), Ci = Date.now());
  function jf(e, t) {
    const n = (r) => {
      if (!r._vts)
        r._vts = Date.now();
      else if (r._vts <= n.attached)
        return;
      ft(Bf(r, n.value), t, 5, [r]);
    };
    return n.value = e, n.attached = Ff(), n;
  }
  function Bf(e, t) {
    if (J(t)) {
      const n = e.stopImmediatePropagation;
      return e.stopImmediatePropagation = () => {
        n.call(e), e._stopped = true;
      }, t.map((r) => (i) => !i._stopped && r && r(i));
    } else
      return t;
  }
  var us = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123;
  var Hf = (e, t, n, r, i, o, s, l, c) => {
    const u = i === "svg";
    t === "class" ? Cf(e, r, u) : t === "style" ? Af(e, n, r) : hr(t) ? Xi(t) || Df(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : $f(e, t, r, u)) ? Pf(e, t, r, o, s, l, c) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Mf(e, t, r, u));
  };
  function $f(e, t, n, r) {
    if (r)
      return !!(t === "innerHTML" || t === "textContent" || t in e && us(t) && le(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
      return false;
    if (t === "width" || t === "height") {
      const i = e.tagName;
      if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
        return false;
    }
    return us(t) && Pe(n) ? false : t in e;
  }
  function ic(e, t) {
    const n = yo(e);
    class r extends di {
      constructor(o) {
        super(n, o, t);
      }
    }
    return r.def = n, r;
  }
  var Vf = (e) => ic(e, mc);
  var Uf = typeof HTMLElement < "u" ? HTMLElement : class {
  };
  var di = class extends Uf {
    constructor(t, n = {}, r) {
      super(), this._def = t, this._props = n, this._instance = null, this._connected = false, this._resolved = false, this._numberProps = null, this._ob = null, this.shadowRoot && r ? r(this._createVNode(), this.shadowRoot) : (this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
    }
    connectedCallback() {
      this._connected = true, this._instance || (this._resolved ? this._update() : this._resolveDef());
    }
    disconnectedCallback() {
      this._connected = false, this._ob && (this._ob.disconnect(), this._ob = null), ti(() => {
        this._connected || (Wi(null, this.shadowRoot), this._instance = null);
      });
    }
    _resolveDef() {
      this._resolved = true;
      for (let r = 0; r < this.attributes.length; r++)
        this._setAttr(this.attributes[r].name);
      this._ob = new MutationObserver((r) => {
        for (const i of r)
          this._setAttr(i.attributeName);
      }), this._ob.observe(this, { attributes: true });
      const t = (r, i = false) => {
        const { props: o, styles: s } = r;
        let l;
        if (o && !J(o))
          for (const c in o) {
            const u = o[c];
            (u === Number || u && u.type === Number) && (c in this._props && (this._props[c] = Fr(this._props[c])), (l || (l = /* @__PURE__ */ Object.create(null)))[Ze(c)] = true);
          }
        this._numberProps = l, i && this._resolveProps(r), this._applyStyles(s), this._update();
      }, n = this._def.__asyncLoader;
      n ? n().then((r) => t(r, true)) : t(this._def);
    }
    _resolveProps(t) {
      const { props: n } = t, r = J(n) ? n : Object.keys(n || {});
      for (const i of Object.keys(this))
        i[0] !== "_" && r.includes(i) && this._setProp(i, this[i], true, false);
      for (const i of r.map(Ze))
        Object.defineProperty(this, i, { get() {
          return this._getProp(i);
        }, set(o) {
          this._setProp(i, o);
        } });
    }
    _setAttr(t) {
      let n = this.hasAttribute(t) ? this.getAttribute(t) : void 0;
      const r = Ze(t);
      this._numberProps && this._numberProps[r] && (n = Fr(n)), this._setProp(r, n, false);
    }
    _getProp(t) {
      return this._props[t];
    }
    _setProp(t, n, r = true, i = true) {
      n !== this._props[t] && (this._props[t] = n, i && this._instance && this._update(), r && (n === true ? this.setAttribute(ut(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(ut(t), n + "") : n || this.removeAttribute(ut(t))));
    }
    _update() {
      Wi(this._createVNode(), this.shadowRoot);
    }
    _createVNode() {
      const t = we(this._def, Ae({}, this._props));
      return this._instance || (t.ce = (n) => {
        this._instance = n, n.isCE = true;
        const r = (o, s) => {
          this.dispatchEvent(new CustomEvent(o, { detail: s }));
        };
        n.emit = (o, ...s) => {
          r(o, s), ut(o) !== o && r(ut(o), s);
        };
        let i = this;
        for (; i = i && (i.parentNode || i.host); )
          if (i instanceof di) {
            n.parent = i._instance, n.provides = i._instance.provides;
            break;
          }
      }), t;
    }
    _applyStyles(t) {
      t && t.forEach((n) => {
        const r = document.createElement("style");
        r.textContent = n, this.shadowRoot.appendChild(r);
      });
    }
  };
  function Kf(e = "$style") {
    {
      const t = Ft();
      if (!t)
        return Se;
      const n = t.type.__cssModules;
      if (!n)
        return Se;
      const r = n[e];
      return r || Se;
    }
  }
  var oc = /* @__PURE__ */ new WeakMap();
  var sc = /* @__PURE__ */ new WeakMap();
  var Wr = Symbol("_moveCb");
  var fs = Symbol("_enterCb");
  var lc = { name: "TransitionGroup", props: Ae({}, Sf, { tag: String, moveClass: String }), setup(e, { slots: t }) {
    const n = Ft(), r = go();
    let i, o;
    return ci(() => {
      if (!i.length)
        return;
      const s = e.moveClass || `${e.name || "v"}-move`;
      if (!Xf(i[0].el, n.vnode.el, s))
        return;
      i.forEach(Wf), i.forEach(qf);
      const l = i.filter(Yf);
      ec(), l.forEach((c) => {
        const u = c.el, d = u.style;
        Mt(u, s), d.transform = d.webkitTransform = d.transitionDuration = "";
        const h = u[Wr] = (v) => {
          v && v.target !== u || (!v || /transform$/.test(v.propertyName)) && (u.removeEventListener("transitionend", h), u[Wr] = null, Ut(u, s));
        };
        u.addEventListener("transitionend", h);
      });
    }), () => {
      const s = ye(e), l = Ql(s);
      let c = s.tag || ke;
      if (i = [], o)
        for (let u = 0; u < o.length; u++) {
          const d = o[u];
          d.el && d.el instanceof Element && (i.push(d), pn(d, Bn(d, l, r, n)), oc.set(d, d.el.getBoundingClientRect()));
        }
      o = t.default ? si(t.default()) : [];
      for (let u = 0; u < o.length; u++) {
        const d = o[u];
        d.key != null && pn(d, Bn(d, l, r, n));
      }
      return we(c, null, o);
    };
  } };
  lc.props;
  var Gf = lc;
  function Wf(e) {
    const t = e.el;
    t[Wr] && t[Wr](), t[fs] && t[fs]();
  }
  function qf(e) {
    sc.set(e, e.el.getBoundingClientRect());
  }
  function Yf(e) {
    const t = oc.get(e), n = sc.get(e), r = t.left - n.left, i = t.top - n.top;
    if (r || i) {
      const o = e.el.style;
      return o.transform = o.webkitTransform = `translate(${r}px,${i}px)`, o.transitionDuration = "0s", e;
    }
  }
  function Xf(e, t, n) {
    const r = e.cloneNode(), i = e[Hn];
    i && i.forEach((l) => {
      l.split(/\s+/).forEach((c) => c && r.classList.remove(c));
    }), n.split(/\s+/).forEach((l) => l && r.classList.add(l)), r.style.display = "none";
    const o = t.nodeType === 1 ? t : t.parentNode;
    o.appendChild(r);
    const { hasTransform: s } = Zl(r);
    return o.removeChild(r), s;
  }
  var Jt = (e) => {
    const t = e.props["onUpdate:modelValue"] || false;
    return J(t) ? (n) => In(t, n) : t;
  };
  function Jf(e) {
    e.target.composing = true;
  }
  function ds(e) {
    const t = e.target;
    t.composing && (t.composing = false, t.dispatchEvent(new Event("input")));
  }
  var mt = Symbol("_assign");
  var dr = { created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
    e[mt] = Jt(i);
    const o = r || i.props && i.props.type === "number";
    Pt(e, t ? "change" : "input", (s) => {
      if (s.target.composing)
        return;
      let l = e.value;
      n && (l = l.trim()), o && (l = kr(l)), e[mt](l);
    }), n && Pt(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Pt(e, "compositionstart", Jf), Pt(e, "compositionend", ds), Pt(e, "change", ds));
  }, mounted(e, { value: t }) {
    e.value = t != null ? t : "";
  }, beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: r, number: i } }, o) {
    if (e[mt] = Jt(o), e.composing)
      return;
    const s = (i || e.type === "number") && !/^0\d/.test(e.value) ? kr(e.value) : e.value, l = t != null ? t : "";
    s !== l && (document.activeElement === e && e.type !== "range" && (n || r && e.value.trim() === l) || (e.value = l));
  } };
  var xo = { deep: true, created(e, t, n) {
    e[mt] = Jt(n), Pt(e, "change", () => {
      const r = e._modelValue, i = $n(e), o = e.checked, s = e[mt];
      if (J(r)) {
        const l = Jr(r, i), c = l !== -1;
        if (o && !c)
          s(r.concat(i));
        else if (!o && c) {
          const u = [...r];
          u.splice(l, 1), s(u);
        }
      } else if (_n(r)) {
        const l = new Set(r);
        o ? l.add(i) : l.delete(i), s(l);
      } else
        s(ac(e, o));
    });
  }, mounted: hs, beforeUpdate(e, t, n) {
    e[mt] = Jt(n), hs(e, t, n);
  } };
  function hs(e, { value: t, oldValue: n }, r) {
    e._modelValue = t, J(t) ? e.checked = Jr(t, r.props.value) > -1 : _n(t) ? e.checked = t.has(r.props.value) : t !== n && (e.checked = Yt(t, ac(e, true)));
  }
  var Co = { created(e, { value: t }, n) {
    e.checked = Yt(t, n.props.value), e[mt] = Jt(n), Pt(e, "change", () => {
      e[mt]($n(e));
    });
  }, beforeUpdate(e, { value: t, oldValue: n }, r) {
    e[mt] = Jt(r), t !== n && (e.checked = Yt(t, r.props.value));
  } };
  var cc = { deep: true, created(e, { value: t, modifiers: { number: n } }, r) {
    const i = _n(t);
    Pt(e, "change", () => {
      const o = Array.prototype.filter.call(e.options, (s) => s.selected).map((s) => n ? kr($n(s)) : $n(s));
      e[mt](e.multiple ? i ? new Set(o) : o : o[0]), e._assigning = true, ti(() => {
        e._assigning = false;
      });
    }), e[mt] = Jt(r);
  }, mounted(e, { value: t, modifiers: { number: n } }) {
    ps(e, t);
  }, beforeUpdate(e, t, n) {
    e[mt] = Jt(n);
  }, updated(e, { value: t, modifiers: { number: n } }) {
    e._assigning || ps(e, t);
  } };
  function ps(e, t, n) {
    const r = e.multiple, i = J(t);
    if (!(r && !i && !_n(t))) {
      for (let o = 0, s = e.options.length; o < s; o++) {
        const l = e.options[o], c = $n(l);
        if (r)
          if (i) {
            const u = typeof c;
            u === "string" || u === "number" ? l.selected = t.some((d) => String(d) === String(c)) : l.selected = Jr(t, c) > -1;
          } else
            l.selected = t.has(c);
        else if (Yt($n(l), t)) {
          e.selectedIndex !== o && (e.selectedIndex = o);
          return;
        }
      }
      !r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
    }
  }
  function $n(e) {
    return "_value" in e ? e._value : e.value;
  }
  function ac(e, t) {
    const n = t ? "_trueValue" : "_falseValue";
    return n in e ? e[n] : t;
  }
  var uc = { created(e, t, n) {
    Pr(e, t, n, null, "created");
  }, mounted(e, t, n) {
    Pr(e, t, n, null, "mounted");
  }, beforeUpdate(e, t, n, r) {
    Pr(e, t, n, r, "beforeUpdate");
  }, updated(e, t, n, r) {
    Pr(e, t, n, r, "updated");
  } };
  function fc(e, t) {
    switch (e) {
      case "SELECT":
        return cc;
      case "TEXTAREA":
        return dr;
      default:
        switch (t) {
          case "checkbox":
            return xo;
          case "radio":
            return Co;
          default:
            return dr;
        }
    }
  }
  function Pr(e, t, n, r, i) {
    const s = fc(e.tagName, n.props && n.props.type)[i];
    s && s(e, t, n, r);
  }
  function Qf() {
    dr.getSSRProps = ({ value: e }) => ({ value: e }), Co.getSSRProps = ({ value: e }, t) => {
      if (t.props && Yt(t.props.value, e))
        return { checked: true };
    }, xo.getSSRProps = ({ value: e }, t) => {
      if (J(e)) {
        if (t.props && Jr(e, t.props.value) > -1)
          return { checked: true };
      } else if (_n(e)) {
        if (t.props && e.has(t.props.value))
          return { checked: true };
      } else if (e)
        return { checked: true };
    }, uc.getSSRProps = (e, t) => {
      if (typeof t.type != "string")
        return;
      const n = fc(t.type.toUpperCase(), t.props && t.props.type);
      if (n.getSSRProps)
        return n.getSSRProps(e, t);
    };
  }
  var Zf = ["ctrl", "shift", "alt", "meta"];
  var ed = { stop: (e) => e.stopPropagation(), prevent: (e) => e.preventDefault(), self: (e) => e.target !== e.currentTarget, ctrl: (e) => !e.ctrlKey, shift: (e) => !e.shiftKey, alt: (e) => !e.altKey, meta: (e) => !e.metaKey, left: (e) => "button" in e && e.button !== 0, middle: (e) => "button" in e && e.button !== 1, right: (e) => "button" in e && e.button !== 2, exact: (e, t) => Zf.some((n) => e[`${n}Key`] && !t.includes(n)) };
  var td = (e, t) => {
    const n = e._withMods || (e._withMods = {}), r = t.join(".");
    return n[r] || (n[r] = (i, ...o) => {
      for (let s = 0; s < t.length; s++) {
        const l = ed[t[s]];
        if (l && l(i, t))
          return;
      }
      return e(i, ...o);
    });
  };
  var nd = { esc: "escape", space: " ", up: "arrow-up", left: "arrow-left", right: "arrow-right", down: "arrow-down", delete: "backspace" };
  var dc = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}), r = t.join(".");
    return n[r] || (n[r] = (i) => {
      if (!("key" in i))
        return;
      const o = ut(i.key);
      if (t.some((s) => s === o || nd[s] === o))
        return e(i);
    });
  };
  var hc = Ae({ patchProp: Hf }, wf);
  var rr;
  var gs = false;
  function pc() {
    return rr || (rr = Pl(hc));
  }
  function gc() {
    return rr = gs ? rr : Rl(hc), gs = true, rr;
  }
  var Wi = (...e) => {
    pc().render(...e);
  };
  var mc = (...e) => {
    gc().hydrate(...e);
  };
  var yc = (...e) => {
    const t = pc().createApp(...e), { mount: n } = t;
    return t.mount = (r) => {
      const i = vc(r);
      if (!i)
        return;
      const o = t._component;
      !le(o) && !o.render && !o.template && (o.template = i.innerHTML), i.innerHTML = "";
      const s = n(i, false, _c(i));
      return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), s;
    }, t;
  };
  var rd = (...e) => {
    const t = gc().createApp(...e), { mount: n } = t;
    return t.mount = (r) => {
      const i = vc(r);
      if (i)
        return n(i, true, _c(i));
    }, t;
  };
  function _c(e) {
    if (e instanceof SVGElement)
      return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement)
      return "mathml";
  }
  function vc(e) {
    return Pe(e) ? document.querySelector(e) : e;
  }
  var ms = false;
  var id = () => {
    ms || (ms = true, Qf(), Tf());
  };
  var od = () => {
  };
  var sd = Object.freeze(Object.defineProperty({ __proto__: null, BaseTransition: cl, BaseTransitionPropsValidators: mo, Comment: ze, DeprecationTypes: _f, EffectScope: eo, ErrorCodes: Da, ErrorTypeStrings: ff, Fragment: ke, KeepAlive: uu, ReactiveEffect: Fn, Static: hn, Suspense: Za, Teleport: Yu, Text: gn, TrackOpTypes: Ma, Transition: Eo, TransitionGroup: Gf, TriggerOpTypes: Pa, VueElement: di, assertNumber: Ra, callWithAsyncErrorHandling: ft, callWithErrorHandling: Dt, camelize: Ze, capitalize: pr, cloneVNode: At, compatUtils: yf, compile: od, computed: fr, createApp: yc, createBlock: vr, createCommentVNode: Ur, createElementBlock: Xe, createElementVNode: Me, createHydrationRenderer: Rl, createPropsRestProxy: Ou, createRenderer: Pl, createSSRApp: rd, createSlots: du, createStaticVNode: Qu, createTextVNode: wo, createVNode: we, customRef: Gs, defineAsyncComponent: cu, defineComponent: yo, defineCustomElement: ic, defineEmits: yu, defineExpose: _u, defineModel: wu, defineOptions: vu, defineProps: mu, defineSSRCustomElement: Vf, defineSlots: bu, devtools: df, effect: Qc, effectScope: Ts, getCurrentInstance: Ft, getCurrentScope: Is, getTransitionRawChildren: si, guardReactiveProps: $l, h: ql, handleError: vn, hasInjectionContext: ku, hydrate: mc, initCustomFormatter: cf, initDirectivesForSSR: id, inject: kn, isMemoSame: Yl, isProxy: oo, isReactive: Nn, isReadonly: jn, isRef: Ge, isRuntimeOnly: rf, isShallow: ir, isVNode: Xt, markRaw: Us, mergeDefaults: Cu, mergeModels: Tu, mergeProps: Vl, nextTick: ti, normalizeClass: Un, normalizeProps: Gc, normalizeStyle: Qt, onActivated: ul, onBeforeMount: hl, onBeforeUnmount: ai, onBeforeUpdate: pl, onDeactivated: fl, onErrorCaptured: _l, onMounted: Kn, onRenderTracked: yl, onRenderTriggered: ml, onScopeDispose: Xc, onServerPrefetch: gl, onUnmounted: ui, onUpdated: ci, openBlock: Fe, popScopeId: Va, provide: El, proxyRefs: co, pushScopeId: $a, queuePostFlushCb: Br, reactive: gr, readonly: io, ref: un, registerRuntimeCompiler: nf, render: Wi, renderList: _r, renderSlot: hu, resolveComponent: Ya, resolveDirective: Ja, resolveDynamicComponent: Xa, resolveFilter: mf, resolveTransitionHooks: Bn, setBlockTracking: Bi, setDevtoolsHook: hf, setTransitionHooks: pn, shallowReactive: Vs, shallowReadonly: va, shallowRef: wa, ssrContextKey: nl, ssrUtils: gf, stop: Zc, toDisplayString: An, toHandlerKey: Zn, toHandlers: pu, toRaw: ye, toRef: Na, toRefs: Oa, toValue: xa, transformVNodeArgs: Xu, triggerRef: Ea, unref: Pn, useAttrs: xu, useCssModule: Kf, useCssVars: Of, useModel: lf, useSSRContext: rl, useSlots: Eu, useTransitionState: go, vModelCheckbox: xo, vModelDynamic: uc, vModelRadio: Co, vModelSelect: cc, vModelText: dr, vShow: nc, version: Xl, warn: uf, watch: fn, watchEffect: ou, watchPostEffect: il, watchSyncEffect: ol, withAsyncContext: Iu, withCtx: oi, withDefaults: Su, withDirectives: ll, withKeys: dc, withMemo: af, withModifiers: td, withScopeId: Ua }, Symbol.toStringTag, { value: "Module" }));
  function ld() {
    return bc().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function bc() {
    return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
  }
  var cd = typeof Proxy == "function";
  var ad = "devtools-plugin:setup";
  var ud = "plugin:settings:set";
  var Sn;
  var qi;
  function fd() {
    var e;
    return Sn !== void 0 || (typeof window < "u" && window.performance ? (Sn = true, qi = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (Sn = true, qi = globalThis.perf_hooks.performance) : Sn = false), Sn;
  }
  function dd() {
    return fd() ? qi.now() : Date.now();
  }
  var hd = class {
    constructor(t, n) {
      this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
      const r = {};
      if (t.settings)
        for (const s in t.settings) {
          const l = t.settings[s];
          r[s] = l.defaultValue;
        }
      const i = `__vue-devtools-plugin-settings__${t.id}`;
      let o = Object.assign({}, r);
      try {
        const s = localStorage.getItem(i), l = JSON.parse(s);
        Object.assign(o, l);
      } catch (e) {
      }
      this.fallbacks = { getSettings() {
        return o;
      }, setSettings(s) {
        try {
          localStorage.setItem(i, JSON.stringify(s));
        } catch (e) {
        }
        o = s;
      }, now() {
        return dd();
      } }, n && n.on(ud, (s, l) => {
        s === this.plugin.id && this.fallbacks.setSettings(l);
      }), this.proxiedOn = new Proxy({}, { get: (s, l) => this.target ? this.target.on[l] : (...c) => {
        this.onQueue.push({ method: l, args: c });
      } }), this.proxiedTarget = new Proxy({}, { get: (s, l) => this.target ? this.target[l] : l === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(l) ? (...c) => (this.targetQueue.push({ method: l, args: c, resolve: () => {
      } }), this.fallbacks[l](...c)) : (...c) => new Promise((u) => {
        this.targetQueue.push({ method: l, args: c, resolve: u });
      }) });
    }
    async setRealTarget(t) {
      this.target = t;
      for (const n of this.onQueue)
        this.target.on[n.method](...n.args);
      for (const n of this.targetQueue)
        n.resolve(await this.target[n.method](...n.args));
    }
  };
  function pd(e, t) {
    const n = e, r = bc(), i = ld(), o = cd && n.enableEarlyProxy;
    if (i && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !o))
      i.emit(ad, e, t);
    else {
      const s = o ? new hd(n, i) : null;
      (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({ pluginDescriptor: n, setupFn: t, proxy: s }), s && t(s.proxiedTarget);
    }
  }
  var wc = "store";
  function To(e) {
    return e === void 0 && (e = null), kn(e !== null ? e : wc);
  }
  function zn(e, t) {
    Object.keys(e).forEach(function(n) {
      return t(e[n], n);
    });
  }
  function gd(e) {
    return e !== null && typeof e == "object";
  }
  function md(e) {
    return e && typeof e.then == "function";
  }
  function yd(e, t) {
    return function() {
      return e(t);
    };
  }
  function Sc(e, t, n) {
    return t.indexOf(e) < 0 && (n && n.prepend ? t.unshift(e) : t.push(e)), function() {
      var r = t.indexOf(e);
      r > -1 && t.splice(r, 1);
    };
  }
  function Ec(e, t) {
    e._actions = /* @__PURE__ */ Object.create(null), e._mutations = /* @__PURE__ */ Object.create(null), e._wrappedGetters = /* @__PURE__ */ Object.create(null), e._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
    var n = e.state;
    hi(e, n, [], e._modules.root, true), Oo(e, n, t);
  }
  function Oo(e, t, n) {
    var r = e._state, i = e._scope;
    e.getters = {}, e._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
    var o = e._wrappedGetters, s = {}, l = {}, c = Ts(true);
    c.run(function() {
      zn(o, function(u, d) {
        s[d] = yd(u, e), l[d] = fr(function() {
          return s[d]();
        }), Object.defineProperty(e.getters, d, { get: function() {
          return l[d].value;
        }, enumerable: true });
      });
    }), e._state = gr({ data: t }), e._scope = c, e.strict && Sd(e), r && n && e._withCommit(function() {
      r.data = null;
    }), i && i.stop();
  }
  function hi(e, t, n, r, i) {
    var o = !n.length, s = e._modules.getNamespace(n);
    if (r.namespaced && (e._modulesNamespaceMap[s], e._modulesNamespaceMap[s] = r), !o && !i) {
      var l = Io(t, n.slice(0, -1)), c = n[n.length - 1];
      e._withCommit(function() {
        l[c] = r.state;
      });
    }
    var u = r.context = _d(e, s, n);
    r.forEachMutation(function(d, h) {
      var v = s + h;
      vd(e, v, d, u);
    }), r.forEachAction(function(d, h) {
      var v = d.root ? h : s + h, x = d.handler || d;
      bd(e, v, x, u);
    }), r.forEachGetter(function(d, h) {
      var v = s + h;
      wd(e, v, d, u);
    }), r.forEachChild(function(d, h) {
      hi(e, t, n.concat(h), d, i);
    });
  }
  function _d(e, t, n) {
    var r = t === "", i = { dispatch: r ? e.dispatch : function(o, s, l) {
      var c = qr(o, s, l), u = c.payload, d = c.options, h = c.type;
      return (!d || !d.root) && (h = t + h), e.dispatch(h, u);
    }, commit: r ? e.commit : function(o, s, l) {
      var c = qr(o, s, l), u = c.payload, d = c.options, h = c.type;
      (!d || !d.root) && (h = t + h), e.commit(h, u, d);
    } };
    return Object.defineProperties(i, { getters: { get: r ? function() {
      return e.getters;
    } : function() {
      return xc(e, t);
    } }, state: { get: function() {
      return Io(e.state, n);
    } } }), i;
  }
  function xc(e, t) {
    if (!e._makeLocalGettersCache[t]) {
      var n = {}, r = t.length;
      Object.keys(e.getters).forEach(function(i) {
        if (i.slice(0, r) === t) {
          var o = i.slice(r);
          Object.defineProperty(n, o, { get: function() {
            return e.getters[i];
          }, enumerable: true });
        }
      }), e._makeLocalGettersCache[t] = n;
    }
    return e._makeLocalGettersCache[t];
  }
  function vd(e, t, n, r) {
    var i = e._mutations[t] || (e._mutations[t] = []);
    i.push(function(s) {
      n.call(e, r.state, s);
    });
  }
  function bd(e, t, n, r) {
    var i = e._actions[t] || (e._actions[t] = []);
    i.push(function(s) {
      var l = n.call(e, { dispatch: r.dispatch, commit: r.commit, getters: r.getters, state: r.state, rootGetters: e.getters, rootState: e.state }, s);
      return md(l) || (l = Promise.resolve(l)), e._devtoolHook ? l.catch(function(c) {
        throw e._devtoolHook.emit("vuex:error", c), c;
      }) : l;
    });
  }
  function wd(e, t, n, r) {
    e._wrappedGetters[t] || (e._wrappedGetters[t] = function(o) {
      return n(r.state, r.getters, o.state, o.getters);
    });
  }
  function Sd(e) {
    fn(function() {
      return e._state.data;
    }, function() {
    }, { deep: true, flush: "sync" });
  }
  function Io(e, t) {
    return t.reduce(function(n, r) {
      return n[r];
    }, e);
  }
  function qr(e, t, n) {
    return gd(e) && e.type && (n = t, t = e, e = e.type), { type: e, payload: t, options: n };
  }
  var Ed = "vuex bindings";
  var ys = "vuex:mutations";
  var Ti = "vuex:actions";
  var En = "vuex";
  var xd = 0;
  function Cd(e, t) {
    pd({ id: "org.vuejs.vuex", app: e, label: "Vuex", homepage: "https://next.vuex.vuejs.org/", logo: "https://vuejs.org/images/icons/favicon-96x96.png", packageName: "vuex", componentStateTypes: [Ed] }, function(n) {
      n.addTimelineLayer({ id: ys, label: "Vuex Mutations", color: _s }), n.addTimelineLayer({ id: Ti, label: "Vuex Actions", color: _s }), n.addInspector({ id: En, label: "Vuex", icon: "storage", treeFilterPlaceholder: "Filter stores..." }), n.on.getInspectorTree(function(r) {
        if (r.app === e && r.inspectorId === En)
          if (r.filter) {
            var i = [];
            Ic(i, t._modules.root, r.filter, ""), r.rootNodes = i;
          } else
            r.rootNodes = [Oc(t._modules.root, "")];
      }), n.on.getInspectorState(function(r) {
        if (r.app === e && r.inspectorId === En) {
          var i = r.nodeId;
          xc(t, i), r.state = Id(Nd(t._modules, i), i === "root" ? t.getters : t._makeLocalGettersCache, i);
        }
      }), n.on.editInspectorState(function(r) {
        if (r.app === e && r.inspectorId === En) {
          var i = r.nodeId, o = r.path;
          i !== "root" && (o = i.split("/").filter(Boolean).concat(o)), t._withCommit(function() {
            r.set(t._state.data, o, r.state.value);
          });
        }
      }), t.subscribe(function(r, i) {
        var o = {};
        r.payload && (o.payload = r.payload), o.state = i, n.notifyComponentUpdate(), n.sendInspectorTree(En), n.sendInspectorState(En), n.addTimelineEvent({ layerId: ys, event: { time: Date.now(), title: r.type, data: o } });
      }), t.subscribeAction({ before: function(r, i) {
        var o = {};
        r.payload && (o.payload = r.payload), r._id = xd++, r._time = Date.now(), o.state = i, n.addTimelineEvent({ layerId: Ti, event: { time: r._time, title: r.type, groupId: r._id, subtitle: "start", data: o } });
      }, after: function(r, i) {
        var o = {}, s = Date.now() - r._time;
        o.duration = { _custom: { type: "duration", display: s + "ms", tooltip: "Action duration", value: s } }, r.payload && (o.payload = r.payload), o.state = i, n.addTimelineEvent({ layerId: Ti, event: { time: Date.now(), title: r.type, groupId: r._id, subtitle: "end", data: o } });
      } });
    });
  }
  var _s = 8702998;
  var Td = 6710886;
  var Od = 16777215;
  var Cc = { label: "namespaced", textColor: Od, backgroundColor: Td };
  function Tc(e) {
    return e && e !== "root" ? e.split("/").slice(-2, -1)[0] : "Root";
  }
  function Oc(e, t) {
    return { id: t || "root", label: Tc(t), tags: e.namespaced ? [Cc] : [], children: Object.keys(e._children).map(function(n) {
      return Oc(e._children[n], t + n + "/");
    }) };
  }
  function Ic(e, t, n, r) {
    r.includes(n) && e.push({ id: r || "root", label: r.endsWith("/") ? r.slice(0, r.length - 1) : r || "Root", tags: t.namespaced ? [Cc] : [] }), Object.keys(t._children).forEach(function(i) {
      Ic(e, t._children[i], n, r + i + "/");
    });
  }
  function Id(e, t, n) {
    t = n === "root" ? t : t[n];
    var r = Object.keys(t), i = { state: Object.keys(e.state).map(function(s) {
      return { key: s, editable: true, value: e.state[s] };
    }) };
    if (r.length) {
      var o = Ad(t);
      i.getters = Object.keys(o).map(function(s) {
        return { key: s.endsWith("/") ? Tc(s) : s, editable: false, value: Yi(function() {
          return o[s];
        }) };
      });
    }
    return i;
  }
  function Ad(e) {
    var t = {};
    return Object.keys(e).forEach(function(n) {
      var r = n.split("/");
      if (r.length > 1) {
        var i = t, o = r.pop();
        r.forEach(function(s) {
          i[s] || (i[s] = { _custom: { value: {}, display: s, tooltip: "Module", abstract: true } }), i = i[s]._custom.value;
        }), i[o] = Yi(function() {
          return e[n];
        });
      } else
        t[n] = Yi(function() {
          return e[n];
        });
    }), t;
  }
  function Nd(e, t) {
    var n = t.split("/").filter(function(r) {
      return r;
    });
    return n.reduce(function(r, i, o) {
      var s = r[i];
      if (!s)
        throw new Error('Missing module "' + i + '" for path "' + t + '".');
      return o === n.length - 1 ? s : s._children;
    }, t === "root" ? e : e.root._children);
  }
  function Yi(e) {
    try {
      return e();
    } catch (t) {
      return t;
    }
  }
  var Et = function(t, n) {
    this.runtime = n, this._children = /* @__PURE__ */ Object.create(null), this._rawModule = t;
    var r = t.state;
    this.state = (typeof r == "function" ? r() : r) || {};
  };
  var Ac = { namespaced: { configurable: true } };
  Ac.namespaced.get = function() {
    return !!this._rawModule.namespaced;
  };
  Et.prototype.addChild = function(t, n) {
    this._children[t] = n;
  };
  Et.prototype.removeChild = function(t) {
    delete this._children[t];
  };
  Et.prototype.getChild = function(t) {
    return this._children[t];
  };
  Et.prototype.hasChild = function(t) {
    return t in this._children;
  };
  Et.prototype.update = function(t) {
    this._rawModule.namespaced = t.namespaced, t.actions && (this._rawModule.actions = t.actions), t.mutations && (this._rawModule.mutations = t.mutations), t.getters && (this._rawModule.getters = t.getters);
  };
  Et.prototype.forEachChild = function(t) {
    zn(this._children, t);
  };
  Et.prototype.forEachGetter = function(t) {
    this._rawModule.getters && zn(this._rawModule.getters, t);
  };
  Et.prototype.forEachAction = function(t) {
    this._rawModule.actions && zn(this._rawModule.actions, t);
  };
  Et.prototype.forEachMutation = function(t) {
    this._rawModule.mutations && zn(this._rawModule.mutations, t);
  };
  Object.defineProperties(Et.prototype, Ac);
  var bn = function(t) {
    this.register([], t, false);
  };
  bn.prototype.get = function(t) {
    return t.reduce(function(n, r) {
      return n.getChild(r);
    }, this.root);
  };
  bn.prototype.getNamespace = function(t) {
    var n = this.root;
    return t.reduce(function(r, i) {
      return n = n.getChild(i), r + (n.namespaced ? i + "/" : "");
    }, "");
  };
  bn.prototype.update = function(t) {
    Nc([], this.root, t);
  };
  bn.prototype.register = function(t, n, r) {
    var i = this;
    r === void 0 && (r = true);
    var o = new Et(n, r);
    if (t.length === 0)
      this.root = o;
    else {
      var s = this.get(t.slice(0, -1));
      s.addChild(t[t.length - 1], o);
    }
    n.modules && zn(n.modules, function(l, c) {
      i.register(t.concat(c), l, r);
    });
  };
  bn.prototype.unregister = function(t) {
    var n = this.get(t.slice(0, -1)), r = t[t.length - 1], i = n.getChild(r);
    i && i.runtime && n.removeChild(r);
  };
  bn.prototype.isRegistered = function(t) {
    var n = this.get(t.slice(0, -1)), r = t[t.length - 1];
    return n ? n.hasChild(r) : false;
  };
  function Nc(e, t, n) {
    if (t.update(n), n.modules)
      for (var r in n.modules) {
        if (!t.getChild(r))
          return;
        Nc(e.concat(r), t.getChild(r), n.modules[r]);
      }
  }
  function Md(e) {
    return new lt(e);
  }
  var lt = function(t) {
    var n = this;
    t === void 0 && (t = {});
    var r = t.plugins;
    r === void 0 && (r = []);
    var i = t.strict;
    i === void 0 && (i = false);
    var o = t.devtools;
    this._committing = false, this._actions = /* @__PURE__ */ Object.create(null), this._actionSubscribers = [], this._mutations = /* @__PURE__ */ Object.create(null), this._wrappedGetters = /* @__PURE__ */ Object.create(null), this._modules = new bn(t), this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null), this._subscribers = [], this._makeLocalGettersCache = /* @__PURE__ */ Object.create(null), this._scope = null, this._devtools = o;
    var s = this, l = this, c = l.dispatch, u = l.commit;
    this.dispatch = function(v, x) {
      return c.call(s, v, x);
    }, this.commit = function(v, x, j) {
      return u.call(s, v, x, j);
    }, this.strict = i;
    var d = this._modules.root.state;
    hi(this, d, [], this._modules.root), Oo(this, d), r.forEach(function(h) {
      return h(n);
    });
  };
  var Ao = { state: { configurable: true } };
  lt.prototype.install = function(t, n) {
    t.provide(n || wc, this), t.config.globalProperties.$store = this;
    var r = this._devtools !== void 0 ? this._devtools : false;
    r && Cd(t, this);
  };
  Ao.state.get = function() {
    return this._state.data;
  };
  Ao.state.set = function(e) {
  };
  lt.prototype.commit = function(t, n, r) {
    var i = this, o = qr(t, n, r), s = o.type, l = o.payload, c = { type: s, payload: l }, u = this._mutations[s];
    u && (this._withCommit(function() {
      u.forEach(function(h) {
        h(l);
      });
    }), this._subscribers.slice().forEach(function(d) {
      return d(c, i.state);
    }));
  };
  lt.prototype.dispatch = function(t, n) {
    var r = this, i = qr(t, n), o = i.type, s = i.payload, l = { type: o, payload: s }, c = this._actions[o];
    if (c) {
      try {
        this._actionSubscribers.slice().filter(function(d) {
          return d.before;
        }).forEach(function(d) {
          return d.before(l, r.state);
        });
      } catch (e) {
      }
      var u = c.length > 1 ? Promise.all(c.map(function(d) {
        return d(s);
      })) : c[0](s);
      return new Promise(function(d, h) {
        u.then(function(v) {
          try {
            r._actionSubscribers.filter(function(x) {
              return x.after;
            }).forEach(function(x) {
              return x.after(l, r.state);
            });
          } catch (e) {
          }
          d(v);
        }, function(v) {
          try {
            r._actionSubscribers.filter(function(x) {
              return x.error;
            }).forEach(function(x) {
              return x.error(l, r.state, v);
            });
          } catch (e) {
          }
          h(v);
        });
      });
    }
  };
  lt.prototype.subscribe = function(t, n) {
    return Sc(t, this._subscribers, n);
  };
  lt.prototype.subscribeAction = function(t, n) {
    var r = typeof t == "function" ? { before: t } : t;
    return Sc(r, this._actionSubscribers, n);
  };
  lt.prototype.watch = function(t, n, r) {
    var i = this;
    return fn(function() {
      return t(i.state, i.getters);
    }, n, Object.assign({}, r));
  };
  lt.prototype.replaceState = function(t) {
    var n = this;
    this._withCommit(function() {
      n._state.data = t;
    });
  };
  lt.prototype.registerModule = function(t, n, r) {
    r === void 0 && (r = {}), typeof t == "string" && (t = [t]), this._modules.register(t, n), hi(this, this.state, t, this._modules.get(t), r.preserveState), Oo(this, this.state);
  };
  lt.prototype.unregisterModule = function(t) {
    var n = this;
    typeof t == "string" && (t = [t]), this._modules.unregister(t), this._withCommit(function() {
      var r = Io(n.state, t.slice(0, -1));
      delete r[t[t.length - 1]];
    }), Ec(this);
  };
  lt.prototype.hasModule = function(t) {
    return typeof t == "string" && (t = [t]), this._modules.isRegistered(t);
  };
  lt.prototype.hotUpdate = function(t) {
    this._modules.update(t), Ec(this, true);
  };
  lt.prototype._withCommit = function(t) {
    var n = this._committing;
    this._committing = true, t(), this._committing = n;
  };
  Object.defineProperties(lt.prototype, Ao);
  var Pd = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
  function Rd(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  function Dd(e) {
    if (e.__esModule)
      return e;
    var t = e.default;
    if (typeof t == "function") {
      var n = function r() {
        return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
      };
      n.prototype = t.prototype;
    } else
      n = {};
    return Object.defineProperty(n, "__esModule", { value: true }), Object.keys(e).forEach(function(r) {
      var i = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(n, r, i.get ? i : { enumerable: true, get: function() {
        return e[r];
      } });
    }), n;
  }
  var Mc = { exports: {} };
  var Ld = Dd(sd);
  (function(e, t) {
    (function(n, r) {
      e.exports = r(Ld);
    })(Pd, function(n) {
      function r(p, g) {
        var b = Object.keys(p);
        if (Object.getOwnPropertySymbols) {
          var S = Object.getOwnPropertySymbols(p);
          g && (S = S.filter(function(Z) {
            return Object.getOwnPropertyDescriptor(p, Z).enumerable;
          })), b.push.apply(b, S);
        }
        return b;
      }
      function i(p) {
        for (var g = 1; g < arguments.length; g++) {
          var b = arguments[g] != null ? arguments[g] : {};
          g % 2 ? r(Object(b), true).forEach(function(S) {
            o(p, S, b[S]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(b)) : r(Object(b)).forEach(function(S) {
            Object.defineProperty(p, S, Object.getOwnPropertyDescriptor(b, S));
          });
        }
        return p;
      }
      function o(p, g, b) {
        return (g = function(S) {
          var Z = function(oe, me) {
            if (typeof oe != "object" || oe === null)
              return oe;
            var X = oe[Symbol.toPrimitive];
            if (X !== void 0) {
              var pe = X.call(oe, me || "default");
              if (typeof pe != "object")
                return pe;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return (me === "string" ? String : Number)(oe);
          }(S, "string");
          return typeof Z == "symbol" ? Z : String(Z);
        }(g)) in p ? Object.defineProperty(p, g, { value: b, enumerable: true, configurable: true, writable: true }) : p[g] = b, p;
      }
      function s(p, g) {
        return function(b) {
          if (Array.isArray(b))
            return b;
        }(p) || function(b, S) {
          var Z = b == null ? null : typeof Symbol < "u" && b[Symbol.iterator] || b["@@iterator"];
          if (Z != null) {
            var oe, me, X, pe, We = [], Re = true, ge = false;
            try {
              if (X = (Z = Z.call(b)).next, S !== 0)
                for (; !(Re = (oe = X.call(Z)).done) && (We.push(oe.value), We.length !== S); Re = true)
                  ;
            } catch (Ne) {
              ge = true, me = Ne;
            } finally {
              try {
                if (!Re && Z.return != null && (pe = Z.return(), Object(pe) !== pe))
                  return;
              } finally {
                if (ge)
                  throw me;
              }
            }
            return We;
          }
        }(p, g) || c(p, g) || function() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }();
      }
      function l(p) {
        return function(g) {
          if (Array.isArray(g))
            return u(g);
        }(p) || function(g) {
          if (typeof Symbol < "u" && g[Symbol.iterator] != null || g["@@iterator"] != null)
            return Array.from(g);
        }(p) || c(p) || function() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }();
      }
      function c(p, g) {
        if (p) {
          if (typeof p == "string")
            return u(p, g);
          var b = Object.prototype.toString.call(p).slice(8, -1);
          return b === "Object" && p.constructor && (b = p.constructor.name), b === "Map" || b === "Set" ? Array.from(p) : b === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b) ? u(p, g) : void 0;
        }
      }
      function u(p, g) {
        (g == null || g > p.length) && (g = p.length);
        for (var b = 0, S = new Array(g); b < g; b++)
          S[b] = p[b];
        return S;
      }
      var d = { exports: {} };
      (function(p, g) {
        p.exports = function() {
          function b(a) {
            return (b = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(y) {
              return typeof y;
            } : function(y) {
              return y && typeof Symbol == "function" && y.constructor === Symbol && y !== Symbol.prototype ? "symbol" : typeof y;
            })(a);
          }
          function S() {
            return S = Object.assign ? Object.assign.bind() : function(a) {
              for (var y = 1; y < arguments.length; y++) {
                var _ = arguments[y];
                for (var A in _)
                  Object.prototype.hasOwnProperty.call(_, A) && (a[A] = _[A]);
              }
              return a;
            }, S.apply(this, arguments);
          }
          var Z = { capture: false, passive: false }, oe = /\s+/g;
          function me(a) {
            if (typeof window < "u" && window.navigator)
              return !!navigator.userAgent.match(a);
          }
          var X = me(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), pe = me(/Edge/i), We = me(/safari/i) && !me(/chrome/i) && !me(/android/i), Re = function() {
            var a = false;
            return document.addEventListener("checkIfSupportPassive", null, { get passive() {
              return a = true, true;
            } }), a;
          }();
          function ge(a, y, _) {
            window.addEventListener ? a.addEventListener(y, _, !(!Re && X) && Z) : window.attachEvent ? a.attachEvent("on" + y, _) : a["on" + y] = _;
          }
          function Ne(a, y, _) {
            window.removeEventListener ? a.removeEventListener(y, _, !(!Re && X) && Z) : window.detachEvent ? a.detachEvent("on" + y, _) : a["on" + y] = null;
          }
          function dt() {
            return document.scrollingElement || document.documentElement;
          }
          function $e(a, y, _) {
            if (a.getBoundingClientRect || a === window) {
              var A, U, ne, ie, be, Oe, Ve;
              if (a !== window && a.parentNode && a !== dt() ? (U = (A = a.getBoundingClientRect()).top, ne = A.left, ie = A.bottom, be = A.right, Oe = A.height, Ve = A.width) : (U = 0, ne = 0, ie = window.innerHeight, be = window.innerWidth, Oe = window.innerHeight, Ve = window.innerWidth), y && a !== window) {
                _ = _ || a.parentNode;
                do
                  if (_ && _.getBoundingClientRect) {
                    var Ie = _.getBoundingClientRect();
                    U -= Ie.top + parseInt(O(_, "border-top-width")), ne -= Ie.left + parseInt(O(_, "border-left-width")), ie = U + A.height, be = ne + A.width;
                    break;
                  }
                while (_ = _.parentNode);
              }
              return { top: U, left: ne, bottom: ie, right: be, width: Ve, height: Oe };
            }
          }
          function et(a, y, _, A) {
            if (a) {
              if (_ && !y) {
                for (var U = Array.prototype.slice.call(_.children), ne = 0, ie = U.length; ne < ie; ne++)
                  if (U[ne] === a || Je(a, U[ne]))
                    return U[ne];
              }
              _ = _ || document;
              do {
                if (y != null && (y[0] === ">" ? a.parentNode === _ && P(a, y) : P(a, y)) || A && a === _)
                  return a;
                if (a === _)
                  break;
              } while (a = a.parentNode);
              return null;
            }
          }
          function Je(a, y) {
            if (!a || !y)
              return false;
            if (y.compareDocumentPosition)
              return !!(16 & y.compareDocumentPosition(a));
            if (y.contains && a.nodeType === 1)
              return y.contains(a) && y !== a;
            for (; a = a.parentNode; )
              if (a === y)
                return true;
            return false;
          }
          function ht(a, y) {
            for (var _ = a.lastElementChild; _ && (_ === ve.ghost || O(_, "display") === "none" || y); )
              _ = _.previousElementSibling;
            return _ || null;
          }
          function f(a, y) {
            if (!a || !a.parentNode)
              return -1;
            for (var _ = 0; a = a.previousElementSibling; )
              a.nodeName.toUpperCase() === "TEMPLATE" || y && !P(a, y) || O(a, "display") === "none" || _++;
            return _;
          }
          function m(a, y, _, A) {
            for (var U = 0, ne = 0, ie = a.children; U < ie.length; ) {
              if (ie[U] !== ve.ghost && O(ie[U], "display") !== "none" && et(ie[U], _, a, false) && ie[U] !== ve.dragged) {
                if (ne === y)
                  return ie[U];
                ne++;
              }
              U++;
            }
            return null;
          }
          function C(a, y) {
            var _ = O(a), A = parseInt(_.width) - parseInt(_.paddingLeft) - parseInt(_.paddingRight) - parseInt(_.borderLeftWidth) - parseInt(_.borderRightWidth), U = m(a, 0, y), ne = m(a, 1, y), ie = U && O(U), be = ne && O(ne), Oe = ie && parseInt(ie.marginLeft) + parseInt(ie.marginRight) + $e(U).width, Ve = be && parseInt(be.marginLeft) + parseInt(be.marginRight) + $e(ne).width, Ie = pe || X ? "cssFloat" : "float";
            if (_.display === "flex")
              return _.flexDirection === "column" || _.flexDirection === "column-reverse" ? "vertical" : "horizontal";
            if (_.display === "grid")
              return _.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
            if (U && ie.float && ie.float !== "none") {
              var Le = ie.float === "left" ? "left" : "right";
              return !ne || be.clear !== "both" && be.clear !== Le ? "horizontal" : "vertical";
            }
            return U && (ie.display === "block" || ie.display === "flex" || ie.display === "table" || ie.display === "grid" || Oe >= A && _[Ie] === "none" || ne && _[Ie] === "none" && Oe + Ve > A) ? "vertical" : "horizontal";
          }
          function I(a, y, _) {
            if (a && y)
              if (a.classList)
                a.classList[_ ? "add" : "remove"](y);
              else {
                var A = (" " + a.className + " ").replace(oe, " ").replace(" " + y + " ", " ");
                a.className = (A + (_ ? " " + y : "")).replace(oe, " ");
              }
          }
          function P(a, y) {
            if (y) {
              if (y[0] === ">" && (y = y.substring(1)), a)
                try {
                  if (a.matches)
                    return a.matches(y);
                  if (a.msMatchesSelector)
                    return a.msMatchesSelector(y);
                  if (a.webkitMatchesSelector)
                    return a.webkitMatchesSelector(y);
                } catch (e2) {
                  return false;
                }
              return false;
            }
          }
          function O(a, y, _) {
            var A = a && a.style;
            if (A) {
              if (_ === void 0)
                return document.defaultView && document.defaultView.getComputedStyle ? _ = document.defaultView.getComputedStyle(a, "") : a.currentStyle && (_ = a.currentStyle), y === void 0 ? _ : _[y];
              y in A || y.indexOf("webkit") !== -1 || (y = "-webkit-" + y), A[y] = _ + (typeof _ == "string" ? "" : "px");
            }
          }
          function H(a, y) {
            var _, A, U = (A = y, (_ = a).compareDocumentPosition ? _.compareDocumentPosition(A) : _.contains ? (_ != A && _.contains(A) && 16) + (_ != A && A.contains(_) && 8) + (_.sourceIndex >= 0 && A.sourceIndex >= 0 ? (_.sourceIndex < A.sourceIndex && 4) + (_.sourceIndex > A.sourceIndex && 2) : 1) : 0);
            return U === 2 ? 1 : U === 4 ? -1 : 0;
          }
          function k(a) {
            a.preventDefault !== void 0 && a.cancelable && a.preventDefault();
          }
          function R(a) {
            var y = a.sortable, _ = a.name, A = a.params, U = y.options[_];
            typeof U == "function" && U(S({}, A));
          }
          (function() {
            if (typeof window > "u" || typeof document > "u")
              return "";
            var a = window.getComputedStyle(document.documentElement, "") || ["-moz-hidden-iframe"];
            (Array.prototype.slice.call(a).join("").match(/-(moz|webkit|ms)-/) || a.OLink === "" && ["", "o"])[1];
          })();
          var T, G, W = "Sortable" + Date.now();
          function ee(a) {
            this.options = a, this.autoScrollAnimationFrame = null;
          }
          function se(a) {
            this.options = a, this.stack = [];
          }
          function fe(a) {
            this.options = a || {}, this.selectedElements = [];
          }
          window.requestAnimationFrame || (window.requestAnimationFrame = function(a) {
            return setTimeout(a, 17);
          }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
            clearTimeout(a);
          }), ee.prototype = { destroy: function() {
            this.autoScrollAnimationFrame && (cancelAnimationFrame(this.autoScrollAnimationFrame), this.autoScrollAnimationFrame = null);
          }, update: function(a, y, _) {
            var A = this;
            cancelAnimationFrame(this.autoScrollAnimationFrame), this.autoScrollAnimationFrame = requestAnimationFrame(function() {
              y && _ && A.autoScroll(a, _), A.update(a, y, _);
            });
          }, autoScroll: function(a, y) {
            if (a && y.clientX !== void 0 && y.clientY !== void 0) {
              var _ = $e(a);
              if (_) {
                var A = y.clientX, U = y.clientY, ne = _.top, ie = _.right, be = _.bottom, Oe = _.left, Ve = _.height, Ie = _.width;
                if (!(U < ne || A > ie || U > be || A < Oe)) {
                  var Le = this.options, Tt = Le.scrollThreshold, bt = Le.scrollSpeed, nn = a.scrollTop, De = a.scrollLeft, qe = a.scrollHeight, pi = nn > 0 && U >= ne && U <= ne + Tt, gi = De + Ie < a.scrollWidth && A <= ie && A >= ie - Tt, Rc = nn + Ve < qe && U <= be && U >= be - Tt;
                  De > 0 && A >= Oe && A <= Oe + Tt && (a.scrollLeft += Math.floor(Math.max(-1, (A - Oe) / Tt - 1) * bt.x)), gi && (a.scrollLeft += Math.ceil(Math.min(1, (A - ie) / Tt + 1) * bt.x)), pi && (a.scrollTop += Math.floor(Math.max(-1, (U - ne) / Tt - 1) * bt.y)), Rc && (a.scrollTop += Math.ceil(Math.min(1, (U - be) / Tt + 1) * bt.y));
                }
              }
            }
          } }, se.prototype = { collect: function(a) {
            if (a) {
              for (var y = $e(a), _ = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, A = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight, U = Math.min(y.right, _), ne = Math.min(y.bottom, A), ie = Array.prototype.slice.call(a.children), be = [], Oe = 0, Ve = ie.length; Oe <= Ve; Oe++) {
                var Ie = ie[Oe];
                if (Ie && Ie !== ve.ghost && O(Ie, "display") !== "none") {
                  var Le = $e(Ie);
                  if (!(Le.bottom < 0 || Le.right < 0)) {
                    if (Le.top - Le.height > ne || Le.left - Le.width > U)
                      break;
                    be.push({ el: Ie, rect: Le });
                  }
                }
              }
              this.stack.push(be);
            }
          }, animate: function() {
            for (var a = this.stack.pop(), y = 0, _ = a.length; y < _; y++) {
              var A = a[y], U = A.el, ne = A.rect;
              this.options.animation && this._excute(U, ne);
            }
          }, _excute: function(a, y) {
            var _ = $e(a);
            if (_.top !== y.top || _.left !== y.left) {
              var A = y.left - _.left, U = y.top - _.top;
              O(a, "transition", ""), O(a, "transform", "translate3d(" + A + "px, " + U + "px, 0)"), a.offsetWidth;
              var ne = this.options, ie = ne.animation, be = ne.easing;
              O(a, "transition", "transform " + ie + "ms" + (be ? " " + be : "")), O(a, "transform", "translate3d(0px, 0px, 0px)"), typeof a.animated == "number" && clearTimeout(a.animated), a.animated = setTimeout(function() {
                O(a, "transition", ""), O(a, "transform", ""), a.animated = null;
              }, ie);
            }
          } }, fe.prototype = { destroy: function() {
            T = G = null;
          }, active: function() {
            return !!T;
          }, setParams: function(a) {
            a.nodes = T || [], a.clones = G || [];
          }, select: function(a) {
            I(a, this.options.selectedClass, true), this.selectedElements.push(a), this.selectedElements.sort(function(y, _) {
              return H(y, _);
            });
          }, deselect: function(a) {
            var y = this.selectedElements.indexOf(a);
            y > -1 && (I(a, this.options.selectedClass, false), this.selectedElements.splice(y, 1));
          }, getGhostElement: function() {
            if (!T)
              return null;
            var a = document.createElement("div");
            return this.selectedElements.forEach(function(y, _) {
              var A = y.cloneNode(true), U = _ === 0 ? 1 : 0.5;
              A.style = "position: absolute;left: 0;top: 0;bottom: 0;right: 0;opacity: ".concat(U, ";z-index: ").concat(_, ";"), a.appendChild(A);
            }), a;
          }, toggleSelected: function(a, y) {
            var _ = this;
            y ? a.forEach(function(A) {
              return _.selectedElements.push(A);
            }) : this.selectedElements = this.selectedElements.filter(function(A) {
              return a.indexOf(A) < 0;
            });
          }, toggleClass: function(a) {
            if (T)
              for (var y = 0; y < T.length; y++)
                I(T[y], this.options.chosenClass, a);
          }, toggleVisible: function(a) {
            if (T)
              if (a) {
                var y = T.indexOf(ve.dragged);
                this._viewElements(T, y, ve.dragged);
              } else
                this._hideElements(T);
          }, onChoose: function() {
            !this.options.multiple || !this.selectedElements.length || this.selectedElements.indexOf(ve.dragged) < 0 || (this.selectedElements.sort(function(a, y) {
              return H(a, y);
            }), T = this.selectedElements, this.toggleClass(true));
          }, onDrag: function(a) {
            T && (a.animator.collect(ve.dragged.parentNode), this._hideElements(T), a.animator.animate(), this.toggleClass(false));
          }, onDrop: function(a, y, _) {
            if (T) {
              var A = ve.dragged, U = ve.clone, ne = T.indexOf(A);
              y[W].animator.collect(U.parentNode), a !== y && _ === "clone" ? (O(U, "display", "none"), G = T.map(function(ie) {
                return ie.cloneNode(true);
              }), this._viewElements(G, ne, U), this._viewElements(T, ne, A)) : this._viewElements(T, ne, U), y[W].animator.animate(), a !== y && (y[W].multiplayer.toggleSelected(G || T, true), _ !== "clone" && a[W].multiplayer.toggleSelected(T, false));
            }
          }, onSelect: function(a, y, _) {
            var A = this.selectedElements.indexOf(y);
            I(y, this.options.selectedClass, A < 0);
            var U = { from: _.el, event: a, node: y, index: f(y) };
            A < 0 ? (this.selectedElements.push(y), R({ sortable: _, name: "onSelect", params: U })) : (this.selectedElements.splice(A, 1), R({ sortable: _, name: "onDeselect", params: U })), this.selectedElements.sort(function(ne, ie) {
              return H(ne, ie);
            });
          }, _viewElements: function(a, y, _) {
            for (var A = 0; A < a.length; A++)
              if (O(a[A], "display", ""), A < y)
                _.parentNode.insertBefore(a[A], _);
              else {
                var U = A > 0 ? a[A - 1] : _;
                _.parentNode.insertBefore(a[A], U.nextSibling);
              }
          }, _hideElements: function(a) {
            for (var y = 0; y < a.length; y++)
              a[y] != ve.dragged && O(a[y], "display", "none");
          } };
          var D, K, Q, te, de, yt, he, je, Te, Ee, tt, xt, tn, Ct, Ue, nt, _t, vt, Nt, pt, jt, Gn, Wn, Bt = [];
          function qn(a) {
            var y = {}, _ = a.group;
            _ && b(_) == "object" || (_ = { name: _, pull: true, put: true, revertDrag: true }), y.name = _.name, y.pull = _.pull, y.put = _.put, y.revertDrag = _.revertDrag, a.group = y;
          }
          function wn(a) {
            var y = nt || Ue;
            return !(a.clientX !== void 0 && a.clientY !== void 0 && Math.abs(a.clientX - y.clientX) <= 0 && Math.abs(a.clientY - y.clientY) <= 0);
          }
          function ve(a, y) {
            if (!a || !a.nodeType || a.nodeType !== 1)
              throw "Sortable-dnd: `el` must be an HTMLElement, not ".concat({}.toString.call(a));
            a[W] = this, this.el = a, this.options = y = S({}, y);
            var _ = { store: null, group: "", handle: null, sortable: true, disabled: false, multiple: false, lockAxis: "", direction: "", animation: 150, easing: "", draggable: null, selectHandle: null, customGhost: null, autoScroll: true, scrollThreshold: 55, scrollSpeed: { x: 10, y: 10 }, delay: 0, delayOnTouchOnly: false, touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1, ghostClass: "", ghostStyle: {}, chosenClass: "", selectedClass: "", swapOnDrop: true, fallbackOnBody: false, supportTouch: "ontouchstart" in window, emptyInsertThreshold: -1 };
            for (var A in _)
              !(A in this.options) && (this.options[A] = _[A]);
            for (var U in qn(y), this)
              U.charAt(0) === "_" && typeof this[U] == "function" && (this[U] = this[U].bind(this));
            ge(a, this.options.supportTouch ? "touchstart" : "mousedown", this._onDrag), Bt.push(a), this.autoScroller = new ee(this.options), this.multiplayer = new fe(this.options), this.animator = new se(this.options);
          }
          return ve.prototype = { constructor: ve, destroy: function() {
            this._cancelStart(), this._nulling(), Ne(this.el, "touchstart", this._onDrag), Ne(this.el, "mousedown", this._onDrag);
            var a = Bt.indexOf(this.el);
            a > -1 && Bt.splice(a, 1), this.el[W] = this.animator = this.multiplayer = this.autoScroller = null;
          }, option: function(a, y) {
            if (y === void 0)
              return this.options[a];
            this.options[a] = y, this.animator.options[a] = y, this.multiplayer.options[a] = y, this.autoScroller.options[a] = y, a === "group" && qn(this.options);
          }, select: function(a) {
            this.multiplayer.select(a);
          }, deselect: function(a) {
            this.multiplayer.deselect(a);
          }, getSelectedElements: function() {
            return this.multiplayer.selectedElements;
          }, _onDrag: function(a) {
            var y = this;
            if (!te && !this.options.disabled && this.options.group.pull && (!/mousedown|pointerdown/.test(a.type) || a.button === 0)) {
              var _ = a.touches && a.touches[0], A = (_ || a).target;
              if (!We || !A || A.tagName.toUpperCase() !== "SELECT") {
                var U = et(A, this.options.draggable, this.el);
                if (U && !U.animated) {
                  Ue = { origin: a, clientX: (_ || a).clientX, clientY: (_ || a).clientY }, te = U, ge(pt = _ ? te : document, "mouseup", this._onDrop), ge(pt, "touchend", this._onDrop), ge(pt, "touchcancel", this._onDrop);
                  var ne = this.options, ie = ne.handle, be = ne.selectHandle;
                  if (typeof be == "function" && be(a) || typeof be == "string" && P(A, be))
                    Wn = true;
                  else if ((typeof ie != "function" || ie(a)) && (typeof ie != "string" || P(A, ie))) {
                    var Oe = this.options, Ve = Oe.delay, Ie = Oe.delayOnTouchOnly;
                    !Ve || Ie && !_ || pe || X ? this._onStart(_, a) : (ge(this.el.ownerDocument, "touchmove", this._delayMoveHandler), ge(this.el.ownerDocument, "mousemove", this._delayMoveHandler), ge(this.el.ownerDocument, "mouseup", this._cancelStart), ge(this.el.ownerDocument, "touchend", this._cancelStart), ge(this.el.ownerDocument, "touchcancel", this._cancelStart), Gn = setTimeout(function() {
                      return y._onStart(_, a);
                    }, Ve)), ge(document, "selectstart", k), We && O(document.body, "user-select", "none");
                  }
                }
              }
            }
          }, _delayMoveHandler: function(a) {
            var y = a.touches ? a.touches[0] : a;
            Math.max(Math.abs(y.clientX - Ue.clientX), Math.abs(y.clientY - Ue.clientY)) >= Math.floor(this.options.touchStartThreshold / (window.devicePixelRatio || 1)) && this._cancelStart();
          }, _cancelStart: function() {
            clearTimeout(Gn), Ne(this.el.ownerDocument, "touchmove", this._delayMoveHandler), Ne(this.el.ownerDocument, "mousemove", this._delayMoveHandler), Ne(this.el.ownerDocument, "mouseup", this._cancelStart), Ne(this.el.ownerDocument, "touchend", this._cancelStart), Ne(this.el.ownerDocument, "touchcancel", this._cancelStart), Ne(document, "selectstart", k), We && O(document.body, "user-select", "");
          }, _onStart: function(a, y) {
            var _ = f(te);
            D = this.el, K = this.el, Te = te, xt = _, tn = _, Ct = _, vt = { to: this.el, target: te, newIndex: _, relative: 0 }, Nt = te, Q = this.el, he = te.cloneNode(true), Ee = te.parentNode, tt = this.options.group.pull, ve.clone = he, ve.active = this, ve.dragged = te, I(te, this.options.chosenClass, true), this.multiplayer.onChoose(), R({ sortable: this, name: "onChoose", params: this._getParams(y) }), ge(pt, a ? "touchmove" : "mousemove", this._nearestSortable);
            try {
              document.selection ? setTimeout(function() {
                return document.selection.empty();
              }, 0) : window.getSelection().removeAllRanges();
            } catch (e2) {
            }
          }, _onStarted: function() {
            I(he, this.options.chosenClass, true), this._appendGhost(), this.multiplayer.onDrag(this), R({ sortable: this, name: "onDrag", params: this._getParams(Ue.origin) }), O(te, "display", "none"), I(te, this.options.chosenClass, false), te.parentNode.insertBefore(he, te);
          }, _getGhostElement: function() {
            var a = this.options.customGhost;
            if (typeof a == "function") {
              var y = this.multiplayer.selectedElements;
              return a(y.length ? y : [te]);
            }
            return this.multiplayer.getGhostElement() || te;
          }, _appendGhost: function() {
            if (!je) {
              var a = this.options.fallbackOnBody ? document.body : this.el, y = this._getGhostElement();
              I(je = y.cloneNode(true), this.options.ghostClass, true);
              var _ = $e(te), A = S({ position: "fixed", top: _.top, left: _.left, width: _.width, height: _.height, zIndex: "100000", opacity: "0.8", overflow: "hidden", boxSizing: "border-box", transform: "translate3d(0px, 0px, 0px)", transition: "none", pointerEvents: "none" }, this.options.ghostStyle);
              for (var U in A)
                O(je, U, A[U]);
              ve.ghost = je, a.appendChild(je);
              var ne = (Ue.clientX - _.left) / parseInt(je.style.width) * 100, ie = (Ue.clientY - _.top) / parseInt(je.style.height) * 100;
              O(je, "transform-origin", ne + "% " + ie + "%"), O(je, "will-change", "transform");
            }
          }, _nearestSortable: function(a) {
            k(a);
            var y = a.touches && a.touches[0] || a;
            if (te && wn(y)) {
              !nt && this._onStarted();
              var _ = this.options.lockAxis, A = _ === "x" ? Ue.clientX : y.clientX, U = _ === "y" ? Ue.clientY : y.clientY, ne = document.elementFromPoint(A, U), ie = A - Ue.clientX, be = U - Ue.clientY;
              nt = { origin: a, clientX: A, clientY: U }, O(je, "transform", "translate3d(" + ie + "px, " + be + "px, 0)");
              var Oe, Ve, Ie, Le = (Oe = A, Ve = U, Bt.reduce(function(bt, nn) {
                var De = nn[W].options.emptyInsertThreshold;
                if (De != null) {
                  var qe = $e(nn), pi = Oe >= qe.left - De && Oe <= qe.right + De, gi = Ve >= qe.top - De && Ve <= qe.bottom + De;
                  return pi && gi && (!Ie || Ie && qe.left >= Ie.left && qe.right <= Ie.right && qe.top >= Ie.top && qe.bottom <= Ie.bottom) && (bt = nn, Ie = qe), bt;
                }
              }, null));
              if (Le && Le[W]._onMove(a, ne), !Le || Le[W].options.autoScroll) {
                var Tt = function(bt, nn) {
                  if (!bt || !bt.getBoundingClientRect)
                    return dt();
                  var De = bt;
                  do
                    if (De.clientWidth < De.scrollWidth || De.clientHeight < De.scrollHeight) {
                      var qe = O(De);
                      if (De.clientWidth < De.scrollWidth && (qe.overflowX == "auto" || qe.overflowX == "scroll") || De.clientHeight < De.scrollHeight && (qe.overflowY == "auto" || qe.overflowY == "scroll"))
                        return !De.getBoundingClientRect || De === document.body ? dt() : De;
                    }
                  while (De = De.parentNode);
                  return dt();
                }(ne);
                this.autoScroller.update(Tt, Ue, nt);
              } else
                this.autoScroller.destroy();
            }
          }, _allowPut: function() {
            if (Q === this.el)
              return true;
            if (this.options.group.put) {
              var a = this.options.group, y = a.name, _ = a.put, A = Q[W].options.group;
              return _.join && _.indexOf(A.name) > -1 || A.name && y && A.name === y;
            }
            return false;
          }, _getDirection: function() {
            var a = this.options, y = a.draggable, _ = a.direction;
            return _ ? typeof _ == "function" ? _.call(nt.origin, te, this) : _ : C(Ee, y);
          }, _allowSwap: function() {
            var a = $e(de), y = this._getDirection() === "vertical", _ = y ? "top" : "left", A = y ? "bottom" : "right", U = de[y ? "offsetHeight" : "offsetWidth"], ne = y ? nt.clientY : nt.clientX, ie = ne >= a[_] && ne < a[A] - U / 2 ? -1 : 1, be = m(Ee, 0, this.options.draggable), Oe = ht(Ee), Ve = $e(be), Ie = $e(Oe);
            if (de === Ee || Je(Ee, de))
              return he === be && ne < Ve[_] ? (yt = de, true) : he === Oe && ne > Ie[A] && (yt = de.nextSibling, true);
            var Le = H(he, de);
            return yt = Le < 0 ? de.nextSibling : de, _t !== de ? (jt = ie, true) : jt !== ie && (jt = ie, ie < 0 ? Le > 0 : Le < 0);
          }, _onMove: function(a, y) {
            if (!this.options.disabled && this._allowPut()) {
              if (de = et(y, this.options.draggable, this.el), R({ sortable: this, name: "onMove", params: this._getParams(a, { target: de }) }), this.options.sortable || this.el !== Q)
                return this.el === K || y !== this.el && ht(this.el) ? void (de && !de.animated && !Je(de, he) && this._allowSwap() && (de !== he && yt !== he && (this.el !== K ? this._onInsert(a) : de !== te && this._onChange(a)), _t = de)) : (de = _t = null, void this._onInsert(a));
              K !== Q && (de = _t = te, jt = 0, this._onInsert(a));
            }
          }, _onInsert: function(a) {
            var y = de || he, _ = tt === "clone" && this.el !== Q && K === Q, A = tt === "clone" && this.el === Q && K !== Q, U = Je(de, document), ne = de === te && !U;
            D = this.el, xt = f(he), Te = y, Ee = U ? de.parentNode : this.el, K[W].animator.collect(he.parentNode), this.animator.collect(Ee), _ && (vt.target = Nt, vt.newIndex = xt, vt.relative = Nt === te ? 0 : H(he, Nt), O(te, "display", ""), Q[W].multiplayer.toggleVisible(true), Q[W].options.group.revertDrag || he.parentNode.insertBefore(te, he)), A && (xt = f(te), O(te, "display", "none"), this.multiplayer.toggleVisible(false)), O(he, "display", ne ? "none" : ""), de && U ? Ee.insertBefore(he, jt < 0 ? de : de.nextSibling) : Ee.appendChild(he), tn = ne ? Ct : f(he), _ && Q[W].options.group.revertDrag && (vt.target = te, vt.newIndex = Ct, vt.relative = 0, R({ sortable: Q[W], name: "onChange", params: this._getParams(a, { to: Q, target: te, newIndex: Ct, revertDrag: true }) })), _ || R({ sortable: K[W], name: "onRemove", params: this._getParams(a, { newIndex: -1 }) }), A && y !== te && (Nt = y, R({ sortable: this, name: "onChange", params: this._getParams(a, { from: Q, backToOrigin: true }) })), A || R({ sortable: this, name: "onAdd", params: this._getParams(a, { oldIndex: -1 }) }), K[W].animator.animate(), this.animator.animate(), K = this.el;
          }, _onChange: function(a) {
            xt = f(he), Ee = de.parentNode, Te = de, this.el === Q && (Nt = de), this.animator.collect(Ee), Ee.insertBefore(he, yt), tn = f(he), R({ sortable: this, name: "onChange", params: this._getParams(a) }), this.animator.animate(), K = this.el;
          }, _onDrop: function(a) {
            this._cancelStart(), Ne(pt, "touchmove", this._nearestSortable), Ne(pt, "mousemove", this._nearestSortable), Ne(pt, "mouseup", this._onDrop), Ne(pt, "touchend", this._onDrop), Ne(pt, "touchcancel", this._onDrop), I(te, this.options.chosenClass, false), Q && (K = Q, xt = Ct, Te === he && (Te = te), this.multiplayer.toggleClass(false), R({ sortable: this, name: "onUnchoose", params: this._getParams(a) }), nt && this._onEnd(a));
            var y = this.options, _ = y.multiple, A = y.selectHandle;
            _ && (A && Wn || !A && !Q) && !wn(a.changedTouches ? a.changedTouches[0] : a) && this.multiplayer.onSelect(a, te, this), je && je.parentNode && je.parentNode.removeChild(je), this.autoScroller.destroy(), this.multiplayer.destroy(), this._nulling();
          }, _onEnd: function(a) {
            var y = this._getParams(a);
            this.multiplayer.onDrop(K, D, tt);
            var _ = this.options.swapOnDrop;
            tt === "clone" && K !== D || !(typeof _ == "function" ? _(y) : _) || Ee.insertBefore(te, he), tt !== "clone" || K === D || this.multiplayer.active() ? he && he.parentNode && he.parentNode.removeChild(he) : I(he, this.options.chosenClass, false), O(te, "display", ""), K !== D && R({ sortable: K[W], name: "onDrop", params: S({}, y, tt === "clone" ? vt : { newIndex: -1 }) }), R({ sortable: D[W], name: "onDrop", params: S({}, y, K === D ? {} : { oldIndex: -1 }) });
          }, _getParams: function(a) {
            var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ = {};
            return _.event = a, _.to = D, _.from = K, _.node = te, _.clone = he, _.target = Te, _.oldIndex = xt, _.newIndex = tn, _.pullMode = tt, this.multiplayer.setParams(_), S(_, y), _.relative = Te === te ? 0 : H(he, Te), _;
          }, _nulling: function() {
            D = K = Q = te = de = yt = he = je = Te = Ee = tt = xt = tn = Ct = Ue = nt = _t = vt = Nt = pt = jt = Gn = Wn = ve.clone = ve.ghost = ve.active = ve.dragged = null;
          } }, ve.utils = { on: ge, off: Ne, css: O, index: f, closest: et, getRect: $e, toggleClass: I, detectDirection: C }, ve.get = function(a) {
            return a[W];
          }, ve.create = function(a, y) {
            return new ve(a, y);
          }, ve;
        }();
      })(d);
      var h = d.exports, v = ["delay", "group", "handle", "lockAxis", "disabled", "sortable", "draggable", "animation", "autoScroll", "ghostClass", "ghostStyle", "chosenClass", "scrollSpeed", "fallbackOnBody", "scrollThreshold", "delayOnTouchOnly"];
      function x(p, g) {
        this.el = p, this.options = g, this.reRendered = false, this.installSortable();
      }
      function j(p, g) {
        var b = null, S = function() {
          for (var Z = this, oe = arguments.length, me = new Array(oe), X = 0; X < oe; X++)
            me[X] = arguments[X];
          b || (g <= 0 ? p.apply(this, me) : b = setTimeout(function() {
            b = void 0, p.apply(Z, me);
          }, g));
        };
        return S.cancel = function() {
          b && (clearTimeout(b), b = null);
        }, S;
      }
      function Y(p, g) {
        return (Array.isArray(g) ? g : g.replace(/\[/g, ".").replace(/\]/g, ".").split(".")).reduce(function(b, S) {
          return (b || {})[S];
        }, p);
      }
      x.prototype = { constructor: x, destroy: function() {
        this.sortable && this.sortable.destroy(), this.sortable = this.reRendered = null;
      }, option: function(p, g) {
        this.options[p] = g, v.includes(p) && this.sortable.option(p, g);
      }, installSortable: function() {
        var p = this, g = v.reduce(function(b, S) {
          return b[S] = p.options[S], b;
        }, {});
        this.sortable = new h(this.el, i(i({}, g), {}, { emptyInsertThreshold: 0, swapOnDrop: function(b) {
          return b.from === b.to;
        }, onDrag: function(b) {
          return p.onDrag(b);
        }, onDrop: function(b) {
          return p.onDrop(b);
        } }));
      }, onDrag: function(p) {
        var g = p.node.getAttribute("data-key"), b = this.getIndex(g), S = this.options.list[b];
        this.sortable.option("store", { item: S, key: g, index: b }), this.dispatchEvent("onDrag", { item: S, key: g, index: b, event: p });
      }, onDrop: function(p) {
        var g, b, S = h.get(p.from).option("store"), Z = S.item, oe = S.key, me = S.index, X = this.options.list, pe = { key: oe, item: Z, list: X, event: p, changed: false, oldList: l(X), oldIndex: me, newIndex: me };
        p.from === p.to && p.node === p.target || this.handleDropEvent(pe, p, Z, oe, me, X), this.dispatchEvent("onDrop", pe), p.from === this.el && this.reRendered && ((g = h.dragged) === null || g === void 0 || g.remove()), p.from !== p.to && p.pullMode === "clone" && ((b = h.clone) === null || b === void 0 || b.remove()), this.reRendered = false;
      }, handleDropEvent: function(p, g, b, S, Z, oe) {
        var me = g.target.getAttribute("data-key"), X = -1, pe = Z;
        g.from === g.to ? (((pe = this.getIndex(S)) < (X = this.getIndex(me)) && g.relative === -1 || pe > X && g.relative === 1) && (X += g.relative), X !== pe && (oe.splice(pe, 1), oe.splice(X, 0, b))) : (g.from === this.el && (pe = this.getIndex(S), oe.splice(pe, 1)), g.to === this.el && (pe = -1, X = this.getIndex(me), g.relative === 0 ? X = oe.length : g.relative === 1 && (X += g.relative), oe.splice(X, 0, b))), p.changed = g.from !== g.to || X !== pe, p.list = oe, p.oldIndex = pe, p.newIndex = X;
      }, getIndex: function(p) {
        return this.options.uniqueKeys.indexOf(p);
      }, dispatchEvent: function(p, g) {
        var b = this.options[p];
        b && b(g);
      } };
      var ue = ["size", "keeps", "scroller", "direction", "debounceTime", "throttleTime"], ce = "INIT", L = "FIXED", w = "DYNAMIC", E = "FRONT", N = "BEHIND", M = "STATIONARY", z = { vertical: "top", horizontal: "left" }, F = { vertical: "scrollTop", horizontal: "scrollLeft" }, q = { vertical: "scrollHeight", horizontal: "scrollWidth" }, V = { vertical: "offsetHeight", horizontal: "offsetWidth" };
      function re(p) {
        this.options = p;
        var g = { size: 0, keeps: 0, buffer: 0, wrapper: null, scroller: null, direction: "vertical", uniqueKeys: [], debounceTime: null, throttleTime: null };
        for (var b in g)
          !(b in this.options) && (this.options[b] = g[b]);
        this.sizes = /* @__PURE__ */ new Map(), this.range = { start: 0, end: 0, front: 0, behind: 0 }, this.offset = 0, this.calcType = ce, this.calcSize = { average: 0, fixed: 0 }, this.scrollDirection = "", this.updateScrollElement(), this.updateOnScrollFunction(), this.addScrollEventListener(), this.checkIfUpdate(0, p.keeps - 1);
      }
      re.prototype = { constructor: re, isFront: function() {
        return this.scrollDirection === E;
      }, isBehind: function() {
        return this.scrollDirection === N;
      }, isFixed: function() {
        return this.calcType === L;
      }, getSize: function(p) {
        return this.sizes.get(p) || this.getItemSize();
      }, getOffset: function() {
        return this.scrollEl[F[this.options.direction]];
      }, getScrollSize: function() {
        return this.scrollEl[q[this.options.direction]];
      }, getClientSize: function() {
        return this.scrollEl[V[this.options.direction]];
      }, scrollToOffset: function(p) {
        this.scrollEl[F[this.options.direction]] = p;
      }, scrollToIndex: function(p) {
        if (p >= this.options.uniqueKeys.length - 1)
          this.scrollToBottom();
        else {
          var g = this.getOffsetByIndex(p), b = this.getScrollStartOffset();
          this.scrollToOffset(g + b);
        }
      }, scrollToBottom: function() {
        var p = this, g = this.getScrollSize();
        this.scrollToOffset(g), setTimeout(function() {
          var b = p.getClientSize(), S = p.getScrollSize();
          p.getOffset() + b + 1 < S && p.scrollToBottom();
        }, 5);
      }, option: function(p, g) {
        var b = this, S = this.options[p];
        this.options[p] = g, p === "uniqueKeys" && this.sizes.forEach(function(Z, oe) {
          g.includes(oe) || b.sizes.delete(oe);
        }), p === "scroller" && (S && h.utils.off(S, "scroll", this.onScroll), this.updateScrollElement(), this.addScrollEventListener());
      }, updateRange: function(p) {
        if (p)
          this.handleUpdate(p.start, p.end);
        else {
          var g = this.range.start;
          g = Math.max(g, 0), this.handleUpdate(g, this.getEndByStart(g));
        }
      }, onItemResized: function(p, g) {
        if (this.sizes.get(p) !== g && (this.sizes.set(p, g), this.calcType === ce ? (this.calcType = L, this.calcSize.fixed = g) : this.isFixed() && this.calcSize.fixed !== g && (this.calcType = w, this.calcSize.fixed = 0), this.calcType === w && !this.calcSize.average)) {
          var b = Math.min(this.options.keeps, this.options.uniqueKeys.length);
          if (this.sizes.size === b) {
            var S = l(this.sizes.values()).reduce(function(Z, oe) {
              return Z + oe;
            }, 0);
            this.calcSize.average = Math.round(S / this.sizes.size);
          }
        }
      }, addScrollEventListener: function() {
        this.options.scroller && h.utils.on(this.options.scroller, "scroll", this.onScroll);
      }, removeScrollEventListener: function() {
        this.options.scroller && h.utils.off(this.options.scroller, "scroll", this.onScroll);
      }, enableScroll: function(p) {
        var g = this.options.scroller, b = p ? h.utils.off : h.utils.on, S = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";
        b(g, "DOMMouseScroll", this.preventDefault), b(g, S, this.preventDefault), b(g, "touchmove", this.preventDefault), b(g, "keydown", this.preventDefaultForKeyDown);
      }, preventDefault: function(p) {
        p.preventDefault();
      }, preventDefaultForKeyDown: function(p) {
        if ({ 37: 1, 38: 1, 39: 1, 40: 1 }[p.keyCode])
          return this.preventDefault(p), false;
      }, updateScrollElement: function() {
        var p = this.options.scroller;
        p instanceof Document && p.nodeType === 9 || p instanceof Window ? this.scrollEl = document.scrollingElement || document.documentElement || document.body : this.scrollEl = p;
      }, updateOnScrollFunction: function() {
        var p, g, b = this, S = this.options, Z = S.debounceTime, oe = S.throttleTime;
        this.onScroll = Z ? (p = j(function() {
          return b.handleScroll();
        }, Z), g = function() {
          p.cancel(), p.apply(this, arguments);
        }, g.cancel = function() {
          p.cancel();
        }, g) : oe ? j(function() {
          return b.handleScroll();
        }, oe) : function() {
          return b.handleScroll();
        };
      }, handleScroll: function() {
        var p = this.getOffset(), g = this.getClientSize(), b = this.getScrollSize();
        p === this.offset ? this.scrollDirection = M : this.scrollDirection = p < this.offset ? E : N, this.offset = p;
        var S = this.isFront() && p <= 0, Z = this.isBehind() && g + p >= b;
        this.options.onScroll({ top: S, bottom: Z, offset: p, direction: this.scrollDirection }), this.isFront() ? this.handleScrollFront() : this.isBehind() && this.handleScrollBehind();
      }, handleScrollFront: function() {
        var p = this.getScrollItems();
        if (!(p >= this.range.start)) {
          var g = Math.max(p - this.options.buffer, 0);
          this.checkIfUpdate(g, this.getEndByStart(g));
        }
      }, handleScrollBehind: function() {
        var p = this.getScrollItems();
        p <= this.range.start + this.options.buffer || this.checkIfUpdate(p, this.getEndByStart(p));
      }, getScrollItems: function() {
        var p = this.offset - this.getScrollStartOffset();
        if (p <= 0)
          return 0;
        if (this.isFixed())
          return Math.floor(p / this.calcSize.fixed);
        for (var g = 0, b = this.options.uniqueKeys.length, S = 0, Z = 0; g <= b; ) {
          if (S = g + Math.floor((b - g) / 2), (Z = this.getOffsetByIndex(S)) === p)
            return S;
          Z < p ? g = S + 1 : Z > p && (b = S - 1);
        }
        return g > 0 ? --g : 0;
      }, checkIfUpdate: function(p, g) {
        var b = this.options.keeps;
        this.options.uniqueKeys.length <= b ? (p = 0, g = this.getLastIndex()) : g - p < b - 1 && (p = g - b + 1), this.range.start !== p && this.handleUpdate(p, g);
      }, handleUpdate: function(p, g) {
        this.range.start = p, this.range.end = g, this.range.front = this.getFrontOffset(), this.range.behind = this.getBehindOffset(), this.options.onUpdate(i({}, this.range));
      }, getFrontOffset: function() {
        return this.isFixed() ? this.calcSize.fixed * this.range.start : this.getOffsetByIndex(this.range.start);
      }, getBehindOffset: function() {
        var p = this.range.end, g = this.getLastIndex();
        return this.isFixed() ? (g - p) * this.calcSize.fixed : (g - p) * this.getItemSize();
      }, getOffsetByIndex: function(p) {
        if (!p)
          return 0;
        for (var g = 0, b = 0; b < p; b++) {
          var S = this.sizes.get(this.options.uniqueKeys[b]);
          g += typeof S == "number" ? S : this.getItemSize();
        }
        return g;
      }, getEndByStart: function(p) {
        return Math.min(p + this.options.keeps - 1, this.getLastIndex());
      }, getLastIndex: function() {
        var p = this.options, g = p.uniqueKeys, b = p.keeps;
        return g.length > 0 ? g.length - 1 : b - 1;
      }, getItemSize: function() {
        return this.isFixed() ? this.calcSize.fixed : this.options.size || this.calcSize.average;
      }, getScrollStartOffset: function() {
        var p = 0, g = this.options, b = g.wrapper, S = g.scroller, Z = g.direction;
        if (S === b)
          return 0;
        if (S && b) {
          var oe = S instanceof Window ? h.utils.getRect(b) : h.utils.getRect(b, true, S);
          p = this.offset + oe[z[Z]];
        }
        return p;
      } };
      var B = { dataSource: {}, modelValue: {}, dataKey: { type: String, default: "", required: true }, tableMode: { type: Boolean, default: false }, draggable: { type: String, default: ".virtual-dnd-list-item" }, itemClass: { type: String, default: "virtual-dnd-list-item" }, sortable: { type: Boolean, default: true }, handle: { type: [Function, String] }, group: { type: [Object, String] }, scroller: { type: [Document, HTMLElement] }, lockAxis: { type: String, default: "" }, direction: { type: String, default: "vertical" }, keeps: { type: Number, default: 30 }, size: { type: Number }, debounceTime: { type: Number, default: 0 }, throttleTime: { type: Number, default: 0 }, animation: { type: Number, default: 150 }, autoScroll: { type: Boolean, default: true }, scrollSpeed: { type: Object, default: function() {
        return { x: 10, y: 10 };
      } }, scrollThreshold: { type: Number, default: 55 }, keepOffset: { type: Boolean, default: false }, disabled: { type: Boolean, default: false }, fallbackOnBody: { type: Boolean, default: false }, delay: { type: Number, default: 0 }, delayOnTouchOnly: { type: Boolean, default: false }, rootTag: { type: String, default: "div" }, wrapTag: { type: String, default: "div" }, wrapClass: { type: String, default: "" }, wrapStyle: { type: Object, default: function() {
        return {};
      } }, ghostClass: { type: String, default: "" }, ghostStyle: { type: Object, default: function() {
        return {};
      } }, chosenClass: { type: String, default: "" } }, ae = { dataKey: { type: [String, Number] }, sizeKey: { type: String, default: "offsetHeight" }, itemClass: { type: String } }, Ce = n.defineComponent({ props: ae, emits: ["resize"], setup: function(p, g) {
        var b = g.emit, S = g.slots, Z = null, oe = function(X) {
          var pe = X ? X[p.sizeKey] : 0;
          b("resize", pe, p.dataKey);
        }, me = function(X) {
          var pe = X.mounted, We = X.updated, Re = X.unmounted;
          return n.defineComponent({ props: ["vnode"], mounted: function() {
            pe(this.$el);
          }, onUpdated: function() {
            We(this.$el);
          }, onUnmounted: function() {
            Re(this.$el);
          }, render: function(ge) {
            return ge.vnode;
          } });
        }({ mounted: function(X) {
          typeof ResizeObserver < "u" && (Z = new ResizeObserver(function() {
            oe(X);
          }), X && Z.observe(X));
        }, updated: function(X) {
          oe(X);
        }, unmounted: function() {
          Z && (Z.disconnect(), Z = null);
        } });
        return function() {
          var X, pe = p.dataKey, We = p.itemClass, Re = s(((X = S.default) === null || X === void 0 ? void 0 : X.call(S)) || [], 1)[0];
          return n.h(me, { key: pe, class: We, vnode: Re, "data-key": pe }, { default: function() {
            var ge;
            return (ge = S.default) === null || ge === void 0 ? void 0 : ge.call(S);
          } });
        };
      } });
      return n.defineComponent({ props: B, emits: ["update:dataSource", "update:modelValue", "top", "bottom", "drag", "drop", "rangeChange"], setup: function(p, g) {
        var b, S, Z = g.emit, oe = g.slots, me = g.expose, X = n.ref({ start: 0, end: p.keeps - 1, front: 0, behind: 0 }), pe = n.ref(null), We = n.ref(null), Re = n.ref([]), ge = n.ref(), Ne = n.ref([]), dt = n.computed(function() {
          return p.direction !== "vertical";
        }), $e = n.computed(function() {
          return ue.reduce(function(D, K) {
            return D[K] = p[K], D;
          }, {});
        }), et = n.computed(function() {
          return v.reduce(function(D, K) {
            return D[K] = p[K], D;
          }, {});
        }), Je = [], ht = 0;
        function f() {
          return b.getOffset();
        }
        function m() {
          return b.getClientSize();
        }
        function C() {
          return b.getScrollSize();
        }
        function I(D) {
          b.scrollToOffset(D);
        }
        function P(D) {
          b.scrollToIndex(D);
        }
        me({ getSize: function(D) {
          return b.getSize(D);
        }, getOffset: f, getClientSize: m, getScrollSize: C, scrollToTop: function() {
          I(0);
        }, scrollToBottom: function() {
          b.scrollToBottom();
        }, scrollToKey: function(D) {
          var K = Je.indexOf(D);
          K > -1 && b.scrollToIndex(K);
        }, scrollToIndex: P, scrollToOffset: I }), n.watch(function() {
          return [p.dataSource, p.modelValue];
        }, function() {
          O();
        }, { deep: true }), n.watch($e, function(D, K) {
          if (b)
            for (var Q in D)
              D[Q] != K[Q] && b.option(Q, D[Q]);
        }), n.watch(et, function(D, K) {
          if (S)
            for (var Q in D)
              D[Q] != K[Q] && S.option(Q, D[Q]);
        }), n.onBeforeMount(function() {
          O();
        }), n.onActivated(function() {
          b && I(b.offset), b.addScrollEventListener();
        }), n.onDeactivated(function() {
          b.removeScrollEventListener();
        }), n.onMounted(function() {
          k(), R();
        }), n.onUnmounted(function() {
          S == null || S.destroy(), b == null || b.removeScrollEventListener();
        });
        var O = function() {
          var D, K = (D = p.modelValue || p.dataSource, n.isRef(D) ? D.value : D);
          if (K) {
            if (Re.value = K, H(), T(Ne.value, K), S == null || S.option("list", K), ht && p.keepOffset) {
              var Q = K.length - ht;
              Q > 0 && P(Q), ht = 0;
            }
            Ne.value = l(Re.value);
          }
        }, H = function() {
          Je = Re.value.map(function(D) {
            return Y(D, p.dataKey);
          }), b == null || b.option("uniqueKeys", Je), S == null || S.option("uniqueKeys", Je);
        }, k = function() {
          b = new re(Object.assign(Object.assign({}, $e.value), { buffer: Math.round(p.keeps / 3), wrapper: We.value, scroller: p.scroller || pe.value, uniqueKeys: Je, onScroll: function(D) {
            ht = 0, Re.value.length && D.top ? W() : D.bottom && ee();
          }, onUpdate: function(D) {
            var K = D.start !== X.value.start;
            ge.value && K && S && (S.reRendered = true), X.value = D, K && Z("rangeChange", D);
          } }));
        }, R = function() {
          S = new x(pe.value, Object.assign(Object.assign({}, et.value), { list: Re.value, uniqueKeys: Je, onDrag: function(D) {
            ge.value = D.key, p.sortable || (b.enableScroll(false), S.option("autoScroll", false)), Z("drag", D);
          }, onDrop: function(D) {
            ge.value = "", b.enableScroll(true), S.option("autoScroll", p.autoScroll), D.changed && (Z("update:dataSource", D.list), Z("update:modelValue", D.list)), Z("drop", D);
          } }));
        }, T = function(D, K) {
          var Q = Object.assign({}, X.value);
          K.length > D.length && Q.end === D.length - 1 && G() && (Q.end++, Q.start = Math.max(0, Q.end - p.keeps)), b == null || b.updateRange(Q);
        }, G = function() {
          return f() + m() + 1 >= C();
        }, W = j(function() {
          Z("top"), ht = Re.value.length;
        }, 50), ee = j(function() {
          Z("bottom");
        }, 50), se = function(D, K) {
          var Q = b.sizes.size, te = Math.min(p.keeps, Re.value.length);
          b.onItemResized(K, D), Q === te - 1 && T(Re.value, Re.value);
        }, fe = function(D) {
          if (p.tableMode) {
            var K = { padding: 0, margin: 0, border: 0, height: "".concat(D, "px") };
            return n.h("tr", {}, [n.h("td", { style: K })]);
          }
          return null;
        };
        return function() {
          var D = X.value, K = D.front, Q = D.behind, te = p.tableMode, de = p.rootTag, yt = p.wrapTag, he = p.scroller, je = p.wrapClass, Te = p.wrapStyle, Ee = dt.value ? "0 ".concat(Q, "px 0 ").concat(K, "px") : "".concat(K, "px 0 ").concat(Q, "px"), tt = dt.value ? "auto hidden" : "hidden auto", xt = te ? "table" : de, tn = te ? "tbody" : yt;
          return n.h(xt, { ref: pe, style: !he && !te && { overflow: tt } }, { default: function() {
            var Ct, Ue;
            return [(Ct = oe.header) === null || Ct === void 0 ? void 0 : Ct.call(oe), n.h(tn, { ref: We, class: je, style: Object.assign(Object.assign({}, Te), { padding: !te && Ee }) }, { default: function() {
              return function() {
                var nt = [], _t = X.value, vt = _t.start, Nt = _t.end, pt = _t.front, jt = _t.behind, Gn = dt.value ? "offsetWidth" : "offsetHeight";
                nt.push(fe(pt));
                for (var Wn = function(qn) {
                  var wn = Re.value[qn];
                  if (wn) {
                    var ve = Y(wn, p.dataKey);
                    nt.push(oe.item ? n.h(Ce, { key: ve, class: p.itemClass, style: ve == ge.value && { display: "none" }, dataKey: ve, sizeKey: Gn, onResize: se }, { default: function() {
                      var a;
                      return (a = oe.item) === null || a === void 0 ? void 0 : a.call(oe, { record: wn, index: qn, dataKey: ve });
                    } }) : null);
                  }
                }, Bt = vt; Bt <= Nt; Bt++)
                  Wn(Bt);
                return nt.push(fe(jt)), nt;
              }();
            } }), (Ue = oe.footer) === null || Ue === void 0 ? void 0 : Ue.call(oe)];
          } });
        };
      } });
    });
  })(Mc);
  var kd = Mc.exports;
  var Fd = Rd(kd);
  var Oi = [{ name: "Blue", class: "blue" }, { name: "Cyan", class: "cyan" }, { name: "Gray", class: "gray" }, { name: "Green", class: "green" }, { name: "Light Blue", class: "light-blue" }, { name: "Orange", class: "orange" }, { name: "Pink", class: "pink" }, { name: "Purple", class: "purple" }, { name: "Red", class: "red" }, { name: "Yellow", class: "yellow" }];
  var jd = ["title"];
  var Bd = ["title"];
  var Hd = { __name: "Assignments", props: { assignments: Array }, setup(e) {
    function t(n) {
      let r = frappe.get_palette(n);
      return `background-color: var(${r[0]}); color: var(${r[1]})`;
    }
    return (n, r) => (Fe(true), Xe(ke, null, _r(e.assignments, (i) => (Fe(), Xe("span", { class: "avatar avatar-small", title: i }, [Me("div", { class: "avatar-frame standard-image", style: Qt(t(i)), title: i }, An(i == null ? void 0 : i.charAt(0)), 13, Bd)], 8, jd))), 256));
  } };
  var $d = { class: "kanban-card drag" };
  var Vd = { class: "kanban-title-area pb-3 drag" };
  var Ud = ["href"];
  var Kd = ["title"];
  var zd = { class: "drag" };
  var Gd = { key: 0, class: "drag" };
  var Wd = { class: "kanban-card-meta drag" };
  var qd = { class: "kanban-assignments d-flex float-right drag" };
  var Yd = { class: "avatar-group float-right overlap" };
  var Xd = { class: "avatar-frame avatar-action" };
  var Jd = { class: "icon icon-sm", style: {}, "aria-hidden": "true" };
  var Qd = Me("use", { class: "", href: "#icon-add" }, null, -1);
  var Zd = [Qd];
  var eh = { __name: "KanbanCard", props: { card: Object, config: Object, columnIndex: Number }, setup(e) {
    const t = To(), n = e;
    function r(s) {
      let l = "border-radius: 4px;text-align:center;padding:5px;";
      if (n.config.fields.includes(n.config.highlighted_field) && n.card[n.config.highlighted_field]) {
        let c = "gray";
        for (const u of n.config.highlight_table)
          u.tag === s && (c = u.color);
        return l += `background-color:  var(--${c}-200); color: var(--${c}-800);`, l;
      }
    }
    function i() {
      return "/app/" + n.config.ref_doctype.toLowerCase() + "/" + n.card.name;
    }
    async function o(s) {
      let l = window.cur_list.get_args();
      new frappe.ui.form.AssignToDialog({ obj: s, method: "frappe.desk.form.assign_to.add", doctype: l.doctype, docname: s.name, callback: async function() {
        l = window.cur_list.get_args(), t.dispatch("fetchKanban", { args: l });
      } }).dialog.show();
    }
    return (s, l) => (Fe(), Xe("div", $d, [Me("div", Vd, [Me("a", { href: i(), draggable: "false" }, [Me("span", { class: "card-title ellipsis drag", title: e.card[e.config.title_field] }, An(e.card[e.config.title_field]), 9, Kd)], 8, Ud)]), (Fe(true), Xe(ke, null, _r(e.config.fields, (c) => {
      var u;
      return Fe(), Xe("div", zd, [c !== e.card[e.config.title_field] && c !== e.config.highlighted_field ? (Fe(), Xe("span", Gd, An(c === "creation" ? (u = e.card[c]) == null ? void 0 : u.split(".")[0] : e.card[c]), 1)) : Ur("", true)]);
    }), 256)), Me("div", Wd, [Me("span", { style: Qt(r(e.card[e.config.highlighted_field])), class: "drag" }, An(e.config.fields.includes(e.config.highlighted_field) ? e.card[e.config.highlighted_field] : ""), 5), Me("div", qd, [Me("div", Yd, [we(Hd, { assignments: e.card._assign }, null, 8, ["assignments"]), Me("span", { onClick: l[0] || (l[0] = (c) => o(e.card)), class: "avatar avatar-small" }, [Me("div", Xd, [(Fe(), Xe("svg", Jd, Zd))])])])])])]));
  } };
  var vs = { __name: "IndicatorPill", props: { indicator: String }, setup(e) {
    return (t, n) => (Fe(), Xe("div", { key: e.indicator, "data-action": "indicator", class: Un(["btn btn-default btn-xs indicator-pill", e.indicator]) }, null, 2));
  } };
  var th = { class: "kanban-column-header" };
  var nh = { class: "d-flex align-items-center" };
  var rh = { class: "column-title" };
  var ih = { class: "column-options dropdown pull-right show d-flex align-items-center", style: { gap: "5px" } };
  var oh = Me("a", { "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "true", draggable: "false" }, [Me("svg", { class: "icon icon-sm" }, [Me("use", { href: "#icon-dot-horizontal" })])], -1);
  var sh = { class: "dropdown-menu column-dropdown", "x-placement": "bottom-start" };
  var lh = { class: "button-group" };
  var ch = ["onClick"];
  var ah = { key: 0, class: "kanban-card new-card-area" };
  var uh = 30;
  var fh = { __name: "KanbanColumn", props: { column: { type: Object, required: true, default: () => ({ cards: [] }) }, config: Object, columnIndex: Number }, emits: ["drop"], setup(e, { emit: t }) {
    const n = To(), r = e, i = t, o = un(), s = un();
    function l(h) {
      i("drop", h.event);
    }
    function c(h) {
      const v = window.cur_list.get_args();
      frappe.new_doc(v.doctype, { first_name: o.value, [r.config.field_name]: h }), s.value = void 0, o.value = "";
    }
    function u(h) {
      const v = Oi.find((x) => x.name === h).class;
      return `background-color: var(--kanban-column-${v}); color: var(--text-on-${v});`;
    }
    function d(h, v, x) {
      n.dispatch("setIndicator", { indicator: h, columnIndex: v, board_name: x });
    }
    return (h, v) => {
      var _a2;
      return Fe(), Xe("div", { class: "kanban-column", key: e.column.name, style: Qt(u(e.column.indicator)) }, [Me("div", th, [Me("div", nh, [we(vs, { indicator: (_a2 = Pn(Oi).find((x) => x.name === e.column.indicator).class) != null ? _a2 : "gray" }, null, 8, ["indicator"]), Me("span", rh, An(e.column.column_name), 1)]), Me("div", ih, [oh, Me("ul", sh, [Me("li", lh, [(Fe(true), Xe(ke, null, _r(Pn(Oi), (x) => (Fe(), Xe("div", { onClick: (j) => d(x.name, e.columnIndex, e.config.board_name) }, [we(vs, { indicator: x.class }, null, 8, ["indicator"])], 8, ch))), 256))])]), s.value !== e.column.name ? (Fe(), Xe("div", { key: 0, class: "addcard", onClick: v[0] || (v[0] = (x) => s.value = e.column.name) }, " + ")) : Ur("", true)])]), s.value === e.column.name ? (Fe(), Xe("div", ah, [ll(Me("textarea", { name: "title", "onUpdate:modelValue": v[1] || (v[1] = (x) => o.value = x), onBlur: v[2] || (v[2] = (x) => s.value = false), onKeyup: v[3] || (v[3] = dc((x) => c(e.column.title), ["enter"])) }, null, 544), [[dr, o.value]])])) : Ur("", true), we(Pn(Fd), { modelValue: e.column.cards, "onUpdate:modelValue": v[4] || (v[4] = (x) => e.column.cards = x), onDrop: l, dataKey: "name", id: e.columnIndex, style: { "scrollbar-width": "none" }, handle: ".drag", keeps: uh, group: "kanban", chosenClass: "chosen-card", ghostClass: "ghost-card" }, { item: oi(({ record: x, index: j, dataKey: Y }) => [we(eh, { card: x, config: e.config, columnIndex: e.columnIndex }, null, 8, ["card", "config", "columnIndex"])]), _: 1 }, 8, ["modelValue", "id"])], 4);
    };
  } };
  var dh = { class: "kanban" };
  var hh = { __name: "KanbanBoard", setup(e) {
    const t = To(), n = fr(() => t.getters.getColumns), r = fr(() => t.getters.getConfig), i = frappe.get_route()[3];
    Kn(() => {
      window.refreshKanbanBoard = o, o();
    }), console.log($);
    const o = (l) => {
      t.dispatch("fetchColumns", { board_name: i }).then(() => t.dispatch("fetchKanban", { args: l })).catch((c) => console.error("Error during Kanban setup:", c));
    };
    function s(l) {
      l.newIndex === -1 && console.log("Dropped from index", l.oldIndex), l.oldIndex === -1 && t.dispatch("updateOrder", { fromColumn: l.from.id, toColumn: l.to.id, fromIndex: -1, toIndex: l.newIndex, card: n.value[l.to.id].cards[l.newIndex] });
    }
    return (l, c) => (Fe(), Xe("div", dh, [(Fe(true), Xe(ke, null, _r(n.value, (u, d) => (Fe(), vr(fh, { column: u, columnIndex: d, config: r.value, onDrop: s }, null, 8, ["column", "columnIndex", "config"]))), 256))]));
  } };
  var ph = { __name: "App", setup(e) {
    return (t, n) => (Fe(), vr(hh));
  } };
  var gh = Md({ state: { columns: [], config: { board_name: "", ref_doctype: "", field_name: "", title_field: "", fields: [], highlighted_field: "", highlight_table: "" } }, mutations: { SET_COLUMNS(e, t) {
    e.columns.length === 0 ? e.columns = t : t.forEach((n, r) => {
      e.columns[r] ? e.columns[r] = n.cards ? n : Object.assign(e.columns[r], ...Object.keys(n).filter((i) => i !== "cards").map((i) => ({ [i]: n[i] }))) : e.columns.push(n);
    }), e.columns = e.columns.filter((n) => t.some((r) => r.name === n.name));
  }, MOVE_CARD(e, { fromColumn: t, toColumn: n, fromIndex: r, toIndex: i, card: o }) {
    e.columns[t].cards.splice(r, 1), i !== null ? e.columns[n].cards.splice(i, 0, o) : e.columns[n].cards.push(o);
  }, UPDATE_COLUMN_INDICATOR(e, { columnIndex: t, indicator: n }) {
    e.columns[t].indicator = n;
  }, SET_KANBAN_CONFIG(e, t) {
    e.config = t;
  } }, actions: { async fetchKanban({ commit: e, state: t }, { args: n }) {
    n === void 0 && (n = window.cur_list.get_args());
    try {
      const i = (await frappe.call({ method: "frappe.desk.reportview.get", args: n })).message;
      if (i.length !== 0) {
        const o = t.columns, s = i.keys.findIndex((c) => c === t.config.field_name), l = {};
        Object.values(i.user_info).forEach((c) => {
          l[c.name] = c.fullname;
        }), o.forEach((c) => {
          c.cards = [], i.values.forEach((u) => {
            if (u[s] === c.column_name) {
              const d = mh(i.keys, u, l);
              c.cards.push(d);
            }
          });
        }), e("SET_COLUMNS", o);
      }
    } catch (r) {
      console.error("Error fetching columns:", r);
    }
  }, async fetchColumns({ commit: e }, { board_name: t }) {
    try {
      const r = (await frappe.call({ method: "frappe.client.get", args: { doctype: "Kanban Board", name: t } })).message;
      e("SET_COLUMNS", r.columns);
      const i = r.reference_doctype, o = r.field_name, s = r.custom_highlighted_field, l = r.custom_highlight_table;
      let c = [];
      if (r.fields)
        try {
          c = JSON.parse(r.fields);
        } catch (h) {
          console.error("Error parsing fields:", h);
        }
      else
        c = ["name", "title"];
      const u = frappe.get_meta(i), d = { board_name: t, ref_doctype: i, field_name: o, title_field: u.title_field, fields: c, highlighted_field: s, highlight_table: l };
      e("SET_KANBAN_CONFIG", d);
    } catch (n) {
      console.error("Error fetching columns:", n);
    }
  }, async updateOrder({ commit: e, state: t }, { fromColumn: n, toColumn: r, fromIndex: i, toIndex: o, card: s }) {
    try {
      await frappe.call({ method: "frappe.client.set_value", args: { doctype: t.config.ref_doctype, name: s.name, fieldname: t.config.field_name, value: t.columns[r].column_name } });
    } catch (l) {
      console.error(l);
    }
  }, async setIndicator({ commit: e, state: t }, { indicator: n, columnIndex: r, board_name: i }) {
    try {
      await frappe.call({ method: "frappe.desk.doctype.kanban_board.kanban_board.set_indicator", args: { board_name: i, column_name: t.columns[r].column_name, indicator: n }, callback: function() {
        e("UPDATE_COLUMN_INDICATOR", { columnIndex: r, indicator: n });
      } });
    } catch (o) {
      console.error(`Error updating indicator ${n}:`, o);
    }
  } }, getters: { getColumns: (e) => e.columns, getConfig: (e) => e.config } });
  function mh(e, t, n) {
    try {
      const r = {};
      e.forEach((o, s) => {
        r[o] = t[s];
      });
      const i = {};
      return r._assign && JSON.parse(r._assign).forEach((s) => {
        i[s] = n[s];
      }), r._assign = i, r;
    } catch (r) {
      console.error("Error parsing fields:", r);
    }
  }
  window.frappe = frappe;
  var Pc = yc(ph);
  Pc.use(gh);
  Pc.mount("#kanbanapp");
})();
/*!
* sortable-dnd v0.6.15
* open source under the MIT license
* https://github.com/mfuu/sortable-dnd#readme
*/
/*!
* vue-virtual-draglist v3.3.2
* open source under the MIT license
* https://github.com/mfuu/vue3-virtual-drag-list#readme
*/
/*!
* vuex v4.1.0
* (c) 2022 Evan You
* @license MIT
*/
/*! #__NO_SIDE_EFFECTS__ */
/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/**
* vue v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
//# sourceMappingURL=quick_kanban.bundle.BBAQPC3K.js.map
