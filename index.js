// Version 2.0 - Update
export default {
  // ===== التوليد التلقائي للمحتوى كل 4 ساعات =====
  async scheduled(event, env, ctx) {
    const categories = [
      {
        name: "الدعم والحماية الاجتماعية",
        icon: "shield",
        color: "#10b981",
        topics: [
          { title: "التسجيل في أمو تضامن AMO 2026: الدليل الشامل خطوة بخطوة", keywords: "أمو تضامن, التسجيل في AMO, التغطية الصحية المغرب 2026, CNSS, التأمين الإجباري عن المرض" },
          { title: "تحديث بيانات السجل الاجتماعي الموحد RSU 2026: كل ما تحتاج معرفته", keywords: "السجل الاجتماعي الموحد, RSU المغرب, تحديث البيانات, الدعم الاجتماعي المباشر" },
          { title: "شروط الاستفادة من الدعم المباشر للسكن 2026 وطريقة التسجيل", keywords: "دعم السكن المغرب 2026, الدعم المباشر للسكن, شروط الاستفادة, تمويل السكن" },
          { title: "كيفية صرف تعويضات CNSS للمغاربة: الشروط والإجراءات الكاملة", keywords: "تعويضات CNSS, الصندوق الوطني للضمان الاجتماعي, صرف التعويضات, التقاعد CNSS" },
          { title: "الدعم الاجتماعي المباشر 2026: مبالغ جديدة وشروط محدثة", keywords: "الدعم الاجتماعي المباشر, مبالغ الدعم, شروط الاستفادة 2026, صندوق الدعم" },
          { title: "التسجيل في صندوق التكافل العائلي 2026: الوثائق والخطوات", keywords: "التكافل العائلي, صندوق التكافل, التسجيل في الدعم, المساعدة الاجتماعية" }
        ]
      },
      {
        name: "مباريات التوظيف والتدريب",
        icon: "briefcase",
        color: "#6366f1",
        topics: [
          { title: "مباراة الأمن الوطني 2026: الشروط الجديدة والوثائق المطلوبة وموعد الامتحان", keywords: "مباراة الأمن الوطني 2026, التوظيف بالأمن, شروط مباراة الشرطة, حراس الأمن" },
          { title: "نماذج امتحانات OFPPT 2026: تحميل مجاني مع التصحيح", keywords: "OFPPT امتحانات, التكوين المهني المغرب, نماذج الامتحانات, مراكز التكوين" },
          { title: "مباراة التعليم بالتعاقد 2026: دليل التحضير والنجاح المضمون", keywords: "مباراة التعليم بالتعاقد, أساتذة التعاقد 2026, التحضير للمباراة, AREF" },
          { title: "مباريات الجماعات الترابية 2026: جميع المناصب والشروط", keywords: "مباريات الجماعات الترابية, التوظيف العمومي, مناصب الجماعات, concours" },
          { title: "مباراة الدرك الملكي 2026: السن والشروط وملف الترشيح", keywords: "مباراة الدرك الملكي, Gendarmerie Royale, شروط الترشيح, التجنيد" },
          { title: "التكوين المهني OFPPT 2026: التخصصات الجديدة وطريقة التسجيل", keywords: "OFPPT التسجيل 2026, التخصصات الجديدة, التكوين المهني, inscription OFPPT" }
        ]
      },
      {
        name: "الوثائق الإدارية والتأشيرات",
        icon: "document",
        color: "#f59e0b",
        topics: [
          { title: "تجديد البطاقة الوطنية الإلكترونية CNIE عن بعد 2026: الطريقة الجديدة", keywords: "تجديد البطاقة الوطنية, CNIE المغرب, البطاقة الإلكترونية, rendez-vous CNIE" },
          { title: "حجز موعد فيزا شنغن إسبانيا BLS 2026: الحيل والنصائح للقبول", keywords: "فيزا شنغن إسبانيا, حجز موعد BLS, تأشيرة أوروبا 2026, ملف الفيزا" },
          { title: "استخراج جواز السفر البيومتري المغربي 2026: الوثائق والثمن والآجال", keywords: "جواز السفر البيومتري, استخراج الباسبور, وثائق جواز السفر, passeport biométrique" },
          { title: "شهادة السكنى الإلكترونية 2026: طريقة الحصول عليها عبر الأنترنت", keywords: "شهادة السكنى, certificat de résidence, الوثائق الإدارية, المنصة الرقمية" },
          { title: "عقد الازدياد بالمغرب 2026: النسخة الكاملة والموجزة وطريقة الطلب", keywords: "عقد الازدياد, acte de naissance, الحالة المدنية, وثائق الازدياد" },
          { title: "القنصلية الفرنسية بالمغرب 2026: حجز موعد فيزا فرنسا TLScontact", keywords: "فيزا فرنسا, TLScontact المغرب, حجز موعد القنصلية, تأشيرة فرنسا 2026" }
        ]
      },
      {
        name: "المقاول الصغير والعمل الحر",
        icon: "rocket",
        color: "#ec4899",
        topics: [
          { title: "التسجيل في نظام المقاول الذاتي Auto-entrepreneur 2026: الدليل الكامل", keywords: "المقاول الذاتي المغرب, Auto-entrepreneur, التسجيل 2026, الضريبة على الدخل" },
          { title: "إنشاء شركة SARL في المغرب 2026: التكلفة والإجراءات القانونية", keywords: "إنشاء شركة SARL, تأسيس شركة بالمغرب, الخطوات القانونية, السجل التجاري" },
          { title: "برنامج انطلاقة لتمويل المشاريع 2026: شروط القبول ومبلغ القرض", keywords: "برنامج انطلاقة, تمويل المشاريع, المقاولات الناشئة المغرب, قروض بدون فائدة" },
          { title: "فتح حساب بنكي تجاري بالمغرب 2026: مقارنة بين البنوك", keywords: "حساب بنكي تجاري, البنوك المغربية, فتح حساب شركة, أفضل بنك للمقاولين" },
          { title: "الضريبة على القيمة المضافة TVA بالمغرب 2026: دليل المقاول المبتدئ", keywords: "TVA المغرب, الضريبة على القيمة المضافة, التصريح الضريبي, المقاول والضرائب" },
          { title: "التجارة الإلكترونية بالمغرب 2026: الإطار القانوني وطريقة البدء", keywords: "التجارة الإلكترونية المغرب, البيع عبر الأنترنت, المتجر الإلكتروني, e-commerce Maroc" }
        ]
      }
    ];

    const selectedCat = categories[Math.floor(Math.random() * categories.length)];
    const selectedTopicObj = selectedCat.topics[Math.floor(Math.random() * selectedCat.topics.length)];

    try {
      // ===== توليد المقال بالذكاء الاصطناعي =====
      const aiResponse = await env.AI.run('@cf/meta/llama-3-8b-instruct', {
        prompt: `أنت صحفي محترف وخبير في الخدمات الرقمية المغربية ومتخصص في كتابة محتوى حصري ومتوافق مع SEO.

المهمة: اكتب مقالاً احترافياً وحصرياً بالعربية الفصحى عن: "${selectedTopicObj.title}"

الكلمات المفتاحية (يجب تضمينها بشكل طبيعي في النص): ${selectedTopicObj.keywords}

هيكل المقال الإلزامي:

**مقدمة شاملة** (4-5 أسطر)
- اشرح لماذا هذا الموضوع مهم للمواطن المغربي
- اذكر آخر التحديثات والمستجدات

**ما هي هذه الخدمة وأهميتها؟**
- تعريف دقيق ومفصل
- الجهة المسؤولة عنها
- الفئات المستفيدة

**الشروط الكاملة للاستفادة**
- قائمة مرقمة بجميع الشروط
- التوضيحات اللازمة لكل شرط

**الوثائق والمستندات المطلوبة**
- قائمة شاملة بكل الوثائق
- أين يمكن الحصول عليها

**خطوات التسجيل أو الإجراء بالتفصيل**
- شرح كل خطوة على حدة
- روابط المنصات الرسمية إن وُجدت
- نصائح لتجنب الأخطاء الشائعة

**الآجال والمواعيد المهمة**
- المدة الزمنية لكل إجراء
- التواريخ المهمة

**نصائح ذهبية للمتقدمين**
- 5 نصائح عملية ومفيدة

**الأسئلة الشائعة**
اكتب 5 أسئلة شائعة مع إجابات مفصلة بهذا التنسيق بالضبط:
سؤال: [نص السؤال]؟
جواب: [نص الجواب المفصل]

**خاتمة**
- ملخص سريع
- دعوة للعمل

القواعد الصارمة:
1. المقال يجب أن يكون حصرياً 100% وفريداً
2. استخدم عناوين فرعية واضحة مع علامات **
3. اجعل الفقرات قصيرة (2-3 أسطر كحد أقصى)
4. استخدم أرقام وقوائم مرتبة
5. الطول: 1500-2000 كلمة كحد أدنى
6. لا تكرر الكلمات بشكل مفرط
7. استخدم مرادفات متنوعة
8. اكتب بأسلوب صحفي احترافي ومبسط
9. أضف معلومات دقيقة وحديثة
10. اختم كل قسم بنصيحة أو ملاحظة مفيدة`
      });

      // ===== توليد صورة للمقال =====
      let imageBase64 = null;
      try {
        const imagePrompt = generateImagePrompt(selectedTopicObj.title, selectedCat.name);
        const imageResponse = await env.AI.run('@cf/stabilityai/stable-diffusion-xl-base-1.0', {
          prompt: imagePrompt,
          negative_prompt: "human, person, people, man, woman, child, baby, face, hand, finger, body, animal, cat, dog, bird, fish, horse, creature, living being, portrait, selfie, crowd, group photo, eyes, mouth, nose, realistic human, cartoon human, anime character, humanoid, figurine, doll, mannequin, statue of person, sculpture of person, pet, wildlife, insect, mammal, reptile",
          width: 1024,
          height: 576,
          num_steps: 20
        });

        if (imageResponse) {
          const arrayBuffer = await imageResponse.arrayBuffer();
          const uint8Array = new Uint8Array(arrayBuffer);
          imageBase64 = uint8ArrayToBase64(uint8Array);
        }
      } catch (imgError) {
        console.error("Image generation error:", imgError);
      }

      // ===== معالجة المحتوى =====
      const slug = generateSlug(selectedTopicObj.title);
      const description = generateDescription(aiResponse.response);
      const wordCount = aiResponse.response.split(/\s+/).length;
      const readTime = Math.max(3, Math.ceil(wordCount / 200));
      const now = new Date();

      const newPost = {
        id: Date.now(),
        slug: slug,
        category: selectedCat.name,
        categoryColor: selectedCat.color,
        categoryIcon: selectedCat.icon,
        title: selectedTopicObj.title,
        keywords: selectedTopicObj.keywords,
        description: description,
        content: formatContentAdvanced(aiResponse.response),
        image: imageBase64,
        imageAlt: `صورة توضيحية: ${selectedTopicObj.title}`,
        date: now.toLocaleDateString('ar-MA', { year: 'numeric', month: 'long', day: 'numeric' }),
        dateISO: now.toISOString(),
        readTime: readTime,
        wordCount: wordCount,
        views: Math.floor(Math.random() * 500) + 100
      };

      let posts = await env.BLOG_KV.get("posts", { type: "json" }) || [];

      // منع التكرار
      const exists = posts.some(p => p.title === newPost.title);
      if (!exists) {
        posts.unshift(newPost);
        await env.BLOG_KV.put("posts", JSON.stringify(posts.slice(0, 60)));

        // ===== إرسال إشعار فهرسة فورية لجوجل =====
        await pingSearchEngines(env, newPost, posts);
      }
    } catch (e) {
      console.error("Error generating content:", e);
    }
  },

  // ===== معالجة الطلبات =====
  async fetch(request, env) {
    const url = new URL(request.url);
    const posts = await env.BLOG_KV.get("posts", { type: "json" }) || [];
    const baseUrl = url.origin;

    // ===== توجيه الصفحات =====
    const routes = {
      '/sitemap.xml': () => generateSitemap(posts, baseUrl),
      '/robots.txt': () => generateRobots(baseUrl),
      '/feed.xml': () => generateRSS(posts, baseUrl),
      '/rss.xml': () => generateRSS(posts, baseUrl),
      '/privacy': () => servePage(generatePrivacyPage(baseUrl, posts), 3600),
      '/terms': () => servePage(generateTermsPage(baseUrl, posts), 3600),
      '/contact': () => servePage(generateContactPage(baseUrl, posts), 3600),
      '/about': () => servePage(generateAboutPage(baseUrl, posts), 3600),
      '/dmca': () => servePage(generateDMCAPage(baseUrl, posts), 3600),
      '/disclaimer': () => servePage(generateDisclaimerPage(baseUrl, posts), 3600),
    };

    if (routes[url.pathname]) {
      return routes[url.pathname]();
    }

    // صورة المقال
    if (url.pathname.startsWith('/image/')) {
      const articleId = url.pathname.split('/image/')[1];
      const post = posts.find(p => p.id.toString() === articleId);
      if (post && post.image) {
        const imageBuffer = base64ToUint8Array(post.image);
        return new Response(imageBuffer, {
          headers: {
            'Content-Type': 'image/png',
            'Cache-Control': 'public, max-age=31536000, immutable',
            'X-Content-Type-Options': 'nosniff'
          }
        });
      }
      return new Response('Not Found', { status: 404 });
    }

    // صفحة المقال
    if (url.pathname.startsWith('/article/')) {
      const articleId = url.pathname.split('/article/')[1];
      const post = posts.find(p => p.id.toString() === articleId || p.slug === articleId);
      if (post) {
        post.views = (post.views || 0) + 1;
        await env.BLOG_KV.put("posts", JSON.stringify(posts));
        return servePage(generateArticlePage(post, posts, baseUrl), 1800);
      }
      return Response.redirect(baseUrl + '/', 301);
    }

    // صفحة التصنيف
    if (url.pathname.startsWith('/category/')) {
      const catName = decodeURIComponent(url.pathname.split('/category/')[1]);
      const filteredPosts = posts.filter(p => p.category === catName);
      return servePage(generateCategoryPage(catName, filteredPosts, posts, baseUrl), 1800);
    }

    // IndexNow ping endpoint
    if (url.pathname === '/indexnow' && url.searchParams.get('key')) {
      return new Response(url.searchParams.get('key'), {
        headers: { 'Content-Type': 'text/plain' }
      });
    }

    // الصفحة الرئيسية
    return servePage(generateHomePage(posts, baseUrl), 900);
  }
};

