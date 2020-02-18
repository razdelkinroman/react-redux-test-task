import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function useAuth() {
  const [auth, setAuth] = useState();
  const isLogin = useSelector(state => state.login.userStatus);

  useEffect(() => {
    if (isLogin === 'SUCCESS') {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, [isLogin]);

  return auth;
}
