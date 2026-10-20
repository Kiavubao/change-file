
import { Link } from "react-router";
function WordsangPDF() {
    return (
        <>
            <Link to="/">Trang chủ</Link>
            <fieldset>
                <legend>Khung tải file</legend>
                <h3>Chọn file Word để chuyển đổi</h3>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input type="file" accept=".doc,.docx" required />
                    <br /><br />
                    <button type="submit">Tải file lên</button>
                </form>
            </fieldset>
        </>
    );
}
export default WordsangPDF;
