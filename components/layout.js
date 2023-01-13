import Container from "components/container"
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }){
    return(
        <>
            <Header />

            <main>
                <Container>{children}</Container>
            </main>

            <Footer />
        </>
    )
}