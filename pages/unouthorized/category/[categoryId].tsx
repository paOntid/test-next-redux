import { NextPageContext } from "next";
import { useRouter } from "next/router";
import React, { FC, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { END } from "redux-saga";
import { wrapper } from "../../../store";
import {
  clearCurrentCategoryAction,
  getCurrentCategoryRequestAction,
} from "../../../store/category/Category.action";
import { IRootState } from "../../../store/Root.reducer";

type PropsType = {};

const Category: FC<PropsType> = (props) => {
  const dispatch = useDispatch();
  const {
    query: { categoryId },
  } = useRouter();
  const { subcategories } = useSelector((store: IRootState) => store.category);

  console.log(props);

  useEffect(() => {
    // if (categoryId) {
    //   dispatch(getCurrentCategoryRequestAction(Number(categoryId)));
    // }

    return () => {
      dispatch(clearCurrentCategoryAction());
    };
  }, [dispatch, categoryId]);

  return (
    <div>
      <h3>Category</h3>

      <ul>
        {subcategories.map(({ id, name }: { id: number; name: string }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const { dispatch } = store;

    await dispatch(
      getCurrentCategoryRequestAction(Number(ctx.query.categoryId))
    );
    dispatch(END);
    await store.sagaTask?.toPromise();

    return { props: {} };
  }
);

export default React.memo(Category);
