export default {
  async fetch(request, env) {
    const topic = "السياحة في مدينة مكناس المغربية";
    const aiResponse = await env.AI.run('@cf/meta/llama-3-8b-instruct', {
      prompt: `اكتب مقالاً احترافياً ومشوقاً باللغة العربية عن ${topic}. اجعل المقال يحتوي على عناوين فرعية.`
    });
    return new Response(JSON.stringify(aiResponse), {
      headers: { "content-type": "application/json; charset=utf-8" }
    });
  }
};
