import React from 'react';

function Card() {
    const img = 'https://scontent-bog1-1.xx.fbcdn.net/v/t1.0-9/42600689_1257222957753118_8355322505967173632_n.jpg?_nc_cat=100&_nc_oc=AQmjkQWvRxeFnpDCRqA4VD075AKwjebcN0YHzFpOyMyYnst7hC-HKo7HFdGZyeFggfM&_nc_ht=scontent-bog1-1.xx&oh=111cc1d95efd6c6c3a8adc9ab21a000a&oe=5DF414E8';
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                    <img className="bd-placeholder-img card-img-top" width="100%" height="225" href="{img}" />
                    <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-muted">9 mins</small>
                    </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
  );
}

export default Card;
