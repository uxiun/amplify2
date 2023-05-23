/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      content
      createdAt
      updatedAt
      user {
        id
        name
        notes {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      publicity
      relfrom {
        items {
          fromID
          toID
          relID
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      relto {
        items {
          fromID
          toID
          relID
          id
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      content
      createdAt
      updatedAt
      user {
        id
        name
        notes {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      publicity
      relfrom {
        items {
          fromID
          toID
          relID
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      relto {
        items {
          fromID
          toID
          relID
          id
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      content
      createdAt
      updatedAt
      user {
        id
        name
        notes {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      publicity
      relfrom {
        items {
          fromID
          toID
          relID
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      relto {
        items {
          fromID
          toID
          relID
          id
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createRelation = /* GraphQL */ `
  mutation CreateRelation(
    $input: CreateRelationInput!
    $condition: ModelRelationConditionInput
  ) {
    createRelation(input: $input, condition: $condition) {
      to {
        id
        name
        content
        createdAt
        updatedAt
        user {
          id
          name
          createdAt
          updatedAt
        }
        userID
        publicity
        relfrom {
          nextToken
        }
        relto {
          nextToken
        }
      }
      from {
        id
        name
        content
        createdAt
        updatedAt
        user {
          id
          name
          createdAt
          updatedAt
        }
        userID
        publicity
        relfrom {
          nextToken
        }
        relto {
          nextToken
        }
      }
      fromID
      toID
      rel {
        id
        name
        parentID
        parent {
          id
          name
          parentID
          createdAt
          updatedAt
        }
        children {
          nextToken
        }
        relations {
          nextToken
        }
        createdAt
        updatedAt
      }
      relID
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateRelation = /* GraphQL */ `
  mutation UpdateRelation(
    $input: UpdateRelationInput!
    $condition: ModelRelationConditionInput
  ) {
    updateRelation(input: $input, condition: $condition) {
      to {
        id
        name
        content
        createdAt
        updatedAt
        user {
          id
          name
          createdAt
          updatedAt
        }
        userID
        publicity
        relfrom {
          nextToken
        }
        relto {
          nextToken
        }
      }
      from {
        id
        name
        content
        createdAt
        updatedAt
        user {
          id
          name
          createdAt
          updatedAt
        }
        userID
        publicity
        relfrom {
          nextToken
        }
        relto {
          nextToken
        }
      }
      fromID
      toID
      rel {
        id
        name
        parentID
        parent {
          id
          name
          parentID
          createdAt
          updatedAt
        }
        children {
          nextToken
        }
        relations {
          nextToken
        }
        createdAt
        updatedAt
      }
      relID
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteRelation = /* GraphQL */ `
  mutation DeleteRelation(
    $input: DeleteRelationInput!
    $condition: ModelRelationConditionInput
  ) {
    deleteRelation(input: $input, condition: $condition) {
      to {
        id
        name
        content
        createdAt
        updatedAt
        user {
          id
          name
          createdAt
          updatedAt
        }
        userID
        publicity
        relfrom {
          nextToken
        }
        relto {
          nextToken
        }
      }
      from {
        id
        name
        content
        createdAt
        updatedAt
        user {
          id
          name
          createdAt
          updatedAt
        }
        userID
        publicity
        relfrom {
          nextToken
        }
        relto {
          nextToken
        }
      }
      fromID
      toID
      rel {
        id
        name
        parentID
        parent {
          id
          name
          parentID
          createdAt
          updatedAt
        }
        children {
          nextToken
        }
        relations {
          nextToken
        }
        createdAt
        updatedAt
      }
      relID
      id
      createdAt
      updatedAt
    }
  }
`;
export const createRel = /* GraphQL */ `
  mutation CreateRel(
    $input: CreateRelInput!
    $condition: ModelRelConditionInput
  ) {
    createRel(input: $input, condition: $condition) {
      id
      name
      parentID
      parent {
        id
        name
        parentID
        parent {
          id
          name
          parentID
          createdAt
          updatedAt
        }
        children {
          nextToken
        }
        relations {
          nextToken
        }
        createdAt
        updatedAt
      }
      children {
        items {
          id
          name
          parentID
          createdAt
          updatedAt
        }
        nextToken
      }
      relations {
        items {
          fromID
          toID
          relID
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateRel = /* GraphQL */ `
  mutation UpdateRel(
    $input: UpdateRelInput!
    $condition: ModelRelConditionInput
  ) {
    updateRel(input: $input, condition: $condition) {
      id
      name
      parentID
      parent {
        id
        name
        parentID
        parent {
          id
          name
          parentID
          createdAt
          updatedAt
        }
        children {
          nextToken
        }
        relations {
          nextToken
        }
        createdAt
        updatedAt
      }
      children {
        items {
          id
          name
          parentID
          createdAt
          updatedAt
        }
        nextToken
      }
      relations {
        items {
          fromID
          toID
          relID
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteRel = /* GraphQL */ `
  mutation DeleteRel(
    $input: DeleteRelInput!
    $condition: ModelRelConditionInput
  ) {
    deleteRel(input: $input, condition: $condition) {
      id
      name
      parentID
      parent {
        id
        name
        parentID
        parent {
          id
          name
          parentID
          createdAt
          updatedAt
        }
        children {
          nextToken
        }
        relations {
          nextToken
        }
        createdAt
        updatedAt
      }
      children {
        items {
          id
          name
          parentID
          createdAt
          updatedAt
        }
        nextToken
      }
      relations {
        items {
          fromID
          toID
          relID
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      notes {
        items {
          id
          name
          content
          createdAt
          updatedAt
          userID
          publicity
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      notes {
        items {
          id
          name
          content
          createdAt
          updatedAt
          userID
          publicity
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      notes {
        items {
          id
          name
          content
          createdAt
          updatedAt
          userID
          publicity
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
