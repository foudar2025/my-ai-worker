export default {
  async scheduled(event, env, ctx) {
    const categories = [
      {
        name: "الدعم والحماية الاجتماعية",
        color: "#10b981",
        topics: [
          { title: "التسجيل في أمو تضامن AMO 2026: الدليل الشامل خطوة بخطوة", keywords: "أمو تضامن, التسجيل في AMO, التغطية الصحية المغرب 2026, CNSS" },
          { title: "تحديث بيانات السجل الاجتماعي الموحد RSU 2026: كل ما تحتاج معرفته", keywords: "السجل الاجتماعي الموحد, RSU المغرب, تحديث البيانات, الدعم الاجتماعي" },
          { title: "شروط الاستفادة من الدعم المباشر للسكن 2026 وطريقة التسجيل", keywords: "دعم السكن المغرب 2026, الدعم المباشر للسكن, شروط الاستفادة" },
          { title: "كيفية صرف تعويضات CNSS للمغاربة: الشروط والإجراءات الكاملة", keywords: "تعويضات CNSS, الضمان الاجتماعي, صرف التعويضات" },
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
          { title: "مباراة التعليم بالتعاقد 2026: دليل التحضير والنجاح المضمون", keywords: "مباراة التعليم بالتعاقد, أساتذة التعاقد, التحضير للمباراة" },
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
          { title: "حجز موعد فيزا شنغن إسبانيا BLS 2026: النصائح والحيل للقبول", keywords: "فيزا شنغن إسبانيا, حجز موعد BLS, تأشيرة أوروبا" },
          { title: "استخراج جواز السفر البيومتري المغربي 2026: الوثائق والثمن", keywords: "جواز السفر البيومتري, استخراج الباسبور, وثائق جواز السفر" },
          { title: "شهادة السكنى الإلكترونية 2026: طريقة الحصول عليها عبر الأنترنت", keywords: "شهادة السكنى, certificat de résidence, الوثائق الإدارية" },
          { title: "عقد الازدياد بالمغرب 2026: النسخة الكاملة وطريقة الطلب", keywords: "عقد الازدياد, acte de naissance, الحالة المدنية" },
          { title: "فيزا فرنسا 2026: حجز موعد TLScontact والوثائق المطلوبة", keywords: "فيزا فرنسا, TLScontact المغرب, تأشيرة فرنسا" }
        ]
      },
      {
        name: "المقاول الذاتي والعمل الحر",
        color: "#ec4899",
        topics: [
          { title: "التسجيل في نظام المقاول الذاتي 2026: الدليل الكامل", keywords: "المقاول الذاتي المغرب, Auto-entrepreneur, التسجيل 2026" },
          { title: "إنشاء شركة SARL بالمغرب 2026: التكلفة والإجراءات القانونية", keywords: "إنشاء شركة SARL, تأسيس شركة, السجل التجاري" },
          { title: "برنامج انطلاقة لتمويل المشاريع 2026: شروط القبول والمبلغ", keywords: "برنامج انطلاقة, تمويل المشاريع, المقاولات الناشئة" },
          { title: "فتح حساب بنكي تجاري بالمغرب 2026: مقارنة البنوك", keywords: "حساب بنكي تجاري, البنوك المغربية, فتح حساب شركة" },
          { title: "الضريبة على القيمة المضافة TVA بالمغرب: دليل المقاول", keywords: "TVA المغرب, الضريبة, التصريح الضريبي" },
          { title: "التجارة الإلكترونية بالمغرب 2026: الإطار القانوني وطريقة البدء", keywords: "التجارة الإلكترونية المغرب, البيع عبر الأنترنت, e-commerce" }
        ]
      }
    ];

    const cat = categories[Math.floor(Math.random() * categories.length)];
    const topic = cat.topics[Math.floor(Math.random() * cat.topics.length)];

    try {
      const prompts = [
        `أنت كاتب محتوى محترف متخصص في الخدمات الإدارية المغربية. اكتب مقدمة احترافية وجذابة من 6 أسطر عن "${topic.title}". اشرح أهمية الموضوع للمواطن المغربي وآخر المستجدات. استخدم الكلمات المفتاحية بشكل طبيعي: ${topic.keywords}. اكتب بأسلوب صحفي بشري مبسط وطبيعي. لا تستخدم عبارات مثل "في هذا المقال" أو "سنتناول". ابدأ مباشرة بالمعلومة المفيدة.`,

        `أنت خبير في الخدمات الإدارية المغربية. اكتب قسمين عن "${topic.title}":

القسم الأول بعنوان "**ما هي هذه الخدمة وأهميتها؟**"
- تعريف دقيق ومفصل بالخدمة
- الجهة المسؤولة عنها
- الفئات المستفيدة بالتفصيل
- أهمية هذه الخدمة في الحياة اليومية
(اكتب 4 فقرات على الأقل)

القسم الثاني بعنوان "**الشروط الكاملة للاستفادة**"
- قائمة مرقمة بجميع الشروط
- شرح كل شرط بوضوح
(اكتب 6 شروط على الأقل)

أسلوب بشري طبيعي بدون تكرار. استخدم: ${topic.keywords}`,

        `أنت مرشد إداري متخصص. اكتب قسمين عن "${topic.title}":

القسم الأول بعنوان "**الوثائق والمستندات المطلوبة**"
- قائمة شاملة بكل الوثائق المطلوبة
- أين يمكن الحصول على كل وثيقة
- نصائح لتجهيز الملف بشكل صحيح
(اكتب 8 عناصر على الأقل)

القسم الثاني بعنوان "**خطوات التسجيل أو الإجراء بالتفصيل**"
- شرح كل خطوة على حدة بالتفصيل الممل
- ذكر المنصات والمواقع الرسمية
- نصائح لتجنب الأخطاء الشائعة في كل خطوة
(اكتب 7 خطوات على الأقل)

أسلوب تعليمي واضح ومبسط.`,

        `أنت مستشار إداري خبير. اكتب ثلاثة أقسام عن "${topic.title}":

القسم الأول بعنوان "**الآجال والمواعيد المهمة**"
- المدة الزمنية لكل إجراء
- التواريخ الهامة والمواعيد النهائية
(فقرتان على الأقل)

القسم الثاني بعنوان "**نصائح ذهبية للمتقدمين**"
- 6 نصائح عملية مرقمة ومفصلة
- كل نصيحة في سطرين على الأقل

القسم الثالث بعنوان "**الأسئلة الشائعة**"
اكتب 4 أسئلة شائعة بهذا التنسيق بالضبط:
سؤال: نص السؤال هنا؟
جواب: نص الجواب المفصل هنا في 2-3 أسطر.

ثم اكتب خاتمة من 3 أسطر تلخص أهم النقاط مع دعوة للعمل.

أسلوب بشري طبيعي ومهني.`
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

      if (!fullContent || fullContent.trim().length < 300) {
        console.error('Content too short');
        return;
      }

      let imageBase64 = null;
      try {
        const imagePrompts = {
          "الدعم والحماية الاجتماعية": "Professional modern flat design illustration of digital government social protection services concept, smartphone showing online registration form, official documents with stamps, digital shield protection icon, green and blue color palette, abstract geometric network connections, clean minimalist corporate infographic style, 4k high quality render, white background elements, technology concept",
          "مباريات التوظيف والتدريب": "Professional modern flat design illustration of career development and education concept, graduation cap floating above laptop computer, digital certificates and achievement badges, open books with bookmarks, blue and purple color scheme, abstract geometric patterns background, clean vector corporate style, 4k high quality render, professional development theme",
          "الوثائق الإدارية والتأشيرات": "Professional modern flat design illustration of official travel documents and administrative papers concept, passport booklet with colorful visa stamps, airplane boarding pass, world globe with flight route lines, official rubber stamps and seals, warm amber gold and navy blue color palette, clean geometric corporate design, 4k high quality render",
          "المقاول الذاتي والعمل الحر": "Professional modern flat design illustration of entrepreneurship and business startup concept, rocket ship launching from laptop screen, rising growth chart graphs, golden coins and currency symbols, business plan documents, glowing lightbulb innovation icon, green and blue gradient colors, abstract geometric background, clean fintech corporate style, 4k high quality render"
        };

        const imgPrompt = (imagePrompts[cat.name] || imagePrompts["الدعم والحماية الاجتماعية"]) + ", absolutely NO humans, NO people, NO person, NO man, NO woman, NO child, NO face, NO hands, NO body parts, NO animals, NO pets, NO creatures, NO living beings";

        const imgRes = await env.AI.run('@cf/stabilityai/stable-diffusion-xl-base-1.0', {
          prompt: imgPrompt,
          negative_prompt: "human, person, people, man, woman, child, baby, face, hand, finger, body, arm, leg, foot, animal, cat, dog, bird, fish, horse, creature, portrait, selfie, crowd, eyes, mouth, nose, ear, hair, skin, realistic human, cartoon human, anime character, humanoid, figurine, doll, mannequin, statue, sculpture, pet, wildlife, insect, mammal, reptile, nsfw, nude, violence, blood, weapon, ugly, deformed, blurry, low quality, watermark, text, logo, signature",
          width: 1024,
          height: 576,
          num_steps: 20
        });

        if (imgRes) {
          const buf = await imgRes.arrayBuffer();
          const bytes = new Uint8Array(buf);
          let binary = '';
          for (let i = 0; i < bytes.length; i++) {
            binary += String.fromCharCode(bytes[i]);
          }
          imageBase64 = btoa(binary);
        }
      } catch (imgErr) {
        console.error('Image generation error:', imgErr);
      }

      const now = new Date();
      const slug = topic.title
        .replace(/[^\u0600-\u06FF\s0-9]/g, '')
        .replace(/\s+/g, '-')
        .substring(0, 80);

      const plainText = fullContent.replace(/\*\*/g, '').replace(/<[^>]*>/g, '').replace(/\n+/g, ' ').trim();
      const description = plainText.substring(0, 155) + '...';
      const wordCount = fullContent.split(/\s+/).length;
      const readTime = Math.max(3, Math.ceil(wordCount / 200));

      const formattedContent = formatArticleContent(fullContent);

      const newPost = {
        id: Date.now(),
        slug: slug,
        category: cat.name,
        categoryColor: cat.color,
        title: topic.title,
        keywords: topic.keywords,
        description: description,
        content: formattedContent,
        image: imageBase64,
        imageAlt: topic.title,
        date: now.toLocaleDateString('ar-MA', { year: 'numeric', month: 'long', day: 'numeric' }),
        dateISO: now.toISOString(),
        readTime: readTime,
        wordCount: wordCount,
        views: Math.floor(Math.random() * 500) + 100
      };

      let posts = [];
      try {
        posts = await env.BLOG_KV.get("posts", { type: "json" }) || [];
      } catch (e) {
        posts = [];
      }

      const alreadyExists = posts.some(p => p.title === newPost.title);
      if (!alreadyExists) {
        posts.unshift(newPost);
        if (posts.length > 60) posts = posts.slice(0, 60);
        await env.BLOG_KV.put("posts", JSON.stringify(posts));

        try {
          const siteUrl = env.SITE_URL || 'https://example.com';
          const articleUrl = siteUrl + '/article/' + newPost.id;
          await Promise.allSettled([
            fetch('https://www.google.com/ping?sitemap=' + encodeURIComponent(siteUrl + '/sitemap.xml')).catch(() => {}),
            fetch('https://www.bing.com/ping?sitemap=' + encodeURIComponent(siteUrl + '/sitemap.xml')).catch(() => {}),
            fetch('https://api.indexnow.org/indexnow', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                host: new URL(siteUrl).hostname,
                key: env.INDEXNOW_KEY || 'default-key',
                urlList: [articleUrl, siteUrl + '/']
              })
            }).catch(() => {})
          ]);
        } catch (pingErr) {
          console.error('Ping error:', pingErr);
        }
      }

    } catch (mainErr) {
      console.error('Main scheduled error:', mainErr);
    }
  },

  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;
    const base = url.origin;

    let posts = [];
    try {
      posts = await env.BLOG_KV.get("posts", { type: "json" }) || [];
    } catch (e) {
      posts = [];
    }

    if (path === '/sitemap.xml') {
      return xmlResponse(buildSitemap(posts, base));
    }

    if (path === '/robots.txt') {
      return textResponse(buildRobots(base));
    }

    if (path === '/feed.xml' || path === '/rss.xml') {
      return xmlResponse(buildRSS(posts, base));
    }

    if (path === '/privacy') {
      return htmlResponse(buildPrivacyPage(base, posts));
    }

    if (path === '/terms') {
      return htmlResponse(buildTermsPage(base, posts));
    }

    if (path === '/contact') {
      return htmlResponse(buildContactPage(base, posts));
    }

    if (path === '/about') {
      return htmlResponse(buildAboutPage(base, posts));
    }

    if (path === '/dmca') {
      return htmlResponse(buildDmcaPage(base, posts));
    }

    if (path === '/disclaimer') {
      return htmlResponse(buildDisclaimerPage(base, posts));
    }

    if (path.startsWith('/image/')) {
      const postId = path.replace('/image/', '');
      const post = posts.find(p => p.id.toString() === postId);
      if (post && post.image) {
        const binaryStr = atob(post.image);
        const bytes = new Uint8Array(binaryStr.length);
        for (let i = 0; i < binaryStr.length; i++) {
          bytes[i] = binaryStr.charCodeAt(i);
        }
        return new Response(bytes, {
          headers: {
            'Content-Type': 'image/png',
            'Cache-Control': 'public, max-age=31536000, immutable'
          }
        });
      }
      return new Response('Not Found', { status: 404 });
    }

    if (path.startsWith('/article/')) {
      const postId = path.replace('/article/', '');
      const post = posts.find(p => p.id.toString() === postId || p.slug === postId);
      if (post) {
        post.views = (post.views || 0) + 1;
        try {
          await env.BLOG_KV.put("posts", JSON.stringify(posts));
        } catch (e) {}
        return htmlResponse(buildArticlePage(post, posts, base));
      }
      return Response.redirect(base + '/', 302);
    }

    if (path.startsWith('/category/')) {
      const catName = decodeURIComponent(path.replace('/category/', ''));
      const filtered = posts.filter(p => p.category === catName);
      return htmlResponse(buildCategoryPage(catName, filtered, posts, base));
    }

    return htmlResponse(buildHomePage(posts, base));
  }
};

