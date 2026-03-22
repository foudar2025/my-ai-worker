export default {
  async scheduled(event, env, ctx) {
    const categories = [
      {
        name: "الدعم والحماية الاجتماعية",
        color: "#10b981",
        topics: [
          { title: "التسجيل في أمو تضامن AMO 2026: الدليل الشامل خطوة بخطوة", keywords: "أمو تضامن, التسجيل في AMO, التغطية الصحية المغرب 2026, CNSS" },
          { title: "تحديث بيانات السجل الاجتماعي الموحد RSU 2026", keywords: "السجل الاجتماعي الموحد, RSU المغرب, تحديث البيانات, الدعم الاجتماعي" },
          { title: "شروط الاستفادة من الدعم المباشر للسكن 2026", keywords: "دعم السكن المغرب 2026, الدعم المباشر للسكن, شروط الاستفادة" },
          { title: "كيفية صرف تعويضات CNSS للمغاربة: الشروط والإجراءات", keywords: "تعويضات CNSS, الضمان الاجتماعي, صرف التعويضات" },
          { title: "الدعم الاجتماعي المباشر 2026: مبالغ جديدة وشروط محدثة", keywords: "الدعم الاجتماعي المباشر, مبالغ الدعم, شروط الاستفادة 2026" },
          { title: "التسجيل في صندوق التكافل العائلي 2026: الوثائق والخطوات", keywords: "التكافل العائلي, صندوق التكافل, التسجيل, المساعدة الاجتماعية" }
        ]
      },
      {
        name: "مباريات التوظيف والتدريب",
        color: "#6366f1",
        topics: [
          { title: "مباراة الأمن الوطني 2026: الشروط والوثائق وموعد الامتحان", keywords: "مباراة الأمن الوطني 2026, التوظيف بالأمن, شروط مباراة الشرطة" },
          { title: "نماذج امتحانات OFPPT 2026: تحميل مجاني مع التصحيح", keywords: "OFPPT امتحانات, التكوين المهني, نماذج الامتحانات" },
          { title: "مباراة التعليم بالتعاقد 2026: دليل التحضير والنجاح", keywords: "مباراة التعليم بالتعاقد, أساتذة التعاقد, التحضير للمباراة" },
          { title: "مباريات الجماعات الترابية 2026: جميع المناصب والشروط", keywords: "مباريات الجماعات الترابية, التوظيف العمومي, مناصب" },
          { title: "مباراة الدرك الملكي 2026: السن والشروط وملف الترشيح", keywords: "مباراة الدرك الملكي, Gendarmerie Royale, شروط الترشيح" },
          { title: "التكوين المهني OFPPT 2026: التخصصات الجديدة وطريقة التسجيل", keywords: "OFPPT التسجيل 2026, التخصصات الجديدة, التكوين المهني" }
        ]
      },
      {
        name: "الوثائق الإدارية والتأشيرات",
        color: "#f59e0b",
        topics: [
          { title: "تجديد البطاقة الوطنية الإلكترونية CNIE 2026: الطريقة الجديدة", keywords: "تجديد البطاقة الوطنية, CNIE المغرب, البطاقة الإلكترونية" },
          { title: "حجز موعد فيزا شنغن إسبانيا BLS 2026: النصائح للقبول", keywords: "فيزا شنغن إسبانيا, حجز موعد BLS, تأشيرة أوروبا" },
          { title: "استخراج جواز السفر البيومتري المغربي 2026: الوثائق والثمن", keywords: "جواز السفر البيومتري, استخراج الباسبور, وثائق جواز السفر" },
          { title: "شهادة السكنى الإلكترونية 2026: طريقة الحصول عليها", keywords: "شهادة السكنى, certificat de résidence, الوثائق الإدارية" },
          { title: "عقد الازدياد بالمغرب 2026: النسخة الكاملة وطريقة الطلب", keywords: "عقد الازدياد, acte de naissance, الحالة المدنية" },
          { title: "فيزا فرنسا 2026: حجز موعد TLScontact والوثائق المطلوبة", keywords: "فيزا فرنسا, TLScontact المغرب, تأشيرة فرنسا" }
        ]
      },
      {
        name: "المقاول الذاتي والعمل الحر",
        color: "#ec4899",
        topics: [
          { title: "التسجيل في نظام المقاول الذاتي 2026: الدليل الكامل", keywords: "المقاول الذاتي المغرب, Auto-entrepreneur, التسجيل 2026" },
          { title: "إنشاء شركة SARL بالمغرب 2026: التكلفة والإجراءات", keywords: "إنشاء شركة SARL, تأسيس شركة, السجل التجاري" },
          { title: "برنامج انطلاقة لتمويل المشاريع 2026: شروط القبول", keywords: "برنامج انطلاقة, تمويل المشاريع, المقاولات الناشئة" },
          { title: "فتح حساب بنكي تجاري بالمغرب 2026: مقارنة البنوك", keywords: "حساب بنكي تجاري, البنوك المغربية, فتح حساب شركة" },
          { title: "الضريبة على القيمة المضافة TVA بالمغرب: دليل المقاول", keywords: "TVA المغرب, الضريبة, التصريح الضريبي" },
          { title: "التجارة الإلكترونية بالمغرب 2026: الإطار القانوني", keywords: "التجارة الإلكترونية المغرب, البيع عبر الأنترنت, e-commerce" }
        ]
      }
    ];

    const cat = categories[Math.floor(Math.random() * categories.length)];
    const topic = cat.topics[Math.floor(Math.random() * cat.topics.length)];

    try {
      const prompts = [
        'أنت كاتب محتوى محترف. اكتب مقدمة احترافية وجذابة من 5 أسطر عن "' + topic.title + '". اشرح أهمية الموضوع للمواطن المغربي وآخر المستجدات. استخدم الكلمات المفتاحية بشكل طبيعي: ' + topic.keywords + '. اكتب بأسلوب صحفي بشري مبسط وطبيعي.',

        'أنت خبير في الخدمات الإدارية المغربية. اكتب قسمين عن "' + topic.title + '":\n**ما هي هذه الخدمة وأهميتها؟**\n- تعريف دقيق ومفصل بالخدمة\n- الجهة المسؤولة عنها\n- الفئات المستفيدة بالتفصيل\n(اكتب 4 فقرات على الأقل)\n\n**الشروط الكاملة للاستفادة**\n- قائمة مرقمة بجميع الشروط مع شرح كل شرط\n(اكتب 6 شروط على الأقل)',

        'أنت مرشد إداري متخصص. اكتب قسمين عن "' + topic.title + '":\n**الوثائق والمستندات المطلوبة**\n- قائمة شاملة بكل الوثائق المطلوبة\n- أين يمكن الحصول على كل وثيقة\n(اكتب 8 عناصر على الأقل)\n\n**خطوات التسجيل بالتفصيل**\n- شرح كل خطوة بالتفصيل\n- المنصات والمواقع الرسمية\n- نصائح لتجنب الأخطاء\n(اكتب 7 خطوات على الأقل)',

        'أنت مستشار إداري خبير. اكتب ثلاثة أقسام عن "' + topic.title + '":\n**الآجال والمواعيد المهمة**\n(فقرتان على الأقل)\n\n**نصائح ذهبية للمتقدمين**\n- 6 نصائح عملية مرقمة\n\n**الأسئلة الشائعة**\nاكتب 4 أسئلة بهذا التنسيق بالضبط:\nسؤال: نص السؤال؟\nجواب: نص الجواب.\n\nثم اكتب خاتمة من 3 أسطر.'
      ];

      let fullContent = '';
      for (let i = 0; i < prompts.length; i++) {
        try {
          const res = await env.AI.run('@cf/meta/llama-3-8b-instruct', {
            prompt: prompts[i],
            max_tokens: 1500,
            temperature: 0.7
          });
          if (res && res.response) {
            fullContent += '\n\n' + res.response;
          }
        } catch (err) {
          console.error('Section ' + i + ' error:', err);
        }
      }

      if (!fullContent || fullContent.trim().length < 300) return;

      let imageBase64 = null;
      try {
        const imgPrompts = {
          "الدعم والحماية الاجتماعية": "Professional flat design illustration, digital government social protection services, smartphone with online registration form, official documents with stamps, shield protection icon, green and blue colors, abstract geometric shapes, clean corporate infographic style, 4k quality, white background",
          "مباريات التوظيف والتدريب": "Professional flat design illustration, career development education concept, graduation cap above laptop, digital certificates, open books, blue purple colors, abstract geometric patterns, clean vector style, 4k quality",
          "الوثائق الإدارية والتأشيرات": "Professional flat design illustration, official travel documents, passport with stamps, airplane ticket, world globe with routes, official seals, amber navy blue colors, clean geometric design, 4k quality",
          "المقاول الذاتي والعمل الحر": "Professional flat design illustration, entrepreneurship startup concept, rocket launching from laptop, growth charts, coins symbols, business documents, lightbulb icon, green blue colors, abstract geometric background, 4k quality"
        };
        const negPrompt = "human, person, people, man, woman, child, baby, face, hand, finger, body, arm, leg, animal, cat, dog, bird, fish, horse, creature, portrait, selfie, crowd, eyes, mouth, nose, realistic human, cartoon human, anime, humanoid, doll, mannequin, pet, wildlife, insect, nsfw, nude, violence, blood, weapon, ugly, deformed, blurry, watermark, text, logo";
        const imgRes = await env.AI.run('@cf/stabilityai/stable-diffusion-xl-base-1.0', {
          prompt: (imgPrompts[cat.name] || imgPrompts["الدعم والحماية الاجتماعية"]) + ", absolutely NO humans NO animals NO faces NO people",
          negative_prompt: negPrompt,
          width: 1024,
          height: 576,
          num_steps: 20
        });
        if (imgRes) {
          const buf = await imgRes.arrayBuffer();
          const bytes = new Uint8Array(buf);
          let binary = '';
          for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
          imageBase64 = btoa(binary);
        }
      } catch (imgErr) {
        console.error('Image error:', imgErr);
      }

      const now = new Date();
      const slug = topic.title.replace(/[^\u0600-\u06FF\s0-9]/g, '').replace(/\s+/g, '-').substring(0, 80);
      const plainText = fullContent.replace(/\*\*/g, '').replace(/<[^>]*>/g, '').replace(/\n+/g, ' ').trim();
      const description = plainText.substring(0, 155) + '...';
      const wordCount = fullContent.split(/\s+/).length;

      const newPost = {
        id: Date.now(),
        slug: slug,
        category: cat.name,
        categoryColor: cat.color,
        title: topic.title,
        keywords: topic.keywords,
        description: description,
        content: formatContent(fullContent),
        image: imageBase64,
        imageAlt: topic.title,
        date: now.toLocaleDateString('ar-MA', { year: 'numeric', month: 'long', day: 'numeric' }),
        dateISO: now.toISOString(),
        readTime: Math.max(3, Math.ceil(wordCount / 200)),
        wordCount: wordCount,
        views: Math.floor(Math.random() * 500) + 100
      };

      let posts = [];
      try { posts = await env.BLOG_KV.get("posts", { type: "json" }) || []; } catch (e) { posts = []; }

      if (!posts.some(p => p.title === newPost.title)) {
        posts.unshift(newPost);
        if (posts.length > 60) posts = posts.slice(0, 60);
        await env.BLOG_KV.put("posts", JSON.stringify(posts));

        const siteUrl = env.SITE_URL || 'https://example.com';
        await Promise.allSettled([
          fetch('https://www.google.com/ping?sitemap=' + encodeURIComponent(siteUrl + '/sitemap.xml')).catch(() => {}),
          fetch('https://www.bing.com/ping?sitemap=' + encodeURIComponent(siteUrl + '/sitemap.xml')).catch(() => {}),
          fetch('https://api.indexnow.org/indexnow', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              host: new URL(siteUrl).hostname,
              key: env.INDEXNOW_KEY || 'default-key',
              urlList: [siteUrl + '/article/' + newPost.id, siteUrl + '/']
            })
          }).catch(() => {})
        ]);
      }
    } catch (e) { console.error('Scheduled error:', e); }
  },

  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;
    const base = url.origin;
    let posts = [];
    try { posts = await env.BLOG_KV.get("posts", { type: "json" }) || []; } catch (e) { posts = []; }

    if (path === '/sitemap.xml') return xmlRes(buildSitemap(posts, base));
    if (path === '/robots.txt') return txtRes(buildRobots(base));
    if (path === '/feed.xml' || path === '/rss.xml') return xmlRes(buildRSS(posts, base));
    if (path === '/privacy') return htmlRes(buildPrivacyPage(base, posts));
    if (path === '/terms') return htmlRes(buildTermsPage(base, posts));
    if (path === '/contact') return htmlRes(buildContactPage(base, posts));
    if (path === '/about') return htmlRes(buildAboutPage(base, posts));
    if (path === '/dmca') return htmlRes(buildDmcaPage(base, posts));
    if (path === '/disclaimer') return htmlRes(buildDisclaimerPage(base, posts));

    if (path.startsWith('/image/')) {
      const pid = path.replace('/image/', '');
      const p = posts.find(x => x.id.toString() === pid);
      if (p && p.image) {
        const s = atob(p.image);
        const buf = new Uint8Array(s.length);
        for (let i = 0; i < s.length; i++) buf[i] = s.charCodeAt(i);
        return new Response(buf, { headers: { 'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=31536000, immutable' } });
      }
      return new Response('Not Found', { status: 404 });
    }

    if (path.startsWith('/article/')) {
      const pid = path.replace('/article/', '');
      const p = posts.find(x => x.id.toString() === pid || x.slug === pid);
      if (p) {
        p.views = (p.views || 0) + 1;
        try { await env.BLOG_KV.put("posts", JSON.stringify(posts)); } catch (e) {}
        return htmlRes(buildArticlePage(p, posts, base));
      }
      return Response.redirect(base + '/', 302);
    }

    if (path.startsWith('/category/')) {
      const catName = decodeURIComponent(path.replace('/category/', ''));
      return htmlRes(buildCategoryPage(catName, posts.filter(p => p.category === catName), posts, base));
    }

    return htmlRes(buildHomePage(posts, base));
  }
};

