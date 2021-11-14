(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{383:function(t,a,s){"use strict";s.r(a);var n=s(23),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"arguments-and-accounts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arguments-and-accounts"}},[t._v("#")]),t._v(" Arguments and Accounts")]),t._v(" "),s("p",[t._v("This tutorial covers the basics of creating and mutating accounts using Anchor.\nIt's recommended to read "),s("RouterLink",{attrs:{to:"/tutorials/tutorial-0.html"}},[t._v("Tutorial 0")]),t._v(" first, as this tutorial will\nbuild on top of it.")],1),t._v(" "),s("h2",{attrs:{id:"clone-the-repo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clone-the-repo"}},[t._v("#")]),t._v(" Clone the Repo")]),t._v(" "),s("p",[t._v("To get started, clone the repo.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/project-serum/anchor\n")])])]),s("p",[t._v("Change directories to the "),s("a",{attrs:{href:"https://github.com/project-serum/anchor/tree/master/examples/tutorial/basic-1",target:"_blank",rel:"noopener noreferrer"}},[t._v("example"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" anchor/examples/tutorial/basic-1\n")])])]),s("p",[t._v("And install any additional JavaScript dependencies:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),s("h2",{attrs:{id:"defining-a-program"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#defining-a-program"}},[t._v("#")]),t._v(" Defining a Program")]),t._v(" "),s("p",[t._v("We define our program as follows")]),t._v(" "),s("div",{staticClass:"language-rs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("anchor_lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("prelude"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("declare_id!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[program]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mod")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token module-declaration namespace"}},[t._v("basic_1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("initialize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Context")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Initialize")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u64")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProgramResult")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" my_account "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accounts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("my_account"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        my_account"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ok")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Context")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Update")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u64")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProgramResult")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" my_account "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accounts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("my_account"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        my_account"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ok")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[derive(Accounts)]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[t._v("Initialize")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[t._v("'info")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[account(init, payer = user, space = 8 + 8)]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" my_account"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Account")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[t._v("'info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyAccount")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[account(mut)]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Signer")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[t._v("'info")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" system_program"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Program")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[t._v("'info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[derive(Accounts)]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[t._v("Update")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[t._v("'info")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[account(mut)]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" my_account"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Account")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[t._v("'info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyAccount")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[account]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[t._v("MyAccount")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u64")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Some new syntax elements are introduced here.")]),t._v(" "),s("h3",{attrs:{id:"initialize-instruction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#initialize-instruction"}},[t._v("#")]),t._v(" "),s("code",[t._v("initialize")]),t._v(" instruction")]),t._v(" "),s("p",[t._v("First, let's start with the initialize instruction. Notice the "),s("code",[t._v("data")]),t._v(" argument passed into the program. This argument and any other valid\nRust types can be passed to the instruction to define inputs to the program.")]),t._v(" "),s("p",[t._v("Additionally,\nnotice how we take a mutable reference to "),s("code",[t._v("my_account")]),t._v(" and assign the "),s("code",[t._v("data")]),t._v(" to it. This leads us to\nthe "),s("code",[t._v("Initialize")]),t._v(" struct, deriving "),s("code",[t._v("Accounts")]),t._v(". There are two things to notice about "),s("code",[t._v("Initialize")]),t._v(".")]),t._v(" "),s("ol",[s("li",[t._v("The "),s("code",[t._v("my_account")]),t._v(" field is of type "),s("code",[t._v("Account<'info, MyAccount>")]),t._v(" and the deserialized data structure is "),s("code",[t._v("MyAccount")]),t._v(".")]),t._v(" "),s("li",[t._v("The "),s("code",[t._v("my_account")]),t._v(" field is marked with the "),s("code",[t._v("init")]),t._v(" attribute. This will create a new\naccount owned by the current program, zero initialized. When using "),s("code",[t._v("init")]),t._v(", one must also provide\n"),s("code",[t._v("payer")]),t._v(", which will fund the account creation, "),s("code",[t._v("space")]),t._v(", which defines how large the account should be,\nand the "),s("code",[t._v("system_program")]),t._v(", which is required by the runtime for creating the account.")])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("DETAILS")]),t._v(" "),s("p",[t._v("All accounts created with Anchor are laid out as follows: "),s("code",[t._v("8-byte-discriminator || borsh serialized data")]),t._v(". The 8-byte-discriminator is created from the first 8 bytes of the\n"),s("code",[t._v("Sha256")]),t._v(" hash of the account's type--using the example above, "),s("code",[t._v('sha256("account:MyAccount")[..8]')]),t._v(".\nThe "),s("code",[t._v("account:")]),t._v(" is a fixed prefix.")]),t._v(" "),s("p",[t._v("Importantly, this allows a program to know for certain an account is indeed of a given type.\nWithout it, a program would be vulnerable to account injection attacks, where a malicious user\nspecifies an account of an unexpected type, causing the program to do unexpected things.")]),t._v(" "),s("p",[t._v("On account creation, this 8-byte discriminator doesn't exist, since the account storage is\nzeroed. The first time an Anchor program mutates an account, this discriminator is prepended\nto the account storage array and all subsequent accesses to the account (not decorated with\n"),s("code",[t._v("#[account(init)]")]),t._v(") will check for this discriminator.")])]),t._v(" "),s("h3",{attrs:{id:"update-instruction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update-instruction"}},[t._v("#")]),t._v(" "),s("code",[t._v("update")]),t._v(" instruction")]),t._v(" "),s("p",[t._v("Similarly, the "),s("code",[t._v("Update")]),t._v(" accounts struct is marked  with the "),s("code",[t._v("#[account(mut)]")]),t._v(" attribute.\nMarking an account as "),s("code",[t._v("mut")]),t._v(" persists any changes made upon exiting the program.")]),t._v(" "),s("p",[t._v("Here we've covered the basics of how to interact with accounts. In a later tutorial,\nwe'll delve more deeply into deriving "),s("code",[t._v("Accounts")]),t._v(", but for now, just know\nyou must mark an account "),s("code",[t._v("init")]),t._v(" when using it for the first time and "),s("code",[t._v("mut")]),t._v("\nfor persisting changes.")]),t._v(" "),s("h2",{attrs:{id:"creating-and-initializing-accounts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-and-initializing-accounts"}},[t._v("#")]),t._v(" Creating and Initializing Accounts")]),t._v(" "),s("p",[t._v("We can interact with the program as follows.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The program to execute.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" program "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" anchor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("workspace"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Basic1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The Account to create.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myAccount "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" anchor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("web3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Keypair"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("generate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create the new account and initialize it with the program.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" program"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rpc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initialize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("anchor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1234")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  accounts"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    myAccount"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" myAccount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("publicKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    user"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" provider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wallet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("publicKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    systemProgram"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" SystemProgram"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("programId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  signers"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("myAccount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])]),s("p",[t._v("The last element passed into the method is common amongst all dynamically generated\nmethods on the "),s("code",[t._v("rpc")]),t._v(" namespace, containing several options for a transaction. Here,\nwe specify the "),s("code",[t._v("accounts")]),t._v(" field, an object of all the addresses the transaction\nneeds to touch, and the "),s("code",[t._v("signers")]),t._v(" array of all "),s("code",[t._v("Signer")]),t._v(" objects needed to sign the\ntransaction. Because "),s("code",[t._v("myAccount")]),t._v(" is being created, the Solana runtime requries it\nto sign the transaction.")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("DETAILS")]),t._v(" "),s("p",[t._v("If you've developed on Solana before, you might notice two things 1) the ordering of the accounts doesn't\nmatter and 2) the "),s("code",[t._v("isWritable")]),t._v(" and "),s("code",[t._v("isSigner")]),t._v("\noptions are not specified on the account anywhere. In both cases, the framework takes care\nof these details for you, by reading the IDL.")])]),t._v(" "),s("p",[t._v("As before, we can run the example tests.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("anchor test\n")])])]),s("h2",{attrs:{id:"next-steps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[t._v("#")]),t._v(" Next Steps")]),t._v(" "),s("p",[t._v("We've covered all the basics of developing applications using Anchor. However, we've\nleft out one important aspect to ensure the security of our programs--validating input\nand access control. We'll cover that next.")])])}),[],!1,null,null,null);a.default=e.exports}}]);