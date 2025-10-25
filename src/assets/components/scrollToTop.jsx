export default function Scrolltotop() {
  function stt() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <>
      <div className="out border border-black rounded full bg-white">
        <div
          onClick={() => stt()}
          className="m fixed bottom-5 right-5 p-3 bg-black/60 text-white rounded-full hover:bg-black/80 hover:scale-110 transition-transform z-50"
        >
          ↑
        </div>
      </div>
    </>
  );
}
