export async function onRequestGet(context) {
  const response = await fetch(`${context.env.PLANS_SCRIPT_URL}?action=getRecent`);
  const data = await response.json();
  return new Response(JSON.stringify(data), { headers: { "Content-Type": "application/json" }});
}