// ===== HELPERS =====
function htmlRes(html) {
  return new Response(html, { headers: { 'Content-Type': 'text/html;charset=UTF-8', 'Cache-Control': 'public, max-age=600', 'X-Content-Type-Options': 'nosniff', 'X-Frame-Options': 'SAMEORIGIN' } });
}
function xmlRes(xml) {
  return new Response(xml, { headers: { 'Content-Type': 'application/xml;charset=UTF-8', 'Cache-Control': 'public, max-age=3600' } });
}
function txtRes(text) {
  return new Response(text, { headers: { 'Content-Type': 'text/plain;charset=UTF-8', 'Cache-Control': 'public, max-age=86400' } });
}
function esc(s) {
  if (!s) return '';
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function formatContent(text) {
  if (!text) return '<p>المحتوى قيد التحضير...</p>';
  let h = text
    .replace(/\*\*(.*?)\*\*/g, '</p><h3 class="ch">$1</h3><p>')
    .replace(/سؤال:\s*(.*?)(?:\n)/gi, '</p><div class="faq-item"><div class="faq-q">❓ $1</div>')
    .replace(/جواب:\s*(.*?)(?:\n|$)/gi, '<div class="faq-a">✅ $1</div></div><p>')
    .replace(/(\d+)\.\s/g, '<span class="sn">$1</span> ')
    .replace(/\n\n+/g, '</p><p>')
    .replace(/\n/g, '<br>');
  if (!h.startsWith('<')) h = '<p>' + h;
  if (!h.endsWith('>')) h += '</p>';
  return h.replace(/<p>\s*<\/p>/g, '');
}
function extractFAQ(content) {
  const faqs = [];
  const re = /faq-q[^>]*>(?:❓\s*)?([^<]+)<\/div>\s*<div[^>]*class="faq-a"[^>]*>(?:✅\s*)?([^<]+)/gi;
  let m;
  while ((m = re.exec(content)) !== null && faqs.length < 5) {
    const q = m[1].trim(), a = m[2].trim();
    if (q.length > 5 && a.length > 5) faqs.push({ question: q, answer: a });
  }
  return faqs;
}
function getCatColor(name) {
  const found = CATS.find(c => c.name === name);
  return found ? found.color : '#0f4c81';
}
function getCatIcon(name) {
  const found = CATS.find(c => c.name === name);
  return found ? found.icon : '📂';
}

const CATS = [
  { name: "الدعم والحماية الاجتماعية", color: "#10b981", icon: "🛡️", short: "الدعم الاجتماعي" },
  { name: "مباريات التوظيف والتدريب", color: "#6366f1", icon: "💼", short: "التوظيف والتدريب" },
  { name: "الوثائق الإدارية والتأشيرات", color: "#f59e0b", icon: "📄", short: "الوثائق والتأشيرات" },
  { name: "المقاول الذاتي والعمل الحر", color: "#ec4899", icon: "🚀", short: "ريادة الأعمال" }
];

// ===== SEO FILES =====
function buildSitemap(posts, base) {
  const statics = ['/', '/about', '/contact', '/privacy', '/terms', '/dmca', '/disclaimer'];
  const cats = [...new Set(posts.map(p => p.category))];
  const now = new Date().toISOString();
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n';
  statics.forEach(s => {
    xml += '<url><loc>' + base + s + '</loc><lastmod>' + now + '</lastmod><changefreq>' + (s === '/' ? 'daily' : 'monthly') + '</changefreq><priority>' + (s === '/' ? '1.0' : '0.4') + '</priority></url>\n';
  });
  cats.forEach(c => {
    xml += '<url><loc>' + base + '/category/' + encodeURIComponent(c) + '</loc><lastmod>' + now + '</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>\n';
  });
  posts.forEach(p => {
    xml += '<url><loc>' + base + '/article/' + p.id + '</loc><lastmod>' + (p.dateISO || now) + '</lastmod><changefreq>weekly</changefreq><priority>0.8</priority>';
    if (p.image) xml += '<image:image><image:loc>' + base + '/image/' + p.id + '</image:loc><image:title>' + esc(p.title) + '</image:title></image:image>';
    xml += '</url>\n';
  });
  xml += '</urlset>';
  return xml;
}
function buildRobots(base) {
  return 'User-agent: *\nAllow: /\nDisallow: /image/\n\nUser-agent: Googlebot\nAllow: /\nAllow: /image/\n\nUser-agent: Googlebot-Image\nAllow: /image/\n\nSitemap: ' + base + '/sitemap.xml';
}
function buildRSS(posts, base) {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n<channel>\n';
  xml += '<title>بوابة الخدمات الرقمية</title>\n<link>' + base + '</link>\n';
  xml += '<description>دليلك الشامل للخدمات الرقمية الحكومية بالمغرب</description>\n<language>ar</language>\n';
  xml += '<atom:link href="' + base + '/feed.xml" rel="self" type="application/rss+xml"/>\n';
  posts.slice(0, 20).forEach(p => {
    xml += '<item><title>' + esc(p.title) + '</title><link>' + base + '/article/' + p.id + '</link>';
    xml += '<description><![CDATA[' + (p.description || '') + ']]></description>';
    xml += '<pubDate>' + new Date(p.dateISO || Date.now()).toUTCString() + '</pubDate>';
    xml += '<category>' + esc(p.category) + '</category>';
    xml += '<guid isPermaLink="true">' + base + '/article/' + p.id + '</guid></item>\n';
  });
  xml += '</channel>\n</rss>';
  return xml;
}

// ===== CSS =====
function getCSS() {
  return `<style>
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
  min-height:100vh
}
a{text-decoration:none;color:inherit}
img{max-width:100%;height:auto;display:block}

/* TOP BAR */
.tb{background:var(--d);color:var(--g400);padding:6px 0;font-size:12px}
.tb-in{max-width:1200px;margin:0 auto;padding:0 16px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:4px}
.tb a{color:var(--g400);margin:0 5px;transition:var(--t)}
.tb a:hover{color:var(--s)}

/* HEADER */
.hd{background:var(--w);box-shadow:var(--sh);position:sticky;top:0;z-index:1000;width:100%}
.hd-in{max-width:1200px;margin:0 auto;padding:8px 16px;display:flex;justify-content:space-between;align-items:center}
.logo{display:flex;align-items:center;gap:10px;flex-shrink:0}
.logo-i{width:42px;height:42px;background:linear-gradient(135deg,var(--p),var(--pl));border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.logo-i svg{width:22px;height:22px;fill:var(--w)}
.logo-t h1{font-size:17px;font-weight:800;color:var(--p);line-height:1.2}
.logo-t span{color:var(--s)}
.logo-t p{font-size:10px;color:var(--g500)}

/* HAMBURGER */
.mbtn{
  display:none;
  background:var(--w);
  border:2px solid var(--g300);
  cursor:pointer;
  padding:7px;
  border-radius:8px;
  width:40px;height:40px;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:4px;
  flex-shrink:0;
  z-index:1002;
  position:relative
}
.mbtn i{display:block;width:18px;height:2px;background:var(--d);border-radius:2px;transition:var(--t)}
.mbtn.open i:nth-child(1){transform:translateY(6px) rotate(45deg)}
.mbtn.open i:nth-child(2){opacity:0;transform:scaleX(0)}
.mbtn.open i:nth-child(3){transform:translateY(-6px) rotate(-45deg)}

/* OVERLAY */
.ov{
  display:none;
  position:fixed;
  inset:0;
  background:rgba(0,0,0,.55);
  z-index:1000;
  backdrop-filter:blur(2px);
  -webkit-backdrop-filter:blur(2px)
}
.ov.show{display:block}

/* NAVBAR */
.nv{background:linear-gradient(135deg,var(--p),var(--pd));position:relative;z-index:999}
.nv-in{max-width:1200px;margin:0 auto;padding:0 16px;display:flex;align-items:center;overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none}
.nv-in::-webkit-scrollbar{display:none}
.nl{color:rgba(255,255,255,.85);padding:12px 13px;font-size:12px;font-weight:600;white-space:nowrap;transition:var(--t);border-bottom:3px solid transparent;display:flex;align-items:center;gap:4px;flex-shrink:0}
.nl:hover,.nl.ac{color:#fff;background:rgba(255,255,255,.08);border-bottom-color:var(--s)}

/* DROPDOWN DESKTOP */
.dd{position:relative}
.dd-btn{cursor:pointer;user-select:none}
.dd-arr{font-size:8px;transition:var(--t);display:inline-block;margin-right:2px}
.dd.open .dd-arr{transform:rotate(180deg)}
.dd-menu{
  position:absolute;
  top:calc(100% + 4px);
  right:0;
  background:var(--w);
  min-width:260px;
  border-radius:var(--r);
  box-shadow:var(--shl);
  display:none;
  z-index:1050;
  overflow:hidden;
  border:1px solid var(--g200)
}
.dd.open .dd-menu{display:block}
.dd-menu a{display:flex;align-items:center;gap:8px;padding:11px 16px;color:var(--d);font-size:13px;font-weight:600;border-bottom:1px solid var(--g100);transition:var(--t)}
.dd-menu a:last-child{border:none}
.dd-menu a:hover{background:var(--g50);color:var(--p);padding-right:20px}

/* CAT DOT */
.cdot{width:8px;height:8px;border-radius:50%;flex-shrink:0;display:inline-block}

/* MOBILE SIDEBAR MENU */
.mob-nav{
  position:fixed;
  top:0;
  right:-100%;
  width:280px;
  height:100%;
  background:linear-gradient(180deg,var(--pd) 0%,var(--p) 100%);
  z-index:1001;
  transition:right .35s cubic-bezier(.4,0,.2,1);
  overflow-y:auto;
  overflow-x:hidden;
  padding-top:60px;
  padding-bottom:30px
}
.mob-nav.open{right:0}
.mob-close{
  position:absolute;
  top:12px;
  left:12px;
  width:34px;height:34px;
  background:rgba(255,255,255,.15);
  border:none;
  border-radius:50%;
  color:#fff;
  font-size:18px;
  cursor:pointer;
  display:flex;
  align-items:center;
  justify-content:center;
  transition:var(--t)
}
.mob-close:hover{background:rgba(255,255,255,.25)}
.mob-link{
  display:flex;
  align-items:center;
  gap:8px;
  padding:13px 20px;
  color:rgba(255,255,255,.9);
  font-size:14px;
  font-weight:600;
  border-bottom:1px solid rgba(255,255,255,.07);
  transition:var(--t)
}
.mob-link:hover{background:rgba(255,255,255,.1);color:#fff;padding-right:25px}
.mob-cat-title{
  padding:10px 20px;
  color:rgba(255,255,255,.5);
  font-size:11px;
  font-weight:700;
  letter-spacing:1px;
  border-bottom:1px solid rgba(255,255,255,.07)
}
.mob-cat-link{
  display:flex;
  align-items:center;
  gap:8px;
  padding:11px 30px;
  color:rgba(255,255,255,.8);
  font-size:13px;
  font-weight:600;
  border-bottom:1px solid rgba(255,255,255,.05);
  transition:var(--t)
}
.mob-cat-link:hover{background:rgba(255,255,255,.08);color:#fff}

/* HERO */
.hero{background:linear-gradient(135deg,var(--pd) 0%,var(--p) 50%,var(--pl) 100%);color:#fff;padding:36px 16px;text-align:center;position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;inset:0;background:url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M20 20h-4v-4h4v4zm0-20h-4v4h4V0zM0 20h4v-4H0v4z'/%3E%3C/g%3E%3C/svg%3E")}
.hero-c{position:relative;z-index:1}
.hero h2{font-size:22px;font-weight:800;margin-bottom:8px}
.hero p{font-size:13px;opacity:.9;margin-bottom:18px;max-width:600px;margin-left:auto;margin-right:auto;line-height:1.7}
.stats{display:flex;justify-content:center;gap:20px;flex-wrap:wrap}
.st{text-align:center}
.st b{font-size:22px;font-weight:800;color:var(--s);display:block}
.st small{font-size:11px;opacity:.8}

/* SEARCH */
.sr-w{max-width:500px;margin:-18px auto 16px;padding:0 16px;position:relative;z-index:10}
.sr-b{display:flex;background:var(--w);border-radius:50px;box-shadow:var(--shl);overflow:hidden;border:2px solid transparent;transition:var(--t)}
.sr-b:focus-within{border-color:var(--p)}
.sr-b input{flex:1;border:none;padding:11px 16px;font-size:13px;font-family:'Cairo',sans-serif;outline:none;background:transparent;min-width:0}
.sr-b button{background:linear-gradient(135deg,var(--p),var(--pl));color:#fff;border:none;padding:11px 18px;cursor:pointer;font-family:'Cairo',sans-serif;font-weight:600;font-size:12px;white-space:nowrap;flex-shrink:0}

/* AD */
.ad{background:var(--g100);border:2px dashed var(--g300);border-radius:var(--r);padding:10px;text-align:center;margin:14px 0;min-height:70px;display:flex;align-items:center;justify-content:center;color:var(--g400);font-size:11px}
.adc{max-width:1200px;margin:8px auto;padding:0 16px}

/* GRID */
.mg{max-width:1200px;margin:16px auto;padding:0 16px;display:grid;grid-template-columns:1fr 280px;gap:20px;align-items:start}

/* CATS BAR */
.cb{display:flex;gap:8px;margin-bottom:14px;overflow-x:auto;padding-bottom:6px;-webkit-overflow-scrolling:touch;scrollbar-width:none;-ms-overflow-style:none}
.cb::-webkit-scrollbar{display:none}
.cc{display:flex;align-items:center;gap:5px;padding:6px 13px;border-radius:50px;font-size:11px;font-weight:600;white-space:nowrap;transition:var(--t);border:2px solid var(--g200);background:var(--w);color:var(--g600);flex-shrink:0}
.cc:hover,.cc.ac{border-color:var(--p);color:var(--p);background:rgba(15,76,129,.04);transform:translateY(-1px);box-shadow:var(--sh)}

/* FEATURED */
.fp{background:linear-gradient(135deg,var(--p),var(--pd));border-radius:var(--rl);color:#fff;margin-bottom:16px;overflow:hidden;transition:var(--t);display:block}
.fp:hover{transform:translateY(-3px);box-shadow:var(--shl)}
.fp-img{width:100%;height:200px;object-fit:cover}
.fp-b{padding:20px}
.fp-bdg{background:var(--s);color:var(--d);padding:3px 10px;border-radius:20px;font-size:10px;font-weight:700;display:inline-block;margin-bottom:6px}
.fp h2{font-size:18px;margin-bottom:6px;line-height:1.5}
.fp p{opacity:.85;font-size:12px;line-height:1.7}
.fp-m{display:flex;gap:10px;margin-top:10px;font-size:10px;opacity:.7;flex-wrap:wrap}

/* POST CARDS */
.pl{display:grid;gap:14px}
.pc{background:var(--w);border-radius:var(--rl);overflow:hidden;box-shadow:var(--sh);transition:var(--t);border:1px solid var(--g100);display:block}
.pc:hover{transform:translateY(-2px);box-shadow:var(--shl);border-color:var(--p)}
.pc-img{width:100%;height:170px;object-fit:cover;transition:var(--t)}
.pc:hover .pc-img{transform:scale(1.02)}
.pc-b{padding:14px}
.pc-t{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;flex-wrap:wrap;gap:4px}
.bdg{padding:3px 9px;border-radius:20px;font-size:10px;font-weight:700;display:inline-flex;align-items:center;gap:3px}
.pc h3{font-size:14px;font-weight:700;color:var(--d);margin-bottom:5px;line-height:1.6;transition:var(--t)}
.pc:hover h3{color:var(--p)}
.pc-ex{color:var(--g600);font-size:11px;line-height:1.7;margin-bottom:8px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.pc-ft{display:flex;justify-content:space-between;align-items:center;padding-top:8px;border-top:1px solid var(--g100);font-size:10px;color:var(--g500)}
.rm{color:var(--p);font-weight:600;transition:var(--t)}
.pc:hover .rm{letter-spacing:.5px}

/* SIDEBAR */
.sb{display:flex;flex-direction:column;gap:14px}
.wg{background:var(--w);border-radius:var(--rl);padding:16px;box-shadow:var(--sh);border:1px solid var(--g100)}
.wt{font-size:14px;font-weight:700;color:var(--d);margin-bottom:10px;padding-bottom:8px;border-bottom:3px solid var(--p)}
.ti{display:flex;gap:8px;padding:7px 0;border-bottom:1px solid var(--g100);transition:var(--t)}
.ti:last-child{border:none}
.ti:hover{padding-right:3px}
.tn{width:26px;height:26px;background:linear-gradient(135deg,var(--p),var(--pl));color:#fff;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0}
.tt h4{font-size:11px;font-weight:600;color:var(--d);line-height:1.5}
.ti:hover .tt h4{color:var(--p)}
.tt span{font-size:9px;color:var(--g400)}
.ll{list-style:none}
.ll li{padding:5px 0;border-bottom:1px solid var(--g100)}
.ll li:last-child{border:none}
.ll a{color:var(--g700);font-size:11px;display:flex;align-items:center;gap:4px;transition:var(--t)}
.ll a:hover{color:var(--p);padding-right:3px}
.ll a::before{content:'◀';font-size:7px;color:var(--p)}
.nwl{background:linear-gradient(135deg,var(--p),var(--pd))!important;color:#fff!important;border:none!important}
.nwl .wt{color:#fff;border-bottom-color:var(--s)}
.nwl p{font-size:11px;opacity:.9;margin-bottom:8px}
.nwl input{width:100%;padding:8px 12px;border:2px solid rgba(255,255,255,.2);border-radius:8px;background:rgba(255,255,255,.1);color:#fff;font-family:'Cairo',sans-serif;font-size:12px;margin-bottom:6px;outline:none;transition:var(--t)}
.nwl input::placeholder{color:rgba(255,255,255,.5)}
.nwl input:focus{border-color:var(--s)}
.nwl-btn{width:100%;padding:8px;background:var(--s);color:var(--d);border:none;border-radius:8px;font-family:'Cairo',sans-serif;font-weight:700;font-size:12px;cursor:pointer;transition:var(--t)}
.nwl-btn:hover{background:var(--sl)}

/* ARTICLE */
.ag{max-width:1200px;margin:16px auto;padding:0 16px;display:grid;grid-template-columns:1fr 280px;gap:20px;align-items:start}
.am{background:var(--w);border-radius:var(--rl);overflow:hidden;box-shadow:var(--sh)}
.ah-img{width:100%;height:280px;object-fit:cover}
.ab{padding:24px}
.bc{display:flex;align-items:center;gap:4px;font-size:11px;color:var(--g500);margin-bottom:10px;flex-wrap:wrap}
.bc a{color:var(--p);transition:var(--t)}
.bc a:hover{text-decoration:underline}
.ah{margin-bottom:18px;padding-bottom:14px;border-bottom:2px solid var(--g100)}
.ah h1{font-size:22px;font-weight:800;color:var(--d);line-height:1.5;margin-bottom:8px}
.am-meta{display:flex;gap:10px;flex-wrap:wrap;font-size:11px;color:var(--g500)}
.ac{font-size:15px;line-height:2;color:var(--g700)}
.ac h3.ch{font-size:17px;color:var(--pd);margin:18px 0 8px;padding:9px 14px;border-right:4px solid var(--s);background:linear-gradient(to left,transparent,rgba(15,76,129,.03));border-radius:0 8px 8px 0}
.ac p{margin-bottom:8px}
.ac .sn{display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;background:var(--p);color:#fff;border-radius:50%;font-size:10px;font-weight:700;margin-left:4px}
.faq-item{background:var(--g50);border-radius:8px;margin:8px 0;overflow:hidden;border:1px solid var(--g200)}
.faq-q{padding:10px 12px;font-weight:700;font-size:13px;color:var(--d);border-bottom:1px solid var(--g200);background:var(--w)}
.faq-a{padding:10px 12px;font-size:12px;color:var(--g600);line-height:1.8}
.share{display:flex;align-items:center;gap:6px;margin-top:18px;padding-top:12px;border-top:2px solid var(--g100);flex-wrap:wrap}
.share b{font-size:12px;color:var(--d)}
.sh{padding:5px 10px;border-radius:6px;font-size:10px;font-weight:600;color:#fff;transition:var(--t);display:inline-flex;align-items:center;gap:3px}
.sh:hover{transform:translateY(-1px);box-shadow:var(--sh)}
.rel{margin-top:20px;padding-top:16px;border-top:2px solid var(--g100)}
.rel h3{font-size:15px;font-weight:700;margin-bottom:10px}
.rg{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.rc{padding:10px;background:var(--g50);border-radius:8px;border:1px solid var(--g200);transition:var(--t)}
.rc:hover{border-color:var(--p);background:var(--w);box-shadow:var(--sh)}
.rc h4{font-size:11px;color:var(--d);margin-bottom:3px;line-height:1.5}
.rc span{font-size:9px;color:var(--g400)}

/* FOOTER */
.ft{background:var(--d);color:var(--g400);margin-top:30px}
.ft-g{max-width:1200px;margin:0 auto;padding:28px 16px;display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:20px}
.ft h3{font-size:15px;color:var(--w);margin-bottom:8px;font-weight:700}
.ft h4{font-size:13px;color:var(--w);margin-bottom:8px;font-weight:700}
.ft p{font-size:11px;line-height:1.8}
.ft ul{list-style:none}
.ft li{margin-bottom:5px}
.ft li a{color:var(--g400);font-size:11px;transition:var(--t);display:block}
.ft li a:hover{color:var(--s);padding-right:3px}
.ft-b{border-top:1px solid rgba(255,255,255,.06);padding:12px 16px;text-align:center;font-size:10px;max-width:1200px;margin:0 auto}
.ft-b a{color:var(--s)}

/* STATIC */
.sp{max-width:800px;margin:20px auto;padding:0 16px}
.sc{background:var(--w);border-radius:var(--rl);padding:28px;box-shadow:var(--sh)}
.sc h1{font-size:22px;color:var(--p);margin-bottom:14px;padding-bottom:10px;border-bottom:3px solid var(--s)}
.sc h2{font-size:16px;color:var(--d);margin:18px 0 6px;padding-right:10px;border-right:4px solid var(--p)}
.sc p{margin-bottom:8px;color:var(--g700);font-size:13px;line-height:1.9}
.sc ul{padding-right:16px;margin-bottom:10px}
.sc li{margin-bottom:4px;color:var(--g600);font-size:12px}
.sc a{color:var(--p)}
.cf{display:flex;flex-direction:column;gap:8px;margin-top:12px}
.cf input,.cf textarea{padding:9px 12px;border:2px solid var(--g200);border-radius:8px;font-family:'Cairo',sans-serif;font-size:13px;outline:none;transition:var(--t);width:100%}
.cf input:focus,.cf textarea:focus{border-color:var(--p)}
.cf textarea{min-height:120px;resize:vertical}
.cf button{padding:10px;background:var(--p);color:#fff;border:none;border-radius:8px;font-family:'Cairo',sans-serif;font-weight:700;font-size:13px;cursor:pointer;transition:var(--t)}
.cf button:hover{background:var(--pl)}

/* BTT */
.btt{position:fixed;bottom:18px;left:18px;width:38px;height:38px;background:var(--p);color:#fff;border:none;border-radius:50%;cursor:pointer;display:none;align-items:center;justify-content:center;box-shadow:var(--shl);z-index:99;font-size:16px;transition:var(--t)}
.btt:hover{transform:translateY(-2px)}

/* RESPONSIVE */
@media(max-width:1024px){
  .mg,.ag{grid-template-columns:1fr}
  .sb{order:2}
  .ft-g{grid-template-columns:1fr 1fr}
}
@media(max-width:768px){
  .mbtn{display:flex}
  .nv-in{display:none}
  .hero h2{font-size:18px}
  .hero{padding:28px 14px}
  .stats{gap:14px}
  .st b{font-size:18px}
  .fp-b{padding:14px}
  .fp h2{font-size:15px}
  .fp-img{height:160px}
  .ab{padding:16px}
  .ah h1{font-size:18px}
  .ah-img{height:180px}
  .rg{grid-template-columns:1fr}
  .ft-g{grid-template-columns:1fr;gap:14px}
  .sc{padding:18px}
  .sc h1{font-size:18px}
  .tb-in{justify-content:center;font-size:10px}
}
@media(max-width:480px){
  .logo-t h1{font-size:14px}
  .logo-t p{font-size:9px}
  .logo-i{width:36px;height:36px}
  .logo-i svg{width:18px;height:18px}
  .hero h2{font-size:16px}
  .hero p{font-size:11px}
  .pc h3{font-size:13px}
  .ah h1{font-size:16px}
  .ac{font-size:13px}
  .fp h2{font-size:14px}
  .mob-nav{width:100%}
}
@media print{
  .hd,.nv,.tb,.sb,.ft,.ad,.share,.btt,.sr-w,.adc,.mob-nav,.ov,.mbtn{display:none!important}
  .mg,.ag{grid-template-columns:1fr}
  .am{box-shadow:none}
}
</style>`;
}

// ===== JAVASCRIPT =====
function getJS() {
  return `<script>
var _navOpen=false;
function openNav(){
  _navOpen=true;
  document.getElementById('mobNav').classList.add('open');
  document.getElementById('navOv').classList.add('show');
  document.getElementById('mbtn').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeNav(){
  _navOpen=false;
  document.getElementById('mobNav').classList.remove('open');
  document.getElementById('navOv').classList.remove('show');
  document.getElementById('mbtn').classList.remove('open');
  document.body.style.overflow='';
}
function toggleNav(){_navOpen?closeNav():openNav();}
function toggleDD(e){
  e.preventDefault();e.stopPropagation();
  var d=document.getElementById('deskDD');
  d.classList.toggle('open');
}
document.addEventListener('click',function(e){
  var d=document.getElementById('deskDD');
  if(d&&!d.contains(e.target))d.classList.remove('open');
});
window.addEventListener('resize',function(){
  if(window.innerWidth>768&&_navOpen)closeNav();
},{passive:true});
window.addEventListener('scroll',function(){
  var b=document.getElementById('bttBtn');
  if(b)b.style.display=window.scrollY>300?'flex':'none';
},{passive:true});
function doSearch(){
  var inp=document.getElementById('srch');
  if(!inp)return;
  var q=inp.value.toLowerCase().trim();
  if(!q){document.querySelectorAll('.pc,.fp').forEach(function(e){e.style.display=''});return;}
  document.querySelectorAll('.pc,.fp').forEach(function(e){
    e.style.display=e.textContent.toLowerCase().indexOf(q)>=0?'':'none';
  });
}
</script>`;
}

// ===== HEADER =====
function buildHeader(base) {
  const today = new Date().toLocaleDateString('ar-MA', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  let h = '';
  h += '<div class="tb"><div class="tb-in"><span>📅 ' + today + '</span><div><a href="' + base + '/about">من نحن</a><a href="' + base + '/contact">اتصل بنا</a></div></div></div>';
  h += '<header class="hd"><div class="hd-in">';
  h += '<a href="' + base + '/" class="logo"><div class="logo-i"><svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg></div><div class="logo-t"><h1>بوابة الخدمات <span>الرقمية</span></h1><p>دليلك الشامل للمنصات الحكومية المغربية</p></div></a>';
  h += '<button class="mbtn" id="mbtn" onclick="toggleNav()" aria-label="القائمة"><i></i><i></i><i></i></button>';
  h += '</div></header>';
  h += '<div class="ov" id="navOv" onclick="closeNav()"></div>';
  h += '<div class="mob-nav" id="mobNav">';
  h += '<button class="mob-close" onclick="closeNav()">✕</button>';
  h += '<a href="' + base + '/" class="mob-link" onclick="closeNav()">🏠 الرئيسية</a>';
  h += '<div class="mob-cat-title">📂 أقسام المدونة</div>';
  CATS.forEach(c => {
    h += '<a href="' + base + '/category/' + encodeURIComponent(c.name) + '" class="mob-cat-link" onclick="closeNav()"><span class="cdot" style="background:' + c.color + '"></span>' + c.icon + ' ' + c.name + '</a>';
  });
  CATS.forEach(c => {
    h += '<a href="' + base + '/category/' + encodeURIComponent(c.name) + '" class="mob-link" onclick="closeNav()">' + c.icon + ' ' + c.short + '</a>';
  });
  h += '<a href="' + base + '/contact" class="mob-link" onclick="closeNav()">📧 اتصل بنا</a>';
  h += '<a href="' + base + '/about" class="mob-link" onclick="closeNav()">ℹ️ من نحن</a>';
  h += '</div>';
  h += '<nav class="nv"><div class="nv-in">';
  h += '<a href="' + base + '/" class="nl ac">🏠 الرئيسية</a>';
  h += '<div class="dd nl" id="deskDD"><div class="dd-btn" onclick="toggleDD(event)">📂 أقسام المدونة <span class="dd-arr">▼</span></div><div class="dd-menu">';
  CATS.forEach(c => {
    h += '<a href="' + base + '/category/' + encodeURIComponent(c.name) + '"><span class="cdot" style="background:' + c.color + '"></span>' + c.icon + ' ' + c.name + '</a>';
  });
  h += '</div></div>';
  CATS.forEach(c => {
    h += '<a href="' + base + '/category/' + encodeURIComponent(c.name) + '" class="nl">' + c.icon + ' ' + c.short + '</a>';
  });
  h += '<a href="' + base + '/contact" class="nl">📧 اتصل بنا</a>';
  h += '</div></nav>';
  return h;
}

// ===== FOOTER =====
function buildFooter(base) {
  let h = '<footer class="ft"><div class="ft-g">';
  h += '<div><h3>🇲🇦 بوابة الخدمات الرقمية</h3><p>منصة إلكترونية مستقلة متخصصة في تبسيط الإجراءات الإدارية والخدمات الرقمية الحكومية بالمغرب.</p></div>';
  h += '<div><h4>📂 الأقسام</h4><ul>';
  CATS.forEach(c => { h += '<li><a href="' + base + '/category/' + encodeURIComponent(c.name) + '">' + c.icon + ' ' + c.short + '</a></li>'; });
  h += '</ul></div>';
  h += '<div><h4>📋 صفحات</h4><ul>';
  h += '<li><a href="' + base + '/about">من نحن</a></li><li><a href="' + base + '/contact">اتصل بنا</a></li>';
  h += '<li><a href="' + base + '/privacy">سياسة الخصوصية</a></li><li><a href="' + base + '/terms">شروط الاستخدام</a></li>';
  h += '<li><a href="' + base + '/disclaimer">إخلاء المسؤولية</a></li><li><a href="' + base + '/dmca">DMCA</a></li>';
  h += '</ul></div>';
  h += '<div><h4>🔗 مواقع مفيدة</h4><ul>';
  h += '<li><a href="https://www.rsu.ma" target="_blank" rel="noopener">السجل الاجتماعي RSU</a></li>';
  h += '<li><a href="https://www.cnss.ma" target="_blank" rel="noopener">CNSS</a></li>';
  h += '<li><a href="https://www.ofppt.ma" target="_blank" rel="noopener">OFPPT</a></li>';
  h += '<li><a href="https://ae.gov.ma" target="_blank" rel="noopener">المقاول الذاتي</a></li>';
  h += '<li><a href="' + base + '/sitemap.xml">خريطة الموقع</a></li>';
  h += '</ul></div></div>';
  h += '<div class="ft-b"><p>© ' + new Date().getFullYear() + ' بوابة الخدمات الرقمية | جميع الحقوق محفوظة</p>';
  h += '<p style="margin-top:3px"><a href="' + base + '/privacy">الخصوصية</a> · <a href="' + base + '/terms">الشروط</a> · <a href="' + base + '/dmca">DMCA</a> · <a href="' + base + '/disclaimer">إخلاء المسؤولية</a></p>';
  h += '<p style="margin-top:3px">موقع تعليمي مستقل غير تابع لأي جهة حكومية</p></div></footer>';
  h += '<button class="btt" id="bttBtn" onclick="window.scrollTo({top:0,behavior:\'smooth\'})">↑</button>';
  h += getJS();
  return h;
}

// ===== SIDEBAR =====
function buildSidebar(posts, base) {
  const recent = posts.slice(0, 5);
  const cats = [...new Set(posts.map(p => p.category))];
  let h = '<aside class="sb">';
  h += '<div class="ad">مساحة إعلانية</div>';
  h += '<div class="wg"><h3 class="wt">📊 الأكثر قراءة</h3>';
  recent.forEach((p, i) => {
    const t = p.title.length > 50 ? p.title.substring(0, 50) + '...' : p.title;
    h += '<a href="' + base + '/article/' + p.id + '" class="ti"><div class="tn">' + (i + 1) + '</div><div class="tt"><h4>' + t + '</h4><span>' + p.date + (p.views ? ' · 👁️ ' + p.views : '') + '</span></div></a>';
  });
  h += '</div>';
  h += '<div class="wg"><h3 class="wt">📂 التصنيفات</h3><ul class="ll">';
  cats.forEach(c => {
    const n = posts.filter(p => p.category === c).length;
    const cl = getCatColor(c);
    h += '<li><a href="' + base + '/category/' + encodeURIComponent(c) + '"><span class="cdot" style="background:' + cl + '"></span> ' + c + ' <small style="margin-right:auto;color:var(--g400)">(' + n + ')</small></a></li>';
  });
  h += '</ul></div>';
  h += '<div class="wg nwl"><h3 class="wt">✉️ النشرة البريدية</h3><p>اشترك للحصول على آخر التحديثات</p><input type="email" placeholder="بريدك الإلكتروني..." aria-label="البريد"><button class="nwl-btn">اشترك الآن 🔔</button></div>';
  h += '<div class="ad">مساحة إعلانية</div>';
  h += '<div class="wg"><h3 class="wt">🔗 روابط مفيدة</h3><ul class="ll">';
  h += '<li><a href="https://www.rsu.ma" target="_blank" rel="noopener">السجل الاجتماعي RSU</a></li>';
  h += '<li><a href="https://www.cnss.ma" target="_blank" rel="noopener">CNSS</a></li>';
  h += '<li><a href="https://www.ofppt.ma" target="_blank" rel="noopener">OFPPT</a></li>';
  h += '<li><a href="https://ae.gov.ma" target="_blank" rel="noopener">المقاول الذاتي</a></li>';
  h += '<li><a href="https://www.cnie.ma" target="_blank" rel="noopener">البطاقة الوطنية CNIE</a></li>';
  h += '</ul></div></aside>';
  return h;
}

// ===== HOME PAGE =====
function buildHomePage(posts, base) {
  const feat = posts[0];
  const rest = posts.slice(1);
  const cnt = posts.length;
  const cc = [...new Set(posts.map(p => p.category))].length;
  const tv = posts.reduce((s, p) => s + (p.views || 0), 0);
  const tvd = tv > 999 ? Math.floor(tv / 1000) + 'K' : tv;
  const schema = { "@context": "https://schema.org", "@type": "WebSite", "name": "بوابة الخدمات الرقمية", "url": base, "description": "دليلك الشامل للخدمات الرقمية الحكومية بالمغرب", "inLanguage": "ar", "potentialAction": { "@type": "SearchAction", "target": base + "/?q={search_term_string}", "query-input": "required name=search_term_string" } };
  let h = '<!DOCTYPE html><html lang="ar" dir="rtl"><head>';
  h += '<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">';
  h += '<title>بوابة الخدمات الرقمية | دليل المواطن المغربي للخدمات الحكومية 2026</title>';
  h += '<meta name="description" content="دليلك الشامل للخدمات الرقمية الحكومية بالمغرب: AMO تضامن، RSU، مباريات التوظيف 2026، الوثائق الإدارية، المقاول الذاتي. شروحات مبسطة ومحدثة.">';
  h += '<meta name="keywords" content="خدمات رقمية المغرب,أمو تضامن,السجل الاجتماعي الموحد,مباريات التوظيف 2026,CNSS,OFPPT,جواز السفر,البطاقة الوطنية,المقاول الذاتي,فيزا شنغن">';
  h += '<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1"><meta name="googlebot" content="index,follow">';
  h += '<link rel="canonical" href="' + base + '/"><meta property="og:type" content="website"><meta property="og:title" content="بوابة الخدمات الرقمية">';
  h += '<meta property="og:description" content="دليلك الشامل للخدمات الرقمية الحكومية بالمغرب"><meta property="og:url" content="' + base + '/"><meta property="og:locale" content="ar_MA">';
  h += '<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="بوابة الخدمات الرقمية">';
  h += '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>';
  h += '<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap" rel="stylesheet">';
  h += '<script type="application/ld+json">' + JSON.stringify(schema) + '</script>';
  h += getCSS() + '</head><body>';
  h += buildHeader(base);
  h += '<section class="hero"><div class="hero-c"><h2>🇲🇦 دليلك الشامل للخدمات الرقمية الحكومية بالمغرب</h2>';
  h += '<p>شروحات مبسطة ومحدثة لجميع الإجراءات الإدارية والمنصات الحكومية - كل ما يحتاجه المواطن المغربي</p>';
  h += '<div class="stats"><div class="st"><b>' + cnt + '+</b><small>مقال ودليل</small></div><div class="st"><b>' + cc + '</b><small>تصنيف</small></div><div class="st"><b>' + tvd + '+</b><small>زيارة</small></div><div class="st"><b>24/7</b><small>تحديث مستمر</small></div></div></div></section>';
  h += '<div class="sr-w"><div class="sr-b"><input type="text" id="srch" placeholder="🔍 ابحث عن خدمة أو إجراء إداري..." onkeyup="doSearch()" aria-label="البحث"><button onclick="doSearch()">بحث</button></div></div>';
  h += '<div class="adc"><div class="ad"><!-- Google AdSense Leaderboard --></div></div>';
  h += '<div class="mg"><main>';
  h += '<div class="cb"><a href="' + base + '/" class="cc ac">📋 الكل</a>';
  CATS.forEach(c => { h += '<a href="' + base + '/category/' + encodeURIComponent(c.name) + '" class="cc"><span class="cdot" style="background:' + c.color + '"></span>' + c.short + '</a>'; });
  h += '</div>';
  if (feat) {
    h += '<a href="' + base + '/article/' + feat.id + '" class="fp">';
    if (feat.image) h += '<img class="fp-img" src="' + base + '/image/' + feat.id + '" alt="' + esc(feat.imageAlt || feat.title) + '" width="1024" height="200" loading="eager">';
    h += '<div class="fp-b"><div class="fp-bdg">⭐ مقال مميز</div><h2>' + feat.title + '</h2><p>' + (feat.description || '') + '</p>';
    h += '<div class="fp-m"><span>📅 ' + feat.date + '</span><span>📂 ' + feat.category + '</span><span>⏱️ ' + (feat.readTime || 3) + ' د</span><span>👁️ ' + (feat.views || 0) + '</span></div></div></a>';
  }
  h += '<div class="ad"><!-- Google AdSense In-article --></div>';
  h += '<div class="pl">';
  if (rest.length === 0 && !feat) {
    h += '<div style="text-align:center;padding:40px"><h3 style="color:var(--g500)">جاري تحضير المحتوى...</h3><p style="color:var(--g400);font-size:12px;margin-top:6px">سيتم نشر المقالات تلقائياً قريباً</p></div>';
  } else {
    rest.forEach((p, i) => {
      const cl = p.categoryColor || getCatColor(p.category);
      h += '<a href="' + base + '/article/' + p.id + '" class="pc">';
      if (p.image) h += '<img class="pc-img" src="' + base + '/image/' + p.id + '" alt="' + esc(p.imageAlt || p.title) + '" width="600" height="170" loading="lazy">';
      h += '<div class="pc-b"><div class="pc-t"><span class="bdg" style="background:' + cl + '14;color:' + cl + '"><span class="cdot" style="background:' + cl + '"></span>' + p.category + '</span><small style="color:var(--g400);font-size:9px">⏱️ ' + (p.readTime || 3) + ' د</small></div>';
      h += '<h3>' + p.title + '</h3><p class="pc-ex">' + (p.description || '') + '</p>';
      h += '<div class="pc-ft"><span>📅 ' + p.date + '</span><span>👁️ ' + (p.views || 0) + '</span><span class="rm">اقرأ المزيد ←</span></div></div></a>';
      if ((i + 1) % 3 === 0) h += '<div class="ad"><!-- Google AdSense In-feed --></div>';
    });
  }
  h += '</div></main>' + buildSidebar(posts, base) + '</div>' + buildFooter(base) + '</body></html>';
  return h;
}

// ===== ARTICLE PAGE =====
function buildArticlePage(post, all, base) {
  const related = all.filter(p => p.category === post.category && p.id !== post.id).slice(0, 4);
  const faqs = extractFAQ(post.content);
  const su = encodeURIComponent(base + '/article/' + post.id);
  const st = encodeURIComponent(post.title);
  const cl = post.categoryColor || getCatColor(post.category);
  const artSch = { "@context": "https://schema.org", "@type": "Article", "headline": post.title, "description": post.description || '', "datePublished": post.dateISO, "dateModified": post.dateISO, "author": { "@type": "Organization", "name": "بوابة الخدمات الرقمية", "url": base }, "publisher": { "@type": "Organization", "name": "بوابة الخدمات الرقمية", "url": base }, "mainEntityOfPage": { "@type": "WebPage", "@id": base + '/article/' + post.id }, "articleSection": post.category, "inLanguage": "ar", "keywords": post.keywords };
  if (post.image) artSch.image = base + '/image/' + post.id;
  const bcSch = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "الرئيسية", "item": base }, { "@type": "ListItem", "position": 2, "name": post.category, "item": base + '/category/' + encodeURIComponent(post.category) }, { "@type": "ListItem", "position": 3, "name": post.title, "item": base + '/article/' + post.id }] };
  let faqSch = '';
  if (faqs.length > 0) faqSch = '<script type="application/ld+json">' + JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }) + '</script>';
  let h = '<!DOCTYPE html><html lang="ar" dir="rtl"><head>';
  h += '<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">';
  h += '<title>' + esc(post.title) + ' | بوابة الخدمات الرقمية</title>';
  h += '<meta name="description" content="' + esc(post.description || '') + '"><meta name="keywords" content="' + esc(post.keywords || '') + '">';
  h += '<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1">';
  h += '<link rel="canonical" href="' + base + '/article/' + post.id + '">';
  h += '<meta property="og:type" content="article"><meta property="og:title" content="' + esc(post.title) + '">';
  h += '<meta property="og:description" content="' + esc(post.description || '') + '"><meta property="og:url" content="' + base + '/article/' + post.id + '"><meta property="og:locale" content="ar_MA">';
  if (post.image) h += '<meta property="og:image" content="' + base + '/image/' + post.id + '"><meta property="og:image:width" content="1024"><meta property="og:image:height" content="576">';
  h += '<meta property="article:published_time" content="' + (post.dateISO || '') + '"><meta property="article:section" content="' + esc(post.category) + '">';
  h += '<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="' + esc(post.title) + '">';
  if (post.image) h += '<meta name="twitter:image" content="' + base + '/image/' + post.id + '">';
  h += '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>';
  h += '<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap" rel="stylesheet">';
  h += '<script type="application/ld+json">' + JSON.stringify(artSch) + '</script>';
  h += '<script type="application/ld+json">' + JSON.stringify(bcSch) + '</script>';
  h += faqSch;
  h += getCSS() + '</head><body>';
  h += buildHeader(base);
  h += '<div class="adc"><div class="ad"><!-- Google AdSense --></div></div>';
  h += '<div class="ag"><article class="am" itemscope itemtype="https://schema.org/Article">';
  if (post.image) h += '<img class="ah-img" src="' + base + '/image/' + post.id + '" alt="' + esc(post.imageAlt || post.title) + '" width="1024" height="280" loading="eager" itemprop="image">';
  h += '<div class="ab">';
  h += '<nav class="bc" aria-label="مسار التنقل"><a href="' + base + '/">🏠 الرئيسية</a> › <a href="' + base + '/category/' + encodeURIComponent(post.category) + '">' + post.category + '</a> › <span>' + post.title.substring(0, 35) + '...</span></nav>';
  h += '<header class="ah"><span class="bdg" style="background:' + cl + '14;color:' + cl + ';margin-bottom:8px;display:inline-flex"><span class="cdot" style="background:' + cl + '"></span>' + post.category + '</span>';
  h += '<h1 itemprop="headline">' + post.title + '</h1>';
  h += '<div class="am-meta"><span>📅 <time itemprop="datePublished" datetime="' + (post.dateISO || '') + '">' + post.date + '</time></span><span>⏱️ ' + (post.readTime || 3) + ' دقائق</span><span>📝 ' + (post.wordCount || 0) + ' كلمة</span><span>👁️ ' + (post.views || 0) + ' مشاهدة</span></div></header>';
  h += '<div class="ad"><!-- Google AdSense Before Content --></div>';
  h += '<div class="ac" itemprop="articleBody">' + post.content + '</div>';
  h += '<div class="ad"><!-- Google AdSense After Content --></div>';
  h += '<div class="share"><b>📤 شارك:</b>';
  h += '<a href="https://www.facebook.com/sharer/sharer.php?u=' + su + '" target="_blank" rel="noopener" class="sh" style="background:#1877f2">📘 فيسبوك</a>';
  h += '<a href="https://twitter.com/intent/tweet?url=' + su + '&text=' + st + '" target="_blank" rel="noopener" class="sh" style="background:#1da1f2">🐦 تويتر</a>';
  h += '<a href="https://wa.me/?text=' + st + '%20' + su + '" target="_blank" rel="noopener" class="sh" style="background:#25d366">💬 واتساب</a>';
  h += '<a href="https://t.me/share/url?url=' + su + '&text=' + st + '" target="_blank" rel="noopener" class="sh" style="background:#0088cc">✈️ تلغرام</a></div>';
  if (related.length > 0) {
    h += '<div class="rel"><h3>📚 مقالات ذات صلة</h3><div class="rg">';
    related.forEach(r => { h += '<a href="' + base + '/article/' + r.id + '" class="rc"><h4>' + r.title + '</h4><span>📅 ' + r.date + '</span></a>'; });
    h += '</div></div>';
  }
  h += '</div></article>' + buildSidebar(all, base) + '</div>' + buildFooter(base) + '</body></html>';
  return h;
}

