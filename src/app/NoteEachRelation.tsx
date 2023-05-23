import { CreateRelationInput, ModelRelationConnection, Note, Relation } from "@/API"
import { FC } from "react"
import NoteEach from "./NoteEach"
import { Controller, useForm } from "react-hook-form"
import { Box, TextField } from "@mui/material"
import { Button } from "@aws-amplify/ui-react"
import { connectNote } from "./api/gen"

type NoteEachRelationProps = {
  note: Note
}
const NoteEachRelation: FC<NoteEachRelationProps> = ({note}) => {
  const hasRel = [note.relfrom, note.relto]
  return(
  <div className="relation">
    <div className="relists">
      {note.relfrom?.items ==null ? "": <Relist isTo={false} rels={note.relfrom}/>  }
      {note.relto?.items==null ? "": <Relist isTo={true} rels={note.relto}/>  }
    </div>
    <Connect id={note.id}/>
  </div>)
}
export default NoteEachRelation

type RelistProps = {
  isTo: boolean
  rels: ModelRelationConnection
}
const Relist: FC<RelistProps> = ({isTo, rels}) => {
  return(
    <div className="relist">
      <h4>{isTo? "To": "From"}</h4>
      {rels.items.map(rel => rel==null ? "" :
      <div className="tofrom" key={rel.id}>
        <h4>from</h4>
        <NoteEach note={rel.from}/>
        <h4>to</h4>
        <NoteEach note={rel.to}/>
      </div>
      )}
    </div>
  )
}

type ConnectProps = {
  id: string
}
const Connect: FC<ConnectProps> = ({id}) => {
  return(
    <></>
  )
}

const fromToDecide = (isForward: boolean, me: string, target: string) => isForward ?
  {fromID: me, toID: target} :
  {fromID: target, toID: me}

const ConnectById: FC<ConnectProps> = ({id}) => {
  type Form = {
    targetID: string
    isForward: boolean
    relID: string
  }
  const {control, handleSubmit} = useForm<Form>({
    defaultValues: {
      targetID: "",
      relID: "",
      isForward: true
    }
  })
  const controllerWrap = (name: keyof Form) => function FC() {return (
    <Controller
      control={control}
      name={name}
      render={({field})=>(
        <TextField {...field}
          label={name}
        />
      )}
    />
  )}
  const submit = (f: Form) => {
    connectNote({
      input: {
        ...fromToDecide(f.isForward, id, f.targetID),
        relID: f.relID
      }
    }).then(res => {

    })
  }
  return(<>
    <Box component={"form"} onSubmit={handleSubmit(submit)}>
      {[controllerWrap("relID")(),
      controllerWrap("targetID")() ]}
      <Button type="submit">submit</Button>
    </Box>
  </>)
}