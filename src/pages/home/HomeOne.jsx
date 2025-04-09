import React from 'react'
import HeaderNavbar from '../../components/homeone/HeaderNavbar'
import Carousel from '../../components/homeone/Carousel'
import '../../components/homeone/carousel.css'

const HomeOne = () => {
  return (
    <div>
      {/* HeaderNavbar */}
        <HeaderNavbar />

        <main>
            <Carousel />


        <div class="container marketing">

        {/* <!-- Three columns of text below the carousel --> */}
        <div className="row">
        <div className="col-lg-4">
            {/* 
            {{< placeholder width="140" height="140" background="var(--bs-secondary-color)" text="false" class="rounded-circle" >}}
            */}
            
            <h2 className="fw-normal">Heading</h2>
            <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
            <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
        </div>
        {/* <!-- /.col-lg-4 --> */}
        <div className="col-lg-4">
            {/* 
             {{< placeholder width="140" height="140" background="var(--bs-secondary-color)" text="false" class="rounded-circle" >}}
            */}
           
            <h2 className="fw-normal">Heading</h2>
            <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
            <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
        </div>
        {/* <!-- /.col-lg-4 --> */}
        <div className="col-lg-4">
            {/* 
            {{< placeholder width="140" height="140" background="var(--bs-secondary-color)" text="false" class="rounded-circle" >}}
            */}
            
            <h2 className="fw-normal">Heading</h2>
            <p>And lastly this, the third column of representative placeholder content.</p>
            <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
        </div>
        {/* <!-- /.col-lg-4 --> */}
        </div>
        {/* <!-- /.row --> */}
        
        </div>
        
        <hr/>

        <div className=" py-4">
        <header className="pb-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center text-body-emphasis text-decoration-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" class="me-2" viewBox="0 0 118 94" role="img"><title>Bootstrap</title>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path></svg>
            <span className="fs-4">Jumbotron example</span>
        </a>
        </header>

        <div className="p-5 mb-4 bg-body-tertiary rounded-3">
        <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Custom jumbotron</h1>
            <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
            <button className="btn btn-primary btn-lg" type="button">Example button</button>
        </div>
        </div>

        <div className="row align-items-md-stretch">
        <div className="col-md-6">
            <div className="h-100 p-5 text-bg-dark rounded-3">
            <h2>Change the background</h2>
            <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
            <button className="btn btn-outline-light" type="button">Example button</button>
            </div>
        </div>
        <div className="col-md-6">
            <div className="h-100 p-5 bg-body-tertiary border rounded-3">
            <h2>Add borders</h2>
            <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
            <button className="btn btn-outline-secondary" type="button">Example button</button>
            </div>
        </div>
        </div>  
        </div>

        </main>

    </div>
  )
}

export default HomeOne