function htmlResponse(html) {
  return new Response(html, {
    headers: {
      'Content-Type': 'text/html;charset=UTF-8',
      'Cache-Control': 'public, max-age=600',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'SAMEORIGIN',
      'X-XSS-Protection': '1; mode=block'
    }
  });
}

function xmlResponse(xml) {
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml;charset=UTF-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}

function textResponse(text) {
  return new Response(text, {
    headers: {
      'Content-Type': 'text/plain;charset=UTF-8',
      'Cache-Control': 'public, max-age=86400'
    }
  });
}

function escXml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function formatArticleContent(text) {
  if (!text) return '<p>المحتوى قيد التحضير...</p>';
  let html = text;
  html = html.replace(/\*\*(.*?)\*\*/g, '</p><h3 class="ch">$1</h3><p>');
  html = html.replace(/سؤال:\s*(.*?)(?:\n)/gi, '</p><div class="faq-item"><div class="faq-q">❓ $1</div>');
  html = html.replace(/جواب:\s*(.*?)(?:\n|$)/gi, '<div class="faq-a">✅ $1</div></div><p>');
  html = html.replace(/(\d+)\.\s/g, '<span class="step-num">$1</span> ');
  html = html.replace(/\n\n+/g, '</p><p>');
  html = html.replace(/\n/g, '<br>');
  if (!html.startsWith('<')) html = '<p>' + html;
  if (!html.endsWith('>')) html += '</p>';
  html = html.replace(/<p>\s*<\/p>/g, '');
  html = html.replace(/<p><\/p>/g, '');
  return html;
}

function extractFaqFromContent(content) {
  const faqs = [];
  const regex = /faq-q[^>]*>(?:❓\s*)?([^<]+)<\/div>\s*<div[^>]*class="faq-a"[^>]*>(?:✅\s*)?([^<]+)/gi;
  let match;
  while ((match = regex.exec(content)) !== null && faqs.length < 6) {
    const q = match[1].trim();
    const a = match[2].trim();
    if (q.length > 5 && a.length > 5) {
      faqs.push({ question: q, answer: a });
    }
  }
  return faqs;
}

const CATEGORIES = [
  { name: "الدعم والحماية الاجتماعية", color: "#10b981", icon: "🛡️", short: "الدعم الاجتماعي" },
  { name: "مباريات التوظيف والتدريب", color: "#6366f1", icon: "💼", short: "التوظيف والتدريب" },
  { name: "الوثائق الإدارية والتأشيرات", color: "#f59e0b", icon: "📄", short: "الوثائق والتأشيرات" },
  { name: "المقاول الذاتي والعمل الحر", color: "#ec4899", icon: "🚀", short: "ريادة الأعمال" }
];

function getCategoryColor(catName) {
  const found = CATEGORIES.find(c => c.name === catName);
  return found ? found.color : '#0f4c81';
}

function getCategoryIcon(catName) {
  const found = CATEGORIES.find(c => c.name === catName);
  return found ? found.icon : '📂';
}

function buildSitemap(posts, base) {
  const staticPages = ['/', '/about', '/contact', '/privacy', '/terms', '/dmca', '/disclaimer'];
  const uniqueCats = [...new Set(posts.map(p => p.category))];
  const now = new Date().toISOString();

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n';

  for (const page of staticPages) {
    xml += '<url><loc>' + base + page + '</loc>';
    xml += '<lastmod>' + now + '</lastmod>';
    xml += '<changefreq>' + (page === '/' ? 'daily' : 'monthly') + '</changefreq>';
    xml += '<priority>' + (page === '/' ? '1.0' : '0.4') + '</priority>';
    xml += '</url>\n';
  }

  for (const cat of uniqueCats) {
    xml += '<url><loc>' + base + '/category/' + encodeURIComponent(cat) + '</loc>';
    xml += '<lastmod>' + now + '</lastmod>';
    xml += '<changefreq>daily</changefreq><priority>0.7</priority></url>\n';
  }

  for (const post of posts) {
    xml += '<url><loc>' + base + '/article/' + post.id + '</loc>';
    xml += '<lastmod>' + (post.dateISO || now) + '</lastmod>';
    xml += '<changefreq>weekly</changefreq><priority>0.8</priority>';
    if (post.image) {
      xml += '<image:image><image:loc>' + base + '/image/' + post.id + '</image:loc>';
      xml += '<image:title>' + escXml(post.title) + '</image:title></image:image>';
    }
    xml += '</url>\n';
  }

  xml += '</urlset>';
  return xml;
}

function buildRobots(base) {
  return 'User-agent: *\nAllow: /\nDisallow: /image/\n\nUser-agent: Googlebot\nAllow: /\nAllow: /image/\n\nUser-agent: Googlebot-Image\nAllow: /image/\n\nSitemap: ' + base + '/sitemap.xml';
}

function buildRSS(posts, base) {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n<channel>\n';
  xml += '<title>بوابة الخدمات الرقمية - دليل المواطن المغربي</title>\n';
  xml += '<link>' + base + '</link>\n';
  xml += '<description>دليلك الشامل للخدمات الرقمية الحكومية والإجراءات الإدارية بالمغرب</description>\n';
  xml += '<language>ar</language>\n';
  xml += '<lastBuildDate>' + new Date().toUTCString() + '</lastBuildDate>\n';
  xml += '<atom:link href="' + base + '/feed.xml" rel="self" type="application/rss+xml"/>\n';

  const recentPosts = posts.slice(0, 20);
  for (const p of recentPosts) {
    xml += '<item>\n';
    xml += '<title>' + escXml(p.title) + '</title>\n';
    xml += '<link>' + base + '/article/' + p.id + '</link>\n';
    xml += '<description><![CDATA[' + (p.description || '') + ']]></description>\n';
    xml += '<pubDate>' + new Date(p.dateISO || Date.now()).toUTCString() + '</pubDate>\n';
    xml += '<category>' + escXml(p.category) + '</category>\n';
    xml += '<guid isPermaLink="true">' + base + '/article/' + p.id + '</guid>\n';
    xml += '</item>\n';
  }

  xml += '</channel>\n</rss>';
  return xml;
}

