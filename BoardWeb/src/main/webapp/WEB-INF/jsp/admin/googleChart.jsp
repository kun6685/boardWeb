<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
 <script type="text/javascript">
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
			
      let dataAry = [];
			dataAry.push(['작성자', '작성건수']);
			
			
			fetch("countByMember.do") // method:'get', headers: '', body: ''
				.then(function(result) {
					return result.json(); // 문자열 -> 객체
				})
				.then(function(result) {
					console.log(result);
					result.forEach(member => {
						dataAry.push([member.member_name, member.member_cnt]);
					});
					google.charts.setOnLoadCallback(drawChart);
				})
			
      function drawChart() {

        var data = google.visualization.arrayToDataTable(dataAry);

        var options = {
          title: '작성자별 작성건수',
          // is3D: true,
          pieHole: 0.4
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
    </script>
<!-- googleChart.jsp -->
<h3>차트....</h3>
<div id="piechart" style="width: 900px; height: 500px;"></div>
