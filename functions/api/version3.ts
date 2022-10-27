export function onRequest() {
  return new Response(
    JSON.stringify({
      version: "DAY-BOW-BOW-v3",
    }),
    { headers: { "Content-Type": "application/json" } }
  );
}
