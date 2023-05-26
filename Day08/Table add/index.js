fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => {
    
    let li =document.getElementById("users")
    let pi;
    json.forEach((user) => {
      pi = `<tr>
        <td>${user.id}</td>
        <td>${user.name} </td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
      </tr>`;
      li.innerHTML =  li.innerHTML + pi;
    });

   
  });