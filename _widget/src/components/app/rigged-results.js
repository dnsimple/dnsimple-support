import yml from './rigged-results.yml?raw';

function parseSimpleYaml(text) {
  const result = {};
  let currentKey = null;

  for (const line of text.split('\n')) {
    const keyMatch = line.match(/^([^-#][^:]*):$/);
    const itemMatch = line.match(/^\s+-\s+(.+)$/);

    if (keyMatch) {
      currentKey = keyMatch[1];
      result[currentKey] = [];
    } else if (itemMatch && currentKey) 
      result[currentKey].push(itemMatch[1]);
    
  }

  return result;
}

export default parseSimpleYaml(yml);
