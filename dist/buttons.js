(function () {
  'use strict';

  var document = window.document;

  var encodeURIComponent = window.encodeURIComponent;

  var decodeURIComponent = window.decodeURIComponent;

  var Math = window.Math;

  var createElement = function(tag) {
    return document.createElement(tag);
  };

  var createTextNode = function(text) {
    return document.createTextNode(text);
  };

  var apiBaseURL, baseURL, buttonClass, setBaseURL, uuid;

  buttonClass = "github-button";

  uuid = "faa75404-3b97-5585-b449-4bc51338fbd1";


  /* istanbul ignore next */

  baseURL = (/^http:/.test(document.location) ? "http" : "https") + "://buttons.github.io/";

  apiBaseURL = "https://api.github.com/";

  setBaseURL = function(url) {
    baseURL = url;
  };

  var currentScript, currentScriptURL;

  currentScript = "currentScript";


  /* istanbul ignore next */

  currentScriptURL = !{}.hasOwnProperty.call(document, currentScript) && document[currentScript] && delete document[currentScript] && document[currentScript] ? document[currentScript].src : void 0;

  var stringifyQueryString = function(obj) {
    var name, params, value;
    params = [];
    for (name in obj) {
      value = obj[name];
      if (value != null) {
        params.push((encodeURIComponent(name)) + "=" + (encodeURIComponent(value)));
      }
    }
    return params.join("&");
  };

  var parseQueryString = function(str) {
    var i, len, pair, params, ref, ref1;
    params = {};
    ref1 = str.split("&");
    for (i = 0, len = ref1.length; i < len; i++) {
      pair = ref1[i];
      if (!(pair !== "")) {
        continue;
      }
      ref = pair.split("=");
      if (ref[0] !== "") {
        params[decodeURIComponent(ref[0])] = decodeURIComponent(ref.slice(1).join("="));
      }
    }
    return params;
  };

  var onEvent, onceEvent;

  onEvent = function(target, eventName, func) {

    /* istanbul ignore else: IE lt 9 */
    if (target.addEventListener) {
      target.addEventListener("" + eventName, func);
    } else {
      target.attachEvent("on" + eventName, func);
    }
  };

  onceEvent = function(target, eventName, func) {
    var callback;
    callback = function(event) {

      /* istanbul ignore else: IE lt 9 */
      if (target.removeEventListener) {
        target.removeEventListener("" + eventName, callback);
      } else {
        target.detachEvent("on" + eventName, callback);
      }
      return func(event);
    };
    onEvent(target, eventName, callback);
  };

  var defer;


  /* istanbul ignore next */

  defer = function(func) {
    var callback, onceToken;
    if (/m/.test(document.readyState) || (!/g/.test(document.readyState) && !document.documentElement.doScroll)) {
      setTimeout(func);
    } else {
      if (document.addEventListener) {
        onceToken = 0;
        callback = function() {
          if (!onceToken && (onceToken = 1)) {
            func();
          }
        };
        onceEvent(document, "DOMContentLoaded", callback);
        onceEvent(window, "load", callback);
      } else {
        callback = function() {
          if (/m/.test(document.readyState)) {
            document.detachEvent("onreadystatechange", callback);
            func();
          }
        };
        document.attachEvent("onreadystatechange", callback);
      }
    }
  };

  var data = {"mark-github":{"width":16,"height":16,"path":"<path fill-rule=\"evenodd\" d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z\"/>"},"eye":{"width":16,"height":16,"path":"<path fill-rule=\"evenodd\" d=\"M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z\"/>"},"star":{"width":14,"height":16,"path":"<path fill-rule=\"evenodd\" d=\"M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z\"/>"},"repo-forked":{"width":10,"height":16,"path":"<path fill-rule=\"evenodd\" d=\"M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z\"/>"},"issue-opened":{"width":14,"height":16,"path":"<path fill-rule=\"evenodd\" d=\"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z\"/>"},"cloud-download":{"width":16,"height":16,"path":"<path fill-rule=\"evenodd\" d=\"M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02 5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7 1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16 5.06 14.08 4 12 4z\"/>"}}

  var octicon;

  octicon = function(icon, height) {
    var width;
    icon = ("" + icon).toLowerCase().replace(/^octicon-/, "");
    if (!data.hasOwnProperty(icon)) {
      icon = "mark-github";
    }
    width = height * data[icon].width / data[icon].height;
    return "<svg version=\"1.1\" width=\"" + width + "\" height=\"" + height + "\" viewBox=\"0 0 " + data[icon].width + " " + data[icon].height + "\" class=\"octicon octicon-" + icon + "\" aria-hidden=\"true\">" + data[icon].path + "</svg>";
  };

  var renderButton;

  renderButton = function(options) {
    var a, ariaLabel, span;
    a = createElement("a");
    a.href = options.href;
    if (!/\.github\.com$/.test("." + a.hostname)) {
      a.href = "#";
      a.target = "_self";
    } else if (/^https?:\/\/((gist\.)?github\.com\/[^\/?#]+\/[^\/?#]+\/archive\/|github\.com\/[^\/?#]+\/[^\/?#]+\/releases\/download\/|codeload\.github\.com\/)/.test(a.href)) {
      a.target = "_top";
    }
    a.className = "btn";
    if (ariaLabel = options["aria-label"]) {
      a.setAttribute("aria-label", ariaLabel);
    }
    a.innerHTML = octicon(options["data-icon"], /^large$/i.test(options["data-size"]) ? 16 : 14);
    a.appendChild(createTextNode(" "));
    span = a.appendChild(createElement("span"));
    span.appendChild(createTextNode(options["data-text"] || ""));
    return document.body.appendChild(a);
  };

  var fetch;

  fetch = function(url, func) {
    var callback, head, onceToken, onloadend, script, xhr;
    window.$ = function() {
      window.$ = null;
    };
    onceToken = 0;
    callback = function() {
      if (!onceToken && (onceToken = 1)) {
        func.apply(null, arguments);
        $();
      }
    };
    if (window.XMLHttpRequest && "withCredentials" in XMLHttpRequest.prototype) {
      xhr = new XMLHttpRequest();
      onEvent(xhr, "abort", callback);
      onEvent(xhr, "error", callback);
      onEvent(xhr, "load", function() {
        callback(xhr.status !== 200, JSON.parse(xhr.responseText));
      });
      xhr.open("GET", url);
      xhr.send();
    } else {
      window._ = function(json) {
        window._ = null;
        callback(json.meta.status !== 200, json.data);
      };
      script = createElement("script");
      script.async = true;
      script.src = url + (/\?/.test(url) ? "&" : "?") + "callback=_";
      onloadend = function() {
        if (window._) {
          _({
            meta: {}
          });
        }
      };
      onEvent(script, "error", onloadend);
      if (script.readyState) {

        /* istanbul ignore next: IE lt 9 */
        onEvent(script, "readystatechange", function() {
          if (script.readyState === "loaded") {
            onloadend();
          }
        });
      }
      head = document.getElementsByTagName("head")[0];

      /* istanbul ignore if: Presto based Opera */
      if ("[object Opera]" === {}.toString.call(window.opera)) {
        defer(function() {
          head.appendChild(script);
        });
      } else {
        head.appendChild(script);
      }
    }
  };

  var renderSocialCount;

  renderSocialCount = function(button) {
    var api, href, match, property;
    if (button.hostname !== "github.com") {
      return;
    }
    match = button.pathname.replace(/^(?!\/)/, "/").match(/^\/([^\/?#]+)(?:\/([^\/?#]+)(?:\/(?:(subscription)|(fork)|(issues)|([^\/?#]+)))?)?(?:[\/?#]|$)/);
    if (!(match && !match[6])) {
      return;
    }
    if (match[2]) {
      api = "repos/" + match[1] + "/" + match[2];
      if (match[3]) {
        property = "subscribers_count";
        href = "watchers";
      } else if (match[4]) {
        property = "forks_count";
        href = "network";
      } else if (match[5]) {
        property = "open_issues_count";
        href = "issues";
      } else {
        property = "stargazers_count";
        href = "stargazers";
      }
    } else {
      api = "users/" + match[1];
      href = property = "followers";
    }
    fetch(apiBaseURL + api, function(error, json) {
      var a, data, span;
      if (!error) {
        data = json[property];
        a = createElement("a");
        a.href = json.html_url + "/" + href;
        a.className = "social-count";
        a.setAttribute("aria-label", data + " " + (property.replace(/_count$/, "").replace("_", " ")) + " on GitHub");
        a.appendChild(createElement("b"));
        a.appendChild(createElement("i"));
        span = a.appendChild(createElement("span"));
        span.appendChild(createTextNode(("" + data).replace(/\B(?=(\d{3})+(?!\d))/g, ",")));
        button.parentNode.insertBefore(a, button.nextSibling);
      }
    });
  };

  var renderFrameContent;

  renderFrameContent = function(options) {
    var button;
    if (!options) {
      return;
    }
    if (/^large$/i.test(options["data-size"])) {
      document.body.className = "large";
    }
    button = renderButton(options);
    if (/^(true|1)$/i.test(options["data-show-count"])) {
      renderSocialCount(button);
    }
  };

  var parseOptions = function(anchor) {
    var attribute, deprecate, i, len, options, ref;
    options = {
      "href": anchor.href,
      "title": anchor.title,
      "aria-label": anchor.getAttribute("aria-label")
    };
    ref = ["icon", "text", "size", "show-count"];
    for (i = 0, len = ref.length; i < len; i++) {
      attribute = ref[i];
      attribute = "data-" + attribute;
      options[attribute] = anchor.getAttribute(attribute);
    }
    if (options["data-text"] == null) {
      options["data-text"] = anchor.textContent || anchor.innerText;
    }
    deprecate = function(oldAttribute, newAttribute, newValue) {
      if (anchor.getAttribute(oldAttribute)) {
        options[newAttribute] = newValue;
        window.console && console.warn("GitHub Buttons deprecated `" + oldAttribute + "`: use `" + newAttribute + "=\"" + newValue + "\"` instead. Please refer to https://github.com/ntkme/github-buttons#readme for more info.");
      }
    };
    deprecate("data-count-api", "data-show-count", "true");
    deprecate("data-style", "data-size", "large");
    return options;
  };

  var ceilPixel, devicePixelRatio;


  /* istanbul ignore next */

  devicePixelRatio = window.devicePixelRatio || 1;

  ceilPixel = function(px) {
    return (devicePixelRatio > 1 ? Math.ceil(Math.round(px * devicePixelRatio) / devicePixelRatio * 2) / 2 : Math.ceil(px)) || 0;
  };

  var getFrameContentSize, setFrameSize;

  getFrameContentSize = function(iframe) {
    var body, boundingClientRect, contentDocument, display, height, html, width;
    contentDocument = iframe.contentWindow.document;
    html = contentDocument.documentElement;
    body = contentDocument.body;
    width = html.scrollWidth;
    height = html.scrollHeight;
    if (body.getBoundingClientRect) {
      display = body.style.display;
      body.style.display = "inline-block";
      boundingClientRect = body.getBoundingClientRect();
      width = Math.max(width, ceilPixel(boundingClientRect.width || boundingClientRect.right - boundingClientRect.left));
      height = Math.max(height, ceilPixel(boundingClientRect.height || boundingClientRect.bottom - boundingClientRect.top));
      body.style.display = display;
    }
    return [width, height];
  };

  setFrameSize = function(iframe, size) {
    iframe.style.width = size[0] + "px";
    iframe.style.height = size[1] + "px";
  };

  var renderAll;


  /* istanbul ignore next */

  renderAll = function() {
    var anchor, anchors, i, j, len, len1, ref;
    anchors = [];
    if (document.querySelectorAll) {
      anchors = document.querySelectorAll("a." + buttonClass);
    } else {
      ref = document.getElementsByTagName("a");
      for (i = 0, len = ref.length; i < len; i++) {
        anchor = ref[i];
        if (~(" " + anchor.className + " ").replace(/[ \t\n\f\r]+/g, " ").indexOf(" " + buttonClass + " ")) {
          anchors.push(anchor);
        }
      }
    }
    for (j = 0, len1 = anchors.length; j < len1; j++) {
      anchor = anchors[j];
      render(anchor);
    }
  };

  var render;


  /* istanbul ignore next */

  render = function(targetNode, options) {
    var contentDocument, hash, iframe, name, onload, ref, title, value;
    if (targetNode == null) {
      return renderAll();
    }
    if (options == null) {
      options = parseOptions(targetNode);
    }
    hash = "#" + stringifyQueryString(options);
    iframe = createElement("iframe");
    ref = {
      allowtransparency: true,
      scrolling: "no",
      frameBorder: 0
    };
    for (name in ref) {
      value = ref[name];
      iframe.setAttribute(name, value);
    }
    setFrameSize(iframe, [1, 0]);
    iframe.style.border = "none";
    iframe.src = "javascript:0";
    if (title = options.title) {
      iframe.title = title;
    }
    document.body.appendChild(iframe);
    onload = function() {
      var size;
      size = getFrameContentSize(iframe);
      iframe.parentNode.removeChild(iframe);
      onceEvent(iframe, "load", function() {
        setFrameSize(iframe, size);
      });
      iframe.src = baseURL + "buttons.html" + hash;
      targetNode.parentNode.replaceChild(iframe, targetNode);
    };
    onceEvent(iframe, "load", function() {
      var contentWindow;
      contentWindow = iframe.contentWindow;
      if (contentWindow.$) {
        contentWindow.$ = onload;
      } else {
        onload();
      }
    });
    contentDocument = iframe.contentWindow.document;
    contentDocument.open().write("<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>" + uuid + "</title><link rel=\"stylesheet\" href=\"" + baseURL + "assets/css/buttons.css\"><script>document.location.hash = \"" + hash + "\";</script></head><body><script src=\"" + baseURL + "buttons.js\"></script></body></html>");
    contentDocument.close();
  };

  if (typeof define === "function" && define.amd) {
    define([], {
      render: render
    });
  } else if (typeof exports === "object" && typeof exports.nodeName !== "string") {
    exports.render = render;
  } else {
    if (currentScriptURL) {
      setBaseURL(currentScriptURL.replace(/[^\/]*([?#].*)?$/, ""));
    }
    if (document.title === uuid) {
      renderFrameContent(parseQueryString(document.location.hash.replace(/^#/, "")));
    } else {
      defer(renderAll);
    }
  }

}());