// ===== CATEGORY PAGE =====
function buildCategoryPage(catName, filtered, all, base) {
  const cl = getCatColor(catName);
  const ic = getCatIcon(catName);
  const catSch = { "@context": "https://schema.org", "@type": "CollectionPage", "name": catName, "url": base + '/category/' + encodeURIComponent(catName), "description": "جميع المقالات في تصنيف " + catName };
  let h = '<!DOCTYPE html><html lang="ar" dir="rtl"><head>';
  h += '<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">';
  h += '<title>' + esc(catName) + ' | بوابة الخدمات الرقمية 2026</title>';
  h += '<meta name="description" content="جميع المقالات والشروحات في تصنيف ' + esc(catName) + ' - بوابة الخدمات الرقمية المغربية">';
  h += '<meta name="robots" content="index,follow"><link rel="canonical" href="' + base + '/category/' + encodeURIComponent(catName) + '">';
  h += '<meta property="og:type" content="website"><meta property="og:title" content="' + esc(catName) + ' | بوابة الخدمات الرقمية">';
  h += '<meta property="og:url" content="' + base + '/category/' + encodeURIComponent(catName) + '">';
  h += '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>';
  h += '<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap" rel="stylesheet">';
  h += '<script type="application/ld+json">' + JSON.stringify(catSch) + '</script>';
  h += getCSS() + '</head><body>';
  h += buildHeader(base);
  h += '<section class="hero" style="padding:28px 16px;background:linear-gradient(135deg,' + cl + 'cc,' + cl + '88)"><div class="hero-c"><h2>' + ic + ' ' + catName + '</h2><p>' + filtered.length + ' مقال في هذا التصنيف</p></div></section>';
  h += '<div class="mg"><main>';
  h += '<nav class="bc" style="margin-bottom:12px"><a href="' + base + '/">🏠 الرئيسية</a> › <span>' + catName + '</span></nav>';
  h += '<div class="ad"><!-- Google AdSense --></div>';
  h += '<div class="pl">';
  if (filtered.length === 0) {
    h += '<div style="text-align:center;padding:40px"><h3 style="color:var(--g500)">لا توجد مقالات بعد</h3><p style="margin-top:6px"><a href="' + base + '/" style="color:var(--p)">← العودة للرئيسية</a></p></div>';
  } else {
    filtered.forEach((p, i) => {
      h += '<a href="' + base + '/article/' + p.id + '" class="pc">';
      if (p.image) h += '<img class="pc-img" src="' + base + '/image/' + p.id + '" alt="' + esc(p.imageAlt || p.title) + '" width="600" height="170" loading="lazy">';
      h += '<div class="pc-b"><div class="pc-t"><span class="bdg" style="background:' + cl + '14;color:' + cl + '"><span class="cdot" style="background:' + cl + '"></span>' + p.category + '</span></div>';
      h += '<h3>' + p.title + '</h3><p class="pc-ex">' + (p.description || '') + '</p>';
      h += '<div class="pc-ft"><span>📅 ' + p.date + '</span><span>👁️ ' + (p.views || 0) + '</span><span class="rm">اقرأ المزيد ←</span></div></div></a>';
      if ((i + 1) % 3 === 0) h += '<div class="ad"><!-- Google AdSense --></div>';
    });
  }
  h += '</div></main>' + buildSidebar(all, base) + '</div>' + buildFooter(base) + '</body></html>';
  return h;
}

