export default {
  async fetch(request, env) {
    const aiResponse = await env.AI.run('@cf/meta/llama-3-8b-instruct', {
      prompt: "اكتب مقالاً قصيراً وجميلاً عن مدينة مراكش المغربية"
    });
    return new Response(JSON.stringify(aiResponse), {
      headers: { "content-type": "application/json; charset=utf-8" }
    });
  }
};
