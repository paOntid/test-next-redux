import { useDispatch, useSelector } from "react-redux";
import { END } from "redux-saga";
import { wrapper } from "../../../store";
import { getCategoryRequestAction } from "../../../store/category/Category.action";
import { IRootState } from "../../../store/Root.reducer";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const { dispatch } = store;
    const response = await dispatch(getCategoryRequestAction());
    dispatch(END);
    await store.sagaTask?.toPromise();

    return { props: { data: JSON.stringify(response) } };
  }
);

export default function Category() {
  const { category } = useSelector((store: IRootState) => store.category);

  return (
    <div>
      <h5>Category</h5>

      <ul>
        {category.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
