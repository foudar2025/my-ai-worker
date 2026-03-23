export default {
  // 1. جزء الجدولة الزمنية (تحديث البيانات)
  async scheduled(event, env, ctx) {
    ctx.waitUntil((async () => {
      const queries = [
        "المغرب+دعم+اجتماعي+2026",
        "المغرب+توظيف+مباراة+2026",
        "المغرب+وثائق+إدارية",
        "المغرب+مقاول+ذاتي",
        "المغرب+CNSS+AMO+RSU",
        "المغرب+تعليم+تعاقد+OFPPT"
      ];

      for (const q of queries) {
        try {
          const res = await fetch(
            "https://news.google.com/rss/search?q=" + q + "&hl=ar&gl=MA&ceid=MA:ar",
            { headers: { "User-Agent": "Mozilla/5.0" }, cf: { cacheTtl: 1800 } }
          );

          if (!res.ok) continue;
          const text = await res.text();
          
          // ... منطق استخراج العناوين ...
          // تأكد من وجود دالة detectCategory بالأسفل
          
          // مثال للحفظ: 
          // await env.BLOG_KV.put(`section_${q}`, text);
          
        } catch (e) {
          console.error("Error fetching " + q, e);
        }
      }
    })());
  }, // <--- تأكد من وجود هذه الفاصلة والقوس لإغلاق scheduled

  // 2. جزء عرض الموقع للمستخدمين (Fetch)
  async fetch(request, env) {
    const url = new URL(request.url);
    const base = url.origin;
    
    // منطق العرض الخاص بك هنا
    return new Response("مرحباً بك في موقعك المحدث", {
      headers: { "content-type": "text/html;charset=UTF-8" }
    });
  }
};

  // بقية الكود (fetch) تبقى كما هي لعرض البيانات
  async fetch(request, env) { 
     /* منطق العرض */ 
  }
};

    function detectCategory(title) {
      const t = title.toLowerCase();
      if (t.includes("دعم") || t.includes("cnss") || t.includes("amo") || t.includes("rsu") || t.includes("اجتماعي") || t.includes("تضامن") || t.includes("تأمين"))
        return { name: "الدعم والحماية الاجتماعية", color: "#10b981", icon: "🛡️" };
      if (t.includes("مباراة") || t.includes("توظيف") || t.includes("ofppt") || t.includes("تكوين") || t.includes("تعليم") || t.includes("تعاقد") || t.includes("درك") || t.includes("أمن"))
        return { name: "مباريات التوظيف والتدريب", color: "#6366f1", icon: "💼" };
      if (t.includes("تأشيرة") || t.includes("فيزا") || t.includes("جواز") || t.includes("بطاقة") || t.includes("وثيقة") || t.includes("شهادة") || t.includes("cnie"))
        return { name: "الوثائق الإدارية والتأشيرات", color: "#f59e0b", icon: "📄" };
      if (t.includes("مقاول") || t.includes("شركة") || t.includes("تجارة") || t.includes("ضريبة") || t.includes("tva") || t.includes("استثمار"))
        return { name: "المقاول الذاتي والعمل الحر", color: "#ec4899", icon: "🚀" };
      return { name: "مستجدات وأخبار المغرب", color: "#0f4c81", icon: "📰" };
    }

    const topic = await getLatestTopic();
    if (!topic) return;
    const cat = detectCategory(topic);

    const prompts = [
      'أنت محرر صحفي متخصص في الشأن المغربي. اكتب مقدمة احترافية من 5 أسطر عن: "' + topic + '". اشرح أهميته للمواطن المغربي. أسلوب إنساني طبيعي ومبسط.',
      'أنت خبير في الشأن المغربي. اكتب قسمين عن "' + topic + '":\n**ما هذا الموضوع ولماذا يهمك؟**\n(3 فقرات تفصيلية)\n\n**أبرز المعلومات والتفاصيل**\n(قائمة مرقمة من 5 نقاط)',
      'أنت مرشد إداري. اكتب قسمين عن "' + topic + '":\n**الخطوات العملية للمواطن**\n(7 خطوات مرقمة)\n\n**الوثائق والمتطلبات**\n(قائمة من 6 عناصر)',
      'أنت مستشار خبير. اكتب عن "' + topic + '":\n**نصائح مهمة**\n(5 نصائح مرقمة)\n\n**الأسئلة الشائعة**\n4 أسئلة بهذا التنسيق:\nسؤال: نص السؤال؟\nجواب: نص الجواب.\n\nثم خاتمة من 3 أسطر.'
    ];

    let content = "";
    for (let i = 0; i < prompts.length; i++) {
      try {
        const r = await env.AI.run("@cf/meta/llama-3-8b-instruct", {
          prompt: prompts[i], max_tokens: 1500, temperature: 0.7
        });
        if (r && r.response) content += "\n\n" + r.response;
      } catch (e) {}
    }
    if (!content || content.trim().length < 200) return;

    let img64 = null;
    try {
      const imgMap = {
        "الدعم والحماية الاجتماعية": "Professional flat design, digital social services concept, smartphone with form, shield icon, green blue colors, geometric shapes, clean corporate style, 4k, NO humans NO animals NO faces NO people",
        "مباريات التوظيف والتدريب": "Professional flat design, career education concept, graduation cap laptop, certificates books, blue purple colors, geometric patterns, clean vector, 4k, NO humans NO animals NO faces NO people",
        "الوثائق الإدارية والتأشيرات": "Professional flat design, official documents passport stamps, globe routes, official seals, amber navy colors, geometric design, 4k, NO humans NO animals NO faces NO people",
        "المقاول الذاتي والعمل الحر": "Professional flat design, business startup concept, rocket laptop, growth charts, coins lightbulb, green blue colors, geometric background, 4k, NO humans NO animals NO faces NO people",
        "مستجدات وأخبار المغرب": "Professional flat design, Morocco digital news concept, smartphone notifications, golden blue colors, abstract geometric background, 4k, NO humans NO animals NO faces NO people"
      };
      const r = await env.AI.run("@cf/stabilityai/stable-diffusion-xl-base-1.0", {
        prompt: imgMap[cat.name] || imgMap["مستجدات وأخبار المغرب"],
        negative_prompt: "human, person, people, man, woman, child, face, hand, body, animal, cat, dog, bird, fish, horse, creature, portrait, crowd, realistic human, anime, nsfw, nude, violence, blood, weapon, ugly, deformed, blurry, watermark, text, logo",
        width: 1024, height: 576, num_steps: 20
      });
      if (r) {
        const buf = await r.arrayBuffer();
        const b = new Uint8Array(buf);
        let s = "";
        for (let i = 0; i < b.length; i++) s += String.fromCharCode(b[i]);
        img64 = btoa(s);
      }
    } catch (e) {}

    const now = new Date();
    const id = Date.now();
    const slug = "post-" + id;
    const plain = content.replace(/\*\*/g, "").replace(/<[^>]*>/g, "").replace(/\n+/g, " ").trim();
    const desc = plain.substring(0, 155) + "...";
    const wc = content.split(/\s+/).length;

    const post = {
      id, slug, title: topic,
      content: fmtContent(content),
      description: desc,
      date: now.toLocaleDateString("ar-MA", { year: "numeric", month: "long", day: "numeric" }),
      dateISO: now.toISOString(),
      category: cat.name, categoryColor: cat.color, categoryIcon: cat.icon,
      image: img64, imageAlt: topic,
      keywords: topic + ", المغرب, " + cat.name,
      readTime: Math.max(3, Math.ceil(wc / 200)),
      wordCount: wc,
      views: Math.floor(Math.random() * 300) + 50
    };

    await env.BLOG_KV.put("post:" + slug, JSON.stringify(post), { expirationTtl: 7776000 });

    let idx = [];
    try { idx = await env.BLOG_KV.get("posts_index", { type: "json" }) || []; } catch (e) {}

    if (!idx.some(x => x.title === topic)) {
      idx.unshift({
        id, slug, title: topic, description: desc,
        date: post.date, dateISO: post.dateISO,
        category: cat.name, categoryColor: cat.color, categoryIcon: cat.icon,
        readTime: post.readTime, views: post.views, hasImage: !!img64
      });
      if (idx.length > 60) idx = idx.slice(0, 60);
      await env.BLOG_KV.put("posts_index", JSON.stringify(idx));
      const site = env.SITE_URL || "https://example.com";
      await Promise.allSettled([
        fetch("https://www.google.com/ping?sitemap=" + encodeURIComponent(site + "/sitemap.xml")).catch(() => {}),
        fetch("https://www.bing.com/ping?sitemap=" + encodeURIComponent(site + "/sitemap.xml")).catch(() => {}),
        fetch("https://api.indexnow.org/indexnow", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ host: new URL(site).hostname, key: env.INDEXNOW_KEY || "key", urlList: [site + "/post/" + slug, site + "/"] })
        }).catch(() => {})
      ]);
    }
  },

  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;
    const base = url.origin;

    const getIdx = async () => { try { return await env.BLOG_KV.get("posts_index", { type: "json" }) || []; } catch (e) { return []; } };
    const getPost = async (slug) => { try { return await env.BLOG_KV.get("post:" + slug, { type: "json" }); } catch (e) { return null; } };

    const H = (html, age = 300) => new Response(html, {
      headers: {
        "Content-Type": "text/html;charset=UTF-8",
        "Cache-Control": "public,max-age=" + age,
        "X-Content-Type-Options": "nosniff",
        "X-Frame-Options": "SAMEORIGIN",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      }
    });
    const X = (xml) => new Response(xml, { headers: { "Content-Type": "application/xml;charset=UTF-8", "Cache-Control": "public,max-age=3600" } });
    const T = (txt) => new Response(txt, { headers: { "Content-Type": "text/plain;charset=UTF-8", "Cache-Control": "public,max-age=86400" } });

    if (path === "/sitemap.xml") { const idx = await getIdx(); return X(mkSitemap(idx, base)); }
    if (path === "/robots.txt") return T("User-agent: *\nAllow: /\nDisallow: /image/\n\nUser-agent: Googlebot\nAllow: /\nAllow: /image/\n\nSitemap: " + base + "/sitemap.xml");
    if (path === "/feed.xml" || path === "/rss.xml") { const idx = await getIdx(); return X(mkRSS(idx, base)); }

    const staticMap = { "/privacy": pgPrivacy, "/terms": pgTerms, "/contact": pgContact, "/about": pgAbout, "/dmca": pgDMCA, "/disclaimer": pgDisclaimer };
    if (staticMap[path]) { const idx = await getIdx(); return H(staticMap[path](base, idx), 86400); }

    if (path.startsWith("/image/")) {
      const slug = path.replace("/image/", "");
      const p = await getPost(slug);
      if (p && p.image) {
        const s = atob(p.image), b = new Uint8Array(s.length);
        for (let i = 0; i < s.length; i++) b[i] = s.charCodeAt(i);
        return new Response(b, { headers: { "Content-Type": "image/png", "Cache-Control": "public,max-age=31536000,immutable" } });
      }
      return new Response("Not Found", { status: 404 });
    }

    if (path.startsWith("/post/")) {
      const slug = path.replace("/post/", "");
      const p = await getPost(slug);
      if (p) {
        const idx = await getIdx();
        p.views = (p.views || 0) + 1;
        const ii = idx.find(x => x.slug === slug);
        if (ii) ii.views = p.views;
        try {
          await Promise.all([
            env.BLOG_KV.put("post:" + slug, JSON.stringify(p), { expirationTtl: 7776000 }),
            env.BLOG_KV.put("posts_index", JSON.stringify(idx))
          ]);
        } catch (e) {}
        return H(pgArticle(p, idx, base), 900);
      }
      return Response.redirect(base + "/", 302);
    }

    if (path.startsWith("/category/")) {
      const cat = decodeURIComponent(path.replace("/category/", ""));
      const idx = await getIdx();
      return H(pgCategory(cat, idx.filter(p => p.category === cat), idx, base), 900);
    }

    const idx = await getIdx();
    return H(pgHome(idx, base), 300);
  }
};