// ===== STATIC PAGE WRAPPER =====
function staticWrap(base, posts, title, slug, content) {
  let h = '<!DOCTYPE html><html lang="ar" dir="rtl"><head>';
  h += '<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">';
  h += '<title>' + title + ' | بوابة الخدمات الرقمية</title>';
  h += '<meta name="robots" content="index,follow"><link rel="canonical" href="' + base + '/' + slug + '">';
  h += '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>';
  h += '<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap" rel="stylesheet">';
  h += getCSS() + '</head><body>';
  h += buildHeader(base);
  h += '<div class="sp"><div class="sc">' + content + '</div></div>';
  h += buildFooter(base);
  h += '</body></html>';
  return h;
}

// ===== STATIC PAGES =====
function buildPrivacyPage(base, posts) {
  const d = new Date().toLocaleDateString('ar-MA', { year: 'numeric', month: 'long', day: 'numeric' });
  return staticWrap(base, posts, 'سياسة الخصوصية', 'privacy',
    '<h1>🔒 سياسة الخصوصية</h1>' +
    '<p><strong>آخر تحديث:</strong> ' + d + '</p>' +
    '<p>نحن في <strong>بوابة الخدمات الرقمية</strong> نقدر خصوصيتك ونلتزم بحماية بياناتك الشخصية.</p>' +
    '<h2>1. المعلومات التي نجمعها</h2>' +
    '<ul><li><strong>معلومات التصفح:</strong> عنوان IP، نوع المتصفح، صفحات الزيارة، مدة الزيارة</li>' +
    '<li><strong>ملفات الكوكيز:</strong> لتحسين تجربة المستخدم وتحليل حركة المرور</li>' +
    '<li><strong>معلومات الاتصال:</strong> الاسم والبريد عند التواصل معنا</li>' +
    '<li><strong>بيانات النشرة البريدية:</strong> البريد الإلكتروني عند الاشتراك</li></ul>' +
    '<h2>2. كيفية استخدام المعلومات</h2>' +
    '<ul><li>تحسين محتوى الموقع وتجربة المستخدم</li>' +
    '<li>تحليل إحصائيات الزيارات</li>' +
    '<li>إرسال التحديثات للمشتركين</li>' +
    '<li>عرض الإعلانات المناسبة عبر Google AdSense</li></ul>' +
    '<h2>3. Google AdSense والإعلانات</h2>' +
    '<p>يستخدم موقعنا خدمة <strong>Google AdSense</strong> لعرض الإعلانات. تستخدم Google ملفات تعريف الارتباط لعرض إعلانات مبنية على زياراتك. يمكنك إلغاء الاشتراك عبر <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener">إعدادات إعلانات Google</a>.</p>' +
    '<h2>4. ملفات تعريف الارتباط</h2>' +
    '<p>نستخدم الكوكيز لتذكر تفضيلاتك وتحليل حركة المرور وعرض إعلانات ملائمة. يمكنك التحكم فيها من إعدادات متصفحك.</p>' +
    '<h2>5. مشاركة المعلومات</h2>' +
    '<p>لا نبيع أو نؤجر بياناتك لأي طرف ثالث.</p>' +
    '<h2>6. حماية البيانات</h2>' +
    '<p>نستخدم HTTPS والتشفير لحماية بياناتك.</p>' +
    '<h2>7. حقوقك</h2>' +
    '<ul><li>طلب الوصول إلى بياناتك</li><li>طلب تصحيح أو حذف بياناتك</li><li>إلغاء الاشتراك في النشرة البريدية</li></ul>' +
    '<h2>8. خصوصية الأطفال</h2>' +
    '<p>موقعنا غير موجه للأطفال تحت 13 عاماً.</p>' +
    '<h2>9. التغييرات</h2>' +
    '<p>قد نحدث هذه السياسة من وقت لآخر مع تحديث التاريخ.</p>' +
    '<h2>10. اتصل بنا</h2>' +
    '<p><a href="' + base + '/contact">صفحة الاتصال</a></p>');
}