function getCSS() {
  return `<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --p:#0f4c81;--pl:#1a6fb5;--pd:#0a3459;
  --s:#e8b100;--sl:#ffd633;
  --a:#00b894;
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
body{font-family:'Cairo',sans-serif;background:var(--g50);color:var(--d);line-height:1.8;direction:rtl;text-align:right;overflow-x:hidden;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
a{text-decoration:none;color:inherit}
img{max-width:100%;height:auto;display:block}

.topbar{background:var(--d);color:var(--g400);padding:6px 0;font-size:12px}
.topbar-inner{max-width:1200px;margin:0 auto;padding:0 16px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px}
.topbar a{color:var(--g400);margin:0 6px;transition:var(--t)}
.topbar a:hover{color:var(--s)}

.header{background:var(--w);box-shadow:var(--sh);position:sticky;top:0;z-index:100}
.header-inner{max-width:1200px;margin:0 auto;padding:8px 16px;display:flex;justify-content:space-between;align-items:center}
.logo-link{display:flex;align-items:center;gap:10px}
.logo-icon{width:42px;height:42px;background:linear-gradient(135deg,var(--p),var(--pl));border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.logo-icon svg{width:22px;height:22px;fill:var(--w)}
.logo-text h1{font-size:17px;font-weight:800;color:var(--p);line-height:1.2;white-space:nowrap}
.logo-text span{color:var(--s)}
.logo-text p{font-size:10px;color:var(--g500);white-space:nowrap}
.menu-btn{display:none;background:none;border:2px solid var(--g300);cursor:pointer;padding:6px 10px;border-radius:6px;flex-direction:column;gap:3px;align-items:center;justify-content:center}
.menu-btn i{display:block;width:18px;height:2px;background:var(--d);border-radius:1px;transition:var(--t)}

.navbar{background:linear-gradient(135deg,var(--p),var(--pd))}
.nav-inner{max-width:1200px;margin:0 auto;padding:0 16px;display:flex;align-items:center}
.nav-link{color:rgba(255,255,255,.85);padding:12px 13px;font-size:12px;font-weight:600;white-space:nowrap;transition:var(--t);border-bottom:3px solid transparent;display:flex;align-items:center;gap:4px}
.nav-link:hover,.nav-link.active{color:#fff;background:rgba(255,255,255,.08);border-bottom-color:var(--s)}

.dropdown{position:relative}
.dropdown-toggle{cursor:pointer}
.dropdown-arrow{font-size:8px;transition:var(--t);display:inline-block;margin-right:3px}
.dropdown.open .dropdown-arrow{transform:rotate(180deg)}
.dropdown-menu{position:absolute;top:100%;right:0;background:var(--w);min-width:260px;border-radius:var(--r);box-shadow:var(--shl);display:none;z-index:50;overflow:hidden;border:1px solid var(--g200)}
.dropdown.open .dropdown-menu{display:block}
.dropdown-menu a{display:flex;align-items:center;gap:8px;padding:11px 16px;color:var(--d);font-size:13px;font-weight:600;border-bottom:1px solid var(--g100);transition:var(--t)}
.dropdown-menu a:last-child{border:none}
.dropdown-menu a:hover{background:var(--g50);color:var(--p);padding-right:20px}
.cat-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0;display:inline-block}

.hero{background:linear-gradient(135deg,var(--pd) 0%,var(--p) 50%,var(--pl) 100%);color:#fff;padding:36px 16px;text-align:center;position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;inset:0;background:url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M20 20h-4v-4h4v4zm0-20h-4v4h4V0zM0 20h4v-4H0v4z'/%3E%3C/g%3E%3C/svg%3E")}
.hero>*{position:relative;z-index:1}
.hero h2{font-size:22px;font-weight:800;margin-bottom:8px}
.hero>p{font-size:13px;opacity:.9;margin-bottom:18px;max-width:600px;margin-left:auto;margin-right:auto;line-height:1.7}
.hero-stats{display:flex;justify-content:center;gap:20px;flex-wrap:wrap}
.stat{text-align:center}
.stat b{font-size:22px;font-weight:800;color:var(--s);display:block}
.stat small{font-size:11px;opacity:.8}

.search-wrap{max-width:500px;margin:-18px auto 16px;padding:0 16px;position:relative;z-index:10}
.search-box{display:flex;background:var(--w);border-radius:50px;box-shadow:var(--shl);overflow:hidden;border:2px solid transparent;transition:var(--t)}
.search-box:focus-within{border-color:var(--p)}
.search-box input{flex:1;border:none;padding:11px 16px;font-size:13px;font-family:'Cairo',sans-serif;outline:none;background:transparent;min-width:0}
.search-box button{background:linear-gradient(135deg,var(--p),var(--pl));color:#fff;border:none;padding:11px 18px;cursor:pointer;font-family:'Cairo',sans-serif;font-weight:600;font-size:12px;white-space:nowrap;transition:var(--t)}
.search-box button:hover{opacity:.9}

.ad-slot{background:var(--g100);border:2px dashed var(--g300);border-radius:var(--r);padding:10px;text-align:center;margin:14px 0;min-height:70px;display:flex;align-items:center;justify-content:center;color:var(--g400);font-size:11px}
.ad-container{max-width:1200px;margin:8px auto;padding:0 16px}

.main-grid{max-width:1200px;margin:16px auto;padding:0 16px;display:grid;grid-template-columns:1fr 280px;gap:20px;align-items:start}

.cats-bar{display:flex;gap:8px;margin-bottom:14px;overflow-x:auto;padding-bottom:6px;-webkit-overflow-scrolling:touch;scrollbar-width:none;-ms-overflow-style:none}
.cats-bar::-webkit-scrollbar{display:none}
.cat-chip{display:flex;align-items:center;gap:5px;padding:6px 13px;border-radius:50px;font-size:11px;font-weight:600;white-space:nowrap;transition:var(--t);border:2px solid var(--g200);background:var(--w);color:var(--g600);flex-shrink:0}
.cat-chip:hover,.cat-chip.active{border-color:var(--p);color:var(--p);background:rgba(15,76,129,.04);transform:translateY(-1px);box-shadow:var(--sh)}

.featured{background:linear-gradient(135deg,var(--p),var(--pd));border-radius:var(--rl);color:#fff;margin-bottom:16px;overflow:hidden;transition:var(--t);display:block}
.featured:hover{transform:translateY(-3px);box-shadow:var(--shl)}
.featured-img{width:100%;height:200px;object-fit:cover}
.featured-body{padding:20px}
.featured-badge{background:var(--s);color:var(--d);padding:3px 10px;border-radius:20px;font-size:10px;font-weight:700;display:inline-block;margin-bottom:6px}
.featured h2{font-size:18px;margin-bottom:6px;line-height:1.5}
.featured p{opacity:.85;font-size:12px;line-height:1.7}
.featured-meta{display:flex;gap:10px;margin-top:10px;font-size:10px;opacity:.7;flex-wrap:wrap}

.posts-list{display:grid;gap:14px}
.post-card{background:var(--w);border-radius:var(--rl);overflow:hidden;box-shadow:var(--sh);transition:var(--t);border:1px solid var(--g100);display:block}
.post-card:hover{transform:translateY(-2px);box-shadow:var(--shl);border-color:var(--p)}
.post-card-img{width:100%;height:170px;object-fit:cover;transition:var(--t)}
.post-card:hover .post-card-img{transform:scale(1.02)}
.post-card-body{padding:14px}
.post-card-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;flex-wrap:wrap;gap:4px}
.badge{padding:3px 9px;border-radius:20px;font-size:10px;font-weight:700;display:inline-flex;align-items:center;gap:3px}
.post-card h3{font-size:14px;font-weight:700;color:var(--d);margin-bottom:5px;line-height:1.6;transition:var(--t)}
.post-card:hover h3{color:var(--p)}
.post-card-excerpt{color:var(--g600);font-size:11px;line-height:1.7;margin-bottom:8px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.post-card-footer{display:flex;justify-content:space-between;align-items:center;padding-top:8px;border-top:1px solid var(--g100);font-size:10px;color:var(--g500)}
.read-more-link{color:var(--p);font-weight:600;transition:var(--t)}
.post-card:hover .read-more-link{letter-spacing:.5px}

.sidebar{display:flex;flex-direction:column;gap:14px}
.widget{background:var(--w);border-radius:var(--rl);padding:16px;box-shadow:var(--sh);border:1px solid var(--g100)}
.widget-title{font-size:14px;font-weight:700;color:var(--d);margin-bottom:10px;padding-bottom:8px;border-bottom:3px solid var(--p);display:flex;align-items:center;gap:6px}
.trend-item{display:flex;gap:8px;padding:7px 0;border-bottom:1px solid var(--g100);transition:var(--t)}
.trend-item:last-child{border:none}
.trend-item:hover{padding-right:3px}
.trend-num{width:26px;height:26px;background:linear-gradient(135deg,var(--p),var(--pl));color:#fff;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0}
.trend-text h4{font-size:11px;font-weight:600;color:var(--d);line-height:1.5}
.trend-item:hover .trend-text h4{color:var(--p)}
.trend-text span{font-size:9px;color:var(--g400)}
.links-list{list-style:none}
.links-list li{padding:5px 0;border-bottom:1px solid var(--g100)}
.links-list li:last-child{border:none}
.links-list a{color:var(--g700);font-size:11px;display:flex;align-items:center;gap:4px;transition:var(--t)}
.links-list a:hover{color:var(--p);padding-right:3px}
.links-list a::before{content:'◀';font-size:7px;color:var(--p)}
.newsletter{background:linear-gradient(135deg,var(--p),var(--pd))!important;color:#fff!important;border:none!important}
.newsletter .widget-title{color:#fff;border-bottom-color:var(--s)}
.newsletter p{font-size:11px;opacity:.9;margin-bottom:8px}
.newsletter input{width:100%;padding:8px 12px;border:2px solid rgba(255,255,255,.2);border-radius:8px;background:rgba(255,255,255,.1);color:#fff;font-family:'Cairo',sans-serif;font-size:12px;margin-bottom:6px;outline:none;transition:var(--t)}
.newsletter input::placeholder{color:rgba(255,255,255,.5)}
.newsletter input:focus{border-color:var(--s)}
.newsletter-btn{width:100%;padding:8px;background:var(--s);color:var(--d);border:none;border-radius:8px;font-family:'Cairo',sans-serif;font-weight:700;font-size:12px;cursor:pointer;transition:var(--t)}
.newsletter-btn:hover{background:var(--sl)}

.article-grid{max-width:1200px;margin:16px auto;padding:0 16px;display:grid;grid-template-columns:1fr 280px;gap:20px;align-items:start}
.article-main{background:var(--w);border-radius:var(--rl);overflow:hidden;box-shadow:var(--sh)}
.article-hero-img{width:100%;height:280px;object-fit:cover}
.article-body{padding:24px}
.breadcrumb{display:flex;align-items:center;gap:4px;font-size:11px;color:var(--g500);margin-bottom:10px;flex-wrap:wrap}
.breadcrumb a{color:var(--p);transition:var(--t)}
.breadcrumb a:hover{text-decoration:underline}
.article-header{margin-bottom:18px;padding-bottom:14px;border-bottom:2px solid var(--g100)}
.article-header h1{font-size:22px;font-weight:800;color:var(--d);line-height:1.5;margin-bottom:8px}
.article-meta{display:flex;gap:10px;flex-wrap:wrap;font-size:11px;color:var(--g500)}
.article-content{font-size:15px;line-height:2;color:var(--g700)}
.article-content h3.ch{font-size:17px;color:var(--pd);margin:18px 0 8px;padding:9px 14px;border-right:4px solid var(--s);background:linear-gradient(to left,transparent,rgba(15,76,129,.03));border-radius:0 8px 8px 0}
.article-content p{margin-bottom:8px}
.article-content .step-num{display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;background:var(--p);color:#fff;border-radius:50%;font-size:10px;font-weight:700;margin-left:4px}
.faq-item{background:var(--g50);border-radius:8px;margin:8px 0;overflow:hidden;border:1px solid var(--g200)}
.faq-q{padding:10px 12px;font-weight:700;font-size:13px;color:var(--d);border-bottom:1px solid var(--g200);background:var(--w)}
.faq-a{padding:10px 12px;font-size:12px;color:var(--g600);line-height:1.8}
.share-section{display:flex;align-items:center;gap:6px;margin-top:18px;padding-top:12px;border-top:2px solid var(--g100);flex-wrap:wrap}
.share-section b{font-size:12px;color:var(--d)}
.share-btn{padding:5px 10px;border-radius:6px;font-size:10px;font-weight:600;color:#fff;transition:var(--t);display:inline-flex;align-items:center;gap:3px}
.share-btn:hover{transform:translateY(-1px);box-shadow:var(--sh)}
.related-section{margin-top:20px;padding-top:16px;border-top:2px solid var(--g100)}
.related-section h3{font-size:15px;font-weight:700;margin-bottom:10px}
.related-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.related-card{padding:10px;background:var(--g50);border-radius:8px;border:1px solid var(--g200);transition:var(--t)}
.related-card:hover{border-color:var(--p);background:var(--w);box-shadow:var(--sh)}
.related-card h4{font-size:11px;color:var(--d);margin-bottom:3px;line-height:1.5}
.related-card span{font-size:9px;color:var(--g400)}

.footer{background:var(--d);color:var(--g400);margin-top:30px}
.footer-grid{max-width:1200px;margin:0 auto;padding:28px 16px;display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:20px}
.footer h3{font-size:15px;color:var(--w);margin-bottom:8px;font-weight:700}
.footer h4{font-size:13px;color:var(--w);margin-bottom:8px;font-weight:700}
.footer p{font-size:11px;line-height:1.8}
.footer ul{list-style:none}
.footer li{margin-bottom:5px}
.footer li a{color:var(--g400);font-size:11px;transition:var(--t);display:block}
.footer li a:hover{color:var(--s);padding-right:3px}
.footer-bottom{border-top:1px solid rgba(255,255,255,.06);padding:12px 16px;text-align:center;font-size:10px;max-width:1200px;margin:0 auto}
.footer-bottom a{color:var(--s)}

.static-page{max-width:800px;margin:20px auto;padding:0 16px}
.static-box{background:var(--w);border-radius:var(--rl);padding:28px;box-shadow:var(--sh)}
.static-box h1{font-size:22px;color:var(--p);margin-bottom:14px;padding-bottom:10px;border-bottom:3px solid var(--s)}
.static-box h2{font-size:16px;color:var(--d);margin:18px 0 6px;padding-right:10px;border-right:4px solid var(--p)}
.static-box p{margin-bottom:8px;color:var(--g700);font-size:13px;line-height:1.9}
.static-box ul{padding-right:16px;margin-bottom:10px}
.static-box li{margin-bottom:4px;color:var(--g600);font-size:12px}
.static-box a{color:var(--p)}
.contact-form{display:flex;flex-direction:column;gap:8px;margin-top:12px}
.contact-form input,.contact-form textarea{padding:9px 12px;border:2px solid var(--g200);border-radius:8px;font-family:'Cairo',sans-serif;font-size:13px;outline:none;transition:var(--t)}
.contact-form input:focus,.contact-form textarea:focus{border-color:var(--p)}
.contact-form textarea{min-height:120px;resize:vertical}
.contact-form button{padding:10px;background:var(--p);color:#fff;border:none;border-radius:8px;font-family:'Cairo',sans-serif;font-weight:700;font-size:13px;cursor:pointer;transition:var(--t)}
.contact-form button:hover{background:var(--pl)}

.back-top{position:fixed;bottom:18px;left:18px;width:38px;height:38px;background:var(--p);color:#fff;border:none;border-radius:50%;cursor:pointer;display:none;align-items:center;justify-content:center;box-shadow:var(--shl);z-index:99;font-size:16px;transition:var(--t)}
.back-top:hover{transform:translateY(-2px)}

@media(max-width:1024px){
  .main-grid,.article-grid{grid-template-columns:1fr}
  .sidebar{order:2}
  .footer-grid{grid-template-columns:1fr 1fr}
}
@media(max-width:768px){
  .menu-btn{display:flex}
  .nav-inner{flex-direction:column;max-height:0;overflow:hidden;transition:max-height .4s ease;padding:0}
  .nav-inner.open{max-height:600px;padding:4px 0}
  .nav-link{width:100%;padding:10px 16px;border-bottom:1px solid rgba(255,255,255,.06);border-left:none}
  .dropdown-menu{position:static;box-shadow:none;border:none;border-radius:0;background:rgba(0,0,0,.15);min-width:100%}
  .dropdown-menu a{color:rgba(255,255,255,.8);padding:10px 28px;border-bottom-color:rgba(255,255,255,.04);font-size:12px}
  .dropdown-menu a:hover{background:rgba(255,255,255,.05);color:#fff;padding-right:28px}
  .hero h2{font-size:18px}
  .hero{padding:28px 14px}
  .hero-stats{gap:14px}
  .stat b{font-size:18px}
  .featured-body{padding:14px}
  .featured h2{font-size:15px}
  .featured-img{height:160px}
  .article-body{padding:16px}
  .article-header h1{font-size:18px}
  .article-hero-img{height:180px}
  .related-grid{grid-template-columns:1fr}
  .footer-grid{grid-template-columns:1fr;gap:14px}
  .static-box{padding:18px}
  .static-box h1{font-size:18px}
  .topbar-inner{justify-content:center;font-size:10px}
  .topbar a{margin:0 4px}
}
@media(max-width:480px){
  .logo-text h1{font-size:14px}
  .logo-text p{font-size:9px}
  .hero h2{font-size:16px}
  .hero>p{font-size:11px}
  .post-card h3{font-size:13px}
  .article-header h1{font-size:16px}
  .article-content{font-size:13px}
  .featured h2{font-size:14px}
  .featured-img{height:140px}
  .article-hero-img{height:150px}
  .header-inner{padding:6px 12px}
  .search-box input{padding:9px 12px;font-size:12px}
  .search-box button{padding:9px 14px;font-size:11px}
}
@media print{
  .header,.navbar,.topbar,.sidebar,.footer,.ad-slot,.share-section,.back-top,.search-wrap,.ad-container{display:none!important}
  .main-grid,.article-grid{grid-template-columns:1fr}
  .article-main{box-shadow:none}
}
</style>`;
}