// ===== دوال مساعدة =====

function servePage(html, maxAge = 900) {
  return new Response(html, {
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Cache-Control": `public, max-age=${maxAge}, s-maxage=${maxAge * 2}`,
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "SAMEORIGIN",
      "X-XSS-Protection": "1; mode=block",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Permissions-Policy": "interest-cohort=()"
    }
  });
}

function generateSlug(title) {
  return title
    .replace(/[^\u0600-\u06FF\s0-9a-zA-Z]/g, '')
    .replace(/\s+/g, '-')
    .substring(0, 100);
}

function generateDescription(text) {
  return text
    .replace(/<[^>]*>/g, '')
    .replace(/\*\*/g, '')
    .replace(/\n+/g, ' ')
    .trim()
    .substring(0, 155) + '...';
}

function generateImagePrompt(title, category) {
  const prompts = {
    "الدعم والحماية الاجتماعية": `Professional flat illustration of digital government services concept, modern smartphone showing online registration form, official documents floating around, Moroccan flag colors (red and green) subtle accents, clean geometric shapes, digital network connections, shield icon representing protection, abstract technology background, NO humans NO animals NO faces, corporate clean design, 4k quality, professional infographic style`,
    "مباريات التوظيف والتدريب": `Professional flat illustration of career and education concept, graduation cap with digital elements, laptop showing online exam platform, certificates and diplomas floating, books and study materials, abstract geometric background with blue and gold colors, NO humans NO animals NO faces NO portraits, modern corporate design, achievement badges, 4k quality, clean vector style`,
    "الوثائق الإدارية والتأشيرات": `Professional flat illustration of travel documents and visa concept, passport booklet with stamps, airplane ticket, globe with flight routes, official stamps and seals, embassy building silhouette, geometric patterns, NO humans NO animals NO faces, modern design with warm colors, gold and navy blue palette, 4k quality, clean corporate style`,
    "المقاول الصغير والعمل الحر": `Professional flat illustration of entrepreneurship and business startup concept, rocket launching from laptop screen, growth charts and graphs, coins and money symbols, business plan documents, lightbulb innovation icon, geometric abstract background, NO humans NO animals NO faces, modern corporate design, green and blue gradient, 4k quality, fintech style`
  };

  return prompts[category] || `Professional flat illustration of Moroccan digital government services, modern technology concept with smartphone and documents, abstract geometric design, official colors red and green, NO humans NO animals NO faces, clean corporate 4k style`;
}

function uint8ArrayToBase64(uint8Array) {
  let binary = '';
  for (let i = 0; i < uint8Array.length; i++) {
    binary += String.fromCharCode(uint8Array[i]);
  }
  return btoa(binary);
}

function base64ToUint8Array(base64) {
  const binary = atob(base64);
  const uint8Array = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    uint8Array[i] = binary.charCodeAt(i);
  }
  return uint8Array;
}

function formatContentAdvanced(text) {
  let formatted = text
    .replace(/\*\*(.*?)\*\*/g, '</p><h3 class="content-heading"><span class="heading-icon">📌</span> $1</h3><p>')
    .replace(/(\d+)\.\s/g, '<span class="step-number">$1</span> ')
    .replace(/- (.*?)(?:\n|$)/g, '<li class="content-list-item">$1</li>')
    .replace(/سؤال:\s*(.*?)(?:\n|<br>)/gi, '</p><div class="faq-item"><div class="faq-question"><span class="faq-icon">❓</span> $1</div>')
    .replace(/جواب:\s*(.*?)(?:\n|<br>)/gi, '<div class="faq-answer"><span class="faq-icon">✅</span> $1</div></div><p>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>');

  if (!formatted.startsWith('<p>')) formatted = '<p>' + formatted;
  if (!formatted.endsWith('</p>')) formatted += '</p>';
  formatted = formatted.replace(/<p><\/p>/g, '');

  return formatted;
}

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function extractFAQ(content) {
  const faqs = [];
  const patterns = [
    /(?:سؤال|❓)[:\s]*([^<]+?)(?:<\/div>|<br>|<\/p>)[\s\S]*?(?:جواب|✅)[:\s]*([^<]+?)(?:<\/div>|<br>|<\/p>)/gi,
    /faq-question[^>]*>(?:<[^>]+>)*\s*([^<]+)[\s\S]*?faq-answer[^>]*>(?:<[^>]+>)*\s*([^<]+)/gi,
  ];

  for (const pattern of patterns) {
    let match;
    while ((match = pattern.exec(content)) !== null && faqs.length < 6) {
      const q = match[1].replace(/<[^>]*>/g, '').trim();
      const a = match[2].replace(/<[^>]*>/g, '').trim();
      if (q.length > 10 && a.length > 10) {
        faqs.push({ question: q, answer: a });
      }
    }
  }
  return faqs;
}

