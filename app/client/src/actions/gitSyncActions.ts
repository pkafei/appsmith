import { ReduxActionTypes } from "constants/ReduxActionConstants";
import { ConnectToGitPayload } from "api/GitSyncAPI";
import { ReduxActionWithCallbacks } from "constants/ReduxActionConstants";
import { GitSyncModalTab, GitConfig, MergeStatus } from "entities/GitSync";
import { GitApplicationMetadata } from "api/ApplicationApi";
import { GitStatusData } from "reducers/uiReducers/gitSyncReducer";
import { ReduxActionErrorTypes } from "../constants/ReduxActionConstants";

// test comment

export const setIsGitSyncModalOpen = (payload: {
  isOpen: boolean;
  tab?: GitSyncModalTab;
}) => {
  return {
    type: ReduxActionTypes.SET_IS_GIT_SYNC_MODAL_OPEN,
    payload,
  };
};

export const commitToRepoInit = (payload: {
  commitMessage: string;
  doPush: boolean;
}) => ({
  type: ReduxActionTypes.COMMIT_TO_GIT_REPO_INIT,
  payload,
});

export const commitToRepoSuccess = () => ({
  type: ReduxActionTypes.COMMIT_TO_GIT_REPO_SUCCESS,
});

export const clearCommitSuccessfulState = () => ({
  type: ReduxActionTypes.CLEAR_COMMIT_SUCCESSFUL_STATE,
});

export const pushToRepoInit = () => ({
  type: ReduxActionTypes.PUSH_TO_GIT_INIT,
});

export const pushToRepoSuccess = () => ({
  type: ReduxActionTypes.PUSH_TO_GIT_SUCCESS,
});

export type ConnectToGitResponse = {
  gitApplicationMetadata: GitApplicationMetadata;
};

type ConnectToGitRequestParams = {
  payload: ConnectToGitPayload;
  onSuccessCallback?: (payload: ConnectToGitResponse) => void;
  onErrorCallback?: (error: string) => void;
};

export type ConnectToGitReduxAction = ReduxActionWithCallbacks<
  ConnectToGitPayload,
  ConnectToGitResponse,
  string
>;

export const connectToGitInit = ({
  onErrorCallback,
  onSuccessCallback,
  payload,
}: ConnectToGitRequestParams): ConnectToGitReduxAction => ({
  type: ReduxActionTypes.CONNECT_TO_GIT_INIT,
  payload,
  onSuccessCallback,
  onErrorCallback,
});

export const connectToGitSuccess = (payload: ConnectToGitResponse) => ({
  type: ReduxActionTypes.CONNECT_TO_GIT_SUCCESS,
  payload,
});

export const switchGitBranchInit = (branch: string) => ({
  type: ReduxActionTypes.SWITCH_GIT_BRANCH_INIT,
  payload: branch,
});

export const createNewBranchInit = ({
  branch,
  onErrorCallback,
  onSuccessCallback,
}: {
  branch: string;
  onSuccessCallback: () => void;
  onErrorCallback: () => void;
}) => ({
  type: ReduxActionTypes.CREATE_NEW_BRANCH_INIT,
  payload: branch,
  onErrorCallback,
  onSuccessCallback,
});

export const setIsGitErrorPopupVisible = (payload: { isVisible: boolean }) => ({
  type: ReduxActionTypes.SHOW_ERROR_POPUP,
  payload,
});

export const showCreateBranchPopup = () => ({
  type: ReduxActionTypes.SHOW_CREATE_GIT_BRANCH_POPUP,
});

export const setIsImportAppViaGitModalOpen = (payload: {
  isOpen: boolean;
  organizationId?: string;
}) => ({
  type: ReduxActionTypes.SET_IS_IMPORT_APP_VIA_GIT_MODAL_OPEN,
  payload,
});

export const updateGlobalGitConfigInit = (payload: GitConfig) => ({
  type: ReduxActionTypes.UPDATE_GLOBAL_GIT_CONFIG_INIT,
  payload,
});

export const updateGlobalGitConfigSuccess = (payload: GitConfig) => ({
  type: ReduxActionTypes.UPDATE_GLOBAL_GIT_CONFIG_SUCCESS,
  payload,
});

export const fetchGlobalGitConfigInit = () => ({
  type: ReduxActionTypes.FETCH_GLOBAL_GIT_CONFIG_INIT,
});

export const fetchGlobalGitConfigSuccess = (payload: GitConfig) => ({
  type: ReduxActionTypes.FETCH_GLOBAL_GIT_CONFIG_SUCCESS,
  payload,
});

export const fetchBranchesInit = () => ({
  type: ReduxActionTypes.FETCH_BRANCHES_INIT,
});

export const fetchBranchesSuccess = (payload: any) => ({
  type: ReduxActionTypes.FETCH_BRANCHES_SUCCESS,
  payload,
});

// Local Git config is repo level
export const updateLocalGitConfigInit = (payload: GitConfig) => ({
  type: ReduxActionTypes.UPDATE_LOCAL_GIT_CONFIG_INIT,
  payload,
});

export const updateLocalGitConfigSuccess = (payload: GitConfig) => ({
  type: ReduxActionTypes.UPDATE_LOCAL_GIT_CONFIG_SUCCESS,
  payload,
});

export const fetchLocalGitConfigInit = () => ({
  type: ReduxActionTypes.FETCH_LOCAL_GIT_CONFIG_INIT,
});

export const fetchLocalGitConfigSuccess = (payload: GitConfig) => ({
  type: ReduxActionTypes.FETCH_LOCAL_GIT_CONFIG_SUCCESS,
  payload,
});

export const fetchGitStatusInit = () => ({
  type: ReduxActionTypes.FETCH_GIT_STATUS_INIT,
  payload: null,
});

export const fetchGitStatusSuccess = (payload: GitStatusData) => ({
  type: ReduxActionTypes.FETCH_GIT_STATUS_SUCCESS,
  payload,
});

export const updateBranchLocally = (payload: string) => ({
  type: ReduxActionTypes.UPDATE_BRANCH_LOCALLY,
  payload,
});

type MergeBranchPayload = { sourceBranch: string; destinationBranch: string };

export const mergeBranchInit = (payload: MergeBranchPayload) => ({
  type: ReduxActionTypes.MERGE_BRANCH_INIT,
  payload,
});

export const mergeBranchSuccess = () => ({
  type: ReduxActionTypes.MERGE_BRANCH_SUCCESS,
});

export const mergeBranchFailure = () => ({
  type: ReduxActionErrorTypes.MERGE_BRANCH_ERROR,
});

export const fetchMergeStatusInit = (payload: MergeBranchPayload) => ({
  type: ReduxActionTypes.FETCH_MERGE_STATUS_INIT,
  payload,
});

export const fetchMergeStatusSuccess = (payload: GitStatusData) => ({
  type: ReduxActionTypes.FETCH_MERGE_STATUS_SUCCESS,
  payload,
});

export const fetchMergeStatusFailure = () => ({
  type: ReduxActionErrorTypes.FETCH_MERGE_STATUS_ERROR,
});

export const resetMergeStatus = () => ({
  type: ReduxActionTypes.RESET_MERGE_STATUS,
});

export const gitPullInit = () => ({
  type: ReduxActionTypes.GIT_PULL_INIT,
});

export const gitPullSuccess = (mergeStatus: MergeStatus) => ({
  type: ReduxActionTypes.GIT_PULL_SUCCESS,
  payload: mergeStatus,
});
