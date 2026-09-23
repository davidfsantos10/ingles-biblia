# Origem das traduções bíblicas usadas no app

Este documento registra, para cada campo de tradução em `data/*.json`, de onde o texto veio, sob que licença, e como reproduzir a fonte exata usada — para que decisões futuras (correções, atualizações, auditorias) tenham essa informação disponível sem precisar investigar de novo.

## `en` — King James Version (KJV)

- **Fonte:** `seven1m/open-bibles` (GitHub), arquivo `eng-kjv.osis.xml`
- **Licença/status:** domínio público fora do Reino Unido; dentro do Reino Unido está sob Crown Copyright perpétuo (privilégio de impressão da Coroa Britânica, não um copyright de prazo limitado)
- **Observações:** texto padrão (Authorized Version, 1611/1769), confirmado por correspondência literal em auditoria textual
- **Data de obtenção original:** não registrada (importado antes deste documento existir)

## `en_web` — World English Bible (WEB)

- **Fonte:** `seven1m/open-bibles` (GitHub), arquivo `eng-web.usfx.xml`; distribuição oficial também disponível em `ebible.org/engwebp/`
- **Licença/status:** domínio público, dedicação explícita pelo tradutor-chefe (Michael Paul Johnson) e colaboradores via eBible.org. Uso comercial, redistribuição e modificação permitidos sem restrição; "World English Bible" é marca registrada (só relevante se o texto for alterado e ainda chamado por esse nome)
- **Observações:** confirmado por marcadores exclusivos ("Yahweh", "murder" em vez de "kill")
- **Data de obtenção original:** não registrada (importado antes deste documento existir)

## `en_bbe` — Bible in Basic English (BBE)

- **Fonte:** `seven1m/open-bibles` (GitHub), arquivo `eng-bbe.usfx.xml`
- **Licença/status:** domínio público nos EUA (publicação de 1949/1965 sem aviso de copyright, sob a Convenção Universal de Copyright vigente à época; a própria Cambridge University Press já admitiu esse status)
- **Observações:** vocabulário simplificado (~1000 palavras), confirmado por análise textual
- **Data de obtenção original:** não registrada (importado antes deste documento existir)

## `pt` — Bíblia Livre (BLIVRE)

- **Nome:** Bíblia Livre (sigla **BLIVRE**)
- **Variante:** `tr` (Textus Receptus) — não `n4` (Nestle 1904)
- **Autores/titulares:** Diego Santos, Mario Sérgio, e Marco Teles
- **Página oficial do projeto:** https://sites.google.com/site/biblialivre/
- **Repositório-fonte:** https://github.com/blivre/BibliaLivre
- **Tag usada:** `2018.2.0`
- **Commit apontado pela tag:** `a386942daee9984c654ebc8cea95ec9d3661b183`
- **Caminho-fonte:** `textos/f4/tr/*.txt` (66 arquivos, um por livro)
- **SHA-256 agregado dos 66 arquivos-fonte** (concatenados em ordem alfabética de nome de arquivo): `60880a05e4aa0cbf2753b320eb7cbed440da502306cfab8c3a0c830c9bc0147`
- **Licença:** Creative Commons Atribuição 3.0 Brasil (CC BY 3.0 BR) — texto de crédito conforme o README oficial do repositório:

  > Todas as Escrituras em português citadas são da Bíblia Livre (BLIVRE), Copyright © Diego Santos, Mario Sérgio, e Marco Teles, http://sites.google.com/site/biblialivre/ - fevereiro de 2018. Licença Creative Commons Atribuição 3.0 Brasil (http://creativecommons.org/licenses/by/3.0/br/). Reprodução permitida desde que devidamente mencionados fonte e autores.

  Observação: uma auditoria anterior encontrou, em um resultado de busca (não verificado diretamente por bloqueio de rede), uma menção a "CC BY 4.0" na página de distribuição do eBible.org (`porbr2018`). Essa divergência entre a licença declarada pela fonte primária (CC BY 3.0 BR, usada aqui) e a possível licença do eBible **não foi resolvida** — não foi possível acessar `ebible.org` para confirmar. O texto efetivamente importado neste projeto vem da tag oficial do GitHub, licenciada como CC BY 3.0 BR conforme acima.

- **Data da migração:** 23/09/2026

