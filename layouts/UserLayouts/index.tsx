import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { IRootState } from "../../store/Root.reducer";
import { getUserRequestAction } from "../../store/user/User.action";
import Header from "../../widgets/Header";

type PropsType = { children: React.ReactNode };

const UserLayouts: FC<PropsType> = ({ children }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((store: IRootState) => store.user);

  useEffect(() => {
    if (!user) {
      dispatch(getUserRequestAction());
    }
  }, [dispatch, user]);

  return (
    <div>
      <Header />

      {children}
    </div>
  );
};

export default React.memo(UserLayouts);