// ===== إشعار محركات البحث للفهرسة الفورية =====
async function pingSearchEngines(env, newPost, allPosts) {
  const baseUrl = env.SITE_URL || 'https://example.com';
  const articleUrl = `${baseUrl}/article/${newPost.id}`;

  const pings = [
    // Google Ping
    fetch(`https://www.google.com/ping?sitemap=${encodeURIComponent(baseUrl + '/sitemap.xml')}`).catch(() => {}),
    // Bing/IndexNow
    fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        host: new URL(baseUrl).hostname,
        key: env.INDEXNOW_KEY || 'your-indexnow-key',
        keyLocation: `${baseUrl}/indexnow?key=${env.INDEXNOW_KEY || 'your-indexnow-key'}`,
        urlList: [articleUrl, baseUrl + '/']
      })
    }).catch(() => {}),
    // Bing Ping
    fetch(`https://www.bing.com/ping?sitemap=${encodeURIComponent(baseUrl + '/sitemap.xml')}`).catch(() => {}),
  ];

  // Google Indexing API
  if (env.GOOGLE_INDEXING_KEY) {
    pings.push(
      fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${env.GOOGLE_INDEXING_KEY}`
        },
        body: JSON.stringify({
          url: articleUrl,
          type: 'URL_UPDATED'
        })
      }).catch(() => {})
    );
  }

  await Promise.allSettled(pings);
}

// ===== Sitemap XML =====
function generateSitemap(posts, baseUrl) {
  const staticPages = [
    { loc: '/', priority: '1.0', changefreq: 'hourly' },
    { loc: '/privacy', priority: '0.3', changefreq: 'yearly' },
    { loc: '/terms', priority: '0.3', changefreq: 'yearly' },
    { loc: '/contact', priority: '0.4', changefreq: 'monthly' },
    { loc: '/about', priority: '0.5', changefreq: 'monthly' },
    { loc: '/dmca', priority: '0.3', changefreq: 'yearly' },
    { loc: '/disclaimer', priority: '0.3', changefreq: 'yearly' },
  ];

  const categories = [...new Set(posts.map(p => p.category))];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  ${staticPages.map(p => `
  <url>
    <loc>${baseUrl}${p.loc}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('')}
  ${categories.map(cat => `
  <url>
    <loc>${baseUrl}/category/${encodeURIComponent(cat)}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}
  ${posts.map(p => `
  <url>
    <loc>${baseUrl}/article/${p.id}</loc>
    <lastmod>${p.dateISO || new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    ${p.image ? `
    <image:image>
      <image:loc>${baseUrl}/image/${p.id}</image:loc>
      <image:title>${escapeXml(p.title)}</image:title>
      <image:caption>${escapeXml(p.imageAlt || p.title)}</image:caption>
    </image:image>` : ''}
  </url>`).join('')}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml;charset=UTF-8",
      "Cache-Control": "public, max-age=3600"
    }
  });
}

// ===== Robots.txt =====
function generateRobots(baseUrl) {
  return new Response(
    `User-agent: *
Allow: /
Disallow: /image/

User-agent: Googlebot
Allow: /
Allow: /image/

User-agent: Googlebot-Image
Allow: /image/

Sitemap: ${baseUrl}/sitemap.xml

Host: ${baseUrl}`, {
    headers: { "Content-Type": "text/plain;charset=UTF-8" }
  });
}

// ===== RSS Feed =====
function generateRSS(posts, baseUrl) {
  const items = posts.slice(0, 30).map(p => `
  <item>
    <title>${escapeXml(p.title)}</title>
    <link>${baseUrl}/article/${p.id}</link>
    <description><![CDATA[${p.description || ''}]]></description>
    <pubDate>${new Date(p.dateISO || Date.now()).toUTCString()}</pubDate>
    <category>${escapeXml(p.category)}</category>
    <guid isPermaLink="true">${baseUrl}/article/${p.id}</guid>
    ${p.image ? `<enclosure url="${baseUrl}/image/${p.id}" type="image/png" length="0"/>` : ''}
  </item>`).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:media="http://search.yahoo.com/mrss/">
<channel>
  <title>بوابة الخدمات الرقمية - دليل المواطن المغربي</title>
  <link>${baseUrl}</link>
  <description>دليلك الشامل للخدمات الرقمية الحكومية والإجراءات الإدارية بالمغرب</description>
  <language>ar</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
  <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
  <copyright>© ${new Date().getFullYear()} بوابة الخدمات الرقمية</copyright>
  ${items}
</channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml;charset=UTF-8" }
  });
}

// ===== الأنماط المشتركة الكاملة =====
function getSharedStyles() {
  return `
    <style>
      *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
      :root{
        --primary:#0f4c81;--primary-light:#1a6fb5;--primary-dark:#0a3459;
        --secondary:#e8b100;--secondary-light:#ffd633;
        --accent:#00b894;--accent-light:#00e6b8;
        --dark:#1a1a2e;--dark-light:#2d2d44;
        --gray-50:#f8fafc;--gray-100:#f1f5f9;--gray-200:#e2e8f0;
        --gray-300:#cbd5e1;--gray-400:#94a3b8;--gray-500:#64748b;
        --gray-600:#475569;--gray-700:#334155;--gray-800:#1e293b;
        --white:#ffffff;
        --shadow-sm:0 1px 2px rgba(0,0,0,.05);
        --shadow:0 1px 3px rgba(0,0,0,.1),0 1px 2px rgba(0,0,0,.06);
        --shadow-md:0 4px 6px rgba(0,0,0,.07),0 2px 4px rgba(0,0,0,.06);
        --shadow-lg:0 10px 15px rgba(0,0,0,.1),0 4px 6px rgba(0,0,0,.05);
        --shadow-xl:0 20px 25px rgba(0,0,0,.1),0 8px 10px rgba(0,0,0,.04);
        --radius:12px;--radius-lg:16px;--radius-xl:24px;
        --transition:all .3s cubic-bezier(.4,0,.2,1);
      }
      body{font-family:'Cairo',sans-serif;background:var(--gray-50);color:var(--dark);line-height:1.8;overflow-x:hidden;-webkit-font-smoothing:antialiased;direction:rtl}

      /* Top Bar */
      .top-bar{background:var(--dark);color:var(--gray-400);padding:8px 0;font-size:13px;border-bottom:1px solid rgba(255,255,255,.05)}
      .top-bar-inner{max-width:1200px;margin:0 auto;padding:0 20px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px}
      .top-bar a{color:var(--gray-400);text-decoration:none;transition:var(--transition);margin:0 8px}
      .top-bar a:hover{color:var(--secondary)}
      .top-date{display:flex;align-items:center;gap:6px}

      /* Header */
      .header{background:var(--white);box-shadow:var(--shadow-md);position:sticky;top:0;z-index:1000;transition:var(--transition)}
      .header-inner{max-width:1200px;margin:0 auto;padding:12px 20px;display:flex;justify-content:space-between;align-items:center}
      .logo{display:flex;align-items:center;gap:12px;text-decoration:none}
      .logo-icon{width:50px;height:50px;background:linear-gradient(135deg,var(--primary),var(--primary-light));border-radius:var(--radius);display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(15,76,129,.3)}
      .logo-icon svg{width:28px;height:28px;fill:white}
      .logo-text h1{font-size:22px;font-weight:800;color:var(--primary);line-height:1.2}
      .logo-text span{color:var(--secondary)}
      .logo-text p{font-size:11px;color:var(--gray-500);font-weight:400}

      /* Navigation */
      .nav{background:linear-gradient(135deg,var(--primary),var(--primary-dark));padding:0;box-shadow:0 4px 15px rgba(15,76,129,.2);position:relative}
      .nav-inner{max-width:1200px;margin:0 auto;padding:0 20px;display:flex;align-items:center;gap:0}
      .nav-link{color:rgba(255,255,255,.85);text-decoration:none;padding:14px 16px;font-size:13px;font-weight:600;white-space:nowrap;transition:var(--transition);border-bottom:3px solid transparent;display:flex;align-items:center;gap:6px}
      .nav-link:hover,.nav-link.active{color:white;background:rgba(255,255,255,.1);border-bottom-color:var(--secondary)}
      .nav-link svg{width:16px;height:16px;fill:currentColor}

      /* Mobile Toggle */
      .mobile-toggle{display:none;background:none;border:2px solid var(--gray-300);cursor:pointer;padding:8px 12px;border-radius:8px;flex-direction:column;gap:4px;align-items:center;justify-content:center}
      .mobile-toggle span{display:block;width:20px;height:2px;background:var(--dark);transition:var(--transition);border-radius:2px}

      /* Dropdown Menu */
      .dropdown{position:relative}
      .dropdown-toggle{cursor:pointer;display:flex;align-items:center;gap:4px}
      .dropdown-toggle::after{content:'▼';font-size:8px;transition:var(--transition)}
      .dropdown-menu{position:absolute;top:100%;right:0;background:var(--white);min-width:240px;border-radius:var(--radius);box-shadow:var(--shadow-xl);opacity:0;visibility:hidden;transform:translateY(10px);transition:var(--transition);z-index:100;overflow:hidden;border:1px solid var(--gray-200)}
      .dropdown:hover .dropdown-menu,.dropdown.active .dropdown-menu{opacity:1;visibility:visible;transform:translateY(0)}
      .dropdown:hover .dropdown-toggle::after{transform:rotate(180deg)}
      .dropdown-menu a{display:flex;align-items:center;gap:10px;padding:12px 18px;color:var(--dark);text-decoration:none;font-size:14px;font-weight:600;transition:var(--transition);border-bottom:1px solid var(--gray-100)}
      .dropdown-menu a:last-child{border:none}
      .dropdown-menu a:hover{background:var(--gray-50);color:var(--primary);padding-right:22px}
      .dropdown-menu a .menu-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0}
      .dropdown-menu a .menu-count{margin-right:auto;font-size:11px;color:var(--gray-400);background:var(--gray-100);padding:2px 8px;border-radius:10px}

      /* Hero */
      .hero{background:linear-gradient(135deg,var(--primary-dark) 0%,var(--primary) 50%,var(--primary-light) 100%);color:white;padding:50px 20px;text-align:center;position:relative;overflow:hidden}
      .hero::before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");opacity:.5}
      .hero-content{position:relative;z-index:1;max-width:800px;margin:0 auto}
      .hero h2{font-size:32px;font-weight:800;margin-bottom:12px;text-shadow:0 2px 10px rgba(0,0,0,.2)}
      .hero p{font-size:16px;opacity:.9;margin-bottom:25px}
      .hero-stats{display:flex;justify-content:center;gap:35px;flex-wrap:wrap}
      .stat-item{text-align:center}
      .stat-number{font-size:32px;font-weight:800;color:var(--secondary);display:block}
      .stat-label{font-size:13px;opacity:.8}

      /* Search */
      .search-section{max-width:600px;margin:-25px auto 25px;padding:0 20px;position:relative;z-index:10}
      .search-box{display:flex;background:var(--white);border-radius:50px;box-shadow:var(--shadow-xl);overflow:hidden;border:2px solid transparent;transition:var(--transition)}
      .search-box:focus-within{border-color:var(--primary);box-shadow:var(--shadow-xl),0 0 0 4px rgba(15,76,129,.1)}
      .search-box input{flex:1;border:none;padding:14px 22px;font-size:14px;font-family:'Cairo',sans-serif;outline:none;background:transparent}
      .search-box button{background:linear-gradient(135deg,var(--primary),var(--primary-light));color:white;border:none;padding:14px 24px;cursor:pointer;font-family:'Cairo',sans-serif;font-weight:600;font-size:13px;transition:var(--transition);display:flex;align-items:center;gap:6px}
      .search-box button:hover{opacity:.9}
      .search-box button svg{width:16px;height:16px;fill:white}

      /* Ad Slots */
      .ad-slot{background:var(--gray-100);border:2px dashed var(--gray-300);border-radius:var(--radius);padding:15px;text-align:center;margin:20px 0;min-height:90px;display:flex;align-items:center;justify-content:center;color:var(--gray-400);font-size:12px}
      .ad-slot-header{max-width:1200px;margin:12px auto;padding:0 20px}
      .ad-slot-inline{margin:25px 0}

      /* Main Layout */
      .main-layout{max-width:1200px;margin:25px auto;padding:0 20px;display:grid;grid-template-columns:1fr 300px;gap:25px}

      /* Categories Bar */
      .categories-bar{display:flex;gap:10px;margin-bottom:20px;overflow-x:auto;padding-bottom:8px;scrollbar-width:none}
      .categories-bar::-webkit-scrollbar{display:none}
      .cat-chip{display:flex;align-items:center;gap:6px;padding:8px 16px;border-radius:50px;font-size:12px;font-weight:600;white-space:nowrap;text-decoration:none;transition:var(--transition);border:2px solid var(--gray-200);background:var(--white);color:var(--gray-600);cursor:pointer}
      .cat-chip:hover,.cat-chip.active{border-color:var(--primary);color:var(--primary);background:rgba(15,76,129,.04);transform:translateY(-2px);box-shadow:var(--shadow-md)}
      .cat-dot{width:8px;height:8px;border-radius:50%;display:inline-block;flex-shrink:0}

      /* Featured Post */
      .featured-post{background:linear-gradient(135deg,var(--primary),var(--primary-dark));border-radius:var(--radius-xl);color:white;margin-bottom:25px;position:relative;overflow:hidden;transition:var(--transition);cursor:pointer;text-decoration:none;display:grid;grid-template-columns:1fr 1fr;gap:0}
      .featured-post::before{content:'';position:absolute;top:-50%;right:-50%;width:200%;height:200%;background:radial-gradient(circle,rgba(255,255,255,.04) 0%,transparent 70%);animation:rotate 25s linear infinite}
      @keyframes rotate{from{transform:rotate(0)}to{transform:rotate(360deg)}}
      .featured-post:hover{transform:translateY(-4px);box-shadow:var(--shadow-xl)}
      .featured-post-content{padding:35px;position:relative;z-index:1}
      .featured-post-image{position:relative;overflow:hidden;min-height:250px}
      .featured-post-image img{width:100%;height:100%;object-fit:cover;transition:var(--transition)}
      .featured-post:hover .featured-post-image img{transform:scale(1.05)}
      .featured-post-image .overlay{position:absolute;inset:0;background:linear-gradient(to left,transparent 0%,rgba(10,52,89,.4) 100%)}
      .featured-badge{background:var(--secondary);color:var(--dark);padding:5px 14px;border-radius:20px;font-size:11px;font-weight:700;display:inline-flex;align-items:center;gap:5px;margin-bottom:12px}
      .featured-post h2{font-size:24px;margin-bottom:10px;line-height:1.5}
      .featured-post p{opacity:.85;font-size:14px;line-height:1.8}
      .featured-meta{display:flex;align-items:center;gap:15px;margin-top:15px;font-size:12px;opacity:.75;flex-wrap:wrap}
      .featured-meta span{display:flex;align-items:center;gap:4px}

      /* Post Cards */
      .posts-grid{display:grid;gap:18px}
      .post-card{background:var(--white);border-radius:var(--radius-lg);overflow:hidden;box-shadow:var(--shadow);transition:var(--transition);border:1px solid var(--gray-100);display:block;text-decoration:none;color:inherit}
      .post-card:hover{transform:translateY(-3px);box-shadow:var(--shadow-lg);border-color:var(--primary)}
      .post-card-image{width:100%;height:200px;object-fit:cover;transition:var(--transition)}
      .post-card:hover .post-card-image{transform:scale(1.02)}
      .post-card-inner{padding:20px}
      .post-card-header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;flex-wrap:wrap;gap:6px}
      .post-badge{padding:4px 12px;border-radius:20px;font-size:11px;font-weight:700;display:inline-flex;align-items:center;gap:4px}
      .post-card h3{font-size:17px;font-weight:700;color:var(--dark);margin-bottom:8px;line-height:1.5;transition:var(--transition)}
      .post-card:hover h3{color:var(--primary)}
      .post-excerpt{color:var(--gray-600);font-size:13px;line-height:1.7;margin-bottom:12px;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
      .post-footer{display:flex;justify-content:space-between;align-items:center;padding-top:12px;border-top:1px solid var(--gray-100);font-size:12px;color:var(--gray-500)}
      .post-footer span{display:flex;align-items:center;gap:4px}
      .read-more{color:var(--primary);font-weight:600;display:flex;align-items:center;gap:4px;transition:var(--transition)}
      .post-card:hover .read-more{gap:8px}

      /* Views Counter */
      .views-count{display:flex;align-items:center;gap:4px;font-size:11px;color:var(--gray-400)}
      .views-count svg{width:14px;height:14px;fill:var(--gray-400)}

      /* Sidebar */
      .sidebar{display:flex;flex-direction:column;gap:18px}
      .sidebar-widget{background:var(--white);border-radius:var(--radius-lg);padding:20px;box-shadow:var(--shadow);border:1px solid var(--gray-100)}
      .widget-title{font-size:16px;font-weight:700;color:var(--dark);margin-bottom:15px;padding-bottom:10px;border-bottom:3px solid var(--primary);display:flex;align-items:center;gap:8px}
      .widget-title svg{width:18px;height:18px;fill:var(--primary)}
      .trending-item{display:flex;gap:10px;padding:10px 0;border-bottom:1px solid var(--gray-100);text-decoration:none;color:inherit;transition:var(--transition)}
      .trending-item:last-child{border:none}
      .trending-item:hover{padding-right:6px}
      .trending-number{width:30px;height:30px;background:linear-gradient(135deg,var(--primary),var(--primary-light));color:white;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;flex-shrink:0}
      .trending-text h4{font-size:13px;font-weight:600;color:var(--dark);line-height:1.5;transition:var(--transition)}
      .trending-item:hover .trending-text h4{color:var(--primary)}
      .trending-text span{font-size:11px;color:var(--gray-400)}
      .quick-links{list-style:none}
      .quick-links li{padding:8px 0;border-bottom:1px solid var(--gray-100)}
      .quick-links li:last-child{border:none}
      .quick-links a{color:var(--gray-700);text-decoration:none;font-size:13px;display:flex;align-items:center;gap:6px;transition:var(--transition)}
      .quick-links a:hover{color:var(--primary);padding-right:4px}
      .quick-links a::before{content:'◀';font-size:9px;color:var(--primary)}
      .newsletter-widget{background:linear-gradient(135deg,var(--primary),var(--primary-dark));color:white}
      .newsletter-widget .widget-title{color:white;border-bottom-color:var(--secondary)}
      .newsletter-widget p{font-size:13px;opacity:.9;margin-bottom:12px}
      .newsletter-widget input{width:100%;padding:10px 14px;border:2px solid rgba(255,255,255,.2);border-radius:var(--radius);background:rgba(255,255,255,.1);color:white;font-family:'Cairo',sans-serif;font-size:13px;margin-bottom:8px;outline:none;transition:var(--transition)}
      .newsletter-widget input::placeholder{color:rgba(255,255,255,.5)}
      .newsletter-widget input:focus{border-color:var(--secondary)}
      .newsletter-btn{width:100%;padding:10px;background:var(--secondary);color:var(--dark);border:none;border-radius:var(--radius);font-family:'Cairo',sans-serif;font-weight:700;font-size:13px;cursor:pointer;transition:var(--transition)}
      .newsletter-btn:hover{background:var(--secondary-light);transform:translateY(-1px)}

      /* Article Page */
      .article-container{max-width:1200px;margin:25px auto;padding:0 20px;display:grid;grid-template-columns:1fr 300px;gap:25px}
      .article-main{background:var(--white);border-radius:var(--radius-xl);overflow:hidden;box-shadow:var(--shadow-md)}
      .article-hero-image{width:100%;height:350px;object-fit:cover}
      .article-body{padding:35px}
      .breadcrumb{display:flex;align-items:center;gap:6px;font-size:12px;color:var(--gray-500);margin-bottom:15px;flex-wrap:wrap}
      .breadcrumb a{color:var(--primary);text-decoration:none;transition:var(--transition)}
      .breadcrumb a:hover{text-decoration:underline}
      .breadcrumb svg{width:12px;height:12px;fill:var(--gray-400)}
      .article-header{margin-bottom:25px;padding-bottom:18px;border-bottom:2px solid var(--gray-100)}
      .article-title{font-size:28px;font-weight:800;color:var(--dark);line-height:1.5;margin-bottom:12px}
      .article-meta{display:flex;align-items:center;gap:15px;flex-wrap:wrap;font-size:13px;color:var(--gray-500)}
      .article-meta span{display:flex;align-items:center;gap:4px}
      .article-meta svg{width:14px;height:14px;fill:var(--gray-400)}
      .article-content{font-size:16px;line-height:2;color:var(--gray-700)}
      .article-content h3.content-heading{font-size:20px;color:var(--primary-dark);margin:25px 0 12px;padding:12px 18px;border-right:4px solid var(--secondary);background:linear-gradient(to left,transparent,rgba(15,76,129,.04));border-radius:0 var(--radius) var(--radius) 0;display:flex;align-items:center;gap:8px}
      .heading-icon{font-size:18px}
      .article-content p{margin-bottom:12px}
      .article-content .step-number{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;background:var(--primary);color:white;border-radius:50%;font-size:12px;font-weight:700;margin-left:6px}
      .content-list-item{padding:6px 15px;margin:4px 0;border-right:3px solid var(--accent);background:var(--gray-50);border-radius:0 8px 8px 0;list-style:none;font-size:15px}
      .faq-item{background:var(--gray-50);border-radius:var(--radius);margin:12px 0;overflow:hidden;border:1px solid var(--gray-200)}
      .faq-question{padding:14px 18px;font-weight:700;color:var(--dark);background:var(--white);border-bottom:1px solid var(--gray-200);display:flex;align-items:center;gap:8px;font-size:15px}
      .faq-answer{padding:14px 18px;color:var(--gray-600);font-size:14px;line-height:1.8;display:flex;align-items:flex-start;gap:8px}
      .faq-icon{font-size:16px;flex-shrink:0}

      /* Share Bar */
      .share-bar{display:flex;align-items:center;gap:10px;margin-top:25px;padding-top:18px;border-top:2px solid var(--gray-100);flex-wrap:wrap}
      .share-bar>span{font-weight:700;font-size:14px;color:var(--dark)}
      .share-btn{padding:7px 14px;border-radius:8px;border:none;font-family:'Cairo',sans-serif;font-size:12px;font-weight:600;cursor:pointer;transition:var(--transition);color:white;display:flex;align-items:center;gap:5px;text-decoration:none}
      .share-btn:hover{transform:translateY(-2px);box-shadow:var(--shadow-md)}
      .share-fb{background:#1877f2}.share-tw{background:#1da1f2}.share-wa{background:#25d366}.share-tg{background:#0088cc}.share-ln{background:#0a66c2}

      /* Related Posts */
      .related-posts{margin-top:30px;padding-top:25px;border-top:2px solid var(--gray-100)}
      .related-posts h3{font-size:18px;font-weight:700;color:var(--dark);margin-bottom:15px;display:flex;align-items:center;gap:8px}
      .related-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
      .related-card{padding:14px;background:var(--gray-50);border-radius:var(--radius);text-decoration:none;color:inherit;transition:var(--transition);border:1px solid var(--gray-200)}
      .related-card:hover{border-color:var(--primary);background:var(--white);box-shadow:var(--shadow)}
      .related-card h4{font-size:13px;color:var(--dark);margin-bottom:6px;line-height:1.5}
      .related-card span{font-size:11px;color:var(--gray-400)}

      /* Footer */
      .footer{background:var(--dark);color:var(--gray-400);margin-top:50px}
      .footer-main{max-width:1200px;margin:0 auto;padding:40px 20px;display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:30px}
      .footer-about h3{font-size:18px;color:var(--white);margin-bottom:12px;font-weight:700}
      .footer-about p{font-size:13px;line-height:1.8;margin-bottom:15px}
      .footer-social{display:flex;gap:8px}
      .footer-social a{width:36px;height:36px;background:rgba(255,255,255,.08);border-radius:8px;display:flex;align-items:center;justify-content:center;transition:var(--transition);text-decoration:none}
      .footer-social a:hover{background:var(--primary);transform:translateY(-2px)}
      .footer-social svg{width:16px;height:16px;fill:var(--gray-400)}
      .footer-social a:hover svg{fill:white}
      .footer-col h4{font-size:15px;color:var(--white);margin-bottom:12px;font-weight:700}
      .footer-col ul{list-style:none}
      .footer-col li{margin-bottom:8px}
      .footer-col a{color:var(--gray-400);text-decoration:none;font-size:13px;transition:var(--transition);display:flex;align-items:center;gap:5px}
      .footer-col a:hover{color:var(--secondary);padding-right:4px}
      .footer-col a::before{content:'←';font-size:11px}
      .footer-bottom{border-top:1px solid rgba(255,255,255,.08);padding:18px 20px;text-align:center;font-size:12px;max-width:1200px;margin:0 auto}
      .footer-bottom a{color:var(--secondary);text-decoration:none}
      .footer-bottom a:hover{text-decoration:underline}

      /* Static Pages */
      .static-page{max-width:800px;margin:30px auto;padding:0 20px}
      .static-content{background:var(--white);border-radius:var(--radius-xl);padding:40px;box-shadow:var(--shadow-md)}
      .static-content h1{font-size:28px;color:var(--primary);margin-bottom:20px;padding-bottom:15px;border-bottom:3px solid var(--secondary)}
      .static-content h2{font-size:20px;color:var(--dark);margin:25px 0 10px;padding-right:12px;border-right:4px solid var(--primary)}
      .static-content p{margin-bottom:12px;color:var(--gray-700);font-size:15px;line-height:1.9}
      .static-content ul{padding-right:20px;margin-bottom:15px}
      .static-content li{margin-bottom:6px;color:var(--gray-600);font-size:14px}
      .static-content a{color:var(--primary);text-decoration:none}
      .static-content a:hover{text-decoration:underline}
      .contact-form{display:flex;flex-direction:column;gap:12px;margin-top:20px}
      .contact-form input,.contact-form textarea{padding:12px 16px;border:2px solid var(--gray-200);border-radius:var(--radius);font-family:'Cairo',sans-serif;font-size:14px;transition:var(--transition);outline:none}
      .contact-form input:focus,.contact-form textarea:focus{border-color:var(--primary)}
      .contact-form textarea{min-height:150px;resize:vertical}
      .contact-form button{padding:12px 24px;background:var(--primary);color:white;border:none;border-radius:var(--radius);font-family:'Cairo',sans-serif;font-weight:700;font-size:15px;cursor:pointer;transition:var(--transition)}
      .contact-form button:hover{background:var(--primary-light);transform:translateY(-1px)}

      /* Back to Top */
      .back-to-top{position:fixed;bottom:25px;left:25px;width:44px;height:44px;background:linear-gradient(135deg,var(--primary),var(--primary-light));color:white;border:none;border-radius:50%;cursor:pointer;display:none;align-items:center;justify-content:center;box-shadow:var(--shadow-lg);transition:var(--transition);z-index:999}
      .back-to-top:hover{transform:translateY(-3px);box-shadow:var(--shadow-xl)}
      .back-to-top svg{width:18px;height:18px;fill:white}

      /* Animations */
      @keyframes fadeInUp{from{opacity:0;transform:translateY(15px)}to{opacity:1;transform:translateY(0)}}
      .animate-in{animation:fadeInUp .5s ease forwards;opacity:0}
      .delay-1{animation-delay:.1s}.delay-2{animation-delay:.2s}.delay-3{animation-delay:.3s}.delay-4{animation-delay:.4s}

      /* Responsive */
      @media(max-width:1024px){
        .main-layout,.article-container{grid-template-columns:1fr}
        .footer-main{grid-template-columns:1fr 1fr}
        .featured-post{grid-template-columns:1fr}
        .featured-post-image{min-height:200px}
      }
      @media(max-width:768px){
        .mobile-toggle{display:flex}
        .nav-inner{flex-direction:column;display:none;padding:8px 0}
        .nav-inner.active{display:flex}
        .nav-link{width:100%;padding:10px 18px;border-bottom:1px solid rgba(255,255,255,.08);border-left:none}
        .dropdown-menu{position:static;box-shadow:none;border:none;border-radius:0;background:rgba(255,255,255,.05);opacity:1;visibility:visible;transform:none}
        .dropdown-menu a{color:rgba(255,255,255,.8);padding:10px 30px;border-bottom-color:rgba(255,255,255,.05)}
        .dropdown-menu a:hover{background:rgba(255,255,255,.1);color:white}
        .dropdown-menu a .menu-count{background:rgba(255,255,255,.1);color:rgba(255,255,255,.7)}
        .hero h2{font-size:22px}.hero{padding:35px 15px}
        .hero-stats{gap:18px}.stat-number{font-size:26px}
        .featured-post-content{padding:22px}
        .featured-post h2{font-size:18px}
        .article-body{padding:20px}
        .article-title{font-size:22px}
        .article-hero-image{height:220px}
        .related-grid{grid-template-columns:1fr}
        .footer-main{grid-template-columns:1fr;gap:20px}
        .top-bar-inner{justify-content:center;font-size:11px}
        .search-box{border-radius:var(--radius)}
        .share-bar{gap:6px}
        .share-btn{padding:5px 10px;font-size:11px}
        .static-content{padding:25px}
        .static-content h1{font-size:22px}
      }
      @media(max-width:480px){
        .logo-text h1{font-size:17px}
        .hero h2{font-size:18px}
        .hero p{font-size:13px}
        .post-card h3{font-size:15px}
        .article-title{font-size:20px}
        .article-content{font-size:14px}
        .article-hero-image{height:180px}
      }
      @media print{
        .header,.nav,.top-bar,.sidebar,.footer,.ad-slot,.share-bar,.back-to-top,.search-section{display:none!important}
        .article-main{box-shadow:none;border-radius:0}
        .main-layout,.article-container{grid-template-columns:1fr}
      }
    </style>`;
}

// ===== Header =====
function getHeader(baseUrl, posts = []) {
  const today = new Date().toLocaleDateString('ar-MA', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  const categories = [
    { name: "الدعم والحماية الاجتماعية", color: "#10b981", icon: "🛡️" },
    { name: "مباريات التوظيف والتدريب", color: "#6366f1", icon: "💼" },
    { name: "الوثائق الإدارية والتأشيرات", color: "#f59e0b", icon: "📄" },
    { name: "المقاول الصغير والعمل الحر", color: "#ec4899", icon: "🚀" }
  ];

  return `
    <div class="top-bar">
      <div class="top-bar-inner">
        <div class="top-date">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/></svg>
          ${today}
        </div>
        <div>
          <a href="${baseUrl}/about">من نحن</a>
          <a href="${baseUrl}/contact">اتصل بنا</a>
          <a href="${baseUrl}/feed.xml">RSS</a>
        </div>
      </div>
    </div>
    <header class="header" id="mainHeader">
      <div class="header-inner">
        <a href="${baseUrl}/" class="logo">
          <div class="logo-icon">
            <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          </div>
          <div class="logo-text">
            <h1>بوابة الخدمات <span>الرقمية</span></h1>
            <p>دليلك الشامل للمنصات الحكومية المغربية</p>
          </div>
        </a>
        <button class="mobile-toggle" onclick="toggleMenu()" aria-label="القائمة">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
    <nav class="nav" aria-label="التنقل الرئيسي">
      <div class="nav-inner" id="navMenu">
        <a href="${baseUrl}/" class="nav-link">
          <svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
          الرئيسية
        </a>
        <div class="dropdown nav-link dropdown-toggle" onclick="this.parentElement.querySelector('.dropdown').classList.toggle('active')">
          <svg viewBox="0 0 24 24"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>
          أقسام المدونة
          <div class="dropdown-menu">
            ${categories.map(cat => `
              <a href="${baseUrl}/category/${encodeURIComponent(cat.name)}">
                <span class="menu-dot" style="background:${cat.color}"></span>
                ${cat.icon} ${cat.name}
              </a>
            `).join('')}
          </div>
        </div>
        ${categories.map(cat => `
          <a href="${baseUrl}/category/${encodeURIComponent(cat.name)}" class="nav-link">${cat.icon} ${cat.name.split(' ')[0]}</a>
        `).join('')}
        <a href="${baseUrl}/contact" class="nav-link">
          <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
          اتصل بنا
        </a>
      </div>
    </nav>`;
}

// ===== Footer =====
function getFooter(baseUrl) {
  return `
    <footer class="footer">
      <div class="footer-main">
        <div class="footer-about">
          <h3>🇲🇦 بوابة الخدمات الرقمية</h3>
          <p>منصة إلكترونية مستقلة متخصصة في تبسيط الإجراءات الإدارية والخدمات الرقمية الحكومية بالمغرب. نهدف إلى مساعدة المواطنين في الوصول إلى المعلومات الدقيقة والمحدثة بسهولة ويسر.</p>
          <div class="footer-social">
            <a href="#" aria-label="فيسبوك"><svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a>
            <a href="#" aria-label="تويتر"><svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg></a>
            <a href="#" aria-label="يوتيوب"><svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z"/><polygon points="9.75,15.02 15.5,11.75 9.75,8.48"/></svg></a>
            <a href="#" aria-label="تلغرام"><svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.37-.49 1.02-.75 3.99-1.73 6.65-2.87 7.97-3.44 3.79-1.58 4.58-1.86 5.09-1.87.11 0 .37.03.54.17.14.12.18.28.2.47-.01.06.01.24 0 .38z"/></svg></a>
          </div>
        </div>
        <div class="footer-col">
          <h4>📂 أقسام الموقع</h4>
          <ul>
            <li><a href="${baseUrl}/category/${encodeURIComponent('الدعم والحماية الاجتماعية')}">الدعم الاجتماعي</a></li>
            <li><a href="${baseUrl}/category/${encodeURIComponent('مباريات التوظيف والتدريب')}">التوظيف والتدريب</a></li>
            <li><a href="${baseUrl}/category/${encodeURIComponent('الوثائق الإدارية والتأشيرات')}">الوثائق والتأشيرات</a></li>
            <li><a href="${baseUrl}/category/${encodeURIComponent('المقاول الصغير والعمل الحر')}">ريادة الأعمال</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>📋 صفحات مهمة</h4>
          <ul>
            <li><a href="${baseUrl}/about">من نحن</a></li>
            <li><a href="${baseUrl}/contact">اتصل بنا</a></li>
            <li><a href="${baseUrl}/privacy">سياسة الخصوصية</a></li>
            <li><a href="${baseUrl}/terms">شروط الاستخدام</a></li>
            <li><a href="${baseUrl}/disclaimer">إخلاء المسؤولية</a></li>
            <li><a href="${baseUrl}/dmca">سياسة DMCA</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>🔗 مواقع حكومية</h4>
          <ul>
            <li><a href="https://www.rsu.ma" target="_blank" rel="noopener noreferrer">السجل الاجتماعي الموحد</a></li>
            <li><a href="https://www.cnss.ma" target="_blank" rel="noopener noreferrer">CNSS</a></li>
            <li><a href="https://www.ofppt.ma" target="_blank" rel="noopener noreferrer">OFPPT</a></li>
            <li><a href="https://ae.gov.ma" target="_blank" rel="noopener noreferrer">المقاول الذاتي</a></li>
            <li><a href="${baseUrl}/sitemap.xml">خريطة الموقع</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© ${new Date().getFullYear()} بوابة الخدمات الرقمية | جميع الحقوق محفوظة</p>
        <p style="margin-top:4px">
          <a href="${baseUrl}/privacy">الخصوصية</a> · 
          <a href="${baseUrl}/terms">الشروط</a> · 
          <a href="${baseUrl}/dmca">DMCA</a> · 
          <a href="${baseUrl}/disclaimer">إخلاء المسؤولية</a> · 
          <a href="${baseUrl}/contact">اتصل بنا</a>
        </p>
        <p style="margin-top:4px;font-size:11px">موقع إخباري تعليمي مستقل - غير تابع لأي جهة حكومية</p>
      </div>
    </footer>
    <button class="back-to-top" id="backToTop" onclick="window.scrollTo({top:0,behavior:'smooth'})" aria-label="العودة للأعلى">
      <svg viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/></svg>
    </button>
    <script>
      function toggleMenu(){document.getElementById('navMenu').classList.toggle('active')}
      window.addEventListener('scroll',()=>{document.getElementById('backToTop').style.display=window.scrollY>400?'flex':'none'},{passive:true});
      function searchPosts(){const q=document.getElementById('searchInput')?.value?.toLowerCase();if(!q)return document.querySelectorAll('.post-card,.featured-post').forEach(c=>c.style.display='');document.querySelectorAll('.post-card,.featured-post').forEach(c=>{c.style.display=c.textContent.toLowerCase().includes(q)?'':'none'})}
      document.querySelectorAll('.dropdown-toggle').forEach(el=>{el.addEventListener('click',e=>{e.preventDefault();el.closest('.dropdown').classList.toggle('active')})});
      if('IntersectionObserver' in window){const o=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){e.target.classList.add('animate-in');o.unobserve(e.target)}})},{threshold:.1});document.querySelectorAll('.post-card,.sidebar-widget').forEach(e=>o.observe(e))}
    </script>`;
}

// ===== Sidebar =====
function getSidebar(posts, baseUrl) {
  const recentPosts = posts.slice(0, 6);
  const categories = [...new Set(posts.map(p => p.category))];
  const catColors = { "الدعم والحماية الاجتماعية": "#10b981", "مباريات التوظيف والتدريب": "#6366f1", "الوثائق الإدارية والتأشيرات": "#f59e0b", "المقاول الصغير والعمل الحر": "#ec4899" };

  return `
    <aside class="sidebar">
      <div class="ad-slot">مساحة إعلانية</div>
      <div class="sidebar-widget">
        <h3 class="widget-title">
          <svg viewBox="0 0 24 24"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>
          📊 الأكثر قراءة
        </h3>
        ${recentPosts.map((p, i) => `
          <a href="${baseUrl}/article/${p.id}" class="trending-item">
            <div class="trending-number">${i + 1}</div>
            <div class="trending-text">
              <h4>${p.title.substring(0, 60)}${p.title.length > 60 ? '...' : ''}</h4>
              <span>${p.date} · 👁️ ${p.views || 0}</span>
            </div>
          </a>
        `).join('')}
      </div>
      <div class="sidebar-widget">
        <h3 class="widget-title">
          <svg viewBox="0 0 24 24"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg>
          📂 التصنيفات
        </h3>
        <ul class="quick-links">
          ${categories.map(cat => {
            const count = posts.filter(p => p.category === cat).length;
            return `<li><a href="${baseUrl}/category/${encodeURIComponent(cat)}"><span class="cat-dot" style="background:${catColors[cat] || '#0f4c81'}"></span>${cat}<span style="margin-right:auto;color:var(--gray-400);font-size:11px;background:var(--gray-100);padding:1px 7px;border-radius:10px">${count}</span></a></li>`;
          }).join('')}
        </ul>
      </div>
      <div class="sidebar-widget newsletter-widget">
        <h3 class="widget-title">✉️ النشرة البريدية</h3>
        <p>اشترك للحصول على آخر التحديثات مباشرة</p>
        <input type="email" placeholder="بريدك الإلكتروني..." aria-label="البريد الإلكتروني">
        <button class="newsletter-btn">اشترك الآن 🔔</button>
      </div>
      <div class="ad-slot">مساحة إعلانية</div>
      <div class="sidebar-widget">
        <h3 class="widget-title">
          <svg viewBox="0 0 24 24"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>
          🔗 روابط مفيدة
        </h3>
        <ul class="quick-links">
          <li><a href="https://www.rsu.ma" target="_blank" rel="noopener">السجل الاجتماعي الموحد RSU</a></li>
          <li><a href="https://www.cnss.ma" target="_blank" rel="noopener">صندوق الضمان الاجتماعي CNSS</a></li>
          <li><a href="https://www.ofppt.ma" target="_blank" rel="noopener">مكتب التكوين المهني OFPPT</a></li>
          <li><a href="https://ae.gov.ma" target="_blank" rel="noopener">بوابة المقاول الذاتي</a></li>
          <li><a href="https://www.passeport.ma" target="_blank" rel="noopener">جواز السفر البيومتري</a></li>
          <li><a href="https://www.cnie.ma" target="_blank" rel="noopener">البطاقة الوطنية CNIE</a></li>
        </ul>
      </div>
    </aside>`;
}

// ===== الصفحة الرئيسية =====
function generateHomePage(posts, baseUrl) {
  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);
  const postCount = posts.length;
  const catCount = [...new Set(posts.map(p => p.category))].length;
  const totalViews = posts.reduce((s, p) => s + (p.views || 0), 0);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "بوابة الخدمات الرقمية",
    "alternateName": "دليل المواطن المغربي للخدمات الحكومية",
    "url": baseUrl,
    "description": "دليلك الشامل للخدمات الرقمية الحكومية والإجراءات الإدارية بالمغرب",
    "inLanguage": "ar",
    "potentialAction": { "@type": "SearchAction", "target": baseUrl + "/?q={search_term_string}", "query-input": "required name=search_term_string" },
    "publisher": { "@type": "Organization", "name": "بوابة الخدمات الرقمية", "url": baseUrl }
  };

  return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>بوابة الخدمات الرقمية | دليل المواطن المغربي للخدمات الحكومية الإلكترونية 2026</title>
  <meta name="description" content="دليلك الشامل للخدمات الرقمية الحكومية بالمغرب: التسجيل في AMO تضامن، السجل الاجتماعي الموحد RSU، مباريات التوظيف 2026، الوثائق الإدارية، المقاول الذاتي. شروحات مبسطة ومحدثة يومياً.">
  <meta name="keywords" content="خدمات رقمية المغرب, أمو تضامن, السجل الاجتماعي الموحد, مباريات التوظيف 2026, CNSS, OFPPT, جواز السفر, البطاقة الوطنية, المقاول الذاتي, فيزا شنغن, دعم السكن">
  <meta name="author" content="بوابة الخدمات الرقمية">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large">
  <meta name="google" content="notranslate">
  <link rel="canonical" href="${baseUrl}/">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="بوابة الخدمات الرقمية">
  <meta property="og:title" content="بوابة الخدمات الرقمية | دليل المواطن المغربي 2026">
  <meta property="og:description" content="دليلك الشامل للخدمات الرقمية الحكومية والإجراءات الإدارية بالمغرب">
  <meta property="og:url" content="${baseUrl}/">
  <meta property="og:locale" content="ar_MA">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="بوابة الخدمات الرقمية | دليل المواطن المغربي">
  <meta name="twitter:description" content="دليلك الشامل للخدمات الرقمية الحكومية بالمغرب">
  <link rel="alternate" type="application/rss+xml" title="RSS" href="${baseUrl}/feed.xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap" rel="stylesheet">
  <script type="application/ld+json">${JSON.stringify(structuredData)}</script>
  ${getSharedStyles()}
</head>
<body>
  ${getHeader(baseUrl, posts)}

  <section class="hero">
    <div class="hero-content">
      <h2>🇲🇦 دليلك الشامل للخدمات الرقمية الحكومية بالمغرب</h2>
      <p>شروحات مبسطة ومحدثة لجميع الإجراءات الإدارية والمنصات الحكومية - كل ما يحتاجه المواطن المغربي</p>
      <div class="hero-stats">
        <div class="stat-item"><span class="stat-number">${postCount}+</span><span class="stat-label">مقال ودليل</span></div>
        <div class="stat-item"><span class="stat-number">${catCount}</span><span class="stat-label">تصنيف متخصص</span></div>
        <div class="stat-item"><span class="stat-number">${totalViews > 999 ? Math.floor(totalViews/1000) + 'K' : totalViews}+</span><span class="stat-label">زيارة</span></div>
        <div class="stat-item"><span class="stat-number">24/7</span><span class="stat-label">تحديث مستمر</span></div>
      </div>
    </div>
  </section>

  <div class="search-section">
    <div class="search-box">
      <input type="text" id="searchInput" placeholder="🔍 ابحث عن خدمة أو إجراء إداري..." onkeyup="searchPosts()" aria-label="البحث في الموقع">
      <button onclick="searchPosts()">
        <svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
        بحث
      </button>
    </div>
  </div>

  <div class="ad-slot-header"><div class="ad-slot"><!-- AdSense Leaderboard --></div></div>

  <div class="main-layout">
    <main>
      <div class="categories-bar">
        <a href="${baseUrl}/" class="cat-chip active">📋 الكل</a>
        <a href="${baseUrl}/category/${encodeURIComponent('الدعم والحماية الاجتماعية')}" class="cat-chip"><span class="cat-dot" style="background:#10b981"></span>الدعم الاجتماعي</a>
        <a href="${baseUrl}/category/${encodeURIComponent('مباريات التوظيف والتدريب')}" class="cat-chip"><span class="cat-dot" style="background:#6366f1"></span>التوظيف</a>
        <a href="${baseUrl}/category/${encodeURIComponent('الوثائق الإدارية والتأشيرات')}" class="cat-chip"><span class="cat-dot" style="background:#f59e0b"></span>الوثائق</a>
        <a href="${baseUrl}/category/${encodeURIComponent('المقاول الصغير والعمل الحر')}" class="cat-chip"><span class="cat-dot" style="background:#ec4899"></span>ريادة الأعمال</a>
      </div>

      ${featuredPost ? `
      <a href="${baseUrl}/article/${featuredPost.id}" class="featured-post animate-in">
        ${featuredPost.image ? `
        <div class="featured-post-image">
          <img src="${baseUrl}/image/${featuredPost.id}" alt="${featuredPost.imageAlt || featuredPost.title}" loading="eager" width="600" height="250">
          <div class="overlay"></div>
        </div>` : ''}
        <div class="featured-post-content">
          <div class="featured-badge">⭐ مقال مميز</div>
          <h2>${featuredPost.title}</h2>
          <p>${featuredPost.description || ''}</p>
          <div class="featured-meta">
            <span>📅 ${featuredPost.date}</span>
            <span>📂 ${featuredPost.category}</span>
            <span>⏱️ ${featuredPost.readTime || 3} دقائق</span>
            <span>👁️ ${featuredPost.views || 0}</span>
          </div>
        </div>
      </a>` : ''}

      <div class="ad-slot ad-slot-inline"><!-- AdSense In-article --></div>

      <div class="posts-grid">
        ${otherPosts.length === 0 ? `
          <div style="text-align:center;padding:50px 20px;">
            <svg viewBox="0 0 24 24" width="60" height="60" fill="var(--gray-300)" style="margin-bottom:12px"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
            <h3 style="color:var(--gray-500);margin-bottom:8px">جاري تحضير المحتوى...</h3>
            <p style="color:var(--gray-400);font-size:13px">سيتم نشر المقالات تلقائياً قريباً</p>
          </div>
        ` : otherPosts.map((p, i) => `
          <a href="${baseUrl}/article/${p.id}" class="post-card animate-in delay-${(i % 4) + 1}">
            ${p.image ? `<img class="post-card-image" src="${baseUrl}/image/${p.id}" alt="${p.imageAlt || p.title}" loading="lazy" width="600" height="200">` : ''}
            <div class="post-card-inner">
              <div class="post-card-header">
                <span class="post-badge" style="background:${p.categoryColor || '#0f4c81'}12;color:${p.categoryColor || '#0f4c81'}">
                  <span class="cat-dot" style="background:${p.categoryColor || '#0f4c81'}"></span>
                  ${p.category}
                </span>
                <span style="font-size:11px;color:var(--gray-400)">⏱️ ${p.readTime || 3} د</span>
              </div>
              <h3>${p.title}</h3>
              <p class="post-excerpt">${p.description || ''}</p>
              <div class="post-footer">
                <span>📅 ${p.date}</span>
                <span class="views-count"><svg viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>${p.views || 0}</span>
                <span class="read-more">اقرأ المزيد ←</span>
              </div>
            </div>
          </a>
          ${(i + 1) % 3 === 0 ? '<div class="ad-slot ad-slot-inline"><!-- AdSense In-feed --></div>' : ''}
        `).join('')}
      </div>
    </main>
    ${getSidebar(posts, baseUrl)}
  </div>
  ${getFooter(baseUrl)}
</body>
</html>`;
}

