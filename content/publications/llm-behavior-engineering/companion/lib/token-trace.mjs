import { createHash } from "node:crypto";

function codePoints(text) {
  return Array.from(text.normalize("NFC"));
}

export function tokenizeByRuns(text) {
  return text.normalize("NFC").match(/[\p{L}\p{M}\p{N}]+|[^\s]/gu) ?? [];
}

export function tokenizeByPieces(text) {
  const tokens = [];
  for (const run of tokenizeByRuns(text)) {
    const chars = codePoints(run);
    if (/^[\p{L}\p{M}\p{N}]+$/u.test(run) && chars.length > 4) {
      for (let index = 0; index < chars.length; index += 3) tokens.push(chars.slice(index, index + 3).join(""));
    } else {
      tokens.push(run);
    }
  }
  return tokens;
}

export function renderTemplate(message, template) {
  return `${template.prefix}${message.text}${template.suffix}`;
}

export function traceMessage(message, template) {
  const rendered = renderTemplate(message, template);
  const runTokens = tokenizeByRuns(rendered);
  const pieceTokens = tokenizeByPieces(rendered);
  const availableInputUnits = template.maxUnits - template.reservedOutputUnits;
  return {
    id: message.id,
    language: message.language,
    rendered,
    tokenizers: {
      pedagogicalRuns: {count: runTokens.length, tokens: runTokens},
      pedagogicalPieces: {count: pieceTokens.length, tokens: pieceTokens}
    },
    budget: {
      maxUnits: template.maxUnits,
      reservedOutputUnits: template.reservedOutputUnits,
      availableInputUnits,
      runsOverflow: runTokens.length > availableInputUnits,
      piecesOverflow: pieceTokens.length > availableInputUnits
    },
    traceHash: createHash("sha256").update(JSON.stringify({message, template, runTokens, pieceTokens})).digest("hex")
  };
}

export function generationIdentity(config) {
  return createHash("sha256").update(JSON.stringify(config, Object.keys(config).sort())).digest("hex");
}
