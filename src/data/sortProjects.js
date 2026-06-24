export function sortProjectsNewestFirst(projects) {
  return [...projects].sort((a, b) => b.id - a.id);
}
