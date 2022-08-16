const btn = document.querySelector('.main');
let output = document.querySelector('.output');



let profile = [
   {  btnName: 'michael',
      age: 37,
      height: '80 inches',
      hobbies:'football,dancing'},

   {  btnName: 'john',
      age: 30,
      height: '60 inches',
      hobbies:'sewing, designing'},

   {  btnName: 'sarah',
      age: 27,
      height: '800 inches',
      hobbies:'football, swimming'}

];



btn.addEventListener('click', function (e) {
   // let random = Math.floor(Math.random() * profile.length)
   let target = e.target;

   if (target.innerText === 'MICHAEL') {
      let p = document.createElement('p');
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      let p3 = document.createElement('p');

      output.textContent = '';

      p.textContent = `name: ${profile[0].btnName}`;
      p1.textContent = `age: ${profile[0].age}`;
      p2.textContent = `height: ${profile[0].height}`;
      p3.textContent = `hobbies: ${profile[0].hobbies}`;
      output.append(p, p1, p2, p3);
   }

   else if (target.innerText === 'JOHN') {
      let p = document.createElement('p');
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      let p3 = document.createElement('p');

      output.textContent = '';


      p.textContent = `name: ${profile[1].btnName}`
      p1.textContent = `age: ${profile[1].age}`
      p2.textContent = `height: ${profile[1].height}`
      p3.textContent = `hobbies: ${profile[1].hobbies}`
      output.append(p, p1, p2, p3);
   }

   else if (target.innerText === 'SARAH') {
      let p = document.createElement('p');
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      let p3 = document.createElement('p');

      output.textContent = '';


      p.textContent = `name: ${profile[2].btnName}`
      p1.textContent = `age: ${profile[2].age}`
      p2.textContent = `height: ${profile[2].height}`
      p3.textContent = `hobbies: ${profile[2].hobbies}`
      output.append(p, p1, p2, p3);
   }
   console.log(target.innerText)
   

})


