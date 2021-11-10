class ApartmentGridComponent {
    constructor() {
      this.state = {
        apartments: [],
        loading: false
      };
      this.init();
    }
  
    saveApartments = apartments => {
      this.state = { apartments, loading: false };
  
      this.render();
    }
  
    deleteApartment = id => API.deleteApartment(id, this.fetchApartments, this.showError);

    showError = msg => alert(msg);
  
    fetchApartments = () => setTimeout (() => {
     API.fetchApartments(this.saveApartments, this.showError);
    }, 1000)

    wrapChild = element => {
        const wrapper = document.createElement('div');
        wrapper.className = 'col-12 col-xs-3 col-sm-6 col-lg-9 col-xl-12';
        wrapper.append(element);
        return wrapper;
    }

    init = () => {
      this.state.loading = true;
      this.fetchApartments();
      this.htmlElement = document.createElement('div');
      
      this.render();
    }
  
    render = () => {
      const { loading, apartments } = this.state;
      if (loading) {
        this.htmlElement.innerHTML = '<div class ="text-center"><img src ="assets/loading.gif" /> </div>';
      } else if (apartments.length > 0) {
          this.htmlElement.innerHTML= '';
        const apartmentCardComponents =  apartments
        .map(({id, ...apartmentProps}) => new ApartmentCardComponent({
            ...apartmentProps,
            onDelete: () => this.deleteApartment(id)
        }))
        .map(x => x.htmlElement)
        .map(this.wrapChild);
        this.htmlElement.append(...apartmentCardComponents);
      } else {
        this.htmlElement.innerHTML = 'Sorry, bet nieka niera';
      }
    }
  }