package main

import (
	"encoding/hex"
	"fmt"
	"os"
)

// toUtf8UnicodePointString takes a string and returns
// it as a string representation of unicode points.
// One example is "hi ルーカスǃ" returning "U+686920e383abe383bce382abe382b9c783".
// As golang strings are always encoded as UTF-8 (cf. https://blog.golang.org/strings),
// no encoding conversion are required, but "t" must be a valid UTF-8 string,
// which is not guaranteed by golang.
func toUtf8UnicodePointString(t string) string {
	if t == "" {
		return ""
	}

	return "U+" + hex.EncodeToString([]byte(t))
}

func main() {
	var arg string
	if len(os.Args) <= 1 {
		arg = "hi ルーカスǃ"
	} else {
		arg = os.Args[1]
	}

	fmt.Println(toUtf8UnicodePointString(arg))
}
