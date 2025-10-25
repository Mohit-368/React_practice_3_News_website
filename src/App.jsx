import { useState } from "react";
import News from "./assets/components/news";
import Footerr from "./assets/components/footerr";
import Navbar from "./assets/components/navbar";
import Scrolltotop from "./assets/components/scrollToTop";
function App() {
  return (
    <>
      <Navbar />

      <News />
      <Scrolltotop />
      <Footerr />
    </>
  );
}

export default App;
