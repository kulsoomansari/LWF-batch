const Header = () =>{
return(
    <>
    <header>
        {/* ----------------------left side header-------------------------- */}
        <section className="container main-hero-container">
            <div className="row">
                <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center align-items-start flex-column">
                <h1 className="display-2">
                Online Payment Made <br /> Easy For You.
              </h1>
              <p className="main-hero-para">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
                quia quis? Ipsa officia ad deserunt voluptate quam, nisi odio
                officiis tempora recusandae voluptate quam, nisi odio officiis
                tempora recusandae
              </p>
              <h3>Get early access for you</h3>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="rounded-pill w-50 w-lg-75 me-3 p-2 input-text"
                  placeholder="Enter Your Email"
                />
                <div className="input-group-button">Get it now</div>
              </div>
            </div>
                                    {/* ----------------------right side header-------------------------- */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center">
            <img
            className="img-fluid"
            src="https://images.unsplash.com/photo-1648737119247-e93f56878edf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
            alt="main-hero-img"/>
            <img className="img-fluid hero-img2"
            src="https://images.unsplash.com/photo-1513595207829-9f414c0665f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80cd my-site"
            alt="main-hero-img2"/>
          </div>

          

            </div>

        </section>
    </header>
    </>
)
}
export default Header