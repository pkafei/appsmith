export enum GitSyncModalTab {
  GIT_CONNECTION,
  DEPLOY,
  MERGE,
}

export type GitConfig = {
  authorName: string;
  authorEmail: string;
};

export type Branch = {
  branchName: string;
  default: boolean;
};

export type MergeStatus = {
  merge: boolean;
  conflictingFiles: Array<string>;
};
