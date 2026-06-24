export const PROJECT_TYPES = {
  1: 'web',   // Tokenization Platform
  2: 'web',   // OM Platform
  3: 'web',   // Urban Crowdfunding
  4: 'web',   // ADMIN CM-BUS
  5: 'web',   // SMART SIGNAGE
  6: 'mobile', // Urban Transit
  7: 'mobile', // Om Wallet
  8: 'mobile', // Om Ordering Merchant
  9: 'mobile', // CmBus
  10: 'web',  // Finedae
  11: 'web',  // Siam Blockchain Pro
  12: 'web',  // Banpu
  13: 'web',  // Banpu Power
  14: 'mobile', // DLT Taxi Driver
  15: 'mobile', // SCB Business Anywhere
  16: 'web',  // HandiGo
  17: 'web',  // TSpace
  18: 'mobile', // ASAPH
  19: 'web',  // Land And House - Career
  20: 'web',  // Land And House - Land For Sale
  21: 'web',  // Land And House - Craft 2024
  23: 'mobile', // Pikul Wallet
};

export function getProjectType(project) {
  return PROJECT_TYPES[project.id] || 'web';
}

export function filterProjectsByType(projects, type) {
  if (!type || type === 'all') {
    return projects;
  }
  return projects.filter((project) => getProjectType(project) === type);
}
