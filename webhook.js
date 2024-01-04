export default function handler(req, res) {
  if (req.method === "POST") {
    console.log("Log received");
    res.status(200).end("Received");
  } else {
    res.status(405).end("Not allowed");
  }
}
