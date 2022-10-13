import Link from "next/link"
import {Col, Row} from "react-bootstrap"

const PrimaryMenu = () => {
    return (
        <Row>
            <Col>
                <Link href={'/blog'}><a>Blog</a></Link><br/>
            </Col>
            <Col>
                <Link href={'/product'}><a>Product</a></Link><br/>
            </Col>
            <Col>
                <Link href={'/users'}><a>Users</a></Link><br/>
            </Col>
            <Col>
                <Link href={'/posts'}><a>Posts</a></Link><br/>
            </Col>
            <Col>
                <Link href={'/news'}><a>News</a></Link><br/>
            </Col>
            <Col>
                <Link href={'/profile'}><a>Profile</a></Link><br/>
            </Col>
            <Col>
                <Link href={'/events'}><a>Events</a></Link><br/>
            </Col>
            <Col>
                <Link href={'/comments'}><a>Comments</a></Link><br/>
            </Col>
            <Col>
                <Link href={'/docs'}><a>Docs</a></Link><br/>
            </Col>
            <Col>
                <Link href={'/about'}><a>About</a></Link><br/>
            </Col>
        </Row>
    );
};

export default PrimaryMenu