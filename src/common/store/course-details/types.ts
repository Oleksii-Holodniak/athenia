import { ICourse, IExam, IMaterial } from "@/common/types/models";
import { TActiveTab } from "@/modules/course-details/components/Forms/types";

export interface IDetailsInitStoreProps {
  isAdditingExam: boolean;
  isAdditingMaterial: boolean;
  tab: TActiveTab;
  course: ICourse;
}

export interface IDetailsStoreProps extends IDetailsInitStoreProps {
  onChangeTab: (tag: TActiveTab) => void;
  setIsAdditing: (value: boolean, name: TActiveTab) => void;
  addNewMaterial: (course: IMaterial) => void;
  addNewExam: (course: IExam) => void;
}
