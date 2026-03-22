export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // واجهة الموقع (HTML & CSS)
    const html = `
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>بوابة الخدمات الرقمية</title>
        <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&display=swap" rel="stylesheet">
        <style>
            :root {
                --primary: #2563eb;
                --dark: #1e293b;
                --light: #f8fafc;
            }
            body {
                font-family: 'Tajawal', sans-serif;
                background-color: var(--light);
                color: var(--dark);
                margin: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
            }
            .container {
                background: white;
                padding: 2rem;
                border-radius: 1rem;
                box-shadow: 0 10px 25px rgba(0,0,0,0.1);
                text-align: center;
                max-width: 500px;
                width: 90%;
            }
            h1 { color: var(--primary); margin-bottom: 1rem; }
            p { line-height: 1.6; color: #64748b; }
            .btn {
                display: inline-block;
                margin-top: 1.5rem;
                padding: 0.8rem 2rem;
                background-color: var(--primary);
                color: white;
                text-decoration: none;
                border-radius: 0.5rem;
                transition: opacity 0.3s;
            }
            .btn:hover { opacity: 0.9; }
            .footer { margin-top: 2rem; font-size: 0.8rem; color: #94a3b8; }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>أهلاً بك في منصتك الجديدة</h1>
            <p>تم تفعيل الموقع بنجاح عبر GitHub و Cloudflare. هذه البوابة مصممة لتكون سريعة، متوافقة مع محركات البحث، ومتجاوبة مع جميع الشاشات.</p>
            <a href="#" class="btn">استكشف الخدمات</a>
            <div class="footer">تحديث تلقائي بنسبة 100%</div>
        </div>
    </body>
    </html>
    `;

    return new Response(html, {
      headers: { "Content-Type": "text/html; charset=utf-8" }
    });
  }
};
