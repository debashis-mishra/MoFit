import Container from "react-bootstrap/Container";
import "./Footer.css";

function Footer() {

    return (
        <Container className="footer text-center align-items-center p-3 bgdarkgrey" fluid>
            <p className="m-0">Created with ❤ by: <a className="link" href="https://github.com/RajivMishra02" target="_blank">Rajiv</a>,
                <a className="link" href="https://github.com/debashis-mishra" target="_blank"> Debahis</a>,
                <a className="link" href="https://github.com/JawwadK"> Nitya</a>,
                <a className="link" href="https://github.com/NoahColacoRyerson"> Rajeev</a>,
                <a className="link" href="https://github.com/raj-mistry"> Shivani</a></p>
        </Container>
    );
}
export default Footer