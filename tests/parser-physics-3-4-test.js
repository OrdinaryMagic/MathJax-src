import {ParserTest} from './parser-tests.js';
import 'mathjax3/input/tex/physics/PhysicsConfiguration.js';

class ParserPhysicsTest3_4 extends ParserTest {

  constructor() {
    super();
    this.packages = ['base', 'physics'];
  }
};

let parserTest = new ParserPhysicsTest3_4();


parserTest.runTest(
  'Operators_Exp_0', '\\sin x',
  {"kind":"math","texClass":1,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"fnOP":true},"childNodes":[{"kind":"text","text":"sin"}]},{"kind":"mo","texClass":-1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix"},"properties":{},"childNodes":[{"kind":"text","text":"⁡"}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"x"}]}],"isInferred":true}]}
);


parserTest.runTest(
  'Operators_Exp_1', '\\sin{x}',
  {"kind":"math","texClass":1,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"fnOP":true},"childNodes":[{"kind":"text","text":"sin"}]},{"kind":"mo","texClass":-1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix"},"properties":{},"childNodes":[{"kind":"text","text":"⁡"}],"isEmbellished":true},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"x"}]}],"isInferred":true}]}],"isInferred":true}]}
);


parserTest.runTest(
  'Operators_Exp_2', '\\sin[x]',
  {"kind":"math","texClass":1,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"msup","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"sin"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"x"}]}]}],"isInferred":true}]}
);


parserTest.runTest(
  'Operators_Exp_3', '\\sin[2]{x}',
  {"kind":"math","texClass":1,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"msup","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"fnOP":true},"childNodes":[{"kind":"text","text":"sin"}]},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[{"kind":"text","text":"2"}]}]},{"kind":"mo","texClass":-1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix"},"properties":{},"childNodes":[{"kind":"text","text":"⁡"}],"isEmbellished":true},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"x"}]}],"isInferred":true}]}],"isInferred":true}]}
);


parserTest.runTest(
  'Operators_Exp_4', '\\sin[2]x',
  {"kind":"math","texClass":1,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"msup","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"fnOP":true},"childNodes":[{"kind":"text","text":"sin"}]},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[{"kind":"text","text":"2"}]}]},{"kind":"mo","texClass":-1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix"},"properties":{},"childNodes":[{"kind":"text","text":"⁡"}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"x"}]}],"isInferred":true}]}
);


parserTest.runTest(
  'Operators_Exp_5', '\\sin[2]',
  {"kind":"math","texClass":1,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"msup","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"sin"}]},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[{"kind":"text","text":"2"}]}]}],"isInferred":true}]}
);


parserTest.runTest(
  'Operators_Exp_6', '\\sin|\\frac{x}{y}|',
  {"kind":"math","texClass":1,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"fnOP":true},"childNodes":[{"kind":"text","text":"sin"}]},{"kind":"mo","texClass":-1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix"},"properties":{},"childNodes":[{"kind":"text","text":"⁡"}],"isEmbellished":true},{"kind":"mo","texClass":0,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"|"}],"isEmbellished":true},{"kind":"mfrac","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"x"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"y"}]}]},{"kind":"mo","texClass":5,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"|"}],"isEmbellished":true}],"isInferred":true}]}
);


parserTest.runTest(
  'Operators_Exp_7', '\\sin[\\frac{x}{y}]',
  {"kind":"math","texClass":1,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"msup","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"sin"}]},{"kind":"mfrac","texClass":null,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"x"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"y"}]}]}]}],"isInferred":true}]}
);


parserTest.runTest(
  'Operators_Exp_8', '\\sin[\'](\\frac{x}{y})',
  {"kind":"math","texClass":1,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"msup","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"fnOP":true},"childNodes":[{"kind":"text","text":"sin"}]},{"kind":"msup","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[]},{"kind":"mo","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2,"form":"infix"},"properties":{},"childNodes":[{"kind":"text","text":"′"}],"isEmbellished":true}]}]},{"kind":"mo","texClass":-1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix"},"properties":{},"childNodes":[{"kind":"text","text":"⁡"}],"isEmbellished":true},{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"open":"(","close":")"},"childNodes":[{"kind":"mo","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true},{"kind":"mfrac","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"x"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"y"}]}]},{"kind":"mo","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true}]}],"isInferred":true}]}
);


