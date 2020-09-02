import * as users from './users';

export const emails = [
  {
    id: 'email-1',
    subject: 'subject for email #1',
    body: 'body for email #1',
    sender: users.user2,
    recipients: [users.user1],
    attachments: [],
    folder: 'Inbox',
    labels: [],
    sent: 1598436066854,
  },
  {
    id: 'email-2',
    subject: 'subject for email #2',
    body: 'body for email #2',
    sender: users.user3,
    recipients: [users.user1],
    attachments: [],
    folder: 'Inbox',
    labels: [],
    sent: 1598436166854,
  },
  {
    id: 'email-3',
    subject: 'subject for email #3',
    body: 'body for email #3',
    sender: users.user4,
    recipients: [users.user1],
    attachments: [],
    folder: 'Inbox',
    labels: [],
    sent: 1598436266854,
  },
  {
    id: 'email-4',
    subject: 'subject for email #4',
    body: 'body for email #4',
    sender: users.user5,
    recipients: [users.user1],
    attachments: [],
    folder: 'Inbox',
    labels: ['label-1', 'label-2'],
    sent: 1598436366854,
  },
  {
    id: 'email-5',
    subject: 'subject for email #5',
    body: 'body for email #5',
    sender: users.user6,
    recipients: [users.user1],
    attachments: [],
    folder: 'Inbox',
    labels: ['label-3', 'label-4'],
    sent: 1598436466854,
  },
  {
    id: 'email-6',
    subject: 'subject for email #6',
    body: 'body for email #6',
    sender: users.user7,
    recipients: [users.user1],
    attachments: [],
    folder: 'Inbox',
    labels: ['label-5', 'label-6'],
    sent: 1598436566854,
  },
  {
    id: 'email-7',
    subject: 'subject for email #7',
    body: 'body for email #7',
    sender: users.user7,
    recipients: [
      users.user1,
      users.user2,
      users.user3,
      users.user4,
      users.user5,
      users.user6,
    ],
    attachments: [],
    folder: 'Inbox',
    labels: ['label-1'],
    sent: 1598436616854,
  },
  {
    id: 'email-8',
    subject: 'subject for email #8',
    body: 'body for email #8',
    sender: users.user1,
    recipients: [users.user2],
    attachments: [],
    folder: 'Sent',
    labels: ['label-3'],
    sent: 1598436626854,
  },
  {
    id: 'email-9',
    subject: 'subject for email #9',
    body: 'body for email #9',
    sender: users.user1,
    recipients: [users.user3],
    attachments: [],
    folder: 'Drafts',
    labels: ['label-5'],
    sent: 1598436636854,
  },
  {
    id: 'email-9',
    subject: 'subject for email #9',
    body: 'body for email #9',
    sender: users.user2,
    recipients: [users.user1],
    attachments: [],
    folder: 'Trash',
    labels: ['label-1'],
    sent: 1598436646854,
  },
  {
    id: 'email-10',
    subject: 'subject for email #10',
    body: 'body for email #10',
    sender: users.user3,
    recipients: [users.user1],
    attachments: [],
    folder: 'Important',
    labels: ['label-3'],
    sent: 1598436656854,
  },
  {
    id: 'email-11',
    subject: 'subject for email #11',
    body: 'body for email #11',
    sender: users.user4,
    recipients: [users.user1],
    attachments: [],
    folder: 'Spam',
    labels: [],
    sent: 1598436656854,
  },
  {
    id: 'email-12',
    subject: 'subject for email #12',
    body: 'body for email #12',
    sender: users.user5,
    recipients: [users.user1],
    attachments: [],
    folder: 'Starred',
    labels: ['label-1', 'label-2'],
    sent: 1598436666854,
  },
  {
    id: 'email-13',
    subject: 'subject for email #13',
    body: 'body for email #13',
    sender: users.user5,
    recipients: [users.user1],
    attachments: [],
    folder: 'Inbox',
    labels: ['label-1', 'label-2'],
    sent: 1598436666854,
  },
  {
    id: 'email-14',
    subject: 'subject for email #14',
    body: 'body for email #14',
    sender: users.user5,
    recipients: [users.user1],
    attachments: [],
    folder: 'Inbox',
    labels: ['label-1', 'label-2'],
    sent: 1598436666854,
  },
  {
    id: 'email-15',
    subject: 'subject for email #15',
    body: 'body for email #15',
    sender: users.user5,
    recipients: [users.user1],
    attachments: [],
    folder: 'Inbox',
    labels: ['label-1', 'label-2'],
    sent: 1598436666854,
  },
];

export const labels = [
  { id: 'label-2', name: 'home', color: 'blue' },
  { id: 'label-1', name: 'work', color: 'orange' },
  { id: 'label-3', name: 'church', color: 'green' },
  { id: 'label-5', name: 'family', color: 'pink' },
  { id: 'label-4', name: 'vacation', color: 'purple' },
  { id: 'label-6', name: 'finance', color: 'red' },
];
