var Milestones = function (_http) {
    this._http = _http;
};

/**
 * Get milestone start Date
 * This method returns value of Milestone start date
 * @param int   epicId      github id of issue marked as an epic
 * @param int   milestoneNumber number of milestone
 * @memberof    Milestone
 * @method      getMilestoneStartDate
 */
Milestones.prototype.getMilestoneStartDate = function (repoId, milestoneNumber) {
  return this._http._get('p1/repositories/' + repoId + '/milestones/' + milestoneNumber + '/start_date', {});
};

/**
 * Set milestone start Date
 * This method returns value of Milestone start date
 * @param int   epicId      github id of issue marked as an epic
 * @param int   milestoneNumber number of milestone
 * @param object    payload      contains estimate to set for the issue, see https://github.com/ZenHubIO/API#set-milestone-start-date for payload format
 * @memberof    Milestone
 * @method      getMilestoneStartDate
 */
Milestones.prototype.setMilestoneStartDate = function (repoId, milestoneNumber, payload) {
  return this._http._post('p1/repositories/' + repoId + '/milestones/' + milestoneNumber + '/start_date', {}, payload);
};

module.exports = Milestones;
