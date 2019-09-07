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
  return this._http._post('repositories/' + repoId + '/reports/release', {}, payload);
};

/**
 * Get a Release Report
 * @param int releaseId
 * @memberof    ReleaseReports
 * @method      getReleaseReport
 */
ReleaseReports.prototype.getReleaseReport = function (releaseId) {
  return this._http._get('reports/release/' + releaseId, {});
};

/**
 * Get a Release Report
 * @param int repoId
 * @memberof    ReleaseReports
 * @method      getReleaseReportsForRepository
 */
ReleaseReports.prototype.getReleaseReportsForRepository = function (repoId) {
  return this._http._get('repositories/' + repoId + '/reports/release', {});
};

/**
 * Get Release Report Issues
 * @param int releaseId
 * @memberof    ReleaseReports
 * @method      getReleaseReportIssues
 */
ReleaseReports.prototype.getReleaseReportIssues = function (releaseId) {
  return this._http._get('reports/release/' + releaseId + '/issues', {});
};

module.exports = ReleaseReports;
