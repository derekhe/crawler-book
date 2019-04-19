var __wxAppData = __wxAppData || {};
var __wxRoute = __wxRoute || "";
var __wxRouteBegin = __wxRouteBegin || "";
var __wxAppCode__ = __wxAppCode__ || {};
var global = global || {};
var __WXML_GLOBAL__ = __WXML_GLOBAL__ || {};
var __wxAppCurrentFile__ = __wxAppCurrentFile__ || "";
var Component = Component || function () {};
var definePlugin = definePlugin || function () {};
var requirePlugin = requirePlugin || function () {};
var Behavior = Behavior || function () {};
definePlugin("plugin://wx069ba97219f66d99", function (define, require, module, exports, global, wx, App, Page, Component, Behavior, getApp, getCurrentPages) { /*v0.6vv_20180522_fbi*/
  global.__wcc_version__ = 'v0.6vv_20180522_fbi';
  global.__wcc_version_info__ = {
    "customComponents": true,
    "fixZeroRpx": true,
    "propValueDeepCopy": false
  };
  var $gwxc
  var $gaic = {}
  $gwx_wx069ba97219f66d99 = function (path, global) {
    if (typeof global === 'undefined') global = {};
    if (typeof __WXML_GLOBAL__ === 'undefined') __WXML_GLOBAL__ = {};

    function _(a, b) {
      if (typeof (b) != 'undefined') a.children.push(b);
    }

    function _v(k) {
      if (typeof (k) != 'undefined') return {
        tag: 'virtual',
        'wxKey': k,
        children: []
      };
      return {
        tag: 'virtual',
        children: []
      };
    }

    function _n(tag) {
      $gwxc++;
      if ($gwxc >= 16000) {
        throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'
      };
      return {
        tag: 'wx-' + tag,
        attr: {},
        children: [],
        n: [],
        raw: {},
        generics: {}
      }
    }

    function _p(a, b) {
      b && a.properities.push(b);
    }

    function _s(scope, env, key) {
      return typeof (scope[key]) != 'undefined' ? scope[key] : env[key]
    }

    function _wp(m) {
      console.warn("WXMLRT_$gwx_wx069ba97219f66d99:" + m)
    }

    function _wl(tname, prefix) {
      _wp(prefix + ':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')
    }
    $gwn = console.warn;
    $gwl = console.log;

    function $gwh() {
      function x() {}
      x.prototype = {
        hn: function (obj, all) {
          if (typeof (obj) == 'object') {
            var cnt = 0;
            var any1 = false,
              any2 = false;
            for (var x in obj) {
              any1 = any1 | x === '__value__';
              any2 = any2 | x === '__wxspec__';
              cnt++;
              if (cnt > 2) break;
            }
            return cnt == 2 && any1 && any2 && (all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h') ? "h" : "n";
          }
          return "n";
        },
        nh: function (obj, special) {
          return {
            __value__: obj,
            __wxspec__: special ? special : true
          }
        },
        rv: function (obj) {
          return this.hn(obj, true) === 'n' ? obj : this.rv(obj.__value__);
        },
        hm: function (obj) {
          if (typeof (obj) == 'object') {
            var cnt = 0;
            var any1 = false,
              any2 = false;
            for (var x in obj) {
              any1 = any1 | x === '__value__';
              any2 = any2 | x === '__wxspec__';
              cnt++;
              if (cnt > 2) break;
            }
            return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__));
          }
          return false;
        }
      }
      return new x;
    }
    wh = $gwh();

    function $gstack(s) {
      var tmp = s.split('\n ' + ' ' + ' ' + ' ');
      for (var i = 0; i < tmp.length; ++i) {
        if (0 == i) continue;
        if (")" === tmp[i][tmp[i].length - 1])
          tmp[i] = tmp[i].replace(/\s\(.*\)$/, "");
        else
          tmp[i] = "at anonymous function";
      }
      return tmp.join('\n ' + ' ' + ' ' + ' ');
    }

    function $gwrt(should_pass_type_info) {
      function ArithmeticEv(ops, e, s, g, o) {
        var _f = false;
        var rop = ops[0][1];
        var _a, _b, _c, _d, _aa, _bb;
        switch (rop) {
          case '?:':
            _a = rev(ops[1], e, s, g, o, _f);
            _c = should_pass_type_info && (wh.hn(_a) === 'h');
            _d = wh.rv(_a) ? rev(ops[2], e, s, g, o, _f) : rev(ops[3], e, s, g, o, _f);
            _d = _c && wh.hn(_d) === 'n' ? wh.nh(_d, 'c') : _d;
            return _d;
            break;
          case '&&':
            _a = rev(ops[1], e, s, g, o, _f);
            _c = should_pass_type_info && (wh.hn(_a) === 'h');
            _d = wh.rv(_a) ? rev(ops[2], e, s, g, o, _f) : wh.rv(_a);
            _d = _c && wh.hn(_d) === 'n' ? wh.nh(_d, 'c') : _d;
            return _d;
            break;
          case '||':
            _a = rev(ops[1], e, s, g, o, _f);
            _c = should_pass_type_info && (wh.hn(_a) === 'h');
            _d = wh.rv(_a) ? wh.rv(_a) : rev(ops[2], e, s, g, o, _f);
            _d = _c && wh.hn(_d) === 'n' ? wh.nh(_d, 'c') : _d;
            return _d;
            break;
          case '+':
          case '*':
          case '/':
          case '%':
          case '|':
          case '^':
          case '&':
          case '===':
          case '==':
          case '!=':
          case '!==':
          case '>=':
          case '<=':
          case '>':
          case '<':
          case '<<':
          case '>>':
            _a = rev(ops[1], e, s, g, o, _f);
            _b = rev(ops[2], e, s, g, o, _f);
            _c = should_pass_type_info && (wh.hn(_a) === 'h' || wh.hn(_b) === 'h');
            switch (rop) {
              case '+':
                _d = wh.rv(_a) + wh.rv(_b);
                break;
              case '*':
                _d = wh.rv(_a) * wh.rv(_b);
                break;
              case '/':
                _d = wh.rv(_a) / wh.rv(_b);
                break;
              case '%':
                _d = wh.rv(_a) % wh.rv(_b);
                break;
              case '|':
                _d = wh.rv(_a) | wh.rv(_b);
                break;
              case '^':
                _d = wh.rv(_a) ^ wh.rv(_b);
                break;
              case '&':
                _d = wh.rv(_a) & wh.rv(_b);
                break;
              case '===':
                _d = wh.rv(_a) === wh.rv(_b);
                break;
              case '==':
                _d = wh.rv(_a) == wh.rv(_b);
                break;
              case '!=':
                _d = wh.rv(_a) != wh.rv(_b);
                break;
              case '!==':
                _d = wh.rv(_a) !== wh.rv(_b);
                break;
              case '>=':
                _d = wh.rv(_a) >= wh.rv(_b);
                break;
              case '<=':
                _d = wh.rv(_a) <= wh.rv(_b);
                break;
              case '>':
                _d = wh.rv(_a) > wh.rv(_b);
                break;
              case '<':
                _d = wh.rv(_a) < wh.rv(_b);
                break;
              case '<<':
                _d = wh.rv(_a) << wh.rv(_b);
                break;
              case '>>':
                _d = wh.rv(_a) >> wh.rv(_b);
                break;
              default:
                break;
            }
            return _c ? wh.nh(_d, "c") : _d;
            break;
          case '-':
            _a = ops.length === 3 ? rev(ops[1], e, s, g, o, _f) : 0;
            _b = ops.length === 3 ? rev(ops[2], e, s, g, o, _f) : rev(ops[1], e, s, g, o, _f);
            _c = should_pass_type_info && (wh.hn(_a) === 'h' || wh.hn(_b) === 'h');
            _d = _c ? wh.rv(_a) - wh.rv(_b) : _a - _b;
            return _c ? wh.nh(_d, "c") : _d;
            break;
          case '!':
            _a = rev(ops[1], e, s, g, o, _f);
            _c = should_pass_type_info && (wh.hn(_a) == 'h');
            _d = !wh.rv(_a);
            return _c ? wh.nh(_d, "c") : _d;
          case '~':
            _a = rev(ops[1], e, s, g, o, _f);
            _c = should_pass_type_info && (wh.hn(_a) == 'h');
            _d = ~wh.rv(_a);
            return _c ? wh.nh(_d, "c") : _d;
          default:
            $gwn('unrecognized op' + rop);
        }
      }

      function rev(ops, e, s, g, o, newap) {
        var op = ops[0];
        var _f = false;
        if (typeof newap !== "undefined") o.ap = newap;
        if (typeof (op) === 'object') {
          var vop = op[0];
          var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
          switch (vop) {
            case 2:
              return ArithmeticEv(ops, e, s, g, o);
              break;
            case 4:
              return rev(ops[1], e, s, g, o, _f);
              break;
            case 5:
              switch (ops.length) {
                case 2:
                  _a = rev(ops[1], e, s, g, o, _f);
                  return should_pass_type_info ? [_a] : [wh.rv(_a)];
                  return [_a];
                  break;
                case 1:
                  return [];
                  break;
                default:
                  _a = rev(ops[1], e, s, g, o, _f);
                  _b = rev(ops[2], e, s, g, o, _f);
                  _a.push(
                    should_pass_type_info ?
                    _b :
                    wh.rv(_b)
                  );
                  return _a;
                  break;
              }
              break;
            case 6:
              _a = rev(ops[1], e, s, g, o);
              var ap = o.ap;
              _ta = wh.hn(_a) === 'h';
              _aa = _ta ? wh.rv(_a) : _a;
              o.is_affected |= _ta;
              if (should_pass_type_info) {
                if (_aa === null || typeof (_aa) === 'undefined') {
                  return _ta ? wh.nh(undefined, 'e') : undefined;
                }
                _b = rev(ops[2], e, s, g, o, _f);
                _tb = wh.hn(_b) === 'h';
                _bb = _tb ? wh.rv(_b) : _b;
                o.ap = ap;
                o.is_affected |= _tb;
                if (_bb === null || typeof (_bb) === 'undefined' ||
                  _bb === "__proto__" || _bb === "prototype" || _bb === "caller") {
                  return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
                }
                _d = _aa[_bb];
                if (typeof _d === 'function' && !ap) _d = undefined;
                _td = wh.hn(_d) === 'h';
                o.is_affected |= _td;
                return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
              } else {
                if (_aa === null || typeof (_aa) === 'undefined') {
                  return undefined;
                }
                _b = rev(ops[2], e, s, g, o, _f);
                _tb = wh.hn(_b) === 'h';
                _bb = _tb ? wh.rv(_b) : _b;
                o.ap = ap;
                o.is_affected |= _tb;
                if (_bb === null || typeof (_bb) === 'undefined' ||
                  _bb === "__proto__" || _bb === "prototype" || _bb === "caller") {
                  return undefined;
                }
                _d = _aa[_bb];
                if (typeof _d === 'function' && !ap) _d = undefined;
                _td = wh.hn(_d) === 'h';
                o.is_affected |= _td;
                return _td ? wh.rv(_d) : _d;
              }
            case 7:
              switch (ops[1][0]) {
                case 11:
                  o.is_affected |= wh.hn(g) === 'h';
                  return g;
                case 3:
                  _s = wh.rv(s);
                  _e = wh.rv(e);
                  _b = ops[1][1];
                  if (g && g.f && g.f.hasOwnProperty(_b)) {
                    _a = g.f;
                    o.ap = true;
                  } else {
                    _a = _s && _s.hasOwnProperty(_b) ?
                      s : (_e && _e.hasOwnProperty(_b) ? e : undefined);
                  }
                  if (should_pass_type_info) {
                    if (_a) {
                      _ta = wh.hn(_a) === 'h';
                      _aa = _ta ? wh.rv(_a) : _a;
                      _d = _aa[_b];
                      _td = wh.hn(_d) === 'h';
                      o.is_affected |= _ta || _td;
                      _d = _ta && !_td ? wh.nh(_d, 'e') : _d;
                      return _d;
                    }
                  } else {
                    if (_a) {
                      _ta = wh.hn(_a) === 'h';
                      _aa = _ta ? wh.rv(_a) : _a;
                      _d = _aa[_b];
                      _td = wh.hn(_d) === 'h';
                      o.is_affected |= _ta || _td;
                      return wh.rv(_d);
                    }
                  }
                  return undefined;
              }
              break;
            case 8:
              _a = {};
              _a[ops[1]] = rev(ops[2], e, s, g, o, _f);
              return _a;
              break;
            case 9:
              _a = rev(ops[1], e, s, g, o, _f);
              _b = rev(ops[2], e, s, g, o, _f);

              function merge(_a, _b, _ow) {
                var ka, _bbk;
                _ta = wh.hn(_a) === 'h';
                _tb = wh.hn(_b) === 'h';
                _aa = wh.rv(_a);
                _bb = wh.rv(_b);
                for (var k in _bb) {
                  if (_ow || !_aa.hasOwnProperty(k)) {
                    _aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k], 'e') : _bb[k]) : wh.rv(_bb[k]);
                  }
                }
                return _a;
              }
              var _c = _a
              var _ow = true
              if (typeof (ops[1][0]) === "object" && ops[1][0][0] === 10) {
                _a = _b
                _b = _c
                _ow = false
              }
              if (typeof (ops[1][0]) === "object" && ops[1][0][0] === 10) {
                var _r = {}
                return merge(merge(_r, _a, _ow), _b, _ow);
              } else
                return merge(_a, _b, _ow);
              break;
            case 10:
              _a = rev(ops[1], e, s, g, o, _f);
              _a = should_pass_type_info ? _a : wh.rv(_a);
              return _a;
              break;
            case 12:
              var _r;
              _a = rev(ops[1], e, s, g, o);
              if (!o.ap) {
                return should_pass_type_info && wh.hn(_a) === 'h' ? wh.nh(_r, 'f') : _r;
              }
              var ap = o.ap;
              _b = rev(ops[2], e, s, g, o, _f);
              o.ap = ap;
              _ta = wh.hn(_a) === 'h';
              _tb = _ca(_b);
              _aa = wh.rv(_a);
              _bb = wh.rv(_b);
              snap_bb = $gdc(_bb, "nv_");
              try {
                _r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
              } catch (e) {
                e.message = e.message.replace(/nv_/g, "");
                e.stack = e.stack.substring(0, e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
                e.stack = e.stack.replace(/\snv_/g, " ");
                e.stack = $gstack(e.stack);
                if ("undefined" !== typeof debugInfo)
                  e.stack += "\n " + " " + " " + " at " + debugInfo[g.opindex][0] + ":" + debugInfo[g.opindex][1] + ":" + debugInfo[g.opindex][2];
                throw e;
              }
              return should_pass_type_info && (_tb || _ta) ? wh.nh(_r, 'f') : _r;
          }
        } else {
          if (op === 3 || op === 1) return ops[1];
          else if (op === 11) {
            var _a = '';
            for (var i = 1; i < ops.length; i++) {
              var xp = wh.rv(rev(ops[i], e, s, g, o, _f));
              _a += typeof (xp) === 'undefined' ? '' : xp;
            }
            return _a;
          }
        }
      }
      return rev;
    }
    gra = $gwrt(true);
    grb = $gwrt(false);

    function TestTest(expr, ops, e, s, g, expect_a, expect_b, expect_affected) {
      {
        var o = {
          is_affected: false
        };
        var a = gra(ops, e, s, g, o);
        if (JSON.stringify(a) != JSON.stringify(expect_a) ||
          o.is_affected != expect_affected) {
          console.warn("A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify(expect_a) + ", " + expect_affected + " is expected");
        }
      } {
        var o = {
          is_affected: false
        };
        var a = grb(ops, e, s, g, o);
        if (JSON.stringify(a) != JSON.stringify(expect_b) ||
          o.is_affected != expect_affected) {
          console.warn("B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify(expect_b) + ", " + expect_affected + " is expected");
        }
      }
    }

    function wfor(to_iter, func, env, _s, global, father, itemname, indexname, keyname) {
      var _n = wh.hn(to_iter) === 'n';
      var scope = wh.rv(_s);
      var has_old_item = scope.hasOwnProperty(itemname);
      var has_old_index = scope.hasOwnProperty(indexname);
      var old_item = scope[itemname];
      var old_index = scope[indexname];
      var full = Object.prototype.toString.call(wh.rv(to_iter));
      var type = full[8];
      if (type === 'N' && full[10] === 'l') type = 'X';
      var _y;
      if (_n) {
        if (type === 'A') {
          var r_iter_item;
          for (var i = 0; i < to_iter.length; i++) {
            scope[itemname] = to_iter[i];
            scope[indexname] = _n ? i : wh.nh(i, 'h');
            r_iter_item = wh.rv(to_iter[i]);
            var key = keyname && r_iter_item ? (keyname === "*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
            _y = _v(key);
            _(father, _y);
            func(env, scope, _y, global);
          }
        } else if (type === 'O') {
          var i = 0;
          var r_iter_item;
          for (var k in to_iter) {
            scope[itemname] = to_iter[k];
            scope[indexname] = _n ? k : wh.nh(k, 'h');
            r_iter_item = wh.rv(to_iter[k]);
            var key = keyname && r_iter_item ? (keyname === "*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
            _y = _v(key);
            _(father, _y);
            func(env, scope, _y, global);
            i++;
          }
        } else if (type === 'S') {
          for (var i = 0; i < to_iter.length; i++) {
            scope[itemname] = to_iter[i];
            scope[indexname] = _n ? i : wh.nh(i, 'h');
            _y = _v(to_iter[i] + i);
            _(father, _y);
            func(env, scope, _y, global);
          }
        } else if (type === 'N') {
          for (var i = 0; i < to_iter; i++) {
            scope[itemname] = i;
            scope[indexname] = _n ? i : wh.nh(i, 'h');
            _y = _v(i);
            _(father, _y);
            func(env, scope, _y, global);
          }
        } else {}
      } else {
        var r_to_iter = wh.rv(to_iter);
        var r_iter_item, iter_item;
        if (type === 'A') {
          for (var i = 0; i < r_to_iter.length; i++) {
            iter_item = r_to_iter[i];
            iter_item = wh.hn(iter_item) === 'n' ? wh.nh(iter_item, 'h') : iter_item;
            r_iter_item = wh.rv(iter_item);
            scope[itemname] = iter_item
            scope[indexname] = _n ? i : wh.nh(i, 'h');
            var key = keyname && r_iter_item ? (keyname === "*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
            _y = _v(key);
            _(father, _y);
            func(env, scope, _y, global);
          }
        } else if (type === 'O') {
          var i = 0;
          for (var k in r_to_iter) {
            iter_item = r_to_iter[k];
            iter_item = wh.hn(iter_item) === 'n' ? wh.nh(iter_item, 'h') : iter_item;
            r_iter_item = wh.rv(iter_item);
            scope[itemname] = iter_item;
            scope[indexname] = _n ? k : wh.nh(k, 'h');
            var key = keyname && r_iter_item ? (keyname === "*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
            _y = _v(key);
            _(father, _y);
            func(env, scope, _y, global);
            i++
          }
        } else if (type === 'S') {
          for (var i = 0; i < r_to_iter.length; i++) {
            iter_item = wh.nh(r_to_iter[i], 'h');
            scope[itemname] = iter_item;
            scope[indexname] = _n ? i : wh.nh(i, 'h');
            _y = _v(to_iter[i] + i);
            _(father, _y);
            func(env, scope, _y, global);
          }
        } else if (type === 'N') {
          for (var i = 0; i < r_to_iter; i++) {
            iter_item = wh.nh(i, 'h');
            scope[itemname] = iter_item;
            scope[indexname] = _n ? i : wh.nh(i, 'h');
            _y = _v(i);
            _(father, _y);
            func(env, scope, _y, global);
          }
        } else {}
      }
      if (has_old_item) {
        scope[itemname] = old_item;
      } else {
        delete scope[itemname];
      }
      if (has_old_index) {
        scope[indexname] = old_index;
      } else {
        delete scope[indexname];
      }
    }

    function _ca(o) {
      if (wh.hn(o) == 'h') return true;
      if (typeof o !== "object") return false;
      for (var i in o) {
        if (o.hasOwnProperty(i)) {
          if (_ca(o[i])) return true;
        }
      }
      return false;
    }

    function _da(node, attrname, opindex, raw, o) {
      var isaffected = false;
      if (o.is_affected || _ca(raw)) {
        node.n.push(attrname);
        node.raw[attrname] = raw;
        var value = $gdc(raw, "", 2);
        return value;
      } else {
        var value = $gdc(raw, "", 2);
        return value;
      }
    }

    function _r(node, attrname, opindex, env, scope, global) {
      global.opindex = opindex;
      var o = {},
        _env;
      var a = grb(z[opindex], env, scope, global, o);
      a = _da(node, attrname, opindex, a, o);
      node.attr[attrname] = a;
    }

    function _o(opindex, env, scope, global) {
      global.opindex = opindex;
      var nothing = {};
      var r = grb(z[opindex], env, scope, global, nothing);
      return (r && r.constructor === Function) ? undefined : r;
    }

    function _1(opindex, env, scope, global, o) {
      var o = o || {};
      global.opindex = opindex;
      return gra(z[opindex], env, scope, global, o);
    }

    function _2(opindex, func, env, scope, global, father, itemname, indexname, keyname) {
      var o = {};
      var to_iter = _1(opindex, env, scope, global);
      wfor(to_iter, func, env, scope, global, father, itemname, indexname, keyname);
    }


    function _m(tag, attrs, generics, env, scope, global) {
      var tmp = _n(tag);
      var base = 0;
      for (var i = 0; i < attrs.length; i += 2) {
        if (base + attrs[i + 1] < 0) {
          tmp.attr[attrs[i]] = true;
        } else {
          _r(tmp, attrs[i], base + attrs[i + 1], env, scope, global);
          if (base === 0) base = attrs[i + 1];
        }
      }
      for (var i = 0; i < generics.length; i += 2) {
        if (base + generics[i + 1] < 0) {
          tmp.generics[generics[i]] = "";
        } else {
          var $t = grb(z[base + generics[i + 1]], env, scope, global);
          if ($t != "") $t = "wx-" + $t;
          tmp.generics[generics[i]] = $t;
          if (base === 0) base = generics[i + 1];
        }
      }
      return tmp;
    }

    var nf_init = function () {
      if (typeof __WXML_GLOBAL__ === "undefined" || undefined === __WXML_GLOBAL__.wxs_nf_init) {
        nf_init_Object();
        nf_init_Function();
        nf_init_Array();
        nf_init_String();
        nf_init_Boolean();
        nf_init_Number();
        nf_init_Math();
        nf_init_Date();
        nf_init_RegExp();
      }
      if (typeof __WXML_GLOBAL__ !== "undefined") __WXML_GLOBAL__.wxs_nf_init = true;
    };
    var nf_init_Object = function () {
      Object.defineProperty(Object.prototype, "nv_constructor", {
        writable: true,
        value: "Object"
      })
      Object.defineProperty(Object.prototype, "nv_toString", {
        writable: true,
        value: function () {
          return "[object Object]"
        }
      })
    }
    var nf_init_Function = function () {
      Object.defineProperty(Function.prototype, "nv_constructor", {
        writable: true,
        value: "Function"
      })
      Object.defineProperty(Function.prototype, "nv_length", {
        get: function () {
          return this.length;
        },
        set: function () {}
      });
      Object.defineProperty(Function.prototype, "nv_toString", {
        writable: true,
        value: function () {
          return "[function Function]"
        }
      })
    }
    var nf_init_Array = function () {
      Object.defineProperty(Array.prototype, "nv_toString", {
        writable: true,
        value: function () {
          return this.nv_join();
        }
      })
      Object.defineProperty(Array.prototype, "nv_join", {
        writable: true,
        value: function (s) {
          s = undefined == s ? ',' : s;
          var r = "";
          for (var i = 0; i < this.length; ++i) {
            if (0 != i) r += s;
            if (null == this[i] || undefined == this[i]) r += '';
            else if (typeof this[i] == 'function') r += this[i].nv_toString();
            else if (typeof this[i] == 'object' && this[i].nv_constructor === "Array") r += this[i].nv_join();
            else r += this[i].toString();
          }
          return r;
        }
      })
      Object.defineProperty(Array.prototype, "nv_constructor", {
        writable: true,
        value: "Array"
      })
      Object.defineProperty(Array.prototype, "nv_concat", {
        writable: true,
        value: Array.prototype.concat
      })
      Object.defineProperty(Array.prototype, "nv_pop", {
        writable: true,
        value: Array.prototype.pop
      })
      Object.defineProperty(Array.prototype, "nv_push", {
        writable: true,
        value: Array.prototype.push
      })
      Object.defineProperty(Array.prototype, "nv_reverse", {
        writable: true,
        value: Array.prototype.reverse
      })
      Object.defineProperty(Array.prototype, "nv_shift", {
        writable: true,
        value: Array.prototype.shift
      })
      Object.defineProperty(Array.prototype, "nv_slice", {
        writable: true,
        value: Array.prototype.slice
      })
      Object.defineProperty(Array.prototype, "nv_sort", {
        writable: true,
        value: Array.prototype.sort
      })
      Object.defineProperty(Array.prototype, "nv_splice", {
        writable: true,
        value: Array.prototype.splice
      })
      Object.defineProperty(Array.prototype, "nv_unshift", {
        writable: true,
        value: Array.prototype.unshift
      })
      Object.defineProperty(Array.prototype, "nv_indexOf", {
        writable: true,
        value: Array.prototype.indexOf
      })
      Object.defineProperty(Array.prototype, "nv_lastIndexOf", {
        writable: true,
        value: Array.prototype.lastIndexOf
      })
      Object.defineProperty(Array.prototype, "nv_every", {
        writable: true,
        value: Array.prototype.every
      })
      Object.defineProperty(Array.prototype, "nv_some", {
        writable: true,
        value: Array.prototype.some
      })
      Object.defineProperty(Array.prototype, "nv_forEach", {
        writable: true,
        value: Array.prototype.forEach
      })
      Object.defineProperty(Array.prototype, "nv_map", {
        writable: true,
        value: Array.prototype.map
      })
      Object.defineProperty(Array.prototype, "nv_filter", {
        writable: true,
        value: Array.prototype.filter
      })
      Object.defineProperty(Array.prototype, "nv_reduce", {
        writable: true,
        value: Array.prototype.reduce
      })
      Object.defineProperty(Array.prototype, "nv_reduceRight", {
        writable: true,
        value: Array.prototype.reduceRight
      })
      Object.defineProperty(Array.prototype, "nv_length", {
        get: function () {
          return this.length;
        },
        set: function (value) {
          this.length = value;
        }
      });
    }
    var nf_init_String = function () {
      Object.defineProperty(String.prototype, "nv_constructor", {
        writable: true,
        value: "String"
      })
      Object.defineProperty(String.prototype, "nv_toString", {
        writable: true,
        value: String.prototype.toString
      })
      Object.defineProperty(String.prototype, "nv_valueOf", {
        writable: true,
        value: String.prototype.valueOf
      })
      Object.defineProperty(String.prototype, "nv_charAt", {
        writable: true,
        value: String.prototype.charAt
      })
      Object.defineProperty(String.prototype, "nv_charCodeAt", {
        writable: true,
        value: String.prototype.charCodeAt
      })
      Object.defineProperty(String.prototype, "nv_concat", {
        writable: true,
        value: String.prototype.concat
      })
      Object.defineProperty(String.prototype, "nv_indexOf", {
        writable: true,
        value: String.prototype.indexOf
      })
      Object.defineProperty(String.prototype, "nv_lastIndexOf", {
        writable: true,
        value: String.prototype.lastIndexOf
      })
      Object.defineProperty(String.prototype, "nv_localeCompare", {
        writable: true,
        value: String.prototype.localeCompare
      })
      Object.defineProperty(String.prototype, "nv_match", {
        writable: true,
        value: String.prototype.match
      })
      Object.defineProperty(String.prototype, "nv_replace", {
        writable: true,
        value: String.prototype.replace
      })
      Object.defineProperty(String.prototype, "nv_search", {
        writable: true,
        value: String.prototype.search
      })
      Object.defineProperty(String.prototype, "nv_slice", {
        writable: true,
        value: String.prototype.slice
      })
      Object.defineProperty(String.prototype, "nv_split", {
        writable: true,
        value: String.prototype.split
      })
      Object.defineProperty(String.prototype, "nv_substring", {
        writable: true,
        value: String.prototype.substring
      })
      Object.defineProperty(String.prototype, "nv_toLowerCase", {
        writable: true,
        value: String.prototype.toLowerCase
      })
      Object.defineProperty(String.prototype, "nv_toLocaleLowerCase", {
        writable: true,
        value: String.prototype.toLocaleLowerCase
      })
      Object.defineProperty(String.prototype, "nv_toUpperCase", {
        writable: true,
        value: String.prototype.toUpperCase
      })
      Object.defineProperty(String.prototype, "nv_toLocaleUpperCase", {
        writable: true,
        value: String.prototype.toLocaleUpperCase
      })
      Object.defineProperty(String.prototype, "nv_trim", {
        writable: true,
        value: String.prototype.trim
      })
      Object.defineProperty(String.prototype, "nv_length", {
        get: function () {
          return this.length;
        },
        set: function (value) {
          this.length = value;
        }
      });
    }
    var nf_init_Boolean = function () {
      Object.defineProperty(Boolean.prototype, "nv_constructor", {
        writable: true,
        value: "Boolean"
      })
      Object.defineProperty(Boolean.prototype, "nv_toString", {
        writable: true,
        value: Boolean.prototype.toString
      })
      Object.defineProperty(Boolean.prototype, "nv_valueOf", {
        writable: true,
        value: Boolean.prototype.valueOf
      })
    }
    var nf_init_Number = function () {
      Object.defineProperty(Number, "nv_MAX_VALUE", {
        writable: false,
        value: Number.MAX_VALUE
      })
      Object.defineProperty(Number, "nv_MIN_VALUE", {
        writable: false,
        value: Number.MIN_VALUE
      })
      Object.defineProperty(Number, "nv_NEGATIVE_INFINITY", {
        writable: false,
        value: Number.NEGATIVE_INFINITY
      })
      Object.defineProperty(Number, "nv_POSITIVE_INFINITY", {
        writable: false,
        value: Number.POSITIVE_INFINITY
      })
      Object.defineProperty(Number.prototype, "nv_constructor", {
        writable: true,
        value: "Number"
      })
      Object.defineProperty(Number.prototype, "nv_toString", {
        writable: true,
        value: Number.prototype.toString
      })
      Object.defineProperty(Number.prototype, "nv_toLocaleString", {
        writable: true,
        value: Number.prototype.toLocaleString
      })
      Object.defineProperty(Number.prototype, "nv_valueOf", {
        writable: true,
        value: Number.prototype.valueOf
      })
      Object.defineProperty(Number.prototype, "nv_toFixed", {
        writable: true,
        value: Number.prototype.toFixed
      })
      Object.defineProperty(Number.prototype, "nv_toExponential", {
        writable: true,
        value: Number.prototype.toExponential
      })
      Object.defineProperty(Number.prototype, "nv_toPrecision", {
        writable: true,
        value: Number.prototype.toPrecision
      })
    }
    var nf_init_Math = function () {
      Object.defineProperty(Math, "nv_E", {
        writable: false,
        value: Math.E
      })
      Object.defineProperty(Math, "nv_LN10", {
        writable: false,
        value: Math.LN10
      })
      Object.defineProperty(Math, "nv_LN2", {
        writable: false,
        value: Math.LN2
      })
      Object.defineProperty(Math, "nv_LOG2E", {
        writable: false,
        value: Math.LOG2E
      })
      Object.defineProperty(Math, "nv_LOG10E", {
        writable: false,
        value: Math.LOG10E
      })
      Object.defineProperty(Math, "nv_PI", {
        writable: false,
        value: Math.PI
      })
      Object.defineProperty(Math, "nv_SQRT1_2", {
        writable: false,
        value: Math.SQRT1_2
      })
      Object.defineProperty(Math, "nv_SQRT2", {
        writable: false,
        value: Math.SQRT2
      })
      Object.defineProperty(Math, "nv_abs", {
        writable: false,
        value: Math.abs
      })
      Object.defineProperty(Math, "nv_acos", {
        writable: false,
        value: Math.acos
      })
      Object.defineProperty(Math, "nv_asin", {
        writable: false,
        value: Math.asin
      })
      Object.defineProperty(Math, "nv_atan", {
        writable: false,
        value: Math.atan
      })
      Object.defineProperty(Math, "nv_atan2", {
        writable: false,
        value: Math.atan2
      })
      Object.defineProperty(Math, "nv_ceil", {
        writable: false,
        value: Math.ceil
      })
      Object.defineProperty(Math, "nv_cos", {
        writable: false,
        value: Math.cos
      })
      Object.defineProperty(Math, "nv_exp", {
        writable: false,
        value: Math.exp
      })
      Object.defineProperty(Math, "nv_floor", {
        writable: false,
        value: Math.floor
      })
      Object.defineProperty(Math, "nv_log", {
        writable: false,
        value: Math.log
      })
      Object.defineProperty(Math, "nv_max", {
        writable: false,
        value: Math.max
      })
      Object.defineProperty(Math, "nv_min", {
        writable: false,
        value: Math.min
      })
      Object.defineProperty(Math, "nv_pow", {
        writable: false,
        value: Math.pow
      })
      Object.defineProperty(Math, "nv_random", {
        writable: false,
        value: Math.random
      })
      Object.defineProperty(Math, "nv_round", {
        writable: false,
        value: Math.round
      })
      Object.defineProperty(Math, "nv_sin", {
        writable: false,
        value: Math.sin
      })
      Object.defineProperty(Math, "nv_sqrt", {
        writable: false,
        value: Math.sqrt
      })
      Object.defineProperty(Math, "nv_tan", {
        writable: false,
        value: Math.tan
      })
    }
    var nf_init_Date = function () {
      Object.defineProperty(Date.prototype, "nv_constructor", {
        writable: true,
        value: "Date"
      })
      Object.defineProperty(Date, "nv_parse", {
        writable: true,
        value: Date.parse
      })
      Object.defineProperty(Date, "nv_UTC", {
        writable: true,
        value: Date.UTC
      })
      Object.defineProperty(Date, "nv_now", {
        writable: true,
        value: Date.now
      })
      Object.defineProperty(Date.prototype, "nv_toString", {
        writable: true,
        value: Date.prototype.toString
      })
      Object.defineProperty(Date.prototype, "nv_toDateString", {
        writable: true,
        value: Date.prototype.toDateString
      })
      Object.defineProperty(Date.prototype, "nv_toTimeString", {
        writable: true,
        value: Date.prototype.toTimeString
      })
      Object.defineProperty(Date.prototype, "nv_toLocaleString", {
        writable: true,
        value: Date.prototype.toLocaleString
      })
      Object.defineProperty(Date.prototype, "nv_toLocaleDateString", {
        writable: true,
        value: Date.prototype.toLocaleDateString
      })
      Object.defineProperty(Date.prototype, "nv_toLocaleTimeString", {
        writable: true,
        value: Date.prototype.toLocaleTimeString
      })
      Object.defineProperty(Date.prototype, "nv_valueOf", {
        writable: true,
        value: Date.prototype.valueOf
      })
      Object.defineProperty(Date.prototype, "nv_getTime", {
        writable: true,
        value: Date.prototype.getTime
      })
      Object.defineProperty(Date.prototype, "nv_getFullYear", {
        writable: true,
        value: Date.prototype.getFullYear
      })
      Object.defineProperty(Date.prototype, "nv_getUTCFullYear", {
        writable: true,
        value: Date.prototype.getUTCFullYear
      })
      Object.defineProperty(Date.prototype, "nv_getMonth", {
        writable: true,
        value: Date.prototype.getMonth
      })
      Object.defineProperty(Date.prototype, "nv_getUTCMonth", {
        writable: true,
        value: Date.prototype.getUTCMonth
      })
      Object.defineProperty(Date.prototype, "nv_getDate", {
        writable: true,
        value: Date.prototype.getDate
      })
      Object.defineProperty(Date.prototype, "nv_getUTCDate", {
        writable: true,
        value: Date.prototype.getUTCDate
      })
      Object.defineProperty(Date.prototype, "nv_getDay", {
        writable: true,
        value: Date.prototype.getDay
      })
      Object.defineProperty(Date.prototype, "nv_getUTCDay", {
        writable: true,
        value: Date.prototype.getUTCDay
      })
      Object.defineProperty(Date.prototype, "nv_getHours", {
        writable: true,
        value: Date.prototype.getHours
      })
      Object.defineProperty(Date.prototype, "nv_getUTCHours", {
        writable: true,
        value: Date.prototype.getUTCHours
      })
      Object.defineProperty(Date.prototype, "nv_getMinutes", {
        writable: true,
        value: Date.prototype.getMinutes
      })
      Object.defineProperty(Date.prototype, "nv_getUTCMinutes", {
        writable: true,
        value: Date.prototype.getUTCMinutes
      })
      Object.defineProperty(Date.prototype, "nv_getSeconds", {
        writable: true,
        value: Date.prototype.getSeconds
      })
      Object.defineProperty(Date.prototype, "nv_getUTCSeconds", {
        writable: true,
        value: Date.prototype.getUTCSeconds
      })
      Object.defineProperty(Date.prototype, "nv_getMilliseconds", {
        writable: true,
        value: Date.prototype.getMilliseconds
      })
      Object.defineProperty(Date.prototype, "nv_getUTCMilliseconds", {
        writable: true,
        value: Date.prototype.getUTCMilliseconds
      })
      Object.defineProperty(Date.prototype, "nv_getTimezoneOffset", {
        writable: true,
        value: Date.prototype.getTimezoneOffset
      })
      Object.defineProperty(Date.prototype, "nv_setTime", {
        writable: true,
        value: Date.prototype.setTime
      })
      Object.defineProperty(Date.prototype, "nv_setMilliseconds", {
        writable: true,
        value: Date.prototype.setMilliseconds
      })
      Object.defineProperty(Date.prototype, "nv_setUTCMilliseconds", {
        writable: true,
        value: Date.prototype.setUTCMilliseconds
      })
      Object.defineProperty(Date.prototype, "nv_setSeconds", {
        writable: true,
        value: Date.prototype.setSeconds
      })
      Object.defineProperty(Date.prototype, "nv_setUTCSeconds", {
        writable: true,
        value: Date.prototype.setUTCSeconds
      })
      Object.defineProperty(Date.prototype, "nv_setMinutes", {
        writable: true,
        value: Date.prototype.setMinutes
      })
      Object.defineProperty(Date.prototype, "nv_setUTCMinutes", {
        writable: true,
        value: Date.prototype.setUTCMinutes
      })
      Object.defineProperty(Date.prototype, "nv_setHours", {
        writable: true,
        value: Date.prototype.setHours
      })
      Object.defineProperty(Date.prototype, "nv_setUTCHours", {
        writable: true,
        value: Date.prototype.setUTCHours
      })
      Object.defineProperty(Date.prototype, "nv_setDate", {
        writable: true,
        value: Date.prototype.setDate
      })
      Object.defineProperty(Date.prototype, "nv_setUTCDate", {
        writable: true,
        value: Date.prototype.setUTCDate
      })
      Object.defineProperty(Date.prototype, "nv_setMonth", {
        writable: true,
        value: Date.prototype.setMonth
      })
      Object.defineProperty(Date.prototype, "nv_setUTCMonth", {
        writable: true,
        value: Date.prototype.setUTCMonth
      })
      Object.defineProperty(Date.prototype, "nv_setFullYear", {
        writable: true,
        value: Date.prototype.setFullYear
      })
      Object.defineProperty(Date.prototype, "nv_setUTCFullYear", {
        writable: true,
        value: Date.prototype.setUTCFullYear
      })
      Object.defineProperty(Date.prototype, "nv_toUTCString", {
        writable: true,
        value: Date.prototype.toUTCString
      })
      Object.defineProperty(Date.prototype, "nv_toISOString", {
        writable: true,
        value: Date.prototype.toISOString
      })
      Object.defineProperty(Date.prototype, "nv_toJSON", {
        writable: true,
        value: Date.prototype.toJSON
      })
    }
    var nf_init_RegExp = function () {
      Object.defineProperty(RegExp.prototype, "nv_constructor", {
        writable: true,
        value: "RegExp"
      })
      Object.defineProperty(RegExp.prototype, "nv_exec", {
        writable: true,
        value: RegExp.prototype.exec
      })
      Object.defineProperty(RegExp.prototype, "nv_test", {
        writable: true,
        value: RegExp.prototype.test
      })
      Object.defineProperty(RegExp.prototype, "nv_toString", {
        writable: true,
        value: RegExp.prototype.toString
      })
      Object.defineProperty(RegExp.prototype, "nv_source", {
        get: function () {
          return this.source;
        },
        set: function () {}
      });
      Object.defineProperty(RegExp.prototype, "nv_global", {
        get: function () {
          return this.global;
        },
        set: function () {}
      });
      Object.defineProperty(RegExp.prototype, "nv_ignoreCase", {
        get: function () {
          return this.ignoreCase;
        },
        set: function () {}
      });
      Object.defineProperty(RegExp.prototype, "nv_multiline", {
        get: function () {
          return this.multiline;
        },
        set: function () {}
      });
      Object.defineProperty(RegExp.prototype, "nv_lastIndex", {
        get: function () {
          return this.lastIndex;
        },
        set: function (v) {
          this.lastIndex = v;
        }
      });
    }
    nf_init();
    var nv_getDate = function () {
      var args = Array.prototype.slice.call(arguments);
      args.unshift(Date);
      return new(Function.prototype.bind.apply(Date, args));
    }
    var nv_getRegExp = function () {
      var args = Array.prototype.slice.call(arguments);
      args.unshift(RegExp);
      return new(Function.prototype.bind.apply(RegExp, args));
    }
    var nv_console = {}
    nv_console.nv_log = function () {
      var res = "WXSRT:";
      for (var i = 0; i < arguments.length; ++i) res += arguments[i] + " ";
      console.log(res);
    }
    var nv_parseInt = parseInt,
      nv_parseFloat = parseFloat,
      nv_isNaN = isNaN,
      nv_isFinite = isFinite,
      nv_decodeURI = decodeURI,
      nv_decodeURIComponent = decodeURIComponent,
      nv_encodeURI = encodeURI,
      nv_encodeURIComponent = encodeURIComponent;

    function $gdc(o, p, r) {
      o = wh.rv(o);
      if (o === null || o === undefined) return o;
      if (o.constructor === String || o.constructor === Boolean || o.constructor === Number) return o;
      if (o.constructor === Object) {
        var copy = {};
        for (var k in o)
          if (o.hasOwnProperty(k))
            if (undefined === p) copy[k.substring(3)] = $gdc(o[k], p, r);
            else copy[p + k] = $gdc(o[k], p, r);
        return copy;
      }
      if (o.constructor === Array) {
        var copy = [];
        for (var i = 0; i < o.length; i++) copy.push($gdc(o[i], p, r));
        return copy;
      }
      if (o.constructor === Date) {
        var copy = new Date();
        copy.setTime(o.getTime());
        return copy;
      }
      if (o.constructor === RegExp) {
        var f = "";
        if (o.global) f += "g";
        if (o.ignoreCase) f += "i";
        if (o.multiline) f += "m";
        return (new RegExp(o.source, f));
      }
      if (r && o.constructor === Function) {
        if (r == 1) return $gdc(o(), undefined, 2);
        if (r == 2) return o;
      }
      return null;
    }
    var nv_JSON = {}
    nv_JSON.nv_stringify = function (o) {
      JSON.stringify(o);
      return JSON.stringify($gdc(o));
    }
    nv_JSON.nv_parse = function (o) {
      if (o === undefined) return undefined;
      var t = JSON.parse(o);
      return $gdc(t, 'nv_');
    }

    function _af(p, a, c) {
      p.extraAttr = {
        "t_action": a,
        "t_cid": c
      };
    }

    function _ai(i, p, e, me, r, c) {
      var x = _grp(p, e, me);
      if (x) i.push(x);
      else {
        i.push('');
        _wp(me + ':import:' + r + ':' + c + ': Path `' + p + '` not found from `' + me + '`.')
      }
    }

    function _grp(p, e, me) {
      if (p[0] != '/') {
        var mepart = me.split('/');
        mepart.pop();
        var ppart = p.split('/');
        for (var i = 0; i < ppart.length; i++) {
          if (ppart[i] == '..') mepart.pop();
          else if (!ppart[i] || ppart[i] == '.') continue;
          else mepart.push(ppart[i]);
        }
        p = mepart.join('/');
      }
      if (me[0] == '.' && p[0] == '/') p = '.' + p;
      if (e[p]) return p;
      if (e[p + '.wxml']) return p + '.wxml';
    }

    function _gd(p, c, e, d) {
      if (!c) return;
      if (d[p][c]) return d[p][c];
      for (var x = e[p].i.length - 1; x >= 0; x--) {
        if (e[p].i[x] && d[e[p].i[x]][c]) return d[e[p].i[x]][c]
      };
      for (var x = e[p].ti.length - 1; x >= 0; x--) {
        var q = _grp(e[p].ti[x], e, p);
        if (q && d[q][c]) return d[q][c]
      }
      var ii = _gapi(e, p);
      for (var x = 0; x < ii.length; x++) {
        if (ii[x] && d[ii[x]][c]) return d[ii[x]][c]
      }
      for (var k = e[p].j.length - 1; k >= 0; k--)
        if (e[p].j[k]) {
          for (var q = e[e[p].j[k]].ti.length - 1; q >= 0; q--) {
            var pp = _grp(e[e[p].j[k]].ti[q], e, p);
            if (pp && d[pp][c]) {
              return d[pp][c]
            }
          }
        }
    }

    function _gapi(e, p) {
      if (!p) return [];
      if ($gaic[p]) {
        return $gaic[p]
      };
      var ret = [],
        q = [],
        h = 0,
        t = 0,
        put = {},
        visited = {};
      q.push(p);
      visited[p] = true;
      t++;
      while (h < t) {
        var a = q[h++];
        for (var i = 0; i < e[a].ic.length; i++) {
          var nd = e[a].ic[i];
          var np = _grp(nd, e, a);
          if (np && !visited[np]) {
            visited[np] = true;
            q.push(np);
            t++;
          }
        }
        for (var i = 0; a != p && i < e[a].ti.length; i++) {
          var ni = e[a].ti[i];
          var nm = _grp(ni, e, a);
          if (nm && !put[nm]) {
            put[nm] = true;
            ret.push(nm);
          }
        }
      }
      $gaic[p] = ret;
      return ret;
    }
    var $ixc = {};

    function _ic(p, ent, me, e, s, r, gg) {
      var x = _grp(p, ent, me);
      ent[me].j.push(x);
      if (x) {
        if ($ixc[x]) {
          _wp('-1:include:-1:-1: `' + p + '` is being included in a loop, will be stop.');
          return;
        }
        $ixc[x] = true;
        try {
          ent[x].f(e, s, r, gg)
        } catch (e) {}
        $ixc[x] = false;
      } else {
        _wp(me + ':include:-1:-1: Included path `' + p + '` not found from `' + me + '`.')
      }
    }

    function _w(tn, f, line, c) {
      _wp(f + ':template:' + line + ':' + c + ': Template `' + tn + '` not found.');
    }

    function _ev(dom) {
      var changed = false;
      delete dom.properities;
      delete dom.n;
      if (dom.children) {
        do {
          changed = false;
          var newch = [];
          for (var i = 0; i < dom.children.length; i++) {
            var ch = dom.children[i];
            if (ch.tag == 'virtual') {
              changed = true;
              for (var j = 0; ch.children && j < ch.children.length; j++) {
                newch.push(ch.children[j]);
              }
            } else {
              newch.push(ch);
            }
          }
          dom.children = newch;
        } while (changed);
        for (var i = 0; i < dom.children.length; i++) {
          _ev(dom.children[i]);
        }
      }
      return dom;
    }
    var e_ = {}
    if (typeof (global.entrys) === 'undefined') global.entrys = {};
    e_ = global.entrys;
    var d_ = {}
    if (typeof (global.defines) === 'undefined') global.defines = {};
    d_ = global.defines;
    var f_ = {}
    if (typeof (global.modules) === 'undefined') global.modules = {};
    f_ = global.modules;
    var p_ = {}
    __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
    __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
    var z = __WXML_GLOBAL__.ops_set.$gwx_wx069ba97219f66d99 || [];
    if (!__WXML_GLOBAL__.ops_init.$gwx_wx069ba97219f66d99) {
      (function (z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
      })(z);
      __WXML_GLOBAL__.ops_set.$gwx_wx069ba97219f66d99 = z;
      __WXML_GLOBAL__.ops_init.$gwx_wx069ba97219f66d99 = true;
    }
    var nv_require = function () {
      var nnm = {};
      var nom = {};
      return function (n) {
        return function () {
          if (!nnm[n]) return undefined;
          try {
            if (!nom[n]) nom[n] = nnm[n]();
            return nom[n];
          } catch (e) {
            e.message = e.message.replace(/nv_/g, '');
            var tmp = e.stack.substring(0, e.stack.lastIndexOf(n));
            e.stack = tmp.substring(0, tmp.lastIndexOf('\n'));
            e.stack = e.stack.replace(/\snv_/g, ' ');
            e.stack = $gstack(e.stack);
            e.stack += '\n    at ' + n.substring(2);
            throw e;
          }
        }
      }
    }()
    var x = ['./components/list/list.wxml'];
    d_[x[0]] = {}
    var m0 = function (e, s, r, gg) {
      return r
    }
    e_[x[0]] = {
      f: m0,
      j: [],
      i: [],
      ti: [],
      ic: []
    }
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = {
          "tag": "wx-page"
        };
        root.children = []
        var main = e_[path].f
        if (typeof global === "undefined") global = {};
        global.f = $gdc(f_[path], "", 1);
        try {
          main(env, {}, root, global);
        } catch (err) {
          console.log(err)
        }
        return root;
      }
    }
  }

  global.__wxAppCode__['plugin-private://wx069ba97219f66d99/components/list/list.json'] = {
    "component": true
  };
  global.__wxAppCode__['plugin-private://wx069ba97219f66d99/components/list/list.wxml'] = $gwx_wx069ba97219f66d99('./components/list/list.wxml');
  global.__wxAppCode__['plugin-private://wx069ba97219f66d99/plugin.json'] = {
    "publicComponents": {
      "list": "components/list/list"
    },
    "main": "index.js"
  };
  global.__wxAppCode__['plugin-private://wx069ba97219f66d99/plugin.wxml'] = $gwx_wx069ba97219f66d99('./plugin.wxml');

  define("api/ai_manager.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    "use strict";
    var e = require("common.js"),
      t = {};
    t.recordRecoManager = {
      onStop: function (e) {},
      onError: function (e) {},
      onRecognize: function (e) {},
      start: function (s) {
        e.logInfo("start options", s), e.logInfo("wx_ai start time", Date.now() / 1e3), t.innerStreamRecoManager.setCallback("onStop", this.onStop), t.innerStreamRecoManager.setCallback("onError", this.onError), t.innerStreamRecoManager.setCallback("onRecognize", this.onRecognize), t.innerStreamRecoManager.start(s)
      },
      stop: function () {
        t.innerStreamRecoManager.stop()
      }
    }, t.getSocketManager = function () {}, t.innerStreamRecoManager = {
      data: {
        log: !1,
        options: {
          duration: 6e4,
          sampleRate: 16e3,
          numberOfChannels: 1,
          encodeBitRate: 48e3,
          format: "mp3",
          frameSize: 6
        },
        access_lang: {
          zh_CN: "zh_CN",
          en_US: "en_US"
        },
        access_gender: {
          female: 1,
          male: 2,
          unknow: 3
        },
        call_back: {
          onStop: function (t) {
            e.logLog("onStop", t)
          },
          onError: function (t) {
            e.logLog("onError", t)
          },
          onStart: function (t) {
            e.logLog("onStart", t)
          },
          onRecognize: function (t) {
            e.logLog("onRecognize", t)
          }
        },
        err_msg: {
          RECORD_ERROR_FAIL: {
            retcode: -30001,
            msg: "record manager record failed"
          },
          RECORD_PAUSED_FAIL: {
            retcode: -30002,
            msg: "record manager has paused record"
          },
          INTERNAL_VOICE_FAIL: {
            retcode: -30003,
            msg: "internal voice data failed"
          },
          QUERY_RESPONSE_EMPTY: {
            retcode: -30004,
            msg: "query response empty result"
          },
          QUERY_SERVER_ERROR: {
            retcode: -30005,
            msg: "query response sever error"
          },
          QUERY_NOT_END: {
            retcode: -30006,
            msg: "query is not end until timeout"
          },
          OPTIONS_FAIL: {
            retcode: -30007,
            msg: "please check options"
          },
          WEBSOCKET_SEND_FAIL: {
            retcode: -30008,
            msg: "websocket send failed"
          },
          CREATE_SESSION_KEY_SERVER_FAILED: {
            retcode: -30009,
            msg: "server failed when create session message"
          },
          CREATE_SESSION_KEY_NETWORK_FAILED: {
            retcode: -30010,
            msg: "network failed when create session message"
          },
          MUTILPLE_START_FAILED: {
            retcode: -30011,
            msg: "please wait recognition finished"
          },
          STOP_WHEN_NOT_WORKING: {
            retcode: -30012,
            msg: "please stop after start"
          },
          UNKNOW_ERROR: {
            retcode: -30013,
            msg: "unknow error"
          },
          FREQ_LIMIT_ERROR: {
            retcode: -40001,
            msg: "frequency limited"
          }
        },
        special_code: {
          freq_limit: -99
        },
        default_duration: 6e4,
        default_lang: "zh_CN",
        default_gender: "male",
        wss_manager: null,
        voice_id: 0,
        session_key: "",
        app_key: "",
        session_key_pre: "",
        app_key_pre: "",
        exceed_time: 0,
        exceed_duration: 220,
        _record_start: !1,
        _is_last_frame: !1,
        _interrupt_flag: !1,
        _sequence_id: 1,
        _product_queue: [],
        _consume_switch: !0,
        backup_pack: null,
        _previous_sent: !0,
        record_stopped: !0,
        record_paused: !1,
        record_path: "",
        start_query: !1,
        source: "miniapp_plugin",
        working: !1,
        internal_resend: 0,
        internal_resend_max: 1,
        query_info: {
          is_end: 0,
          last_result: "",
          err_msg: ""
        },
        query_options: {
          query_start: null,
          query_sleep_ms: 100,
          query_times: 100
        }
      },
      _setRecordPause: function (e) {
        this.data.record_paused = e
      },
      _isRecordPause: function () {
        return this.data.record_paused
      },
      _isInternalCanResend: function () {
        return e.logLog("已发次数", this.data.internal_resend), e.logLog("最大发送次数", this.data.internal_resend_max), this.data.internal_resend < this.data.internal_resend_max
      },
      _increaseInternalResend: function () {
        this.data.internal_resend++
      },
      _resetInternalResend: function () {
        this.data.internal_resend = 0
      },
      _setWorking: function (e) {
        this.data.working = e
      },
      _isWorking: function () {
        return this.data.working
      },
      _setRecordStopped: function (e) {
        this.data.record_stopped = e
      },
      _isRecordStopped: function () {
        return this.data.record_stopped
      },
      _markRecordStart: function (e) {
        this.data._record_start = e
      },
      _isRecordStart: function () {
        return this.data._record_start
      },
      _setInterrupt: function (e) {
        this.data._interrupt_flag = e
      },
      _isInterrupt: function () {
        return this.data._interrupt_flag
      },
      _buildSuccResponse: function () {
        return {
          tempFilePath: this.data.record_path,
          result: this.data.query_info.last_result
        }
      },
      _getFailMsg: function (e) {
        return this.data.err_msg.hasOwnProperty(e) ? this.data.err_msg[e] : this.data.err_msg.UNKNOW_ERROR
      },
      _setQueryBegin: function (e) {
        this.data.query_options.query_start = e
      },
      _hasStartedQuery: function () {
        return this.data.start_query
      },
      _setStartedQuery: function (e) {
        this.data.start_query = e
      },
      _resetInternalStatus: function () {
        this.data._record_start = !1, this.data._is_last_frame = !1, this.data._sequence_id = 1, this.data.voice_id = 0, this.data._product_queue = [], this._setAccessToConsumeSwitch(!0), this.data.backup_pack = null, this.data.record_path = "", this._setStartedQuery(!1), this.data.query_info = {
          is_end: 0,
          last_result: "",
          err_msg: ""
        }, this._setInterrupt(!1), this._markRecordStart(!1), this._setWorking(!1), this._setPreviousSent(!0), this._resetInternalResend(), this._setRecordPause(!1)
      },
      _resetInternalStatusPart: function () {
        if (this._isRecordPause()) {
          var e = this._isRecordPause();
          this._resetInternalStatus(), this._setRecordPause(e)
        } else this._resetInternalStatus()
      },
      _setLastResult: function (e) {
        this.data.query_info.last_result = e
      },
      _setLastErrMsg: function (e) {
        this.data.query_info.err_msg = e
      },
      _getLastErrMsg: function () {
        return this.data.query_info.err_msg
      },
      _getLastResult: function () {
        return this.data.query_info.last_result
      },
      _setIsEnd: function (e) {
        this.data.query_info.is_end = e
      },
      _getIsEnd: function () {
        return this.data.query_info.is_end
      },
      _responseRecognize: function (t) {
        var s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = {
            result: t,
            end: s
          };
        if (s) this._setLastResult(t), this.data.call_back.onRecognize(n), this.data.call_back.onStop(t);
        else if (t != this._getIsEnd()) return this._setLastResult(t), e.logInfo("wx_ai recognize response time", Date.now() / 1e3), void this.data.call_back.onRecognize(n);
        s ? (this._setLastResult(t), this.data.call_back.onStop(t)) : t != this._getIsEnd() && (this._setLastResult(t), this.data.call_back.onRecognize(t))
      },
      _requestSessionKeyPrevious: function () {
        var t = this;
        e.logInfo("request Session key previous"), this.data.exceed_time > Math.floor(Date.now() / 1e3) || this._applySessionKey()
          .then(function (s) {
            e.logInfo("request session key previous success", s.session_key, s.app_key), t.data.session_key_pre = s.session_key, t.data.app_key_pre = s.app_key, t.data.exceed_time = Math.floor(Date.now() / 1e3 + t.data.exceed_duration)
          })
          .catch(function (s) {
            e.logInfo("request Previous session key failed", s), t.data.exceed_time = 0
          })
      },
      _submitMutilpleTimesFail: function () {
        var e = this._getFailMsg("MUTILPLE_START_FAILED");
        this.data.call_back.onError(e)
      },
      _before: function () {},
      _after: function () {
        this._requestSessionKeyPrevious()
      },
      _fail: function (e) {
        this._before(), this._resetInternalStatusPart();
        var t = this._getFailMsg(e);
        this.data.call_back.onError(t), this._after()
      },
      _succ: function () {
        this._before();
        var e = this._buildSuccResponse();
        this._resetInternalStatus(), this.data.call_back.onStop(e), this._after()
      },
      setCallback: function (e, t) {
        this.data.call_back[e] = t
      },
      _checkOptions: function (t) {
        if (!t) return this.data.options.duration = this.data.default_duration, this.data.options.lang = this.data.default_lang, !0;
        if (t.hasOwnProperty("log") && "showmedetail" === t.log && e.setLogFlag(!0), t.hasOwnProperty("duration")) {
          if (!(t.duration > 0 && t.duration <= 6e4)) return e.logInfo("检查启动duration"), !1;
          this.data.options.duration = t.duration
        } else this.data.options.duration = this.data.default_duration;
        if (t.hasOwnProperty("lang")) {
          if (!this.data.access_lang.hasOwnProperty(t.lang)) return !1;
          this.data.options.lang = t.lang
        } else this.data.options.lang = this.data.default_lang;
        return t.hasOwnProperty("gender") && this.data.access_gender.hasOwnProperty(t.gender) ? this.data.options.gender = t.gender : this.data.options.gender = this.data.default_gender, !0
      },
      _getStreamRecordOptions: function () {
        return this.data.options
      },
      _checkStatus: function () {
        return !1 === this._isWorking()
      },
      start: function (t) {
        e.logInfo("wx_ai inner manager start time", Date.now() / 1e3), this._checkStatus() ? this._checkOptions(t) ? (this._resetInternalStatusPart(), this._setWorking(!0), this._checkWebsocketManager(), e.logLog("record pause", this._isRecordPause()), this._isRecordPause() ? (e.logLog("recordPause"), wx.getRecorderManager()
          .stop()) : this.beginStreamRecord()) : this._fail("OPTIONS_FAIL") : this._submitMutilpleTimesFail()
      },
      _checkWebsocketManager: function () {
        var e = this;
        e.data.wss_manager || (e.data.wss_manager = t.getWebsocketManager(e))
      },
      initNetwork: function () {
        var s = this;
        e.logLog("initNetWork"), s.data.wss_manager = t.getWebsocketManager(s), s.data.wss_manager.connectWebsocket()
      },
      beginStreamRecord: function () {
        var t = this;
        if (e.logLog("session_key app_key exceed_time", this.data.session_key, this.data.app_key, this.data.exceed_time, Date.now() / 1e3), t.data.exceed_time > Math.floor(Date.now() / 1e3) && "" != t.data.session_key_pre) {
          e.logLog("使用预获取的sessionkey以及appkey"), t.data.exceed_time = 0, t.data.session_key = t.data.session_key_pre, t.data.app_key = t.data.app_key_pre;
          var s = t._getStreamRecordOptions();
          t.initStreamRecord(s)
        } else e.logLog("重新获取sessionkey以及appkey"), t._applySessionKey()
          .then(function (e) {
            t.data.session_key = e.session_key, t.data.app_key = e.app_key;
            var s = t._getStreamRecordOptions();
            t.initStreamRecord(s)
          })
          .catch(function (e) {
            t._fail(e)
          })
      },
      _buildSessionKeyData: function () {
        return {
          source: this.data.source
        }
      },
      _applySessionKey: function () {
        e.logInfo("wx_ai start apply session key", Date.now() / 1e3);
        var t = this._buildSessionKeyData(),
          s = this;
        return new Promise(function (n, o) {
          wx.request({
            url: "https://ae.weixin.qq.com/cgi-bin/mmasrai-bin/voicerecologin",
            method: "POST",
            data: t,
            success: function (t) {
              e.logLog("success", t), t.data.hasOwnProperty("retcode") && 0 === t.data.retcode ? (e.logInfo("wx_ai apply session key back", Date.now() / 1e3), e.logLog("retcode 0"), n({
                session_key: t.data.session_key,
                app_key: t.data.app_key
              })) : t.data.hasOwnProperty("retcode") && t.data.retcode === s.data.special_code.freq_limit ? (e.logLog("retcode not 0", t), o("FREQ_LIMIT_ERROR")) : (e.logLog("retcode not 0", t), o("CREATE_SESSION_KEY_SERVER_FAILED"))
            },
            fail: function (t) {
              e.logLog("error", t), o("CREATE_SESSION_KEY_NETWORK_FAILED")
            }
          })
        })
      },
      stopWhenRecordingEvent: function () {
        wx.getRecorderManager()
          .stop()
      },
      stopWhenRecordStoppedEvent: function () {},
      stopWhenRecordNotStartEvent: function () {
        this._setInterrupt(!0)
      },
      stopBeforeStartEvent: function () {
        this._fail("STOP_WHEN_NOT_WORKING")
      },
      stopAfterStartEvent: function () {
        var e = !this._isRecordStopped();
        e ? this.stopWhenRecordingEvent() : (e = this._isRecordStopped() && this._isRecordStart()) ? this.stopWhenRecordStoppedEvent() : (e = this._isRecordStopped() && !this._isRecordStart()) && this.stopWhenRecordNotStartEvent()
      },
      stop: function () {
        e.logLog("inner manager stop"), this._isWorking() ? (e.logErr("stopAfterStartEvent"), this.stopAfterStartEvent()) : (e.logErr("stopBeforeStartEvent"), this.stopBeforeStartEvent())
      },
      dispatchEvent: function (e) {
        var t = this;
        switch (e.type) {
          case 10:
            t.watchOpenEvent(e);
            break;
          case 11:
            t.watchCloseEvent(e);
            break;
          case 12:
            t.watchErrorEvent(e);
            break;
          case 13:
            t.watchReceiveEvent(e);
            break;
          case 14:
            t.watchConnectFailEvent(e)
        }
      },
      watchOpenEvent: function (e) {},
      watchCloseEvent: function (e) {},
      watchErrorEvent: function (e) {},
      watchReceiveEvent: function (e) {},
      watchConnectFailEvent: function (e) {},
      _setLastFrame: function (e) {
        this.data._is_last_frame = e
      },
      _isLastFrame: function () {
        return this.data._is_last_frame
      },
      _buildFrameObject: function (e, t) {
        var s = this,
          n = s.data.session_key,
          o = s.data.app_key,
          a = s.data._sequence_id++,
          r = {
            sampleRate: s.data.options.sampleRate,
            format: s.data.options.format
          };
        return {
          session_key: n,
          voice_seq: a,
          voice_data: wx.arrayBufferToBase64(e),
          is_end: t,
          source: s.data.source,
          format: r,
          lang: s.data.options.lang,
          app_key: o,
          gender: s.data.access_gender[s.data.options.gender]
        }
      },
      _pushQueue: function (e) {
        this.data._product_queue.unshift(e)
      },
      _popQueue: function () {
        return this.data._product_queue.pop()
      },
      _setPreviousSent: function (e) {
        this.data._previous_sent = e
      },
      _isPreviousSent: function () {
        return this.data._previous_sent
      },
      _setAccessToConsumeSwitch: function (e) {
        this.data._consume_switch = e
      },
      _accessToConsumeSwitch: function () {
        return this.data._consume_switch
      },
      _accessToConsume: function () {
        return e.logLog("accessToConsume consumeSwitch", this._accessToConsumeSwitch()), e.logLog("accessToConsume isPreviousSent", this._isPreviousSent()), this._accessToConsumeSwitch() && this._isPreviousSent()
      },
      _consumeQueue: function () {
        var t = this;
        if (e.logLog("当前帧队列", t.data._product_queue), e.logLog("access", t._accessToConsume()), t._accessToConsume())
          if (0 === t.data._product_queue.length) e.logLog("当前队列长度为0，不进行消费");
          else {
            t._setPreviousSent(!1);
            var s = t._popQueue();
            e.logLog("fectch from queue", s), this._resetInternalResend(), t._requestVoiceTask(s)
          }
      },
      _query: function () {
        var e = this;
        e._setStartedQuery(!0), e._setQueryBegin(Date.now()), e._once_query()
      },
      _once_query: function () {
        var e = this,
          t = e._buildQueryFrameTask();
        t.success = function (t) {
          e._checkQuerySuccess(t)
        }, t.fail = function (t) {
          e._checkQueryFail(t)
        }, e.data.wss_manager.sendMessage(t)
      },
      _queryLoop: function () {
        var t = this.data.query_options.query_start + this.data.query_options.query_sleep_ms * this.data.query_options.query_times;
        Date.now() > t ? (e.logLog("check query now time", Date.now()), e.logLog("check query exceed_times", t), e.logInfo("超出查询时间"), this._fail(this._getLastErrMsg())) : (e.logLog("check query now time", Date.now()), e.logLog("check query exceed_times", t), e.logInfo("继续查询"), this._once_query())
      },
      _judgeQueryStatus: function (e) {
        return !("" === e || !e.hasOwnProperty("retcode")) && 0 === e.retcode
      },
      _updateLastResult: function (e) {
        "" != (e = JSON.parse(e)) && e.hasOwnProperty("result") && this._setLastResult(e.result)
      },
      _judgeQueryIsEnd: function (e) {
        var t = !1;
        return (e = JSON.parse(e))
          .hasOwnProperty("retcode") && 0 === e.retcode && e.hasOwnProperty("is_end") && 1 === e.is_end && (t = !0), t
      },
      _keepQueryResult: function (e) {
        arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? this._setLastErrMsg("WEBSOCKET_SEND_FAIL") : "" !== e && e.hasOwnProperty("retcode") && e.hasOwnProperty("is_end") ? 0 != e.retcode ? this._setLastErrMsg("QUERY_SERVER_ERROR") : 0 === e.is_end && this._setLastErrMsg("QUERY_NOT_END") : this._setLastErrMsg("QUERY_RESPONSE_EMPTY")
      },
      _checkQuerySuccess: function (e) {
        var t = this,
          s = t._judgeQueryIsEnd(e);
        t._setIsEnd(s), t._keepQueryResult(e), s ? (t._updateLastResult(e), t._succ()) : t._queryLoop()
      },
      _checkQueryFail: function (e) {
        var t = this;
        t._keepQueryResult(e, !0), t._queryLoop()
      },
      _stopRecord: function () {
        this._isRecordStopped() ? this._fail("INTERNAL_VOICE_FAIL") : wx.getRecorderManager()
          .stop()
      },
      _retCodeCanBeRetry: function (e) {
        return 0 != e && -2 != e && -99 != e && -11 != e && -10 != e
      },
      _resendInternal: function () {
        this._increaseInternalResend();
        var e = this._getBackupPack();
        this._requestVoiceTask(e)
      },
      _checkResendInternal: function () {
        e.logLog("检查是否需要重发"), this._isInternalCanResend() ? (e.logLog("需要重发"), this._resendInternal()) : (this._setInterrupt(!0), this._stopRecord())
      },
      _internalFrameSuccessProcess: function (e) {
        if (this._isWorking() && !this._isRecordPause()) {
          var t = this;
          if (e && "" != e) {
            var s = JSON.parse(e);
            t._retCodeCanBeRetry(s.retcode) ? t._checkResendInternal() : 0 === s.retcode ? (t._setPreviousSent(!0), 0 === t.data.voice_id && (t.data.voice_id = s.voice_id), t._responseRecognize(s.result), t.data.backup_pack.is_end ? t._query() : t._consumeQueue()) : (t._setInterrupt(!0), wx.getRecorderManager()
              .stop())
          } else t._checkResendInternal()
        }
      },
      _internalFrameFailProcess: function (e) {
        this._isWorking() && this._fail("WEBSOCKET_SEND_FAIL")
      },
      _buildInternalFrameTask: function (t) {
        return e.logLog("pack", t), {
          path: "/cgi-bin/mmasrai-bin/addvoicetoreco",
          method: "POST",
          resend: !0,
          data: t
        }
      },
      _buildQueryFrameTask: function () {
        var e = this;
        return {
          path: "/cgi-bin/mmasrai-bin/queryrecoresult",
          method: "POST",
          resend: !1,
          data: {
            voice_id: e.data.voice_id,
            lang: "zh_cn",
            source: e.data.source,
            session_key: e.data.session_key,
            app_key: e.data.app_key
          }
        }
      },
      _saveBackupPack: function (e) {
        this.data.backup_pack = e
      },
      _getBackupPack: function () {
        return this.data.backup_pack
      },
      _addVoiceId: function (e) {
        return e.voice_id = this.data.voice_id, e
      },
      _requestVoiceTask: function (t) {
        var s = this;
        t = s._addVoiceId(t), s._saveBackupPack(t);
        var n = s._buildInternalFrameTask(t);
        e.logLog("requestVoiceTask", n), n.success = function (t) {
          e.logLog("上游取得的返回", t), s._internalFrameSuccessProcess(t)
        }, n.fail = function (t) {
          e.logLog("发送失败", t), s._internalFrameFailProcess(t)
        }, s.data.wss_manager.sendMessage(n)
      },
      initStreamRecord: function (t) {
        e.logLog("initStreamRecord start");
        var s = this,
          n = wx.getRecorderManager();
        n.onStart(function () {
          e.logLog("开始录音 onStart"), s.onRecordStartListener()
        }), n.onStop(function (t) {
          e.logLog("结束录音 onStop"), s.onRecordStopListener(t)
        }), n.onPause(function (t) {
          e.logLog("暂停录音 onPause"), s.onRecordPauseListener(t)
        }), n.onError(function (t) {
          e.logLog("录音出错 onError", t), s.onRecordErrorListener(t)
        }), n.onFrameRecorded(function (t) {
          e.logLog("录音帧返回 onFrameRecorded"), s.onRecordFrameListener(t)
        }), e.logLog("initStreamRecord start 1"), e.logInfo("wx_ai start record time", Date.now() / 1e3), n.start(t), e.logLog("initStreamRecord start 2")
      },
      onRecordStartListener: function () {
        if (e.logInfo("wx_ai onStart time", Date.now() / 1e3), this._isInterrupt()) return e.logErr("用户企图在未开始录音前stop"), void wx.getRecorderManager()
          .stop();
        this._markRecordStart(!0), this._setRecordStopped(!1), this.data.call_back.onStart({
          msg: "Ok"
        })
      },
      onRecordStopListener: function (e) {
        if (this._isRecordPause()) return this._setRecordPause(!1), void this.beginStreamRecord();
        if (this._setRecordStopped(!0), this._isInterrupt()) this._fail("INTERNAL_VOICE_FAIL");
        else if (this.data.record_path = e.tempFilePath, !this._isLastFrame()) {
          this._setLastFrame(!0);
          var t = new ArrayBuffer,
            s = this._buildFrameObject(t, !0);
          this._pushQueue(s)
        }
      },
      onRecordPauseListener: function (e) {
        this._setRecordPause(!0), this._fail("RECORD_PAUSED_FAIL")
      },
      onRecordErrorListener: function (t) {
        if (e.logLog("error", t), e.logLog("record_pause", this.data.record_paused), this._isRecordPause()) return this._setRecordPause(!1), void this.beginStreamRecord();
        this._setInterrupt(!0), this._fail("RECORD_ERROR_FAIL")
      },
      onRecordFrameListener: function (t) {
        var s = t.frameBuffer,
          n = t.isLastFrame;
        e.logErr("是否是最后一帧", n);
        var o = this;
        if (!o._isRecordPause() && !o._isInterrupt()) {
          s || (e.logErr("onRecordFrameListener onRecordFrameListener no frameBuffer", t), s = new ArrayBuffer), o._setLastFrame(n);
          var a = o._buildFrameObject(s, n);
          o._pushQueue(a), o._consumeQueue()
        }
      }
    }, t.exception_manager = {
      OptionExcetion: function () {
        return {
          code: -1,
          message: "options error"
        }
      }
    }, t.websocketManager = {
      up_manager: null,
      is_socket_open: !1,
      ws_seq: 0,
      socket_task: null,
      retry_connect_times: 0,
      retry_connect_max: 1,
      resend_flag: !1,
      resend_times: 0,
      resend_max: 0,
      backup_task: null,
      send_trigger: {},
      wait_response_seq_list: [],
      success_call: null,
      fail_call: null,
      _resetRetryStatus: function () {
        var e = this;
        e.retry_connect_times = 0, e.resend_times = 0, e.backup_task = null, e.success_call = null, e.fail_call = null
      },
      _resendAvaliable: function () {
        return !!this.resend_flag && this.resend_times < this.resend_max
      },
      _hasBackupTask: function () {
        return !!this.backup_task
      },
      _increResendTimes: function () {
        this.resend_flag && this.resend_times++
      },
      _hasReconnected: function () {
        return this.retry_connect_times >= this.retry_connect_max
      },
      getSendSocketTimeout: function () {
        return 2e3
      },
      _setHasReconnected: function () {
        this.retry_connect_times = this.retry_connect_max
      },
      _clearWaitResponseSeqList: function () {
        e.logLog("哇 清理了一次waitResponseSeqList啊"), this.wait_response_seq_list = []
      },
      _addSeqToWaitList: function (t) {
        e.logLog("插入等待回包队列", t), this.wait_response_seq_list.push(t), e.logLog("插入后等待回包队列为", this.wait_response_seq_list)
      },
      _isInWaitResponseSeqList: function (t) {
        var s = this;
        return e.logLog("当前等待返回的帧序列", s.wait_response_seq_list), s.wait_response_seq_list.indexOf(t) > -1
      },
      _isResponseFiltered: function (t) {
        return e.logLog("判断是否被过滤", t), t.hasOwnProperty("seq") ? !this._isInWaitResponseSeqList(t.seq) : (e.logErr("当前返回帧不包含seq，直接过滤"), !0)
      },
      _reconnectWebosocket: function () {
        e.logInfo("_reconnectWebosocket 清理"), this._clearWaitResponseSeqList(), this.closeWebsocket(), this.connectWebsocket()
      },
      init: function (e) {
        this.up_manager = e
      },
      notifyManager: function (t) {
        var s = this;
        s.up_manager ? (e.logLog("notifyManager notify manager event", t), s.up_manager.dispatchEvent(t)) : e.logErr("notifyManager up_manager is null", s.up_manager)
      },
      _increaseWsSeq: function () {
        return ++this.ws_seq
      },
      _buildWebsocketFrame: function (t) {
        e.logLog("websocketframe", t);
        var s = {};
        return s.seq = this._increaseWsSeq(), s.http = {
          method: t.method,
          path: t.path,
          header: {
            HOST: "ae.weixin.qq.com"
          }
        }, s.product = 0, s.content = JSON.stringify(t.data), e.logLog("request obj ws object", s), s
      },
      _saveInfo: function (e) {
        this.backup_task = e, this.resend_flag = e.resend, this.success_call = e.success, this.fail_call = e.fail
      },
      _setSendTimeoutTrigger: function () {
        var e = this;
        clearTimeout(e.send_trigger);
        var t = e.getSendSocketTimeout();
        e.send_trigger = setTimeout(function () {
          e.onSendWaitBackTimeout()
        }.bind(e), t)
      },
      _checkReconnectOrNotify: function (e) {
        var t = this;
        t._hasReconnected() ? t.onErrorListener(e) : (t._setHasReconnected(), t._reconnectWebosocket())
      },
      internalSend: function (t) {
        var s = this;
        e.logLog("task", t);
        var n = s._buildWebsocketFrame(t);
        s._addSeqToWaitList(n.seq), e.logLog("request_frame", n), s.socket_task.send({
          data: JSON.stringify(n),
          success: function (t) {
            var n = new Date;
            e.logInfo("sendSocket 发送时间", n.toLocaleTimeString() + " " + n.getMilliseconds()), s._setSendTimeoutTrigger()
          },
          fail: function (e) {
            s._checkReconnectOrNotify(e)
          }
        })
      },
      sendMessage: function (t) {
        var s = this;
        e.logInfo("sendMessage", t), s._saveInfo(t), s.internalSend(t)
      },
      _validResponseProcess: function (e) {
        this.onReceiveListener(e.content)
      },
      _clearSendSpace: function () {
        e.logInfo("clearSendSpace 清理"), this._clearWaitResponseSeqList(), this._resetRetryStatus()
      },
      _initWebsocket: function () {
        var t = this;
        e.logLog("_initWebsocket"), t.socket_task.onOpen(function (s) {
          t._setWebsocketOpen(!0), t._hasReconnected() && (e.logInfo("_initWebsocket 清理"), t._clearWaitResponseSeqList(), t.internalSend(t.backup_task))
        }), t.socket_task.onError(function (s) {
          t._setWebsocketOpen(!1), t._hasReconnected() ? (e.logErr("socket_task断开恢复连接出错", t.socket_task), e.logErr("出错res", s), t.onErrorListener(s)) : (e.logErr("socket_task连接出错", t.socket_task), e.logErr("出错res", s), t._checkReconnectOrNotify(s))
        }), t.socket_task.onClose(function (s) {
          t._setWebsocketOpen(!1), t._isWebsocketOpen() ? e.logLog("收尾操作已在closeWebsocket中完成") : e.logInfo("socket onClose")
        }), t.socket_task.onMessage(function (s) {
          e.logLog("收到回包", s);
          var n = new Date;
          e.logInfo("收到回包时间", n.toLocaleTimeString() + " " + n.getMilliseconds()), e.logLog("当前等待队列", t.wait_response_seq_list);
          var o = JSON.parse(s.data);
          t._isResponseFiltered(o) ? e.logLog("回包被过滤", s) : (clearTimeout(t.send_trigger), e.logInfo("onMessage 清理"), t._clearWaitResponseSeqList(), t._validResponseProcess(o))
        })
      },
      onSendWaitBackTimeout: function () {
        e.logLog("当前重试包", this.backup_task), this._resendAvaliable() ? (this._increResendTimes(), this.internalSend(this.backup_task)) : this._hasReconnected() ? (e.logErr("已经断开重连过，此次不进行断开重连"), this.onErrorListener({
          errMsg: "发送失败"
        })) : (this._setHasReconnected(), e.logInfo("帧超时未返回，重新连接"), this._reconnectWebosocket())
      },
      onErrorListener: function (t) {
        var s = this,
          n = s.fail_call;
        e.logErr("onError clearSendSpace", t), s._clearSendSpace(), "function" == typeof n && n(t)
      },
      onCloseListener: function (e) {},
      onReceiveListener: function (t) {
        e.logLog("通知识别管理器告知收到信息", t);
        var s = this,
          n = s.success_call;
        s._clearSendSpace(), "function" == typeof n && (e.logLog("调用success回调"), n(t))
      },
      onConnectSocketFailListener: function (t) {
        var s = this;
        e.logErr("onConnectSocketFailListener clear"), s._clearSendSpace()
      },
      closeWebsocket: function () {
        this.socket_task.close(), this._setWebsocketOpen(!1)
      },
      _initWebsocketSeq: function () {
        this.ws_seq = Math.ceil(2e5 * Math.random())
      },
      connectWebsocket: function () {
        var s = this;
        s._initWebsocketSeq(), s.socket_task = null, s.socket_task = wx.connectSocket({
          url: t.getWssAddress(),
          method: "POST",
          success: function (e) {},
          fail: function (t) {
            e.logLog("connect fail", t), s._hasReconnected() ? s.onConnectSocketFailListener(t) : (s._setHasReconnected(), s._reconnectWebosocket())
          }
        }), s.socket_task && (e.logLog("设置监听函数", s.socket_task), s._initWebsocket())
      },
      _isWebsocketOpen: function () {
        return this.is_socket_open
      },
      _setWebsocketOpen: function (e) {
        this.is_socket_open = e
      }
    }, t.getWebsocketManager = function (e) {
      return t.websocketManager.init(e), t.websocketManager
    }, t.getWssAddress = function () {
      return "wss://ae.weixin.qq.com"
    }, t.innerStreamRecoManager.initNetwork(), t.innerStreamRecoManager._requestSessionKeyPrevious(), module.exports = {
      getRecordRecognitionManager: function () {
        return t.recordRecoManager
      }
    };
  });
  define("api/ai_translation.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    "use strict";
    var e = require("common.js"),
      t = {};
    t.innerTranslationManager = {
      data: {
        source: "miniapp_plugin",
        media_host: "https://ae.weixin.qq.com/cgi-bin/mmasrai-bin/getmedia",
        translate_host: "https://ae.weixin.qq.com/cgi-bin/mmasrai-bin/translatecontent",
        language: {
          zh_CN: "zh_CN",
          en_US: "en_US",
          zh_TW: "zh_TW",
          zh_HK: "zh_HK"
        },
        err_msg: {
          LANGUAGE_OPTION_ERROR: {
            retcode: -10001,
            msg: "please check out language option."
          },
          CONTENT_OPTION_ERROR: {
            retcode: -10002,
            msg: "please input right content."
          },
          CONTENT_LENGTH_EXCEED: {
            retcode: -10003,
            msg: "content too long."
          },
          TRANSLATE_ERROR: {
            retcode: -10004,
            msg: "translate server failed."
          },
          NETWORK_ERROR: {
            retcode: -10005,
            msg: "network error."
          },
          FREQ_LIMIT_ERROR: {
            retcode: -40001,
            msg: "translate frequency limited."
          },
          TTS_FAILED: {
            retcode: -10006,
            msg: "tts failed."
          },
          TTS_LANGUAGE_ERROR: {
            retcode: -10007,
            msg: "tts language not support."
          },
          TTS_FREQ_LIMIT_ERROR: {
            retcode: -10008,
            msg: "tts frequency limited."
          }
        },
        CONTENT_EXCEED_RET: -10,
        TRANSLATE_FREQ_RET: -99,
        TTS_FAILED_RET: -400,
        TTS_FREQ_LIMIT_RET: -401,
        TTS_LANGUAGE_ERROR_RET: -22
      },
      _isLanguageOptionsError: function (e) {
        return e.hasOwnProperty("lfrom") && e.hasOwnProperty("lto") ? e.lfrom === e.lto ? "LANGUAGE_OPTION_ERROR" : (!this.data.language.hasOwnProperty(e.lfrom) || !this.data.language.hasOwnProperty(e.lto)) && "LANGUAGE_OPTION_ERROR" : "LANGUAGE_OPTION_ERROR"
      },
      _isTranslateContentError: function (e) {
        return e.hasOwnProperty("content") && "string" == typeof e.content ? !(e.content.length > 0) && "CONTENT_OPTION_ERROR" : "CONTENT_OPTION_ERROR"
      },
      _isNeedTTS: function (e) {
        return !(!e.hasOwnProperty("tts") || !0 !== e.tts)
      },
      succResponseData: function (e, t) {
        return 1 == e ? {
          retcode: 0,
          origin: t.from_content,
          result: t.to_content,
          filename: t.voice_file,
          expired_time: Math.floor(Date.now() / 1e3) + t.expired_time
        } : {
          retcode: 0,
          origin: t.from_content,
          result: t.to_content
        }
      },
      succPartResponseData: function (e, t) {
        return {
          retcode: this.data.err_msg[t].retcode,
          origin: e.from_content,
          result: e.to_content,
          filename: "",
          expired_time: 0
        }
      },
      responseResult: function (e, t) {
        e.hasOwnProperty("success") && "function" == typeof e.success && e.success(t), e.hasOwnProperty("complete") && "function" == typeof e.complete && e.complete()
      },
      responseError: function (e, t) {
        e.hasOwnProperty("fail") && "function" == typeof e.success && e.fail(t), e.hasOwnProperty("complete") && "function" == typeof e.complete && e.complete()
      },
      translate: function (t) {
        var r = this;
        t.hasOwnProperty("log") && "showmedetail" === t.log && e.setLogFlag(!0);
        var o = r._isLanguageOptionsError(t);
        if (o) return e.logErr("language option check error", t), void r.responseError(t, r.data.err_msg[o]);
        var a = r._isTranslateContentError(t);
        if (a) return e.logErr("content option check error", t), void r.responseError(t, r.data.err_msg[a]);
        var n = 0;
        r._isNeedTTS(t) && (e.logLog("tts open"), n = 1);
        var s = {
          lfrom: t.lfrom,
          lto: t.lto,
          source: r.data.source,
          content: t.content,
          tts: n
        };
        wx.request({
          url: r.data.translate_host,
          method: "POST",
          data: s,
          success: function (o) {
            if (e.logInfo("res", o), !o.data.hasOwnProperty("retcode")) return e.logErr("res.data has no retcode"), void r.responseError(t, r.data.err_msg.TRANSLATE_ERROR);
            if (0 === o.data.retcode) {
              var a = r.succResponseData(n, o.data);
              r.responseResult(t, a), e.logLog("translate completed", a)
            } else {
              if (o.data.retcode === r.data.TRANSLATE_FREQ_RET) return void r.responseError(t, r.data.err_msg.FREQ_LIMIT_ERROR);
              if (o.data.retcode === r.data.CONTENT_EXCEED_RET) return void r.responseError(t, r.data.err_msg.CONTENT_LENGTH_EXCEED);
              if (1 === n) {
                if (o.data.retcode === r.data.TTS_FAILED_RET) {
                  e.logErr("tts inner server failed", o.data);
                  var s = r.succPartResponseData(o.data, "TTS_FAILED");
                  return void r.responseResult(t, s)
                }
                if (o.data.retcode === r.data.TTS_FREQ_LIMIT_RET) {
                  e.logErr("tts frequency exceed", o.data);
                  var i = r.succPartResponseData(o.data, "TTS_FREQ_LIMIT_ERROR");
                  return void r.responseResult(t, i)
                }
                if (o.data.retcode === r.data.TTS_LANGUAGE_ERROR_RET) {
                  e.logErr("tts language not support", o.data);
                  var c = r.succPartResponseData(o.data, "TTS_LANGUAGE_ERROR");
                  return void r.responseResult(t, c)
                }
              }
              r.responseError(t, r.data.err_msg.TRANSLATE_ERROR)
            }
          },
          fail: function (e) {
            r.responseError(t, r.data.err_msg.NETWORK_ERROR)
          }
        })
      }
    }, module.exports = {
      translate: function (e) {
        t.innerTranslationManager.translate(e)
      }
    };
  });
  define("api/ai_tts.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    "use strict";
    var e = require("common.js"),
      t = {};
    t.innerTextToSpeechManager = {
      data: {
        source: "miniapp_plugin",
        media_host: "https://ae.weixin.qq.com/cgi-bin/mmasrai-bin/getmedia",
        tts_host: "https://ae.weixin.qq.com/cgi-bin/mmasrai-bin/getttsvoice",
        language: {
          zh_CN: "zh_CN",
          en_US: "en_US",
          zh_TW: "zh_TW",
          zh_HK: "zh_HK"
        },
        err_msg: {
          LANGUAGE_OPTION_ERROR: {
            retcode: -20001,
            msg: "please check out language option."
          },
          CONTENT_OPTION_ERROR: {
            retcode: -20002,
            msg: "please input right content."
          },
          TTS_SERVER_ERROR: {
            retcode: -20003,
            msg: "text to speech inner server failed."
          },
          NETWORK_ERROR: {
            retcode: -20005,
            msg: "network error."
          },
          FREQ_LIMIT_ERROR: {
            retcode: -40001,
            msg: "frequency limited"
          }
        },
        TTS_FREQ_LIMIT_RET: -99,
        TTS_LANGUAGE_SERVER_RET: -22
      },
      _isLanguageOptionsError: function (e) {
        return (!e.hasOwnProperty("lang") || !this.data.language.hasOwnProperty(e.lang)) && "LANGUAGE_OPTION_ERROR"
      },
      _isContentError: function (e) {
        return !(e.hasOwnProperty("content") && "string" == typeof e.content && e.content.length > 0) && "CONTENT_OPTION_ERROR"
      },
      succResponseData: function (e) {
        return {
          retcode: 0,
          origin: e.text,
          filename: e.voice_file,
          expired_time: Math.floor(Date.now() / 1e3) + e.expired_time
        }
      },
      responseResult: function (e, t) {
        e.hasOwnProperty("success") && "function" == typeof e.success && e.success(t), e.hasOwnProperty("complete") && "function" == typeof e.complete && e.complete()
      },
      responseError: function (e, t) {
        e.hasOwnProperty("fail") && "function" == typeof e.success && e.fail(t), e.hasOwnProperty("complete") && "function" == typeof e.complete && e.complete()
      },
      tts: function (t) {
        var r = this._isLanguageOptionsError(t);
        if (r) this.responseError(t, this.data.err_msg[r]);
        else if (r = this._isContentError(t)) this.responseError(t, this.data.err_msg[r]);
        else {
          t.hasOwnProperty("log") && "showmedetail" === t.log && e.setLogFlag(!0);
          var o = {
            text: t.content,
            lang: t.lang,
            source: this.data.source
          };
          e.logInfo("tts_data", o);
          var s = this;
          wx.request({
            url: s.data.tts_host,
            method: "POST",
            data: o,
            success: function (r) {
              if (e.logLog("res", r), r.data.hasOwnProperty("retcode") && 0 === r.data.retcode) {
                var o = s.succResponseData(r.data);
                s.responseResult(t, o)
              } else {
                if (r.data.hasOwnProperty("retcode")) {
                  if (r.data.retcode === s.data.TTS_FREQ_LIMIT_RET) return e.logErr("tts freq limit", r), void s.responseError(t, s.data.err_msg.FREQ_LIMIT_ERROR);
                  if (r.data.retcode === s.data.TTS_LANGUAGE_SERVER_RET) return e.logErr("tts language option error", r), void s.responseError(t, s.data.err_msg.LANGUAGE_OPTION_ERROR)
                }
                e.logErr("tts response error", r), s.responseError(t, s.data.err_msg.TTS_SERVER_ERROR)
              }
            },
            fail: function (r) {
              e.logErr("tts request fail callback called", r), s.responseError(t, s.data.err_msg.NETWORK_ERROR)
            }
          })
        }
      }
    }, module.exports = {
      textToSpeech: function (e) {
        t.innerTextToSpeechManager.tts(e)
      }
    };
  });
  define("api/common.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    "use strict";
    var o = !1;
    module.exports = {
      logLog: function () {
        if (o) {
          var n;
          (n = console)
          .log.apply(n, arguments)
        }
      },
      logErr: function () {
        if (o) {
          var n;
          (n = console)
          .error.apply(n, arguments)
        }
      },
      logInfo: function () {
        if (o) {
          var n;
          (n = console)
          .info.apply(n, arguments)
        }
      },
      setLogFlag: function (n) {
        o = n
      }
    };
  });
  define("index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    "use strict";
    var e = require("./api/ai_manager.js"),
      a = require("./api/ai_translation.js"),
      t = require("./api/ai_tts.js");
    module.exports = {
      getRecordRecognitionManager: e.getRecordRecognitionManager,
      translate: a.translate,
      textToSpeech: t.textToSpeech
    };
  });
  global.__wxAppCurrentFile__ = 'plugin-private://wx069ba97219f66d99/components/list/list.js';
  define("components/list/list.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    "use strict";
    Component({
      data: {
        list: []
      },
      attached: function () {
        this.setData({
          list: [{
            name: "电视",
            price: 1e3
          }, {
            name: "电脑",
            price: 4e3
          }, {
            name: "手机",
            price: 3e3
          }]
        })
      }
    });
  });
  require("components/list/list.js");

  global.publishDomainComponents({
    "plugin://wx069ba97219f66d99/list": "plugin-private://wx069ba97219f66d99/components/list/list"
  })
  module.exports = function () {
    return require('index.js')
  }
});
requirePlugin("plugin://wx069ba97219f66d99");

define("component/address/address.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  function e(e, t, i) {
    return t in e ? Object.defineProperty(e, t, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = i, e
  }
  var t = require("../../servejs/images.js"),
    i = require("../../servejs/tools.js"),
    a = require("../../servejs/api.js"),
    s = require("../../servejs/dialog.js"),
    o = requirePlugin("thirdPlugin"),
    r = {},
    n = "",
    u = void 0,
    d = void 0;
  module.exports = {
    editor: function (l) {
      var c = i.getPage(),
        p = getApp(),
        v = function (e) {
          var t = e.retcode,
            i = void 0 === t ? 0 : t,
            a = e.msg,
            s = void 0 === a ? "" : a,
            o = e.result,
            r = void 0 === o ? "" : o;
          p.onReport("api_voice_record", {
            retcode: i,
            msg: s,
            result: r
          })
        },
        g = function (e, t) {
          if (e) {
            var i = void 0,
              s = void 0,
              o = {};
            a.apiDataRequest({
              isset: !1,
              url: "/v1/WeApp/parseAddress",
              data: {
                address: e
              },
              onSuccess: function (e, a) {
                if (0 == e.code && e.data && e.data.length > 0) {
                  i = e.data[0], s = [], i.mobile && s.push(i.mobile), i.phone && s.push(i.phone), o = {
                    name: i.name,
                    mobile: s.join(" "),
                    province: i.province_name,
                    city: i.city_name,
                    district: i.county_name,
                    address: i.detail
                  };
                  for (var r in o) o[r] || "voice" !== t || delete o[r];
                  c.onPageDataUpdate("addressParse", {
                    kind: n,
                    data: o
                  })
                }
              }
            })
          }
        },
        m = function (e) {
          var t = {};
          for (var i in e) t[f + "." + i] = e[i];
          c.setData(t)
        },
        f = "aeData",
        h = "onEditorHandler";
      m({
        list: l,
        evname: h
      }), t.chooseImage({
        isauto: !1,
        picCutType: "addr_lib",
        picUrl: "cutting"
      }), c[h] = function (t) {
        var a, o, l, c, p = this,
          v = t.currentTarget ? t.currentTarget.dataset : t,
          h = this.data[f] && this.data[f].list || [],
          y = v.url;
        if (n = v.kind, "tap" != t.type && t.type) "input" == t.type ? (r[v.kind] = t.detail.value, m(e({}, "list[" + v.index + "].isFill", !!t.detail.value))) : "blur" == t.type && m(e({}, "list[" + v.index + "].quickValue", t.detail.value));
        else if (y) "addr_lib" == y ? a = {
          id: this.data[v.type + "Id"],
          src: v.type
        } : (delete v.url, a = v), i.jumpTo({
          url: y,
          options: a
        });
        else if (void 0 !== v.status) {
          if ("editor" === v.kind && 0 === v.status) return;
          d && clearTimeout(d), d = setTimeout(function () {
            h.map(function (e, t) {
              if (t == v.index) {
                if (e.status = v.status, 2 == v.status) {
                  var i = ["name", "mobile", "province", "city", "district", "address"];
                  o = p.data.form.data, l = [], i.map(function (e) {
                    var t = o[v.kind + "_" + e];
                    t && l.push(t)
                  }), c = l.join(" "), e.quickValue = c, e.isFill = !!c, r[v.kind] = c
                }
              } else e.status = 0
            }), m({
              list: h
            })
          }, 100)
        } else if ("clear" == v.action) {
          var j, q = "list[" + v.index + "].";
          m((j = {}, e(j, q + "isFill", !1), e(j, q + "quickValue", ""), j)), r[v.kind] = ""
        } else "quickSure" == v.action ? g(r[v.kind]) : "voice" == v.action ? (k.start({
          duration: 6e4,
          lang: "zh_CN"
        }), u = s.alertDialog(this, {
          title: "语音输入",
          dialogname: "system",
          msgclass: "dialog-voice-msg",
          button: [{
            name: "取消",
            classname: "border-r",
            action: "cancel"
          }, {
            name: "说完了",
            action: "sure",
            classname: "color-blue"
          }],
          ismasktap: !1,
          cb: function (e, t) {
            if ("open" !== e && "close" !== e || m({
                dialogStatus: e
              }), "cancel" === e) b = !0, k.stop();
            else if ("sure" === e) return b = !1, i.apiToast({
              icon: "loading",
              title: "请稍后..."
            }), k.stop(), !0
          },
          msg: ["小微正在仔细聆听...", "请依次读出姓名、电话、详细地址（含省市区）"]
        })) : v.kind && this.onChooseImage(t)
      };
      var k = void 0,
        b = !1;
      return o && (m(e({}, "isPlugin", !0)), (k = o.getRecordRecognitionManager())
        .onStop = function (e) {
          e.result && !b ? (g(e.result, "voice"), v(e)) : i.hideToast()
        }, k.onError = function (e) {
          i.apiToast({
            icon: "error",
            title: e.retcode + " - 识别失败"
          }), u.close(), v(e), wx.getSetting && wx.getSetting({
            success: function (e) {
              !e.authSetting["scope.record"] && i.jumpTo({
                options: {
                  source: "record"
                },
                url: "personal"
              })
            }
          })
        }), {
        switchStatus: function (e, t) {
          for (var i = c.data[f] && c.data[f].list || [], a = 0; a < i.length; a++)
            if (e.kind == i[a].key && i[a].status != e.status) {
              e.status = 0 == i[a].status && t ? 0 : e.status, c[h]({
                status: e.status,
                index: a
              });
              break
            }
        },
        setData: m
      }
    }
  };
});
define("component/clipboard/clipboard.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  var a = Object.assign || function (a) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (a[s] = t[s])
    }
    return a
  };
  module.exports = {
    getClipboardData: function () {
      var a = this,
        e = this.serve.tools,
        t = this.serve.regular.address.rule;
      e.clipboardDeal && e.clipboardDeal({
        cb: function (e) {
          0 == e.code && t.test(e.data) && (a.clipboardData != e.data && a.parseAddress(e.data), a.clipboardData = e.data)
        }
      })
    },
    parseAddress: function (a) {
      var e = this;
      this.apiDataRequest({
        url: "/v1/WeApp/parseAddress",
        data: {
          address: a
        },
        onSuccess: function (a) {
          0 == a.code && a.data && a.data.length > 0 && e.showClipboardData(a.data[0])
        }
      })
    },
    showClipboardData: function (e) {
      var t, s = this,
        r = [],
        o = this,
        d = this.serve.tools;
      e.mobile && r.push(e.mobile), e.phone && r.push(e.phone), t = {
        real_name: e.name,
        mobile: r.join(" "),
        address_detail: e.detail,
        address_province: e.province_name,
        address_city: e.city_name,
        address_county: e.county_name,
        toolbars: this.toolbars
      }, this.alertDialog({
        title: "识别粘贴板内有地址，是否使用地址",
        isnoform: !0,
        classname: "dialog-tips",
        button: [{
          name: "",
          action: "cancel"
        }],
        dialogname: "clipboard",
        tmpdata: t,
        tmpname: "clipboardData",
        cb: function (r, i) {
          return "send" == r || "get" == r || "sure" == r ? (o.onPageDataUpdate("addressSelect", {
            address: a({
              address_type: r
            }, t)
          }), !0) : "editor" == r ? (d.jumpTo({
            url: "addr_editor",
            options: {
              ffor: i.currentTarget.dataset.ffor,
              action: "completion",
              mobile: e.mobile,
              telephone_code: e.phone,
              province: t.address_province,
              city: t.address_city,
              district: t.address_county,
              detail: t.address_detail,
              real_name: t.real_name
            }
          }), !0) : void("open" != r && "close" != r || s.address_ret.setData({
            dialogStatus: r
          }))
        }
      })
    }
  };
});
define("component/config.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  module.exports = {
    orderStatus: {
      temporary: {
        name: "待提交",
        color: "color-red",
        iscancel: !0,
        isadd: !1
      },
      wait_deal: {
        name: "待受理",
        color: "color-blue",
        iscancel: !0,
        isadd: !1
      },
      dealed: {
        name: "已受理",
        color: "color-green",
        iscancel: !0,
        isadd: !0
      },
      canceled: {
        name: "已取消",
        iscancel: !1,
        isadd: !1,
        repeat: "重新下单"
      },
      rejected: {
        name: "已拒绝",
        color: "color-orange",
        iscancel: !1,
        isadd: !1
      },
      closed: {
        name: "已关闭",
        iscancel: !1,
        isadd: !1
      },
      pickup: {
        name: "已完成",
        iscancel: !1,
        isadd: !0,
        repeat: "再来一单"
      },
      refunded: {
        name: "已完成",
        iscancel: !1,
        isadd: !0,
        repeat: "重新下单"
      },
      undistributed: {
        name: "待分配",
        color: "color-blue",
        iscancel: !0,
        isadd: !1
      },
      distributedfail: {
        name: "分配失败",
        iscancel: !0,
        isadd: !1
      }
    }
  };
});
define("component/cropper/cropper.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
    return typeof t
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
  };
  ! function (e, o) {
    "object" === ("undefined" == typeof exports ? "undefined" : t(exports)) && "undefined" != typeof module ? module.exports = o() : "function" == typeof define && define.amd ? define(o) : e.weCropper = o()
  }(void 0, function () {
    function e(t) {
      return t.charAt(0)
        .toUpperCase() + t.slice(1)
    }

    function o(t) {
      for (var e = arguments.length, o = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) o[n - 1] = arguments[n];
      c.forEach(function (e, n) {
        void 0 !== o[n] && (t[e] = o[n])
      })
    }

    function n(t, e) {
      Object.defineProperties(t, e)
    }

    function r() {
      return i || (i = wx.getSystemInfoSync()), i
    }
    var i = void 0,
      c = ["touchstarted", "touchmoved", "touchended"],
      a = "function" == typeof Symbol && "symbol" === t(Symbol.iterator) ? function (e) {
        return void 0 === e ? "undefined" : t(e)
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : t(e)
      },
      u = function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      },
      d = function () {
        function t(t, e) {
          for (var o = 0; o < e.length; o++) {
            var n = e[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
          }
        }
        return function (e, o, n) {
          return o && t(e.prototype, o), n && t(e, n), e
        }
      }(),
      s = function () {
        function t(t, e) {
          var o = [],
            n = !0,
            r = !1,
            i = void 0;
          try {
            for (var c, a = t[Symbol.iterator](); !(n = (c = a.next())
                .done) && (o.push(c.value), !e || o.length !== e); n = !0);
          } catch (t) {
            r = !0, i = t
          } finally {
            try {
              !n && a.return && a.return()
            } finally {
              if (r) throw i
            }
          }
          return o
        }
        return function (e, o) {
          if (Array.isArray(e)) return e;
          if (Symbol.iterator in Object(e)) return t(e, o);
          throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
      }(),
      l = {
        evname: ""
      },
      f = {
        id: {
          default: "cropper",
          get: function () {
            return l.id
          },
          set: function (t) {
            "string" != typeof t && console.error("id：" + t + " is invalid"), l.id = t
          }
        },
        width: {
          default: 750,
          get: function () {
            return l.width
          },
          set: function (t) {
            "number" != typeof t && console.error("width：" + t + " is invalid"), l.width = t
          }
        },
        height: {
          default: 750,
          get: function () {
            return l.height
          },
          set: function (t) {
            "number" != typeof t && console.error("height：" + t + " is invalid"), l.height = t
          }
        },
        scale: {
          default: 2.5,
          get: function () {
            return l.scale
          },
          set: function (t) {
            "number" != typeof t && console.error("scale：" + t + " is invalid"), l.scale = t
          }
        },
        evname: {
          default: "onCropperHandler",
          get: function () {
            return l.evname
          },
          set: function (t) {
            l.evname = t
          }
        },
        zoom: {
          default: 5,
          get: function () {
            return l.zoom
          },
          set: function (t) {
            "number" != typeof t ? console.error("zoom：" + t + " is invalid") : (t < 0 || t > 10) && console.error("zoom should be ranged in 0 ~ 10"), l.zoom = t
          }
        },
        src: {
          default: "cropper",
          get: function () {
            return l.src
          },
          set: function (t) {
            "string" != typeof t && console.error("id：" + t + " is invalid"), l.src = t
          }
        },
        cut: {
          default: {},
          get: function () {
            return l.cut
          },
          set: function (t) {
            "object" !== (void 0 === t ? "undefined" : a(t)) && console.error("id：" + t + " is invalid"), l.cut = t
          }
        },
        onReady: {
          default: null,
          get: function () {
            return l.ready
          },
          set: function (t) {
            l.ready = t
          }
        },
        onBeforeImageLoad: {
          default: null,
          get: function () {
            return l.beforeImageLoad
          },
          set: function (t) {
            l.beforeImageLoad = t
          }
        },
        onImageLoad: {
          default: null,
          get: function () {
            return l.imageLoad
          },
          set: function (t) {
            l.imageLoad = t
          }
        },
        onBeforeDraw: {
          default: null,
          get: function () {
            return l.beforeDraw
          },
          set: function (t) {
            l.beforeDraw = t
          }
        },
        onGetCropperImage: {
          default: null,
          get: function () {
            return l.getCropperImage
          },
          set: function (t) {
            l.getCropperImage = t
          }
        }
      },
      h = {
        touchStart: function (t) {
          var e = this,
            n = s(t.touches, 2),
            r = n[0],
            i = n[1];
          o(e, !0, null, null), e.reSetSizeStart(r), e.touchPoint >= 0 || (e.__oneTouchStart(r), t.touches.length >= 2 && e.__twoTouchStart(r, i))
        },
        touchMove: function (t) {
          var e = this,
            n = s(t.touches, 2),
            r = n[0],
            i = n[1];
          o(e, null, !0), e.touchPoint >= 0 ? e.reSetSizeMove(r) : (1 === t.touches.length && e.__oneTouchMove(r), t.touches.length >= 2 && e.__twoTouchMove(r, i))
        },
        touchEnd: function (t) {
          var e = this;
          o(e, !1, !1, !0), e.__xtouchEnd()
        }
      },
      g = function () {
        function t(e) {
          u(this, t);
          var o = this,
            r = getCurrentPages(),
            i = r[r.length - 1],
            c = {};
          return n(o, f), Object.keys(f)
            .forEach(function (t) {
              c[t] = f[t].default
            }), Object.assign(o, c, e), o.prepare(), o.attachPage(), o.createCtx(), o.observer(), o.cutt(), o.methods(), o.init(), o.update(), o.reSetSize(), o.imageRotate = {
              r: 0,
              x: 0,
              y: 0
            }, o.filePath && o.pushOrign(o.filePath), i[o.evname] = function (t) {
              var e = t.type,
                n = t.currentTarget ? t.currentTarget.dataset.action : "";
              switch (e) {
                case "touchstart":
                  o.touchStart(t);
                  break;
                case "touchend":
                  o.touchEnd(t);
                  break;
                case "touchmove":
                  o.touchMove(t);
                  break;
                case "tap":
                  "create" === n ? o.getCropperImage(function (t) {
                    "function" == typeof o.onGetCropperImage && o.onGetCropperImage(t, o)
                  }) : "rotate" === n && o.updateCanvas("rotate")
              }
            }, i.setData({
              "cropperOpt.evname": o.evname
            }), o
        }
        return d(t, [{
          key: "init",
          value: function () {
            var t = this,
              e = t.src;
            return t.version = "1.1.4", "function" == typeof t.onReady && t.onReady(t.ctx, t), e && t.pushOrign(e), o(t, !1, !1, !1), t.oldScale = 1, t.newScale = 1, t
          }
        }]), t
      }();
    return Object.assign(g.prototype, h), g.prototype.prepare = function () {
      var t = this,
        e = r()
        .windowWidth;
      t.attachPage = function () {
        var e = getCurrentPages();
        e[e.length - 1].wecropper = t
      }, t.createCtx = function () {
        var e = t.id;
        e ? t.ctx = wx.createCanvasContext(e) : console.error("constructor: create canvas context failed, 'id' must be valuable")
      }, t.deviceRadio = e / 750
    }, g.prototype.observer = function () {
      var t = this,
        o = ["ready", "beforeImageLoad", "beforeDraw", "imageLoad", "getCropperImage"];
      t.on = function (n, r) {
        return o.indexOf(n) > -1 ? "function" == typeof r && ("ready" === n ? r(t) : t["on" + e(n)] = r) : console.error("event: " + n + " is invalid"), t
      }
    }, g.prototype.methods = function () {
      var t = this,
        e = t.deviceRadio,
        o = t.width,
        n = t.height,
        r = t.cut,
        i = r.x,
        c = void 0 === i ? 0 : i,
        a = r.y,
        u = void 0 === a ? 0 : a,
        d = r.width,
        s = void 0 === d ? o : d,
        l = r.height,
        f = void 0 === l ? n : l;
      t.updateCanvas = function (e) {
        return t.croperTarget && t.ctx.drawImage(t.croperTarget, t.imgLeft, t.imgTop, t.scaleWidth, t.scaleHeight), "function" == typeof t.onBeforeDraw && t.onBeforeDraw(t.ctx, t), t.setBoundStyle(), t.ctx.draw(), t
      }, t.pushOrign = function (e) {
        return t.src = e, "function" == typeof t.onBeforeImageLoad && t.onBeforeImageLoad(t.ctx, t), wx.getImageInfo({
          src: e,
          success: function (e) {
            var o = e.width / e.height;
            t.croperTarget = e.path, o < s / f ? (t.rectX = c, t.baseWidth = s, t.baseHeight = s / o, t.rectY = u - Math.abs((f - t.baseHeight) / 2)) : (t.rectY = u, t.baseWidth = f * o, t.baseHeight = f, t.rectX = c - Math.abs((s - t.baseWidth) / 2)), t.imgLeft = t.rectX, t.imgTop = t.rectY, t.scaleWidth = t.baseWidth, t.scaleHeight = t.baseHeight, t.updateCanvas(), "function" == typeof t.onImageLoad && t.onImageLoad(t.ctx, t)
          }
        }), t.update(), t
      }, t.getCropperImage = function () {
        if (t.croperTarget) {
          for (var o = arguments.length, n = Array(o), r = 0; r < o; r++) n[r] = arguments[r];
          var i = t.id;
          switch (toString.call(n[0])) {
            case "[object Object]":
              var a = n[0].quality,
                d = void 0 === a ? 10 : a;
              "number" != typeof d ? console.error("quality：" + d + " is invalid") : (d < 0 || d > 10) && console.error("quality should be ranged in 0 ~ 10"), wx.canvasToTempFilePath({
                canvasId: i,
                x: c,
                y: u,
                width: s,
                height: f,
                destWidth: s * d / (10 * e),
                destHeight: f * d / (10 * e),
                complete: function (e) {
                  "function" == typeof n[n.length - 1] && n[n.length - 1](e.tempFilePath || t.filePath)
                }
              });
              break;
            case "[object Function]":
              wx.showToast({
                icon: "loading",
                title: "请稍后..."
              }), wx.canvasToTempFilePath({
                canvasId: i,
                x: c,
                y: u,
                width: s,
                height: f,
                destWidth: s / e,
                destHeight: f / e,
                complete: function (e) {
                  wx.hideToast({
                    complete: function () {
                      "function" == typeof n[n.length - 1] && n[n.length - 1](e.tempFilePath || t.filePath)
                    }
                  })
                }
              })
          }
          return t
        }
      }
    }, g.prototype.cutt = function () {
      var t = this,
        e = (t.deviceRadio, t.width),
        o = t.height,
        n = t.cut,
        r = n.x,
        i = void 0 === r ? 0 : r,
        c = n.y,
        a = void 0 === c ? 0 : c,
        u = n.width,
        d = void 0 === u ? e : u,
        s = n.height,
        l = void 0 === s ? o : s;
      t.outsideBound = function (e, o) {
        t.imgLeft = e >= i ? i : t.scaleWidth + e - i <= d ? i + d - t.scaleWidth : e, t.imgTop = o >= a ? a : t.scaleHeight + o - a <= l ? a + l - t.scaleHeight : o
      }, t.setBoundStyle = function () {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          r = n.color,
          c = void 0 === r ? "#04b00f" : r,
          u = n.mask,
          s = void 0 === u ? "rgba(0, 0, 0, 0.3)" : u,
          f = n.lineWidth,
          h = void 0 === f ? 1 : f;
        t.ctx.beginPath(), t.ctx.setFillStyle(s), t.ctx.fillRect(0, 0, i, o), t.ctx.fillRect(i, 0, d, a), t.ctx.fillRect(i, a + l, d, o - a - l), t.ctx.fillRect(i + d, 0, e - i - d, o), t.ctx.fill(), t.ctx.beginPath(), t.ctx.setStrokeStyle(c), t.ctx.setLineWidth(h), t.ctx.moveTo(i - h, a + 10 - h), t.ctx.lineTo(i - h, a - h), t.ctx.lineTo(i + 10 - h, a - h), t.ctx.stroke(), t.ctx.beginPath(), t.ctx.setStrokeStyle(c), t.ctx.setLineWidth(h), t.ctx.moveTo(i - h, a + l - 10 + h), t.ctx.lineTo(i - h, a + l + h), t.ctx.lineTo(i + 10 - h, a + l + h), t.ctx.stroke(), t.ctx.beginPath(), t.ctx.setStrokeStyle(c), t.ctx.setLineWidth(h), t.ctx.moveTo(i + d - 10 + h, a - h), t.ctx.lineTo(i + d + h, a - h), t.ctx.lineTo(i + d + h, a + 10 - h), t.ctx.stroke(), t.ctx.beginPath(), t.ctx.setStrokeStyle(c), t.ctx.setLineWidth(h), t.ctx.moveTo(i + d + h, a + l - 10 + h), t.ctx.lineTo(i + d + h, a + l + h), t.ctx.lineTo(i + d - 10 + h, a + l + h), t.ctx.stroke()
      }
    }, g.prototype.update = function () {
      var t = this;
      t.src && (t.__oneTouchStart = function (e) {
        t.touchX0 = e.x, t.touchY0 = e.y
      }, t.__oneTouchMove = function (e) {
        var o = void 0,
          n = void 0;
        if (t.touchended) return t.updateCanvas();
        o = e.x - t.touchX0, n = e.y - t.touchY0;
        var r = t.rectX + o,
          i = t.rectY + n;
        t.outsideBound(r, i), t.updateCanvas()
      }, t.__twoTouchStart = function (e, o) {
        var n = void 0,
          r = void 0,
          i = void 0;
        t.touchX1 = t.rectX + t.scaleWidth / 2, t.touchY1 = t.rectY + t.scaleHeight / 2, n = o.x - e.x, r = o.y - e.y, i = Math.sqrt(n * n + r * r), t.oldDistance = i
      }, t.__twoTouchMove = function (e, o) {
        var n = void 0,
          r = void 0,
          i = void 0,
          c = t.scale,
          a = t.zoom;
        n = o.x - e.x, r = o.y - e.y, i = Math.sqrt(n * n + r * r), t.newScale = t.oldScale + .001 * a * (i - t.oldDistance), t.newScale <= 1 && (t.newScale = 1), t.newScale >= c && (t.newScale = c), t.scaleWidth = t.newScale * t.baseWidth, t.scaleHeight = t.newScale * t.baseHeight;
        var u = t.touchX1 - t.scaleWidth / 2,
          d = t.touchY1 - t.scaleHeight / 2;
        t.outsideBound(u, d), t.updateCanvas()
      }, t.__xtouchEnd = function () {
        t.oldScale = t.newScale, t.rectX = t.imgLeft, t.rectY = t.imgTop
      })
    }, g.prototype.reSetSize = function () {
      var t = this;
      t.reSetSizeStart = function (e) {
        var o = t.width,
          n = t.height,
          r = t.cut.width,
          i = t.cut.height,
          c = (t.cut.x, t.cut.y, {
            x: (o - r) / 2,
            y: (n - i) / 2
          }),
          a = {
            x: c.x + r,
            y: c.y
          },
          u = {
            x: a.x,
            y: a.y + i
          },
          d = {
            x: 10,
            y: 10
          },
          s = -1;
        [c, a, u, {
          x: c.x,
          y: u.y
        }].forEach(function (t, o) {
          Math.abs(e.x - t.x) <= d.x && Math.abs(e.y - t.y) <= d.y && (s = o)
        }), t.touchPoint = s
      }, t.reSetSizeMove = function (e) {
        console.log(e), t.setBoundStyle()
      }
    }, g
  });
});
define("component/draw/draw.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
    return typeof t
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
  };
  module.exports = function (e) {
    var o = new Object,
      i = {
        order: [{
          action: "drawRect",
          data: [{
            color: "#ffffff"
          }, {
            type: "stroke"
          }]
        }, {
          action: "drawLine",
          data: [{
            coor: [
              [0, 65, 250, 65],
              [0, 130, 250, 130],
              [65, 0, 65, 130]
            ]
          }]
        }, {
          action: "drawArc",
          data: [{
            color: "#39b449",
            radius: 15,
            coor: [32.5, 30]
          }, {
            radius: 12,
            coor: [32.5, 95],
            color: "#009fff"
          }]
        }, {
          action: "drawPolygon",
          data: [{
            color: "#39b449",
            coor: [19, 37],
            points: [
              [32.5, 53],
              [46, 37]
            ]
          }, {
            color: "#009fff",
            coor: [22, 100],
            points: [
              [32, 115],
              [43, 100]
            ]
          }]
        }, {
          action: "fillText",
          data: [{
            value: "收",
            size: 20,
            align: "center",
            baseline: "middle",
            color: "#ffffff",
            coor: [32.5, 32.5]
          }, {
            value: "寄",
            baseline: "middle",
            align: "center",
            color: "#ffffff",
            coor: [32.5, 97.5]
          }, {
            key: "get_info",
            coor: [75, 12]
          }, {
            key: "send_info",
            coor: [75, 77]
          }, {
            size: 20,
            key: "brand_name",
            baseline: "middle",
            coor: [68, 164]
          }]
        }, {
          action: "drawImage",
          data: [{
            width: 48,
            height: 48,
            coor: [10, 140],
            key: "brand_logo"
          }]
        }]
      };
    return o.init = function () {
      var t = getCurrentPages();
      this.pageobj = t[t.length - 1], this.config = Object.assign({
        onGetImage: function (t) {},
        width: 250,
        height: 196,
        id: "drawCanvas",
        name: "drawData",
        template: [],
        tmpdata: {},
        isAuto: !1
      }, e), this.ctx = wx.createCanvasContext(this.config.id), this.config.isAuto && this.draw()
    }, o.draw = function (e, o, a) {
      var c = "object" == (void 0 === (a = a || this.config.template) ? "undefined" : t(a)) ? a : i[a],
        n = this;
      this.clearRect(), e = Object.assign(this.config.tmpdata, e || {}), c.map(function (t) {
        n[t.action] && (n.isArray(t.data) ? t.data.map(function (o) {
          n[t.action](o, e)
        }) : n[t.action](t.data, e))
      }), this.ctx.draw(!0), this.canvasToTempFilePath()
    }, o.canvasToTempFilePath = function () {
      var t = this;
      this.createImage && clearTimeout(this.createImage), this.createImage = setTimeout(function () {
        wx.canvasToTempFilePath({
          canvasId: t.config.id,
          complete: function (e) {
            t.config.onGetImage(e.tempFilePath || "")
          }
        })
      }, 300)
    }, o.drawRect = function (t) {
      var e = this.ctx;
      e[(t = Object.assign({
          width: this.config.width,
          height: this.config.height,
          coor: [0, 0],
          color: "#eeeeee",
          size: 1,
          type: "fill"
        }, t))
        .type + "Rect"] && (e["set" + this.wordHump(t.type) + "Style"](t.color), e[t.type + "Rect"](t.coor[0], t.coor[1], t.width, t.height))
    }, o.drawPolygon = function (t) {
      var e = this.ctx;
      t = Object.assign({
        coor: [],
        points: [],
        size: 1,
        type: "fill",
        color: "#eeeeee"
      }, t), e[t.type] && (e.beginPath(), e["set" + this.wordHump(t.type) + "Style"](t.color), "stroke" == t.type && e.setLineWidth(t.size), e.moveTo(t.coor[0], t.coor[1]), t.points.map(function (t) {
        e.lineTo(t[0], t[1])
      }), e[t.type](), e.closePath())
    }, o.drawLine = function (e) {
      var o = this.ctx;
      e = Object.assign({
        coor: [],
        size: 1,
        color: "#eeeeee"
      }, e), o.beginPath(), o.setStrokeStyle(e.color), e.coor = "object" == t(e.coor[0]) ? e.coor : [e.coor], e.coor.map(function (t) {
        o.setLineWidth(e.size), o.moveTo(t[0], t[1]), o.lineTo(t[2], t[3])
      }), o.closePath(), o.stroke()
    }, o.fillText = function (t, e) {
      var o = this.ctx;
      (t = Object.assign({
        coor: [0, 0],
        size: 16,
        spacing: 5,
        value: "",
        align: "left",
        baseline: "top",
        key: "",
        color: "black"
      }, t))
      .value = t.value || e[t.key] || "", o.setFillStyle(t.color), o.setFontSize(t.size), o.setTextBaseline(t.baseline), o.setTextAlign(t.align), this.isArray(t.value) ? t.value.map(function (e, i) {
        o.fillText(e, t.coor[0], i * t.size + (i > 0 ? t.spacing : 0) + t.coor[1])
      }) : o.fillText(t.value, t.coor[0], t.coor[1])
    }, o.drawImage = function (t, e, o) {
      var i = this,
        a = this.ctx;
      (t = Object.assign({
        coor: [0, 0],
        width: 10,
        height: 10,
        src: "",
        key: ""
      }, t))
      .src = t.src || e[t.key], this.createImage && clearTimeout(this.createImage), t.src ? wx.downloadFile({
        url: t.src,
        success: function (e) {
          a.drawImage(e.tempFilePath, t.coor[0], t.coor[1], t.width, t.height), a.draw(!0), i.canvasToTempFilePath()
        },
        fail: function () {
          i.canvasToTempFilePath()
        }
      }) : i.canvasToTempFilePath()
    }, o.drawArc = function (t) {
      var e = this.ctx;
      e[(t = Object.assign({
          coor: [10, 10],
          radius: 10,
          start: 0,
          end: 2 * Math.PI,
          color: "#eeeeee",
          type: "fill"
        }, t))
        .type] && (e.beginPath(), e.arc(t.coor[0], t.coor[1], t.radius, t.start, t.end), e["set" + this.wordHump(t.type) + "Style"](t.color), e[t.type]())
    }, o.clearRect = function (t) {
      t = Object.assign({
        coor: [0, 0],
        width: this.config.width,
        height: this.config.height
      }, t), this.ctx.clearRect(t.coor[0], t.coor[1], t.width, t.height)
    }, o.isArray = function (t) {
      return t instanceof Array
    }, o.wordHump = function (t, e) {
      if ("string" == typeof t) {
        var o = /\b(\w)|\s(\w)/g;
        return (t = e ? t.toLowerCase() : t)
          .replace(o, function (t) {
            return t.toUpperCase()
          })
      }
      return t
    }, o.init(), {
      draw: function (t, e, i) {
        e && (o.config.onGetImage = e), o.draw(t, e, i)
      }
    }
  };
});
define("component/drawer/drawer.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  module.exports = function (t) {
    var o = new Object;
    return o.init = function (t) {
      this.config = Object.assign({
        max: 120,
        min: 60,
        longtimer: 500,
        dataFilter: function () {
          return {}
        },
        onTouch: function () {},
        onTap: function () {},
        onLongPress: function () {},
        flagKey: "flag",
        name: "drawer",
        evname: "onDrawer",
        direction: "left"
      }, t);
      var o = getCurrentPages(),
        e = this;
      this.sysInfo = wx.getSystemInfoSync(), this.pageobj = o[o.length - 1], this.touch = {
        start: {
          x: 0,
          y: 0
        },
        end: {
          x: 0,
          y: 0
        },
        move: {
          x: 0,
          y: 0
        },
        direction: "in",
        correct: "left" == this.config.direction ? -1 : 1,
        evtype: "ready",
        flag: ""
      }, this.pageobj[this.config.evname] = function (t) {
        e.touch.evtype = t.type;
        var o, a, c, s = t.touches.length > 0 ? t.touches : t.changedTouches;
        if (!(s.length > 1)) {
          switch (o = t.currentTarget.dataset, c = e.pageobj.data[e.config.name], a = e.config.dataFilter(o), e.longtimer && clearTimeout(e.longtimer), t.type) {
            case "touchstart":
              e.touch.direction = "in", e.touch.flag = o[e.config.flagKey], e.startPageX = s[0].pageX, e.touch.start.x = c.flag == e.touch.flag ? s[0].pageX - c.move : s[0].pageX, e.touch.start.y = s[0].pageY, e.startStatus = c.status, c.flag !== e.touch.flag && e.switch("close", {
                flag: e.touch.flag
              }), e.isLongpress = !1, "close" != e.startStatus && "ready" != e.startStatus || (e.longtimer = setTimeout(function () {
                "in" == e.touch.direction && (e.isLongpress = !0, e.config.onLongPress(o, a))
              }, e.config.longtimer));
              break;
            case "tap":
              e.switch(o.status, {
                flag: o.flag
              });
              break;
            case "touchmove":
            case "touchcancel":
            case "touchend":
            default:
              if (e.touch.end.x = s[0].pageX, e.touch.end.y = s[0].pageY, e.touch.move.x = e.touch.end.x - e.touch.start.x, e.touch.move.y = e.touch.end.y - e.touch.start.y, Math.abs(e.touch.move.x) <= 50 && Math.abs(e.touch.move.y) > 50 && Math.abs(e.touch.move.y) > Math.abs(e.touch.move.x) ? e.touch.direction = e.touch.move.y > 0 ? "bottom" : "top" : Math.abs(e.touch.move.y) <= 50 && Math.abs(e.touch.move.x) > 50 && Math.abs(e.touch.move.x) > Math.abs(e.touch.move.y) ? (e.touch.direction = e.touch.end.x - e.startPageX > 0 ? "right" : "left", e.getData("isScroll") && e.setData({
                  isScroll: !1
                })) : e.touch.direction = "in", "touchmove" == t.type) {
                if ("bottom" == e.touch.direction || "top" == e.touch.direction || e.isLongpress || Math.abs(e.touch.move.x) >= e.config.max + e.config.max / 2) return;
                e.switch("move", {
                  flag: e.touch.flag,
                  move: c.move >= 0 && e.touch.correct * e.touch.move.x < 0 ? 0 : e.touch.move.x
                })
              } else "in" != e.touch.direction || "touchend" != t.type || "close" != c.status || "open" == e.startStatus || e.isLongpress || e.config.onTap(o, a), e.switch(!e.isLongpress && "open" != c.status && e.touch.direction == e.config.direction && Math.abs(e.touch.move.x) >= e.config.min ? "open" : "close", {
                flag: e.touch.flag,
                evtype: t.type
              }), e.scrollDelayTimer && clearTimeout(e.scrollDelayTimer), e.scrollDelayTimer = setTimeout(function () {
                !e.getData("isScroll") && e.setData({
                  isScroll: !0
                })
              }, 500)
          }
          e.config.onTouch(t.type, {
            touch: e.touch,
            drawer: c,
            dataset: o
          })
        }
      }, this.setData({
        flag: "",
        move: 0,
        isScroll: !0,
        status: "ready",
        evname: this.config.evname
      })
    }, o.getData = function (t) {
      var o = this.pageobj.data[this.config.name];
      return t ? o[t] : o
    }, o.setData = function (t) {
      var o = {};
      for (var e in t) o[this.config.name + "." + e] = t[e];
      this.pageobj.setData(o)
    }, o.switch = function (t, o) {
      var e = this.sysInfo.system.indexOf("iOS") >= 0,
        a = this.getData();
      ("move" == (t = t || ("open" == a.status ? "close" : "open")) && e || a.status != t) && this.setData({
        status: t,
        move: "open" == t ? this.touch.correct * this.config.max : "move" == t && e ? o.move : 0,
        flag: o && o.flag || a.flag || ""
      })
    }, o.init(t), o
  };
});
define("component/form/check.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  var e = require("../../servejs/tools.js"),
    r = require("regular.js");
  module.exports = function (u, i, s) {
    var t, n, o, l, a, f, m, g, b = "",
      p = 0,
      c = "",
      d = "";
    for (t in i)
      if ((!s || s == t) && u[t])
        if (m = ("string" == typeof u[t].rule ? r[u[t].rule] : u[t].rule) || {}, l = u[t].max || "", a = u[t].min || "", g = i[t], d = u[t].tag || "该项", g) {
          if (g = e.trim(g), m.rule && !m.rule.test(g)) {
            b = m.msg, p = m.code, c = t;
            break
          }
          if (n = r.type || "string", o = 1 * ("number" == n ? g : g.length), l && o > l || a && o < a) {
            f = [], l && f.push("小于等于" + l), a && f.push("大于等于" + a), p = 1002, b = d + ("number" == n ? "" : "长度") + "必须" + f.join("且");
            break
          }
        } else if (0 != u[t].required) {
      b = d + "不能为空", p = 1001, c = t;
      break
    }
    return {
      errorKey: c,
      msg: b,
      code: p
    }
  };
});
define("component/form/form.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
      value: a,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = a, t
  }
  var e = require("../../servejs/tools.js"),
    a = require("../../servejs/api.js"),
    o = require("check.js");
  module.exports = function (i, r) {
    var n = new Object;
    return n.init = function () {
      var t;
      this.pageobj = r || e.getPage(), this.formData = {}, this.config = e.extendJson(!0, {
        name: "form",
        form: {},
        data: {},
        isClearAll: !1,
        clearKeys: [],
        request: {
          isset: !1
        },
        beforeRequest: function () {
          return {
            code: 0
          }
        },
        evname: "onFormEvent",
        unSaveFormKeys: [],
        isGetStorage: !0,
        storageKey: "",
        disabled: !0,
        onReady: function () {},
        onSuccess: function () {},
        cb: function () {}
      }, i), this.pageobj[this.config.evname] = this.handler.bind(this);
      for (var a in this.config.form) void 0 === this.config.form[a].value && (this.config.form[a].value = ""), this.formData[a] = e.trim(this.config.form[a].value);
      this.config.storageKey && this.config.isGetStorage && (t = this.getStorage()) && this.update(t, "init"), this.updateFormState("init"), this.config.onReady(this.formData)
    }, n.clearForm = function () {
      function t(t) {
        e.isArray(o[t]) ? o[t] = a[t].value = [] : e.isJson(o[t]) ? o[t] = a[t].value = {} : o[t] = a[t].value = ""
      }
      var a = this.config.form,
        o = this.formData;
      if (this.config.isClearAll)
        for (var i in o) t(i);
      else this.config.clearKeys.map(function (e) {
        t(e)
      });
      this.config.storageKey && this.saveStorage(this.formData), this.config.cb("clean", o)
    }, n.saveStorage = function (t) {
      var a = this.config.storageKey,
        o = {};
      for (var i in t) e.inArray(i, this.config.unSaveFormKeys) || (o[i] = t[i]);
      a && wx.setStorage({
        key: a,
        data: o
      })
    }, n.getStorage = function (t) {
      var e;
      if (!(t = this.config.storageKey)) return e;
      try {
        e = wx.getStorageSync(t)
      } catch (t) {}
      return e
    }, n.submit = function (t, o) {
      var i, r = this,
        n = this.config.request,
        s = n.data,
        c = n.url;
      s = e.extendJson(!0, {}, r.formData, t, o, r.config.data), this.config.request.data = s, (i = (i = r.config.onBeforeSend && r.config.onBeforeSend(s)) || {
          code: 0
        })
        .code > 0 ? r.config.onSuccess(i.data, s, "norequest") : c && (r.setData({
          disabled: !0
        }), r.config.request.dataname = r.config.name, r.config.request.onComplete = function (t, e) {
          0 == t.code && r.clearForm(), r.updateFormState(), r.config.onSuccess(t, e)
        }, a.apiDataRequest(r.config.request))
    }, n.handler = function (a) {
      var o, i = this.config,
        r = i.onSubmit,
        n = i.name,
        s = i.cb,
        c = a.type,
        f = a.currentTarget.id,
        u = a.detail.value,
        d = this,
        h = this.pageobj.data[n].errorKey || {},
        g = {},
        m = {};
      switch (c) {
        case "submit":
          u = e.extendJson(!0, {}, this.formData, a.detail.value), m = a.detail.target.dataset, a.detail.formId && (u.formId = a.detail.formId), r ? r(u, m) : d.submit(u, m);
          break;
        case "focus":
          h[f] = !1, d.setData({
            errorKey: h
          }), s("focus", {
            evtype: c,
            currentData: t({}, f, u)
          });
          break;
        case "blur":
          g[f] = u, d.update(g, "blur"), d.setFormData();
        case "input":
          g[f] = u, d.update(g, "input");
        default:
          o = d.check(f), h[f] = "blur" == c && o.code > 0, 0 == o.code && (o = d.check()), d.setData({
            errorKey: h,
            disabled: o.code > 0
          })
      }
    }, n.updateFormState = function (t) {
      var e = this.check(),
        a = {
          data: this.formData,
          evname: this.config.evname,
          disabled: e.code > 0
        };
      this.setData(a)
    }, n.check = function (t) {
      return o(this.config.form, this.formData, t)
    }, n.update = function (t, a, o) {
      var i = this.config,
        r = i.name,
        n = i.cb,
        s = i.form,
        c = i.storageKey,
        f = this.pageobj.data[r] && this.pageobj.data[r].errorKey || {};
      for (var u in t) s[u] && (t[u] = e.trim(t[u]), this.formData[u] = t[u], s[u].value = t[u], "reUpdate" == a && 0 == this.check(u)
        .code && (f[u] = !1));
      "init" != a && c && this.saveStorage(this.formData), this.setData({
        errorKey: f
      }), n("update", {
        formData: this.formData,
        currentData: t,
        evtype: a,
        flag: o
      })
    }, n.setFormData = function () {
      this.setData({
        data: this.formData
      })
    }, n.setData = function (t) {
      var e = this.config.name,
        a = {};
      for (var o in t) a[e + "." + o] = t[o];
      this.pageobj.setData(a)
    }, n.init(), {
      submit: function (t) {
        var e = !0 === ("boolean" == typeof arguments[1] ? arguments[1] : arguments[2]) ? {
            code: 0
          } : n.check(),
          a = "function" == typeof arguments[0] ? arguments[0] : arguments[1];
        0 == e.code && n.submit(t), "function" == typeof a && a(e)
      },
      update: function (t, e) {
        n.update(t, "reUpdate", e || "flag"), n.setFormData(), n.updateFormState()
      },
      clean: function () {
        n.clearForm(), n.updateFormState()
      }
    }
  };
});
define("component/form/regular.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  module.exports = {
    phone: {
      code: 3001,
      rule: /^1[2-9]{1}[0-9]{1}\d{8}$/,
      msg: "手机号码输入错误"
    },
    telPhone: {
      code: 3002,
      rule: /^(0\d{2,3}(-|\s?))?[2-9]{1}\d{6,7}((-|\s?)\d{1,4})?$/,
      msg: "电话号码输入错误"
    },
    contact: {
      code: 30012,
      rule: /^1\d{10}$|^(0\d{2,3}(-|\s?))?[2-9]{1}\d{6,7}((-|\s?)\d{1,4})?$/,
      msg: "请输入正确的手机或固话"
    },
    cardId: {
      code: 3003,
      rule: /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/,
      msg: "身份证号输入错误"
    },
    letter: {
      code: 3004,
      rule: /^[A-Za-z0-9]+$/,
      msg: "只允许输入数字和字母"
    },
    number: {
      code: 3005,
      type: "number",
      rule: /^[0-9]\d*$/,
      msg: "只允许输入数字"
    },
    area: {
      code: 3006,
      rule: /^[\u4e00-\u9fa5]+-[\u4e00-\u9fa5]+-[\u4e00-\u9fa5]+$/,
      msg: "区域格式不合法pp-cc-dd"
    },
    m_bracket: {
      code: 3007,
      rule: /\*?\[\]$/,
      msg: "不是[]"
    },
    date: {
      code: 3008,
      rule: /([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8])))/,
      msg: "日期格式不合法"
    },
    sex: {
      code: 3009,
      rule: /^\u7537$|^\u5973$/,
      msg: "只允许输入男或女"
    },
    psw_m: {
      code: 3010,
      rule: /^[A-Za-z0-9:!&%]{6,16}$/,
      msg: "6-16位字符，区分大小写，支持部分特殊字符"
    },
    decimal_1: {
      code: 3014,
      type: "number",
      rule: /^\d*(.?)\d{1}$/,
      msg: "数字且最多允许一位小数"
    },
    decimal_2: {
      code: 3011,
      type: "number",
      rule: /^\d*(.?)\d{1,2}$/,
      msg: "数字且最多允许两位小数"
    },
    hasParam: {
      code: 3012,
      rule: /\?\w+=/,
      msg: "带有参数,如?abc="
    },
    url: {
      code: 3013,
      rule: /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i,
      msg: "网址不正确"
    },
    waybill_num: {
      code: 3014,
      rule: /^[0-9a-zA-Z]{8,30}$/,
      msg: "单号不正确"
    },
    address: {
      code: 3015,
      rule: /省|市|县|区|路|街|弄/,
      msg: "非地址信息"
    },
    bh: {
      code: 3016,
      rule: /^[0-9a-zA-Z]{0,2}\d{1,3}$/,
      msg: "取货码最大99999，前两位可为字母"
    }
  };
});
define("component/loader/loader.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
});
define("component/request/request.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  module.exports = function (s) {
    s = Object.assign({}, s)
  };
});
define("plugLib/CryptoJS/core.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
    return typeof t
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
  };
  ! function (n, i) {
    "object" === ("undefined" == typeof exports ? "undefined" : t(exports)) ? module.exports = exports = i(): "function" == typeof define && define.amd ? define([], i) : n.CryptoJS = i()
  }(void 0, function () {
    var t = t || function (t, n) {
      var i = Object.create || function () {
          function t() {}
          return function (n) {
            var i;
            return t.prototype = n, i = new t, t.prototype = null, i
          }
        }(),
        e = {},
        r = e.lib = {},
        o = r.Base = {
          extend: function (t) {
            var n = i(this);
            return t && n.mixIn(t), n.hasOwnProperty("init") && this.init !== n.init || (n.init = function () {
              n.$super.init.apply(this, arguments)
            }), n.init.prototype = n, n.$super = this, n
          },
          create: function () {
            var t = this.extend();
            return t.init.apply(t, arguments), t
          },
          init: function () {},
          mixIn: function (t) {
            for (var n in t) t.hasOwnProperty(n) && (this[n] = t[n]);
            t.hasOwnProperty("toString") && (this.toString = t.toString)
          },
          clone: function () {
            return this.init.prototype.extend(this)
          }
        },
        s = r.WordArray = o.extend({
          init: function (t, n) {
            t = this.words = t || [], this.sigBytes = void 0 != n ? n : 4 * t.length
          },
          toString: function (t) {
            return (t || c)
              .stringify(this)
          },
          concat: function (t) {
            var n = this.words,
              i = t.words,
              e = this.sigBytes,
              r = t.sigBytes;
            if (this.clamp(), e % 4)
              for (s = 0; s < r; s++) {
                var o = i[s >>> 2] >>> 24 - s % 4 * 8 & 255;
                n[e + s >>> 2] |= o << 24 - (e + s) % 4 * 8
              } else
                for (var s = 0; s < r; s += 4) n[e + s >>> 2] = i[s >>> 2];
            return this.sigBytes += r, this
          },
          clamp: function () {
            var n = this.words,
              i = this.sigBytes;
            n[i >>> 2] &= 4294967295 << 32 - i % 4 * 8, n.length = t.ceil(i / 4)
          },
          clone: function () {
            var t = o.clone.call(this);
            return t.words = this.words.slice(0), t
          },
          random: function (n) {
            for (var i, e = [], r = 0; r < n; r += 4) {
              var o = function (n) {
                var n = n,
                  i = 987654321,
                  e = 4294967295;
                return function () {
                  var r = ((i = 36969 * (65535 & i) + (i >> 16) & e) << 16) + (n = 18e3 * (65535 & n) + (n >> 16) & e) & e;
                  return r /= 4294967296, (r += .5) * (t.random() > .5 ? 1 : -1)
                }
              }(4294967296 * (i || t.random()));
              i = 987654071 * o(), e.push(4294967296 * o() | 0)
            }
            return new s.init(e, n)
          }
        }),
        a = e.enc = {},
        c = a.Hex = {
          stringify: function (t) {
            for (var n = t.words, i = t.sigBytes, e = [], r = 0; r < i; r++) {
              var o = n[r >>> 2] >>> 24 - r % 4 * 8 & 255;
              e.push((o >>> 4)
                .toString(16)), e.push((15 & o)
                .toString(16))
            }
            return e.join("")
          },
          parse: function (t) {
            for (var n = t.length, i = [], e = 0; e < n; e += 2) i[e >>> 3] |= parseInt(t.substr(e, 2), 16) << 24 - e % 8 * 4;
            return new s.init(i, n / 2)
          }
        },
        u = a.Latin1 = {
          stringify: function (t) {
            for (var n = t.words, i = t.sigBytes, e = [], r = 0; r < i; r++) {
              var o = n[r >>> 2] >>> 24 - r % 4 * 8 & 255;
              e.push(String.fromCharCode(o))
            }
            return e.join("")
          },
          parse: function (t) {
            for (var n = t.length, i = [], e = 0; e < n; e++) i[e >>> 2] |= (255 & t.charCodeAt(e)) << 24 - e % 4 * 8;
            return new s.init(i, n)
          }
        },
        f = a.Utf8 = {
          stringify: function (t) {
            try {
              return decodeURIComponent(escape(u.stringify(t)))
            } catch (t) {
              throw new Error("Malformed UTF-8 data")
            }
          },
          parse: function (t) {
            return u.parse(unescape(encodeURIComponent(t)))
          }
        },
        p = r.BufferedBlockAlgorithm = o.extend({
          reset: function () {
            this._data = new s.init, this._nDataBytes = 0
          },
          _append: function (t) {
            "string" == typeof t && (t = f.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes
          },
          _process: function (n) {
            var i = this._data,
              e = i.words,
              r = i.sigBytes,
              o = this.blockSize,
              a = r / (4 * o),
              c = (a = n ? t.ceil(a) : t.max((0 | a) - this._minBufferSize, 0)) * o,
              u = t.min(4 * c, r);
            if (c) {
              for (var f = 0; f < c; f += o) this._doProcessBlock(e, f);
              var p = e.splice(0, c);
              i.sigBytes -= u
            }
            return new s.init(p, u)
          },
          clone: function () {
            var t = o.clone.call(this);
            return t._data = this._data.clone(), t
          },
          _minBufferSize: 0
        }),
        h = (r.Hasher = p.extend({
          cfg: o.extend(),
          init: function (t) {
            this.cfg = this.cfg.extend(t), this.reset()
          },
          reset: function () {
            p.reset.call(this), this._doReset()
          },
          update: function (t) {
            return this._append(t), this._process(), this
          },
          finalize: function (t) {
            return t && this._append(t), this._doFinalize()
          },
          blockSize: 16,
          _createHelper: function (t) {
            return function (n, i) {
              return new t.init(i)
                .finalize(n)
            }
          },
          _createHmacHelper: function (t) {
            return function (n, i) {
              return new h.HMAC.init(t, i)
                .finalize(n)
            }
          }
        }), e.algo = {});
      return e
    }(Math);
    return t
  });
});
define("plugLib/CryptoJS/md5.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
    return typeof t
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
  };
  ! function (r, o) {
    "object" === ("undefined" == typeof exports ? "undefined" : t(exports)) ? module.exports = exports = o(require("./core")): "function" == typeof define && define.amd ? define(["./core"], o) : o(r.CryptoJS)
  }(void 0, function (t) {
    return function (r) {
      function o(t, r, o, e, n, i, a) {
        var s = t + (r & o | ~r & e) + n + a;
        return (s << i | s >>> 32 - i) + r
      }

      function e(t, r, o, e, n, i, a) {
        var s = t + (r & e | o & ~e) + n + a;
        return (s << i | s >>> 32 - i) + r
      }

      function n(t, r, o, e, n, i, a) {
        var s = t + (r ^ o ^ e) + n + a;
        return (s << i | s >>> 32 - i) + r
      }

      function i(t, r, o, e, n, i, a) {
        var s = t + (o ^ (r | ~e)) + n + a;
        return (s << i | s >>> 32 - i) + r
      }
      var a = t,
        s = a.lib,
        c = s.WordArray,
        f = s.Hasher,
        u = a.algo,
        h = [];
      ! function () {
        for (var t = 0; t < 64; t++) h[t] = 4294967296 * r.abs(r.sin(t + 1)) | 0
      }();
      var l = u.MD5 = f.extend({
        _doReset: function () {
          this._hash = new c.init([1732584193, 4023233417, 2562383102, 271733878])
        },
        _doProcessBlock: function (t, r) {
          for (var a = 0; a < 16; a++) {
            var s = r + a,
              c = t[s];
            t[s] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8)
          }
          var f = this._hash.words,
            u = t[r + 0],
            l = t[r + 1],
            y = t[r + 2],
            d = t[r + 3],
            p = t[r + 4],
            v = t[r + 5],
            _ = t[r + 6],
            m = t[r + 7],
            b = t[r + 8],
            S = t[r + 9],
            x = t[r + 10],
            D = t[r + 11],
            H = t[r + 12],
            M = t[r + 13],
            g = t[r + 14],
            w = t[r + 15],
            B = f[0],
            j = f[1],
            k = f[2],
            q = f[3];
          j = i(j = i(j = i(j = i(j = n(j = n(j = n(j = n(j = e(j = e(j = e(j = e(j = o(j = o(j = o(j = o(j, k = o(k, q = o(q, B = o(B, j, k, q, u, 7, h[0]), j, k, l, 12, h[1]), B, j, y, 17, h[2]), q, B, d, 22, h[3]), k = o(k, q = o(q, B = o(B, j, k, q, p, 7, h[4]), j, k, v, 12, h[5]), B, j, _, 17, h[6]), q, B, m, 22, h[7]), k = o(k, q = o(q, B = o(B, j, k, q, b, 7, h[8]), j, k, S, 12, h[9]), B, j, x, 17, h[10]), q, B, D, 22, h[11]), k = o(k, q = o(q, B = o(B, j, k, q, H, 7, h[12]), j, k, M, 12, h[13]), B, j, g, 17, h[14]), q, B, w, 22, h[15]), k = e(k, q = e(q, B = e(B, j, k, q, l, 5, h[16]), j, k, _, 9, h[17]), B, j, D, 14, h[18]), q, B, u, 20, h[19]), k = e(k, q = e(q, B = e(B, j, k, q, v, 5, h[20]), j, k, x, 9, h[21]), B, j, w, 14, h[22]), q, B, p, 20, h[23]), k = e(k, q = e(q, B = e(B, j, k, q, S, 5, h[24]), j, k, g, 9, h[25]), B, j, d, 14, h[26]), q, B, b, 20, h[27]), k = e(k, q = e(q, B = e(B, j, k, q, M, 5, h[28]), j, k, y, 9, h[29]), B, j, m, 14, h[30]), q, B, H, 20, h[31]), k = n(k, q = n(q, B = n(B, j, k, q, v, 4, h[32]), j, k, b, 11, h[33]), B, j, D, 16, h[34]), q, B, g, 23, h[35]), k = n(k, q = n(q, B = n(B, j, k, q, l, 4, h[36]), j, k, p, 11, h[37]), B, j, m, 16, h[38]), q, B, x, 23, h[39]), k = n(k, q = n(q, B = n(B, j, k, q, M, 4, h[40]), j, k, u, 11, h[41]), B, j, d, 16, h[42]), q, B, _, 23, h[43]), k = n(k, q = n(q, B = n(B, j, k, q, S, 4, h[44]), j, k, H, 11, h[45]), B, j, w, 16, h[46]), q, B, y, 23, h[47]), k = i(k, q = i(q, B = i(B, j, k, q, u, 6, h[48]), j, k, m, 10, h[49]), B, j, g, 15, h[50]), q, B, v, 21, h[51]), k = i(k, q = i(q, B = i(B, j, k, q, H, 6, h[52]), j, k, d, 10, h[53]), B, j, x, 15, h[54]), q, B, l, 21, h[55]), k = i(k, q = i(q, B = i(B, j, k, q, b, 6, h[56]), j, k, w, 10, h[57]), B, j, _, 15, h[58]), q, B, M, 21, h[59]), k = i(k, q = i(q, B = i(B, j, k, q, p, 6, h[60]), j, k, D, 10, h[61]), B, j, y, 15, h[62]), q, B, S, 21, h[63]), f[0] = f[0] + B | 0, f[1] = f[1] + j | 0, f[2] = f[2] + k | 0, f[3] = f[3] + q | 0
        },
        _doFinalize: function () {
          var t = this._data,
            o = t.words,
            e = 8 * this._nDataBytes,
            n = 8 * t.sigBytes;
          o[n >>> 5] |= 128 << 24 - n % 32;
          var i = r.floor(e / 4294967296),
            a = e;
          o[15 + (n + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), o[14 + (n + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), t.sigBytes = 4 * (o.length + 1), this._process();
          for (var s = this._hash, c = s.words, f = 0; f < 4; f++) {
            var u = c[f];
            c[f] = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8)
          }
          return s
        },
        clone: function () {
          var t = f.clone.call(this);
          return t._hash = this._hash.clone(), t
        }
      });
      a.MD5 = f._createHelper(l), a.HmacMD5 = f._createHmacHelper(l)
    }(Math), t.MD5
  });
});
define("plugLib/Pinyin/pinyin.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  function n(n, i) {
    for (var e in u)
      if (-1 != u[e].indexOf(n)) return a(e);
    return !1
  }

  function a(n) {
    if (n.length > 0) return n.substr(0, 1)
      .toUpperCase() + n.substr(1, n.length)
  }
  var u = {
    a: "啊阿锕",
    ai: "埃挨哎唉哀皑癌蔼矮艾碍爱隘诶捱嗳嗌嫒瑷暧砹锿霭",
    an: "鞍氨安俺按暗岸胺案谙埯揞犴庵桉铵鹌顸黯",
    ang: "肮昂盎",
    ao: "凹敖熬翱袄傲奥懊澳坳拗嗷噢岙廒遨媪骜聱螯鏊鳌鏖",
    ba: "芭捌扒叭吧笆八疤巴拔跋靶把耙坝霸罢爸茇菝萆捭岜灞杷钯粑鲅魃",
    bai: "白柏百摆佰败拜稗薜掰鞴",
    ban: "斑班搬扳般颁板版扮拌伴瓣半办绊阪坂豳钣瘢癍舨",
    bang: "邦帮梆榜膀绑棒磅蚌镑傍谤蒡螃",
    bao: "苞胞包褒雹保堡饱宝抱报暴豹鲍爆勹葆宀孢煲鸨褓趵龅",
    bo: "剥薄玻菠播拨钵波博勃搏铂箔伯帛舶脖膊渤泊驳亳蕃啵饽檗擘礴钹鹁簸跛",
    bei: "杯碑悲卑北辈背贝钡倍狈备惫焙被孛陂邶埤蓓呗怫悖碚鹎褙鐾",
    ben: "奔苯本笨畚坌锛",
    beng: "崩绷甭泵蹦迸唪嘣甏",
    bi: "逼鼻比鄙笔彼碧蓖蔽毕毙毖币庇痹闭敝弊必辟壁臂避陛匕仳俾芘荜荸吡哔狴庳愎滗濞弼妣婢嬖璧贲畀铋秕裨筚箅篦舭襞跸髀",
    bian: "鞭边编贬扁便变卞辨辩辫遍匾弁苄忭汴缏煸砭碥稹窆蝙笾鳊",
    biao: "标彪膘表婊骠飑飙飚灬镖镳瘭裱鳔",
    bie: "鳖憋别瘪蹩鳘",
    bin: "彬斌濒滨宾摈傧浜缤玢殡膑镔髌鬓",
    bing: "兵冰柄丙秉饼炳病并禀邴摒绠枋槟燹",
    bu: "捕卜哺补埠不布步簿部怖拊卟逋瓿晡钚醭",
    ca: "擦嚓礤",
    cai: "猜裁材才财睬踩采彩菜蔡",
    can: "餐参蚕残惭惨灿骖璨粲黪",
    cang: "苍舱仓沧藏伧",
    cao: "操糙槽曹草艹嘈漕螬艚",
    ce: "厕策侧册测刂帻恻",
    ceng: "层蹭噌",
    cha: "插叉茬茶查碴搽察岔差诧猹馇汊姹杈楂槎檫钗锸镲衩",
    chai: "拆柴豺侪茈瘥虿龇",
    chan: "搀掺蝉馋谗缠铲产阐颤冁谄谶蒇廛忏潺澶孱羼婵嬗骣觇禅镡裣蟾躔",
    chang: "昌猖场尝常长偿肠厂敞畅唱倡伥鬯苌菖徜怅惝阊娼嫦昶氅鲳",
    chao: "超抄钞朝嘲潮巢吵炒怊绉晁耖",
    che: "车扯撤掣彻澈坼屮砗",
    chen: "郴臣辰尘晨忱沉陈趁衬称谌抻嗔宸琛榇肜胂碜龀",
    cheng: "撑城橙成呈乘程惩澄诚承逞骋秤埕嵊徵浈枨柽樘晟塍瞠铖裎蛏酲",
    chi: "吃痴持匙池迟弛驰耻齿侈尺赤翅斥炽傺墀芪茌搋叱哧啻嗤彳饬沲媸敕胝眙眵鸱瘛褫蚩螭笞篪豉踅踟魑",
    chong: "充冲虫崇宠茺忡憧铳艟",
    chou: "抽酬畴踌稠愁筹仇绸瞅丑俦圳帱惆溴妯瘳雠鲋",
    chu: "臭初出橱厨躇锄雏滁除楚础储矗搐触处亍刍憷绌杵楮樗蜍蹰黜",
    chuan: "揣川穿椽传船喘串掾舛惴遄巛氚钏镩舡",
    chuang: "疮窗幢床闯创怆",
    chui: "吹炊捶锤垂陲棰槌",
    chun: "春椿醇唇淳纯蠢促莼沌肫朐鹑蝽",
    chuo: "戳绰蔟辶辍镞踔龊",
    ci: "疵茨磁雌辞慈瓷词此刺赐次荠呲嵯鹚螅糍趑",
    cong: "聪葱囱匆从丛偬苁淙骢琮璁枞",
    cu: "凑粗醋簇猝殂蹙",
    cuan: "蹿篡窜汆撺昕爨",
    cui: "摧崔催脆瘁粹淬翠萃悴璀榱隹",
    cun: "村存寸磋忖皴",
    cuo: "撮搓措挫错厝脞锉矬痤鹾蹉躜",
    da: "搭达答瘩打大耷哒嗒怛妲疸褡笪靼鞑",
    dai: "呆歹傣戴带殆代贷袋待逮怠埭甙呔岱迨逯骀绐玳黛",
    dan: "耽担丹单郸掸胆旦氮但惮淡诞弹蛋亻儋卩萏啖澹檐殚赕眈瘅聃箪",
    dang: "当挡党荡档谠凼菪宕砀铛裆",
    dao: "刀捣蹈倒岛祷导到稻悼道盗叨啁忉洮氘焘忑纛",
    de: "德得的锝",
    deng: "蹬灯登等瞪凳邓噔嶝戥磴镫簦",
    di: "堤低滴迪敌笛狄涤翟嫡抵底地蒂第帝弟递缔氐籴诋谛邸坻莜荻嘀娣柢棣觌砥碲睇镝羝骶",
    dian: "颠掂滇碘点典靛垫电佃甸店惦奠淀殿丶阽坫埝巅玷癜癫簟踮",
    diao: "碉叼雕凋刁掉吊钓调轺铞蜩粜貂",
    die: "跌爹碟蝶迭谍叠佚垤堞揲喋渫轶牒瓞褶耋蹀鲽鳎",
    ding: "丁盯叮钉顶鼎锭定订丢仃啶玎腚碇町铤疔耵酊",
    dong: "东冬董懂动栋侗恫冻洞垌咚岽峒夂氡胨胴硐鸫",
    dou: "兜抖斗陡豆逗痘蔸钭窦窬蚪篼酡",
    du: "都督毒犊独读堵睹赌杜镀肚度渡妒芏嘟渎椟橐牍蠹笃髑黩",
    duan: "端短锻段断缎彖椴煅簖",
    dui: "堆兑队对怼憝碓",
    dun: "墩吨蹲敦顿囤钝盾遁炖砘礅盹镦趸",
    duo: "掇哆多夺垛躲朵跺舵剁惰堕咄哚缍柁铎裰踱",
    e: "蛾峨鹅俄额讹娥恶厄扼遏鄂饿噩谔垩垭苊莪萼呃愕屙婀轭曷腭硪锇锷鹗颚鳄",
    en: "恩蒽摁唔嗯",
    er: "而儿耳尔饵洱二贰迩珥铒鸸鲕",
    fa: "发罚筏伐乏阀法珐垡砝",
    fan: "藩帆番翻樊矾钒繁凡烦反返范贩犯饭泛蘩幡犭梵攵燔畈蹯",
    fang: "坊芳方肪房防妨仿访纺放匚邡彷钫舫鲂",
    fei: "菲非啡飞肥匪诽吠肺废沸费芾狒悱淝妃绋绯榧腓斐扉祓砩镄痱蜚篚翡霏鲱",
    fen: "芬酚吩氛分纷坟焚汾粉奋份忿愤粪偾瀵棼愍鲼鼢",
    feng: "丰封枫蜂峰锋风疯烽逢冯缝讽奉凤俸酆葑沣砜",
    fu: "佛否夫敷肤孵扶拂辐幅氟符伏俘服浮涪福袱弗甫抚辅俯釜斧脯腑府腐赴副覆赋复傅付阜父腹负富讣附妇缚咐匐凫郛芙苻茯莩菔呋幞滏艴孚驸绂桴赙黻黼罘稃馥虍蚨蜉蝠蝮麸趺跗鳆",
    ga: "噶嘎蛤尬呷尕尜旮钆",
    gai: "该改概钙盖溉丐陔垓戤赅胲",
    gan: "干甘杆柑竿肝赶感秆敢赣坩苷尴擀泔淦澉绀橄旰矸疳酐",
    gang: "冈刚钢缸肛纲岗港戆罡颃筻",
    gong: "杠工攻功恭龚供躬公宫弓巩汞拱贡共蕻廾咣珙肱蚣蛩觥",
    gao: "篙皋高膏羔糕搞镐稿告睾诰郜蒿藁缟槔槁杲锆",
    ge: "哥歌搁戈鸽胳疙割革葛格阁隔铬个各鬲仡哿塥嗝纥搿膈硌铪镉袼颌虼舸骼髂",
    gei: "给",
    gen: "根跟亘茛哏艮",
    geng: "耕更庚羹埂耿梗哽赓鲠",
    gou: "钩勾沟苟狗垢构购够佝诟岣遘媾缑觏彀鸲笱篝鞲",
    gu: "辜菇咕箍估沽孤姑鼓古蛊骨谷股故顾固雇嘏诂菰哌崮汩梏轱牯牿胍臌毂瞽罟钴锢瓠鸪鹄痼蛄酤觚鲴骰鹘",
    gua: "刮瓜剐寡挂褂卦诖呱栝鸹",
    guai: "乖拐怪哙",
    guan: "棺关官冠观管馆罐惯灌贯倌莞掼涫盥鹳鳏",
    guang: "光广逛犷桄胱疒",
    gui: "瑰规圭硅归龟闺轨鬼诡癸桂柜跪贵刽匦刿庋宄妫桧炅晷皈簋鲑鳜",
    gun: "辊滚棍丨衮绲磙鲧",
    guo: "锅郭国果裹过馘蠃埚掴呙囗帼崞猓椁虢锞聒蜮蜾蝈",
    ha: "哈",
    hai: "骸孩海氦亥害骇咴嗨颏醢",
    han: "酣憨邯韩含涵寒函喊罕翰撼捍旱憾悍焊汗汉邗菡撖阚瀚晗焓颔蚶鼾",
    hen: "夯痕很狠恨",
    hang: "杭航沆绗珩桁",
    hao: "壕嚎豪毫郝好耗号浩薅嗥嚆濠灏昊皓颢蚝",
    he: "呵喝荷菏核禾和何合盒貉阂河涸赫褐鹤贺诃劾壑藿嗑嗬阖盍蚵翮",
    hei: "嘿黑",
    heng: "哼亨横衡恒訇蘅",
    hong: "轰哄烘虹鸿洪宏弘红黉讧荭薨闳泓",
    hou: "喉侯猴吼厚候后堠後逅瘊篌糇鲎骺",
    hu: "呼乎忽瑚壶葫胡蝴狐糊湖弧虎唬护互沪户冱唿囫岵猢怙惚浒滹琥槲轷觳烀煳戽扈祜鹕鹱笏醐斛",
    hua: "花哗华猾滑画划化话劐浍骅桦铧稞",
    huai: "槐徊怀淮坏还踝",
    huan: "欢环桓缓换患唤痪豢焕涣宦幻郇奂垸擐圜洹浣漶寰逭缳锾鲩鬟",
    huang: "荒慌黄磺蝗簧皇凰惶煌晃幌恍谎隍徨湟潢遑璜肓癀蟥篁鳇",
    hui: "灰挥辉徽恢蛔回毁悔慧卉惠晦贿秽会烩汇讳诲绘诙茴荟蕙哕喙隳洄彗缋珲晖恚虺蟪麾",
    hun: "荤昏婚魂浑混诨馄阍溷缗",
    huo: "豁活伙火获或惑霍货祸攉嚯夥钬锪镬耠蠖",
    ji: "击圾基机畸稽积箕肌饥迹激讥鸡姬绩缉吉极棘辑籍集及急疾汲即嫉级挤几脊己蓟技冀季伎祭剂悸济寄寂计记既忌际妓继纪居丌乩剞佶佴脔墼芨芰萁蒺蕺掎叽咭哜唧岌嵴洎彐屐骥畿玑楫殛戟戢赍觊犄齑矶羁嵇稷瘠瘵虮笈笄暨跻跽霁鲚鲫髻麂",
    jia: "嘉枷夹佳家加荚颊贾甲钾假稼价架驾嫁伽郏拮岬浃迦珈戛胛恝铗镓痂蛱笳袈跏",
    jian: "歼监坚尖笺间煎兼肩艰奸缄茧检柬碱硷拣捡简俭剪减荐槛鉴践贱见键箭件健舰剑饯渐溅涧建僭谏谫菅蒹搛囝湔蹇謇缣枧柙楗戋戬牮犍毽腱睑锏鹣裥笕箴翦趼踺鲣鞯",
    jiang: "僵姜将浆江疆蒋桨奖讲匠酱降茳洚绛缰犟礓耩糨豇",
    jiao: "蕉椒礁焦胶交郊浇骄娇嚼搅铰矫侥脚狡角饺缴绞剿教酵轿较叫佼僬茭挢噍峤徼姣纟敫皎鹪蛟醮跤鲛",
    jie: "窖揭接皆秸街阶截劫节桔杰捷睫竭洁结解姐戒藉芥界借介疥诫届偈讦诘喈嗟獬婕孑桀獒碣锴疖袷颉蚧羯鲒骱髫",
    jin: "巾筋斤金今津襟紧锦仅谨进靳晋禁近烬浸尽卺荩堇噤馑廑妗缙瑾槿赆觐钅锓衿矜",
    jing: "劲荆兢茎睛晶鲸京惊精粳经井警景颈静境敬镜径痉靖竟竞净刭儆阱菁獍憬泾迳弪婧肼胫腈旌",
    jiong: "炯窘冂迥扃",
    jiu: "揪究纠玖韭久灸九酒厩救旧臼舅咎就疚僦啾阄柩桕鹫赳鬏",
    ju: "鞠拘狙疽驹菊局咀矩举沮聚拒据巨具距踞锯俱句惧炬剧倨讵苣苴莒掬遽屦琚枸椐榘榉橘犋飓钜锔窭裾趄醵踽龃雎鞫",
    juan: "捐鹃娟倦眷卷绢鄄狷涓桊蠲锩镌隽",
    jue: "撅攫抉掘倔爵觉决诀绝厥劂谲矍蕨噘崛獗孓珏桷橛爝镢蹶觖",
    jun: "均菌钧军君峻俊竣浚郡骏捃狻皲筠麇",
    ka: "喀咖卡佧咔胩",
    ke: "咯坷苛柯棵磕颗科壳咳可渴克刻客课岢恪溘骒缂珂轲氪瞌钶疴窠蝌髁",
    kai: "开揩楷凯慨剀垲蒈忾恺铠锎",
    kan: "刊堪勘坎砍看侃凵莰莶戡龛瞰",
    kang: "康慷糠扛抗亢炕坑伉闶钪",
    kao: "考拷烤靠尻栲犒铐",
    ken: "肯啃垦恳垠裉颀",
    keng: "吭忐铿",
    kong: "空恐孔控倥崆箜",
    kou: "抠口扣寇芤蔻叩眍筘",
    ku: "枯哭窟苦酷库裤刳堀喾绔骷",
    kua: "夸垮挎跨胯侉",
    kuai: "块筷侩快蒯郐蒉狯脍",
    kuan: "宽款髋",
    kuang: "匡筐狂框矿眶旷况诓诳邝圹夼哐纩贶",
    kui: "亏盔岿窥葵奎魁傀馈愧溃馗匮夔隗揆喹喟悝愦阕逵暌睽聩蝰篑臾跬",
    kun: "坤昆捆困悃阃琨锟醌鲲髡",
    kuo: "括扩廓阔蛞",
    la: "垃拉喇蜡腊辣啦剌摺邋旯砬瘌",
    lai: "莱来赖崃徕涞濑赉睐铼癞籁",
    lan: "蓝婪栏拦篮阑兰澜谰揽览懒缆烂滥啉岚懔漤榄斓罱镧褴",
    lang: "琅榔狼廊郎朗浪莨蒗啷阆锒稂螂",
    lao: "捞劳牢老佬姥酪烙涝唠崂栳铑铹痨醪",
    le: "勒乐肋仂叻嘞泐鳓",
    lei: "雷镭蕾磊累儡垒擂类泪羸诔荽咧漯嫘缧檑耒酹",
    ling: "棱冷拎玲菱零龄铃伶羚凌灵陵岭领另令酃塄苓呤囹泠绫柃棂瓴聆蛉翎鲮",
    leng: "楞愣",
    li: "厘梨犁黎篱狸离漓理李里鲤礼莉荔吏栗丽厉励砾历利傈例俐痢立粒沥隶力璃哩俪俚郦坜苈莅蓠藜捩呖唳喱猁溧澧逦娌嫠骊缡珞枥栎轹戾砺詈罹锂鹂疠疬蛎蜊蠡笠篥粝醴跞雳鲡鳢黧",
    lian: "俩联莲连镰廉怜涟帘敛脸链恋炼练挛蔹奁潋濂娈琏楝殓臁膦裢蠊鲢",
    liang: "粮凉梁粱良两辆量晾亮谅墚椋踉靓魉",
    liao: "撩聊僚疗燎寥辽潦了撂镣廖料蓼尥嘹獠寮缭钌鹩耢",
    lie: "列裂烈劣猎冽埒洌趔躐鬣",
    lin: "琳林磷霖临邻鳞淋凛赁吝蔺嶙廪遴檩辚瞵粼躏麟",
    liu: "溜琉榴硫馏留刘瘤流柳六抡偻蒌泖浏遛骝绺旒熘锍镏鹨鎏",
    long: "龙聋咙笼窿隆垄拢陇弄垅茏泷珑栊胧砻癃",
    lou: "楼娄搂篓漏陋喽嵝镂瘘耧蝼髅",
    lu: "芦卢颅庐炉掳卤虏鲁麓碌露路赂鹿潞禄录陆戮垆摅撸噜泸渌漉璐栌橹轳辂辘氇胪镥鸬鹭簏舻鲈",
    lv: "驴吕铝侣旅履屡缕虑氯律率滤绿捋闾榈膂稆褛",
    luan: "峦孪滦卵乱栾鸾銮",
    lue: "掠略锊",
    lun: "轮伦仑沦纶论囵",
    luo: "萝螺罗逻锣箩骡裸落洛骆络倮荦摞猡泺椤脶镙瘰雒",
    ma: "妈麻玛码蚂马骂嘛吗唛犸嬷杩麽",
    mai: "埋买麦卖迈脉劢荬咪霾",
    man: "瞒馒蛮满蔓曼慢漫谩墁幔缦熳镘颟螨鳗鞔",
    mang: "芒茫盲忙莽邙漭朦硭蟒",
    meng: "氓萌蒙檬盟锰猛梦孟勐甍瞢懵礞虻蜢蠓艋艨黾",
    miao: "猫苗描瞄藐秒渺庙妙喵邈缈缪杪淼眇鹋蜱",
    mao: "茅锚毛矛铆卯茂冒帽貌贸侔袤勖茆峁瑁昴牦耄旄懋瞀蛑蝥蟊髦",
    me: "么",
    mei: "玫枚梅酶霉煤没眉媒镁每美昧寐妹媚坶莓嵋猸浼湄楣镅鹛袂魅",
    men: "门闷们扪玟焖懑钔",
    mi: "眯醚靡糜迷谜弥米秘觅泌蜜密幂芈冖谧蘼嘧猕獯汨宓弭脒敉糸縻麋",
    mian: "棉眠绵冕免勉娩缅面沔湎腼眄",
    mie: "蔑灭咩蠛篾",
    min: "民抿皿敏悯闽苠岷闵泯珉",
    ming: "明螟鸣铭名命冥茗溟暝瞑酩",
    miu: "谬",
    mo: "摸摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌谟茉蓦馍嫫镆秣瘼耱蟆貊貘",
    mou: "谋牟某厶哞婺眸鍪",
    mu: "拇牡亩姆母墓暮幕募慕木目睦牧穆仫苜呒沐毪钼",
    na: "拿哪呐钠那娜纳内捺肭镎衲箬",
    nai: "氖乃奶耐奈鼐艿萘柰",
    nan: "南男难囊喃囡楠腩蝻赧",
    nao: "挠脑恼闹孬垴猱瑙硇铙蛲",
    ne: "淖呢讷",
    nei: "馁",
    nen: "嫩能枘恁",
    ni: "妮霓倪泥尼拟你匿腻逆溺伲坭猊怩滠昵旎祢慝睨铌鲵",
    nian: "蔫拈年碾撵捻念廿辇黏鲇鲶",
    niang: "娘酿",
    niao: "鸟尿茑嬲脲袅",
    nie: "捏聂孽啮镊镍涅乜陧蘖嗫肀颞臬蹑",
    nin: "您柠",
    ning: "狞凝宁拧泞佞蓥咛甯聍",
    niu: "牛扭钮纽狃忸妞蚴",
    nong: "脓浓农侬",
    nu: "奴努怒呶帑弩胬孥驽",
    nv: "女恧钕衄",
    nuan: "暖",
    nuenue: "虐",
    nue: "疟谑",
    nuo: "挪懦糯诺傩搦喏锘",
    ou: "哦欧鸥殴藕呕偶沤怄瓯耦",
    pa: "啪趴爬帕怕琶葩筢",
    pai: "拍排牌徘湃派俳蒎",
    pan: "攀潘盘磐盼畔判叛爿泮袢襻蟠蹒",
    pang: "乓庞旁耪胖滂逄",
    pao: "抛咆刨炮袍跑泡匏狍庖脬疱",
    pei: "呸胚培裴赔陪配佩沛掊辔帔淠旆锫醅霈",
    pen: "喷盆湓",
    peng: "砰抨烹澎彭蓬棚硼篷膨朋鹏捧碰坯堋嘭怦蟛",
    pi: "砒霹批披劈琵毗啤脾疲皮匹痞僻屁譬丕陴邳郫圮鼙擗噼庀媲纰枇甓睥罴铍痦癖疋蚍貔",
    pian: "篇偏片骗谝骈犏胼褊翩蹁",
    piao: "飘漂瓢票剽嘌嫖缥殍瞟螵",
    pie: "撇瞥丿苤氕",
    pin: "拼频贫品聘拚姘嫔榀牝颦",
    ping: "乒坪苹萍平凭瓶评屏俜娉枰鲆",
    po: "坡泼颇婆破魄迫粕叵鄱溥珀钋钷皤笸",
    pou: "剖裒踣",
    pu: "扑铺仆莆葡菩蒲埔朴圃普浦谱曝瀑匍噗濮璞氆镤镨蹼",
    qi: "期欺栖戚妻七凄漆柒沏其棋奇歧畦崎脐齐旗祈祁骑起岂乞企启契砌器气迄弃汽泣讫亟亓圻芑萋葺嘁屺岐汔淇骐绮琪琦杞桤槭欹祺憩碛蛴蜞綦綮趿蹊鳍麒",
    qia: "掐恰洽葜",
    qian: "牵扦钎铅千迁签仟谦乾黔钱钳前潜遣浅谴堑嵌欠歉佥阡芊芡荨掮岍悭慊骞搴褰缱椠肷愆钤虔箝",
    qiang: "枪呛腔羌墙蔷强抢嫱樯戗炝锖锵镪襁蜣羟跫跄",
    qiao: "橇锹敲悄桥瞧乔侨巧鞘撬翘峭俏窍劁诮谯荞愀憔缲樵毳硗跷鞒",
    qie: "切茄且怯窃郄唼惬妾挈锲箧",
    qin: "钦侵亲秦琴勤芹擒禽寝沁芩蓁蕲揿吣嗪噙溱檎螓衾",
    qing: "青轻氢倾卿清擎晴氰情顷请庆倩苘圊檠磬蜻罄箐謦鲭黥",
    qiong: "琼穷邛茕穹筇銎",
    qiu: "秋丘邱球求囚酋泅俅氽巯艽犰湫逑遒楸赇鸠虬蚯蝤裘糗鳅鼽",
    qu: "趋区蛆曲躯屈驱渠取娶龋趣去诎劬蕖蘧岖衢阒璩觑氍祛磲癯蛐蠼麴瞿黢",
    quan: "圈颧权醛泉全痊拳犬券劝诠荃獾悛绻辁畎铨蜷筌鬈",
    que: "缺炔瘸却鹊榷确雀阙悫",
    qun: "裙群逡",
    ran: "然燃冉染苒髯",
    rang: "瓤壤攘嚷让禳穰",
    rao: "饶扰绕荛娆桡",
    ruo: "惹若弱",
    re: "热偌",
    ren: "壬仁人忍韧任认刃妊纫仞荏葚饪轫稔衽",
    reng: "扔仍",
    ri: "日",
    rong: "戎茸蓉荣融熔溶容绒冗嵘狨缛榕蝾",
    rou: "揉柔肉糅蹂鞣",
    ru: "茹蠕儒孺如辱乳汝入褥蓐薷嚅洳溽濡铷襦颥",
    ruan: "软阮朊",
    rui: "蕊瑞锐芮蕤睿蚋",
    run: "闰润",
    sa: "撒洒萨卅仨挲飒",
    sai: "腮鳃塞赛噻",
    san: "三叁伞散彡馓氵毵糁霰",
    sang: "桑嗓丧搡磉颡",
    sao: "搔骚扫嫂埽臊瘙鳋",
    se: "瑟色涩啬铩铯穑",
    sen: "森",
    seng: "僧",
    sha: "莎砂杀刹沙纱傻啥煞脎歃痧裟霎鲨",
    shai: "筛晒酾",
    shan: "珊苫杉山删煽衫闪陕擅赡膳善汕扇缮剡讪鄯埏芟潸姗骟膻钐疝蟮舢跚鳝",
    shang: "墒伤商赏晌上尚裳垧绱殇熵觞",
    shao: "梢捎稍烧芍勺韶少哨邵绍劭苕潲蛸笤筲艄",
    she: "奢赊蛇舌舍赦摄射慑涉社设厍佘猞畲麝",
    shen: "砷申呻伸身深娠绅神沈审婶甚肾慎渗诜谂吲哂渖椹矧蜃",
    sheng: "声生甥牲升绳省盛剩胜圣丞渑媵眚笙",
    shi: "师失狮施湿诗尸虱十石拾时什食蚀实识史矢使屎驶始式示士世柿事拭誓逝势是嗜噬适仕侍释饰氏市恃室视试谥埘莳蓍弑唑饣轼耆贳炻礻铈铊螫舐筮豕鲥鲺",
    shou: "收手首守寿授售受瘦兽扌狩绶艏",
    shu: "蔬枢梳殊抒输叔舒淑疏书赎孰熟薯暑曙署蜀黍鼠属术述树束戍竖墅庶数漱恕倏塾菽忄沭涑澍姝纾毹腧殳镯秫鹬",
    shua: "刷耍唰涮",
    shuai: "摔衰甩帅蟀",
    shuan: "栓拴闩",
    shuang: "霜双爽孀",
    shui: "谁水睡税",
    shun: "吮瞬顺舜恂",
    shuo: "说硕朔烁蒴搠嗍濯妁槊铄",
    si: "斯撕嘶思私司丝死肆寺嗣四伺似饲巳厮俟兕菥咝汜泗澌姒驷缌祀祠锶鸶耜蛳笥",
    song: "松耸怂颂送宋讼诵凇菘崧嵩忪悚淞竦",
    sou: "搜艘擞嗽叟嗖嗾馊溲飕瞍锼螋",
    su: "苏酥俗素速粟僳塑溯宿诉肃夙谡蔌嗉愫簌觫稣",
    suan: "酸蒜算",
    sui: "虽隋随绥髓碎岁穗遂隧祟蓑冫谇濉邃燧眭睢",
    sun: "孙损笋荪狲飧榫跣隼",
    suo: "梭唆缩琐索锁所唢嗦娑桫睃羧",
    ta: "塌他它她塔獭挞蹋踏闼溻遢榻沓",
    tai: "胎苔抬台泰酞太态汰邰薹肽炱钛跆鲐",
    tan: "坍摊贪瘫滩坛檀痰潭谭谈坦毯袒碳探叹炭郯蕈昙钽锬覃",
    tang: "汤塘搪堂棠膛唐糖傥饧溏瑭铴镗耥螗螳羰醣",
    thang: "倘躺淌",
    theng: "趟烫",
    tao: "掏涛滔绦萄桃逃淘陶讨套挑鼗啕韬饕",
    te: "特",
    teng: "藤腾疼誊滕",
    ti: "梯剔踢锑提题蹄啼体替嚏惕涕剃屉荑悌逖绨缇鹈裼醍",
    tian: "天添填田甜恬舔腆掭忝阗殄畋钿蚺",
    tiao: "条迢眺跳佻祧铫窕龆鲦",
    tie: "贴铁帖萜餮",
    ting: "厅听烃汀廷停亭庭挺艇莛葶婷梃蜓霆",
    tong: "通桐酮瞳同铜彤童桶捅筒统痛佟僮仝茼嗵恸潼砼",
    tou: "偷投头透亠",
    tu: "凸秃突图徒途涂屠土吐兔堍荼菟钍酴",
    tuan: "湍团疃",
    tui: "推颓腿蜕褪退忒煺",
    tun: "吞屯臀饨暾豚窀",
    tuo: "拖托脱鸵陀驮驼椭妥拓唾乇佗坨庹沱柝砣箨舄跎鼍",
    wa: "挖哇蛙洼娃瓦袜佤娲腽",
    wai: "歪外",
    wan: "豌弯湾玩顽丸烷完碗挽晚皖惋宛婉万腕剜芄苋菀纨绾琬脘畹蜿箢",
    wang: "汪王亡枉网往旺望忘妄罔尢惘辋魍",
    wei: "威巍微危韦违桅围唯惟为潍维苇萎委伟伪尾纬未蔚味畏胃喂魏位渭谓尉慰卫倭偎诿隈葳薇帏帷崴嵬猥猬闱沩洧涠逶娓玮韪軎炜煨熨痿艉鲔",
    wen: "瘟温蚊文闻纹吻稳紊问刎愠阌汶璺韫殁雯",
    weng: "嗡翁瓮蓊蕹",
    wo: "挝蜗涡窝我斡卧握沃莴幄渥杌肟龌",
    wu: "巫呜钨乌污诬屋无芜梧吾吴毋武五捂午舞伍侮坞戊雾晤物勿务悟误兀仵阢邬圬芴庑怃忤浯寤迕妩骛牾焐鹉鹜蜈鋈鼯",
    xi: "昔熙析西硒矽晰嘻吸锡牺稀息希悉膝夕惜熄烯溪汐犀檄袭席习媳喜铣洗系隙戏细僖兮隰郗茜葸蓰奚唏徙饩阋浠淅屣嬉玺樨曦觋欷熹禊禧钸皙穸蜥蟋舾羲粞翕醯鼷",
    xia: "瞎虾匣霞辖暇峡侠狭下厦夏吓掀葭嗄狎遐瑕硖瘕罅黠",
    xian: "锨先仙鲜纤咸贤衔舷闲涎弦嫌显险现献县腺馅羡宪陷限线冼藓岘猃暹娴氙祆鹇痫蚬筅籼酰跹",
    xiang: "相厢镶香箱襄湘乡翔祥详想响享项巷橡像向象芗葙饷庠骧缃蟓鲞飨",
    xiao: "萧硝霄削哮嚣销消宵淆晓小孝校肖啸笑效哓咻崤潇逍骁绡枭枵筱箫魈",
    xie: "楔些歇蝎鞋协挟携邪斜胁谐写械卸蟹懈泄泻谢屑偕亵勰燮薤撷廨瀣邂绁缬榭榍歙躞",
    xin: "薪芯锌欣辛新忻心信衅囟馨莘歆铽鑫",
    xing: "星腥猩惺兴刑型形邢行醒幸杏性姓陉荇荥擤悻硎",
    xiong: "兄凶胸匈汹雄熊芎",
    xiu: "休修羞朽嗅锈秀袖绣莠岫馐庥鸺貅髹",
    xu: "墟戌需虚嘘须徐许蓄酗叙旭序畜恤絮婿绪续讴诩圩蓿怵洫溆顼栩煦砉盱胥糈醑",
    xuan: "轩喧宣悬旋玄选癣眩绚儇谖萱揎馔泫洵渲漩璇楦暄炫煊碹铉镟痃",
    xue: "靴薛学穴雪血噱泶鳕",
    xun: "勋熏循旬询寻驯巡殉汛训讯逊迅巽埙荀薰峋徇浔曛窨醺鲟",
    ya: "压押鸦鸭呀丫芽牙蚜崖衙涯雅哑亚讶伢揠吖岈迓娅琊桠氩砑睚痖",
    yan: "焉咽阉烟淹盐严研蜒岩延言颜阎炎沿奄掩眼衍演艳堰燕厌砚雁唁彦焰宴谚验厣靥赝俨偃兖讠谳郾鄢芫菸崦恹闫阏洇湮滟妍嫣琰晏胭腌焱罨筵酽魇餍鼹",
    yang: "殃央鸯秧杨扬佯疡羊洋阳氧仰痒养样漾徉怏泱炀烊恙蛘鞅",
    yao: "邀腰妖瑶摇尧遥窑谣姚咬舀药要耀夭爻吆崾徭瀹幺珧杳曜肴鹞窈繇鳐",
    ye: "椰噎耶爷野冶也页掖业叶曳腋夜液谒邺揶馀晔烨铘",
    yi: "一壹医揖铱依伊衣颐夷遗移仪胰疑沂宜姨彝椅蚁倚已乙矣以艺抑易邑屹亿役臆逸肄疫亦裔意毅忆义益溢诣议谊译异翼翌绎刈劓佾诒圪圯埸懿苡薏弈奕挹弋呓咦咿噫峄嶷猗饴怿怡悒漪迤驿缢殪贻旖熠钇镒镱痍瘗癔翊衤蜴舣羿翳酏黟",
    yin: "茵荫因殷音阴姻吟银淫寅饮尹引隐印胤鄞堙茚喑狺夤氤铟瘾蚓霪龈",
    ying: "英樱婴鹰应缨莹萤营荧蝇迎赢盈影颖硬映嬴郢茔莺萦撄嘤膺滢潆瀛瑛璎楹鹦瘿颍罂",
    yo: "哟唷",
    yong: "拥佣臃痈庸雍踊蛹咏泳涌永恿勇用俑壅墉慵邕镛甬鳙饔",
    you: "幽优悠忧尤由邮铀犹油游酉有友右佑釉诱又幼卣攸侑莸呦囿宥柚猷牖铕疣蝣鱿黝鼬",
    yu: "迂淤于盂榆虞愚舆余俞逾鱼愉渝渔隅予娱雨与屿禹宇语羽玉域芋郁吁遇喻峪御愈欲狱育誉浴寓裕预豫驭禺毓伛俣谀谕萸蓣揄喁圄圉嵛狳饫庾阈妪妤纡瑜昱觎腴欤於煜燠聿钰鹆瘐瘀窳蝓竽舁雩龉",
    yuan: "鸳渊冤元垣袁原援辕园员圆猿源缘远苑愿怨院塬沅媛瑗橼爰眢鸢螈鼋",
    yue: "曰约越跃钥岳粤月悦阅龠樾刖钺",
    yun: "耘云郧匀陨允运蕴酝晕韵孕郓芸狁恽纭殒昀氲",
    za: "匝砸杂拶咂",
    zai: "栽哉灾宰载再在咱崽甾",
    zan: "攒暂赞瓒昝簪糌趱錾",
    zang: "赃脏葬奘戕臧",
    zao: "遭糟凿藻枣早澡蚤躁噪造皂灶燥唣缫",
    ze: "责择则泽仄赜啧迮昃笮箦舴",
    zei: "贼",
    zen: "怎谮",
    zeng: "增憎曾赠缯甑罾锃",
    zha: "扎喳渣札轧铡闸眨栅榨咋乍炸诈揸吒咤哳怍砟痄蚱齄",
    zhai: "摘斋宅窄债寨砦",
    zhan: "瞻毡詹粘沾盏斩辗崭展蘸栈占战站湛绽谵搌旃",
    zhang: "樟章彰漳张掌涨杖丈帐账仗胀瘴障仉鄣幛嶂獐嫜璋蟑",
    zhao: "招昭找沼赵照罩兆肇召爪诏棹钊笊",
    zhe: "遮折哲蛰辙者锗蔗这浙谪陬柘辄磔鹧褚蜇赭",
    zhen: "珍斟真甄砧臻贞针侦枕疹诊震振镇阵缜桢榛轸赈胗朕祯畛鸩",
    zheng: "蒸挣睁征狰争怔整拯正政帧症郑证诤峥钲铮筝",
    zhi: "芝枝支吱蜘知肢脂汁之织职直植殖执值侄址指止趾只旨纸志挚掷至致置帜峙制智秩稚质炙痔滞治窒卮陟郅埴芷摭帙忮彘咫骘栉枳栀桎轵轾攴贽膣祉祗黹雉鸷痣蛭絷酯跖踬踯豸觯",
    zhong: "中盅忠钟衷终种肿重仲众冢锺螽舂舯踵",
    zhou: "舟周州洲诌粥轴肘帚咒皱宙昼骤啄着倜诹荮鬻纣胄碡籀舳酎鲷",
    zhu: "珠株蛛朱猪诸诛逐竹烛煮拄瞩嘱主著柱助蛀贮铸筑住注祝驻伫侏邾苎茱洙渚潴驺杼槠橥炷铢疰瘃蚰竺箸翥躅麈",
    zhua: "抓",
    zhuai: "拽",
    zhuan: "专砖转撰赚篆抟啭颛",
    zhuang: "桩庄装妆撞壮状丬",
    zhui: "椎锥追赘坠缀萑骓缒",
    zhun: "谆准",
    zhuo: "捉拙卓桌琢茁酌灼浊倬诼廴蕞擢啜浞涿杓焯禚斫",
    zi: "兹咨资姿滋淄孜紫仔籽滓子自渍字谘嵫姊孳缁梓辎赀恣眦锱秭耔笫粢觜訾鲻髭",
    zong: "鬃棕踪宗综总纵腙粽",
    zou: "邹走奏揍鄹鲰",
    zu: "租足卒族祖诅阻组俎菹啐徂驵蹴",
    zuan: "钻纂攥缵",
    zui: "嘴醉最罪",
    zun: "尊遵撙樽鳟",
    zuo: "昨左佐柞做作坐座阝阼胙祚酢",
    cou: "薮楱辏腠",
    nang: "攮哝囔馕曩",
    o: "喔",
    dia: "嗲",
    chuai: "嘬膪踹",
    cen: "岑涔",
    diu: "铥",
    nou: "耨",
    fou: "缶",
    bia: "髟"
  };
  module.exports = {
    tranCode: function (a, u) {
      for (var i = a.length, e = "", g = new RegExp("[a-zA-Z0-9- ]"), o = 0; o < i; o++) {
        var h = a.substr(o, 1),
          s = n(h);
        g.test(h) ? e += h : !1 !== s && (e += s)
      }
      for (e = e.replace(/ /g, "-"); e.indexOf("--") > 0;) e = e.replace("--", "-");
      return u && (e = e.substr(0, 1)), e
    }
  };
});
define("servejs/api.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  function e(e, t, a) {
    function d(t) {
      if (e.moreparam) {
        var a = {};
        e.moreparam.map(function (s) {
          a[s] = J[v] && J[v].data && J[v].data[s], s == e.pagename && (a[s] = 1 + (t || a[s]))
        })
      }
      c("add", a)
    }

    function c(a, s) {
      var n = {};
      k = i.extendJson(!0, e.data, s), v = e.dataname + (e.kindby ? "_" + k[e.kindby] : ""), i.getNetworkType({
        cb: function (s) {
          s.code > 0 || s.isgood ? (J[v] = J[v] || {}, T[v] = T[v] || {}, e.ischecklogin ? (e.loginconfig.cb = function (t) {
            e.onCheck(t, "logincheck"), t.code > 0 ? (g("tips", "unlogin", t, a), e.onComplete({
              code: 4001,
              msg: t.msg
            }, k)) : u(a)
          }, i.loginCheck(e.loginconfig, t)) : u(a)) : (n["response." + v + ".msg"] = s.msg, t && t.setData(n), e.onComplete({
            code: 1e3,
            msg: s.msg
          }, k)), n["response.net"] = s, t && t.setData(n)
        }
      }, t)
    }

    function p(t) {
      var a;
      return 0 == (a = e.customCheck(t) || {
          code: 0
        })
        .code && (a = i.formCheck(e.formlist, t) || {
          code: 0
        }), e.onCheck(a, "formcheck"), a
    }

    function u(o) {
      if (m = a.getHeartInfo(), f = m && m.user_id || "", h = m && m.session_id || "", k = e.reqFilter(k), "api" == e.apisrc && e.isfromapi && (f && e.userkey && (k[e.userkey] = f), h && !e.istran && (k.session_id = h)), !1 === k) return !1;
      if ("add" === o && "nomore" == J[v].morestatus) return !1;
      if ("init" === o && e.iscache && J[v].data && 0 == J[v].code) return !1;
      if ((x = p(k))
        .code > 0) return i.alertMsg(t, x), g("tips", "error", x, o), !1;
      "init" != o && "refresh" != o || (T[v] = i.extendJson(!0, {}, k), e.istoast && F && F.loading && i.apiToast({
        mask: e.ismask,
        title: F.loading,
        icon: "loading"
      }, t), g("tips", "loading")), e.ispage && "add" === o && g("loadmore"), e.ispage && (k[e.pskey] = e.pagesize), T[v] = i.extendJson(!0, T[v], k), y = l(e.url, k);
      var d, c = i.extendJson(!0, {}, k);
      if (e.isnavload && !e.istoast && wx.showNavigationBarLoading(), e.onCustomResponse) {
        var u = e.onCustomResponse(c);
        if (u) return i.hideToast(), d = e.resFilter(u, c) || u, e.onSuccess(d, c, "noRequest"), void e.onComplete(d, c, "noRequest")
      }
      e.onBeforeSend(c), wx.request({
        url: e.domain + y.api,
        data: y.data,
        header: e.header,
        method: e.method,
        success: function (a) {
          if (a.data = d = e.resFilter(a.data, c) || a.data, d && 0 == d.code && (e.jumpconfig && (e.jumpkey && i.isJson(d.data) && (e.jumpconfig.options || (e.jumpconfig.options = {}), i.isArray(e.jumpkey) ? e.jumpkey.map(function (t) {
              d.data[t] && (e.jumpconfig.options[t] = d.data[t])
            }) : d.data[e.jumpkey] && (e.jumpconfig.options[e.jumpkey] = d.data[e.jumpkey])), i.jumpTo(e.jumpconfig)), e.iscallback)) return i.jumpTo(), !1;
          if (d && 0 == d.code && void 0 !== d.data && (!e.ispage || e.ispage && (i.isArray(d.data) || d.data[e.listname]))) g("res", "success", i.extendJson(!0, {}, d), o), e.storagekey && d.data && !i.isEmpty(d.data) && n.dataStorage("set", e.storagekey, d.data);
          else {
            var s;
            s = "add" == o ? "数据已全部加载" : "ERROR" == e.tipsmsg.error ? d.msg : e.tipsmsg.error, (d.code > 0 || "add" == o) && e.isalert && i.alertMsg(t, {
              msg: s
            }), g("tips", "error", "", o)
          }
          e.onSuccess(d, c, o), d && 0 == d.code ? e.istoast && F && F.success && i.apiToast({
            title: "string" == typeof F.success ? F.success : d.msg,
            icon: "success",
            duration: e.duration,
            cb: F.cb
          }, t) : e.istoast && F && F.error && i.alertMsg(t, {
            msg: F.error
          })
        },
        fail: function () {},
        complete: function (n) {
          (n = n || {})
          .data = d || {
            code: 200,
            msg: "服务中断，请稍后重试"
          }, e.isnavload && !e.istoast && wx.hideNavigationBarLoading(), e.onComplete(n.data, c), n && n.statusCode && 200 != n.statusCode && !n.data && (e.isalert && i.alertMsg(t, {
            msg: n.data && n.data.msg || "服务中断，请稍后重试"
          }), g("tips", "error"), e.onFail(n, c)), e.istoast && (!F || !F.success || 200 != n.statusCode || !n.data || n.data.code > 0) && i.hideToast(), !n.data || 1011 != n.data.code && 1010 != n.data.code || r.isLoading || (r.loginDelay && clearTimeout(r.loginDelay), r.loginDelay = setTimeout(function () {
            r.isLoading = !0, s("wx", {
              istologin: !0,
              istoast: !0,
              isback: !1
            }, t, a, function () {
              r.isLoading = !1
            })
          }, 2e3), a.heartBeatClean())
        }
      })
    }

    function l(t, a) {
      var s, n, r;
      for (var d in a) "string" == typeof a[d] && (a[d] = i.trim(a[d]), a[d] = i.textFilter(a[d]));
      if ("api" == e.apisrc && e.isfromapi) {
        var c = m && m.session_id || "",
          p = e.istran ? "/v1/WeApp/transfer" : t,
          u = (u = Date.now())
          .toString()
          .substr(0, 10),
          l = C.appconfig[S.sys].app_key,
          g = C.appconfig[S.sys].app_id,
          f = o(u + l + p + g)
          .toString(),
          h = C.name_en + "/" + C.version + " (" + S.model + ";" + S.system + ")";
        n = {
          sign: f,
          ts: u,
          app_id: g
        }, e.istran ? (n.api = t, c && (n.session_id = c), n.user_agent = encodeURIComponent(h)) : c && (e.header.Cookie = "session_id=" + c), s = i.urlSplice(p, n), r = {
          data: JSON.stringify(a)
        }
      } else if ("dts" == e.apisrc) {
        var y = {
            dev_id: "",
            appVersion: C.version.replace(/\./g, ""),
            dev_imei: "",
            pname: S.sys + "s"
          },
          l = C.appconfig[S.sys]["app_key." + e.apisrc];
        s = t, r = {
          content: y = i.extendJson(!0, y, e.data),
          token: o(JSON.stringify(y) + l)
            .toString()
        }
      } else s = t, r = a;
      return {
        api: s,
        data: r
      }
    }

    function g(a, s, n, o, r, d) {
      function c(a, s, n, o, r) {
        var d, c, p;
        if ((J = t.data.response || {})[o] && 0 == J[o].code && J[o].data && !i.isEmpty(J[o].data))
          if (i.isArray(J[o].data) ? d = J[o].data : i.isJson(J[o].data) && (d = J[o].data[e.listname] ? J[o].data[e.listname] : J[o].data), "update" == a)
            if (r)
              if (i.isArray(d)) {
                p = d.length;
                for (var u = 0; u < p; u++)
                  if (d[u][r] == n) {
                    d[u] = i.extendJson(!0, d[u], s);
                    break
                  }
              } else d = i.extendJson(!0, d, s);
        else void 0 !== n && "" !== n ? (d = d[n], d = i.extendJson(!0, d, s)) : d = i.extendJson(!0, d, s);
        else "remove" == a ? (c = s || "index", i.isArray(d) ? ("index" == c ? d[n] && d.splice(s, 1) : d.forEach(function (e, t, a) {
          if (e[s] && e[s] == n) return d.splice(t, 1), !1
        }), !d || 0 == d.length && (J[o].msg = "当前内容已全部删除")) : i.isJson(d) && d[n] && d[s]) : "append" == a && d.push(s);
        else "append" == a && (J[o] ? J[o].data = J[o].data || (e.listname ? {} : []) : J[o] = {
            data: e.listname ? {} : []
          }, (d = i.isArray(J[o].data) ? J[o].data : J[o].data[e.listname] || [])
          .push(s));
        J[o] && t.setData({
          response: J
        })
      }
      if (!t || !e.isset) return !1;
      var p = "response." + v,
        u = "request." + v,
        l = {};
      switch (T[v].apitimer = (new Date)
        .getTime(), a) {
        case "tips":
          J[v] = i.extendJson(J[v], {
            icon: e.tipsicon[s],
            msg: n && n.msg || e.tipsmsg[s]
          }), "refresh" !== o || "error" !== s && "unlogin" !== s || wx.stopPullDownRefresh(), "add" == o && (J[v].morestatus = "nomore"), "unlogin" !== s && ("error" != s || "refresh" != o && "init" != o) || (J[v].data = ""), A = s;
          break;
        case "res":
          if ("update" === o || "remove" === o || "append" === o) return r = r || v, i.isArray(r) ? r.map(function (e) {
            c(o, s, n, e, d)
          }) : c(o, s, n, r, d), !1;
          "add" === o ? !n || !n.data || i.isEmpty(n.data) && i.isEmpty(n.data[e.listname]) ? J[v].morestatus = "nomore" : (i.isArray(n.data) ? n.data = J[v].data.concat(n.data) : e.listname && (n.data[e.listname] = J[v].data[e.listname].concat(n.data[e.listname])), J[v] = n, J[v].morestatus = "more") : J[v] = n, A = s;
          break;
        case "loadmore":
          J[v].morestatus = "loading"
      }
      T[v].apistatus = A, e.ispage && (J[v].ispage = e.ispage), J[v].apistatus = A, J[v].reskey = v, l[p] = J[v], l[u] = T[v], t && e.isset && t.setData(l)
    }
    var m, f, h, y, k, v, _, x, t = t || i.getPage(),
      C = (a = a || getApp())
      .getAppInfo(),
      S = a.getSysInfo(),
      F = (e = i.extendJson(!0, {
        domain: C.domain,
        url: "",
        data: "",
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST",
        duration: 1e3,
        ischecklogin: !1,
        loginconfig: {
          msg: "您还没有登录",
          isjump: !1,
          isalert: !1
        },
        isnavload: !1,
        isset: !0,
        ismask: !0,
        isalert: !0,
        apisrc: "api",
        jumpconfig: "",
        jumpkey: "",
        iscallback: !1,
        storagekey: "",
        reqdelay: 0,
        istran: !1,
        iscache: !1,
        isauto: !0,
        userkey: "user_id",
        pskey: "page_size",
        pagename: "page",
        pagesize: 20,
        ispage: !1,
        moreparam: "",
        listname: "data",
        isrefresh: !1,
        kindby: "",
        dataname: "result",
        istoast: !0,
        isfromapi: !0,
        toast: {
          loading: "请稍后...",
          success: "",
          error: ""
        },
        tipsmsg: {
          loading: "LOADING...",
          success: "SUCCESS",
          error: "ERROR",
          unlogin: "UNLOGIN"
        },
        tipsicon: {
          loading: "pic_nofind",
          success: "pic_nofind",
          error: "pic_nofind",
          unlogin: "pic_nofind"
        },
        onMoreCheck: function () {
          return {
            code: 0
          }
        },
        onBeforeSend: function () {},
        onCheck: function () {},
        onSuccess: function () {},
        onFail: function () {},
        onComplete: function () {},
        formlist: "",
        customCheck: function (e) {
          return {
            code: 0,
            msg: "成功"
          }
        },
        resFilter: function (e) {
          return e
        },
        reqFilter: function (e) {
          return e
        }
      }, e))
      .toast,
      J = t && t.data.response || {},
      T = t && t.data.request || {},
      A = "init";
    if ("dts" == e.apisrc && (e.url || (e.url = "/api.php"), e.domain = "http://dts.kuaidihelp.com"), !e.url || !e.domain) return !1;
    if (t) {
      if (e.ispage) {
        var b;
        t.onTriggerMore = function (a) {
          0 == (_ = i.isFunction(e.onMoreCheck) && e.onMoreCheck(J[v], T[v]) || {
              code: 0
            })
            .code ? d(b = a.currentTarget.dataset.page) : (i.alertMsg(t, {
              msg: _.msg || "数据已全部加载"
            }), g("tips", "error", "", "add"))
        }
      }
      t.onJumpToLogin = function (e) {
        i.jumpTo({
          url: "login",
          options: e.currentTarget.dataset
        })
      }
    }
    return c("init"), {
      reload: function (e, t) {
        c(e = e || "init", t)
      },
      append: function (e) {
        g("res", e, "array", "append", v)
      },
      update: function (e, t, a, s) {
        g("res", e, t, "update", a, s)
      },
      remove: function (e, t, a) {
        g("res", t, e, "remove", a)
      },
      setConfig: function (t) {
        e = i.extendJson(!0, e, t)
      },
      datalength: function () {
        var t = 0;
        return J[v] && J[v].data && (i.isArray(J[v].data) ? t = J[v].data.length : J[v].data[e.listname] && i.isArray(J[v].data[e.listname]) && (t = J[v].data[e.listname].length)), t
      }
    }
  }

  function t(e) {
    var t, a = a || getApp(),
      s = a.getAppInfo(),
      n = a.getSysInfo(),
      r = (r = Date.now())
      .toString()
      .substr(0, 10),
      d = s.appconfig[n.sys].app_key,
      c = s.appconfig[n.sys].app_id;
    return t = {
      sign: o(r + d + e + c)
        .toString(),
      ts: r,
      app_id: c
    }, i.urlSplice(e, t)
  }

  function a(e) {
    return
  }

  function s(t, s, n, o, r) {
    function d(e) {
      i.isFunction(r) && r({
        code: 2002,
        msg: "微信授权失败"
      }), "refail" == e && s.istologin && n.route != l && i.jumpTo({
        url: "login"
      })
    }

    function c(t) {
      s.reqdelay = 1e3, s.dataname = "login", s.data = i.extendJson(!0, s.data, t), s.url = p, t && (s.reqFilter = function (e) {
        return delete e.user_name, delete e.user_pwd, e
      }), s.onComplete = function (e, t) {
        0 == e.code && (/^1\d{10}$/.test(e.data.user_name) && (e.data.phone = e.data.user_name), o.buildHeart(e.data), a(), s.isback && u && (u.__route__ == l ? i.jumpTo({
          url: "vs_exp",
          target: "tab"
        }) : i.jumpTo()), o.updateAppData({
          isreload: "signin"
        }, "q_express")), n && u && ("pages/login/login" == n.__route__ && (g = "signInBack", n = u), n.setData({
          loginRes: e
        }), i.isFunction(n.onLoginCallback) && n.onLoginCallback(e, g)), i.isFunction(r) && r(e, t)
      }, e(s, n)
    }
    var p, o = o || getApp(),
      u = i.getPage(1),
      l = "pages/login/login",
      n = n || i.getPage(),
      g = "signIn",
      s = i.extendJson(!0, {
        istran: !1,
        toast: {
          loading: "登录中...",
          success: "登录成功"
        },
        data: {},
        isset: !1,
        isback: !0,
        istologin: !0
      }, s);
    "wx" == t ? (p = "/v1/WeApp/entry", o.getUserInfo(function (e, t) {
      "success" == e ? c({
        code: encodeURIComponent(t.code),
        encryptedData: encodeURIComponent(t.encryptedData),
        iv: encodeURIComponent(t.iv)
      }) : d(e)
    }, s.data.isGet, !0)) : (p = "/v1/user/signin", c())
  }
  var n = require("wxapi"),
    i = require("tools"),
    o = require("../plugLib/CryptoJS/md5"),
    r = {};
  module.exports = {
    apiDataRequest: e,
    apiUpload: function (e, a) {
      function s(t) {
        wx.uploadFile({
          url: e.domain + u,
          header: e.header,
          filePath: e.tempFilePath[t],
          name: r.name,
          formData: r,
          success: function (e) {},
          fail: function () {},
          complete: function (n) {
            0 == (n = n.data ? "string" == typeof n.data ? JSON.parse(n.data) : n.data : {
                code: 2001,
                msg: e.errmsg
              })
              .code ? n.data && g.push(n.data) : m.push({
                index: t,
                reason: n.msg || "上传失败"
              }), 1 + t == l ? (f = m.length, n.fileLength = l, n.failList = m, n.fileList = g, n.tempFilePath = e.tempFilePath, 0 == f ? e.toast.success ? (i.apiToast({
                title: e.toast.success,
                icon: "success"
              }, a), e.onSuccess(n, r, e.tempFilePath)) : e.istoast && e.toast.loading && i.hideToast(function () {
                e.onSuccess(n, r, e.tempFilePath)
              }) : (i.hideToast(), i.alertMsg(a, {
                msg: l > 1 ? "第" + m.map(function (e) {
                    return 1 + e.index
                  })
                  .join("，") + "个文件上传失败" : n.msg || e.errmsg
              }, function () {
                e.onSuccess(n, r, e.tempFilePath)
              }))) : s(1 + t)
          }
        })
      }
      var n = n || getApp(),
        a = a || i.getPage(),
        o = n.getAppInfo();
      if (!(e = i.extendJson(!0, {
          domain: o.domain,
          url: "",
          data: "",
          istoast: !0,
          filename: "file",
          tempFilePath: "",
          toast: {
            loading: "上传中...",
            success: "已上传"
          },
          header: {},
          userkey: "image_prefix",
          ukforward: "user_",
          istran: !1,
          errmsg: "上传失败",
          onBeforeSend: function () {},
          onSuccess: function () {},
          onFail: function () {},
          filetype: "images"
        }, e))
        .url) return !1;
      var r, d, c, p = n.getHeartInfo(),
        u = t(e.url);
      p && (d = p.user_id || "", (c = p.session_id || "") && (e.header.Cookie = "session_id=" + c)), r = i.extendJson(!0, {
        name: e.filename,
        data: '""'
      }, e.data), d && (r[e.userkey] = e.ukforward + d), e.tempFilePath = "string" == typeof e.tempFilePath ? [e.tempFilePath] : e.tempFilePath;
      var l = e.tempFilePath ? e.tempFilePath.length : 0,
        g = [],
        m = [],
        f = 0;
      e.tempFilePath && l > 0 && (e.onBeforeSend(r, e.tempFilePath), e.istoast && e.toast.loading && i.apiToast({
        title: e.toast.loading,
        icon: "loading"
      }, a), s(0))
    },
    signIn: s,
    logout: function (t, s) {
      var o = this,
        r = getApp();
      (t = i.extendJson(!0, {
        isset: !1,
        toast: {
          loading: "退出中...",
          success: "已退出"
        }
      }, t))
      .reqdelay = 1e3, t.istran = !1, t.dataname = "logout", t.onSuccess = function (e, t) {
        o.logintimer && clearTimeout(o.logintimer), 0 != e.code && t.user_id || (i.jumpTo({
          url: "login",
          target: "self"
        }), r.buildHeart(), a(), r.setRealnameStatus(), r.updateAppData({
          isreload: "logout"
        }, "q_express"), r.setWsCompanyInfo(), r.updateAppData({
          action: "reget"
        }, "vs_exp"), n.dataStorage("remove", ["topData", "localNote", "addressHistory"]))
      }, e(t, s)
    },
    logRecord: a,
    notice: function (t, a) {
      function s(s) {
        s && (t.data.code = s), e(t, a)
      }
      if (!(t = i.extendJson(!0, {
          url: "/v1/WeApp/notice",
          data: {
            source: "mina"
          },
          isset: !1,
          isalert: !1,
          istoast: !!t.toast,
          dataname: "notice"
        }, t))
        .data.form_id) return !1;
      wx.login({
        success: function (e) {
          e.code && s(e.code)
        },
        fail: function () {
          s()
        }
      })
    }
  };
});
define("servejs/audio.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  var a = require("tools");
  module.exports = {
    audioLib: function (e, t) {
      function r() {
        a.inArray(p, n.errtag) ? a.alertMsg(t, {
          delay: 500,
          msg: "文件已损坏，无法播放"
        }) : (s = wx.createAudioContext(e.idprefix + p), n.pre_tag == p ? "play" == d ? (s.pause(), d = "pause") : (s.play(), d = "play") : (n.pre_ctx && n.pre_ctx.pause(), s.seek(0), s.play(), d = "play"), t.setData({
          "audio.tag": p,
          "audio.status": d
        }), n.pre_tag = p, n.pre_ctx = s)
      }
      e = a.extendJson(!0, {
        cb: "",
        tag: "",
        status: "pause",
        idprefix: "audio_",
        evname: "onAudioEvent"
      }, e);
      var s, u, i = getCurrentPages(),
        p = e.tag,
        n = {},
        d = e.status;
      (t = t || i[i.length - 1])
      .setData({
        "audio.evname": e.evname,
        "audio.idprefix": e.idprefix
      }), t[e.evname] || (t[e.evname] = function (a) {
        switch (a.type) {
          case "error":
            u = {}, n.errtag = n.errtag || [], n.errtag.push(a.currentTarget.dataset.tag), u["audio.errtag." + a.currentTarget.dataset.tag] = "error", this.setData(u);
            break;
          case "play":
          case "pause":
            break;
          case "tap":
            p = a.currentTarget.dataset.tag, r();
            break;
          case "ended":
            d = "pause", this.setData({
              "audio.status": d
            })
        }
        e.cb && e.cb(a.type, p, d, s)
      }), "play" == e.status && "" != p && r()
    }
  };
});
define("servejs/citys.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
    t = require("tools.js"),
    i = require("map.js");
  require("wxapi.js"), require("../plugLib/Pinyin/pinyin.js");
  module.exports = {
    init: function (r, c) {
      c = t.extendJson(!0, {
        issearch: !0,
        selected: "",
        kind: "",
        triggerlevel: "district",
        cb: function () {}
      }, c);
      var o = function (o) {
        var n, a, d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {},
          l = [];
        i.getCitysList(function (i, s) {
          function y(e) {
            var i = {},
              r = t.getPage(1);
            if (r) return r.onCitySelect ? r.onCitySelect(e, c.kind) : r.onPageDataUpdate && r.onPageDataUpdate("areaSelect", {
              kind: c.kind,
              data: e
            }), void t.jumpTo();
            c.kind ? (i[c.kind] = e, i.city_kind = c.kind) : i = e, t.jumpTo({
              options: i
            })
          }

          function u(e, t, i, r, c) {
            for (var o in e) e[o].map(function (e) {
              (!c && e.name.indexOf(t) >= 0 || c && (1 == t.length && t == e.key.toLowerCase() || t.length > 1 && e.py.indexOf(t) >= 0)) && ((g = {
                level: i
              })[i] = {
                name: e.name,
                adcode: e.adcode
              }, e.province && (g.province = e.province), e.city && (g.city = e.city), r.push(g))
            })
          }
          n = i.province, t.arrSort(n, "key"), n.map(function (e) {
            return t.inArray(e.key, l) || (l.push(e.key), e.ikey = e.key), e
          }), r.setData({
            c_province: n,
            c_p_index: l
          }), s && (r.setData({
            triggerlevel: c.triggerlevel,
            province_sel: s.province ? {
              arr: i.city[s.province.adcode],
              adcode: s.province.adcode
            } : "",
            city_sel: s.city ? {
              arr: i.district[s.city.adcode],
              adcode: s.city.adcode
            } : "",
            district_sel: s.district || ""
          }), a && clearTimeout(a), a = setTimeout(function () {
            var e = s.city ? s.city.adcode : 0,
              t = s.province ? s.province.adcode : 0;
            r.setData({
              srollikey: "adcode_" + (e || t)
            })
          }, 100));
          var v, p = [],
            f = /^\w+$/;
          r.onSearch = function (t) {
            var c = t && "object" === (void 0 === t ? "undefined" : e(t)) ? t.detail.value : t;
            return p = [], c && (v = f.test(c), c = v ? c.toLowerCase() : c, i.province.map(function (e) {
              (!v && e.name.indexOf(c) >= 0 || v && (1 == c.length && c == e.key.toLowerCase() || c.length > 1 && e.py.indexOf(c) >= 0)) && p.push({
                level: "province",
                province: {
                  name: e.name,
                  adcode: e.adcode
                }
              })
            }), u(i.city, c, "city", p, v), u(i.district, c, "district", p, v)), r.setData({
              sArr: p
            }), p
          }, r.onSelect = function (e) {
            var t, o = e.currentTarget.dataset;
            "province" == o.level ? (o.city = "", o.district = "", t = i.city[o.adcode], r.setData({
              triggerlevel: c.triggerlevel,
              province_sel: {
                arr: t,
                adcode: o.adcode
              }
            }), a && clearTimeout(a), a = setTimeout(function () {
              r.setData({
                srollikey: "adcode_" + o.adcode
              })
            })) : "city" == o.level && (o.district = "", t = i.district[o.adcode], "search" == o.trigger && t && r.setData({
              province_sel: {
                arr: i.city[t[0].province.adcode],
                adcode: t[0].province.adcode
              }
            }), r.setData({
              triggerlevel: c.triggerlevel,
              city_sel: {
                arr: t,
                adcode: o.adcode
              }
            }), a && clearTimeout(a), a = setTimeout(function () {
              r.setData({
                srollikey: "adcode_" + o.adcode
              })
            }, 100)), t && 0 != t.length && o.level != c.triggerlevel ? "search" == o.trigger && (r.setData({
              sArr: ""
            }), a && clearTimeout(a), a = setTimeout(function () {
              r.setData({
                srollikey: "adcode_" + o.adcode
              })
            }, 100)) : (o.district = "city" == o.level && "" == o.district ? o.city : o.district, o.province = o.province + "市" == o.city ? o.city : o.province, y(o)), c.cb("select", o)
          };
          var g;
          c.cb(o, {
            cdata: i,
            selected: s
          }), d()
        }, c.selected, o)
      };
      return o("init"), {
        refresh: function (e) {
          o("refresh", e)
        }
      }
    }
  };
});
define("servejs/dialog.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  var a = require("api.js"),
    t = require("tools.js"),
    e = {};
  module.exports = {
    alertDialog: function (n, o, i) {
      function s(d, f) {
        if ("open" === d) {
          if (!o.iscoexist)
            for (var T in b) b[T] && "open" == b[T].status && ((x = {})["dialog." + T + ".status"] = "close", n.setData(x));
          p = "hidden", wx.hideTabBar && wx.hideTabBar({
            aniamtion: !0
          })
        } else "close" == d && (p = "auto", "b" == o.position && (d = "hidden", v && clearTimeout(v), v = setTimeout(function () {
          (x = {})["dialog." + f.dialogname + ".status"] = "close", n.setData(x)
        }, 50)), wx.showTabBar && wx.showTabBar({
          aniamtion: !0
        }));
        n.setData({
            "scroll.y": p
          }), delete(f = t.extendJson(!0, {}, o, f))
          .cb, f.status = d, o.msg && t.isArray(o.msg) && (f.isbranch = !0), (x = {})["dialog." + f.dialogname] = f, n.setData(x), o.cb(d, f), "open" === d && (l = {}, o.isblur && o.isblur && wx.hideKeyboard(), o.actionname && (n[o.actionname] = function (e) {
            var d = t.extendJson(!0, {}, e.currentTarget.dataset, o.tmpdata);
            if (c = d.dialogname, "tap" === e.type) "cancel" === (u = d.action) && s("close", {
              dialogname: c
            }), void 0 !== (g = o.cb(u, e)) && 1 == g && s("close", {
              dialogname: c
            });
            else if ("submit" === e.type || "confirm" === e.type)
              if ("confirm" === e.type ? (m = {
                  dialogname: o.dialogname
                }, (r = {})[e.currentTarget.id || "form_data"] = e.detail.value) : (m = e.detail.target.dataset, c = m.dialogname, r = e.detail.value), i && i.url) i.data = t.extendJson(!0, {}, i.data, r), o.isUseTmpdata && (i.data = t.extendJson(!0, i.data, o.tmpdata)), (i = t.extendJson(!0, {}, {
                  dataname: c,
                  iscache: !1,
                  onSuccess: function (a, t) {
                    0 == a.code && s("close", {
                      dialogname: c
                    }), (g = o.cb("submit", a, t, m, e.detail.formId)) && s("close", {
                      dialogname: c
                    })
                  }
                }, i))
                .isset = o.isset, i && i.url && a.apiDataRequest(i, n);
              else {
                var p = t.extendJson(!0, {}, m, n.data.dialog[o.dialogname].tmpdata);
                r = t.extendJson(!0, r, l), (g = o.cb("sure", r, p, e.detail.formId)) && g.msg && t.alertMsg(n, {
                  msg: g.msg
                }), (void 0 === g || 1 == g) && s("close", {
                  dialogname: c
                })
              }
            else if ("input" == e.type || "blur" == e.type || "focus" == e.type) {
              if ((g = o.cb(e.type, e, o.tmpdata)) && g.msg && t.alertMsg(n, {
                  msg: g.msg
                }), e.currentTarget.id && (l[e.currentTarget.id] = e.detail.value), "input" == e.type) return g
            } else(g = o.cb("other", e, o.tmpdata)) && s("close", {
              dialogname: c
            })
          }), o.tapname && (n[o.tapname] = function (a) {
            var e, i = {};
            "tap" == a.type && ((e = t.extendJson(!0, {}, a.currentTarget.dataset, o.tmpdata)) && "custom" == e.action ? g = o.cb("contap", e, o.dialogname, a.currentTarget.dataset) : (i["dialog_data." + o.dialogname] = e, n.setData(i)), (void 0 === (g = o.cb("rowtap", e, o.dialogname, a.currentTarget.dataset)) || 1 == g) && s("close", {
              dialogname: c
            }))
          }), o.scroll && (n[o.scroll] = function (a) {
            e.stimer && clearTimeout(e.overdata), e.overdata = setTimeout(function () {
              o.onScroll(a)
            }, 100)
          }))
      }

      function d(a, e, i) {
        var s = {},
          d = "dialog." + o.dialogname + ".",
          l = n.data.dialog[o.dialogname];
        if ("tmpdata" == a)
          for (var c in e) s[d + "tmpdata." + c] = e[c];
        else if ("condata" == a)
          for (var c in e) s[d + "content.data." + c] = e[c];
        else "contmp" == a ? (i = void 0 === i ? 0 : i, l.content.template[i] = t.extendJson(!0, l.content.template[i], e), s[d + "content.template"] = l.content.template) : "content" == a && (s[d + "content"] = t.extendJson(!0, l.content, e));
        n.setData(s)
      }
      var l, c, m, r, u, g, p, f = [{
          name: "取消",
          action: "cancel",
          classname: "border-r"
        }, {
          name: "确定",
          action: "submit"
        }],
        o = t.extendJson(!0, {
          isnoform: !1,
          isblur: !1,
          ismasktap: !0,
          position: "c",
          classname: "dialog-default",
          button: o.button || f,
          size: {
            w: "",
            h: "auto"
          },
          zindex: 9,
          msg: "",
          content: {},
          title: "",
          titleicon: "",
          titlecolor: "",
          msgclass: "",
          onScroll: function () {},
          scroll: "onDialogListScroll",
          actionname: "onDialogAction",
          dialogname: "dialogname",
          tmpname: "",
          tmpdata: "",
          tapname: "onDialogTap",
          status: "open",
          isreport: !0,
          cb: function () {},
          isset: !1
        }, o),
        b = n.data.dialog || {};
      b[o.dialogname] = t.extendJson(!0, {}, o), o.isnoform = !!o.msg || o.isnoform, "template" != o.tmpname && "template_list" != o.tmpname || (o.content.evname = o.actionname);
      var v, x;
      return o.updateData = d, o.getData = function (a, t, e) {
        var i = n.data.dialog[o.dialogname][a];
        return void 0 !== t && (i = i[t]), void 0 !== e && (i = i[e]), i
      }, o.changeTmpData = function (a) {
        o.tmpdata = t.extendJson(!0, o.tmpdata, a), (x = {})["dialog." + o.dialogname + ".tmpdata"] = o.tmpdata, n.setData(x)
      }, s(o.status), {
        close: function () {
          s("close")
        },
        change: s,
        updateData: d
      }
    }
  };
});
define("servejs/formui.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  function e(e, a) {
    var t = {};
    t["limit." + a.id] = {
      length: a.value.length,
      maxlength: a.maxlength || e.data.limit[a.id].maxlength
    }, e.setData(t)
  }
  var a = require("tools.js"),
    t = require("api.js"),
    r = require("wxapi.js");
  module.exports = {
    formUi: function (i, n, o) {
      function s(e) {
        return r.dataStorage("get", e || o.savekey, !0)
      }

      function u(e, t, i) {
        var n = e || o.savekey,
          s = t || o.savakeyarray;
        if (!n) return !1;
        var u = {};
        for (var l in g[y]) "disabled" != l && "errokey" != l && "evname" != l && g[y] && g[y][l] && g[y][l].value && (s ? a.inArray(l, s) && (u[l] = {
          value: g[y][l].value
        }) : u[l] = {
          value: g[y][l].value
        });
        i && (u = a.extendJson(!0, u, i)), r.dataStorage("set", n, u)
      }

      function l(e, t, r) {
        if (e) {
          var n, o = {};
          if (o[e] = g[y][e], 0 == (n = a.formCheck(o))
            .code) return g[y][e].classname = "input-blur", l(), n;
          g[y][e].classname = "input-error", "yes" == t && n.msg && a.alertMsg(i, {
            msg: n.msg
          })
        } else n = a.formCheck(g[y]), g[y] = a.extendJson(!0, {}, g[y], n.formlist);
        return 0 == n.code ? (g[y].disabled = !1, g[y].errokey && delete g[y].errokey) : (g[y].errokey = n.errokey, g[y].disabled = !0), i && i.setData({
          form: g
        }), n
      }

      function f(t, r) {
        function n(a) {
          g[y][a] && g[y][a].islimitsign && e(i, {
            id: a,
            value: ""
          })
        }
        if (t = t || o.cleankeyarray, g = i && i.data.form || {}, t && !r) a.isArray(t) ? t.map(function (e) {
          g[y][e] && (g[y][e].value = "", n(e))
        }) : g[y][t] && (g[y][t].value = "", n(s));
        else {
          var s;
          for (s in g[y]) r && t.indexOf(s) >= 0 || "disabled" !== s && "string" != typeof g[y][s] && (g[y][s].value = "", n(s))
        }
        l()
      }

      function c(e, t, r, n) {
        g = i && i.data.form || {};
        for (var o in e) "string" != typeof e[o] && "number" != typeof e[o] || (e[o] = {
          value: e[o]
        });
        g[y] = a.extendJson(!0, g[y], e), l(t, r, n)
      }
      var d, v, m, o = a.extendJson(!0, {
          cb: "",
          jumpurl: "",
          isautosave: !0,
          savakeyarray: "",
          savekey: "",
          isback: !1,
          evname: "onFormEvent",
          cleankeyarray: "",
          removebyarray: !0,
          isclean: !1,
          apiconfig: "",
          isset: !0,
          group: "default",
          formlist: ""
        }, o),
        g = i && i.data.form || {},
        p = "string" == typeof n ? n : n.type,
        y = o.group;
      if ("init" == p) {
        g[y] = a.extendJson(!0, g[y], o.formlist), o.savekey && 0 == (m = s())
          .code && (g[y] = a.extendJson(!0, g[y], m.data));
        for (d in g[y]) g[y][d].value = g[y][d].value || "", g[y][d].islimitsign && e(i, {
          id: d,
          value: g[y][d].value,
          maxlength: g[y][d].maxlength
        });
        if (g[y].evname = o.evname, o.evname && i) {
          var k, b, x, h, J, D, S;
          i[o.evname] = function (t) {
            k = t.type, b = t.currentTarget.dataset, x = t.detail.value, h = t.currentTarget.id, "blur" == k ? ((J = {})[h] = {
              value: x
            }, c(J, h, b.isalert || "yes", "blur"), o.isautosave && u()) : "focus" == k ? ((D = {})["form." + y + "." + h + ".classname"] = "input-focus", i && i.setData(D)) : "input" == k && (g[y][h].islimitsign && e(i, {
              id: h,
              value: x
            }), g[y][h].value = x, j = a.formCheck(g[y]), (S = {})["form." + y + ".disabled"] = 0 != j.code, i.setData(S))
          }
        }
        l()
      } else {
        if ("submit" == p) {
          if (v = n.detail.target.dataset, y = v.group || y, o.apiconfig && o.apiconfig.url) o.apiconfig.dataname = v.group || y, o.apiconfig.formlist = o.apiconfig.formlist || o.formlist, o.apiconfig.data = a.extendJson(!0, o.apiconfig.data, n.detail.value), o.apiconfig.isset = o.isset, o.apiconfig.onSuccess = function (e, t) {
            0 == e.code && (o.isback ? wx.navigateBack() : o.jumpurl && a.jumpTo({
              url: o.jumpurl,
              options: e.data
            }), o.isclean && f()), "function" == typeof o.cb && o.cb(p, e, t)
          }, t.apiDataRequest(o.apiconfig, i);
          else {
            o.isback && wx.navigateBack();
            var j = a.formCheck(o.formlist, n.detail.value);
            i && j.code > 0 && a.alertMsg(i, j), 0 == j.code && "function" == typeof o.cb && o.cb(p, n.detail.value, v)
          }
          return !1
        }
        d = n.currentTarget.id, v = n.currentTarget.dataset, y = v.group || y, g[y] = a.extendJson(!0, o.formlist, g[y]), g[y][d] = a.extendJson(!0, g[y][d], {
          errmsg: "",
          evtype: p
        }, n.detail), l(d, "blur" == p ? "yes" : "no", p)
      }
      return "function" == typeof o.cb && o.cb(p, g[y], v), {
        clean: function (e, a) {
          f(e, a)
        },
        check: function (e) {
          return g = i && i.data.form || {}, g[y] = a.extendJson(!0, g[y], e), l()
        },
        update: function (e, a, t) {
          c(e, a, t)
        },
        saveData: u,
        getSaveData: s,
        removeSaveData: function (e, t) {
          var i, n = e || o.savekey,
            s = t || o.cleankeyarray;
          if (!o.removebyarray || !s) return r.dataStorage("remove", n);
          if (0 == (i = r.dataStorage("get", n, !0))
            .code) {
            for (var u in i.data) i.data[u] && a.inArray(u, s) && delete i.data[u];
            return r.dataStorage("set", n, i.data), i
          }
        }
      }
    }
  };
});
define("servejs/images.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  var e = require("tools"),
    t = require("api"),
    a = require("dialog");
  module.exports = {
    imagesLib: function (t, a) {
      var i = /(\/?[a-z0-9]+)+\.(jpg|png|gif|jpeg|bmp)/;
      t = e.extendJson(!0, {
        cb: function () {},
        maxw: 200,
        getImgArr: function () {
          return []
        },
        tapview: !0,
        checkImg: function (e) {
          return i.test(e)
        },
        urlpath: "",
        errorclass: "icon-img-error",
        errorpath: "/images/icon/img-error.png",
        imgkey: "",
        evname: "onImageEvent"
      }, t);
      var o = getCurrentPages();
      (a = a || o[o.length - 1])
      .setData({
        "imglib.errorpath": t.errorpath,
        "imglib.evname": t.evname
      }), a[t.evname] || (a[t.evname] = function (a) {
        var i = a.target.dataset;
        switch (a.type) {
          case "load":
            var o = a.detail.width,
              n = a.detail.height,
              r = {};
            o > t.maxw && (n = parseInt(t.maxw / (o / n)), o = t.maxw), r["imglib.style." + i.tag] = "width:" + o + "px;height:" + n + "px", this.setData(r), t.cb(a.type, r);
            break;
          case "error":
            var c = {};
            c["imglib.error." + i.tag] = !0, this.setData(c), t.cb(a.type, a);
            break;
          case "tap":
            var s, u, m = t.getImgArr(this),
              p = [];
            if ((this.data.imglib && this.data.imglib.error || {})[i.tag]) return e.alertMsg(this, {
              msg: "图片不存在！"
            }), !1;
            e.isArray(m) && m.map(function (e, a) {
              s = t.urlpath + (t.imgkey ? e[t.imgkey] : e), i.tag == a && (u = s), t.checkImg(s, e) && p.push(s)
            }), t.tapview && wx.previewImage({
              current: u,
              urls: p
            }), t.cb(a.type, u, p)
        }
      })
    },
    chooseImage: function (i, o) {
      function n(t) {
        e.jumpTo({
          url: "camera",
          options: {
            kind: t.kind,
            source: i.cameraType
          }
        })
      }

      function r(a, c) {
        a.kind && (i.uploadconfig.data.chooseKind = a.kind), !c && "camera" == a.action && i.cameraType && wx.createCameraContext ? wx.getSetting({
          success: function (e) {
            e.authSetting["scope.camera"] ? n(a) : wx.authorize({
              scope: "scope.camera",
              success: function () {
                n(a)
              },
              fail: function () {
                wx.openSetting ? wx.openSetting({
                  success: function (e) {
                    e.authSetting["scope.camera"] ? n(a) : r(a, !0)
                  },
                  fail: function () {
                    r(a, !0)
                  }
                }) : r(a, !0)
              }
            })
          },
          fail: function () {
            n(a)
          }
        }) : (g.sourceType = [a.action], g.success = function (n) {
          i.picCutType ? e.jumpTo({
            url: i.picUrl,
            options: {
              kind: a.kind,
              source: i.picCutType,
              path: n.tempFilePaths[0]
            }
          }) : (i.uploadconfig.tempFilePath = n.tempFilePaths, i.cb("choose", n.tempFilePaths, a, u), i.isauto && t.apiUpload(i.uploadconfig, o))
        }, i.setChooseCount && (g.count = i.setChooseCount(a)), wx.chooseImage(g))
      }
      var c = getCurrentPages(),
        s = {
          status: "init"
        },
        u = {},
        o = o || c[c.length - 1];
      (i = e.extendJson(!0, {
        isauto: !0,
        choose: {
          count: 1,
          sizeType: ["compressed"],
          sourceType: ""
        },
        checkStatus: function () {
          return {
            code: "loading" == s.status ? 1 : 0
          }
        },
        setChooseCount: function () {
          return 1
        },
        picCutType: "",
        picUrl: "pic_cut",
        cameraType: "",
        cb: function () {},
        uploadconfig: {
          filetype: "images",
          onBeforeSend: function (e, t) {
            s.status = "loading", i.cb("loading", e, t, u)
          },
          onSuccess: function (e, t) {
            s.status = "complete", i.cb("submit", e, t, u)
          },
          data: {}
        },
        keys: "",
        names: {
          album: "从手机相册选择",
          camera: "拍照"
        },
        evname: "onChooseImage"
      }, i))
      .keys = i.keys || ["camera", "album"];
      var m, p, g = i.choose;
      return o[i.evname] || (o[i.evname] = function (t) {
        if (p = "trigger" == t.type ? t : t.currentTarget.dataset, "tap" == t.type || "trigger" == t.type) {
          if (p.action) return void r(p)
        } else if ("submit" == t.type && t.detail && (t.detail.value.formid = t.detail.formId || "", p = t.detail.target.dataset, u = t.detail.value || {}, p.action)) return r(p), !1;
        (m = i.checkStatus(t))
        .code > 0 ? m.msg && e.alertMsg(o, {
          msg: m.msg
        }) : a.alertDialog(o, {
          dialogname: "chooseimage",
          tmpname: "chooseimage",
          classname: "chooseimage-model",
          tmpdata: {
            kind: p.kind,
            keys: i.keys,
            names: i.names
          },
          position: "b",
          cb: function (e, t) {
            i.cb(e, t, u), "rowtap" == e && r(t)
          },
          button: [{
            name: "取消",
            action: "cancel",
            classname: "color-grey"
          }]
        })
      }), {
        upload: function (e) {
          e && (e = "string" == typeof e ? [e] : e, i.uploadconfig.tempFilePath = e), t.apiUpload(i.uploadconfig, o)
        }
      }
    }
  };
});
define("servejs/map.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  function t(t, i) {
    t = e.extendJson(!0, {
      domain: n.domain,
      istoast: !1,
      apisrc: "gd",
      data: {
        key: n.key
      }
    }, t), o.apiDataRequest(t, i)
  }
  var e = require("tools.js"),
    o = require("api.js"),
    i = require("wxapi.js"),
    a = require("../plugLib/Pinyin/pinyin.js"),
    n = {
      domain: "https://restapi.amap.com",
      key: "913826dfa70cf0bf04e334cf4ca2fa0e"
    },
    c = {
      domain: "https://apis.map.qq.com",
      key: "ITHBZ-3UZYF-ZRBJY-J4XSN-M2E2O-M6FI6"
    };
  module.exports = {
    location: function (o, a, n) {
      function c(t) {
        var n = i.dataStorage("get", "location", !0);
        if (0 == n.code && n.ts && "m" == n.ts.by) {
          var c;
          if (e.dateTs("m") - n.ts.time <= 2) return n.data.district && 0 != n.data.district.length || (n.data.district = n.data.city, n.data.area = [n.data.province, n.data.city, n.data.district].join(" ")), u.istoast && e.apiToast({
            mask: !1,
            title: u.toast.loading,
            icon: "loading"
          }, o), c = {
            code: 0,
            msg: u.toast.success,
            data: n.data
          }, "function" == typeof a.onSuccess ? a.onSuccess(c, {
            iscache: !0,
            status: t
          }) : o && o.setData({
            location: c.data
          }), u.istoast && e.apiToast({
            mask: !1,
            duration: 500,
            title: u.toast.success,
            icon: "success"
          }, o), !1
        }
        s(t)
      }

      function s(i) {
        wx.getLocation({
          type: "gcj02",
          success: function (a) {
            u.istoast && e.apiToast({
              mask: !1,
              title: u.toast.loading,
              icon: "loading"
            }, o), u.data.location = a.longitude + "," + a.latitude, u.data.status = i, t(u, o)
          },
          fail: function () {
            wx.getSetting ? wx.getSetting({
              success: function (t) {
                t.authSetting["scope.userLocation"] ? r("请开启微信定位权限", 2001) : wx.openSetting ? wx.openSetting({
                  success: function (t) {
                    t.authSetting["scope.userLocation"] ? s("init") : r()
                  },
                  fail: function () {
                    r("", 2003)
                  }
                }) : r("", 2003)
              },
              fail: function () {
                r()
              }
            }) : r()
          }
        })
      }

      function r(t, i) {
        t = 2003 == (i = i || 2002) ? "请点击授权设置，开启定位授权" : t || u.toast.error, "function" == typeof a.onFail && a.onFail({
          code: i,
          msg: t
        }), e.hideToast(o), e.alertMsg(o, {
          msg: t
        }, function (t) {
          "hide" == t && 2003 == i && e.jumpTo({
            options: {
              source: "location"
            },
            url: "personal"
          })
        })
      }
      var d = ["北京市", "天津市", "上海市", "重庆市"],
        u = e.extendJson(!0, {
          data: {
            radius: 100,
            homeorcorp: 1
          },
          isset: !1,
          toast: {
            loading: "定位中...",
            success: "定位成功",
            error: "定位失败"
          },
          reqdelay: 10,
          istoast: !0,
          url: "/v3/geocode/regeo",
          dataname: "location",
          resFilter: function (t, o) {
            var a, n, c, s, r, l = 2002,
              f = u.toast.error,
              p = {};
            return t && (l = 0 == t.status ? l : 0, f = t.info), t && t.regeocode && t.regeocode.addressComponent && (0 == (a = t.regeocode.addressComponent)
              .city.length ? (c = e.inArray(a.province, d) ? a.province : a.district, n = a.province) : (c = a.city, n = a.province), r = 0 == a.district.length ? c : a.district, s = (s = t.regeocode.formatted_address || a.township + (a.neighborhood && a.neighborhood.name) + (a.building && a.building.name) + (a.streetNumber && a.streetNumber.street + a.streetNumber.number))
              .replace(a.province + a.city + a.district, ""), p = {
                location: o.location,
                adcode: a.adcode,
                province: n,
                city: c,
                district: r,
                area: [n, c, r].join(" "),
                detail: s
              }, i.dataStorage("set", "location", p, "m")), {
              code: l,
              msg: f,
              data: p
            }
          },
          onSuccess: function (t, e) {
            var i = t && 0 == t.code ? t.data : "fail";
            o && o.setData({
              location: i
            })
          },
          onFail: function () {
            o && o.setData({
              location: "fail"
            })
          }
        }, a);
      if ((void 0 === n || n) && c("init"), o) {
        var l;
        o.onLocation = function () {
          u.istoast = !0, l && clearTimeout(l), l = setTimeout(function () {
            c("reload")
          }, 100)
        }
      }
    },
    getCoorPoint: function (e) {
      var o;
      t({
        url: "/v3/geocode/geo",
        data: e.data,
        istoast: !0,
        onSuccess: function (t) {
          t && 1 == t.status && t.geocodes && (o = t.geocodes[0].location.split(","), "function" == typeof e.cb && e.cb({
            lng: o[0],
            lat: o[1]
          }))
        }
      })
    },
    getCitysList: function (e, o, n) {
      function c() {
        function t(t, e, o) {
          for (g = t[o], w = g ? g.length : 0, x = 0; x < w; x++)
            if (g[x].name == e) return {
              name: e,
              adcode: g[x].adcode
            };
          return {}
        }
        if (p = v.province, k = p.length, g = v.city, m = v.district, h = o.province, b = o.city, S = o.district, h)
          for (x = 0; x < k; x++)
            if (p[x].name == h || h.indexOf(p[x].name) >= 0 || p[x].name.indexOf(h) >= 0) {
              h = {
                name: h,
                adcode: p[x].adcode
              };
              break
            }
        return b = b && t(g, b, h.adcode), S = S && t(m, S, b.adcode), {
          province: h || "",
          city: b || "",
          district: S || ""
        }
      }

      function s(t) {
        t && t.length > 0 && t.map(function (t) {
          if (q = a.tranCode(t.name)
            .toLowerCase(), q = 0 == t.name.indexOf("重庆") ? "chongqing" : q, C = q.substr(0, 1)
            .toUpperCase(), !("province" == t.level && L.indexOf(t.name) >= 0)) {
            if ("province" == t.level) u = t.name, d = t.adcode, p.push({
              py: q,
              key: C,
              name: u,
              adcode: d
            });
            else if ("city" == t.level) {
              if (g[d] || (g[d] = []), t.name.indexOf("郊县") >= 0) return !1;
              f = t.name, l = t.adcode, f = f.replace(/市辖区$/, ""), f = f.replace(/城区$/, "市"), g[d].push({
                py: q,
                key: C,
                name: f,
                adcode: l,
                province: {
                  name: u,
                  adcode: d
                }
              })
            } else "district" == t.level && (m[l] || (m[l] = []), m[l].push({
              py: q,
              key: C,
              name: t.name,
              adcode: t.adcode,
              province: {
                name: u,
                adcode: d
              },
              city: {
                name: f,
                adcode: l
              }
            }));
            s(t.districts)
          }
        })
      }
      var r, d, u, l, f, p = [],
        g = {},
        m = {},
        y = "refresh" === n,
        v = i.dataStorage("get", "citysList");
      if (v && !y) return "重庆" == (v = v.data)
        .province[21].name && "Z" == v.province[21].key && (v.province[21].py = "chongqing", v.province[21].key = "C"), r = c(), e(v, r), !1;
      t({
        url: "/v3/config/district",
        data: {
          keywords: "",
          showbiz: !1,
          subdistrict: 3
        },
        dataname: "citys",
        istoast: !y,
        resFilter: function (t) {
          var e = {
            code: 9001,
            msg: "获取城市信息失败"
          };
          return t && 1 == t.status && t.districts && t.districts.length > 0 && (e.code = 0, e.msg = "成功获取数据", e.data = t.districts[0].districts), e
        },
        toast: {
          loading: "数据加载中..."
        },
        onSuccess: function (t, o) {
          t && 0 == t.code && (s(t.data), v = {
            province: p,
            city: g,
            district: m
          }, i.dataStorage("set", "citysList", v), r = c(), "function" == typeof e && e(v, r))
        }
      });
      var h, b, S, k, x, w, q, C, L = ["香港特别行政区", "台湾省", "澳门特别行政区"]
    },
    tranCoor: function (o, i, a) {
      (i = e.extendJson(!0, {
        domain: c.domain,
        apisrc: "tx",
        istoast: !0,
        url: "/ws/coord/v1/translate",
        data: {
          type: "5",
          key: encodeURIComponent(c.key)
        }
      }, i))
      .onSuccess = function (t, e) {
        t && 0 == t.status && t.locations && "function" == typeof o && o(t.locations)
      }, t(i, a)
    }
  };
});
define("servejs/pages.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  var t = require("tools.js"),
    n = require("api.js");
  module.exports = function (o) {
    function a(n, o) {
      function a(n, o) {
        if (t.isJson(o))
          for (var e in o) a(n + "." + e, o[e]);
        else i[n] = o
      }
      var i = {};
      return a(n, o), i
    }

    function i(n, o, i, e) {
      var s;
      t.isJson(n) ? i.setData(n) : (t.isArray(n) ? (s = {}, n.map(function (n) {
        o ? s = t.extend(!0, s, a(n[0], n[1])) : s[n[0]] = n[1]
      })) : (s = {}, e ? s = a(n, o) : s[n] = o), i.setData(s))
    }

    function e(n, o) {
      t.isArray(n) ? n.map(function (n, o) {
        t.isArray(n) ? e(n[0], n[1]) : e(n)
      }) : c[n] = require(o || n + ".js")
    }
    var s, r, u, p = t.extendJson(!0, {
        isUnauthToLogin: !0,
        isAutoLogin: !1,
        isLifeNormal: !1,
        isgetapp: !0,
        handler: {},
        serve: [],
        life: ["Show"],
        onLoginCallback: function () {},
        onPageDataUpdate: function () {},
        dataParse: function (t) {
          return t || {}
        },
        optionsParse: function (t) {
          return t || {}
        },
        tempData: {},
        data: {}
      }, o),
      c = {
        tools: t
      },
      d = p.isgetapp ? getApp() : {};
    p.onSetTempData = function (t, n) {
      this.tempData[t] = n
    }, e(p.serve), r = p.dataParse(p.data), s = t.extendJson(!0, {
      data: r,
      onShow: function () {
        t.loginCheck({
          cb: function (t) {
            p.onSetData({
              loginRes: t
            }), p.onShow && p.onShow(t)
          }
        })
      },
      onHide: function () {
        p.isFirstLoad = !1, p.onHide && p.onHide()
      },
      onLoad: function (o) {
        this.route = this.__route__, this.tempData = p.tempData, p.serve = this.serve = c, p.appobj = this.appobj = d, p.data = this.data, p.pageobj = this, p.setData = p.onSetData = this.onSetData, u = p.optionsParse(o), this.onSetData({
          options: u,
          isCanBackHome: !t.hasPrevPage()
        }), p.options = this.data.options || {}, p.eventHandler = function (t, n) {
          this[t] = n
        }.bind(this), p.isFirstLoad = !0, t.loginCheck({
          cb: function (t) {
            p.onSetData({
              loginRes: t
            }), p.onLoad && p.onLoad(u, t), t.code > 0 && p.isAutoLogin && n.signIn("wx", {
              istologin: p.isUnauthToLogin,
              istoast: !0,
              isback: !1
            }, p.pageobj, p.appobj)
          }
        })
      },
      onBackHome: function () {
        t.jumpTo({
          url: "vs_exp",
          target: "tab"
        })
      },
      onCatch: function () {},
      onPageDataUpdate: p.onPageDataUpdate.bind(p),
      onLoginCallback: p.onLoginCallback.bind(p),
      onSetData: function (t, n, o) {
        i(t, n, this, o)
      },
      onSetTempData: p.onSetTempData
    }, p.handler), p.life && p.life.map(function (n, o) {
      n = t.wordHump(n), s["on" + n] || (s["on" + n] = p.isLifeNormal && p["on" + n] ? p["on" + n].bind(p) : function () {
        u = this.data.options, p["on" + n] && p["on" + n](u, arguments)
      })
    }), Page(s)
  };
});
define("servejs/record.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  var t = require("tools"),
    e = require("api");
  module.exports = {
    recordLib: function (a) {
      function c(e) {
        if (h.t1_ && clearTimeout(h.t1_), h.t2_ && clearTimeout(h.t2_), "e" == e) return t.apiToast({
          status: "hide"
        }, p), !1;
        d = 0, u = !1, h.t1_ = setTimeout(function () {
          d = a.alarmtimer, h.t2_ = setInterval(function () {
            if (o(), d <= 0) return u = !0, s = "mic", n(), !1;
            d--
          }, 1e3)
        }, 1e3 * (a.maxtimer - a.alarmtimer))
      }

      function o() {
        t.apiToast({
          title: g[s],
          cname: {
            icon: "toast-" + s + "-icon",
            title: "toast-" + s + "-title"
          },
          icon: d && "cancel" != s ? {
            title: d,
            cname: "toast-icon-text"
          } : s
        }, p)
      }

      function i() {
        c("s"), o(), p.setData({
          "record.bvalue": a.minfo
        }), wx.startRecord({
          success: function (e) {
            var c = e.tempFilePath;
            "mic" == s ? r(c) : "short" != s || m || t.alertMsg(p, {
              msg: "录音时间过短"
            }), a.cb && a.cb(s, c)
          },
          fail: function (e) {
            console.log(e), t.alertMsg(p, {
              msg: e ? e.errMsg : "无法录音"
            })
          }
        }), a.cb && a.cb("start")
      }

      function n() {
        c("e"), p.setData({
          "record.bvalue": a.sinfo
        }), h.t3_ && clearTimeout(h.t3_), h.t3_ = setTimeout(function () {
          wx.stopRecord()
        }, 200), a.cb && a.cb("end", s)
      }

      function r(t) {
        a.uploadconfig.tempFilePath = [t], e.apiUpload(a.uploadconfig, p)
      }
      a = t.extendJson(!0, {
        cb: "",
        bar: {
          w: 310,
          h: 45
        },
        uploadconfig: {
          url: "/v1/Complaints/uploadAttachments",
          filetype: "audio"
        },
        maxtimer: 60,
        alarmtimer: 10,
        mintimer: 1,
        sinfo: "按住 说话",
        minfo: "松开 结束",
        dataname: "record",
        evname: "onTriggerRecord"
      }, a);
      var s, u, m, l, d, f = getCurrentPages(),
        h = {},
        p = f[f.length - 1],
        g = {
          cancel: "松开手指，取消发送",
          mic: "手指上滑，取消发送"
        };
      p[a.evname] || (p[a.evname] = function (t) {
        if (u && "touchstart" != t.type) return !1;
        switch (h[t.type] = {
          evtype: t.type,
          ts: t.timeStamp,
          x: t.changedTouches[0].pageX,
          y: t.changedTouches[0].pageY
        }, Math.abs(h[t.type].y - h.touchstart.y) > a.bar.h / 2 ? (s = "cancel", m = !0) : (s = "mic", m = !1), t.type) {
          case "touchstart":
            this.setData({
              "scroll.y": "hidden"
            }), i();
            break;
          case "touchmove":
            o();
            break;
          case "touchcancel":
          case "touchend":
            this.setData({
              "scroll.y": "auto"
            }), (l = h[t.type].ts - h.touchstart.ts) < 1e3 * a.mintimer && (s = "short"), n()
        }
      }), p.setData({
        "record.bvalue": a.sinfo,
        "record.evname": a.evname
      })
    }
  };
});
define("servejs/tabui.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  var a = require("tools.js"),
    n = require("api.js");
  module.exports = {
    tabUi: function (t, i, e) {
      function o(n, i) {
        if (m = e.action && e.action[d] && e.action[d].trigger || "normal", (f = "function" == typeof e.triggerCheck && e.triggerCheck(d, i) || {
            code: 0
          }) && f.code > 0) a.alertMsg(t, {
          msg: f.msg || "无法切换"
        });
        else if ("jump" != m)
          if (g[e.navname] = g[e.navname] || {}, g[e.navname].current = d, t.setData({
              tabui: g
            }), "load" == m) {
            if ("init" == n && !e.isauto) return !1;
            c(i)
          } else "normal" == m && "function" == e.cb && e.cb(d);
        else r()
      }

      function c(i) {
        (u = a.extendJson(!0, e.issame ? u : {}, e.apiconfig, e.action[d] && e.action[d].apiconfig, {
          data: i
        })) && u.url && (u.dataname = "data_" + d, n.apiDataRequest(u, t))
      }

      function r() {
        s = a.extendJson(!0, e.issame ? s : {}, e.jumpconfig, e.action[d] && e.action[d].jumpconfig, {
          options: {
            navtag: d
          }
        }), a.jumpTo(s)
      }
      e = a.extendJson(!0, {
        navname: "nav",
        tapname: "onTapTabUi",
        apiconfig: "",
        jumpconfig: "",
        action: "",
        triggerCheck: "",
        issame: !0,
        isauto: !1,
        cb: ""
      }, e);
      var u, s, m, f, g = t.data.tabui || {},
        d = i;
      return t[e.tapname] = function (a) {
        d = a.currentTarget.dataset[e.navname], o("switch")
      }, o("init"), {
        reload: function (a) {
          d = t.data.tabui && t.data.tabui[e.navname] && t.data.tabui[e.navname].current || i, o("switch", a)
        }
      }
    }
  };
});
define("servejs/tools.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  function t() {
    var e, a, r, n, i, c, u = arguments[0] || {},
      l = 1,
      p = arguments.length,
      g = !1;
    for ("boolean" == typeof u && (g = u, u = arguments[l] || {}, l++), "object" !== (void 0 === u ? "undefined" : x(u)) && "function" != typeof u && (u = {}), l === p && (u = this, l--); l < p; l++)
      if (null != (i = arguments[l]))
        for (n in i) e = u[n], u !== (r = i[n]) && (g && r && (s(r) || (a = o(r))) ? (a ? (a = !1, c = e && o(e) ? e : []) : c = e && s(e) ? e : {}, u[n] = t(g, c, r)) : void 0 !== r && (u[n] = r));
    return u
  }

  function e(t, e, a, n) {
    if (s(e)) {
      var o = r(e, a, n);
      return t + (t.indexOf("?") < 0 ? "?" : "&") + o
    }
    return t
  }

  function a(e, a) {
    return a = t(!0, {
      reg: /\&|\#|\$|\<|\>/g,
      reby: "*"
    }, a), "string" == typeof e && (e = e.replace(a.reg, a.reby)), e
  }

  function r(t, e, r) {
    if (!t) return "";
    var n = [];
    for (var c in t) e && i(c, e) || (o(t[c]) || s(t[c]) ? n.push(c + "=" + encodeURIComponent(JSON.stringify(t[c]))) : (r && (t[c] = a(t[c])), n.push(c + "=" + t[c])));
    return n.join("&")
  }

  function n(t) {
    return "function" == typeof t
  }

  function o(t) {
    return t instanceof Array
  }

  function i(t, e, a) {
    var r, n = e.length,
      o = !0;
    if (s(t)) {
      for (c = 0; c < n; c++) {
        for (var i in t)
          if (!(o = e[c][i] == t[i])) break;
        if (o) return !a || c
      }
      return !!a && -1
    }
    for (var c = 0; c < n; c++)
      if (e[c] == t) {
        r = c;
        break
      }
    return a ? r : r >= 0
  }

  function s(t) {
    return "object" === (void 0 === t ? "undefined" : x(t)) && "[object object]" === Object.prototype.toString.call(t)
      .toLowerCase() && !o(t)
  }

  function c(t, e) {
    var a, r, n = new Date,
      o = /\-/g;
    t = t || n.getTime();
    var i = (t = new Date(t))
      .getFullYear(),
      s = t.getMonth() + 1,
      c = t.getDate(),
      l = t.getHours(),
      p = t.getMinutes(),
      g = (t.getSeconds(), [i, s, c].map(u)
        .join("-")),
      d = [l, p].map(u)
      .join(":"),
      f = n.getFullYear(),
      m = [f, n.getMonth() + 1, n.getDate()].map(u)
      .join("-");
    return r = Date.parse(g.replace(o, "/")), a = Date.parse(m.replace(o, "/")), "ts" == e ? t ? r : a : (g = r == a ? "今天" : a - r >= 864e5 && a - r < 1728e5 ? "昨天" : (f == i ? [s, c] : [i, s, c])
      .map(u)
      .join("-"), e ? [g, d] : g + " " + d)
  }

  function u(t) {
    return (t = t.toString())[1] ? t : "0" + t
  }

  function l(e, a, r) {
    (a = t({}, {
      status: "show",
      code: "4004",
      msg: "",
      mask: !0,
      delay: "1500"
    }, a))
    .msg ? (e = e || D(), a.isarray = !(!a.msg || !o(a.msg)), e && e.setData({
      messages: a
    }), n(r) && r(a.status), T.msgTimer && clearTimeout(T.msgTimer), T.msgTimer = setTimeout(function () {
      a.status = "hide", e && e.setData({
        messages: a
      }), n(r) && r(a.status)
    }, a.delay)) : n(r) && r("hide")
  }

  function p(e, a) {
    e = t(!0, {
      mask: !1,
      iscustom: !1,
      title: "SUCCESS",
      icon: "success",
      duration: 1500
    }, e), a = a || D(), 1 == T.toastType ? wx.hideLoading() : wx.hideToast(), T.toastType = 0, T.loadTimer_ && clearTimeout(T.loadTimer_), "hide" == e.status ? a && a.setData({
      "toast.status": "hide"
    }) : "loading" == e.icon ? (e.duration = 35e3, wx.showLoading ? (T.toastType = 1, wx.showLoading(e), T.loadTimer_ = setTimeout(function () {
      g(e.cb)
    }, e.duration)) : wx.showToast(e)) : "error" == e.icon ? g(function () {
      l(a, {
        msg: e.title
      }, e.cb)
    }) : "success" == e.icon ? e.title ? wx.showToast(e) : g(e.cb) : g(function () {
      e.status = e.status || "open", a && a.setData({
        toast: e
      })
    })
  }

  function g(t) {
    T.loadTimer_ && clearTimeout(T.loadTimer_), 1 == T.toastType ? wx.hideLoading() : wx.hideToast(), T.toastType, n(t) && t()
  }

  function d(t) {
    var e = getApp()
      .globalData.appInfo.pages;
    return !(!t || !e[t])
  }

  function f(a) {
    function r(t) {
      "blank" == a.target ? wx.navigateTo({
        url: t
      }) : "self" == a.target ? wx.redirectTo({
        url: t
      }) : "tab" == a.target ? wx.switchTab({
        url: t
      }) : "relaunch" == a.target && (wx.canIUse && wx.canIUse("reLaunch") ? wx.reLaunch({
        url: t
      }) : (a.target = "tab", a.url = "vshop", f(a, !0)))
    }
    var n, o, i, s, c, u, a = t(!0, {
        target: "blank",
        options: "",
        optkey: "",
        datakey: "datakey",
        url: "",
        delta: 1,
        iscallback: !1,
        ischeck: !0
      }, a),
      l = /\//g,
      p = b();
    if (c = 1 * p - T.jumpDelay, T.jumpDelay = p, c < 1e3 && T.jumpUrl === a.url) return !1;
    if (T.jumpUrl = a.url, !a.url) return n = getCurrentPages(), o = n[n.length - a.delta - 1], a.options && (a.optkey ? ((s = {})[a.optkey] = a.options, o && o.setData(s)) : (i = t(!0, o && o.data && o.data.options, a.options), o && o.setData({
      options: i
    }))), o ? wx.navigateBack({
      delta: a.delta
    }) : (a.url = "vs_exp", f(a)), !1;
    a.url = decodeURIComponent(a.url);
    var g = getApp(),
      d = g.globalData.appInfo.pages,
      h = d[a.url] || {};
    return !(!l.test(a.url) && !h) && (h.istab && (a.target = "tab"), u = l.test(a.url) ? a.url : h.url, a.options && ("tab" == a.target && a.datakey ? (g = getApp())
        .updateAppData(a.options, a.datakey) : u = e(u, a.options, "", !0)), h.isneedphone && !g.getHeartInfo()
      .phone ? (f({
        url: "bindPhone",
        options: {
          callback: encodeURIComponent(a.url)
        }
      }), !1) : void(l.test(a.url) ? r(u) : h.islogin ? a.ischeck && "login" !== u && m({
        cb: function (t) {
          t.code > 0 && (a.target = "blank", u = d.login.url + (a.iscallback ? "?callback=" + encodeURIComponent(u) : "")), r(u)
        }
      }) : r(u)))
  }

  function m(a, r) {
    var a = t(!0, {
        cb: "",
        isjump: !1,
        code: 2001,
        isalert: !1,
        msg: "您还没有登录",
        backurl: "",
        params: ""
      }, a),
      o = getApp()
      .heartBeatCheck();
    o ? n(a.cb) && a.cb({
      code: 0,
      msg: "已登录",
      data: o
    }) : (a.isalert && r && l(r, {
      msg: a.msg,
      code: a.code
    }), a.params && (a.backurl = e(a.backurl, a.params)), a.isjump && f({
      url: "login",
      options: {
        callback: a.backurl
      },
      ischeck: !1
    }), n(a.cb) && a.cb({
      code: a.code,
      msg: a.msg,
      data: {}
    }))
  }

  function h(t, e) {
    var a, r, n = /\d{4}-\d{1,2}-\d{1,2}\s(\d{1,2}:?){3}/;
    return t ? (a = t.match(n)) ? (t = (t = a[0])
      .replace(/\-/g, "/"), r = Date.parse(t)) : r = r : r = "", c(r, e)
  }

  function b(t) {
    var e = (new Date)
      .getTime();
    return e = y(e, t)
  }

  function y(t, e) {
    if (!e) return t;
    switch (e) {
      case "t":
        t /= 864e5;
        break;
      case "h":
        t /= 36e5;
        break;
      case "m":
        t /= 6e4;
        break;
      case "s":
        t /= 1e3
    }
    return parseInt(t)
  }

  function D(t, e) {
    t = void 0 === t ? 0 : t;
    var a = getCurrentPages(),
      r = a.length,
      n = {};
    if ("string" == typeof t) {
      for (var o = 0; o < r; o++)
        if (a[o].__route__.indexOf(t) >= 0) {
          n = a[o];
          break
        }
      n && !n.onPageDataUpdate && (n.onPageDataUpdate = function () {})
    } else n = a[r - (1 + t)] || a[r - 1] || "";
    return e ? {
      current: n,
      pages: a
    } : n
  }

  function v(t, e) {
    if ("string" == typeof t) {
      var a = /\s/g;
      return e ? t.replace(a, "") : t.trim()
    }
    return t
  }

  function U() {
    try {
      return wx.getSystemInfoSync()
    } catch (t) {
      return {}
    }
  }

  function k(t) {
    var e = U()
      .SDKVersion || "1.1.0";
    e = e.split("."), t = t.split(".");
    for (var a = Math.max(e.length, t.length); e.length < a;) e.push("0");
    for (; t.length < a;) t.push("0");
    for (var r = 0; r < a; r++) {
      var n = parseInt(e[r]),
        o = parseInt(t[r]);
      if (n > o) return 1;
      if (n < o) return -1
    }
    return 0
  }
  var x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    },
    w = (require("wxapi.js"), require("../component/form/regular.js")),
    T = {
      toastType: 0,
      jumpDelay: 0
    },
    _ = {};
  module.exports = {
    hasPrevPage: function () {
      return 1 != getCurrentPages()
        .length
    },
    wordHump: function (t, e) {
      if ("string" == typeof t) {
        var a = /\b(\w)|\s(\w)/g;
        return (t = e ? t.toLowerCase() : t)
          .replace(a, function (t) {
            return t.toUpperCase()
          })
      }
      return t
    },
    getPage: D,
    extendJson: t,
    urlSplice: e,
    serializeJson: r,
    isArray: o,
    inArray: i,
    isJson: s,
    isFunction: n,
    isEmpty: function (t) {
      var e;
      if (o(t)) return !(t.length > 0);
      if (s(t)) {
        for (e in t) return !1;
        return !0
      }
      return !0
    },
    formatDate: c,
    formatNumber: u,
    formCheck: function (t, e) {
      var a, r, n, o, i, c = {
        code: 0,
        msg: "表单验证通过"
      };
      if (!t) return c;
      for (a in t)
        if (r = t[a], s(r))
          if (r.errmsg && delete r.errmsg, r.classname = "input-normal", n = void 0 !== r.value ? r.value : e && e[a] || "", n = v(n)) {
            if (r.minlength && n.toString()
              .length < r.minlength ? (i = 4002, o = "最少输入" + r.minlength + "个字符") : r.minsize && 1 * n < r.minsize ? (o = "输入数字不得小于" + r.minsize, i = 4003) : r.maxsize && 1 * n > r.maxsize ? (o = "输入数字不得大于" + r.maxsize, i = 4004) : r.regname && !w[r.regname].rule.test(n) ? (o = w[r.regname].msg || "请输入正确的" + r.tag, i = w[r.regname].code) : i = 0, i > 0) return r.errmsg = o, r.classname = "input-error", {
              code: i,
              msg: o,
              errokey: a,
              formlist: t
            }
          } else if (r.required) return o = r.tag || "此项内容", o = o.indexOf("请") >= 0 || o.indexOf("空") >= 0 ? o : o + "不能为空", r.errmsg = o, r.classname = "input-error", {
        code: 4001,
        msg: o,
        errokey: a,
        formlist: t
      };
      return c.formlist = t, c
    },
    alertMsg: l,
    touchUi: function (e, a, r) {
      function n(t, e) {
        i = Math.abs(t), s = Math.abs(e), T.touchUiData.direction = s > i ? e > 0 ? "bottom" : "top" : t > 0 ? "right" : "left"
      }
      var o, i, s, r = t(!0, {
          cb: "",
          data: "",
          isset: !0,
          datakey: "common"
        }, r),
        c = a.type,
        u = a.changedTouches[0];
      switch (r.datakey = r.datakey || a.currentTarget.id, T.touchUiData = t(!0, {
        pos_s: {
          x: 0,
          y: 0
        },
        pos_m: {
          x: 0,
          y: 0
        },
        pos_e: {
          x: 0,
          y: 0
        },
        evtype: c,
        times: 0,
        flag: "even",
        timelong: 0,
        dataset: "",
        direction: ""
      }, _[r.datakey]), c) {
        case "tap":
          e && (e.data.touchUi ? T.touchUiData.flag = e.data.touchUi[r.datakey] && "odd" == e.data.touchUi[r.datakey].flag ? "even" : "odd" : (T.touchUiData.times = 0, T.touchUiData.flag = "odd")), T.touchUiData.times = T.touchUiData.times + 1, T.touchUiData.ishold = !1;
          break;
        case "longtap":
          T.touchUiData.ishold = !1;
          break;
        case "touchstart":
          T.touchUiData.pos_s.x = parseInt(u.pageX), T.touchUiData.pos_s.y = parseInt(u.pageY), T.touchUiData.timelong = a.timeStamp, T.touchUiData.ishold = !0;
          break;
        case "touchmove":
          T.touchUiData.pos_m.x = parseInt(u.pageX) - T.touchUiData.pos_s.x, T.touchUiData.pos_m.y = parseInt(u.pageY) - T.touchUiData.pos_s.y, n(T.touchUiData.pos_m.x, T.touchUiData.pos_m.y);
          break;
        case "touchcancel":
        case "touchend":
          T.touchUiData.pos_e.x = parseInt(u.pageX) - T.touchUiData.pos_s.x, T.touchUiData.pos_e.y = parseInt(u.pageY) - T.touchUiData.pos_s.y, T.touchUiData.timelong = a.timeStamp - T.touchUiData.timelong, T.touchUiData.ishold = !1, o = T.touchUiData.pos_e.x, T.touchUiData.pos_e.y, n(o, o), Math.abs(T.touchUiData.pos_e.x) <= 5 && Math.abs(T.touchUiData.pos_e.y) <= 5 ? T.touchUiData.trigger = T.touchUiData.timelong <= 350 ? "tap" : "longtap" : T.touchUiData.trigger = "end"
      }
      if (a.currentTarget.dataset = t(!0, a.currentTarget.dataset, r.data), T.touchUiData.evtype = c, T.touchUiData.dataset = a.currentTarget.dataset, _[r.datakey] = T.touchUiData, "touchmove" == c && Math.abs(T.touchUiData.pos_m.y) < 25 && Math.abs(T.touchUiData.pos_m.x) < 25) return !1;
      if (r.isset && e) {
        var l = {};
        l["touchUi." + r.datakey] = _[r.datakey], e.setData(l)
      }
      "function" == typeof r.cb && r.cb(c, T.touchUiData, a.currentTarget.dataset)
    },
    checkUrl: d,
    jumpTo: f,
    loginCheck: m,
    setPageUrl: function (a, r, n) {
      function i(a, r) {
        var o, i = !1;
        if ("string" == typeof a ? o = a : (o = a.url, i = a.iscall), !c[o]) return !1;
        n && n[o] && (c[o].url = e(c[o].url, n[o])), u[o] = t(!0, {}, c[o]), u[o].url = c[o].islogin && r.code > 0 ? c.login.url + (i ? "?callback=" + encodeURIComponent(c[o].url) : "") : c[o].url
      }
      var s, c = getApp()
        .globalData.appInfo.pages,
        u = {};
      m({
        cb: function (t) {
          if (r) o(r) ? r.map(function (e, a) {
            i(e, t)
          }) : i(r, t);
          else
            for (s in c) i(s, t);
          a && a.setData({
            pages: u
          })
        }
      })
    },
    arrSort: function (e, a, r, o) {
      var i, c, u, l, p, g = "as",
        d = "",
        f = 1,
        m = /^\d{4}-\d{2}-\d{2}\s\S(\d{1,2}:?)+$/;
      if (a && "as" == a || "de" == a ? g = a : d = a, r && (d = r), f = "as" == g ? 1 : -1, s(e)) {
        e = t(!0, {}, e), u = [], c = [];
        for (i in e) c.push(e[i]), u.push(i);
        e = c
      }
      return d ? e.sort(function (t, e) {
        return l = m.test(t[d]) ? h(t[d], "ts") : t[d], p = m.test(e[d]) ? h(e[d], "ts") : e[d], n(o) && (l = o(l), p = o(p)), l > p ? f : -f
      }) : e.sort(function (t, e) {
        return t > e ? f : -f
      }), {
        arr: e,
        legth: e.length,
        key: u
      }
    },
    dateFilter: h,
    getNowDate: function () {
      var t, e, a = new Date,
        r = a.getFullYear(),
        n = a.getMonth() + 1,
        o = a.getDate(),
        i = a.getHours(),
        s = a.getMinutes(),
        c = a.getSeconds();
      return t = [r, n, o].map(u)
        .join("-"), e = [i, s, c].map(u)
        .join(":"), t + " " + e
    },
    dateTs: b,
    parseUrlOptions: function (t, e, a, r) {
      if (t && "" != t) {
        if ("string" == typeof t) t = JSON.parse(decodeURIComponent(t));
        else if (s(t) && (t.q || t.scene)) {
          var n, o, i, c, u, l, p, g = "",
            m = {};
          t.q ? (c = "?", u = "&", l = "=", g = decodeURIComponent(t.q)) : t.scene && (c = "$", u = "+", l = ":", g = decodeURIComponent(t.scene), /^1\d{10}$/.test(g) && (g = "vs_exp$phone:" + g)), n = (p = g.split(c))[0] || "", (g = (g = p[1] || "")
              .split(u))
            .map(function (t) {
              t = t.split(l), o = t[0], i = t[1] || "", o && (e ? e[o] ? m[e[o]] = i : a && (m[o] = i) : m[o] = i)
            }), r && (m.url = n), (t = m)
            .source = "scan", d(n) && "vs_exp" != n && f({
              iscallback: !0,
              url: n,
              options: t
            })
        }
      } else t = {};
      return t
    },
    trim: v,
    apiToast: p,
    hideToast: g,
    getUserPic: function (e, a) {
      function r(t) {
        if ("local" == t) o = a.localpic;
        else if ("init" == t) {
          if ((n = i.getAppData("avatar_ts")) || (n = b(), i.updateAppData(n, "avatar_ts")), !s.avatar_url) return r("jpg"), !1;
          o = "http://upload.kuaidihelp.com/avatar/" + s.avatar_url
        } else o = "http://upload.kuaidihelp.com/touxiang/user_" + s.user_id + "." + t;
        c[a.datakey] = {
          pic: o + ("local" != t ? "?ts=" + n : ""),
          tag: t,
          evname: a.evname
        }, e.setData(c)
      }
      a = t(!0, {
        evname: "onUserPicError",
        datakey: "userpic",
        localpic: "/images/icon/icon_renxiang.png"
      }, a);
      var n, o, i = getApp(),
        s = i.heartBeatCheck(),
        c = {};
      r(s ? "init" : "local"), e[a.evname] = function (t) {
        var e = t.currentTarget.dataset;
        "init" == e.tag ? r("jpg") : "jpg" == e.tag ? r("png") : "png" == e.tag && r("local")
      }
    },
    textFilter: a,
    setImagesUrl: function (e, a) {
      function r(t, a) {
        o(t) ? t.map(function (t) {
          r(t, a)
        }) : (c = e.dataname + "." + e.tagprefix + t, i[c] || (i[c] = {}), i[c].url = "error" == a ? e.errorpic : t ? p + t + "." + e.suffix + "?today=" + l : e.errorpic, i[c].status = a || "load")
      }

      function n(t, e) {
        i = {}, r(t, e), a.setData(i)
      }
      if (!(e = t(!0, {
          evname: "onImagesCallback",
          dataname: "picdata",
          tag: "",
          tagprefix: "img_",
          tagkey: "",
          path: "shoppath",
          suffix: "png",
          errorpic: "/images/icon/brand-error.png"
        }, e))
        .tag) return !1;
      var i, c, u = getApp(),
        l = u.getAppData("todayTimer"),
        p = u.getAppInfo(e.path) || e.path;
      return a ? (a[e.evname] || ((i = {})[e.dataname + ".evname"] = e.evname, a.setData(i), a[e.evname] = function (t) {
        a.data[e.dataname] && a.data[e.dataname][e.tagprefix] && n(t.currentTarget.dataset.tag, t.type)
      }), o(e.tag) ? (e.tag = e.tag.map(function (t) {
        return s(t) && e.tagkey ? t[e.tagkey] : t
      }), n(e.tag)) : n(e.tag), i) : void 0
    },
    getNetworkType: function (e, a) {
      e = t(!0, {
        cb: "",
        isalert: !0,
        msg: "网络连接不稳定，请稍后重试"
      }, e);
      var r, o, i;
      wx.getNetworkType({
        success: function (t) {
          r = t.networkType, o = "none" != r, n(e.cb) && e.cb({
            code: 0,
            nettype: r,
            isgood: o,
            msg: o ? "网络连接良好" : e.msg
          }), e.isalert && a && !o && (i = getCurrentPages(), l(a = a || i[i.length - 1], {
            msg: e.msg
          }))
        },
        fail: function () {
          n(e.cb) && e.cb({
            code: 1,
            msg: "获取失败"
          })
        }
      })
    },
    clipboardDeal: !(!wx.canIUse || !wx.canIUse("setClipboardData")) && function (e, a) {
      function r(t) {
        var a = t ? {
          code: 0,
          msg: i.success,
          data: t.data
        } : {
          code: 7e3,
          msg: i.error
        };
        n(e.cb) && e.cb(a)
      }

      function o(t) {
        e.isalert && "" != e.data && i[t] && p({
          duration: 500,
          title: i[t],
          icon: t
        }, a)
      }
      var i = (e = t(!0, {
          tips: {
            error: "",
            success: ""
          },
          isalert: !0,
          cb: "",
          data: null
        }, e))
        .tips,
        s = getApp();
      i.success = i.success ? i.success : e.data ? "已复制" : "已获取", i.error = i.error ? i.error : e.data ? "复制失败" : "获取失败", wx.getClipboardData && wx.setClipboardData && (e.data || "" == e.data ? (s.globalData.isSetCli = !0, wx.setClipboardData({
        data: e.data,
        success: function (t) {
          r({
            data: e.data
          }), o("success")
        },
        fail: function () {
          r(), o("error")
        }
      })) : wx.getClipboardData({
        success: function (t) {
          r(t)
        },
        fail: function () {
          r(), o("error")
        }
      }))
    },
    isSelect: wx.canIUse && wx.canIUse("text.selectable"),
    makePhoneCall: function (e) {
      (e = t(!0, {
        phoneNumber: ""
      }, "object" == (void 0 === e ? "undefined" : x(e)) ? e : {
        phoneNumber: e
      }))
      .phoneNumber && wx.makePhoneCall({
        phoneNumber: e.phoneNumber
      })
    },
    dateCompare: function (t, e) {
      return new Date(t.replace(/\-/g, "/")) - new Date(e.replace(/\-/g, "/"))
    },
    regularlist: w,
    hidePart: function (t, e, a, r) {
      if (!t || "string" != typeof t) return t;
      var n = t.length,
        o = r || "*";
      return t.length <= 2 && (a = 0), t.replace(/(.)/g, function (t, r, i, s) {
        return i >= e && i < n - a ? o : t
      })
    },
    getSelectorInfo: function (t, e) {
      var a = t.selector,
        r = t.isgetOffset,
        n = void 0 !== r && r,
        o = t.sname,
        i = void 0 === o ? "selectAll" : o;
      if (wx.createSelectorQuery) {
        var s = wx.createSelectorQuery();
        s[i](a)
          .boundingClientRect(), n && s.selectViewport()
          .scrollOffset(), s.exec(function (t) {
            e && e(t)
          })
      }
    },
    canIUse: function (t) {
      var e = /^\d+.\d+.\d+$/;
      return wx.canIUse && !e.test(t) ? wx.canIUse(t) : k(t) >= 0
    }
  };
});
define("servejs/wxapi.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  function e(e, t) {
    if (!t) return e;
    switch (t) {
      case "t":
        e /= 864e5;
        break;
      case "h":
        e /= 36e5;
        break;
      case "m":
        e /= 6e4;
        break;
      case "s":
        e /= 1e3
    }
    return t + parseInt(e)
  }

  function t(a) {
    var r, n, o, s, c, i, f, g;
    try {
      switch (a) {
        case "set":
          s = (new Date)
            .getTime(), "function" == typeof arguments[3] ? (o = arguments[3], g = arguments[4]) : "function" == typeof arguments[4] ? (o = arguments[4], g = arguments[3]) : (o = "", g = arguments[3]), s = e(s, g || "h"), r = arguments[1], n = arguments[2], wx.setStorageSync(r, {
              data: n,
              ts: s
            });
          break;
        case "get":
          r = arguments[1], o = arguments[2], n = wx.getStorageSync(r), "boolean" == typeof arguments[2] && arguments[2] && (n && n.data ? n.code = 0 : n = {
            data: {},
            errmsg: "暂无数据",
            code: 8001
          });
          break;
        case "clear":
          o = arguments[1], wx.clearStorageSync();
          break;
        case "remove":
          r = arguments[1], o = arguments[2], r instanceof Array ? (n = [], r.map(function (e) {
            n.push(t("get", e)), wx.removeStorageSync(e)
          })) : (n = t("get", r), wx.removeStorageSync(r));
          break;
        case "reset":
          if (r = arguments[1], c = arguments[2], (n = wx.getStorageSync(r)) && n.data && n.data instanceof Array) {
            f = (i = n.data)
              .length;
            for (var u = 0; u < f; u++)
              if (i[u][c.by] == c.value) {
                for (var y in c.data) i[u][y] = c.data[y];
                t("set", r, i);
                break
              }
          }
      }
      return "function" == typeof o && o(a, arguments), "get" == a && n && n.ts && "string" == typeof n.ts && (n.ts = {
        by: n.ts.substring(0, 1),
        time: n.ts.substring(1)
      }), n
    } catch (e) {
      return e
    }
  }
  module.exports = {
    dataStorage: t,
    makePhoneCall: function (e) {
      wx.makePhoneCall({
        phoneNumber: e.phoneNumber
      })
    },
    setTitle: function (e) {
      wx.setNavigationBarTitle({
        title: e.title
      })
    }
  };
});
define("app.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  function e(e, a, t) {
    return a in e ? Object.defineProperty(e, a, {
      value: t,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[a] = t, e
  }
  var a, t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
    s = require("servejs/wxapi.js"),
    n = require("servejs/tools.js"),
    o = require("servejs/api.js"),
    i = require("component/form/regular.js");
  App({
    onLaunch: function (e) {
      e = e || {}, this.appInit(e), this.globalData.scene = e.scene
    },
    appInit: function (e) {
      var a, t = this;
      this.getBrandInfo(), this.updateAppData(n.dateTs(), "todayTimer"), (a = s.dataStorage("get", "HeartBeat")) ? (this.globalData.HeartBeat = a.data, o.apiDataRequest({
        url: "/v1/WeApp/expire",
        isset: !1,
        istoast: !1,
        istran: !1,
        onComplete: function (a, s) {
          0 == a.code && (!a.data || a.data < 0) ? (t.heartBeatClean(), o.signIn("wx", {
            istologin: !0,
            istoast: !0,
            isback: !1
          }, "", t, function (a) {
            0 == a.code && a.data && (t.globalData.HeartBeat = a.data), t.onReport("api_app_scene", {
              scene: e.scene,
              user_id: a.data && a.data.user_id || ""
            })
          })) : t.onReport("api_app_scene", {
            scene: e.scene,
            user_id: s.user_id
          })
        }
      }, "", t)) : this.onReport("api_app_scene", {
        scene: e.scene,
        user_id: ""
      })
    },
    onReport: function (e, a) {
      wx.reportAnalytics && wx.reportAnalytics(e, a)
    },
    updateHeart: function (e, a) {
      var t = this.globalData.HeartBeat;
      t && (t = n.extendJson(!0, t, e), a && a.setData({
        loginRes: {
          code: 0,
          data: t
        },
        HeartBeat: t
      })), s.dataStorage("set", "HeartBeat", t), this.globalData.HeartBeat = t
    },
    buildHeart: function (e) {
      this.globalData.HeartBeat = e, e ? s.dataStorage("set", "HeartBeat", e) : s.dataStorage("remove", "HeartBeat")
    },
    heartBeatClean: function () {
      this.globalData.HeartBeat = null, s.dataStorage("remove", "HeartBeat")
    },
    heartBeatCheck: function (e, a, t) {
      var s, n = this.globalData.HeartBeat;
      return n ? (s = {}, a && n[a] ? s[a] = n[a] : s = n, e && e.setData({
        HeartBeat: s
      }), a && n[a] ? n[a] : n) : (e && e.setData({
        HeartBeat: ""
      }), t && !a ? {} : "")
    },
    setRealnameStatus: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        a = this.getHeartInfo("phone");
      e.mobile = e.mobile || a, this.updateAppData(e, "realnameData")
    },
    getRealnameStatus: function (e) {
      var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        t = this,
        s = this.getHeartInfo("phone"),
        n = i.phone.rule,
        r = t.getAppData("realnameData", !0);
      if (s = a.mobile || s, r.mobile === s) return e && e(r), !1;
      n.test(s) ? this.currentRealnameMobile !== s && (this.currentRealnameMobile = s, o.apiDataRequest({
        data: {
          mobile: s
        },
        isset: !1,
        istoast: !1,
        url: "/v1/user/getRealnameStatus",
        onSuccess: function (a, s) {
          a.data = a.data || {
            status: "未认证"
          }, a.data.mobile = s.mobile, 0 == a.code && a.data && t.setRealnameStatus(a.data), e && e(a.data)
        }
      })) : e && e({
        status: "未认证"
      })
    },
    getHeartbeat: function () {
      var e, a;
      return arguments[0] && "string" == typeof arguments[0] ? (e = arguments[1], a = arguments[0]) : (e = arguments[0], a = arguments[1]), e = "object" === (void 0 === e ? "undefined" : t(e)) ? e : null, this.heartBeatCheck(e, a)
    },
    getHeartInfo: function (e, a) {
      return this.getHeartbeat(e, a)
    },
    getBrandInfo: function (e, a) {
      function t(a, t) {
        (u = a ? s.dataStorage("get", "brandInfo") : t) && !l && (l = !0, u = r(u.data), p.globalData.brandInfo = u, i(e))
      }

      function i(e) {
        "function" == typeof e ? e(u) : e && e.setData && e.setData({
          brandinfo: u
        })
      }

      function r(e) {
        var t, s = {};
        if (a) {
          for (t in e)(e[t].pinyin.indexOf(a) >= 0 || e[t].name.indexOf(a) >= 0 || e[t].brand.indexOf(a) >= 0) && (s[t] = n.extendJson(!0, {}, e[t]));
          return s
        }
        return e
      }
      var p = this,
        l = !1,
        u = p.globalData.brandInfo;
      u ? (u = r(u), i(e)) : (t(!0), o.apiDataRequest({
        url: "/v1/ExpressDetail/returnData",
        istoast: !1,
        isalert: !1,
        isset: !1,
        storagekey: "brandInfo",
        resFilter: function (e) {
          return n.isEmpty(e) ? e = {
            code: 1,
            msg: "没有对应品牌"
          } : (e.zbao = {
            name: "未知",
            short_name: "未知",
            brand: "zbao",
            pinyin: "zhongbao",
            logo_link: "/images/icon/brand-error.png"
          }, e.dak = {
            name: "驿站",
            brand: "dak",
            pinyin: "yizhan",
            short_name: "驿站",
            logo_link: "/images/icon/logo-dak.png"
          }, e = {
            code: 0,
            data: e,
            msg: "成功"
          }), e
        },
        onComplete: function (e) {
          e && 0 == e.code ? t(!0, e) : t(!0)
        },
        onFail: function () {
          t(!0)
        }
      }, "", this))
    },
    getPriceList: function (e, a, t) {
      if (!e || !a) return t && t([]), !1;
      var s = this,
        n = this.getAppData("price");
      if (n && n.price && n.area.s == e && n.area.e == a) return t && t(n.price), !1;
      o.apiDataRequest({
        url: "/v1/shixiao/getForOrder",
        data: {
          starCity: e,
          endCity: a
        },
        isalert: !1,
        isset: !1,
        istoast: !0,
        onSuccess: function (e, a) {
          0 == e.code && e.data && s.updateAppData({
            price: e.data,
            area: {
              s: a.starCity,
              e: a.endCity
            }
          }, "price"), t && t(e.data)
        }
      })
    },
    wxLogin: function (e, a) {
      a ? wx.login({
        success: function (a) {
          e && e(a.code)
        },
        fail: function () {
          n.alertMsg(pageobj, {
            msg: "微信登录接口调用失败"
          })
        }
      }) : e && e()
    },
    getUserInfo: function (e, a, t) {
      function s(a) {
        a ? n.wxLogin(function (a) {
          wx.getUserInfo({
            success: function (t) {
              t.code = a, e && e("success", t)
            },
            fail: function () {
              e && e("fail", {})
            }
          })
        }, t) : wx.getSetting ? wx.getSetting({
          success: function (a) {
            a.authSetting && a.authSetting["scope.userInfo"] ? s(!0) : e && e("refail", {})
          }
        }) : s(!0)
      }
      var n = this;
      s(a)
    },
    getSysInfo: function () {
      var e = this;
      try {
        var a = wx.getSystemInfoSync();
        return a.sys = a.system.indexOf("iOS") >= 0 ? "ios" : "android", e.globalData.sysInfo = a, a
      } catch (e) {
        return {}
      }
    },
    getNetworkType: function (e) {
      wx.getNetworkType({
        success: function (a) {
          "function" == typeof e && e(a.networkType)
        }
      })
    },
    getAppInfo: function (e) {
      return e ? this.globalData.appInfo[e] : this.globalData.appInfo
    },
    updateAppData: function (e, a) {
      this.globalData.appData = this.globalData.appData || {};
      var t = this;
      a ? n.isArray(a) ? a.map(function (a) {
        t.globalData.appData[a] = e
      }) : this.globalData.appData[a] = e : this.globalData.appData = n.extendJson(!0, this.globalData.appData, e)
    },
    removeAppData: function (e) {
      this.globalData.appData && void 0 !== this.globalData.appData[e] && delete this.globalData.appData[e]
    },
    getAppData: function (e, a) {
      var t = this.globalData.appData,
        s = !!t && (t[e] || !1);
      return a && !s && (s = {}), s
    },
    onScan: function (e, a, t, s) {
      function o(e, a) {
        var o = p(t) && t(a);
        !s || a[s] ? !o && e && n.jumpTo({
          url: e,
          datakey: "vs_exp",
          options: a
        }) : r()
      }

      function r() {
        l(e, {
          msg: a
        })
      }
      var p = n.isFunction,
        l = n.alertMsg;
      wx.scanCode({
        success: function (a) {
          var t, s, p = i.waybill_num.rule;
          if (a.result && p.test(a.result)) a.result = a.result.replace("CODE_128,", ""), t = {
            deliver_no: a.result,
            source: "scan"
          }, e && e.setData({
            deliver_no: a.result
          }), o(s = "exp_query", t);
          else if ("QR_CODE" == a.scanType || "WX_CODE" == a.scanType) {
            var l = /^1\d{10}$/;
            t = n.parseUrlOptions("QR_CODE" == a.scanType ? {
              q: encodeURIComponent(a.result)
            } : {
              scene: a.path
            }, {
              mb: "courier_phone",
              cp: "courier_phone",
              phone: "courier_phone",
              id: "dak_id",
              userId: "ws_id"
            }, !0, !0), s = "vs_exp", l.test(t.courier_phone) || t.dak_id && "http://m.kuaidihelp.com/wduser/sendexpress" == t.url || t.ws_id && "http://m.kuaidihelp.com/Ws/company" == t.url ? (delete t.url, o(s, t = {
              action: "switch",
              channel: "courier",
              courier: t
            })) : r()
          } else r()
        }
      })
    },
    setWsCompanyInfo: function (e) {
      this.updateAppData(e || "", "wsCompanyInfo")
    },
    getWsCompanyInfo: function (e, a) {
      var t = this,
        s = this.getAppData("wsCompanyInfo");
      s ? e && e(s) : o.apiDataRequest({
        istoast: !1,
        isset: !1,
        userkey: "userId",
        url: "/v1/WewsUserOrder/getUserIdCompanyInfo",
        onComplete: function (a, s) {
          (a.code > 0 || !a.data || !a.data.userid) && (a.data = ""), t.setWsCompanyInfo(a.data), e && e(a.data)
        }
      })
    },
    getOpenId: function (e) {
      var a = s.dataStorage("get", "openId", !0);
      0 != a.code ? wx.login({
        success: function (a) {
          a.code && o.apiDataRequest({
            url: "/v1/WeApp/getGrant",
            data: {
              code: a.code
            },
            isset: !1,
            istoast: !1,
            onSuccess: function (a) {
              0 == a.code && (s.dataStorage("set", "openId", a.data.openid), n.isFunction(e) && e(a.data.openid))
            }
          })
        }
      }) : n.isFunction(e) && e(a.data)
    },
    globalData: (a = {
      sysInfo: null,
      appData: null,
      userInfo: null,
      brandInfo: null,
      appInfo: {
        courierpath: "http://upload.kuaidihelp.com/touxiang/counterman_",
        shoppath: "http://img.kuaidihelp.com/brand_logo/icon_",
        appconfig: {
          ios: {
            app_key: "747539d65cdbd5c5d9ac344a4252fa02",
            app_id: "10011",
            "app_key.dts": "c40e2b3daa1f61847199cb35b7fb8ccb"
          },
          android: {
            app_key: "29b9b5abab071bddcdc68189098b52dd",
            app_id: "10012",
            "app_key.dts": "c40e2b3daa1f61847199cb35b7fb8ccb"
          }
        },
        name_cn: "微快递+",
        name_en: "WeiKuaiDi+",
        domain: "https://api.kuaidihelp.com",
        desc: "",
        version: "5.0.1",
        pages: {
          vshop: {
            url: "/pages/vshop/vshop"
          },
          vs_msg: {
            url: "/pages/vshop/message/message",
            islogin: !0
          },
          vs_exp: {
            url: "/pages/vshop/express/express",
            islogin: !0,
            istab: !0
          },
          vs_temporary: {
            url: "/pages/vshop/temporary/temporary",
            islogin: !0
          },
          vs_detail: {
            url: "/pages/vshop/detail/detail",
            islogin: !0
          },
          exp: {
            url: "/pages/queryExpress/queryExpress",
            istab: !0
          },
          exp_comment: {
            url: "/pages/queryExpress/comment/comment",
            islogin: !0
          },
          exp_shop: {
            url: "/pages/queryExpress/shop/shop",
            islogin: !1
          },
          exp_query: {
            url: "/pages/queryExpress/query/query"
          },
          exp_result: {
            url: "/pages/queryExpress/result/result"
          },
          exp_send: {
            url: "/pages/vshop/express/express",
            islogin: !0,
            istab: !0
          },
          exp_send_result: {
            url: "/pages/expResult/expResult",
            islogin: !0
          },
          more: {
            url: "/pages/more/more",
            istab: !0
          },
          personal: {
            url: "/pages/personal/personal",
            islogin: !0
          },
          addr_lib: {
            url: "/pages/addressLib/addressLib",
            islogin: !0
          },
          addr_editor: {
            url: "/pages/addressLib/editor/editor",
            islogin: !0
          },
          exp_send_record: {
            url: "/pages/sendRecord/sendRecord",
            islogin: !0,
            istab: !0
          },
          exp_send_detail: {
            url: "/pages/sendRecord/detail/detail",
            islogin: !0
          },
          exp_send_voucher: {
            url: "/pages/sendRecord/voucher/voucher",
            islogin: !0
          },
          message: {
            url: "/pages/message/message",
            islogin: !0
          },
          n_msg_detail: {
            url: "/pages/message/notice/detail",
            islogin: !0
          },
          o_msg_detail: {
            url: "/pages/message/other/detail",
            islogin: !0
          },
          city_set: {
            url: "/pages/citySet/citys"
          },
          brand: {
            url: "/pages/brand/brand"
          },
          login: {
            url: "/pages/login/login"
          },
          register: {
            url: "/pages/register/register"
          },
          complaint: {
            url: "/pages/complaint/complaint",
            islogin: !0
          },
          complaint_detail: {
            url: "/pages/complaint/detail/detail",
            islogin: !0
          },
          sign_detail: {
            url: "/pages/sign/detail/detail"
          },
          goods: {
            url: "/pages/goods/goods"
          },
          realname: {
            url: "/pages/realname/realname",
            islogin: !0
          },
          real_upload: {
            url: "/pages/realname/upload/upload",
            islogin: !0
          },
          help: {
            url: "/pages/help/help"
          },
          h_guarantee: {
            url: "/pages/help/guarantee/guarantee"
          },
          company_pay: {
            url: "/pages/help/companyPay/companyPay"
          },
          forecast: {
            url: "/pages/forecast/forecast"
          },
          pickup: {
            url: "/pages/dakPickup/dakPickup"
          },
          pic_cut: {
            url: "/pages/pictureCut/pictureCut"
          },
          service: {
            url: "/pages/service/service"
          },
          camera: {
            url: "/pages/camera/camera"
          },
          bindPhone: {
            url: "/pages/bindPhone/bindPhone"
          },
          cutting: {
            url: "/pages/cutting/cutting"
          },
          coupon: {
            url: "/pages/coupon/coupon",
            islogin: !0
          }
        }
      }
    }, e(a, "sysInfo", null), e(a, "HeartBeat", ""), a),
    getCouponList: function (e) {
      var a = e.data,
        t = e.handler,
        s = void 0 === t ? function () {} : t;
      o.apiDataRequest({
        url: "/v1/WeApp/getCouponList",
        data: a,
        isset: !1,
        istoast: !1,
        onComplete: function (e) {
          s(e)
        }
      })
    }
  });
});
require("app.js");
__wxRoute = 'pages/vshop/express/express';
__wxRouteBegin = true;
define("pages/vshop/express/express.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  function e(e, a, t) {
    return a in e ? Object.defineProperty(e, a, {
      value: t,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[a] = t, e
  }
  var a = Object.assign || function (e) {
      for (var a = 1; a < arguments.length; a++) {
        var t = arguments[a];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
      }
      return e
    },
    t = require("../../../servejs/pages.js"),
    i = require("../../../component/clipboard/clipboard.js"),
    n = {
      name: "日用品",
      weight: "1"
    };
  t(a({
    data: {
      isSwitch: !0,
      channel: "courier",
      pics: [],
      isLoading: !0,
      isCanCompanyPay: !1,
      defaultGoods: n,
      loaderData: {
        type: "courier",
        tips: "数据加载中，请稍后...",
        show: !0
      },
      vas_money: 0,
      vas_ids: "",
      serviceList: [],
      courierPage: 1,
      courierPageCount: 1,
      moneyIndex: 0,
      money: 0,
      isShowTips: !1,
      isAgree: !0,
      form: {
        disabled: !0
      },
      courierData: null,
      brand: "all"
    },
    isUnauthToLogin: !0,
    isAutoLogin: !0,
    isLifeNormal: !0,
    serve: ["api", "map", "wxapi", "dialog", ["form", "../component/form/form.js"],
      ["regular", "../component/form/regular.js"],
      ["address", "../component/address/address.js"]
    ],
    life: ["jumpTo", "hideTips", "switchService", "switchPayType", "switchAgree", "temporary", "pullDownRefresh"],
    optionsParse: function (e) {
      return this.serve.tools.parseUrlOptions(e, {
        mb: "courier_phone",
        cp: "courier_phone",
        phone: "courier_phone",
        id: "dak_id",
        userId: "ws_id"
      }, !0)
    },
    onPullDownRefresh: function () {
      var e = this,
        a = this.data.courierData;
      this.getRealnameStatus({
        cb: function () {
          if (a && a.phone) {
            var t = a.phone;
            e.getCourierData({
              courier_phone: t
            }, function () {
              wx.stopPullDownRefresh()
            }, "refresh")
          } else wx.stopPullDownRefresh()
        }
      })
    },
    onLoad: function (e, a) {
      this.appobj.getBrandInfo(this.pageobj), this.onLoginCallback(a), this.address_ret = this.serve.address.editor([{
        key: "shipper",
        status: 0,
        name: "发件人信息",
        cname: "mt-15"
      }, {
        key: "shipping",
        status: 0,
        name: "收件人信息",
        cname: "mt-15",
        isTemporary: !0
      }]), "assign" === e.source && this.onSetData({
        isSwitch: !1
      })
    },
    onShow: function (e) {
      this.isFirstLoad || this.pageInit(), 0 == e.code && this.getClipboardData()
    },
    switchCompanyPay: function () {
      var e, a, t = this;
      "boolean" == typeof arguments[0] ? (e = arguments[0], this.onSetData({
        isCanCompanyPay: e,
        money: e ? -1 : 0
      })) : (a = arguments[0], this.getWsCompanyCourier(function (e, i) {
        if (0 == e.code) {
          var n = e.data.filter(function (e) {
            return e.username == a
          });
          t.switchCompanyPay(n.length > 0)
        }
      }))
    },
    pageInit: function (a) {
      var t, i, n, s, o = this,
        r = this.appobj,
        c = this.data.options,
        p = r.getAppData("vs_exp");
      if (p) {
        if (this.switchCompanyPay("company" == p.source), "reget" == p.action) this.getCourierList();
        else {
          if ("courier" == (t = p.channel)) {
            if (s = p[t], this.expSource = "focus", "scan" == p[t].source) return n = s.ws_id, i = s.courier_phone, n ? this.bindWsCompany(n) : i && this.getCourierData(s), r.updateAppData(null, "vs_exp"), void(this.expSource = "scan");
            i = s.account_phone, "switch" != p.action && this.switchCompanyPay(i)
          }
          this.setChannelData(e({
            channel: t
          }, t, p[t]), p.data)
        }
        r.updateAppData(null, "vs_exp")
      } else c && (c.ws_id || c.dak_id || c.courier_phone) ? c.ws_id ? this.bindWsCompany(c.ws_id, function (e) {
        o.clearOptions(e)
      }) : this.getCourierData(c, function (e) {
        o.clearOptions(e)
      }) : a && a()
    },
    clearOptions: function (e) {
      4001 != e.code && this.onSetData({
        options: {}
      })
    },
    onLoginCallback: function (a) {
      var t, i, n = this;
      0 == a.code ? (this.isReMatch = !0, this.pageInit(function () {
        (i = n.serve.wxapi.dataStorage("get", "vshopSendCourier")
          .data) && i.account_phone ? (t = "courier", n.setChannelData(e({
          channel: t
        }, t, i)), n.switchCompanyPay(i.account_phone)) : n.getCourierList()
      }), this.getServiceList(function (e) {
        e.map(function (e) {
          e.isChecked = !1
        }), n.onSetData({
          serviceList: e
        })
      }), this.getAnnounce()) : this.setChannelData({
        channel: "courier",
        courier: null
      })
    },
    formInit: function (e, a) {
      var t = this;
      e = e || this.data.channel;
      var i = this.data.courierData,
        s = a || {},
        o = this.appobj.getSysInfo(),
        r = {
          isGetStorage: !a,
          form: {
            shipper_name: {
              value: s.shipper_name
            },
            shipper_mobile: {
              value: s.shipper_mobile
            },
            shipper_address: {
              value: s.shipper_address
            },
            shipper_province: {
              value: s.shipper_province
            },
            shipper_city: {
              value: s.shipper_city
            },
            shipper_district: {
              value: s.shipper_district
            },
            shipping_name: {
              value: s.shipping_name
            },
            shipping_mobile: {
              value: s.shipping_mobile
            },
            shipping_address: {
              value: s.shipping_address
            },
            shipping_province: {
              value: s.shipping_province
            },
            shipping_city: {
              value: s.shipping_city
            },
            shipping_district: {
              value: s.shipping_district
            },
            package_info: {
              value: s.package_info || n.name,
              required: !1
            },
            package_weight: {
              value: s.package_weight || n.weight,
              required: !1
            },
            check_pics: {
              required: !1
            }
          },
          clearKeys: ["shipping_name", "shipping_mobile", "shipping_address", "shipping_province", "shipping_city", "shipping_district", "package_info", "package_weight", "check_pics"],
          unSaveFormKeys: ["counterman_mobile"],
          storageKey: "vshopSendInfo",
          request: {
            loginconfig: {
              isjump: !0
            },
            ischecklogin: !0,
            reqFilter: function (a) {
              return t.formId = a.formId, a.package_info = a.package_info || n.name, a.package_weight = a.package_weight || n.weight, "shop" == e && ("all" != t.data.brand && (a.brand = t.data.brand), a.channel = "mina_" + o.sys, delete a.check_pics, delete a.counterman_mobile), delete a.formId, a
            }
          },
          cb: function (a, i) {
            if ("update" == a) {
              var n = i.formData,
                s = i.flag,
                o = i.evtype,
                r = i.currentData;
              "info" != s && "init" != o || t.onSetData({
                pics: n.check_pics ? n.check_pics.split(",") : []
              }), t.data.money > 0 && "courier" == e && ("address" == s || "info" == s) && t.getPriceList(function (e) {
                e.input && this.onSetData({
                  money: e.input
                })
              }, n), t.getRealnameStatus({
                mobile: r.shipper_mobile
              })
            }
          },
          onReady: function (e) {
            t.getRealnameStatus({
              mobile: e.shipper_mobile
            })
          }
        };
      "courier" == e ? ("dak" == i.brand ? r.form.dakId = {
        value: i.courier_id
      } : (r.form.counterman_mobile = {
        value: i.phone,
        required: !1
      }, r.request.formlist = {
        counterman_mobile: {
          tag: "请选择揽件快递员",
          required: !0
        }
      }), r.data = {
        source: this.expSource || "focus"
      }, r.request.url = "/v1/WeApp/sendExpress", r.onSuccess = function (e, a) {
        0 == e.code && t.payMoney(e.data.order_number, function () {
          t.sendExpressCallback({
            check_pics: a.check_pics,
            order_number: e.data.order_number,
            formId: a.formId,
            shipper_name: a.shipper_name,
            shipper_mobile: a.shipper_mobile,
            shipper_city: a.shipper_city,
            shipping_name: a.shipping_name,
            shipping_mobile: a.shipping_mobile,
            shipping_city: a.shipping_city
          })
        })
      }, r.onSubmit = function (e, a) {
        var i = t.data.money;
        if (e.package_info = e.package_info || n.name, e.package_weight = e.package_weight || n.weight, -1 == i) return t.companyPaySendExpress(e), !1;
        t.submitFilter(function (a) {
          i > 0 && (e.type = "applet"), a && (e.vas_ids = a), t.formRet.submit(e)
        })
      }) : (r.request.url = "/v1/GrabOrder/submit", r.onSuccess = function (e, a) {
        if (0 == e.code && e.data) {
          var i = e.data,
            n = i.order_id,
            s = i.grab_id;
          t.updatePics(n), t.sendNotice(e.data.order_id), 0 != s && s ? (t.onCloudCall({
            grab_id: s
          }), tools.jumpTo({
            url: "exp_send_result",
            options: {
              source: "all",
              order_id: n
            }
          })) : t.onPush(n)
        }
      }), this.formRet = this.serve.form(r, this.pageobj)
    },
    sendExpressCallback: function (e) {
      var a = this;
      this.sendNotice(e.order_number);
      var t = this.data.courierData.brand;
      this.appobj.getBrandInfo(function (i) {
        a.onJumpTo({
          url: "exp_send_result",
          options: {
            money: a.data.money,
            source: "courier",
            s_name: e.shipper_name,
            s_mobile: e.shipper_mobile,
            s_city: e.shipper_city,
            r_name: e.shipping_name,
            r_mobile: e.shipping_mobile,
            r_city: e.shipping_city,
            brand_name: i[t] && i[t].name,
            brand: t,
            pics: e.check_pics,
            order_id: e.order_number
          }
        })
      })
    },
    companyPaySendExpress: function (e) {
      var a = this;
      this.apiDataRequest({
        url: "/v1/WewsUserOrder/companyPaySendExpress",
        userkey: "userId",
        data: {
          counterman_mobile: e.counterman_mobile,
          data: [{
            check_pics: e.check_pics,
            shipping_name: e.shipping_name,
            shipping_mobile: e.shipping_mobile,
            shipping_province: e.shipping_province,
            shipping_city: e.shipping_city,
            shipping_address: e.shipping_address,
            shipping_district: e.shipping_district,
            package_info: e.package_info,
            package_weight: e.package_weight
          }],
          userName: e.shipper_name,
          mobile: e.shipper_mobile,
          addr: e.shipper_address,
          location: [e.shipper_province, e.shipper_city, e.shipper_district].join("-")
        },
        onSuccess: function (t, i) {
          0 == t.code && t.data && (a.formRet.clean(), a.sendExpressCallback({
            check_pics: e.check_pics,
            order_number: t.data[0],
            shipper_name: e.shipper_name,
            shipper_mobile: e.shipper_mobile,
            shipper_city: e.shipper_city,
            shipping_name: e.shipping_name,
            shipping_mobile: e.shipping_mobile
          }))
        }
      })
    },
    getServiceMoney: function () {
      var e = 0;
      return this.data.serviceList.map(function (a) {
        e = e + a.isChecked ? 1 * (a.price || 0) : 0
      }), e
    },
    onJumpTo: function (e) {
      var a, t = e.currentTarget ? e.currentTarget.dataset : e,
        i = t.url,
        n = t.options || {},
        s = t.target || "blank",
        o = this.serve.tools,
        r = (this.data.options, this.data.courierData),
        c = "courier" == this.data.channel && r ? r.brand : this.data.brand;
      "goods" == i ? (a = this.data.form.data, n = "info" == t.type ? {
        type: "info",
        pics: a.check_pics,
        brand: c,
        name: a.package_info,
        weight: a.package_weight,
        s_city: [a.shipper_province, a.shipper_city, a.shipper_district].join("-"),
        e_city: [a.shipping_province, a.shipping_city, a.shipping_district].join("-")
      } : {
        type: "pics",
        pics: a.check_pics
      }) : "h_guarantee" == i ? n = {
        index: t.index
      } : "help" == i ? n = {
        src: "vs_exp"
      } : "addr_lib" == i ? n = {
        id: this[t.type + "_id"],
        src: t.type
      } : "vs_detail" == i ? n = "dak" == c ? {
        dak_id: r.courier_id
      } : {
        courier_phone: r.phone
      } : (delete t.url, n = t.options || t), o.jumpTo({
        url: i,
        target: s,
        options: n
      })
    },
    getLocation: function (e, a) {
      var t = this;
      this.positionData ? e && e(this.positionData) : this.serve.map.location(this.pageobj, {
        istoast: !1,
        onSuccess: function (a, i) {
          if (0 == a.code && a.data)
            if ("reload" == i.status) {
              var n = a.data,
                s = n.province,
                o = n.city,
                r = n.district,
                c = n.detail;
              t.formRet.update({
                shipper_province: s,
                shipper_city: o,
                shipper_district: r,
                shipper_address: c
              })
            } else t.positionData = a.data, e && e(a.data);
          else t.alertMsg("定位失败！")
        }
      }, a)
    },
    getCourierList: function (a) {
      var t, i, n = this;
      this.apiDataRequest({
        url: "/v1/WeApp/lists",
        data: {
          limit: 10,
          type: "courier"
        },
        onComplete: function (a, s) {
          0 == a.code && a.data.list.length > 0 && (t = a.data.list[0]), i = "courier", n.setChannelData(e({
            channel: i
          }, i, t))
        }
      })
    },
    onHideTips: function () {
      this.onSetData({
        isShowTips: !1
      })
    },
    getRealnameStatus: function () {
      var e = this,
        a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = a.mobile,
        i = void 0 === t ? "" : t,
        n = a.cb,
        s = void 0 === n ? function () {} : n,
        o = this.data.form.data,
        r = (void 0 === o ? {} : o)
        .shipper_mobile,
        c = (i = i || r || "")
        .match(/1[2-9]{1}[0-9]{1}\d{8}/),
        p = c && c[0];
      p ? (this.onSetData({
        realnamePhone: p
      }), this.appobj.getRealnameStatus(function (a) {
        s(), e.onSetData({
          realnamePhone: p,
          isShowTips: !0,
          isRealName: "已认证" == a.status
        })
      }, {
        mobile: p
      })) : s()
    },
    onPageDataUpdate: function (a, t) {
      var i, n, s, o = {};
      if ("goodsEditor" == a) {
        var r = t.result,
          c = r.pics,
          p = r.type,
          d = r.name,
          u = r.weight;
        n = p, s = c.join(","), o = "pics" == p ? {
          check_pics: s
        } : {
          check_pics: s,
          package_info: d,
          package_weight: u
        }, this.formRet.update(o, n)
      } else if ("addressEditor" == a || "addressSelect" == a) n = "address", o[(i = "send" == t.address.address_type ? "shipper" : "shipping") + "_name"] = t.address.real_name, o[i + "_mobile"] = t.address.mobile, o[i + "_address"] = t.address.address_detail, o[i + "_province"] = t.address.address_province, o[i + "_city"] = t.address.address_city, o[i + "_district"] = t.address.address_county, this.formRet.update(o, n), this.setData(e({}, t.address.address_type + "Id", t.address.id || "")), this.address_ret.switchStatus({
        kind: i,
        status: 1
      }, !0);
      else if ("realname" == a) this.getRealnameStatus();
      else if ("channelSwitch" == a) this.setChannelData(t);
      else if ("addressParse" == a) {
        for (var h in t.data) o[t.kind + "_" + h] = t.data[h];
        this.formRet.update(o), this.address_ret.switchStatus({
          kind: t.kind,
          status: 1
        })
      } else if ("areaSelect" == a) {
        var l;
        this.formRet.update((l = {}, e(l, t.kind + "_province", t.data.province), e(l, t.kind + "_city", t.data.city), e(l, t.kind + "_district", t.data.district), l))
      }
    },
    matchAddress: function (e) {
      var a = this,
        t = e.location.split(",");
      this.apiDataRequest({
        url: "/v1/user_address/getLatest",
        data: {
          address: e.area.replace(/\s/g, "") + e.detail,
          lng: t[0],
          lat: t[1]
        },
        onSuccess: function (e) {
          0 == e.code && e.data && (e.data.telephone_code && (e.data.mobile = [e.data.mobile, e.data.telephone_code].join(" ")), a.formRet.update({
            shipper_name: e.data.real_name,
            shipper_mobile: e.data.mobile,
            shipper_address: e.data.address_detail,
            shipper_province: e.data.address_province,
            shipper_city: e.data.address_city,
            shipper_district: e.data.address_county
          }))
        }
      })
    },
    getServiceList: function (e) {
      return
    },
    getPriceList: function (e, a, t) {
      var i, n = this,
        s = this.serve.tools,
        o = a || (this.data.form ? this.data.form.data : {}),
        r = /^.+-.+-.+$/,
        c = this.data.courierData,
        p = c && c.brand,
        d = [o.shipper_province, o.shipper_city, o.shipper_district].join("-"),
        u = [o.shipping_province, o.shipping_city, o.shipping_district].join("-");
      if (!r.test(d) || !r.test(u)) return r.test(d) ? r.test(u) || (i = "请先完善收件人地址！") : i = "请先完善发件人地址！", void("switchPay" == t && i && this.alertMsg(i));
      var h, l = {
        list: [],
        input: 10
      };
      this.appobj.getPriceList(d, u, function (a) {
        s.isArray(a) && (h = s.inArray({
          brand: p
        }, a, !0), l.list = h >= 0 ? n.getMoneyList(a[h], o) : [], l.input = l.list[0]), e && e(l)
      })
    },
    onSwitchService: function (e) {
      var a = e.currentTarget.dataset.index,
        t = this.data.serviceList;
      t[a].isChecked = e.detail.value, this.onSetData({
        serviceList: t
      })
    },
    submitFilter: function (e) {
      var a = this,
        t = this.data,
        i = t.money,
        n = [],
        s = 0,
        o = [];
      t.serviceList.map(function (e) {
        e.isChecked && (o.push(e.id), s += 1 * e.price, n.push(e))
      }), o = o.join(","), this.onSetData({
        vas_money: s,
        vas_ids: o
      }), i <= 0 ? e && e(o) : this.alertDialog({
        button: [{
          name: "关闭",
          action: "cancel"
        }],
        title: "订单支付",
        cb: function (t, i, n) {
          if ("switch" == t) {
            var s = i.currentTarget.dataset.tag,
              o = a.data.dialog.paysure.tmpdata.tag;
            a.changeTmpData({
              tag: s === o ? "" : s
            })
          } else if ("submit" == t) return e && e(), !0
        },
        position: "b",
        tmpdata: {
          sList: n,
          vas_money: s,
          tag: "",
          price: this.data.money
        },
        classname: "dialog-btn-style-2",
        tmpname: "paysure",
        dialogname: "paysure"
      })
    },
    payMoney: function (e, a) {
      var t = this,
        i = this.data,
        n = i.money,
        s = i.vas_money,
        o = i.courierData,
        r = this.appobj;
      n <= 0 ? a && a() : (req_data = {
        data: [{
          order_id: e,
          vas_money: s,
          money: n
        }],
        source: "applet"
      }, r.getOpenId(function (i) {
        req_data.open_id = i, t.apiDataRequest({
          url: "/v1/applet_payment/programPayOrder",
          data: req_data,
          onSuccess: function (i, c) {
            if (0 == i.code) {
              var p = i.data,
                d = p.timeStamp,
                u = p.nonceStr,
                h = p.paySign,
                l = p.signType,
                m = void 0 === l ? "MD5" : l;
              wx.requestPayment({
                timeStamp: d,
                nonceStr: u,
                paySign: h,
                package: i.data.package,
                signType: m,
                complete: function (i) {
                  var c = "success";
                  i && i.errMsg && (i.errMsg.indexOf("requestPayment:fail") >= 0 || i.errMsg.indexOf("requestPayment:cancel") >= 0) && (t.cancelPay(e), c = "fail"), a && a(), r.onReport("pay_vshop_sendexpress", {
                    pay_result: c,
                    money: n,
                    vas_money: s,
                    order_id: e,
                    pay_for_id: "dak" == o.account_company ? o.courier_id : o.account_phone,
                    pay_for_type: o.account_company
                  })
                }
              })
            } else a && a()
          }
        })
      }))
    },
    cancelPay: function (e) {
      this.apiDataRequest({
        url: "/v1/order/changeWithHold",
        data: {
          orderNumber: e
        }
      })
    },
    apiDataRequest: function (e) {
      var a = this.serve.tools.extendJson(!0, {}, {
        url: "",
        data: {},
        ischecklogin: !0,
        isset: !1
      }, e);
      this.serve.api.apiDataRequest(a)
    },
    alertMsg: function (e, a) {
      this.serve.tools.alertMsg(this.pageobj, {
        msg: e
      }, a)
    },
    alertDialog: function (e) {
      return this.serve.dialog.alertDialog(this.pageobj, e)
    },
    onSwitchPayType: function () {
      var e = this,
        a = this.data.isCanCompanyPay,
        t = (this.serve.tools, this.data.money),
        i = 0 === t ? "line" : -1 === t ? "company_pay" : "online";
      this.systemDialog_ret = this.alertDialog({
        tmpname: "paymoney",
        tmpdata: {
          isCanCompanyPay: a,
          payType: i
        },
        cb: function (a, t, i) {
          if ("select" == a) {
            var n = t.currentTarget.dataset,
              s = n.money,
              o = n.index;
            return e.systemDialog_ret.updateData("tmpdata", {
              index: dataset.index
            }), e.onSetData({
              moneyIndex: o,
              money: s
            }), !0
          }
          if ("focus" == a) e.systemDialog_ret.updateData("tmpdata", {
            payType: "online",
            moneyInput: t.detail.value,
            index: -1
          });
          else if ("input" == a) {
            var r = t.detail.value;
            if (r) {
              if (r <= 0) return {
                msg: "运费金额不能为0",
                value: i.moneyList[0] || 10
              };
              if (r > 200) return {
                msg: "运费金额不能大于200",
                value: 200
              }
            }
          } else if ("sure" == a) {
            if ("online" != i.payType) return;
            if (!t.money) return {
              msg: "请输入金额"
            };
            if (t.money < 1) return {
              msg: "运费金额不能低于1元"
            };
            e.onSetData({
              money: t.money
            })
          } else if ("other" == a && "change" == t.type) {
            var c = e.data.serviceList;
            if ("online" != t.detail.value) return e.onSetData({
              serviceList: c,
              money: "company_pay" == t.detail.value ? -1 : 0
            }), !0;
            e.systemDialog_ret.updateData("tmpdata", {
              payType: "online"
            }), e.onSetData({
              serviceList: c
            })
          }
        },
        button: [{
          name: "取消",
          action: "cancel",
          classname: "border-r"
        }, {
          name: "确定",
          action: "submit"
        }],
        title: "选择支付方式",
        position: "b",
        dialogname: "system",
        classname: "dialog-btn-style-2"
      })
    },
    moneyFormat: function (e) {
      var a, t = [10, 15, 20, 30, 50, 100, 200];
      return t.push(1 * e), t.sort(function (e, a) {
        return e - a
      }), a = t.indexOf(e), t[1 + a] || 200
    },
    getMoneyList: function (e, a) {
      var t, i = 1 * (a.package_weight || 1),
        n = this.moneyFormat,
        s = [];
      return [i, 1 + i, 2 + i].map(function (a) {
        t = n(1 * e.shouZhong + e.xuZhong * (a - 1)), s.indexOf(t) < 0 && s.push(t)
      }), s
    },
    sendNotice: function (e, a, t) {
      var i, n;
      "temporary" == (a = a || this.data.channel) ? (i = "isReGetTemporary", n = "temporary_order") : (i = "isReGetReCord", n = "courier" == a ? "order_notice" : "grab_order"), this.serve.api.notice({
        istoast: !1,
        data: {
          template_title: n,
          form_id: t || this.formId,
          order_id: e
        }
      }), this.appobj.updateAppData(!0, i)
    },
    onSwitchAgree: function (e) {
      this.onSetData({
        isAgree: !this.data.isAgree
      })
    },
    getAnnounce: function () {
      var e, a, t, i, n, s, o, r, c = this,
        p = this.serve.wxapi,
        d = this.serve.tools,
        u = p.dataStorage("get", "announceTag", !0)
        .data;
      this.apiDataRequest({
        url: "/v1/WeApp/announce",
        istoast: !1,
        onSuccess: function (h) {
          if (0 == h.code && h.data) {
            if ((a = h.data.tag || 20180420) == u) return;
            if (n = h.data.image, s = h.data.imageLink, r = h.data.styles || {}, o = h.data.text && "string" == typeof h.data.text ? [h.data.text] : h.data.text, e = d.dateTs(), i = [], n && i.push({
                style: r.image || "width:100%;height:100rpx;",
                mode: "widthFix",
                node: "image",
                src: n + "?ts=" + e
              }), o && o.length > 0 && i.push({
                style: r.text,
                cname: "pa-30-15 bgcolor-white",
                child: o.map(function (e) {
                  return {
                    value: e
                  }
                })
              }), 0 == i.length) return;
            p.dataStorage("set", "announceTag", a), t = [{
              node: "scrollView",
              cname: "announce-list",
              child: i
            }], h.data.link && t.push({
              style: r.link,
              cname: "pt-b-30 align-center bgcolor-white border-t",
              node: "navigator",
              url: "/pages/help/help?src=" + encodeURIComponent(h.data.link),
              value: h.data.linkTitle || "了解更多>>"
            }), c.alertDialog({
              cb: function (e) {
                "tap_image" == e && s && d.jumpTo({
                  url: "help",
                  options: {
                    src: s
                  }
                })
              },
              isnoform: !0,
              ismasktap: !1,
              classname: "dialog-transparent",
              button: [{
                name: "",
                action: "cancel"
              }],
              dialogname: "announce",
              content: {
                template: t
              },
              tmpname: "template"
            })
          }
        }
      })
    },
    updatePics: function (e) {
      var a = this.data.pics.join(",");
      a && this.apiDataRequest({
        url: "/v1/GrabOrder/addCheckPics",
        data: {
          order_id: e,
          check_pics: a
        }
      })
    },
    onPush: function (e) {
      this.serve.tools.jumpTo({
        url: "exp_send_detail",
        options: {
          order_number: e
        }
      })
    },
    onCloudCall: function (e) {
      this.apiDataRequest({
        url: "/v1/GrabOrder/dial",
        dataname: "dial",
        istoast: !0,
        data: e
      })
    },
    setChannelData: function (e, t) {
      var i = this,
        n = e.channel,
        s = e[n],
        o = "courier" == n ? {
          courierData: s ? {
            courier_id: s.courier_id,
            tips: s.tips,
            pic: s.tips ? "/images/icon/courier-pic.png" : "dak" == s.account_company ? "/images/icon/logo-dak.png" : "http://upload.kuaidihelp.com/touxiang/counterman_" + s.courier_id + ".jpg",
            brand: s.account_company,
            phone: s.account_phone,
            name: s.account_name,
            shop: s.account_shop
          } : {}
        } : s;
      this.onSetData(a({
        isLoading: !1,
        channel: n
      }, o)), "refresh" !== t && (this.formInit(e.channel, t), !this.isFirstLoad && !this.isReMatch || t || (this.getLocation(function (e) {
        i.matchAddress(e)
      }, !!s), this.isReMatch = !1), "courier" == n && s && s.account_phone && this.serve.wxapi.dataStorage("set", "vshopSendCourier", {
        courier_id: s.courier_id,
        account_company: s.account_company,
        account_phone: s.account_phone,
        account_name: s.account_name,
        account_shop: s.account_shop
      }))
    },
    getCourierData: function (e, a, t) {
      var i = this,
        n = (this.serve.tools, null),
        s = {};
      if (e.dak_id) s.type = "dak", s.dak_id = e.dak_id;
      else {
        if (!e.courier_phone) return void this.setChannelData({
          channel: "courier"
        });
        s.type = "courier", s.phone = e.courier_phone
      }
      this.apiDataRequest({
        ischecklogin: !0,
        isset: !1,
        istoast: "refresh" !== t,
        url: "/v1/WeApp/details",
        data: s,
        onComplete: function (e, s) {
          0 == e.code && e.data ? (n = {
            courier_id: e.data.courier_id,
            account_company: e.data.account_company,
            account_phone: e.data.account_phone,
            account_name: e.data.account_name,
            account_shop: e.data.account_shop
          }, !e.data.is_focused && "refresh" !== t && i.collectCourier(s)) : n = {
            courier_id: s.dak_id,
            account_phone: s.phone
          }, i.setChannelData({
            channel: "courier",
            courier: n
          }, t), a && a(e, s)
        }
      })
    },
    couponDialog: function (e) {
      var a = e.data,
        t = a.expiration_time,
        i = a.cost,
        n = a.account_name;
      t && i && n && (t = this.serve.tools.dateFilter(t), this.alertDialog({
        isnoform: !0,
        title: "恭喜",
        tmpname: "coupons",
        tmpdata: {
          expiration_time: t,
          cost: i,
          account_name: n
        },
        button: [{
          name: "继续下单",
          action: "cancel",
          classname: "color-blue"
        }],
        dialogname: "system"
      }))
    },
    collectCourier: function (e) {
      var a = this;
      this.apiDataRequest({
        url: "/v1/WeApp/focus",
        isset: !1,
        isalert: !1,
        istoast: !1,
        data: e,
        onComplete: function (e, t) {
          0 == e.code && a.couponDialog(e)
        }
      })
    },
    bindWsCompany: function (e, a) {
      var t, i, n = this,
        s = this.serve.wxapi;
      this.apiDataRequest({
        url: "/v1/WewsUserOrder/addCompanyStaff",
        userkey: "userId",
        ischecklogin: !0,
        data: {
          weishangcId: e
        },
        isalert: !1,
        isset: !1,
        onComplete: function (e, o) {
          0 == e.code || 1004 == e.code ? n.getWsCompanyCourier(function (e, a) {
            0 == e.code ? ((i = s.dataStorage("get", "companyCourier", !0)
              .data) && i.courier_phone && (t = e.data.filter(function (e) {
              return e.username == i.courier_phone
            })[0]), t = t || e.data[0], n.setChannelData({
              channel: "courier",
              courier: {
                account_phone: t.username,
                account_name: t.realname,
                account_company: t.brand,
                account_shop: t.shop_name,
                courier_id: t.id
              }
            }), n.switchCompanyPay(!0)) : n.setChannelData({
              channel: "courier",
              courier: {
                tips: "没有公司付快递员"
              }
            })
          }) : n.setChannelData({
            channel: "courier",
            courier: {
              tips: e.msg
            }
          }), a && a(e, o)
        }
      })
    },
    getWsCompanyCourier: function (e) {
      this.apiDataRequest({
        url: "/v1/WewsUserOrder/getCompanyCourierList",
        userkey: "userId",
        ischecklogin: !0,
        isset: !1,
        isalert: !1,
        onComplete: function (a, t) {
          a.code = 0 == a.code && a.data && a.data[0] ? 0 : 1, e && e(a, t)
        }
      })
    },
    onTemporary: function (e) {
      var a = this.data.form.data,
        t = {},
        i = e.detail.formId,
        n = this.data.channel,
        s = this.data.brand;
      for (var o in a)
        if (o.indexOf("shipping") < 0 && (t[o] = a[o]), o.indexOf("shipper") >= 0 && !a[o]) return void this.alertDialog({
          title: "温馨提示",
          button: [{
            name: "去填写",
            action: "cancel",
            classname: "color-blue"
          }],
          dialogname: "system",
          msgclass: "align-center",
          msg: ["分享填写收件人信息，", "请先填写完寄件人信息。"]
        });
      "shop" == n && "all" != s && (t.brand = s), this.sendTemporary(t, i)
    },
    sendTemporary: function (e, a) {
      var t = this,
        i = this.serve.tools;
      this.apiDataRequest({
        url: "/v1/WeApp/SendOrderReady",
        data: e,
        reqFilter: function (e) {
          return e.package_info = e.package_info || n.name, e.package_weight = e.package_weight || n.weight, e
        },
        onSuccess: function (e) {
          if (0 == e.code) {
            var n = e.data.order_id;
            i.jumpTo({
              url: "exp_send_result",
              options: {
                source: "temporary",
                status: "start",
                order_id: n
              }
            }), t.sendNotice(n, "temporary", a)
          }
        }
      })
    }
  }, i));
});
require("pages/vshop/express/express.js");
__wxRoute = 'pages/vshop/vshop';
__wxRouteBegin = true;
define("pages/vshop/vshop.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  function t(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
      value: e,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[a] = e, t
  }
  var a = Object.assign || function (t) {
    for (var a = 1; a < arguments.length; a++) {
      var e = arguments[a];
      for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
    }
    return t
  };
  require("../../servejs/pages.js")({
    data: {
      tips: {
        collect: ["暂无收藏快递员", "扫一扫快递员二维码添加"],
        nearby: "您的附近没有快递员",
        brand: "暂无可下单品牌"
      },
      scrollTop: 0,
      moreData: {
        type: "more",
        show: !1
      },
      title: {
        collect: "收藏快递员",
        nearby: "附近快递员",
        brand: "快递公司"
      },
      companyCourierShowAll: !1,
      companyCourierIndex: 0,
      courierLoading: !0,
      courierData: {
        collect: {
          tips: "数据加载中...",
          page: 1,
          page_count: 1,
          list: []
        },
        nearby: {
          tips: "数据加载中...",
          list: []
        },
        brand: {
          tips: "数据加载中...",
          list: []
        },
        company: {
          list: []
        }
      }
    },
    isAutoLogin: !0,
    isLifeNormal: !0,
    serve: ["map", "api", "dialog", "wxapi"],
    life: ["jumpTo", "switch", "call", "scan", "loaderMore", "pageDataUpdate", "selectCourier", "companyCourierSwitch"],
    onLoad: function (t, a) {
      this.appobj.getBrandInfo(this.pageobj), this.onLoginCallback(a)
    },
    onShow: function () {
      var t = this.isFirstLoad,
        a = this.appobj;
      t || a.getAppData("regetCourierList") && this.onGetList("collect", "reload")
    },
    onCompanyCourierSwitch: function (t) {
      this.onSetData({
        companyCourierShowAll: t && "tap" == t.type ? !this.data.companyCourierShowAll : t
      })
    },
    onSelectCourier: function (t) {
      var a = this.data.courierData.company.list,
        e = a.splice(t.detail.value, 1);
      a.unshift(e[0]), this.onSetData({
        "courierData.company.list": a,
        companyCourierIndex: 0,
        scrollTop: 0
      }), this.onCompanyCourierSwitch(!1), this.serve.wxapi.dataStorage("set", "companyCourier", {
        courier_phone: e[0].account_phone,
        courier_id: e[0].courier_id
      })
    },
    onCall: function (t) {
      var a = t.currentTarget.dataset;
      this.serve.tools.makePhoneCall({
        phoneNumber: "company" == a.current ? "" : t.currentTarget.dataset.tel
      })
    },
    onSwitch: function (t) {
      var a = t.currentTarget.dataset.current;
      this.onGetList(a, "switch"), this.onSetData({
        scrollTop: 0
      })
    },
    onPageDataUpdate: function (t, a) {
      if ("sendCount" == t && "collect" == a.current) {
        for (var e = this.data.courierData[a.current].list, o = e.length, i = 0; i < o; i++)
          if (e[i].courier_id == a.courier_id) {
            e[i].service_count = 1 + 1 * (e[i].service_count || 0);
            break
          }
        this.onSetData("courierData." + a.current + ".list", e)
      }
    },
    onLoginCallback: function (t, a) {
      if (0 == t.code) {
        var e = "shop" == this.data.options.channel ? "brand" : "collect";
        this.onGetList(e, "init"), this.getCouponList()
      }
    },
    onGetList: function (t, a, e) {
      this.getList(t, a, e)
    },
    onLoaderMore: function (t) {
      var a = this;
      if ("collect" == this.data.current) {
        var e = this.data.courierData[this.data.current];
        if (this.data.moreData.show || e.page >= e.page_count) return;
        this.onSetData({
          "moreData.show": !0
        }), this.onGetList("collect", "more", function () {
          a.onSetData({
            "moreData.show": !1
          })
        })
      }
    },
    getList: function (t, a, e) {
      var o, i, r = this,
        n = this.serve,
        c = n.wxapi,
        s = (n.tools, this.appobj, "user_id"),
        u = this.data.courierData,
        p = {};
      if (this.onSetData({
          courierLoading: !0,
          current: "company" == t ? this.data.current || "collect" : t
        }), "nearby" == t) s = "uid", p.type = "cm", p.pr = 6, p.limit = 20, o = "/v1/nearby/getlist";
      else if ("brand" == t) p = {}, o = "/v1/Online/getBrands";
      else if ("collect" == t) p.limit = 10, p.type = "courier", p.page = "more" == a ? 1 + 1 * u[t].page : 1, o = "/v1/WeApp/lists";
      else if ("company" == t) return i = c.dataStorage("get", "companyCourier", !0)
        .data, void this.getWsCompanyCourier(function (t) {
          var a, e = [],
            o = "";
          t.length > 0 ? t.map(function (t) {
            a = {
              pic: "http://upload.kuaidihelp.com/touxiang/counterman_" + t.id + ".jpg",
              account_shop: t.shop_name,
              account_company: t.brand,
              account_name: t.realname,
              account_phone: t.username,
              courier_id: t.id,
              is_reg: !0,
              is_nearby: !0
            }, i.courier_id == a.courier_id ? e.unshift(a) : e.push(a)
          }) : 0 == u.collect.list.length && (o = r.data.tips.collect), r.onSetData({
            courierLoading: !1,
            "courierData.collect.tips": o,
            "courierData.company.list": e
          })
        });
      "switch" == a && u[t].list.length > 0 || this.apiDataRequest({
        userkey: s,
        ischecklogin: "collect" == t,
        isalert: !1,
        istoast: "more" != a && u[t].list.length > 0,
        url: o,
        data: p,
        onBeforeSend: function () {
          r.onSetData("courierData." + t + ".tips", "数据加载中...")
        },
        resFilter: function (a, e) {
          var o, i = {
              code: a.code,
              msg: a.msg,
              data: {
                list: [],
                page: 1,
                page_count: 1
              }
            },
            r = [],
            n = [],
            c = {},
            s = [];
          return 0 == a.code && a.data && ("nearby" == t ? s = a.data.result || [] : "collect" == t ? (s = a.data.list || [], i.data.page = a.data.page, i.data.page_count = a.data.page_count) : "brand" == t && (i.data.list = ["all"].concat(a.data)), "brand" != t && (s.map(function (a) {
            if ("nearby" == t) {
              var e = a.id,
                i = a.brand,
                s = a.is_reg,
                u = a.is_favorite;
              a.courier_id = e, a.account_company = i, a.is_nearby = !0, a.is_reg = 0 != s, a.is_focused = 0 != u
            } else {
              var p = [],
                l = a.focusStatus,
                d = a.payStatus;
              l > 0 && p.push("首次关注返券"), d > 0 && p.push("下单在线支付返券"), a.couponTips = p.join("，"), a.is_reg = !0, a.is_focused = !0
            }
            o = "dak" == a.account_company ? "/images/icon/logo-dak.png" : a.courier_id ? "http://upload.kuaidihelp.com/touxiang/counterman_" + a.courier_id + ".jpg" : "/images/icon/courier-pic.png";
            var h = a.is_reg;
            a.pic = o, c = a, h ? r.push(c) : n.push(c)
          }), i.data.list = r.concat(n))), i
        },
        onComplete: function (o, i) {
          0 == o.code && o.data.list.length > 0 ? (u[t].page = o.data.page, u[t].page_count = o.data.page_count, u[t].list = "more" == a ? u[t].list.concat(o.data.list) : o.data.list) : "more" != a && (u[t].list = []), "collect" == t && r.getList("company", a), u[t].tips = o.code > 0 && o.msg || r.data.tips[t], r.onSetData("courierData." + t, u[t]), e && e(o)
        }
      })
    },
    onJumpTo: function (a) {
      var e = a.currentTarget.dataset,
        o = e.url,
        i = e.index,
        r = e.current,
        n = this.serve.tools,
        c = {},
        s = "brand" == r ? "shop" : "courier",
        u = this.data.courierData[r].list[i];
      "vs_exp" == o ? (c = t({
        source: r,
        action: "switch",
        channel: s
      }, s, "shop" == s ? {
        brand: u
      } : {
        courier_id: u.courier_id,
        account_company: u.account_company,
        account_phone: u.account_phone,
        account_name: u.account_name,
        account_shop: u.account_shop
      }), "dak" == u.account_company && (c[s].dak_id = u.courier_id), "company" == e.current && this.onSelectCourier({
        detail: {
          value: e.index
        }
      })) : "vs_detail" == o && (c = {
        source: r,
        courier_phone: u.account_phone
      }, "dak" == u.account_company && (c.dak_id = u.courier_id)), n.jumpTo({
        url: o,
        datakey: "vs_exp",
        options: c
      })
    },
    onScan: function (t) {
      this.serve.tools;
      this.appobj.onScan(this.pageobj, "请扫描快递员或驿站寄件二维码")
    },
    getWsCompanyCourier: function (t) {
      this.apiDataRequest({
        url: "/v1/WewsUserOrder/getCompanyCourierList",
        userkey: "userId",
        isalert: !1,
        onComplete: function (a, e) {
          var o = [];
          0 == a.code && a.data && a.data.length > 0 && (o = a.data), t && t(o)
        }
      })
    },
    getCouponList: function () {
      var t = this;
      this.appobj.getCouponList({
        handler: function (a) {
          if (0 == a.code) {
            var e = a.data.list,
              o = {};
            (void 0 === e ? [] : e)
            .map(function (t) {
              var a = t.account_phone,
                e = t.past_date;
              if (!((void 0 === e ? 0 : e) <= 0)) {
                var i = o[a] || 0;
                o[a] = i > 0 ? 1 + i : 1
              }
            }), t.onSetData({
              couponData: o
            })
          }
        }
      })
    },
    apiDataRequest: function (t) {
      this.serve.api.apiDataRequest(a({
        url: "",
        data: {},
        istoast: !1,
        ischecklogin: !0,
        isset: !1
      }, t))
    }
  });
});
require("pages/vshop/vshop.js");
__wxRoute = 'pages/vshop/temporary/temporary';
__wxRouteBegin = true;
define("pages/vshop/temporary/temporary.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  function e(e, t, i) {
    return t in e ? Object.defineProperty(e, t, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = i, e
  }
  var t = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = arguments[t];
        for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a])
      }
      return e
    },
    i = require("../../../servejs/pages.js"),
    a = require("../../../component/clipboard/clipboard.js");
  i(t({
    data: {
      isLoading: !0,
      isAgree: !0,
      errorTips: null
    },
    isAutoLogin: !0,
    isLifeNormal: !0,
    serve: ["api", "map", "wxapi", "dialog", ["form", "../component/form/form.js"],
      ["regular", "../component/form/regular.js"],
      ["address", "../component/address/address.js"]
    ],
    life: ["jumpTo", "switchAgree"],
    onLoad: function (e, t) {
      this.address_ret = this.serve.address.editor([{
        key: "shipping",
        status: 1,
        name: "收件人信息",
        isLocation: !0
      }]), this.onLoginCallback(t)
    },
    onLoginCallback: function (e) {
      var t = this;
      0 == e.code && this.getTemporaryDetail(function (i) {
        0 != i.code || i.data.order_number || (t.formInit(), t.getLocation(e))
      })
    },
    onShow: function (e) {
      0 == e.code && this.getClipboardData()
    },
    getTemporaryDetail: function (e) {
      var t, i, a, s = this.serve.tools,
        r = this.data.options,
        o = this,
        d = this.data.loginRes;
      this.apiDataRequest({
        data: {
          order_id: r.order_id
        },
        url: "/v1/WeApp/getByOrderReadyId",
        onSuccess: function (r, n) {
          e && e(r), 0 == r.code && r.data ? (i = r.data.counterman_mobile ? "courier" : "shop", t = r.data.user_id == d.data.user_id, a = {
            errorTips: null,
            channel: i,
            isSelfOrder: t,
            avatarUrl: r.data.avatar_url
          }, r.data.order_number && s.jumpTo({
            url: "exp_send_detail",
            target: "self",
            options: {
              order_number: r.data.order_number
            }
          })) : a = {
            errorTips: r.msg
          }, a.isLoading = !1, o.onSetData(a)
        }
      })
    },
    formInit: function (e) {
      var i, a = this,
        s = e || {},
        r = this.serve.tools,
        o = this;
      this.form_ret = this.serve.form({
        isGetStorage: !e,
        form: {
          shipping_name: {
            value: s.shipping_name
          },
          shipping_mobile: {
            value: s.shipping_mobile
          },
          shipping_address: {
            value: s.shipping_address
          },
          shipping_province: {
            value: s.shipping_province
          },
          shipping_city: {
            value: s.shipping_city
          },
          shipping_district: {
            value: s.shipping_district
          }
        },
        isClearAll: !0,
        storageKey: "vshopSendInfo",
        onSuccess: function (e, t) {
          if (0 == e.code) {
            var a = e.data.orderNumber;
            (i = r.getPage(1)) && "pages/sendRecord/detail/detail" == i.route ? (i.onPageDataUpdate("temporaryComplete", t), r.jumpTo()) : r.jumpTo({
              url: "exp_send_result",
              target: "self",
              options: {
                source: "temporary",
                status: "end",
                order_id: a
              }
            }), o.data.isSelfOrder && o.sendNotice(a, t.formId)
          }
        },
        request: {
          url: "/v1/WeApp/completReceive",
          loginconfig: {
            isjump: !0
          },
          reqFilter: function (e) {
            return t({
              order_id: a.data.options.order_id
            }, e)
          },
          ischecklogin: !0
        }
      }, this.pageobj)
    },
    sendNotice: function (e, t) {
      this.appobj.updateAppData(!0, ["isReGetTemporary", "isReGetReCord"])
    },
    onJumpTo: function (e) {
      var t = e.currentTarget ? e.currentTarget.dataset : e,
        i = t.url,
        a = t.options || {},
        s = t.target || "blank",
        r = this.serve.tools;
      "help" == i ? a = {
        src: "vs_exp"
      } : "addr_lib" == i ? a = {
        id: this[t.type + "_id"],
        src: t.type
      } : (delete t.url, a = t.options || t), r.jumpTo({
        url: i,
        target: s,
        options: a
      })
    },
    getLocation: function (e) {
      var t = this,
        i = this.data.form.data,
        a = !(e.code > 0 || i.shipping_address || i.shipping_province);
      t.serve.map.location(t.pageobj, {
        istoast: !1,
        onSuccess: function (e, i) {
          0 == e.code && e.data ? t.form_ret.update({
            shipping_province: e.data.province,
            shipping_city: e.data.city,
            shipping_district: e.data.district,
            shipping_address: e.data.detail
          }) : t.alertMsg("定位失败！")
        }
      }, a)
    },
    onPageDataUpdate: function (t, i) {
      var a, s, r = {};
      if ("addressEditor" != t && "addressSelect" != t || (s = "address", r[(a = "send" == i.address.address_type ? "shipper" : "shipping") + "_name"] = i.address.real_name, r[a + "_mobile"] = i.address.mobile, r[a + "_address"] = i.address.address_detail, r[a + "_province"] = i.address.address_province, r[a + "_city"] = i.address.address_city, r[a + "_district"] = i.address.address_county, this.form_ret.update(r, s), this.setData(e({}, i.address.address_type + "Id", i.address.id || "")), this.address_ret.switchStatus({
          kind: a,
          status: 1
        }, !0)), "addressParse" == t) {
        for (var o in i.data) r[i.kind + "_" + o] = i.data[o];
        this.form_ret.update(r), this.address_ret.switchStatus({
          kind: i.kind,
          status: 1
        })
      } else if ("areaSelect" == t) {
        var d;
        this.form_ret.update((d = {}, e(d, i.kind + "_province", i.data.province), e(d, i.kind + "_city", i.data.city), e(d, i.kind + "_district", i.data.district), d))
      }
    },
    apiDataRequest: function (e) {
      var t = this.serve.tools.extendJson(!0, {}, {
        url: "",
        data: {},
        ischecklogin: !0,
        isset: !1
      }, e);
      this.serve.api.apiDataRequest(t)
    },
    alertMsg: function (e, t) {
      this.serve.tools.alertMsg(this.pageobj, {
        msg: e
      }, t)
    },
    alertDialog: function (e, t) {
      return this.serve.dialog.alertDialog(this.pageobj, e, t)
    },
    onSwitchAgree: function (e) {
      this.onSetData({
        isAgree: !this.data.isAgree
      })
    },
    toolbars: [{
      action: "get",
      name: "用于收件地址"
    }, {
      ffor: "shipping",
      action: "editor",
      name: "完善地址"
    }]
  }, a));
});
require("pages/vshop/temporary/temporary.js");
__wxRoute = 'pages/vshop/message/message';
__wxRouteBegin = true;
define("pages/vshop/message/message.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../../servejs/tools.js");
  var e = require("../../../servejs/api.js"),
    i = require("../../../servejs/formui.js"),
    t = require("../../../servejs/map.js"),
    s = getApp();
  Page({
    data: {},
    onLoad: function (e) {
      var t = s.getHeartInfo();
      this.setData({
        options: e
      }), this.fuiRes = i.formUi(this, "init", {
        group: "info",
        formlist: {
          content: {
            required: !0,
            minlength: 10,
            tag: "留言内容",
            islimitsign: !0,
            maxlength: 200
          },
          waybill_no: {
            required: !0,
            tag: "单号"
          },
          address: {
            required: !0,
            tag: "详细地址"
          },
          mobile: {
            regname: "phone",
            value: t.phone,
            required: !0,
            tag: "手机号"
          }
        }
      }), this.bindLocation()
    },
    bindLocation: function () {
      var e = this;
      t.location(this, {
        onSuccess: function (i, t) {
          0 == i.code && e.fuiRes.update({
            address: i.data.detail
          })
        }
      }, !1)
    },
    onSubmit: function (i) {
      var t = i.detail.value,
        a = this;
      e.apiDataRequest({
        istoast: !0,
        jumpconfig: {
          url: ""
        },
        isalert: !0,
        toast: {
          success: "留言成功"
        },
        url: "/v1/liuyan/sendTopic",
        data: t,
        onSuccess: function (e) {
          0 == e.code && (s.updateAppData({
            isreload: !0
          }, "vshop_list"), a.fuiRes.clean("mobile", !0))
        }
      }, this)
    }
  });
});
require("pages/vshop/message/message.js");
__wxRoute = 'pages/vshop/detail/detail';
__wxRouteBegin = true;
define("pages/vshop/detail/detail.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  var a = Object.assign || function (a) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (a[o] = e[o])
    }
    return a
  };
  require("../../../servejs/pages.js")({
    data: {
      isLoading: !0,
      courierData: {
        pic: "/images/icon/courier-pic.png"
      },
      couponTips: "",
      isSwitch: !1,
      can_share: wx.canIUse && wx.canIUse("button.open-type.share")
    },
    isAutoLogin: !0,
    isLifeNormal: !0,
    serve: ["api", "map", "dialog", "wxapi"],
    life: ["switchCollect", "imageError", "jumpTo", "shareAppMessage", "call", "addresssToggle", "pageDataUpdate"],
    optionsParse: function (a) {
      return this.serve.tools.parseUrlOptions(a, {
        mb: "courier_phone",
        cp: "courier_phone",
        phone: "courier_phone",
        id: "dak_id",
        userId: "ws_id"
      }, !0)
    },
    onLoad: function (a, t) {
      a.dak_id && this.setNavTitle({
        account_company: "dak"
      }), this.onLoginCallback(t)
    },
    onLoginCallback: function (a) {
      0 == a.code && (this.getCourierCard(), this.getCouponList())
    },
    getLocation: function (a) {
      var t = this,
        e = this.pageobj,
        o = this.positionData,
        i = this.serve,
        n = i.map,
        c = i.tools;
      o ? a && a(o) : n.location(e, {
        istoast: !1,
        onSuccess: function (o, i) {
          0 == o.code && o.data ? (t.positionData = o.data, a && a(o.data)) : c.alertMsg(e, {
            msg: "定位失败！"
          })
        }
      }, !0)
    },
    getCourierCard: function (a) {
      var t = this,
        e = this.serve,
        o = (e.api, e.tools),
        i = this.data.options,
        n = i.dak_id,
        c = i.courier_phone,
        s = {};
      n ? (s.type = "dak", s.dak_id = n) : c && (s.type = "courier", s.phone = c), this.apiDataRequest({
        url: "/v1/WeApp/details",
        data: s,
        resFilter: function (a) {
          if (a && 0 == a.code && a.data) return a.data.last_login_time && a.data.last_login_time.last_online && (a.data.last_login_time.last_online = o.dateFilter(a.data.last_login_time.last_online)), a.data.account_name = a.data.account_name && a.data.account_name.replace(/(.)/g, function (a, t, e, o) {
            return 1 == e ? "*" : a
          }), a
        },
        onComplete: function (e, o) {
          if (0 == e.code && e.data) {
            var i = e.data,
              n = i.focusStatus,
              c = i.payStatus,
              s = i.account_company,
              r = i.courier_id,
              u = [];
            e.data.isLoaded = !0, e.data.pic = "dak" == s ? "/images/icon/logo-dak.png" : "http://upload.kuaidihelp.com/touxiang/counterman_" + r + ".jpg", n > 0 && u.push("首次关注返券"), c > 0 && u.push("下单在线支付返券"), t.onSetData({
              couponTips: u.join("，"),
              courierData: e.data
            }), t.setNavTitle(e.data), t.collectCourier(e.data, o)
          }
          t.onSetData({
            isLoading: !1
          }), a && a()
        }
      })
    },
    couponDialog: function (a) {
      var t = this,
        e = a.data,
        o = e.expiration_time,
        i = e.cost,
        n = e.account_name;
      o && i && n && (o = this.serve.tools.dateFilter(o), this.alertDialog({
        isnoform: !0,
        title: "恭喜",
        tmpname: "coupons",
        tmpdata: {
          expiration_time: o,
          cost: i,
          account_name: n
        },
        button: [{
          name: "立即下单",
          action: "sure",
          classname: "color-blue"
        }],
        dialogname: "system",
        cb: function (a) {
          "sure" === a && t.onJumpTo({
            url: "vs_exp"
          })
        }
      }))
    },
    collectCourier: function (a, t) {
      var e = this;
      a.is_focused || "scan" != this.data.options.source || this.apiDataRequest({
        url: "/v1/WeApp/focus",
        isalert: !1,
        data: t,
        onSuccess: function (a) {
          0 == a.code && (e.onSetData({
            "courierData.is_focused": !0
          }), e.couponDialog(a))
        }
      })
    },
    onSwitchCollectDialog: function (a, t) {
      if ("focus" != a) {
        var e = 1;
        this.alertDialog({
          tmpname: "template",
          title: "取消收藏原因",
          button: [{
            name: "不取消了",
            action: "cancel",
            classname: "border-r"
          }, {
            name: "取消收藏",
            action: "submit"
          }],
          content: {
            cname: "pa-30 reason-list",
            template: [{
              node: "radio",
              name: "radio_value",
              child: [{
                desc: "地址变化",
                checked: !0
              }, {
                desc: "长时间未取件"
              }, {
                desc: "服务态度差"
              }, {
                desc: "其他"
              }]
            }, {
              node: "view",
              cname: "input-model bgcolor-lighter radious-a border-a mt-30",
              child: [{
                node: "input",
                desc: "请填写详细原因",
                name: "desc"
              }]
            }],
            data: {
              radio_value: [1, 2, 3, 4]
            }
          },
          cb: function (a, o) {
            "sure" == a ? t && t({
              reason: e,
              desc: o.desc || ""
            }) : "other" == a && "change" == o.type && (e = o.detail.value)
          }
        })
      } else t && t()
    },
    onSwitchCollect: function () {
      var a = this,
        t = this.data,
        e = t.courierData,
        o = t.isSwitch,
        i = this.serve;
      i.api, i.tools;
      if (!o) {
        var n, c = this.appobj,
          s = "dak" == e.account_company ? {
            type: "dak",
            dak_id: e.courier_id
          } : {
            type: "courier",
            phone: e.account_phone,
            courier_id: e.courier_id
          };
        n = e.is_focused ? "cancel" : "focus", this.onSwitchCollectDialog(n, function (t) {
          "cancel" == n && (s.reason = t.reason, s.desc = t.desc), a.onSetData({
            isSwitch: !0
          }), a.apiDataRequest({
            url: "/v1/WeApp/" + n,
            data: s,
            onComplete: function (t, o) {
              var i = !1;
              0 == t.code && (i = !e.is_focused, c.updateAppData("cancel" === n ? {
                action: "reget"
              } : null, "vs_exp"), c.updateAppData(!0, "regetCourierList"), a.updateVshopSendCourier(n), "focus" === n && a.couponDialog(t)), a.onSetData({
                isSwitch: !1,
                "courierData.is_focused": i
              })
            }
          })
        })
      }
    },
    updateVshopSendCourier: function (a) {
      var t = this.serve.wxapi,
        e = "vshopSendCourier",
        o = this.data.courierData,
        i = t.dataStorage("get", e, !0)
        .data;
      i && o.account_phone == i.account_phone && ("cancel" == a ? t.dataStorage("remove", e) : "focus" == a && (i = {
        courier_id: o.courier_id,
        account_company: o.account_company,
        account_phone: o.account_phone,
        account_name: o.account_name,
        account_shop: o.account_shop
      }, t.dataStorage("set", e, i)))
    },
    onImageError: function (a) {
      this.onSetData({
        "courierData.pic": "/images/icon/courier-pic.png"
      })
    },
    onJumpTo: function (a) {
      var t = this.data,
        e = t.options,
        o = t.courierData,
        i = (a.currentTarget || {
          dataset: a
        })
        .dataset.url,
        n = this.serve.tools;
      "dak" != o.account_company || "vs_msg" != i ? ("vs_exp" == i && (e = {
        source: e.source,
        action: "send",
        channel: "courier",
        courier: o
      }), this.onAddressCheck(i, o, function () {
        n.jumpTo({
          url: i,
          datakey: "vs_exp",
          options: e
        })
      })) : n.apiToast({
        title: "暂时无法给驿站留言",
        icon: "error"
      }, this.pageobj)
    },
    onAddressCheck: function (a, t, e) {
      "vs_exp" != a ? e && e() : t.is_nearby ? e && e() : this.onCheckDialog(e)
    },
    onCheckDialog: function (a) {
      var t = this.serve.tools;
      this.alertDialog({
        title: "提示",
        ismasktap: !1,
        button: [{
          name: "否，继续",
          action: "cancel",
          classname: "border-r"
        }, {
          name: "是，更换",
          action: "submit"
        }],
        classname: "align-center",
        msg: ["您当前位置不在快递员服务范围内，", "是否更换快递员"],
        cb: function (e, o) {
          "cancel" == e ? a && a() : "sure" == e && t.jumpTo()
        }
      })
    },
    onShareAppMessage: function () {
      var a = this.data.courierData,
        t = "dak" == a.account_company ? "dak_id=" + a.courier_id : "courier_phone=" + a.account_phone;
      return t += "&source=share", {
        title: this.data.navTitle,
        path: "/pages/vshop/detail/detail?" + t
      }
    },
    onCall: function (a) {
      this.serve.tools.makePhoneCall({
        phoneNumber: a.currentTarget.dataset.tel
      })
    },
    onAddresssToggle: function (a) {
      this.onSetData({
        isShowDetail: "touchstart" == a.type
      })
    },
    setNavTitle: function (a) {
      var t = this,
        e = a.account_company,
        o = a.account_name,
        i = this.serve.wxapi,
        n = void 0,
        c = [];
      this.appobj.getBrandInfo(function (a) {
        var s = a[e],
          r = s.name,
          u = s.short_name;
        u && c.push(u), o && c.push(o), n = "dak" == e ? "驿站" : c.join(" - "), i.setTitle({
          title: n
        }), t.onSetData({
          brandName: r,
          navTitle: n
        })
      })
    },
    onPageDataUpdate: function (a, t) {
      "sendCount" == a && this.onSetData({
        "courierData.service_count": 1 + 1 * (this.data.courierData.service_count || 0)
      })
    },
    getCouponList: function () {
      var a = this,
        t = this.data.options.courier_phone;
      t && this.appobj.getCouponList({
        data: {
          phone: t
        },
        handler: function (t) {
          var e = t.data.count,
            o = void 0 === e ? 0 : e;
          a.onSetData({
            hasCoupon: o > 0
          })
        }
      })
    },
    alertDialog: function (a) {
      return this.serve.dialog.alertDialog(this.pageobj, a)
    },
    apiDataRequest: function (t) {
      this.serve.api.apiDataRequest(a({
        url: "",
        data: {},
        istoast: !1,
        ischecklogin: !0,
        isset: !1
      }, t))
    }
  });
});
require("pages/vshop/detail/detail.js");
__wxRoute = 'pages/expResult/expResult';
__wxRouteBegin = true;
define("pages/expResult/expResult.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  var t = require("../../servejs/api.js"),
    e = require("../../servejs/tools.js"),
    a = (require("../../servejs/images.js"), require("../../component/draw/draw.js")),
    r = require("../../servejs/wxapi.js"),
    i = getApp();
  Page({
    data: {
      advert: {
        image: "https://img.kuaidihelp.com/wxapp/ad/ad-dmhb.jpg",
        path: "pages/index/index?appkey=ca688e8fa80c2062e91d3b03f9506963&adSpaceKey=abbfb7fa3818683fd2caae6cde8e6ee6",
        appId: "wxe5d6fb5f83c474d4"
      },
      isCanToMiniProgram: e.canIUse("2.0.7"),
      couponData: null,
      options: {},
      time_max: 70
    },
    onBack: function (t) {
      e.jumpTo()
    },
    onLoad: function (t) {
      var e = this,
        i = getApp();
      this.setData({
        ts: i.getAppData("todayTimer"),
        options: t
      }), "all" === t.source ? t.order_id && (this.waveCreate(6), this.nearbyCourier(this.data.time_max, 15)) : "pay" === t.source ? this.getCouponData() : (t.pics = t.pics ? t.pics.split(",") : [], t.s_name && "temporary" != t.source && a({
        template: "order",
        isAuto: !0,
        tmpdata: {
          send_info: [this.hidePart(t.s_name) + "  " + this.hidePart(t.s_phone, "phone"), t.s_city + " *** ***"],
          get_info: [this.hidePart(t.r_name) + "  " + this.hidePart(t.r_phone, "phone"), t.r_city + " *** ***"],
          brand_name: t.brand_name,
          brand_logo: "https://img.kuaidihelp.com/brand_logo/icon_" + t.brand + ".png"
        },
        onGetImage: function (t) {
          t && e.setData({
            sharePics: t
          })
        }
      })), r.setTitle({
        title: "pay" === t.source ? "支付成功" : "提交成功"
      })
    },
    getCouponData: function () {
      var a = this,
        r = this.data.options.order_id;
      r && t.apiDataRequest({
        url: "/v1/WeApp/getCoupon",
        data: {
          order_id: r
        },
        isset: !1,
        istoast: !1,
        onSuccess: function (t) {
          var r = t.code,
            i = t.data;
          if (0 == r && i) {
            var s = i.cost,
              o = i.account_name,
              n = i.expiration_time;
            n = e.dateFilter(n), a.setData({
              couponData: {
                cost: s,
                account_name: o,
                expiration_time: n
              }
            })
          }
        }
      })
    },
    hidePart: function (t, e) {
      return t = t && t.toString() || "", "phone" == e ? t.replace(/(\d{3})(\d{4})(\d{4})/, "$1****$3") : t.substring(0, 1) + "*"
    },
    onShow: function () {
      var t = this;
      "all" == this.data.options.source && (this.timer_ && clearTimeout(this.timer_), this.timer_ = setTimeout(function () {
        t.setData({
          isshow: !0
        })
      }, 50))
    },
    onShare: function (t) {
      wx.canIUse && wx.canIUse("button.open-type.share") || e.alertMsg(this, {
        msg: "请点击右上角分享"
      })
    },
    onShareAppMessage: function () {
      var t, e, a, r = this.data.options;
      return "temporary" == r.source ? (t = "我给你寄了包裹，快来填写你的地址吧~", e = "https://img.kuaidihelp.com/wxapp/share/wkd-temporary.png", a = "/pages/vshop/temporary/temporary?order_id=" + r.order_id) : (t = "分享给你的快递", e = this.data.sharePics || "https://img.kuaidihelp.com/wxapp/share/wkd-order.png", a = "/pages/queryExpress/result/result?order_no=" + r.order_id + "&express_company=" + r.brand), {
        title: t,
        path: a + "&source=share",
        imageUrl: e
      }
    },
    onHide: function () {
      this.setData({
        isshow: !1
      })
    },
    checkOrder: function () {
      var e = this.data.options,
        a = this;
      t.apiDataRequest({
        url: "/v1/GrabOrder/isDealed",
        dataname: "isDealed",
        isset: !1,
        istoast: !1,
        data: {
          order_id: e.order_id
        },
        onSuccess: function (t) {
          0 == t.code && t.data && ("true" == t.data.dealed ? a.onJumpToDetail() : "true" == t.data.can_push_zt && a.onPush())
        }
      }, this)
    },
    onPageDataUpdate: function (t, e) {
      this.setData({
        "options.pics": e.result.pics
      })
    },
    onJumpToDetail: function () {
      var t = this.data.options.order_id;
      that.c_timer && clearInterval(that.c_timer), that.q_timer && clearInterval(that.q_timer), e.jumpTo({
        target: "self",
        url: "exp_send_detail",
        options: {
          order_number: t
        }
      })
    },
    onPush: function () {
      var e = this,
        a = e.data.options.order_id;
      e.c_timer && clearInterval(e.c_timer), e.q_timer && clearInterval(e.q_timer), t.apiDataRequest({
        url: "/v1/GrabOrder/pushZt",
        isset: !1,
        dataname: "pushZt",
        data: {
          order_id: a
        },
        istoast: !1,
        onSuccess: function (t) {
          e.onJumpToDetail()
        }
      }, this)
    },
    waveCreate: function (t) {
      this.setData({
        am_wave: {
          num: t
        }
      })
    },
    onUnload: function () {
      this.c_timer && clearInterval(this.c_timer), this.q_timer && clearInterval(this.q_timer)
    },
    getRealnameStatus: function () {
      var t = this;
      "all" != this.data.options.source && i.getRealnameStatus(function (e) {
        t.setData({
          rname_status: e
        })
      })
    },
    onJumpTo: function (t) {
      var a, r, i = this.data.options,
        s = t.currentTarget.dataset;
      t.currentTarget.id ? (r = "blank", "goods" == (a = t.currentTarget.id) && (s.type = "pics", s.pics = i.pics ? i.pics.join(",") : "")) : (a = i.order_id ? "exp_send_detail" : "exp_send_record", r = "self"), i.order_id && (s.order_number = i.order_id, "start" === i.status && (s.source = i.source)), e.jumpTo({
        target: r,
        options: s,
        url: a
      })
    },
    nearbyCourier: function (t, e) {
      var a, r, i = this,
        e = e || 15,
        s = 0;
      i.setData({
        courier_num: 0
      }), i.q_timer && clearInterval(i.q_timer), i.q_timer = setInterval(function () {
        s++, a = parseInt(4 * Math.random()), r = (i.data.courier_num || 0) + a, r = r >= e ? e : r, i.setData({
          courier_num: r,
          timer: s
        }), s >= t && (i.c_timer && clearInterval(i.c_timer), i.q_timer && clearInterval(i.q_timer), i.onPush())
      }, 1e3), i.c_timer && clearInterval(i.c_timer), i.c_timer = setInterval(function () {
        i.checkOrder()
      }, 1e3)
    },
    onAdvert: function () {
      var t = this.data.advert,
        e = t.path,
        a = t.appId;
      wx.navigateToMiniProgram && wx.navigateToMiniProgram({
        appId: a,
        path: e
      })
    }
  });
});
require("pages/expResult/expResult.js");
__wxRoute = 'pages/queryExpress/queryExpress';
__wxRouteBegin = true;
define("pages/queryExpress/queryExpress.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../servejs/pages.js")({
    isAutoLogin: !0,
    isLifeNormal: !0,
    life: ["ready", "notice", "setTop", "operateDelete", "touchNav", "touchSwitch", "formEvent", "scroll", "scan", "shareAppMessage"],
    serve: ["api", "dialog", "wxapi", ["drawer", "../component/drawer/drawer"],
      ["regular", "../component/form/regular.js"]
    ],
    data: {
      refreshData: {
        show: !1,
        ts: 0
      },
      unsigned_count: 0,
      delivering_count: 0,
      topData: {
        list: [],
        check: {},
        array: []
      }
    },
    onShareAppMessage: function () {
      return {
        title: "查快递",
        path: "/pages/queryExpress/queryExpress"
      }
    },
    onLoad: function (e, t) {
      var a = this,
        o = this.appobj,
        r = (this.serve.wxapi, this.serve.tools);
      o.getBrandInfo(function (e) {
        a.setData({
          pagedata: {
            brandinfo: e
          }
        })
      }), this.setData({
        options: e
      }), this.drawer_ret = this.serve.drawer({
        max: 135,
        dataFilter: function (e) {
          var t = e.from;
          return ("top" == e.lname ? a.data.topData.list : a.data.response && a.data.response[t] && a.data.response[t].data && a.data.response[t].data.data || [])[e.index]
        },
        onTap: function (e, t) {
          a.jumptimer && clearTimeout(a.jumptimer), a.jumptimer = setTimeout(function () {
            r.jumpTo({
              url: "exp_result",
              options: {
                formId: a.formId,
                order_no: 0 != t.order_no ? t.order_no : "",
                deliver_no: t.deliverNo || t.orderId,
                express_company: t.deliverCode,
                order_id: t.orderId,
                from_channel: t.fromChannel,
                status: t.status
              }
            })
          }, 10)
        },
        onLongPress: function (e, t) {
          a.showQuickButton(t)
        }
      }), this.onLoginCallback(t)
    },
    onLoginCallback: function (e) {
      if (0 == e.code) {
        var t = this;
        this.loadData(this.data.navtype || "all", "init", function (e, a) {
          t.pageSpringBack(a)
        }), this.appobj.updateAppData({
          isreload: !1
        }, "q_express"), this.serve.wxapi.dataStorage("remove", "localNote")
      }
    },
    onReady: function () {
      var e = this,
        t = this.serve.tools,
        a = t.parseUrlOptions(this.data.options);
      "scan" == a.source && (a.waybill_no ? t.jumpTo({
        url: "exp_query",
        options: {
          source: "scan",
          deliver_no: a.waybill_no
        }
      }) : (this.scantime_ && clearTimeout(this.scantime_), this.scantime_ = setTimeout(function () {
        e.onScan()
      }, 500)))
    },
    onShow: function (e) {
      var t = this.appobj.getAppData("q_express");
      this.topDataLocal("get"), t && t.isreload && !this.isFirstLoad && (this.setData({
        unsigned_count: 0,
        delivering_count: 0
      }), this.navreload = {
        all: !0,
        unsigned: !0,
        signed: !0
      }, this.loadData(this.data.navtype || "all", "init")), 0 == e.code && this.getClipboardData()
    },
    getClipboardData: function () {
      var e = this,
        t = this.serve.tools,
        a = this.serve.regular.waybill_num.rule;
      t.clipboardDeal && t.clipboardDeal({
        cb: function (t) {
          0 == t.code && a.test(t.data) && (e.clipboardData != t.data && e.showClipboardData(t.data), e.clipboardData = t.data)
        }
      })
    },
    showClipboardData: function (e) {
      var t = this;
      this.alertDialog({
        title: "识别粘贴板内有运单号，是否使用",
        isnoform: !0,
        dialogname: "clipboard",
        msgclass: "align-center",
        msg: "运单号：" + e,
        cb: function (a, o) {
          "sure" == a && t.serve.tools.jumpTo({
            url: "exp_query",
            options: {
              deliver_no: e
            }
          })
        }
      })
    },
    onScan: function (e) {
      this.appobj.onScan(this, "请扫描单号条形码")
    },
    loadData: function (e, t, a) {
      var o, r, i, s, n, d, l = "recordData_" + e,
        c = this,
        p = this.appobj,
        u = this.serve.tools;
      c.setData({
        navtype: e
      }), "all" == e ? (o = "/v1/record/getAllList", r = ["type", "cut_time"], i = "unsigned", s = "哎呦，您还没有查件记录") : (o = "/v1/record/getList", r = ["type", "cut_time"], i = e, s = "哎呦，您还没有" + ("unsigned" == e ? "未签收" : "已签收") + "的记录");
      var h = this.navreload,
        v = !1,
        g = /\d{4}(-\d{1,2})+\s(\d{1,2}:?)+|\[|\]/g;
      this.apiRequest = this.serve.api.apiDataRequest({
        url: o,
        istoast: !1,
        isalert: !1,
        iscache: !("init" == t || h && h[e]),
        resFilter: function (e, t) {
          if (e && 0 == e.code && e.data && e.data.data) {
            var a, o = c.data.topData;
            e.data.data.map(function (e) {
              e.time = u.dateFilter(e.time), !e.deliverCode && e.fromChannel && (e.deliverCode = e.fromChannel), !e.deliverNo && e.orderId && (e.deliverNo = e.orderId), e.order_no = 0 == e.order_no ? "" : e.order_no, e.unique = t.type + "_" + e.id, e.currentFlow && (e.currentFlow = e.currentFlow.replace(g, "")), (a = u.inArray(e.deliverNo, o.array, !0)) >= 0 && o.list[a] && (v = !0, o.list[a] = e)
            }), v && c.setData({
              topData: o
            })
          }
          return e
        },
        tipsmsg: {
          error: s
        },
        dataname: l,
        ischecklogin: !0,
        ispage: !0,
        moreparam: r,
        data: {
          type: i
        },
        onSuccess: function (t, o) {
          t && 0 == t.code && t.data && (n = t.data.unsigned_count || 0, d = t.data.delivering_count || 0, c.setData({
            unsigned_count: n,
            delivering_count: d
          }), p.updateAppData({
            isreload: !1
          }, "q_express"), c.updateNoteLocal("set", l), c.onUpdateList("", t.data.data || [])), !o.cut_time && u.isFunction(a) && a(t, e)
        }
      }, this.pageobj), this.navreload && (this.navreload[e] = !1)
    },
    pageSpringBack: function (e, t) {
      var a = this,
        o = {};
      a["stimer_" + e] && clearTimeout(a["stimer_" + e]), a["stimer_" + e] = setTimeout(function () {
        o["scrollTop_" + e] = 1, a.setData(o)
      }, t || 1e3)
    },
    onScroll: function (e) {
      var t, a = this,
        o = a.data.navtype;
      if ("scrolltolower" == e.type) a.scrollType = e.type, a.stimer && clearTimeout(a.stimer), a.stimer = setTimeout(function () {
        a.scrollType = ""
      }, 1e3);
      else {
        if (t = (new Date)
          .getTime(), "scrolltolower" == a.scrollType || a.data.refreshData.show || t - a.data.refreshData.ts <= 3e3 || !a.data["scrollTop_" + o]) return void a.pageSpringBack(o);
        a.setData({
          "refreshData.show": !0
        }), a.onUpdateList(function () {
          a.setData({
            "refreshData.ts": t,
            "refreshData.show": !1
          }), a.pageSpringBack(o)
        })
      }
    },
    onNotice: function (e) {
      this.formId = e.detail.formId
    },
    onUpdateList: function (e, t) {
      var a = this.data.navtype,
        o = this,
        r = [];
      (t = t && t.length > 0 ? t : this.data.response && this.data.response["recordData_" + a] && this.data.response["recordData_" + a].data && this.data.response["recordData_" + a].data.data || [])
      .map(function (e) {
        "已签收" != e.status && e.deliverCode && e.deliverNo && r.push(e.deliverCode + "-" + e.deliverNo)
      }), r.length > 0 ? this.serve.api.apiDataRequest({
        istoast: !1,
        url: "/v1/express/chaxunstat",
        isset: !1,
        data: {
          query_data: r.join(",")
        },
        onSuccess: function (r, i) {
          if (0 == r.code && r.data && r.data.s && r.data.desc) {
            var s, n, d, l = {},
              c = r.data.s.replace(/#/g, '"'),
              p = r.data.desc.replace(/#/g, '"')
              .replace(/\r\n/g, "")
              .replace(/\s/g, " ");
            c = JSON.parse('{"' + c + '"}'), p = JSON.parse('{"' + p + '"}'), t.map(function (e) {
              d = e.deliverCode + "-" + e.deliverNo, s = c[d], n = p[d], e.deliverCode && n && s && (e.status = s, e.currentFlow = n.replace(/\d{4}(-\d{1,2})+\s(\d{1,2}:?)+|\[|\]/g, ""))
            }), l["response.recordData_" + a + ".data.data"] = t, o.setData(l)
          }
          e && e(r)
        }
      }) : e && e()
    },
    updateNoteLocal: function (e, t, a) {
      var o = this.serve.wxapi,
        r = this.serve.tools,
        i = o.dataStorage("get", "localNote");
      if (i = i.data || {}, "set" == e) {
        var s = this.data.response && this.data.response[t] && this.data.response[t].data && this.data.response[t].data.data;
        s && r.isArray(s) && s.map(function (e) {
          e.note ? i[e.deliverCode + (e.order_no || e.deliverNo)] = e.note : i[e.deliverCode + (e.order_no || e.deliverNo)] && delete i[e.deliverCode + (e.order_no || e.deliverNo)]
        })
      } else "del" == e && i[t] ? delete i[t] : "modify" == e && (i[t] = a);
      o.dataStorage("set", "localNote", i)
    },
    onOperateDelete: function (e) {
      var t, a = e.currentTarget.dataset,
        o = this;
      "top" == a.lname && (this.data.topData.list.splice(a.index, 1), this.data.topData.array.splice(a.index, 1), delete this.data.topData.check[a.orderno || a.deliverno], this.setData({
        topData: this.data.topData
      })), t = a.orderno ? {
        order_no: a.orderno
      } : a.orderId ? {
        order_id: [a.orderId]
      } : {
        info: [a.express_company + "-" + a.deliverno]
      }, this.serve.api.apiDataRequest({
        url: "/v1/record/delete",
        dataname: "delect",
        toast: {
          loading: "正在删除...",
          success: "已删除"
        },
        data: t,
        onSuccess: function (e, t) {
          0 == e.code && (o.loadData(o.data.navtype, "init"), o.navreload = {
            all: !0,
            unsigned: !0,
            signed: !0
          }, o.updateNoteLocal("del", a.express_company + (a.order_no || a.deliverno)))
        }
      })
    },
    unsignedCount: function (e) {
      "已签收" != e && "签收" != e && this.setData({
        unsigned_count: this.data.unsigned_count - 1
      })
    },
    updateRecord: function (e, t) {
      for (var a = wxapi.dataStorage("get", "query_local"), o = a && a.data && a.data.list || "", r = o.length, i = 0; i < r; i++)
        if (o[i].id == t.id) {
          "del" == e ? o.splice(i, 1) : "modify" == e && (o[i].note = t.note), a.data.list = o, wxapi.dataStorage("set", "query_local", a.data), this.loadData(this.data.navtype || "all", "init");
          break
        }
    },
    topDataLocal: function (e) {
      var t = this.data.topData,
        a = this.serve.wxapi;
      "get" == e ? ((t = a.dataStorage("get", "topData", !0)
          .data)
        .array = t.array || [], t.list = t.list || [], t.check = t.check || {}, this.setData({
          topData: t
        })) : "set" == e && a.dataStorage("set", "topData", t)
    },
    updateTopData: function (e) {
      var t, a = this.data.topData,
        o = this.serve.tools,
        r = e.order_no || e.deliverNo;
      (t = o.inArray(r, a.array, !0)) >= 0 && a.list[t] && (a.list[t].note = e.note), this.setData({
        "topData.list": a.list
      })
    },
    onSetTop: function (e) {
      var t, a = e.currentTarget.dataset,
        o = a.index,
        r = {},
        i = this.data.topData,
        s = this.data.response && this.data.response[a.from] && this.data.response[a.from].data && this.data.response[a.from].data.data || [];
      "top" == a.lname ? (t = i.list[o].order_no || i.list[o].orderId || i.list[o].deliverNo, i.check[t] && delete i.check[t], i.list && i.list.splice(o, 1), i.array && i.array.splice(o, 1)) : (t = s[o].order_no || s[o].orderId || s[o].deliverNo, i.list.unshift(s[o]), i.array.unshift(t), i.check[t] = !0), r.topData = i, this.setData(r), this.topDataLocal("set")
    },
    alertDialog: function (e, t) {
      return this.serve.dialog.alertDialog(this.pageobj, e, t)
    },
    showQuickButton: function (e) {
      var t = this,
        a = this.serve.tools;
      e.iscopy = !!a.clipboardDeal, e.isselect = a.isSelect, this.alertDialog({
        title: e.note ? e.note : e.deliverName + " " + (e.deliverNo || "暂无快递单号"),
        isnoform: !0,
        size: {
          w: "70%"
        },
        dialogname: "dialogname_1",
        tmpname: "queryOperate",
        tmpdata: e,
        cb: function (o, r) {
          if ("rowtap" == o) {
            if ("dialog" == r.action) return t.modifyNoteDialog(e), !1;
            "copy" == r.action && (t.clipboardData = r.deliverNo, a.clipboardDeal({
              data: r.deliverNo
            }, t))
          }
        },
        button: [{
          name: "取消",
          action: "cancel",
          classname: "color-blue"
        }]
      })
    },
    modifyNoteDialog: function (e) {
      var t = this;
      e.iscopy = !1, this.alertDialog({
        title: "修改备注",
        zindex: 10,
        size: {
          w: "70%"
        },
        dialogname: "dialogname_2",
        tmpdata: {
          order_no: e.order_no,
          deliverno: e.deliverNo,
          id: e.id,
          note: e.note,
          express_company: e.deliverCode
        },
        tmpname: "queryRemarks",
        cb: function (a, o, r, i) {
          "submit" === a && 0 === o.code && (t.apiRequest.update({
            note: r.note
          }, r.id, ["recordData_all", "recordData_unsigned", "recordData_signed"], "id"), t.updateNoteLocal("modify", e.deliverCode + (e.order_no || e.deliverNo), r.note), t.updateTopData({
            deliverCode: e.deliverCode,
            order_no: e.order_no,
            deliverNo: e.deliverNo,
            note: r.note
          }))
        }
      }, {
        ischecklogin: !0,
        loginconfig: {
          isjump: !0
        },
        url: "/v1/record/memoEdit",
        reqFilter: function (e) {
          return e.info = e.deliverCode + "-" + e.deliverNo + "-remark-" + encodeURIComponent(e.note) + "-end-", e
        },
        formlist: {
          note: {
            required: !0,
            tag: "备注信息"
          }
        }
      })
    },
    onTouchNav: function (e) {
      var t = this;
      this.serve.tools.touchUi(this.pageobj, e, {
        cb: function (e, a, o) {
          if ("tap" == e && "nav" == o.group) {
            var r = ["all", "unsigned", "signed"];
            t.loadData(r[o.nav], "switch", function (e, a) {
              t.pageSpringBack(a)
            }), t.setData({
              "refreshData.show": !1
            })
          }
        },
        datakey: "nav"
      })
    },
    onTouchSwitch: function (e) {
      this.serve.tools.touchUi(this.pageobj, e, {
        datakey: "switch"
      })
    },
    onFormEvent: function (e) {
      var t = e.currentTarget.dataset.deliver_no;
      this.serve.tools.jumpTo({
        options: {
          deliver_no: t
        },
        url: "exp_query"
      })
    }
  });
});
require("pages/queryExpress/queryExpress.js");
__wxRoute = 'pages/queryExpress/comment/comment';
__wxRouteBegin = true;
define("pages/queryExpress/comment/comment.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  var t = require("../../../servejs/tools.js"),
    e = require("../../../servejs/api.js");
  Page({
    data: {
      seled: {
        type: "brand"
      },
      pic: "http://img.kuaidihelp.com/brand_logo/icon_all.png"
    },
    onLoad: function (t) {
      var e = getApp();
      e.getBrandInfo(function (t) {
        this.setData({
          brandinfo: t
        })
      }.bind(this)), this.setData({
        options: t,
        pic: "http://img.kuaidihelp.com/brand_logo/icon_" + t.express_company + ".png"
      }), e.heartBeatCheck(this)
    },
    onReady: function () {
      this.getShopInfo(this.data.options)
    },
    onShow: function () {
      var t = this.data.seled;
      t && t.isreload && (this.getComList(t.typekey, t), t.isreload = !1, this.setData({
        seled: t
      }))
    },
    getShopInfo: function (t) {
      var a, o, i, s, d = this,
        n = {
          shop_collect: "收件网点",
          cm_collect: "收件快递员",
          shop_deliver: "派件网点",
          cm_deliver: "派件快递员",
          shop_question: "问题件网点",
          cm_question: "问题件快递员"
        };
      e.apiDataRequest({
        url: "/v1/express/shop_cm_list",
        dataname: "shoplist",
        data: t,
        toast: {
          loading: "查询中..."
        },
        onSuccess: function (e) {
          if (0 == e.code) {
            if (a = e.data && (e.data.collect && e.data.collect.length > 0 || e.data.deliver && e.data.deliver.length > 0 || e.data.question && e.data.question.length > 0) ? e.data : "", i = "brand", s = {
                type: "brand",
                id: ""
              }, d.setData({
                pic: "http://img.kuaidihelp.com/brand_logo/icon_" + t.express_company + ".png",
                seled: s,
                shopInfo: a
              }), a)
              for (o in a)
                if (a[o] && a[o].length > 0) {
                  i = o, (s = a[o][0])
                    .typename = n[s.type + "_" + o], s.typekey = o, d.setData({
                      pic: "cm" == s.type ? "http://upload.kuaidihelp.com/touxiang/counterman_" + s.id + ".jpg" : "http://img.kuaidihelp.com/brand_logo/icon_" + t.express_company + ".png",
                      seled: s
                    });
                  break
                }
            d.getComList(i, s)
          }
        }
      }, d)
    },
    comApi: function (t, a) {
      var o, i, s = this,
        d = s.data.seled,
        n = s.data.options,
        p = this.data.HeartBeat;
      "brand" == d.type || "shop" == d.type ? ((o = {
          brand: n.express_company,
          order_id: n.deliver_no,
          shop_id: d.id
        })
        .action = t, "add_text" == t && (o.content = a), i = "/v1/shop_votes/entry") : "cm" == d.type && (o = {
        mobile: d.phone
      }, i = "/v1/cm_comment/addCommentBool", "add_good" == t ? o.is_good = 1 : "add_bad" == t ? o.is_good = 2 : "add_text" == t && (i = "/v1/cm_comment/addComment", o.user_mobile = p.phone, o.comment = a));
      var c = {
        url: i,
        dataname: t,
        data: o,
        toast: {
          success: "谢谢您的点评"
        },
        customCheck: function (t) {
          if (t.content && t.content == s.data.comcontent) return {
            code: 1,
            msg: "您已经评论过"
          }
        },
        onSuccess: function (e, a) {
          if (0 == e.code)
            if ("add_text" == t) s.listRes.reload("init", {
              page: 1
            }), s.setData({
              com_content: ""
            });
            else {
              var o = s.data.response && s.data.response.comlist && s.data.response.comlist.data && s.data.response.comlist.data.good || 0,
                i = s.data.response && s.data.response.comlist && s.data.response.comlist.data && s.data.response.comlist.data.bad || 0;
              "add_good" == t ? (o = parseInt(o) + 1, s.setData({
                "response.comlist.data.good": o
              })) : (i = parseInt(i) + 1, s.setData({
                "response.comlist.data.bad": i
              }))
            }
        }
      };
      "add_text" == t ? (c.formlist = c.formlist || {}, c.formlist["cm" == d.type ? "comment" : "content"] = {
        required: !0,
        tag: "请输入评论内容"
      }) : c.tipsmsg = {
        error: "您已经评论过"
      }, e.apiDataRequest(c, this)
    },
    onImgErro: function () {
      var t = this.data.seled;
      this.setData({
        pic: "cm" == t.type ? "/images/icon/icon_renxiang.png" : "http://img.kuaidihelp.com/brand_logo/icon_all.png"
      })
    },
    onComment: function (e) {
      var a, o;
      if ("submit" == e.type) a = e.detail.target.dataset.action, o = e.detail.value.content;
      else {
        o = "";
        var i = "comsub_" + (a = e.currentTarget.dataset.action) + this.data.seled.typekey + "_" + this.data.seled.id + "_" + this.data.seled.type;
        if (this.data[i]) return t.alertMsg(this, {
          msg: "您已经评论过"
        }), !1;
        this.data[i] = !0
      }
      this.comApi(a, o)
    },
    switchShop: function (e) {
      var a = this.data.shopInfo;
      a.express_compay = this.data.options.express_company, a.seled = this.data.seled.typekey + "_" + this.data.seled.type + "_" + this.data.seled.id, t.jumpTo({
        url: "exp_shop",
        options: a
      })
    },
    getComList: function (a, o) {
      var i, s, d, n = this.data.options;
      i = {
        page: 1
      }, "brand" == a || o && "shop" == o.type ? (s = "/v1/shop_votes/entry", d = "limit", i.action = "get_shop_info", i.brand = n.express_company, i.order_id = n.deliver_no, i.shop_id = o.id) : (s = "/v1/cm_comment/getCommentListAndGood", d = "page_size", i.mobile = o.phone), this.setData({
        pic: "cm" == o.type ? "http://upload.kuaidihelp.com/touxiang/counterman_" + o.id + ".jpg" : "http://img.kuaidihelp.com/brand_logo/icon_" + n.express_company + ".png"
      }), this.listRes = e.apiDataRequest({
        ispage: !0,
        pskey: d,
        listname: "text",
        resFilter: function (e) {
          if (0 == e.code && e.data) return e.data.limit = e.data.text && e.data.text.limit || 20, e.data.page = e.data.text && e.data.text.page || 1, e.data.text = e.data.text && e.data.text.list || [], e.data.text && e.data.text.length > 0 && e.data.text.map(function (e) {
            o && "cm" == o.type ? (e.add_time = t.dateFilter(e.add_datetime), e.content = e.comment) : e.add_time = t.dateFilter(e.add_time)
          }), e
        },
        onMoreCheck: function (t, e) {
          if (t.data && t.data.text && t.data.text.length >= 1 * t.data.text_count) return {
            code: 1
          }
        },
        moreparam: ["page"],
        url: s,
        dataname: "comlist",
        data: i,
        istoast: !1
      }, this)
    }
  });
});
require("pages/queryExpress/comment/comment.js");
__wxRoute = 'pages/queryExpress/shop/shop';
__wxRouteBegin = true;
define("pages/queryExpress/shop/shop.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  var e = require("../../../servejs/tools.js");
  Page({
    data: {},
    onLoad: function (t) {
      var o, i = {
          shop_collect: "收件网点",
          cm_collect: "收件快递员",
          shop_deliver: "派件网点",
          cm_deliver: "派件快递员",
          shop_question: "问题件网点",
          cm_question: "问题件快递员"
        },
        a = [],
        s = t.express_compay,
        p = t.seled;
      for (o in t) t[o] && "express_compay" != o && "seled" != o && (t[o] = e.parseUrlOptions(t[o]), t[o] && t[o].length > 0 && t[o].map(function (e) {
        i[e.type + "_" + o] && (e.typekey = o, e.typeName = i[e.type + "_" + o], e.pic = "shop" == e.type ? "http://img.kuaidihelp.com/brand_logo/icon_" + s + ".png" : "http://upload.kuaidihelp.com/touxiang/counterman_" + e.id + ".jpg", e.unique = e.type + "_" + o + "_" + e.id), a.push(e)
      }));
      this.setData({
        seled: p,
        express_compay: s,
        listArr: a
      })
    },
    onImgErro: function (e) {
      var t = e.currentTarget.dataset,
        o = this.data.listArr;
      o[t.index].pic = "cm" == o[t.index].type ? "/images/icon/icon_renxiang.png" : "http://img.kuaidihelp.com/brand_logo/icon_all.png", this.setData({
        listArr: o
      })
    },
    onSelect: function (t) {
      var o = t.currentTarget.dataset;
      o.isreload = !0, e.jumpTo({
        optkey: "seled",
        options: o
      })
    }
  });
});
require("pages/queryExpress/shop/shop.js");
__wxRoute = 'pages/queryExpress/query/query';
__wxRouteBegin = true;
define("pages/queryExpress/query/query.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  var e = require("../../../servejs/tools.js"),
    t = require("../../../servejs/formui.js"),
    r = require("../../../servejs/api.js");
  Page({
    data: {},
    onLoad: function (t) {
      e.setPageUrl(this, ["exp_result", "brand"]), this.setData({
        options: t
      }), t && t.deliver_no && this.onInput("init", t.deliver_no)
    },
    onJumpTo: function (t) {
      var r = this.data.options,
        a = t.currentTarget.dataset,
        o = t.currentTarget.id;
      r.source && (a.source = r.source), "submit" == t.type && (this.formId = a.formId = t.detail.formId), e.jumpTo({
        target: "exp_result" == o ? "self" : "blank",
        url: o,
        options: a
      })
    },
    onPageDataUpdate: function (t, r) {
      var a = {
        formId: this.formId,
        deliver_no: r.deliver_no,
        express_company: r.brand,
        company_name: r.short_name,
        source: this.data.options.source
      };
      this.jumptimer && clearTimeout(this.jumptimer), this.jumptimer = setTimeout(function () {
        e.jumpTo({
          url: "exp_result",
          target: "self",
          options: a
        })
      }, 1e3)
    },
    onSearch: function (r) {
      var a = this;
      t.formUi(this, r, {
        formlist: {
          deliver_no: {
            minlength: 8,
            tag: "运单号",
            required: !0
          }
        },
        group: "search",
        cb: function (t, o, s) {
          var i = e.extendJson(o, s);
          o && o.deliver_no && s && s.express_company ? (i.formId = r.detail.formId, e.jumpTo({
            url: "exp_result",
            options: i
          })) : e.alertMsg(a, {
            msg: "请输入正确的单号"
          })
        }
      })
    },
    onInput: function (e, a) {
      var o = this;
      t.formUi(this, e, {
        formlist: {
          deliver_no: {
            required: !0
          }
        },
        cb: function (e, t, s) {
          if (a && a.length > 7 || t.deliver_no.value.length > 7) r.apiDataRequest({
            url: "/v1/synthesis/index",
            dataname: "match",
            data: {
              input: a || t.deliver_no.value
            },
            reqdelay: 0,
            resFilter: function (e) {
              if (0 == e.code && e.data.data && e.data.data.brand) {
                var t, r = [];
                for (t in e.data.data.brand) r.push({
                  key: t,
                  value: e.data.data.brand[t]
                });
                e.data.data.brand = r
              }
              return e
            },
            istoast: !!a
          }, o);
          else {
            o.data.response;
            o.setData({
              response: ""
            })
          }
        }
      })
    }
  });
});
require("pages/queryExpress/query/query.js");
__wxRoute = 'pages/queryExpress/result/result';
__wxRouteBegin = true;
define("pages/queryExpress/result/result.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
      value: a,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = a, e
  }
  require("../../../servejs/pages.js")({
    isAutoLogin: !0,
    isLifeNormal: !0,
    serve: ["api", "wxapi", "dialog"],
    life: ["tapBrand", "switch", "copy", "reQuery", "call", "comment", "dialogEvent", "pageDataUpdate", "jumpToWaybill", "tapComplaint", "forecast", "toSign", "toCourier", "shareAppMessage"],
    data: {
      deliver_step: 0,
      notice: "订阅",
      can_share: wx.canIUse && wx.canIUse("button.open-type.share")
    },
    onLoad: function (e, t) {
      var a = this.serve.tools;
      this.onSetData({
        options: e,
        isselect: a.isSelect,
        iscopy: !!a.clipboardDeal
      }), this.onLoginCallback(t), this.appobj.getBrandInfo(this.pageobj), this.onBrandPic()
    },
    onLoginCallback: function (e) {
      0 == e.code && (this.getOrderDetail(), this.onNotice())
    },
    onCopy: function (e) {
      this.serve.tools.clipboardDeal && e.currentTarget.dataset.info && this.serve.tools.clipboardDeal({
        data: e.currentTarget.dataset.info
      }, this)
    },
    onPageDataUpdate: function (e, t) {
      this.onBrandPic(t.brand), this.onSetData({
        "options.express_company": t.brand
      }), this.queryInfo(this.data.options), this.onNotice()
    },
    onTapComplaint: function () {
      var e = this.data.options;
      this.serve.tools.jumpTo({
        url: "complaint_detail",
        iscallback: !0,
        options: {
          express_company: e.express_company,
          express_number: e.deliver_no,
          source: "express"
        }
      })
    },
    onBrandPic: function (e) {
      this.serve.tools.setImagesUrl({
        tag: e || this.data.options.express_company
      }, this.pageobj)
    },
    onCall: function (e) {
      this.serve.tools.makePhoneCall({
        phoneNumber: e.currentTarget.dataset.tel
      })
    },
    onSwitch: function (e) {
      if ("close" == e.currentTarget.dataset.status) {
        var t = this.data.touchUi;
        return t && t.serve && "odd" == t.serve.flag && this.onSetData({
          "touchUi.serve.flag": "even"
        }), !1
      }
      tools.touchUi(this, e, {
        datakey: "serve"
      })
    },
    onShareAppMessage: function () {
      var e = this.data.options,
        t = this.data.brandinfo;
      e.note = "";
      var a = this.serve.tools.urlSplice("/pages/queryExpress/result/result", e);
      return {
        title: t[e.express_company].name + " " + e.deliver_no,
        path: a
      }
    },
    onNotice: function () {
      var e = this.data.options;
      e.deliver_no && e.formId && this.serve.api.notice({
        data: {
          template_title: "express_notice",
          form_id: e.formId,
          waybill_no: e.deliver_no,
          order_no: e.order_no,
          brand: e.express_company
        },
        toast: !1
      }, this.pageobj)
    },
    onReQuery: function (e) {
      this.apiRequest && this.apiRequest.reload()
    },
    addWaybillRecord: function () {
      var e = this.data.options,
        t = e.note || this.updateNoteLocal("get", e.express_company + (e.order_no || e.deliver_no));
      this.serve.api.apiDataRequest({
        url: "/v1/record/add",
        istoast: !1,
        userkey: "user",
        data: {
          no: [e.deliver_no || ""],
          brand: [e.express_company],
          status: [""],
          note: [t],
          order_no: e.order_no
        }
      })
    },
    queryInfo: function (t) {
      var a, o = (a = {
          params: ["ElapsedTime", "GetStatus", "GetWuliu_phone"],
          version: "v1",
          order_no: t.order_no,
          order_id: t.order_id,
          deliver_no: t.deliver_no,
          from_channel: t.from_channel
        }, e(a, "version", "v1"), e(a, "express_company", t.express_company), a),
        s = this,
        r = this.appobj,
        i = this.serve.tools,
        n = /\d{4}-\d{1,2}-\d{1,2}\s(\d{1,2}:?)+/,
        d = /(\/@|@)|(\d{2,3}\-\d{7,8}\#)|(\d{11}\#)|(\:919,)|inside|\#|\$|(\:\d+,inside\$)|\:\d*,/g,
        p = /(\[?[^\[\]]+\]?)/g,
        u = /\[(.+)\]/;
      "scan" == t.source && (o.source = "scan"), this.apiRequest = this.serve.api.apiDataRequest({
        url: "/v1/multinfo/getInfo",
        userkey: "user",
        dataname: "query",
        data: o,
        toast: {
          loading: "小微努力中..."
        },
        isalert: !1,
        resFilter: function (e) {
          if (0 == e.code && e.data) {
            if (e.data.GetWuliu_phone && i.isArray(e.data.GetWuliu_phone)) {
              var t, a, o, s = [];
              e.data.GetWuliu_phone.map(function (e, r) {
                var l = e.match(n) || "",
                  c = e.replace(l[0] + " ", "");
                c = c.replace(d, ""), t = i.dateFilter(l[0], !0), (a = c.match(p)) && (a = a.map(function (e) {
                  return (o = e.match(u)) ? {
                    value: o[1],
                    isCall: i.regularlist.contact.rule.test(o[1])
                  } : e
                })), s.push({
                  ymd: t[0],
                  time: t[1],
                  info: a ? {
                    arr: a
                  } : c,
                  index: r
                })
              }), s = s.reverse(), e.data.GetWuliu_phone = s
            }
            e.data.GetStatus && "未知" == e.data.GetStatus.status && (e.data.GetStatus = "暂无物流")
          }
          return e
        },
        onComplete: function (e, a) {
          if (t.status || r.updateAppData({
              isreload: !0
            }, "q_express"), 0 == e.code && e.data) {
            s.express_company && s.express_company != a.express_company ? (s.updateNoteLocal("rekey", s.express_company + t.deliver_no, a.express_company + t.deliver_no), r.updateAppData({
              isreload: !0
            }, "q_express")) : t.status ? e.data.GetStatus && e.data.GetStatus.status != t.status && r.updateAppData({
              isreload: !0
            }, "q_express") : r.updateAppData({
              isreload: !0
            }, "q_express"), e.data.scan_code && (e.data.scan_code.support_scan_code || e.data.scan_code.is_scan_code) && e.data.deliver && (i.setImagesUrl({
              path: "courierpath",
              evname: "courierPicEv",
              tag: e.data.deliver.courier_id,
              suffix: "jpg",
              errorpic: "/images/icon/person.png"
            }, s.pageobj), e.data.deliver.courier_phone && e.data.deliver.courier_isReg > 0 && s.getCourierCard(e.data.deliver.courier_phone));
            var o = 0;
            e.data.GetStatus && e.data.GetStatus.position && (o = "signed" == e.data.GetStatus.position ? 2 : 1), s.timer_ && clearTimeout(s.timer_), s.timer_ = setTimeout(function () {
              s.onSetData({
                deliver_step: o
              })
            }, 500)
          }
        }
      }, this.pageobj), this.updateNoteLocal("set", t.express_company + (t.order_no || t.deliver_no)), this.appobj.updateAppData({
        isreload: !1
      }, "exp_result")
    },
    updateNoteLocal: function (e, t, a) {
      var o = this.serve.wxapi,
        s = o.dataStorage("get", "localNote")
        .data || {},
        r = s[t] || "";
      if ("get" == e) return r;
      "set" == e ? !this.express_company && this.onSetData({
        "options.note": r
      }) : ("modify" == e ? s[t] = a : "del" == e ? delete s[t] : "rekey" == e && s[t] && (s[a] = s[t], delete s[t]), o.dataStorage("set", "localNote", s))
    },
    topDataLocal: function (e) {
      var t = this.topData,
        a = this.serve.wxapi;
      if ("get" == e) return t = a.dataStorage("get", "topData", !0), t = t.data, t.array = t.array || [], t.list = t.list || [], t.check = t.check || {}, this.topData = t, t;
      "set" == e && a.dataStorage("set", "topData", t)
    },
    updateTopData: function (e) {
      var t = this.topDataLocal("get"),
        a = this.data.options,
        o = a.order_no || a.deliver_no,
        s = this.serve.tools.inArray(o, t.array, !0);
      s >= 0 && t.list[s] && e.note && (t.list[s].note = e.note), this.topData = t, this.topDataLocal("set")
    },
    onDialogEvent: function (e) {
      var t = e.currentTarget.dataset,
        a = (this.serve.wxapi, this.appobj),
        o = this,
        s = this.serve.tools,
        r = this.data.options,
        i = o.data.loginRes && 0 == o.data.loginRes.code;
      t.order_no = r.order_no, this.serve.dialog.alertDialog(this.pageobj, {
        title: "添加备注",
        zindex: 5,
        size: {
          w: "70%"
        },
        dialogname: "d_remark",
        tmpdata: t,
        tmpname: t.tmpname,
        cb: function (e, t, n, d) {
          if ("sure" == e) {
            if (!i) {
              if (!t.note) return s.alertMsg(o, {
                msg: "备注信息不能为空"
              }), !1;
              o.onSetData({
                "options.note": t.note
              }), o.updateNoteLocal("modify", r.express_company + (r.order_no || r.deliver_no), t.note)
            }
          } else "submit" === e && 0 === t.code && (o.onSetData({
            "options.note": n.note
          }), a.updateAppData({
            isreload: !0
          }, "q_express"), o.updateNoteLocal("modify", r.express_company + (r.order_no || r.deliver_no), n.note), o.updateTopData({
            note: n.note
          }))
        }
      }, {
        url: i ? "/v1/record/memoEdit" : "",
        ischecklogin: !0,
        loginconfig: {
          isjump: !0
        },
        reqFilter: function (e) {
          return e.info = e.deliverCode + "-" + e.deliverNo + "-remark-" + encodeURIComponent(e.note) + "-end-", e
        },
        formlist: {
          note: {
            required: !0,
            tag: "备注信息"
          }
        }
      })
    },
    onComment: function (e) {
      var t = this.data.request && this.data.request.query || {};
      this.serve.tools.jumpTo({
        url: "exp_comment",
        options: {
          express_company: t.express_company,
          deliver_no: t.deliver_no
        }
      })
    },
    onTapBrand: function (e) {
      var t = e.currentTarget.dataset,
        a = this.data.options,
        o = this.data.response,
        s = this.serve.tools;
      return !t.oid && ("signed" == t.status ? (s.alertMsg(this.pageobj, {
        msg: "快件已签收，无法切换品牌"
      }), !1) : a.from_channel ? (s.alertMsg(this.pageobj, {
        msg: "电商品牌无法切换"
      }), !1) : void(o && o.query && "loading" !== o.query.apistatus && (this.express_company = a.express_company, this.serve.tools.jumpTo({
        url: "brand",
        options: {
          deliver_no: t.deliver_no
        }
      }))))
    },
    onToSign: function (e) {
      function t() {
        var e, t, n, d, u, l = {};
        "sign" == o ? (d = !1, e = "“扫码签收”会自动收藏派件员，方便后续联系该快递员下单或享受其他优质服务", t = "/v1/ScanCode/scanCodeForSign", n = "确认签收", u = "确定", l = {
          phone: p,
          waybill_no: s.deliver_no,
          waybill_type: 3,
          signed_type: i
        }) : "pickup" == o && (e = "", t = "/v1/dak/Packages/takePackage", n = "请选择与收件人关系", u = "确认包裹完好并签收", l = {
          waybillNo: s.deliver_no,
          operate: "pickup",
          brand: s.express_company
        }, d = !0, r.getUserInfo(function (e, t) {
          "success" == e && (l.nickName = t.user.userInfo.nickName)
        })), a.serve.dialog.alertDialog(a.pageobj, {
          title: n,
          classname: "dialog-" + o,
          zindex: 5,
          size: {
            w: "70%"
          },
          msg: e,
          msgclass: "color-black",
          dialogname: "d_sign",
          tmpname: "pickup",
          isUseTmpdata: d,
          tmpdata: {
            signer: "本人"
          },
          button: [{
            name: "取消",
            action: "cancel",
            classname: "border-r"
          }, {
            name: u,
            action: "submit"
          }],
          cb: function (e, t, i) {
            "submit" == e && 0 == t.code ? (a.isreload = !0, r.updateAppData({
              isreload: !0
            }, "vshop_list"), wx.reportAnalytics("pickup_sign_query_result", {
              operate: o,
              waybill_no: s.deliver_no,
              signer: i.signer || "本人签收"
            })) : "switch" == e && this.changeTmpData({
              signer: t.currentTarget.dataset.value
            })
          }
        }, {
          url: t,
          data: l,
          jumpkey: "signed_time",
          jumpconfig: {
            url: "sign_detail",
            options: {
              type: o,
              deliver_no: s.deliver_no
            }
          }
        })
      }
      var a = this,
        o = e.currentTarget.dataset.type,
        s = this.data.options,
        r = this.appobj,
        i = "扫码签收",
        n = this.serve.tools,
        d = this.data.response && this.data.response.query && this.data.response.query.data,
        p = d.deliver && d.deliver.courier_phone || "";
      d.scan_code && d.scan_code.is_scan_code && "sign" == o ? n.jumpTo({
        url: "sign_detail",
        options: {
          type: o,
          deliver_no: s.deliver_no,
          signed_time: d.scan_code.signed_time,
          status: d.GetStatus && d.GetStatus.position ? d.GetStatus.position : "unknow"
        }
      }) : n.loginCheck({
        cb: function (e) {
          e.code > 0 ? a.serve.tools.jumpTo({
            url: "login"
          }) : t()
        }
      })
    },
    getCourierCard: function (e) {
      var t = this,
        a = this.appobj;
      this.serve.api.apiDataRequest({
        dataname: "courier",
        isset: !1,
        istoast: !1,
        url: "/v1/WeApp/details",
        data: {
          type: "courier",
          phone: e
        },
        onSuccess: function (e) {
          0 == e.code && e.data && (t.onSetData({
            "response.query.data.scan_code.is_focused": e.data.is_focused,
            "response.query.data.deliver.deliver_shop_name": e.data.account_shop,
            "response.query.data.deliver.courier": e.data.account_name
          }), a.updateAppData({
            isreload: !0
          }, "vshop_list"))
        }
      })
    },
    onQueryPackage: function (e) {
      var t = this;
      this.serve.api.apiDataRequest({
        dataname: "dak",
        isset: !1,
        istoast: !1,
        url: "/v1/dak/Packages/getFlows",
        data: {
          waybillNo: e.deliver_no,
          brand: e.express_company
        },
        onSuccess: function (e) {
          0 == e.code && e.data ? t.onPushDakLogistics(e.data) : t.onSetData({
            dakStatus: ""
          })
        }
      })
    },
    onPushDakLogistics: function (e) {
      var t, a, o, s = this.data.response && this.data.response.query && this.data.response.query.data && this.data.response.query.data.GetWuliu_phone || [],
        r = e.information || [],
        i = /(\[?[^\[\]]+\]?)/g,
        n = /\[(.+)\]/,
        d = e.status;
      r.map(function (e, r) {
        o = tools.dateFilter(e.time, !0), (a = e.msg.match(i)) && (a = a.map(function (e) {
          return (t = e.match(n)) ? {
            value: t[1],
            isCall: tools.regularlist.contact.rule.test(t[1])
          } : e
        })), s.unshift({
          ymd: o[0],
          time: o[1],
          info: a ? {
            arr: a
          } : e.msg,
          index: s.length
        })
      }), this.onSetData({
        dakStatus: d,
        "response.query.data.GetWuliu_phone": s
      })
    },
    onToCourier: function (e) {
      this.serve.tools.jumpTo({
        url: "vs_detail",
        options: {
          courier_phone: e.currentTarget.dataset.phone
        }
      })
    },
    getOrderDetail: function () {
      var e, t = {},
        a = this.data.options,
        o = this;
      a.order_no ? (e = "/v1/WeApp/getSharedOrder", t.order_number = a.order_no) : (e = "/v1/order/getOrderByWaybill", t.brand = a.express_company, t.waybill_no = a.deliver_no), this.serve.api.apiDataRequest({
        istoast: !1,
        isalert: !1,
        dataname: "waybill_info",
        url: e,
        resFilter: function (e, t) {
          if (0 == e.code && e.data && a.order_no) return {
            code: 0,
            data: {
              user_id: e.data.user_id,
              shipper_city: e.data.send_address_city,
              shipper_name: e.data.send_user,
              shipping_city: e.data.receive_address_city,
              shipping_name: e.data.receive_user,
              express_number: e.data.express_number,
              id: e.data.order_number
            }
          }
        },
        onComplete: function (e) {
          0 == e.code && e.data && e.data.express_number && (o.onSetData({
            "options.deliver_no": e.data.express_number
          }), o.addWaybillRecord()), o.queryInfo(o.data.options)
        },
        data: t
      })
    },
    onJumpToWaybill: function () {
      var e = this.data.response.waybill_info.data,
        t = this.data.options.order_no || e.id,
        a = this.data.loginRes.data;
      t && this.serve.tools.jumpTo({
        url: "exp_send_detail",
        target: "self",
        options: {
          source: e.user_id && e.user_id != a.user_id ? "share" : "send",
          order_number: t
        }
      })
    },
    onForecast: function () {
      var e = this.data.options;
      this.serve.tools.jumpTo({
        url: "forecast",
        options: {
          express_no: e.deliver_no,
          express_company: e.express_company
        }
      })
    }
  });
});
require("pages/queryExpress/result/result.js");
__wxRoute = 'pages/sendExpress/sendExpress';
__wxRouteBegin = true;
define("pages/sendExpress/sendExpress.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  Page({
    onLoad: function (s) {
      wx.switchTab({
        url: "/pages/vshop/express/express"
      })
    }
  });
});
require("pages/sendExpress/sendExpress.js");
__wxRoute = 'pages/more/more';
__wxRouteBegin = true;
define("pages/more/more.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  var t = Object.assign || function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var a = arguments[e];
      for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (t[s] = a[s])
    }
    return t
  };
  require("../../servejs/pages.js")({
    isAutoLogin: !0,
    isLifeNormal: !0,
    serve: ["api", "wxapi"],
    life: ["shareAppMessage", "show", "jumpTo", "login"],
    data: {
      isCompanyUser: !1,
      messageNum: 0,
      couponNum: 0,
      realnameName: ""
    },
    onShareAppMessage: function () {
      return {
        title: "更多功能",
        desc: "",
        path: "/pages/more/more"
      }
    },
    onLogin: function () {
      this.serve.api.signIn("wx", {
        istologin: !0,
        istoast: !0,
        isback: !1
      }, null, null)
    },
    onLoginCallback: function (t, e) {
      if (0 == t.code) {
        if ("signInBack" === e) return;
        var a = this;
        this.getCouponList(), this.getMessageList(), this.getRealnameStatus(), this.appobj.getWsCompanyInfo(function (t) {
          a.onSetData({
            isCompanyUser: !!t
          })
        })
      } else this.appobj.updateAppData("", "wsCompanyInfo"), this.onSetData({
        messageNum: 0,
        couponNum: 0,
        realnameStatus: "未认证",
        isCompanyUser: !1
      });
      this.serve.tools.getUserPic(this.pageobj)
    },
    onShow: function (t) {
      this.onLoginCallback(t)
    },
    onJumpTo: function (t) {
      this.serve.tools.jumpTo({
        url: t.currentTarget.id,
        options: t.currentTarget.dataset
      })
    },
    getCouponList: function () {
      var t = this;
      this.apiDataRequest({
        url: "/v1/WeApp/getCouponList",
        onSuccess: function (e) {
          if (0 == e.code) {
            var a = e.data.count,
              s = void 0 === a ? 0 : a;
            t.onSetData({
              couponNum: s
            })
          }
        }
      })
    },
    getRealnameStatus: function () {
      var t = this;
      this.appobj.getRealnameStatus(function (e) {
        t.onSetData({
          realnameName: e.name ? e.name.replace(/(.)/g, function (t, e, a, s) {
            return 1 == a ? "*" : t
          }) : "",
          realnameStatus: e.status
        })
      })
    },
    getMessageList: function () {
      var t = 0,
        e = this;
      this.apiDataRequest({
        url: "/v1/inform_user/get_topic_list",
        userkey: "user",
        onSuccess: function (a) {
          if (a && 0 == a.code && a.data.desc) {
            for (var s = a.data.desc, n = s.length, o = 0; o < n; o++) 1 == s[o].nrCount && (a.data.nrCount = 1, t++);
            return e.setData({
              messageNum: t
            }), a
          }
        },
        data: {
          role: "user"
        }
      })
    },
    apiDataRequest: function (e) {
      this.serve.api.apiDataRequest(t({
        url: "",
        data: {},
        istoast: !1,
        ischecklogin: !0,
        isset: !1
      }, e))
    }
  });
});
require("pages/more/more.js");
__wxRoute = 'pages/service/service';
__wxRouteBegin = true;
define("pages/service/service.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../servejs/pages.js")({
    isAutoLogin: !1,
    isLifeNormal: !0,
    serve: ["wxapi", "dialog"],
    life: ["call", "service", "join", "contact"],
    data: {
      qq: "482300347",
      tel: "021-62153711",
      isContact: wx.canIUse && wx.canIUse("button.open-type.contact")
    },
    onCall: function (t) {
      this.serve.wxapi.makePhoneCall({
        phoneNumber: t.currentTarget.dataset.tel
      })
    },
    triggerDialog: function (t) {
      this.serve.dialog.alertDialog(this.pageobj, {
        title: t.title,
        isnoform: !0,
        button: [{
          name: t.button,
          action: "submit"
        }],
        msgclass: "align-center",
        dialogname: "system",
        msg: t.content,
        cb: t.cb
      })
    },
    onService: function () {
      this.data.isContact || this.triggerDialog({
        content: "您的微信版本过低，请您升级您的客户端或使用其他方式联系我们！",
        button: "我知道了"
      })
    },
    onJoin: function (t) {
      var e = this.serve.tools.clipboardDeal,
        i = t.currentTarget.dataset.qq;
      this.triggerDialog({
        title: "添加qq群",
        content: i,
        button: e ? "复制群号" : "我知道了",
        cb: function (t) {
          "sure" == t && e && e({
            tips: {
              success: "已复制"
            },
            isalert: !0,
            data: i
          })
        }
      })
    }
  });
});
require("pages/service/service.js");
__wxRoute = 'pages/personal/personal';
__wxRouteBegin = true;
define("pages/personal/personal.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../servejs/pages.js")({
    isAutoLogin: !0,
    isLifeNormal: !0,
    data: {
      isLogoutShow: !1,
      notice: {
        location: "使用我的地理位置",
        record: "录音功能"
      }
    },
    serve: ["api", "images", "dialog"],
    life: ["modify", "logout", "picCutCallback", "openSetting"],
    onLoad: function (e) {
      var t = this;
      this.choose_ret = this.serve.images.chooseImage({
        picCutType: "personal",
        cb: function (e, a) {
          "submit" == e && 0 == a.code && (t.appobj.updateAppData({
            avatar_ts: t.serve.tools.dateTs()
          }), t.setHearbeat({
            avatar_url: a.data || ""
          }), t.serve.tools.getUserPic(t.pageobj))
        },
        uploadconfig: {
          url: "/v1/WeApp/upload"
        }
      }), this.onSetData({
        isLogoutShow: "more" === e.source
      })
    },
    onOpenSetting: function () {
      this.serve.tools.canIUse("2.0.7") || this.triggerDialog({
        title: "系统提示",
        msg: "您的微信版本过低，请您升级您的客户端！",
        msgclass: "align-center",
        dialogname: "system",
        button: [{
          name: "我知道了",
          action: "submit"
        }]
      })
    },
    triggerDialog: function (e, t) {
      this.serve.dialog.alertDialog(this.pageobj, e, t)
    },
    onPageDataUpdate: function (e, t) {
      var a = t.pic;
      "picCut" == e && this.choose_ret.upload(a)
    },
    onLoginCallback: function (e) {
      0 == e.code && this.serve.tools.getUserPic(this.pageobj)
    },
    onShow: function (e) {
      this.onLoginCallback(e)
    },
    setHearbeat: function (e) {
      this.appobj.updateHeart(e)
    },
    onModify: function (e) {
      var t = this,
        a = e.currentTarget.dataset;
      this.triggerDialog({
        title: "修改昵称",
        size: {
          w: "70%"
        },
        tmpdata: a,
        tmpname: "nickname",
        dialogname: "modify",
        cb: function (e, a, o) {
          "submit" == e && a && 0 == a.code && (t.setHearbeat({
            nickname: o.nickname
          }), t.onSetData({
            "loginRes.data.nickname": o.nickname
          }))
        },
        isset: !1
      }, {
        url: "/v1/user/update",
        dataname: "nickname"
      })
    },
    onLogout: function (e) {
      var t = this;
      this.triggerDialog({
        title: "系统提示",
        isnoform: !0,
        size: {
          w: "70%"
        },
        msgclass: "align-center color-black",
        dialogname: "system",
        msg: ["退出数据无法与服务器同步", "确认退出？"],
        cb: function (e, a, o) {
          "sure" == e && t.serve.api.logout({
            url: "/v1/WeApp/leave"
          }, t.pageobj)
        }
      })
    }
  });
});
require("pages/personal/personal.js");
__wxRoute = 'pages/addressLib/addressLib';
__wxRouteBegin = true;
define("pages/addressLib/addressLib.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
      value: a,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = a, t
  }
  require("../../servejs/pages.js")({
    data: {
      current: "send",
      searchData: {
        send: null,
        collect: null
      },
      addressData: {
        send: {
          list: null,
          page: 1,
          tips: "数据加载中...",
          moreData: {
            type: "more",
            show: !1
          },
          isAll: !1,
          search: null
        },
        collect: {
          list: null,
          page: 1,
          tips: "数据加载中...",
          moreData: {
            type: "more",
            show: !1
          },
          isAll: !1,
          search: null
        }
      }
    },
    isAutoLogin: !0,
    isLifeNormal: !0,
    serve: ["api", "dialog", "wxapi", ["form", "../component/form/form.js"]],
    life: ["editor", "delete", "change", "add", "loaderMore", "switchTab", "clearSearch", "confirm"],
    onLoad: function (e, a) {
      var s = this;
      e.src && this.setData({
        current: e.src
      }), this.setTitle(), this.form_ret = this.serve.form({
        form: {
          words: {}
        },
        cb: function (t, e) {
          "input" != e.evtype || e.formData.words || s.onClearSearch()
        },
        isClean: !1,
        request: {
          reqFilter: function (t) {
            return t.address_type = s.data.current, t
          },
          onSuccess: function (e, a) {
            var r, i = 0 == e.code && e.data || [];
            s.onSetData((r = {}, t(r, "searchData." + a.address_type + ".list", i), t(r, "searchData." + a.address_type + ".msg", 0 == i.length && "无匹配" + ("send" == a.address_type ? "发" : "收") + "件地址信息"), r))
          },
          url: "/v1/user_address/getlist"
        }
      }), this.onLoginCallback(a)
    },
    onConfirm: function (t) {
      this.form_ret.submit()
    },
    setTitle: function () {
      this.serve.wxapi.setTitle({
        title: ("send" == this.data.current ? "发" : "收") + "件人地址"
      })
    },
    onClearSearch: function (e) {
      this.onSetData(t({}, "searchData." + this.data.current, null)), this.isClearReget && (this.getAddressList(), this.isClearReget = !1), e && this.data.form.data.words && this.form_ret.update({
        words: ""
      })
    },
    onSwitchTab: function (t) {
      var e = t.currentTarget.dataset.tab;
      this.onSetData({
        current: e
      }), this.getAddressList("switch"), this.setTitle(), this.onClearSearch(!0)
    },
    onLoginCallback: function (t) {
      0 == t.code && this.getAddressList()
    },
    onLoaderMore: function (e) {
      var a = this,
        s = this.data.current,
        r = this.data.addressData[s];
      r.moreData.show || r.isAll || (this.onSetData(t({}, "addressData." + s + ".moreData.show", !0)), this.getAddressList("more", function () {
        a.onSetData(t({}, "addressData." + s + ".moreData.show", !1))
      }))
    },
    getAddressList: function (e, a) {
      var s = this,
        r = this.data.current,
        i = this.data.addressData[r],
        o = {
          page_per: 20,
          page: "more" == e ? 1 + 1 * i.page : 1
        };
      o.address_type = r, "switch" == e && i.list || this.serve.api.apiDataRequest({
        url: "/v1/user_address/getlist",
        istoast: "more" != e,
        isset: !1,
        data: o,
        onComplete: function (o, d) {
          var n = "more" == e ? i.list : null;
          if (0 == o.code && o.data && o.data.length > 0) n = (n || [])
            .concat(o.data);
          else {
            if ("more" == e) return s.onSetData(t({}, "addressData." + r + ".isAll", !0)), void(a && a());
            r && s.onAdd()
          }
          i.isAll = !1, i.list = n, i.page = d.page, i.tips = "暂无" + ("send" == r ? "发" : "收") + "件人地址", s.onSetData(t({}, "addressData." + r, i)), a && a()
        }
      })
    },
    onEditor: function (t) {
      var e = this.data.current,
        a = this.data.searchData[e],
        s = this.data.addressData[e],
        r = (a ? a.list : s.list)[t.currentTarget.dataset.index];
      this.serve.tools.jumpTo({
        url: "addr_editor",
        options: {
          action: this.data.options.src ? "send_order" : "editor",
          src: r.address_type,
          note: r.note,
          mobile: r.mobile,
          telephone_code: r.telephone_code,
          province: r.address_province,
          city: r.address_city,
          district: r.address_county,
          detail: r.address_detail,
          id: r.id,
          real_name: r.real_name
        }
      })
    },
    onAdd: function () {
      var t = this.data.options.src;
      this.serve.tools.jumpTo({
        url: "addr_editor",
        options: {
          action: this.data.options.src ? "send_order" : "editor",
          src: t || this.data.current
        }
      })
    },
    onChange: function (t) {
      var e, a, s, r = this.data.current,
        i = this.data.searchData[r],
        o = this.data.addressData[r];
      "change" == t.type ? (e = i ? i.list[t.detail.value] : o.list[t.detail.value], a = this.serve.tools.getPage(1), this.data.options.src ? a && a.onPageDataUpdate && (e.telephone_code && (e.mobile = [e.mobile, e.telephone_code].join(" ")), a.onPageDataUpdate("addressSelect", {
        address: e
      }), this.serve.tools.jumpTo()) : this.onEditor({
        type: "tap",
        currentTarget: {
          dataset: {
            index: t.detail.value
          }
        }
      })) : "tap" == t.type && (s = t.currentTarget.dataset, this.onChange({
        type: "change",
        detail: {
          value: s.index
        }
      }))
    },
    openDialog: function (t) {
      this.serve.dialog.alertDialog(this.pageobj, {
        title: "系统提示",
        size: {
          w: "70%"
        },
        msgclass: "align-center",
        dialogname: "system",
        msg: "是否确定删除？",
        cb: function (e, a, s) {
          "sure" == e && t && t()
        }
      })
    },
    onPageDataUpdate: function (t, e) {
      var a = this;
      "addressEditor" == t && this.form_ret.submit(function (t) {
        t.code > 0 ? a.getAddressList() : a.isClearReget = !0
      })
    },
    onDelete: function (t) {
      var e = this;
      this.openDialog(function () {
        e.serve.api.apiDataRequest({
          url: "/v1/user_address/delete",
          isset: !1,
          data: {
            id: t.currentTarget.dataset.id
          },
          toast: {
            loading: "正在删除...",
            success: "已删除"
          },
          onSuccess: function (t, a) {
            0 == t.code && e.form_ret.submit(function (t) {
              t.code > 0 ? e.getAddressList() : e.isClearReget = !0
            })
          }
        })
      })
    }
  });
});
require("pages/addressLib/addressLib.js");
__wxRoute = 'pages/addressLib/editor/editor';
__wxRouteBegin = true;
define("pages/addressLib/editor/editor.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
    t = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = arguments[t];
        for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a])
      }
      return e
    };
  require("../../../servejs/pages.js")(t({
    isAutoLogin: !0,
    isLifeNormal: !0,
    serve: ["api", "dialog", "wxapi", "map", ["form", "../component/form/form.js"],
      ["regular", "../component/form/regular.js"], "images", ["address", "../component/address/address.js"]
    ],
    life: ["jumpTo", "switch"],
    data: {
      isSave: !0,
      isSaveSwitchBarShow: !1
    },
    reqFilter: function (e) {
      var t = this.data.options,
        i = t.id,
        a = void 0 === i ? "" : i,
        r = t.src,
        o = void 0 === r ? "send" : r;
      return {
        id: a,
        address_type: e.address_type || o,
        real_name: e.editor_name,
        mobile: e.editor_mobile,
        address_province: e.editor_province,
        address_city: e.editor_city,
        address_county: e.editor_district,
        address_detail: e.editor_address
      }
    },
    onLoad: function (t) {
      var i = this,
        a = this.serve.tools,
        r = "send_order" == t.action ? 2 : 1,
        o = a.getPage(r) || {},
        s = t.id,
        d = void 0 === s ? "" : s,
        n = (t.src, t.telephone_code);
      n && (t.mobile = t.mobile + " " + n), this.formRet = this.serve.form({
        request: {
          reqFilter: function (e) {
            return i.reqFilter(e)
          },
          url: d ? "/v1/user_address/update" : "/v1/user_address/add"
        },
        isClearAll: !0,
        onSuccess: function (t, s) {
          var d = i.data.isSave;
          0 == t.code && a.alertMsg(i, {
            mask: !0,
            msg: t.msg
          }, function (i) {
            "hide" == i && (!s.id && d && "object" != e(t.data) && (s.id = t.data), o.onPageDataUpdate && o.onPageDataUpdate("addressEditor", {
              address: d ? s : t.data,
              isSave: d
            }), a.jumpTo({
              delta: r
            }))
          })
        },
        onBeforeSend: function (e) {
          var t = i.data.isSave;
          return e = i.reqFilter(e), {
            code: t ? 0 : 1,
            data: {
              code: 0,
              data: e
            }
          }
        },
        form: {
          editor_name: {
            value: t.real_name
          },
          editor_mobile: {
            value: t.mobile
          },
          editor_address: {
            value: t.detail
          },
          editor_province: {
            value: t.province
          },
          editor_city: {
            value: t.city
          },
          editor_district: {
            value: t.district
          }
        }
      }), this.bindLocation(t), this.setData({
        isSaveSwitchBarShow: "editor" != t.action && !t.id,
        navTitle: t.src ? "collect" == t.src ? "收件人地址" : "发件人地址" : "常用地址"
      }), this.serve.wxapi.setTitle({
        title: "completion" == t.action ? "完善地址" : this.data.navTitle
      }), this.address_ret = this.serve.address.editor([{
        key: "editor",
        status: 1,
        isLocation: !0
      }])
    },
    onShow: function () {
      var e = this.data.options;
      e.id || "completion" == e.action || this.getClipboardData()
    },
    alertDialog: function (e, t) {
      return this.serve.dialog.alertDialog(this.pageobj, e, t)
    },
    apiDataRequest: function (e) {
      var t = this.serve.tools.extendJson(!0, {}, {
        url: "",
        data: {},
        ischecklogin: !0,
        isset: !1
      }, e);
      this.serve.api.apiDataRequest(t)
    },
    onJumpTo: function (e) {
      this.serve.tools.jumpTo({
        url: e.currentTarget.id,
        options: e.currentTarget.dataset
      })
    },
    bindLocation: function (e) {
      var t, i = this,
        a = !e.province && "collect" != e.src;
      this.serve.map.location(this.pageobj, {
        onSuccess: function (e, a) {
          if (0 == e.code && e.data) {
            if (t = i.data.form.data || {}, "init" == a.status && (t.editor_province || t.editor_address)) return;
            i.formRet.update({
              editor_province: e.data.province,
              editor_city: e.data.city,
              editor_district: e.data.district,
              editor_address: e.data.detail
            })
          }
        }
      }, a)
    },
    onSwitch: function (e) {
      this.setData({
        isSave: !this.data.isSave
      })
    },
    onPageDataUpdate: function (e, t) {
      var i = t.data,
        a = t.kind,
        r = {};
      if ("addressParse" == e) {
        for (var o in i) r[a + "_" + o] = i[o];
        this.formRet.update(r), this.address_ret.switchStatus({
          kind: a,
          status: 1
        })
      } else if ("addressSelect" == e) {
        var s = t.address,
          d = s.address_province,
          n = s.address_city,
          c = s.address_county,
          l = s.address_detail,
          u = s.real_name,
          p = s.mobile;
        this.formRet.update({
          editor_name: u,
          editor_mobile: p,
          editor_province: d,
          editor_city: n,
          editor_district: c,
          editor_address: l
        })
      } else "areaSelect" == e && this.formRet.update({
        editor_province: i.province,
        editor_city: i.city,
        editor_district: i.district
      })
    },
    toolbars: [{
      action: "sure",
      name: "确认"
    }]
  }, require("../../../component/clipboard/clipboard.js")));
});
require("pages/addressLib/editor/editor.js");
__wxRoute = 'pages/sendRecord/sendRecord';
__wxRouteBegin = true;
define("pages/sendRecord/sendRecord.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
      value: a,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = a, e
  }
  require("../../servejs/pages.js")({
    isAutoLogin: !0,
    isLifeNormal: !0,
    life: ["loginCallback", "shareAppMessage", "pageDataUpdate", "share", "recordDeal", "switchOrderList", "reachBottom", "jumpTo", "pageScroll", "pullDownRefresh"],
    serve: ["api", "dialog"],
    data: {
      selector: "order-list-title",
      switchLabHeight: 44,
      sharePics: {},
      current: "send",
      otype: {
        applet: "",
        withhold: "",
        normal: "",
        companyPay: "公司付"
      },
      ostats: require("../../component/config.js")
        .orderStatus,
      recordData: {
        send: {
          list: null,
          isLoading: !0,
          page: 1,
          more: !1,
          isAll: !1
        },
        get: {
          list: null,
          isLoading: !0,
          page: 1,
          more: !1,
          isAll: !1
        }
      }
    },
    switchShare: function () {
      wx.showShareMenu && wx.hideShareMenu && ("send" == this.data.current ? wx.showShareMenu() : wx.hideShareMenu())
    },
    onLoad: function (e, t) {
      this.onLoginCallback(t), this.appobj.getBrandInfo(this.pageobj), this.setTopHeight()
    },
    setTopHeight: function () {
      var e = this;
      this.serve.tools.getSelectorInfo({
        selector: ".switch-model",
        sname: "select"
      }, function (t) {
        e.onSetData({
          switchLabHeight: t[0].height
        })
      })
    },
    onShow: function (e) {
      if (!this.isFirstLoad) {
        var t = this.appobj.getAppData("isReGetReCord"),
          a = this.appobj.getAppData("isReGetShareReCord");
        t || a ? this.getRecord(t ? "send" : "get") : this.getTemporary()
      }
      e.code > 0 && this.onSetData({
        "recordData.send.list": null,
        "recordData.get.list": null
      })
    },
    onLoginCallback: function (t) {
      0 == t.code ? this.getRecord() : this.setData(e({}, "recordData." + this.data.current + ".isLoading", !1)), this.switchShare()
    },
    hidePart: function (e, t) {
      return e = e.toString(), "phone" == t ? e.replace(/(\d{3})(\d{4})(\d{4})/, "$1****$3") : e.substring(0, 1) + "*"
    },
    onSwitchOrderList: function (e) {
      this.getRecord(e.currentTarget.dataset.current, "switch"), this.switchShare()
    },
    onPageScroll: function (t) {
      var a, r, s = this,
        o = [],
        i = this.data,
        n = i.recordData,
        d = i.current,
        c = i.switchLabHeight,
        l = i.selector;
      this.serve.tools.getSelectorInfo({
        selector: "." + l
      }, function (t) {
        o = t[0].filter(function (e) {
          return (e.top < 0 || e.dataset.index > 0) && e.top - c - e.height <= 0
        }), a = o.length > 0 ? o[o.length - 1].dataset.index : -1, r = n && n[d].current, a != r && s.onSetData(e({}, "recordData." + d + ".current", a))
      })
    },
    onPullDownRefresh: function () {
      var e = this,
        t = this.data.current,
        a = function (a) {
          e.onSetData("recordData." + t + ".refresh", a)
        };
      this.data.recordData[t].refresh || (a(!0), this.getRecord(t, "refresh", function () {
        wx.stopPullDownRefresh(), a(!1)
      }))
    },
    onReachBottom: function () {
      var e = this.data.current,
        t = this.data.recordData[e];
      t.more || t.isAll || (this.onSetData("recordData." + e + ".more", !0), this.getRecord(e, "more"))
    },
    getTemporary: function (t) {
      var a = this,
        r = this.appobj,
        s = this.data.temporaryLoaded,
        o = r.getAppData("isReGetTemporary"),
        i = this.data.recordData.send.list || [],
        n = i[0] && "待提交" == i[0].date;
      s && !o && "refresh" != t || this.apiDataRequest({
        istoast: !1,
        url: "/v1/WeApp/getByOrderReadyList",
        onComplete: function (t) {
          0 == t.code && t.data && t.data.length > 0 ? n ? i[0].list = t.data : i.unshift({
            date: "待提交",
            list: t.data
          }) : n && i.shift(), a.onSetData(e({
            temporaryLoaded: !0
          }, "recordData.send.list", i)), r.updateAppData(!1, "isReGetTemporary")
        }
      })
    },
    getRecord: function (e, t, a) {
      var r, s, o, i = this,
        n = this.serve.tools,
        e = e || this.data.current,
        d = this.data.recordData[e],
        t = t || "init";
      if (i.onSetData({
          current: e
        }), o = "more" == t ? 1 + 1 * d.page : 1, "temporary" == e ? s = "/v1/WeApp/getByOrderReadyList" : "send" == e ? (s = "/v1/order/getlist", r = {
          page_size: 25,
          page_number: o,
          fields: "express_rand"
        }) : (s = "/v1/WeApp/listSharedOrder", r = {
          limit: 25,
          page: o
        }), "more" != t) {
        var c = this.appobj.getAppData("isReGetReCord"),
          l = this.appobj.getAppData("isReGetShareReCord");
        if (d.list && "switch" == t && ("send" == e && !c || "get" == e && !l)) return;
        i.onSetData("recordData." + e + ".isAll", !1)
      }
      this.apiDataRequest({
        url: s,
        istoast: !1,
        data: r,
        onComplete: function (r, s) {
          var c, l, h = {},
            p = [],
            u = {
              list: null,
              page: 1,
              page_count: 1
            };
          0 == r.code && r.data && ("send" == e ? (u.page = s.page_number, p = r.data) : (p = r.data.lists, u.page = r.data.page)), h["recordData." + e + ".isLoading"] = !1, h["recordData." + e + ".more"] = !1, p && p.length > 0 ? (u.list = "more" == t ? d.list : d.list && d.list[0] && "待提交" == d.list[0].date ? [d.list[0]] : [], p.map(function (e) {
            n.isEmpty(e) || (l = e.create_time = n.dateFilter(e.create_time, !0)[0], "已取件" == e.order_state_cname && (e.order_state_cname = "已完成"), (c = n.inArray({
              date: l
            }, u.list, !0)) >= 0 ? u.list[c].list.push(e) : u.list.push({
              date: l,
              list: [e]
            }))
          }), h["recordData." + e + ".list"] = u.list, h["recordData." + e + ".page"] = u.page, ("get" == e && u.page >= u.page_count || 1 == o && p.length < 25) && (h["recordData." + e + ".isAll"] = !0)) : ("more" != t && (h["recordData." + e + ".list"] = null), h["recordData." + e + ".isAll"] = "more" == t), i.onSetData(h), "send" == e && "more" != t && i.getTemporary(t), a && a(r)
        }
      }), this.appobj.updateAppData(!1, "send" == e ? "isReGetReCord" : "isReGetShareReCord")
    },
    onShareAppMessage: function (e) {
      var t, a, r, s = this.getCurrentRecordData(e.target.dataset);
      return s.order_number ? (a = "分享给你的快递", t = s.src || "http://img.kuaidihelp.com/wxapp/share/wkd-order.png", r = "/pages/queryExpress/result/result?deliver_no=" + s.express_number + "&order_no=" + s.order_number + "&express_company=" + s.express_rand) : (a = "我给你寄了包裹，快来填写你的地址吧~", t = "https://img.kuaidihelp.com/wxapp/share/wkd-temporary.png", r = "/pages/vshop/temporary/temporary?order_id=" + s.order_id), {
        title: a,
        path: r + "&source=share",
        imageUrl: t
      }
    },
    onShare: function (e) {
      wx.canIUse && wx.canIUse("button.open-type.share") || this.serve.tools.alertMsg(this, {
        msg: "您的微信版本过低，请升级后重试"
      })
    },
    systemDialog: function (e, t) {
      var a = this;
      this.serve.dialog.alertDialog(a.pageobj, {
        title: "系统提示",
        size: {
          w: "70%"
        },
        isnoform: !0,
        msgclass: "align-center color-black",
        dialogname: "system",
        msg: ["是否确认" + e + "订单？"],
        cb: function (e, a, r) {
          "sure" == e && t && t()
        }
      })
    },
    onRecordDeal: function (e) {
      var t = this,
        a = this.getCurrentRecordData(e.currentTarget.dataset),
        r = "删除",
        s = a.order_number,
        o = a.order_id,
        i = a.order_state,
        n = "temporary" == i,
        d = this.data.current,
        c = "/v1/order/del",
        l = {
          delids: s,
          user_role: 1
        };
      n ? (c = "/v1/WeApp/orderCancel", r = "取消", l = {
        order_id: o
      }) : "get" == d ? (c = "/v1/WeApp/delSharedOrder", l = {
        order_number: s
      }) : this.data.ostats[i].iscancel && (c = "/v1/order/cancel", l = {
        order_number: s
      }, r = "取消"), this.systemDialog(r, function () {
        t.apiDataRequest({
          url: c,
          data: l,
          toast: {
            loading: "正在" + r + "...",
            success: "已" + r
          },
          onSuccess: function (e, a) {
            0 == e.code && (n ? t.getTemporary("refresh") : t.getRecord())
          }
        })
      })
    },
    onJumpTo: function (e) {
      var t = e.currentTarget.dataset,
        a = t.action,
        r = void 0,
        s = this.getCurrentRecordData(t),
        o = s.order_number;
      o ? r = this.data.current : (r = "temporary", o = s.order_id), this.serve.tools.jumpTo({
        url: "exp_send_detail",
        options: {
          action: a,
          source: r,
          order_number: o
        }
      })
    },
    getCurrentRecordData: function (e) {
      var t = e.pi,
        a = e.ci;
      return this.data.recordData[this.data.current].list[t].list[a]
    },
    apiDataRequest: function (e) {
      var e = this.serve.tools.extendJson(!0, {}, {
        url: "",
        data: {},
        ischecklogin: !0,
        isset: !1
      }, e);
      this.serve.api.apiDataRequest(e)
    }
  });
});
require("pages/sendRecord/sendRecord.js");
__wxRoute = 'pages/sendRecord/voucher/voucher';
__wxRouteBegin = true;
define("pages/sendRecord/voucher/voucher.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../../servejs/pages.js")({
    life: ["saveImage"],
    isLifeNormal: !0,
    optionsParse: function (e) {
      return e.pic && (e.pic = "https://upload.kuaidihelp.com" + e.pic), e
    },
    onSaveImage: function (e) {
      function t() {
        wx.saveImageToPhotosAlbum({
          filePath: o,
          success: function (e) {
            a.apiToast({
              title: "已保存到系统相册",
              icon: "success"
            })
          },
          fail: function (e) {
            e.errMsg.indexOf("auth deny") >= 0 ? wx.openSetting({
              success: function (e) {
                e.authSetting["scope.writePhotosAlbum"] ? t() : i()
              },
              fail: function () {
                i()
              }
            }) : i()
          }
        })
      }

      function i(e) {
        a.apiToast({
          title: "保存失败，请长按图片保存",
          icon: "error",
          cb: function (e) {
            "hide" == e && n.onSaveImage()
          }
        })
      }
      var o, s = this.options.pic,
        n = this,
        a = this.serve.tools;
      e && "preview" != e.currentTarget.dataset.action && wx.saveImageToPhotosAlbum ? (a.apiToast({
        title: "请稍后...",
        icon: "loading"
      }), wx.downloadFile({
        url: s,
        success: function (e) {
          e && 200 == e.statusCode && e.tempFilePath && (o = e.tempFilePath, t())
        },
        fail: function () {
          i()
        }
      })) : wx.previewImage({
        current: s,
        urls: [s]
      })
    }
  });
});
require("pages/sendRecord/voucher/voucher.js");
__wxRoute = 'pages/sendRecord/detail/detail';
__wxRouteBegin = true;
define("pages/sendRecord/detail/detail.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
      value: a,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = a, e
  }
  require("../../../servejs/pages.js")({
    data: {
      couponId: "",
      couponNum: 0,
      couponMoney: 0,
      serveMoney: 0,
      errorTips: "订单不存在",
      isShowTips: !0,
      isLoading: !0,
      desc: "已线下支付",
      imagesList: [],
      isCardShow: !1,
      ostats: require("../../../component/config.js")
        .orderStatus,
      advert: {
        image: "https://img.kuaidihelp.com/wxapp/ad/ad-dmhb.jpg",
        path: "pages/index/index?appkey=ca688e8fa80c2062e91d3b03f9506963&adSpaceKey=abbfb7fa3818683fd2caae6cde8e6ee6",
        appId: "wxe5d6fb5f83c474d4"
      }
    },
    isAutoLogin: !0,
    isLifeNormal: !0,
    serve: ["api", "images", "dialog", "wxapi", ["draw", "../component/draw/draw.js"]],
    life: ["scan", "jumpTo", "loginCallback", "pageDataUpdate", "call", "hideTips", "share", "shareAppMessage", "systemTips", "refund", "hurryup", "radioChange", "dialog", "cancel", "delete", "showPayDetail", "checkPhone", "switchCard", "pullDownRefresh", "copy", "pay", "advert"],
    onPullDownRefresh: function () {
      this.getOrderDetail({
        cb: function () {
          wx.stopPullDownRefresh()
        }
      })
    },
    onLoad: function (e, t) {
      var a = this;
      this.onLoginCallback(t);
      var r = this.appobj,
        i = this.pageobj,
        o = this.serve,
        n = o.tools,
        s = o.images,
        d = o.draw,
        p = o.wxapi,
        c = o.dialog;
      s.imagesLib({
        getImgArr: function (e) {
          return e.data.imagesList
        },
        urlpath: "http://upload.kuaidihelp.com/graborder/"
      }), this.checkPhone_ret = c.alertDialog(i, {
        title: "验证手机号",
        status: "close",
        ismasktap: !1,
        content: {
          cname: "pa-30 v-code-model",
          template: [{
            key: "tips",
            cname: "color-grey"
          }, {
            node: "view",
            cname: "input-model mt-30",
            child: [{
              focus: !0,
              max: 8,
              type: "number",
              node: "input",
              desc: "请输入验证码",
              name: "code"
            }, {
              node: "button",
              key: "btn"
            }]
          }]
        },
        tmpname: "template",
        cb: function (e, t, r, i) {
          "open" == e ? a.setInterval() : "button_tap" == e ? a.setInterval() : "submit" == e && 0 == t.code && a.getOrderDetail()
        }
      }, {
        url: "/v1/WeApp/clasp",
        reqFilter: function (e) {
          return e.mobile = a.data.orderDetail.receive_user_mobile, e
        },
        formlist: {
          code: {
            tag: "验证码",
            required: !0
          }
        }
      }), this.darw_ret = d({
        template: "order",
        onGetImage: function (e) {
          e && a.onSetData({
            sharePics: e
          })
        }
      });
      var l = "pay" === e.action ? "寄快递-支付" : "订单详情";
      p.setTitle({
        title: l
      }), this.setInitData(), this.onSetData({
        ts: r.getAppData("todayTimer"),
        isCanToMiniProgram: n.canIUse("2.0.7")
      })
    },
    onPay: function (e) {
      var t = this,
        a = this.appobj,
        r = a.getOpenId,
        i = a.updateAppData,
        o = this.serve.tools,
        n = this.data,
        s = n.orderDetail,
        d = n.serveMoney,
        p = n.couponId,
        c = n.couponMoney,
        l = s.order_number,
        u = s.freight;
      (void 0 === u ? 0 : u) + d + c <= 0 || r(function (e) {
        t.apiDataRequest({
          url: "/v1/withhold/PaymentStatus/appletWxSign",
          data: {
            open_id: e,
            order_id: l,
            coupon_id: p
          },
          onComplete: function (e, t) {
            if (0 == e.code && e.data) {
              var a = e.data,
                r = a.timeStamp,
                n = a.nonceStr,
                s = a.signType,
                d = void 0 === s ? "MD5" : s,
                p = a.sign;
              wx.requestPayment({
                timeStamp: r,
                nonceStr: n,
                signType: d,
                paySign: p,
                package: e.data.package,
                success: function () {
                  o.jumpTo({
                    url: "exp_send_result",
                    options: {
                      order_id: l,
                      source: "pay"
                    },
                    target: "self"
                  }), i(!0, "isReGetReCord")
                }
              })
            }
          }
        })
      })
    },
    getCouponList: function (e) {
      var t = this;
      "pay" === this.data.options.action && e && (this.onSetData({
        couponLoading: !0
      }), this.appobj.getCouponList({
        data: {
          order_id: e
        },
        handler: function (e) {
          e.code, e.msg;
          var a = e.data,
            r = void 0 === a ? {} : a,
            i = r.list,
            o = void 0 === i ? [] : i,
            n = r.count,
            s = void 0 === n ? 0 : n;
          t.onSetData({
            couponLoading: !1,
            couponNum: s,
            couponList: o
          })
        }
      }))
    },
    onCopy: function (e) {
      var t = e.currentTarget.dataset.number,
        a = this.serve.tools;
      a.clipboardDeal && t && a.clipboardDeal({
        data: t
      })
    },
    setInitData: function () {
      var e = this.appobj.getSysInfo();
      this.onSetData({
        winHeight: e.windowHeight
      })
    },
    onLoginCallback: function (e) {
      var t = this;
      0 == e.code && this.getOrderDetail({
        cb: function (e) {
          var a = e.data.order_number;
          t.getCouponList(a)
        }
      }), this.switchShare(!1)
    },
    switchShare: function (e) {
      wx.showShareMenu && wx.hideShareMenu && (e ? wx.showShareMenu() : wx.hideShareMenu())
    },
    onCheckPhone: function () {
      var e = this.data.orderDetail.receive_user_mobile,
        t = e.toString()
        .substring(7, 11);
      this.timer = this.timer || 0, this.checkPhone_ret.change("open", {
        content: {
          data: {
            tips: "短信验证码" + (0 == this.timer ? "将" : "已") + "发送至尾号为" + t + "的手机",
            btn: 0 == this.timer ? "发送" : "重新发送(" + this.timer + "s)",
            phone: e
          }
        }
      })
    },
    addSharedOrder: function (e) {
      if (e) {
        var t = this.appobj;
        this.apiDataRequest({
          url: "/v1/WeApp/addSharedOrder",
          data: {
            order_number: e || this.data.orderDetail.order_number
          },
          isset: !1,
          istoast: !1,
          onComplete: function (e) {
            0 == e.code && t.updateAppData(!0, "isReGetShareReCord")
          }
        })
      }
    },
    setInterval: function (e) {
      function t() {
        return e.apply(this, arguments)
      }
      return t.toString = function () {
        return e.toString()
      }, t
    }(function () {
      var e, t = this,
        a = this.data.orderDetail.receive_user_mobile,
        r = a.toString()
        .substring(7, 11);
      this.timer <= 0 && (this.timer = 60, this.apiDataRequest({
        url: "/v1/WeApp/clasp",
        data: {
          mobile: a
        },
        istoast: !1,
        isset: !1,
        onBeforeSend: function () {
          t.checkPhone_ret.updateData("condata", {
            btn: "正在发送...",
            tips: "短信验证码将发送至尾号为" + r + "的手机"
          })
        },
        onSuccess: function (a) {
          0 == a.code && (t.cpInterval && clearInterval(t.cpInterval), t.cpInterval = setInterval(function () {
            t.timer--, t.timer <= 0 ? (e = "重新发送", t.cpInterval && clearInterval(t.cpInterval)) : e = "重新发送(" + t.serve.tools.formatNumber(t.timer) + "s)", t.checkPhone_ret.updateData("condata", {
              tips: "短信验证码已发送至尾号为" + r + "的手机",
              btn: e
            })
          }, 1e3))
        }
      }))
    }),
    getOrderDetail: function () {
      var t = this,
        a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        r = a.order_number,
        i = a.src,
        o = a.cb,
        n = this.appobj,
        s = this.serve,
        d = s.tools,
        p = s.wxapi,
        c = this.data,
        l = c.loginRes,
        u = c.options,
        h = u.action,
        m = void 0 === h ? "normal" : h,
        _ = u.source,
        g = l.data,
        v = void 0,
        f = void 0;
      i && (_ = i), "temporary" == _ ? (v = "/v1/WeApp/getByOrderReadyId", f = "order_id") : (v = "get" == _ || "share" == _ ? "/v1/WeApp/getSharedOrder" : "/v1/order/getinfo", f = "order_number"), this.request = this.apiDataRequest({
        url: v,
        istoast: !1,
        data: e({}, f, r || u.order_number),
        resFilter: function (e) {
          if (0 == e.code && e.data) {
            var t = e.data,
              a = t.create_time,
              r = t.update_time,
              i = t.grab_money,
              o = t.freight,
              n = t.user_id,
              s = t.is_verified;
            e.data.create_time = d.dateFilter(a), e.data.update_time = d.dateFilter(r), e.data.grab_money = 1 * i, e.data.freight = 1 * o, g.user_id != n && (e.data.isReadOnly = !0, p.setTitle({
              title: "订单信息"
            })), e.data.is_verified = void 0 === s || e.data.is_verified
          }
          return e
        },
        onComplete: function (e, a) {
          var r = null;
          if (0 == e.code && e.data) {
            var i = r = e.data,
              s = i.pay_status,
              d = i.order_number,
              p = i.is_verified,
              c = i.isReadOnly,
              l = i.express_rand,
              u = i.counterman_mobile,
              h = i.order_state,
              g = i.send_user,
              v = i.send_user_mobile,
              f = i.send_address_city,
              b = i.receive_user,
              y = i.receive_user_mobile,
              D = i.receive_address_city;
            if (t.switchShare(!c), "temporary" == _) {
              if (d) return void t.getOrderDetail({
                order_number: d,
                src: c ? "get" : "send",
                cb: o
              })
            } else t.getGoodsImages(d), c || t.getServeList(d), t.getRealnameStatus(c && {
              mobile: v
            }), "share" == _ && p && c && t.addSharedOrder(d);
            n.getBrandInfo(function (e) {
              var a = e[l],
                r = "";
              if (a) {
                var i = a.name,
                  o = a.logo_link,
                  n = a.short_name;
                t.darw_ret.draw({
                  send_info: [t.hidePart(g) + "  " + t.hidePart(v, "phone"), f + " *** ***"],
                  get_info: [t.hidePart(b) + "  " + t.hidePart(y, "phone"), D + " *** ***"],
                  brand_name: i,
                  brand_logo: o.replace("http:", "https:")
                }), u || ("dak" == l ? r = "驿站暂不支持上门取件，如有问题请联系驿站！" : "dealed" == h ? r = "已为您分配快递员，请保持手机畅通，等待快递员上门取件" : "wait_deal" == h && (r = "已为您推送至" + (n || "快递") + "官网，请保持手机畅通，等待快递员与您取得联系")), t.onSetData({
                  orderTips: r,
                  brandData: a
                })
              }
            }), "paid" === s && "pay" === m && (m = "normal")
          }
          t.onSetData({
            "options.action": m,
            isLoading: !1,
            errorTips: e.msg,
            orderDetail: r
          }), o && o(e)
        }
      })
    },
    onScan: function (e) {
      var t = this;
      this.appobj.onScan(this.pageobj, "请扫描单号条形码", function (e) {
        if (e.deliver_no) return t.dialog_1_ret.updateData("tmpdata", {
          number: e.deliver_no
        }), !0
      })
    },
    getRealnameStatus: function (e) {},
    hidePart: function (e, t) {
      return e = e ? e.toString() : "", "phone" == t ? e.replace(/(\d{3})(\d{4})(\d{4})/, "$1****$3") : e.substring(0, 1) + "*"
    },
    getServeList: function (e) {
      var t = this;
      if (e) {
        var a = 0;
        this.apiDataRequest({
          istoast: !1,
          url: "/v1/GrabVas/selected",
          data: {
            source: "mina",
            order_id: e
          },
          onSuccess: function (e) {
            var r = [];
            0 == e.code && e.data && (e.data.map(function (e) {
              a = 1 * e.price + a, e.desc = e.desc_short.split("\n")
            }), r = e.data), t.onSetData({
              serveMoney: a,
              serveList: r
            })
          }
        })
      }
    },
    onHideTips: function () {
      this.onSetData({
        isShowTips: !1
      })
    },
    onShare: function (e) {
      wx.canIUse && wx.canIUse("button.open-type.share") || this.serve.tools.alertMsg(this, {
        msg: "请点击右上角分享"
      })
    },
    onShareAppMessage: function () {
      var e = this.data,
        t = e.orderDetail,
        a = e.sharePics,
        r = e.options,
        i = t.order_number,
        o = t.express_rand,
        n = t.express_number,
        s = void 0,
        d = void 0,
        p = void 0;
      return i ? (d = "分享给你的快递", s = a || "http://img.kuaidihelp.com/wxapp/share/wkd-order.png", p = "/pages/queryExpress/result/result?deliver_no=" + (n || "") + "&order_no=" + (i || "") + "&express_company=" + o) : (d = "我给你寄了包裹，快来填写你的地址吧~", s = "https://img.kuaidihelp.com/wxapp/share/wkd-temporary.png", p = "/pages/vshop/temporary/temporary?order_id=" + r.order_number), {
        title: d,
        path: p + "&source=share",
        imageUrl: s
      }
    },
    onJumpTo: function (t) {
      var a, r = t.currentTarget.dataset,
        i = r.url,
        o = this.data.orderDetail,
        n = r.target;
      if (i) {
        if ("exp_result" == i) a = {
          formId: t.detail.formId,
          order_no: o.order_number,
          deliver_no: o.express_number,
          express_company: o.express_rand
        }, n = "self";
        else if ("vs_detail" == i) n = n || "self", a = {
          courier_phone: o.counterman_mobile
        };
        else if ("goods" == i) a = {
          type: "pics",
          order_number: o.order_number,
          pics: this.data.imagesList.join(","),
          action: r.action
        };
        else if ("vs_exp" == i) {
          var s, d = o.send_user_mobile,
            p = o.receive_user_mobile,
            c = o.counterman_mobile ? "courier" : "shop",
            n = "tab";
          o.send_address_telphone && (d = [d, o.send_address_telphone].join(" ")), o.receive_address_telphone && (p = [p, o.receive_address_telphone].join(" ")), e(s = {
            action: "reorder",
            channel: c
          }, c, "shop" == c ? {
            brand: o.express_rand
          } : {
            courier_id: o.counterman_id,
            account_company: o.express_rand,
            account_phone: o.counterman_mobile,
            account_name: o.counterman_name,
            account_shop: o.express_shop_name
          }), e(s, "data", {
            shipper_province: o.send_address_province,
            shipper_city: o.send_address_city,
            shipper_district: o.send_address_county,
            shipper_address: o.send_address_detail,
            shipper_name: o.send_user,
            shipper_mobile: d,
            shipping_province: o.receive_address_province,
            shipping_city: o.receive_address_city,
            shipping_district: o.receive_address_county,
            shipping_address: o.receive_address_detail,
            shipping_name: o.receive_user,
            shipping_mobile: p,
            courier_phone: o.counterman_mobile
          }), a = s
        } else delete(a = r)
          .url, delete a.target;
        this.serve.tools.jumpTo({
          url: i,
          datakey: "vs_exp",
          target: n,
          options: a
        })
      }
    },
    onPageDataUpdate: function (e, t) {
      if ("goodsEditor" === e) this.onSetData({
        imagesList: t.result.pics
      });
      else if ("temporaryComplete" === e) this.getOrderDetail();
      else if ("couponSelect" === e) {
        var a = t.cost,
          r = void 0 === a ? 0 : a,
          i = t.id,
          o = void 0 === i ? "" : i;
        this.onSetData({
          couponMoney: r,
          couponId: o
        })
      }
    },
    onCall: function (e) {
      var t = e.currentTarget.dataset.tel;
      t && wx.makePhoneCall({
        phoneNumber: t
      })
    },
    onSystemTips: function (e, t, a) {
      this.serve.dialog.alertDialog(this.pageobj, {
        title: "提示",
        isnoform: !0,
        zindex: 5,
        msgclass: "align-center color-black",
        size: {
          w: "70%"
        },
        msg: t,
        dialogname: "dialog_2",
        cb: function (e, t, r, i) {
          "submit" == e && 0 == t.code && a && a()
        }
      }, e)
    },
    onRefund: function () {
      var e = this,
        t = this.data.options;
      this.serve.dialog.alertDialog(this.pageobj, {
        title: "退款原因",
        isnoform: !0,
        button: [{
          name: "取消",
          action: "cancel",
          classname: "border-r"
        }, {
          name: "提交",
          action: "submit"
        }],
        zindex: 5,
        size: {
          w: "70%"
        },
        cb: function (a) {
          "sure" == a && e.onSystemTips({
            url: "/v1/withhold/Refund/request",
            isset: !1,
            data: {
              orderId: t.order_number,
              desc: e.data.desc
            },
            dataname: "refund"
          }, ["是否确认退款？", {
            class: "align-left color-grey pl-r-30",
            item: "该订单退款后包裹将不会被寄出请确认"
          }], function () {
            e.appobj.updateAppData({
              isreload: !0,
              order_state: "pickup"
            }, "sendexp_list"), e.onSetData({
              "orderDetail.order_state": "refunded",
              "orderDetail.can_apply_refund": "false",
              "orderDetail.applet.status": 4
            })
          })
        },
        dialogname: "dialog_3",
        tmpname: "refund"
      })
    },
    onHurryup: function () {
      var e = this,
        t = this.data.options;
      this.onSystemTips({
        url: "/v1/GrabOrder/hurry",
        toast: {
          success: "已通知快递员"
        },
        isset: !1,
        dataname: "hurryup",
        data: {
          order_id: t.order_number
        }
      }, "提醒快递员及时取件？", function () {
        e.onSetData({
          "orderDetail.can_hurry": "false"
        })
      })
    },
    getGoodsImages: function (e) {
      var t = this;
      e && this.apiDataRequest({
        url: "/v1/GrabOrder/getUploads",
        istoast: !1,
        dataname: "images",
        data: {
          order_id: e
        },
        onSuccess: function (e) {
          0 == e.code && e.data && (e.data = e.data.map(function (e) {
            return e.replace("http://upload.kuaidihelp.com/graborder/", "")
          }), t.onSetData({
            imagesList: e.data
          }))
        }
      })
    },
    onRadioChange: function (e) {
      this.setData({
        desc: e.detail.value
      })
    },
    onDialog: function (e) {
      var t = this;
      this.dialog_1_ret = this.serve.dialog.alertDialog(this.pageobj, {
        title: "添加单号",
        zindex: 5,
        size: {
          w: "70%"
        },
        tmpdata: {
          order_number: this.data.options.order_number
        },
        isalert: !1,
        dialogname: "dialog_1",
        tmpname: "expressNumber",
        cb: function (e, a, r, i) {
          if ("submit" == e && 0 == a.code) return t.onSetData({
            "orderDetail.express_number": r.waybill_no,
            "orderDetail.order_state": "pickup"
          }), t.appobj.updateAppData({
            isreload: !0
          }, "q_express"), t.appobj.updateAppData({
            isreload: !0,
            order_state: "pickup"
          }, "sendexp_list"), !0
        }
      }, {
        url: "/v1/GrabOrder/setWaybillNo",
        dataname: "addorder",
        resFilter: function (e) {
          return 1306 != e.code && 1e3 != e.code || (e.code = 0), e
        },
        formlist: {
          waybill_no: {
            regname: "waybill_num",
            required: !0,
            tag: "运单号"
          }
        }
      })
    },
    onDelete: function () {
      var e = this,
        t = this.serve.tools,
        a = this.data.orderDetail;
      this.onSystemTips({
        url: "/v1/WeApp/delSharedOrder",
        dataname: "delete",
        isset: !1,
        data: {
          order_number: a.order_number
        }
      }, "是否确定删除订单？", function () {
        e.appobj.updateAppData(!0, "isReGetShareReCord"), t.jumpTo()
      })
    },
    onCancel: function (t) {
      var a, r, i = this,
        o = this.data.orderDetail,
        n = o.applet && o.applet.status > 0 ? ["是否确定取消订单？", {
          class: "align-left color-grey pl-r-30",
          item: "订单取消所预支付快递费将会原路退回支付账户"
        }] : "是否确定取消订单？";
      o.order_number ? (a = "/v1/order/cancel", r = "order_number") : (a = "/v1/WeApp/orderCancel", r = "order_id"), this.onSystemTips({
        url: a,
        dataname: "cancel",
        isset: !1,
        data: e({}, r, o[r])
      }, n, function () {
        i.appobj.updateAppData(!0, "temporary" == o.order_state ? "isReGetTemporary" : "isReGetReCord"), i.onSetData({
          "orderDetail.pay_status": "",
          "orderDetail.order_state": "canceled"
        })
      })
    },
    getBackList: function (e, t) {
      if (4 == e) {
        var a = [],
          r = this.data.orderDetail,
          i = this.serve.tools;
        this.apiDataRequest({
          url: "/v1/withhold/PaymentStatus",
          data: {
            order_id: r.order_number
          },
          onComplete: function (e, o) {
            a = 0 == e.code && i.isArray(e.data) && e.data.length > 0 ? e.data : [{
              content: "退款已离开微快递，已至微信",
              date: r.update_time
            }], t(a)
          }
        })
      } else t()
    },
    onShowPayDetail: function (e) {
      var t = this,
        a = this.serve,
        r = a.tools,
        i = a.dialog,
        o = this.data.orderDetail,
        n = (o.freight, o.need_pay, this.data.orderDetail.applet),
        s = n.status,
        d = void 0 === s ? 0 : s,
        p = n.vas_money,
        c = void 0 === p ? 0 : p,
        l = n.express_fee,
        u = void 0 === l ? 0 : l,
        h = n.coupon_money,
        m = void 0 === h ? 0 : h,
        _ = ["　快递费：￥" + u];
      c > 0 && _.push("增值服务：￥" + c), m > 0 && _.push("　抵用券：-￥" + m), this.getBackList(d, function (e) {
        i.alertDialog(t.pageobj, {
          isnoform: !0,
          title: "金额明细",
          tmpname: "refundDetails",
          tmpdata: e ? {
            list: e,
            money: u,
            serve: t.data.serveList
          } : null,
          button: [{
            name: "知道了",
            action: "cancel"
          }],
          zindex: 5,
          classname: "dialog-refund-details",
          msgclass: "align-left color-black pl-r-30",
          size: {
            w: "70%"
          },
          msg: e ? null : _,
          dialogname: "dialog_2",
          cb: function (e) {
            "jump" == e && r.jumpTo({
              url: "help",
              options: {
                src: "refund"
              }
            })
          }
        })
      })
    },
    onSwitchCard: function () {
      this.onSetData({
        isCardShow: !this.data.isCardShow
      })
    },
    apiDataRequest: function (e) {
      var t = this.serve,
        a = t.tools,
        r = t.api,
        i = a.extendJson(!0, {}, {
          url: "",
          data: {},
          ischecklogin: !0,
          isset: !1
        }, e);
      r.apiDataRequest(i)
    },
    onAdvert: function () {
      var e = this.data.advert,
        t = e.path,
        a = e.appId;
      wx.navigateToMiniProgram && wx.navigateToMiniProgram({
        appId: a,
        path: t
      })
    }
  });
});
require("pages/sendRecord/detail/detail.js");
__wxRoute = 'pages/message/message';
__wxRouteBegin = true;
define("pages/message/message.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../servejs/api.js");
  var a = require("../../servejs/tools.js"),
    t = require("../../servejs/tabui.js"),
    e = getApp();
  Page({
    data: {
      tabui: {
        nav: {
          current: "notice"
        }
      }
    },
    onLoad: function (s) {
      var i = this;
      e.getBrandInfo(this), this.tab = t.tabUi(this, "notice", {
        apiconfig: {
          data: {
            page_num: 1,
            page_size: 20
          }
        },
        issame: !1,
        isauto: !0,
        action: {
          notice: {
            trigger: "load",
            apiconfig: {
              iscache: !0,
              listname: "desc",
              pagename: "page_num",
              moreparam: ["page_num"],
              ispage: !0,
              url: "/v1/inform_user/get_topic_list",
              userkey: "user",
              data: {
                role: "user"
              },
              resFilter: function (t, e) {
                return 0 == t.code && t.data && t.data.desc && (a.isArray(t.data.desc) ? t.data.desc.map(function (t) {
                  t.last_update_time = a.formatDate(1e3 * t.last_update_time)
                }) : (t.data.desc = "", t.msg = "暂无快递员通知")), t
              },
              onSuccess: function (t) {
                0 == t.code && t.data && a.setImagesUrl({
                  tag: t.data.desc,
                  tagkey: "brand"
                }, i)
              },
              onMoreCheck: function (a, t) {
                if (a.data && a.data.page_num == a.data.total_page) return {
                  code: 1
                }
              }
            }
          },
          message: {
            trigger: "load",
            apiconfig: {
              iscache: !0,
              pagename: "p",
              ispage: !0,
              moreparam: ["p"],
              reqFilter: function (a) {
                return a.page_num = a.p, a
              },
              resFilter: function (t) {
                return t && 0 == t.code && t.data && t.data.list ? (t.data.list.map(function (t) {
                  t.post_timestramp = a.formatDate(1e3 * t.post_timestramp)
                }), t.data.pagecount = Math.ceil(t.data.count / 20)) : (t.data.list = "", t.msg = "暂无留言信息"), t
              },
              onSuccess: function (t) {
                0 == t.code && t.data && a.setImagesUrl({
                  tag: t.data.list,
                  tagkey: "brand"
                }, i)
              },
              listname: "list",
              url: "/v1/liuyan/topic_query"
            }
          }
        }
      })
    },
    onJumpTo: function (t) {
      var s, i, n, r, o, d = t.currentTarget.dataset,
        c = d.index;
      "notice" == d.type ? ((s = this.data.response.data_notice.data.desc)[c].nrCount = 0, r = {
        topic_id: (n = s[c])
          .topic_id
      }, o = "n_msg_detail", this.setData({
        "response.data_notice.data.desc": s
      })) : ((i = this.data.response.data_message.data.list)[c].total_unread = 0, n = i[c], r = "", e.updateAppData({
        m_type: n.m_type,
        m_id: n.m_id,
        number: n.waybill_no,
        brand: n.brand,
        mix_content: n.mix_content,
        post_date: n.post_date + " " + n.post_time
      }, "msgdata"), o = "o_msg_detail", this.setData({
        "response.data_message.data.list": i
      })), a.jumpTo({
        url: o,
        options: r
      })
    }
  });
});
require("pages/message/message.js");
__wxRoute = 'pages/message/notice/detail';
__wxRouteBegin = true;
define("pages/message/notice/detail.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  var e = require("../../../servejs/api.js"),
    t = require("../../../servejs/tools.js"),
    a = require("../../../servejs/formui.js"),
    i = getApp();
  Page({
    data: {
      padding_bottom: "160"
    },
    onLoad: function (e) {
      i.getHeartbeat(this), i.getBrandInfo(this), this.fuiRes = a.formUi(this, "init", {
        group: "replay",
        formlist: {
          content: {
            value: "",
            required: !0,
            tag: "回复内容"
          }
        }
      }), this.options = e, this.getDetail(), t.getUserPic(this)
    },
    onLineChange: function (e) {
      e.detail.heightRpx < 60 ? e.detail.heightRpx = 60 : e.detail.heightRpx >= 200 && (e.detail.heightRpx = 200), this.setData({
        padding_bottom: e.detail.heightRpx + 50
      })
    },
    getDetail: function () {
      var a, i, s, o = this.options,
        n = this;
      o.role = "user", e.apiDataRequest({
        url: "/v1/inform_user/get_topic_detail",
        data: o,
        userkey: "user",
        dataname: "notice",
        resFilter: function (e) {
          return e && 0 == e.code && e.data && e.data.desc && e.data.desc.map(function (a) {
            a.speak_time = t.formatDate(1e3 * a.speak_time), "counterman" == a.speaker_role && (a.pic = a.speaker_id ? "http://upload.kuaidihelp.com/touxiang/counterman_" + a.speaker_id + ".jpg" : "http://img.kuaidihelp.com/brand_logo/icon_" + e.data.brand + ".png")
          }), e
        },
        onSuccess: function (e) {
          a = 0 == e.code && e.data && e.data.desc, (i = a && a.length || 0) > 0 && (s && clearTimeout(s), s = setTimeout(function () {
            e.data && n.setData({
              scorllkey: "bubble_" + a[i - 1].message_id
            })
          }, 100))
        }
      }, this)
    },
    onJumpTo: function (e) {
      var a = e.currentTarget.dataset;
      a.dh && a.brand && t.jumpTo({
        url: "exp_result",
        options: {
          deliver_no: a.dh,
          express_company: a.brand
        }
      })
    },
    onFormUi: function (e) {
      var i, s, o, n = this.options,
        r = this,
        d = r.data.response || {};
      n.voice_length = 0, n.content_type = 1, a.formUi(this, e, {
        isset: !1,
        cb: function (e, a, n) {
          "submit" == e && a && 0 == a.code && (i = d.notice && d.notice.data && d.notice.data.desc, s = {
            content: n.content,
            speaker_role: "user",
            message_id: a.data.message_id,
            speak_time: t.formatDate()
          }, i && t.isArray(i) || (i = []), i.push(s), d.notice.data.desc = i, r.setData({
            response: d
          }), o && clearTimeout(o), o = setTimeout(function () {
            r.setData({
              scorllkey: "bubble_" + a.data.message_id
            })
          }, 100), r.fuiRes.clean())
        },
        group: "replay",
        apiconfig: {
          url: "/v1/inform_user/create_topic",
          data: n,
          dataname: "reply",
          isset: !1,
          formlist: {
            content: {
              required: !0,
              tag: "回复内容"
            }
          }
        }
      })
    }
  });
});
require("pages/message/notice/detail.js");
__wxRoute = 'pages/message/other/detail';
__wxRouteBegin = true;
define("pages/message/other/detail.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  var t = require("../../../servejs/api.js"),
    e = require("../../../servejs/tools.js"),
    a = require("../../../servejs/formui.js"),
    s = getApp();
  Page({
    data: {
      padding_bottom: "160"
    },
    onLoad: function (t) {
      s.getBrandInfo(this), s.getHeartbeat(this), e.getUserPic(this);
      var i, o;
      if (t.globalkey ? (i = {
          m_type: "customer",
          brand: (o = s.getAppData(t.globalkey))
            .brand,
          number: o.latest_messages.express_number,
          m_id: o.latest_messages.topic_id,
          msg_addresss: o.latest_messages.msg_address,
          msg_content: o.latest_messages.msg_content,
          msg_mobile: o.latest_messages.msg_mobile,
          shop_name: o.latest_messages.shop_name,
          cm_name: o.latest_messages.cm_name,
          post_date: o.latest_messages.posted_time
        }, s.removeAppData(t.globalkey)) : (i = s.getAppData("msgdata"), s.removeAppData("msgdata")), this.fuiRes = a.formUi(this, "init", {
          group: "replay",
          formlist: {
            content: {
              value: "",
              required: !0,
              tag: "回复内容"
            }
          }
        }), (t = i)
        .post_date && (t.post_date = e.dateFilter(t.post_date)), t.mix_content) {
        var n = /\n/g;
        n.test(t.mix_content) && (t.mix_content = t.mix_content.split(n), t.isarray = !0)
      } else t.msg_content && (t.isarray = !0, t.mix_content = ["接收网点：" + t.shop_name, "接收的快递员：" + t.cm_name, "用户电话：" + t.msg_mobile, "详细地址：" + t.msg_addresss, "留言内容：" + t.msg_content]);
      this.setData({
        options: t
      }), this.getDetail(), s.updateAppData("", "msgdata")
    },
    onLineChange: function (t) {
      t.detail.heightRpx < 60 ? t.detail.heightRpx = 60 : t.detail.heightRpx >= 200 && (t.detail.heightRpx = 200), this.setData({
        padding_bottom: t.detail.heightRpx + 50
      })
    },
    getDetail: function () {
      var a, s, i, o = this.data.options,
        n = this;
      t.apiDataRequest({
        url: "/v1/liuyan/reply_query",
        data: {
          m_type: o.m_type,
          m_id: o.m_id
        },
        dataname: "msg",
        resFilter: function (t) {
          return t && 0 == t.code && t.data && t.data.list && t.data.list.map(function (t) {
            t.post_time = e.dateFilter(t.post_time), "from" == t.t && (t.pic = t.post_id ? "http://upload.kuaidihelp.com/touxiang/counterman_" + t.post_id + ".jpg" : "http://img.kuaidihelp.com/brand_logo/icon_" + o.brand + ".png")
          }), t
        },
        onSuccess: function (t) {
          s = 0 == t.code && t.data && t.data.list, (i = s && s.length || 0) > 0 && (a && clearTimeout(a), a = setTimeout(function () {
            t.data && n.setData({
              scorllkey: "bubble_" + s[i - 1].t + "_" + s[i - 1].post_timestramp
            })
          }, 100))
        }
      }, this)
    },
    onJumpTo: function (t) {
      var a = this.data.options;
      a.number && a.brand && e.jumpTo({
        url: "exp_result",
        options: {
          deliver_no: a.number,
          express_company: a.brand
        }
      })
    },
    onFormUi: function (t) {
      var i, o, n, m = this.data.options,
        p = this,
        r = p.data.response || {},
        d = this.data.HeartBeat;
      a.formUi(this, t, {
        isset: !1,
        cb: function (t, a, m) {
          "submit" == t && a && 0 == a.code && (i = r.msg && r.msg.data && r.msg.data.list, o = {
            content: m.content,
            t: "to",
            post_username: d.nickname,
            post_mobile: d.phone,
            post_id: a.data.post_id,
            post_timestramp: a.data.post_timestramp,
            post_time: e.dateFilter()
          }, i && e.isArray(i) || (desc = []), i.push(o), r.msg.data.list = i, p.setData({
            response: r
          }), s.updateAppData({
            isreload: !0
          }, "vshop_list"), n && clearTimeout(n), n = setTimeout(function () {
            a.data && p.setData({
              scorllkey: "bubble_" + a.data.t + "_" + a.data.post_timestramp
            })
          }, 100), p.fuiRes.clean())
        },
        group: "replay",
        apiconfig: {
          url: "/v1/liuyan/reply_add",
          data: {
            m_type: m.m_type,
            m_id: m.m_id
          },
          isset: !1,
          dataname: "reply",
          formlist: {
            content: {
              required: !0,
              tag: "回复内容"
            }
          }
        }
      })
    }
  });
});
require("pages/message/other/detail.js");
__wxRoute = 'pages/citySet/citys';
__wxRouteBegin = true;
define("pages/citySet/citys.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../servejs/pages.js")({
    isAutoLogin: !1,
    isLifeNormal: !0,
    life: ["reset", "tapIndex", "scroll", "pullDownRefresh"],
    serve: [
      ["form", "../component/form/form.js"], "citys", "map"
    ],
    data: {
      top: 0,
      selector: "city-list-title"
    },
    onPullDownRefresh: function () {
      this.citysRet.refresh(function () {
        wx.stopPullDownRefresh()
      })
    },
    onLoad: function (t) {
      var e = this,
        o = this.serve.citys;
      this.citysRet = o.init(this.pageobj, {
        selected: t,
        kind: t.kind,
        triggerlevel: t.level || "district",
        cb: function (t, o) {
          "init" === t && e.setTopHeight()
        }
      }), this.bindLocation(), this.formInit()
    },
    setTopHeight: function () {
      var t = this;
      this.serve.tools.getSelectorInfo({
        selector: ".top-model",
        sname: "select"
      }, function (e) {
        t.onSetData({
          top: e[0].height
        })
      })
    },
    onScroll: function (t) {
      return
    },
    onReset: function () {
      this.pageobj.onSearch()
    },
    formInit: function (t) {
      var e = this;
      (0, this.serve.form)({
        cb: function (t, o) {
          o.currentData.searchby;
          switch (o.evtype) {
            case "focus":
              e.setData({
                pl: 140
              });
              break;
            case "input":
              e.pageobj.onSearch(o.currentData.searchby)
                .length > 0 && e.onSetData({
                  srollikey: "scrollTop"
                });
              break;
            case "blur":
              e.setData({
                pl: 0
              })
          }
        }
      })
    },
    onTapIndex: function (t) {
      var e;
      e = "#" == t.target.dataset.index ? "scrolltop" : "index_" + t.target.dataset.index, this.setData({
        srollikey: e
      })
    },
    bindLocation: function () {
      this.serve.map.location(this.pageobj, {
        istoast: !1
      })
    }
  });
});
require("pages/citySet/citys.js");
__wxRoute = 'pages/brand/brand';
__wxRouteBegin = true;
define("pages/brand/brand.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../servejs/pages.js")({
    isAutoLogin: !1,
    isLifeNormal: !0,
    life: ["scroll", "tapJump", "tapIndex", "reset"],
    serve: [
      ["form", "../component/form/form.js"]
    ],
    data: {
      selector: "brand-list-title",
      top: 0,
      brandComm: ["sto", "ems", "sf", "yt", "yd", "zt", "dp", "ht", "tt", "qf"],
      ishidden: !0
    },
    onLoad: function (t) {
      this.setData({
        options: t
      }), this.createBrand(), this.formInit(), this.setTopHeight()
    },
    setTopHeight: function () {
      var t = this;
      this.serve.tools.getSelectorInfo({
        selector: ".top-model",
        sname: "select"
      }, function (e) {
        t.onSetData({
          top: e[0].height
        })
      })
    },
    onScroll: function (t) {
      var e, a, r = this,
        o = [],
        n = this.data,
        s = (n.current, n.top),
        i = void 0 === s ? 0 : s,
        c = n.currentKey,
        l = n.selector;
      this.serve.tools.getSelectorInfo({
        selector: "." + l
      }, function (t) {
        o = t[0].filter(function (t) {
          return (t.top < 0 || "use" !== t.dataset.ikey) && t.top - i - t.height <= 0
        }), (e = o.length > 0 ? o[o.length - 1].dataset.ikey : null) != (a = c) && r.onSetData({
          currentKey: e
        })
      })
    },
    createBrand: function (t) {
      var e, a, r = this,
        o = [],
        n = [],
        s = 0,
        i = [],
        c = this.serve.tools;
      t && (t = t.toLocaleLowerCase()), this.appobj.getBrandInfo(function (l) {
        for (l = c.extendJson({}, l), n = c.arrSort(l, "as", "pinyin", function (t) {
            return t.toLocaleLowerCase()
          })
          .arr, s; s < n.length; s++) "zbao" != n[s].brand ? (e = n[s].pinyin.substr(0, 1)
          .toUpperCase(), r.data.brandComm ? c.inArray(n[s].brand, r.data.brandComm) && (a = c.extendJson({}, n[s]), i.push(a)) : i = "", c.inArray(e, o) || t || (o.push(e), n[s].ikey = e)) : n.splice(s, 1);
        i && i.length > 0 && !t && (o.unshift("#"), i[0].ikey = "use", n = i.concat(n)), r.setData({
          cArr: i,
          bArr: n,
          iArr: o
        })
      }, t)
    },
    onTapJump: function (t) {
      var e = this.serve.tools,
        a = this.data.options,
        r = t.currentTarget.dataset.brandkey,
        o = e.getPage(1),
        n = (this.data.bArr || [])[t.currentTarget.dataset.index] || {};
      if (n = e.extendJson(!0, {}, a, n), o && (o.onPageDataUpdate || o.onBrandSelectedCallback)) return o.onPageDataUpdate ? o.onPageDataUpdate("brandSelected", n) : o.onBrandSelectedCallback(n), void e.jumpTo();
      "exp_result" == a.callback ? (a.express_company = r, e.jumpTo({
        target: "self",
        url: "exp_result",
        options: a
      })) : (appobj.updateAppData({
        isreload: !0,
        express_company: r
      }, "exp_result"), e.jumpTo())
    },
    onTapIndex: function (t) {
      this.setData({
        srollikey: "index_" + t.target.dataset.index
      })
    },
    onReset: function (t) {
      this.createBrand()
    },
    formInit: function (t) {
      var e = this;
      (0, this.serve.form)({
        cb: function (t, a) {
          var r = a.currentData.searchby;
          switch (a.evtype) {
            case "focus":
              e.setData({
                pl: 140
              });
              break;
            case "input":
              e.createBrand(r), e.onSetData({
                srollikey: "scrollTop"
              });
              break;
            case "blur":
              e.setData({
                pl: 0
              })
          }
        }
      })
    }
  });
});
require("pages/brand/brand.js");
__wxRoute = 'pages/login/login';
__wxRouteBegin = true;
define("pages/login/login.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../servejs/pages.js")({
    isAutoLogin: !1,
    isLifeNormal: !0,
    serve: ["api", "wxapi", ["form", "../component/form/form.js"]],
    life: ["jumpTo", "switchLogin", "login", "getUserInfo"],
    data: {
      isButtonAuth: wx.canIUse && wx.canIUse("button.open-type.getUserInfo"),
      pic_path: "/images/icon/login_"
    },
    formInit: function (t) {
      var o = this,
        i = this.data.options,
        e = i.mobile,
        n = void 0 === e ? "" : e,
        s = i.passport,
        a = void 0 === s ? "" : s;
      this.currentMobile = n || t, this.formRet = this.serve.form({
        form: {
          user_name: {
            value: this.currentMobile,
            rule: "phone"
          },
          user_pwd: {
            value: a,
            rule: "psw_m"
          }
        },
        cb: function (t, i) {
          "update" === t && (o.currentMobile = i.formData.user_name)
        }
      })
    },
    onLoad: function (t) {
      var o = this.serve.wxapi.dataStorage("get", "login", !0)
        .data;
      this.formInit(o.account), this.switchLogin(t.mobile ? "wkd" : "wx")
    },
    onJumpTo: function (t) {
      var o = t.currentTarget.dataset.source;
      this.serve.tools.jumpTo({
        url: "bindPhone",
        options: {
          source: o,
          mobile: this.currentMobile
        }
      })
    },
    onSwitchLogin: function (t) {
      var o = t.currentTarget.dataset.source;
      o = "wx" == o ? "wkd" : "wx", this.switchLogin(o)
    },
    switchLogin: function (t) {
      var o = this,
        i = {
          source: t
        },
        e = this.data.logininfo;
      if ("wx" == t) {
        if (e && e.wxinfo) return void this.setData({
          "logininfo.source": "wx"
        });
        this.appobj.getUserInfo(function (t, e) {
          "success" == t && (i.wxinfo = e.userInfo), o.setData({
            logininfo: i
          })
        })
      } else "wkd" == t && this.setData({
        logininfo: i
      })
    },
    onLogin: function (t, o) {
      var i = this.serve,
        e = i.api,
        n = i.tools,
        s = i.wxapi,
        a = "string" == typeof t ? t : t.detail.target.dataset.source,
        r = "string" == typeof t ? o : t.detail.value,
        u = this.data.options;
      r = r || {}, e.signIn(a, {
        isback: !u.callback,
        data: r || {}
      }, this.pageobj, this.appobj, function (t, o) {
        0 == t.code && u.callback && n.jumpTo({
          url: u.callback,
          target: "self"
        }), o.user_name && s.dataStorage("set", "login", {
          account: o.user_name
        })
      })
    },
    onFormUi: function (t) {
      form.formUi(this, t)
    },
    onGetUserInfo: function (t) {
      var o = t.detail,
        i = o.userInfo;
      i ? (this.setData({
        "logininfo.wxinfo": i
      }), this.onLogin("wx")) : o.errMsg.indexOf("fail not support") >= 0 && this.onLogin("wx", {
        isGet: !0
      })
    },
    onPageDataUpdate: function (t, o) {
      if ("forget" === t || "register" === t) {
        var i = o.mobile,
          e = o.passport;
        this.formRet.update({
          user_name: i,
          user_pwd: e
        }), this.switchLogin("wkd")
      }
    }
  });
});
require("pages/login/login.js");
__wxRoute = 'pages/register/register';
__wxRouteBegin = true;
define("pages/register/register.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  var e = require("../../servejs/formui.js"),
    t = require("../../servejs/api.js"),
    r = require("../../servejs/tools.js");
  Page({
    onLoad: function (t) {
      this.setData({
        options: t
      }), this.formUi = e.formUi(this, "init", {
        group: "register",
        formlist: {
          account: {
            value: t.account,
            required: !0,
            regname: "phone",
            tag: "手机号"
          },
          verify_code: {
            value: "",
            required: !0,
            regname: "number",
            tag: "验证码"
          },
          psw_1: {
            value: "",
            regname: "psw_m",
            required: !0,
            tag: "密码"
          },
          psw_2: {
            value: "",
            regname: "psw_m",
            required: !0,
            tag: "密码"
          }
        }
      })
    },
    onFormUi: function (t) {
      e.formUi(this, t)
    },
    onGetVerifyCode: function () {
      var e = this,
        r = e.getTrueApi();
      t.apiDataRequest({
        istran: r.istran,
        toast: {
          loading: "正在发送...",
          success: "验证码已发送"
        },
        data: {
          user_name: e.data.form.register.account.value
        },
        customCheck: function (e) {
          var t = 0,
            r = "";
          return e.user_name || (t = 1, r = "请输入手机号"), {
            code: t,
            msg: r
          }
        },
        onSuccess: function (t, r) {
          0 == t.code && e.timerMeter(60)
        },
        url: r.apiurl
      }, this)
    },
    onRegister: function (t) {
      var a = this.getTrueApi(),
        i = getApp(),
        s = this.data.options || {},
        n = s.source;
      e.formUi(this, t, {
        cb: function (e, t, a) {
          "bind" == n && "submit" == e && t && 0 == t.code && (i.updateHeart({
            phone: a.user_name,
            user_name: a.user_name
          }), s.callback && r.jumpTo({
            url: s.callback,
            target: "self"
          }), i.updateAppData(!0, ["vshop_reload", "query_reload", "send_reload"]))
        },
        apiconfig: {
          istran: a.istran,
          toast: {
            loading: "处理中..."
          },
          url: a.apiurl,
          customCheck: function (e) {
            var t = 0,
              r = "";
            return e.passport != e.repassport && (t = 1, r = "两次密码输入不一致"), {
              code: t,
              msg: r
            }
          },
          jumpconfig: {
            url: "",
            options: {
              account: t.detail.value.user_name,
              passport: t.detail.value.passport
            }
          }
        }
      })
    },
    onReady: function () {
      var e, t = this.data.options.source;
      e = "forget" == t ? "忘记密码" : "bind" == t ? "绑定手机号" : "注册", wx.setNavigationBarTitle({
        title: e
      })
    },
    getTrueApi: function () {
      var e, t = this.data.options.source;
      return e = "bind" == t ? "/v1/WeApp/bind" : "forget" == t ? "/v1/user/reset" : "/v1/user/signup", {
        apiurl: e,
        istran: !0
      }
    },
    timerMeter: function (e) {
      this.data.tInterval && clearInterval(this.data.tInterval), this.setData({
        tmeter: e
      }), this.data.tInterval = setInterval(function () {
        if (e--, this.setData({
            tmeter: e
          }), 0 == e) return clearInterval(this.data.tInterval), !1
      }.bind(this), 1e3)
    }
  });
});
require("pages/register/register.js");
__wxRoute = 'pages/complaint/complaint';
__wxRouteBegin = true;
define("pages/complaint/complaint.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  var a = require("../../servejs/api.js"),
    t = require("../../servejs/tools.js"),
    e = getApp();
  Page({
    data: {
      oStatus: [{}, {
        color: "green",
        value: "受理中..."
      }, {
        color: "blue",
        value: "已回复"
      }, {
        color: "grey",
        value: "已完成"
      }]
    },
    onLoad: function (a) {
      e.updateAppData({
        isreload: !1
      }, "com_list"), this.getComplaintList(), e.getBrandInfo(this)
    },
    onShow: function () {
      e.getAppData("com_list", !0)
        .isreload && (this.getComplaintList(), e.updateAppData({
          isreload: !1
        }, "com_list"))
    },
    getComplaintList: function () {
      var e = this;
      a.apiDataRequest({
        url: "/v1/Complaints/queryComplaint",
        dataname: "list",
        data: {
          page_num: 1
        },
        isalert: !1,
        pagesize: 10,
        ispage: !0,
        pagename: "page_num",
        moreparam: ["page_num"],
        resFilter: function (a) {
          return 0 == a.code && a.data && (1 * a.data.total_records ? t.isArray(a.data.data) && a.data.data.map(function (a) {
            a.add_datetime && (a.add_datetime = t.dateFilter(a.add_datetime))
          }) : a.code = 1), a
        },
        onSuccess: function (a) {
          0 == a.code && a.data && 0 < a.data.total_records && t.setImagesUrl({
            tagkey: "express_company",
            tag: a.data.data
          }, e)
        }
      }, this)
    },
    onDetail: function (a) {
      var s = a.currentTarget.dataset.index,
        i = this.data.response.list.data.data;
      e.updateAppData(i[s].tips, "complaint"), i[s].unread && (i[s].unread = !1, i[s].state = 1, this.setData({
        "response.list.data.data": i
      })), t.jumpTo({
        url: "complaint_detail",
        options: {
          express_company: i[s].express_company,
          express_number: i[s].express_number,
          topic_id: i[s].topic_id,
          state: i[s].state,
          source: "list"
        }
      })
    }
  });
});
require("pages/complaint/complaint.js");
__wxRoute = 'pages/complaint/detail/detail';
__wxRouteBegin = true;
define("pages/complaint/detail/detail.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  var t = require("../../../servejs/wxapi.js"),
    e = require("../../../servejs/api.js"),
    a = require("../../../servejs/tools.js"),
    i = require("../../../servejs/record.js"),
    s = require("../../../servejs/audio.js"),
    n = require("../../../servejs/images.js"),
    o = require("../../../servejs/dialog.js"),
    p = getApp();
  Page({
    data: {
      padding_bottom: 255,
      iscan: !1,
      ismic: !1
    },
    onLoad: function (t) {
      var e = this;
      a.getUserPic(this), this.systemPic = "/images/icon/login_wkd.png", this.setData({
        options: t
      }), n.imagesLib({
        imgkey: "msg_content",
        getImgArr: function (t) {
          return t.data.response.detail.data
        }
      }), i.recordLib({
        maxtimer: 20,
        alarmtimer: 10,
        uploadconfig: {
          onSuccess: function (t, a) {
            0 == t.code && t.data && t.data.file_path && e.onSubmit({
              content: t.data.file_path,
              content_type: 3
            })
          }
        }
      }), s.audioLib(), n.chooseImage({
        cb: function (t, a, i, s) {
          "submit" == t && 0 == a.code && a.data && a.data.file_path && e.onSubmit({
            content: a.data.file_path,
            content_type: 2
          }, s.formid)
        },
        uploadconfig: {
          url: "/v1/Complaints/uploadAttachments"
        }
      })
    },
    onShow: function () {
      var t = this.data.options;
      if (t.express_company) {
        var e = a.setImagesUrl({
          tag: t.express_company
        }, this);
        p.getBrandInfo(this, t.express_company), this.brandPic = e["picdata.img_" + t.express_company].url
      }
      if (t.topic_id) {
        var i = p.getAppData("complaint");
        i && this.setTips(i), this.openComplaint(t), 3 == t.state ? this.setData({
          iscan: !1
        }) : this.setData({
          iscan: !0
        })
      } else t.express_company && t.express_number ? this.canComplaint(t) : a.alertMsg(this, {
        msg: "品牌或单号错误"
      })
    },
    onPicError: function (t) {
      var e = {},
        a = t.currentTarget.dataset.tag;
      a && (e["rpic." + a] = !0, this.setData(e))
    },
    openComplaint: function (i) {
      var s, n, o = this;
      this.topic_id = i.topic_id, this.detailRes = e.apiDataRequest({
        url: "/v1/Complaints/openComplaint",
        data: {
          topic_id: i.topic_id,
          get_comment: !0
        },
        listname: "",
        dataname: "detail",
        resFilter: function (e) {
          return 0 == e.code && e.data && a.isArray(e.data) && e.data.map(function (e, i) {
            e.msg_add_datetime = a.dateFilter(e.msg_add_datetime), s = o.parseMsgType(e.msg_content, e.speaker_role), e.msg_content = s.msg_content, e.msg_content_type = void 0 !== e.msg_content_type ? e.msg_content_type : s.msg_content_type, "counterman" == e.speaker_role && e.speaker_role_id ? e.pic = "http://upload.kuaidihelp.com/touxiang/counterman_" + e.speaker_role_id + ".jpg" : "shop" == e.speaker_role ? e.pic = o.brandPic : "system" == e.speaker_role && (t.dataStorage("set", "sysname", e.speaker_name), e.pic = o.systemPic, 0 == e.msg_content_type && (e.msg_add_datetime = "", n = i)), e.unique = i
          }), e
        },
        onSuccess: function (t) {
          0 == t.code && t.data && o.onCheckComment(i.topic_id, t.data.length - 1, n)
        }
      }, this)
    },
    canComplaint: function (i) {
      var s, n = this;
      e.apiDataRequest({
        url: "/v1/Complaints/canComplaints",
        data: {
          company: i.express_company,
          express_no: i.express_number
        },
        isset: !1,
        istoast: !1,
        onSuccess: function (e) {
          0 == e.code && e.data && (n.setTips(e.data.tips), (e.data.phone || 1 * e.data.shop_id) && (n.hasComplaint(i), n.courierInfo = e.data), e.data.topic_tips && (s = t.dataStorage("get", "sysname") || {
            data: "小微"
          }, n.setData({
            systemTips: [{
              msg_add_datetime: a.dateFilter(),
              msg_content: e.data.topic_tips,
              speaker_name: s.data,
              speaker_role: "system",
              pic: n.systemPic,
              unique: "system_0"
            }]
          })))
        }
      }, n)
    },
    hasComplaint: function (t) {
      var a = this;
      e.apiDataRequest({
        url: "/v1/Complaints/hasComplaints",
        data: {
          company: t.express_company,
          express_no: t.express_number
        },
        isset: !1,
        istoast: !1,
        onSuccess: function (t) {
          0 == t.code && t.data && (1 * t.data.topic_id && a.openComplaint(t.data), a.setData({
            iscan: !t.data.is_completed
          }))
        }
      }, this)
    },
    makeComplaint: function (t) {
      var i = this.courierInfo,
        s = this.data.options,
        n = this,
        o = a.extendJson(!0, t, {
          waybill_no: s.express_number,
          brand: i.brand,
          shop_id: i.shop_id,
          phone: i.phone,
          counterman: i.counterman
        });
      e.apiDataRequest({
        url: "/v1/Complaints/makeComplaint",
        data: o,
        isset: !1,
        istoast: !1,
        onSuccess: function (t) {
          0 == t.code && t.data && (n.openComplaint(t.data), n.setData({
            content: ""
          }), n.onNotice(t.data.topic_id))
        },
        formlist: {
          content: {
            required: !0,
            tag: "投诉内容"
          }
        }
      }, this)
    },
    replyComplaint: function (t) {
      var i, s = this;
      e.apiDataRequest({
        url: "/v1/Complaints/replyComplaint",
        data: t,
        isset: !1,
        onSuccess: function (e, n) {
          if (i = a.dateFilter(), 0 == e.code) {
            var o = s.detailRes.datalength();
            s.detailRes.append({
              msg_add_datetime: i,
              msg_content: (2 == n.content_type ? "http://upload.kuaidihelp.com/messages/" : "") + n.content,
              msg_content_type: n.content_type || 1,
              speaker_role: "user",
              unique: o
            }), s.setData({
              content: ""
            }), s.setBubbleId(o, 2 == n.content_type ? 500 : 0), s.onNotice(t.topic_id)
          }
        },
        formlist: {
          content: {
            required: !0,
            tag: "投诉内容"
          }
        }
      }, this)
    },
    onNotice: function (t) {
      var a = this.formid;
      e.notice({
        data: {
          template_title: "complaint",
          form_id: a,
          topic_id: t
        },
        istoast: !1
      }, this)
    },
    onSubmit: function (t, e) {
      var i;
      t.detail ? (i = t.detail.value, this.formid = t.detail.formId) : (i = t, this.formid = e), this.heartBeat = p.getHeartbeat(), this.heartBeat && this.heartBeat.phone ? (i.mobile = this.heartBeat.phone, this.topic_id ? (i.topic_id = this.topic_id, this.replyComplaint(i)) : this.makeComplaint(i)) : a.jumpTo({
        url: "register",
        options: {
          source: "bind"
        }
      })
    },
    onCall: function (t) {
      a.makePhoneCall({
        phoneNumber: t
      })
    },
    onCopy: function (t) {
      a.clipboardDeal && a.clipboardDeal({
        data: t.currentTarget.dataset.info
      }, this)
    },
    onSwitch: function (t) {
      var e = t.target.dataset.type,
        i = t.target.dataset.info;
      e ? "tel" == e ? this.onCall(i) : "url" == e && (a.clipboardDeal ? a.clipboardDeal({
        data: i
      }, this) : a.alertMsg({
        msg: "请使用浏览器进入指定链接"
      })) : a.touchUi(this, t, {
        datakey: "tips"
      })
    },
    onLineChange: function (t) {
      t.detail.heightRpx < 60 ? t.detail.heightRpx = 60 : t.detail.heightRpx >= 200 && (t.detail.heightRpx = 200), this.setData({
        padding_bottom: t.detail.heightRpx + 150
      })
    },
    parseTips: function (t) {
      var e, a, i, s = /(\d{5,20})|(\d{3}-\d{4}-\d{3})|(0\d{2,3}(-|\s?))?[2-9]{1}\d{6,7}((-|\s?)\d{1,4})/,
        n = /https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*/,
        o = new RegExp(s.source + "|" + n.source, "gi"),
        p = t,
        r = p.match(o),
        d = r && r.length || 0;
      return d > 0 ? (a = [], r.map(function (t, o) {
        e = p.indexOf(t), p.substr(0, e) && a.push(p.substr(0, e)), s.test(t) ? i = "tel" : n.test(t) && (i = "url"), a.push({
          type: i,
          info: t
        }), (p = p.substr(e + t.length, p.length)) && 1 + o == d && a.push(p)
      }), {
        data: a,
        isarr: !0
      }) : {
        data: p,
        isarr: !1
      }
    },
    setTips: function (t) {
      var e, a, i = /\n/g,
        s = this;
      t && (t = i.test(t) ? t.split(i) : [t], a = [], t.map(function (t) {
        t && t.length > 1 && ((e = s.parseTips(t))
          .isarr ? a.push({
            info: e.data
          }) : a.push(e.data))
      }), t = a, this.setData({
        tips: t
      }))
    },
    onMicSwitch: function (t) {
      a.touchUi(this, t, {
        datakey: "mic"
      })
    },
    onHideTips: function (t) {
      (!this.data.touchUi || !this.data.touchUi.tips || "even" == this.data.touchUi.tips.flag) && this.setData({
        "touchUi.tips.flag": "odd"
      })
    },
    parseMsgType: function (t) {
      var e, a, i = /^\<photo\>(.*)\<\/photo\>$/i,
        s = /^\<sound\>(.*)\<\/sound\>$/i;
      return s.test(t) ? (e = t.match(s)[1], a = 3) : i.test(t) ? (e = t.match(i)[1], a = 2) : (e = t, a = 1), {
        msg_content: e,
        msg_content_type: a
      }
    },
    setBubbleId: function (t, e) {
      var a = this;
      a.b_timer && clearTimeout(a.b_timer), a.b_timer = setTimeout(function () {
        a.setData({
          bubble_id: "bubble_" + t
        })
      }, e)
    },
    onCheckComment: function (t, a, i) {
      if (void 0 === i) return this.setBubbleId(a, 500), !1;
      var s = this;
      e.apiDataRequest({
        url: "/v1/Complaints/isCommented",
        istoast: !1,
        dataname: "c_check",
        data: {
          topic_id: t
        },
        onSuccess: function (t) {
          if (0 == t.code && t.data && !t.data.is_commented && void 0 !== i) {
            var e = s.data.response && s.data.response.detail && s.data.response.detail.data || [];
            e.push(e[i]), e.splice(i, 1), s.setData({
              "response.detail.data": e
            })
          }
          s.setBubbleId(a, 500)
        }
      })
    },
    onComment: function (t) {
      var a = this.topic_id,
        i = t.currentTarget.dataset,
        s = this;
      if ("yes" == i.disabled) return !1;
      e.apiDataRequest({
        url: "/v1/Complaints/commentComplaints",
        istoast: !0,
        dataname: "c_submit",
        data: {
          comment: i.type,
          topic_id: a
        },
        onSuccess: function (t, e) {
          0 == t.code && ("good" == e.comment && s.setData({
            iscan: !1
          }), s.setData({
            "response.c_check.data.is_commented": !0
          }), p.updateAppData({
            isreload: !0
          }, "com_list"), t.data && s.sysTips(t.data.tips))
        }
      });
      (i = t.currentTarget.dataset)
      .type;
      return !i.disabled && void 0
    },
    sysTips: function (t) {
      o.alertDialog(this, {
        title: "提示",
        zindex: 5,
        msgclass: "align-center color-black",
        size: {
          w: "70%"
        },
        msg: t,
        dialogname: "systips",
        button: [{
          name: "我知道了",
          action: "cancel"
        }]
      })
    }
  });
});
require("pages/complaint/detail/detail.js");
__wxRoute = 'pages/sign/detail/detail';
__wxRouteBegin = true;
define("pages/sign/detail/detail.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../../servejs/api.js");
  var e = require("../../../servejs/tools.js");
  Page({
    data: {
      ad_img: "http://img.kuaidihelp.com/wxapp/ad/ad-complaint.png"
    },
    onLoad: function (i) {
      var t;
      "pickup" == i.type ? (t = "取件", i.signed_type = "驿站签收") : (i.signed_type = "扫码签收", t = "签收"), wx.setNavigationBarTitle({
        title: t + "详情"
      }), i.deliver_no && (i.deliver_no = i.deliver_no.split(",")), i.signed_time = e.dateFilter(i.signed_time || ""), i.typeTips = t + "成功！", this.setData({
        options: i
      })
    }
  });
});
require("pages/sign/detail/detail.js");
__wxRoute = 'pages/goods/goods';
__wxRouteBegin = true;
define("pages/goods/goods.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../servejs/pages.js")({
    serve: ["api", "images", "wxapi"],
    isLifeNormal: !0,
    life: ["sure", "inputInfo", "changeWeight", "inputWeight", "setWeight", "del", "switchShow"],
    data: {
      goods: {},
      weight_max: 99,
      weight_min: 1,
      pics_max: 3,
      isshow: !1,
      iscandel: !1
    },
    optionsParse: function (t) {
      return t.pics = t.pics ? t.pics.split(",") : [], "info" == t.type && (t.weight = 1 * (t.weight || 1)), t
    },
    onLoad: function (t) {
      var i = this;
      this.serve.wxapi.setTitle({
        title: "pics" == t.type ? "包裹照片" : "物品信息"
      }), this.serve.images.imagesLib({
        urlpath: "http://upload.kuaidihelp.com/graborder/",
        getImgArr: function () {
          return i.options.pics
        }
      }), this.serve.images.chooseImage({
        setChooseCount: function () {
          return 3 - (i.options.pics ? i.options.pics.length : 0)
        },
        cb: function (t, e, a, s) {
          "open" == t ? i.imagesTimer && clearTimeout(i.imagesTimer) : "submit" == t && 0 == e.code && e.data && i.setPicList(e)
        },
        uploadconfig: {
          data: {
            type: "check"
          },
          url: "/v1/WeApp/uploadAttachments"
        }
      }), "pics" == t.type ? i.options.pics.length < 3 && "preview" != i.options.action && (i.imagesTimer = setTimeout(function () {
        i.pageobj.onChooseImage({
          type: "trigger",
          action: "camera"
        })
      }, 300)) : (this.getGoodsList(), this.getPriceList())
    },
    setPicList: function (t) {
      var i = this.data.options.pics || [];
      t.fileList.map(function (t, e) {
        i.push(t.file_path)
      }), this.onSetData({
        "options.pics": i
      })
    },
    getPriceList: function () {
      var t = this;
      this.appobj.getPriceList(this.options.s_city, this.options.e_city, function (i) {
        var e = [],
          a = (i = i || [])
          .length;
        if (i && a)
          if (t.options.brand && "all" != t.options.brand) {
            for (var s = 0; s < a; s++)
              if (i[s].brand == t.options.brand) {
                e.push(i[s]);
                break
              }
          } else e = i;
        t.onSetData({
          price: e
        })
      })
    },
    getGoodsList: function () {
      var t = this,
        i = t.serve.api,
        e = t.appobj.getAppData("goods");
      if (e) return t.creatGoodsList({
        array: e,
        selected: t.options.name || e[0]
      }), !1;
      i.apiDataRequest({
        url: "/v1/GrabOrder/packageInfo",
        isset: !1,
        isalert: !1,
        istoast: !1,
        onSuccess: function (i, a) {
          0 == i.code && i.data ? (e = i.data, t.appobj.updateAppData(e, "goods")) : e = ["日用品", "数码产品", "衣物", "食物", "文件", "其它"], t.creatGoodsList({
            array: e || [],
            selected: t.options.name || e[0]
          })
        }
      })
    },
    creatGoodsList: function (t) {
      function i(i, a) {
        e.onSetData({
          "goods.isinput": "其它" == i.name && (!e.data.goods || !e.data.goods.isinput),
          "goods.selected": i.name
        }), a && e.onSetData({
          "goods.inputed": a
        }), "function" == typeof t.cb && t.cb(i)
      }
      var e = this,
        a = e.serve.tools;
      if ((t = a.extendJson(!0, {
          array: null,
          cb: null,
          ontap: "goodsOnTap",
          selected: ""
        }, t))
        .array) {
        this.eventHandler(t.ontap, function (t) {
          i(t.currentTarget.dataset)
        }), e.onSetData({
          goods: {
            ontap: t.ontap,
            array: t.array,
            selected: t.selected
          }
        }), a.inArray(t.selected, t.array) || i({
          name: "其它"
        }, t.selected)
      }
    },
    updatePics: function (t) {
      var i = this.data.options;
      i.order_number ? this.serve.api.apiDataRequest({
        isset: !1,
        url: "/v1/GrabOrder/addCheckPics",
        data: {
          order_id: i.order_number,
          check_pics: i.pics.join(",")
        },
        onSuccess: function (i, e) {
          0 == i.code && t && t()
        }
      }) : t && t()
    },
    onSure: function () {
      var t = this.data.options,
        i = this.data.goods,
        e = i.inputnow,
        a = i.inputed,
        s = i.selected,
        o = "pics" == t.type ? {
          pics: t.pics
        } : {
          pics: t.pics,
          name: "其它" == s ? e || a || "其它" : s,
          weight: 1 * t.weight,
          state: 1
        },
        n = this.serve.tools,
        p = n.getPage(1);
      o.type = t.type, this.updatePics(function () {
        p && p.onPageDataUpdate("goodsEditor", {
          result: o
        }), n.jumpTo()
      })
    },
    onInputInfo: function (t) {
      var i = /^\s*$/g,
        e = t.detail.value;
      return i.test(e) && (e = ""), e.length > 4 && (e = e.substr(0, 4)), this.onSetData({
        "goods.inputnow": e
      }), e || this.onSetData({
        "goods.inputed": e
      }), {
        value: e
      }
    },
    onChangeWeight: function (t) {
      var i = t.currentTarget.dataset.action,
        e = this.data.weight_max,
        a = this.data.weight_min,
        s = this.data.options.weight;
      "add" == i ? s < e && s++ : s > a && s--, this.onSetData({
        "options.weight": s
      })
    },
    onInputWeight: function () {
      this.onSetData({
        isfocus: !0
      })
    },
    onSetWeight: function (t) {
      var i = /^\d*$/,
        e = t.detail.value,
        a = this.data.options.weight;
      return i.test(e) && (this.timeStamp && t.timeStamp - this.timeStamp <= 500 && (e = a.toString() + e), e < this.data.weight_min ? e = this.data.weight_min : e > this.data.weight_max && (e = this.data.weight_max), this.onSetData({
        "options.weight": e
      })), this.timeStamp = t.timeStamp, {
        value: ""
      }
    },
    onDel: function (t) {
      var i = this.data.options.pics;
      i.splice(t.currentTarget.dataset.index, 1), this.onSetData({
        "options.pics": i
      })
    },
    onSwitchShow: function () {
      this.onSetData({
        isshow: !this.data.isshow
      })
    }
  });
});
require("pages/goods/goods.js");
__wxRoute = 'pages/realname/realname';
__wxRouteBegin = true;
define("pages/realname/realname.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  var e = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];
      for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i])
    }
    return e
  };
  require("../../servejs/pages.js")({
    isAutoLogin: !0,
    isLifeNormal: !0,
    data: {
      realnameData: {
        tips: "数据加载中...",
        data: null
      },
      isDisabledGet: !0,
      isNeedPhone: !1,
      isVerified: !1,
      isShowDoneButton: !1
    },
    serve: ["api", "images", "dialog", ["form", "../component/form/form"],
      ["regular", "../component/form/regular.js"]
    ],
    life: ["getCode", "back", "jumpTo", "reVerified"],
    pageInit: function (t) {
      var a = this,
        i = this.serve.tools,
        n = {
          name: {},
          no: {
            rule: "cardId"
          },
          pSrc: {
            required: !1
          }
        },
        o = this.serve.regular.phone.rule,
        s = !1,
        r = i.getPage(1),
        u = this.data.loginRes.data,
        p = this.appobj,
        c = this.data.options;
      !c.phone && u.phone || (s = !0, n = e({}, n, {
        phone: {
          value: c.phone || ""
        },
        code: {}
      })), this.onSetData({
        isDisabledGet: !o.test(c.phone),
        isVerified: "未认证" != t.status,
        isNeedPhone: s
      }), this.formRet = this.serve.form({
        form: n,
        request: {
          url: "/v1/WeApp/saveRealName"
        },
        cb: function (e, t) {
          "input" == t.evtype && (a.inputMobile = t.formData.phone, a.onSetData({
            isDisabledGet: !o.test(a.inputMobile)
          }))
        },
        onSuccess: function (e, t) {
          0 == e.code && (t.status = "已认证", a.onSetData({
            "realnameData.data": t,
            isVerified: !0,
            isShowDoneButton: !0
          }), p.setRealnameStatus(t), !u.phone && t.phone && p.updateHeart({
            phone: t.phone,
            user_name: t.phone
          }, a.pageobj), r.onPageDataUpdate("realname", t))
        }
      }), this.imageRet = this.serve.images.chooseImage({
        cameraType: "idcard",
        cb: function (e, t, i, n) {
          "submit" == e && 0 == t.code && t.data && 0 == t.code && t.data && a.onParseImage(t.data.file_path)
        },
        uploadconfig: {
          data: {
            type: "realname_auth"
          },
          url: "/v1/WeApp/uploadAttachments"
        }
      })
    },
    onPageDataUpdate: function (t, a) {
      if ("camera" == t) {
        var i = a.pic;
        this.imageRet.upload(i)
      } else if ("addIdcardPic" == t) {
        var n = a.pSrc;
        this.formRet.update({
          pSrc: n
        })
      } else "realname" == t && this.onSetData({
        "realnameData.data": e({}, a)
      })
    },
    onBack: function () {
      this.serve.tools.jumpTo()
    },
    onReVerified: function () {
      this.formRet.update({
        name: "",
        no: "",
        pSrc: "",
        code: ""
      }), this.onSetData({
        isVerified: !1
      })
    },
    onLoginCallback: function (e) {
      var t = this;
      0 == e.code && this.getRealnameStatus(function (e) {
        t.pageInit(e)
      })
    },
    onLoad: function (e, t) {
      this.onLoginCallback(t)
    },
    onParseImage: function (e) {
      var t = this;
      this.serve.api.apiDataRequest({
        url: "/v1/WeApp/parseRealName",
        data: {
          file_path: e,
          is_back: 0
        },
        onSuccess: function (e) {
          if (0 == e.code && e.data) {
            var a = e.data,
              i = a.no,
              n = a.name,
              o = a.pSrc;
            t.formRet.update({
              no: i,
              pSrc: o,
              name: n
            })
          }
        }
      })
    },
    getRealnameStatus: function (e) {
      var t = this,
        a = this.data.options.phone,
        i = a ? {
          mobile: a
        } : {};
      this.appobj.getRealnameStatus(function (a) {
        t.onSetData({
          "realnameData.data": a
        }), e && e(a)
      }, i)
    },
    onJumpTo: function (e) {
      var t = e.currentTarget.dataset,
        a = {};
      for (var i in t) "url" != i && (a[i] = t[i]);
      this.serve.tools.jumpTo({
        url: t.url,
        options: a
      })
    },
    onGetCode: function () {
      var e = this;
      if (!this.data.timer) {
        var t = this.data.options.phone;
        this.apiDataRequest({
          url: "/v1/WeApp/sendSms",
          data: {
            phone: t || this.inputMobile
          },
          toast: {
            success: "已发送"
          },
          onSuccess: function (t) {
            0 == t.code && e.setInterval()
          },
          formlist: {
            phone: {
              required: !0,
              tag: "请输入手机号",
              regname: "phone"
            }
          }
        })
      }
    },
    setInterval: function (e) {
      function t() {
        return e.apply(this, arguments)
      }
      return t.toString = function () {
        return e.toString()
      }, t
    }(function () {
      var e = this,
        t = 60;
      this.timer && clearInterval(this.timer), this.timer = setInterval(function () {
        if (t <= 0) return e.setData({
          timer: null
        }), void clearInterval(e.timer);
        e.setData({
          timer: t
        }), t--
      }, 1e3)
    }),
    apiDataRequest: function (e) {
      e = Object.assign(!0, {
        isset: !1
      }, e), this.serve.api.apiDataRequest(e)
    }
  });
});
require("pages/realname/realname.js");
__wxRoute = 'pages/realname/upload/upload';
__wxRouteBegin = true;
define("pages/realname/upload/upload.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  var t = Object.assign || function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var a = arguments[e];
      for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
    }
    return t
  };
  require("../../../servejs/pages.js")({
    isAutoLogin: !0,
    isLifeNormal: !0,
    data: {
      cases: ["标准", "边框缺失", "照片模糊", "闪光强烈"]
    },
    serve: ["api", "images", "dialog", ["form", "../component/form/form"],
      ["regular", "../component/form/regular.js"]
    ],
    life: ["getCode", "back", "jumpTo", "reVerified"],
    pageInit: function (e) {
      var a = this,
        o = this.serve.tools,
        n = this.data.loginRes.data,
        i = o.getPage(1),
        r = this.data.options,
        s = {
          pSrc: {},
          phone: {
            value: r.phone || n.phone
          }
        };
      r.path && this.onSetData({
        idcardPath: r.path.replace("/upload", "https://upload.kuaidihelp.com")
      }), this.formRet = this.serve.form({
        form: s,
        request: {
          url: "/v1/WeApp/saveRealName"
        },
        onSubmit: function (t) {
          a.imageRet.upload(t.pSrc)
        },
        onSuccess: function (t, e) {
          0 == t.code && (e.status = "已认证", a.appobj.setRealnameStatus(e), i.onPageDataUpdate("realname", e), o.jumpTo())
        }
      }), this.imageRet = this.serve.images.chooseImage({
        isauto: !1,
        cameraType: "idcard",
        cb: function (e, n, s, u) {
          "choose" == e ? (a.onSetData({
            idcardPath: null
          }), a.formRet.update({
            pSrc: n[0]
          })) : "submit" == e && 0 == n.code && n.data && 0 == n.code && n.data && a.onParseImage(n.data.file_path, function (e) {
            var n = e.no,
              s = e.name,
              u = e.pSrc;
            "update" == r.action ? a.formRet.submit({
              no: n,
              pSrc: u,
              name: s
            }) : (i.onPageDataUpdate("addIdcardPic", t({}, e)), o.jumpTo())
          })
        },
        uploadconfig: {
          data: {
            type: "realname_auth"
          },
          url: "/v1/WeApp/uploadAttachments"
        }
      })
    },
    onPageDataUpdate: function (t, e) {
      var a = e.pic;
      "camera" == t && this.formRet.update({
        pSrc: a
      })
    },
    onBack: function () {
      this.serve.tools.jumpTo()
    },
    onReVerified: function () {
      this.formRet.update({
        name: "",
        no: "",
        pSrc: "",
        code: ""
      }), this.onSetData({
        isVerified: !1
      })
    },
    onLoginCallback: function (t) {
      0 == t.code && this.pageInit()
    },
    onLoad: function (t, e) {
      this.onLoginCallback(e)
    },
    onParseImage: function (t, e) {
      this.serve.api.apiDataRequest({
        url: "/v1/WeApp/parseRealName",
        data: {
          file_path: t,
          is_back: 0
        },
        onSuccess: function (t) {
          0 == t.code && t.data && e && e(t.data)
        }
      })
    },
    getRealnameStatus: function (t) {
      var e = this,
        a = this.data.options.phone,
        o = a ? {
          mobile: a
        } : null;
      this.appobj.getRealnameStatus(function (a) {
        e.onSetData({
          "realnameData.data": a
        }), t && t(a)
      }, o)
    },
    onJumpTo: function (t) {
      var e = t.currentTarget.dataset,
        a = {};
      for (var o in e) "url" != o && (a[o] = e[o]);
      this.serve.tools.jumpTo({
        url: e.url,
        options: a
      })
    },
    onGetCode: function () {
      var t = this;
      this.data.timer || this.apiDataRequest({
        url: "/v1/WeApp/sendSms",
        data: {
          phone: this.inputMobile
        },
        toast: {
          success: "已发送"
        },
        onSuccess: function (e) {
          0 == e.code && t.setInterval()
        },
        formlist: {
          phone: {
            required: !0,
            tag: "请输入手机号",
            regname: "phone"
          }
        }
      })
    },
    setInterval: function (t) {
      function e() {
        return t.apply(this, arguments)
      }
      return e.toString = function () {
        return t.toString()
      }, e
    }(function () {
      var t = this,
        e = 60;
      this.timer && clearInterval(this.timer), this.timer = setInterval(function () {
        if (e <= 0) return t.setData({
          timer: null
        }), void clearInterval(t.timer);
        t.setData({
          timer: e
        }), e--
      }, 1e3)
    }),
    apiDataRequest: function (t) {
      t = Object.assign(!0, {
        isset: !1
      }, t), this.serve.api.apiDataRequest(t)
    }
  });
});
require("pages/realname/upload/upload.js");
__wxRoute = 'pages/help/help';
__wxRouteBegin = true;
define("pages/help/help.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../servejs/pages.js")({
    data: {
      tips: ["您的微信版本过低", "请下载最新版微信后查看！"],
      web: {
        h_realname: "real_name_exp",
        vs_exp: "wkds_pro",
        refund: "refund"
      },
      currentUrl: "",
      isCanCopy: !!wx.setClipboardData
    },
    isLifeNormal: !0,
    serve: [],
    life: ["copy"],
    onLoad: function (e) {
      var a, t = this.data.web[e.src];
      t && (t = "m.kuaidihelp.com/help/" + t), a = "https://" + (t || e.src && decodeURIComponent(e.src) || "m.kuaidihelp.com"), this.onSetData({
        currentUrl: a
      })
    },
    onCopy: function (e) {
      wx.setClipboardData({
        data: this.data.web[e.currentTarget.dataset.src],
        success: function () {
          wx.showToast({
            title: "已复制"
          })
        }
      })
    }
  });
});
require("pages/help/help.js");
__wxRoute = 'pages/help/guarantee/guarantee';
__wxRouteBegin = true;
define("pages/help/guarantee/guarantee.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../../servejs/pages.js")({
    serve: ["api"],
    life: [],
    onLoad: function (e) {
      var s = e.index,
        t = this;
      this.getServeList(function (e) {
        e[s].desc = "string" == typeof e[s].desc ? e[s].desc.split("\n") : e[s].desc, t.onSetData({
          serve: e[s]
        })
      })
    },
    getServeList: function (e) {
      var s = this,
        t = this.appobj.getAppData("serviceList");
      t ? e && e(t) : this.serve.api.apiDataRequest({
        url: "/v1/GrabVas/lists",
        onSuccess: function (t, a) {
          0 == t.code && t.data && (s.appobj.updateAppData(t.data, "serviceList"), e && e(t.data))
        }
      })
    }
  });
});
require("pages/help/guarantee/guarantee.js");
__wxRoute = 'pages/help/companyPay/companyPay';
__wxRouteBegin = true;
define("pages/help/companyPay/companyPay.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../../servejs/pages.js")({
    isAutoLogin: !0,
    isLifeNormal: !0,
    serve: ["api", "wxapi"],
    life: [],
    onLoad: function (o, i) {
      this.onLoginCallback(i)
    },
    onLoginCallback: function (o) {
      if (0 == o.code) {
        var i = this;
        this.appobj.getWsCompanyInfo(function (o) {
          i.onSetData({
            wsCompanyInfo: o
          })
        })
      }
    }
  });
});
require("pages/help/companyPay/companyPay.js");
__wxRoute = 'pages/forecast/forecast';
__wxRouteBegin = true;
define("pages/forecast/forecast.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../servejs/pages.js")({
    data: {
      istipsshow: !1
    },
    isLifeNormal: !0,
    serve: ["wxapi", "api", "map"],
    life: ["jumpTo", "submit", "switchTips", "reAddress", "inputBlur"],
    onSwitchTips: function () {
      var t = !this.pageobj.data.istipsshow;
      this.onSetData({
        istipsshow: t
      })
    },
    onSubmit: function (t) {
      var s = /^1\d{10}$/,
        i = this,
        e = this.data.options;
      !e.mobile || s.test(e.mobile) ? this.serve.api.apiDataRequest({
        url: "/v1/user_address/addReceiveAddress",
        data: {
          address: e.province + e.city + e.district + e.detail,
          express_company: e.express_company,
          mobile: e.mobile,
          express_no: e.express_no
        },
        isset: !1,
        onSuccess: function (t, s) {
          0 == t.code && (i.serve.tools.jumpTo(), i.onSetLocal(s.address), i.appobj.updateAppData({
            isreload: !0
          }, "exp_result"))
        }
      }) : this.serve.tools.alertMsg(this.pageobj, {
        msg: "请输入正确的手机号"
      })
    },
    onJumpTo: function (t) {
      this.serve.tools.jumpTo({
        url: t.currentTarget.id,
        options: t.currentTarget.dataset
      })
    },
    onSetLocal: function (t) {
      for (var s = this.data.addressHistory, i = this.data.options, e = s.length, a = 0; a < e; a++)
        if (t == s[a].province + s[a].city + s[a].district + s[a].detail) return;
      s.unshift({
        province: i.province,
        city: i.city,
        district: i.district,
        detail: i.detail
      }), s.length > 3 && s.splice(s.length - 1, 1), this.serve.wxapi.dataStorage("set", "addressHistory", s)
    },
    onLoad: function () {
      this.bindLocation();
      var t = this.serve.wxapi.dataStorage("get", "addressHistory", !0),
        s = 0 == t.code ? t.data : [];
      this.onSetData({
        addressHistory: s
      })
    },
    bindLocation: function () {
      var t = this,
        s = this.pageobj;
      this.data.options;
      this.serve.map.location(s, {
        onSuccess: function (s, i) {
          0 == s.code && t.setAddressData(s.data)
        }
      }, !0)
    },
    onReAddress: function (t) {
      var s = this.data.addressHistory,
        i = t.currentTarget.dataset.index;
      this.setAddressData(s[i])
    },
    onInputBlur: function (t) {
      var s = t.currentTarget.id,
        i = t.detail.value.trim();
      this.onSetData("options." + s, i)
    },
    setAddressData: function (t) {
      this.onSetData({
        "options.province": t.province,
        "options.city": t.city,
        "options.district": t.district,
        "options.detail": t.detail || this.data.options.detail
      })
    },
    onPageDataUpdate: function (t, s) {
      "areaSelect" == t && this.setAddressData(s.data)
    }
  });
});
require("pages/forecast/forecast.js");
__wxRoute = 'pages/dakPickup/dakPickup';
__wxRouteBegin = true;
define("pages/dakPickup/dakPickup.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../servejs/pages.js")({
    isAutoLogin: !0,
    isLifeNormal: !0,
    serve: ["api", "dialog", "wxapi"],
    life: ["form", "clear", "search", "navigator", "submit", "scan", "inputWaybill", "toogleSearch", "sureWaybill", "seleteBrand", "brandSelectedCallback", "delete"],
    data: {
      unPickupList: "",
      isClearShow: !1,
      isShowSearch: !1
    },
    optionsParse: function (t) {
      return this.serve.tools.parseUrlOptions(t, {
        id: "dak_id"
      }, !0, !0)
    },
    onLoad: function (t, a) {
      this.onLoginCallback(a)
    },
    onLoginCallback: function (t) {
      if (0 == t.code) {
        var a = this.options.dak_id;
        a && this.getCard(a)
      }
    },
    onScan: function (t) {
      var a = this.serve.tools.regularlist.waybill_num.rule,
        e = this;
      this.data.unPickupList;
      wx.scanCode({
        success: function (i) {
          i.result && a.test(i.result) && e.toogleSearch("open", {
            waybill_no: i.result,
            unPickupIndex: t.currentTarget.dataset.index
          })
        }
      })
    },
    onSubmit: function () {
      var t = this.data.unPickupList,
        a = t.length,
        e = this.serve.tools,
        i = this,
        n = {},
        s = [],
        o = [],
        r = this.serve.wxapi.dataStorage("get", "pickupSearchPhone"),
        l = r ? r.data : "";
      if (t) {
        for (var u = 0; u < a; u++) t[u].waybill_no && (o.push(t[u].waybill_no), s.push({
          id: t[u].id,
          waybill_no: t[u].waybill_no,
          pickup_code: t[u].pickup_code,
          brand: t[u].brand
        }));
        if (0 == s.length) return void e.alertMsg(i.pageobj, {
          msg: "缺少运单号或品牌"
        });
        n.data = JSON.stringify(s), this.appobj.getUserInfo(function (t, a) {
          "success" == t && (n.nickName = a.user.userInfo.nickName)
        }), n.phone = l, this.serve.dialog.alertDialog(i.pageobj, {
          title: "请选择与收件人关系",
          classname: "dialog-pickup",
          zindex: 5,
          size: {
            w: "70%"
          },
          msgclass: "color-black",
          dialogname: "d_sign",
          tmpname: "pickup",
          isUseTmpdata: !0,
          tmpdata: {
            signer: "本人"
          },
          button: [{
            name: "取消",
            action: "cancel",
            classname: "border-r"
          }, {
            name: "确认包裹完好并签收",
            action: "submit"
          }],
          cb: function (t, a, e) {
            "submit" == t && 0 == a.code ? (i.getUnpickupList(l), i.onNotice(e)) : "switch" == t && this.changeTmpData({
              signer: a.currentTarget.dataset.value
            })
          }
        }, {
          url: "/v1/dak/Manage/pickup",
          istoast: !0,
          data: n,
          jumpkey: "signed_time",
          jumpconfig: {
            url: "sign_detail",
            options: {
              type: "pickup",
              deliver_no: o.join(",")
            }
          }
        })
      }
    },
    onNotice: function (t) {
      this.serve.api.notice({
        istoast: !1,
        data: {
          template_title: "dak_pickup",
          form_id: t.formId,
          phone: t.phone
        }
      })
    },
    onDelete: function (t) {
      var a = this,
        e = t.currentTarget.dataset.index,
        i = this.data.unPickupList;
      this.serve.dialog.alertDialog(this.pageobj, {
        title: "系统提示",
        zindex: 5,
        size: {
          w: "70%"
        },
        msgclass: "color-black align-center",
        msg: "是否确定删除？",
        dialogname: "system",
        button: [{
          name: "否",
          action: "cancel",
          classname: "border-r"
        }, {
          name: "是",
          action: "submit"
        }],
        cb: function (t, n, s) {
          "submit" == t && 0 == n.code && (i.splice(e, 1), a.onSetData({
            unPickupList: i.length > 0 ? i : ""
          }))
        }
      }, {
        url: "/v1/dak/Manage/deleteRecord",
        istoast: !0,
        data: {
          id: i[e].id
        }
      })
    },
    onNavigator: function (t) {
      var a = t.currentTarget.dataset,
        e = a.url;
      delete a.url, this.serve.tools.jumpTo({
        url: e,
        options: a
      })
    },
    getCard: function (t) {
      var a = this,
        e = this.serve.wxapi.dataStorage("get", "pickupSearchPhone")
        .data || "",
        i = this.serve.api;
      this.options, this.serve.tools;
      e = e || this.data.loginRes.data.phone || "", a.onSetData({
        phone: e
      }), i.apiDataRequest({
        url: "/v1/WeApp/details",
        istoast: !0,
        data: {
          type: "dak",
          dak_id: t
        },
        onSuccess: function (t, i) {
          0 == t.code && t.data && (a.onSetData({
            dak: t.data
          }), a.getUnpickupList(e))
        }
      })
    },
    onInputWaybill: function (t) {
      var a = this;
      this.itime && clearTimeout(this.itime), this.itime = setTimeout(function () {
        a.getWaybillInfo(t.detail.value)
      }, 100)
    },
    getWaybillInfo: function (t, a) {
      var e = this.serve.tools,
        i = e.regularlist,
        n = [],
        s = this,
        t = e.trim(t),
        o = i.waybill_num.rule;
      s.waybill_no = t, o.test(t) ? this.serve.api.apiDataRequest({
        url: "/v1/synthesis/index",
        data: {
          input: t
        },
        istoast: !1,
        onSuccess: function (e, i) {
          if (0 == e.code && e.data && e.data.data && e.data.data.brand)
            for (var o in e.data.data.brand) n.push({
              isCurrent: a == o,
              brand: o,
              name: e.data.data.brand[o],
              num: t
            });
          s.onSetData({
            waybillList: n
          })
        }
      }) : s.onSetData({
        waybillList: ""
      })
    },
    getPickupList: function (t, a) {
      var e = this,
        i = this.serve.tools;
      i.regularlist.phone;
      this.serve.api.apiDataRequest({
        url: "/v1/dak/Manage/getPickupList",
        data: {
          dakId: a,
          phone: t
        },
        onSuccess: function (t, a) {
          0 == t.code && t.data && t.data.length > 0 ? (i.arrSort(t.data, "de", "operate_time"), e.appobj.getBrandInfo(function (a) {
            t.data.map(function (t) {
              t.brandName = a ? t.brand && a[t.brand] ? a[t.brand].short_name : "" : t.brand, t.operate_time = i.dateFilter(t.operate_time)
            }), e.onSetData({
              pickupList: t.data
            })
          })) : e.onSetData({
            pickupList: ""
          })
        }
      })
    },
    getUnpickupList: function (t) {
      var a = this,
        e = this.serve.tools.regularlist.phone,
        i = this.data.dak && this.data.dak.courier_id;
      t && e.rule.test(t) ? (this.serve.wxapi.dataStorage("set", "pickupSearchPhone", t), this.serve.api.apiDataRequest({
        url: "/v1/dak/Manage/getUnpickupList",
        data: {
          dakId: i,
          phone: t
        },
        onSuccess: function (e, n) {
          0 == e.code && e.data && e.data.length > 0 ? a.onSetData({
            unPickupList: e.data,
            phone: t
          }) : a.onSetData({
            phone: t,
            unPickupList: ""
          }), a.getPickupList(t, i)
        }
      })) : this.serve.tools.alertMsg(this.pageobj, {
        msg: i ? t ? e.msg : "请输入手机号" : "缺少驿站信息"
      })
    },
    onSearch: function (t) {
      this.getUnpickupList(t.detail.value.phone)
    },
    onForm: function (t) {
      this.phone = t.detail.value, "input" == t.type ? t.detail.value ? !this.data.isClearShow && this.onSetData({
        isClearShow: !0
      }) : this.data.isClearShow && this.onSetData({
        isClearShow: !1
      }) : "blur" == t.type ? this.onSetData({
        isClearShow: !1
      }) : "focus" == t.type && this.onSetData({
        isClearShow: t.detail.value
      })
    },
    onToogleSearch: function (t) {
      var a = t.currentTarget.dataset,
        e = this.data.unPickupList,
        i = e && e[a.index] ? e[a.index].waybill_no : "";
      this.toogleSearch(a.action, {
        waybill_no: i,
        unPickupIndex: a.index
      })
    },
    toogleSearch: function (t, a) {
      var e, i = this.serve.tools,
        n = this.data.unPickupIndex,
        s = this.data.unPickupList;
      if ("sure" != t) this.onSetData({
        waybill_no: a.waybill_no,
        isShowSearch: "open" == t,
        unPickupIndex: a.unPickupIndex
      }), "open" == t && this.getWaybillInfo(a.waybill_no, s[a.unPickupIndex].brand);
      else {
        if (s && s[n]) {
          if ((e = i.inArray({
              waybill_no: this.waybill_no,
              brand: a.brand
            }, s, !0)) >= 0 && n != e) return void i.alertMsg(this.pageobj, {
            msg: "该单号已在取件列表中，请选择其他品牌"
          });
          s[n].brand = a.brand, s[n].waybill_no = this.waybill_no
        }
        this.onSetData({
          isShowSearch: !1,
          unPickupList: s
        })
      }
    },
    onSureWaybill: function (t) {
      this.toogleSearch("sure", {
        brand: t.currentTarget.dataset.brand
      })
    },
    onSeleteBrand: function (t) {
      this.serve.tools.jumpTo({
        url: "brand"
      })
    },
    onClear: function (t) {
      var a = this;
      a.phone = "", a.ctimer && clearTimeout(a.ctimer), a.ctimer = setTimeout(function () {
        a.onSetData({
          isClearShow: !1,
          phone: ""
        })
      }, 100)
    },
    onPageDataUpdate: function (t, a) {
      "brandSelected" == t && this.toogleSearch("sure", {
        brand: a.brand
      })
    }
  });
});
require("pages/dakPickup/dakPickup.js");
__wxRoute = 'pages/pictureCut/pictureCut';
__wxRouteBegin = true;
define("pages/pictureCut/pictureCut.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../servejs/pages.js")({
    data: {
      cropperOpt: {
        id: "cropper",
        scale: 2.5,
        zoom: 8,
        color: "rgba(0, 0, 0, 0.8)"
      }
    },
    serve: [
      ["cropper", "../component/cropper/cropper.js"], "api", "wxapi"
    ],
    onLoad: function (a) {
      var e = wx.getSystemInfoSync(),
        t = e.windowWidth,
        o = e.windowHeight - 80,
        i = this,
        s = this.serve.tools,
        r = s.getPage(1),
        c = " ",
        p = {
          x: 7.5,
          y: (o - 200) / 2,
          width: t - 15,
          height: 200
        },
        n = [];
      "addr_lib" == a.source ? (c = "选择地址部分", n = ["识别"]) : "personal" == a.source ? (c = "头像剪切", n = ["完成"], p.width = p.height, p.x = (t - p.width) / 2) : "idcard" == a.source && (c = "身份证截取", n = ["确定"]), this.onSetData({
          button: n,
          cropperOpt: s.extendJson({
            width: t,
            height: o,
            cut: p,
            filePath: a.path
          }, this.data.cropperOpt)
        }), i.backDelay && clearTimeout(i.backDelay), new this.serve.cropper(this.data.cropperOpt)
        .on("getCropperImage", function (a) {
          a && (r && r.onPageDataUpdate ? (wx.navigateBack(), i.backDelay = setTimeout(function () {
            r.onPageDataUpdate("picCut", {
              pic: a
            })
          }, 1e3)) : i.onUpload(a))
        }), this.serve.wxapi.setTitle({
          title: c
        })
    },
    onUpload: function (a) {
      var e = this;
      this.serve.api.apiUpload({
        tempFilePath: a,
        url: "/v1/WeApp/uploadAttachments",
        data: {
          type: "minaOcr"
        },
        toast: {
          loading: "解析中...",
          success: ""
        },
        onSuccess: function (a) {
          0 == a.code && a.data && a.data.file_path && e.onParsePic(a.data.file_path)
        }
      })
    },
    onParsePic: function (a) {
      var e = this,
        t = this.serve.tools,
        o = t.getPage(1);
      e.serve.api.apiDataRequest({
        url: "/v1/Ocr/ocrNamePhoneAddress",
        data: {
          img: a
        },
        toast: {
          loading: "解析中..."
        },
        onSuccess: function (a) {
          if (0 == a.code) {
            if (!t.isJson(a.data) || !a.data.address && !a.data.name && !a.data.phone) return void t.alertMsg(e.pageobj, {
              msg: "未解析出地址信息"
            });
            var i = a.data.address ? a.data.address.split(",") : [];
            o && o.onParsePicCallback && (wx.navigateBack(), o.onParsePicCallback({
              phone: a.data.phone,
              name: a.data.name,
              province: i[0] || "",
              city: i[1] || "",
              district: i[2] || "",
              address: i[3] || ""
            }))
          }
        }
      })
    }
  });
});
require("pages/pictureCut/pictureCut.js");
__wxRoute = 'pages/camera/camera';
__wxRouteBegin = true;
define("pages/camera/camera.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../servejs/pages.js")({
    isLifeNormal: !0,
    data: {
      isScale: !1,
      flashShow: !1,
      position: "back",
      flash: "auto",
      flashKey: ["auto", "on", "off"],
      flashNames: ["自动", "打开", "关闭"]
    },
    serve: [],
    life: ["error", "stop", "camerHandler", "switchFlash"],
    onLoad: function (a) {
      this.prePageObj = this.serve.tools.getPage(1), this.backDelay && clearTimeout(this.backDelay)
    },
    onError: function () {},
    onStop: function () {},
    onCamerHandler: function (a) {
      var t = this,
        e = a.currentTarget.dataset,
        s = this;
      switch (e.action) {
        case "take":
          wx.createCameraContext()
            .takePhoto({
              quality: "high",
              success: function (a) {
                t.setData({
                  pic: a.tempImagePath
                })
              }
            });
          break;
        case "position":
          this.setData({
            isScale: !0,
            position: "back" == this.data.position ? "front" : "back"
          }), s.dealy && clearTimeout(s.dealy), s.dealy = setTimeout(function () {
            s.setData({
              isScale: !1
            })
          }, 1e3);
          break;
        case "flash":
          this.setData({
            flash: e.status
          });
          break;
        case "cancel":
          wx.navigateBack();
          break;
        case "reset":
          this.setData({
            pic: ""
          });
          break;
        case "sure":
          this.data.pic && (wx.navigateBack(), this.backDelay = setTimeout(function () {
            s.prePageObj.onPageDataUpdate("camera", {
              pic: s.data.pic
            })
          }, 1500))
      }
    },
    onSwitchFlash: function (a) {
      this.setData({
        flashShow: !this.data.flashShow
      })
    }
  });
});
require("pages/camera/camera.js");
__wxRoute = 'pages/bindPhone/bindPhone';
__wxRouteBegin = true;
define("pages/bindPhone/bindPhone.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  function e(e, t, o) {
    return t in e ? Object.defineProperty(e, t, {
      value: o,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = o, e
  }
  var t = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = arguments[t];
      for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (e[i] = o[i])
    }
    return e
  };
  require("../../servejs/pages.js")({
    data: {
      isDisabledGet: !0,
      timer: null,
      isCanGetPhoneNumber: !1,
      isHasPhone: !1
    },
    isLifeNormal: !0,
    isAutoLogin: !1,
    serve: ["wxapi", "api", ["form", "../component/form/form.js"],
      ["regular", "../component/form/regular.js"]
    ],
    life: ["switchStatus", "getCode", "setMobile", "getPhoneNumber"],
    onLoad: function (e, t) {
      this.onLoginCallback(t)
    },
    onLoginCallback: function (e) {
      var t = this.data.options,
        o = t.source,
        i = void 0 === o ? "bind" : o,
        n = t.isHasPhone,
        s = void 0 !== n && n,
        a = e.code,
        r = e.data;
      0 == a ? s = !("bind" !== i || 0 != a || !r.phone) : "bind" === i && this.serve.tools.jumpTo({
        target: "self",
        url: "login"
      }), this.onSwitchStatus({
        type: "init",
        source: i,
        isHasPhone: s
      })
    },
    setGetCodeButtonStatus: function (e) {
      var t = this.serve.regular.phone.rule;
      this.mobile = e, this.onSetData({
        isDisabledGet: !t.test(e)
      })
    },
    formInit: function (o, i, n) {
      var s, a, r = this,
        u = (this.data.loginRes, this.serve.tools),
        c = this.data.options,
        l = u.getPage(1),
        p = c.source,
        h = c.mobile,
        d = void 0 === h ? "" : h;
      this.setGetCodeButtonStatus(d), this.formRet = this.serve.form({
        form: t({}, n, (s = {}, e(s, o, {
          value: d,
          rule: "phone"
        }), e(s, i, {
          min: 4
        }), s)),
        cb: function (e, t) {
          "input" == t.evtype && r.setGetCodeButtonStatus(t.formData[o])
        },
        onSuccess: function (e, t) {
          if (0 == e.code) {
            if ("forget" === p || "register" === p) {
              var i = t.mobile,
                n = void 0 === i ? "" : i,
                s = t.passport,
                h = void 0 === s ? "" : s;
              return void(l && "pages/login/login" === l.route ? (l.onPageDataUpdate(p, {
                mobile: n,
                passport: h
              }), u.jumpTo()) : u.jumpTo({
                url: "login",
                target: "self",
                options: {
                  mobile: n,
                  passport: h
                }
              }))
            }
            a = t[o] || e.data.phone, r.appobj.updateHeart({
              phone: a,
              user_name: a
            }, r.pageobj), r.onSwitchStatus({
              type: "reset"
            }), r.delay = setTimeout(function () {
              c.callback ? u.jumpTo({
                url: c.callback,
                target: "self"
              }) : u.jumpTo()
            }, 1500)
          } else t.iv && r.refreshCode()
        },
        request: {
          customCheck: function (e) {
            var t = e.passport,
              o = e.repassport;
            if (t && o && t !== o) return {
              code: 3017,
              msg: "两次输入密码不一致"
            }
          },
          reqFilter: function (e) {
            return e.iv ? {
              code: encodeURIComponent(e.code),
              iv: encodeURIComponent(e.iv),
              encryptedData: encodeURIComponent(e.encryptedData)
            } : e
          },
          toast: {
            success: "成功绑定"
          },
          url: "/v1/WeApp/" + this.data.urlPath
        }
      })
    },
    onGetCode: function () {
      if (!this.data.timer) {
        var t = this,
          o = this.data.mobileKey;
        this.apiDataRequest({
          url: "/v1/WeApp/" + this.data.urlPath,
          data: e({}, o, this.mobile),
          toast: {
            success: "已发送"
          },
          onSuccess: function (e) {
            0 == e.code && t.setInterval()
          },
          formlist: e({}, o, {
            required: !0,
            tag: "请输入手机号",
            regname: "phone"
          })
        })
      }
    },
    apiDataRequest: function (e) {
      e = Object.assign(!0, {
        isset: !1
      }, e), this.serve.api.apiDataRequest(e)
    },
    onGetPhoneNumber: function (e) {
      var t = e.detail;
      t && t.encryptedData && this.formRet.submit({
        code: this.loginCode,
        iv: t.iv,
        encryptedData: t.encryptedData
      }, !0)
    },
    setInterval: function (e) {
      function t() {
        return e.apply(this, arguments)
      }
      return t.toString = function () {
        return e.toString()
      }, t
    }(function () {
      var e = this,
        t = 60;
      this.timer && clearInterval(this.timer), this.timer = setInterval(function () {
        if (t <= 0) return e.setData({
          timer: null
        }), void clearInterval(e.timer);
        e.setData({
          timer: t
        }), t--
      }, 1e3)
    }),
    refreshCode: function () {
      var e = this;
      wx.login({
        success: function (t) {
          e.loginCode = t.code
        }
      })
    },
    onSwitchStatus: function (e) {
      var t, o, i, n, s, a, r;
      "init" == e.type ? (o = e.isHasPhone, "register" === (i = e.source) ? (t = "signup", n = "注册") : "forget" === i ? (t = "forget", r = {
        passport: {
          min: 6
        },
        repassport: {
          min: 6
        }
      }, n = "忘记密码") : (t = o ? "changeMobile" : "bind", n = "绑定"), wx.setNavigationBarTitle({
        title: n
      }), this.onSetData({
        title: n,
        isCanGetPhoneNumber: "forget" !== i && this.serve.tools.canIUse("1.2.0")
      })) : (o = "tap" != e.type, t = "changeMobile"), "bind" == t ? (s = "user_name", a = "verify_code") : (s = "mobile", a = "code"), this.setData({
        mobileKey: s,
        codeKey: a,
        urlPath: t,
        isHasPhone: o
      }), o || (this.formInit(s, a, r), this.refreshCode())
    }
  });
});
require("pages/bindPhone/bindPhone.js");
__wxRoute = 'pages/cutting/cutting';
__wxRouteBegin = true;
define("pages/cutting/cutting.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  var t, a, e, i, c, o, n, s, r, u, h = 0,
    d = 0,
    p = 750,
    g = 0,
    m = 0,
    l = 0,
    v = 0,
    f = 0,
    w = 0,
    W = 0,
    H = null;
  require("../../servejs/pages.js")({
    isLifeNormal: !0,
    data: {
      canvasW: 0,
      canvasH: 0,
      imageSrc: "",
      returnImage: "",
      isShowImg: !1,
      cropperInitW: p,
      cropperInitH: p,
      cropperW: p,
      cropperH: p,
      cutW: 0,
      cutH: 0,
      cutL: 0,
      cutT: 0,
      scaleP: 0,
      imageW: 0,
      imageH: 0
    },
    serve: ["api", "wxapi"],
    life: ["contentStartMove", "contentMoveing", "getImageInfo", "dragStart", "dragMove", "choose"],
    onLoad: function (h) {
      e = wx.getSystemInfoSync(), i = e.pixelRatio, p = 750, g = e.windowHeight * (750 / e.windowWidth) - 160, u = e.windowWidth / e.windowHeight;
      var d = "图片剪切",
        m = [],
        l = this;
      "addr_lib" == h.source ? (d = "选择地址部分", m = ["识别"]) : "personal" == h.source ? (d = "头像剪切", m = ["完成"], cut.width = cut.height, cut.x = (width - cut.width) / 2) : "idcard" == h.source && (d = "身份证截取", m = ["确定"]), this.serve.wxapi.setTitle({
        title: d
      }), this.onSetData({
        imageSrc: h.path,
        button: m
      }), wx.showLoading({
        title: "图片加载中..."
      }), wx.getImageInfo({
        src: h.path,
        success: function (e) {
          (r = e.width / e.height) >= 1 || r >= u ? (t = p, a = p / r) : (t = g * r, a = g), c = t > 50 ? t - 50 : t, o = Math.min(a, 200), n = (t - c) / 2, s = (a - o) / 2, l.onSetData({
            cropperW: t,
            cropperH: a,
            cutW: c,
            cutH: o,
            cutL: n,
            cutT: s,
            scaleP: e.width * i / a,
            imageW: e.width * i,
            imageH: e.height * i,
            isShowImg: !0
          }), wx.hideLoading()
        }
      })
    },
    onContentStartMove: function (t) {
      h = t.touches[0].pageX, d = t.touches[0].pageY
    },
    onContentMoveing: function (t) {
      var a = this,
        e = 2 * (h - t.touches[0].pageX),
        i = 2 * (d - t.touches[0].pageY),
        c = Math.max(a.data.cutL - e, 0),
        o = Math.max(a.data.cutT - i, 0),
        n = a.data.cropperW - a.data.cutW,
        s = a.data.cropperH - a.data.cutH;
      this.onSetData({
        cutL: Math.min(n, c),
        cutT: Math.min(s, o)
      }), h = t.touches[0].pageX, d = t.touches[0].pageY
    },
    onDragStart: function (t) {
      var a = this;
      m = t.touches[0].pageX, l = t.touches[0].pageY, v = a.data.cutW, f = a.data.cutL, W = a.data.cutT, w = a.data.cutH
    },
    onDragMove: function (t) {
      var a = this;
      switch (t.target.dataset.drag) {
        case "right":
          e = 2 * (m - t.touches[0].pageX);
          if (!(v >= e)) return;
          if (e < 0 && a.data.cropperW > f + a.data.cutW && this.onSetData({
              cutW: v - e
            }), !(e > 0)) return;
          this.onSetData({
            cutW: v - e
          });
          break;
        case "left":
          e = 2 * (e = m - t.touches[0].pageX);
          if (!(v >= e && f > e)) return;
          if (e < 0 && Math.abs(e) >= v) return;
          this.onSetData({
            cutL: f - e,
            cutW: v + e
          });
          break;
        case "top":
          e = 2 * (l - t.touches[0].pageY);
          if (!(w >= e && W > e)) return;
          if (e < 0 && Math.abs(e) >= w) return;
          this.onSetData({
            cutT: W - e,
            cutH: w + e
          });
          break;
        case "bottom":
          var e = 2 * (l - t.touches[0].pageY);
          if (!(w >= e)) return;
          if (e < 0 && a.data.cropperH > W + a.data.cutH && this.onSetData({
              cutH: w - e
            }), !(e > 0)) return;
          this.onSetData({
            cutH: w - e
          });
          break;
        case "rightBottom":
          var i = 2 * (m - t.touches[0].pageX),
            c = 2 * (l - t.touches[0].pageY);
          if (!(w >= c && v >= i)) return;
          if ((c < 0 && a.data.cropperH > W + a.data.cutH || c > 0) && this.onSetData({
              cutH: w - c
            }), !(i < 0 && a.data.cropperW > f + a.data.cutW || i > 0)) return;
          this.onSetData({
            cutW: v - i
          })
      }
    },
    onGetImageInfo: function () {
      var t = this,
        a = this.serve.tools.getPage(1);
      wx.showLoading({
        title: "请稍后..."
      });
      var e = wx.createCanvasContext("picCanvas"),
        c = function () {
          t.uploadPic(t.data.imageSrc)
        },
        o = this.data,
        n = o.cutW,
        s = o.cutH,
        r = o.cutL,
        u = o.cutT,
        h = o.cropperW,
        d = o.cropperH,
        p = o.imageW,
        g = o.imageH,
        m = o.imageSrc,
        l = n / h * (p / i),
        v = s / d * (g / i),
        f = r / h * (p / i),
        w = u / d * (g / i);
      e.drawImage(m, -f, -w), e.draw(), this.onSetData({
        canvasW: l,
        canvasH: v
      }), H && clearTimeout(H), H = setTimeout(function () {
        wx.canvasToTempFilePath({
          x: 0,
          y: 0,
          width: l,
          height: v,
          destWidth: l,
          destHeight: v,
          canvasId: "picCanvas",
          success: function (e) {
            var i = e.tempFilePath;
            wx.hideLoading(), i && (a && a.onPicCutCallback ? (wx.navigateBack(), t.backDelay = setTimeout(function () {
              a.onPicCutCallback(i)
            }, 1e3)) : t.uploadPic(i))
          },
          fail: function (t) {
            wx.hideLoading(), c()
          }
        })
      }, 400)
    },
    uploadPic: function (t) {
      var a = this;
      this.serve.api.apiUpload({
        tempFilePath: t,
        url: "/v1/WeApp/uploadAttachments",
        data: {
          type: "minaOcr"
        },
        toast: {
          loading: "解析中...",
          success: ""
        },
        onSuccess: function (t) {
          0 == t.code && t.data && t.data.file_path && a.parsePic(t.data.file_path)
        }
      })
    },
    parsePic: function (t) {
      var a = this,
        e = this.serve.tools,
        i = this.data.options,
        c = e.getPage(1);
      this.serve.api.apiDataRequest({
        url: "/v1/Ocr/ocrNamePhoneAddress",
        data: {
          img: t
        },
        toast: {
          loading: "解析中..."
        },
        onSuccess: function (t) {
          if (0 == t.code && e.isJson(t.data)) {
            if (c && c.onPageDataUpdate) {
              var o, n = [],
                s = t.data;
              s.phone && s.phone.indexOf(s.mobile) >= 0 ? o = s.phone : (s.mobile && n.push(s.mobile), s.phone && n.push(s.phone), o = n.join(" ")), wx.navigateBack(), c.onPageDataUpdate("addressParse", {
                kind: i.kind,
                data: {
                  mobile: o || "",
                  name: s.name || "",
                  province: s.province_name || "",
                  city: s.city_name || "",
                  district: s.county_name || "",
                  address: s.detail || ""
                }
              })
            }
          } else e.alertMsg(a.pageobj, {
            msg: "未解析出地址信息"
          })
        }
      })
    }
  });
});
require("pages/cutting/cutting.js");
__wxRoute = 'pages/coupon/coupon';
__wxRouteBegin = true;
define("pages/coupon/coupon.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  var t = Object.assign || function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var i = arguments[e];
      for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a])
    }
    return t
  };
  require("../../servejs/pages.js")({
    data: {
      list: [],
      tips: "数据加载中..."
    },
    isAutoLogin: !0,
    isLifeNormal: !0,
    serve: ["api", "dialog", "wxapi"],
    life: ["select"],
    onLoad: function (t, e) {
      var i = this.serve.wxapi;
      "more" !== t.source && i.setTitle({
        title: "选择抵用券"
      }), this.onLoginCallback(e)
    },
    onSelect: function (t) {
      var e = this.serve.tools,
        i = this.data,
        a = i.list,
        o = i.options,
        s = t.currentTarget.dataset.index,
        r = a[void 0 === s ? -1 : s] || {};
      if (!(r.past_date <= 0 || "more" === o.source)) {
        var n = e.getPage(1);
        n && n.onPageDataUpdate("couponSelect", r), e.jumpTo()
      }
    },
    onLoginCallback: function (t, e) {
      0 == t.code && this.getCouponList()
    },
    getCouponList: function () {
      var t = this,
        e = this.serve.tools,
        i = this.data.options,
        a = (i.source, i.order_number);
      this.appobj.getCouponList({
        data: {
          order_id: a
        },
        handler: function (i) {
          var a = i.data.list,
            o = void 0 === a ? [] : a,
            s = "暂无可用抵用券";
          o = o.map(function (t) {
            return t.expiration_time = e.dateFilter(t.expiration_time), t
          }), i.code > 0 && (s = i.msg), t.onSetData({
            list: o,
            tips: s
          })
        }
      })
    },
    apiDataRequest: function (e) {
      this.serve.api.apiDataRequest(t({
        url: "",
        data: {},
        istoast: !1,
        ischecklogin: !0,
        isset: !1
      }, e))
    }
  });
});
require("pages/coupon/coupon.js");
