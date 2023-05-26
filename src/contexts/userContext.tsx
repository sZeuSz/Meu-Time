import { useLocalStorage } from "hooks";
import React, { createContext, useState, useEffect } from "react";

type AccountData = {
  firstname: string;
  lastname: string;
  email: string;
  key: string;
};

type RequestsData = {
  current: number;
  limit_day: number;
};

type SubscriptionData = {
  plan: string;
  end: string;
  active: boolean;
};

type UserContextData = {
  account: AccountData;
  requests: RequestsData;
  subscription: SubscriptionData;
  api_key: string;
};

type UserContextDataAtt = {
  userData: UserContextData;
  setUserData: React.Dispatch<React.SetStateAction<UserContextData>>;
};
type UserContextProviderProps = {
  children: React.ReactNode;
};

const UserContext = createContext<UserContextDataAtt | undefined>(undefined);

const UserContextProvider: React.FC<UserContextProviderProps> = ({
  children,
}) => {
  const [userData, setUserData] = useState<UserContextData | null>(null);
  const [userDataLS] = useLocalStorage<UserContextData>("userData");

  useEffect(() => {
    if (userDataLS) {
      console.log("tem", userDataLS);
      setUserData(userDataLS);
    }
  }, [userDataLS]);

  const userContextValue: UserContextDataAtt = {
    userData,
    setUserData,
  };

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
