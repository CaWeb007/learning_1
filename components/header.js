import {useRouter} from "next/router";
import logo from "../public/boots/boots1.jpg"
import Image from "next/image";
import PrimaryMenu from "components/menu/PrimaryMenu";
import {Col, Row} from "react-bootstrap";

function Header() {
    const router = useRouter()

    const handleClick = () => {
        console.log('placing your router')
        router.push('/product')
    }
    return (
        <Row>
            <Col lg={1}>
                <div className="logo" style={{height: 100, width: 200, position: "relative"}}>
                    <Image alt='logo' layout='fill' className={'test'} src={logo} placeholder='blur'/>
                </div>
            </Col>
            <Col>
                <PrimaryMenu/>
            </Col>
            <Col lg={1}>
                <button className={'btn btn-primary'} onClick={handleClick}>
                    Place Order
                </button>
            </Col>



        </Row>
    )
}

export default Header