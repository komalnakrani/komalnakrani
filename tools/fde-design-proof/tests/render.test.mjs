import assert from 'node:assert/strict';
import test from 'node:test';

import { proofPages } from '../content.mjs';
import { renderProofHtml } from '../render.mjs';

const html = renderProofHtml(proofPages, { stylesheet: 'theme.css' });

test('renders exactly 24 fixed proof pages', () => {
  assert.equal((html.match(/<section class="page /g) ?? []).length, 24);
  assert.match(html, /@page\s*\{[^}]*size:\s*7in 10in/s);
  assert.match(html, /<section class="page page--cover" data-page="1">/);
  assert.match(html, /<section class="page page--closing" data-page="24">/);
});

test('uses only local fonts and local assets', () => {
  assert.match(html, /fonts\/barlow-condensed\.ttf/);
  assert.match(html, /fonts\/source-sans-3\.ttf/);
  assert.match(html, /fonts\/ibm-plex-mono\.ttf/);
  assert.doesNotMatch(html, /(?:src|href)="https?:/i);
  assert.doesNotMatch(html, /\.(?:svg|webp)(?:["?#])/i);
});

test('preserves authorship, proof state, semantics, and page navigation', () => {
  assert.ok((html.match(/Komal Nakrani/g) ?? []).length >= 5);
  assert.match(html, /Design proof - not the published edition/);
  assert.match(html, /<h1>Forward Deployed Engineering<\/h1>/);
  assert.match(html, /<h2>Draw the Real System Boundary<\/h2>/);
  assert.equal((html.match(/class="folio"/g) ?? []).length, 23);
});

test('renders a selectable and accessible figure treatment', () => {
  assert.match(html, /<img[^>]+system-boundary-field\.png[^>]+alt="Dimensional system field/);
  assert.match(html, />CUSTOMER WORKFLOW</);
  assert.match(html, />EVIDENCE BOUNDARY</);
  assert.match(html, />DEPLOYED SERVICE</);
  assert.match(html, />EXTERNAL AUTHORITY</);
  assert.match(html, /<figcaption>Illustrative field model\./);
});

test('escapes supplied content before inserting it into HTML', () => {
  const unsafe = [{
    pageNumber: 1,
    kind: 'cover',
    title: '<script>alert(1)</script>',
    subtitle: 'A & B',
    author: 'Komal Nakrani',
    body: [],
  }];
  const escaped = renderProofHtml(unsafe, { stylesheet: 'theme.css' });
  assert.doesNotMatch(escaped, /<script>alert/);
  assert.match(escaped, /&lt;script&gt;alert\(1\)&lt;\/script&gt;/);
  assert.match(escaped, /A &amp; B/);
});
