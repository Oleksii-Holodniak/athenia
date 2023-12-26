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
  COURSES: () => {
    return `/courses`;
  },
  COURSE_DETAILS: (id: string | number) => {
    return `/courses/details?id=${id}`;
  },
};