function buildTermsPage(base, posts) {
  const d = new Date().toLocaleDateString('ar-MA', { year: 'numeric', month: 'long', day: 'numeric' });
  return staticWrap(base, posts, 'شروط الاستخدام', 'terms',
    '<h1>📜 شروط الاستخدام</h1>' +
    '<p><strong>آخر تحديث:</strong> ' + d + '</p>' +
    '<p>باستخدامك لموقع <strong>بوابة الخدمات الرقمية</strong>، فإنك توافق على الالتزام بهذه الشروط.</p>' +
    '<h2>1. قبول الشروط</h2>' +
    '<p>استخدامك للموقع يعني موافقتك على جميع الشروط.</p>' +
    '<h2>2. طبيعة المحتوى</h2>' +
    '<ul><li>المحتوى لأغراض تعليمية وإرشادية فقط</li>' +
    '<li>لا يُعد بديلاً عن الاستشارة المهنية أو القانونية</li>' +
    '<li>المعلومات قد تتغير بسبب تحديثات القوانين</li></ul>' +
    '<h2>3. حقوق الملكية الفكرية</h2>' +
    '<ul><li>يُمنع نسخ المحتوى دون إذن كتابي</li>' +
    '<li>يُسمح بمشاركة الروابط على وسائل التواصل</li>' +
    '<li>يُسمح بالاقتباس الجزئي مع ذكر المصدر</li></ul>' +
    '<h2>4. استخدام الموقع</h2>' +
    '<ul><li>عدم استخدام الموقع لأغراض غير قانونية</li>' +
    '<li>عدم محاولة اختراق أو تعطيل الموقع</li>' +
    '<li>عدم استخدام برامج آلية لجمع البيانات</li></ul>' +
    '<h2>5. الإعلانات</h2>' +
    '<p>يحتوي الموقع على إعلانات Google AdSense. لسنا مسؤولين عن محتوى هذه الإعلانات.</p>' +
    '<h2>6. تحديد المسؤولية</h2>' +
    '<p>لا نتحمل مسؤولية عن أضرار ناتجة عن استخدام المعلومات.</p>' +
    '<h2>7. القانون المعمول به</h2>' +
    '<p>تخضع هذه الشروط للقوانين المعمول بها في المملكة المغربية.</p>');
}

