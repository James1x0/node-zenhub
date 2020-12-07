var Issues = function (_http) {
    this._http = _http;
};

/**
 * Show issue information
 * This method returns all issue information
 * @param int   repoId      github id of repository
 * @param int   issueNumber github id of issue
 * @memberof    Issues
 * @method      getIssue
 */
Issues.prototype.getIssueData = function (repoId, issueNumber) {
    return this._http._get('repositories/' + repoId + '/issues/' + issueNumber, {});
};

/**
 * Show issue Events
 * This method returns all issue events
 * @param int   repoId      github id of repository
 * @param int   issueNumber github id of issue
 * @memberof    Issues
 * @method      getIssueEvents
 */
Issues.prototype.getIssueEvents = function (repoId, issueNumber) {
    return this._http._get('repositories/' + repoId + '/issues/' + issueNumber + '/events', {});
};

/**
 * Set estimate in issue
 * This method set estimate for an issue on Issues.
 * @param int   repoId      github id of repository
 * @param int   issueNumber github id of issue
 * @param object    payload      contains estimate to set for the issue, see https://github.com/IssuesIO/API#set-estimate-for-issue for payload format
 * @memberof    Issues
 * @method      setEstimateForIssue
 */
Issues.prototype.setEstimateForIssue = function (repoId, issueNumber, payload) {
    return this._http._put('repositories/' + repoId + '/issues/' + issueNumber + '/estimate', {}, payload);
};

/**
 * Moves an issue between the Pipelines in your repository.
 *
 * @param int   repoId      github id of repository
 * @param int   issue_number      github id of issue to convert
 * @param object    payload      see https://github.com/ZenHubIO/API#move-an-issue-between-pipelines for payload format
 * @memberof    Issues
 * @method      moveIssueBetweenPipelines
 */
Issues.prototype.moveIssueBetweenPipelines = function (repoId, issueNumber, payload) {
    return this._http._post('repositories/' + repoId + '/issues/' + issueNumber + '/moves', {}, payload);
};

/**
 * Connects an issue via the beta api, to another api
 * https://api.zenhub.com/v4/repositories/$repoId$/connection
 *
 * @param int       repoId            github id of repository
 * @param int       issueNumber       github id of issue to connect
 * @param int       toRepoId          github id of repository to connect to
 * @param int       toIssueNumber     github id of issue to connect to
 * @memberof    Issues
 * @method      moveIssueBetweenPipelines
 */
Issues.prototype.connectIssue = function (repoId, issueNumber, toRepoId, toIssueNumber) {
    return this._http._post(`repositories/${repoId}/connection`, {}, {
        issue_number: issueNumber,
        connected_repo_id: toRepoId,
        connected_issue_number: toIssueNumber
    }); // beta flag
};

module.exports = Issues;
