export let isAuthenticated = false;

export async function login(username, password) {
  return new Promise((resolve) => {
    setTimeout(() => {
      isAuthenticated = username === 'pikachu' && password === 'pikachu';
      resolve(isAuthenticated);
    }, 1000);
  });
}
