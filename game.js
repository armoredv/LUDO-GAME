var tokA=2;
var tokB=2;
var count=0;
var num;
var id1;
var cur1A=0;
var cur2A=0;
var cur1B=0;
var cur2B=0;
var c1=0;
var c2=0;
alert("WELCOME TO THE GAME =>> LUDO!!");
function dice(){
	manualcall();
	if(num==0){
	num =Math.floor(Math.random() * 6)+1;}
	var roll=document.getElementById("rollthedice");
	
	
	if (count%2==0) {
		roll.innerHTML="CURRENT TURN:A ,CURRENT NUM:"+num;	
		turnA();
		fight();
	}
	else{
		roll.innerHTML="CURRENT TURN:B ,CURRENT NUM:"+num;
		turnB();
		fight();
	}
	display();
}

function turnA(){
	if ((tokA==1)&&(num==6)) {
		if (cur1A!=0) {

		alert("you can open token2A");
		}
		else
			lockerA();
	}
	else if (tokA==2) {
		lockerA();
	}
	else if ((tokA==1)&&(num!=6)) {
		move1A();
	}
	else if ((tokA==0)&&(cur1A==0)) {
		move2A();
	}
	display();


}

function move1A(){
	if(count%2==0){
		if ((tokA!=2)&&(cur1A+num<26)) {
			
			move(num,"tm-token1A",cur1A);
			cur1A=cur1A+num;
		}
		 if (cur1A==26) {
			var pos=document.getElementsByClassName("tm-token1A");
			pos[0].parentNode.removeChild(pos[0]);
			cur1A=0;
			count++;
			if (num==6) {
				count--;
			}
			
		}
		fight();
	}

	else{
		alert("sorry this is player B turn ");
	}
	display();
}
function move2A(){
	if (count%2==0) {
		if (tokA==1) {
			lockerA();
		}
		else if ((tokA!=1)&&(cur2A+num<26)) {
		
			move(num,"tm-token2A",cur2A);
			cur2A=cur2A+num;
		}
		 if ((cur2A+num)==26) {cur2A=0;
			var pos=document.getElementsByClassName("tm-token2A");
			pos[0].parentNode.removeChild(pos[0]);
			if ((cur2B<13)||(c2==0)) {
			alert("WINNER IS PLAYER A");
			}
		}
		fight();
	}
	else{
		alert("sorry this is player B turn ");
	}
}

function turnB(){
	if ((tokB==1)&&(num==6)) {
		if(cur1B!=0){
		alert("you can open token 2B");
		}
		else
			lockerB();
	}
	else if (tokB==2) {
		lockerB();
	}
	else if ((tokB==1)&&(num!=6)) {
		move1B();
	}
	else if ((tokB==0)&&(cur1B==0)) {
		move2B();
	}


}
function move1B(){
	if(count%2!=0){
		if  (((cur1B<=26)&&(c1!=1))||(((cur1B+num)<13)&&(c1==1))) {
			if((cur1B+num)<=26){
				move(num,"tm-token1B",cur1B);
				cur1B=cur1B+num;
			}
			else {

				cur1B=cur1B-26;
				move(num,"tm-token1B",cur1B);
				cur1B=cur1B+num;
				c1++;
			}
		}
		if (((cur1B+num)==13)&&(c1==1)) {
			var pos=document.getElementsByClassName("tm-token1B");
			pos[0].parentNode.removeChild(pos[0]);
			cur1B=0;
			c1++;
			count++;
			if (num==6) {
				count--;
			}
				
		}
		fight();
	}
	else{
		alert("SORRY!THIS IS PLAYER A'S TURN ");
	}
}
function move2B(){
	if(count%2!=0){
		if(tokB==1){
			lockerB();

		}
		else if (((cur2B<=26)&&(c2!=1))||(((cur2B+num)<13)&&(c2==1))) {
			if((cur2B+num)<=26){
				move(num,"tm-token2B",cur2B);
				cur2B=cur2B+num;
			}
			else {

				cur2B=cur2B-26;
				move(num,"tm-token2B",cur2B);
				cur2B=cur2B+num;
				c2++;
			}
			 
				
			
		}
		if (((cur2B+num)==13)&&(c2==1)) {
			var pos=document.getElementsByClassName("tm-token2B");
			pos[0].parentNode.removeChild(pos[0]);
			cur2B=0;
			c2++;
			if (cur2A<26) {
				alert("PLAYER B WON THE GAME");
				
			}	
		}
		fight();
		
	}
	else{
		alert("SORRY!THIS IS PLAYER A'S TURN ");
	}

}
function fight(){
	if(cur1A!=0){
		if ((cur1A==cur1B)||(cur1A==cur2B))
		{
			if (count%2==0) {
				var key=document.getElementsByClassName("tm-token1A");
				var pos=document.getElementById("a-lock");
				pos.appendChild(key[0]);
				
				if (tokA==1) {
					tokA++;
					cur1A=0;
				}
				else{
					var pos1=document.getElementsByClassName("tm-token2A");
					var pos2=document.getElementsByClassName("tm-token1A");
					pos1[0].setAttribute("class","tm-token1A");
					pos2[0].setAttribute("class","tm-token2A");
					cur1A=cur2A;
					cur2A=0;
					pos2[0].innerHTML="1A";
					pos1[0].innerHTML="2A";
					tokA=1;
				}


			}
			else {
				if(cur1A==cur1B){
					var key=document.getElementsByClassName("tm-token1B");
					var pos=document.getElementById("b-lock");
					pos.appendChild(key[0]);
					if (tokB==1) {
					tokB++;
					cur1B=0;
					c1=0;
					}
					else{
						var pos1=document.getElementsByClassName("tm-token2B");
						var pos2=document.getElementsByClassName("tm-token1B");
						pos1[0].setAttribute("class","tm-token1B");
						pos2[0].setAttribute("class","tm-token2B");
						cur1B=cur2B;
						cur2B=0;
						pos2[0].innerHTML="1B";
						pos1[0].innerHTML="2B";
						tokB=1;
						c2=0;
					}
				}
				else{

					var key=document.getElementsByClassName("tm-token2B");
					var pos=document.getElementById("b-lock");
					pos.appendChild(key[0]);
					cur2B=0;
					tokB++;
					c2=0;
				}
			}
				
		}
	}	
	else if (((cur2A==cur1B)||(cur2A==cur2B))&&(cur2A!=0)) 
	{
		if (count%2==0) {
			var key=document.getElementsByClassName("tm-token2A");
			var pos=document.getElementById("a-lock");
			pos.appendChild(key[0]);
			cur2A=0;
			tokA++;
		}
		else 
		{
			if(cur2A==cur1B)
			{
				var key=document.getElementsByClassName("tm-token1B");
				var pos=document.getElementById("b-lock");
				pos.appendChild(key[0]);
				if (tokB==1) 
				{
					tokB++;
					cur1B=0;
					c1=0;
				}
				else
				{
					var pos1=document.getElementsByClassName("tm-token2B");
					var pos2=document.getElementsByClassName("tm-token1B");
					pos1[0].setAttribute("class","tm-token1B");
					pos2[0].setAttribute("class","tm-token2B");
					cur1B=cur2B;
					cur2B=0;
					pos2[0].innerHTML="1B";
					pos1[0].innerHTML="2B";
					tokB=1;
					c2=0;
				}
			}
			else
			{

				var key=document.getElementsByClassName("tm-token2B");
				var pos=document.getElementById("b-lock");
				pos.appendChild(key[0]);
				cur2B=0;
				tokB++;
				c2=0;
			}
		}
	}					
}

