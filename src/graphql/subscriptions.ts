/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($filter: ModelSubscriptionNoteFilterInput) {
    onCreateNote(filter: $filter) {
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
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($filter: ModelSubscriptionNoteFilterInput) {
    onUpdateNote(filter: $filter) {
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
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($filter: ModelSubscriptionNoteFilterInput) {
    onDeleteNote(filter: $filter) {
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
export const onCreateRelation = /* GraphQL */ `
  subscription OnCreateRelation($filter: ModelSubscriptionRelationFilterInput) {
    onCreateRelation(filter: $filter) {
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
export const onUpdateRelation = /* GraphQL */ `
  subscription OnUpdateRelation($filter: ModelSubscriptionRelationFilterInput) {
    onUpdateRelation(filter: $filter) {
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
export const onDeleteRelation = /* GraphQL */ `
  subscription OnDeleteRelation($filter: ModelSubscriptionRelationFilterInput) {
    onDeleteRelation(filter: $filter) {
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
export const onCreateRel = /* GraphQL */ `
  subscription OnCreateRel($filter: ModelSubscriptionRelFilterInput) {
    onCreateRel(filter: $filter) {
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
export const onUpdateRel = /* GraphQL */ `
  subscription OnUpdateRel($filter: ModelSubscriptionRelFilterInput) {
    onUpdateRel(filter: $filter) {
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
export const onDeleteRel = /* GraphQL */ `
  subscription OnDeleteRel($filter: ModelSubscriptionRelFilterInput) {
    onDeleteRel(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
