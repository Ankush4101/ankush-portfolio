import React from 'react';
/* import { ThemeContext } from 'styled-components'; */
import Box from '../../foundation/box';
import Link from '../link/link';

function Logo() {
  /* const themeContext = useContext(ThemeContext); */

  return (
    <Box
      zIndex="15"
    >
      <Link href="/" title="Home">

<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
width="68" height="60"  viewBox="0 0 389.000000 346.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,346.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M2074 3013 c-109 -224 -203 -415 -209 -426 -9 -17 -25 -19 -215 -22
-524 -9 -970 -132 -1317 -364 -84 -56 -259 -208 -250 -217 2 -2 44 18 93 46
250 141 583 244 949 295 136 19 615 33 615 17 0 -12 -118 -255 -650 -1337
-182 -370 -284 -582 -275 -574 3 4 189 274 414 600 362 527 429 634 377 602
-5 -3 -6 -1 -3 4 4 6 -1 14 -10 17 -15 6 -15 9 -3 16 9 6 18 3 25 -7 9 -12 14
-13 19 -4 4 6 11 9 15 7 4 -3 8 15 10 40 2 47 -14 61 -25 19 -3 -14 -10 -22
-15 -19 -5 3 -6 -1 -4 -8 3 -8 -2 -14 -13 -15 -12 -1 -18 5 -17 20 1 29 16 52
35 52 8 0 14 6 12 13 -1 6 5 12 13 12 9 0 15 9 15 24 0 31 -7 34 -45 25 -25
-5 -18 -14 8 -10 4 0 7 -4 7 -9 0 -6 -11 -10 -25 -10 -32 0 -34 31 -4 61 16
16 28 20 51 15 41 -8 57 -32 58 -83 0 -43 13 -57 24 -27 3 9 6 48 6 89 0 71 1
73 25 73 23 0 25 -4 23 -35 -1 -18 -10 -41 -20 -50 -10 -9 -18 -20 -18 -26 0
-17 80 88 211 278 72 105 134 196 139 204 6 12 25 11 119 -8 596 -119 1064
-388 1271 -731 89 -146 130 -326 110 -476 -27 -201 -119 -365 -303 -541 -227
-217 -555 -376 -997 -484 l-75 -19 90 6 c107 6 325 45 445 79 569 160 952 470
1066 865 26 91 26 327 0 420 -100 350 -412 669 -867 884 -63 29 -142 64 -175
76 l-61 22 -219 509 c-120 281 -221 512 -224 514 -4 2 -96 -179 -206 -402z
m333 -455 c34 -46 61 -83 60 -84 -7 -5 -207 42 -207 48 0 12 72 118 79 118 3
0 34 -37 68 -82z m-767 -882 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11
10 11 6 0 10 -2 10 -4z"/>
</g>
</svg>

{/* 

<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="60" height="50" viewBox="0 0 246.000000 295.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,295.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M750 2834 c-14 -2 -65 -9 -115 -15 -164 -19 -444 -84 -537 -124 -35
-15 -14 -15 242 0 105 6 404 -11 530 -30 453 -68 803 -217 1015 -431 92 -93
144 -175 183 -289 25 -75 27 -91 26 -250 0 -143 -4 -183 -22 -250 -57 -207
-221 -455 -404 -613 -221 -191 -571 -367 -888 -447 -106 -27 -200 -43 -200
-35 0 5 27 66 61 137 34 70 101 211 149 313 48 102 126 264 173 360 47 96 115
238 151 315 36 77 69 141 74 143 5 1 69 -100 142 -225 220 -376 273 -463 281
-469 5 -3 52 37 105 88 l97 94 -78 135 c-43 74 -156 269 -253 434 -96 165
-200 343 -231 396 -95 163 -74 168 -171 -37 -47 -98 -119 -248 -161 -334 l-76
-155 28 -9 c18 -6 29 -16 29 -27 0 -15 -5 -17 -30 -13 -32 7 -34 3 -30 -45 1
-20 -2 -23 -23 -19 -24 5 -29 -3 -73 -96 -54 -115 -136 -287 -225 -474 -34
-70 -85 -176 -114 -237 -29 -60 -83 -173 -120 -250 -100 -208 -145 -306 -145
-316 0 -27 403 0 610 41 588 116 1134 462 1415 894 99 152 161 308 190 475 22
123 20 363 -4 476 -60 278 -235 511 -503 668 -246 144 -528 215 -888 222 -102
2 -196 2 -210 -1z m238 -1465 c4 -46 -18 -69 -64 -69 -28 0 -34 4 -34 21 0 16
5 20 19 16 30 -7 46 9 43 43 -3 26 0 31 15 28 13 -2 19 -14 21 -39z"/>
<path d="M1951 579 l-93 -89 97 -168 c54 -92 113 -191 131 -219 l34 -53 144 0
c80 0 147 4 150 8 2 4 -63 124 -146 267 -82 143 -161 279 -174 303 -14 23 -30
42 -37 42 -7 -1 -54 -41 -106 -91z"/>
</g>
</svg>
 */}
      </Link>
    </Box>
  );
}

export default Logo;
