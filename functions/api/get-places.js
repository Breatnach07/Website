export async function onRequestGet(context) {
  const url = new URL(context.request.url);
  const page = url.searchParams.get('page') || 1;
  const scriptURL = context.env.PLACES_SCRIPT_URL;

  const response = await fetch(`${scriptURL}?action=getPlaces&page=${page}`);
  const data = await response.json();
  
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" }
  });
}