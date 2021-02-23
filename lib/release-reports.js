var ReleaseReports = function (_http) {
    this._http = _http;
};

/**
 * Create a Release Report
 * @param int repoId github id of repository
 * @param object payload contains estimate to set for the issue, see https://github.com/ZenHubIO/API#create-a-release-report for payload format
 * @memberof    ReleaseReports
 * @method      createReleaseReport
 */
ReleaseReports.prototype.createReleaseReport = function (repoId, payload) {
  return this._http._post('p1/repositories/' + repoId + '/reports/release', {}, payload);
};

/**
 * Get a Release Report
 * @param int releaseId
 * @memberof    ReleaseReports
 * @method      getReleaseReport
 */
ReleaseReports.prototype.getReleaseReport = function (releaseId) {
  return this._http._get('p1/reports/release/' + releaseId, {});
};

/**
 * Get a Release Report for a given repository
 * @param int repoId
 * @memberof    ReleaseReports
 * @method      getReleaseReportsForRepository
 */
ReleaseReports.prototype.getReleaseReportsForRepository = function (repoId) {
  return this._http._get('p1/repositories/' + repoId + '/reports/release', {});
};

/**
 * Update a release report with issues to add or remove
 * @param int   releaseId      zenhub release id
 * @param object    payload      see https://github.com/ZenHubIO/API#body-parameters-10 for payload format
 */
ReleaseReports.prototype.patchReleaseIssues = function (releaseId, payload) {
  return this._http._patch('p1/reports/release/' + releaseId + "/issues", {}, payload);
};

module.exports = ReleaseReports;
