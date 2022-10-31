export async function onRequest() {
  // randomly error
  if (Math.random() <= 0.28) {
    throw new Error("Just a fake exception!");
  }

  // randomly timeout
  if (Math.random() <= 0.25) {
    await new Promise((r) => setTimeout(r, 1000 * 60 * 60));
  }

  return fetch("http://placekitten.com/200/300");
}