// ===== صفحة المقال =====
function generateArticlePage(post, allPosts, baseUrl) {
  const relatedPosts = allPosts.filter(p => p.category === post.category && p.id !== post.id).slice(0, 4);
  const faqItems = extractFAQ(post.content);
  const shareUrl = encodeURIComponent(`${baseUrl}/article/${post.id}`);
  const shareTitle = encodeURIComponent(post.title);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description || '',
    "datePublished": post.dateISO,
    "dateModified": post.dateISO,
    "author": { "@type": "Organization", "name": "بوابة الخدمات الرقمية", "url": baseUrl },
    "publisher": { "@type": "Organization", "name": "بوابة الخدمات الرقمية", "url": baseUrl, "logo": { "@type": "ImageObject", "url": baseUrl + "/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": `${baseUrl}/article/${post.id}` },
    "image": post.image ? `${baseUrl}/image/${post.id}` : undefined,
    "articleSection": post.category,
    "inLanguage": "ar",
    "keywords": post.keywords,
    "wordCount": post.wordCount
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "الرئيسية", "item": baseUrl },
      { "@type": "ListItem", "position": 2, "name": post.category, "item": `${baseUrl}/category/${encodeURIComponent(post.category)}` },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": `${baseUrl}/article/${post.id}` }
    ]
  };

  let faqSchema = '';
  if (faqItems.length > 0) {
    faqSchema = `<script type="application/ld+json">${JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqItems.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } }))
    })}</script>`;
  }

  return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>${post.title} | بوابة الخدمات الرقمية 2026</title>
  <meta name="description" content="${post.description || ''}">
  <meta name="keywords" content="${post.keywords || ''}">
  <meta name="author" content="بوابة الخدمات الرقمية">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
  <meta name="googlebot" content="index, follow">
  <link rel="canonical" href="${baseUrl}/article/${post.id}">
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="بوابة الخدمات الرقمية">
  <meta property="og:title" content="${post.title}">
  <meta property="og:description" content="${post.description || ''}">
  <meta property="og:url" content="${baseUrl}/article/${post.id}">
  <meta property="og:locale" content="ar_MA">
  ${post.image ? `<meta property="og:image" content="${baseUrl}/image/${post.id}">
  <meta property="og:image:width" content="1024">
  <meta property="og:image:height" content="576">
  <meta property="og:image:alt" content="${post.imageAlt || post.title}">` : ''}
  <meta property="article:published_time" content="${post.dateISO}">
  <meta property="article:section" content="${post.category}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${post.title}">
  <meta name="twitter:description" content="${post.description || ''}">
  ${post.image ? `<meta name="twitter:image" content="${baseUrl}/image/${post.id}">
  <meta name="twitter:image:alt" content="${post.imageAlt || post.title}">` : ''}
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap" rel="stylesheet">
  <script type="application/ld+json">${JSON.stringify(articleSchema)}</script>
  <script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>
  ${faqSchema}
  ${getSharedStyles()}
