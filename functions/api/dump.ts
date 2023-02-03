export const onRequest = (context) => {
  return new Response(
    JSON.stringify({
      context,
      headers: Object.fromEntries(context.request.headers),
    })
  );
};
