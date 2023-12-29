export type TActiveTab = "materials" | "exams";
export interface IFormProps {
  onCancel: () => void;
}

export interface IMaterialAddValues {
  title: string;
  description: string;
  files: File[];
  time: string;
  courseId: string;
}

export interface IExamAddValues {
  title: string;
  description: string;
  time: string;
  link: string;
  courseId: string;
}
