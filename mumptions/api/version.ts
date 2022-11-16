export function onRequest() {
  console.log("tesst test", { foo: "bar" });

  return new Response(
    JSON.stringify({
      version: "DAY-BOW-BOW-1",
    }),
    { headers: { "Content-Type": "application/json" } }
  );
}
