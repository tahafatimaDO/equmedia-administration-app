import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../lib/store'

type Props = {
  readonly role?: 'admin'
  readonly customText?: React.ReactNode
}

export const AuthGuard: React.FC<Props> = ({ children, role, customText }) => {
  const { loading, me, error } = useSelector((state: AppState) => {
    console.log('authReducer > selector', state);
    return state.authReducer;
  })

  console.log({ loading, me , error});

  if (loading === 'loading') {
    return <>loading...</>
  }

  if (me) {
    return <>{children}</>
  }

  if (role === 'admin' && me?.role === 'ADMIN') {
    return <>{children}</>
  }

  return (
    <section>
      <h2 className="text-center">Unauthorized</h2>
      <div className="text-center">
        {customText ||
          "You don't have permission to access this page. Please contact an admin if you think something is wrong."}
      </div>
    </section>
  )
}
