
import { Link } from "react-router";
function PDFsangWord() {
    return (
        <>
            <Link to="/">Trang chủ</Link>
            <fieldset>
                <legend>Khung tải file</legend>
                <h3>Chọn file PDF để chuyển đổi</h3>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input type="file" accept=".pdf" required />
                    <br /><br />
                    <button type="submit">Tải file lên</button>
                </form>
            </fieldset>
        </>
    );
}
export default PDFsangWord;
