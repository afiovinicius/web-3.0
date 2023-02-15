import { useEffect } from "react";

import { useRouter } from "next/navigation";

interface RouteGrantedProps {
  children: React.ReactNode;
}

export const userAuth = () => {
  const userToken = localStorage.getItem("Token");

  return !!userToken;
};

export const RouteGranted = ({ children }: RouteGrantedProps) => {
  const router = useRouter();
  const userGranted = userAuth();

  useEffect(() => {
    if (!userGranted) {
      router.push("/");
    }
  }, [userGranted, router]);

  return (
    <>
      {!userGranted && null}
      {userGranted && children}
    </>
  );
};
