export async function onRequestGet(context) {
  try {
    const response = await fetch(`${context.env.PLACES_SCRIPT_URL}?action=getRecent`);
    const data = await response.json();
    return new Response(JSON.stringify(data), { 
      headers: { "Content-Type": "application/json", "Cache-Control": "no-cache" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}