parserTest.runTest(
  'Operators_Exp_9', '\\sin[\']{\\frac{x}{y}}',
  {"kind":"math","texClass":1,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"msup","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"fnOP":true},"childNodes":[{"kind":"text","text":"sin"}]},{"kind":"msup","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[]},{"kind":"mo","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2,"form":"infix"},"properties":{},"childNodes":[{"kind":"text","text":"′"}],"isEmbellished":true}]}]},{"kind":"mo","texClass":-1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix"},"properties":{},"childNodes":[{"kind":"text","text":"⁡"}],"isEmbellished":true},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mfrac","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"x"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"y"}]}]}],"isInferred":true}]}],"isInferred":true}]}
);


parserTest.runTest(
  'Operators_Exp_10', '\\sine(\\frac{x}{y})',
  {"kind":"math","texClass":1,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"fnOP":true},"childNodes":[{"kind":"text","text":"sin"}]},{"kind":"mo","texClass":-1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix"},"properties":{},"childNodes":[{"kind":"text","text":"⁡"}],"isEmbellished":true},{"kind":"mo","texClass":4,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true},{"kind":"mfrac","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"x"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"y"}]}]},{"kind":"mo","texClass":5,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true}],"isInferred":true}]}
);


parserTest.runTest(
  'Operators_Exp_11', '\\hypsine',
  {"kind":"math","texClass":1,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"sinh"}]}],"isInferred":true}]}
);


parserTest.runTest(
  'Operators_Exp_12', '\\log[2](x)',
  {"kind":"math","texClass":1,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"msup","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"fnOP":true},"childNodes":[{"kind":"text","text":"log"}]},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[{"kind":"text","text":"2"}]}]},{"kind":"mo","texClass":-1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix"},"properties":{},"childNodes":[{"kind":"text","text":"⁡"}],"isEmbellished":true},{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"open":"(","close":")"},"childNodes":[{"kind":"mo","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"x"}]},{"kind":"mo","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true}]}],"isInferred":true}]}
);


parserTest.runTest(
  'Operators_Exp_13', '\\ln[2](x)',
  {"kind":"math","texClass":1,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"msup","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"fnOP":true},"childNodes":[{"kind":"text","text":"ln"}]},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[{"kind":"text","text":"2"}]}]},{"kind":"mo","texClass":-1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix"},"properties":{},"childNodes":[{"kind":"text","text":"⁡"}],"isEmbellished":true},{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"open":"(","close":")"},"childNodes":[{"kind":"mo","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"x"}]},{"kind":"mo","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true}]}],"isInferred":true}]}
);


parserTest.runTest(
  'Operators_Exp_14', '\\exp[2](x)',
  {"kind":"math","texClass":1,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"fnOP":true},"childNodes":[{"kind":"text","text":"exp"}]},{"kind":"mo","texClass":-1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix"},"properties":{},"childNodes":[{"kind":"text","text":"⁡"}],"isEmbellished":true},{"kind":"mo","texClass":4,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"["}],"isEmbellished":true},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"2"}]},{"kind":"mo","texClass":5,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"]"}],"isEmbellished":true},{"kind":"mo","texClass":4,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"x"}]},{"kind":"mo","texClass":5,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true}],"isInferred":true}]}
);


parserTest.runTest(
  'Operators_Exp_15', '\\det[2](x)',
  {"kind":"math","texClass":1,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"fnOP":true},"childNodes":[{"kind":"text","text":"det"}]},{"kind":"mo","texClass":-1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix"},"properties":{},"childNodes":[{"kind":"text","text":"⁡"}],"isEmbellished":true},{"kind":"mo","texClass":4,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"["}],"isEmbellished":true},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"2"}]},{"kind":"mo","texClass":5,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"]"}],"isEmbellished":true},{"kind":"mo","texClass":4,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"x"}]},{"kind":"mo","texClass":5,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true}],"isInferred":true}]}
);


parserTest.runTest(
  'Operators_Exp_16', '\\Pr[2](x)',
  {"kind":"math","texClass":1,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"fnOP":true},"childNodes":[{"kind":"text","text":"Pr"}]},{"kind":"mo","texClass":-1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix"},"properties":{},"childNodes":[{"kind":"text","text":"⁡"}],"isEmbellished":true},{"kind":"mo","texClass":4,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"["}],"isEmbellished":true},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"2"}]},{"kind":"mo","texClass":5,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"]"}],"isEmbellished":true},{"kind":"mo","texClass":4,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"x"}]},{"kind":"mo","texClass":5,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true}],"isInferred":true}]}
);


parserTest.printTime();
