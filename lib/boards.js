var Boards = function (_http) {
    this._http = _http;
};

/**
 * Show All Pipelines in a repo board
 * This method returns all pipelines in a repo board
 * @param int   repoId      github id of repository
 * @memberof    Boards
 * @method      getBoard
 */
Boards.prototype.getBoard = async function (repoId) {
  const { pipelines } = await this._http._get('p1/repositories/' + repoId + '/board', {}) || {};
  return pipelines;
};


/**
* Show All Pipelines in a repo board for a given workspace id
* This method returns all pipelines in a repo board
* @param int   workspaceId  zenhub id of workspace
* @param int   repoId      github id of repository
* @memberof    Boards
* @method      getBoardForWorkspace
*/
Boards.prototype.getBoardForWorkspace = async function (workspaceId, repoId) {
  const { pipelines } = await this._http._get('p2/workspaces/' + workspaceId + '/repositories/' + repoId + '/board', {});
  return pipelines
};

module.exports = Boards;
