export default {
  async fetch(request) {
    return new Response("<h1>مرحباً بك في بوابة الخدمات الرقمية - المغرب</h1>", {
      headers: { "Content-Type": "text/html; charset=utf-8" }
    });
  }
};