</head>
<body>
  ${getHeader(baseUrl, allPosts)}

  <div class="ad-slot-header"><div class="ad-slot"><!-- AdSense --></div></div>

  <div class="article-container">
    <article class="article-main" itemscope itemtype="https://schema.org/Article">
      ${post.image ? `<img class="article-hero-image" src="${baseUrl}/image/${post.id}" alt="${post.imageAlt || post.title}" width="1024" height="350" loading="eager" itemprop="image">` : ''}
      <div class="article-body">
        <nav class="breadcrumb" aria-label="مسار التنقل">
          <a href="${baseUrl}/">🏠 الرئيسية</a>
          <svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="var(--gray-400)"/></svg>
          <a href="${baseUrl}/category/${encodeURIComponent(post.category)}">${post.category}</a>
          <svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="var(--gray-400)"/></svg>
          <span>${post.title.substring(0, 40)}...</span>
        </nav>
        <header class="article-header">
          <span class="post-badge" style="background:${post.categoryColor || '#0f4c81'}12;color:${post.categoryColor || '#0f4c81'};margin-bottom:12px;display:inline-flex">
            <span class="cat-dot" style="background:${post.categoryColor || '#0f4c81'}"></span>
            ${post.category}
          </span>
          <h1 class="article-title" itemprop="headline">${post.title}</h1>
          <div class="article-meta">
            <span itemprop="datePublished" content="${post.dateISO}">📅 ${post.date}</span>
            <span>⏱️ ${post.readTime || 3} دقائق قراءة</span>
            <span>📝 ${post.wordCount || 0} كلمة</span>
            <span>👁️ ${post.views || 0} مشاهدة</span>
            <span itemprop="author" itemscope itemtype="https://schema.org/Organization">
              <meta itemprop="name" content="بوابة الخدمات الرقمية">✍️ فريق التحرير
            </span>
          </div>
        </header>

        <div class="ad-slot ad-slot-inline"><!-- AdSense Before Content --></div>

        <div class="article-content" itemprop="articleBody">
          ${post.content}
        </div>

        <div class="ad-slot ad-slot-inline"><!-- AdSense After Content --></div>

        <div class="share-bar">
          <span>📤 شارك المقال:</span>
          <a href="https://www.facebook.com/sharer/sharer.php?u=${shareUrl}" target="_blank" rel="noopener noreferrer" class="share-btn share-fb">📘 فيسبوك</a>
          <a href="https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}" target="_blank" rel="noopener noreferrer" class="share-btn share-tw">🐦 تويتر</a>
          <a href="https://wa.me/?text=${shareTitle}%20${shareUrl}" target="_blank" rel="noopener noreferrer" class="share-btn share-wa">💬 واتساب</a>
          <a href="https://t.me/share/url?url=${shareUrl}&text=${shareTitle}" target="_blank" rel="noopener noreferrer" class="share-btn share-tg">✈️ تلغرام</a>
          <a href="https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}" target="_blank" rel="noopener noreferrer" class="share-btn share-ln">💼 لينكدإن</a>
        </div>

        ${relatedPosts.length > 0 ? `
        <div class="related-posts">
          <h3>📚 مقالات ذات صلة</h3>
          <div class="related-grid">
            ${relatedPosts.map(rp => `
              <a href="${baseUrl}/article/${rp.id}" class="related-card">
                <h4>${rp.title}</h4>
                <span>📅 ${rp.date} · 👁️ ${rp.views || 0}</span>
              </a>
            `).join('')}
          </div>
        </div>` : ''}
      </div>
    </article>
    ${getSidebar(allPosts, baseUrl)}
  </div>
  ${getFooter(baseUrl)}