function buildHeader(base) {
  const today = new Date().toLocaleDateString('ar-MA', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return `<div class="topbar"><div class="topbar-inner">
<span>📅 ${today}</span>
<div><a href="${base}/about">من نحن</a><a href="${base}/contact">اتصل بنا</a></div>
</div></div>

<header class="header"><div class="header-inner">
<a href="${base}/" class="logo-link">
<div class="logo-icon"><svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg></div>
<div class="logo-text"><h1>بوابة الخدمات <span>الرقمية</span></h1><p>دليلك الشامل للمنصات الحكومية المغربية</p></div>
</a>
<button class="menu-btn" onclick="toggleNav()" aria-label="فتح القائمة"><i></i><i></i><i></i></button>
</div></header>

<nav class="navbar"><div class="nav-inner" id="mainNav">
<a href="${base}/" class="nav-link active">🏠 الرئيسية</a>
<div class="dropdown nav-link dropdown-toggle" onclick="toggleDropdown(event)">
📂 أقسام المدونة <span class="dropdown-arrow">▼</span>
<div class="dropdown-menu">
${CATEGORIES.map(c => '<a href="' + base + '/category/' + encodeURIComponent(c.name) + '"><span class="cat-dot" style="background:' + c.color + '"></span>' + c.icon + ' ' + c.name + '</a>').join('')}
</div>
</div>
${CATEGORIES.map(c => '<a href="' + base + '/category/' + encodeURIComponent(c.name) + '" class="nav-link">' + c.icon + ' ' + c.short + '</a>').join('')}
<a href="${base}/contact" class="nav-link">📧 اتصل بنا</a>
</div></nav>`;
}

function buildFooter(base) {
  return `<footer class="footer"><div class="footer-grid">
<div>
<h3>🇲🇦 بوابة الخدمات الرقمية</h3>
<p>منصة إلكترونية مستقلة متخصصة في تبسيط الإجراءات الإدارية والخدمات الرقمية الحكومية بالمغرب. نهدف لمساعدة المواطنين في الوصول إلى المعلومات بسهولة.</p>
</div>
<div><h4>📂 الأقسام</h4><ul>
${CATEGORIES.map(c => '<li><a href="' + base + '/category/' + encodeURIComponent(c.name) + '">' + c.icon + ' ' + c.short + '</a></li>').join('')}
</ul></div>
<div><h4>📋 صفحات</h4><ul>
<li><a href="${base}/about">من نحن</a></li>
<li><a href="${base}/contact">اتصل بنا</a></li>
<li><a href="${base}/privacy">سياسة الخصوصية</a></li>
<li><a href="${base}/terms">شروط الاستخدام</a></li>
<li><a href="${base}/disclaimer">إخلاء المسؤولية</a></li>
<li><a href="${base}/dmca">DMCA</a></li>
</ul></div>
<div><h4>🔗 مواقع مفيدة</h4><ul>
<li><a href="https://www.rsu.ma" target="_blank" rel="noopener">السجل الاجتماعي RSU</a></li>
<li><a href="https://www.cnss.ma" target="_blank" rel="noopener">CNSS</a></li>
<li><a href="https://www.ofppt.ma" target="_blank" rel="noopener">OFPPT</a></li>
<li><a href="https://ae.gov.ma" target="_blank" rel="noopener">المقاول الذاتي</a></li>
<li><a href="${base}/sitemap.xml">خريطة الموقع</a></li>
</ul></div>
</div>
<div class="footer-bottom">
<p>© ${new Date().getFullYear()} بوابة الخدمات الرقمية | جميع الحقوق محفوظة</p>
<p style="margin-top:3px"><a href="${base}/privacy">الخصوصية</a> · <a href="${base}/terms">الشروط</a> · <a href="${base}/dmca">DMCA</a> · <a href="${base}/disclaimer">إخلاء المسؤولية</a></p>
<p style="margin-top:3px">موقع تعليمي مستقل غير تابع لأي جهة حكومية</p>
</div></footer>

<button class="back-top" id="backTopBtn" onclick="window.scrollTo({top:0,behavior:'smooth'})">↑</button>

<script>
function toggleNav(){document.getElementById('mainNav').classList.toggle('open')}
function toggleDropdown(e){e.stopPropagation();e.currentTarget.closest('.dropdown').classList.toggle('open')}
document.addEventListener('click',function(){document.querySelectorAll('.dropdown.open').forEach(function(d){d.classList.remove('open')})});
window.addEventListener('scroll',function(){document.getElementById('backTopBtn').style.display=window.scrollY>300?'flex':'none'},{passive:true});
function doSearch(){var q=(document.getElementById('searchField')||{}).value;if(!q)return;q=q.toLowerCase();document.querySelectorAll('.post-card,.featured').forEach(function(el){el.style.display=el.textContent.toLowerCase().indexOf(q)>=0?'':'none'})}
</script>`;
}

function buildSidebar(posts, base) {
  const recent = posts.slice(0, 5);
  const uniqueCats = [...new Set(posts.map(p => p.category))];

  let html = '<aside class="sidebar">';

  html += '<div class="ad-slot">مساحة إعلانية</div>';

  html += '<div class="widget"><h3 class="widget-title">📊 الأكثر قراءة</h3>';
  for (let i = 0; i < recent.length; i++) {
    const p = recent[i];
    const shortTitle = p.title.length > 50 ? p.title.substring(0, 50) + '...' : p.title;
    html += '<a href="' + base + '/article/' + p.id + '" class="trend-item">';
    html += '<div class="trend-num">' + (i + 1) + '</div>';
    html += '<div class="trend-text"><h4>' + shortTitle + '</h4>';
    html += '<span>' + p.date + (p.views ? ' · 👁️ ' + p.views : '') + '</span></div></a>';
  }
  html += '</div>';

  html += '<div class="widget"><h3 class="widget-title">📂 التصنيفات</h3><ul class="links-list">';
  for (const cat of uniqueCats) {
    const count = posts.filter(p => p.category === cat).length;
    const color = getCategoryColor(cat);
    html += '<li><a href="' + base + '/category/' + encodeURIComponent(cat) + '">';
    html += '<span class="cat-dot" style="background:' + color + '"></span> ' + cat;
    html += ' <small style="margin-right:auto;color:var(--g400)">(' + count + ')</small></a></li>';
  }
  html += '</ul></div>';

  html += '<div class="widget newsletter"><h3 class="widget-title">✉️ النشرة البريدية</h3>';
  html += '<p>اشترك للحصول على آخر التحديثات</p>';
  html += '<input type="email" placeholder="بريدك الإلكتروني..." aria-label="البريد الإلكتروني">';
  html += '<button class="newsletter-btn">اشترك الآن 🔔</button></div>';

  html += '<div class="ad-slot">مساحة إعلانية</div>';

  html += '<div class="widget"><h3 class="widget-title">🔗 روابط مفيدة</h3><ul class="links-list">';
  html += '<li><a href="https://www.rsu.ma" target="_blank" rel="noopener">السجل الاجتماعي RSU</a></li>';
  html += '<li><a href="https://www.cnss.ma" target="_blank" rel="noopener">CNSS</a></li>';
  html += '<li><a href="https://www.ofppt.ma" target="_blank" rel="noopener">OFPPT</a></li>';
  html += '<li><a href="https://ae.gov.ma" target="_blank" rel="noopener">المقاول الذاتي</a></li>';
  html += '<li><a href="https://www.cnie.ma" target="_blank" rel="noopener">البطاقة الوطنية</a></li>';
  html += '</ul></div>';

  html += '</aside>';
  return html;
}

function buildHomePage(posts, base) {
  const featured = posts.length > 0 ? posts[0] : null;
  const otherPosts = posts.slice(1);
  const totalPosts = posts.length;
  const totalCats = [...new Set(posts.map(p => p.category))].length;
  const totalViews = posts.reduce((sum, p) => sum + (p.views || 0), 0);
  const viewsDisplay = totalViews > 999 ? Math.floor(totalViews / 1000) + 'K' : totalViews;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "بوابة الخدمات الرقمية",
    "alternateName": "دليل المواطن المغربي",
    "url": base,
    "description": "دليلك الشامل للخدمات الرقمية الحكومية بالمغرب",
    "inLanguage": "ar",
    "potentialAction": {
      "@type": "SearchAction",
      "target": base + "/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  let html = '<!DOCTYPE html><html lang="ar" dir="rtl"><head>';
  html += '<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">';
  html += '<meta http-equiv="X-UA-Compatible" content="IE=edge">';
  html += '<title>بوابة الخدمات الرقمية | دليل المواطن المغربي للخدمات الحكومية 2026</title>';
  html += '<meta name="description" content="دليلك الشامل للخدمات الرقمية الحكومية بالمغرب: AMO تضامن، RSU، مباريات التوظيف 2026، الوثائق الإدارية، المقاول الذاتي. شروحات مبسطة ومحدثة.">';
  html += '<meta name="keywords" content="خدمات رقمية المغرب,أمو تضامن,السجل الاجتماعي الموحد,مباريات التوظيف 2026,CNSS,OFPPT,جواز السفر,البطاقة الوطنية,المقاول الذاتي,فيزا شنغن,دعم السكن">';
  html += '<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">';
  html += '<meta name="googlebot" content="index,follow">';
  html += '<link rel="canonical" href="' + base + '/">';
  html += '<meta property="og:type" content="website">';
  html += '<meta property="og:site_name" content="بوابة الخدمات الرقمية">';
  html += '<meta property="og:title" content="بوابة الخدمات الرقمية | دليل المواطن المغربي 2026">';
  html += '<meta property="og:description" content="دليلك الشامل للخدمات الرقمية الحكومية بالمغرب">';
  html += '<meta property="og:url" content="' + base + '/">';
  html += '<meta property="og:locale" content="ar_MA">';
  html += '<meta name="twitter:card" content="summary_large_image">';
  html += '<meta name="twitter:title" content="بوابة الخدمات الرقمية">';
  html += '<link rel="preconnect" href="https://fonts.googleapis.com">';
  html += '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>';
  html += '<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap" rel="stylesheet">';
  html += '<script type="application/ld+json">' + JSON.stringify(schemaData) + '</script>';
  html += getCSS();
  html += '</head><body>';

  html += buildHeader(base);

  html += '<section class="hero"><div>';
  html += '<h2>🇲🇦 دليلك الشامل للخدمات الرقمية الحكومية بالمغرب</h2>';
  html += '<p>شروحات مبسطة ومحدثة لجميع الإجراءات الإدارية والمنصات الحكومية - كل ما يحتاجه المواطن المغربي</p>';
  html += '<div class="hero-stats">';
  html += '<div class="stat"><b>' + totalPosts + '+</b><small>مقال ودليل</small></div>';
  html += '<div class="stat"><b>' + totalCats + '</b><small>تصنيف</small></div>';
  html += '<div class="stat"><b>' + viewsDisplay + '+</b><small>زيارة</small></div>';
  html += '<div class="stat"><b>24/7</b><small>تحديث مستمر</small></div>';
  html += '</div></div></section>';

  html += '<div class="search-wrap"><div class="search-box">';
  html += '<input type="text" id="searchField" placeholder="🔍 ابحث عن خدمة أو إجراء إداري..." onkeyup="doSearch()" aria-label="البحث في الموقع">';
  html += '<button onclick="doSearch()">🔍 بحث</button>';
  html += '</div></div>';

  html += '<div class="ad-container"><div class="ad-slot"><!-- Google AdSense Leaderboard --></div></div>';

  html += '<div class="main-grid"><main>';

  html += '<div class="cats-bar">';
  html += '<a href="' + base + '/" class="cat-chip active">📋 الكل</a>';
  for (const c of CATEGORIES) {
    html += '<a href="' + base + '/category/' + encodeURIComponent(c.name) + '" class="cat-chip">';
    html += '<span class="cat-dot" style="background:' + c.color + '"></span>' + c.short + '</a>';
  }
  html += '</div>';

  if (featured) {
    html += '<a href="' + base + '/article/' + featured.id + '" class="featured">';
    if (featured.image) {
      html += '<img class="featured-img" src="' + base + '/image/' + featured.id + '" alt="' + escXml(featured.imageAlt || featured.title) + '" width="1024" height="200" loading="eager">';
    }
    html += '<div class="featured-body">';
    html += '<div class="featured-badge">⭐ مقال مميز</div>';
    html += '<h2>' + featured.title + '</h2>';
    html += '<p>' + (featured.description || '') + '</p>';
    html += '<div class="featured-meta">';
    html += '<span>📅 ' + featured.date + '</span>';
    html += '<span>📂 ' + featured.category + '</span>';
    html += '<span>⏱️ ' + (featured.readTime || 3) + ' د</span>';
    html += '<span>👁️ ' + (featured.views || 0) + '</span>';
    html += '</div></div></a>';
  }

  html += '<div class="ad-slot"><!-- Google AdSense In-article --></div>';

  html += '<div class="posts-list">';
  if (otherPosts.length === 0 && !featured) {
    html += '<div style="text-align:center;padding:40px">';
    html += '<h3 style="color:var(--g500)">جاري تحضير المحتوى...</h3>';
    html += '<p style="color:var(--g400);font-size:12px;margin-top:6px">سيتم نشر المقالات تلقائياً قريباً</p>';
    html += '</div>';
  } else {
    for (let i = 0; i < otherPosts.length; i++) {
      const p = otherPosts[i];
      const catColor = p.categoryColor || getCategoryColor(p.category);

      html += '<a href="' + base + '/article/' + p.id + '" class="post-card">';
      if (p.image) {
        html += '<img class="post-card-img" src="' + base + '/image/' + p.id + '" alt="' + escXml(p.imageAlt || p.title) + '" width="600" height="170" loading="lazy">';
      }
      html += '<div class="post-card-body">';
      html += '<div class="post-card-top">';
      html += '<span class="badge" style="background:' + catColor + '14;color:' + catColor + '">';
      html += '<span class="cat-dot" style="background:' + catColor + '"></span>' + p.category + '</span>';
      html += '<small style="color:var(--g400);font-size:9px">⏱️ ' + (p.readTime || 3) + ' د</small>';
      html += '</div>';
      html += '<h3>' + p.title + '</h3>';
      html += '<p class="post-card-excerpt">' + (p.description || '') + '</p>';
      html += '<div class="post-card-footer">';
      html += '<span>📅 ' + p.date + '</span>';
      html += '<span>👁️ ' + (p.views || 0) + '</span>';
      html += '<span class="read-more-link">اقرأ المزيد ←</span>';
      html += '</div></div></a>';

      if ((i + 1) % 3 === 0) {
        html += '<div class="ad-slot"><!-- Google AdSense In-feed --></div>';
      }
    }
  }
  html += '</div>';

  html += '</main>';
  html += buildSidebar(posts, base);
  html += '</div>';

  html += buildFooter(base);
  html += '</body></html>';

  return html;
}

function buildArticlePage(post, allPosts, base) {
  const relatedPosts = allPosts.filter(p => p.category === post.category && p.id !== post.id).slice(0, 4);
  const faqs = extractFaqFromContent(post.content);
  const shareUrl = encodeURIComponent(base + '/article/' + post.id);
  const shareTitle = encodeURIComponent(post.title);
  const catColor = post.categoryColor || getCategoryColor(post.category);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description || '',
    "datePublished": post.dateISO,
    "dateModified": post.dateISO,
    "author": { "@type": "Organization", "name": "بوابة الخدمات الرقمية", "url": base },
    "publisher": { "@type": "Organization", "name": "بوابة الخدمات الرقمية", "url": base },
    "mainEntityOfPage": { "@type": "WebPage", "@id": base + '/article/' + post.id },
    "articleSection": post.category,
    "inLanguage": "ar",
    "keywords": post.keywords,
    "wordCount": post.wordCount
  };
  if (post.image) {
    articleSchema.image = base + '/image/' + post.id;
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "الرئيسية", "item": base },
      { "@type": "ListItem", "position": 2, "name": post.category, "item": base + '/category/' + encodeURIComponent(post.category) },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": base + '/article/' + post.id }
    ]
  };

  let faqSchemaTag = '';
  if (faqs.length > 0) {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(f => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": { "@type": "Answer", "text": f.answer }
      }))
    };
    faqSchemaTag = '<script type="application/ld+json">' + JSON.stringify(faqSchema) + '</script>';
  }

  let html = '<!DOCTYPE html><html lang="ar" dir="rtl"><head>';
  html += '<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">';
  html += '<title>' + escXml(post.title) + ' | بوابة الخدمات الرقمية</title>';
  html += '<meta name="description" content="' + escXml(post.description || '') + '">';
  html += '<meta name="keywords" content="' + escXml(post.keywords || '') + '">';
  html += '<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1">';
  html += '<link rel="canonical" href="' + base + '/article/' + post.id + '">';
  html += '<meta property="og:type" content="article">';
  html += '<meta property="og:title" content="' + escXml(post.title) + '">';
  html += '<meta property="og:description" content="' + escXml(post.description || '') + '">';
  html += '<meta property="og:url" content="' + base + '/article/' + post.id + '">';
  html += '<meta property="og:locale" content="ar_MA">';
  if (post.image) {
    html += '<meta property="og:image" content="' + base + '/image/' + post.id + '">';
    html += '<meta property="og:image:width" content="1024">';
    html += '<meta property="og:image:height" content="576">';
  }
  html += '<meta property="article:published_time" content="' + (post.dateISO || '') + '">';
  html += '<meta property="article:section" content="' + escXml(post.category) + '">';
  html += '<meta name="twitter:card" content="summary_large_image">';
  html += '<meta name="twitter:title" content="' + escXml(post.title) + '">';
  if (post.image) {
    html += '<meta name="twitter:image" content="' + base + '/image/' + post.id + '">';
  }
  html += '<link rel="preconnect" href="https://fonts.googleapis.com">';
  html += '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>';
  html += '<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap" rel="stylesheet">';
  html += '<script type="application/ld+json">' + JSON.stringify(articleSchema) + '</script>';
  html += '<script type="application/ld+json">' + JSON.stringify(breadcrumbSchema) + '</script>';
  html += faqSchemaTag;
  html += getCSS();
  html += '</head><body>';

  html += buildHeader(base);

  html += '<div class="ad-container"><div class="ad-slot"><!-- Google AdSense --></div></div>';

  html += '<div class="article-grid">';
  html += '<article class="article-main" itemscope itemtype="https://schema.org/Article">';

  if (post.image) {
    html += '<img class="article-hero-img" src="' + base + '/image/' + post.id + '" alt="' + escXml(post.imageAlt || post.title) + '" width="1024" height="280" loading="eager" itemprop="image">';
  }

  html += '<div class="article-body">';

  html += '<nav class="breadcrumb" aria-label="مسار التنقل">';
  html += '<a href="' + base + '/">🏠 الرئيسية</a> › ';
  html += '<a href="' + base + '/category/' + encodeURIComponent(post.category) + '">' + post.category + '</a> › ';
  html += '<span>' + post.title.substring(0, 30) + '...</span>';
  html += '</nav>';

  html += '<header class="article-header">';
  html += '<span class="badge" style="background:' + catColor + '14;color:' + catColor + ';margin-bottom:8px;display:inline-flex">';
  html += '<span class="cat-dot" style="background:' + catColor + '"></span>' + post.category + '</span>';
  html += '<h1 itemprop="headline">' + post.title + '</h1>';
  html += '<div class="article-meta">';
  html += '<span>📅 <time itemprop="datePublished" datetime="' + (post.dateISO || '') + '">' + post.date + '</time></span>';
  html += '<span>⏱️ ' + (post.readTime || 3) + ' دقائق</span>';
  html += '<span>📝 ' + (post.wordCount || 0) + ' كلمة</span>';
  html += '<span>👁️ ' + (post.views || 0) + ' مشاهدة</span>';
  html += '<span itemprop="author" itemscope itemtype="https://schema.org/Organization"><meta itemprop="name" content="بوابة الخدمات الرقمية">✍️ فريق التحرير</span>';
  html += '</div></header>';

  html += '<div class="ad-slot"><!-- Google AdSense Before Content --></div>';

  html += '<div class="article-content" itemprop="articleBody">' + post.content + '</div>';

  html += '<div class="ad-slot"><!-- Google AdSense After Content --></div>';

  html += '<div class="share-section">';
  html += '<b>📤 شارك:</b>';
  html += '<a href="https://www.facebook.com/sharer/sharer.php?u=' + shareUrl + '" target="_blank" rel="noopener" class="share-btn" style="background:#1877f2">📘 فيسبوك</a>';
  html += '<a href="https://twitter.com/intent/tweet?url=' + shareUrl + '&text=' + shareTitle + '" target="_blank" rel="noopener" class="share-btn" style="background:#1da1f2">🐦 تويتر</a>';
  html += '<a href="https://wa.me/?text=' + shareTitle + '%20' + shareUrl + '" target="_blank" rel="noopener" class="share-btn" style="background:#25d366">💬 واتساب</a>';
  html += '<a href="https://t.me/share/url?url=' + shareUrl + '&text=' + shareTitle + '" target="_blank" rel="noopener" class="share-btn" style="background:#0088cc">✈️ تلغرام</a>';
  html += '</div>';

  if (relatedPosts.length > 0) {
    html += '<div class="related-section"><h3>📚 مقالات ذات صلة</h3><div class="related-grid">';
    for (const rp of relatedPosts) {
      html += '<a href="' + base + '/article/' + rp.id + '" class="related-card">';
      html += '<h4>' + rp.title + '</h4>';
      html += '<span>📅 ' + rp.date + '</span></a>';
    }
    html += '</div></div>';
  }

  html += '</div></article>';
  html += buildSidebar(allPosts, base);
  html += '</div>';

  html += buildFooter(base);
  html += '</body></html>';

  return html;
}

