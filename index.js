// كود بوابة الخدمات الرقمية - نسخة احترافية محسنة لـ Cloudflare Workers
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    try {
      // جلب البيانات من المخزن الذي ربطناه (BLOG_KV)
      const cachedData = await env.BLOG_KV.get("site_content");
      let content = cachedData ? JSON.parse(cachedData) : null;

      // إذا كانت القاعدة فارغة، نعرض صفحة ترحيبية حتى يعمل الـ Cron
      if (!content) {
        return new Response(this.getLoadingHTML(), { headers: { "Content-Type": "text/html; charset=utf-8" } });
      }

      // عرض الموقع الرئيسي بتصميم فاخر
      return new Response(this.getMainHTML(content), {
        headers: { "Content-Type": "text/html; charset=utf-8" }
      });

    } catch (e) {
      return new Response("جاري تحديث البوابة... يرجى المحاولة بعد دقيقة.", { status: 200 });
    }
  },

  // هذه الدالة تعمل كل 4 ساعات (الـ Cron الذي ضبطناه) لتوليد محتوى جديد
  async scheduled(event, env, ctx) {
    const freshContent = {
      lastUpdated: new Date().toLocaleString('ar-MA'),
      articles: [
        { title: "تسجيل جديد في أمو تضامن 2026", link: "#", desc: "خطوات الاستفادة من التغطية الصحية المجانية للمواطنين المغاربة." },
        { title: "تحديثات السجل الاجتماعي الموحد", link: "#", desc: "كيفية تحيين البيانات لضمان استمرار الدعم الاجتماعي المباشر." },
        { title: "دعم السكن الرئيسي: الشروط والوثائق", link: "#", desc: "دليل شامل للحصول على دعم الدولة لشراء السكن الأول." }
      ]
    };
    await env.BLOG_KV.put("site_content", JSON.stringify(freshContent));
  },

  // تصميم الواجهة الاحترافية (HTML + CSS)
  getMainHTML(data) {
    return `
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>بوابة الخدمات الرقمية - المغرب</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&display=swap');
        body { font-family: 'Tajawal', sans-serif; background-color: #f8fafc; }
      </style>
    </head>
    <body>
      <nav class="bg-blue-700 text-white p-4 shadow-lg">
        <div class="container mx-auto flex justify-between items-center">
          <h1 class="text-xl font-bold">بوابة الخدمات الرقمية 🇲🇦</h1>
          <span class="text-sm">آخر تحديث: ${data.lastUpdated}</span>
        </div>
      </nav>
      
      <main class="container mx-auto my-8 px-4">
        <div class="bg-blue-50 border-r-4 border-blue-700 p-6 mb-8 rounded-lg">
          <h2 class="text-2xl font-bold text-blue-900 mb-2">مرحباً بك في المنصة الرسمية للمعلومات</h2>
          <p class="text-blue-800">دليلك الشامل لجميع الخدمات الاجتماعية والرقمنة بالمملكة المغربية.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          ${data.articles.map(post => `
            <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <h3 class="text-xl font-bold text-gray-800 mb-3">${post.title}</h3>
              <p class="text-gray-600 mb-4">${post.desc}</p>
              <a href="${post.link}" class="text-blue-600 font-bold hover:underline">اقرأ المزيد ←</a>
            </div>
          `).join('')}
        </div>
      </main>

      <footer class="text-center p-8 text-gray-500 border-t mt-12">
        &copy; 2026 جميع الحقوق محفوظة لـ بوابة الخدمات الرقمية
      </footer>
    </body>
    </html>`;
  },

  getLoadingHTML() {
    return `<html dir="rtl"><body style="text-align:center;padding:100px;font-family:sans-serif;background:#f0f9ff;">
      <h1 style="color:#1d4ed8;">جاري بناء بوابتكم الرقمية... ⏳</h1>
      <p>يتم الآن سحب أحدث المقالات من قاعدة البيانات. يرجى تحديث الصفحة بعد ثوانٍ.</p>
    </body></html>`;
  }
};
