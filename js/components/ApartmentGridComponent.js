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
  
  
    showError = msg => alert(msg);
  
    fetchApartments = () => setTimeout (() => {
     API.fetchApartments(this.saveApartments, this.showError);
    }, 1000)

    wrapChild = element => {
        const wrapper = document.createElement('div');
        wrapper.className = 'col-12 col-xs-3 col-sm-6 col-lg-4 col-xl-3';
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
        .map(x => new ApartmentCardComponent(x))
        .map(x => x.htmlElement)
        .map(this.wrapChild);
        this.htmlElement.append(...apartmentCardComponents);
      } else {
        this.htmlElement.innerHTML = 'Sorry, bet nieka niera';
      }
    }
  }