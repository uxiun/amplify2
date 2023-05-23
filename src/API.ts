/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateNoteInput = {
  id?: string | null,
  name: string,
  content?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  userID: string,
  publicity: Publicity,
};

export enum Publicity {
  public = "public",
  private = "private",
}


export type ModelNoteConditionInput = {
  name?: ModelStringInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  publicity?: ModelPublicityInput | null,
  and?: Array< ModelNoteConditionInput | null > | null,
  or?: Array< ModelNoteConditionInput | null > | null,
  not?: ModelNoteConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelPublicityInput = {
  eq?: Publicity | null,
  ne?: Publicity | null,
};

export type Note = {
  __typename: "Note",
  id: string,
  name: string,
  content?: string | null,
  createdAt: string,
  updatedAt: string,
  user?: User | null,
  userID: string,
  publicity: Publicity,
  relfrom?: ModelRelationConnection | null,
  relto?: ModelRelationConnection | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  notes?: ModelNoteConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelNoteConnection = {
  __typename: "ModelNoteConnection",
  items:  Array<Note | null >,
  nextToken?: string | null,
};

export type ModelRelationConnection = {
  __typename: "ModelRelationConnection",
  items:  Array<Relation | null >,
  nextToken?: string | null,
};

export type Relation = {
  __typename: "Relation",
  to: Note,
  from: Note,
  fromID: string,
  toID: string,
  rel: Rel,
  relID: string,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type Rel = {
  __typename: "Rel",
  id: string,
  name: string,
  parentID?: string | null,
  parent?: Rel | null,
  children?: ModelRelConnection | null,
  relations?: ModelRelationConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelRelConnection = {
  __typename: "ModelRelConnection",
  items:  Array<Rel | null >,
  nextToken?: string | null,
};

export type UpdateNoteInput = {
  id: string,
  name?: string | null,
  content?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  userID?: string | null,
  publicity?: Publicity | null,
};

export type DeleteNoteInput = {
  id: string,
};

export type CreateRelationInput = {
  fromID: string,
  toID: string,
  relID: string,
  id?: string | null,
};

export type ModelRelationConditionInput = {
  fromID?: ModelIDInput | null,
  toID?: ModelIDInput | null,
  relID?: ModelIDInput | null,
  and?: Array< ModelRelationConditionInput | null > | null,
  or?: Array< ModelRelationConditionInput | null > | null,
  not?: ModelRelationConditionInput | null,
};

export type UpdateRelationInput = {
  fromID?: string | null,
  toID?: string | null,
  relID?: string | null,
  id: string,
};

export type DeleteRelationInput = {
  id: string,
};

export type CreateRelInput = {
  id?: string | null,
  name: string,
  parentID?: string | null,
};

export type ModelRelConditionInput = {
  name?: ModelStringInput | null,
  parentID?: ModelIDInput | null,
  and?: Array< ModelRelConditionInput | null > | null,
  or?: Array< ModelRelConditionInput | null > | null,
  not?: ModelRelConditionInput | null,
};

export type UpdateRelInput = {
  id: string,
  name?: string | null,
  parentID?: string | null,
};

export type DeleteRelInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  name: string,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type ModelNoteFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  publicity?: ModelPublicityInput | null,
  and?: Array< ModelNoteFilterInput | null > | null,
  or?: Array< ModelNoteFilterInput | null > | null,
  not?: ModelNoteFilterInput | null,
};

export type ModelRelationFilterInput = {
  fromID?: ModelIDInput | null,
  toID?: ModelIDInput | null,
  relID?: ModelIDInput | null,
  and?: Array< ModelRelationFilterInput | null > | null,
  or?: Array< ModelRelationFilterInput | null > | null,
  not?: ModelRelationFilterInput | null,
};

export type ModelRelFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  parentID?: ModelIDInput | null,
  and?: Array< ModelRelFilterInput | null > | null,
  or?: Array< ModelRelFilterInput | null > | null,
  not?: ModelRelFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionNoteFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  publicity?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionNoteFilterInput | null > | null,
  or?: Array< ModelSubscriptionNoteFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionRelationFilterInput = {
  fromID?: ModelSubscriptionIDInput | null,
  toID?: ModelSubscriptionIDInput | null,
  relID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionRelationFilterInput | null > | null,
  or?: Array< ModelSubscriptionRelationFilterInput | null > | null,
};

export type ModelSubscriptionRelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  parentID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionRelFilterInput | null > | null,
  or?: Array< ModelSubscriptionRelFilterInput | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type CreateNoteMutationVariables = {
  input: CreateNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type CreateNoteMutation = {
  createNote?:  {
    __typename: "Note",
    id: string,
    name: string,
    content?: string | null,
    createdAt: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      notes?:  {
        __typename: "ModelNoteConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userID: string,
    publicity: Publicity,
    relfrom?:  {
      __typename: "ModelRelationConnection",
      items:  Array< {
        __typename: "Relation",
        fromID: string,
        toID: string,
        relID: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    relto?:  {
      __typename: "ModelRelationConnection",
      items:  Array< {
        __typename: "Relation",
        fromID: string,
        toID: string,
        relID: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateNoteMutationVariables = {
  input: UpdateNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type UpdateNoteMutation = {
  updateNote?:  {
    __typename: "Note",
    id: string,
    name: string,
    content?: string | null,
    createdAt: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      notes?:  {
        __typename: "ModelNoteConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userID: string,
    publicity: Publicity,
    relfrom?:  {
      __typename: "ModelRelationConnection",
      items:  Array< {
        __typename: "Relation",
        fromID: string,
        toID: string,
        relID: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    relto?:  {
      __typename: "ModelRelationConnection",
      items:  Array< {
        __typename: "Relation",
        fromID: string,
        toID: string,
        relID: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteNoteMutationVariables = {
  input: DeleteNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type DeleteNoteMutation = {
  deleteNote?:  {
    __typename: "Note",
    id: string,
    name: string,
    content?: string | null,
    createdAt: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      notes?:  {
        __typename: "ModelNoteConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userID: string,
    publicity: Publicity,
    relfrom?:  {
      __typename: "ModelRelationConnection",
      items:  Array< {
        __typename: "Relation",
        fromID: string,
        toID: string,
        relID: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    relto?:  {
      __typename: "ModelRelationConnection",
      items:  Array< {
        __typename: "Relation",
        fromID: string,
        toID: string,
        relID: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateRelationMutationVariables = {
  input: CreateRelationInput,
  condition?: ModelRelationConditionInput | null,
};

export type CreateRelationMutation = {
  createRelation?:  {
    __typename: "Relation",
    to:  {
      __typename: "Note",
      id: string,
      name: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userID: string,
      publicity: Publicity,
      relfrom?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
      relto?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
    },
    from:  {
      __typename: "Note",
      id: string,
      name: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userID: string,
      publicity: Publicity,
      relfrom?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
      relto?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
    },
    fromID: string,
    toID: string,
    rel:  {
      __typename: "Rel",
      id: string,
      name: string,
      parentID?: string | null,
      parent?:  {
        __typename: "Rel",
        id: string,
        name: string,
        parentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      children?:  {
        __typename: "ModelRelConnection",
        nextToken?: string | null,
      } | null,
      relations?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    relID: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRelationMutationVariables = {
  input: UpdateRelationInput,
  condition?: ModelRelationConditionInput | null,
};

export type UpdateRelationMutation = {
  updateRelation?:  {
    __typename: "Relation",
    to:  {
      __typename: "Note",
      id: string,
      name: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userID: string,
      publicity: Publicity,
      relfrom?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
      relto?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
    },
    from:  {
      __typename: "Note",
      id: string,
      name: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userID: string,
      publicity: Publicity,
      relfrom?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
      relto?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
    },
    fromID: string,
    toID: string,
    rel:  {
      __typename: "Rel",
      id: string,
      name: string,
      parentID?: string | null,
      parent?:  {
        __typename: "Rel",
        id: string,
        name: string,
        parentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      children?:  {
        __typename: "ModelRelConnection",
        nextToken?: string | null,
      } | null,
      relations?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    relID: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRelationMutationVariables = {
  input: DeleteRelationInput,
  condition?: ModelRelationConditionInput | null,
};

export type DeleteRelationMutation = {
  deleteRelation?:  {
    __typename: "Relation",
    to:  {
      __typename: "Note",
      id: string,
      name: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userID: string,
      publicity: Publicity,
      relfrom?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
      relto?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
    },
    from:  {
      __typename: "Note",
      id: string,
      name: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userID: string,
      publicity: Publicity,
      relfrom?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
      relto?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
    },
    fromID: string,
    toID: string,
    rel:  {
      __typename: "Rel",
      id: string,
      name: string,
      parentID?: string | null,
      parent?:  {
        __typename: "Rel",
        id: string,
        name: string,
        parentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      children?:  {
        __typename: "ModelRelConnection",
        nextToken?: string | null,
      } | null,
      relations?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    relID: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRelMutationVariables = {
  input: CreateRelInput,
  condition?: ModelRelConditionInput | null,
};

export type CreateRelMutation = {
  createRel?:  {
    __typename: "Rel",
    id: string,
    name: string,
    parentID?: string | null,
    parent?:  {
      __typename: "Rel",
      id: string,
      name: string,
      parentID?: string | null,
      parent?:  {
        __typename: "Rel",
        id: string,
        name: string,
        parentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      children?:  {
        __typename: "ModelRelConnection",
        nextToken?: string | null,
      } | null,
      relations?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    children?:  {
      __typename: "ModelRelConnection",
      items:  Array< {
        __typename: "Rel",
        id: string,
        name: string,
        parentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    relations?:  {
      __typename: "ModelRelationConnection",
      items:  Array< {
        __typename: "Relation",
        fromID: string,
        toID: string,
        relID: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRelMutationVariables = {
  input: UpdateRelInput,
  condition?: ModelRelConditionInput | null,
};

export type UpdateRelMutation = {
  updateRel?:  {
    __typename: "Rel",
    id: string,
    name: string,
    parentID?: string | null,
    parent?:  {
      __typename: "Rel",
      id: string,
      name: string,
      parentID?: string | null,
      parent?:  {
        __typename: "Rel",
        id: string,
        name: string,
        parentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      children?:  {
        __typename: "ModelRelConnection",
        nextToken?: string | null,
      } | null,
      relations?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    children?:  {
      __typename: "ModelRelConnection",
      items:  Array< {
        __typename: "Rel",
        id: string,
        name: string,
        parentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    relations?:  {
      __typename: "ModelRelationConnection",
      items:  Array< {
        __typename: "Relation",
        fromID: string,
        toID: string,
        relID: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRelMutationVariables = {
  input: DeleteRelInput,
  condition?: ModelRelConditionInput | null,
};

export type DeleteRelMutation = {
  deleteRel?:  {
    __typename: "Rel",
    id: string,
    name: string,
    parentID?: string | null,
    parent?:  {
      __typename: "Rel",
      id: string,
      name: string,
      parentID?: string | null,
      parent?:  {
        __typename: "Rel",
        id: string,
        name: string,
        parentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      children?:  {
        __typename: "ModelRelConnection",
        nextToken?: string | null,
      } | null,
      relations?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    children?:  {
      __typename: "ModelRelConnection",
      items:  Array< {
        __typename: "Rel",
        id: string,
        name: string,
        parentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    relations?:  {
      __typename: "ModelRelationConnection",
      items:  Array< {
        __typename: "Relation",
        fromID: string,
        toID: string,
        relID: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        name: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        userID: string,
        publicity: Publicity,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        name: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        userID: string,
        publicity: Publicity,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        name: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        userID: string,
        publicity: Publicity,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetNoteQueryVariables = {
  id: string,
};

export type GetNoteQuery = {
  getNote?:  {
    __typename: "Note",
    id: string,
    name: string,
    content?: string | null,
    createdAt: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      notes?:  {
        __typename: "ModelNoteConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userID: string,
    publicity: Publicity,
    relfrom?:  {
      __typename: "ModelRelationConnection",
      items:  Array< {
        __typename: "Relation",
        fromID: string,
        toID: string,
        relID: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    relto?:  {
      __typename: "ModelRelationConnection",
      items:  Array< {
        __typename: "Relation",
        fromID: string,
        toID: string,
        relID: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListNotesQueryVariables = {
  filter?: ModelNoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNotesQuery = {
  listNotes?:  {
    __typename: "ModelNoteConnection",
    items:  Array< {
      __typename: "Note",
      id: string,
      name: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userID: string,
      publicity: Publicity,
      relfrom?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
      relto?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRelationQueryVariables = {
  id: string,
};

export type GetRelationQuery = {
  getRelation?:  {
    __typename: "Relation",
    to:  {
      __typename: "Note",
      id: string,
      name: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userID: string,
      publicity: Publicity,
      relfrom?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
      relto?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
    },
    from:  {
      __typename: "Note",
      id: string,
      name: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userID: string,
      publicity: Publicity,
      relfrom?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
      relto?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
    },
    fromID: string,
    toID: string,
    rel:  {
      __typename: "Rel",
      id: string,
      name: string,
      parentID?: string | null,
      parent?:  {
        __typename: "Rel",
        id: string,
        name: string,
        parentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      children?:  {
        __typename: "ModelRelConnection",
        nextToken?: string | null,
      } | null,
      relations?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    relID: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRelationsQueryVariables = {
  filter?: ModelRelationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRelationsQuery = {
  listRelations?:  {
    __typename: "ModelRelationConnection",
    items:  Array< {
      __typename: "Relation",
      to:  {
        __typename: "Note",
        id: string,
        name: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        userID: string,
        publicity: Publicity,
      },
      from:  {
        __typename: "Note",
        id: string,
        name: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        userID: string,
        publicity: Publicity,
      },
      fromID: string,
      toID: string,
      rel:  {
        __typename: "Rel",
        id: string,
        name: string,
        parentID?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      relID: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRelQueryVariables = {
  id: string,
};

export type GetRelQuery = {
  getRel?:  {
    __typename: "Rel",
    id: string,
    name: string,
    parentID?: string | null,
    parent?:  {
      __typename: "Rel",
      id: string,
      name: string,
      parentID?: string | null,
      parent?:  {
        __typename: "Rel",
        id: string,
        name: string,
        parentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      children?:  {
        __typename: "ModelRelConnection",
        nextToken?: string | null,
      } | null,
      relations?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    children?:  {
      __typename: "ModelRelConnection",
      items:  Array< {
        __typename: "Rel",
        id: string,
        name: string,
        parentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    relations?:  {
      __typename: "ModelRelationConnection",
      items:  Array< {
        __typename: "Relation",
        fromID: string,
        toID: string,
        relID: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRelsQueryVariables = {
  filter?: ModelRelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRelsQuery = {
  listRels?:  {
    __typename: "ModelRelConnection",
    items:  Array< {
      __typename: "Rel",
      id: string,
      name: string,
      parentID?: string | null,
      parent?:  {
        __typename: "Rel",
        id: string,
        name: string,
        parentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      children?:  {
        __typename: "ModelRelConnection",
        nextToken?: string | null,
      } | null,
      relations?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        name: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        userID: string,
        publicity: Publicity,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      notes?:  {
        __typename: "ModelNoteConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type NotesByUserIDAndContentQueryVariables = {
  userID: string,
  content?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type NotesByUserIDAndContentQuery = {
  notesByUserIDAndContent?:  {
    __typename: "ModelNoteConnection",
    items:  Array< {
      __typename: "Note",
      id: string,
      name: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userID: string,
      publicity: Publicity,
      relfrom?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
      relto?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type RelationsByFromIDQueryVariables = {
  fromID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRelationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type RelationsByFromIDQuery = {
  relationsByFromID?:  {
    __typename: "ModelRelationConnection",
    items:  Array< {
      __typename: "Relation",
      to:  {
        __typename: "Note",
        id: string,
        name: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        userID: string,
        publicity: Publicity,
      },
      from:  {
        __typename: "Note",
        id: string,
        name: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        userID: string,
        publicity: Publicity,
      },
      fromID: string,
      toID: string,
      rel:  {
        __typename: "Rel",
        id: string,
        name: string,
        parentID?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      relID: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type RelationsByToIDQueryVariables = {
  toID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRelationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type RelationsByToIDQuery = {
  relationsByToID?:  {
    __typename: "ModelRelationConnection",
    items:  Array< {
      __typename: "Relation",
      to:  {
        __typename: "Note",
        id: string,
        name: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        userID: string,
        publicity: Publicity,
      },
      from:  {
        __typename: "Note",
        id: string,
        name: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        userID: string,
        publicity: Publicity,
      },
      fromID: string,
      toID: string,
      rel:  {
        __typename: "Rel",
        id: string,
        name: string,
        parentID?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      relID: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type RelationsByRelIDQueryVariables = {
  relID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRelationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type RelationsByRelIDQuery = {
  relationsByRelID?:  {
    __typename: "ModelRelationConnection",
    items:  Array< {
      __typename: "Relation",
      to:  {
        __typename: "Note",
        id: string,
        name: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        userID: string,
        publicity: Publicity,
      },
      from:  {
        __typename: "Note",
        id: string,
        name: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        userID: string,
        publicity: Publicity,
      },
      fromID: string,
      toID: string,
      rel:  {
        __typename: "Rel",
        id: string,
        name: string,
        parentID?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      relID: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type RelsByParentIDAndNameQueryVariables = {
  parentID: string,
  name?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type RelsByParentIDAndNameQuery = {
  relsByParentIDAndName?:  {
    __typename: "ModelRelConnection",
    items:  Array< {
      __typename: "Rel",
      id: string,
      name: string,
      parentID?: string | null,
      parent?:  {
        __typename: "Rel",
        id: string,
        name: string,
        parentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      children?:  {
        __typename: "ModelRelConnection",
        nextToken?: string | null,
      } | null,
      relations?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateNoteSubscriptionVariables = {
  filter?: ModelSubscriptionNoteFilterInput | null,
};

export type OnCreateNoteSubscription = {
  onCreateNote?:  {
    __typename: "Note",
    id: string,
    name: string,
    content?: string | null,
    createdAt: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      notes?:  {
        __typename: "ModelNoteConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userID: string,
    publicity: Publicity,
    relfrom?:  {
      __typename: "ModelRelationConnection",
      items:  Array< {
        __typename: "Relation",
        fromID: string,
        toID: string,
        relID: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    relto?:  {
      __typename: "ModelRelationConnection",
      items:  Array< {
        __typename: "Relation",
        fromID: string,
        toID: string,
        relID: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateNoteSubscriptionVariables = {
  filter?: ModelSubscriptionNoteFilterInput | null,
};

export type OnUpdateNoteSubscription = {
  onUpdateNote?:  {
    __typename: "Note",
    id: string,
    name: string,
    content?: string | null,
    createdAt: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      notes?:  {
        __typename: "ModelNoteConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userID: string,
    publicity: Publicity,
    relfrom?:  {
      __typename: "ModelRelationConnection",
      items:  Array< {
        __typename: "Relation",
        fromID: string,
        toID: string,
        relID: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    relto?:  {
      __typename: "ModelRelationConnection",
      items:  Array< {
        __typename: "Relation",
        fromID: string,
        toID: string,
        relID: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteNoteSubscriptionVariables = {
  filter?: ModelSubscriptionNoteFilterInput | null,
};

export type OnDeleteNoteSubscription = {
  onDeleteNote?:  {
    __typename: "Note",
    id: string,
    name: string,
    content?: string | null,
    createdAt: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      notes?:  {
        __typename: "ModelNoteConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userID: string,
    publicity: Publicity,
    relfrom?:  {
      __typename: "ModelRelationConnection",
      items:  Array< {
        __typename: "Relation",
        fromID: string,
        toID: string,
        relID: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    relto?:  {
      __typename: "ModelRelationConnection",
      items:  Array< {
        __typename: "Relation",
        fromID: string,
        toID: string,
        relID: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateRelationSubscriptionVariables = {
  filter?: ModelSubscriptionRelationFilterInput | null,
};

export type OnCreateRelationSubscription = {
  onCreateRelation?:  {
    __typename: "Relation",
    to:  {
      __typename: "Note",
      id: string,
      name: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userID: string,
      publicity: Publicity,
      relfrom?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
      relto?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
    },
    from:  {
      __typename: "Note",
      id: string,
      name: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userID: string,
      publicity: Publicity,
      relfrom?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
      relto?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
    },
    fromID: string,
    toID: string,
    rel:  {
      __typename: "Rel",
      id: string,
      name: string,
      parentID?: string | null,
      parent?:  {
        __typename: "Rel",
        id: string,
        name: string,
        parentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      children?:  {
        __typename: "ModelRelConnection",
        nextToken?: string | null,
      } | null,
      relations?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    relID: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRelationSubscriptionVariables = {
  filter?: ModelSubscriptionRelationFilterInput | null,
};

export type OnUpdateRelationSubscription = {
  onUpdateRelation?:  {
    __typename: "Relation",
    to:  {
      __typename: "Note",
      id: string,
      name: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userID: string,
      publicity: Publicity,
      relfrom?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
      relto?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
    },
    from:  {
      __typename: "Note",
      id: string,
      name: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userID: string,
      publicity: Publicity,
      relfrom?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
      relto?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
    },
    fromID: string,
    toID: string,
    rel:  {
      __typename: "Rel",
      id: string,
      name: string,
      parentID?: string | null,
      parent?:  {
        __typename: "Rel",
        id: string,
        name: string,
        parentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      children?:  {
        __typename: "ModelRelConnection",
        nextToken?: string | null,
      } | null,
      relations?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    relID: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRelationSubscriptionVariables = {
  filter?: ModelSubscriptionRelationFilterInput | null,
};

export type OnDeleteRelationSubscription = {
  onDeleteRelation?:  {
    __typename: "Relation",
    to:  {
      __typename: "Note",
      id: string,
      name: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userID: string,
      publicity: Publicity,
      relfrom?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
      relto?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
    },
    from:  {
      __typename: "Note",
      id: string,
      name: string,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userID: string,
      publicity: Publicity,
      relfrom?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
      relto?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
    },
    fromID: string,
    toID: string,
    rel:  {
      __typename: "Rel",
      id: string,
      name: string,
      parentID?: string | null,
      parent?:  {
        __typename: "Rel",
        id: string,
        name: string,
        parentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      children?:  {
        __typename: "ModelRelConnection",
        nextToken?: string | null,
      } | null,
      relations?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    relID: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRelSubscriptionVariables = {
  filter?: ModelSubscriptionRelFilterInput | null,
};

export type OnCreateRelSubscription = {
  onCreateRel?:  {
    __typename: "Rel",
    id: string,
    name: string,
    parentID?: string | null,
    parent?:  {
      __typename: "Rel",
      id: string,
      name: string,
      parentID?: string | null,
      parent?:  {
        __typename: "Rel",
        id: string,
        name: string,
        parentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      children?:  {
        __typename: "ModelRelConnection",
        nextToken?: string | null,
      } | null,
      relations?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    children?:  {
      __typename: "ModelRelConnection",
      items:  Array< {
        __typename: "Rel",
        id: string,
        name: string,
        parentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    relations?:  {
      __typename: "ModelRelationConnection",
      items:  Array< {
        __typename: "Relation",
        fromID: string,
        toID: string,
        relID: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRelSubscriptionVariables = {
  filter?: ModelSubscriptionRelFilterInput | null,
};

export type OnUpdateRelSubscription = {
  onUpdateRel?:  {
    __typename: "Rel",
    id: string,
    name: string,
    parentID?: string | null,
    parent?:  {
      __typename: "Rel",
      id: string,
      name: string,
      parentID?: string | null,
      parent?:  {
        __typename: "Rel",
        id: string,
        name: string,
        parentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      children?:  {
        __typename: "ModelRelConnection",
        nextToken?: string | null,
      } | null,
      relations?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    children?:  {
      __typename: "ModelRelConnection",
      items:  Array< {
        __typename: "Rel",
        id: string,
        name: string,
        parentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    relations?:  {
      __typename: "ModelRelationConnection",
      items:  Array< {
        __typename: "Relation",
        fromID: string,
        toID: string,
        relID: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRelSubscriptionVariables = {
  filter?: ModelSubscriptionRelFilterInput | null,
};

export type OnDeleteRelSubscription = {
  onDeleteRel?:  {
    __typename: "Rel",
    id: string,
    name: string,
    parentID?: string | null,
    parent?:  {
      __typename: "Rel",
      id: string,
      name: string,
      parentID?: string | null,
      parent?:  {
        __typename: "Rel",
        id: string,
        name: string,
        parentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      children?:  {
        __typename: "ModelRelConnection",
        nextToken?: string | null,
      } | null,
      relations?:  {
        __typename: "ModelRelationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    children?:  {
      __typename: "ModelRelConnection",
      items:  Array< {
        __typename: "Rel",
        id: string,
        name: string,
        parentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    relations?:  {
      __typename: "ModelRelationConnection",
      items:  Array< {
        __typename: "Relation",
        fromID: string,
        toID: string,
        relID: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        name: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        userID: string,
        publicity: Publicity,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        name: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        userID: string,
        publicity: Publicity,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        name: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        userID: string,
        publicity: Publicity,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
