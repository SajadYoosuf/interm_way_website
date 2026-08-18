import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("keeps the landing page server-rendered with focused SEO content", async () => {
  const [page, layout] = await Promise.all([
    readFile(new URL("app/page.tsx", root), "utf8"),
    readFile(new URL("app/layout.tsx", root), "utf8"),
  ]);

  assert.doesNotMatch(page, /^"use client"/);
  assert.match(page, /International hospitality internships\./);
  assert.match(page, /<h1>/);
  assert.match(page, /<LeadForm \/>/);
  assert.match(page, /Vietnam · Hong Kong · Denmark/);
  assert.match(page, /internwayint@gmail\.com/);
  assert.match(page, /internway-student-journey\.mp4/);
  assert.match(layout, /metadataBase/);
  assert.match(layout, /application\/ld\+json/);
  assert.match(layout, /ProfessionalService/);
  assert.match(layout, /internwayint@gmail\.com/);
});

test("provides first-party crawl controls and social metadata", async () => {
  const [robots, sitemap, layout] = await Promise.all([
    readFile(new URL("app/robots.ts", root), "utf8"),
    readFile(new URL("app/sitemap.ts", root), "utf8"),
    readFile(new URL("app/layout.tsx", root), "utf8"),
  ]);

  assert.match(robots, /sitemap/);
  assert.match(sitemap, /priority:\s*1/);
  assert.match(layout, /summary_large_image/);
  assert.match(layout, /\/og\.png/);
});
