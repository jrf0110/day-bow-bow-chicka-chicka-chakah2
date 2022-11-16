export async function onRequest() {
  // randomly error
  if (Math.random() <= 0.28) {
    throw new Error("Just a fake exception!");
  }

  // randomly timeout
  if (Math.random() <= 0.25) {
    await new Promise((r) => setTimeout(r, 1000 * 60 * 60));
  }

  const imageData: string[] = (await Promise.all(
    [...new Array(5)].map((_, i) =>
      fetch(`http://placekitten.com/400/${200 + i}`)
        .then((response) => response.blob())
        .then(
          (blob) =>
            new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.onloadend = () => resolve(reader.result);
              reader.onerror = reject;
              reader.readAsDataURL(blob);
            })
        )
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
  .map((dataUrl) =>
    `
<div class="kitten-row">
<img src="${dataUrl}" />
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