function buildContactPage(base, posts) {
  return staticWrap(base, posts, 'اتصل بنا', 'contact',
    '<h1>📧 اتصل بنا</h1>' +
    '<p>نرحب بتواصلكم معنا! لديكم استفسار أو اقتراح؟ لا تترددوا في التواصل.</p>' +
    '<h2>📋 نموذج التواصل</h2>' +
    '<form class="cf" onsubmit="event.preventDefault();this.innerHTML=\'<p style=color:green;font-size:14px>✅ شكراً! تم استلام رسالتك وسنرد عليك قريباً.</p>\'">' +
    '<input type="text" placeholder="الاسم الكامل *" required aria-label="الاسم">' +
    '<input type="email" placeholder="البريد الإلكتروني *" required aria-label="البريد">' +
    '<input type="text" placeholder="الموضوع *" required aria-label="الموضوع">' +
    '<textarea placeholder="رسالتك... *" required aria-label="الرسالة"></textarea>' +
    '<button type="submit">📤 إرسال الرسالة</button></form>' +
    '<h2>📞 وسائل التواصل الأخرى</h2>' +
    '<ul><li><strong>📧 البريد:</strong> contact@leguide-digital.com</li>' +
    '<li><strong>📘 فيسبوك:</strong> بوابة الخدمات الرقمية</li></ul>' +
    '<h2>⏰ أوقات الرد</h2>' +
    '<p>نرد خلال <strong>24 إلى 48 ساعة</strong> في أيام العمل.</p>' +
    '<h2>💡 ملاحظات</h2>' +
    '<ul><li>نرحب باقتراحات مواضيع جديدة</li>' +
    '<li>لطلبات حذف المحتوى، زوروا <a href="' + base + '/dmca">صفحة DMCA</a></li></ul>');
}

