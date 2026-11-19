export function toCsv(rows) {
  const header = ['key', 'title', 'points', 'status', 'closedOn'];
  const lines = rows.map((row) => header.map((column) => escape(row[column])).join(','));
  return [header.join(','), ...lines].join('\n');
}

function escape(value) {
  const text = value === undefined || value === null ? '' : String(value);
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

export function formatClosedOn(date) {
  return date.toISOString().slice(0, 10);
}
