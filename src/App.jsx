function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/products" element={<ProductList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