function buildCategoryPage(catName, filtered, allPosts, base) {
  const catColor = getCategoryColor(catName);
  const catIcon = getCategoryIcon(catName);

  let html = '<!DOCTYPE html><html lang="ar" dir="rtl"><head>';
  html += '<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">';
  html += '<title>' + escXml(catName) + ' | بوابة الخدمات الرقمية 2026</title>';
  html += '<meta name="description" content="جميع المقالات والشروحات في تصنيف ' + escXml(catName) + ' - بوابة الخدمات الرقمية المغربية">';
  html += '<meta name="robots" content="index,follow">';
  html += '<link rel="canonical" href="' + base + '/category/' + encodeURIComponent(catName) + '">';
  html += '<meta property="og:type" content="website">';
  html += '<meta property="og:title" content="' + escXml(catName) + ' | بوابة الخدمات الرقمية">';
  html += '<link rel="preconnect" href="https://fonts.googleapis.com">';
  html += '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>';
  html += '<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap" rel="stylesheet">';

  const catSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": catName,
    "url": base + '/category/' + encodeURIComponent(catName),
    "description": "جميع المقالات في تصنيف " + catName
  };
  html += '<script type="application/ld+json">' + JSON.stringify(catSchema) + '</script>';
  html += getCSS();
  html += '</head><body>';

  html += buildHeader(base);

  html += '<section class="hero" style="padding:28px 16px;background:linear-gradient(135deg,' + catColor + 'cc,' + catColor + '88)">';
  html += '<div><h2>' + catIcon + ' ' + catName + '</h2>';
  html += '<p>' + filtered.length + ' مقال في هذا التصنيف</p></div></section>';

  html += '<div class="main-grid"><main>';

  html += '<nav class="breadcrumb" style="margin-bottom:12px">';
  html += '<a href="' + base + '/">🏠 الرئيسية</a> › <span>' + catName + '</span></nav>';

  html += '<div class="ad-slot"><!-- Google AdSense --></div>';

  html += '<div class="posts-list">';
  if (filtered.length === 0) {
    html += '<div style="text-align:center;padding:40px">';
    html += '<h3 style="color:var(--g500)">لا توجد مقالات بعد في هذا التصنيف</h3>';
    html += '<p style="margin-top:6px"><a href="' + base + '/" style="color:var(--p)">← العودة للرئيسية</a></p></div>';
  } else {
    for (let i = 0; i < filtered.length; i++) {
      const p = filtered[i];
      html += '<a href="' + base + '/article/' + p.id + '" class="post-card">';
      if (p.image) {
        html += '<img class="post-card-img" src="' + base + '/image/' + p.id + '" alt="' + escXml(p.imageAlt || p.title) + '" width="600" height="170" loading="lazy">';
      }
      html += '<div class="post-card-body">';
      html += '<div class="post-card-top">';
      html += '<span class="badge" style="background:' + catColor + '14;color:' + catColor + '">';
      html += '<span class="cat-dot" style="background:' + catColor + '"></span>' + p.category + '</span></div>';
      html += '<h3>' + p.title + '</h3>';
      html += '<p class="post-card-excerpt">' + (p.description || '') + '</p>';
      html += '<div class="post-card-footer">';
      html += '<span>📅 ' + p.date + '</span>';
      html += '<span>👁️ ' + (p.views || 0) + '</span>';
      html += '<span class="read-more-link">اقرأ المزيد ←</span>';
      html += '</div></div></a>';

      if ((i + 1) % 3 === 0) {
        html += '<div class="ad-slot"><!-- Google AdSense --></div>';
      }
    }
  }
  html += '</div></main>';
  html += buildSidebar(allPosts, base);
  html += '</div>';

  html += buildFooter(base);
  html += '</body></html>';

  return html;
}

