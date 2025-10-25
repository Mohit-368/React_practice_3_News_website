import { useEffect, useState } from "react";

export default function News() {
  const [page, setPage] = useState(1);
  const [news, setNews] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

  // Filters
  const [country, setCountry] = useState("us");
  const [category, setCategory] = useState("general");
  const [query, setQuery] = useState("");
  const [pageSize, setPageSize] = useState(10);

  const image =
    "https://cdn.pixabay.com/photo/2019/10/21/12/01/newspapers-4565916_1280.jpg";

  function stt() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    fetchNews();
  }, [page, country, category, query, pageSize]);

  function fetchNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}&page=${page}&apiKey=98a4355ea71e4ea4bf67e65228715fd4`;

    if (query)
      url = `https://newsapi.org/v2/everything?q=${query}&pageSize=${pageSize}&page=${page}&apiKey=98a4355ea71e4ea4bf67e65228715fd4`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setNews(data.articles || []);
        setTotalResults(data.totalResults || 0);
      })
      .catch((err) => console.error(err));
  }

  return (
    <div
      className="h-auto w-auto flex flex-col justify-center items-center pt-[10vh]"
      style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
    >
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 backdrop-blur-md bg-white/30 p-4 rounded-md shadow-md mb-6">
        <select
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
            setPage(1);
          }}
          className="border p-2 rounded"
        >
          <option value="us">USA</option>
          <option value="in">India</option>
          <option value="gb">UK</option>
          <option value="au">Australia</option>
        </select>

        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setPage(1);
          }}
          className="border p-2 rounded"
        >
          <option value="general">General</option>
          <option value="sports">Sports</option>
          <option value="technology">Technology</option>
          <option value="business">Business</option>
          <option value="entertainment">Entertainment</option>
        </select>

        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(e.target.value);
            setPage(1);
          }}
          className="border p-2 rounded"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>

      {/* News Cards */}
      <div className="flex flex-col gap-4 p-10">
        {news.map((a, i) => (
          <div
            key={i}
            className="p-4 border rounded shadow bg-white/80 hover:scale-103 hover:bg-blue-400 hover:text-white flex flex-row w-[80vw] transition-all duration-300"
          >
            <div className="flex flex-row gap-5">
              <img
                src={a.urlToImage || image}
                alt=""
                className="w-[20vw] h-[30vh] object-cover mb-2"
              />
              <div className="flex flex-col gap-5">
                <h2 className="text-3xl font-semibold">{a.title}</h2>
                <p className="text-sm text-gray-600">
                  Source - {a.source?.name}
                </p>
                <p className="text-sm text-gray-500">
                  By - {a.author || "Unknown Editor"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex gap-4 mt-5 p-10">
        <button
          onClick={() => {
            setPage((p) => Math.max(p - 1, 1));
            stt();
          }}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-700 text-white rounded transform transition-transform duration-150 active:scale-90 disabled:opacity-50"
        >
          {"<< Previous"}
        </button>
        <span className="text-white font-semibold text-lg">Page {page}</span>
        <button
          onClick={() => {
            setPage((p) => p + 1);
            stt();
          }}
          disabled={page * pageSize >= totalResults}
          className="px-4 py-2 bg-blue-600 text-white rounded transform transition-transform duration-150 active:scale-90 disabled:opacity-50"
        >
          {"Next >>"}
        </button>
      </div>
    </div>
  );
}
