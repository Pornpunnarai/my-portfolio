const FULL_IMAGE_NAMES = new Set(['Urban Transit']);

const SQUARE_IMAGE_IDS = new Set([3, 4, 7, 9, 18]);

export function getProjectImageVariant(project) {
  if (FULL_IMAGE_NAMES.has(project.name)) {
    return 'full';
  }
  if (SQUARE_IMAGE_IDS.has(project.id)) {
    return 'square';
  }
  return 'default';
}
