//your JS code here. If required.
document.getElementById('userform').addEventListener('submit',(e)=>{
	e.preventDefault();
	const age=document.getElementById('age').value
	const name=document.getElementById('name').value
	if(!name || !age)
	{
		alert('Please enter valid details.')
		return
	}
	function checkAge() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (age > 18) {
              resolve(`Welcome, ${name}. You can vote.`);
            } else {
              reject(`Oh sorry, ${name}. You aren't old enough.`);
            }
          }, 4000);
        });
      }
	checkAge()
		.then((message)=>alert(message))
		.catch((error)=>alert(error))
})



