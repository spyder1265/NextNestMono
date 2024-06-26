import { User } from '@prisma/client'

const getCurrentUser = async () => {
  try {
    if (typeof localStorage === 'undefined') return
    const token = await localStorage.getItem('token')
    if (token !== null) {
      const user = await fetch(`http://localhost:3001/users/user`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
      const userData: User = await user.json()
      // console.log('userData', userData)
      return userData
    }
  } catch (error) {
    console.log('Not authorized', error)
  }
}

export default getCurrentUser
