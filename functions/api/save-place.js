export async function onRequestPost(context) {
  try {
    const input = await context.request.json();
    const response = await fetch(context.env.PLACES_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input)
    });
    return new Response(JSON.stringify({ status: "success" }), { headers: { "Content-Type": "application/json" }});
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}