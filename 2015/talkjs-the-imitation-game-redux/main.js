... inside port callback

	// simplified to make it..simpler
	var sp = new SerialPort(port.comName, baudrate, disconnectedCallback);

	sp.on("data", function(data) {
		...
		if (data[0] >= TOP && data[0] <= BOTTOM) {
			onSerialConnected(sp);
		}
		...
	});

...
