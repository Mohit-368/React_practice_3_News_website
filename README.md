# React_practice_3_News_website

📰 React News Media App A responsive and modern News Web App built with React + Tailwind CSS, fetching live data from the NewsAPI.org to display the latest headlines with infinite scroll.

# Features

1. Fetches live top headlines using NewsAPI
2. Beautiful UI built with Tailwind CSS
3. Scroll to top Button
4. Filter for number of news per page
5. Infinite scroll – auto loads next page while scrolling
6. Displays title, image, source, and author
7. Smooth hover animations
8. category filters (Business, Sports, Tech)
9. Error handling and fallback images
10. 100% responsive for all screen sizes

# Tech Stack

| Technology               | Purpose                  |
| ------------------------ | ------------------------ |
| **React.js**             | Frontend framework       |
| **Tailwind CSS**         | Styling                  |
| **NewsAPI.org**          | News data source         |
| **IntersectionObserver** | Infinite scrolling logic |

# Installation

1.Clone the repository

<pre>git clone https://github.com/your-username/react-news-media.git</pre>
<pre>cd react-news-media</pre>

2.Install dependencies

<pre>npm install</pre>

3.🔑 Get your API key
Visit https://newsapi.org/
,Sign up → Get your free API key
,Replace YOUR_API_KEY in the code with your key
4.Run the app

<pre>npm run dev</pre>

5.Open in browser

<pre>http://localhost:5173
</pre>

#Folder Structure

<pre>react-news-media/
│
├── src/
│   ├── components/
│   │   └── News.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── public/
│   └── favicon.ico
│
└── package.json
</pre>

#API Reference
1.Endpoint:

<pre>https://newsapi.org/v2/top-headlines?country=us&pageSize=10&page=1&apiKey=YOUR_API_KEY
</pre>

2.Response Example:

<pre>{
  "status": "ok",
  "totalResults": 100,
  "articles": [
    {
      "source": { "name": "BBC News" },
      "author": "John Doe",
      "title": "Breaking News Headline",
      "urlToImage": "https://...",
      "publishedAt": "2025-10-20T12:00:00Z"
    }
  ]
}
</pre>

#Preview
<img width="1901" height="1071" alt="Screenshot 2025-10-20 123816" src="https://github.com/user-attachments/assets/0828ba68-cd51-4bcc-b126-9342282cef0a" />
<img width="1885" height="1065" alt="Screenshot 2025-10-20 123840" src="https://github.com/user-attachments/assets/5e521866-6b62-4310-bf72-49b13ca0528a" />
<img width="1899" height="1065" alt="Screenshot 2025-10-20 123859" src="https://github.com/user-attachments/assets/dc9b6183-23ec-42ac-9f98-43dcbc3b2eee" />

#Future Improvements

1. Implement dark mode 🌙
2. Add search functionality 🔍
3. Save favorite articles with localStorage

#Contributing
Contributions, issues, and feature requests are welcome!
Feel free to fork the repo and open a pull request.

#License
This project is licensed under the MIT License – free to use and modify.

## 💬 Connect with Me

👨‍💻 **Mohit Kumar**  
🔗 [LinkedIn](https://www.linkedin.com/in/mohitkumar368)
