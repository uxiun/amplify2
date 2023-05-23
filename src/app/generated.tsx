import NoteCreateForm from "@/ui-components/NoteCreateForm";
import NoteUpdateForm from "@/ui-components/NoteUpdateForm";
import RelationCreateForm from "@/ui-components/RelationCreateForm";
import RelationUpdateForm from "@/ui-components/RelationUpdateForm";
import { FC } from "react";

const Generated: FC = () => {
  return(<>
    <NoteCreateForm/>
    {/* <NoteUpdateForm/> */}
    <RelationCreateForm/>
    {/* <RelationUpdateForm/> */}
  </>)
}
export default Generated