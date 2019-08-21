/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: sections
// ====================================================

export interface sections_allSectionsJson_nodes {
  __typename: "SectionsJson";
  pages: (string | null)[] | null;
  title: string | null;
}

export interface sections_allSectionsJson {
  __typename: "SectionsJsonConnection";
  nodes: sections_allSectionsJson_nodes[];
}

export interface sections {
  allSectionsJson: sections_allSectionsJson;
}
