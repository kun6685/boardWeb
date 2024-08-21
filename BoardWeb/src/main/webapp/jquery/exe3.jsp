<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous">
  </script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  <script>
    $(function () {
    	$('#addLast').on('click', function(){
  		  $('tbody').append('<tr>' + '<td><input name="choice" type="radio"></td>' + '<td>' + $('#userId').val() + '</td>' + '<td>' + $('#userName').val() + '</td>' + '<td>' + $('#userAge').val() + '</td>');
  	  });
    })
    
    $(function () {
    	$('#addFirst').on('click', function(){
  		  $('tbody').prepend('<tr>' + '<td><input name="choice" type="radio"></td>' + '<td>' + $('#userId').val() + '</td>' + '<td>' + $('#userName').val() + '</td>' + '<td>' + $('#userAge').val() + '</td>');
  	  	// let newTr = $('<tr />').append(
  	  	// ,$('<td />')).append($('<input>').attr('type', 'radio').attr('name', 'choice')
  	  	// ,$('<td />')).html($('#userId').val())
  	  	// ,$('<td />')).html($('#userName').val())
  	  	// ,$('<td />')).html($('#userAge').val())
  	  	// );
  	  	
  	  	// let target = $('tbody input[type="radio"]:checked').parent();
  	  	// target.append(newTr);
    	});
    })
    
    $(function () {
  	$('#addSelected').on('click', function() {
    let newTr = $('<tr />').append(
      $('<td />')
      .append($('<input>').attr('type', 'radio').attr('name', 'choice')))
      .append($('<td />').html($('#userId').val()))
      .append($('<td />').html($('#userName').val()))
      .append($('<td />').html($('#userAge').val()));

    	let target = $('tbody input[type="radio"]:checked').parent().parent();
    	target.after(newTr);
  });
});
    
  </script>
</head>

<body>
  <div id="users">
    ID:<input type="text" id="userId">
    Name:<input type="text" id="userName">
    Age:<input type="text" id="userAge">
  </div>
  <div class="button">
    <button id="addLast">마지막에추가</button>
    <button id="addFirst">처음에추가</button>
    <button id="addSelected">선택된요소의다음에추가</button>
    <button id="clone">복제</button>
  </div>
  <hr>
  <div id="show">
    <table class="table">
      <thead>
        <tr>
          <th>선택</th>
          <th>id</th>
          <th>name</th>
          <th>age</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input name="choice" type="radio"></td>
          <td>101</td>
          <td>Hong</td>
          <td>22</td>
        </tr>
        <tr>
          <td><input name="choice" type="radio"></td>
          <td>102</td>
          <td>Hwang</td>
          <td>23</td>
        </tr>
      </tbody>
    </table>
  </div>
</body>

</html>