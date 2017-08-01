use std::fmt::Write;
use std::env;

// https://doc.rust-lang.org/std/string/struct.String.html
pub fn to_utf8_unicode_point_string(arg: String) -> String {
    let mut res = String::new();
    if arg.len() == 0 {
        return res;
    }

    write!(&mut res, "U+").expect("Cannot create hexstring");
    for &byte in arg.as_bytes() {
        write!(&mut res, "{:x}", byte).expect("Unable to create hex representation");
    }
    return res;
}

fn main() {
    let mut arg = String::from("hi ルーカスǃ");
    for (i, a) in env::args().enumerate() {
        if i == 1 {
            arg = a;
        }
    }
    let res = to_utf8_unicode_point_string(arg);
    println!("{}", res);
}
