export async function onRequest(context) {
  const { request } = context;
  
  // Access the header here
  const userEmail = request.headers.get("cf-access-authenticated-user-email");
  
  if (!userEmail) {
    return new Response("Unauthorized", { status: 403 });
  }

  return new Response(`You are logged in as: ${userEmail}`);
}