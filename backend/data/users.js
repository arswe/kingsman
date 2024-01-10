import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'AbdurRahman',
    email: 'admin@email.com',
    password: bcrypt.hashSync('45683968', 10),
    isAdmin: true,
  },
  {
    name: 'akaid',
    email: 'akaid@email.com',
    password: bcrypt.hashSync('45683968', 10),
    isAdmin: true,
  },
  {
    name: 'Abdur Rahman',
    email: 'user@email.com',
    password: bcrypt.hashSync('45683968', 10),
  },
]

export default users
