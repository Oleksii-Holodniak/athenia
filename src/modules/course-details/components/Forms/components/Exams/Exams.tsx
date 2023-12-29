import { NotFound } from "@/common/components/shared";
import { useDetailsStore } from "@/common/store/course-details";
import { List } from "../../styles";
import Form from "./Form";
import Item from "./Item";

const Exams = () => {
  const isAdditing = useDetailsStore((state) => state.isAdditingExam);
  const exams = useDetailsStore((state) => state.course.exams);

  const renderExams = () => {
    return exams.map((exam, id) => <Item key={id} item={exam} />);
  };

  return (
    <>
      {isAdditing ? (
        <Form />
      ) : (
        <List>{!!exams.length ? renderExams() : <NotFound />}</List>
      )}
    </>
  );
};

export default Exams;
