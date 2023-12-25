import { useDetailsStore } from "@/common/store/course-details";
import Form from "./Form";

const Exams = () => {
  const isAdditing = useDetailsStore((state) => state.isAdditingExam);

  const renderExams = () => {
    return <div>Exams</div>;
  };

  return <>{isAdditing ? <Form /> : renderExams()}</>;
};

export default Exams;
