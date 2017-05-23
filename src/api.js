import { API_BASE, API_PROJECTS, API_MILESTONES, API_ISSUES } from '../glie.config';

export function fetchProjectData({ apiKey, projectPath }) {
  return fetch(
    `${API_BASE}${API_PROJECTS}${encodeURIComponent(projectPath)}`,
    getOptions(apiKey)
  );
}

export function fetchMilestones ({apiKey, projectId}) {
  return fetch(
    `${API_BASE}${API_PROJECTS}${projectId}/${API_MILESTONES}`,
    getOptions(apiKey)
  );
}

export function fetchIssues (data) {
  return _fetchIssues(data);
}

async function _fetchIssues({apiKey, projectId, milestone, includeComments}) {
  let pageCounter = 1,
    accumulator = [],
    perPage = 100,
    yetAnotherResult = [];

  do {
    let url = `${API_BASE}${API_PROJECTS}${projectId}/${API_ISSUES}?per_page=${perPage}&page=${pageCounter}`;
    milestone && (url += `&milestone=${milestone}`);
    yetAnotherResult = await fetch(url, getOptions(apiKey));
    yetAnotherResult = await yetAnotherResult.json()
    accumulator.push(...yetAnotherResult);
    pageCounter++;
  } while (yetAnotherResult.length === perPage);

  return accumulator;
}

function getOptions(apiKey) {
  return {
    method: 'GET',
    headers: {
      "PRIVATE-TOKEN": apiKey,
      "Content-Type": "application/json; charset=utf-8",
    }
  }
}