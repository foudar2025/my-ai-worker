/**
 * بوابة الخدمات الرقمية - النسخة الملكية الأوتوماتيكية V4.0
 * تصميم فاخر | أتمتة شاملة | تحسين SEO وصور | تتبع Google Analytics
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;
    const GA_ID = "G-XXXXXXXXXX"; // ضع معرف Google Analytics هنا

    try {
      // 1. جلب البيانات من القاعدة
      let cachedData = await env.BLOG_KV.get("site_content");
      let content = cachedData ? JSON.parse(cachedData) : await this.initializeFullWebsite(env);

      // 2. نظام التوجيه (SEO & Static Pages)
      if (path === "/robots.txt") {
        return new Response(`User-agent: *\nAllow: /\nSitemap: https://${url.hostname}/sitemap.xml`, { headers: { "Content-Type": "text/plain" } });
      }
      if (path === "/sitemap.xml") {
        return new Response(this.generateSitemap(url.hostname, content.articles), { headers: { "Content-Type": "application/xml" } });
      }
      if (path === "/privacy") return this.renderStaticPage("سياسة الخصوصية", this.getPrivacyText(), GA_ID);
      if (path === "/about") return this.renderStaticPage("من نحن", this.getAboutText(), GA_ID);
      if (path === "/contact") return this.renderStaticPage("اتصل بنا", this.getContactText(), GA_ID);

      // 3. عرض الصفحة الرئيسية
      return new Response(this.getMainHTML(content, GA_ID), {
        headers: { "Content-Type": "text/html; charset=utf-8" }
      });

    } catch (e) {
      return new Response("جاري تحديث التجربة الرقمية...", { status: 200, headers: { "Content-Type": "text/html; charset=utf-8" } });
    }
  },

  // ===== المحرك الأوتوماتيكي (توليد مقالات بأسلوب بشري) =====
  async scheduled(event, env, ctx) {
    ctx.waitUntil((async () => {
      const stored = await env.BLOG_KV.get("site_content");
      let data = JSON.parse(stored || "{}");
      
      const newTopic = this.generateDynamicTopic();
      const newArticle = {
        id: Date.now(),
        tag: newTopic.tag,
        // تحسين الصورة: طلب حجم محدد وتقليل الجودة قليلاً للسرعة (800x500)
        image: `https://images.unsplash.com/${newTopic.imgCode}?auto=format&fit=crop&w=800&q=80&sig=${Math.random()}`,
        title: newTopic.title,
        desc: newTopic.desc,
        readTime: "6 دقائق"
      };

      data.articles.unshift(newArticle); 
      if (data.articles.length > 15) data.articles.pop(); // الحفاظ على أفضل 15 مقال للسيو
      data.lastUpdated = new Date().toLocaleString('ar-MA', { timeZone: 'Africa/Casablanca' });
      
      await env.BLOG_KV.put("site_content", JSON.stringify(data));
    })());
  },

  // البيانات التأسيسية (تظهر عند أول فتح للموقع)
  async initializeFullWebsite(env) {
    const siteData = {
      lastUpdated: new Date().toLocaleDateString('ar-MA'),
      articles: [
        {
          id: 1,
          tag: "الدعم الاجتماعي",
          image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
          title: "دليل رقمنة الخدمات القضائية بالمغرب 2026",
          desc: "شرح شامل للتحول الرقمي في قطاع العدل وكيفية استخراج الوثائق الرسمية عن بعد بأسلوب مبسط.",
          readTime: "5 دقائق"
        }
      ]
    };
    await env.BLOG_KV.put("site_content", JSON.stringify(siteData));
    return siteData;
  },

  // محرك اختيار المواضيع (يحدث تلقائياً)
  generateDynamicTopic() {
    const pool = [
      { title: "تطورات منصة دعم السكن المباشر 2026", tag: "مستجدات", imgCode: "photo-1560518883-ce09059eeffa", desc: "قراءة في المعايير الجديدة للحصول على دعم الدولة للسكن الرئيسي برؤية تحليلية دقيقة." },
      { title: "مستقبل البطاقة الوطنية الإلكترونية الجديدة", tag: "هوية رقمية", imgCode: "photo-1554224155-6726b3ff858f", desc: "كيف تسهل الهوية الرقمية الولوج للخدمات المصرفية والإدارية في المغرب دون الحاجة للتنقل." },
      { title: "تحديثات نظام المقاول الذاتي بالمغرب", tag: "اقتصاد رقمي", imgCode: "photo-1450101499163-c8848c66ca85", desc: "كل ما يجب معرفته عن الامتيازات الضريبية الجديدة المخصصة للمقاولين الشباب في عام 2026." }
    ];
    return pool[Math.floor(Math.random() * pool.length)];
  },

  // الواجهة الرئيسية الفاخرة
  getMainHTML(data, gaId) {
    return `
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      
      <script async src="https://www.googletagmanager.com/gtag/js?id=${gaId}"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gaId}');
      </script>

      <title>بوابة الخدمات الرقمية | مرجع المعلومة الحصرية</title>
      <meta name="description" content="المنصة العربية الرائدة في تحليل وشرح الخدمات الرقمية والدعم الاجتماعي بالمملكة المغربية.">
      <script src="https://cdn.tailwindcss.com"></script>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@300;600;800&display=swap" rel="stylesheet">
      
      <style>
        body { font-family: 'Noto Kufi Arabic', sans-serif; background: #fdfdfd; scroll-behavior: smooth; }
        .premium-shadow { box-shadow: 0 20px 50px rgba(0,0,0,0.04); }
        .card-anim { transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); }
        .card-anim:hover { transform: translateY(-12px); box-shadow: 0 40px 80px rgba(30, 58, 138, 0.08); }
        .img-overlay { background: linear-gradient(0deg, rgba(15, 23, 42, 0.3) 0%, transparent 100%); }
      </style>
    </head>
    <body class="antialiased text-slate-900">
      
      <nav class="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div class="container mx-auto px-6 py-5 flex justify-between items-center">
          <a href="/" class="text-2xl font-black flex items-center gap-3">
             <div class="w-11 h-11 bg-blue-700 text-white rounded-2xl flex items-center justify-center shadow-xl shadow-blue-200 font-serif">B</div>
             <span class="text-blue-900 tracking-tighter italic">بوابة الخدمات</span>
          </a>
          <div class="hidden md:flex gap-10 text-[11px] font-black uppercase tracking-widest text-slate-400">
            <a href="/" class="text-blue-700 border-b-2 border-blue-700 pb-1">الرئيسية</a>
            <a href="/about" class="hover:text-blue-700 transition">من نحن</a>
            <a href="/privacy" class="hover:text-blue-700 transition">الخصوصية</a>
            <a href="/contact" class="hover:text-blue-700 transition">اتصل بنا</a>
          </div>
        </div>
      </nav>

      <header class="py-28 bg-white border-b border-slate-50 relative overflow-hidden text-center">
        <div class="container mx-auto px-6 relative z-10">
          <h1 class="text-5xl md:text-7xl font-black mb-8 leading-[1.2] text-slate-950">المعلومة <span class="text-blue-600">بشفافية</span> ودقة</h1>
          <p class="text-xl text-slate-500 max-w-3xl mx-auto leading-loose font-light">نحن نبتكر المحتوى الرقمي لنقرب لك المسافات الإدارية. تجربة معرفية مغربية فريدة تجمع بين الرقي والتقنية.</p>
        </div>
      </header>

      <main class="container mx-auto px-6 py-24">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
          ${data.articles.map(post => `
            <article class="card-anim bg-white rounded-[3rem] overflow-hidden flex flex-col group border border-slate-50">
              <div class="aspect-[16/10] overflow-hidden relative">
                <img src="${post.image}" 
                     alt="${post.title}" 
                     loading="lazy" 
                     decoding="async"
                     class="w-full h-full object-cover group-hover:scale-110 transition duration-1000">
                <div class="absolute inset-0 img-overlay"></div>
                <span class="absolute top-6 right-6 bg-white/95 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-700 shadow-sm">${post.tag}</span>
              </div>
              <div class="p-12 flex-grow flex flex-col">
                <h2 class="text-2xl font-bold mb-6 leading-snug text-slate-900 group-hover:text-blue-700 transition-colors">${post.title}</h2>
                <p class="text-slate-500 text-sm leading-relaxed mb-10 line-clamp-3">${post.desc}</p>
                <div class="mt-auto flex items-center justify-between border-t border-slate-50 pt-8">
                   <span class="text-[10px] font-bold text-slate-300 italic tracking-widest uppercase">${post.readTime}</span>
                   <a href="#" class="text-blue-600 font-black text-sm group-hover:underline">عرض المزيد ←</a>
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      </main>

      <footer class="bg-slate-950 text-slate-500 py-28 px-6 text-center">
        <div class="container mx-auto">
          <div class="text-2xl font-black italic mb-10 text-white tracking-widest">DIGITAL SERVICES GATE</div>
          <div class="flex flex-wrap justify-center gap-10 text-[10px] font-bold uppercase tracking-[0.4em] mb-16">
            <a href="/privacy" class="hover:text-white transition">سياسة الخصوصية</a>
            <a href="/about" class="hover:text-white transition">من نحن</a>
            <a href="/contact" class="hover:text-white transition">اتصل بنا</a>
          </div>
          <p class="text-[9px] opacity-30 italic leading-loose">جميع الحقوق محفوظة © 2026 - رؤية رقمية متطورة تهدف لخدمة المواطن.</p>
        </div>
      </footer>
    </body>
    </html>`;
  },

  // قالب الصفحات الثابتة (أدسنس)
  renderStaticPage(title, content, gaId) {
    return new Response(`
      <html lang="ar" dir="rtl"><head>
      <meta charset="UTF-8"><script src="https://cdn.tailwindcss.com"></script>
      <script async src="https://www.googletagmanager.com/gtag/js?id=${gaId}"></script>
      <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');</script>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic&display=swap" rel="stylesheet">
      <style>body{font-family:'Noto Kufi Arabic',sans-serif;}</style></head>
      <body class="bg-slate-50 py-24 px-6">
        <div class="max-w-4xl mx-auto bg-white p-20 rounded-[4rem] shadow-2xl shadow-blue-900/5">
          <a href="/" class="text-blue-600 text-sm font-bold mb-10 inline-block">← العودة للرئيسية</a>
          <h1 class="text-4xl font-black mb-12 text-slate-900 border-r-8 border-blue-600 pr-8">${title}</h1>
          <div class="leading-loose text-slate-600 space-y-8 text-lg">${content}</div>
        </div>
      </body></html>`, { headers: { "Content-Type": "text/html; charset=utf-8" } });
  },

  getAboutText() { return `<p>بوابة الخدمات الرقمية هي منصة معرفية مستقلة، تسعى لتقديم قراءات تحليلية ومعلوماتية حول التحول الرقمي بالمغرب، بأسلوب يجمع بين الدقة القانونية والسهولة اللغوية.</p>`; },
  getPrivacyText() { return `<p>نحن نلتزم بحماية خصوصيتك. يتم استخدام Google Analytics لتحليل حركة المرور وتحسين المحتوى، مع الالتزام التلقائي بسياسات Google AdSense لضمان أفضل تجربة آمنة للمستخدم.</p>`; },
  getContactText() { return `<p>تواصلكم يهمنا. للطلبات الإعلانية أو الاستفسارات: contact@digitalgate.ma</p>`; },
  
  generateSitemap(host, articles) {
    let xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
    xml += `<url><loc>https://${host}/</loc><priority>1.0</priority></url>`;
    xml += `<url><loc>https://${host}/about</loc><priority>0.5</priority></url>`;
    xml += `<url><loc>https://${host}/privacy</loc><priority>0.5</priority></url>`;
    xml += `</urlset>`;
    return xml;
  }
};