### Diferenças de versificação em relação à estrutura do app

O app usa 1.189 capítulos (estrutura derivada da numeração inglesa/KJV). A BLIVRE, na tag `2018.2.0`, tem os mesmos 66 livros e 1.189 capítulos, mas com **4 versículos** onde a contagem diverge:

| Referência (numeração do app) | Situação na BLIVRE | Tratamento |
|---|---|---|
| Juízes 5:32 | Conteúdo existe, mas fundido ao versículo 31 na fonte oficial | `pt` do v31 recebe o texto completo (v31+v32); `pt` do v32 é `null` |
| 3 João 1:15 | Conteúdo existe, mas fundido ao versículo 14 na fonte oficial | `pt` do v14 recebe o texto completo (v14+v15); `pt` do v15 é `null` |
| Apocalipse 12:18 | Conteúdo existe, mas deslocado para o início do capítulo 13 (13:1) na fonte oficial | `pt` do 12:18 é `null` (o texto correspondente foi mantido, sem duplicação, em revelation-13:1) |
| 1 Samuel 20:43 | Conteúdo genuinamente ausente na fonte oficial (não está em nenhum lugar do capítulo 20 nem do 21) | `pt` é `null` |

Em todos os quatro casos, `verse.pt` é `null` no JSON. Os campos `en`, `en_web` e `en_bbe` **não foram alterados** por essa migração — continuam com o texto que já tinham antes (que, nesses mesmos 4 pontos, já era `""` no campo `en`/`en_web`/`en_bbe`, uma característica pré-existente do dataset, não introduzida por esta migração).

A interface trata `pt: null` mostrando a mensagem "Este trecho não consta nesta edição da Bíblia Livre." — ver `getPortugueseDisplayText()` em `js/app.js`. Essa mensagem é só de exibição: não é salva como vocabulário, não entra em flashcards, não é lida por TTS e não aparece no recurso "Entender trecho" como se fosse tradução.

### Normalização técnica aplicada na conversão

Ao converter o formato-fonte (`.txt` interno da BLIVRE, com marcadores `\v`, `\fn`, `\added` etc.) para o campo `pt` do JSON:

- Removidas as notas de rodapé (`\fn...\*fn`) — conteúdo editorial, não faz parte do texto bíblico corrido.
- Removida a marcação `\added`/`\*added`, `\psalm-title`/`\*psalm-title`, `\ref`/`\*ref`, `\key`/`\*key` — preservando o texto que essas tags envolvem (ex.: palavras supridas pelo tradutor continuam no texto final, só sem o itálico/marcação).
- Normalizado o espaço em branco introduzido pela junção de linhas do arquivo-fonte, incluindo a remoção de um espaço espúrio que aparecia antes de pontuação (`,.;:!?`) sempre que uma quebra de linha existia apenas como delimitador de tag.
- **Não foi alterada nenhuma palavra, nem inserido espaço que não existisse por causa de uma tag.** Uma auditoria programática completa sobre os 31.102 versículos com `pt` preenchido encontrou **503 ocorrências, em 496 versículos**, de pontuação encostada diretamente na palavra seguinte, sem espaço (ex.: "...aqui.Porém Davi...") — divididas em ponto final (65), vírgula (333), ponto e vírgula (17), dois-pontos (33), interrogação (42) e exclamação (13). Confirmamos que isso já existe assim no arquivo-fonte original (não é um artefato da nossa conversão) e **preservamos exatamente como está**, sem tentar corrigir a formatação. Nenhum dos 73 versículos usados em "Versículo do dia"/Lições está entre os afetados. Detalhes da auditoria: ver relatório da tarefa de correção conservadora (23/09/2026).

### Como reproduzir esta fonte no futuro

```
git clone --branch 2018.2.0 https://github.com/blivre/BibliaLivre.git
# ou, sem clonar o repositório inteiro:
curl -O https://raw.githubusercontent.com/blivre/BibliaLivre/2018.2.0/textos/f4/tr/<livro>.txt
```

Sempre usar a tag `2018.2.0` (ou o commit `a386942daee9984c654ebc8cea95ec9d3661b183` diretamente) — nunca a branch `master`, que segue recebendo revisões não lançadas oficialmente e sem correspondência garantida com a licença aqui documentada.
