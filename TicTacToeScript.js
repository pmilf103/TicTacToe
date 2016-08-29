$(document).ready(function() {

	var empty = "empty";									//Define Classes
	var cross = "cross";
	var circle = "circle";
	var selected = "selected";
	var turn = "cross";										//Set Turn
	//var board = [	[$('tl'), $('tc'), $('tr')],		
	//				[$('ml'), $('mc'), $('mr')],		
	//				[$('bl'), $('bc'), $('br')]];
	
	$('td').click(function(){
		
		if($(this).hasClass(empty)){
			
			$(this).removeClass(empty);
			$(this).addClass(turn);
			
			if(turn == "cross") {							//X's Turn										
				$(this).text("X");
				turn = "circle";							//Alternate Player	
			}
			
			else {											//O's Turn
				$(this).text("O");
				turn = "cross";								//Alternate Player	
			}
		}
		else
			alert("This space has been claimed");			//Occupied space

		if(hasWon()){										//Declare winner
			if(turn == "cross")
				alert("The Xs have won it");			
			else
				alert("The Os have won it");
		}
	});

	function hasWon(){
		/*for(var i = 0; i < 3; i++){
			if(	
				($(board[i][0]).hasClass(turn) 	&& 	$(board[i][1]).hasClass(turn) 	&& 	$(board[i][2]).hasClass(turn))		|| 	//Horizontal
				($(board[0][i]).hasClass(turn) 	&& 	$(board[1][i]).hasClass(turn) 	&& 	$(board[2][i]).hasClass(turn) 		)	//Vertical
					return true;
		}
			else if(
				($(board[0][0]).hasClass(turn) 	&& 	$(board[1][1]).hasClass(turn) 	&& 	$(board[2][2]).hasClass(turn)) 	||		//Diagonal
				($(board[0][2]).hasClass(turn) 	&& 	$(board[1][1]).hasClass(turn) 	&& 	$(board[2][0]).hasClass(turn)) 	)
					return true;
		
			else
				return false;*/																													//No Win
	}
		
});	


	

