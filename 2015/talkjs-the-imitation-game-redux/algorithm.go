package main

import (
	"github.com/jackyb/enigma"
)

func main() {
	e := enigma.NewStandardEnigma()
	m := e.Encrypt("AAAAA")
	println(m)

	e = enigma.NewStandardEnigma()
	m = e.Encrypt(m)
	println(m)
}
