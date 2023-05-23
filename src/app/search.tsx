import { ModelNoteFilterInput, Note } from "@/API";
import { listNotes } from "@/graphql/queries";
import { Button } from "@aws-amplify/ui-react";
import { Box, TextField } from "@mui/material";
import { API } from "aws-amplify";
import { useAtom } from "jotai";
import { FC, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { noteFilterInputAtom, noteFilterResultAtom } from "./jotai";
import NoteEach from "./NoteEach";

type SearchProps = {
  target: Note
}
const Search: FC = () => {
  const [noteFil, setNoteFil] = useAtom(noteFilterInputAtom);
  const [_, setResult] = useAtom(noteFilterResultAtom)
  type Form = {
    name: string
    content: string
  }
  const {control, handleSubmit} = useForm<Form>({
    defaultValues: {
      name: "",
      content: "",
    }
  })

  const submit = async(f: Form) => {
    const filterInput: ModelNoteFilterInput = {
      name: {
        contains: f.name
      },
      content: {
        contains: f.content
      }
    }
    filterNotes(filterInput).then(res => setResult(res.data.listNotes.items))
    .finally(() => console.log("filterInput:", filterInput))
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
      component={"form"}
      onSubmit={handleSubmit(submit)}
    >
      {[controllerWrap("name")(),
        controllerWrap("content")()
      ]}
      <Button type="submit">submit</Button>
    </Box>
  )
}

const filterNotes = async(listNoteFil: ModelNoteFilterInput) => {
  const res = await API.graphql({
    query: listNotes,
    variables: {
      filter: listNoteFil,
      limit: 5
    }
  })
  return res as any
}

const SearchResult: FC = () => {
  const [listNoteFil] = useAtom(noteFilterInputAtom)
  const [filterResult] = useAtom(noteFilterResultAtom)
  // useEffect(()=>{
  //   filterNotes(listNoteFil).then(res => setResult(res.data.listNotes.items))
  //   .finally(() => console.log(listNoteFil))
  // }, [listNoteFil])
  return(<>
    {filterResult.map(note => <NoteEach key={note.id} note={note} /> )}
  </>)
}

const SearchWrap: FC = () => {
  return(<div className="searchWrap">
    <Search/>
    <SearchResult/>
  </div>)
}
export default SearchWrap