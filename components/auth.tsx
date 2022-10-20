import {Col, Row} from "react-bootstrap";
import Link from "next/link";
import {signIn, signOut, useSession} from "next-auth/client";

const Auth = () => {
    const [session, loading] = useSession()
    return (
        <Row>
            {!session && (
                <Col lg={6}>
                    <Link href={'api/auth/signin'}><a onClick={event => {
                        event.preventDefault()
                        signIn('github')
                    }}>Sing in</a></Link>
                </Col>
            )}
            {session && (
                <Col lg={6}>
                    <Link href={'api/auth/signout'}><a onClick={event => {
                        event.preventDefault()
                        signOut()
                    }}>Sing out</a></Link>
                </Col>
            )}
        </Row>
    );
};

export default Auth;