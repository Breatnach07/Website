export async function onRequestPost(context) {
  const input = await context.request.json();
  const scriptURL = context.env.PLACES_SCRIPT_URL;

  const response = await fetch(scriptURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input)
  });

  return new Response(JSON.stringify({ status: "success" }), {
    headers: { "Content-Type": "application/json" }
  });
}