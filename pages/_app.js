import NavBar from "../components/NavBar";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <style jsx global>{`
        a {
          color: white;
        }
      `}</style>
    </>
  );
}
// /about을 호출 할때 about.js를 Component에 넣어준다.
// module.css 파일 형태를 제외한 css파일들은 _app.js에서만 import 해와서 사용해야한다.
