---
title: Tweaking Support Widget Results
excerpt: How to customize and improve the support widget's search results
categories:
- Internal
---

# Tweaking Support Widget Results

This guide covers how to customize and improve the support widget's search results.

## Search Dictionary

The primary way to improve results is through the search dictionary at `_widget/src/components/app/dictionary.js`.

### Query Redirections

Map common user searches to more effective search terms:

```javascript
"add user": "multiple team",
"cancel": "unsubscribe",
"email": "email mx record"
```

### Synonyms and Variations

Handle common variations and abbreviations:

```javascript
"2fa": "mfa",
"park": "host deactivate resolving inactive disable"
```

### Direct URL Mappings

Link specific queries directly to articles:

```javascript
"https://support.dnsimple.com/articles/a-record/": /record_type=a/
```

### Category Searches

Use the `cat:` prefix to match categories:

```javascript
"cat:SSL Certificates": /ssl|certificate/,
"cat:Domain Transfers": /transfer|push/
```

---

## Scoring Parameters

Adjust result ranking by editing constants in `_widget/src/components/app/search.js`:

| Parameter | Default | Purpose |
|-----------|---------|---------|
| `MAX_RESULTS` | 7 | Maximum results shown |
| `GOOD_SCORE` | 20 | Threshold for "good" matches |
| `MIN_SCORE` | 10 | Minimum score when good results exist |
| `LOWER_MIN_SCORE` | 1 | Fallback minimum if no good results |

### How Scoring Works

```
score = (titleMatches / titleLength) * 500 + (bodyMatches / bodyLength) * 750
```

- Title matches are weighted heavily (500x multiplier)
- Body matches contribute with 750x multiplier
- Results filtered based on whether any "good" results exist

---

## Priority Files

For manual curation, use priority YAML files via `lib/priorities.rb`:

1. Create a file at `priorities/{name}.yaml`
2. List article paths in desired order
3. Listed items appear first, others follow alphabetically

---

## Widget Configuration

Set these `data-*` attributes where the widget loads:

```html
<!-- Prioritize results from a specific site -->
data-dnsimple-current-site-url="https://dnsimple.com"

<!-- Set the default article shown -->
data-dnsimple-getting-started-url="https://support.dnsimple.com/articles/getting-started/"

<!-- Customize which sources to search -->
data-dnsimple-sources='[
  {"name": "DNSimple Support", "url": "https://support.dnsimple.com"},
  {"name": "Developer Docs", "url": "https://developer.dnsimple.com"}
]'
```

---

## Common Tweaks

**Results not showing for a term?**
Add a dictionary mapping from the user's term to words that appear in the target article.

**Wrong article ranking first?**
Increase the target article's title relevance or add it to a priority file.

**Too few results?**
Lower `MIN_SCORE` or `GOOD_SCORE` in search.js.

**Too many irrelevant results?**
Raise `MIN_SCORE` or lower `MAX_RESULTS`.
