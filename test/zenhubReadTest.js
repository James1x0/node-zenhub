/**
 * @author Matteo Magni <matteo@magni.me> (magni.me)
 */

var fs = require('fs');
var path = require('path');

var config;

if (typeof process.env.TOKEN !== 'undefined') {
    config = {
        'token': process.env.TOKEN,
        'repoId': process.env.REPO_ID,
        'issueId': process.env.ISSUE_ID,
        'milestoneId': process.env.MILESTONE_ID,
        'releaseId': process.env.RELEASE_ID
    };
} else {
    config = JSON.parse(fs.readFileSync(path.normalize(__dirname + '/config.json', 'utf8')));
}

describe('ZenHub Issues Read API', function() {
    var Zenhub = require('../lib/zenhub');
    var api = new Zenhub(config.token);

    describe('get issue data test', function() {
        it('should get issue in a repo', async () => {
            await api.issues.getIssueData(config.repoId, config.issueId);
        });
    });

    describe('get issue events test', function() {
        it('should get issue events in a repo', async () => {
            await api.issues.getIssueEvents(config.repoId, config.issueId);
        });
    });
});

describe('ZenHub Boards Read API', () => {
    var Zenhub = require('../lib/zenhub');
    var api = new Zenhub(config.token);

    describe('Board test', () => {
        it('should get board of repo', async () => {
            await api.boards.getBoard(config.repoId);
        });
    });
});

describe('ZenHub Epics Read API', () => {
    var Zenhub = require('../lib/zenhub');
    var api = new Zenhub(config.token);

    describe('Repository epics test', function() {
        it('should get all epics in a repo', async () => {
            await api.epics.getEpics(config.repoId);
        });
        it('should get all data for an epic', async function () {
            const response = await api.epics.getEpics(config.repoId);

            if (response.epic_issues.length === 0) {
                return self.skip();
            }
            await api.epics.getEpicData(config.repoId, response.epic_issues[0].issue_number);
        });
    });
});

describe('ZenHub Milestones Read API', () => {
    var Zenhub = require('../lib/zenhub');
    var api = new Zenhub(config.token);

    describe('Repository Milestones test', () => {
        it('should get Milestone startDate', async () => {
            await api.milestones.getMilestoneStartDate(config.repoId, config.milestoneNumber);
        });
    });
});

describe('ZenHub ReleaseReport Read API', () => {
    var Zenhub = require('../lib/zenhub');
    var api = new Zenhub(config.token);

    describe('Get ReleaseReport test', () => {
        it('should get ReleaseReport', async () => {
            await api.releaseReports.getReleaseReport(config.releaseId);
        });
    });

    describe('get ReleaseReports for Repository test', () => {
        it('should get ReleaseReports for repository', async () => {
            await api.releaseReports.getReleaseReportsForRepository(config.repoId);
        });
    });
    
    describe('get ReleaseReportIssues test', () => {
        it('should get ReleaseReportIssues', async () => {
            await api.releaseReports.getReleaseReportIssues(config.releaseId);
        });
    });
});
