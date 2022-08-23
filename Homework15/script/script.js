//Task 1 

const response = {
  data: [
    {
      username: "samuel",
      is_active: true,
      created_at: "2020-11-20T09:53:50.000000Z",
    },
    {
      username: "john",
      is_active: false,
      created_at: "2020-11-20T09:53:50.000000Z",
    },
    {
      username: "peter",
      is_active: false,
      created_at: "2020-11-20T09:53:50.000000Z",
    },
  ],
  meta: {
    paging: {
      current: 1,
      next: 2,
      prev: null,
      total: 14,
      per_page: 3,
    },
  },
};

const {
  data: [{is_active: isActive}, {}, {}],
  meta:{
    paging:{ total: totalPaging},
  }
} = response;


// console.log(`totalPaging`, totalPaging)
// console.log(isActive);

//Task 2

const user = {
    name: "gabriel",
    surname: "brown",
    age: 17,
    height: 178,
  };

  let {name, surname, ...parameters} = user;

  // console.log(name);
  // console.log(surname);
  // console.log(parameters);

//Task 3

function max (...args){
  let max = 0;

    for (let arg of args) {
      if (args[arg] > max){
        max = args[arg];
      }
    }
    return max
}
// console.log(max(2, 3, 4));
// console.log(max(2,3,4,5));
// console.log(max(3,4,5,6,7));

//Task 4

const createMessage = (info) =>{
  let {author = 'Guest', text, receiver, time = new Date()} = info;

  return `From ${author} to ${receiver}: ${text} (${time.toLocaleDateString()})`;
}

// console.log(createMessage({
//   receiver: "John",
//   text: "Hi!",
// }));

//Task 5.1

let str = "x1y 722a 333 a123v1n a55555a qwe1 1zxc";
let regexp = /\w\d{1,5}\w/g

// console.log(str.match(regexp));

//Task 5.2

let str2 = 'ex.ua, google.com, yandex.ru, site.com.ua, my-page.com';

// let re = /[-a-zA-Z0-9@:%_\+.~#?&\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/=]*)?/gi

// console.log(re.test(str2));

//Task 5.3

let re = /^\d{12,}$/;

// console.log((re.test('121212121212')))
