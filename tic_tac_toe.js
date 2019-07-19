var get_cell=document.querySelectorAll('td');


 function clearboard(){
	 for(var i=0;i<get_cell.length;i++)
		 get_cell[i].textContent="";
 }
 //for restart button on addEventListener('click')
 
 for(var i=0;i<get_cell.length;i++)
	 get_cell[i].addEventListener('click',function(){
		 if(this.textContent==='')
			 this.textContent='X';
		 else if(this.textContent==='X')
			 this.textContent='O';
		 else
			 this.textContent='';
	 })