
import { Link } from "react-router";

function Home() {
    return (
        <>
            <h1>Change file</h1>
            <h3>Đây là nơi dùng để chuyển đổi file Word và PDF</h3>
            <hr />

            <h1>Hãy chọn file bạn muốn đổi</h1>

            <Link to="/word-to-pdf">Word → PDF</Link>

            <span> OR </span>

            <Link to="/pdf-to-word">PDF → Word</Link>
        </>
    );
}

export default Home;