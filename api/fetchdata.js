export default async function handler(req, res) {
  const API_KEY = process.env.MY_SECRET_API_KEY;  // 從環境變數讀取 API 密碼

  if (!API_KEY) {
    return res.status(500).json({ error: "API Key not set in environment variables." });
  }

  try {
    // 模擬去外部 API 抓資料 (這裡是隨便抓個假的)
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
      headers: {
        "Authorization": `Bearer ${API_KEY}`  // 把 API 密碼放進 request header
      }
    });

    const data = await response.json();
    res.status(200).json({
      message: "Data fetched successfully!",
      data
    });

  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data.", details: error.message });
  }
}
