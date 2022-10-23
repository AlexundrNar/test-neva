const selRoute = document.querySelector('#route')
const selTime = document.querySelector('#time')
const selTimeRev = document.querySelector('#back-time')
const result = document.querySelector('button')

const timeTravel = 50;

selRoute.addEventListener('change', () => {
  if (selRoute.value === "из A в B") {
    selTime.style.display = 'block';
    selTimeRev.style.display = 'none';
  } 
  if (selRoute.value === "из B в A") {
    [...selTimeRev.options].forEach(el => el.style.display = 'block')
    selTime.style.display = 'none';
  } 
  if (selRoute.value === "из A в B и обратно в А") {
    selTime.style.display = 'block';
    selTimeRev.style.display = 'block';

    selTime.addEventListener('change', () => {
      let cc
      for (let i = 0; i < [...selTimeRev.options].length; i++) {
        cc = moment([...selTimeRev.options][i].value.slice(0, 5), 'HH-mm').format('HH-mm');
        cc < moment(selTime.value.slice(0, 5), 'HH-mm').add(timeTravel, 'minute').format('HH-mm')
        ? [...selTimeRev.options][i].style.display = 'none'
        : [...selTimeRev.options][i].style.display = 'block'
      }
    })
  } 
})

const clickHandler = result.addEventListener('click', () => {
  let tickets = document.querySelector('#num').value;
  
  if (selRoute.value === "из A в B" || selRoute.value === "из B в A") {
    let x = 700;
    const sum = x * tickets;
    document.querySelector('.out').innerHTML = `<p>Ваше количество билетов ${tickets} по маршруту ${selRoute.value} стоимостью ${sum}р.
    <p>Это путешествие займет у вас ${timeTravel} минут. 
    <p>Теплоход отправляется в ${selRoute.value === "из A в B"
    ? moment(selTime.value.slice(0, 5), 'HH-mm').format('HH-mm')
    : moment(selTimeRev.value.slice(0, 5), 'HH-mm').format('HH-mm')},
    а прибудет в ${selRoute.value === "из A в B"
    ? moment(selTime.value.slice(0, 5), 'HH-mm').add(timeTravel, 'minute').format('HH-mm')
    : moment(selTimeRev.value.slice(0, 5), 'HH-mm').add(timeTravel, 'minute').format('HH-mm')}.`
  } 
  if (selRoute.value === "из A в B и обратно в А") {
    let x = 1200;
    const sum = x * tickets;
    document.querySelector('.out').innerHTML = `<p>Ваше количество билетов ${tickets} по маршруту ${selRoute.value} стоимостью ${sum}р.
    <p>Это путешествие займет у вас по ${timeTravel} минут в обе стороны. 
    <p>Теплоход отправляется в ${moment(selTime.value.slice(0, 5), 'HH-mm').format('HH-mm')},
    а прибудет в ${moment(selTime.value.slice(0, 5), 'HH-mm').add(timeTravel, 'minute').format('HH-mm')}.
    <p>Назад отправляется в ${moment(selTimeRev.value.slice(0, 5), 'HH-mm').format('HH-mm')},
    а прибудет в ${moment(selTimeRev.value.slice(0, 5), 'HH-mm').add(timeTravel, 'minute').format('HH-mm')}.`
  } 
})