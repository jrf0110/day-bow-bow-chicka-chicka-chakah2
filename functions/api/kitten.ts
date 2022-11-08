export async function onRequest() {
  // randomly error
  if (Math.random() <= 0.28) {
    throw new Error("Just a fake exception!");
  }

  // randomly timeout
  if (Math.random() <= 0.25) {
    await new Promise((r) => setTimeout(r, 1000 * 60 * 60));
  }

  const imageData: Array<{ contentType: string; data: string }> =
    (await Promise.all(
      [...new Array(5)].map((_, i) =>
        fetch(`http://placekitten.com/400/${200 + i}`).then(async (res) => ({
          contentType: res.headers.get("Content-Type"),
          data: await res.text(),
        }))
      )
    )) as any;

  return new Response(
    `
<!DOCTYPE html>
<html>
<head>
  <title>Kittens UNBOUND</title>
  <style>
    .kitten-row {
      
    }
  </style>
</head>
<body>
${imageData
  .map(({ contentType, data }) =>
    `
<div class="kitten-row">
<img src="data:${contentType};base64,${btoa(data)}" />
</div>
`.trim()
  )
  .join("\n")}
</body>
</html>
  `.trim(),
    { headers: { "Content-Type": "text/html" } }
  );
}
