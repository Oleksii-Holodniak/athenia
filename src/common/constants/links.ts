export const LINK_TEMPLATES = {
  HOME: () => {
    return "/";
  },
  LOGIN: () => {
    return `/auth/login`;
  },
  REGISTRATION: () => {
    return `/auth/registration`;
  },
  PROFILE: () => {
    return `/profile`;
  },
  CREATE: () => {
    return `/create`;
  },
  COURSES: (
    query: string | undefined = "",
    tags: string[] | undefined = []
  ) => {
    return `/courses?page=1&query${query}=&tags=${tags.join(",")}`;
  },
  COURSE_DETAILS: (id: string | number) => {
    return `/courses/${id}`;
  },
};
