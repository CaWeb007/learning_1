import PrimaryMenu from "components/menu/PrimaryMenu";

const PageNotFound = () => {
    return (
        <>
            <h1>Page not found</h1>
            <PrimaryMenu/>
        </>
    )
}
export default PageNotFound
PageNotFound.getLayout = (page) => {
    return (<>{page}</>)
}