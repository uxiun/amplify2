import { Note } from "@/API";
import { Card, CardContent, Typography } from "@mui/material";
import { FC } from "react";
import NoteEachRelation from "./NoteEachRelation";

type NoteEachProps = {
  note: Note
}
const NoteEach: FC<NoteEachProps> = ({note}) => {
  return(
    <div className="note">
      <Card className="card">
        <CardContent>
          <Typography variant="h6" component={"div"}>{note.name}</Typography>
          <Typography sx={{mb: 1}} color={"GrayText"}>{note.id}</Typography>
          <Typography sx={{mb: 1}} variant="subtitle1">{note.content ?? ""}</Typography>
        </CardContent>
      </Card>
      <NoteEachRelation note={note}  />
    </div>
  )
}

export default NoteEach;
