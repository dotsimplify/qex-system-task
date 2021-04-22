import { AuthProvider } from "../context/AuthContext";

import Dashboard from "../components/dashboard";
import fetch from "isomorphic-fetch";
const Page = (props) => {
  return (
    <>
      {console.log(props.news.status)}
      <AuthProvider>
        {props.news.status == "ok" ? (
          <Dashboard data={props} />
        ) : (
          <div>Произошла ошибка. Обновите страницу.</div>
        )}
      </AuthProvider>
    </>
  );
};
Page.getInitialProps = async function () {
  const res = await fetch(
    "https://newsapi.org/v2/top-headlines?country=ru&apiKey=e0ce93ba8b3f4a06816e35f9e4bc3ede"
  );
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    news: data, // will be passed to the page component as props
  };
};
export default Page;
