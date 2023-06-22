function RelatedProducts() {
  const badgeStyle = {
    top: "0.5rem",
    right: "0.5rem",
  };
  const oneProduct = (
    <div className="col mb-1">
      <div className="card h-100">
        <div
          className="badge bg-dark text-white position-absolute"
          style={badgeStyle}
        >
          İndirim
        </div>
        <img
          className="card-img-top"
          src="https://dummyimage.com/300x200/dee2e6/6c757d.jpg"
          alt="..."
        />
        <div className="card-body p-3">
          <div className="text-center">
            <h5 className="fw-bolder">İndirimli Ürün</h5>
            <span className="text-muted text-decoration-line-through">
              $50.00
            </span>{" "}
            $25.00
          </div>
        </div>
        <div className="row text-center mb-3">
          <div className="col-6 text-center m-10">
            <a className="btn btn-outline-dark mt-auto" href="#">
              Sepete Ekle
            </a>
          </div>
          <div className="col-6">
            <a className="btn btn-outline-dark mt-auto m-10" href="#">
              İncele
            </a>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <div className="m-1">
        <div className="row">
          <div className="text-center text-white m-1">
            <h1 className="display-4 fw-bolder">Related Products</h1>
          </div>
          <div className="col-3">{oneProduct}</div>
          <div className="col-3">{oneProduct}</div>
          <div className="col-3">{oneProduct}</div>
          <div className="col-3">{oneProduct}</div>
        </div>
      </div>
    </>
  );
}

export default RelatedProducts;
