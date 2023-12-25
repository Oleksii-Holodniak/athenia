import { useDetailsStore } from "@/common/store/course-details";
import Form from "./Form";

const Materials = () => {
  const isAdditing = useDetailsStore((state) => state.isAdditingMaterial);

  const renderMaterials = () => {
    return <div>Materials</div>;
  };

  return <>{isAdditing ? <Form /> : renderMaterials()}</>;
};

export default Materials;
