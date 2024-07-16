export const endpoints = {
  backend: {
    transactions: {
      hubtel: {
        get: "/transactions/hubtel",
        getOne: (id: string) => `/transactions/hubtel/${id}`,
      },
    },
    reports: {
      revenue: "/reports/revenue",
    },
    auth: {
      login: "/auth/login",
    },
  },
};
