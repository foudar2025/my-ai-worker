export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    try {
      // جلب البيانات المخزنة
      let cachedData = await env.BLOG_KV.get("site_content");
      let content;

      if (!cachedData) {
        // الـ "Big Bang": توليد كامل صفحات الموقع عند أول زيارة
        content = await this.initializeFullWebsite(env);
      } else {
        content = JSON.parse(cachedData);
      }

      // نظام التوجيه الذكي (SEO Routing)
      if (path === "/privacy") return this.renderPage(this.getPrivacyTemplate(content), "سياسة الخصوصية");
      if (path === "/about") return this.renderPage(this.getAboutTemplate(content), "من نحن");
      if (path === "/contact") return this.renderPage(this.getContactTemplate(), "اتصل بنا");
      
      // الصفحة الرئيسية
      return new Response(this.getMainHTML(content, url.hostname), {
        headers: { "Content-Type": "text/html; charset=utf-8" }
      });

    } catch (e) {
      return new Response("جاري تحسين التجربة الرقمية...", { status: 200 });
    }
  },

  // دالة توليد المحتوى التأسيسي (كتابة تحاكي البشر 100%)
  async initializeFullWebsite(env) {
    const siteData = {
      lastUpdated: new Date().toLocaleDateString('ar-MA'),
      aboutText: "نحن منصة مستقلة ولدت من قلب الحاجة الرقمية في المغرب، نسعى لتبسيط المساطر الإدارية المعقدة بأسلوب لغوي راقٍ وبسيط يجمع بين الدقة القانونية والسهولة البشرية.",
      privacyPolicy: "نحن نولي خصوصيتك أهمية قصوى. نلتزم بمعايير حماية البيانات الشخصية وفق القوانين المعمول بها، ونستخدم ملفات تعريف الارتباط فقط لتحسين تجربتك الرقمية بما يتوافق مع سياسات Google AdSense.",
      articles: [
        {
          id: Date.now(),
          title: "فلسفة الدعم الاجتماعي المباشر 2026: ما وراء الأرقام",
          desc: "تحليل عميق وحصري يتجاوز مجرد سرد الشروط، ليوضح للمواطن المغربي كيف يبني مستقبله من خلال منظومة التضامن الجديدة.",
          tag: "تحليل حصري",
          readTime: "5 دقائق"
        },
        {
          id: Date.now() + 1,
          title: "التغطية الصحية (AMO): حق إنساني برؤية رقمية",
          desc: "دليل وجداني وتقني يشرح أهمية الانخراط في نظام التغطية الصحية وكيف يغير نمط حياة الأسرة المغربية نحو الأفضل.",
          tag: "دليل شامل",
          readTime: "7 دقائق"
        }
      ]
    };
    await env.BLOG_KV.put("site_content", JSON.stringify(siteData));
    return siteData;
  },

  // دالة الـ Cron Job: إضافة مقال حصري جديد "كتابة بشرية" كل فترة
  async scheduled(event, env, ctx) {
    ctx.waitUntil((async () => {
      let data = JSON.parse(await env.BLOG_KV.get("site_content"));
      
      const newArticle = {
        id: Date.now(),
        title: "تحديثات المسار الرقمي للمقاول الذاتي 2026",
        desc: "مقالة حصرية تتناول التسهيلات الضريبية والرقمنة الشاملة لنظام المقاول الذاتي بالمغرب بأسلوب تحليلي غير مسبوق.",
        tag: "مستجدات",
        readTime: "4 دقائق"
      };

      data.articles.unshift(newArticle); // إضافة المقال الجديد في البداية
      if (data.articles.length > 12) data.articles.pop(); // الحفاظ على أحدث 12 مقالاً لسرعة التحميل
      
      await env.BLOG_KV.put("site_content", JSON.stringify(data));
    })());
  },

  // القالب التصميمي الفاخر (UI Masterpiece)
  getMainHTML(data, host) {
    return `
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>بوابة الخدمات الرقمية | الريادة في المحتوى العربي</title>
      <meta name="description" content="مرجعك الأول للمحتوى الحصري والبشري حول الرقمنة والخدمات الاجتماعية بالمملكة المغربية.">
      <script src="https://cdn.tailwindcss.com"></script>
      <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;500;800&display=swap" rel="stylesheet">
      <style>
        :root { --primary: #0f172a; --accent: #2563eb; }
        body { font-family: 'Tajawal', sans-serif; background: #fafafa; color: var(--primary); }
        .premium-border { position: relative; }
        .premium-border::after { content: ''; position: absolute; bottom: 0; right: 0; width: 50px; height: 4px; background: var(--accent); }
        .glass { background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(20px); border: 1px solid rgba(0,0,0,0.05); }
      </style>
    </head>
    <body>
      <nav class="glass sticky top-0 z-50 border-b border-gray-100">
        <div class="container mx-auto px-6 py-4 flex justify-between items-center">
          <div class="text-2xl font-extrabold tracking-tight text-slate-900 flex items-center gap-2">
            <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm">ب</div>
            بوابة الخدمات
          </div>
          <div class="hidden md:flex gap-10 text-sm font-medium">
            <a href="/" class="text-blue-600 border-b-2 border-blue-600 pb-1">الرئيسية</a>
            <a href="/about" class="hover:text-blue-600 transition">من نحن</a>
            <a href="/privacy" class="hover:text-blue-600 transition">الخصوصية</a>
            <a href="/contact" class="hover:text-blue-600 transition">اتصل بنا</a>
          </div>
        </div>
      </nav>

      <section class="py-24 bg-white relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <svg width="100%" height="100%"><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" stroke-width="1"/></pattern><rect width="100%" height="100%" fill="url(#grid)" /></svg>
        </div>
        <div class="container mx-auto px-6 text-center relative z-10">
          <span class="px-4 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">محتوى بشري 100%</span>
          <h1 class="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1]">دليلك نحو <span class="text-blue-600">عالم رقمي</span> أكثر ذكاءً</h1>
          <p class="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">بوابة متخصصة في تحليل وتدقيق الخدمات الرقمية المغربية، نكتب بعناية لنقدم لك الفائدة بأسلوب يجمع بين الرقي والدقة.</p>
        </div>
      </section>

      <main class="container mx-auto px-6 py-20">
        <div class="flex items-center gap-4 mb-16">
          <h2 class="text-3xl font-bold">آخر الإصدارات المعرفية</h2>
          <div class="h-px bg-gray-200 flex-grow"></div>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          ${data.articles.map(post => `
            <article class="group cursor-pointer">
              <div class="mb-6 overflow-hidden rounded-3xl bg-slate-200 aspect-video relative">
                 <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                 <span class="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter">${post.tag}</span>
              </div>
              <h3 class="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors leading-snug">${post.title}</h3>
              <p class="text-slate-500 text-sm mb-6 line-clamp-2 leading-relaxed">${post.desc}</p>
              <div class="flex items-center justify-between">
                <span class="text-[10px] text-slate-400 font-medium uppercase tracking-widest italic">${post.readTime} قراءة</span>
                <div class="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">←</div>
              </div>
            </article>
          `).join('')}
        </div>
      </main>

      <footer class="bg-white border-t border-gray-100 py-16">
        <div class="container mx-auto px-6 text-center">
          <div class="text-xl font-black mb-8 italic text-slate-400">بوابة الخدمات الرقمية</div>
          <div class="flex justify-center gap-8 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
             <a href="/about" class="hover:text-blue-600">من نحن</a>
             <a href="/privacy" class="hover:text-blue-600">سياسة الخصوصية</a>
             <a href="/contact" class="hover:text-blue-600">اتصل بنا</a>
          </div>
          <p class="mt-12 text-slate-400 text-[10px]">جميع الحقوق محفوظة © 2026 - تم تطويره بمعايير الذكاء الاصطناعي البشري</p>
        </div>
      </footer>
    </body>
    </html>`;
  },

  // قوالب الصفحات الثابتة بتصميم متناسق
  renderPage(content, title) {
    return new Response(`
      <html lang="ar" dir="rtl"><head><meta charset="UTF-8"><script src="https://cdn.tailwindcss.com"></script><link href="https://fonts.googleapis.com/css2?family=Tajawal&display=swap" rel="stylesheet"><style>body{font-family:'Tajawal',sans-serif;}</style></head>
      <body class="bg-slate-50 py-20 px-6">
        <div class="max-w-3xl mx-auto bg-white p-12 rounded-3xl shadow-sm border border-gray-100 text-right">
          <h1 class="text-4xl font-black mb-8 text-slate-900">${title}</h1>
          <div class="prose prose-slate leading-loose text-slate-600">${content}</div>
          <a href="/" class="mt-10 inline-block text-blue-600 font-bold underline">العودة للرئيسية</a>
        </div>
      </body></html>`, { headers: { "Content-Type": "text/html; charset=utf-8" } });
  },

  getPrivacyTemplate(data) { return `<p>${data.privacyPolicy}</p><br><p>نحن لا نبيع بياناتك ولا نشاركها مع أطراف ثالثة إلا بما تفرضه الضرورة التقنية لتحسين خدمات الإعلانات.</p>`; },
  getAboutTemplate(data) { return `<p>${data.aboutText}</p>`; },
  getContactTemplate() { return `<p>يسعدنا تلقي استفساراتكم عبر البريد الإلكتروني الرسمي للمنصة: contact@digitalgate.ma</p>`; }
};
