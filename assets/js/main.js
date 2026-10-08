// LucianaiB 个人主页：只做交互增强，全部内容都写在 HTML 中，禁用 JS 也能完整阅读。
(function () {
  'use strict';
  var root = document.documentElement;

  // 深色模式：默认跟随系统，手动切换后记住选择（存储不可用时仅本次生效）
  var themeBtn = document.querySelector('.theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var cur = root.getAttribute('data-theme');
      if (!cur) cur = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      var next = cur === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  // 移动端导航
  var navBtn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (navBtn && nav) {
    var setOpen = function (open) {
      nav.classList.toggle('open', open);
      navBtn.setAttribute('aria-expanded', String(open));
      navBtn.setAttribute('aria-label', open ? '关闭导航' : '打开导航');
    };
    navBtn.addEventListener('click', function () { setOpen(!nav.classList.contains('open')); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
  }

  // 一键复制微信号：Clipboard API 优先，不可用时回退 execCommand，再不行就选中文字
  function fallbackCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text; ta.setAttribute('readonly', '');
    ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
    document.body.removeChild(ta);
    return ok;
  }
  function feedback(btn, ok) {
    var label = btn.querySelector('span');
    var status = btn.parentElement && btn.parentElement.querySelector('.copy-status');
    var original = btn.getAttribute('data-label') || (label ? label.textContent : '');
    btn.setAttribute('data-label', original);
    if (label) label.textContent = ok ? '已复制' : '请手动复制';
    btn.classList.toggle('done', ok);
    if (status) status.textContent = ok ? '已复制，打开微信搜索添加即可' : '复制失败，请长按微信号手动复制';
    clearTimeout(btn._t);
    btn._t = setTimeout(function () {
      if (label) label.textContent = original;
      btn.classList.remove('done');
      if (status) status.textContent = '';
    }, 2500);
  }
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var text = btn.getAttribute('data-copy');
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(function () { feedback(btn, true); }, function () { feedback(btn, fallbackCopy(text)); });
      } else {
        feedback(btn, fallbackCopy(text));
      }
    });
  });

  // 导航高亮当前所在板块
  if ('IntersectionObserver' in window && nav) {
    var links = {};
    nav.querySelectorAll('a[href^="#"]').forEach(function (a) { links[a.getAttribute('href').slice(1)] = a; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && links[en.target.id]) {
          Object.keys(links).forEach(function (k) { links[k].removeAttribute('aria-current'); });
          links[en.target.id].setAttribute('aria-current', 'true');
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    Object.keys(links).forEach(function (id) { var el = document.getElementById(id); if (el) io.observe(el); });
  }
})();
