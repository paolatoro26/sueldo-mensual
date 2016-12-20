	
	var horas, pago, dias;

	horas = prompt("por favor , ingresa las horas trabajadas por dia ")
	
	pago = prompt("por favor, ingresa el pago por hora de trabajo")

	dias = prompt("por favor, ingresa los dias trabajados en la semana")

	resultado= parseInt(horas) * parseInt(pago) * parseInt(dias)
	alert(resultado);	
	