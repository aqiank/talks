#define TOP (0)
#define MIDDLE (1)
#define BOTTOM (2)
#define TYPE (BOTTOM) // change this as appropriate

...

void setup() {
	Serial.begin(9600);
	Serial.write(TYPE);
	...
}

...
