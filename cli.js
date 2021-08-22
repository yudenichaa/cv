/**
 * Commands:
 * component [component name]
 */

const path = require('path');
const fs = require('fs');

const options = process.argv.slice(2);
const command = options[0];
if (!command) {
  console.error('no command provided');
} else {
  switch (command) {
    case 'component': {
      const componentName = options[1];
      createComponent(componentName);
      break;
    }
    default: {
      console.error(`Unknown command "${command}"`);
    }
  }
}

function createComponent(componentName) {
  if (!componentName) {
    console.error('Component name required');
    return;
  }
  const componentsFolderPath = path.join(__dirname, 'src/components');
  if (!fs.existsSync(componentsFolderPath)) {
    fs.mkdirSync(componentsFolderPath);
  }
  const componentFolder = path.join(componentsFolderPath, componentName);
  if (fs.existsSync(componentFolder)) {
    console.error(`Conponent "${componentName}" exists`);
    return;
  }
  fs.mkdirSync(componentFolder);
  fs.writeFileSync(
    path.join(componentFolder, 'index.ts'),
    `export { default } from './${componentName}';`
  );
  const componentNameKebabCase = componentName
    .match(/[A-Z][a-z]+/g)
    .map((word) => word.toLowerCase())
    .join('-');
  fs.writeFileSync(
    path.join(componentFolder, `${componentNameKebabCase}.module.scss`),
    `.${componentNameKebabCase} {

}
`
  );
  fs.writeFileSync(
    path.join(componentFolder, `${componentName}.tsx`),
    `import styles from './${componentNameKebabCase}.module.scss';
import cn from 'classnames';

export default function ${componentName}() {
  return <p>${componentName}</p>;
}`
  );
}
