module.exports = {
  // Type check TypeScript files
  '**/*.(js|jsx|ts|tsx)': () => 'yarn tsc --noEmit',

  // Lint then format TypeScript and JavaScript files
  '**/*.(js|jsx|ts|tsx)': (filenames) => [
    `yarn eslint --fix ${filenames.join(' ')}`,
    // `yarn stylelint --fix ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`
  ],

  // Format MarkDown and JSON
  '**/*.(md|json)': (filenames) =>
    `yarn prettier --write ${filenames.join(' ')}`
}
