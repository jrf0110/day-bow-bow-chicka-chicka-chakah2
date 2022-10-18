export const onRequest = [
  async ({ next }) => {
    const response = await next();
    response.headers.set("X-Hello", "Hello from functions Middleware!");
    return response;
  },
];
