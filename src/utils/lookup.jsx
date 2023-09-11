import PATH from "../Navigation/Path";

const USER_ROLE = [
  {
    lookupId: 2,
    text: "Client",
    value: "client",
    type: "Role",
    roleType: "Client",
    defaultPath: PATH.USER,
  },
  {
    lookupId: 1,
    text: "Admin",
    value: "admin",
    order: 1,
    type: "Role",
    roleType: "Admin",
    defaultPath: PATH.ADMIN_USERS,
  },
];
const GENDER = [
  {
    lookupId: 101,

    text: "Male",
    value: "Male",
    order: 1,
  },
  {
    lookupId: 102,

    text: "Female",
    value: "Female",
    order: 2,
  },
  {
    lookupId: 103,
    text: "Other",
    value: "Other",
    order: 3,
  },
];

const LOOKUP = {
  USER_ROLE,
  GENDER,
};

export default LOOKUP;
