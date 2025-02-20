
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const useAuthenGuard = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return; 
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/login"); 
    }
  }, [router]);
};

export default useAuthenGuard;
