export async function onRequestGet(context) {
  const scriptURL = context.env.GOOGLE_SHEETS_SCRIPT_URL;
  // We add a 'getRecent' parameter so your Google Script knows what to do
  const response = await fetch(`${scriptURL}?action=getRecent`);
  const data = await response.json();
  
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" }
  });
}