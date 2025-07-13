const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  COMMUNITY: "/community",
  COLLECTIONS: "/collections",
  JOBS: "/find-jobs",
  TAGS: "/tags",
  ASK_QUESTION: "/ask-question",
  TAG: (id: string): string => `/tags/${id}`,
  PROFILE: (id: string): string => `/profile/${id}`,
  QUESTION: (id: string): string => `/question/${id}`,
};

export default ROUTES;
