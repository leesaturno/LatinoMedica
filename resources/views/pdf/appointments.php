<!-- View stored in resources/views/greeting.php -->

<html>
<style>
table {
	font: 11px/24px Verdana, Arial, Helvetica, sans-serif;
	border-collapse: collapse;
	width: 320px;
	}

th {
	padding: 0 0.5em;
	text-align: left;
	}

tr.yellow td {
	border-top: 1px solid #FB7A31;
	border-bottom: 1px solid #FB7A31;
	background: #FFC;
	}

td {
	border-bottom: 1px solid #CCC;
	padding: 0 0.5em;
	}

td.width {
	width: 190px;
	}

td.adjacent {
	border-left: 1px solid #CCC;
	text-align: center;
	}
</style>
    <body>
        <table>
			<thead>
				<tr>
					<?php foreach ($appointmentKeys as $appointmentKey) { ?>
						<th><?php echo $appointmentKey; ?></th>
					<?php } ?>
				</tr>
			</thead>
			<tbody>
				<?php foreach ($appointments as $appointmentValue) { ?>
					<tr>
						<?php foreach ($appointmentValue as $appointment) { ?>
							<td><?php echo $appointment; ?></td>
						<?php } ?>
					</tr>
				<?php } ?>
			</tbody>
        </table>
    </body>
</html>