function buildAboutPage(base, posts) {
  const cnt = posts.length;
  const cc = [...new Set(posts.map(p => p.category))].length;
  return staticWrap(base, posts, 'من نحن', 'about',
    '<h1>🇲🇦 من نحن</h1>' +
    '<h2>رؤيتنا</h2>' +
    '<p><strong>بوابة الخدمات الرقمية</strong> منصة إلكترونية مستقلة تهدف لتبسيط الإجراءات الإدارية ومساعدة المواطن المغربي في الوصول للمعلومات بسهولة.</p>' +
    '<h2>مهمتنا</h2>' +
    '<ul><li>📝 نشر شروحات مبسطة لجميع الإجراءات الإدارية</li>' +
    '<li>🔄 تحديث مستمر لمواكبة المستجدات</li>' +
    '<li>📊 تغطية شاملة لجميع القطاعات</li>' +
    '<li>🎯 معلومات دقيقة ومحدثة يمكن الاعتماد عليها</li></ul>' +
    '<h2>ما يميزنا</h2>' +
    '<ul><li><strong>محتوى حصري</strong> مكتوب باحترافية</li>' +
    '<li><strong>تحديث مستمر</strong> لمواكبة التغييرات</li>' +
    '<li><strong>بساطة</strong> في شرح الإجراءات المعقدة</li>' +
    '<li><strong>شمولية:</strong> ' + cc + ' تصنيفات و' + cnt + '+ مقال</li></ul>' +
    '<h2>تواصل معنا</h2>' +
    '<p>نرحب باقتراحاتكم. <a href="' + base + '/contact">تواصلوا معنا</a> لأي استفسار.</p>');
}

