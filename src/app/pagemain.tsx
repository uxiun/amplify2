import { listNotes } from "@/graphql/queries"
import { API } from "aws-amplify"
import {FC, useEffect} from "react"
import { Controller, useForm } from "react-hook-form"
import { Box, Card, CardContent, Typography, Button, TextField } from "@mui/material"
// import { TextField } from "@aws-amplify/ui-react"
import { createNote } from "@/graphql/mutations"
import { useAtom } from "jotai"
import { allnotesAtom } from "./jotai"
import { CreateNoteInput, Note, Publicity } from "@/API"
import NoteEach from "./NoteEach"
import SearchWrap from "./search"
import NewRel from "./newRel"
import ListRel from "./ListRel"
const PageMain: FC = () => {
  const [allnotes, setAllnotes] = useAtom(allnotesAtom)
  useEffect(()=>{
    fetchNotes().then(n => {
      setAllnotes(n);
      console.log("set notes:", n);
    })
  }, [])
  return(<>
    <h1>search</h1>
    <SearchWrap/>
    <h1>PageMain</h1>
    <div>
      <h2>create new note</h2>
      <CreateForm/>
    </div>
    <NoteList/>
    <div>
      <h2>create new rel</h2>
      <NewRel/>
    </div>
    <ListRel/>
  </>)
}
export default PageMain

const fetchNotes = async() => {
  const apidata: any = await API.graphql({query: listNotes})
  const fetchednotes = apidata.data.listNotes.items
  return fetchednotes
}

const NoteList: FC = () => {
  const [allnotes, setAllnotes] = useAtom(allnotesAtom)

  return <div>
    {allnotes.map(n => <NoteEach note={n} key={n.id} /> )}
  </div>
}

const CreateForm: FC = () => {
  const [allnotes, setAllnotes] = useAtom(allnotesAtom)
  type Form = {
    name: string
    content: string
  }
  const {control, handleSubmit} = useForm<Form>({
    defaultValues: {
      name: "",
      content: ""
    }
  })
  const submit = async(form: Form) => {
    const inpu: CreateNoteInput = {...form, userID: "root", publicity: Publicity.public}
    const res = await API.graphql({
      query: createNote,
      variables: {
        input: inpu
      }
    })
    console.log("createNote res", res)
    fetchNotes().then(n => {
      setAllnotes(n);
      console.log("set notes:", n);
    })
  }
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
  return(
    <Box
      component="form"
      onSubmit={handleSubmit(submit)}
    >
      {[
        controllerWrap("name")(),
        controllerWrap("content")()
      ]}
      <Button type="submit">submit </Button>
    </Box>
  )
}

// const RelationForm: FC = () => {
//   type Form
// }