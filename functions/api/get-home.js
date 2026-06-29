export async function onRequestGet(context) {
  const scriptURL = context.env.HOMEPAGE_SCRIPT_URL;
  
  // Appending ?action=getHome signals your Apps Script to run the specific logic
  const response = await fetch(`${scriptURL}?action=getHome`);
  
  if (!response.ok) {
    return new Response("Failed to fetch data", { status: 500 });
  }
  
  const data = await response.json();
  
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" }
  });
}