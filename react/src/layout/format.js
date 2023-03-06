import Header from "../components/Header"
import Footer from "../components/Footer"



export default function format({children}) {
    return(
       <>

       <Header></Header>
       <main>{children}</main>
       <Footer></Footer>
       </>
    )
}