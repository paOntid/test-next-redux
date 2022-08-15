import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { END } from "redux-saga";
import { getTodosApi } from "../../../http";
import { wrapper } from "../../../store";
import {
  getTodosAction,
  setTodosAction,
} from "../../../store/counter/Counter.action";
import { IRootState } from "../../../store/Root.reducer";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const { dispatch } = store;

    await dispatch(getTodosAction());
    dispatch(END);
    await store.sagaTask?.toPromise();

    return { props: {} };
  }
);

// export const getServerSideProps = wrapper.getServerSideProps(
//   ({ dispatch }) =>
//     async () =>
//       await dispatch(getTodosAction())
// );

// export async function getServerSideProps() {
//   const response = await getTodosApi();

//   return { props: { data: response?.data } };
// }

export default function Todos() {
  const router = useRouter();
  // const dispatch = useDispatch();
  const { todos } = useSelector((store: IRootState) => store.counter);

  const goToCategory = () => router.push("/unouthorized/category");

  // useEffect(() => {
  // if (data) {
  // dispatch(setTodosAction(data));
  // throw new Error("");
  // }
  // }, [data, dispatch]);

  // useEffect(() => {
  // dispatch(getTodosAction());
  // }, [dispatch]);

  return (
    <div>
      <h5>TODOS</h5>

      {/* <div>id: {data.id}</div> */}

      <button onClick={goToCategory}>Category</button>

      <div>
        {todos.map(({ id, title }) => (
          <div key={id}>
            <h6>id: {id}</h6>
            <h6>title: {title}</h6>
          </div>
        ))}
      </div>
    </div>
  );
}
