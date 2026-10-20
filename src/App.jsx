
import { Routes, Route } from "react-router";
import Home from "./pages/TrangChu.jsx";
import WordsangPDF from "./pages/WordsangPDF.jsx";
import PDFsangWord from "./pages/PDFsangWord.jsx";
import "./App.css";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/word-to-pdf" element={<WordsangPDF />} />
            <Route path="/pdf-to-word" element={<PDFsangWord />} />
        </Routes>
    );
}

export default App;
