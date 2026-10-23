// Sample directory data. Replace this array with real records when a data source is available.
export const users = [
  {
    id: 1,
    name: 'Smit Patel',
    bio: 'Cloud engineer',
    credentials: ['Associate Cloud Engineer', 'Professional Cloud Network Engineer', 'Professional Cloud Security Engineer', 'Cloud Engineer'],
  },
  {
    id: 2,
    name: 'Sandip Patel',
    bio: 'Cloud practitioner',
    credentials: ['Cloud Engineer'],
  },
  {
    id: 3,
    name: 'Vaibhav Patel',
    bio: 'Google Cloud practitioner',
    credentials: ['Associate Cloud Engineer', 'Cloud Engineer', 'Google Cloud Platform'],
  },
  {
    id: 4,
    name: 'Udit Shah',
    bio: 'Cloud architect',
    credentials: ['Cloud Engineer', 'Cloud Architect'],
  },
  {
    id: 5,
    name: 'Nirav Patel',
    bio: 'Cloud architect',
    credentials: ['Cloud Engineer', 'Cloud Architect'],
  },
  {
    id: 6,
    name: 'Divyesh Patel',
    bio: 'Cloud engineer',
    credentials: ['Associate Cloud Engineer', 'Cloud Engineer'],
  },
];

export const credentials = [...new Set(users.flatMap((user) => user.credentials))].sort();
