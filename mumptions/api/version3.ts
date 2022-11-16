export function onRequest() {
  return new Response(
    JSON.stringify({
      version: "DAY-BOW-BOW-vv3",
    }),
    { headers: { "Content-Type": "application/json" } }
  );
}
