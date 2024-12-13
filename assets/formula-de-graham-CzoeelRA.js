import{d as g,k as i,a as m,e,n as v,u as r,t as f,b,q as s,o as c}from"./app-Bk8ct-Ba.js";import{u as P}from"./vue.8fc199ce-M9SuzfDr.js";import{a as t,f as y,u as n}from"./formatter-DWb2Yiwn.js";const A={class:"mx-auto px-10 xl:px-0 space-y-16 max-w-screen-lg mt-4 mb-20"},V={class:"space-y-10"},h={class:"flex flex-col gap-6 bg-gray-50 p-8 border border-gray-200 rounded-md"},L={class:"flex flex-col gap-1"},q=["value"],G={class:"flex flex-col gap-1"},w=["value"],I={class:"flex flex-col gap-1"},R={class:"flex rounded-sm border border-gray-300"},j=["value"],k={class:"flex flex-col gap-1"},z={class:"flex rounded-sm border border-gray-300"},$=["value"],B={key:0,class:"flex flex-col gap-6 bg-gray-50 p-10 border border-gray-200 rounded-md"},N={class:"bg-zinc-700 p-5 text-white text-center rounded-sm col-span-2"},S={class:"font-bold text-xl"},F=g({name:"GrahamPage",__name:"formula-de-graham",setup(_){P({title:"Fórmula de Graham - Tools Invest"});const a=i({PL:"15,00",PVP:"1,50",LPA:null,VPA:null}),d=i(null);function p(){if(!a.value.LPA||!a.value.VPA)return;const u=n(a.value.PL),l=n(a.value.PVP),o=n(a.value.LPA),x=n(a.value.VPA);d.value=Math.sqrt(u*l*o*x)}return(u,l)=>(c(),m("div",A,[e("main",V,[e("div",h,[l[11]||(l[11]=e("header",null,[e("h1",{class:"text-2xl font-bold"},"Fórmula de Graham"),e("p",null,"Insira os indicadores e calcule o valor intrínseco de uma ação")],-1)),e("form",{class:"grid grid-cols-2 gap-5",onSubmit:v(p,["prevent"])},[e("div",L,[l[4]||(l[4]=e("label",{class:"text-sm"},"P/L (Preço sobre Lucro)",-1)),e("input",{type:"text",placeholder:"15",class:"h-10 px-3 rounded-sm border border-gray-300 placeholder:text-gray-400",onInput:l[0]||(l[0]=o=>a.value.PL=r(t)(o.target.value)),value:a.value.PL},null,40,q)]),e("div",G,[l[5]||(l[5]=e("label",{class:"text-sm"},"P/VP (Preço sobre Valor Patrimonial)",-1)),e("input",{type:"text",placeholder:"1,5",class:"h-10 px-3 rounded-sm border border-gray-300 placeholder:text-gray-400",onInput:l[1]||(l[1]=o=>a.value.PVP=r(t)(o.target.value)),value:a.value.PVP},null,40,w)]),e("div",I,[l[7]||(l[7]=e("label",{class:"text-sm"},"LPA (Lucro por Ação)",-1)),e("div",R,[l[6]||(l[6]=e("span",{class:"w-12 flex items-center border-r border-gray-300 justify-center bg-gray-100"}," R$ ",-1)),e("input",{placeholder:"0,00",class:"h-10 px-3 w-full placeholder:text-gray-400",onInput:l[2]||(l[2]=o=>a.value.LPA=r(t)(o.target.value)),value:a.value.LPA},null,40,j)])]),e("div",k,[l[9]||(l[9]=e("label",{class:"text-sm"},"VPA (Valor Patrimonial por Ação)",-1)),e("div",z,[l[8]||(l[8]=e("span",{class:"w-12 flex items-center border-r border-gray-300 justify-center bg-gray-100"}," R$ ",-1)),e("input",{type:"text",placeholder:"0,00",class:"h-10 px-3 w-full placeholder:text-gray-400",onInput:l[3]||(l[3]=o=>a.value.VPA=r(t)(o.target.value)),value:a.value.VPA},null,40,$)])]),l[10]||(l[10]=e("button",{type:"submit",class:"h-10 col-span-2 rounded-sm text-white bg-zinc-700"}," Calcular ",-1))],32)]),d.value?(c(),m("div",B,[l[12]||(l[12]=e("header",null,[e("h2",{class:"text-2xl font-bold"},"Resultado"),e("p",null,"Esse resultado corresponde ao valor intrínseco de uma ação")],-1)),e("div",N,[e("p",S,f(r(y)(d.value)),1)])])):b("",!0)]),l[13]||(l[13]=e("section",{class:"space-y-4"},[e("h2",{class:"text-3xl font-bold"},"Quem foi Benjamin Graham?"),e("p",{class:"text-lg leading-relaxed"},[s(" Benjamin Graham é considerado o "),e("strong",null,"Value Investing"),s(". Ele foi um investidor, economista e professor, conhecido por ensinar fundamentos de análise de ações e investimento seguro. Graham escreveu dois livros icônicos: "),e("strong",null,'"O Investidor Inteligente"'),s(" e "),e("strong",null,'"Security Analysis"'),s(", que influenciaram gerações de investidores, incluindo "),e("strong",null,"Warren Buffett"),s(", um de seus alunos mais famosos. ")])],-1)),l[14]||(l[14]=e("section",{class:"space-y-4"},[e("h2",{class:"text-3xl font-bold"},"Como funciona a fórmula de Graham?"),e("p",{class:"text-lg leading-relaxed"}," A fórmula de Graham é uma ferramenta simples e eficaz para calcular o valor intrínseco de uma ação. A fórmula original é: "),e("math",{class:"text-3xl py-5",display:"block"},[e("mi",null,"V"),e("mo",null,"="),e("msqrt",null,[e("mrow",null,[e("mn",null,"22.5"),e("mo",null,"×"),e("mi",null,"LPA"),e("mo",null,"×"),e("mi",null,"VPA")])])]),e("p",{class:"text-lg leading-relaxed"}," Explicando cada termo "),e("ul",{class:"list-disc list-inside text-lg leading-relaxed"},[e("li",null,"V: Valor intrínseco da ação - o preço justo estimado."),e("li",null," LPA (Lucro por Ação): representa o lucro líquido da empresa dividido pelo número total de ações. "),e("li",null," VPA (Valor Patrimonial por Ação): corresponde ao patrimônio líquido da empresa dividido pelo número total de ações. "),e("li",null," 22.5: Um fator que Graham determinou como adequado, combinando um múltiplo máximo de 15 para o P/L (Preço/Lucro) e de 1.5 para o P/VP (Preço/Valor Patrimonial). ")])],-1)),l[15]||(l[15]=e("section",{class:"space-y-4"},[e("h2",{class:"text-3xl font-bold"},"Para que serve o Número de Graham?"),e("p",{class:"text-lg leading-relaxed"},[s(" A fórmula de Graham é uma ferramenta que calcula o valor justo de uma ação com base nos lucros e no patrimônio da empresa. O resultado desse cálculo pode ser comparado ao preço atual de mercado para ajudar os investidores a identificar oportunidades de investimento. "),e("br"),e("br"),s(" De acordo com a fórmula, se o preço de mercado de uma ação estiver abaixo do valor calculado, isso indica que a ação está "),e("strong",null,"subvalorizada"),s(", podendo ser uma boa oportunidade de compra. Por outro lado, se o preço de mercado for superior ao valor calculado, a ação pode estar "),e("strong",null,"supervalorizada"),s(", sugerindo maior cautela ao investir. ")])],-1)),l[16]||(l[16]=e("section",{class:"space-y-4"},[e("h2",{class:"text-3xl font-bold"},"Exemplo Prático"),e("p",{class:"text-lg leading-relaxed"}," Imagine uma ação com os seguintes indicadores: "),e("ul",{class:"list-disc list-inside text-lg leading-relaxed"},[e("li",null," LPA (Lucro por Ação): R$ 5,00 "),e("li",null," VPA (Valor Patrimonial por Ação): R$ 20,00 ")]),e("br"),e("p",null," Aplicando a fórmula: "),e("math",{class:"text-3xl py-5",display:"block"},[e("mi",null,"V"),e("mo",null,"="),e("msqrt",null,[e("mrow",null,[e("mn",null,"22.5"),e("mo",null,"×"),e("mn",null,"5"),e("mo",null,"×"),e("mn",null,"20")])]),e("mo",null,"="),e("msqrt",null,[e("mn",null,"2250")]),e("mo",null,"="),e("mn",null,"47.43")]),e("p",{class:"text-lg leading-relaxed"}," O valor intrínseco calculado (V) é aproximadamente R$ 47,43. Agora, comparando com o preço atual de mercado: "),e("ul",{class:"list-disc list-inside"},[e("li",null," Se o preço de mercado for R$ 40,00: A ação está subvalorizada, sugerindo uma possível oportunidade de compra. "),e("li",null," Se o preço de mercado for R$ 50,00: A ação está supervalorizada, o que exige mais cautela. ")])],-1))]))}});export{F as default};
