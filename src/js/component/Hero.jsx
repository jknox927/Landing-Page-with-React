import React from "react";

export const Hero = () => {
  return (
    <div class="container px-4 bg-secondary bg-opacity-25">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5 my-5">

        <div class="col-10 col-sm-8 col-lg-6">
            <img
            src="https://picsum.photos/id/237/200"
            class="d-block mx-lg-auto img-fluid"
            alt=""
            width="700"
            height="500"
            />
        </div>
        <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">
            React you say?
            </h1>
            <p class="lead">
            How about "React"-ing to this cute picture of a puppy...
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
                Call to Action!
            </button>
            </div>
        </div>
        </div>
    </div>
  );
};
