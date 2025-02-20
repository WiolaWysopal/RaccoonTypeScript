enum Role 
{
    admin = "admin",
    user = "user",
    moderator = "moderator",
    superadmin = "superadmin"
};

interface IUser
{
    name: string;
    role: Role;
    identifier: string;
};

type User = 
{
    name: string;
    role: Role;
    identifier: string;
};

