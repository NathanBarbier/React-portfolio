import Header from "../header.js"
import Footer from "../footer.js"
import Main from "../main.js"

const Layout = () => {
    return (
        <> {/*React.Statement */}
            <header>
                <Header/>
            </header>
            <main>
                <Main/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default Layout