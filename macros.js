MathJax.Hub.Config({
    TeX: {
      Macros: {
        
        Replace: ["\\left\\{ #1 \\!:\\ #2 \\in #3 \\right\\}", 3],
        Separat: ["\\left\\{ #1 \\in #2 \\,,\\ #3 \\right\\}", 3],
        Defined: ["\\left\\{ #1 \\!:\\ #2 \\in #3 \\,,\\ #4 \\right\\}", 4],

        Parenth: ["\\left( #1 \\right)", 1],
        Bracket: ["\\left[ #1 \\right]", 1],
        Curlies: ["\\left\\{ #1 \\right\\}", 1],
        Modulus: ["\\left| #1 \\right|", 1],

        DoubleP: ["\\left(\\!\\left( #1 \\!: #2 \\in #3 \\right)\\!\\right)", 3],
        DoubleB: ["\\left[\\!\\left[ #1 \\right]\\!\\right]", 1],
        DoubleC: ["\\left\\{\\!\\left\\{ #1 \\right\\}\\!\\right\\}", 1],
        DoubleM: ["\\left\\| #1 \\right\\|", 1],
        
        Quote: ["“\\ #1 \\ ” ", 1],
        Sharp: "⋕",
        Aster: "∗",

        MyForall: ["\\Parenth{\\forall #1 \\,,\\quad #2 }", 2],
        MyExists: ["\\Parenth{\\exists #1 \\!:\\quad #2 }", 2],

        myforall: ["\\forall #1 \\,,\\quad #2", 2],
        myexists: ["\\exists #1 \\!:\\quad #2", 2],
        
        MyLt: ["\\Parenth{ #1 < #2 }", 2],
        MyGt: ["\\Parenth{ #1 > #2 }", 2],
        MyLe: ["\\Parenth{ #1 ≤ #2 }", 2],
        MyGe: ["\\Parenth{ #1 ≥ #2 }", 2],
        MyEq: ["\\Parenth{ #1 = #2 }", 2],

        MyLlt: ["\\Parenth{ #1 < #2 < #3 }", 2],
        MyGgt: ["\\Parenth{ #1 > #2 > #3 }", 2],
        MyLle: ["\\Parenth{ #1 ≤ #2 ≤ #3 }", 2],
        MyGge: ["\\Parenth{ #1 ≥ #2 ≥ #3 }", 2],
        MyEqq: ["\\Parenth{ #1 = #2 = #3 }", 2],

        MyLllt: ["\\Parenth{ #1 < #2 < #3 < #4 }", 2],
        MyGggt: ["\\Parenth{ #1 > #2 > #3 > #4 }", 2],
        MyLlle: ["\\Parenth{ #1 ≤ #2 ≤ #3 ≤ #4 }", 2],
        MyGgge: ["\\Parenth{ #1 ≥ #2 ≥ #3 ≥ #4 }", 2],
        MyEqqq: ["\\Parenth{ #1 = #2 = #3 = #4 }", 4],

        mylt: [" #1 < #2 ", 2],
        mygt: [" #1 > #2 ", 2],
        myle: [" #1 ≤ #2 ", 2],
        myge: [" #1 ≥ #2 ", 2],
        myeq: [" #1 = #2 ", 2],

        myllt: [" #1 < #2 < #3 ", 3],
        myggt: [" #1 > #2 > #3 ", 3],
        mylle: [" #1 ≤ #2 ≤ #3 ", 3],
        mygge: [" #1 ≥ #2 ≥ #3 ", 3],
        myeqq: [" #1 = #2 = #3 ", 3],

        mylllt: [" #1 < #2 < #3 < #4 ", 4],
        mygggt: [" #1 > #2 > #3 > #4 ", 4],
        myllle: [" #1 ≤ #2 ≤ #3 ≤ #4 ", 4],
        myggge: [" #1 ≥ #2 ≥ #3 ≥ #4 ", 4],
        myeqqq: [" #1 = #2 = #3 = #4 ", 4],

        MyNe: ["\\Parenth{ #1 ≠ #2 }", 2],
        MyIn: ["\\Parenth{ #1 ∈ #2 }", 2],
        MyNi: ["\\Parenth{ #1 ∉ #2 }", 2],

        myne: [" #1 ≠ #2 ", 2],
        myin: [" #1 ∈ #2 ", 2],
        myni: [" #1 ∉ #2 ", 2],

        SameAs: ["\\Parenth{ #1 ⇔ #2 }", 2],
        IfThen: ["\\Parenth{ #1 ⇒ #2 }", 2],
        OnlyIf: ["\\Parenth{ #1 ⇐ #2 }", 2],
        GoesTo: ["\\Parenth{ #1 → #2 }", 2],
        IsFrom: ["\\Parenth{ #1 ← #2 }", 2],

        sameas: [" #1 ⇔ #2 ", 2],
        ifthen: [" #1 ⇒ #2 ", 2],
        onlyif: [" #1 ⇐ #2 ", 2],
        goesto: [" #1 → #2 ", 2],
        isfrom: [" #1 ← #2 ", 2],

        MyOConv: ["\\Parenth{ #1 ⊛ #2 }", 2],
        MyOProd: ["\\Parenth{ #1 ⊙ #2 }", 2],
        MyOPlus: ["\\Parenth{ #1 ⊕ #2 }", 2],
        MyOMult: ["\\Parenth{ #1 ⊗ #2 }", 2],
        MyOCirc: ["\\Parenth{ #1 ○ #2 }", 2],        
        MySConv: ["\\Parenth{ #1 ⧆ #2 }", 2],
        MySProd: ["\\Parenth{ #1 ⊡ #2 }", 2],
        MySPlus: ["\\Parenth{ #1 ⊞ #2 }", 2],
        MySMult: ["\\Parenth{ #1 ⊠ #2 }", 2],
        MySCirc: ["\\Parenth{ #1 □ #2 }", 2],

        myoconv: [" #1 ⊛ #2 ", 2],
        myoprod: [" #1 ⊙ #2 ", 2],
        myoplus: [" #1 ⊕ #2 ", 2],
        myomult: [" #1 ⊗ #2 ", 2],
        myocirc: [" #1 ○ #2 ", 2],
        mysconv: [" #1 ⧆ #2 ", 2],
        mysprod: [" #1 ⊡ #2 ", 2],
        mysplus: [" #1 ⊞ #2 ", 2],
        mysmult: [" #1 ⊠ #2 ", 2],
        myscirc: [" #1 □ #2 ", 2],

        MyPlus: ["\\Parenth{ #1 + #2 }", 2],
        MyMult: ["\\Parenth{ #1 × #2 }", 2],
        MyFunc: ["\\Parenth{ #1 \\hat{} #2 }", 2],
        MyCup: ["\\Parenth{ #1 ∪ #2 }", 2],
        MyCap: ["\\Parenth{ #1 ∩ #2 }", 2],
        MySetminus: ["\\Parenth{ #1 ∖ #2 }", 2],
        MyQuotient: ["\\Parenth{ #1 ∕ #2 }", 2],
        MyLan: ["\\Parenth{ #1 \\land #2 }", 2],
        MyLor: ["\\Parenth{ #1 \\lor #2 }", 2],
        MyNot: ["\\Parenth{\\lnot #1 }", 1],

        myplus: [" #1 + #2 ", 2],
        mymult: [" #1 × #2 ", 2],
        myfunc: [" #1 \\hat{} #2 ", 2],
        mycup: [" #1 ∪ #2 ", 2],
        mycap: [" #1 ∩ #2 ", 2],
        mysetminus: [" #1 ∖ #2 ", 2],
        myquotient: [" #1 ∕ #2 ", 2],
        mylan: [" #1 \\land #2 ", 2],
        mylor: [" #1 \\lor #2 ", 2],
        mynot: ["\\lnot #1 ", 1],

        MyBigMult: ["\\Parenth{\\mathop{\\Huge ×}_{ #1 \\in #2 } #3 }", 3],
        mybigmult: ["\\mathop{\\Huge ×}_{ #1 \\in #2 } #3 ", 3],
        MyBigProd: ["\\Parenth{\\prod_{ #1 \\in #2 } #3 }", 3],
        mybigprod: ["\\prod_{ #1 \\in #2 } #3 ", 3],
        MyBigCap: ["\\Parenth{\\bigcap_{ #1 \\in #2 } #3 }", 3],
        mybigcap: ["\\bigcap_{ #1 \\in #2 } #3 ", 3],
        MyBigCup: ["\\Parenth{\\bigcup_{ #1 \\in #2 } #3 }", 3],
        mybigcup: ["\\bigcup_{ #1 \\in #2 } #3 ", 3],
      }
    }
  });
