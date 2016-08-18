var q_number=1,q_recent=0;

var answerarr = [];
myjson={
	"user": "nihar Sarkar",
	"roll": "1425789365",
	"phone": "91431245678",
	"address": "new town",
	"questions": [
	
	{"question": " What is your Name ?",
			"answer": {
				"one": "nihar",
				"two": "nilanjan",
				"three": "Raktim ",
				"four": "ishita ",
				"five": "others"
			},
			"status": 0,
			"view": 0,
			"temp": 0},
			
			{"question": " What is your Age ?",
			"answer": {
				"one": "14",
				"two": "18",
				"three": "21 ",
				"four": "20 ",
				"five": "25"
			},
			"status": 0,
			"view": 0,
			"temp": 0},
			
			{"question": " What is your address ?",
			"answer": {
				"one": "newtown",
				"two": "Teghoria",
				"three": "Baguiati ",
				"four": "Nagerbazar ",
				"five": "others"
			},
			"status": 0,
			"view": 0,
			"temp": 0},
			
			{"question": " What is your mobile number ?",
			"answer": {
				"one": "1254641198468",
				"two": "79879746164",
				"three": "8798616464 ",
				"four": "458654498466 ",
				"five": "49819194949"
			},
			"status": 0,
			"view": 0,
			"temp": 0},
			
			{"question": " how are u ?",
			"answer": {
				"one": "fine",
				"two": "Awesome",
				"three": "good ",
				"four": "Bad ",
				"five": "very bad"
			},
			"status": 0,
			"view": 0,
			"temp": 0},
			
			

	]

};

function generate(val){
	
	//schedule(q_number);
	
	setanswer(q_number);
	setstatus(q_number);
	
	if(val < myjson.questions.length){
		
	q_number=val;
	$('#question').html("");
	var temp=val+1;
	$('#question').append('<div id="qa-number" class="bold lft"> Question Number '+temp+'</div>');
	$('#question').append('<span class="bold lft">'+myjson.questions[val].question+'</span><br/>');
	$('#question').append('<input type="radio" id="q'+val+'a'+1+'" value="'+myjson.questions[val].answer.one+'" name="answer'+val+'"/>'+myjson.questions[val].answer.one+'<br/>');
	$('#question').append('<input type="radio" id="q'+val+'a'+2+'" value="'+myjson.questions[val].answer.two+'" name="answer'+val+'"/>'+myjson.questions[val].answer.two+'<br/>');
	$('#question').append('<input type="radio" id="q'+val+'a'+3+'" value="'+myjson.questions[val].answer.three+'" name="answer'+val+'"/>'+myjson.questions[val].answer.three+'<br/>');
	$('#question').append('<input type="radio" id="q'+val+'a'+4+'" value="'+myjson.questions[val].answer.four+'" name="answer'+val+'"/>'+myjson.questions[val].answer.four+'<br/>');
	$('#question').append('<input type="radio" id="q'+val+'a'+5+'" value="'+myjson.questions[val].answer.five+'" name="answer'+val+'"/>'+myjson.questions[val].answer.five+'<br/>');
	
	q_recent=val+1;
	reschedule(val);
	background_set();
	var mx=val+1;
	var select = "#chk"+mx;
	$(select).css('background-image','url(\'img/black-ico.png\')');
	}
	else{console.log("Here We got a Wrong Input  ! ");}
}


function clear_response(){
	$("#question input:radio").each(function(){
		$(this).attr('checked',false);
		});
}

function mark_review(){
	var temp='#chk'+q_recent;
	$(temp).css('background-image','url(\'img/blue-ico.png\')');
	$(temp).attr('review',1);
}
 
 function reschedule(val){
 		mx=val +1;
 	var select="#chk"+mx;
 	var temp= $(select).attr('answer');
 	var qa='#q'+val+'a'+temp;
 	$(qa).attr('checked','checked');
 }
 
 function setanswer(val){
 	mx=val +1;
 	var select="#chk"+mx;
 	
 	var ax,bx,cx,dx,ex;
 	ax='#q'+val+'a'+1;bx='#q'+val+'a'+2;cx='#q'+val+'a'+3;dx='#q'+val+'a'+4;ex='#q'+val+'a'+5;
 	if($(ax).attr('checked')=="checked"){
 		$(select).attr('answer',1);
 		console.log(select + "   "+ax);
 	}
 	else if($(bx).attr('checked')=="checked"){
 		$(select).attr('answer',2);console.log(select + "   "+bx);
 	}
 	else if($(cx).attr('checked')=="checked"){
 		$(select).attr('answer',3);console.log(select + "   "+cx);
 	}
 	else if($(dx).attr('checked')=="checked"){
 		$(select).attr('answer',4);console.log(select + "   "+dx);
 	}
 	else if($(ex).attr('checked')=="checked"){
 		$(select).attr('answer',5);console.log(select + "   "+ex);
 	}
 	else{
 		$(select).attr('answer',-1);
 	}
 }
 function at_check(){
 	
 	if($('#author1').length){
 		
 			$('#author1').css('display','block !important');
 		
 		
 	}
 	else{
 		$('#main').css('display','none');
 	}
 }
 function setstatus(val){
 	val++;
 	var select="#chk"+val;
 	if ($("#question input:radio:checked").length > 0){
 		
 		$(select).attr('status',2);
}
else
{
$(select).attr('status',1);
}
 }
 
 function background_set(){
answ=0,not_answ=0,not_viewed=0,review=0,save_review=0;
 	$('#toggle-answers input[type="button"]').each(function(){
 		if($(this).attr('status')==1 && $(this).attr('review')==0){
 			$(this).css('background-image','url(\'img/brown-ico.png\')');not_answ++; 
 		}
 		else if($(this).attr('status')==2 && $(this).attr('review')==0){
 			$(this).css('background-image','url(\'img/green-ico.png\')');answ++;
 		}
 		else if($(this).attr('status')==1 && $(this).attr('review')==1){
 			$(this).css('background-image','url(\'img/blue-ico.png\')');review++;
 		}
 		else if($(this).attr('status')==2 && $(this).attr('review')==1){
 			$(this).css('background-image','url(\'img/vio-icon.png\')');save_review++;
 		}
 		else if($(this).attr('status')==0 && $(this).attr('review')==0){
 		not_viewed++;
 		}
 		});
 		$('#not-ans').text(not_answ);$('#not-view').text(not_viewed);$('#answered').text(answ);$('#review').text(review);
 		$('#rev-answered').text(save_review);
 }
 
 function num_count(){
 	$('#toggle-answers').each(function(){
 		var x=$(this).attr('status');var y=$(this).attr('review');
 		
 		
 		});
 }
 
  var newDateObj = new Date();
newDateObj.setTime(newDateObj.getTime() + (1 * 60 * 1000));//30minute time
console.log("Exam Started");
 function startTime() {
 	
 	
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
	var remain=newDateObj.getTime()-today.getTime();
	 m=Math.floor(remain/60000);
	 s=checkTime(Math.floor(((remain%60000))/1000));
	 //console.log(remain/1000);
	$('#remain-time').text(m+':'+s+'Minute(s)');
   
    delete today;
    var t = setTimeout(startTime, 500);
    if(remain<0)exam_done();
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
}
 
 function exam_done(){
 	$('#remain-time').text("Time Over");
 	$('#question').empty();
 }