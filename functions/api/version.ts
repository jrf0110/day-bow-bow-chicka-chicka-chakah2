export function onRequest() {
  return new Response(
    JSON.stringify({
      version: "DAY-BOW-BOW-1",
    }),
    { headers: { "Content-Type": "application/json" } }
  );
}