function buildDmcaPage(base, posts) {
  const d = new Date().toLocaleDateString('ar-MA', { year: 'numeric', month: 'long', day: 'numeric' });
  return staticWrap(base, posts, 'DMCA', 'dmca',
    '<h1>⚖️ سياسة DMCA</h1>' +
    '<p><strong>آخر تحديث:</strong> ' + d + '</p>' +
    '<p>نحترم حقوق الملكية الفكرية ونستجيب لإشعارات انتهاك حقوق النشر وفقاً لقانون DMCA.</p>' +
    '<h2>إذا انتُهكت حقوقك</h2>' +
    '<p>أرسل إشعاراً يتضمن:</p>' +
    '<ul><li>وصف العمل المحمي بحقوق النشر</li>' +
    '<li>رابط المحتوى المخالف على موقعنا</li>' +
    '<li>رابط المحتوى الأصلي</li>' +
    '<li>اسمك ومعلومات الاتصال</li>' +
    '<li>بيان بحسن النية ودقة المعلومات</li></ul>' +
    '<h2>إجراءاتنا</h2>' +
    '<ul><li>مراجعة الإشعار خلال <strong>48 ساعة عمل</strong></li>' +
    '<li>إزالة المحتوى المخالف فوراً عند ثبوت الادعاء</li></ul>' +
    '<h2>الإرسال</h2>' +
    '<p>عبر <a href="' + base + '/contact">صفحة الاتصال</a> مع ذكر "DMCA" في الموضوع.</p>');
}

function buildDisclaimerPage(base, posts) {
  const d = new Date().toLocaleDateString('ar-MA', { year: 'numeric', month: 'long', day: 'numeric' });
  return staticWrap(base, posts, 'إخلاء المسؤولية', 'disclaimer',
    '<h1>⚠️ إخلاء المسؤولية</h1>' +
    '<p><strong>آخر تحديث:</strong> ' + d + '</p>' +
    '<h2>طبيعة المحتوى</h2>' +
    '<p>جميع المعلومات لأغراض <strong>تعليمية وإرشادية فقط</strong>. نبذل جهدنا لتقديم معلومات دقيقة لكن لا نضمن صحتها في جميع الأوقات.</p>' +
    '<h2>ليس استشارة مهنية</h2>' +
    '<p>المحتوى <strong>لا يُعد بديلاً</strong> عن الاستشارة القانونية أو المهنية أو المعلومات الرسمية من الجهات الحكومية.</p>' +
    '<h2>تحديد المسؤولية</h2>' +
    '<ul><li>لا نتحمل مسؤولية عن أضرار ناتجة عن استخدام المعلومات</li>' +
    '<li>لا نتحمل مسؤولية عن القرارات المتخذة بناءً على المحتوى</li>' +
    '<li>لا نتحمل مسؤولية عن محتوى المواقع الخارجية المرتبطة</li></ul>' +
    '<h2>الإعلانات</h2>' +
    '<p>يحتوي الموقع على إعلانات Google AdSense. لسنا مسؤولين عن محتوى الإعلانات.</p>' +
    '<h2>استقلالية الموقع</h2>' +
    '<p>منصة مستقلة غير تابعة لأي جهة حكومية.</p>' +
    '<h2>الموافقة</h2>' +
    '<p>باستخدامك للموقع توافق على هذه الشروط. <a href="' + base + '/terms">شروط الاستخدام</a> · <a href="' + base + '/privacy">سياسة الخصوصية</a></p>');
}