</body>
</html>`;
}

// ===== صفحة التصنيف =====
function generateCategoryPage(catName, filteredPosts, allPosts, baseUrl) {
  const catColors = { "الدعم والحماية الاجتماعية": "#10b981", "مباريات التوظيف والتدريب": "#6366f1", "الوثائق الإدارية والتأشيرات": "#f59e0b", "المقاول الصغير والعمل الحر": "#ec4899" };
  const color = catColors[catName] || '#0f4c81';

  return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>${catName} | بوابة الخدمات الرقمية 2026</title>
  <meta name="description" content="جميع المقالات والشروحات في تصنيف ${catName} - بوابة الخدمات الرقمية المغربية 2026">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${baseUrl}/category/${encodeURIComponent(catName)}">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${catName} | بوابة الخدمات الرقمية">
  <meta property="og:url" content="${baseUrl}/category/${encodeURIComponent(catName)}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap" rel="stylesheet">
  <script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org", "@type": "CollectionPage",
    "name": catName, "url": `${baseUrl}/category/${encodeURIComponent(catName)}`,
    "description": `جميع المقالات في تصنيف ${catName}`
  })}</script>
  ${getSharedStyles()}
</head>
<body>
  ${getHeader(baseUrl, allPosts)}
  <section class="hero" style="padding:35px 20px;background:linear-gradient(135deg,${color}dd,${color}99)">
    <div class="hero-content">
      <h2>📂 ${catName}</h2>
      <p>${filteredPosts.length} مقال متوفر في هذا التصنيف</p>
    </div>
  </section>
  <div class="main-layout">
    <main>
      <nav class="breadcrumb" style="margin-bottom:18px">
        <a href="${baseUrl}/">🏠 الرئيسية</a>
        <svg viewBox="0 0 24 24" width="14" height="14"><path fill="var(--gray-400)" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
        <span>${catName}</span>
      </nav>
      <div class="ad-slot"><!-- AdSense --></div>
      <div class="posts-grid">
        ${filteredPosts.length === 0 ? `
          <div style="text-align:center;padding:50px">
            <h3 style="color:var(--gray-500)">لا توجد مقالات بعد في هذا التصنيف</h3>
            <p style="color:var(--gray-400);margin-top:8px"><a href="${baseUrl}/" style="color:var(--primary)">← العودة للرئيسية</a></p>
          </div>
        ` : filteredPosts.map((p, i) => `
          <a href="${baseUrl}/article/${p.id}" class="post-card animate-in delay-${(i % 4) + 1}">
            ${p.image ? `<img class="post-card-image" src="${baseUrl}/image/${p.id}" alt="${p.imageAlt || p.title}" loading="lazy" width="600" height="200">` : ''}
            <div class="post-card-inner">
              <div class="post-card-header">
                <span class="post-badge" style="background:${color}12;color:${color}"><span class="cat-dot" style="background:${color}"></span>${p.category}</span>
              </div>
              <h3>${p.title}</h3>
              <p class="post-excerpt">${p.description || ''}</p>
              <div class="post-footer">
                <span>📅 ${p.date}</span>
                <span>👁️ ${p.views || 0}</span>
                <span class="read-more">اقرأ المزيد ←</span>
              </div>
            </div>
          </a>
          ${(i + 1) % 3 === 0 ? '<div class="ad-slot"><!-- AdSense --></div>' : ''}
        `).join('')}
      </div>
    </main>
    ${getSidebar(allPosts, baseUrl)}
  </div>
  ${getFooter(baseUrl)}
</body>
</html>`;
}

