$(document).ready(function() {

	var empty = "empty";									//Selectors
	var cross = "cross";
	var circle = "circle";
	var turn = "cross";	
	var button = $('button');
	var board = [	[$('#tl'), $('#tc'), $('#tr')],		
					[$('#ml'), $('#mc'), $('#mr')],		
					[$('#bl'), $('#bc'), $('#br')]		];									
	
	$('td').click(function(){
		var td = $(this);	

		if(td.hasClass(empty)){								
			
			if(turn == cross) 								//Place X							
				td.text("X");
			else 											//Place O
				td.text("O");	

			td.removeClass(empty);							//Change class
			td.addClass(turn);
				
			if(hasWon())									//Declare if winner
				showWinner();

			alternate();
		}

		else
			alert("This space has been claimed");			//Occupied space
			
	});

	$('button').click(function(){
		reset();
	});

	
	function hasWon(){
		for(var i = 0; i < 3; i++){
			
			if(board[i][0].hasClass(turn)	&& 	board[i][1].hasClass(turn) 	&& 	board[i][2].hasClass(turn))		//Horizontal
				return true
			else if(board[0][i].hasClass(turn) && 	board[1][i].hasClass(turn) 	&& 	board[2][i].hasClass(turn))	//Vertical
				return true;
		}
		
		if(board[0][0].hasClass(turn) && 	board[1][1].hasClass(turn) 	&& 	board[2][2].hasClass(turn))			//Diagonal
			return true;
		else if(board[0][2].hasClass(turn) && 	board[1][1].hasClass(turn) 	&& 	board[2][0].hasClass(turn)) 				
			return true;	
		
		return false;																							//No win
		
	}
	
	
	function reset(){
		for(var i = 0; i < 3; i++){
			for(var j = 0; j < 3; j++){
				
				if(board[i][j].hasClass(circle))
					board[i][j].removeClass(circle);
	
				else if(board[i][j].hasClass(cross))
					board[i][j].removeClass(cross);
					
				board[i][j].addClass(empty);
				board[i][j].text(" ");
			}	
		}	
	}	

	function alternate(){
		if(turn == cross) 															
			turn = circle;
		else 										
			turn = cross;	
	}

	function showWinner(){
		if(turn == cross)
			winner = "X";
		else
			winner = "O";

		for(var i = 0; i < 3; i++){
			for(var j = 0; j < 3; j++){

				if(board[i][j].hasClass(circle))
					board[i][j].removeClass(circle);
				else if(board[i][j].hasClass(cross))
					board[i][j].removeClass(cross);
				else 
					board[i][j].removeClass(empty);
				
				board[i][j].addClass(turn);
				board[i][j].text(winner);
			}	
		}
	}

});	


	

