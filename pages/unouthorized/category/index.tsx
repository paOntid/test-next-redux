import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { END } from "redux-saga";
import { wrapper } from "../../../store";
import { getCategoryRequestAction } from "../../../store/category/Category.action";
import { IRootState } from "../../../store/Root.reducer";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const { dispatch } = store;

    await dispatch(getCategoryRequestAction());
    dispatch(END);
    await store.sagaTask?.toPromise();

    return { props: {} };
  }
);

export default function Category() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { category } = useSelector((store: IRootState) => store.category);

  const goToTodos = () => router.push("/unouthorized/todos");

  const goToCategory = (categoryId: number) => () =>
    router.push(`/unouthorized/category/${categoryId}`);

  return (
    <main>
      <h5>Category</h5>

      <button onClick={goToTodos}>To Todos</button>

      <ul>
        {category.map(({ id, name }) => (
          <li key={id} onClick={goToCategory(id)}>
            {name}
          </li>
        ))}
      </ul>
    </main>
  );
}
