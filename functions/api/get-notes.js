export async function onRequestGet(context) {
  const scriptURL = context.env.GOOGLE_SHEETS_SCRIPT_URL;

  // Append a query parameter to tell Google you want to read, not write
  const response = await fetch(`${scriptURL}?action=getRecent`, {
    method: "GET"
  });
  
  const data = await response.json();
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" }
  });
}