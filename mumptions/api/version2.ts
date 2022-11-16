export function onRequest() {
  return new Response(
    JSON.stringify({
      version: "DAY-BOW-BOW-2",
    }),
    { headers: { "Content-Type": "application/json" } }
  );
}
