
export const Router = () => {

    return (
        <>


            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/favourite" element={<Private><Favourite /></Private>} />
                <Route path="/cart" element={<Private><Cart /></Private>} />
                <Route path="/checkout" element={<Private><Checkout /></Private>} />
                <Route path="/orders" element={<Private><Order /></Private>} />
            </Routes>

        </>
    );
};