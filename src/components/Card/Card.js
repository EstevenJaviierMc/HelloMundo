import React, {component} from 'react';

class Card extends component{
  constructor(props){
super(props);
this.state = { fotos:[] };
}
componentWillMount(){
  fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => {
        return response.json()
      })
      .then((fotos) => {
        this.setState({ fotos: fotos })
      })

}
render(){
return (
    <div className="container">
        <div className="row">
         {  this.fotos.map((foto) => 
     <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                    <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={foto.url} alt="fdgdfg"/>
                    <div className="card-body">
                    <p className="card-text">{foto.tittle}</p>
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

)}
        </div>


    </div>
  )}
}

export default Card;