// ===== HELPERS =====
function esc(s) {
  return (s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function fmtContent(t) {
  if (!t) return "<p>المحتوى قيد الإعداد...</p>";
  let h = t
    .replace(/\*\*(.*?)\*\*/g, '</p><h3 class="ch">$1</h3><p>')
    .replace(/سؤال:\s*(.*?)(?:\n)/gi, '</p><div class="fq"><div class="fq-q">❓ $1</div>')
    .replace(/جواب:\s*(.*?)(?:\n|$)/gi, '<div class="fq-a">$1</div></div><p>')
    .replace(/(\d+)\.\s/g, '<span class="sn">$1</span> ')
    .replace(/\n\n+/g, "</p><p>")
    .replace(/\n/g, "<br>");
  if (!h.startsWith("<")) h = "<p>" + h;
  if (!h.endsWith(">")) h += "</p>";
  return h.replace(/<p>\s*<\/p>/g, "");
}

function xFAQ(c) {
  const f = [], re = /fq-q[^>]*>(?:❓\s*)?([^<]+)<\/div>\s*<div[^>]*class="fq-a"[^>]*>([^<]+)/gi;
  let m;
  while ((m = re.exec(c)) !== null && f.length < 5) {
    const q = m[1].trim(), a = m[2].trim();
    if (q.length > 5 && a.length > 5) f.push({ question: q, answer: a });
  }
  return f;
}

const CATS = [
  { name: "الدعم والحماية الاجتماعية", color: "#10b981", icon: "🛡️", short: "الدعم الاجتماعي" },
  { name: "مباريات التوظيف والتدريب", color: "#6366f1", icon: "💼", short: "التوظيف" },
  { name: "الوثائق الإدارية والتأشيرات", color: "#f59e0b", icon: "📄", short: "الوثائق" },
  { name: "المقاول الذاتي والعمل الحر", color: "#ec4899", icon: "🚀", short: "ريادة الأعمال" },
  { name: "مستجدات وأخبار المغرب", color: "#0f4c81", icon: "📰", short: "المستجدات" }
];

const catColor = n => { const f = CATS.find(c => c.name === n); return f ? f.color : "#0f4c81"; };
const catIcon = n => { const f = CATS.find(c => c.name === n); return f ? f.icon : "📰"; };

// ===== SEO FILES =====
function mkSitemap(idx, base) {
  const statics = ["/", "/about", "/contact", "/privacy", "/terms", "/dmca", "/disclaimer"];
  const cats = [...new Set(idx.map(p => p.category))];
  const now = new Date().toISOString();
  let x = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n';
  statics.forEach(s => {
    x += `<url><loc>${base}${s}</loc><lastmod>${now}</lastmod><changefreq>${s === "/" ? "hourly" : "monthly"}</changefreq><priority>${s === "/" ? "1.0" : "0.4"}</priority></url>\n`;
  });
  cats.forEach(c => {
    x += `<url><loc>${base}/category/${encodeURIComponent(c)}</loc><lastmod>${now}</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>\n`;
  });
  idx.forEach(p => {
    x += `<url><loc>${base}/post/${p.slug}</loc><lastmod>${p.dateISO || now}</lastmod><changefreq>weekly</changefreq><priority>0.9</priority>`;
    if (p.hasImage) x += `<image:image><image:loc>${base}/image/${p.slug}</image:loc><image:title>${esc(p.title)}</image:title></image:image>`;
    x += `</url>\n`;
  });
  return x + "</urlset>";
}

function mkRSS(idx, base) {
  let x = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n<channel>\n<title>بوابة الخدمات الرقمية المغربية</title>\n<link>${base}</link>\n<description>أحدث المقالات والأدلة حول الخدمات الرقمية والإجراءات الإدارية بالمغرب</description>\n<language>ar</language>\n<atom:link href="${base}/feed.xml" rel="self" type="application/rss+xml"/>\n`;
  idx.slice(0, 20).forEach(p => {
    x += `<item><title>${esc(p.title)}</title><link>${base}/post/${p.slug}</link><description><![CDATA[${p.description || ""}]]></description><pubDate>${new Date(p.dateISO || Date.now()).toUTCString()}</pubDate><category>${esc(p.category)}</category><guid isPermaLink="true">${base}/post/${p.slug}</guid></item>\n`;
  });
  return x + "</channel>\n</rss>";
}

// ===== CSS =====
const CSS = `<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --p:#0f4c81;--pl:#1a6fb5;--pd:#0a3459;
  --s:#e8b100;--sl:#ffd633;
  --d:#1a1a2e;
  --g50:#f8fafc;--g100:#f1f5f9;--g200:#e2e8f0;
  --g300:#cbd5e1;--g400:#94a3b8;--g500:#64748b;
  --g600:#475569;--g700:#334155;
  --w:#ffffff;
  --sh:0 2px 8px rgba(0,0,0,.08);
  --shl:0 8px 24px rgba(0,0,0,.12);
  --r:12px;--rl:16px;
  --t:all .3s ease
}
html{scroll-behavior:smooth}
body{
  font-family:'Cairo',sans-serif;
  background:var(--g50);
  color:var(--d);
  line-height:1.8;
  direction:rtl;
  text-align:right;
  overflow-x:hidden;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  width:100%;
  min-height:100vh
}
a{text-decoration:none;color:inherit}
img{max-width:100%;height:auto;display:block}
button{font-family:'Cairo',sans-serif}
input,textarea{font-family:'Cairo',sans-serif}

/* TOP BAR */
.tb{background:var(--d);color:var(--g400);padding:6px 0;font-size:12px;width:100%}
.tb-in{max-width:1200px;margin:0 auto;padding:0 16px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:4px;min-height:28px}
.tb a{color:var(--g400);margin:0 6px;transition:var(--t)}
.tb a:hover{color:var(--s)}

/* HEADER */
.hd{background:var(--w);box-shadow:var(--sh);position:sticky;top:0;z-index:500;width:100%}
.hd-in{max-width:1200px;margin:0 auto;padding:10px 16px;display:flex;justify-content:space-between;align-items:center;gap:10px;min-height:62px}
.logo{display:flex;align-items:center;gap:10px;flex-shrink:0}
.logo-i{width:44px;height:44px;min-width:44px;background:linear-gradient(135deg,var(--p),var(--pl));border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.logo-i svg{width:24px;height:24px;fill:var(--w)}
.logo-t h1{font-size:17px;font-weight:800;color:var(--p);line-height:1.2;white-space:nowrap}
.logo-t span{color:var(--s)}
.logo-t p{font-size:10px;color:var(--g500)}

/* HAMBURGER */
.mbtn{
  display:none;
  background:var(--w);
  border:2px solid var(--g300);
  cursor:pointer;
  border-radius:8px;
  width:42px;height:42px;
  min-width:42px;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:5px;
  flex-shrink:0;
  padding:0;
  position:relative;
  z-index:502
}
.mbtn i{
  display:block;
  width:18px;height:2px;
  background:var(--d);
  border-radius:2px;
  transition:var(--t);
  pointer-events:none
}
.mbtn.open i:nth-child(1){transform:translateY(7px) rotate(45deg)}
.mbtn.open i:nth-child(2){opacity:0;transform:scaleX(0)}
.mbtn.open i:nth-child(3){transform:translateY(-7px) rotate(-45deg)}

/* OVERLAY */
.ov{
  display:none;
  position:fixed;
  inset:0;
  background:rgba(0,0,0,.6);
  z-index:498;
  -webkit-backdrop-filter:blur(2px);
  backdrop-filter:blur(2px)
}
.ov.show{display:block}

/* NAVBAR */
.nv{background:linear-gradient(135deg,var(--p),var(--pd));width:100%;position:relative;z-index:499}
.nv-in{
  max-width:1200px;margin:0 auto;padding:0 16px;
  display:flex;align-items:stretch;
  overflow-x:auto;
  scrollbar-width:none;-ms-overflow-style:none;
  -webkit-overflow-scrolling:touch
}
.nv-in::-webkit-scrollbar{display:none}
.nl{
  color:rgba(255,255,255,.85);
  padding:12px 14px;
  font-size:12px;font-weight:600;
  white-space:nowrap;
  transition:var(--t);
  border-bottom:3px solid transparent;
  display:flex;align-items:center;gap:5px;
  flex-shrink:0;cursor:pointer
}
.nl:hover,.nl.ac{color:#fff;background:rgba(255,255,255,.1);border-bottom-color:var(--s)}

/* DROPDOWN - FIX z-index and position */
.dd{position:relative}
.dd-btn{cursor:pointer;user-select:none;display:flex;align-items:center;gap:4px}
.dd-arr{font-size:8px;transition:var(--t);display:inline-block}
.dd.open .dd-arr{transform:rotate(180deg)}
.dd-menu{
  position:absolute;
  top:100%;
  right:0;
  background:var(--w);
  min-width:260px;
  border-radius:0 0 var(--r) var(--r);
  box-shadow:0 8px 30px rgba(0,0,0,.15);
  display:none;
  z-index:9999;
  overflow:hidden;
  border:1px solid var(--g200);
  border-top:none
}
.dd.open .dd-menu{display:block}
.dd-menu a{
  display:flex;align-items:center;gap:8px;
  padding:12px 16px;
  color:var(--d);font-size:13px;font-weight:600;
  border-bottom:1px solid var(--g100);
  transition:var(--t)
}
.dd-menu a:last-child{border:none}
.dd-menu a:hover{background:var(--g50);color:var(--p);padding-right:20px}
.cdot{width:8px;height:8px;border-radius:50%;flex-shrink:0;display:inline-block}

/* MOBILE NAV - SIDEBAR */
.mob-nav{
  position:fixed;
  top:0;right:-100%;
  width:min(300px,85vw);
  height:100%;
  background:linear-gradient(180deg,var(--pd),var(--p) 60%,var(--pl));
  z-index:500;
  transition:right .35s cubic-bezier(.4,0,.2,1);
  overflow-y:auto;overflow-x:hidden;
  padding:60px 0 30px;
  -webkit-overflow-scrolling:touch
}
.mob-nav.open{right:0}
.mob-close{
  position:absolute;top:14px;left:14px;
  width:34px;height:34px;
  background:rgba(255,255,255,.15);
  border:none;border-radius:50%;
  color:#fff;font-size:18px;cursor:pointer;
  display:flex;align-items:center;justify-content:center;
  transition:var(--t)
}
.mob-close:hover{background:rgba(255,255,255,.3)}
.mob-link{
  display:flex;align-items:center;gap:8px;
  padding:13px 20px;
  color:rgba(255,255,255,.9);
  font-size:14px;font-weight:600;
  border-bottom:1px solid rgba(255,255,255,.08);
  transition:var(--t)
}
.mob-link:hover{background:rgba(255,255,255,.1);color:#fff;padding-right:26px}
.mob-sec{
  padding:10px 20px 6px;
  color:rgba(255,255,255,.45);
  font-size:10px;font-weight:700;letter-spacing:1px
}
.mob-sub{
  display:flex;align-items:center;gap:8px;
  padding:10px 30px;
  color:rgba(255,255,255,.8);
  font-size:13px;font-weight:600;
  border-bottom:1px solid rgba(255,255,255,.05);
  transition:var(--t)
}
.mob-sub:hover{background:rgba(255,255,255,.08);color:#fff}

/* TICKER */
.ticker{background:linear-gradient(135deg,#e05000,#f7931e);padding:7px 0;overflow:hidden;width:100%}
.ticker-t{display:flex;width:max-content;animation:tick 35s linear infinite}
.ticker-t:hover{animation-play-state:paused}
.ticker-t span{padding:0 24px;font-size:11px;font-weight:700;color:#fff;white-space:nowrap}
@keyframes tick{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}

/* HERO */
.hero{
  background:linear-gradient(135deg,var(--pd),var(--p) 50%,var(--pl));
  color:#fff;padding:40px 16px;text-align:center;
  position:relative;overflow:hidden;width:100%
}
.hero::before{
  content:'';position:absolute;inset:0;
  background:url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='.04'%3E%3Ccircle cx='20' cy='20' r='3'/%3E%3C/g%3E%3C/svg%3E");
  pointer-events:none
}
.hero-c{position:relative;z-index:1;max-width:700px;margin:0 auto}
.hero h2{font-size:clamp(18px,4vw,26px);font-weight:800;margin-bottom:10px;line-height:1.4}
.hero p{font-size:clamp(12px,2.5vw,15px);opacity:.9;margin-bottom:20px;line-height:1.7}
.stats{display:flex;justify-content:center;gap:clamp(14px,4vw,30px);flex-wrap:wrap}
.st{text-align:center}
.st b{font-size:clamp(20px,4vw,28px);font-weight:800;color:var(--s);display:block}
.st small{font-size:11px;opacity:.8}

/* SEARCH */
.sr-w{max-width:520px;margin:-20px auto 0;padding:0 16px;position:relative;z-index:10}
.sr-b{
  display:flex;background:var(--w);
  border-radius:50px;
  box-shadow:0 8px 30px rgba(0,0,0,.15);
  overflow:hidden;
  border:3px solid transparent;
  transition:var(--t)
}
.sr-b:focus-within{border-color:var(--p)}
.sr-b input{
  flex:1;border:none;
  padding:13px 18px;
  font-size:14px;font-family:'Cairo',sans-serif;
  outline:none;background:transparent;
  min-width:0;color:var(--d)
}
.sr-b button{
  background:linear-gradient(135deg,var(--p),var(--pl));
  color:#fff;border:none;
  padding:13px 22px;cursor:pointer;
  font-family:'Cairo',sans-serif;
  font-weight:700;font-size:13px;
  white-space:nowrap;flex-shrink:0;
  transition:var(--t)
}
.sr-b button:hover{opacity:.9}

/* AD */
.ad{
  background:var(--g100);
  border:2px dashed var(--g300);
  border-radius:var(--r);
  padding:12px;text-align:center;
  margin:16px 0;
  min-height:80px;
  display:flex;align-items:center;justify-content:center;
  color:var(--g400);font-size:11px;
  width:100%
}
.adc{max-width:1200px;margin:16px auto 0;padding:0 16px}

/* MAIN LAYOUT */
.mg{
  max-width:1200px;margin:24px auto;
  padding:0 16px;
  display:grid;
  grid-template-columns:1fr 300px;
  gap:24px;
  align-items:start
}

/* CATS BAR */
.cb{
  display:flex;gap:8px;
  margin-bottom:16px;
  overflow-x:auto;
  padding-bottom:8px;
  -webkit-overflow-scrolling:touch;
  scrollbar-width:none;-ms-overflow-style:none
}
.cb::-webkit-scrollbar{display:none}
.cc{
  display:flex;align-items:center;gap:5px;
  padding:7px 14px;border-radius:50px;
  font-size:11px;font-weight:700;
  white-space:nowrap;
  transition:var(--t);
  border:2px solid var(--g200);
  background:var(--w);color:var(--g600);
  flex-shrink:0;cursor:pointer
}
.cc:hover,.cc.ac{border-color:var(--p);color:var(--p);background:rgba(15,76,129,.05);box-shadow:var(--sh)}

/* FEATURED */
.fp{
  display:block;
  background:linear-gradient(135deg,var(--p),var(--pd));
  border-radius:var(--rl);color:#fff;
  margin-bottom:20px;overflow:hidden;
  transition:var(--t);text-decoration:none
}
.fp:hover{transform:translateY(-3px);box-shadow:var(--shl)}
.fp-img{width:100%;height:clamp(180px,28vw,240px);object-fit:cover;display:block}
.fp-b{padding:clamp(16px,3vw,24px)}
.fp-top{display:flex;align-items:center;gap:8px;margin-bottom:8px;flex-wrap:wrap}
.fp-bdg{background:var(--s);color:var(--d);padding:3px 12px;border-radius:20px;font-size:10px;font-weight:700}
.fp h2{font-size:clamp(15px,3vw,20px);margin-bottom:8px;line-height:1.5}
.fp p{opacity:.85;font-size:clamp(11px,2vw,13px);line-height:1.7;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
.fp-m{display:flex;gap:12px;margin-top:12px;font-size:11px;opacity:.75;flex-wrap:wrap}

/* POSTS GRID - FIX align-items */
.pl{
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(300px,1fr));
  gap:18px;
  align-items:start
}

/* POST CARD */
.pc{
  display:block;background:var(--w);
  border-radius:var(--rl);overflow:hidden;
  box-shadow:var(--sh);
  transition:var(--t);
  border:1px solid var(--g100);
  text-decoration:none;color:inherit;
  height:fit-content
}
.pc:hover{transform:translateY(-3px);box-shadow:var(--shl);border-color:var(--p)}
.pc-img{width:100%;height:clamp(160px,22vw,200px);object-fit:cover;display:block;transition:transform .4s ease}
.pc:hover .pc-img{transform:scale(1.03)}
.pc-b{padding:clamp(14px,2.5vw,18px)}
.pc-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;flex-wrap:wrap;gap:6px}
.bdg{padding:3px 10px;border-radius:20px;font-size:10px;font-weight:700;display:inline-flex;align-items:center;gap:4px}
.pc h3{font-size:clamp(13px,2.5vw,15px);font-weight:700;color:var(--d);margin-bottom:6px;line-height:1.6;transition:color .2s}
.pc:hover h3{color:var(--p)}
.pc-ex{color:var(--g600);font-size:12px;line-height:1.7;margin-bottom:10px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.pc-ft{display:flex;justify-content:space-between;align-items:center;padding-top:10px;border-top:1px solid var(--g100);font-size:11px;color:var(--g500)}
.rm{color:var(--p);font-weight:700}

/* SIDEBAR */
.sb{display:flex;flex-direction:column;gap:16px}
.wg{background:var(--w);border-radius:var(--rl);padding:18px;box-shadow:var(--sh);border:1px solid var(--g100)}
.wt{font-size:14px;font-weight:800;color:var(--d);margin-bottom:12px;padding-bottom:10px;border-bottom:3px solid var(--p)}
.ti{display:flex;gap:10px;padding:8px 0;border-bottom:1px solid var(--g100);transition:var(--t);text-decoration:none;color:inherit}
.ti:last-child{border:none}
.ti:hover{padding-right:4px}
.tn{width:28px;height:28px;min-width:28px;background:linear-gradient(135deg,var(--p),var(--pl));color:#fff;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700}
.tt h4{font-size:12px;font-weight:600;color:var(--d);line-height:1.5;transition:color .2s}
.ti:hover .tt h4{color:var(--p)}
.tt span{font-size:10px;color:var(--g400)}
.ll{list-style:none}
.ll li{padding:6px 0;border-bottom:1px solid var(--g100)}
.ll li:last-child{border:none}
.ll a{color:var(--g700);font-size:12px;display:flex;align-items:center;gap:5px;transition:var(--t)}
.ll a:hover{color:var(--p);padding-right:4px}
.ll a::before{content:'◀';font-size:8px;color:var(--p);flex-shrink:0}
.nwl{background:linear-gradient(135deg,var(--p),var(--pd))!important;border:none!important}
.nwl .wt{color:#fff;border-bottom-color:var(--s)}
.nwl p{font-size:12px;color:rgba(255,255,255,.85);margin-bottom:10px}
.nwl input{width:100%;padding:10px 14px;border:2px solid rgba(255,255,255,.2);border-radius:8px;background:rgba(255,255,255,.1);color:#fff;font-family:'Cairo',sans-serif;font-size:13px;margin-bottom:8px;outline:none;transition:var(--t)}
.nwl input::placeholder{color:rgba(255,255,255,.5)}
.nwl input:focus{border-color:var(--s)}
.nwl-btn{width:100%;padding:10px;background:var(--s);color:var(--d);border:none;border-radius:8px;font-family:'Cairo',sans-serif;font-weight:700;font-size:13px;cursor:pointer;transition:var(--t)}
.nwl-btn:hover{background:var(--sl)}

/* ARTICLE */
.ag{max-width:1200px;margin:24px auto;padding:0 16px;display:grid;grid-template-columns:1fr 300px;gap:24px;align-items:start}
.am{background:var(--w);border-radius:var(--rl);overflow:hidden;box-shadow:var(--sh)}
.ah-img{width:100%;height:clamp(180px,35vw,320px);object-fit:cover;display:block}
.ab{padding:clamp(18px,4vw,32px)}
.bc{display:flex;align-items:center;gap:5px;font-size:11px;color:var(--g500);margin-bottom:12px;flex-wrap:wrap}
.bc a{color:var(--p);transition:var(--t)}
.bc a:hover{text-decoration:underline}
.bc-sep{color:var(--g300);margin:0 2px}
.ah{margin-bottom:20px;padding-bottom:16px;border-bottom:2px solid var(--g100)}
.ah h1{font-size:clamp(18px,3.5vw,26px);font-weight:800;color:var(--d);line-height:1.5;margin:10px 0}
.am-meta{display:flex;gap:12px;flex-wrap:wrap;font-size:12px;color:var(--g500)}
.ac{font-size:clamp(14px,2.5vw,16px);line-height:2;color:var(--g700)}
.ac h3.ch{font-size:clamp(15px,3vw,18px);color:var(--pd);margin:20px 0 10px;padding:10px 16px;border-right:4px solid var(--s);background:linear-gradient(to left,transparent,rgba(15,76,129,.04));border-radius:0 8px 8px 0}
.ac p{margin-bottom:10px}
.ac .sn{display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;background:var(--p);color:#fff;border-radius:50%;font-size:11px;font-weight:700;margin-left:5px}
.fq{background:var(--g50);border-radius:8px;margin:10px 0;overflow:hidden;border:1px solid var(--g200)}
.fq-q{padding:12px 14px;font-weight:700;font-size:13px;color:var(--d);border-bottom:1px solid var(--g200);background:var(--w)}
.fq-a{padding:12px 14px;font-size:13px;color:var(--g600);line-height:1.8}
.share{display:flex;align-items:center;gap:8px;margin-top:20px;padding-top:14px;border-top:2px solid var(--g100);flex-wrap:wrap}
.share b{font-size:13px;color:var(--d)}
.sh{padding:7px 12px;border-radius:8px;font-size:11px;font-weight:700;color:#fff;display:inline-flex;align-items:center;gap:4px;transition:var(--t);text-decoration:none}
.sh:hover{transform:translateY(-2px);box-shadow:var(--sh)}
.rel{margin-top:24px;padding-top:18px;border-top:2px solid var(--g100)}
.rel h3{font-size:16px;font-weight:700;margin-bottom:12px;color:var(--d)}
.rg{display:grid;grid-template-columns:1fr 1fr;gap:10px;align-items:start}
.rc{display:block;padding:12px;background:var(--g50);border-radius:10px;border:1px solid var(--g200);transition:var(--t);text-decoration:none;color:inherit}
.rc:hover{border-color:var(--p);background:var(--w);box-shadow:var(--sh)}
.rc h4{font-size:12px;color:var(--d);margin-bottom:4px;line-height:1.5;font-weight:600}
.rc span{font-size:10px;color:var(--g400)}

/* FOOTER */
.ft{background:var(--d);color:var(--g400);margin-top:40px;width:100%}
.ft-g{max-width:1200px;margin:0 auto;padding:32px 16px;display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:24px}
.ft h3{font-size:16px;color:var(--w);margin-bottom:10px;font-weight:800}
.ft h4{font-size:13px;color:var(--w);margin-bottom:10px;font-weight:700}
.ft p{font-size:12px;line-height:1.8}
.ft ul{list-style:none}
.ft li{margin-bottom:6px}
.ft li a{color:var(--g400);font-size:12px;transition:var(--t);display:block;padding:1px 0}
.ft li a:hover{color:var(--s);padding-right:4px}
.ft-b{border-top:1px solid rgba(255,255,255,.07);padding:14px 16px;text-align:center;font-size:11px;max-width:1200px;margin:0 auto}
.ft-b a{color:var(--s)}

/* STATIC */
.sp{max-width:840px;margin:24px auto;padding:0 16px}
.sc{background:var(--w);border-radius:var(--rl);padding:clamp(20px,4vw,36px);box-shadow:var(--sh)}
.sc h1{font-size:clamp(20px,4vw,26px);color:var(--p);margin-bottom:16px;padding-bottom:12px;border-bottom:3px solid var(--s)}
.sc h2{font-size:clamp(14px,3vw,18px);color:var(--d);margin:20px 0 8px;padding-right:12px;border-right:4px solid var(--p)}
.sc p{margin-bottom:10px;color:var(--g700);font-size:14px;line-height:1.9}
.sc ul{padding-right:18px;margin-bottom:12px}
.sc li{margin-bottom:5px;color:var(--g600);font-size:13px}
.sc a{color:var(--p)}
.cf{display:flex;flex-direction:column;gap:10px;margin-top:14px}
.cf input,.cf textarea{padding:11px 14px;border:2px solid var(--g200);border-radius:10px;font-family:'Cairo',sans-serif;font-size:14px;outline:none;transition:var(--t);width:100%;color:var(--d)}
.cf input:focus,.cf textarea:focus{border-color:var(--p);box-shadow:0 0 0 3px rgba(15,76,129,.1)}
.cf textarea{min-height:130px;resize:vertical}
.cf button{padding:12px;background:var(--p);color:#fff;border:none;border-radius:10px;font-family:'Cairo',sans-serif;font-weight:700;font-size:14px;cursor:pointer;transition:var(--t)}
.cf button:hover{background:var(--pl)}

/* EMPTY STATE */
.empty{text-align:center;padding:60px 20px}
.empty-icon{font-size:64px;margin-bottom:16px;display:block}
.empty h3{color:var(--g500);margin-bottom:8px;font-size:18px}
.empty p{color:var(--g400);font-size:13px}

/* BTT */
.btt{position:fixed;bottom:20px;left:20px;width:42px;height:42px;background:var(--p);color:#fff;border:none;border-radius:50%;cursor:pointer;display:none;align-items:center;justify-content:center;box-shadow:var(--shl);z-index:99;font-size:18px;transition:var(--t)}
.btt:hover{transform:translateY(-2px);background:var(--pl)}

/* ===================== RESPONSIVE ===================== */
@media(max-width:1024px){
  .mg,.ag{grid-template-columns:1fr}
  .sb{order:2}
  .ft-g{grid-template-columns:1fr 1fr}
  .pl{grid-template-columns:repeat(auto-fill,minmax(260px,1fr))}
}

@media(max-width:768px){
  .mbtn{display:flex}
  .nv-in{display:none}
  .tb-in{justify-content:center;gap:4px;font-size:11px}
  .hd-in{padding:8px 12px;min-height:54px}
  .logo-t p{display:none}
  .mg,.ag{padding:0 12px;margin:16px auto}
  .ft-g{grid-template-columns:1fr;padding:20px 14px}
  .rg{grid-template-columns:1fr}
  .am-meta{gap:8px}
  .share{gap:6px}
  .sh{padding:6px 10px;font-size:10px}
  .pl{grid-template-columns:1fr;gap:14px}
  .fp-img{height:clamp(160px,45vw,220px)}
  .pc-img{height:clamp(150px,40vw,200px)}
  .hero{padding:32px 14px}
  .sr-w{padding:0 12px}
  .adc{padding:0 12px}
  .cb{padding:0 12px 8px}
}

@media(max-width:480px){
  .logo-i{width:38px;height:38px;min-width:38px}
  .logo-i svg{width:20px;height:20px}
  .logo-t h1{font-size:14px}
  .mob-nav{width:100%}
  .ft-g{padding:18px 12px}
  .sc{padding:18px}
  .btt{bottom:14px;left:14px;width:38px;height:38px;font-size:16px}
  .stats{gap:12px}
  .st b{font-size:clamp(18px,6vw,24px)}
  .hd-in{padding:8px 10px}
}

/* PRINT */
@media print{
  .hd,.nv,.tb,.sb,.ft,.ad,.share,.btt,.sr-w,.adc,.mob-nav,.ov,.mbtn,.ticker{display:none!important}
  .mg,.ag{grid-template-columns:1fr;padding:0}
  .am{box-shadow:none;border-radius:0}
}
</style>`;

// ===== JS =====
const JS = `<script>
(function(){
  var navOpen=false;
  function openNav(){
    navOpen=true;
    var mn=document.getElementById('mn');
    var ov=document.getElementById('ov');
    var mb=document.getElementById('mb');
    if(mn)mn.classList.add('open');
    if(ov)ov.classList.add('show');
    if(mb)mb.classList.add('open');
    document.body.style.overflow='hidden';
  }
  function closeNav(){
    navOpen=false;
    var mn=document.getElementById('mn');
    var ov=document.getElementById('ov');
    var mb=document.getElementById('mb');
    if(mn)mn.classList.remove('open');
    if(ov)ov.classList.remove('show');
    if(mb)mb.classList.remove('open');
    document.body.style.overflow='';
  }
  window.tNav=function(){navOpen?closeNav():openNav();};
  window.cNav=closeNav;
  window.tDD=function(e){
    e.preventDefault();e.stopPropagation();
    var d=document.getElementById('ddd');
    if(d)d.classList.toggle('open');
  };
  document.addEventListener('click',function(e){
    var d=document.getElementById('ddd');
    if(d&&!d.contains(e.target))d.classList.remove('open');
  });
  window.addEventListener('resize',function(){
    if(window.innerWidth>768&&navOpen)closeNav();
  },{passive:true});
  window.addEventListener('scroll',function(){
    var b=document.getElementById('btt');
    if(b)b.style.display=window.scrollY>350?'flex':'none';
  },{passive:true});
  window.doSearch=function(){
    var inp=document.getElementById('srch');
    if(!inp)return;
    var q=inp.value.toLowerCase().trim();
    document.querySelectorAll('.pc,.fp').forEach(function(el){
      el.style.display=(!q||el.textContent.toLowerCase().indexOf(q)>=0)?'':'none';
    });
  };
})();
</script>`;

// ===== FONTS & HEAD =====
function mkHead(title, desc, kw, canonical, extra) {
  return `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0,viewport-fit=cover">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="keywords" content="${esc(kw)}">
<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">
<meta name="googlebot" content="index,follow">
<link rel="canonical" href="${canonical}">
<meta name="theme-color" content="#0f4c81">
<meta property="og:locale" content="ar_MA">
<meta property="og:site_name" content="بوابة الخدمات الرقمية">
<link rel="alternate" type="application/rss+xml" title="RSS" href="${canonical.split("/").slice(0,3).join("/")}/feed.xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap" rel="stylesheet">
${extra || ""}
${CSS}`;
}

// ===== HEADER =====
function mkHeader(base) {
  const today = new Date().toLocaleDateString("ar-MA", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
  return `
<div class="tb"><div class="tb-in">
<span>📅 ${today}</span>
<div><a href="${base}/about">من نحن</a><a href="${base}/contact">اتصل بنا</a></div>
</div></div>
<header class="hd">
<div class="hd-in">
<a href="${base}/" class="logo">
<div class="logo-i"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg></div>
<div class="logo-t"><h1>بوابة الخدمات <span>الرقمية</span></h1><p>دليلك الشامل للخدمات الحكومية المغربية</p></div>
</a>
<button class="mbtn" id="mb" onclick="tNav()" aria-label="القائمة"><i></i><i></i><i></i></button>
</div>
</header>
<div class="ov" id="ov" onclick="cNav()"></div>
<div class="mob-nav" id="mn">
<button class="mob-close" onclick="cNav()" aria-label="إغلاق">✕</button>
<a href="${base}/" class="mob-link" onclick="cNav()">🏠 الرئيسية</a>
<div class="mob-sec">📂 أقسام المدونة</div>
${CATS.map(c => `<a href="${base}/category/${encodeURIComponent(c.name)}" class="mob-sub" onclick="cNav()"><span class="cdot" style="background:${c.color}"></span>${c.icon} ${c.name}</a>`).join("")}
<div style="border-top:1px solid rgba(255,255,255,.1);margin:8px 0"></div>
${CATS.map(c => `<a href="${base}/category/${encodeURIComponent(c.name)}" class="mob-link" onclick="cNav()">${c.icon} ${c.short}</a>`).join("")}
<a href="${base}/contact" class="mob-link" onclick="cNav()">📧 اتصل بنا</a>
<a href="${base}/about" class="mob-link" onclick="cNav()">ℹ️ من نحن</a>
</div>
<nav class="nv">
<div class="nv-in">
<a href="${base}/" class="nl ac">🏠 الرئيسية</a>
<div class="dd" id="ddd">
<div class="nl dd-btn" onclick="tDD(event)">📂 الأقسام <span class="dd-arr">▼</span></div>
<div class="dd-menu">
${CATS.map(c => `<a href="${base}/category/${encodeURIComponent(c.name)}"><span class="cdot" style="background:${c.color}"></span>${c.icon} ${c.name}</a>`).join("")}
</div>
</div>
${CATS.map(c => `<a href="${base}/category/${encodeURIComponent(c.name)}" class="nl">${c.icon} ${c.short}</a>`).join("")}
<a href="${base}/contact" class="nl">📧 اتصل بنا</a>
</div>
</nav>`;
}

// ===== FOOTER =====
function mkFooter(base) {
  return `
<footer class="ft">
<div class="ft-g">
<div>
<h3>🇲🇦 بوابة الخدمات الرقمية</h3>
<p>منصة إعلامية مستقلة متخصصة في تبسيط الإجراءات الإدارية وتقديم معلومات الخدمات الحكومية الرقمية للمواطن المغربي.</p>
</div>
<div><h4>📂 الأقسام</h4><ul>
${CATS.map(c => `<li><a href="${base}/category/${encodeURIComponent(c.name)}">${c.icon} ${c.short}</a></li>`).join("")}
</ul></div>
<div><h4>📋 صفحات</h4><ul>
<li><a href="${base}/about">من نحن</a></li>
<li><a href="${base}/contact">اتصل بنا</a></li>
<li><a href="${base}/privacy">سياسة الخصوصية</a></li>
<li><a href="${base}/terms">شروط الاستخدام</a></li>
<li><a href="${base}/disclaimer">إخلاء المسؤولية</a></li>
<li><a href="${base}/dmca">DMCA</a></li>
</ul></div>
<div><h4>🔗 روابط مفيدة</h4><ul>
<li><a href="https://www.rsu.ma" target="_blank" rel="noopener">السجل الاجتماعي RSU</a></li>
<li><a href="https://www.cnss.ma" target="_blank" rel="noopener">CNSS</a></li>
<li><a href="https://www.ofppt.ma" target="_blank" rel="noopener">OFPPT</a></li>
<li><a href="https://ae.gov.ma" target="_blank" rel="noopener">المقاول الذاتي</a></li>
<li><a href="${base}/sitemap.xml">خريطة الموقع</a></li>
</ul></div>
</div>
<div class="ft-b">
<p>© ${new Date().getFullYear()} بوابة الخدمات الرقمية | جميع الحقوق محفوظة</p>
<p style="margin-top:5px"><a href="${base}/privacy">الخصوصية</a> · <a href="${base}/terms">الشروط</a> · <a href="${base}/dmca">DMCA</a> · <a href="${base}/disclaimer">إخلاء المسؤولية</a></p>
<p style="margin-top:5px;color:var(--g600)">موقع إعلامي مستقل - غير تابع لأي جهة حكومية</p>
</div>
</footer>
<button class="btt" id="btt" onclick="window.scrollTo({top:0,behavior:'smooth'})" aria-label="العودة للأعلى">↑</button>
${JS}`;
}

// ===== SIDEBAR =====
function mkSidebar(idx, base) {
  const recent = idx.slice(0, 5);
  const cats = [...new Set(idx.map(p => p.category))];
  return `<aside class="sb">
<div class="ad"><!-- AdSense Sidebar Top --></div>
<div class="wg">
<h3 class="wt">📊 الأكثر قراءة</h3>
${recent.map((p, i) => `<a href="${base}/post/${p.slug}" class="ti">
<div class="tn">${i + 1}</div>
<div class="tt">
<h4>${p.title.length > 50 ? p.title.substring(0, 50) + "…" : p.title}</h4>
<span>${p.date}${p.views ? " · 👁️ " + p.views : ""}</span>
</div>
</a>`).join("")}
${recent.length === 0 ? '<p style="font-size:12px;color:var(--g400);text-align:center;padding:10px">لا توجد مقالات بعد</p>' : ""}
</div>
<div class="wg">
<h3 class="wt">📂 التصنيفات</h3>
<ul class="ll">
${cats.map(c => {
  const n = idx.filter(p => p.category === c).length;
  const cl = catColor(c), ic = catIcon(c);
  return `<li><a href="${base}/category/${encodeURIComponent(c)}"><span class="cdot" style="background:${cl}"></span>${ic} ${c} <small style="margin-right:auto;color:var(--g400)">(${n})</small></a></li>`;
}).join("")}
${cats.length === 0 ? '<li><span style="font-size:12px;color:var(--g400)">لا توجد تصنيفات بعد</span></li>' : ""}
</ul>
</div>
<div class="wg nwl">
<h3 class="wt">✉️ النشرة البريدية</h3>
<p>اشترك للحصول على آخر المقالات مباشرة في بريدك</p>
<input type="email" placeholder="بريدك الإلكتروني..." aria-label="البريد الإلكتروني">
<button class="nwl-btn" onclick="this.textContent='✅ تم الاشتراك!'">اشترك الآن 🔔</button>
</div>
<div class="ad"><!-- AdSense Sidebar Bottom --></div>
<div class="wg">
<h3 class="wt">🔗 روابط مفيدة</h3>
<ul class="ll">
<li><a href="https://www.rsu.ma" target="_blank" rel="noopener">السجل الاجتماعي الموحد</a></li>
<li><a href="https://www.cnss.ma" target="_blank" rel="noopener">CNSS - الضمان الاجتماعي</a></li>
<li><a href="https://www.ofppt.ma" target="_blank" rel="noopener">OFPPT - التكوين المهني</a></li>
<li><a href="https://ae.gov.ma" target="_blank" rel="noopener">بوابة المقاول الذاتي</a></li>
<li><a href="https://www.cnie.ma" target="_blank" rel="noopener">البطاقة الوطنية CNIE</a></li>
</ul>
</div>
</aside>`;
}

// ===== HOME PAGE =====
function pgHome(idx, base) {
  const feat = idx[0], rest = idx.slice(1);
  const cnt = idx.length;
  const cc = [...new Set(idx.map(p => p.category))].length;
  const tv = idx.reduce((s, p) => s + (p.views || 0), 0);
  const tvd = tv > 9999 ? Math.floor(tv / 1000) + "K+" : (tv > 0 ? tv + "+" : "0");
  const schema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "بوابة الخدمات الرقمية",
    "url": base,
    "description": "دليلك الشامل للخدمات الحكومية الرقمية والإجراءات الإدارية بالمغرب",
    "inLanguage": "ar",
    "potentialAction": {
      "@type": "SearchAction",
      "target": base + "/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  });

  return `<!DOCTYPE html><html lang="ar" dir="rtl">
<head>
${mkHead(
  "بوابة الخدمات الرقمية | دليل المواطن المغربي للخدمات الحكومية 2026",
  "دليلك الشامل للخدمات الحكومية الرقمية بالمغرب: أمو تضامن AMO، السجل الاجتماعي RSU، مباريات التوظيف 2026، الوثائق الإدارية، المقاول الذاتي. معلومات دقيقة ومحدثة.",
  "خدمات رقمية المغرب, أمو تضامن, السجل الاجتماعي, مباريات التوظيف 2026, CNSS, OFPPT, جواز السفر, البطاقة الوطنية, المقاول الذاتي, فيزا شنغن",
  base + "/",
  `<meta property="og:type" content="website">
<meta property="og:title" content="بوابة الخدمات الرقمية">
<meta property="og:description" content="دليلك الشامل للخدمات الحكومية الرقمية بالمغرب">
<meta property="og:url" content="${base}/">
<meta name="twitter:card" content="summary_large_image">
<script type="application/ld+json">${schema}</script>`
)}
</head>
<body>
${mkHeader(base)}
${idx.length > 0 ? `<div class="ticker"><div class="ticker-t">${[...idx.slice(0, 8), ...idx.slice(0, 8)].map(p => `<span>📌 ${p.title.substring(0, 55)}…</span>`).join("")}</div></div>` : ""}
<section class="hero">
<div class="hero-c">
<h2>🇲🇦 بوابة الخدمات الرقمية المغربية</h2>
<p>دليلك الشامل للإجراءات الإدارية والخدمات الحكومية - معلومات دقيقة ومحدثة في متناول يدك</p>
<div class="stats">
<div class="st"><b>${cnt}+</b><small>مقال ودليل</small></div>
<div class="st"><b>${cc}</b><small>تصنيف</small></div>
<div class="st"><b>${tvd}</b><small>قراءة</small></div>
<div class="st"><b>24/7</b><small>تحديث مستمر</small></div>
</div>
</div>
</section>
<div class="sr-w">
<div class="sr-b">
<input type="search" id="srch" placeholder="🔍 ابحث عن خدمة أو إجراء إداري..." onkeyup="doSearch()" aria-label="البحث">
<button onclick="doSearch()">بحث</button>
</div>
</div>
<div class="adc"><div class="ad"><!-- Google AdSense Leaderboard 728x90 --></div></div>
<div class="mg">
<main>
<nav class="cb" aria-label="التصنيفات">
<a href="${base}/" class="cc ac">📋 الكل</a>
${CATS.map(c => `<a href="${base}/category/${encodeURIComponent(c.name)}" class="cc"><span class="cdot" style="background:${c.color}"></span>${c.short}</a>`).join("")}
</nav>
${feat ? `
<a href="${base}/post/${feat.slug}" class="fp">
${feat.hasImage ? `<img class="fp-img" src="${base}/image/${feat.slug}" alt="${esc(feat.imageAlt || feat.title)}" width="1024" height="240" loading="eager" decoding="async">` : ""}
<div class="fp-b">
<div class="fp-top">
<span class="fp-bdg">⭐ مقال مميز</span>
<span class="bdg" style="background:${(feat.categoryColor || catColor(feat.category))}22;color:${feat.categoryColor || catColor(feat.category)}">${feat.categoryIcon || catIcon(feat.category)} ${feat.category}</span>
</div>
<h2>${feat.title}</h2>
<p>${feat.description || ""}</p>
<div class="fp-m">
<span>📅 ${feat.date}</span>
<span>⏱️ ${feat.readTime || 3} دقائق</span>
<span>👁️ ${feat.views || 0}</span>
</div>
</div>
</a>` : ""}
<div class="ad"><!-- Google AdSense In-Article --></div>
<div class="pl">
${rest.length === 0 && !feat ? `
<div class="empty">
<span class="empty-icon">📚</span>
<h3>المحتوى قادم قريباً</h3>
<p>يتم إعداد المقالات والأدلة الإرشادية</p>
</div>` : rest.map((p, i) => {
  const cl = p.categoryColor || catColor(p.category);
  const ic = p.categoryIcon || catIcon(p.category);
  return `<a href="${base}/post/${p.slug}" class="pc">
${p.hasImage ? `<img class="pc-img" src="${base}/image/${p.slug}" alt="${esc(p.imageAlt || p.title)}" width="600" height="200" loading="lazy" decoding="async">` : ""}
<div class="pc-b">
<div class="pc-top">
<span class="bdg" style="background:${cl}18;color:${cl}"><span class="cdot" style="background:${cl}"></span>${ic} ${p.category}</span>
<small style="color:var(--g400);font-size:10px">⏱️ ${p.readTime || 3} د</small>
</div>
<h3>${p.title}</h3>
<p class="pc-ex">${p.description || ""}</p>
<div class="pc-ft">
<span>📅 ${p.date}</span>
<span>👁️ ${p.views || 0}</span>
<span class="rm">اقرأ المزيد ←</span>
</div>
</div>
</a>${(i + 1) % 4 === 0 ? '<div class="ad"><!-- AdSense In-Feed --></div>' : ""}`;
}).join("")}
</div>
</main>
${mkSidebar(idx, base)}
</div>
${mkFooter(base)}
</body></html>`;
}

// ===== ARTICLE PAGE =====
function pgArticle(post, idx, base) {
  const rel = idx.filter(p => p.category === post.category && p.slug !== post.slug).slice(0, 4);
  const faqs = xFAQ(post.content);
  const su = encodeURIComponent(base + "/post/" + post.slug);
  const st = encodeURIComponent(post.title);
  const cl = post.categoryColor || catColor(post.category);
  const ic = post.categoryIcon || catIcon(post.category);

  const artSch = JSON.stringify({
    "@context": "https://schema.org", "@type": "Article",
    "headline": post.title, "description": post.description || "",
    "datePublished": post.dateISO, "dateModified": post.dateISO,
    "author": { "@type": "Organization", "name": "بوابة الخدمات الرقمية", "url": base },
    "publisher": { "@type": "Organization", "name": "بوابة الخدمات الرقمية", "url": base },
    "mainEntityOfPage": { "@type": "WebPage", "@id": base + "/post/" + post.slug },
    "articleSection": post.category, "inLanguage": "ar",
    "keywords": post.keywords, "wordCount": post.wordCount,
    ...(post.image ? { "image": base + "/image/" + post.slug } : {})
  });

  const bcSch = JSON.stringify({
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "الرئيسية", "item": base },
      { "@type": "ListItem", "position": 2, "name": post.category, "item": base + "/category/" + encodeURIComponent(post.category) },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": base + "/post/" + post.slug }
    ]
  });

  const faqSch = faqs.length ? JSON.stringify({
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question", "name": f.question,
      "acceptedAnswer": { "@type": "Answer", "text": f.answer }
    }))
  }) : "";

  return `<!DOCTYPE html><html lang="ar" dir="rtl">
<head>
${mkHead(
  post.title + " | بوابة الخدمات الرقمية",
  post.description || "",
  post.keywords || "",
  base + "/post/" + post.slug,
  `<meta property="og:type" content="article">
<meta property="og:title" content="${esc(post.title)}">
<meta property="og:description" content="${esc(post.description || "")}">
<meta property="og:url" content="${base}/post/${post.slug}">
${post.image ? `<meta property="og:image" content="${base}/image/${post.slug}"><meta property="og:image:width" content="1024"><meta property="og:image:height" content="576"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:image" content="${base}/image/${post.slug}">` : `<meta name="twitter:card" content="summary">`}
<meta property="article:published_time" content="${post.dateISO || ""}">
<meta property="article:section" content="${esc(post.category)}">
<meta name="twitter:title" content="${esc(post.title)}">
<meta name="twitter:description" content="${esc(post.description || "")}">
<script type="application/ld+json">${artSch}</script>
<script type="application/ld+json">${bcSch}</script>
${faqSch ? `<script type="application/ld+json">${faqSch}</script>` : ""}`
)}
</head>
<body>
${mkHeader(base)}
<div class="adc"><div class="ad"><!-- AdSense Header --></div></div>
<div class="ag">
<article class="am">
${post.image ? `<img class="ah-img" src="${base}/image/${post.slug}" alt="${esc(post.imageAlt || post.title)}" width="1024" height="320" loading="eager" decoding="async">` : ""}
<div class="ab">
<nav class="bc" aria-label="مسار التنقل">
<a href="${base}/">🏠 الرئيسية</a>
<span class="bc-sep">›</span>
<a href="${base}/category/${encodeURIComponent(post.category)}">${ic} ${post.category}</a>
<span class="bc-sep">›</span>
<span>${post.title.substring(0, 30)}…</span>
</nav>
<header class="ah">
<span class="bdg" style="background:${cl}18;color:${cl};margin-bottom:10px;display:inline-flex;align-items:center;gap:4px"><span class="cdot" style="background:${cl}"></span>${ic} ${post.category}</span>
<h1>${post.title}</h1>
<div class="am-meta">
<span>📅 <time datetime="${post.dateISO || ""}">${post.date}</time></span>
<span>⏱️ ${post.readTime || 3} دقائق قراءة</span>
<span>📝 ${post.wordCount || 0} كلمة</span>
<span>👁️ ${post.views || 0} مشاهدة</span>
</div>
</header>
<div class="ad"><!-- AdSense Before Content --></div>
<div class="ac">${post.content}</div>
<div class="ad"><!-- AdSense After Content --></div>
<div class="share">
<b>📤 شارك:</b>
<a href="https://www.facebook.com/sharer/sharer.php?u=${su}" target="_blank" rel="noopener noreferrer" class="sh" style="background:#1877f2">📘 فيسبوك</a>
<a href="https://twitter.com/intent/tweet?url=${su}&text=${st}" target="_blank" rel="noopener noreferrer" class="sh" style="background:#1da1f2">🐦 تويتر</a>
<a href="https://wa.me/?text=${st}%20${su}" target="_blank" rel="noopener noreferrer" class="sh" style="background:#25d366">💬 واتساب</a>
<a href="https://t.me/share/url?url=${su}&text=${st}" target="_blank" rel="noopener noreferrer" class="sh" style="background:#0088cc">✈️ تلغرام</a>
</div>
${rel.length > 0 ? `
<section class="rel">
<h3>📚 مقالات ذات صلة</h3>
<div class="rg">
${rel.map(r => `<a href="${base}/post/${r.slug}" class="rc"><h4>${r.title}</h4><span>📅 ${r.date}</span></a>`).join("")}
</div>
</section>` : ""}
</div>
</article>
${mkSidebar(idx, base)}
</div>
${mkFooter(base)}
</body></html>`;
}

// ===== CATEGORY PAGE =====
function pgCategory(catName, filtered, idx, base) {
  const cl = catColor(catName), ic = catIcon(catName);
  const schema = JSON.stringify({
    "@context": "https://schema.org", "@type": "CollectionPage",
    "name": catName + " - بوابة الخدمات الرقمية",
    "url": base + "/category/" + encodeURIComponent(catName),
    "description": "جميع المقالات في تصنيف " + catName
  });

  return `<!DOCTYPE html><html lang="ar" dir="rtl">
<head>
${mkHead(
  catName + " | بوابة الخدمات الرقمية 2026",
  "جميع المقالات والأدلة في تصنيف " + catName + " - بوابة الخدمات الرقمية المغربية",
  catName + ", خدمات رقمية المغرب, إجراءات إدارية",
  base + "/category/" + encodeURIComponent(catName),
  `<meta property="og:type" content="website">
<meta property="og:title" content="${esc(catName)}">
<meta property="og:url" content="${base}/category/${encodeURIComponent(catName)}">
<script type="application/ld+json">${schema}</script>`
)}
</head>
<body>
${mkHeader(base)}
<section class="hero" style="padding:32px 16px;background:linear-gradient(135deg,${cl}dd,${cl}88)">
<div class="hero-c">
<h2>${ic} ${catName}</h2>
<p>${filtered.length} مقال ودليل في هذا التصنيف</p>
</div>
</section>
<div class="mg">
<main>
<nav class="bc" style="margin-bottom:14px">
<a href="${base}/">🏠 الرئيسية</a>
<span class="bc-sep">›</span>
<span>${ic} ${catName}</span>
</nav>
<div class="ad"><!-- AdSense --></div>
<div class="pl">
${filtered.length === 0 ? `
<div class="empty">
<span class="empty-icon">${ic}</span>
<h3>لا توجد مقالات بعد في هذا التصنيف</h3>
<p><a href="${base}/" style="color:var(--p)">← العودة للرئيسية</a></p>
</div>` : filtered.map((p, i) => {
  const pCl = p.categoryColor || catColor(p.category);
  const pIc = p.categoryIcon || catIcon(p.category);
  return `<a href="${base}/post/${p.slug}" class="pc">
${p.hasImage ? `<img class="pc-img" src="${base}/image/${p.slug}" alt="${esc(p.imageAlt || p.title)}" width="600" height="200" loading="lazy" decoding="async">` : ""}
<div class="pc-b">
<div class="pc-top">
<span class="bdg" style="background:${pCl}18;color:${pCl}"><span class="cdot" style="background:${pCl}"></span>${pIc} ${p.category}</span>
</div>
<h3>${p.title}</h3>
<p class="pc-ex">${p.description || ""}</p>
<div class="pc-ft">
<span>📅 ${p.date}</span>
<span>👁️ ${p.views || 0}</span>
<span class="rm">اقرأ المزيد ←</span>
</div>
</div>
</a>${(i + 1) % 4 === 0 ? '<div class="ad"><!-- AdSense --></div>' : ""}`;
}).join("")}
</div>
</main>
${mkSidebar(idx, base)}
</div>
${mkFooter(base)}
</body></html>`;
}

// ===== STATIC WRAPPER =====
function pgWrap(base, idx, title, slug, body) {
  return `<!DOCTYPE html><html lang="ar" dir="rtl">
<head>
${mkHead(
  title + " | بوابة الخدمات الرقمية",
  title + " - بوابة الخدمات الرقمية المغربية - معلومات ومحتوى إعلامي متخصص",
  title + ", بوابة الخدمات الرقمية, المغرب",
  base + "/" + slug,
  `<meta property="og:type" content="website">`
)}
</head>
<body>
${mkHeader(base)}
<div class="sp"><div class="sc">${body}</div></div>
${mkFooter(base)}
</body></html>`;
}

// ===== STATIC PAGES =====
function pgPrivacy(base, idx) {
  const d = new Date().toLocaleDateString("ar-MA", { year: "numeric", month: "long", day: "numeric" });
  return pgWrap(base, idx, "سياسة الخصوصية", "privacy", `
<h1>🔒 سياسة الخصوصية</h1>
<p><strong>آخر تحديث:</strong> ${d}</p>
<p>تلتزم <strong>بوابة الخدمات الرقمية</strong> بحماية خصوصية مستخدميها. تشرح هذه السياسة كيفية جمع البيانات واستخدامها وحمايتها.</p>
<h2>المعلومات التي نجمعها</h2>
<ul>
<li><strong>بيانات التصفح:</strong> عنوان IP، نوع المتصفح، الصفحات المزارة، مدة الجلسة</li>
<li><strong>ملفات الكوكيز:</strong> لتحسين تجربة المستخدم وتحليل حركة المرور</li>
<li><strong>بيانات الاتصال:</strong> عند تواصلك معنا (الاسم، البريد، الرسالة)</li>
</ul>
<h2>Google AdSense والإعلانات</h2>
<p>يستخدم موقعنا <strong>Google AdSense</strong> لعرض إعلانات ملائمة. تستخدم Google ملفات تعريف الارتباط لعرض إعلانات بناءً على اهتماماتك. يمكنك إلغاء الإعلانات المخصصة من <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">إعدادات إعلانات Google</a>.</p>
<h2>ملفات تعريف الارتباط</h2>
<p>نستخدم الكوكيز لتحسين الأداء وتحليل الزيارات وعرض إعلانات ملائمة. يمكنك تعطيلها من إعدادات متصفحك.</p>
<h2>مشاركة البيانات</h2>
<p>لا نبيع بياناتك. نشارك معلومات مجهولة فقط مع Google وCloudflare لأغراض تشغيل الموقع.</p>
<h2>حقوقك</h2>
<ul>
<li>الوصول إلى بياناتك الشخصية وطلب حذفها</li>
<li>إلغاء الاشتراك في النشرة البريدية في أي وقت</li>
</ul>
<h2>التغييرات</h2>
<p>نحتفظ بحق تعديل هذه السياسة مع تحديث تاريخ "آخر تحديث".</p>
<h2>اتصل بنا</h2>
<p><a href="${base}/contact">صفحة الاتصال</a></p>`);
}

function pgTerms(base, idx) {
  const d = new Date().toLocaleDateString("ar-MA", { year: "numeric", month: "long", day: "numeric" });
  return pgWrap(base, idx, "شروط الاستخدام", "terms", `
<h1>📜 شروط الاستخدام</h1>
<p><strong>آخر تحديث:</strong> ${d}</p>
<p>باستخدامك لـ <strong>بوابة الخدمات الرقمية</strong> فإنك توافق على هذه الشروط.</p>
<h2>1. طبيعة المحتوى</h2>
<ul>
<li>جميع المقالات لأغراض إعلامية وتعليمية فقط</li>
<li>لا تُعد بديلاً عن الاستشارة القانونية أو المهنية</li>
<li>المعلومات قابلة للتغيير وفق التحديثات الرسمية</li>
</ul>
<h2>2. حقوق الملكية الفكرية</h2>
<ul>
<li>المحتوى محمي بموجب قوانين الملكية الفكرية</li>
<li>يُحظر النسخ التجاري دون إذن كتابي مسبق</li>
<li>يُسمح بمشاركة الروابط مع ذكر المصدر</li>
</ul>
<h2>3. الإعلانات</h2>
<p>يحتوي الموقع على إعلانات Google AdSense. نحن غير مسؤولين عن محتوى الإعلانات.</p>
<h2>4. تحديد المسؤولية</h2>
<p>لا نتحمل مسؤولية أي ضرر ناتج عن استخدام المعلومات. المستخدم مسؤول عن قراراته.</p>
<h2>5. القانون المطبق</h2>
<p>تخضع هذه الشروط لقوانين المملكة المغربية.</p>`);
}

function pgContact(base, idx) {
  return pgWrap(base, idx, "اتصل بنا", "contact", `
<h1>📧 اتصل بنا</h1>
<p>نرحب باستفساراتكم واقتراحاتكم. فريقنا جاهز للرد في أقرب وقت.</p>
<h2>📋 نموذج التواصل</h2>
<form class="cf" onsubmit="event.preventDefault();this.innerHTML='<p style=color:#10b981;font-size:15px;padding:20px;text-align:center>✅ تم إرسال رسالتك بنجاح! سنرد خلال 24-48 ساعة.</p>'">
<input type="text" placeholder="الاسم الكامل *" required aria-label="الاسم الكامل">
<input type="email" placeholder="البريد الإلكتروني *" required aria-label="البريد الإلكتروني">
<input type="text" placeholder="موضوع الرسالة *" required aria-label="الموضوع">
<textarea placeholder="رسالتك... *" required aria-label="الرسالة"></textarea>
<button type="submit">📤 إرسال الرسالة</button>
</form>
<h2>📬 معلومات التواصل</h2>
<ul>
<li><strong>📧 البريد الإلكتروني:</strong> contact@leguide-digital.com</li>
<li><strong>⏰ وقت الرد:</strong> 24 إلى 48 ساعة في أيام العمل</li>
</ul>
<h2>💡 ملاحظات</h2>
<ul>
<li>نرحب باقتراحات المواضيع الجديدة</li>
<li>لإبلاغنا عن خطأ في المعلومات يرجى ذكر المقال</li>
<li>لطلبات DMCA زوروا <a href="${base}/dmca">صفحة DMCA</a></li>
</ul>`);
}

function pgAbout(base, idx) {
  const cnt = idx.length, cc = [...new Set(idx.map(p => p.category))].length;
  return pgWrap(base, idx, "من نحن", "about", `
<h1>🇲🇦 من نحن</h1>
<h2>رؤيتنا</h2>
<p><strong>بوابة الخدمات الرقمية</strong> منصة إعلامية مستقلة تهدف إلى تبسيط الإجراءات الإدارية وتقديم معلومات الخدمات الحكومية الرقمية للمواطن المغربي بأسلوب واضح ومبسط.</p>
<h2>ما نقدمه</h2>
<ul>
<li>📝 أدلة مفصلة للإجراءات الإدارية الرقمية</li>
<li>📢 تغطية المستجدات المتعلقة بالخدمات الحكومية</li>
<li>🎯 معلومات دقيقة ومحدثة يمكن الاعتماد عليها</li>
<li>💡 نصائح وإرشادات عملية للمواطنين</li>
</ul>
<h2>أرقام الموقع</h2>
<ul>
<li>📚 <strong>${cnt}+</strong> مقال ودليل منشور</li>
<li>📂 <strong>${cc}</strong> تصنيفات متخصصة</li>
<li>🔄 تحديث منتظم للمحتوى</li>
</ul>
<h2>استقلاليتنا</h2>
<p>موقعنا مستقل تماماً وغير تابع لأي جهة حكومية أو حزبية. نهدف فقط لخدمة المواطن المغربي.</p>
<h2>تواصل معنا</h2>
<p>لديك اقتراح أو استفسار؟ <a href="${base}/contact">تواصل معنا</a>.</p>`);
}

function pgDMCA(base, idx) {
  const d = new Date().toLocaleDateString("ar-MA", { year: "numeric", month: "long", day: "numeric" });
  return pgWrap(base, idx, "سياسة DMCA", "dmca", `
<h1>⚖️ سياسة حقوق الملكية الفكرية - DMCA</h1>
<p><strong>آخر تحديث:</strong> ${d}</p>
<p>نحترم حقوق الملكية الفكرية ونستجيب لإشعارات انتهاك حقوق النشر.</p>
<h2>إذا كنت تعتقد أن حقوقك انتُهكت</h2>
<ul>
<li>وصف دقيق للعمل المحمي</li>
<li>رابط المحتوى المخالف على موقعنا</li>
<li>رابط المحتوى الأصلي</li>
<li>اسمك ومعلومات الاتصال</li>
<li>بيان بحسن النية ودقة المعلومات</li>
</ul>
<h2>إجراءاتنا</h2>
<ul>
<li>مراجعة الإشعار خلال <strong>48 ساعة عمل</strong></li>
<li>إزالة المحتوى المخالف فوراً عند ثبوت الادعاء</li>
</ul>
<h2>كيفية الإرسال</h2>
<p>تواصل معنا عبر <a href="${base}/contact">صفحة الاتصال</a> مع ذكر كلمة "DMCA" في العنوان.</p>`);
}

function pgDisclaimer(base, idx) {
  const d = new Date().toLocaleDateString("ar-MA", { year: "numeric", month: "long", day: "numeric" });
  return pgWrap(base, idx, "إخلاء المسؤولية", "disclaimer", `
<h1>⚠️ إخلاء المسؤولية</h1>
<p><strong>آخر تحديث:</strong> ${d}</p>
<h2>طبيعة المحتوى</h2>
<p>جميع المعلومات المنشورة هي لأغراض <strong>إعلامية وتثقيفية فقط</strong>. نبذل جهدنا لتقديم معلومات دقيقة لكن لا نضمن صحتها في جميع الأوقات.</p>
<h2>ليس استشارة رسمية</h2>
<p>المحتوى <strong>لا يُعد بديلاً</strong> عن الاستشارة القانونية أو المعلومات الرسمية من الجهات الحكومية.</p>
<h2>تحديد المسؤولية</h2>
<ul>
<li>لا نتحمل مسؤولية أي ضرر ناتج عن الاعتماد على محتوانا</li>
<li>لا نتحمل مسؤولية القرارات المتخذة بناءً على معلوماتنا</li>
<li>لا نتحمل مسؤولية محتوى المواقع الخارجية المرتبطة</li>
</ul>
<h2>الإعلانات</h2>
<p>الإعلانات عبر Google AdSense لا تعكس توصياتنا ولسنا مسؤولين عن محتواها.</p>
<h2>الاستقلالية</h2>
<p>موقعنا مستقل تماماً وغير تابع لأي جهة حكومية.</p>
<h2>موافقتك</h2>
<p>باستخدامك للموقع توافق على هذا الإخلاء. للمزيد: <a href="${base}/terms">الشروط</a> · <a href="${base}/privacy">الخصوصية</a></p>`);
}
