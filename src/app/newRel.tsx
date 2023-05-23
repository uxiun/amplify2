import { CreateRelInput } from "@/API";
import { Box, TextField } from "@mui/material";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { fetchListRel, makeRel } from "./api/gen";
import { Button } from "@aws-amplify/ui-react";
import { useAtom } from "jotai";
import { allrelAtom } from "./jotai";

const NewRel: FC = () => {
  const [allrel, setAllRel] = useAtom(allrelAtom)
  type Form = CreateRelInput
  const {control, handleSubmit} = useForm<Form>({
    defaultValues: {
      id: "",
      name: "",
      parentID: "",
    }
  })
  const controllerWrap = (name: keyof Form) => function FC() {return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: "input something"
      }}
      render={({field})=>(
        <TextField {...field}
          label={name}
        />
      )}
    />
  )}

  const submit = (f: Form) => {

    makeRel({input: {
      ...f, parentID: f.parentID?.length??0 == 0 ?
        null : f.parentID
    }}).then(res => {
      fetchListRel({}).then(res => setAllRel(res))
    })
  }

  return(<>
    <Box component={"form"} onSubmit={handleSubmit(submit)}>
      {[
        controllerWrap("name")(),
        controllerWrap("id")(),
        controllerWrap("parentID")(),
      ]}
      <Button type="submit">submit</Button>
    </Box>
  </>)
}

export default NewRel