function buildStaticPage(base, posts, pageTitle, pageSlug, content) {
  let html = '<!DOCTYPE html><html lang="ar" dir="rtl"><head>';
  html += '<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">';
  html += '<title>' + pageTitle + ' | بوابة الخدمات الرقمية</title>';
  html += '<meta name="robots" content="index,follow">';
  html += '<link rel="canonical" href="' + base + '/' + pageSlug + '">';
  html += '<link rel="preconnect" href="https://fonts.googleapis.com">';
  html += '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>';
  html += '<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap" rel="stylesheet">';
  html += getCSS();
  html += '</head><body>';
  html += buildHeader(base);
  html += '<div class="static-page"><div class="static-box">' + content + '</div></div>';
  html += buildFooter(base);
  html += '</body></html>';
  return html;
}

function buildPrivacyPage(base, posts) {
  const d = new Date().toLocaleDateString('ar-MA', { year: 'numeric', month: 'long', day: 'numeric' });
  const content = '<h1>🔒 سياسة الخصوصية</h1>'
    + '<p><strong>آخر تحديث:</strong> ' + d + '</p>'
    + '<p>نحن في <strong>بوابة الخدمات الرقمية</strong> نقدر خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح هذه السياسة كيفية جمع المعلومات واستخدامها وحمايتها.</p>'
    + '<h2>1. المعلومات التي نجمعها</h2>'
    + '<ul><li><strong>معلومات التصفح:</strong> عنوان IP، نوع المتصفح، صفحات الزيارة، مدة الزيارة، مصدر الزيارة</li>'
    + '<li><strong>ملفات تعريف الارتباط (Cookies):</strong> نستخدم ملفات الكوكيز لتحسين تجربة المستخدم وتحليل حركة المرور</li>'
    + '<li><strong>معلومات الاتصال:</strong> في حال تواصلت معنا (الاسم، البريد الإلكتروني، الرسالة)</li>'
    + '<li><strong>بيانات النشرة البريدية:</strong> البريد الإلكتروني عند الاشتراك</li></ul>'
    + '<h2>2. كيفية استخدام المعلومات</h2>'
    + '<ul><li>تحسين محتوى الموقع وتجربة المستخدم</li>'
    + '<li>تحليل إحصائيات الزيارات</li>'
    + '<li>إرسال التحديثات للمشتركين</li>'
    + '<li>عرض الإعلانات المناسبة عبر Google AdSense</li></ul>'
    + '<h2>3. Google AdSense والإعلانات</h2>'
    + '<p>يستخدم موقعنا خدمة <strong>Google AdSense</strong> لعرض الإعلانات. تستخدم Google ملفات تعريف الارتباط لعرض إعلانات مبنية على زياراتك السابقة. يمكنك إلغاء الاشتراك في الإعلانات المخصصة عبر <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener">إعدادات إعلانات Google</a>.</p>'
    + '<h2>4. ملفات تعريف الارتباط (Cookies)</h2>'
    + '<p>نستخدم ملفات الكوكيز لتذكر تفضيلاتك وتحليل حركة المرور وعرض إعلانات ملائمة. يمكنك التحكم فيها من إعدادات متصفحك.</p>'
    + '<h2>5. مشاركة المعلومات</h2>'
    + '<p>لا نبيع أو نؤجر بياناتك. قد نشارك معلومات مجهولة مع Google (AdSense/Analytics) وCloudflare.</p>'
    + '<h2>6. حماية البيانات</h2>'
    + '<p>نتخذ تدابير أمنية مناسبة لحماية بياناتك بما في ذلك استخدام HTTPS والتشفير.</p>'
    + '<h2>7. حقوقك</h2>'
    + '<ul><li>طلب الوصول إلى بياناتك الشخصية</li><li>طلب تصحيح أو حذف بياناتك</li><li>إلغاء الاشتراك في النشرة البريدية</li></ul>'
    + '<h2>8. خصوصية الأطفال</h2>'
    + '<p>موقعنا غير موجه للأطفال تحت 13 عاماً ولا نجمع معلوماتهم عمداً.</p>'
    + '<h2>9. التغييرات على هذه السياسة</h2>'
    + '<p>قد نحدث هذه السياسة من وقت لآخر. التغييرات تُنشر على هذه الصفحة مع تحديث التاريخ.</p>'
    + '<h2>10. اتصل بنا</h2>'
    + '<p>لأي أسئلة حول سياسة الخصوصية: <a href="' + base + '/contact">صفحة الاتصال</a></p>';
  return buildStaticPage(base, posts, 'سياسة الخصوصية', 'privacy', content);
}

