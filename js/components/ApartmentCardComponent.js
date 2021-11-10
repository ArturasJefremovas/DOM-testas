class ApartmentCardComponent {
    static dollarsToEuro = 0.86;
    constructor(props) {
        this.props = props;
        this.htmlElement = document.createElement('article');
        this.init();
    }

    convertCurrency = ({ amount, currency }) => {
        if (currency === '$') return amount * ApartmentCardComponent.usdToEuro;
        else return amount;
    }

    init = () => {
        const {type, owner, roomCount, squares, adress, price, imgSrc, onDelete} = this.props;
        const { fullname, email, phone } = owner;
    
        this.htmlElement.className = 'card shadow p-3';
        this.htmlElement.innerHTML = `
        <div class="row">
        <div class="col-md-4">
          <img src="${imgSrc}"  height="300px" class="card-img-top">
        </div>
      <div class="col-md-8">
        <div class="card-body">
          <div class="card-top">
           <h4 class="card-title text-center">${type}</h4>
           <button class="btn btn-danger btn-sm position-absolute top-0 end-0 mt-2 me-2">✕</button>
          </div>
          <div class="d-flex justify-content-evenly">

            <p>Price: ${price} Euro</p>
          </div>
          <div class="d-flex justify-content-between">
            <div>
              <h5 class="text-center">Location</h5>
              <p>Country: ${location.country}</p>
              <p>City: ${location.city}</p>
              <p>Street: ${location.street}</p>
            </div>
            <div>
              <h5 class="text-center">Owner</h5>
                <p>Fullname: ${owner.fullname}</p>
                <p>Mobile: ${owner.phone}</p>
                <p>Email: ${owner.email}</p>
            </div>
         </div>
        </div>
      </div>
  </div>`;
  const btn = this.htmlElement.querySelector('.btn');
    btn.addEventListener('click', onDelete);
        

    }
}