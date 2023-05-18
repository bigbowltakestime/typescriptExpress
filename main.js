let root = document.getElementById('root');
root.style.backgroundColor = 'black'
root.style.width = '100px'
root.style.height = '100px'

root.addEventListener('click',()=>{
  // fetch('/post',{
  //   method:'POST',
  //   body:JSON.stringify({hi:'hello'})
  // }).then((result)=>{
  //   return result.json()
  // }).then((res)=>{
  //   root.innerText = res;
  //   root.style.backgroundColor = 'yellow';
  // })
  fetch("/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify({
      email: 'id',
      password: 'pw',
    }),
  })
  .then((response) => response.json())
  .then((result) => console.log(result));
})