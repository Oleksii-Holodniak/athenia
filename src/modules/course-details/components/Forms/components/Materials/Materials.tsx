import { NotFound } from "@/common/components/shared";
import { useDetailsStore } from "@/common/store/course-details";
import { List } from "../../styles";
import Form from "./Form";
import Item from "./Item";

const Materials = () => {
  const isAdditing = useDetailsStore((state) => state.isAdditingMaterial);
  const materials = useDetailsStore((state) => state.course.materials);

  const renderMaterials = () => {
    return materials.map((material) => (
      <Item key={material.id} item={material} />
    ));
  };

  return (
    <>
      {isAdditing ? (
        <Form />
      ) : (
        <List>{!!materials.length ? renderMaterials() : <NotFound />}</List>
      )}
    </>
  );
};

export default Materials;
