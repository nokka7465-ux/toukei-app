import { glossary, type GlossaryTerm } from "@/data/glossary";

/** Convert a term to a URL slug.
 * - Strips whitespace, normalizes to NFC
 * - Returns the term itself; Next.js handles encoding for routing.
 *   `decodeURIComponent` on the params side recovers the original.
 */
export function termToSlug(term: string): string {
  return term.normalize("NFC").trim();
}

let _byTerm: Map<string, GlossaryTerm> | null = null;
let _bySlug: Map<string, GlossaryTerm> | null = null;
let _allUnique: GlossaryTerm[] | null = null;

function build() {
  if (_byTerm && _bySlug && _allUnique) return;
  _byTerm = new Map();
  _bySlug = new Map();
  _allUnique = [];
  for (const t of glossary) {
    const key = t.term;
    if (_byTerm.has(key)) continue; // keep first occurrence
    _byTerm.set(key, t);
    const slug = termToSlug(t.term);
    if (!_bySlug.has(slug)) _bySlug.set(slug, t);
    _allUnique.push(t);
  }
}

export function getGlossaryBySlug(slug: string): GlossaryTerm | undefined {
  build();
  // Try exact, then NFC-normalized
  return (
    _bySlug!.get(slug) ?? _bySlug!.get(slug.normalize("NFC").trim())
  );
}

export function getAllUniqueGlossaryTerms(): GlossaryTerm[] {
  build();
  return _allUnique!;
}

/** Find related terms (same category, excluding self), up to `max`. */
export function getRelatedTerms(
  current: GlossaryTerm,
  max = 8,
): GlossaryTerm[] {
  build();
  const out: GlossaryTerm[] = [];
  for (const t of _allUnique!) {
    if (t.term === current.term) continue;
    if (t.category === current.category) {
      out.push(t);
      if (out.length >= max) break;
    }
  }
  // Fall back to same level if not enough by category
  if (out.length < max) {
    for (const t of _allUnique!) {
      if (t.term === current.term) continue;
      if (out.includes(t)) continue;
      if (t.level === current.level) {
        out.push(t);
        if (out.length >= max) break;
      }
    }
  }
  return out;
}
