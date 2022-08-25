import App from './components/app';
import Table from './components/table';

const app = new App('#root');
app.initialize();

const table = new Table({
  title: 'Visi produktai',
  columns: ['Id', 'Pavadinimas', 'Kaina', 'Aprašymas', 'Kategorijos'],
  // Todo: pakeitinėti duomenis ir išprovokuoti klaidą. Sukurtą metodą reikia patikrinti
  rowsData: [
    ['1', 'Bananai', '0.89', 'Skanūs', 'Vaisiai, Maistas'],
    ['2', 'Obuoliai', '1.89', 'Skanūs', 'Vaisiai, Maistas'],
    ['3', 'Mandarinai', '3.89', 'Skanūs', 'Vaisiai, Maistas'],
    ['4', 'Kėglis', '99.89', 'Skanūs', 'Pramogos'],
    ['5', 'Vanduo', '0.69', 'Skanūs', 'Gėrimai'],
  ],
});

console.log(('-').repeat(64));
console.log(table);
