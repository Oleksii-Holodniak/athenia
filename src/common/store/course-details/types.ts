import { TActiveTab } from "@/modules/course-details/components/Forms/types";

export interface IDetailsInitStoreProps {
  isAdditingExam: boolean;
  isAdditingMaterial: boolean;
  tab: TActiveTab;
}

export interface IDetailsStoreProps extends IDetailsInitStoreProps {
  onChangeTab: (tag: TActiveTab) => void;
  setIsAdditing: (value: boolean, name: TActiveTab) => void;
}
