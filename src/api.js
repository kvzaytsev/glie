import { API_BASE, API_PROJECTS, API_MILESTONES } from '../glie.config';

export function fetchProjectData({ apiKey, projectPath }) {
  return fetch(
    `${API_BASE}${API_PROJECTS}${encodeURIComponent(projectPath)}`,
    getOptions(apiKey)
  );
}

export function fetchMilestones ({projectId, apiKey}) {
  return fetch(
    `${API_BASE}${API_PROJECTS}${projectId}/${API_MILESTONES}`,
    getOptions(apiKey)
  );
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