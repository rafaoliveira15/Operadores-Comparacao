# 📘 Operadores de Comparação em JavaScript

Projeto educacional desenvolvido para demonstrar, de forma prática e interativa, o funcionamento dos principais operadores de comparação em JavaScript.

Cada operador possui uma página HTML independente com interação via formulário e exibição detalhada do resultado.

---

## 🎯 Objetivo

Este projeto tem como finalidade:

- Demonstrar a diferença entre comparação simples e comparação estrita
- Explicar coerção de tipos no JavaScript
- Permitir testes práticos digitando valores diferentes
- Mostrar o resultado da operação em tempo real

---

## 🧠 Operadores Abordados

| Operador | Nome | O que faz |
|----------|------|-----------|
| == | Igualdade | Compara apenas o valor |
| === | Igualdade Estrita | Compara valor e tipo |
| != | Diferente | Verifica se os valores são diferentes |
| !== | Estritamente Diferente | Verifica diferença de valor ou tipo |
| > | Maior que | Verifica se o valor da esquerda é maior |
| >= | Maior ou igual | Verifica se o valor é maior ou igual |

---

## 📂 Estrutura do Projeto

```
📁 operadores-js
│
├── index1.html  → Operador ==
├── index2.html  → Operador ===
├── index3.html  → Operador !=
├── index4.html  → Operador !==
├── index5.html  → Operador >
├── index6.html  → Operador >=
│
└── script.js    → Lógica de comparação
```

---

## 🔎 Exemplo: Operador >

```javascript
function comparar() {

    let v1 = Number(document.getElementById("valor1").value);
    let v2 = Number(document.getElementById("valor2").value);

    let resultado = (v1 > v2);

    document.getElementById("resultado").innerHTML =
        "1️⃣ Comparando: " + v1 + " > " + v2 + "<br>" +
        "2️⃣ Resultado: " + resultado;
}
```

---

## ✔ O que o código faz

- Captura os valores digitados
- Converte para número usando `Number()`
- Realiza a comparação com `>`
- Exibe `true` ou `false` na tela

---

## 🔍 Diferença Entre == e ===

```javascript
"5" == 5   // true
"5" === 5  // false
```

- `==` faz conversão automática de tipo  
- `===` compara valor **e** tipo  

---

## 🧪 Exemplo de Teste

**Valor 1:**  
10  

**Valor 2:**  
5  

**Resultado do operador >:**  
true  

---

## 🛠️ Tecnologias Utilizadas

- HTML5  
- JavaScript (Vanilla JS)  
- Manipulação do DOM  

---

## 📚 Conceitos Trabalhados

- Coerção de tipos  
- Comparação simples vs estrita  
- Operadores relacionais  
- Manipulação do DOM  
- Eventos com `onclick`  

---

## 🚀 Como Executar

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/operadores-js.git
```

2. Abra qualquer arquivo `index.html` no navegador.

---

## 👩‍💻 Autora

**Rafaela Oliveira**  💙

Estudante de Desenvolvimento de Sistemas

