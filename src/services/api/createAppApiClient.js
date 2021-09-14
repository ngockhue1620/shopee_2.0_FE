

export const createAppApiClient = (api) => {
  return {
    login: login(api),
  }
}





const login =
  (api) =>
  async (data) => {
    try {
      const res = await api.post<LoginResponse>("/login", data)

      return res.data.user
    } catch (err) {}
  }
