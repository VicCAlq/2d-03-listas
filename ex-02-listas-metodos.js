/* Questão 1
Usando let ao invés de const, crie uma lista vazia chamada profissoes. Usando o
método push, adicione nesta lista as profissões "programador(a)", "designer",
"engenheiro(a)", "veterinário(a)" e "administrador(a)". Após adicionar os itens,
envie a lista com as profissões adicionadas na resposta01.
*/
// Array na linha abaixo
let profissoes=[]
// Operações necessárias e resposta a partir da linha abaixo
profissoes.push("programador(a)");
profissoes.push("designer");
profissoes.push("engenheiro(a)");
profissoes.push("veterinário(a)");
profissoes.push("administrador(a)");
export const resposta01 = profissoes;

/* Questão 2
Continuando com a lista de profissões da questão 1, use o método pop para remover
o último item da lista e armazená-lo em uma variável. Envie esta variável na
resposta02.
*/
// Operações necessárias e resposta a partir da linha abaixo
let itemRemovidoQ2 = profissoes.pop()
export const resposta02 = itemRemovidoQ2

/* Questão 3
Seguindo com a mesma lista de profissões da questão 1, use o método unshift
para adicionar a profissão "músico(a)" no início da lista, e retorne
a lista completa na resposta03.
*/
// Operações necessárias e resposta a partir da linha abaixo
profissoes.unshift("músico(a)");
export const resposta03 = profissoes

/* Questão 4
Ainda com a lista da questão 1, crie uma nova variável e use o método "shift" 
na lista de profissões para remover o atual primeiro item da lista e guardá-lo
nesta variável. Envie a variável com a profissão removida na resposta04.
*/
// Operações necessárias e resposta a partir da linha abaixo
let itemRemovidoQ4 = profissoes.shift()
export const resposta04 = itemRemovidoQ4;

/* Questão 5
Continuando com a lista da questão 1, crie uma lista com as profissões removidas
pelos métodos "pop" e "shift" nas questões 2 e 4 (nesta exata ordem), e use o 
método "concat" na lista de profissões para adicionar esta nova lista no final 
da lista de profissões da questão 1. Envie a lista completa na resposta05
*/
// Operações necessárias e resposta a partir da linha abaixo
let removidas = [itemRemovidoQ2, itemRemovidoQ4]
profissoes = profissoes.concat(removidas)
export const resposta05 = profissoes

/* Questão 6
Finalizando com a lista da questão 1, use nela o método reverse para inverter
a ordem da lista, e envie a lista com sua ordem invertida na resposta06.
*/
// Operações necessárias e resposta a partir da linha abaixo
profissoes.reverse()
export const resposta06 = profissoes

/* Questão 7
Crie três listas vazias (usando let e não const), uma chamada "vertebrados", 
outra chamada "invertebrados", e a terceira chamada "animais". Use o método 
push para adicionar na lista de "vertebrados" os animais "elefante", "leopardo" 
e "porco-espinho", e na lista "invertebrados" use o mesmo método para adicionar 
os animais "polvo", "formiga" e "caranguejo". Por fim, use o método concat na 
lista "animais" para juntar o conteúdo das listas "vertebrado" e "invertebrado" 
dentro de si, nesta exata ordem, e retorne esta lista na resposta07.
*/
// Operações necessárias e resposta a partir da linha abaixo
let vertebrados=[]
let invertebrados=[]
let animais=[]
// Operações necessárias e resposta a partir da linha abaixo
vertebrados.push("elefante", "leopardo" ,"porco-espinho")
invertebrados.push("polvo", "formiga" , "caranguejo")
animais = animais.concat(vertebrados, invertebrados)
export const resposta07 = animais

/* Questão 8
Seguindo com a lista "animais" criada na questão 7, use os métodos pop e unshift
para fazer com que os animais inicialmente pertencentes a lista "invertebrados"
fiquem na frente dos animais inicialmente pertencentes a lista de "vertebrados".
Envie a lista animais modificada na resposta08.
*/
// Operações necessárias e resposta a partir da linha abaixo
animais.unshift(animais.pop())
animais.unshift(animais.pop())
animais.unshift(animais.pop())
export const resposta08 = animais

/* Questão 9
Ainda utilizando a lista "animais" da questão 7, use o método reverse na lista,
e após isso use os métodos shift e push para mover os três itens da frente para
o final da fila, um de cada vez. Envie a lista animais modificada na resposta09.
*/
// Operações necessárias e resposta a partir da linha abaixo
animais.reverse();
animais.push(animais.shift())
animais.push(animais.shift())
animais.push(animais.shift())
export const resposta09 = animais


/* Questão 10
Finalizando com a lista "animais" da questão 7, use o método concat na lista
para adicionar os animais "carcará", "morcego" e "salmão". Use o método reverse
na lista após adicionar estes animais, e use novamente o método concat para
adicionar os animais "lesma", "borboleta" e "ostra" no final da lista.
Envie a lista animais modificada na resposta10.
*/
// Operações necessárias e resposta a partir da linha abaixo
animais