function buildTermsPage(base, posts) {
  const d = new Date().toLocaleDateString('ar-MA', { year: 'numeric', month: 'long', day: 'numeric' });
  const content = '<h1>📜 شروط الاستخدام</h1>'
    + '<p><strong>آخر تحديث:</strong> ' + d + '</p>'
    + '<p>باستخدامك لموقع <strong>بوابة الخدمات الرقمية</strong>، فإنك توافق على الالتزام بهذه الشروط والأحكام.</p>'
    + '<h2>1. قبول الشروط</h2>'
    + '<p>استخدامك للموقع يعني موافقتك على جميع الشروط. إذا لم توافق، توقف عن الاستخدام فوراً.</p>'
    + '<h2>2. طبيعة المحتوى</h2>'
    + '<ul><li>المحتوى لأغراض تعليمية وإرشادية فقط</li><li>لا يُعد بديلاً عن الاستشارة المهنية أو القانونية</li><li>المعلومات قد تتغير بسبب تحديثات القوانين والأنظمة</li></ul>'
    + '<h2>3. حقوق الملكية الفكرية</h2>'
    + '<ul><li>يُمنع نسخ أو إعادة نشر المحتوى دون إذن كتابي</li><li>يُسمح بمشاركة روابط المقالات على وسائل التواصل</li><li>يُسمح بالاقتباس الجزئي مع ذكر المصدر والرابط</li></ul>'
    + '<h2>4. استخدام الموقع</h2>'
    + '<ul><li>عدم استخدام الموقع لأغراض غير قانونية</li><li>عدم محاولة اختراق أو تعطيل الموقع</li><li>عدم استخدام برامج آلية لجمع البيانات</li></ul>'
    + '<h2>5. الإعلانات</h2>'
    + '<p>يحتوي الموقع على إعلانات من Google AdSense. لسنا مسؤولين عن محتوى هذه الإعلانات.</p>'
    + '<h2>6. تحديد المسؤولية</h2>'
    + '<p>لا نتحمل أي مسؤولية عن أضرار ناتجة عن استخدام المعلومات المنشورة. المستخدم يتحمل المسؤولية الكاملة عن قراراته.</p>'
    + '<h2>7. التعديلات</h2>'
    + '<p>نحتفظ بالحق في تعديل هذه الشروط في أي وقت.</p>'
    + '<h2>8. القانون المعمول به</h2>'
    + '<p>تخضع هذه الشروط للقوانين المعمول بها في المملكة المغربية.</p>';
  return buildStaticPage(base, posts, 'شروط الاستخدام', 'terms', content);
}

