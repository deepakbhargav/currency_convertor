let f_currency=document.querySelector("#f_currency");
let t_currency=document.querySelector('#t_currency');
let amount=document.querySelector("#amount")
let convert=document.querySelector("#convert")

currency_list.forEach(list=>{
  let option=document.createElement("option");
  option.value=list.code;
  option.innerText=list.code;
  f_currency.add(option);
})

currency_list.forEach(list=>{
  let option=document.createElement("option");
  option.value=list.code;
  option.innerText=list.code;
  t_currency.add(option);
})

//by default show currency 
f_currency.value="USD";
t_currency.value="INR"

const checkAmount=()=>{
  if(amount.value=="") {
     alert("please enter the amount")
  }
  else {
     let f_currencySelect=f_currency.value;
     let t_currencySelect=t_currency.value;
     let amountValue=amount.value;
     fetch('https://v6.exchangerate-api.com/v6/065e6e70782f3388bf71c7f6/latest/USD').then(res=>res.json()).then(data=>{
      conversionFunction(f_currencySelect,t_currencySelect,amountValue,data.conversion_rates);
     })
  }
}

function conversionFunction(f,t,a,data) {
  console.log(f,t);
   let fcrate=data[f];
   console.log(fcrate)
   let tcrate=data[t];
   let result= ((a/fcrate)*tcrate).toFixed(2);
   document.querySelector("#result").innerText=`
   ${a}${f}=${result}${t}
   `;
}

convert.addEventListener('click',checkAmount);

