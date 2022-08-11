import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodosApi } from "../../../http";
import { wrapper } from "../../../store";
import {
  getTodosAction,
  setTodosAction,
} from "../../../store/counter/Counter.action";
import { IRootState } from "../../../store/Root.reducer";

Todos.getInitialProps = wrapper.getServerSideProps((store) => async () => {
  console.log(store);

  const { dispatch } = store;
  const response = await dispatch(getTodosAction());
  await store.sagaTask?.toPromise();

  console.log("response", response);

  return { props: { data: response } };
});

// export const getServerSideProps = wrapper.getServerSideProps(
//   ({ dispatch }) =>
//     async () =>
//       await dispatch(getTodosAction())
// );

// export async function getServerSideProps() {
// Fetch data from external API
// const data = { id: 1, title: "1" };
// console.log("server data", data);
// const response = await getTodosApi();
// Pass data to the page via props
// return { props: { data: response?.data } };
// }

export default function Todos({ data }: any) {
  // const dispatch = useDispatch();
  const { todos } = useSelector((store: IRootState) => store.counter);

  console.log("data", data, todos);

  // useEffect(() => {
  //   if (data) {
  //     dispatch(setTodosAction(data));
  //     throw new Error("");
  //   }
  // }, [data, dispatch]);

  // useEffect(() => {
  // dispatch(getTodosAction());
  // }, [dispatch]);

  return (
    <div>
      <h5>TODOS</h5>

      {/* <div>id: {data.id}</div> */}

      <div>
        {data.map(({ id, title }) => (
          <div key={id}>
            <h6>id: {id}</h6>
            <h6>title: {title}</h6>
          </div>
        ))}
      </div>
    </div>
  );
}
