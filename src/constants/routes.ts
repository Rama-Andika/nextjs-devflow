const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  COMMUNITY: "/community",
  COLLECTIONS: "/collections",
  JOBS: "/find-jobs",
  TAGS: "/tags",
  TAG: (id: string): string => `/tags/${id}`,
  PROFILE: (id: string): string => `/profile/${id}`,
  ASK_QUESTION: "/ask-question",
};

export default ROUTES;
