import { CreateRelMutationVariables, CreateRelationMutationVariables, GetNoteQueryVariables, ListRelsQueryVariables, ModelRelationConditionInput, Note } from "@/API"
import { getNote, listNotes, listRels } from "@/graphql/queries"
import { API } from "aws-amplify"
import { CreateRelationInput } from "@/API"
import { createRel, createRelation } from "@/graphql/mutations"

export const fetchNotes = async() => {
  const apidata: any = await API.graphql({query: listNotes})
  const fetchednotes = apidata.data.listNotes.items
  return fetchednotes
}

export const fetchOneNote = async(id: string) => {
  const variables: GetNoteQueryVariables = {
    id
  }
  const apidata: any = await API.graphql({query: getNote, variables})
  return apidata.data.getNote.items
}


export const connectNote = async(variables: CreateRelationMutationVariables) => {
  const res: any = await API.graphql({query: createRelation, variables})
  console.log("connect() res=", res);
  return res
}

export const makeRel = async(variables: CreateRelMutationVariables) => {
  const res = await API.graphql({
    query: createRel, variables
  })
  console.log("makeRel(), res=", res)
  return res  as any
}

export const fetchListRel = async(variables: ListRelsQueryVariables) => {
  const res = await API.graphql({
    query: listRels, variables
  })
  // console.log("fetchListRel(), res=", res)
  return res.data.listRels.items as any
}