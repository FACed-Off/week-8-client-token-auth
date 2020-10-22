export function login(email, password) {
  return fetch("https://dogs-rest.herokuapp.com/v1/users/login/", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: { "content-type": "application/json" },
  }).then((res) => {
    if (!res.ok) {
      const error = new Error("HTTP error");
      error.status = res.status;
      throw error;
    } else {
      return res.json();
    }
  });
}

export function getUser(token) {
  // GET https://dogs-rest.herokuapp.com/v1/users/me/
}
