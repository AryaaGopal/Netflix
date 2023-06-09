import React from 'react'

export default function SignIn() {
  return (
    <div>
 
    <div className='Main'>
    <div className='signIn_box'>
    <form>
    <div>
    <label>Email:</label>
    <input type="email" name="email" />
    </div>
    <div>
    <label>Password:</label>
    <input type="password" name="password" />
    </div>
    <button type="submit">Sign In</button>
    </form>
    </div>
    </div>
    </div>
  )
}
