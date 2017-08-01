#!/usr/bin/env python3

import sys
import binascii


def to_utf8_unicode_point_string(arg):
    """Given a string, encode it as UTF-8 and return a human-readable
    unicode point representation. Example::

        >> to_utf8_unicode_point_string('A')
        U+41
        >> to_utf8_unicode_point_string('hi ルーカスǃ')
        U+686920e383abe383bce382abe382b9c783
    """
    return 'U+' + binascii.hexlify(arg.encode('utf8')).decode('ascii')

if __name__ == '__main__':
    arg = 'hi ルーカスǃ'
    if len(sys.argv) > 1:
        arg = sys.argv[1]
    print(to_utf8_unicode_point_string(arg))
