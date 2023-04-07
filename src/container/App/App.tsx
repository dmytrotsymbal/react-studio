import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import About from 'pages/About/About'
import Home from 'pages/Home/Home'
import OurServices from 'pages/Our_services/OurServices'
import Reservation from 'pages/Reservation/Reservation'
import { Route, Routes } from 'react-router-dom'
import { useAppDispatch } from 'redux/hooks'
import { useEffect, useState } from 'react'
import { fetchItems } from 'redux/CardListRedux/itemReducer'
import ContactUs from 'pages/ContactUs/ContactUs'
import CheckoutPage from 'pages/Checkout/CheckoutPage'
import ProductPage from 'pages/Product/ProductPage'
type Props = {}

const App = (props: Props) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchItems())
    })
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="services" element={<OurServices />} />
                <Route path="contactus" element={<ContactUs />} />
                <Route path="reservation" element={<Reservation />} />
                <Route path="checkout" element={<CheckoutPage />} />
                <Route path="/products/:id" element={<ProductPage />} />
            </Routes>
            <Footer />
        </>
    )
}
export default App