function manualcall(){
	var myform=document.forms.myform;
	num=myform.number.value;
	num=parseInt(num);
}
function lockerA(){
		
	 	if ((num==6)&&(tokA==2)) {
		var key=document.getElementsByClassName("tm-token1A");
		var pos=document.getElementById("1");
		pos.appendChild(key[0]);
		cur1A=1;
	
		tokA--;
		}
		else if ((num==6)&&(tokA==1)) {
		var key=document.getElementsByClassName("tm-token2A");
		var pos=document.getElementById("1");
		pos.appendChild(key[0]);
		cur2A=1;
		
		tokA--;
		}
		else if ((num!=6)&&(tokA==2)){
			count++;
		}
		else if((num!=6)&&(tokA==1)&&(cur1A==0)){
			count++;
		}
		
}
function lockerB(){
		
	 	if ((num==6)&&(tokB==2)) {
		var key=document.getElementsByClassName("tm-token1B");
		var pos=document.getElementById("14");
		pos.appendChild(key[0]);
		cur1B=14;
		
		tokB--;
		}
		else if ((num==6)&&(tokB==1)) {
		var key=document.getElementsByClassName("tm-token2B");
		var pos=document.getElementById("14");
		pos.appendChild(key[0]);
		cur2B=14;
		
		tokB--;
		}
		else if ((num!=6)&&(tokB==2)){
			count++;
		}
		else if((num!=6)&&(tokB==1)&&(cur1B==0)){
			count++;
		}
}
function move(num,classname,id){
	id=num+id;
	var key=document.getElementsByClassName(classname);
	var pos=document.getElementById(id);
	pos.appendChild(key[0]);
	count++;
	if (num==6) {
		count--;
	}
	 
	
}
function display(){
	if ((cur1A==8)||(cur1B==8)||(cur2A==8)||(cur2B==8)) {
		var pos=document.getElementsByClassName("grid-container1");
		pos[0].setAttribute("style","top:-350px;");
	}
 	else if((cur1A==26)||(cur1B==26)||(cur2A==26)||(cur2B==26)) {
		var pos=document.getElementsByClassName("grid-container3");
		pos[0].setAttribute("style","top:-350px;");
	}
	else if((cur1A==20)||(cur1B==20)||(cur2A==20)||(cur2B==20)) {
		var pos=document.getElementsByClassName("grid-container2");
		pos[0].setAttribute("style","top:213px;");}
	else{
		var pos=document.getElementsByClassName("grid-container1");
		pos[0].setAttribute("style","top:-305px;");
		var pos1=document.getElementsByClassName("grid-container2");
		pos1[0].setAttribute("style","top:258px;");
		var pos2=document.getElementsByClassName("grid-container3");
		pos2[0].setAttribute("style","top:--305px;");
	}
}


