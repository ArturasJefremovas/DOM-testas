const baseURL = 'http://localhost:3000';

class API {
  static fetchApartments = (success, failure) => {
    fetch(`${baseURL}/apartments`)
      .then(res => res.json())
      .then(success)
      .catch(failure)
  }

  static deleteApartment = (id, success, failure) => {
    fetch(`${baseURL}/apartments/${id}`, { method: 'DELETE' })
      .then(success)
      .catch(failure)
  }
}

const rodytiKlaidą = (klaida) => console.error('Klaida:', klaida)

console.log('Siunčiami pradiniai duomenys...');
API.fetchApartments(
  (duomenys) => {
    console.log('Gauti pradiniai duomenys', duomenys);
    console.log('trinamas Elementas su id \'3\'...');
    API.deleteApartment(
      '3',
      (duomenys) => {
        console.log('Sėkimgai ištrinta', duomenys);
        console.log('Siunčiami atnaujinti duomenys...');
        API.fetchApartments(
          (duomenys) => console.log('Gauti Atnaujinti duomenys', duomenys),
          rodytiKlaidą
        )
      },
      rodytiKlaidą
    )
  },
  rodytiKlaidą
)

