function calcDistance(i,j,k){
let max = i>j ? (i>k ? i : k) : (j>k ? j : k) ;
let min = i<j ? (i<k ? i : k) : (j<k ? j : k) ;
return max > min ? max - min : min - max;
}

function findSortest(arr) {
  let res = {
    home: Number,
    hotel: Number,
    hospital: Number,
    distance: Number = null
  };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].home) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j].hotel) {
          for (let k = 0; k < arr.length; k++) {
            if(arr[k].hospital){
              let temp = calcDistance(i,j,k);
              if(res.distance == null){
                res.home = i;
                res.hotel = j;
                res.hospital = k;
                res.distance = temp;
              }
              else if(temp<res.distance){
                res.home = i;
                res.hotel = j;
                res.hospital = k;
                res.distance = temp;
                  }
              }
          }
        }
      }
    }
  }
  if(res.home !== null && res.hospital !== null && res.hotel !== null){
    return res;
  }
  else{
    throw Error("something didn't find (-_-)");
  }
}
arr = [
  {
    home: true,
    hotel: false,
    hospital: false,
  },
  {
    home: false,
    hotel: false,
    hospital: false,
  },
  {
    home: false,
    hotel: true,
    hospital: false,
  },
  {
    home: false,
    hotel: false,
    hospital: false,
  },
  {
    home: false,
    hotel: false,
    hospital: true,
  },
];
console.log(findSortest(arr));