function buildContactPage(base, posts) {
  const content = '<h1>📧 اتصل بنا</h1>'
    + '<p>نرحب بتواصلكم معنا! سواء كان لديكم استفسار أو اقتراح أو ترغبون في التعاون، لا تترددوا في التواصل.</p>'
    + '<h2>📋 نموذج التواصل</h2>'
    + '<form class="contact-form" onsubmit="event.preventDefault();alert(\'شكراً لتواصلك معنا! سنرد عليك في أقرب وقت.\')">'
    + '<input type="text" placeholder="الاسم الكامل *" required aria-label="الاسم">'
    + '<input type="email" placeholder="البريد الإلكتروني *" required aria-label="البريد">'
    + '<input type="text" placeholder="الموضوع *" required aria-label="الموضوع">'
    + '<textarea placeholder="رسالتك... *" required aria-label="الرسالة"></textarea>'
    + '<button type="submit">📤 إرسال الرسالة</button></form>'
    + '<h2>📞 وسائل التواصل الأخرى</h2>'
    + '<ul><li><strong>📧 البريد:</strong> contact@leguide-digital.com</li>'
    + '<li><strong>📘 فيسبوك:</strong> بوابة الخدمات الرقمية</li></ul>'
    + '<h2>⏰ أوقات الرد</h2>'
    + '<p>نرد خلال <strong>24 إلى 48 ساعة</strong> في أيام العمل.</p>'
    + '<h2>💡 ملاحظات</h2>'
    + '<ul><li>نرحب باقتراحات مواضيع جديدة</li>'
    + '<li>لطلبات حذف المحتوى (DMCA)، زوروا <a href="' + base + '/dmca">صفحة DMCA</a></li></ul>';
  return buildStaticPage(base, posts, 'اتصل بنا', 'contact', content);
}

function buildAboutPage(base, posts) {
  const cnt = posts.length;
  const cc = [...new Set(posts.map(p => p.category))].length;
  const content = '<h1>🇲🇦 من نحن</h1>'
    + '<h2>رؤيتنا</h2>'
    + '<p><strong>بوابة الخدمات الرقمية</strong> هي منصة إلكترونية مستقلة تأسست بهدف تبسيط الإجراءات الإدارية ومساعدة المواطن المغربي في الوصول إلى المعلومات المتعلقة بالخدمات الحكومية الرقمية بسهولة ويسر.</p>'
    + '<h2>مهمتنا</h2>'
    + '<ul><li>📝 نشر شروحات مبسطة ومفصلة لجميع الإجراءات الإدارية</li>'
    + '<li>🔄 تحديث المعلومات بشكل مستمر لمواكبة المستجدات</li>'
    + '<li>📊 تغطية شاملة لجميع القطاعات</li>'
    + '<li>🎯 تقديم معلومات دقيقة ومحدثة</li></ul>'
    + '<h2>ما يميزنا</h2>'
    + '<ul><li><strong>محتوى حصري:</strong> جميع مقالاتنا مكتوبة باحترافية</li>'
    + '<li><strong>تحديث مستمر:</strong> نحدث محتوانا بانتظام</li>'
    + '<li><strong>بساطة:</strong> نشرح الإجراءات المعقدة بأسلوب مبسط</li>'
    + '<li><strong>شمولية:</strong> ' + cc + ' تصنيفات رئيسية بأكثر من ' + cnt + ' مقال</li></ul>'
    + '<h2>أرقام</h2>'
    + '<ul><li>📚 أكثر من <strong>' + cnt + '</strong> مقال ودليل شامل</li>'
    + '<li>📂 <strong>' + cc + '</strong> تصنيفات متخصصة</li>'
    + '<li>🔄 تحديث <strong>يومي</strong> للمحتوى</li></ul>'
    + '<h2>تواصل معنا</h2>'
    + '<p>نرحب باقتراحاتكم وملاحظاتكم. <a href="' + base + '/contact">تواصلوا معنا</a> لأي استفسار.</p>';
  return buildStaticPage(base, posts, 'من نحن', 'about', content);
}

function buildDmcaPage(base, posts) {
  const d = new Date().toLocaleDateString('ar-MA', { year: 'numeric', month: 'long', day: 'numeric' });
  const content = '<h1>⚖️ سياسة حقوق الملكية الفكرية (DMCA)</h1>'
    + '<p><strong>آخر تحديث:</strong> ' + d + '</p>'
    + '<p>نحن في <strong>بوابة الخدمات الرقمية</strong> نحترم حقوق الملكية الفكرية ونلتزم بالاستجابة لإشعارات انتهاك حقوق النشر وفقاً لقانون DMCA.</p>'
    + '<h2>إذا كنت تعتقد أن حقوقك قد انتُهكت</h2>'
    + '<p>أرسل إشعاراً يتضمن:</p>'
    + '<ul><li>وصف دقيق للعمل المحمي بحقوق النشر</li>'
    + '<li>رابط المحتوى المخالف على موقعنا</li>'
    + '<li>رابط المحتوى الأصلي (إن وُجد)</li>'
    + '<li>اسمك الكامل ومعلومات الاتصال</li>'
    + '<li>بيان بحسن النية ودقة المعلومات</li></ul>'
    + '<h2>إجراءاتنا</h2>'
    + '<ul><li>مراجعة الإشعار خلال <strong>48 ساعة عمل</strong></li>'
    + '<li>إزالة المحتوى المخالف فوراً عند ثبوت الادعاء</li>'
    + '<li>إخطار الطرف المعني</li></ul>'
    + '<h2>الإشعار المضاد</h2>'
    + '<p>إذا تم حذف محتوى خاص بك وتعتقد أن الحذف كان خاطئاً، يمكنك تقديم إشعار مضاد.</p>'
    + '<h2>كيفية الإرسال</h2>'
    + '<p>عبر <a href="' + base + '/contact">صفحة الاتصال</a> مع ذكر "DMCA" في عنوان الرسالة.</p>';
  return buildStaticPage(base, posts, 'DMCA', 'dmca', content);
}

function buildDisclaimerPage(base, posts) {
  const d = new Date().toLocaleDateString('ar-MA', { year: 'numeric', month: 'long', day: 'numeric' });
  const content = '<h1>⚠️ إخلاء المسؤولية</h1>'
    + '<p><strong>آخر تحديث:</strong> ' + d + '</p>'
    + '<h2>طبيعة المحتوى</h2>'
    + '<p>جميع المعلومات المنشورة على <strong>بوابة الخدمات الرقمية</strong> هي لأغراض <strong>تعليمية وإرشادية فقط</strong>. نبذل قصارى جهدنا لتقديم معلومات دقيقة ومحدثة، لكن لا نضمن صحة أو اكتمال أو حداثة جميع المعلومات.</p>'
    + '<h2>ليس استشارة مهنية</h2>'
    + '<p>المحتوى <strong>لا يُعد بديلاً</strong> عن:</p>'
    + '<ul><li>الاستشارة القانونية المتخصصة</li>'
    + '<li>المعلومات الرسمية من الجهات الحكومية</li>'
    + '<li>الاستشارة المهنية أو المالية</li></ul>'
    + '<h2>تحديد المسؤولية</h2>'
    + '<p>لا نتحمل أي مسؤولية عن:</p>'
    + '<ul><li>أضرار مباشرة أو غير مباشرة ناتجة عن استخدام المعلومات</li>'
    + '<li>القرارات المتخذة بناءً على محتوى الموقع</li>'
    + '<li>محتوى المواقع الخارجية المرتبطة</li>'
    + '<li>انقطاع الخدمة أو عدم توفر الموقع</li></ul>'
    + '<h2>الإعلانات</h2>'
    + '<p>يحتوي الموقع على إعلانات من أطراف ثالثة (Google AdSense). نحن لسنا مسؤولين عن محتوى الإعلانات أو المنتجات المعلن عنها.</p>'
    + '<h2>استقلالية الموقع</h2>'
    + '<p><strong>بوابة الخدمات الرقمية</strong> هي منصة مستقلة وغير تابعة لأي جهة حكومية.</p>'
    + '<h2>الموافقة</h2>'
    + '<p>باستخدامك للموقع، فإنك توافق على شروط إخلاء المسؤولية. للمزيد: <a href="' + base + '/terms">شروط الاستخدام</a> و<a href="' + base + '/privacy">سياسة الخصوصية</a>.</p>';
  return buildStaticPage(base, posts, 'إخلاء المسؤولية', 'disclaimer', content);
}