// ==========================================
//  الصفحات المطلوبة من جوجل أدسنس
// ==========================================

// ===== سياسة الخصوصية =====
function generatePrivacyPage(baseUrl, posts) {
  return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>سياسة الخصوصية | بوابة الخدمات الرقمية</title>
  <meta name="description" content="سياسة الخصوصية لموقع بوابة الخدمات الرقمية - كيف نجمع ونستخدم ونحمي بياناتك الشخصية">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${baseUrl}/privacy">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap" rel="stylesheet">
  ${getSharedStyles()}
</head>
<body>
  ${getHeader(baseUrl, posts)}
  <div class="static-page">
    <div class="static-content">
      <h1>🔒 سياسة الخصوصية</h1>
      <p><strong>آخر تحديث:</strong> ${new Date().toLocaleDateString('ar-MA', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      <p>نحن في <strong>بوابة الخدمات الرقمية</strong> نقدر خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح هذه السياسة كيفية جمع المعلومات واستخدامها وحمايتها عند زيارتك لموقعنا.</p>

      <h2>1. المعلومات التي نجمعها</h2>
      <p>قد نجمع الأنواع التالية من المعلومات:</p>
      <ul>
        <li><strong>معلومات التصفح:</strong> عنوان IP، نوع المتصفح، صفحات الزيارة، مدة الزيارة، مصدر الزيارة</li>
        <li><strong>ملفات تعريف الارتباط (Cookies):</strong> نستخدم ملفات الكوكيز لتحسين تجربة المستخدم وتحليل حركة المرور</li>
        <li><strong>معلومات الاتصال:</strong> في حال تواصلت معنا عبر نموذج الاتصال (الاسم، البريد الإلكتروني، الرسالة)</li>
        <li><strong>بيانات النشرة البريدية:</strong> البريد الإلكتروني في حال الاشتراك في النشرة البريدية</li>
      </ul>

      <h2>2. كيفية استخدام المعلومات</h2>
      <p>نستخدم المعلومات المجمعة للأغراض التالية:</p>
      <ul>
        <li>تحسين محتوى الموقع وتجربة المستخدم</li>
        <li>تحليل إحصائيات الزيارات ومعرفة المحتوى الأكثر اهتماماً</li>
        <li>إرسال التحديثات والمحتوى الجديد للمشتركين في النشرة البريدية</li>
        <li>الرد على استفسارات الزوار عبر نموذج الاتصال</li>
        <li>عرض الإعلانات المناسبة عبر Google AdSense</li>
      </ul>

      <h2>3. Google AdSense والإعلانات</h2>
      <p>يستخدم موقعنا خدمة <strong>Google AdSense</strong> لعرض الإعلانات. تستخدم Google ملفات تعريف الارتباط لعرض إعلانات مبنية على زياراتك السابقة لهذا الموقع ومواقع أخرى.</p>
      <ul>
        <li>يمكنك إلغاء الاشتراك في الإعلانات المخصصة عبر <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">إعدادات إعلانات Google</a></li>
        <li>لمزيد من المعلومات، يرجى زيارة <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">سياسة خصوصية Google</a></li>
      </ul>

      <h2>4. Google Analytics</h2>
      <p>قد نستخدم Google Analytics لتحليل حركة مرور الموقع. هذه الخدمة تجمع بيانات مجهولة الهوية حول كيفية تفاعل الزوار مع الموقع.</p>

      <h2>5. ملفات تعريف الارتباط (Cookies)</h2>
      <p>نستخدم ملفات الكوكيز لـ:</p>
      <ul>
        <li>تذكر تفضيلاتك وإعداداتك</li>
        <li>تحليل حركة المرور على الموقع</li>
        <li>عرض إعلانات ملائمة لاهتماماتك</li>
        <li>تحسين أداء الموقع وسرعته</li>
      </ul>
      <p>يمكنك التحكم في ملفات الكوكيز أو حذفها من إعدادات متصفحك في أي وقت.</p>

      <h2>6. مشاركة المعلومات مع أطراف ثالثة</h2>
      <p>لا نبيع أو نؤجر بياناتك الشخصية لأي طرف ثالث. قد نشارك معلومات مجهولة الهوية مع:</p>
      <ul>
        <li>Google (عبر AdSense و Analytics)</li>
        <li>مزودي خدمات الاستضافة (Cloudflare)</li>
      </ul>

      <h2>7. حماية البيانات</h2>
      <p>نتخذ تدابير أمنية مناسبة لحماية بياناتك من الوصول غير المصرح به أو التعديل أو الكشف أو التدمير، بما في ذلك استخدام بروتوكول HTTPS والتشفير.</p>

      <h2>8. حقوق المستخدم</h2>
      <p>يحق لك:</p>
      <ul>
        <li>طلب الوصول إلى بياناتك الشخصية</li>
        <li>طلب تصحيح أو حذف بياناتك</li>
        <li>الاعتراض على معالجة بياناتك</li>
        <li>إلغاء الاشتراك في النشرة البريدية في أي وقت</li>
      </ul>

      <h2>9. خصوصية الأطفال</h2>
      <p>موقعنا غير موجه للأطفال تحت سن 13 عاماً ولا نجمع عن قصد معلومات شخصية من الأطفال.</p>

      <h2>10. التغييرات على هذه السياسة</h2>
      <p>قد نقوم بتحديث سياسة الخصوصية من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة مع تحديث تاريخ "آخر تحديث".</p>

      <h2>11. اتصل بنا</h2>
      <p>إذا كان لديك أي أسئلة حول سياسة الخصوصية، يمكنك <a href="${baseUrl}/contact">التواصل معنا</a>.</p>
    </div>
  </div>
  ${getFooter(baseUrl)}
</body>
</html>`;
}

// ===== شروط الاستخدام =====
function generateTermsPage(baseUrl, posts) {
  return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>شروط الاستخدام | بوابة الخدمات الرقمية</title>
  <meta name="description" content="شروط وأحكام استخدام موقع بوابة الخدمات الرقمية - الشروط والأحكام التي تحكم استخدامك للموقع">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${baseUrl}/terms">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap" rel="stylesheet">
  ${getSharedStyles()}
</head>
<body>
  ${getHeader(baseUrl, posts)}
  <div class="static-page">
    <div class="static-content">
      <h1>📜 شروط الاستخدام</h1>
      <p><strong>آخر تحديث:</strong> ${new Date().toLocaleDateString('ar-MA', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      <p>باستخدامك لموقع <strong>بوابة الخدمات الرقمية</strong>، فإنك توافق على الالتزام بهذه الشروط والأحكام. يرجى قراءتها بعناية قبل استخدام الموقع.</p>

      <h2>1. قبول الشروط</h2>
      <p>باستخدامك لهذا الموقع، فإنك توافق على جميع الشروط والأحكام المذكورة هنا. إذا كنت لا توافق على أي من هذه الشروط، يرجى التوقف عن استخدام الموقع فوراً.</p>

      <h2>2. طبيعة المحتوى</h2>
      <ul>
        <li>المحتوى المنشور على الموقع هو لأغراض تعليمية وإرشادية فقط</li>
        <li>لا يُعد المحتوى بديلاً عن الاستشارة المهنية أو القانونية</li>
        <li>نحرص على دقة المعلومات لكن لا نضمن خلوها من الأخطاء</li>
        <li>المعلومات قد تتغير بسبب تحديثات القوانين والأنظمة</li>
      </ul>

      <h2>3. حقوق الملكية الفكرية</h2>
      <p>جميع المحتويات المنشورة على الموقع (النصوص، الصور، التصميم، الشعار) هي ملك لبوابة الخدمات الرقمية ومحمية بموجب قوانين حقوق الملكية الفكرية.</p>
      <ul>
        <li>يُمنع نسخ أو إعادة نشر المحتوى دون إذن كتابي مسبق</li>
        <li>يُسمح بمشاركة روابط المقالات على وسائل التواصل الاجتماعي</li>
        <li>يُسمح بالاقتباس الجزئي مع ذكر المصدر والرابط</li>
      </ul>

      <h2>4. استخدام الموقع</h2>
      <p>يلتزم المستخدم بما يلي:</p>
      <ul>
        <li>عدم استخدام الموقع لأي غرض غير قانوني</li>
        <li>عدم محاولة اختراق أو تعطيل الموقع</li>
        <li>عدم نشر تعليقات مسيئة أو مضللة</li>
        <li>عدم استخدام روبوتات أو برامج آلية لجمع البيانات</li>
      </ul>

      <h2>5. الروابط الخارجية</h2>
      <p>قد يحتوي الموقع على روابط لمواقع خارجية. نحن لسنا مسؤولين عن محتوى أو سياسات الخصوصية لهذه المواقع.</p>

      <h2>6. الإعلانات</h2>
      <p>يحتوي الموقع على إعلانات من Google AdSense. نحن لسنا مسؤولين عن محتوى هذه الإعلانات أو المنتجات والخدمات المُعلن عنها.</p>

      <h2>7. تحديد المسؤولية</h2>
      <p>لا نتحمل أي مسؤولية عن أي أضرار مباشرة أو غير مباشرة ناتجة عن استخدام المعلومات المنشورة على الموقع. المستخدم يتحمل المسؤولية الكاملة عن قراراته.</p>

      <h2>8. التعديلات</h2>
      <p>نحتفظ بالحق في تعديل هذه الشروط في أي وقت. التعديلات تدخل حيز التنفيذ فور نشرها على هذه الصفحة.</p>

      <h2>9. القانون المعمول به</h2>
      <p>تخضع هذه الشروط للقوانين المعمول بها في المملكة المغربية.</p>

      <h2>10. الاتصال</h2>
      <p>لأي استفسار حول هذه الشروط، يرجى <a href="${baseUrl}/contact">التواصل معنا</a>.</p>
    </div>
  </div>
  ${getFooter(baseUrl)}
</body>
</html>`;
}

// ===== صفحة اتصل بنا =====
function generateContactPage(baseUrl, posts) {
  return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>اتصل بنا | بوابة الخدمات الرقمية</title>
  <meta name="description" content="تواصل معنا - بوابة الخدمات الرقمية. نرحب باستفساراتكم واقتراحاتكم وملاحظاتكم">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${baseUrl}/contact">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap" rel="stylesheet">
  ${getSharedStyles()}
</head>
<body>
  ${getHeader(baseUrl, posts)}
  <div class="static-page">
    <div class="static-content">
      <h1>📧 اتصل بنا</h1>
      <p>نرحب بتواصلكم معنا! سواء كان لديكم استفسار، اقتراح، شكوى، أو ترغبون في التعاون معنا، لا تترددوا في التواصل عبر النموذج أدناه أو عبر وسائل التواصل الأخرى.</p>

      <h2>📋 نموذج التواصل</h2>
      <form class="contact-form" onsubmit="event.preventDefault();alert('شكراً لتواصلك معنا! سنرد عليك في أقرب وقت.')">
        <input type="text" placeholder="الاسم الكامل *" required aria-label="الاسم الكامل">
        <input type="email" placeholder="البريد الإلكتروني *" required aria-label="البريد الإلكتروني">
        <input type="text" placeholder="الموضوع *" required aria-label="الموضوع">
        <textarea placeholder="رسالتك... *" required aria-label="الرسالة"></textarea>
        <button type="submit">📤 إرسال الرسالة</button>
      </form>

      <h2>📞 وسائل التواصل الأخرى</h2>
      <ul>
        <li><strong>📧 البريد الإلكتروني:</strong> contact@leguide-digital.com</li>
        <li><strong>📘 فيسبوك:</strong> بوابة الخدمات الرقمية</li>
        <li><strong>✈️ تلغرام:</strong> @leguide_digital</li>
      </ul>

      <h2>⏰ أوقات الرد</h2>
      <p>نحرص على الرد على جميع الرسائل خلال <strong>24 إلى 48 ساعة</strong> من أيام العمل. قد يتأخر الرد في عطلة نهاية الأسبوع والأعياد الرسمية.</p>

      <h2>💡 ملاحظات مهمة</h2>
      <ul>
        <li>نرحب باقتراحاتكم لمواضيع جديدة نرغب في تغطيتها</li>
        <li>إذا لاحظتم أي خطأ في المعلومات المنشورة، يرجى إعلامنا لتصحيحه</li>
        <li>للشراكات الإعلانية والتعاون المهني، يرجى ذكر ذلك في الموضوع</li>
        <li>لطلبات حذف المحتوى (DMCA)، يرجى زيارة <a href="${baseUrl}/dmca">صفحة DMCA</a></li>
      </ul>
    </div>
  </div>
  ${getFooter(baseUrl)}
</body>
</html>`;
}

// ===== صفحة من نحن =====
function generateAboutPage(baseUrl, posts) {
  const postCount = posts.length;
  const catCount = [...new Set(posts.map(p => p.category))].length;

  return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>من نحن | بوابة الخدمات الرقمية</title>
  <meta name="description" content="تعرف على بوابة الخدمات الرقمية - منصة متخصصة في تبسيط الإجراءات الإدارية والخدمات الحكومية الرقمية بالمغرب">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${baseUrl}/about">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap" rel="stylesheet">
  ${getSharedStyles()}
</head>
<body>
  ${getHeader(baseUrl, posts)}
  <div class="static-page">
    <div class="static-content">
      <h1>🇲🇦 من نحن</h1>

      <h2>رؤيتنا</h2>
      <p><strong>بوابة الخدمات الرقمية</strong> هي منصة إلكترونية مستقلة تأسست بهدف <strong>تبسيط الإجراءات الإدارية</strong> ومساعدة المواطن المغربي في الوصول إلى المعلومات المتعلقة بالخدمات الحكومية الرقمية بسهولة ويسر.</p>

      <h2>مهمتنا</h2>
      <p>نسعى لأن نكون <strong>المرجع الأول والأشمل</strong> في مجال الخدمات الرقمية الحكومية بالمغرب من خلال:</p>
      <ul>
        <li>📝 نشر شروحات مبسطة ومفصلة لجميع الإجراءات الإدارية</li>
        <li>🔄 تحديث المعلومات بشكل مستمر لمواكبة المستجدات</li>
        <li>📊 تغطية شاملة لجميع القطاعات (الدعم الاجتماعي، التوظيف، الوثائق، ريادة الأعمال)</li>
        <li>🎯 تقديم معلومات دقيقة ومحدثة يمكن الاعتماد عليها</li>
      </ul>

      <h2>ما يميزنا</h2>
      <ul>
        <li><strong>المحتوى الحصري:</strong> جميع مقالاتنا مكتوبة بشكل احترافي وحصري</li>
        <li><strong>التحديث المستمر:</strong> نحدث محتوانا بانتظام لمواكبة أحدث التغييرات</li>
        <li><strong>البساطة:</strong> نشرح الإجراءات المعقدة بأسلوب مبسط يفهمه الجميع</li>
        <li><strong>الشمولية:</strong> نغطي ${catCount} تصنيفات رئيسية بأكثر من ${postCount} مقال</li>
        <li><strong>الاستقلالية:</strong> موقع مستقل غير تابع لأي جهة حكومية</li>
      </ul>

      <h2>أرقام وإحصائيات</h2>
      <ul>
        <li>📚 أكثر من <strong>${postCount}</strong> مقال ودليل شامل</li>
        <li>📂 <strong>${catCount}</strong> تصنيفات متخصصة</li>
        <li>🔄 تحديث <strong>يومي</strong> للمحتوى</li>
        <li>👥 آلاف الزوار يومياً</li>
      </ul>

      <h2>فريق العمل</h2>
      <p>يتكون فريقنا من متخصصين في مجال التقنية والخدمات الإدارية، يعملون على توفير أفضل محتوى ممكن للمواطن المغربي.</p>

      <h2>تواصل معنا</h2>
      <p>نرحب باقتراحاتكم وملاحظاتكم. لا تترددوا في <a href="${baseUrl}/contact">التواصل معنا</a> لأي استفسار أو اقتراح.</p>
    </div>
  </div>
  ${getFooter(baseUrl)}
</body>
</html>`;
}

// ===== صفحة DMCA =====
function generateDMCAPage(baseUrl, posts) {
  return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>سياسة DMCA | بوابة الخدمات الرقمية</title>
  <meta name="description" content="سياسة DMCA لحقوق الملكية الفكرية - بوابة الخدمات الرقمية">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${baseUrl}/dmca">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap" rel="stylesheet">
  ${getSharedStyles()}
</head>
<body>
  ${getHeader(baseUrl, posts)}
  <div class="static-page">
    <div class="static-content">
      <h1>⚖️ سياسة حقوق الملكية الفكرية (DMCA)</h1>
      <p><strong>آخر تحديث:</strong> ${new Date().toLocaleDateString('ar-MA', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

      <h2>التزامنا بحماية حقوق الملكية الفكرية</h2>
      <p>نحن في <strong>بوابة الخدمات الرقمية</strong> نحترم حقوق الملكية الفكرية للآخرين ونلتزم بالاستجابة لأي إشعارات تتعلق بانتهاك حقوق النشر وفقاً لقانون الألفية الرقمية لحقوق النشر (DMCA).</p>

      <h2>إذا كنت تعتقد أن حقوقك قد انتُهكت</h2>
      <p>إذا كنت تعتقد أن محتوى منشوراً على موقعنا ينتهك حقوق النشر الخاصة بك، يرجى إرسال إشعار يتضمن المعلومات التالية:</p>
      <ul>
        <li>وصف دقيق للعمل المحمي بحقوق النشر الذي تعتقد أنه تم انتهاكه</li>
        <li>رابط المحتوى المخالف على موقعنا</li>
        <li>رابط المحتوى الأصلي (إن وُجد)</li>
        <li>اسمك الكامل ومعلومات الاتصال (البريد الإلكتروني، رقم الهاتف)</li>
        <li>بيان بأنك تعتقد بحسن نية أن الاستخدام المتنازع عليه غير مصرح به</li>
        <li>بيان بأن المعلومات الواردة في الإشعار دقيقة، وتحت طائلة العقوبة القانونية</li>
        <li>توقيعك الإلكتروني أو المادي</li>
      </ul>

      <h2>إجراءاتنا عند تلقي إشعار DMCA</h2>
      <ul>
        <li>سنقوم بمراجعة الإشعار خلال <strong>48 ساعة عمل</strong></li>
        <li>إذا ثبتت صحة الادعاء، سنزيل المحتوى المخالف فوراً</li>
        <li>سنُخطر الطرف الذي نشر المحتوى (إن أمكن)</li>
        <li>في حالة تكرار المخالفات، سنتخذ إجراءات إضافية</li>
      </ul>

      <h2>الإشعار المضاد</h2>
      <p>إذا تم حذف محتوى خاص بك وتعتقد أن الحذف كان خاطئاً، يمكنك تقديم إشعار مضاد يتضمن:</p>
      <ul>
        <li>وصف المحتوى الذي تم حذفه وموقعه السابق</li>
        <li>بيان بأنك تعتقد بحسن نية أن المحتوى تم حذفه بالخطأ</li>
        <li>اسمك ومعلومات الاتصال وموافقتك على الخضوع للاختصاص القضائي</li>
      </ul>

      <h2>كيفية إرسال إشعار DMCA</h2>
      <p>يمكنك إرسال إشعارات DMCA عبر <a href="${baseUrl}/contact">صفحة الاتصال</a> مع ذكر "DMCA" في عنوان الرسالة.</p>
    </div>
  </div>
  ${getFooter(baseUrl)}
</body>
</html>`;
}

// ===== صفحة إخلاء المسؤولية =====
function generateDisclaimerPage(baseUrl, posts) {
  return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>إخلاء المسؤولية | بوابة الخدمات الرقمية</title>
  <meta name="description" content="إخلاء المسؤولية لموقع بوابة الخدمات الرقمية - تنبيهات وتحذيرات مهمة للمستخدمين">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${baseUrl}/disclaimer">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap" rel="stylesheet">
  ${getSharedStyles()}
</head>
<body>
  ${getHeader(baseUrl, posts)}
  <div class="static-page">
    <div class="static-content">
      <h1>⚠️ إخلاء المسؤولية</h1>
      <p><strong>آخر تحديث:</strong> ${new Date().toLocaleDateString('ar-MA', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

      <h2>طبيعة المحتوى</h2>
      <p>جميع المعلومات المنشورة على <strong>بوابة الخدمات الرقمية</strong> هي لأغراض <strong>تعليمية وإرشادية فقط</strong>. نبذل قصارى جهدنا لتقديم معلومات دقيقة ومحدثة، لكن لا نضمن صحة أو اكتمال أو حداثة جميع المعلومات في جميع الأوقات.</p>

      <h2>ليس استشارة مهنية</h2>
      <p>المحتوى المنشور على الموقع <strong>لا يُعد بديلاً</strong> عن:</p>
      <ul>
        <li>الاستشارة القانونية المتخصصة</li>
        <li>المعلومات الرسمية من الجهات الحكومية المعنية</li>
        <li>الاستشارة المهنية أو المالية</li>
        <li>التوجيه الشخصي من الجهات المختصة</li>
      </ul>

      <h2>دقة المعلومات</h2>
      <ul>
        <li>المعلومات المنشورة قد تتغير بسبب تحديثات القوانين والأنظمة</li>
        <li>ننصح دائماً بالتحقق من المعلومات من المصادر الرسمية</li>
        <li>قد تحتوي بعض المقالات على معلومات قد تكون قد تغيرت بعد تاريخ النشر</li>
        <li>الروابط الخارجية قد تصبح غير صالحة مع مرور الوقت</li>
      </ul>

      <h2>تحديد المسؤولية</h2>
      <p>لا نتحمل أي مسؤولية عن:</p>
      <ul>
        <li>أي أضرار مباشرة أو غير مباشرة ناتجة عن استخدام المعلومات المنشورة</li>
        <li>القرارات المتخذة بناءً على محتوى الموقع</li>
        <li>أي خسائر مالية أو أضرار أخرى</li>
        <li>انقطاع الخدمة أو عدم توفر الموقع</li>
        <li>محتوى المواقع الخارجية المرتبطة</li>
      </ul>

      <h2>الروابط الخارجية</h2>
      <p>قد يحتوي الموقع على روابط لمواقع خارجية. هذه الروابط مقدمة لراحة المستخدم فقط، ولا نتحمل مسؤولية محتوى هذه المواقع أو سياساتها.</p>

      <h2>الإعلانات</h2>
      <p>يحتوي الموقع على إعلانات من أطراف ثالثة (Google AdSense). نحن لسنا مسؤولين عن محتوى الإعلانات أو المنتجات والخدمات المعلن عنها.</p>

      <h2>استقلالية الموقع</h2>
      <p><strong>بوابة الخدمات الرقمية</strong> هي منصة مستقلة وغير تابعة لأي جهة حكومية. الآراء المعبر عنها هي آراء فريق التحرير ولا تمثل بالضرورة أي جهة رسمية.</p>

      <h2>الموافقة</h2>
      <p>باستخدامك للموقع، فإنك توافق على شروط إخلاء المسؤولية هذه. للمزيد من التفاصيل، يرجى الاطلاع على <a href="${baseUrl}/terms">شروط الاستخدام</a> و<a href="${baseUrl}/privacy">سياسة الخصوصية</a>.</p>
    </div>
  </div>
  ${getFooter(baseUrl)}
</body>
</html>`;
}
