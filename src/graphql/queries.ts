/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
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
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getRelation = /* GraphQL */ `
  query GetRelation($id: ID!) {
    getRelation(id: $id) {
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
export const listRelations = /* GraphQL */ `
  query ListRelations(
    $filter: ModelRelationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRelations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        to {
          id
          name
          content
          createdAt
          updatedAt
          userID
          publicity
        }
        from {
          id
          name
          content
          createdAt
          updatedAt
          userID
          publicity
        }
        fromID
        toID
        rel {
          id
          name
          parentID
          createdAt
          updatedAt
        }
        relID
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRel = /* GraphQL */ `
  query GetRel($id: ID!) {
    getRel(id: $id) {
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
export const listRels = /* GraphQL */ `
  query ListRels(
    $filter: ModelRelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        notes {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const notesByUserIDAndContent = /* GraphQL */ `
  query NotesByUserIDAndContent(
    $userID: ID!
    $content: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notesByUserIDAndContent(
      userID: $userID
      content: $content
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const relationsByFromID = /* GraphQL */ `
  query RelationsByFromID(
    $fromID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRelationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    relationsByFromID(
      fromID: $fromID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        to {
          id
          name
          content
          createdAt
          updatedAt
          userID
          publicity
        }
        from {
          id
          name
          content
          createdAt
          updatedAt
          userID
          publicity
        }
        fromID
        toID
        rel {
          id
          name
          parentID
          createdAt
          updatedAt
        }
        relID
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const relationsByToID = /* GraphQL */ `
  query RelationsByToID(
    $toID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRelationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    relationsByToID(
      toID: $toID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        to {
          id
          name
          content
          createdAt
          updatedAt
          userID
          publicity
        }
        from {
          id
          name
          content
          createdAt
          updatedAt
          userID
          publicity
        }
        fromID
        toID
        rel {
          id
          name
          parentID
          createdAt
          updatedAt
        }
        relID
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const relationsByRelID = /* GraphQL */ `
  query RelationsByRelID(
    $relID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRelationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    relationsByRelID(
      relID: $relID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        to {
          id
          name
          content
          createdAt
          updatedAt
          userID
          publicity
        }
        from {
          id
          name
          content
          createdAt
          updatedAt
          userID
          publicity
        }
        fromID
        toID
        rel {
          id
          name
          parentID
          createdAt
          updatedAt
        }
        relID
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const relsByParentIDAndName = /* GraphQL */ `
  query RelsByParentIDAndName(
    $parentID: ID!
    $name: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelRelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    relsByParentIDAndName(
      parentID: $parentID
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
